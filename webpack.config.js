module.exports = {
    // Other webpack configurations
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          // Ignore warnings related to missing source maps
          exclude: [/node_modules\/@mediapipe/],
        },
      ],
    },
  };
  