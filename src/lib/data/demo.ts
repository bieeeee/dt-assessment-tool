export const manufacturingDemoData = {
  executiveSummary:
    "This 200-employee manufacturing company exhibits moderate digital maturity (4.2/10) with significant opportunities in process automation and data integration. The primary transformation opportunity lies in modernizing production planning, implementing predictive maintenance, and establishing real-time visibility across manufacturing operations.",
  maturityScore: 4.2,
  industryComparison: {
    percentile: "35th",
    benchmark: "Below average for manufacturing companies",
    leadersScore: 8.3
  },
  keyFindings: [
    "Manual production planning and paper-based work orders create bottlenecks and increase error rates, impacting on-time delivery performance.",
    "Implementing IoT sensors and manufacturing execution systems (MES) offers the greatest potential for efficiency gains and quality improvements.",
    "Without digital transformation, the company risks losing contracts to more agile competitors who can offer real-time tracking and faster response times."
  ],
  roadmap: {
    phase1: {
      title: "Foundation (0-6 months)",
      budget: "$45,000-75,000",
      initiatives: [
        {
          name: "Manufacturing Execution System (MES) Implementation",
          description:
            "Deploy a cloud-based MES to digitize work orders, track production progress, and eliminate paper-based processes. Focus on core production lines first.",
          impact:
            "30% reduction in production planning time and 15% improvement in on-time delivery",
          cost: "$25,000-40,000"
        },
        {
          name: "Inventory Management System Upgrade",
          description:
            "Implement barcode scanning and real-time inventory tracking to reduce stockouts and optimize raw material ordering.",
          impact:
            "20% reduction in inventory carrying costs and improved material availability",
          cost: "$20,000-35,000"
        }
      ]
    },
    phase2: {
      title: "Optimization (6-12 months)",
      budget: "$75,000-150,000",
      initiatives: [
        {
          name: "IoT Sensor Network for Equipment Monitoring",
          description:
            "Install sensors on critical machinery to monitor performance, track downtime, and enable predictive maintenance scheduling.",
          impact:
            "25% reduction in unplanned downtime and 15% improvement in overall equipment effectiveness",
          cost: "$35,000-70,000"
        },
        {
          name: "Production Analytics Dashboard",
          description:
            "Develop real-time dashboards showing key production metrics, quality indicators, and performance against targets.",
          impact:
            "Improved decision-making speed and 10% increase in production efficiency",
          cost: "$25,000-45,000"
        },
        {
          name: "Quality Management System Integration",
          description:
            "Integrate quality control data with production systems to enable real-time quality monitoring and automated alerts.",
          impact:
            "40% reduction in quality defects and faster issue resolution",
          cost: "$15,000-35,000"
        }
      ]
    },
    phase3: {
      title: "Innovation (12-18 months)",
      budget: "$100,000-200,000",
      initiatives: [
        {
          name: "Predictive Maintenance Platform",
          description:
            "Implement AI-powered predictive maintenance using machine learning to analyze sensor data and predict equipment failures.",
          impact:
            "50% reduction in maintenance costs and 30% improvement in equipment uptime",
          cost: "$60,000-120,000"
        },
        {
          name: "Supply Chain Visibility Platform",
          description:
            "Connect with key suppliers and customers through digital platforms to enable end-to-end supply chain visibility and collaboration.",
          impact:
            "20% improvement in supply chain efficiency and enhanced customer satisfaction",
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
      "Vendor compatibility with existing manufacturing equipment",
      "Training requirements for production staff on new systems"
    ],
    medium: [
      "Integration complexity with legacy ERP systems",
      "Production disruption during system implementations",
      "Change management resistance from floor supervisors"
    ],
    high: [
      "Cybersecurity vulnerabilities from increased connectivity",
      "Dependence on reliable internet connectivity for cloud-based systems"
    ]
  },
  quickWins: [
    {
      initiative: "Implement digital work order system for one production line",
      timeframe: "3-4 weeks",
      cost: "$2,000-5,000",
      impact: "Eliminate paper waste and improve work order tracking accuracy"
    },
    {
      initiative:
        "Deploy basic production monitoring dashboard using existing data",
      timeframe: "4-6 weeks",
      cost: "$5,000-8,000",
      impact: "Real-time visibility into daily production metrics"
    },
    {
      initiative:
        "Upgrade to cloud-based communication tools for production teams",
      timeframe: "2-3 weeks",
      cost: "$1,000-3,000",
      impact: "Faster communication between shifts and departments"
    }
  ],
  nextSteps: [
    "Conduct comprehensive audit of current production systems and identify integration points",
    "Secure manufacturing leadership buy-in and establish digital transformation steering committee",
    "Evaluate MES vendors and begin pilot implementation on highest-volume production line"
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
        financialSystems: 3,
        salesProcess: 2,
        hrOperations: 2,
        itInfrastructure: 2
      },
      painPoints: [
        "Manual data entry taking too much time",
        "Disconnected systems and data silos",
        "Difficulty scaling operations"
      ],
      businessGoals: [
        "Increase operational efficiency",
        "Reduce operational costs",
        "Improve customer experience"
      ]
    },
    calculatedScore: 4.2,
    demoData: true
  }
};

