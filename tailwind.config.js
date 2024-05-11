/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light", "synthwave"],
  },
  theme: {


    fontFamily:{

      'raleway': [' "Raleway", sans-serif'],
      'poppoins': [' "Poppins", sans-serif'],
      'work-sense':['"Work Sans", sans-serif']
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

