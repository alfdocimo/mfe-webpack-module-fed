const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "arepaLandGridModule",
      library: { type: "var", name: "arepaLandGridModule" },
      filename: "arepaLandGridModule.js",

      exposes: {
        "./Grid": "./src/Grid",
        "./store": "./src/store/index.js",
      },

      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
