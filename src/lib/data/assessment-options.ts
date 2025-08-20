import type { TechCategoriesOption, Option } from "$lib/types/options";

const industries: Omit<Option, "subtitle">[] = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Financial Services" },
  { value: "professional", label: "Professional Services" },
  { value: "technology", label: "Technology" }
];

const companySizes: Option[] = [
  { value: "small", label: "< 50 employees", subtitle: "Small Business" },
  { value: "medium", label: "50-200 employees", subtitle: "Growing Company" },
  { value: "large", label: "200-1000 employees", subtitle: "Enterprise" },
  {
    value: "enterprise",
    label: "1000+ employees",
    subtitle: "Large Enterprise"
  }
];

const revenueRanges: Option[] = [
  { value: "under1m", label: "< $1M", subtitle: "Startup/Small" },
  { value: "1m-10m", label: "$1M - $10M", subtitle: "Growth Stage" },
  { value: "10m-100m", label: "$10M - $100M", subtitle: "Established" },
  { value: "over100m", label: "$100M+", subtitle: "Enterprise" }
];

const businessModels: Option[] = [
  { value: "b2b", label: "B2B", subtitle: "Business to Business" },
  { value: "b2c", label: "B2C", subtitle: "Business to Consumer" },
  { value: "b2b2c", label: "B2B2C", subtitle: "Platform/Marketplace" },
  { value: "saas", label: "SaaS", subtitle: "Software as a Service" }
];

const techCategories: TechCategoriesOption[] = [
  {
    key: "dataManagement",
    title: "Data Management",
    icon: "📊",
    levels: ["Manual/Excel", "Basic Tools", "Advanced Analytics", "AI-Powered"]
  },
  {
    key: "financialSystems",
    title: "Financial Systems",
    icon: "💰",
    levels: ["Spreadsheets", "QuickBooks", "ERP System", "Cloud ERP"]
  },
  {
    key: "salesProcess",
    title: "Sales Process",
    icon: "🛒",
    levels: ["Phone/Email", "Basic CRM", "Sales Automation", "AI-Powered"]
  },
  {
    key: "hrOperations",
    title: "HR & Operations",
    icon: "👥",
    levels: ["Paper/Excel", "HRIS", "Automated Workflows", "AI Assistant"]
  },
  {
    key: "itInfrastructure",
    title: "IT Infrastructure",
    icon: "🔒",
    levels: ["On-Premise", "Hybrid", "Cloud-First", "Cloud-Native"]
  }
];

const painPointOptions: string[] = [
  "Manual data entry taking too much time",
  "Poor visibility into business metrics",
  "Disconnected systems and data silos",
  "Slow customer response times",
  "Difficulty scaling operations",
  "High IT maintenance costs",
  "Security and compliance concerns",
  "Remote work collaboration issues"
];

export {
  industries,
  companySizes,
  revenueRanges,
  businessModels,
  techCategories,
  painPointOptions
};
