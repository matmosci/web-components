<script setup></script>
<template>
  <h1>Horizontal Scroll Example</h1>
  <div class="horizontal-scroll-container">
    <!-- Example items -->
    <div class="horizontal-scroll-item">Item 1</div>
    <div class="horizontal-scroll-item">Item 2</div>
    <div class="horizontal-scroll-item">Item 3</div>
    <div class="horizontal-scroll-item">Item 4</div>
    <div class="horizontal-scroll-item">Item 5</div>
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
  background-color: #f0f0f0;
  /* Add any additional styling you want for the container */
}

/* Style the inner elements (items) */
.horizontal-scroll-item {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  background-color: #ccc;
  /* Add any additional styling you want for the items */
  &:last-child {
    margin-right: 0;
  }
}
</style>
