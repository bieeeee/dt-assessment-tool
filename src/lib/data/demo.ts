export const manufacturingDemoData = {
  executiveSummary:
    "This 200-employee manufacturing company exhibits moderate AI readiness (4.2/10) with significant opportunities in predictive maintenance and automated quality control. The primary AI transformation opportunity lies in implementing IoT sensors with machine learning for equipment monitoring, automated production planning, and real-time quality assurance systems.",
  maturityScore: 4.2,
  industryComparison: {
    percentile: "35th",
    benchmark: "Below average for manufacturing companies in AI adoption",
    leadersScore: 8.3
  },
  aiReadiness: {
    currentState: "Basic",
    opportunities: [
      "Predictive maintenance AI to reduce equipment downtime by 40%",
      "Computer vision for automated quality inspection and defect detection"
    ],
    competitiveGap:
      "Without AI adoption, the company risks losing contracts to competitors using AI-driven predictive maintenance and real-time quality monitoring, potentially losing 15-20% market share within 2 years."
  },
  keyFindings: [
    "Manual equipment monitoring and reactive maintenance create unnecessary downtime, costing an estimated $180K annually in lost production time.",
    "Implementing AI-powered predictive maintenance and computer vision quality control offers the greatest potential for cost reduction and efficiency gains.",
    "Without AI transformation, the company faces competitive disadvantage against AI-adopting manufacturers who can offer 99.5% uptime guarantees and real-time quality metrics to customers."
  ],
  roadmap: {
    phase1: {
      title: "AI Foundation (0-6 months)",
      budget: "$45,000-75,000",
      initiatives: [
        {
          name: "IoT Sensor Network Deployment",
          description:
            "Install smart sensors on critical machinery to collect temperature, vibration, and performance data. Establish data pipeline for AI model training and real-time monitoring.",
          impact:
            "Foundation for predictive analytics and 25% reduction in data collection time",
          cost: "$25,000-40,000"
        },
        {
          name: "Basic AI Analytics Platform",
          description:
            "Implement cloud-based AI analytics platform with pre-built manufacturing models for equipment monitoring and production optimization.",
          impact:
            "Real-time visibility into equipment health and 15% improvement in maintenance scheduling efficiency",
          cost: "$20,000-35,000"
        }
      ]
    },
    phase2: {
      title: "AI Integration (6-12 months)",
      budget: "$75,000-150,000",
      initiatives: [
        {
          name: "Predictive Maintenance AI System",
          description:
            "Deploy machine learning models to predict equipment failures 2-4 weeks in advance. Integrate with maintenance scheduling and inventory management systems.",
          impact:
            "40% reduction in unplanned downtime and 30% decrease in maintenance costs",
          cost: "$35,000-70,000"
        },
        {
          name: "Computer Vision Quality Control",
          description:
            "Implement AI-powered visual inspection systems using computer vision to detect defects in real-time during production processes.",
          impact:
            "60% reduction in quality defects and 50% faster defect detection",
          cost: "$25,000-50,000"
        },
        {
          name: "AI-Powered Production Optimization",
          description:
            "Use machine learning algorithms to optimize production schedules, resource allocation, and workflow efficiency based on historical and real-time data.",
          impact:
            "20% increase in overall equipment effectiveness (OEE) and improved resource utilization",
          cost: "$15,000-30,000"
        }
      ]
    },
    phase3: {
      title: "AI Innovation (12-18 months)",
      budget: "$100,000-200,000",
      initiatives: [
        {
          name: "Advanced AI Manufacturing Intelligence",
          description:
            "Implement advanced AI models for supply chain optimization, demand forecasting, and autonomous quality adjustments using reinforcement learning.",
          impact:
            "25% improvement in supply chain efficiency and autonomous quality control adjustments",
          cost: "$60,000-120,000"
        },
        {
          name: "AI-Driven Customer Intelligence Platform",
          description:
            "Deploy AI systems to analyze customer usage patterns, predict maintenance needs for delivered products, and enable proactive customer service.",
          impact:
            "30% increase in customer satisfaction and new revenue streams through predictive services",
          cost: "$40,000-80,000"
        }
      ]
    }
  },
  roiProjection: {
    totalInvestment: "$220,000-425,000",
    annualSavings: "$285,000-450,000",
    paybackMonths: "8-12",
    threeYearROI: "215%"
  },
  riskAssessment: {
    low: [
      "AI model accuracy requiring fine-tuning period",
      "Staff training requirements for new AI tools"
    ],
    medium: [
      "Data quality issues affecting AI model performance",
      "Integration complexity with existing manufacturing systems",
      "Change management resistance from floor operators"
    ],
    high: [
      "AI competitive disadvantage if competitors implement first",
      "Cybersecurity vulnerabilities from connected IoT sensors"
    ]
  },
  quickWins: [
    {
      initiative:
        "Deploy ChatGPT for technical documentation and maintenance procedures",
      timeframe: "1-2 weeks",
      cost: "$200-500",
      impact:
        "20% faster technical problem resolution and improved knowledge sharing"
    },
    {
      initiative:
        "Implement AI-powered scheduling assistant for maintenance planning",
      timeframe: "3-4 weeks",
      cost: "$2,000-5,000",
      impact:
        "30% improvement in maintenance resource allocation and scheduling efficiency"
    },
    {
      initiative:
        "Basic predictive analytics dashboard using existing machine data",
      timeframe: "4-6 weeks",
      cost: "$5,000-8,000",
      impact:
        "Early warning system for potential equipment issues and improved decision-making"
    }
  ],
  nextSteps: [
    "Conduct AI readiness assessment of current equipment and identify optimal sensor placement locations",
    "Secure leadership buy-in for AI transformation initiative and establish cross-functional AI steering committee",
    "Pilot IoT sensor deployment on highest-value production equipment and begin data collection for AI model training"
  ],
  metadata: {
    generatedAt: new Date().toISOString(),
    inputData: {
      industry: "manufacturing",
      size: "medium",
      revenue: "10m-100m",
      businessModel: "b2b",
      techStack: {
        dataManagement: 2,
        aiAdoption: 1,
        processAutomation: 2,
        teamReadiness: 2,
        infrastructureReadiness: 2
      },
      painPoints: [
        "Repetitive manual tasks consuming too much time",
        "Inefficient decision-making processes",
        "Difficulty staying competitive with AI-adopting competitors"
      ],
      businessGoals: [
        "Automate repetitive tasks",
        "Increase team productivity",
        "Reduce operational costs through AI"
      ]
    },
    calculatedScore: 4.2,
    assessmentType: "AI_TRANSFORMATION",
    demoData: true
  }
};

