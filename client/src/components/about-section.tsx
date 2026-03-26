import { expertiseAreas } from '@/data/resume-data';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    { icon: Award, label: '5+ Years Experience', color: 'text-blue-600' },
    { icon: Users, label: '500+ Tickets/Month', color: 'text-green-600' },
    { icon: Zap, label: '90%+ CSAT Score', color: 'text-amber-600' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-50 dark:bg-slate-800"
      data-testid="about-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about delivering exceptional customer experiences through technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Professional Background
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  With over 5 years of dedicated experience in customer success and technical support, 
                  I specialize in helping users build and troubleshoot websites using WordPress, 
                  WooCommerce, and custom themes.
                </p>
                
                <p>
                  I excel at simplifying complex technical issues, writing clear documentation, 
                  and delivering outstanding customer experiences. My approach focuses on making 
                  users feel heard and supported while efficiently resolving their challenges.
                </p>
                
                <p>
                  Currently available for freelance WordPress and WooCommerce development projects, 
                  offering end-to-end solutions from initial setup to long-term maintenance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, color }) => (
                <div 
                  key={label}
                  className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center shadow-lg border border-slate-100 dark:border-slate-700"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Areas of Expertise
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`expertise-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
