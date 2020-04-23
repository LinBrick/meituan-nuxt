<template>
  <div class="page index">
    <div class="index-container">
      <my-banner />
      <movie-recommend />
    </div>
  </div>
</template>

<script>
import MyBanner from '@/components/home/banner/index'
import MovieRecommend from '@/components/home/movieRecommend/index'

export default {
  components: {
    MyBanner,
    MovieRecommend
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
