const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

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
        ? "https://schwifty-shell.surge.sh/dist/"
        : "http://localhost:3003/",
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "schwiftyShellModule",
      library: { type: "var", name: "schwiftyShellModule" },
      filename: "schwiftyShellModule.js",

      remotes: {},
      exposes: {
        "./Shell": "./src/app-spa.js",
      },
      shared: ["node-sass", "sass", "sass-loader"],
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
});
