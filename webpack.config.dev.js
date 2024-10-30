'use strict';

const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
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
      vue: "@vue/runtime-dom"
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'docs'),
    publicPath: '',
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
        use: ['css-loader', 'sass-loader'], // using HtmlBundlerPlugin no additional options are required
      },
      {
        test: /\.(ico|svg|jpg|png)$/,
        type: 'asset', // auto inline image by size
        parser: {
          dataUrlCondition: {
            maxSize: 15000,
          },
        },
        generator: {
          filename: 'img/[name].[hash:8][ext][query]', // save images bigger than 15kb into file
        },
      },
    ]
  },
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          name: 'vendor',
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlBundlerPlugin({
      entry: [
        {
          import: './examples/index.html',
          filename: 'index.html',
        },
      ],
      js: {
        filename: 'js/[name]-[contenthash:8].js',
      },
      css: {
        filename: 'css/[name]-[contenthash:8].css',
      },
      minify: 'auto',
      minifyOptions: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 9002,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      },
    },
    // enable live reload after changes in source files
    watchFiles: {
      paths: ['src/**/*.*', 'examples/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    static: path.resolve(process.cwd(), 'docs'),
  },
  devtool: isProduction ? false : 'eval-cheap-source-map',
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
  module.exports.optimization.minimizer.push(
    new TerserPlugin({
      include: /\.js$/,
      terserOptions: {
        compress: {
          drop_console: true,
        }
      }
    }),
  );
}
