import React from 'react';

const ActivityRecommendations = ({ weatherData, theme }) => {
  if (!weatherData) return null;

  const getActivities = () => {
    const temp = weatherData.temperature_2m;
    const wind = weatherData.wind_speed_10m;
    const precipitation = weatherData.precipitation;
    const humidity = weatherData.relative_humidity_2m;
    const weatherCode = weatherData.weather_code;

    const isClear = weatherCode <= 3;
    const isRainy = weatherCode >= 51 && weatherCode <= 65;
    const isSnowy = weatherCode >= 71 && weatherCode <= 75;
    const isStormy = weatherCode >= 95;
    const isFoggy = weatherCode >= 45 && weatherCode <= 48;

    const activities = [];

    if (temp >= 10 && temp <= 28 && wind < 25 && precipitation < 2 && !isStormy) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp >= 15 && temp <= 24 && isClear && wind < 15) {
        suitability = 'Excellent';
        notes = 'Perfect hiking conditions';
      } else if (isFoggy) {
        suitability = 'Moderate';
        notes = 'Low visibility on trails';
      } else if (precipitation > 0.5) {
        suitability = 'Fair';
        notes = 'Wet trails expected';
      }

      activities.push({
        icon: '🥾',
        name: 'Hiking',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-green-600' : 
               suitability === 'Good' ? 'text-green-500' : 
               suitability === 'Moderate' ? 'text-yellow-500' : 'text-orange-500',
        bgColor: suitability === 'Excellent' ? 'bg-green-100 dark:bg-green-900/30' : 
                 suitability === 'Good' ? 'bg-green-50 dark:bg-green-900/20' : 
                 suitability === 'Moderate' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-orange-50 dark:bg-orange-900/20'
      });
    }

    if (temp >= 5 && temp <= 32 && wind < 30 && precipitation < 3 && !isStormy) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp >= 12 && temp <= 26 && wind < 20 && isClear) {
        suitability = 'Excellent';
        notes = 'Ideal cycling weather';
      } else if (wind > 25) {
        suitability = 'Moderate';
        notes = 'Windy conditions';
      } else if (precipitation > 1) {
        suitability = 'Fair';
        notes = 'Wet roads possible';
      }

      activities.push({
        icon: '🚴',
        name: 'Cycling',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-blue-600' : 
               suitability === 'Good' ? 'text-blue-500' : 
               suitability === 'Moderate' ? 'text-yellow-500' : 'text-orange-500',
        bgColor: suitability === 'Excellent' ? 'bg-blue-100 dark:bg-blue-900/30' : 
                 suitability === 'Good' ? 'bg-blue-50 dark:bg-blue-900/20' : 
                 suitability === 'Moderate' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-orange-50 dark:bg-orange-900/20'
      });
    }

    if (wind >= 8 && wind <= 30 && !isStormy && precipitation < 2) {
      let suitability = 'Moderate';
      let notes = '';
      
      if (wind >= 12 && wind <= 25 && isClear && temp >= 15) {
        suitability = 'Excellent';
        notes = 'Perfect sailing conditions';
      } else if (wind > 25) {
        suitability = 'Risky';
        notes = 'High winds - experienced only';
      } else if (precipitation > 0.5) {
        suitability = 'Fair';
        notes = 'Rain gear recommended';
      }

      activities.push({
        icon: '⛵',
        name: 'Sailing',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-cyan-600' : 
               suitability === 'Moderate' ? 'text-cyan-500' : 
               suitability === 'Fair' ? 'text-yellow-500' : 'text-red-500',
        bgColor: suitability === 'Excellent' ? 'bg-cyan-100 dark:bg-cyan-900/30' : 
                 suitability === 'Moderate' ? 'bg-cyan-50 dark:bg-cyan-900/20' : 
                 suitability === 'Fair' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-red-50 dark:bg-red-900/20'
      });
    }

    if (temp < 5 && !isRainy) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp < 0 && isSnowy) {
        suitability = 'Excellent';
        notes = 'Fresh snow conditions';
      } else if (temp > 2) {
        suitability = 'Fair';
        notes = 'Warmer than ideal';
      } else if (isClear) {
        suitability = 'Great';
        notes = 'Clear ski conditions';
      }

      activities.push({
        icon: '⛷️',
        name: 'Skiing',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-purple-600' : 
               suitability === 'Great' ? 'text-purple-500' : 
               suitability === 'Good' ? 'text-blue-500' : 'text-yellow-500',
        bgColor: suitability === 'Excellent' ? 'bg-purple-100 dark:bg-purple-900/30' : 
                 suitability === 'Great' ? 'bg-purple-50 dark:bg-purple-900/20' : 
                 suitability === 'Good' ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'
      });
    }

    if (temp > 20 && wind < 20 && precipitation < 1 && isClear) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp > 25 && wind < 10 && humidity < 70) {
        suitability = 'Excellent';
        notes = 'Perfect beach weather';
      } else if (wind > 15) {
        suitability = 'Moderate';
        notes = 'Windy at beach';
      }

      activities.push({
        icon: '🏖️',
        name: 'Beach Day',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-orange-600' : 
               suitability === 'Good' ? 'text-orange-500' : 'text-yellow-500',
        bgColor: suitability === 'Excellent' ? 'bg-orange-100 dark:bg-orange-900/30' : 
                 suitability === 'Good' ? 'bg-orange-50 dark:bg-orange-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'
      });
    }

    if (temp >= 8 && temp <= 26 && wind < 20 && precipitation < 1 && !isStormy) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp >= 12 && temp <= 22 && isClear && wind < 12) {
        suitability = 'Excellent';
        notes = 'Ideal running conditions';
      } else if (precipitation > 0) {
        suitability = 'Fair';
        notes = 'Slippery trails';
      }

      activities.push({
        icon: '🏃',
        name: 'Trail Running',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-emerald-600' : 
               suitability === 'Good' ? 'text-emerald-500' : 'text-yellow-500',
        bgColor: suitability === 'Excellent' ? 'bg-emerald-100 dark:bg-emerald-900/30' : 
                 suitability === 'Good' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'
      });
    }

    if (temp >= 10 && temp <= 28 && precipitation === 0 && wind < 25 && !isStormy) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp >= 15 && temp <= 24 && isClear && wind < 15) {
        suitability = 'Excellent';
        notes = 'Perfect climbing conditions';
      } else if (wind > 20) {
        suitability = 'Moderate';
        notes = 'Windy on exposed faces';
      }

      activities.push({
        icon: '🧗',
        name: 'Rock Climbing',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-gray-600' : 
               suitability === 'Good' ? 'text-gray-500' : 'text-yellow-500',
        bgColor: suitability === 'Excellent' ? 'bg-gray-100 dark:bg-gray-700' : 
                 suitability === 'Good' ? 'bg-gray-50 dark:bg-gray-600' : 'bg-yellow-50 dark:bg-yellow-900/20'
      });
    }

    if (temp >= 5 && temp <= 32 && !isStormy && wind < 30) {
      let suitability = 'Good';
      let notes = '';
      
      if (temp >= 15 && temp <= 25 && precipitation < 1 && isClear) {
        suitability = 'Excellent';
        notes = 'Perfect gardening weather';
      } else if (precipitation > 2) {
        suitability = 'Wet';
        notes = 'Soil may be too wet';
      } else if (precipitation > 0) {
        suitability = 'Good';
        notes = 'Natural watering';
      }

      activities.push({
        icon: '🌱',
        name: 'Gardening',
        suitability,
        notes,
        color: suitability === 'Excellent' ? 'text-lime-600' : 
               suitability === 'Good' ? 'text-lime-500' : 'text-blue-500',
        bgColor: suitability === 'Excellent' ? 'bg-lime-100 dark:bg-lime-900/30' : 
                 suitability === 'Good' ? 'bg-lime-50 dark:bg-lime-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
      });
    }

    if (precipitation > 3 || wind > 35 || temp < -5 || temp > 35 || isStormy) {
      activities.push({
        icon: '🏠',
        name: 'Indoor Activities',
        suitability: 'Recommended',
        notes: 'Poor outdoor conditions',
        color: 'text-gray-500',
        bgColor: 'bg-gray-100 dark:bg-gray-700'
      });
    }

    if (activities.length === 0) {
      activities.push({
        icon: '🚶',
        name: 'Light Walking',
        suitability: 'Good',
        notes: 'Suitable for current conditions',
        color: 'text-green-500',
        bgColor: 'bg-green-50 dark:bg-green-900/20'
      });
    }

    const suitabilityOrder = { 'Excellent': 1, 'Great': 2, 'Good': 3, 'Moderate': 4, 'Fair': 5, 'Risky': 6, 'Wet': 7, 'Recommended': 8 };
    return activities.sort((a, b) => suitabilityOrder[a.suitability] - suitabilityOrder[b.suitability]);
  };

  const activities = getActivities();

  const getSuitabilityIcon = (suitability) => {
    switch(suitability) {
      case 'Excellent': return '⭐';
      case 'Great': return '👍';
      case 'Good': return '✅';
      case 'Moderate': return '⚠️';
      case 'Fair': return '🔶';
      case 'Risky': return '🚨';
      case 'Wet': return '💧';
      case 'Recommended': return '🏠';
      default: return '📝';
    }
  };

  return (
    <div className={`rounded-2xl shadow-lg p-6 border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Activity Recommendations
        </h3>
        <span className={`text-sm px-3 py-1 rounded-full ${
          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
        }`}>
          {activities.length} options
        </span>
      </div>

      <p className={`text-sm mb-4 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        Based on current weather conditions for outdoor activities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 hover:scale-[1.02] ${activity.bgColor} ${
              theme === 'dark' ? 'border border-gray-700' : 'border border-gray-200'
            }`}
          >
            <span className={`text-2xl mt-0.5 flex-shrink-0 ${activity.color}`}>
              {activity.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {activity.name}
                </span>
                <span className="text-sm">{getSuitabilityIcon(activity.suitability)}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  activity.suitability === 'Excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  activity.suitability === 'Great' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                  activity.suitability === 'Good' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  activity.suitability === 'Moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  activity.suitability === 'Fair' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                  activity.suitability === 'Risky' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  activity.suitability === 'Wet' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {activity.suitability}
                </span>
              </div>
              {activity.notes && (
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {activity.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-4 pt-4 border-t ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center space-x-1">
            <span>⭐</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Excellent</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>👍</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Great</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✅</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Good</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⚠️</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Moderate</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🚨</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Risky</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityRecommendations;