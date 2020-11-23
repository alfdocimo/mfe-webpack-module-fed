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
        ? "https://schwifty-search.surge.sh/dist/"
        : "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
          plugins: ["@babel/plugin-transform-runtime"],
        },
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
    new ModuleFederationPlugin({
      name: "schwiftySearchModule",
      library: { type: "var", name: "schwiftySearchModule" },
      filename: "schwiftySearchModule.js",

      exposes: {
        "./SearchPanel": "./src/SearchPanel",
        "./store": "./src/store/index.js",
      },

      shared: [
        "react",
        "react-dom",
        "single-spa-react",
        "zustand",
        "@babel/plugin-transform-runtime",
        "@babel/runtime",
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
