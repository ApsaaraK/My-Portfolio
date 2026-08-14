// All content below reflects verified, real information provided by Tiruni.
// No fabricated metrics, testimonials, or client claims.

export const profile = {
  name: "Tiruni Karunarathna",
  fullName: "Tiruni Apsara Karunarathna",
  title: "Data Engineer",
  location: "Colombo, Sri Lanka",
  tagline: "Building reliable data pipelines and analytics infrastructure — from enterprise migrations to freelance client work.",
  email: "apsaratiruni@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/tiruni-karunarathna/",
    github: "https://github.com/ApsaaraK",
    tableau: "https://public.tableau.com/app/profile/tiruni.karunarathna/vizzes",
    medium: "https://medium.com/@apsaratiruni",
  },
  githubUsername: "ApsaaraK",
  bio: [
    "I'm a data engineer based in Colombo, Sri Lanka, focused on building ETL pipelines, data warehouses, and analytics infrastructure that hold up in production.",
    "My path into data started in operations — as a Master Data Entry Operator and later a Supply Chain Analyst at Brandix — before I moved into engineering and analytics. That background shapes how I work: I care about where data actually comes from and who has to act on it.",
    "I've freelanced on Upwork since 2020 across data engineering and web development, and completed a data engineering internship at ITX360 (Expolanka Holdings), working with Microsoft Fabric and Medallion architecture on enterprise data migrations.",
  ],
};

export const experience = [
  {
    role: "Data Engineering Intern",
    org: "ITX360, Expolanka Holdings",
    period: "Internship",
    points: [
      "Worked with Microsoft Fabric on enterprise data migration projects for financial services clients.",
      "Implemented Medallion architecture (Bronze / Silver / Gold layers) for structured, governed data pipelines.",
    ],
  },
  {
    role: "Freelance Data Engineer & Web Developer",
    org: "Upwork",
    period: "2020 — Present",
    points: [
      "Delivered data pipeline, dashboard, and full-stack web projects for freelance clients.",
      "Built and shipped end-to-end web applications spanning frontend, backend, and database design.",
    ],
  },
  {
    role: "Supply Chain Analyst",
    org: "Brandix",
    period: "",
    points: [
      "Analyzed supply chain data to support planning and operational decisions.",
    ],
  },
  {
    role: "Master Data Entry Operator",
    org: "Brandix",
    period: "",
    points: [
      "Started here — the operational, data-handling foundation that led into data engineering.",
    ],
  },
];

export const education = {
  degree: "BSc (Hons) in Computer Science",
  school: "University of Jaffna",
};

export const certifications = [
  { name: "Tableau Desktop Specialist", issuer: "Tableau", status: "Certified" },
  { name: "AZ-900: Azure Fundamentals", issuer: "Microsoft", status: "Certified" },
  { name: "DP-300: Azure Database Administrator Associate", issuer: "Microsoft", status: "Certified" },
  { name: "DP-700: Fabric Analytics Engineer Associate", issuer: "Microsoft", status: "In Progress" },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    label: "Data Engineering",
    skills: ["ETL / ELT", "Apache Spark", "Apache Kafka", "Airflow", "Medallion Architecture", "Data Modeling", "Data Warehousing"],
  },
  {
    label: "Cloud & Platforms",
    skills: ["Microsoft Azure", "Microsoft Fabric", "AWS", "Docker"],
  },
  {
    label: "Analytics & BI",
    skills: ["Tableau", "Data Visualization", "Dashboard Design"],
  },
  {
    label: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Django"],
  },
];

// Real, currently-active projects — the core of the portfolio.
export const featuredProject = {
  slug: "cost-of-living",
  title: "Sri Lanka Cost-of-Living Data Portfolio",
  status: "In Progress",
  summary: "An end-to-end data pipeline turning open Sri Lankan government data into a cost-of-living analytics dashboard.",
  description: [
    "A personal data engineering project analyzing cost-of-living trends in Sri Lanka using open data from the Department of Census & Statistics and the Central Bank of Sri Lanka.",
    "Built on a Medallion architecture (Bronze / Silver / Gold layers) in Python and PostgreSQL, cleaning and modeling raw government datasets into analysis-ready tables.",
    "The presentation layer is a Tableau dashboard, currently in development, designed to make regional and category-level price trends easy to explore.",
  ],
  tech: ["Python", "PostgreSQL", "Medallion Architecture", "Tableau", "ETL"],
};

export const otherProjects = [
  {
    slug: "phoenix-lanka",
    title: "Phoenix Lanka",
    subtitle: "E-commerce Platform",
    summary: "E-commerce site with PayHere payment integration, being rebuilt with a Next.js frontend and a Node/Express + SQLite backend.",
    tech: ["Next.js", "Node.js", "Express", "SQLite", "PayHere API"],
    url: "https://phoenixlanka.com",
  },
  {
    slug: "flyceylon",
    title: "FlyCeylon",
    subtitle: "Tourism Booking Platform",
    summary: "A Sri Lanka tourism booking platform with multilingual support, responsive design, and detailed tour pages.",
    tech: ["Web Development", "Multilingual", "Responsive Design"],
  },
  {
    slug: "sweets-erp",
    title: "Sweets Manufacturing ERP",
    subtitle: "HR, Inventory & Finance",
    summary: "Internal business application covering attendance & payroll, raw-material and finished-goods inventory, finance, and delivery fleet tracking — built as a responsive, installable PWA.",
    tech: ["Python", "Django", "PostgreSQL", "PWA"],
  },
  {
    slug: "engspire",
    title: "Engspire",
    subtitle: "School Management SaaS",
    summary: "A school management SaaS platform for administration, students, and staff.",
    tech: ["Web Development", "SaaS"],
  },
];

