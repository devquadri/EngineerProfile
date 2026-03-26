import { achievements } from '@/data/resume-data';
import { Trophy, FileText, GraduationCap, TrendingUp } from 'lucide-react';

export function AchievementsSection() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Trophy> = {
      'ticket': Trophy,
      'file-alt': FileText,
      'chalkboard-teacher': GraduationCap,
    };
    return icons[iconName] || TrendingUp;
  };

  const colors = [
    { bg: 'bg-blue-100 dark:bg-blue-900/50', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
    { bg: 'bg-purple-100 dark:bg-purple-900/50', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
  ];

  return (
    <section 
      id="achievements" 
      className="py-20 bg-white dark:bg-slate-900"
      data-testid="achievements-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Key Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Measurable results and impactful contributions throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.icon);
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index}
                className={`relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg border ${color.border} hover:shadow-xl transition-all animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`achievement-${index}`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${color.text}`} />
                </div>

                {achievement.metric && (
                  <div className={`absolute top-6 right-6 px-3 py-1 ${color.bg} rounded-full`}>
                    <span className={`text-sm font-bold ${color.text}`}>{achievement.metric}</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {achievement.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
