const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports= {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static : './dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

        ],
    },
  
     plugins: [
        new HtmlWebpackPlugin ({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
     ],

};