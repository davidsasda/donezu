const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./client/tailwind.js'),
    require('autoprefixer')
  ]
}