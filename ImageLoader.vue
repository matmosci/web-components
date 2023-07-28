<script setup></script>
<template>
  <h1>Loading Indicator with Image</h1>
  <div class="image-container">
    <div class="loading-indicator">Loading...</div>
    <img class="loaded-image" src="your_image_url_here.jpg" alt="Your Image" />
  </div>
</template>
<style setup>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
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
