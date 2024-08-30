<template>
    <!-- <VaButton :style="customStyles" @click="onClick"> {{ text }} </VaButton> -->
    <div v-if="props.isShow">
        <VaSkeleton variant="squared" height="80px" />
        <br>
        <VaSkeleton variant="squared" height="60px" />
        <br>
        <VaSkeleton variant="squared" height="40px" />
    </div>
</template>

<script setup lang="ts">
// import { getCurrentInstance } from 'vue'
//   import type { CSSProperties } from 'vue'
interface IProps {
    isShow: boolean
}

// const { appContext } = getCurrentInstance()!
// const themes = appContext.config.globalProperties.$themes

const props = defineProps<IProps>()

</script>