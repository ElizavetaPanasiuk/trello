const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "./index.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
    ]
  },
  plugins: [
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
      useTabs: true,
      semi: true,
      encoding: 'utf-8',            
      extensions: [ ".tsx" ]
    }),
    new ESLintPlugin({
      extensions: [".tsx"]
    })
  ],
};