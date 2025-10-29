import { useState, useCallback } from 'react';


export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      
      const geocodingResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      );
      const geocodingData = await geocodingResponse.json();

      if (!geocodingData.results || geocodingData.results.length === 0) {
        throw new Error('City not found. Please try another name.');
      }

      const { latitude, longitude, name, country, admin1 } = geocodingData.results[0];

     
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm`
      );
      const weatherData = await weatherResponse.json();

      if (!weatherData.current) {
        throw new Error('Weather data not available for this location.');
      }


      const processedData = {
        ...weatherData.current,
        location: { 
          name, 
          country, 
          region: admin1,
          latitude, 
          longitude 
        },
   
      };

      setWeatherData(processedData);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  

  return { weatherData, loading, error, fetchWeather };
};