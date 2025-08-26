import { motion, AnimatePresence } from "framer-motion";
import weatherConditions from "../utils/weatherConditions"; // ✅ shared file

export default function WeatherCard({ data }) {
  const condition = weatherConditions[data.weathercode] || {
    text: "Unknown",
    icon: "❓",
    bg: "from-gray-400 to-gray-700",
  };

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`mt-10 bg-gradient-to-br ${condition.bg} backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md text-center border border-white/20`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
              {data.city}
            </h2>

            {/* Icon + Label */}
            <div className="flex flex-col items-center mt-4">
              <div className="text-7xl">{condition.icon}</div>
              <span className="mt-2 text-gray-200 text-lg">
                {condition.text}
              </span>
            </div>

            {/* Weather details */}
            <p className="text-4xl md:text-5xl font-extrabold text-white mt-4 drop-shadow-lg">
              {data.temperature}°C
            </p>
            <p className="text-lg md:text-xl text-gray-200 mt-3 font-medium">
              Windspeed: {data.windspeed} km/h
            </p>
            {/* <p className="text-lg md:text-xl text-gray-200 mt-3  font-medium">
              {data.time}
            </p> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
