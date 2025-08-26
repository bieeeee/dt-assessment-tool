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
    You are a senior digital transformation consultant with deep expertise in ${industry} companies of ${size?.label} size.

    Analyze this company's digital readiness and provide actionable, industry-specific recommendations:

    COMPANY PROFILE:
    - Industry: ${industry}
    - Size: ${size?.value} (${size?.label})
    - Revenue: ${revenue}
    - Business Model: ${businessModel}

    CURRENT TECHNOLOGY STACK:
    ${techStackDescription}

    PAIN POINTS:
    ${painPoints.map((point) => `- ${point}`).join("\n")}

    BUSINESS GOALS:
    ${businessGoals.map((goal) => `- ${goal}`).join("\n")}

    CURRENT DIGITAL MATURITY SCORE: ${currentScore}/10

    ANALYSIS INSTRUCTIONS:
    1. Research typical digital maturity levels for ${industry} companies
    2. Determine realistic budget ranges for ${size.value} (${size?.label}) companies in this industry
    3. Calculate where this ${currentScore}/10 score ranks within ${industry} industry percentiles
    4. Provide multiple options for risks (2-4 per category) and quick wins (2-3 items)
    5. Create detailed, implementable roadmap with realistic timelines and costs
    6. Ensure all recommendations are specific to ${industry} operational needs

    CRITICAL REQUIREMENTS:
    - Industry percentile must reflect actual ${industry} digital maturity standards
    - Budget recommendations must be appropriate for ${size.value} (${size?.label}) ${industry} companies
    - Include 2-3 initiatives per roadmap phase with realistic cost breakdowns
    - Provide 2-4 risk items per category (low/medium/high)
    - Suggest 2-3 quick wins with varying timeframes
    - All ROI calculations must be conservative yet compelling for this industry/size

    Provide your analysis in this JSON format:

    {
      "executiveSummary": "2-3 sentences about current state and primary transformation opportunity for this ${industry} company",
      "maturityScore": ${currentScore},
      "industryComparison": {
        "percentile": "[Calculate realistic percentile for ${currentScore}/10 score in ${industry} industry]",
        "benchmark": "[Dynamic description: 'Well below/Below/At/Above average for ${industry} companies']",
        "leadersScore": "[Research: What score do leading ${industry} companies typically achieve?]"
      },
      "keyFindings": [
        "[Critical insight about current ${industry}-specific operations]",
        "[Biggest improvement opportunity for ${size?.value} ${industry} company]", 
        "[Industry-specific competitive risk if no transformation occurs]"
      ],
      "roadmap": {
        "phase1": {
          "title": "Foundation (0-6 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} foundation phase]",
          "initiatives": [
            {
              "name": "[Critical foundation initiative for ${industry}]",
              "description": "[Detailed implementation approach specific to industry needs]",
              "impact": "[Measurable business impact]",
              "cost": "[Realistic cost portion of phase budget]"
            },
            {
              "name": "[Second essential foundation element]", 
              "description": "[Another critical capability for ${industry} operations]",
              "impact": "[Expected operational improvement]",
              "cost": "[Remaining budget allocation]"
            }
          ]
        },
        "phase2": {
          "title": "Optimization (6-12 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} optimization phase]",
          "initiatives": [
            {
              "name": "[Advanced capability building for ${industry}]",
              "description": "[Process improvement focused on industry pain points]",
              "impact": "[Efficiency or compliance impact]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[Integration or automation initiative]",
              "description": "[System integration specific to ${industry} workflows]", 
              "impact": "[Process efficiency or revenue impact]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[Third optimization opportunity]",
              "description": "[Additional capability relevant to business goals]",
              "impact": "[Measurable business outcome]", 
              "cost": "[Budget allocation]"
            }
          ]
        },
        "phase3": {
          "title": "Innovation (12-18 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} innovation phase]",
          "initiatives": [
            {
              "name": "[Advanced technology for ${industry}]", 
              "description": "[Industry-leading technology implementation]",
              "impact": "[Strategic competitive advantage]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[Data analytics or AI specific to industry]",
              "description": "[Advanced analytics addressing ${industry} challenges]",
              "impact": "[Predictive insights or operational intelligence]",
              "cost": "[Budget allocation]"
            }
          ]
        }
      },
      "roiProjection": {
        "totalInvestment": "[Sum of realistic phase budgets for ${size?.value} company]",
        "annualSavings": "[Calculate conservative savings potential for ${size?.value} ${industry} company]",
        "paybackMonths": "[Realistic payback period based on industry standards: typically 6-24 months]",
        "threeYearROI": "[Conservative but compelling ROI percentage for this industry/size]"
      },
      "riskAssessment": {
        "low": ["Risk that's manageable"],
        "medium": ["Risk requiring attention"], 
        "high": ["Critical risk to address"]
      },
      "quickWins": [
        {
          "initiative": "[Immediate ${industry}-relevant improvement]",
          "timeframe": "[2-4 weeks realistic timeframe]",
          "cost": "[Very low cost - under $1000]", 
          "impact": "[Quick, visible productivity gain]"
        },
        {
          "initiative": "[Simple tool or process improvement]",
          "timeframe": "[4-6 weeks implementation]",
          "cost": "[Low cost - $1000-5000 range]",
          "impact": "[Measurable operational improvement]"
        },
      ],
      "nextSteps": [
        "[Immediate assessment or stakeholder action needed]",
        "[Key decision or resource requirement for next 30 days]", 
        "[Specific preparation needed before Phase 1 implementation]"
      ]
    }

    IMPORTANT: 
    - Base all percentile calculations on real ${industry} industry digital maturity research
    - Budget ranges should reflect actual costs for ${size?.value} companies in ${industry}
    - Every recommendation must address specific ${industry} operational challenges
    - ROI projections must be researched and realistic for this industry/company size
    - Avoid generic responses - make everything specific to the company profile provided
    - Return ONLY valid JSON, no markdown formatting, no code blocks, no additional text.

    Generate detailed, implementable recommendations that this company could realistically execute.
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
