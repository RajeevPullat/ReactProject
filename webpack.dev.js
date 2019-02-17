const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');




module.exports = merge(common,{
    mode: 'development',
    module: {
      rules: [
        {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=img/[name].[ext]"}
      ]
    },
  
    devServer: {
        contentBase:path.join(process.cwd(), 'dist'),
        clientLogLevel: 'info',
        port: 8080,
        inline: true,
        historyApiFallback: false,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 500,
        }
    }
});