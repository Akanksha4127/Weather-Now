import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

// Map weather conditions to Tailwind gradients
function getBackgroundGradient(code) {
  switch (true) {
    case code === 0: // Clear
      return "from-yellow-300 via-orange-400 to-pink-500";

    case [1, 2, 3].includes(code): // Cloudy
      return "from-gray-300 via-gray-400 to-gray-600";

    case [45, 48].includes(code): // Fog
      return "from-gray-200 via-gray-300 to-gray-500";

    case [51, 53, 55, 56, 57].includes(code): // Drizzle / Freezing drizzle
      return "from-blue-200 via-blue-300 to-blue-400";

    case [61, 63, 65, 80, 81, 82].includes(code): // Rain / Showers
      return "from-blue-400 via-blue-500 to-indigo-600";

    case [66, 67].includes(code): // Freezing rain
      return "from-cyan-300 via-blue-400 to-indigo-500";

    case [71, 73, 75, 77, 85, 86].includes(code): // Snow
      return "from-cyan-100 via-blue-200 to-indigo-300";

    case code === 95: // Thunderstorm
      return "from-purple-600 via-indigo-700 to-gray-900";

    case [96, 99].includes(code): // Thunderstorm with hail
      return "from-purple-700 via-indigo-800 to-black";

    default: // Wind / Unknown
      return "from-green-300 via-teal-400 to-cyan-500";
  }
}

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      // Get coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results) throw new Error("City not found");

      const { latitude, longitude, name, country } = geoData.results[0];

      // Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: `${name}, ${country}`,
        ...weatherData.current_weather,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const bgGradient = weather
    ? getBackgroundGradient(weather.weathercode)
    : "from-blue-400 to-indigo-600"; // Default

  return (
    <div
      className={`min-h-screen bg-gradient-to-r ${bgGradient} flex flex-col items-center p-6 transition-colors duration-700`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
        Weather Now
      </h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <Loader />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
