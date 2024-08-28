<template>
  <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
  text: string
  color?: string
  borderRadius?: string
  onClick: () => void
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes
const props = defineProps<IProps>()

const customStyles = computed(
  (): CSSProperties => ({
    color: props.color || 'white',
    borderRadius: props.borderRadius || '0px'
  })
)
</script>
