import { get } from "svelte/store";
import { GoogleGenAI } from "@google/genai";
import { assessmentData } from "$lib/stores/assessment";
import { techCategories } from "$lib/data/assessment-options";
import type { AssessmentData } from "$lib/types/assessment";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateAssessment() {
  const data = get(assessmentData);

  const currentScore = assessmentData.calculateTechScore(data.techStack);

  console.log("DATA", data, "curr score", currentScore);

  try {
    const prompt = buildPrompt(data, currentScore);

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt
    });

    console.log("RESPONSE", response);

    const assessment = parseAssessmentResponse(
      response.text,
      data,
      currentScore
    );

    return assessment;
  } catch (err) {
    throw new Error(`Assessment generation failed: ${err}`);
  }
}

function buildPrompt(data: AssessmentData, currentScore: number) {
  const { industry, size, revenue, businessGoals, businessModel, painPoints } =
    data;

  const techStackDescription = Object.entries(data.techStack)
    .map(([key, level]) => {
      const category = techCategories.find((cat) => cat.key === key);
      const levelInfo = category?.levels[level - 1];
      return `${category?.title}: ${levelInfo} (Level ${level}/4)`;
    })
    .join("\n");

  return `
    You are a senior digital transformation consultant. Analyze this company's digital readiness and provide actionable recommendations.

    COMPANY PROFILE:
    - Industry: ${industry}
    - Size: ${size}
    - Revenue: ${revenue}
    - Business Model: ${businessModel}

    CURRENT TECHNOLOGY STACK:
    ${techStackDescription}

    PAIN POINTS:
    ${painPoints.map((point) => `- ${point}`).join("\n")}

    BUSINESS GOALS:
    ${businessGoals.map((goal) => `- ${goal}`).join("\n")}

    CURRENT DIGITAL MATURITY SCORE: ${currentScore}/10

    Please provide your analysis in this EXACT JSON format:

    {
      "executiveSummary": "2-3 sentence overview of current state and biggest opportunity",
      "maturityScore": ${currentScore},
      "industryComparison": {
        "percentile": 45,
        "benchmark": "Below average for ${industry} companies",
        "leadersScore": 8.5
      },
      "keyFindings": [
        "Most critical insight about their current state",
        "Biggest opportunity for improvement",
        "Main competitive risk if they don't transform"
      ],
      "roadmap": {
        "phase1": {
          "title": "Foundation (0-6 months)",
          "budget": "25000-45000",
          "initiatives": [
            {
              "name": "Initiative name",
              "description": "What it involves",
              "impact": "Expected business impact",
              "cost": "5000-10000"
            }
          ]
        },
        "phase2": {
          "title": "Optimization (6-12 months)", 
          "budget": "40000-75000",
          "initiatives": [
            {
              "name": "Initiative name",
              "description": "What it involves", 
              "impact": "Expected business impact",
              "cost": "15000-25000"
            }
          ]
        },
        "phase3": {
          "title": "Innovation (12-18 months)",
          "budget": "50000-100000", 
          "initiatives": [
            {
              "name": "Initiative name",
              "description": "What it involves",
              "impact": "Expected business impact", 
              "cost": "20000-40000"
            }
          ]
        }
      },
      "roiProjection": {
        "totalInvestment": "115000-220000",
        "annualSavings": "180000-350000",
        "paybackMonths": 8,
        "threeYearROI": "245%"
      },
      "riskAssessment": {
        "low": ["Risk that's manageable"],
        "medium": ["Risk requiring attention"], 
        "high": ["Critical risk to address"]
      },
      "quickWins": [
        {
          "initiative": "Easy win initiative",
          "timeframe": "30-60 days", 
          "cost": "Low cost",
          "impact": "Immediate benefit"
        }
      ],
      "nextSteps": [
        "Immediate action to take",
        "Key decision to make",
        "Resource to secure"
      ]
    }

    Focus on practical, industry-specific recommendations. Use realistic budget ranges for ${size} companies. Ensure ROI calculations are conservative but compelling.
  `;
}

function parseAssessmentResponse(
  responseText: string | undefined,
  data: AssessmentData,
  currentScore: number
) {
  if (!responseText) throw new Error("Unable to parse response");

  try {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);

      return {
        ...parsed,
        metadata: {
          generatedAt: new Date().toISOString(),
          inputData: data,
          calculatedScore: currentScore
        }
      };
    }
  } catch (err) {
    throw new Error(`Failed to parse AI response: ${err}`);
  }

  return null;
}
