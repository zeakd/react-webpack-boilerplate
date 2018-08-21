const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].bundle.js'
  },
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'static/[name].[ext]',
            limit: 1000,
          }
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