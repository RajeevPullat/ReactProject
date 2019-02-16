'use strict';

console.log('Building in Production Mode...');
console.log('ConfigFile : webpack.prod.js');

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    entry: {
      app: ['app/app.tsx', 'styles/app.scss'],
    },
  
    context: path.join(process.cwd(), 'src'),
  
    output: {
      publicPath: '',
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
      }),
  
      new CopyWebpackPlugin([{ from: 'public' }]),
    ],
  
    resolve: {
      modules: ['node_modules', path.resolve(process.cwd(), 'src')],
      extensions: ['.ts','.tsx', '.js', '.jsx','scss'],
    },
  
    devServer: {
      contentBase:path.join(process.cwd(), 'dist'),
      clientLogLevel: 'info',
      port: 8080,
      inline: true,
      hot:true,
      color:true,
      historyApiFallback: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 500,
      },
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