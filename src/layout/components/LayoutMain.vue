<script lang="ts" setup>
import { theme } from 'ant-design-vue'

interface Props {
  cachedViewNames: string[]
}

defineOptions({ name: 'LayoutMain' })
defineProps<Props>()

const { token } = theme.useToken()
</script>

<template>
  <main
    class="grid-col-start-2 grid-col-end-3 grid-row-start-3 grid-row-end-4 p-1 overflow-auto"
    :style="{ backgroundColor: token.colorBgContainer }"
  >
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="cachedViewNames">
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
  </main>
</template>
