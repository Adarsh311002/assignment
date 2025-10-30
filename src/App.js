import React, { useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import QuickGlanceCard from './components/QuickGlanceCard';
import ActivityRecommendations from './components/ActivityRecommendations';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ThemeToggle from './components/ThemeToggle';
import { useWeather } from './hooks/useWeather';
import { useTheme } from './hooks/useTheme';

function App() {
  const [city, setCity] = useState('');
  const { weatherData, loading, error, fetchWeather } = useWeather();
  const { theme, toggleTheme } = useTheme();
 
  const handleSearch = async (searchCity) => {
    if (searchCity.trim()) {
      setCity(searchCity);
      await fetchWeather(searchCity);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-cyan-100 text-gray-800'
    } py-8 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold mb-2">Weather Now</h1>
            <p className="opacity-80">Get current weather conditions for any city</p>
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

     

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            loading={loading}
          />
        </div>

        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Weather Data */}
        {weatherData && !loading && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Weather Card - Quick temperature and conditions */}
            <WeatherCard weatherData={weatherData} city={city} theme={theme} />
            
            {/* QUICK GLANCE - = assess conditions quickly */}
            <QuickGlanceCard weatherData={weatherData} theme={theme} />
            
            {/* ACTIVITY RECOMMENDATIONS - for outdoor enthusiast */}
            <ActivityRecommendations weatherData={weatherData} theme={theme} />
            
            {/* Standard details - Keep basic weather metrics */}
            <WeatherDetails weatherData={weatherData} theme={theme} />
          </div>
        )}

        {/* Empty State */}
        {!weatherData && !loading && !error && (
          <div className="text-center py-12 animate-fade-in">
            <div className="opacity-50 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Ready for Adventure?
            </h3>
            <p className="opacity-70 mb-6">
              Enter a city name above to check weather conditions
            </p>
            
          
            <div className="mt-8 p-4 bg-green-500 dark:bg-green-900/70 rounded-lg max-w-md mx-auto border border-green-200 dark:border-green-800">
              <p className="text-sm text-gray-800 dark:text-green-200">
                <strong>Outdoor Tip:</strong> Always check weather conditions before planning your activities. Stay safe out there!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Error Boundary Wrapper
class AppWithErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Weather App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please refresh the page and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return <App />;
  }
}

export default AppWithErrorBoundary;