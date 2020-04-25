<template>
  <div class="header-bar-position" style="display: block;">
    <i class="iconfont iconlocation" />
    <span class="current-city">{{ city }}</span>
    <nuxt-link class="change-city" to="/changeCity">
      切换城市
    </nuxt-link>
    <div class="near-citys">
      [<a class="city-guess" href="#">门头沟区</a>
      <a class="city-guess" href="#">大厂回族自治县</a>
      <a class="city-guess" href="https://lf.meituan.com">廊坊</a>]
    </div>
    <div v-if="hasUser" class="user-entry" style="display: inline-block;">
      <nuxt-link class="growth-entry user-up" to="/">
        {{ user }}
      </nuxt-link>
      <nuxt-link class="extra-entry" to="/exit">
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
import request from '@/utils/request'

export default {
  data () {
    return {
      city: this.$store.state.geo.position.city,
      user: ''
    }
  },
  computed: {
    hasUser () {
      return this.user !== ''
    }
  },
  async mounted (context) {
    const { status, data } = await request({
      url: '/users/getUser',
      method: 'post'
    })
    if (status === 200) {
      this.user = data.mobilePhone
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
