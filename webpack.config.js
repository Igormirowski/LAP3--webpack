const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    mode: 'none',
    module: {
        rules: [
            { test: /\.(png|jpg)$/, use: 'file-loader' }
        ]
    }
}