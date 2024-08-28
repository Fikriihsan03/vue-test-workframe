<template>
  <div>
    <TextTitle content="Halo" textAlign="left" />
    <CustomButton text="Test Button" :onClick="testFunc" />
    <TextField placeholder="Test Input" :onClick="testFunc" />
  </div>
</template>
<script setup lang="ts">
import TextTitle from '@/components/Texts/TextTitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import TextField from '@/components/TextField.vue'

const testFunc = () => {
  console.log('hit')
}
</script>