export const technologyDemoData = {
  executiveSummary:
    "This 50-employee SaaS startup demonstrates solid digital maturity (6.8/10) with strong cloud-native infrastructure and modern development practices. The primary transformation opportunity lies in scaling operational processes, implementing advanced analytics for product optimization, and establishing enterprise-grade security and compliance frameworks.",
  maturityScore: 6.8,
  industryComparison: {
    percentile: "65th",
    benchmark: "Above average for technology companies",
    leadersScore: 9.2
  },
  keyFindings: [
    "Strong technical foundation with cloud-first architecture, but manual processes in customer success and sales operations are limiting growth velocity.",
    "Implementing advanced product analytics and customer intelligence platforms offers the greatest potential for improving user retention and revenue per customer.",
    "Without enhanced operational automation and enterprise security measures, the company risks challenges in scaling to enterprise customers and achieving compliance requirements."
  ],
  roadmap: {
    phase1: {
      title: "Foundation (0-6 months)",
      budget: "$35,000-60,000",
      initiatives: [
        {
          name: "Customer Success Platform Implementation",
          description:
            "Deploy a comprehensive customer success platform to automate onboarding, track product usage, and identify churn risks through predictive analytics.",
          impact:
            "25% reduction in customer churn and 40% improvement in onboarding completion rates",
          cost: "$20,000-35,000"
        },
        {
          name: "Advanced Product Analytics Setup",
          description:
            "Implement product analytics tools to track user behavior, feature adoption, and conversion funnels with real-time dashboards for product and engineering teams.",
          impact:
            "15% improvement in feature adoption and data-driven product decisions",
          cost: "$15,000-25,000"
        }
      ]
    },
    phase2: {
      title: "Optimization (6-12 months)",
      budget: "$60,000-120,000",
      initiatives: [
        {
          name: "Revenue Operations Automation",
          description:
            "Implement advanced CRM automation, lead scoring, and sales pipeline management with integration to product usage data for expansion revenue identification.",
          impact:
            "30% increase in sales team productivity and 20% improvement in expansion revenue",
          cost: "$25,000-50,000"
        },
        {
          name: "Enterprise Security and Compliance Framework",
          description:
            "Establish SOC 2 compliance, implement advanced security monitoring, and deploy enterprise-grade access controls and data protection measures.",
          impact:
            "Enable enterprise customer acquisition and reduce security risks by 60%",
          cost: "$20,000-40,000"
        },
        {
          name: "Customer Intelligence Platform",
          description:
            "Deploy AI-powered customer intelligence to predict expansion opportunities, identify at-risk accounts, and personalize customer experiences at scale.",
          impact:
            "25% increase in customer lifetime value and improved retention rates",
          cost: "$15,000-30,000"
        }
      ]
    },
    phase3: {
      title: "Innovation (12-18 months)",
      budget: "$80,000-160,000",
      initiatives: [
        {
          name: "AI-Powered Product Optimization Engine",
          description:
            "Implement machine learning models for personalized user experiences, automated A/B testing, and intelligent feature recommendations based on user behavior patterns.",
          impact:
            "35% improvement in user engagement and 20% increase in feature utilization",
          cost: "$45,000-90,000"
        },
        {
          name: "Enterprise Integration Platform",
          description:
            "Build comprehensive API management and enterprise integration capabilities to support complex customer implementations and partner ecosystem growth.",
          impact:
            "Enable 50% faster enterprise customer implementations and new partnership revenue streams",
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
      "Technical integration complexity with existing cloud infrastructure",
      "Learning curve for new analytics and automation tools"
    ],
    medium: [
      "Potential customer data privacy concerns during analytics implementation",
      "Resource allocation between product development and operational improvements",
      "Compliance audit timeline and certification delays"
    ],
    high: [
      "Customer acquisition cost increase during transition to enterprise focus",
      "Technical talent retention during rapid scaling phase"
    ]
  },
  quickWins: [
    {
      initiative: "Implement automated customer onboarding email sequences",
      timeframe: "1-2 weeks",
      cost: "$1,000-2,000",
      impact: "20% improvement in trial-to-paid conversion rates"
    },
    {
      initiative: "Deploy basic product usage tracking for key features",
      timeframe: "3-4 weeks",
      cost: "$3,000-5,000",
      impact:
        "Clear visibility into feature adoption and user engagement patterns"
    },
    {
      initiative:
        "Set up automated lead scoring based on product trial behavior",
      timeframe: "2-3 weeks",
      cost: "$2,000-4,000",
      impact: "25% improvement in sales team lead qualification efficiency"
    }
  ],
  nextSteps: [
    "Conduct comprehensive audit of current customer data and identify analytics implementation priorities",
    "Secure product and engineering leadership alignment on customer success platform integration",
    "Evaluate customer success and product analytics vendors with focus on API integration capabilities"
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
        financialSystems: 3,
        salesProcess: 3,
        hrOperations: 3,
        itInfrastructure: 4
      },
      painPoints: [
        "Poor visibility into business metrics",
        "Difficulty scaling operations",
        "Slow customer response times"
      ],
      businessGoals: [
        "Increase operational efficiency",
        "Enable data-driven decisions",
        "Improve customer experience"
      ]
    },
    calculatedScore: 6.8,
    demoData: true
  }
};

