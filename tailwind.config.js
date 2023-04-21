/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      redPoll: '#F4DADB',
      greenPoll: '#A8EADE',
      grayPoll: '#bcbabe'
    },
    extend: {
      animation: {
        'bounce-once': 'animation: bounce 1s infinite',
      }
      
    },
  },
  plugins: [
    
  ],
}

