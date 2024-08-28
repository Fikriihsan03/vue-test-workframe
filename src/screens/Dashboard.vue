<template>
  <div>
    <TextTitle content="Halo" textAlign="left" />
    <CustomButton text="Test Button" :onClick="testFunc" />
    <br />
    <TextField :value="inputVal" placeHolder="Test Input" :onChange="inputHandler" />
  </div>
</template>
<script setup lang="ts">
import TextTitle from '@/components/Texts/TextTitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import TextField from '@/components/TextField.vue'
import { ref } from 'vue';

const inputVal = ref('');

const inputHandler = (value: string | number) => {
  console.log(value)
}

const testFunc = () => {
  console.log('hit')
}
</script>
