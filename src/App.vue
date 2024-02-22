<script setup>
import { RouterLink, RouterView } from "vue-router";
import CustomSpinner from './components/customs/CustomSpinner.vue'
import WeddingForm from './views/WeddingForm.vue'
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
import axios from 'axios'
const isLoading = ref(false)
onMounted( async() => {
  try {
    axios.interceptors.request.use((config) => {
      const hasKeyShowLoading = Object.keys(config).includes('showLoading')
      if (hasKeyShowLoading) {
        isLoading.value = config.showLoading
      } else {
        isLoading.value = true
      }
      return config
    })
    axios.interceptors.response.use(
      (response) => {
        isLoading.value = false
        return response
      },
      (error) => {
        if (error.response.status >= 400 && error.response.status <= 500) {
          const { message } = error.response.data;
          if (typeof message ==='string') {
            msg.value = message;
          }
          openDialogMessage()
          setTimeout(() => {
            closeDialogMessage()
          }, 10000) // Delay of 10000 milliseconds (10 seconds) before clearing progress
        }
        isLoading.value = false
        return Promise.reject(error)
      }
    )
  await getListWedding();
  } catch (error) {
    console.error('Error', error)
    isLoading.value = false
  }
})
</script>

<template>
    <CustomSpinner :isLoading="isLoading" />
    <!-- <nav>
    <RouterLink to="/"> A</RouterLink>
    <RouterLink to="/about"> B</RouterLink>
  </nav> -->
  <RouterView />

</template>

<style>
</style>
