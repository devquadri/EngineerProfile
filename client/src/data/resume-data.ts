export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imagePlaceholder: string;
  icon: string;
  imageUrl?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  github?: string;
}

export interface ExpertiseArea {
  name: string;
  icon: string;
}

export interface TechnicalSkill {
  name: string;
  level: number;
  category: 'expert' | 'advanced' | 'intermediate' | 'beginner';
}

export interface Tool {
  name: string;
  icon: string;
  category: string;
}

export interface Language {
  name: string;
  proficiency: 'native' | 'proficient' | 'intermediate' | 'beginner';
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  techStack?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}

export const contactInfo: ContactInfo = {
  name: "Mohammed Riyazuddin",
  title: "Technical Support Engineer",
  email: "contact@riyaz.blog",
  phone: "+91 863-922-7538",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/mriyazuddin1/",
  github: "https://github.com/mriyazuddin"
};

export const professionalSummary = `Experienced Customer Success and Technical Support Engineer with over 5 years of experience helping users build and troubleshoot websites using WordPress, WooCommerce, and custom themes. Skilled at simplifying complex technical issues, writing clear documentation, and delivering outstanding customer experiences that make users feel heard and supported.`;

export const expertiseAreas: ExpertiseArea[] = [
  { name: "Product Support", icon: "headphones" },
  { name: "Technical Support", icon: "settings" },
  { name: "Technical Documentation", icon: "file-text" },
  { name: "Project Management", icon: "briefcase" },
  { name: "Bug Reporting", icon: "bug" },
  { name: "Training", icon: "graduation-cap" },
  { name: "Troubleshooting", icon: "wrench" },
  { name: "Process Improvement", icon: "trending-up" },
  { name: "Analytical Thinking", icon: "brain" },
  { name: "Leadership", icon: "users" },
  { name: "Debugging", icon: "code" },
  { name: "Customer Service", icon: "smile" },
];

export const technicalSkills: TechnicalSkill[] = [
  { name: "WordPress (core, themes, plugins)", level: 90, category: "advanced" },
  { name: "WooCommerce", level: 90, category: "advanced" },
  { name: "WP-CLI", level: 85, category: "advanced" },
  { name: "HTML & CSS", level: 90, category: "advanced" },
  { name: "JavaScript", level: 75, category: "intermediate" },
  { name: "PHP", level: 60, category: "beginner" },
  { name: "SQL", level: 60, category: "beginner" },
  { name: "Browser DevTools", level: 90, category: "advanced" },
  { name: "DNS Configuration", level: 90, category: "advanced" },
  { name: "Zendesk", level: 95, category: "expert" },  
  { name: "Microsoft 365 & Google Workspace", level: 90, category: "advanced" },
];

export const tools: Tool[] = [
  { name: "WordPress", icon: "wordpress", category: "CMS" },
  { name: "WooCommerce", icon: "shopping-cart", category: "eCommerce" },
  { name: "Zendesk", icon: "life-ring", category: "Support" },
  { name: "GitHub", icon: "github", category: "Development" },
  { name: "DevTools", icon: "code", category: "Development" },
  { name: "Jira", icon: "clipboard-list", category: "Project Management" },
];

export const languages: Language[] = [
  { name: "English", proficiency: "proficient" },
  { name: "Urdu", proficiency: "native" },
  { name: "Hindi", proficiency: "native" },
];

export const achievements: Achievement[] = [
  {
    title: "High-Volume Ticket Resolution",
    description: "Consistently handled 500+ tickets/month while maintaining 90%+ CSAT scores",
    icon: "ticket",
    metric: "500+",
  },
  {
    title: "Documentation Excellence",
    description: "Improved user support experience by creating and updating over 100 customer-facing documentation assets",
    icon: "file-alt",
    metric: "100+",
  },
  {
    title: "Team Training & Development",
    description: "Delivered multiple trainings to the team, resulting in improvement in resolution time",
    icon: "chalkboard-teacher",
    metric: "Multiple",
  },
];

export const experiences: Experience[] = [
  {
    company: "Freelance",
    position: "WordPress Developer",
    location: "Hyderabad, Remote",
    startDate: "Dec 2025",
    endDate: "Present",
    description: "Building WordPress/WooCommerce websites, troubleshooting issues with design, functionality, domains, DNS, Email, Newsletter and more.",
    achievements: [
      "Build custom, responsive WordPress sites and WooCommerce stores tailored to business requirements",
      "Diagnose and resolve technical issues involving themes, plugins, hosting, DNS, email, payment gateways, and APIs",
      "Optimize WooCommerce features including payment gateways, subscriptions, bookings, and third-party integrations",
    ],
    techStack: "WordPress, WooCommerce, PHP, JavaScript, HTML, CSS, SQL, WP-CLI, Git/GitHub, DNS, API integrations",
  },
  {
    company: "Automattic",
    position: "Happiness Engineer",
    location: "Hyderabad, Remote",
    startDate: "June 2019",
    endDate: "April 2025",
    description: "Resolved customer inquiries via email (Zendesk) and live chat supporting WordPress.com and WooCommerce platforms, enhancing user satisfaction and product usability. Used SQL queries to troubleshoot and resolve issues.",
    achievements: [
      "Improved customer experience by resolving technical issues and guiding users in building visually engaging websites",
      "Handled 500+ tickets/month while maintaining 90%+ CSAT scores",
      "Revamped over 100 customer-facing documentation assets within the Documentation Guild",
      "Developed APAC workforce through a 6-month talent acquisition initiative",
      "Delivered multiple trainings to the team, resulting in improvement in resolution time",
      "Troubleshot WooCommerce plugins including payment gateways (Stripe, PayPal, WooPayments), Bookings, and Subscriptions",
    ],
    techStack: "WordPress, WooCommerce, Zendesk, SQL, WP-CLI, Browser DevTools, DNS",
  },
  {
    company: "Teradata",
    position: "Senior Manager",
    location: "Hyderabad, Onsite",
    startDate: "Sep 2016",
    endDate: "Mar 2018",
    description: "Lead a team of L1 and L2 support engineers supporting Teradata products.",
    achievements: [],
    techStack: "",
  },
  {
    company: "Deloitte",
    position: "Manager, Service Desk",
    location: "Hyderabad, Onsite",
    startDate: "August 2005",
    endDate: "September 2016",
    description: "Started as a front line analyst providing IT support and went on to lead a team.",
    achievements: [],
    techStack: "IT Support, Software/Hardware Troubleshooting, Windows Operatign Systems, Microsoft Office, HR Systems",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Applications",
  institution: "Osmania University",
  location: "Hyderabad, India",
};

export const projects: Project[] = [
  {
    title: "Nature Life Water – WooCommerce Developer",
    category: "WooCommerce Development",
    description: "Designed and developed a WooCommerce-based e-commerce website for a Sierra Leone client. Led the complete store setup, including product creation, tax configuration, shipping logic, and integration of custom payment gateways. Implemented WhatsApp chat integration to enable seamless customer communication and inquiries. Also contributed to the design and development of all key website pages, ensuring a clean, user-friendly experience aligned with the brand.",
    techStack: ["WordPress", "WooCommerce", "CSS", "Custom Payment Gateways"],
    liveUrl: "https://naturelifewater.com", 
    githubUrl: "#", 
    imagePlaceholder: "bg-blue-100 dark:bg-blue-900/30 text-blue-500",
    icon: "layout-template",
    imageUrl: "/projects/nature-life-water.png"
  },
  {
    title: "Qaaf Gifts – Lead Developer",
    category: "WooCommerce Development",
    description: "A fully functional WooCommerce storefront for curated Islamic gifts. As the sole developer, I managed the end-to-end technical execution, from setting up secure payment gateways to optimizing the user experience. A major technical highlight of this project was developing and integrating a custom AI support assistant that is trained enough to autonomously answer routine customer inquiries, features a smart fallback routing system that allows the AI chat assistant to transfer complex tickets to a human support agent.",
    techStack: ["WordPress", "WooCommerce", "CSS", "Payment APIs", "AI Chat Assistant"],
    liveUrl: "https://qaafgifts.com", 
    githubUrl: "#", 
    imagePlaceholder: "bg-blue-100 dark:bg-blue-900/30 text-blue-500",
    icon: "layout-template",
    imageUrl: "/projects/qaaf-gifts.png"
  },
  {
    title: "Quality Core Constructions – Corporate Site (Solo Developer Demo)",
    category: "WordPress Development",
    description: "A fully functional corporate demonstration website I designed and developed end-to-end to showcase my capabilities in the real estate and construction sector. Acting as the sole developer, I built a custom lead-generation contact form, interactive project progress tracking displays, and a professional, responsive layout tailored specifically for high-ticket B2B and B2C conversions.",
    techStack: ["WordPress", "CSS"],
    liveUrl: "https://qualitycoreconstructions.com", 
    githubUrl: "#", 
    imagePlaceholder: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500",
    icon: "code",
    imageUrl: "/projects/quality-core-constructions.png"
  },
  {
    title: "Bridal Elegance – E-commerce Boutique (Solo Developer Demo)",
    category: "WooCommerce Development",
    description: "A premium WooCommerce demo storefront I built entirely from scratch, designed specifically for the luxury ethnic wear market. As the sole architect of this project, I created a highly visual, image-forward layout optimized to showcase designer bridal attire. This project demonstrates my ability to independently deliver high-end, user-friendly shopping experiences that handle complex product variations and secure checkout flows.",
    techStack: ["WordPress", "WooCommerce", "PHP", "CSS", "Payment APIs"],
    liveUrl: "https://tmrbusiness2.wpcomstaging.com/", 
    githubUrl: "#", 
    imagePlaceholder: "bg-purple-100 dark:bg-purple-900/30 text-purple-500",
    icon: "code",
    imageUrl: "/projects/bridal-elegance.png"
  }
];

export const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" }, // Added Projects here
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];