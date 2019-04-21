const path = require('path');

const resolve = file => path.resolve(__dirname, '../', file);

module.exports = {
  filename: 'pm.min.js',
  libraryName: 'pm',
  entries: {
    base: resolve('src/index.ts'),
    dev: resolve('src/index.ts')
  },
  paths: {
    template: resolve('src/index.html'),
    dist: {
      base: resolve('dist'),
      browser: {
        legacy: resolve('dist/browser/legacy'),
        modern: resolve('dist/browser/modern')
      }
    }
  }
};
