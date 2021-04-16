const path = require("path");

module.exports = {
	entry: "./main.js",
	mode: process.env.WEBPACK_MODE || "production",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "./dist"),
	},
};
