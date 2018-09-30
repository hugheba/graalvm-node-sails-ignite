const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.webpack = {
  options: {
    devtool: 'source-map',
    entry: [
      './assets/src/index.jsx',
      'webpack-hot-middleware/client?reload=true',
    ],
    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      filename: 'bundle.js',
      publicPath: '/'
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>
                [
                  precss,
                  autoprefixer
                ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  production: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new HtmlWebpackPlugin({
        template: 'assets/src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  server: {
    port: 3000,
  }
};
