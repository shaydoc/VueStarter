const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

let entry =   ['webpack/hot/dev-server','webpack-hot-middleware/client','es6-promise/auto','./code/main.js']

if ( process.env.NODE_ENV == 'production'){
  process.env.ENV_LABEL = '[hash:8]'
  entry =  ['es6-promise/auto','./code/main.js']  

}
                                                                  
module.exports = {
    devtool: 'source-map',
    entry:{
        vueStarter:entry
    },
    output: {
        path: path.resolve(__dirname, './_WebpackScripts'),
        publicPath: '/dist/',
        chunkFilename: '[id].chunk.js',
        filename: '[name]_'+ process.env.ENV_LABEL + '.js' 
    },
    module: {
        rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                      // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                      // the "scss" and "sass" values for the lang attribute to the right configs here.
                      // other preprocessors should work out of the box, no loader config like this nessessary.
                      'scss': 'vue-style-loader!css-loader!sass-loader',
                      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  }
                  // other vue-loader options go here
              }
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]?[hash]'
              }
          },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
         }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
            'vue-router$':  'vue-router/dist/vue-router.common.js'
        }
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },

    plugins: [
       new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
     new webpack.HotModuleReplacementPlugin()
    ]
    
}

if (process.env.NODE_ENV === 'production') {
     module.exports.devtool = 'source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
              warnings: false
          }
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      })
    ])
}


