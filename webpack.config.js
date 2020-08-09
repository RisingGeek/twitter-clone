const HtmlWebPackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

module.exports = (env, argv) => {
  return {
    context: __dirname,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "/",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
      }),
      new DefinePlugin({
        "process.env":
          argv.mode === "development"
            ? JSON.stringify(
                dotenv.config({
                  path: path.resolve(__dirname, "./.env.development"),
                }).parsed
              )
            : JSON.stringify(dotenv.config().parsed),
      }),
    ],
  };
};
