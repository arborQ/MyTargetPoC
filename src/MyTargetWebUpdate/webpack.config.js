var path = require("path");
module.exports = {
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['react', 'es2015']
              }
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    entry: {
        // angular: "./sources/application.angular/app.ts",
        react: "./sources/application.react/app.tsx"
    },
    output: {
        path: path.join(__dirname, "wwwroot"),
        filename: "./webpack/[name].bundle.js"
    },
    noParse : [ 'react', 'react-dom']
};
