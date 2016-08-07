var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	devtool: 'eval',
	entry:[
		'./index.jsx'
	],
	output: {
		path: __dirname + '/public',
		filename: 'index_bundle.js'
	},
	devServer: {
    	inline: true,
    	port: 8080
  	},
	module:{
		loaders:[
		{test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", query:{presets: ['react', 'es2016']}}
		]
	},
	plugins: [HTMLWebpackPluginConfig]

}