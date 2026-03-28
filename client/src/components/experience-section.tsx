import { experiences } from "@/data/resume-data";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900"
      data-testid="experience-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Over 5 years of experience in technical support
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`experience-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="absolute left-5 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.techStack && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Tech Stack:{" "}
                        </span>
                        {exp.techStack}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
