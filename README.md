# 🌤️ Weather Now

A modern, responsive weather application designed specifically for outdoor enthusiasts. Get quick weather conditions and smart activity recommendations tailored for your outdoor adventures.

![Weather Now](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Open-Meteo API](https://img.shields.io/badge/API-Open--Meteo-green)

## 🎯 Built for Jamie - The Outdoor Enthusiast

This application is specifically designed for outdoor enthusiasts who need quick, actionable weather information before heading out for activities. Unlike generic weather apps, Weather Now provides tailored recommendations and outdoor-focused metrics.

## ✨ Features

### 🌡️ Core Weather Information
- **Current Conditions** - Real-time temperature, "feels like" temperature, and weather conditions
- **Quick Assessment** - Outdoor readiness score at a glance
- **Detailed Metrics** - Wind speed, humidity, precipitation, and wind direction

### 🏕️ Outdoor-Focused Features
- **Smart Activity Recommendations** - Suggestions based on current weather conditions
- **Outdoor Readiness Score** - Instant assessment of whether conditions are suitable for outdoor activities
- **Safety-First Design** - Emphasis on wind, precipitation, and temperature factors that matter for outdoor safety

### 🎨 User Experience
- **Dark/Light Mode** - Automatic theme switching based on system preferences
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Fast & Lightweight** - Quick loading times and smooth interactions
- **Error Handling** - Graceful error states with user-friendly messages

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Emojis (no external dependencies)
- **Weather API**: Open-Meteo API (free, no authentication required)
- **Deployment**: Compatible with Netlify, Vercel, or any static hosting


## Project Structure

```bash
src/
├── components/
│   ├── ActivityRecommendations.jsx  # Smart outdoor activity suggestions
│   ├── ErrorMessage.jsx             # User-friendly error display
│   ├── LoadingSpinner.jsx           # Loading state indicator
│   ├── QuickGlanceCard.jsx          # Outdoor readiness assessment
│   ├── SearchBar.jsx                # City search functionality
│   ├── ThemeToggle.jsx              # Dark/light mode switch
│   ├── WeatherCard.jsx              # Main weather display
│   └── WeatherDetails.jsx           # Detailed weather metrics
├── hooks/
│   ├── useTheme.js                  # Theme management hook
│   └── useWeather.js                # Weather data fetching hook
├── App.jsx                          # Main application component
└── index.css                        # Global styles and Tailwind imports
