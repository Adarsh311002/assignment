import React from 'react';

const WeatherCard = ({ weatherData, city, theme }) => {
 
  const { 
    temperature_2m, 
    apparent_temperature,

  } = weatherData || {};

  const icon = weatherData?.icon || { icon: '🌈', label: 'Unknown' };

  const currentTemp = Math.round(temperature_2m || 0);
  const feelsLikeTemp = Math.round(apparent_temperature || 0);

  return (
    <div className={`rounded-2xl shadow-lg p-6 border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            {city || 'Unknown Location'}
          </h2>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {weatherData?.location?.country || ''}
            {weatherData?.location?.region && `, ${weatherData.location.region}`}
          </p>
        </div>
        <div className="text-right">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Now
          </p>
          <p className={`text-xs ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-6xl">
            {icon.icon}
          </div>
          <div>
            <div className={`text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              {currentTemp}°C
            </div>
            <p className={`mt-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Feels like {feelsLikeTemp}°C
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherCard;