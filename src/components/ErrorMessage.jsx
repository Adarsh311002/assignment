
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 animate-fade-in">
      <div className="flex items-center space-x-3">
        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
        <div>
          <h3 className="text-red-800 font-medium">Unable to fetch weather data</h3>
          <p className="text-red-600 text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;