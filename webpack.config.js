var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'build/js'),
        publicPath: 'build/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        ['babel-plugin-transform-es2015-template-literals'],
                    ],
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 8080,
    }
};