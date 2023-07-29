<script setup>
// TODO script
</script>
<template>
  <div class="image-container">
    <div class="loading-indicator">Loading...</div>
    <img class="loaded-image" src="your_image_url_here.jpg" alt="Your Image" />
  </div>
</template>
<style>
/* Container for the loading indicator and image */
.image-container {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  overflow: hidden;
}

/* Loading indicator styling */
.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border-color: #000 transparent;
  border-width: 0.4rem;
  border-style: solid;
  /* Add animation styles */
  animation: spin 1s linear infinite;
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

/* Keyframes for the loading indicator animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
