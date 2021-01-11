const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		client: './src/client/index.tsx',
		backend: './src/backend/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/react'],
							plugins: ['@babel/plugin-transform-runtime'],
						},
					},
				],
			},
			{
				test: /(\.ts|\.tsx)$/,
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'react-svg-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new Dotenv(),
	],
}
