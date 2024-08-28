<template>
    <p :style="customStyles">{{ props.content }}</p>
  </template>
  
  <script setup lang="ts">
  import { getCurrentInstance, computed } from 'vue'
  import type { CSSProperties } from 'vue'
  interface IProps {
    content: string
    textAlign: 'left' | 'right' | 'center' | 'justify'
  }
  
  const { appContext } = getCurrentInstance()!
  const themes = appContext.config.globalProperties.$themes
  const props = defineProps<IProps>()
  
  const customStyles = computed(
    (): CSSProperties => ({
      fontSize: themes.fontSizes.header,
      fontWeight: 500,
      textAlign: props.textAlign
    })
  )
  </script>