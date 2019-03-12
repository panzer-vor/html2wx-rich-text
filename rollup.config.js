
import { uglify }  from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/html2wx-rich-text.js',
    name: 'html2wx-rich-text',
    format: 'umd'
  },
  plugins: [
    uglify(), 
    babel({
      exclude: 'node_modules/**'
    })
  ],
  sourceMap: true,
};
