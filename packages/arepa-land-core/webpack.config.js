const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

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
        ? path.resolve(__dirname, "./")
        : "http://localhost:3000/",
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
      name: "arepaLandCoreModule",
      library: { type: "var", name: "arepaLandCoreModule" },
      filename: "arepaLandCoreModule.js",

      remotes: {
        arepaLandGridModule: "arepaLandGridModule",
        arepaLandViewerModule: "arepaLandViewerModule",
      },

      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: `./public/index.${mode}.html`,
    }),
  ],
});
