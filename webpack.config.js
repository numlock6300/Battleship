const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.css/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svb|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext][query]",
				},
			},
		],
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "img/[name][ext][query]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Restaurant page",
			filename: "index.html",
			template: "./src/template.html",
		}),
	],
};
