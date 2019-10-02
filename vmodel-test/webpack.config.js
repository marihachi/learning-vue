const VueLoaderPlugin = require('vue-loader/lib/plugin');

const configs = [];

configs.push({
	entry: './src/client/main.js',
	output: {
		path: `${__dirname}/dist`,
		filename: `bundle.js`
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{ loader: 'vue-loader' }
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'vue-style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'vue-style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader' }
				]
			}
		]
	},
	resolve: {
		extensions: ['.js'],
		alias: { vue$: 'vue/dist/vue.esm.js', }
	},
	plugins: [
		new VueLoaderPlugin()
	]
});

module.exports = configs;
