// webpack looks for this filename by default in out "./*" directory.

// declare global plugins/depedencies
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


// exporting this module for the global rules of webpack
module.exports = {
  // set entry
  entry: "./client/src/index.js",
  // set output
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    // resolve our different file types
    rules: [
      {
        // checks the extension
        test: /.(js|jsx)$/,
        // ignores these folders/directories
        exclude: /node_modules/,
        // if test passes, webpack uses the loaders specified
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
         test: /\.(jpg|webp|png|gif|svg|mp4)$/,
         loader: 'file-loader',
         options: {
            name: '[path][name].[hash].[ext]',
         },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  // set mode
  mode: "development",
  // setup dev server
  devServer: {
    host: "localhost",
    port: "8080",
    historyApiFallback: true,
    inline: true,
    proxy: { "/api": { target: "http://localhost:3000", secure: false } },
  },
  // set plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/src/index.html",
      // favicon: '/assets/images/postmark-logo.png'
    }), new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    })
  ],
  // resolve extensions for imports into future components
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
  },
};
