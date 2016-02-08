var path = require("path");
module.exports = {
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.tsx']
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
