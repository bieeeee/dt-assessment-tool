import { techCategories } from "$lib/data/assessment-options";
import type { AssessmentData } from "$lib/types/assessment";

export function buildPrompt(data: AssessmentData, currentScore: number) {
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
    You are a senior AI transformation consultant with deep expertise in ${industry} companies of ${size?.label} size.

    Analyze this company's AI readiness and provide actionable, industry-specific AI transformation recommendations:

    COMPANY PROFILE:
    - Industry: ${industry}
    - Size: ${size?.value} (${size?.label})
    - Revenue: ${revenue}
    - Business Model: ${businessModel}

    CURRENT AI READINESS ASSESSMENT:
    ${techStackDescription}

    PAIN POINTS:
    ${painPoints.map((point) => `- ${point}`).join("\n")}

    BUSINESS GOALS:
    ${businessGoals.map((goal) => `- ${goal}`).join("\n")}

    CURRENT AI READINESS SCORE: ${currentScore}/10

    ANALYSIS INSTRUCTIONS:
    1. Research typical AI adoption levels for ${industry} companies
    2. Determine realistic AI implementation budget ranges for ${size.value} (${size?.label}) companies in this industry
    3. Calculate where this ${currentScore}/10 score ranks within ${industry} industry AI adoption percentiles
    4. Assess AI transformation opportunities relevant to ${industry} operations
    5. Provide multiple options for risks (2-4 per category) and quick wins (2-3 items)
    6. Create detailed, implementable AI roadmap with realistic timelines and costs
    7. Ensure all recommendations are specific to ${industry} AI use cases

    CRITICAL REQUIREMENTS:
    - Industry percentile must reflect actual ${industry} AI adoption standards
    - Budget recommendations must be appropriate for ${size.value} (${size?.label}) ${industry} companies
    - Include 2-3 AI initiatives per roadmap phase with realistic cost breakdowns
    - Provide 2-4 risk items per category (low/medium/high)
    - Suggest 2-3 AI quick wins with varying timeframes
    - All ROI calculations must be conservative yet compelling for this industry/size

    Provide your analysis in this JSON format:

    {
      "executiveSummary": "2-3 sentences about current AI state and primary AI transformation opportunity for this ${industry} company",
      "maturityScore": ${currentScore},
      "industryComparison": {
        "percentile": "[Calculate realistic percentile for ${currentScore}/10 score in ${industry} industry AI adoption]",
        "benchmark": "[Dynamic description: 'Well below/Below/At/Above average for ${industry} companies in AI readiness']",
        "leadersScore": "[Research: What AI readiness score do leading ${industry} companies typically achieve?]"
      },
      "aiReadiness": {
        "currentState": "[Brief assessment of company's current AI adoption level - None/Basic/Moderate/Advanced]",
        "opportunities": [
          "[Top AI opportunity for ${industry} operations - e.g., process automation, predictive analytics]",
          "[Secondary AI application relevant to their pain points]"
        ],
        "competitiveGap": "[1-2 sentences about AI adoption risks in ${industry} if they don't act]"
      },
      "keyFindings": [
        "[Critical insight about current ${industry}-specific operations and AI potential]",
        "[Biggest AI-enhanced improvement opportunity for ${size?.value} ${industry} company]", 
        "[Industry-specific competitive risk if no AI transformation occurs]"
      ],
      "roadmap": {
        "phase1": {
          "title": "AI Foundation (0-6 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} AI foundation phase]",
          "initiatives": [
            {
              "name": "[Critical AI foundation initiative for ${industry}]",
              "description": "[Detailed AI implementation approach specific to industry needs]",
              "impact": "[Measurable business impact from AI implementation]",
              "cost": "[Realistic cost portion of phase budget]"
            },
            {
              "name": "[Second essential AI foundation element]", 
              "description": "[Another critical AI capability for ${industry} operations]",
              "impact": "[Expected operational improvement from AI]",
              "cost": "[Remaining budget allocation]"
            }
          ]
        },
        "phase2": {
          "title": "AI Integration (6-12 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} AI integration phase]",
          "initiatives": [
            {
              "name": "[Advanced AI capability building for ${industry}]",
              "description": "[AI-powered process improvement focused on industry pain points]",
              "impact": "[Efficiency or productivity impact from AI]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[AI automation or intelligence initiative]",
              "description": "[AI system integration specific to ${industry} workflows]", 
              "impact": "[Process efficiency or revenue impact from AI capabilities]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[Third AI optimization opportunity]",
              "description": "[Additional AI capability relevant to business goals]",
              "impact": "[Measurable business outcome from AI]", 
              "cost": "[Budget allocation]"
            }
          ]
        },
        "phase3": {
          "title": "AI Innovation (12-18 months)",
          "budget": "[Research appropriate range for ${size?.value} ${industry} AI innovation phase]",
          "initiatives": [
            {
              "name": "[Advanced AI technology for ${industry}]", 
              "description": "[Industry-leading AI technology implementation]",
              "impact": "[Strategic competitive advantage through AI]",
              "cost": "[Budget allocation]"
            },
            {
              "name": "[Advanced AI analytics or machine learning specific to industry]",
              "description": "[Advanced AI/ML addressing ${industry} challenges - predictive, prescriptive, or generative AI]",
              "impact": "[Predictive insights or operational intelligence through AI]",
              "cost": "[Budget allocation]"
            }
          ]
        }
      },
      "roiProjection": {
        "totalInvestment": "[Sum of realistic AI implementation budgets for ${size?.value} company]",
        "annualSavings": "[Calculate conservative AI-driven efficiency savings for ${size?.value} ${industry} company]",
        "paybackMonths": "[Realistic AI payback period based on industry standards: typically 6-18 months]",
        "threeYearROI": "[Conservative but compelling ROI percentage including AI productivity gains for this industry/size]"
      },
      "riskAssessment": {
        "low": ["Risk that's manageable", "AI tool adoption learning curve"],
        "medium": ["Risk requiring attention", "Data quality requirements for AI"], 
        "high": ["Critical risk to address", "AI competitive disadvantage if competitors adopt first"]
      },
      "quickWins": [
        {
          "initiative": "[Immediate ${industry}-relevant AI improvement - e.g., ChatGPT for content, AI scheduling tools]",
          "timeframe": "[2-4 weeks realistic timeframe]",
          "cost": "[Very low cost - under $1000, AI SaaS tools]", 
          "impact": "[Quick, visible productivity gain through AI automation]"
        },
        {
          "initiative": "[Simple AI tool or process automation for ${industry}]",
          "timeframe": "[4-6 weeks implementation]",
          "cost": "[Low cost - $1000-5000 range for AI platforms/tools]",
          "impact": "[Measurable operational improvement through AI capabilities]"
        },
      ],
      "nextSteps": [
        "[Immediate AI readiness assessment or team training needed]",
        "[Key AI strategy decision or pilot project for next 30 days]", 
        "[Specific AI preparation needed before Phase 1 implementation - data readiness, team upskilling, etc.]"
      ]
    }

    IMPORTANT: 
    - Base all percentile calculations on real ${industry} industry AI adoption research
    - Budget ranges should reflect actual costs for ${size?.value} companies in ${industry}, including realistic AI tool/platform costs
    - Every recommendation must address specific ${industry} AI use cases and operational challenges
    - ROI projections must include realistic AI-driven productivity gains and cost savings
    - Include AI competitive risks - what happens if competitors adopt AI first
    - Focus on practical, implementable AI solutions that solve real business problems
    - Avoid AI buzzwords - emphasize concrete business value from AI adoption
    - Return ONLY valid JSON, no markdown formatting, no code blocks, no additional text.

    Generate detailed, implementable AI transformation recommendations that this company could realistically execute.
  `;
}

export function parseAssessmentResponse(
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
