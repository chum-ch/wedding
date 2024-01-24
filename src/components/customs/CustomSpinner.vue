<template>
  <div class="about" v-if="isLoading" >
    <div id="preloader" class="preloader">
      <div class="spinner">
        <PrimeVueProgressSpinner />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  emits: [],
  watch: {},
  created() {},
  methods: {},
};
</script>
<style scoped>
#preloader {
  overflow: hidden;
  background: #00000032;
  backdrop-filter: blur(3px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 40px;
  width: 40px;
  transform: translate(-50%, -50%);
}
@media (max-width: 500px) {
  /* Styles applied for viewport width up to 767px */
  .spinner {
    left: 44%;
  }
}
</style>
