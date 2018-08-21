const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    // contentBase: [path.join(__dirname, 'asdf'), path.join(__dirname, 'fdsa')]
    // publicPath: '/blog/'
  }
}