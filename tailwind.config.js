/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
        fontWeight:{'fontWeightBig':600,
             'fontWeightSmall':300
        },
        text:{
           lg:'35px',
           sm:'16px'
        },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
