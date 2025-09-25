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
  features: ProductFeature[];
  pricingTiers: PricingTier[];
  ready?: boolean; // For products not yet ready
}

export const assemblerProduct: Product = {
  icon: Bot,
  title: "Konnektr Assembler",
  description:
    "The AI-powered digital twin builder. Automate the creation of DTDL models and graph relationships from any data source with an intuitive, low-code visual interface.",
  features: [
    {
      title: "AI-Powered Ontology Generation",
      description:
        "Let our AI analyze your data and propose a complete, valid DTDL model in seconds.",
    },
    {
      title: "Visual Graph Editor",
      description:
        "Refine and approve your model in an intuitive node-based editor. No DTDL expertise required.",
    },
    {
      title: "Multi-Source Contextualization",
      description:
        "Connect to multiple data sources and let the AI infer relationships between them.",
    },
    {
      title: "One-Click Deployment",
      description:
        "Deploy your model and the necessary data connectors directly to Konnektr Graph or your own cloud.",
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
  description:
    "The scalable digital twin runtime. A high-performance, fully managed graph database and API layer, built on open standards and fully compatible with ADT.",
  features: [
    {
      title: "ADT Compatible API",
      description:
        "Use the same APIs and SDKs you know. Migrate existing applications with zero code changes.",
    },
    {
      title: "Built on Open Source",
      description:
        "Powered by PostgreSQL and Apache AGE for a robust, flexible, and lock-in free foundation.",
    },
    {
      title: "Real-time Eventing",
      description:
        "Subscribe to changes in your twin graph and trigger downstream actions in Konnektr Flow or external systems.",
    },
    {
      title: "Fully Managed & Scalable",
      description:
        "We handle the hosting, scaling, and backups, so you can focus on building your application.",
    },
  ],
  pricingTiers: [
    {
      name: "Developer",
      audience: "For hobbyists & early POCs",
      price: "$25",
      priceDescription: "per month / resource",
      features: [
        "Up to 1,000 Twin Instances",
        "1M API Calls/month",
        "Community Support",
      ],
      cta: "Start Deploying",
    },
    {
      name: "Growth",
      audience: "For production applications",
      price: "$299",
      priceDescription: "per month / resource",
      features: [
        "Up to 25,000 Twin Instances",
        "50M API Calls/month",
        "Daily Backups",
        "Email Support",
      ],
      cta: "Choose Growth",
      popular: true,
    },
    {
      name: "Scale",
      audience: "For enterprise deployments",
      price: "Custom",
      priceDescription: "Pay-as-you-go",
      features: [
        "Unlimited Twin Instances",
        "Custom API Limits",
        "High-Availability & SLA",
        "Dedicated Support",
      ],
      cta: "Contact Sales",
    },
  ],
  ready: true,
};

export const flowProduct: Product = {
  icon: Workflow,
  title: "Konnektr Flow",
  description:
    "The real-time data and event orchestrator. The nervous system for your digital twin, enabling you to ingest data, trigger notifications, and automate complex actions.",
  features: [
    {
      title: "Visual Flow Builder",
      description:
        "Design complex data ingestion and business logic workflows with a simple drag-and-drop interface.",
    },
    {
      title: "Rich Connector Library",
      description:
        "Connect to dozens of services out-of-the-box, from IoT Hubs and message brokers to databases and SaaS APIs.",
    },
    {
      title: "Triggered by Graph Events",
      description:
        "Initiate flows automatically based on state changes in your Konnektr Graph instances.",
    },
    {
      title: "Serverless Execution",
      description:
        "All flows run on our scalable, serverless infrastructure. You only pay for what you use.",
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
  description:
    "The analytics and insights platform. Transform complex digital twin data into actionable insights with powerful visualization and analytics capabilities.",
  features: [
    {
      title: "Advanced Analytics",
      description:
        "Get deep insights from your digital twin data with AI-powered analytics and pattern recognition.",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Create beautiful, interactive dashboards to visualize your digital twin ecosystem.",
    },
    {
      title: "Predictive Insights",
      description:
        "Leverage machine learning to predict trends and optimize your digital twin operations.",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Monitor your digital twins in real-time with alerts and notifications for critical events.",
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
