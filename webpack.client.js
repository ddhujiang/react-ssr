//服务器端和浏览器端 require('path');打包出来的代码是完全不同的
const Path=require('path');
const merge=require('webpack-merge');
const config=require('./webpack.base');
const clientConfig={
    mode:'development',     //开发环境还是线上环境
    entry:'./src/client/index.jsx',   //入口
    output:{               //输出
        filename:'index.js',
        path:Path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{        //presets配置的都要npm安装它的依赖，列如babel-preset-react  babel-preset-env
                    presets:['react','stage-0',['env',{targets:{  //配置环境，兼容浏览器的版本
                        browsers:['last 2 versions']
                    }}]]
                }
            },
            {
                test:/\.css?$/,
                use:['style-loader',{
                    loader: "css-loader",
                    options:{
                        importLoaders:1,
                        modules:true,
                        localIdentName:'[name]_[local]_[hash:base64:5]'
                    }
                }]
            }
        ]
    }
};
module.exports=merge(config,clientConfig);

