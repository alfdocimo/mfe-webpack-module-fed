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
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".svelte", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            externalDependencies: true,
          },
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "arepaLandViewerModule",
      library: { type: "var", name: "arepaLandViewerModule" },
      filename: "arepaLandViewerModule.js",
      exposes: {
        "./View": "./src/view-spa.js",
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
