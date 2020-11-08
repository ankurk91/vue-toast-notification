'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.js', '.jsx', '.json', '.vue'],
  },
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '',
    filename: 'js/[name]-[hash:8].js'
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
          isProduction ? MiniCssExtractPlugin.loader :
            {
              loader: 'style-loader',
              options: {}
            },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
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
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './examples/index.html',
      minify: {
        removeComments: isProduction,
        collapseWhitespace: isProduction,
        removeAttributeQuotes: isProduction,
        minifyJS: isProduction,
        minifyCSS: isProduction,
        minifyURLs: isProduction,
      }
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    host: 'localhost',
    port: 9000,
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    stats: 'errors-only',
  },
  devtool: isProduction ? false : 'cheap-module-eval-source-map',
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  }
};

if (isProduction) {
  module.exports.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css',
    }),
  );
  module.exports.optimization.minimizer.push(
    new TerserPlugin({
      sourceMap: false,
      terserOptions: {
        output: {
          beautify: false
        },
        compress: {
          drop_console: true
        }
      }
    }),
  );
}
