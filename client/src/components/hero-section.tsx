import { contactInfo, professionalSummary } from "@/data/resume-data";
import { useScroll } from "@/hooks/use-scroll";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronDown,
  Linkedin,
} from "lucide-react";
import profileImage from "../assets/photo.jpg";

export function HeroSection() {
  const { scrollToElement } = useScroll();

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt={contactInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                <span className="text-white text-xs font-bold">5+</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Open for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {contactInfo.name}
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {contactInfo.title}
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {professionalSummary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-slate-300"
                data-testid="contact-email"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-slate-300"
                data-testid="contact-phone"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>

              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToElement("contact")}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                data-testid="cta-contact"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>

              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all"
                data-testid="cta-download"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>

              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-semibold transition-all"
                  data-testid="cta-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToElement("about")}
            className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
            aria-label="Scroll to about section"
            data-testid="scroll-indicator"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
