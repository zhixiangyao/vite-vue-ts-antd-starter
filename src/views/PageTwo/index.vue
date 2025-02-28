<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { layoutHeaderRightSlotRef } from '~/layout/components/LayoutHeader.vue'

defineOptions({ name: 'PageTwo' })

const route = useRoute()

const showTeleport = computed(() => layoutHeaderRightSlotRef.value && route.name === 'PageTwo')
</script>

<template>
  <Teleport v-if="showTeleport" :to="layoutHeaderRightSlotRef">
    <Button size="small">
      PageTwo
    </Button>
  </Teleport>

  <div>2</div>
</template>
