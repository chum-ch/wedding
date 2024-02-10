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
import { useRouter } from "vue-router";
onMounted(() => {});
defineEmits([""]);
defineProps({
  msg: {
    type: String,
    required: false,
  },
  menuItems: {
    type: Array,
    required: true,
  },
});
// Variable
const menu = ref();
const instance = getCurrentInstance();
const route = useRouter();
// Functions
const toggle = (event) => {
  menu.value.toggle(event);
};
defineExpose({});
</script>

<template>
  <div class="menu-bar">
    <PrimeVueTieredMenu
    class="p-0"
      :model="[
        {
          label: 'ឯកសារ',
          icon: 'pi pi-file',
          items: [],
        },
      ]"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_tmenu"
    />
    <PrimeVueTieredMenu
      :model="menuItems"
      class="p-0"
      popup
      ref="menu"
      id="overlay_tmenu"
    />
  </div>
</template>

<style>
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.6rem 1.25rem;
}
@media (max-width: 600px) {
  .menu-bar {
    width: 50px;
  }
}
</style>
