const { defineConfig } = require('@vue/cli-service')

const CUSTOM = require('./env.json')
process.env.STATE = CUSTOM.STATE

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

            args[0]['process.env'] = {
                ...args[0]['process.env'],
                STATE: JSON.stringify(process.env.STATE)
            }

            return args;
        });
    }
})
