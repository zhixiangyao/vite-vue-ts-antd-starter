<script setup lang="ts">
import type { ConfigProviderProps } from 'ant-design-vue'
import type { AliasToken, SeedToken } from 'ant-design-vue/es/theme/internal'
import { useDark } from '@vueuse/core'
import { App, ConfigProvider, theme } from 'ant-design-vue'

defineOptions({ name: 'AntProvider' })

const isDark = useDark()
const token = reactive<Partial<AliasToken>>({
  borderRadius: 2,
})
const seed = computed<SeedToken>(() => ({ ...theme.defaultSeed, ...token }))
const tokenDark = computed(() => theme.darkAlgorithm(seed.value))
const tokenLight = computed(() => theme.defaultAlgorithm(seed.value))
const defaultTheme = computed<ConfigProviderProps['theme']>(() => {
  return {
    token: isDark.value ? tokenDark.value : tokenLight.value,
  }
})
</script>

<template>
  <ConfigProvider :theme="defaultTheme">
    <App class="min-h-screen min-w-screen">
      <slot />
    </App>
  </ConfigProvider>
</template>
