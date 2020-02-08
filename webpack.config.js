const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
module.exports = {
  entry: {
    bundle: './src/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {

            }
          },
          {
            loader: 'sass-loader',
            options: {

            }
          }
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
    new Dotenv({
      path: './.env'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-styles.css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'My awesome service',
      template: './src/index.hbs'
    })
  ]
}
