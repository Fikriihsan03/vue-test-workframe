<template>
  <!-- <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton> -->
  <VaInput v-model="value" @input="handleInput" :placeholder="placeHolder" :style="customStyles" />
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
  placeHolder: string
  value: string | number
  width?: string
  borderRadius?: string
  onChange: () => void
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes

const emit = defineEmits<{
  (e: 'update:value', value: string | number): void
  (e: 'change', event: Event): void
}>()
const props = withDefaults(defineProps<IProps>(), {})

const customStyles = computed(
  (): CSSProperties => ({
    width: props.width || '0px',
    borderRadius: props.borderRadius || '0px'
  })
)
const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('update:value', input.value)
  emit('change', event) // Emit event change ke parent
  //   this.onChange(event) // Panggil onChange dari props jika disediakan
}
</script>
