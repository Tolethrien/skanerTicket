/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../apps/**/index.html",
    "../../apps/**/src/**/*.{js,ts,jsx,tsx,vue}",
    "../../packages/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
