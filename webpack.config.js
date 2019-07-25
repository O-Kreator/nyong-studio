const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: {
    app: './script/app.js',
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
        {
            // JAVASCRIPT LOADER
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            // SCSS LOADER
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'resolve-url-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceMapContents: false 
                    }
                }
            ]
        },
        {
            // IMAGE LOADER
            test: /\.(png|jpg)$/,
            use: {
                loader: 'url-loader',
                options: { 
                    limit: 8000,
                    name: 'img/[name].[ext]?[hash]'
                } 
            }
        },
        {
            // SVG LOADER
            test: /\.svg$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?[hash]'
                }
            }
        },

        {
            // HTML LOADER
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
          }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'Nyong Studio',
        /*
        minify: {
            collapseWhitespace: true
        },
        */
        hash: true,
        template: './index.html'
    })
  ],

  optimization: {},

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

};