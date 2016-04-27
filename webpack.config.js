module.exports = {
  entry: ['./client/app.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.jsx$/, exclude: /assets/, loader: 'jsx-loader' },
        { test: /\.css$/, include: /assets/,loader: 'style-loader!css-loader'},
        {include: /\.json$/, loader: "json-loader"},
        {
          exclude: [/node_modules/, /bower_components/, /assets/],
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
        }
      }]
  },
  resolve: {
    extensions: ['', ".js",".jsx", ".json"]
  },
  plugins: []
};
