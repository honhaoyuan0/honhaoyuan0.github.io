export default function ExperienceCard({ 
  title, 
  company, 
  duration, 
  description, 
  technologies, 
  achievements, 
  gradientFrom, 
  gradientTo 
}) {
  // Define color mappings to ensure Tailwind includes these classes
  const getGradientClasses = (from, to) => {
    const gradientMap = {
      'blue-500': 'from-blue-500',
      'purple-500': 'to-purple-500 from-purple-500',
      'pink-500': 'to-pink-500',
      'green-500': 'from-green-500',
      'teal-500': 'to-teal-500'
    };
    return `bg-gradient-to-r ${gradientMap[from] || 'from-blue-500'} ${gradientMap[to] || 'to-purple-500'}`;
  };

  const getBulletClass = (color) => {
    const colorMap = {
      'blue-500': 'bg-blue-500',
      'purple-500': 'bg-purple-500',
      'green-500': 'bg-green-500',
      'orange-500': 'bg-orange-500'
    };
    return colorMap[color] || 'bg-blue-500';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {company}
          </p>
        </div>
        <span 
          className={`px-3 py-1 text-sm font-semibold rounded-full ${getGradientClasses(gradientFrom, gradientTo)} text-white`}
        >
          {duration}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Achievements */}
      {achievements && achievements.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span 
                  className={`w-2 h-2 ${getBulletClass(gradientFrom)} rounded-full mt-2 mr-3 flex-shrink-0`}
                ></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
