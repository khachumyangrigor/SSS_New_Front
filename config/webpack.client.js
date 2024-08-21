const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { join } = require("path");
const path = require("path");

const config = require("./config").createTarget({
  target: "client",
});

module.exports = {
  ...config.webpack,

  entry: {
    main: [
      "webpack-hot-middleware/client?reload=true", // HMR client code
      "./src/client.js",
    ],
  },

  module: {
    rules: [
      ...config.webpack.module.rules,
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]-[hash][ext]",
        },
      },
    ],
  },

  devServer: {
    static: config.dist,
    open: true,
    port: 3000,
    compress: true,
  },

  optimization: {
    ...(!config.isDevelopment
      ? {
          minimize: true,
          minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin()],
          emitOnErrors: true,
        }
      : { runtimeChunk: "single" }),
  },

  plugins: [
    ...config.webpack.plugins,

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"), // Adjust the path as necessary
    }),

    ...(config.isDevelopment
      ? []
      : [
          new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
          }),
          new CopyPlugin({
            patterns: [{ from: join(__dirname, "..", "public"), to: "./" }],
          }),
        ]),
  ],

  resolve: {
    ...config.webpack.resolve,
  },
};
