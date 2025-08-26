/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        keyframes: {
            snow: {
                "0%": { transform: "translateY(-10%)", opacity: "0" },
                "20%": { opacity: "1" },
                "100%": { transform: "translateY(110vh)", opacity: "0" },
            },
            rain: {
                "0%": { transform: "translateY(-20%)" },
                "100%": { transform: "translateY(120vh)" },
            },
            lightning: {
                "0%, 100%": { opacity: "0" },
                "45%": { opacity: "0" },
                "50%": { opacity: "1" },
                "55%": { opacity: "0" },
                "70%": { opacity: "1" },
                "80%": { opacity: "0" },
            },
        },
        animation: {
            snow: "snow 5s linear infinite",
            rain: "rain 1s linear infinite",
            lightning: "lightning 2s infinite",
        },
    },
};
export const plugins = [];
