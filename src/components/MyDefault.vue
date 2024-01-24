<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
onMounted(()=>{});
defineEmits(['']);
const props = defineProps({
  msg: {
    type: String,
    required: false
  }
})
// Variable
defineExpose({});
watch(() => props.msg, (newValue) => {
  if (newValue) {
    
  }
})
// Multiple watch
// watch([() => props.propA, () => props.propB], ([newPropA, newPropB]) => {})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>