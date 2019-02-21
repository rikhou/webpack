var webpack = require("webpack")

module.exports = {
  entry: ['babel-polyfill', './src/index.1.jsx'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: "main.js"
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['latest', 'react', 'stage-0'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 9010,
    inline: true,
    hot: true,
  },
}; 