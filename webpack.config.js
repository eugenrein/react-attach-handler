/* eslint-disable */
import webpack from 'webpack';
import pkg from './package.json';
import camelCase from 'camelcase';
import ExtractTextPlugin from "extract-text-webpack-plugin";
/* eslint-enable */

const webpackConfig = {
    output: {
        filename: `${pkg.name}.js`,
        library: pkg.moduleName,
        libraryTarget: 'umd',
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        modulesDirectories: [
            'node_modules', 'bower_components',
        ],
        extensions: ['', '.jsx', '.js'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack
            .optimize
            .DedupePlugin(),
    ],
};

export default webpackConfig;
