module.exports = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.jsx$/, exclude: /assets/, loader: 'jsx-loader' },
        { test: /\.css$/, include: /assets/,loader: 'style-loader!css-loader'},
        {
          exclude: [/node_modules/, /bower_components/, /assets/],
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: []
};
