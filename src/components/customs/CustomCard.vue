<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
onMounted(()=>{});
defineEmits(['']);
const props = defineProps({
  msg: {
    type: String,
    required: false
  },
  cardData: {
    type: Object,
    required: false
  }
})
// Variable
defineExpose({});
</script>

<template>
  <div class="details">
    <h1>Hello</h1>
  </div>
</template>

<style scoped>
.details {
  width: 40%;
  margin: auto;
  background: #000;
}
</style>