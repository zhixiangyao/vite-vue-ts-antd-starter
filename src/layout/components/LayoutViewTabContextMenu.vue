<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { Button, theme } from 'ant-design-vue'

interface Props {
  x: number
  y: number
}

interface Emits {
  close: []
}

defineOptions({ name: 'LayoutViewTabContextMenu' })
defineProps<Props>()
defineEmits<Emits>()

const { token } = theme.useToken()
const open = defineModel<boolean>('open', { default: false })
const contextRef = ref<HTMLDivElement | null>(null)

onClickOutside(contextRef, () => (open.value = false))
</script>

<template>
  <div
    v-show="open"
    ref="contextRef"
    class="z-1000 fixed p-1 rounded-sm flex flex-col gap-1 shadow-[2px_3px_7px_2px_rgb(0,0,0,0.2)]"
    :style="{ top: `${y ?? 0}px`, left: `${x ?? 0}px`, backgroundColor: token.colorBgSpotlight }"
  >
    <Button size="small" w-25>刷新</Button>
    <Button size="small" w-25 @click="$emit('close')">关闭当前</Button>
  </div>
</template>
