<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
onMounted(() => {})
defineEmits(['uploadedFile', 'upload'])
defineProps({
  msg: {
    type: String,
    required: false
  },
  chooseLabel: {
    type: String,
    default: () => 'Choose'
  }
})
// Variable
const instance = getCurrentInstance()
const route = useRouter()
const fileUpload = ref()
// Functions
const getSelectedFile = (event) => {
  const {
    files: [uploadedFile]
  } = event
  instance.emit('uploadedFile', uploadedFile)
}
const clearFileSelected = () => {
  fileUpload.value.clear()
}
const openFileBrowser = () => {
  fileUpload.value.choose()
}
defineExpose({ getSelectedFile, openFileBrowser, clearFileSelected })
</script>

<template>
  <div class="greetings">
    <PrimeVueFileUpload
      accept=".xlsx, .xls"
      :maxFileSize="1000000"
      :chooseLabel="chooseLabel"
      @select="getSelectedFile"
      class="secondary"
      style="padding: 0.6rem"
      ref="fileUpload"
      mode="basic"
    />
  </div>
</template>

<style scoped></style>
