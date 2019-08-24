const path= require("path");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(path.join(__dirname,"dist")),
        filename: "[name].js",
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"], },
            { test: /\.jsx?$/, use: {
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", '@babel/preset-react'], },
            }}
        ]
    }
};