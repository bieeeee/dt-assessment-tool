interface IndustryOption {
  value: string;
  label: string;
}

interface Option {
  value: string;
  label: string;
  subtitle: String;
}

type TechStackKey =
  | "dataManagement"
  | "financialSystems"
  | "salesProcess"
  | "hrOperations"
  | "itInfrastructure";

interface TechCategoriesOption {
  key: TechStackKey;
  title: string;
  icon: string;
  levels: string[];
}

interface GoalOption {
  id: string;
  label: string;
  icon: string;
}

export type { IndustryOption, Option, TechCategoriesOption, GoalOption };
