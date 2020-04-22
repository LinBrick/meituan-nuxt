<template>
  <div>
    <div class="banner-row clearfix">
      <div class="item banner-slider shadow">
        <div id="banner-slider" class="slider">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
              <nuxt-link to="/">
                <el-image :src="item.url" />
              </nuxt-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div><a href="/xiuxianyule/" data-bid="b_a4enk0wd" data-lab="{&quot;custom&quot;:{&quot;index&quot;:2}}" class="link" target="_blank"><div class="item shadow pic-1" style="background-image:url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" /></a><div class="item banner-logincard">
        <div style="float:left">
          <div class="login-container">
            <div class="default" style="display:block">
              <div class="head-img-row">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
              </div>
              <p class="user-name">
                Hi！你好
              </p>
              <a class="btn-login" href="#">注册</a>
              <a class="btn-login" href="#">立即登录</a>
            </div>
            <div class="default" style="display:none">
              <div class="setting">
                <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-setting_iconx" /></div></a>
              </div>
              <div class="head-img-row">
                <a href="#" target="_blank"><img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt=""></a>
              </div>
              <div class="nickname-row">
                <a href="#" target="_blank"><p class="user-name">你好</p></a>
                <a href="#" target="_blank"><i class=" iconfont iconfont_level icon-lable_level_undefined" /></a>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-order_iconx" /></div><p class="fn-name">我的订单</p></a>
                </div><div class="fn-item">
                  <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-collection_iconx" /></div><p class="fn-name">我的收藏</p></a>
                </div><div class="fn-item">
                  <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-ticket_iconx" /></div><p class="fn-name">抵用券</p></a>
                </div>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-money_iconx" /></div><p class="fn-name">余额</p></a>
                </div><div class="fn-item">
                  <a href="#" target="_blank"><div class="icon"><i class="iconfont icon-more_iconx" /></div><p class="fn-name">更多</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-row clearfix">
      <a href="#" class="link" target="_blank">
        <div class="item pic-2 shadow" style="background-image:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" />
      </a>
      <a href="#" class="link" target="_blank">
        <div class="item pic-3 shadow" style="background-image:url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" />
      </a>
      <a href="#" class="link" target="_blank">
        <div class="item pic-4 shadow" style="background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" />
      </a>
      <div class="item download-app">
        <div class="qrcode-box">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
        </div>
        <p class="app-name">
          美团APP手机版
        </p>
        <p class="sl">
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [
        {
          id: '111',
          url: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
        },
        {
          id: '222',
          url: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
        },
        {
          id: '333',
          url: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
        },
        {
          id: '444',
          url: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
        }
      ]
    }
  }
}
</script>
