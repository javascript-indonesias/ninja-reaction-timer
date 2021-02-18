module.exports = {
    chainWebpack: (config) => {
        // remove the prefetch plugin
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');

        config.plugin('html').tap((args) => {
            const argumentwebpack = args;
            argumentwebpack[0].scriptLoading = 'defer';
            argumentwebpack[0].hash = true;
            argumentwebpack[0].title = 'Vue Reaction Time';
            return argumentwebpack;
        });
    },
    devServer: {
        port: 3200,
    },
};
