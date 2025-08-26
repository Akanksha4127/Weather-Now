import { createElement } from "react";
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiFog,
  WiRaindrops,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const weatherConditions = {
  0: {
    text: "Clear sky",
    icon: createElement(WiDaySunny, {
      className: "text-yellow-300 animate-pulse",
    }),
    bg: "from-yellow-300 via-orange-400 to-pink-500",
  },
  1: {
    text: "Mainly clear",
    icon: createElement(WiDayCloudy, { className: "text-yellow-200" }),
    bg: "from-yellow-200 via-blue-300 to-indigo-500",
  },
  2: {
    text: "Partly cloudy",
    icon: createElement(WiCloud, { className: "text-gray-200" }),
    bg: "from-blue-200 via-gray-400 to-gray-600",
  },
  3: {
    text: "Overcast",
    icon: createElement(WiCloud, { className: "text-gray-400" }),
    bg: "from-gray-400 via-gray-600 to-gray-800",
  },
  45: {
    text: "Fog",
    icon: createElement(WiFog, { className: "text-gray-400 animate-pulse" }),
    bg: "from-gray-200 via-gray-400 to-gray-700",
  },
  48: {
    text: "Depositing rime fog",
    icon: createElement(WiFog, { className: "text-gray-500 animate-pulse" }),
    bg: "from-gray-200 via-gray-500 to-gray-700",
  },
  51: {
    text: "Light drizzle",
    icon: createElement(WiRaindrops, {
      className: "text-blue-300 animate-bounce",
    }),
    bg: "from-blue-200 via-blue-400 to-blue-600",
  },
  61: {
    text: "Rain",
    icon: createElement(WiRain, { className: "text-blue-400 animate-bounce" }),
    bg: "from-blue-400 via-blue-600 to-indigo-800",
  },
  71: {
    text: "Snowfall",
    icon: createElement(WiSnow, { className: "text-blue-200 animate-bounce" }),
    bg: "from-blue-100 via-blue-200 to-white",
  },
  80: {
    text: "Rain showers",
    icon: createElement(WiRain, { className: "text-blue-300 animate-bounce" }),
    bg: "from-blue-300 via-blue-500 to-blue-700",
  },
  95: {
    text: "Thunderstorm",
    icon: createElement(WiThunderstorm, {
      className: "text-yellow-400 animate-ping",
    }),
    bg: "from-gray-700 via-purple-800 to-black",
  },
};

export default weatherConditions;
