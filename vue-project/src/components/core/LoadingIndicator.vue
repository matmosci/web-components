<template>
  <div class="loading-indicator"></div>
</template>

<style scoped>
.loading-indicator {
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border-color: var(--color-text) transparent;
  border-width: 0.4rem;
  border-style: solid;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
