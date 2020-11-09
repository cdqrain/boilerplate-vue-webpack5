const path = require('path')

module.exports = {
  build: path.resolve(__dirname, '../dist'),
  components: path.resolve(__dirname, '../src/components'),
  config_file: path.resolve(__dirname, './config.json'),
  images: path.resolve(__dirname, '../src/images'),
  public: path.resolve(__dirname, '../public'),
  services: path.resolve(__dirname, '../src/services'),
  src: path.resolve(__dirname, '../src'),
  views: path.resolve(__dirname, '../src/views')
}
