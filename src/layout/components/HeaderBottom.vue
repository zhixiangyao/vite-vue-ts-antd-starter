<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { theme } from 'ant-design-vue'

defineOptions({ name: 'HeaderBottom' })

const { token } = theme.useToken()
const collapsed = defineModel<boolean>('collapsed', { default: false })
</script>

<template>
  <div
    class="flex justify-center items-center mt-auto px-1 h-10 cursor-pointer select-none border-t-4 border-t-solid border-t-[color:var(--light-bg-color)] dark:border-t-[color:var(--dark-bg-color)]"
    @click="collapsed = !collapsed"
  >
    <MenuUnfoldOutlined v-if="collapsed" :style="{ color: token.colorPrimary }" />
    <MenuFoldOutlined v-else :style="{ color: token.colorPrimary }" />
  </div>
</template>
