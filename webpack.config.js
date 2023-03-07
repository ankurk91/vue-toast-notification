'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  context: __dirname,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
  },
  entry: {
    index: './src/index.js',
    'index.min': './src/index.js',
    'theme-default': './src/themes/default/index.scss',
    'theme-sugar': './src/themes/sugar/index.scss',
  },
  externals: {
    'vue': {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      name: 'VueToast',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
    globalObject: 'this',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              esModule: false,
              sourceMap: false,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            }
          },
        ],
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 15000, // bytes
            }
          }
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          }
        }
      }),
    ]
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new VueLoaderPlugin(),
  ],
  devtool: false,
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  }
};
