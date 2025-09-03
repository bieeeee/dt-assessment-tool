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
    title: "Data & Analytics Readiness",
    icon: "📊",
    levels: [
      "Manual/Excel",
      "Basic Analytics",
      "Advanced Analytics",
      "AI-Ready Data Pipeline"
    ]
  },
  {
    key: "aiAdoption",
    title: "Current AI Tool Usage",
    icon: "🤖",
    levels: [
      "No AI Tools",
      "Basic AI Tools (ChatGPT)",
      "Business AI Apps",
      "Custom AI Solutions"
    ]
  },
  {
    key: "processAutomation",
    title: "Process Automation",
    icon: "⚡",
    levels: [
      "Manual Processes",
      "Basic Automation",
      "Workflow Automation",
      "AI-Powered Automation"
    ]
  },
  {
    key: "teamReadiness",
    title: "Team AI Literacy",
    icon: "👥",
    levels: [
      "No AI Training",
      "Awareness Level",
      "Active Users",
      "AI-First Mindset"
    ]
  },
  {
    key: "infrastructureReadiness",
    title: "AI Infrastructure",
    icon: "🔧",
    levels: [
      "Legacy Systems",
      "Cloud Basic",
      "AI-Ready Cloud",
      "AI-Native Architecture"
    ]
  }
];

const painPointOptions: string[] = [
  "Repetitive manual tasks consuming too much time",
  "Lack of insights from available data",
  "Inefficient decision-making processes",
  "Customer service response delays",
  "Content creation bottlenecks",
  "Difficulty staying competitive with AI-adopting competitors",
  "Limited team knowledge about AI capabilities",
  "Concerns about AI implementation costs and ROI"
];

const goalOptions = [
  { id: "automation", label: "Automate repetitive tasks", icon: "⚡" },
  { id: "insights", label: "Extract insights from data", icon: "📈" },
  { id: "efficiency", label: "Increase team productivity", icon: "🚀" },
  { id: "customer", label: "Improve customer experience with AI", icon: "🤖" },
  {
    id: "competitive",
    label: "Stay competitive with AI innovation",
    icon: "🏆"
  },
  { id: "costs", label: "Reduce operational costs through AI", icon: "💰" }
];

export {
  industries,
  companySizes,
  revenueRanges,
  businessModels,
  techCategories,
  painPointOptions,
  goalOptions
};
