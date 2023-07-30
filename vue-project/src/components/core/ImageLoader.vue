<script setup>
import { ref, onMounted } from "vue";
import Indicator from "./LoadingIndicator.vue";
defineProps(["src"]);
const indicator = ref();
const image = ref();
function onLoad() {
  console.log(indicator.value.$el.remove());
  image.value.style.opacity = 1;
}
</script>
<template>
  <div class="image-container">
    <Indicator ref="indicator" class="loading-indicator" />
    <img ref="image" class="loaded-image" :src="src" alt="Your Image" @load="onLoad" />
  </div>
</template>
<style scoped>
/* Container for the loading indicator and image */
.image-container {
  position: relative;
  min-width: 40px;
  min-height: 40px;
  background-color: var(--color-background-soft);
  overflow: hidden;
}

/* Loading indicator styling */
.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

/* Image styling */
.loaded-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Hide the image until it's fully loaded */
  opacity: 0;
}
</style>
