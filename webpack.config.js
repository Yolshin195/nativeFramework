const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {

}
    module.exports = {
        context: path.join(__dirname, 'src'),

        //точка входа в наше приложение
        entry: './index.js',
        //выходной вайл
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist')
        },

        devtool: 'eval',

        devServer: {
            port: 4200
        },

        // задали абсолютный путь до фреймворка по имени framework
        resolve: {
            alias: {
                'framework': path.join(__dirname, 'src/framework')
            }
        },

        plugins: [
            //плагин генирируте index.html с подключеным js 
            new HtmlWebpackPlugin({  
                template: './index.html'
            })
        ]

    }
