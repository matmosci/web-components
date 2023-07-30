<script setup>
// TODO script
import Indicator from "./LoadingIndicator.vue";
</script>
<template>
  <div class="image-container">
    <Indicator class="loading-indicator" />
    <img class="loaded-image" src="your_image_url_here.jpg" alt="Your Image" />
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
