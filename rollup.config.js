import * as fs from 'fs';
import postcss from 'postcss';
import scss from 'rollup-plugin-scss';
import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
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
    typescript(),
  ],
};
