const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',

  entry: path.join(__dirname, '../server/app.js'),
  output: {
    filename: 'app_bundle.js',
    path: path.join(__dirname, '../dist')
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }]
          ],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "version": "7.0.0-beta.0"
              }
            ]
          ]
        }
      }
    ]
  },

  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue'],
    // 支持别名
    alias: {
      "@": path.join(__dirname, '../src/')
    }
  },

}