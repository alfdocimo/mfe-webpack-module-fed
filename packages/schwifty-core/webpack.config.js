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
    publicPath: mode === "production" ? "./" : "http://localhost:3000/",
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
      name: "schwiftyCoreModule",
      library: { type: "var", name: "schwiftyCoreModule" },
      filename: "schwiftyCoreModule.js",

      remotes: {
        schwiftySearchModule: "schwiftySearchModule",
        schwiftyViewerModule: "schwiftyViewerModule",
        schwiftyShellModule: "schwiftyShellModule",
      },

      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: `./public/index.${mode}.html`,
    }),
  ],
});
