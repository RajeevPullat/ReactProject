const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common,{
    mode: 'production',
    module: {
        rules: [
          {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=img/[name]_[hash:5].[ext]"}
        ]
      },  
    output: {
        publicPath: ''
    }
});