const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

const Webpack = require('webpack');

module.exports = {
    entry : {
		index : './client/src/page-index.js',
		chat : './client/src/page-chat.js',
		register : './client/src/page-register.js'
    },
    mode : 'development',
    module: {
        rules: [
          // ... other rules
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader',
            ]
          }
        ]
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'client/dist')
    },
    plugins: [
      new VueLoaderPlugin(),
      new Webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.vue' ],
      alias: {
        vue: '@vue/runtime-dom'
      },
    },
}