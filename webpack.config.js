'use strict';

var path = require('path');

// postcss plugins
var postcss_simple_vars = require('postcss-simple-vars');
var postcss_simple_extend = require('postcss-simple-extend');
var postcss_import = require('postcss-import');
var lost = require('lost');

module.exports = {
    entry: './js/index.js',

    output: {
        path: __dirname,
        filename: 'dist/bundle.js',
    },

    resolve: {
        alias: {
            pieces: path.resolve('./js'),
            pieces_css: path.resolve('./css'),
            pieces_img: path.resolve('./img'),
        },
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /fonts\/.*\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /fonts\/.*\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            },
            {
                test: /fonts\/.*\.svg$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /fonts\/.*\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
            },
        ]
    },

    // postcss plugins are executed in array order
    postcss: [
        postcss_import,
        lost,
        postcss_simple_vars,
        postcss_simple_extend,
    ],

    devtool: '#source-map',

    devServer: {
        host: '0.0.0.0'
    }
};
