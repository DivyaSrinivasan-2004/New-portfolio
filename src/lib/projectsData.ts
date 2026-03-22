export type ProjectCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  sector: string;
  timeframe: string;
  role: string;
  summary: string;
  heroImage: string;
  palette: string;
  metrics: { label: string; value: string; detail?: string }[];
  challenges: string[];
  solutions: string[];
  stack: string[];
  timeline: { phase: string; focus: string; result: string }[];
  highlights: string[];
  gallery: { label: string; description: string }[];
};

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "cafe-billing",
    title: "Cafe Billing Software",
    subtitle: "Full-stack billing, orders, and payments for a multi-outlet cafe",
    sector: "Retail Tech",
    timeframe: "2025",
    role: "Full Stack Developer",
    summary:
      "Designed and delivered a responsive billing platform covering orders, invoices, payments, and sales reports with a shared REST API and web UI.",
    heroImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?auto=format&fit=crop&w=1400&q=80",
    palette: "royal blue, cream, gold accents",
    metrics: [
      { label: "Billing Errors", value: "-30%", detail: "after validation flows" },
      { label: "Checkout Speed", value: "+22%", detail: "optimized UI + caching" },
      { label: "Modules", value: "5", detail: "orders, items, billing, reports, admin" }
    ],
    challenges: [
      "Fragmented order entry and billing caused slow counters and mismatched invoices.",
      "Admins needed role-based access and audit history for billing changes.",
      "Daily sales and billing reports had to stay consistent across branches."
    ],
    solutions: [
      "Built RESTful services in Django for orders, line items, payments, and receipts with input validation.",
      "React/Vite front end with optimistic updates, cached menus, and error toasts to speed cashier flow.",
      "Reporting pipeline with PostgreSQL views for daily sales, discounts, and payment methods plus export."
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django REST",
      "PostgreSQL",
      "REST API",
      "Git"
    ],
    timeline: [
      { phase: "Discovery", focus: "Mapped cashier and manager workflows", result: "Defined 5 core modules" },
      { phase: "Build", focus: "REST APIs + responsive UI", result: "End-to-end billing in staging" },
      { phase: "Launch", focus: "Reporting + validation polish", result: "30% fewer billing errors" }
    ],
    highlights: [
      "Tabbed cashier workspace for orders, invoices, and payments with keyboard-friendly shortcuts.",
      "Role-aware admin area for item CRUD, taxes, discounts, and user access.",
      "Billing reports by day, payment type, and item mix with CSV export."
    ],
    gallery: [
      { label: "Billing lane", description: "Order entry with live totals and payment capture." },
      { label: "Admin desk", description: "User roles, menu items, taxes, and discounts control." },
      { label: "Reports", description: "Daily sales, invoice status, and settlement views." }
    ]
  },
  {
    slug: "lanka-records",
    title: "Lanka Book of Records",
    subtitle: "National records platform with submissions, review, and showcases",
    sector: "Media · Records",
    timeframe: "2024",
    role: "Full Stack Developer",
    summary:
      "Delivered a web platform for managing and showcasing national records with REST APIs, responsive UI, and an admin review console.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    palette: "navy gradient with gold highlights",
    metrics: [
      { label: "Submissions", value: "120+", detail: "first release cohort" },
      { label: "Review SLA", value: "48h", detail: "targeted turnaround" },
      { label: "Uptime", value: "99.4%", detail: "Netlify + Render" }
    ],
    challenges: [
      "Needed a single source of truth for record submissions and approvals.",
      "Reviewers required an admin panel with filtering and status transitions.",
      "Public showcase had to remain fast on mobile and SEO-friendly."
    ],
    solutions: [
      "Structured record schemas in PostgreSQL with status workflow and media references.",
      "REST APIs in Django for submissions, reviewer actions, and public listings.",
      "Responsive React front end with lazy loading and cached record cards, deployed on Netlify/Render."
    ],
    stack: ["React", "Django", "PostgreSQL", "REST API", "Tailwind CSS", "Netlify", "Render", "Git"],
    timeline: [
      { phase: "Plan", focus: "Data model + roles", result: "Submitter/reviewer flows aligned" },
      { phase: "Implement", focus: "APIs + admin console", result: "End-to-end submission lifecycle" },
      { phase: "Deploy", focus: "SEO + perf pass", result: "Sub-2s initial load on mobile" }
    ],
    highlights: [
      "Admin console for approvals, status changes, and evidence review.",
      "Public gallery cards with category filters and fast image loading.",
      "Submission form with validation, media attachments, and confirmation mails."
    ],
    gallery: [
      { label: "Record grid", description: "Showcase of verified records with category chips." },
      { label: "Submission flow", description: "Guided form with evidence uploads and preview." },
      { label: "Reviewer desk", description: "Bulk actions, filters, and status transitions." }
    ]
  },
  {
    slug: "cookbook-assistant",
    title: "Cookbook · Virtual Kitchen Assistant",
    subtitle: "Recipe discovery, nutrition, and personalized cooking helper",
    sector: "Food Tech",
    timeframe: "2024",
    role: "Full Stack Developer",
    summary:
      "Built a virtual kitchen assistant that lets users search, filter, and manage recipes with nutrition insights and preference-aware recommendations.",
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    palette: "royal blue with warm gold accents",
    metrics: [
      { label: "Recipes Indexed", value: "2.5k", detail: "with nutrition data" },
      { label: "Search Latency", value: "190ms", detail: "P95 with indexed filters" },
      { label: "Retention", value: "+12%", detail: "from preference saving" }
    ],
    challenges: [
      "Users needed fast, faceted search across ingredients, cuisine, and diet.",
      "Nutrition data had to be fetched and cached while keeping responses light.",
      "Personalization required storing preferences without slowing API responses."
    ],
    solutions: [
      "Indexed PostgreSQL search with filters for cuisine, diet, prep time, and ingredients.",
      "Django REST endpoints that hydrate nutrition data from external APIs and cache results.",
      "React UI with saved preferences, quick filters, and optimistic favorites syncing."
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Django", "REST API", "PostgreSQL", "Git"],
    timeline: [
      { phase: "Research", focus: "Search experience + schema", result: "Facets for cuisine, diet, prep time" },
      { phase: "Build", focus: "Nutrition API integration", result: "Cached nutrition per recipe" },
      { phase: "Refine", focus: "Personalization + performance", result: "Stable sub-200ms searches" }
    ],
    highlights: [
      "Faceted recipe search with instant feedback and balanced text-wrapping cards.",
      "Nutrition badges and detail drawers per recipe with cached API responses.",
      "Saved preferences and favorites synchronized with lightweight PATCH calls."
    ],
    gallery: [
      { label: "Recipe explorer", description: "Grid with cuisine/diet filters and quick stats." },
      { label: "Nutrition drawer", description: "Macros and micronutrients from cached API calls." },
      { label: "Personal feed", description: "Suggested recipes using saved preferences." }
    ]
  }
];

export const getProjectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug);
