const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry.js'
    },
    output: {
        filename: '[name].bundle.js', 
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist'
    },
    plugins: [
        new Dotenv()
    ]
}