// Self-directed architecture design studies — clearly labeled as concept/learning
// work, not client or production deployments. Fabricated metrics from the old
// site were removed; only real technical content is kept.
export const architectureStudies = [
  {
    slug: "realtime-pipeline",
    title: "Real-Time Streaming Pipeline",
    summary: "A design study in event-driven architecture: Kafka, Flink, and Spark Streaming working together for real-time data movement.",
    tech: ["Apache Kafka", "Apache Flink", "Apache Spark", "Debezium (CDC)", "Docker"],
    images: ["kafka_architecture.png", "kafka_flow.png", "flink_architecture_light.png"],
    components: [
      { title: "Kafka Streaming Backbone", detail: "Multi-topic partition routing with Avro/Protobuf schema governance via Schema Registry, so producer changes can't silently break consumers." },
      { title: "Change Data Capture", detail: "Debezium connectors tailing PostgreSQL WAL and MySQL Binlog to stream row-level changes as structured Kafka events." },
      { title: "Stream Processing", detail: "Flink jobs with windowed aggregations and checkpointing for stateful, fault-tolerant computation over the Kafka streams." },
    ],
  },
  {
    slug: "data-warehouse",
    title: "Cloud Data Warehouse Design",
    summary: "A design study comparing warehouse modeling approaches — star schema and Data Vault 2.0 — on Snowflake and BigQuery.",
    tech: ["Snowflake", "BigQuery", "Star Schema", "Data Vault 2.0", "dbt"],
    images: ["star_architecture.png", "vault_architecture.png", "bigquery_architecture.png"],
    components: [
      { title: "Star Schema Modeling", detail: "Fact and dimension table design optimized for BI query performance and analyst usability." },
      { title: "Data Vault 2.0", detail: "Hub / link / satellite modeling for a warehouse layer designed to handle historized, auditable, slowly-changing source data." },
      { title: "ETL Pipelines & Data Quality", detail: "Layered transformation pipelines with data quality checks between raw, staged, and modeled layers." },
    ],
  },
  {
    slug: "ml-infrastructure",
    title: "ML Data Infrastructure",
    summary: "A design study in the data layer that supports ML in production: feature stores, versioning, and model serving.",
    tech: ["Feature Store", "MLflow", "DVC", "Model Serving"],
    images: ["feature_store_architecture.png", "mlflow_architecture.png", "dvc_architecture.png"],
    components: [
      { title: "Feature Store", detail: "Centralized feature definitions shared between training and serving, to avoid training/serving skew." },
      { title: "Experiment Tracking", detail: "MLflow for logging runs, parameters, and metrics so model iterations stay comparable and reproducible." },
      { title: "Data Versioning", detail: "DVC for versioning datasets alongside code, so any model run can be traced back to the exact data it was trained on." },
    ],
  },
];

// LinkedIn recommendations. PLACEHOLDER DATA — replace every field before
// publishing. Do not put real names/quotes here without the recommender's
// knowledge that they'll be shown publicly with photo + quote.
// The dashed border + "Placeholder" badge in the UI are driven by name
// starting with "[" — once you fill in a real name, that styling goes away.
export const recommendations = [
  {
    name: "[Recommender Name]",
    title: "[Their Title at Company]",
    relationship: "[How they worked with you — e.g. \"Managed Tiruni at ITX360\"]",
    photo: "https://ui-avatars.com/api/?name=%3F&background=e8eaed&color=5f6368&size=200&bold=true",
    quote: "[Paste the exact recommendation text from LinkedIn here — word for word, not paraphrased.]",
    linkedinUrl: "", // optional: link to the recommender's LinkedIn profile
  },
];

export const tableauGallery = {
  title: "Tableau Dashboard Gallery",
  summary: "Practice dashboards built in Tableau to work through different analytics domains — sales, HR, customer, supply chain, and more. Interactive versions are on Tableau Public.",
  categories: [
    { key: "sales", label: "Sales Performance", explanation: "tableau_sales_explanation.png", shots: ["tableau_sales_dashboard1.png", "tableau_sales_dashboard2.png"] },
    { key: "customer", label: "Customer Segmentation", explanation: "tableau_customer_explanation.png", shots: ["tableau_customer_dashboard1.png", "tableau_customer_dashboard2.png"] },
    { key: "financial", label: "Financial Performance", explanation: "tableau_financial_explanation.png", shots: ["tableau_financial_dashboard1.png", "tableau_financial_dashboard2.png"] },
    { key: "supply", label: "Supply Chain Analytics", explanation: "tableau_supply_explanation.png", shots: ["tableau_supply_dashboard1.png", "tableau_supply_dashboard2.png"] },
    { key: "hr", label: "HR Analytics", explanation: "tableau_hr_explanation.png", shots: ["tableau_hr_dashboard1.png", "tableau_hr_dashboard2.png"] },
    { key: "marketing", label: "Marketing Campaigns", explanation: "tableau_marketing_explanation.png", shots: ["tableau_marketing_dashboard1.png", "tableau_marketing_dashboard2.png"] },
    { key: "ecommerce", label: "E-commerce Analytics", explanation: "tableau_ecommerce_explanation.png", shots: ["tableau_ecommerce_dashboard1.png", "tableau_ecommerce_dashboard2.png"] },
    { key: "product", label: "Product Analytics", explanation: "tableau_product_explanation.png", shots: ["tableau_product_dashboard1.png", "tableau_product_dashboard2.png"] },
  ],
};
