const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = ({
  css:{
    loaderOptions:{
        postcss:{
            postcssOptions:{
                plugins:[
                    require('postcss-pxtorem')({rootValue:37.5,propList:['*']})
                ]
            }
        }
    }
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
