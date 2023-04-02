const {join} = require('path');

const config = require('./config').createTarget({
    target: 'server'
});

module.exports = {
    ...config.webpack,

    output: {
        ...config.webpack.output,
        libraryTarget: 'commonjs2'
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
                              emitFile: false,
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
                                    emitFile: false,
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
                            emitFile: false,
                        }
                      }
                    },
                    {
                      test: /\.css$/,
                      use: 'null-loader'
                    },
                    {
                      loader: 'file-loader',
                      exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                      options: {
                        name: config.mediaName,
                        esModule: false,
                        emitFile: false,
                      },
                    },
                ]
            }
        ]
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },

    externals: {
      'express': 'commonjs express',
      'react': 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router-dom': 'commonjs react-router-dom',
      'react-router-config': 'commonjs react-router-config'
    }
};
