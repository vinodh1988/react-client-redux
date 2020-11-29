const HtmlWebPackPlugin = require('html-webpack-plugin');
const path =require("path")

module.exports = {
    devServer: {
        port : 8899,
        historyApiFallback: true
    },
    devtool: "source-map",
    entry: {
        app: path.join(__dirname, "src/index.js")
      },
      output: {
        path: path.join(__dirname, 'dist/'),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        publicPath: process.env.NODE_ENV === 'development' ? "/dist/" : ""
      },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ]
};