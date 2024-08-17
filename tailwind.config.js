/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './src/scss/*.scss',
  ],
  theme: {
    extend: {
      colors: {
        backgroundcolor: '#FAF3EC', // Remplacez par votre couleur de fond
        black: '#231f20', // Remplacez par votre couleur noire
        red: '#E62A3F', // Remplacez par votre couleur noire
        turquoise: '#2EB3A1', // Remplacez par votre couleur noire
        darkblue: '#3A4294', // Remplacez par votre couleur noire
        lightblue: '#A6C2E7', // Remplacez par votre couleur noire
      },
      fontFamily: {
        quiroh: ['quiroh', 'sans-serif'],
      },
      width: {
        '100vw': '100vw', // Ajoute une largeur personnalisée de 100vw
      },
      height: {
        '100vh': '100vh', // Ajoute une largeur personnalisée de 100vw
      },
      fontWeight: {
        light: 300,
        bold: 600,
        semibold: 500,
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      rotate: {
        'neg3': '-3deg',
        '7': '7deg',
        'neg7': '-7deg',
        '9': '9deg',
        'neg9': '-9deg',
        '10': '10deg',
        'neg4': '-4deg',
        '11': '11deg',
        'neg5': '-5deg',
        'neg2': '-2deg',
      },
      zIndex: {
        'neg2': '-2',
        'neg1': '-1',
        'neg3': '-3',
      },
    },
  },
  plugins: [],
}

