const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'main.js'
  },
  plugins: [
    new Dotenv({
      systemvars: true
    })
  ]
}