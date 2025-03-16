import type { ConfigEnv, UserConfigExport } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const r = (...args: string[]) => resolve(__dirname, ...args)

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
    Components({
      dirs: [r('src/components')],
      dts: r('src/components.d.ts'),
      resolvers: [],
    }),
    UnoCSS(),
  ],
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
