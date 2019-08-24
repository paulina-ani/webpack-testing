const path= require("path");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(path.join(__dirname,"dist")),
        filename: "[name].js",
    }
};