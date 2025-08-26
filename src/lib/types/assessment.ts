interface AssessmentData {
  industry: string;
  size: Record<string, string>;
  revenue: string;
  businessModel: string;
  techStack: {
    dataManagement: number;
    financialSystems: number;
    salesProcess: number;
    hrOperations: number;
    itInfrastructure: number;
  };
  painPoints: string[];
  businessGoals: string[];
}

type Initiative = {
  name: string;
  description: string;
  impact: string;
  cost: string;
};

type Phase = {
  title: string;
  budget: string;
  initiatives: Initiative[];
};

interface Roadmap {
  phase1: Phase;
  phase2: Phase;
  phase3: Phase;
}

interface AssessmentResult {
  executiveSummary: string;
  maturityScore: number;
  industryComparison: {
    percentile: number;
    benchmark: string;
  };
  keyFindings: string[];
  nextSteps: string[];
  quickWins: {
    cost: string;
    impact: string;
    initiative: string;
    timeframe: string;
  }[];
  riskAssessment: {
    low: string[];
    medium: string[];
    high: string[];
  };
  roadmap: Roadmap;
  roiProjection: {
    totalInvestment: string;
    annualSavings: string;
    paybackMonths: number;
    threeYearROI: string;
  };
  metadata: any;
}

export type { AssessmentData, AssessmentResult, Roadmap };
