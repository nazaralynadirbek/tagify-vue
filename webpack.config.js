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

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = './src/app.js';

    module.exports.output = {
        publicPath: '/dist/',
        filename: 'tagify-vue.min.js',
        path: path.resolve(__dirname, './dist')
    };

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true
        })
    ])
}
