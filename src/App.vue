<script setup>
import { RouterLink, RouterView } from "vue-router";
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
const roomForm = ref({
  Name: "",
  Floor: "",
});
// Error message
const errorMgs = ref({
  Name: "",
  Floor: "",
});
const inputTest = () => {
  errorMgs.value.Name = "Name required.";
};
const tableDataRooms = ref([
  {
    Name: "យឿន ជុំ",
    Village: "ត្របែក",
  },
]);
const columnsRoom = ref([
  {
    field: "Name",
    header: "ឈ្មោះ",
  },
  {
    field: "Village",
    header: "ភូមិ",
  },
]);
</script>

<template>
  <nav>
    <!-- <RouterLink to="/"> A</RouterLink>
    <RouterLink to="/about"> B</RouterLink> -->
  </nav>
  <CustomTable :tableData="tableDataRooms" :columns="columnsRoom" />
  <!-- <RouterView /> -->
</template>

<style></style>
