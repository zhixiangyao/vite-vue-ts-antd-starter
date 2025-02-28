<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { layoutHeaderRightSlotRef } from '~/layout/components/LayoutHeader.vue'

defineOptions({ name: 'PageOne' })

const route = useRoute()

const showTeleport = computed(() => layoutHeaderRightSlotRef.value && route.name === 'PageOne')
</script>

<template>
  <Teleport v-if="showTeleport" :to="layoutHeaderRightSlotRef">
    <Button size="small">
      PageOne
    </Button>
  </Teleport>

  <div>1</div>
</template>
