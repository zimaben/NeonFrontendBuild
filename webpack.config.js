const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

// change these variables to fit your project

const cssPath = './src'
const outputPath = 'dist';

const entryPoints = {
  // 'app' is the output name, people commonly use 'bundle'
  // you can have more than 1 entry point

   'style': cssPath + '/style.scss',
}

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { indentedSyntax: true }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: 'url-loader?limit=1024'
      }
    ],
  },
};