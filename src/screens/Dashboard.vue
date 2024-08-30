<template>
  <div>
    <TextTitle content="Halo" textAlign="left" />
    <CustomButton text="Test Button" :onClick="testFunc" />
    <br />
    <TextField :value="inputVal" placeHolder="Test Input" @onChange="inputHandler" />
    <CustomButton text="Modal" :onClick="openDeleteModalHandler" />
    <DeleteModal
      ref="testDeleteModal"
      title="test Delete Modal"
      description="Halo ini mau di delete"
      :onCancel="closeModalHandler"
      :onConfirm="closeModalHandler"
    />

    <CustomButton text="Modal" :onClick="openFunctionModalHandler" />
    <FunctionModal
      ref="testFunctionModal"
      title="test Function Modal"
      description="Halo ini function modal"
      :onCancel="closeModalHandler"
      :onConfirm="closeModalHandler"
    />
  </div>
</template>
<script setup lang="ts">
import TextTitle from '@/components/Texts/TextTitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import TextField from '@/components/TextField.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import FunctionModal from '@/components/FunctionModal.vue'
import { onMounted, ref, type ComponentPublicInstance } from 'vue'
import PublicDataServices from '@/services/PublicDataService'

const inputVal = ref('')
const testDeleteModal = ref<ComponentPublicInstance<{
  close: () => void
  show: () => void
}> | null>(null)
const testFunctionModal = ref<ComponentPublicInstance<{
  close: () => void
  show: () => void
}> | null>(null)

const inputHandler = (value: string | number) => {
  console.log(value)
}

const closeModalHandler = () => {
  testDeleteModal.value?.close()
  testFunctionModal.value?.close()
  // console.log(modalProps.show)
  // modalProps.show = false
}
const openDeleteModalHandler = () => {
  testDeleteModal.value?.show()
}
const openFunctionModalHandler = () => {
  testFunctionModal.value?.show()
}

const testFunc = () => {
  console.log('hit')
}

const retrieveSomething = async () => {
  try {
    const response = await PublicDataServices.getProvinces('test')
    console.log(response.data)
  } catch (err) {
    console.log(err)
  }
}
onMounted(() => {
  retrieveSomething()
})
</script>
