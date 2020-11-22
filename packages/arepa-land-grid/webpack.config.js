const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, { mode }) => ({
  entry: "./src/index.js",
  cache: false,

  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath:
      mode === "production"
        ? "https://arepa-land-grid.surge.sh/dist/"
        : "http://localhost:3001/",
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
          plugins: ["@babel/plugin-transform-runtime"],
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

      shared: [
        "react",
        "react-dom",
        "single-spa-react",
        "zustand",
        "@babel/plugin-transform-runtime",
        "@babel/runtime",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
