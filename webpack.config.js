const path = require('path');

module.exports = {
  entry: './client/src/index.jsx', // tells webpack where to start looking for files
  output: {
    path: path.resolve(__dirname, 'client/dist'), // folder where webpack will put bundle
    filename: 'bundle.js', // what it will name the bundle
  },
  module: {
    loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
          ], 
    rules: [
      { // everything that babel needs to run
        test: /\.jsx?$/, // .js OR .jsx files
        exclude: /(node_modules)/, // if the file is in the node_modules folder, don't transpile
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }, 
};
