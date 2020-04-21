<template>
  <div class="header-bar-position" style="display: block;">
    <i class="iconfont iconlocation" />
    <span class="current-city">北京</span><a class="change-city" href="#">切换城市</a>
    <div class="near-citys">
      [<a class="city-guess" href="#">门头沟区</a>
      <a class="city-guess" href="#">大厂回族自治县</a>
      <a class="city-guess" href="https://lf.meituan.com">廊坊</a>]
    </div>
    <div v-if="hasUser" class="user-entry" style="display: inline-block;">
      <nuxt-link class="growth-entry user-up" to="/login">
        {{ user }}
      </nuxt-link>
      <nuxt-link class="extra-entry" to="/register">
        退出
      </nuxt-link>
    </div>
    <div v-else class="user-entry" style="display: inline-block;">
      <nuxt-link class="growth-entry user-up" to="/login">
        立即登录
      </nuxt-link>
      <nuxt-link class="extra-entry" to="/register">
        注册
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  computed: {
    hasUser () {
      return this.user !== ''
    }
  }
}
</script>

<style lang="scss">
  .header-bar-position{
    .iconfont{
      font-size: 12px;
    }
  }
</style>
