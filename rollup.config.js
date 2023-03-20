import * as fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    assetFileNames: '[name][extname]',
  },
  plugins: [
    scss({
      output: function (styles) {
        fs.writeFileSync('dist/bundle.css', styles);
      },
      processor: () =>
        postcss([autoprefixer({ overrideBrowserslist: ['last 2 versions'] })]),
    }),
    nodeResolve(),
  ],
};
