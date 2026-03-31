import { projects } from "@/data/resume-data";
import { ExternalLink, Github, Code, LayoutTemplate } from "lucide-react";

// Helper to map string icon names from resume-data to actual Lucide components
const IconMap: Record<string, React.ElementType> = {
  "layout-template": LayoutTemplate,
  code: Code,
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-800/50"
      data-testid="projects-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of recent freelance web development and e-commerce
            builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = IconMap[project.icon] || Code; // Fallback to Code icon

            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 dark:border-slate-700 group/image">
                  {/* The Image or Placeholder */}
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} interface`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`w-full h-full ${project.imagePlaceholder} flex items-center justify-center transition-transform duration-500 group-hover/image:scale-105`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                  )}

                  {/* The Clickable Overlay (Only renders if there is a valid URL) */}
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-20"
                    >
                      <span className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm shadow-lg">
                        <ExternalLink className="w-4 h-4" /> View Live Site
                      </span>
                    </a>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-10 bg-white dark:bg-slate-800">
                  <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-4">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
