module.exports={
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
        ]
    }
};
