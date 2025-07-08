export default function InfoCard({ title, items, gradientFrom, gradientTo, bulletColor }) {
  // Define color mappings to ensure Tailwind includes these classes
  const getGradientClasses = (from, to) => {
    const gradientMap = {
      'blue-500': 'to-green-500 from-blue-500',
      'purple-500': 'to-orange-500 from-purple-500',
      'pink-500': 'to-pink-500 from-blue-500'
    };
    return `bg-gradient-to-b ${gradientMap[from] || 'from-blue-500'} ${gradientMap[to] || 'to-purple-500'}`;
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
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
        <span 
          className={`w-2 h-8 ${getGradientClasses(gradientFrom, gradientTo)} rounded-full mr-3`}
        ></span>
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span 
              className={`w-2 h-2 ${getBulletClass(bulletColor)} rounded-full mt-2 mr-3 flex-shrink-0`}
            ></span>
            <span className="text-gray-700 dark:text-gray-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}