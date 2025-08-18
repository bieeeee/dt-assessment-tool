const industries = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Financial Services" },
  { value: "professional", label: "Professional Services" },
  { value: "technology", label: "Technology" }
];

const companySizes = [
  { value: "small", label: "< 50 employees", subtitle: "Small Business" },
  { value: "medium", label: "50-200 employees", subtitle: "Growing Company" },
  { value: "large", label: "200-1000 employees", subtitle: "Enterprise" },
  {
    value: "enterprise",
    label: "1000+ employees",
    subtitle: "Large Enterprise"
  }
];

const revenueRanges = [
  { value: "under1m", label: "< $1M", subtitle: "Startup/Small" },
  { value: "1m-10m", label: "$1M - $10M", subtitle: "Growth Stage" },
  { value: "10m-100m", label: "$10M - $100M", subtitle: "Established" },
  { value: "over100m", label: "$100M+", subtitle: "Enterprise" }
];

const businessModels = [
  { value: "b2b", label: "B2B", subtitle: "Business to Business" },
  { value: "b2c", label: "B2C", subtitle: "Business to Consumer" },
  { value: "b2b2c", label: "B2B2C", subtitle: "Platform/Marketplace" },
  { value: "saas", label: "SaaS", subtitle: "Software as a Service" }
];

export { industries, companySizes, revenueRanges, businessModels };
