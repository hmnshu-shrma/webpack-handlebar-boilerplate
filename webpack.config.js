const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: ['./src/js/app.js', './src/style/main.scss'],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'static/'
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: './.env'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'index.hbs'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
}
