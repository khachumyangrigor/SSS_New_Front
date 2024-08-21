const path = require("path");
const webpack = require("webpack");

const { NODE_ENV = "development" } = process.env;

const IS_DEVELOPMENT = NODE_ENV === "development";

function commonConfig() {
  return {
    port: 3008,
    publicPath: "/",
  };
}

function createTarget({
  // Target name
  target,
}) {
  let { publicPath } = commonConfig();

  /**
   * Root of project
   */
  let root = path.join(__dirname, "../");

  /**
   * Path for compiled assets
   */
  let dist = path.join(root, "dist", target);

  /**
   * Source directory
   */
  let src = path.join(root, "src");

  /**
   * Name of output bundles
   */
  let name = "[name].js";

  let IS_SERVER = target === "server";
  let IS_CLIENT = target === "client";

  return {
    root,
    src,
    dist,
    InlineFileLimit: 10000,
    isDevelopment: IS_DEVELOPMENT,

    webpack: {
      name: target,
      entry: path.join(src, target + ".js"),
      devtool: IS_DEVELOPMENT ? "inline-source-map" : false,
      mode: NODE_ENV,

      output: {
        path: dist,
        filename: name,
        chunkFilename: name,
        sourceMapFilename: "[name].map",
        publicPath,
        clean: true,
        library: {
          name: "Library Name",
          type: "commonjs2",
        },
      },

      stats: "normal",

      resolve: {
        alias: {
          myApp: path.resolve(__dirname, "../src"),
        },
        extensions: ["", ".js", ".jsx"],
      },

      module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
              },
            },
          },
        ],
      },

      plugins: [
        new webpack.DefinePlugin({
          IS_SERVER: JSON.stringify(IS_SERVER),
          IS_CLIENT: JSON.stringify(IS_CLIENT),
          "typeof window": JSON.stringify(IS_CLIENT ? "object" : "undefined"),
        }),

        new webpack.NoEmitOnErrorsPlugin(),
      ],
    },
  };
}

module.exports = {
  commonConfig,
  createTarget,
};
