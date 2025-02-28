import type { ConfigEnv, UserConfigExport } from 'vite'
import { resolve } from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import packageJson from './package.json'

const isDev = process.env.NODE_ENV !== 'production'
const r = (...args: string[]) => resolve(__dirname, ...args)

/**
 * https://vitejs.dev/config/
 */
const baseConfig: UserConfigExport = {
  plugins: [
    vue(),
    vueJsx({
      optimize: true,
      enableObjectSlots: true,
    }),
    AutoImport({
      imports: ['vue'],
      dts: r('src/auto-imports.d.ts'),
      resolvers: [],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [r('src/components')],
      // generate `components.d.ts` for ts support with Volar
      dts: r('src/components.d.ts'),
      resolvers: [],
    }),
    // https://github.com/unocss/unocss
    UnoCSS(),
  ],
  define: {
    __DEV__: isDev,
    __NAME__: JSON.stringify(packageJson.name),
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: r('src'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', 'ant-design-vue', '@ant-design/icons-vue'],
  },
}

export default ({ command }: ConfigEnv) => {
  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
