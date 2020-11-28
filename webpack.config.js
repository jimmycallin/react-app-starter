"use strict";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = function (env, { mode }) {
  const isDevelopment = mode === "development";
  return {
    mode,
    devtool: "cheap-module-source-map",
    output: { filename: "[contenthash].js", path: path.resolve(__dirname, "dist") },
    target: "web",
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({ NODE_ENV: isDevelopment ? '"development"' : '"production"' }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    optimization: isDevelopment
      ? {}
      : {
          splitChunks: {
            chunks: "all",
            maxSize: 200000,
          },
        },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
            },
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader",
        },
      ],
    },
  };
};