export const technologyDemoData = {
  executiveSummary:
    "This 50-employee SaaS startup demonstrates solid AI readiness (6.8/10) with strong technical foundation and basic AI tool adoption. The primary AI transformation opportunity lies in implementing customer intelligence AI, automated customer success workflows, and AI-powered product optimization to accelerate growth and improve user retention.",
  maturityScore: 6.8,
  industryComparison: {
    percentile: "65th",
    benchmark: "Above average for technology companies in AI adoption",
    leadersScore: 9.2
  },
  aiReadiness: {
    currentState: "Moderate",
    opportunities: [
      "Customer intelligence AI to predict churn and expansion opportunities",
      "AI-powered product analytics for automated A/B testing and feature optimization"
    ],
    competitiveGap:
      "While currently above average, rapid AI adoption in the SaaS space means falling behind within 12-18 months without advanced AI implementation. Competitors using AI-driven customer success are achieving 25% higher retention rates."
  },
  keyFindings: [
    "Strong technical foundation with cloud-native architecture, but underutilizing AI for customer intelligence and product optimization, missing potential 20% improvement in user retention.",
    "Implementing advanced customer AI and automated product optimization offers the greatest potential for scaling operations while maintaining high-touch customer experience.",
    "Without enhanced AI-driven customer success and product intelligence, the company risks losing competitive advantage to AI-first competitors in customer acquisition and retention efficiency."
  ],
  roadmap: {
    phase1: {
      title: "AI Foundation (0-6 months)",
      budget: "$35,000-60,000",
      initiatives: [
        {
          name: "AI-Powered Customer Success Platform",
          description:
            "Implement machine learning models to predict customer churn, identify expansion opportunities, and automate personalized customer engagement workflows.",
          impact:
            "25% reduction in customer churn and 40% improvement in expansion revenue identification",
          cost: "$20,000-35,000"
        },
        {
          name: "Advanced Product Analytics with AI",
          description:
            "Deploy AI-driven product analytics to track user behavior patterns, predict feature adoption, and automatically optimize user onboarding flows.",
          impact:
            "30% improvement in feature adoption rates and data-driven product decisions",
          cost: "$15,000-25,000"
        }
      ]
    },
    phase2: {
      title: "AI Integration (6-12 months)",
      budget: "$60,000-120,000",
      initiatives: [
        {
          name: "Intelligent Sales and Marketing Automation",
          description:
            "Implement AI-powered lead scoring, automated content personalization, and predictive sales pipeline management with integration to product usage intelligence.",
          impact:
            "35% increase in qualified lead conversion and 25% improvement in sales cycle efficiency",
          cost: "$25,000-50,000"
        },
        {
          name: "AI-Driven Customer Support Automation",
          description:
            "Deploy conversational AI for customer support, automated ticket routing, and intelligent knowledge base recommendations with human handoff capabilities.",
          impact:
            "50% reduction in support response time and 30% improvement in first-contact resolution",
          cost: "$20,000-40,000"
        },
        {
          name: "Automated A/B Testing and Feature Optimization",
          description:
            "Implement AI systems to automatically design, execute, and analyze A/B tests for product features, UI/UX elements, and user flows.",
          impact:
            "40% faster feature optimization cycles and 20% improvement in user engagement metrics",
          cost: "$15,000-30,000"
        }
      ]
    },
    phase3: {
      title: "AI Innovation (12-18 months)",
      budget: "$80,000-160,000",
      initiatives: [
        {
          name: "Advanced AI Product Intelligence Engine",
          description:
            "Build sophisticated ML models for personalized user experiences, intelligent feature recommendations, and predictive user lifecycle management.",
          impact:
            "45% improvement in user engagement and 25% increase in customer lifetime value",
          cost: "$45,000-90,000"
        },
        {
          name: "AI-Powered Business Intelligence Platform",
          description:
            "Implement advanced analytics for market opportunity identification, competitive intelligence, and automated business performance optimization.",
          impact:
            "Strategic competitive advantage through AI-driven market insights and 20% improvement in business decision speed",
          cost: "$35,000-70,000"
        }
      ]
    }
  },
  roiProjection: {
    totalInvestment: "$175,000-340,000",
    annualSavings: "$150,000-280,000",
    paybackMonths: "10-16",
    threeYearROI: "185%"
  },
  riskAssessment: {
    low: [
      "AI model training time and accuracy optimization",
      "Customer data privacy compliance during AI implementation"
    ],
    medium: [
      "Technical talent retention during AI scaling phase",
      "Customer acceptance of AI-driven interactions and recommendations",
      "Integration complexity with existing product architecture"
    ],
    high: [
      "AI competitive disadvantage if rivals implement advanced customer AI first",
      "Data quality requirements for accurate AI predictions and recommendations"
    ]
  },
  quickWins: [
    {
      initiative: "Implement AI-powered chatbot for basic customer queries",
      timeframe: "2-3 weeks",
      cost: "$1,000-3,000",
      impact:
        "30% reduction in basic support tickets and 24/7 customer assistance"
    },
    {
      initiative: "Deploy AI lead scoring based on product trial behavior",
      timeframe: "3-4 weeks",
      cost: "$2,000-5,000",
      impact:
        "25% improvement in sales team efficiency and lead qualification accuracy"
    },
    {
      initiative: "Basic churn prediction model using existing customer data",
      timeframe: "4-6 weeks",
      cost: "$3,000-6,000",
      impact:
        "Early identification of at-risk customers and 15% improvement in retention efforts"
    }
  ],
  nextSteps: [
    "Audit existing customer data quality and identify AI training data requirements",
    "Establish AI ethics and customer privacy guidelines for AI implementation",
    "Create AI product roadmap and secure engineering resources for customer intelligence platform development"
  ],
  metadata: {
    generatedAt: new Date().toISOString(),
    inputData: {
      industry: "technology",
      size: "small",
      revenue: "1m-10m",
      businessModel: "saas",
      techStack: {
        dataManagement: 3,
        aiAdoption: 3,
        processAutomation: 3,
        teamReadiness: 3,
        infrastructureReadiness: 4
      },
      painPoints: [
        "Inefficient decision-making processes",
        "Customer service response delays",
        "Difficulty staying competitive with AI-adopting competitors"
      ],
      businessGoals: [
        "Extract insights from data",
        "Improve customer experience with AI",
        "Stay competitive with AI innovation"
      ]
    },
    calculatedScore: 6.8,
    assessmentType: "AI_TRANSFORMATION",
    demoData: true
  }
};

