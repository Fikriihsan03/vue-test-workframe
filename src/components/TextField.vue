<template>
  <!-- <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton> -->
  <VaInput @input="handleInput" :placeholder="placeHolder" :style="customStyles" />
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
  placeHolder: string
  value: string | number
  width?: string
  borderRadius?: string
  // onChange: (value: string | number) => void & ((event: Event) => any)
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes

const emit = defineEmits<{
  (e: 'onChange', value: string | number): void
}>()
const props = withDefaults(defineProps<IProps>(), {})

const customStyles = computed(
  (): CSSProperties => ({
    width: props.width || '100%',
    borderRadius: props.borderRadius || '0px'
  })
)

const handleInput = (event: any) => {
  const input = event.target as HTMLInputElement
  emit('onChange', input.value)
}
</script>
