module.exports = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: 'style!css' },
        {test: /\.css$/, loader: 'style!css'},
        {
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: []
};
