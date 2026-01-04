import { Bot, DatabaseZap, Workflow, Compass } from "lucide-react";

export interface PricingTier {
  name: string;
  audience: string;
  price: string;
  priceDescription: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  icon: any;
  title: string;
  description: string;
  navDescription: string; // Short description for navigation
  features: ProductFeature[];
  pricingTiers: PricingTier[];
  ready?: boolean; // For products not yet ready
  status?: "early-access" | "coming-soon";
  path: string;
  // SEO-specific fields
  seo: {
    title: string;
    description: string;
    keywords: string[];
    productType: string;
    ogImage: string;
  };
}

export const assemblerProduct: Product = {
  icon: Bot,
  title: "Konnektr Assembler",
  path: "/assembler",
  status: "coming-soon",
  description:
    "AI agents that analyze your data sources (MQTT, files, databases) and automatically generate DTDL schemas, twin graphs, and data mappings. No manual modeling required.",
  navDescription: "AI-powered digital twin builder",
  seo: {
    title: "Konnektr Assembler - Konnektr | AI-Powered Digital Twin Builder",
    description:
      "AI-powered digital twin builder that automates DTDL model creation from any data source. Visual interface, no-code required.",
    keywords: [
      "AI digital twin builder",
      "DTDL model generator",
      "digital twin automation",
      "AI twin ontology",
      "no-code digital twin",
      "visual twin builder",
      "digital twin modeling",
      "AI DTDL generator",
      "digital twin AI tools",
      "automated twin creation",
    ],
    productType: "AI Software",
    ogImage: "/og-images/assembler-og.png",
  },
  features: [
    {
      title: "Multi-Agent Data Analysis",
      description:
        "Specialized AI agents analyze MQTT streams, uploaded files, and database schemas to understand your data patterns and relationships.",
    },
    {
      title: "Automatic DTDL Generation",
      description:
        "AI agents create valid DTDL models and twin graph structures automatically, eliminating the need for manual schema design.",
    },
    {
      title: "Intelligent Data Mapping",
      description:
        "Our agents infer relationships between data sources and create the mappings needed to populate your digital twins.",
    },
    {
      title: "Seamless Integration",
      description:
        "Generated twins deploy directly to Konnektr Graph for storage and Flow for analytics, creating a complete digital twin pipeline.",
    },
  ],
  pricingTiers: [
    {
      name: "Community",
      audience: "For individuals & students",
      price: "Free",
      priceDescription: "Forever",
      features: [
        "Your first Assembler resource is free",
        "2 Data Sources",
        "Community Support",
      ],
      cta: "Start for Free",
    },
    {
      name: "Pro",
      audience: "For small teams & consultants",
      price: "$49",
      priceDescription: "per month",
      features: [
        "10 Data Sources",
        "Collaboration (2 users)",
        "Email Support",
        "Supports additional Assembler resources",
      ],
      cta: "Get Started with Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      audience: "For large organizations",
      price: "Custom",
      priceDescription: "Contact us for pricing",
      features: [
        "Unlimited Data Sources",
        "SSO & Audit Logs",
        "On-premise options",
        "Dedicated Support",
      ],
      cta: "Contact Sales",
    },
  ],
  ready: false,
};

export const graphProduct: Product = {
  icon: DatabaseZap,
  title: "Konnektr Graph",
  path: "/graph",
  description:
    "Semantic memory for AI agents. Validated property graphs with vector embeddings—give your agents structured context they can trust, not just embeddings.",
  navDescription: "Semantic graph for AI agents",
  seo: {
    title:
      "Konnektr Graph - Semantic Memory for AI Agents | Graph + Vector Database",
    description:
      "Validated property graphs with vector embeddings for AI agents. Schema validation + hybrid vector-graph queries. Open source, built on PostgreSQL.",
    keywords: [
      "AI agent memory",
      "semantic graph database",
      "vector database",
      "property graph",
      "LLM knowledge base",
      "RAG database",
      "graph embeddings",
      "PostgreSQL graph",
      "Apache AGE",
      "AI context database",
      "validated graph database",
      "MCP server",
    ],
    productType: "Database Software",
    ogImage: "/og-images/graph-og.png",
  },
  features: [
    {
      title: "Validated Semantic Context",
      description:
        "Schema validation ensures data integrity. Your AI agents get guaranteed structural consistency—relationships that won't break, properties that match expectations.",
    },
    {
      title: "Vector + Graph Hybrid",
      description:
        "Store vector embeddings as properties in your graph. Query by similarity AND traverse relationships—hybrid intelligence without a separate vector database.",
    },
    {
      title: "PostgreSQL Foundation",
      description:
        "Built on PostgreSQL and Apache AGE. Your team already knows it, your ops already trust it. Battle-tested reliability.",
    },
    {
      title: "100% Open Source",
      description:
        "Apache 2.0 licensed. Audit the code, contribute improvements, self-host on your infrastructure. No black boxes, no vendor lock-in.",
    },
  ],
  pricingTiers: [
    {
      name: "Developer",
      audience: "For development & testing",
      price: "Free",
      priceDescription: "per month / resource",
      features: [
        "Up to 500 entities",
        "Rate limits: 1,000 QU/min",
        "API access",
        "MCP server",
        "Community support (GitHub)",
      ],
      cta: "Start Deploying",
    },
    {
      name: "Standard",
      audience: "For production applications",
      price: "$49",
      priceDescription: "per month / resource",
      features: [
        "Up to 1M entities",
        "M2M Authentication",
        "API access",
        "MCP server",
        "Rate limits: 10,000 QU/min",
        "Event notifications",
        "Data history",
        "Email support",
      ],
      cta: "Choose Standard",
      popular: true,
    },
    {
      name: "Enterprise",
      audience: "For enterprise deployments",
      price: "Custom",
      priceDescription: "Pay-as-you-go",
      features: [
        "Unlimited twin instances",
        "Custom authentication",
        "High-availability",
        "Dedicated support",
        "On-premise deployment options",
      ],
      cta: "Contact Sales",
    },
  ],
  ready: true,
};

