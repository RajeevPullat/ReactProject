'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: {
      app: ['app/app.tsx', 'styles/app.scss'],
    },
    context: path.join(process.cwd(), 'src'),
    output: {
      publicPath: 'http://localhost:8080/',
      path: path.join(process.cwd(), 'dist'),
      filename: 'scripts/[name].[hash].js',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
           {loader: 'css-loader'},
           {loader: 'sass-loader'},
          ],
        },
        {test: /\.(html)$/,use: ['html-loader']}
      ],
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        chunksSortMode: 'dependency',
      }),
  
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css',
      })
  
      //new CopyWebpackPlugin([{ from: 'public' }]),
    ],
  
    resolve: {
      modules: ['node_modules', path.resolve(process.cwd(), 'src')],
      extensions: ['.ts','.tsx', '.js', '.jsx','scss'],
    },
  
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
  
    devtool: 'source-map',
  };
