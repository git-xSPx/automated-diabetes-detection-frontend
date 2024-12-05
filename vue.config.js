const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
//   devServer: {
//     proxy: 'http://127.0.0.1:5000',
//   }
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // Set the title that will replace <%= htmlWebpackPlugin.options.title %> in index.html
      title: 'Прогноз діабету',
    }
  }
})
