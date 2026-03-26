import { useState, useEffect } from 'react';
import { technicalSkills, languages } from '@/data/resume-data';
import { Code, Globe, CheckCircle } from 'lucide-react';

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'expert': 'bg-green-500',
      'advanced': 'bg-blue-500',
      'intermediate': 'bg-amber-500',
      'beginner': 'bg-slate-400',
    };
    return colors[category] || colors.beginner;
  };

  const getCategoryBadge = (category: string) => {
    const styles: Record<string, string> = {
      'expert': 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
      'advanced': 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
      'intermediate': 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
      'beginner': 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
    };
    return styles[category] || styles.beginner;
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-slate-50 dark:bg-slate-800"
      data-testid="skills-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Expertise in WordPress, WooCommerce, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Proficiency
              </h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getCategoryBadge(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${getCategoryColor(skill.category)}`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 50}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Languages & Tools
              </h3>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 mb-8">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div 
                    key={lang.name}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    data-testid={`language-${lang.name.toLowerCase()}`}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-slate-700 dark:text-slate-200">{lang.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">({lang.proficiency})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL', 'WP-CLI', 'Git', 'GitHub', 'Zendesk', 'Jira', 'Slack'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
