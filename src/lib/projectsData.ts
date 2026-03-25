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
    subtitle: "Full-stack billing platform for orders, invoices, and payments",
    sector: "Retail Tech",
    timeframe: "Full-stack web application",
    role: "Full Stack Developer",
    summary:
      "Designed and developed a full-stack cafe billing system for managing orders, invoices, payments, and daily sales workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?auto=format&fit=crop&w=1400&q=80",
    palette: "royal blue, cream, gold accents",
    metrics: [
      { label: "Billing Errors", value: "-30%", detail: "better invoice accuracy" },
      { label: "Core Areas", value: "4", detail: "orders, invoices, payments, reports" },
      { label: "Stack", value: "7+", detail: "React to PostgreSQL" }
    ],
    challenges: [
      "Cafe operations needed a single workflow for order handling, invoice generation, and payment tracking.",
      "Backend services had to support item management and order processing without slowing down the billing desk.",
      "Daily sales data needed to stay consistent and reliable for reporting."
    ],
    solutions: [
      "Implemented backend APIs for bill generation, item management, and order processing using Django and REST APIs.",
      "Integrated database models for products, transactions, and daily sales reports with PostgreSQL.",
      "Built a responsive React interface focused on faster transactions and fewer billing mistakes."
    ],
    stack: ["React", "Python", "Django", "JavaScript", "Vite", "PostgreSQL", "REST API", "Git"],
    timeline: [
      { phase: "Planning", focus: "Billing and order workflows", result: "Defined core modules and database design" },
      { phase: "Development", focus: "REST APIs and UI", result: "End-to-end order, invoice, and payment flow" },
      { phase: "Optimization", focus: "Reports and validation", result: "Improved speed and billing accuracy" }
    ],
    highlights: [
      "Full-stack billing system for managing orders, invoices, and payments.",
      "Backend APIs for bill generation, item management, and order processing.",
      "PostgreSQL models for products, transactions, and daily sales reports."
    ],
    gallery: [
      { label: "Billing workspace", description: "Order entry, invoice creation, and payment handling in one flow." },
      { label: "Product management", description: "Items, pricing, and transaction-backed billing operations." },
      { label: "Sales reporting", description: "Daily sales records and reporting views powered by PostgreSQL." }
    ]
  },
  {
    slug: "hrms",
    title: "HRMS",
    subtitle: "Human resources management software for structured internal operations",
    sector: "Business Software",
    timeframe: "Full-stack management system",
    role: "Full Stack Developer",
    summary:
      "Developed a human resources management system for handling employee data, workflows, and administrative operations through a structured web-based platform.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    palette: "professional blue-gray with admin-focused clarity",
    metrics: [
      { label: "System", value: "HRMS", detail: "employee and admin workflows" },
      { label: "Modules", value: "Core", detail: "records, workflows, management" },
      { label: "Type", value: "Full Stack", detail: "frontend and backend support" }
    ],
    challenges: [
      "The system needed to organize employee-related information in a way that was easy for administrators to manage.",
      "Different HR workflows had to be represented cleanly without making the platform feel overly complex.",
      "Internal tools required a structured UI that supported repeat administrative tasks efficiently."
    ],
    solutions: [
      "Built a full-stack management system that centralized employee data and internal workflow operations.",
      "Created an admin-oriented interface that emphasized clarity, readability, and easy access to management features.",
      "Structured the application around practical HR use cases so everyday operations could be handled more efficiently."
    ],
    stack: ["React", "Django", "PostgreSQL", "Management System", "Admin Panel", "Git"],
    timeline: [
      { phase: "Discovery", focus: "HR process mapping", result: "Core management flows outlined" },
      { phase: "Development", focus: "System modules and admin UI", result: "Employee workflow platform completed" },
      { phase: "Optimization", focus: "Usability and structure", result: "Improved day-to-day admin handling" }
    ],
    highlights: [
      "Human resources management system built for structured internal workflows.",
      "Full-stack implementation covering both interface and management logic.",
      "Admin-friendly experience focused on employee records and operational organization."
    ],
    gallery: [
      { label: "Employee records", description: "Centralized views for managing employee-related information." },
      { label: "Admin workflow", description: "Operational screens built for daily HR management tasks." },
      { label: "Management dashboard", description: "Overview-oriented interface for tracking and handling internal processes." }
    ]
  },
  {
    slug: "lanka-records",
    title: "Lanka Book of Records Website",
    subtitle: "National records website for submissions, approvals, and public showcase",
    sector: "Records Platform",
    timeframe: "Full-stack platform",
    role: "Full Stack Developer",
    summary:
      "Developed a full-stack platform for managing and showcasing national records with responsive UI, REST APIs, and admin approval tools.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    palette: "navy gradient with gold highlights",
    metrics: [
      { label: "Admin Flow", value: "Secure", detail: "approval and data management" },
      { label: "Frontend", value: "Responsive", detail: "React-based public UI" },
      { label: "Deploy", value: "2 Platforms", detail: "Netlify and Render" }
    ],
    challenges: [
      "The platform needed to support both public record showcase pages and protected management workflows.",
      "Admins required approval tools to review submissions and manage record data safely.",
      "Deployment needed to keep the experience responsive and stable in production."
    ],
    solutions: [
      "Built secure RESTful APIs and a responsive React interface for record browsing and management.",
      "Implemented an admin panel for record approval and structured data handling with Django and PostgreSQL.",
      "Deployed the application using Netlify and Render with a focus on performance optimization."
    ],
    stack: ["React", "Django", "PostgreSQL", "REST API", "Netlify", "Render", "Git"],
    timeline: [
      { phase: "Planning", focus: "Records workflow and data model", result: "Public and admin modules defined" },
      { phase: "Implementation", focus: "APIs and admin panel", result: "Record submission and approval flow completed" },
      { phase: "Deployment", focus: "Hosting and performance", result: "Production-ready rollout on Netlify and Render" }
    ],
    highlights: [
      "Full-stack platform for managing and showcasing national records.",
      "Secure REST APIs and responsive React-based user interface.",
      "Admin panel for record approval and structured data management."
    ],
    gallery: [
      { label: "Public showcase", description: "Frontend experience for browsing and viewing published records." },
      { label: "Submission management", description: "Structured workflows for adding and reviewing record entries." },
      { label: "Admin approvals", description: "Record approval and data management tools for administrators." }
    ]
  },
  {
    slug: "cookbook-assistant",
    title: "Cookbook - Virtual Kitchen Assistant",
    subtitle: "Recipe assistant with search, filtering, and nutrition-aware features",
    sector: "Food Tech",
    timeframe: "Full-stack assistant",
    role: "Full Stack Developer",
    summary:
      "Developed a full-stack recipe assistant using React and Django with search, filtering, recipe management, and nutrition-focused features.",
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    palette: "royal blue with warm gold accents",
    metrics: [
      { label: "API Layer", value: "RESTful", detail: "search, filtering, management" },
      { label: "Nutrition", value: "Integrated", detail: "external API connections" },
      { label: "Database", value: "Optimized", detail: "PostgreSQL-backed performance" }
    ],
    challenges: [
      "Users needed an easy way to search and filter recipes across different preferences.",
      "Recipe data had to connect cleanly with external nutrition APIs.",
      "The database layer needed to stay efficient as recipe and preference data grew."
    ],
    solutions: [
      "Built RESTful APIs for recipe search, filtering, and recipe management using Django.",
      "Integrated external nutrition APIs and user preference features into the full-stack flow.",
      "Designed a PostgreSQL database structure and optimized application performance for smoother usage."
    ],
    stack: ["React", "Django", "REST API", "PostgreSQL", "Git"],
    timeline: [
      { phase: "Design", focus: "Recipe and preference workflows", result: "Defined core search and management features" },
      { phase: "Build", focus: "REST APIs and integrations", result: "Recipe search and nutrition APIs connected" },
      { phase: "Optimize", focus: "Database and performance", result: "Improved responsiveness across the application" }
    ],
    highlights: [
      "Full-stack recipe assistant built with React and Django.",
      "RESTful APIs for recipe search, filtering, and management.",
      "External nutrition APIs and user preference features integrated into the product."
    ],
    gallery: [
      { label: "Recipe explorer", description: "Search and filtering experience for discovering recipes quickly." },
      { label: "Nutrition insights", description: "Integrated nutrition data displayed alongside recipe information." },
      { label: "Preference system", description: "User-oriented recipe experience shaped by saved preferences." }
    ]
  },
  {
    slug: "healthpal-app",
    title: "HealthPal App",
    subtitle: "Doctor appointment mobile app built with React Native Expo",
    sector: "Health Tech",
    timeframe: "Mobile application",
    role: "Frontend Mobile Developer",
    summary:
      "Built a healthcare appointment app using React Native Expo to help users browse doctors, select slots, and manage bookings through a smooth mobile-first experience.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    palette: "clean blue, soft white, trust-first mobile UI",
    metrics: [
      { label: "Platform", value: "Mobile", detail: "React Native Expo app" },
      { label: "Flow", value: "Booking", detail: "doctor and slot selection" },
      { label: "UX", value: "Smooth", detail: "mobile-friendly navigation" }
    ],
    challenges: [
      "The app needed a simple appointment flow that felt easy for users on small mobile screens.",
      "Doctor discovery, schedule selection, and booking confirmation had to stay clear without overwhelming the interface.",
      "The UI needed to feel responsive and trustworthy for a healthcare use case."
    ],
    solutions: [
      "Built the app with React Native Expo and structured the screens around a simple doctor-to-slot booking journey.",
      "Designed mobile-friendly layouts for listing doctors, viewing availability, and confirming appointments.",
      "Focused on clean navigation patterns and calm visual hierarchy to make the healthcare flow easy to follow."
    ],
    stack: ["React Native", "Expo", "JavaScript", "Mobile UI", "Navigation"],
    timeline: [
      { phase: "Planning", focus: "Doctor booking journey", result: "Defined core appointment screens" },
      { phase: "Development", focus: "Mobile UI and navigation", result: "Working booking flow across screens" },
      { phase: "Refinement", focus: "Usability polish", result: "Smoother mobile appointment experience" }
    ],
    highlights: [
      "Doctor appointment booking flow designed for mobile users.",
      "React Native Expo implementation with clear screen-to-screen navigation.",
      "Healthcare-focused UI that keeps slot selection and booking easy to understand."
    ],
    gallery: [
      { label: "Doctor listing", description: "Browse doctors with clear cards and mobile-friendly information layout." },
      { label: "Slot selection", description: "Pick available appointment times through a simple touch-first interface." },
      { label: "Booking confirmation", description: "Review and confirm appointments with a focused final-step screen." }
    ]
  },
  {
    slug: "food-beverage-gaming-site",
    title: "Food Beverage and Gaming Site",
    subtitle: "Frontend platform for food ordering and gaming bookings",
    sector: "Booking Platform",
    timeframe: "Frontend web application",
    role: "Frontend Developer",
    summary:
      "Designed a frontend-only website combining food ordering with gaming reservations for PS5, snooker, and gaming table bookings in one experience.",
    heroImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
    palette: "dark gaming tones with energetic booking accents",
    metrics: [
      { label: "Mode", value: "Frontend", detail: "UI-focused experience" },
      { label: "Bookings", value: "Multi-type", detail: "food and game reservations" },
      { label: "Experience", value: "Unified", detail: "ordering and slot selection" }
    ],
    challenges: [
      "The site needed to support two different use cases, food ordering and gaming bookings, in one cohesive interface.",
      "Users had to move between booking categories like PS5, snooker, and table reservations without confusion.",
      "The layout needed to remain responsive while presenting entertainment-focused content clearly."
    ],
    solutions: [
      "Designed a frontend structure that separates ordering flows and booking flows while keeping the experience visually connected.",
      "Created responsive UI sections for food menus, gaming categories, and reservation choices.",
      "Used clear calls to action and category-driven layouts so users could quickly understand what they wanted to book."
    ],
    stack: ["React", "JavaScript", "Frontend", "Responsive Design", "Booking UI"],
    timeline: [
      { phase: "Concept", focus: "Ordering plus booking structure", result: "Unified frontend information architecture" },
      { phase: "Build", focus: "Responsive pages and category flows", result: "Food and gaming journeys completed" },
      { phase: "Polish", focus: "Visual clarity and booking cues", result: "Cleaner multi-service browsing experience" }
    ],
    highlights: [
      "Frontend-only site combining food ordering with gaming reservations.",
      "Dedicated booking views for PS5, snooker, and table scheduling.",
      "Responsive layouts built for entertainment-focused browsing."
    ],
    gallery: [
      { label: "Landing page", description: "Entry view that balances food ordering and gaming reservations." },
      { label: "Gaming bookings", description: "Category-specific booking UI for PS5, snooker, and game tables." },
      { label: "Food ordering", description: "Menu-style interface for browsing items and ordering options." }
    ]
  },
  {
    slug: "software-company-site",
    title: "Software Company Site",
    subtitle: "Company website with frontend and backend support",
    sector: "Corporate Website",
    timeframe: "Full-stack website",
    role: "Full Stack Developer",
    summary:
      "Built a software company website with both frontend and backend support to present services, handle dynamic content, and support business communication flows.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    palette: "corporate navy with crisp content-first sections",
    metrics: [
      { label: "Website", value: "Business", detail: "service-focused presentation" },
      { label: "Type", value: "Full Stack", detail: "frontend plus backend" },
      { label: "Content", value: "Dynamic", detail: "managed business information" }
    ],
    challenges: [
      "The company site needed to represent services professionally while remaining easy to update and manage.",
      "Business contact and content areas had to be presented clearly across desktop and mobile devices.",
      "The frontend and backend had to work together without making the site feel heavy."
    ],
    solutions: [
      "Built the site with both presentation layers and backend-supported data handling for business content.",
      "Designed a structured service-focused interface for showcasing offerings, trust signals, and company information.",
      "Created a practical content flow that supports both visual presentation and maintainable updates."
    ],
    stack: ["React", "Django", "Backend", "Company Website", "Responsive Design"],
    timeline: [
      { phase: "Planning", focus: "Service and content structure", result: "Defined company-facing page flow" },
      { phase: "Build", focus: "Frontend and backend integration", result: "Dynamic business website delivered" },
      { phase: "Refine", focus: "Responsiveness and presentation", result: "Polished company web experience" }
    ],
    highlights: [
      "Software company website built with both frontend and backend support.",
      "Service presentation, content handling, and contact-oriented flows in one platform.",
      "Responsive business design focused on clear communication and brand presence."
    ],
    gallery: [
      { label: "Services section", description: "Structured presentation of company offerings and expertise." },
      { label: "Company pages", description: "Brand-focused layouts for trust, positioning, and communication." },
      { label: "Content management", description: "Backend-supported dynamic areas for maintaining website information." }
    ]
  },
  {
    slug: "cafe-website",
    title: "Cafe Website",
    subtitle: "Frontend cafe website for menu browsing and customer presentation",
    sector: "Hospitality Website",
    timeframe: "Frontend website",
    role: "Frontend Developer",
    summary:
      "Created a frontend-only cafe website focused on visual storytelling, menu presentation, and a responsive browsing experience for customers.",
    heroImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
    palette: "warm cafe tones with inviting lifestyle visuals",
    metrics: [
      { label: "Type", value: "Frontend", detail: "customer-facing web experience" },
      { label: "Focus", value: "Visual", detail: "menu and brand presentation" },
      { label: "Layout", value: "Responsive", detail: "desktop and mobile browsing" }
    ],
    challenges: [
      "The site needed to capture the cafe atmosphere while still keeping the browsing experience simple.",
      "Menu presentation had to be attractive and easy to scan across devices.",
      "The design needed to support customer engagement without unnecessary complexity."
    ],
    solutions: [
      "Built a frontend experience centered around inviting visuals, clear sections, and easy menu exploration.",
      "Designed responsive layouts that keep menu browsing and brand presentation strong on both mobile and desktop.",
      "Focused on presentation-first storytelling to help the site feel warm, polished, and customer-friendly."
    ],
    stack: ["React", "Frontend", "Responsive UI", "Menu Presentation", "Landing Page"],
    timeline: [
      { phase: "Concept", focus: "Cafe visual direction", result: "Defined look and content flow" },
      { phase: "Design", focus: "Menu and section layouts", result: "Customer-facing pages completed" },
      { phase: "Polish", focus: "Responsive refinement", result: "Smooth browsing across screen sizes" }
    ],
    highlights: [
      "Frontend-only cafe website tailored for customer engagement.",
      "Menu presentation and brand storytelling built into the layout.",
      "Responsive browsing experience with a polished hospitality feel."
    ],
    gallery: [
      { label: "Hero section", description: "Warm brand-led opening view introducing the cafe experience." },
      { label: "Menu showcase", description: "Customer-friendly layout for exploring featured menu items." },
      { label: "Responsive pages", description: "Frontend screens adapted for mobile and desktop visitors." }
    ]
  },
  {
    slug: "student-lab-face-recognition-attendance",
    title: "Student Lab Entry Face Recognition Attendance System",
    subtitle: "Face recognition attendance platform for lab entry management",
    sector: "Education Tech",
    timeframe: "Full-stack system",
    role: "Full Stack Developer",
    summary:
      "Built a full-stack attendance system using face recognition to support student lab entry tracking and automated attendance recording.",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    palette: "technical blue with system-monitoring accents",
    metrics: [
      { label: "System", value: "Attendance", detail: "entry and tracking workflow" },
      { label: "Method", value: "Face Recognition", detail: "identity-based verification" },
      { label: "Type", value: "Full Stack", detail: "frontend and backend system" }
    ],
    challenges: [
      "Attendance needed to be captured automatically when students entered the lab environment.",
      "The system had to connect identity verification with attendance recording in a practical workflow.",
      "Administrative visibility into entry records and attendance history was important for operational use."
    ],
    solutions: [
      "Built a full-stack platform that ties face recognition-based verification to attendance marking.",
      "Designed frontend and backend flows that support student entry, attendance capture, and record tracking.",
      "Structured the system around reliable lab entry monitoring so attendance handling could become more automated."
    ],
    stack: ["React", "Backend", "Face Recognition", "Attendance System", "Database"],
    timeline: [
      { phase: "Research", focus: "Entry and attendance workflow", result: "Recognition-linked process defined" },
      { phase: "Implementation", focus: "Frontend, backend, and verification flow", result: "Automated attendance path created" },
      { phase: "Stabilization", focus: "Tracking and record handling", result: "More structured lab attendance management" }
    ],
    highlights: [
      "Full-stack attendance platform connected to face recognition-based entry.",
      "Automated workflow for lab access and attendance recording.",
      "Structured admin visibility into student attendance and entry data."
    ],
    gallery: [
      { label: "Entry verification", description: "Face recognition-driven step for identifying students during lab access." },
      { label: "Attendance records", description: "Tracked attendance data linked to verified lab entries." },
      { label: "Admin monitoring", description: "System views for reviewing attendance and entry activity." }
    ]
  },
  {
    slug: "tazviro-technologies-site",
    title: "Tazviro Technologies Company Site",
    subtitle: "Frontend company website for brand and service presentation",
    sector: "Corporate Website",
    timeframe: "Frontend website",
    role: "Frontend Developer",
    summary:
      "Developed a frontend company website for Tazviro Technologies with responsive layouts, service-focused sections, and a professional brand presentation.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    palette: "clean corporate tones with modern section-based layouts",
    metrics: [
      { label: "Type", value: "Frontend", detail: "brand presentation site" },
      { label: "Focus", value: "Corporate", detail: "services and company profile" },
      { label: "UI", value: "Responsive", detail: "multi-device presentation" }
    ],
    challenges: [
      "The website needed to present the company professionally while staying modern and easy to navigate.",
      "Service information had to be organized clearly for potential clients and visitors.",
      "The site needed to remain visually strong across mobile and desktop layouts."
    ],
    solutions: [
      "Built a frontend-only corporate website with a clean section-based layout and responsive presentation.",
      "Structured the interface around service highlights, company messaging, and a professional brand feel.",
      "Focused on readability, spacing, and visual hierarchy so the site could support both trust and clarity."
    ],
    stack: ["React", "Frontend", "Corporate UI", "Responsive Design", "Landing Pages"],
    timeline: [
      { phase: "Planning", focus: "Company positioning and content structure", result: "Clear section map for the site" },
      { phase: "Design", focus: "Responsive service-focused pages", result: "Professional frontend experience delivered" },
      { phase: "Polish", focus: "Brand consistency and clarity", result: "Stronger company web presence" }
    ],
    highlights: [
      "Frontend company website built for Tazviro Technologies.",
      "Professional service-focused layout with responsive presentation.",
      "Corporate UI designed to support credibility and business visibility."
    ],
    gallery: [
      { label: "Company landing", description: "Brand-oriented opening experience for visitors and clients." },
      { label: "Services layout", description: "Responsive presentation of company offerings and capabilities." },
      { label: "Corporate sections", description: "Structured content blocks designed for professional communication." }
    ]
  },
  {
    slug: "salon-appointment-booking",
    title: "Salon Appointment Booking",
    subtitle: "Frontend salon booking interface for appointments and service selection",
    sector: "Beauty Booking",
    timeframe: "Frontend application",
    role: "Frontend Developer",
    summary:
      "Designed a frontend-only salon appointment booking interface for browsing services, selecting slots, and making scheduling easier for users.",
    heroImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
    palette: "soft beauty tones with clean scheduling layouts",
    metrics: [
      { label: "Type", value: "Frontend", detail: "booking-focused interface" },
      { label: "Flow", value: "Appointments", detail: "service and slot selection" },
      { label: "Experience", value: "Intuitive", detail: "simplified user journey" }
    ],
    challenges: [
      "Users needed to browse salon services and book time slots through a clear frontend experience.",
      "Appointment flows had to feel simple and visually calm rather than cluttered.",
      "The interface needed to support service selection, scheduling, and responsive viewing."
    ],
    solutions: [
      "Designed a frontend booking experience centered on browsing services and selecting appointment slots easily.",
      "Created a clean UI structure that guides users from service discovery to scheduling decisions.",
      "Focused on responsive layouts and visual simplicity to keep the booking flow approachable."
    ],
    stack: ["React", "Frontend", "Booking Flow", "UI Design", "Responsive Design"],
    timeline: [
      { phase: "Planning", focus: "Service and slot journey", result: "Simple booking structure defined" },
      { phase: "Build", focus: "Booking UI and responsive pages", result: "Appointment flow delivered" },
      { phase: "Refinement", focus: "Ease of use and polish", result: "Cleaner salon scheduling experience" }
    ],
    highlights: [
      "Frontend-only salon booking interface for service and appointment selection.",
      "Simple scheduling flow designed around user clarity.",
      "Responsive design focused on a polished beauty-service experience."
    ],
    gallery: [
      { label: "Services page", description: "Salon offerings presented in a clean and approachable layout." },
      { label: "Slot selection", description: "Booking interface for choosing suitable appointment times." },
      { label: "Confirmation flow", description: "Frontend journey supporting simple appointment completion." }
    ]
  },
  {
    slug: "supermarket-system",
    title: "Supermarket System",
    subtitle: "Full-stack supermarket platform for products and operations",
    sector: "Retail Software",
    timeframe: "Full-stack application",
    role: "Full Stack Developer",
    summary:
      "Built a full-stack supermarket system to support product handling, customer-facing flows, and backend-driven management operations in a retail context.",
    heroImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
    palette: "retail green with operational dashboard contrast",
    metrics: [
      { label: "Type", value: "Full Stack", detail: "frontend and backend operations" },
      { label: "Domain", value: "Retail", detail: "supermarket workflow support" },
      { label: "Coverage", value: "Integrated", detail: "products and management" }
    ],
    challenges: [
      "The system needed to serve both customer-facing interactions and internal supermarket management operations.",
      "Product-related workflows had to remain organized and practical for retail usage.",
      "Frontend and backend coordination was important to keep the overall platform useful and structured."
    ],
    solutions: [
      "Built a full-stack retail application supporting product handling and operational management in one system.",
      "Designed interface flows that help present and organize supermarket-related actions clearly.",
      "Connected frontend and backend responsibilities to support broader retail workflow coverage."
    ],
    stack: ["React", "Django", "PostgreSQL", "Retail System", "Management Platform"],
    timeline: [
      { phase: "Discovery", focus: "Retail workflow structure", result: "Core system areas identified" },
      { phase: "Development", focus: "Frontend and backend features", result: "Integrated supermarket platform built" },
      { phase: "Polish", focus: "Operational usability", result: "More practical retail management flow" }
    ],
    highlights: [
      "Full-stack supermarket application for retail operations.",
      "Integrated customer-facing and backend management functionality.",
      "Structured product and workflow handling for supermarket use cases."
    ],
    gallery: [
      { label: "Product interface", description: "Views for handling and presenting supermarket product-related information." },
      { label: "Management flow", description: "Operational screens supporting internal supermarket tasks." },
      { label: "Retail overview", description: "Integrated frontend and backend experience for supermarket workflows." }
    ]
  }
];

export const getProjectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug);
