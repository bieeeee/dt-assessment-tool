interface AssessmentData {
  industry: string;
  size: string;
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

export { type AssessmentData };
