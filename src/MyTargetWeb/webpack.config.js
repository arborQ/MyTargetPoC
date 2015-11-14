module.exports = {
  // devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  output: {
       path: __dirname + "/wwwroot",
       filename: "[name].bundle.js"
   },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  entry: {
    react: './src/react/react.app.tsx'
  }
};
