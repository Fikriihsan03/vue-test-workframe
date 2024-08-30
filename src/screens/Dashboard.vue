<template>
  <div>
    <TextTitle content="Halo" textAlign="left" />
    <CustomButton text="Test Button" :onClick="testFunc" />
    <br />
    <TextField :value="inputVal" placeHolder="Test Input" @onChange="inputHandler" />
    <CustomButton text="Modal" :onClick="openDeleteModalHandler" />
    <DeleteModal ref="testDeleteModal" title="test Delete Modal" description="Halo ini mau di delete"
      :onCancel="closeModalHandler" :onConfirm="closeModalHandler" />

    <CustomButton text="Modal" :onClick="openFunctionModalHandler" />

    <FunctionModal ref="testFunctionModal" title="test Function Modal" description="Halo ini function modal"
      :onCancel="closeModalHandler" :onConfirm="closeModalHandler" />

    <div class="row justify-center">
      <div class="flex flex-col xs12">
        <div class="item">
          <div class="row justify-center">
            <CustomTable :headers="tableProps.headers" :items='tableProps.items' :page="tableProps.page"
              :perPage='tableProps.perPage'>
              <template #body="{ items }">
                <tr v-for="user in items" :key="user.id">
                  <td>{{ user.fullName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.country }}</td>
                </tr>
              </template>
            </CustomTable>
          </div>
        </div>
      </div>
      <VaPagination v-model="tableProps.page" :pages="15" :visible-pages="4" class="justify-center sm:justify-start"
        style="margin-top:2rem" />
    </div>

    <CustomSkeleton :isShow="isSkeletonShow" />

  </div>
</template>

<script setup lang="ts">
import TextTitle from '@/components/Texts/TextTitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomTable from '@/components/CustomTable.vue'
import TextField from '@/components/TextField.vue'
import CustomSkeleton from '@/components/CustomSkeleton.vue'
import DeleteModal from '@/components/Modals/DeleteModal.vue'
import FunctionModal from '@/components/Modals/FunctionModal.vue'
import { onMounted, reactive, ref, type ComponentPublicInstance } from 'vue'
import PublicDataServices from '@/services/PublicDataService'

const inputVal = ref('')
const isSkeletonShow = ref(true)
const tableProps = reactive({
  page: 1,
  perPage: 10,
  items: [
    { id: 1, fullName: 'John Doe', email: 'john@example.com', country: 'USA' },
    { id: 1, fullName: 'Lucy Doe', email: 'lucy@example.com', country: 'USA' },
  ],
  headers: ['Full Name', 'Email', 'Country'],
})
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
