export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  features,
  githubUrl,
  liveUrl,
  duration,
  gradientFrom, 
  gradientTo 
}) {
  // Define color mappings to ensure Tailwind includes these classes
  const getGradientClasses = (from, to) => {
    const gradientMap = {
      'blue-500': 'from-blue-500',
      'purple-500': 'to-purple-500 from-purple-500',
      'pink-500': 'to-pink-500 from-pink-500',
      'green-500': 'from-green-500 to-green-500',
      'teal-500': 'to-teal-500 from-teal-500',
      'orange-500': 'from-orange-500 to-orange-500',
      'indigo-500': 'from-indigo-500 to-indigo-500'
    };
    return `bg-gradient-to-r ${gradientMap[from] || 'from-blue-500'} ${gradientMap[to] || 'to-purple-500'}`;
  };

  const getBulletClass = (color) => {
    const colorMap = {
      'blue-500': 'bg-blue-500',
      'purple-500': 'bg-purple-500',
      'green-500': 'bg-green-500',
      'orange-500': 'bg-orange-500',
      'pink-500': 'bg-pink-500',
      'teal-500': 'bg-teal-500',
      'indigo-500': 'bg-indigo-500'
    };
    return colorMap[color] || 'bg-blue-500';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {title}
          </h3>
          {duration && (
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getGradientClasses(gradientFrom, gradientTo)} text-white mb-2`}>
              {duration}
            </span>
          )}
        </div>
        <div className="flex space-x-2 ml-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="View Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getGradientClasses(gradientFrom, gradientTo)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Features */}
      {features && features.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span 
                  className={`w-2 h-2 ${getBulletClass(gradientFrom)} rounded-full mt-2 mr-3 flex-shrink-0`}
                ></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
