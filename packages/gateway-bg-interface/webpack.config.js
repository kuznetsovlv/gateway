const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const development = process.env.NODE_ENV === 'development';
const production = !development;

const output = () => {
  const base = {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  };

  if (production) {
    base.library = 'gateway-bg-interface';
    base.libraryTarget = 'umd';
    base.globalObject = 'this';
    base.umdNamedDefine = true;
  }

  return base;
};

module.exports = {
  mode: development ? 'development' : 'production',
  context: resolve(__dirname, 'src'),
  entry: production ? './index.js' : './test/index.js',
  output: output(),
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  target: 'node',
  plugins: [new CleanWebpackPlugin()]
};
