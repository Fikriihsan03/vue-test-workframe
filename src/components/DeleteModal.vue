<template>
    <!-- <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton> -->

    <VaModal v-model="isModalShow">
        <h3 :style="titleCustomStyle">
            {{ title }}
        </h3>
        <p :style="descCustomStyle">
            {{ description }}
        </p>
        <!-- Slot untuk actions (tombol di bagian bawah modal) -->
        <template #actions>
            <VaButton color="primary" @click="handleConfirm">{{ cancelText }}</VaButton>
            <VaButton color="danger" @click="handleCancel">{{ deleteText }}</VaButton>
        </template>
    </VaModal>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed, ref } from 'vue'
import type { CSSProperties } from 'vue'
interface IProps {
    showModal: boolean
    title: string
    description: string
    cancelText?: string
    deleteText?: string
    onCancel?: () => void
    onConfirm?: () => void
}

const { appContext } = getCurrentInstance()!
const themes = appContext.config.globalProperties.$themes

// const emit = defineEmits<{
//     (e: 'update:value', value: string | number): void
//     (e: 'change', event: Event): void
// }>()
const props = withDefaults(defineProps<IProps>(), {
    cancelText: "Cancel",
    deleteText: "Delete",
})
const isModalShow = ref(props.showModal)
const titleCustomStyle = computed(
    (): CSSProperties => ({
        fontSize: themes.fontSizes.title,
    })
)
const descCustomStyle = computed(
    (): CSSProperties => ({
        fontSize: themes.fontSizes.body,
    })
)
const handleCancel = () => { }
const handleConfirm = () => { }

// const handleInput = (event: Event) => {
//     props.onChange(event?.target?.value) // Panggil onChange dari props jika disediakan
// }
</script>