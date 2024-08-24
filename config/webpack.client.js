const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

const config = require("./config").createTarget({
  target: "client",
});

const filter = (arr) => arr.filter(Boolean);

module.exports = {
  ...config.webpack,

  entry: {
    main: filter([
      config.isDevelopment && "webpack-hot-middleware/client?reload=true",
      config.webpack.entry,
    ]),
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),

    ...(config.isDevelopment
      ? []
      : [
          new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
          }),
        ]),
  ],

  resolve: {
    ...config.webpack.resolve,
  },
};
