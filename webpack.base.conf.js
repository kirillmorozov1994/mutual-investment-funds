const path = require('path'),
			MiniCssExtractPlugin = require('mini-css-extract-plugin'),
			CopyWebpackPlugin = require('copy-webpack-plugin'),
			HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist')
};

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: `js/[name].js`,
		path: PATHS.dist,
		// publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { 
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: 'src/js/postcss.config.js'
							}
						}
					}
				]
			},
			{
				test: /\.sass$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}, {
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								config: {
									path: 'src/js/postcss.config.js'
								}
							}
						}, {
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '../img/[name].[ext]',
							attrs: ['img:src']
						}
					}
				]
			},
			{
				test: /\.(eot|ttf|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
							publicPath: '../'
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `css/[name].css`
		}),
		new HtmlWebpackPlugin({
			hash: false,
			inject: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: `${PATHS.src}/img`,
				to: `${PATHS.dist}/img`
			}
		])
	]

};