var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
 
module.exports = {
    entry: {
        home:['./src/home.es6']
    },
    module: {
        rules:[
            {
                test: /\.es6$/,
                exclude: [node_modules_dir],
                include: [
                  path.resolve(__dirname,"../src")
                ],
                loader: "babel-loader",
            },{
                test:/\.css/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, "../dist"),
      compress: true,
      host:'192.168.1.133',
      hot:true,
      quiet:true,
      port: 9000
    },
    //devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: 'js/[name][hash:7].js',
        //libraryTarget: "umd", // universal module definition
        publicPath:'/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/home.html')
        }),
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],
}
 