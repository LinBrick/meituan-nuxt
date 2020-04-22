<template>
  <div class="banner-container clearfix">
    <category />
    <my-banner />
  </div>
</template>

<script>
import Category from './category'
import MyBanner from './banner'

export default {
  components: {
    Category,
    MyBanner
  }
}
</script>
