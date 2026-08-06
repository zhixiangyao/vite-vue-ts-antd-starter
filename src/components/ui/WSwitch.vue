<script setup lang="ts">
interface Props {
  color?: string
}

defineOptions({ name: 'WSwitch' })
withDefaults(defineProps<Props>(), { color: '#4ade80' })

const checked = defineModel<boolean>('checked', { default: false })
</script>

<template>
  <label for="toggle" class="flex items-center cursor-pointer relative">
    <input id="toggle" type="checkbox" :checked="checked" class="sr-only" @change="checked = !checked" />
    <div class="block bg-gray-600 w-11 h-6 rounded-full" />
    <div
      class="absolute left-1 top-1 w-4 h-4 rounded-full"
      :class="[checked && 'translate-x-5']"
      :style="{
        backgroundColor: checked ? color : 'white',
      }"
    />
  </label>
</template>
