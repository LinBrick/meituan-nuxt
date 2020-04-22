<template>
  <div class="page index">
    <div class="index-container">
      <my-banner />
    </div>
  </div>
</template>

<script>
import MyBanner from '@/components/home/banner/index'

export default {
  components: {
    MyBanner
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
