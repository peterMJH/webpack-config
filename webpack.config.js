const cleanWebpack = require('clean-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path:__dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpack('build.js')
    ]
}