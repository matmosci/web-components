<script setup>
import ImageLoader from "./ImageLoader.vue";
</script>
<template>
  <div class="horizontal-scroll-container">
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/00eaa39532c263e12111cfa8ca334140afc9d5893f3da63443fbbabbabbd532f.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/02b8e391354d5ee311491057b135bbaf3d8c5f8d17b1c5c9bf7e624db2779b34.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/02de11a49f7f8f150a6c89a56becf42a31d3545d8c2cd21ea27b9cf3f853e53a.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/02fca3eee5d37ce38d1420fa2eeccd80bc918d9a602f6d33f8c4c004658f2913.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/0d670cf541d7805a74b2fe15b7dc0c15eac9a88f2df283a7af40121d85c7e5eb.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/1a1d3b33606ca2386a488ce8dac6b9867ccef1e70edada8eaa5a84d27a95968c.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/1a4195e6b37f4191e33e82792b60e0d87821edb4605dd42420af7b6e58775043.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/1eccd02d917ac2f33e0331f965e8f7de30ae84e4e0523a410f3e2e60fa50bf30.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/1ed67feeb7c0076acf7986099c8ca0bb90225678569f2311ae9ca825db3d83b5.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/1f5bf04d516eeb9d3dce0e1b56e4bed7d9239516bc7d76582c46ca6898edaec8.jpg'" />
    <ImageLoader class="horizontal-scroll-item" :src="'/test-gfx/landscape/2ccdf303b68cfd7d7a1211648ab08466bd5e5ac2a4bd27ab22ba0028e2dc9432.jpg'" />
  </div>
</template>
<style>
.horizontal-scroll-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px;
  background-color: var(--color-background-mute);
  /* -app margin */
  margin-left: -2rem;
  margin-right: -2rem;
}

.horizontal-scroll-item {
  flex: 0 0 auto;
  /* width: 200px; */
  height: 200px;
  margin-right: 10px;
  background-color: var(--color-background-soft);
  &:last-child {
    margin-right: 0;
  }
}
</style>
