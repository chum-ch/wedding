<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
onMounted(() => {})
defineEmits(['completedProgress'])
defineProps({
  progressURL: {
    type: String,
    required: false
  }
  // showProgressBar: {
  //   type: Boolean,
  //   required: true
  // }
})
// Variable
const instance = getCurrentInstance()
const progress = ref(0)
const showProgressBar = ref(false)
// Functions
const checkProgress = (progressURL) => {
  showProgressBar.value = true;
  const interval = setInterval(() => {
    if (progress.value >= 100) {
      instance.emit('completedProgress', progress.value)
      clearInterval(interval)
      setTimeout(() => {
        showProgressBar.value = false
        progress.value = 0;
      }, 5000) // Delay of 5000 milliseconds (5 seconds) before clearing progress
    } else {
      // Make your API request here
      axios
        .get(progressURL, { showLoading: false})
        .then((response) => {
          const { data: { DoneProgresses }} = response;
          progress.value = DoneProgresses;
          // clearInterval(interval)
        })
        .catch((error) => {
          clearInterval(interval)
          console.log('Error get progress', error)
        })
    }
  }, 4000)
}
defineExpose({ checkProgress })
</script>

<template>
  <div class="greetings my-2">
    <PrimeVueProgressBar :value="progress" v-if="showProgressBar" />
  </div>
</template>

<style scoped></style>
