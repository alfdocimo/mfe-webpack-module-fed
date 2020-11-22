const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, { mode = "development" }) => ({
  entry: "./src/index.js",
  cache: false,

  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath:
      mode === "production"
        ? "https://arepa-land-viewer.surge.sh/dist/"
        : "http://localhost:3002/",
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

      remotes: {
        arepaLandGridModule: "arepaLandGridModule",
      },

      exposes: {
        "./View": "./src/view-spa.js",
      },
      shared: ["zustand"],
    }),
    new HtmlWebpackPlugin({
      template: `./public/index.${mode}.html`,
    }),
  ],
});
