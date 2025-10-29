import React, { useState } from 'react';
import { Search, MapPin, Navigation } from 'lucide-react';

const SearchBar = ({ onSearch, loading, onUseMyLocation, locationAvailable }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name..."
          className="w-full pl-10 pr-24 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          disabled={loading}
        />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
          {locationAvailable && (
            <button
              type="button"
              onClick={onUseMyLocation}
              disabled={loading}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 transition-colors"
              title="Use my current location"
            >
              <Navigation className="w-5 h-5" />
            </button>
          )}
          
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
  <button
    type="submit"
    disabled={loading || !inputValue.trim()}
    className="bg-primary-500 text-white p-2 rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
  >
    <Search className="w-5 h-5" />
  </button>
</div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;