export const professionalServicesDemoData = {
  executiveSummary:
    "This 100-employee consulting firm demonstrates moderate digital maturity (5.1/10) with strong client relationship management but significant gaps in project delivery automation and knowledge management. The primary transformation opportunity lies in implementing project management platforms, automating time tracking and billing processes, and establishing centralized knowledge repositories to improve consultant productivity and client delivery quality.",
  maturityScore: 5.1,
  industryComparison: {
    percentile: "45th",
    benchmark: "Average performance for professional services companies",
    leadersScore: 8.7
  },
  keyFindings: [
    "Manual time tracking and project management processes create administrative burden, reducing billable hour efficiency and increasing project delivery risks.",
    "Implementing integrated project management and resource allocation systems offers the greatest potential for improving utilization rates and client satisfaction.",
    "Without digitization of knowledge management and proposal processes, the firm risks losing competitive advantage to more efficient competitors and faces challenges in scaling beyond current capacity."
  ],
  roadmap: {
    phase1: {
      title: "Foundation (0-6 months)",
      budget: "$40,000-70,000",
      initiatives: [
        {
          name: "Integrated Project Management Platform",
          description:
            "Deploy enterprise project management system with time tracking, resource allocation, and client collaboration features. Integrate with existing CRM for seamless project lifecycle management.",
          impact:
            "20% improvement in project delivery efficiency and 15% increase in billable hour capture",
          cost: "$25,000-45,000"
        },
        {
          name: "Automated Time Tracking and Billing System",
          description:
            "Implement automated time capture tools with mobile capabilities and direct integration to billing systems, eliminating manual timesheet processes.",
          impact:
            "30% reduction in administrative overhead and improved billing accuracy",
          cost: "$15,000-25,000"
        }
      ]
    },
    phase2: {
      title: "Optimization (6-12 months)",
      budget: "$65,000-130,000",
      initiatives: [
        {
          name: "Knowledge Management and Document Automation",
          description:
            "Establish centralized knowledge repository with automated document generation, proposal templates, and best practice sharing across all practice areas.",
          impact:
            "40% faster proposal development and improved knowledge retention",
          cost: "$25,000-50,000"
        },
        {
          name: "Resource Planning and Utilization Analytics",
          description:
            "Deploy advanced resource planning tools with predictive analytics for consultant utilization, skill gap analysis, and capacity forecasting.",
          impact:
            "25% improvement in consultant utilization rates and better project staffing decisions",
          cost: "$20,000-40,000"
        },
        {
          name: "Client Portal and Collaboration Platform",
          description:
            "Implement secure client portals for project transparency, document sharing, and real-time collaboration on deliverables and milestones.",
          impact:
            "Enhanced client satisfaction and 20% reduction in client communication overhead",
          cost: "$20,000-40,000"
        }
      ]
    },
    phase3: {
      title: "Innovation (12-18 months)",
      budget: "$75,000-150,000",
      initiatives: [
        {
          name: "AI-Powered Business Intelligence Platform",
          description:
            "Implement advanced analytics for client profitability analysis, market opportunity identification, and predictive modeling for business development.",
          impact:
            "15% improvement in client profitability and data-driven growth strategy development",
          cost: "$40,000-80,000"
        },
        {
          name: "Intelligent Proposal and Contract Automation",
          description:
            "Deploy AI-powered tools for proposal generation, contract analysis, and risk assessment to accelerate business development processes.",
          impact:
            "50% faster proposal turnaround and improved win rates through better targeting",
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
      "Client data security requirements during platform transitions",
      "Training requirements for consultants on new project management tools"
    ],
    medium: [
      "Change management resistance from senior partners accustomed to traditional processes",
      "Integration challenges between project management and existing financial systems",
      "Client acceptance of new collaboration and communication processes"
    ],
    high: [
      "Potential disruption to ongoing client projects during system implementations",
      "Partner buy-in requirements for significant process changes affecting billable operations"
    ]
  },
  quickWins: [
    {
      initiative: "Implement mobile time tracking app for all consultants",
      timeframe: "2-3 weeks",
      cost: "$3,000-5,000",
      impact:
        "Eliminate paper timesheets and improve time capture accuracy by 25%"
    },
    {
      initiative:
        "Deploy basic project dashboard for real-time project status visibility",
      timeframe: "4-6 weeks",
      cost: "$5,000-8,000",
      impact: "Improved project oversight and faster issue identification"
    },
    {
      initiative:
        "Standardize proposal templates and create shared document library",
      timeframe: "3-4 weeks",
      cost: "$2,000-4,000",
      impact:
        "20% reduction in proposal development time and improved consistency"
    }
  ],
  nextSteps: [
    "Conduct comprehensive assessment of current project delivery processes and identify integration requirements",
    "Secure partner committee approval for project management platform selection and implementation timeline",
    "Evaluate project management and resource planning vendors with focus on professional services industry expertise"
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
        financialSystems: 3,
        salesProcess: 3,
        hrOperations: 2,
        itInfrastructure: 2
      },
      painPoints: [
        "Manual data entry taking too much time",
        "Poor visibility into business metrics",
        "Difficulty scaling operations",
        "High IT maintenance costs"
      ],
      businessGoals: [
        "Increase operational efficiency",
        "Enable data-driven decisions",
        "Reduce operational costs",
        "Improve customer experience"
      ]
    },
    calculatedScore: 5.1,
    demoData: true
  }
};
