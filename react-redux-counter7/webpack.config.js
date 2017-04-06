module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        filename: 'app.js'
    },

    devServer: {
        inline: true,
        port: 7776
    },

    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
