var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './docs/app.js',
    output: {
        filename: 'docs.js',
        publicPath: '/docs/build',
        path: path.resolve(__dirname, 'docs/build')
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/components')
        }
    }
}
