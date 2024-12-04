const nodeExternals = require("webpack-node-externals");
const config = require("./config").createTarget({
  target: "server",
});

module.exports = {
  ...config.webpack,

  output: {
    ...config.webpack.output,
    library: {
      type: "commonjs2",
    },
  },

  module: {
    rules: [
      ...config.webpack.module.rules,
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          emit: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    ...config.webpack.resolve,
    alias: {
      "css-loader": false,
    },
  },

  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: nodeExternals(),
};
