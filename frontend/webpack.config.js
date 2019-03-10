var path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [

  {
    devtool: 'source-map',
    entry: {
      app: ['./src/web/index.tsx']
    },
    mode: 'production',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                babelCore: "@babel/core",
                useBabel: true,
                useCache: true
              }
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'source-map-loader'
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist', 'web'),
      filename: '[name].js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({ template: './src/web/index.html' })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    }
  },

  {
    entry: './src/server/index.tsx',
    mode: 'production',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                babelCore: "@babel/core",
                useBabel: true,
                useCache: true
              }
            }
          ]
        }
      ]
    },
    output: {
      filename: 'index.js',
      libraryTarget: 'commonjs2',
      path: path.resolve(__dirname, 'dist', 'server')
    },
    plugins: [
      new CopyWebpackPlugin([
        { 
          from: path.resolve(__dirname, 'src', 'server', 'server.js'),
          to: path.resolve(__dirname, 'dist', 'server', 'server.js')
        }
      ])
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    target: 'node'
  }

];
