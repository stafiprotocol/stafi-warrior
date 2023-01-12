const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
      source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      'anton': 'Anton',
    },
    extend: {
      colors: {
        'blackColor': '#090F17',
        '#0093ED': '#0093ED',
        '#00F3AB': '#00F3AB',
        '#5B6872': '#5B6872',
        '#9DAFBE': '#9DAFBE',
        '#FFA540': '#FFA540',
        '#1F2D41': '#1F2D41',
        '#172231': '#172231',
        '#070B10': '#070B10',
        '#172636': '#172636',
        '#1A2835': '#1A2835',
        'hoverboard_bg': '#4287EA',
        'hoverboardvia_bg': '#112541',
        '#343223':'#343223',
        '#100F07':'#100F07',
        '#855921':'#855921',
      },
      backgroundImage: {
        'bgImage': "url('/image/bg_image.png')",
        'bgWave':"url('/image/bgwave.png')",
      },
    },
  },
  plugins: [],
}
