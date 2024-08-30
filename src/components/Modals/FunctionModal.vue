<template>
  <!-- <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton> -->
  <!-- <div v-if="showModal"> -->
  <VaModal v-model="isModalShow" hide-default-actions>
    <p :style="titleCustomStyle">
      {{ title }}
    </p>
    <p :style="descCustomStyle">
      {{ description }}
    </p>
    <!-- Slot untuk actions (tombol di bagian bawah modal) -->
    <template #footer>
      <div class="row justify-end" :style="{ gap: '10px' }">
        <VaButton :color="themes.colors.background" @click="handleCancel">{{
          cancelText
        }}</VaButton>
        <VaButton :color="themes.colors.primary" @click="handleConfirm">{{ confirmText }}</VaButton>
      </div>
    </template>
  </VaModal>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { getCurrentInstance, computed, ref } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
  title: string
  description: string
  cancelText?: string
  confirmText?: string
  onCancel: () => void
  onConfirm: () => void
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes

const props = withDefaults(defineProps<IProps>(), {
  cancelText: 'Cancel',
  confirmText: 'Confirm'
})
let isModalShow = ref(false)
const titleCustomStyle = computed(
  (): CSSProperties => ({
    fontSize: themes.fontSizes.title,
    marginBottom: '0.5rem'
  })
)
const descCustomStyle = computed(
  (): CSSProperties => ({
    fontSize: themes.fontSizes.body
  })
)
const show = () => {
  isModalShow.value = true
}
const close = () => {
  isModalShow.value = false
}

const handleCancel = () => {
  props.onCancel()
  close()
}

const handleConfirm = () => {
  props.onConfirm()
}

defineExpose({
  show,
  close
})
</script>
