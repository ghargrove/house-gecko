
var path = require('path');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    module: {
        rules: [
            
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};
