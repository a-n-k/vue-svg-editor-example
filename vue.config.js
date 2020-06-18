process.env.VUE_APP_TEST = process.env.TEST;

const PUBLIC_PATH = '/vue-svg-editor-example';

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? PUBLIC_PATH : '/',
	productionSourceMap: false,
	parallel: false,
	chainWebpack: function (config) {
		config.module
				.rule('vue')
				.use('vue-loader')
				.loader('vue-loader')
				.tap(function (options) {
					options.compilerOptions = {whitespace: 'condense'};
					options.optimizeSSR = false;
					options.prettify = false;
					return options;
				});

		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('url-loader')
				.loader('url-loader')
				.tap(function (options = {}) {
					options.limit = 4096;
					options.esModule = false;
					// if the image size is greater than the limit, used this
					options.fallback = {
						loader: 'file-loader',
						options: {
							name: '[name].[hash:8].[ext]'
						}
					}
					return options;
				});
	}
}