<template>
  <div class="header-bar-position" style="display: block;">
    <i class="iconfont iconlocation" />
    <span class="current-city">北京</span><a class="change-city" href="#">切换城市</a>
    <div class="near-citys">
      [<a class="city-guess" href="#">门头沟区</a><a class="city-guess" href="#">大厂回族自治县</a><a class="city-guess" href="https://lf.meituan.com">廊坊</a>]
    </div>
    <div class="user-entry" style="display: inline-block;">
      <a class="growth-entry user-up" href="#">注册</a>
    </div>
  </div>
  <!-- <div class="m-geo">
    <i class="el-icon-location" />北京市
    <nuxt-link class="changeCity" to="/changeCity">
      切换城市
    </nuxt-link>
    [广州 上海 深圳]
  </div> -->
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .header-bar-position{
    .iconfont{
      font-size: 12px;
    }
  }
</style>
