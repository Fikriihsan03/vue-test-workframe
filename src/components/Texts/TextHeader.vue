<template>
  <p :style="customStyles">{{ props.content }}</p>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
  content: string
  textAlign: 'left' | 'right' | 'center' | 'justify',
  color?:string,
  fontStyle?:string,
  fontWeight?:number,
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes
const props = defineProps<IProps>()

const customStyles = computed(
  (): CSSProperties => ({
    fontSize: themes.fontSizes.header,
    fontWeight: props.fontWeight || 500,
    textAlign: props.textAlign,
    color: props.color || 'black',
    fontStyle: props.fontStyle || 'normal'
  })
)
</script>
