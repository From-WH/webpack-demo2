const path = require('path');

module.exports = {
    // mode: 'production',
    entry: './src/js/app.js',    //获取要输入的js文件
    output: {
        filename: 'bundle.js',     //输出的文件名
        path: path.resolve(__dirname, 'dist/js')  //输出到的文件位置
    },
    module: {
        rules: [
            {
                test: /\.js$/,   //只要是js结尾的
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',  //就使用babel-loader翻译一下，翻译成ie看得懂的
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,     //获取要输出的文件格式
                use: [
                    {
                        loader: "style-loader"      //第三部 把刚才的common js字符串转为style
                    },
                    {
                        loader: "css-loader",      //第二部，把css转为common js字符串
                        options: { importLoaders: 1 }
                    },{
                        loader: 'postcss-loader'
                      },
                    {
                        loader: "sass-loader",     //获取后第一步 把sass转为css
                    //     // options: {
                    //     //     includePaths: ["absolute/path/a", "absolute/path/b"]
                    //     // }
                    }
                ]
            }

        ]
    }
};
