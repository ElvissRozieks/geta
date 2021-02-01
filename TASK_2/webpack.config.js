var webpack = require('webpack');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {

    mode: "production",
  //define entry point
  entry: {
    main: './assets/js/main.js',
    vendor: './assets/js/vendor.js'
  },
  output: {
      publicPath: ASSET_PATH,
      path: path.resolve(__dirname, "./dist/js"),
      filename: "[name].bundle.min.js"
  },
  plugins:
  [
    new MiniCssExtractPlugin(
      {
        filename:"../css/bundle.min.css"
      }
    ),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
     'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
   }),
  ],
  module:{
    rules:[
      {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
      },
      {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../../img',
          },
        },
      ],
      },
    ]
  }

}
