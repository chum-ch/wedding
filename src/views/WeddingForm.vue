
<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
import { useRouter } from 'vue-router'
defineEmits(['update:wedding'])
onMounted(() => {})
defineProps({
  msg: {
    type: String,
    required: false
  }
})
// Variable
const instance = getCurrentInstance()
const route = useRouter()
const $api = inject('$api')
const weddingID = ref('')
const dialogWeddingForm = ref()
const weddingForm = ref({
  Name: '',
  Village: '',
})
// Error message
const message = ref({
  Name: '',
  Village: '',
})
const openDialogWeddingForm = () => {
  dialogWeddingForm.value.openDialog()
}
const closeDialogWeddingForm = () => {
  dialogWeddingForm.value.closeDialog()
  setDefaultValue()
}
const createWeddingInfo = async () => {
  try {
    if (weddingForm.value.Name && weddingForm.value.Village) {
      const { data } = await $api.wedding.createSisWedding(weddingForm.value)
      instance.emit('update:wedding', data)
      closeDialogWeddingForm()
    } else {
      if (!weddingForm.value.Name) {
        message.value.Name = "ទាមទារបញ្ជូលឈ្មោះ"
      } else {
        message.value.Name = ''
      }
      if (!weddingForm.value.Village) {
        message.value.Village = "ទាមទារបញ្ជូលភូមិ"
      } else {
        message.value.Village = ''
      }
    }
  } catch (error) {
    console.log('Error create room info', error)
  }
}
const setDefaultValue = () => {
  weddingForm.value = {}
  message.value = {}
  weddingID.value = ''
}
defineExpose({ openDialogWeddingForm })
</script>

<template>
  <div class="hello">
    <!-- Dialog room form  -->
    <CustomDialog
      ref="dialogWeddingForm"
      :modalHeader="'ការបង្កើត'"
      @onClickDialogSubmit="createWeddingInfo"
      @onClickCloseDialog="closeDialogWeddingForm"
      :footerLabel="'បង្កើតថ្មី'"
    >
      <template #bodyDialog>
        <CustomInputText
          :placeholder="'.......'"
          :label="'ឈ្មោះ'"
          v-model="weddingForm.Name"
          :required="true"
          :messageError="message.Name"
          class=""
        />
        <CustomInputText
          :placeholder="'.......'"
          :label="'ភូមិ'"
          v-model="weddingForm.Village"
          :required="true"
          :messageError="message.Village"
          class=""
        />
      </template>
    </CustomDialog>
  </div>
</template>
<style scoped></style>
