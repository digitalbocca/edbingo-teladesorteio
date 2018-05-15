'use strict'

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          publicPath: ''
        }
      }
    } else {
      // mutate for development...
    }
  }
}

// module.exports = {
//   configureWebpack: {
//     mode: 'production',
//     output: {
//       publicPath: '',
//       sourceMapFilename: 'asdf',
//       // noSources: true
//     },
//     plugins: [
//       'sourcemapdevtoolplugin' : {
//         noSources: true
//       }
//     ]
//   }
// }
