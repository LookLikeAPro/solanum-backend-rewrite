var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("./loadersByExtension");

module.exports = function(options) {
	//=====================ENTRY======================
	var entry = {
		main: options.prerender ? "./client-app/mainPrerenderer" : "./client-app/mainApp"
		// second: options.prerender ? "./config/secondPrerenderer" : "./config/secondApp"
	};
	//=====================LOADERS======================
	var loaders = {
		jsx: options.hotComponents ? ["react-hot-loader", "babel-loader?stage=0"] : "babel-loader?stage=0",
		js: {
			loader: "babel-loader?stage=0",
			include: path.join(__dirname, "../client-app")
		},
		json: "json-loader",
		coffee: "coffee-redux-loader",
		json5: "json5-loader",
		txt: "raw-loader",
		"png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
		"woff|woff2": "url-loader?limit=100000",
		"ttf|eot": "file-loader",
		"wav|mp3": "file-loader",
		html: "html-loader",
		"md|markdown": ["html-loader", "markdown-loader"]
	};
	//CSS Modules
	//var cssLoader = options.minimize ? "css-loader?module" : "css-loader?module&localIdentName=[path][name]---[local]---[hash:base64:5]";
	//Traditional CSS
	var cssLoader = "css-loader!autoprefixer-loader";
	var stylesheetLoaders = {
		css: cssLoader,
		less: [cssLoader, "less-loader"],
		styl: [cssLoader, "stylus-loader"],
		"scss|sass": [cssLoader, "sass-loader"]
	};
	Object.keys(stylesheetLoaders).forEach(function(ext) {
		var stylesheetLoader = stylesheetLoaders[ext];
		if (Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
		if (options.prerender) {
			stylesheetLoaders[ext] = stylesheetLoader.replace(/^css-loader/, "css-loader/locals");
		}
		else if (options.separateStylesheet) {
			stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", stylesheetLoader);
		}
		else {
			stylesheetLoaders[ext] = "style-loader!" + stylesheetLoader;
		}
	});
	var additionalLoaders = [
		// { test: /some-reg-exp$/, loader: "any-loader" }
	];
	var alias = {

	};
	var aliasLoader = {

	};
	var externals = [

	];
	//=====================PATHS======================
	var modulesDirectories = ["web_modules", "node_modules"];
	var extensions = ["", ".web.js", ".js", ".jsx"];
	var root = path.join(__dirname, "../client-app");
	var publicPath = options.devServer ?
		"http://localhost:2992/static/" :
		"/static/client/";
	var output = {
		path: path.join(__dirname, "../static", options.prerender ? "prerender" : "client"),
		publicPath: publicPath,
		filename: "[name].js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
		chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
		sourceMapFilename: "debugging/[file].map",
		libraryTarget: options.prerender ? "commonjs2" : undefined,
		pathinfo: options.debug || options.prerender
	};
	//=====================PLUGINS======================
	var plugins = [
		new webpack.PrefetchPlugin("react"),
		new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
		new webpack.ProvidePlugin({
			fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
		})
	];
	if (options.commonsChunk) {
		plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : "")));
	}
	var asyncLoader = {
		test: require("../client-app/containers/async").map(function(name) {
			return path.join(__dirname, "../client-app", "containers", name);
		}),
		loader: options.prerender ? "react-proxy-loader/unavailable" : "react-proxy-loader"
	};
	if (options.separateStylesheet && !options.prerender) {
		plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash]" : "")));
	}
	if (options.minimize && !options.prerender) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin()
		);
	}
	if (options.minimize) {
		plugins.push(
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.NoErrorsPlugin()
		);
	}
	//=====================STATS======================
	var excludeFromStats = [
		/node_modules[\\\/]react(-router)?[\\\/]/,
		/node_modules[\\\/]items-store[\\\/]/
	];
	if (options.prerender) {
		plugins.push(new StatsPlugin(path.join(__dirname, "../static/prerender", "stats.json"), {
			chunkModules: true,
			exclude: excludeFromStats
		}));
		aliasLoader["react-proxy$"] = "react-proxy/unavailable";
		aliasLoader["react-proxy-loader$"] = "react-proxy-loader/unavailable";
		externals.push(
			/^react(\/.*)?$/,
			/^reflux(\/.*)?$/,
			"async"
		);
		plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
	}
	else {
		plugins.push(new StatsPlugin(path.join(__dirname, "../static/client", "stats.json"), {
			chunkModules: true,
			exclude: excludeFromStats
		}));
	}

	return {
		entry: entry,
		output: output,
		target: options.prerender ? "node" : "web",
		module: {
			loaders: [asyncLoader].concat(loadersByExtension(loaders)).concat(loadersByExtension(stylesheetLoaders)).concat(additionalLoaders)
		},
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, "node_modules"),
			alias: aliasLoader
		},
		externals: externals,
		resolve: {
			root: root,
			modulesDirectories: modulesDirectories,
			extensions: extensions,
			alias: alias
		},
		plugins: plugins,
		devServer: {
			stats: {
				cached: false,
				exclude: excludeFromStats
			}
		}
	};
};
