/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    devtool: 'source-map',
    entry: './src/client.js',
    output: {
      path: `${__dirname}/dist/public`
    },
    module: {
      rules: [
        // If you move this loader to server config below, it will bundle but then
        // fail at runtime trying to require('main.css'). Keeping here instead.
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  },
  {
    target: 'node',
    devtool: 'source-map',
    entry: './src/server.js',
    externals: [nodeExternals()],
    node: {
      // By default, webpack uses the real dirname (src) relative to the context
      // option. If you set it to false, it will use the absolute path to /dist.
      // This is required for express.static to resolve /public properly.
      __dirname: false
    },
    plugins: [new NodemonPlugin()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }
]