export const flowProduct: Product = {
  icon: Workflow,
  title: "Konnektr Flow",
  path: "/flow",
  status: "coming-soon",
  description:
    "The automation layer that will connect your digital twins to real-world actions. From factory equipment to building systems, Flow will make your digital twins drive real change.",
  navDescription: "Real-time data & event orchestrator",
  seo: {
    title: "Konnektr Flow - Konnektr | Real-Time Data & Event Orchestrator",
    description:
      "Real-time data and event orchestrator for digital twins. Visual flow builder, rich connectors, serverless execution.",
    keywords: [
      "digital twin data processing",
      "real-time event orchestration",
      "IoT data pipeline",
      "digital twin automation",
      "visual flow builder",
      "serverless data processing",
      "event-driven architecture",
      "digital twin integration",
      "real-time twin updates",
      "IoT event processing",
    ],
    productType: "Integration Software",
    ogImage: "/og-images/flow-og.png",
  },
  features: [
    {
      title: "Real-World Actions",
      description:
        "When your digital twin detects an issue, Flow will automatically trigger maintenance requests, adjust settings, or alert the right people.",
    },
    {
      title: "Physical World Integration",
      description:
        "Connect digital twin insights to manufacturing systems, building controls, supply chain processes, and infrastructure management.",
    },
    {
      title: "Intelligent Automation",
      description:
        "Smart workflows that understand context from your digital twins and take appropriate actions in the physical world.",
    },
    {
      title: "Enterprise Connectivity",
      description:
        "Seamless integration with your existing systems - from SCADA and PLCs to ERP and maintenance management platforms.",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      audience: "For basic ingestion & notifications",
      price: "$10",
      priceDescription: "per month / resource",
      features: [
        "Up to 10 Active Flows",
        "100,000 Flow Executions/month",
        "Standard Connectors",
      ],
      cta: "Start Flowing",
    },
    {
      name: "Pro",
      audience: "For complex, multi-step workflows",
      price: "$99",
      priceDescription: "per month / resource",
      features: [
        "Up to 50 Active Flows",
        "2M Flow Executions/month",
        "Advanced Connectors",
        "Email Support",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      audience: "For mission-critical automation",
      price: "Custom",
      priceDescription: "Pay-as-you-go",
      features: [
        "Unlimited Active Flows",
        "High-Volume Executions",
        "Premium Connectors & SLA",
        "Audit Logs",
      ],
      cta: "Contact Sales",
    },
  ],
  ready: false,
};

export const compassProduct: Product = {
  icon: Compass,
  title: "Konnektr Compass",
  path: "/compass",
  status: "coming-soon",
  description:
    "The infrastructure monitoring and analytics platform we're designing. Turn complex infrastructure data into clear insights about your physical world operations.",
  navDescription: "Analytics & insights platform",
  seo: {
    title: "Konnektr Compass - Konnektr | Digital Twin Analytics & Insights",
    description:
      "Advanced analytics and insights platform for digital twins. Interactive dashboards, predictive analytics, real-time monitoring.",
    keywords: [
      "digital twin analytics",
      "twin data visualization",
      "predictive twin analytics",
      "digital twin insights",
      "twin monitoring dashboard",
      "IoT analytics platform",
      "digital twin intelligence",
      "twin performance analytics",
      "real-time twin monitoring",
      "digital twin reporting",
    ],
    productType: "Analytics Software",
    ogImage: "/og-images/compass-og.png",
  },
  features: [
    {
      title: "Infrastructure Monitoring",
      description:
        "Monitor the health and performance of your physical infrastructure - from manufacturing equipment to building systems.",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Use digital twin data to predict when equipment needs maintenance before it fails, reducing downtime and costs.",
    },
    {
      title: "Operational Insights",
      description:
        "Understand patterns in your infrastructure performance and identify opportunities for optimization.",
    },
    {
      title: "Clear Visualizations",
      description:
        "Turn complex data into simple, actionable dashboards that anyone can understand and use to make decisions.",
    },
  ],
  pricingTiers: [
    {
      name: "Coming Soon",
      audience: "Stay tuned for updates",
      price: "TBD",
      priceDescription: "Pricing to be announced",
      features: [
        "Advanced Analytics",
        "Interactive Dashboards",
        "Predictive Insights",
      ],
      cta: "Join Waiting List",
    },
  ],
  ready: false,
};

export const products = [
  assemblerProduct,
  graphProduct,
  flowProduct,
  compassProduct,
];

// For navigation: only pick the fields needed for navigation
export const navigationProducts = products.map((p) => ({
  name: p.title,
  path: p.path,
  status: p.status,
  navDescription: p.navDescription,
}));
