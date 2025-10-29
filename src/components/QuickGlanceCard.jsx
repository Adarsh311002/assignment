import React from 'react';

const QuickGlanceCard = ({ weatherData, theme }) => {
  if (!weatherData) return null;

  const quickStats = [
    {
      icon: '💨',
      label: 'Wind',
      value: `${weatherData.wind_speed_10m} km/h`,
      condition: weatherData.wind_speed_10m < 15 ? 'Calm' : 
                weatherData.wind_speed_10m < 25 ? 'Breezy' : 'Windy'
    },
    {
      icon: '💧',
      label: 'Rain',
      value: `${weatherData.precipitation} mm`,
      condition: weatherData.precipitation === 0 ? 'Dry' : 
                weatherData.precipitation < 1 ? 'Light' : 
                weatherData.precipitation < 5 ? 'Moderate' : 'Heavy'
    },
    {
      icon: '👁️',
      label: 'Visibility',
      value: 'Clear',
      condition: 'Good'
    },
    {
      icon: '⏰',
      label: 'Daylight',
      value: '12h',
      condition: 'Long'
    }
  ];

  const getOverallCondition = () => {
    if (weatherData.precipitation > 5) return { text: 'Poor', color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/20', icon: '🌧️' };
    if (weatherData.precipitation > 2) return { text: 'Fair', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/20', icon: '🌦️' };
    if (weatherData.wind_speed_10m > 25) return { text: 'Windy', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/20', icon: '💨' };
    if (weatherData.wind_speed_10m > 15) return { text: 'Breezy', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20', icon: '🍃' };
    return { text: 'Excellent', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/20', icon: '☀️' };
  };

  const overall = getOverallCondition();

  return (
    <div className={`rounded-2xl shadow-lg p-6 border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Outdoor Readiness
        </h3>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${overall.bg}`}>
          <span className="text-lg">{overall.icon}</span>
          <span className={`text-sm font-medium ${overall.color}`}>
            {overall.text}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="text-center">
            <span className="text-3xl mb-2 block">{stat.icon}</span>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {stat.label}
            </p>
            <p className={`font-semibold text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              {stat.value}
            </p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {stat.condition}
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-6 p-3 rounded-lg ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
      }`}>
        <p className={`text-xs text-center ${
          theme === 'dark' ? 'text-gray-300' : 'text-blue-700'
        }`}>
          {overall.text === 'Excellent' && 'Perfect day for outdoor activities! 🎉'}
          {overall.text === 'Breezy' && 'Light breeze - great for most activities 🌬️'}
          {overall.text === 'Windy' && 'Windy conditions - secure loose items 💨'}
          {overall.text === 'Fair' && 'Some rain expected - bring waterproof gear 🌂'}
          {overall.text === 'Poor' && 'Heavy precipitation - consider indoor plans 🌧️'}
        </p>
      </div>
    </div>
  );
};

export default QuickGlanceCard;