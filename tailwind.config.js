/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Lavish: ["Lavish", "sans-serif"],
      Philosopher: ["Philosopher", "sans-serif"],
      BreeSerif: ["BreeSerif", "sans-serif"]
    },
    extend: {
      colors: {
        //Maneth
        'primary': '#da6e2e',
        'secondary': '#c15026',
        'ternary': '#6e2e2c',
        'bgc': '#FCEADC',



        //varagan
        'red': '#DC3545'





        //Sandithi










        //Ridmi









        //Gihan








        //Sageevan








        //Isuru









        //Hiranya
        






      },
    },
  },
  plugins: [],
}

