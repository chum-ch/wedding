<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/"> A</RouterLink>
    <RouterLink to="/about"> B</RouterLink>
  </nav>
  <CustomButton :label="'Add'"/>
  <CustomInputText/>
  <RouterView />
</template>

<style>

</style>
