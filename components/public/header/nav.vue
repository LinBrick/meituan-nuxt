<template>
  <nav class="header-bar-nav">
    <ul class="header-nav-first">
      <li class="has-child" @mouseenter="showTag(1)" @mouseleave="hideTag">
        <a rel="nofollow" href="#" target="_blank">我的美团</a>
        <ul class="header-nav-my header-nav-second" :style="{display: tag === 1 ? 'block' : 'none'}">
          <a rel="nofollow" href="https://www.meituan.com/account/userinfo/" target="_blank" />
          <li>
            <a rel="nofollow" href="#" target="_blank">我的订单</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">我的收藏</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">抵用券</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">账户设置</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">手机APP</a>
      </li>
      <li class="has-child" @mouseenter="showTag(2)" @mouseleave="hideTag">
        商家中心
        <ul class="header-nav-merchant header-nav-second" :style="{display: tag === 2 ? 'block' : 'none'}">
          <li>
            <a rel="nofollow" href="#" target="_blank">美团餐饮商户中心</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">登录商家中心</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">美团智能收银</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">我想合作</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">手机免费开店</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">餐饮代理商招募</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">商家申请开票</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">免费合作美团排队</a>
          </li>
        </ul>
      </li>
      <li class="has-child" @mouseenter="showTag(3)" @mouseleave="hideTag">
        美团规则
        <ul class="header-nav-my header-nav-second" :style="{display: tag === 3 ? 'block' : 'none'}">
          <li>
            <a rel="nofollow" href="#" target="_blank">规则中心</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">规则目录</a>
          </li>
          <li>
            <a rel="nofollow" href="#" target="_blank">规则评议院</a>
          </li>
        </ul>
      </li>
      <li class="has-child" @mouseenter="showTag(4)" @mouseleave="hideTag">
        网站导航<div class="header-nav-site header-nav-second" :style="{display: tag === 4 ? 'block' : 'none'}">
          <dl class="header-jiulv header-nav-third">
            <dt>酒店旅游</dt>
            <dd><a href="#" target="_blank">国际机票</a></dd>
            <dd><a href="#" target="_blank">火车票</a></dd>
            <dd><a href="#" target="_blank">民宿</a></dd>
            <dd><a href="#" target="_blank">经济型酒店</a></dd>
            <dd><a href="#" target="_blank">主题酒店</a></dd>
            <dd><a href="#" target="_blank">商务酒店</a></dd>
            <dd><a href="#" target="_blank">公寓</a></dd>
            <dd><a href="#" target="_blank">豪华酒店</a></dd>
            <dd><a href="#" target="_blank">客栈</a></dd>
            <dd><a href="#" target="_blank">青年旅社</a></dd>
            <dd><a href="#" target="_blank">度假酒店</a></dd>
            <dd><a href="#" target="_blank">别墅</a></dd>
            <dd><a href="#" target="_blank">农家院</a></dd>
          </dl>
          <dl class="header-meishi header-nav-third">
            <dt>吃美食</dt>
            <dd><a href="#" target="_blank">烤鱼</a></dd>
            <dd><a href="#" target="_blank">特色小吃</a></dd>
            <dd><a href="#" target="_blank">烧烤</a></dd>
            <dd><a href="#" target="_blank">自助餐</a></dd>
            <dd><a href="#" target="_blank">火锅</a></dd>
            <dd><a href="#" target="_blank">代金券</a></dd>
          </dl>
          <dl class="header-movie header-nav-third">
            <dt>看电影</dt>
            <dd><a href="#" target="_blank">热映电影</a></dd>
            <dd><a href="#" target="_blank">热门影院</a></dd>
            <dd><a href="#" target="_blank">热映电影口碑榜</a></dd>
            <dd><a href="#" target="_blank">最受期待电影</a></dd>
            <dd><a href="#" target="_blank">国内票房榜</a></dd>
            <dd><a href="#" target="_blank">北美票房榜</a></dd>
            <dd><a href="#" target="_blank">电影排行榜</a></dd>
          </dl>
          <dl class="header-app header-nav-third">
            <dt>手机应用</dt>
            <dd>
              <a href="#" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a>
            </dd>
            <dd>
              <a href="#" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></a>
            </dd>
            <dd>
              <a href="#" target="_blank">
                <img class="appicon" src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" title="民宿app" alt="民宿app">
              </a>
            </dd>
            <dd>
              <a href="#" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></a>
            </dd>
            <dd>
              <a href="#" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      tag: false
    }
  },
  methods: {
    showTag (val) {
      this.tag = val
    },
    hideTag () {
      this.tag = false
    }
  }
}
</script>

<style lang="scss">

</style>
