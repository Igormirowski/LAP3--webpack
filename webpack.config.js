const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
        clean: true
    },
    mode: 'none',
    module: {
        rules: [
            { test: /\.(png|jpg)$/, use: 'file-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            
        ]
    },
    plugins: [
      new TerserPlugin(),
      new MiniCssExtractPlugin({
          filename: 'auguste.[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Auguste',
        meta: {
          description: 'Webpack lecture'
        },
        favicon: './src/favicon.png'
      })
  
    ]
}
