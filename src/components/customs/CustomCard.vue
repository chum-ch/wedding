<script setup>
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
onMounted(() => {});
defineEmits([""]);
const props = defineProps({
  msg: {
    type: String,
    required: false,
  },
  cardData: {
    type: Object,
    required: false,
  },
});
// Variable
defineExpose({});
</script>

<template>
  <div class="details">
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>30</td>
        <td>London</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.details {
  width: 40%;
  margin: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: var(--primary-color);
  color: white;
}
@media (max-width: 600px) {
  .details {
  width: 100%;
}
}
</style>
