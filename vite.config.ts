// by willian 2021/4/4
// https://vitejs.dev/  or  https://cn.vitejs.dev/

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')

export default ({ mode, command }) => {
  console.log('----------')
  console.info('mode: ', mode)
  console.log('command: ', command)
  console.log('----------')

  return defineConfig({
    resolve: {
      alias: {
        '~@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // scss全局变量
          additionalData: '@import "./src/styles/variables";'
        }
      }
    },
    plugins: [reactRefresh()]
  })
}
