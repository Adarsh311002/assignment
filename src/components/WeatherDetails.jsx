import React from 'react';
import { Droplets, Wind, Gauge, Thermometer } from 'lucide-react';

const WeatherDetails = ({ weatherData }) => {
  const {
    relative_humidity_2m,
    wind_speed_10m,
    wind_direction_10m,
    precipitation,
  } = weatherData;

  const details = [
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${relative_humidity_2m}%`,
      color: 'text-blue-500',
    },
    {
      icon: Wind,
      label: 'Wind Speed',
      value: `${wind_speed_10m} km/h`,
      color: 'text-green-500',
    },
    {
      icon: Gauge,
      label: 'Wind Direction',
      value: `${wind_direction_10m}°`,
      color: 'text-purple-500',
    },
    {
      icon: Thermometer,
      label: 'Precipitation',
      value: `${precipitation} mm`,
      color: 'text-cyan-500',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Weather Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <detail.icon className={`w-6 h-6 ${detail.color}`} />
            <div>
              <p className="text-sm text-gray-600">{detail.label}</p>
              <p className="font-semibold text-gray-800">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;