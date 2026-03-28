export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
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
  { name: "WordPress (core, themes, plugins)", level: 95, category: "expert" },
  { name: "WooCommerce", level: 95, category: "expert" },
  { name: "WP-CLI", level: 85, category: "advanced" },
  { name: "HTML & CSS", level: 90, category: "advanced" },
  { name: "JavaScript", level: 75, category: "intermediate" },
  { name: "GitHub", level: 80, category: "advanced" },
  { name: "Browser DevTools", level: 90, category: "advanced" },
  { name: "DNS Configuration", level: 90, category: "advanced" },
  { name: "Zendesk", level: 95, category: "expert" },
  { name: "Slack & Jira", level: 90, category: "advanced" },
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
    description: "Consistently resolved 500+ tickets/month while maintaining 90%+ CSAT scores",
    icon: "ticket",
    metric: "500+",
  },
  {
    title: "Documentation Excellence",
    description: "Improved user support experience by creating and updating over 100 customer-facing documentation assets within the Documentation Guild",
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
    position: "WordPress/WooCommerce Support Engineer/Developer",
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
    position: "Happiness Engineer (Technical Support Engineer)",
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
    techStack: "",
  },
  {
    company: "Deloitte",
    position: "Manager, Service Desk",
    location: "Hyderabad, Onsite",
    startDate: "August 2005",
    endDate: "September 2016",
    description: "Started as a front line analyst providing IT support and went on to lead a team.",
    techStack: "IT Support, Software/Hardware Troubleshooting, Windows Operatign Systems, Microsoft Office, HR Systems",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Applications",
  institution: "Osmania University",
  location: "Hyderabad, India",
};

export const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
