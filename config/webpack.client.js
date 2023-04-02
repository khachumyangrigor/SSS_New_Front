const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const {join} = require('path');

const config = require('./config').createTarget({
    target: 'client'
});

const filter = (arr) => arr.filter(Boolean);

module.exports = {
    ...config.webpack,

    entry: {
        main: filter([
            config.isDevelopment && 'webpack-hot-middleware/client?reload=true',

            config.webpack.entry
        ])
    },

    module: {
        ...config.webpack.module,

        rules: [
            ...config.webpack.module.rules,

            {
                oneOf: [
                    {
                      test: /\.(png|jpe?g|gif|bmp)$/i,
                      use: {
                          loader: 'url-loader',
                          options: {
                              limit: config.InlineFileLimit,
                              name: config.mediaName,
                              esModule: false,
                          }
                      }
                    },
                    {
                      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                      issuer: {
                        test: /\.jsx?$/
                      },
                      use: ['babel-loader', 
                            '@svgr/webpack', 
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: config.InlineFileLimit,
                                    name: config.mediaName,
                                    esModule: false,
                                }
                            }
                      ]
                    },
                    {
                      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                      use: {
                        loader: 'url-loader',
                        options: {
                            limit: config.InlineFileLimit,
                            name: config.mediaName,
                            esModule: false,
                        }
                      }
                    },
                    {
                      test: /\.css$/,
                      use: [
                          MiniCssExtractPlugin.loader,
                          'css-loader'
                      ]
                    },
                    {
                      loader: 'file-loader',
                      exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                      options: {
                        name: config.mediaName,
                        esModule: false,
                      },
                    },
                ]
            }
        ]
    },
    optimization: {
      minimizer: !config.isDevelopment ? [new OptimizeCSSAssetsPlugin({})]:[],
    },
    plugins: [
        ...config.webpack.plugins,

        new MiniCssExtractPlugin({
            filename: config.isDevelopment
                ? '[name].css'
                : '/css/[name].css',//[hash:16].css
        }),

        ...(config.isDevelopment ? [
            new webpack.HotModuleReplacementPlugin(),
        ] : [
          new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
          }),
          new CopyPlugin({
            patterns: [
              { from: join(__dirname, '..', 'public'), to: './' },
            ],
          }),
        ])
    ]
};
