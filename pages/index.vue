<template>
  <div class="page index">
    <div class="index-container">
      <my-banner />
      <movie-recommend />
      <mt-navigation />
    </div>
  </div>
</template>

<script>
import MyBanner from '@/components/home/banner/index'
import MovieRecommend from '@/components/home/movieRecommend/index'
import MtNavigation from '@/components/home/mtNavigation/index'

export default {
  components: {
    MyBanner,
    MovieRecommend,
    MtNavigation
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
