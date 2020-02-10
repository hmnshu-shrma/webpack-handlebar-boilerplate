const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: ['./src/js/app.js', './src/style/main.scss'],
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
      title: 'My awesome service',
      template: './src/index.hbs',
      filename: 'index.html'

    }),
    new HtmlWebpackPlugin({
      title: 'Products',
      template: './src/products.hbs',
      filename: 'products.html'

    }),
    new HtmlWebpackPlugin({
      title: 'Signup',
      template: './src/signup.hbs',
      filename: 'signup.html'

    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      template: './src/login.hbs',
      filename: 'login.html'

    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
}
