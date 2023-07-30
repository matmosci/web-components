<script setup>
import ImageLoader from "./ImageLoader.vue";
</script>
<template>
  <div class="horizontal-scroll-container">
    <!-- Example items -->
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <ImageLoader class="horizontal-scroll-item" />
    <!-- Add more items as needed -->
  </div>
</template>
<style>
/* Style the container div */
.horizontal-scroll-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px;
  background-color: var(--color-background-mute);
  /* Add any additional styling you want for the container */
}

/* Style the inner elements (items) */
.horizontal-scroll-item {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  background-color: var(--color-background-soft);
  /* Add any additional styling you want for the items */
  &:last-child {
    margin-right: 0;
  }
}
</style>
