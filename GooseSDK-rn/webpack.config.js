// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ESBuildPlugin = require('esbuild-webpack-plugin').default

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.js',
	},
	plugins: [
		new ESBuildPlugin(),
		// new UglifyJsPlugin({
		// 	uglifyOptions: {
		// 		warnings: false,
		// 		parse: {},
		// 		compress: {},
		// 		mangle: true, // Note `mangle.properties` is `false` by default.
		// 		output: {
		// 			/*
		// 				是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，
		// 				可以设置为false
		// 			*/
		// 			beautify: false,
		// 			/*
		// 				是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
		// 			*/
		// 			comments: false
		// 		},
		// 		toplevel: false,
		// 		nameCache: null,
		// 		ie8: false,
		// 		keep_fnames: false,
		// 	},
		// }),
		// 压缩混淆输出的 js 代码
	],
	 optimization: {
		minimize: true,
    minimizer: [
      new ESBuildPlugin(),
      /**
       * Or customize ESBuild options like below:
       *
       * new ESBuildPlugin({target: "es5"}),
       *
       * For details, please refer: https://github.com/evanw/esbuild
       */
		 ],
  },

	module: {
		rules: [ // 规则
			{
				test: /\.js?$/,
				exclude: /node_modules/, // 匹配的范围包括node_modules里的文件
				use: {
					loader: 'esbuild-loader', // 使用babel-loader将ES6/jsx语法转化为ES5语法
					options: {
						loader: 'jsx',
						target: 'es2015',
						// 使用 Babel 的预设插件 babel-preset-es2015,babel-preset-react 来转义 ES6。
					},
				},
			},
		],
	},
	// module: {
	// 	rules: [{
	// 		test: /\.js$/,
	// 		use: 'esbuild-loader',
	// 		loader: 'jsx',//Remove this if you're not using jsx
	// 		options: {
	// 			query: {
	// 				target: 'es2015'//Syntax to complile to （see options below for possible values)
	// 				}
	// 		}
	// 	}]
	// },
	resolve: {
		extensions: ['.js'],
	},
}