module.exports = {
    //entry: './src/index.js',
    entry: {
        entry: './src/index_without_reactredux.js',
    },
    
    output: {
        path: __dirname,
        filename: 'app.js'
    },

    devServer: {
        inline: true,
        port: 7778
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