export const professionalServicesDemoData = {
  executiveSummary:
    "This 100-employee consulting firm demonstrates moderate AI readiness (5.1/10) with strong client relationships but significant opportunities in document automation and knowledge management AI. The primary AI transformation opportunity lies in implementing AI-powered research assistants, automated proposal generation, and intelligent knowledge capture systems to improve consultant productivity and client delivery quality.",
  maturityScore: 5.1,
  industryComparison: {
    percentile: "45th",
    benchmark:
      "Average performance for professional services companies in AI adoption",
    leadersScore: 8.7
  },
  aiReadiness: {
    currentState: "Basic",
    opportunities: [
      "AI-powered document automation to reduce proposal development time by 50%",
      "Intelligent knowledge management system to capture and share expertise across the firm"
    ],
    competitiveGap:
      "Professional services firms implementing AI-powered research and proposal automation are winning 30% more contracts by delivering faster, more comprehensive proposals. Without AI adoption, the firm risks losing competitive advantage to more efficient AI-enabled competitors."
  },
  keyFindings: [
    "Manual research, proposal writing, and knowledge management processes create significant productivity bottlenecks, with consultants spending 40% of billable time on administrative tasks.",
    "Implementing AI-powered research assistants and document automation offers the greatest potential for improving consultant utilization rates and client delivery speed.",
    "Without AI transformation for knowledge management and proposal automation, the firm faces challenges in scaling expertise and competing with AI-enabled firms that can deliver insights 3x faster."
  ],
  roadmap: {
    phase1: {
      title: "AI Foundation (0-6 months)",
      budget: "$40,000-70,000",
      initiatives: [
        {
          name: "AI-Powered Research and Analysis Platform",
          description:
            "Implement AI research assistants capable of analyzing documents, market research, and industry reports to generate insights and summaries for client projects.",
          impact:
            "50% reduction in research time and improved analysis quality through AI-augmented insights",
          cost: "$25,000-45,000"
        },
        {
          name: "Intelligent Document Generation System",
          description:
            "Deploy AI-powered tools for automated proposal generation, contract analysis, and report writing using firm templates and best practices.",
          impact:
            "40% faster proposal development and improved consistency across client deliverables",
          cost: "$15,000-25,000"
        }
      ]
    },
    phase2: {
      title: "AI Integration (6-12 months)",
      budget: "$65,000-130,000",
      initiatives: [
        {
          name: "Smart Knowledge Management and Capture System",
          description:
            "Implement AI-powered knowledge base that automatically captures insights from projects, emails, and meetings, making expertise searchable and reusable across teams.",
          impact:
            "60% improvement in knowledge retention and 35% faster access to relevant expertise",
          cost: "$25,000-50,000"
        },
        {
          name: "AI-Enhanced Client Intelligence Platform",
          description:
            "Deploy machine learning models to analyze client communications, project outcomes, and market trends to provide strategic recommendations and identify expansion opportunities.",
          impact:
            "25% increase in client retention and improved strategic advisory capabilities",
          cost: "$20,000-40,000"
        },
        {
          name: "Automated Competitive Intelligence System",
          description:
            "Use AI to monitor industry trends, competitor activities, and market opportunities, automatically generating briefings and strategic insights for client work.",
          impact:
            "Enhanced competitive positioning and 30% improvement in strategic recommendation quality",
          cost: "$20,000-40,000"
        }
      ]
    },
    phase3: {
      title: "AI Innovation (12-18 months)",
      budget: "$75,000-150,000",
      initiatives: [
        {
          name: "Advanced AI Strategy and Advisory Platform",
          description:
            "Implement sophisticated AI models for scenario planning, strategic analysis, and predictive modeling to enhance consulting capabilities and deliver unique AI-powered insights to clients.",
          impact:
            "Premium positioning in market and 20% increase in project values through AI-enhanced advisory services",
          cost: "$40,000-80,000"
        },
        {
          name: "AI-Powered Business Development Engine",
          description:
            "Deploy advanced analytics for opportunity identification, automated proposal customization, and client relationship optimization using AI-driven insights.",
          impact:
            "40% improvement in business development efficiency and higher win rates through AI-optimized proposals",
          cost: "$35,000-70,000"
        }
      ]
    }
  },
  roiProjection: {
    totalInvestment: "$180,000-350,000",
    annualSavings: "$220,000-380,000",
    paybackMonths: "9-14",
    threeYearROI: "195%"
  },
  riskAssessment: {
    low: [
      "Client confidentiality concerns with AI-powered document processing",
      "Learning curve for consultants adapting to AI research tools"
    ],
    medium: [
      "Quality control ensuring AI-generated content meets client standards",
      "Partner resistance to AI-augmented consulting processes",
      "Data security requirements for client information in AI systems"
    ],
    high: [
      "AI competitive disadvantage as clients expect AI-enhanced insights and faster delivery",
      "Potential client concern about AI replacing human expertise and judgment"
    ]
  },
  quickWins: [
    {
      initiative:
        "Implement ChatGPT Enterprise for research and initial draft writing",
      timeframe: "1-2 weeks",
      cost: "$1,000-2,000",
      impact:
        "30% faster initial research and draft document creation for client projects"
    },
    {
      initiative: "Deploy AI-powered transcription and meeting summary tools",
      timeframe: "2-3 weeks",
      cost: "$2,000-4,000",
      impact: "50% time savings in meeting notes and action item generation"
    },
    {
      initiative: "Basic AI contract and document analysis for due diligence",
      timeframe: "4-6 weeks",
      cost: "$3,000-6,000",
      impact:
        "40% faster document review processes and improved accuracy in contract analysis"
    }
  ],
  nextSteps: [
    "Establish AI governance policies for client data security and confidentiality compliance",
    "Pilot AI research tools with select consultants and measure productivity improvements",
    "Evaluate AI document generation platforms and create firm-specific templates and guidelines"
  ],
  metadata: {
    generatedAt: new Date().toISOString(),
    inputData: {
      industry: "professional",
      size: "medium",
      revenue: "10m-100m",
      businessModel: "b2b",
      techStack: {
        dataManagement: 2,
        aiAdoption: 2,
        processAutomation: 2,
        teamReadiness: 2,
        infrastructureReadiness: 2
      },
      painPoints: [
        "Repetitive manual tasks consuming too much time",
        "Inefficient decision-making processes",
        "Content creation bottlenecks",
        "Limited team knowledge about AI capabilities"
      ],
      businessGoals: [
        "Automate repetitive tasks",
        "Extract insights from data",
        "Increase team productivity",
        "Stay competitive with AI innovation"
      ]
    },
    calculatedScore: 5.1,
    assessmentType: "AI_TRANSFORMATION",
    demoData: true
  }
};
