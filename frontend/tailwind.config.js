/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#0f172a",
          accent: "#2563eb",
          secondary: "#64748b",
          card: "#1e293b",
        },
      },
    },
    plugins: [],
  };
  