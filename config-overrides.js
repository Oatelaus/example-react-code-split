module.exports = function override(config, env) {
	const { resolve: { modules } } = config;

	config.resolve.modules = ["src"].concat(modules);

	return config;
}