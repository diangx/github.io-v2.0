const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave:false,
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.plugin('define').tap((args) => {
            const webpackConfig = args[0];
            webpackConfig['__VUE_PROD_DEVTOOLS__'] = false;
            webpackConfig['__VUE_PROD_HYDRATION_WARNING__'] = false;
            webpackConfig['__VUE_PROD_HYDRATION_MISMATCH__'] = false;
            webpackConfig['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
            return args;
        });
    }
})
