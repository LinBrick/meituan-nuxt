
<template>
  <div class="zhenguo-container">
    <div class="index-nav-container undefined" style="background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);">
      <ul class="clearfix ">
        <li class="title nav-item mf-shang-hei-regular">
          推荐民宿
        </li>
        <li class="nav-item" :class="{active:active === 0}" @mouseenter="switchTab(0)">
          北京
        </li>
        <li class="nav-item" :class="{active:active === 1}" @mouseenter="switchTab(1)">
          天津
        </li>
        <li class="total nav-item">
          <a href="#?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" class="link" target="_blank" data-query="utm_source=meituanweb"><span>全部 ></span></a>
        </li>
      </ul>
    </div>
    <div class="minsu-ls-view clearfix">
      <div class="products" :style="{display: active === 0 ? 'flex' : 'none'}">
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/8329932/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/eb708e600ca5ea562bf8c74830b60323563291.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">古北水镇 云端上的清新小屋</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住4人 | </span><span>古北水镇周边</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>2000</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/7175735/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/69cf7bed80506a33e3409e244e7a936a434118.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">天安门国贸日式风情大床房</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>国贸CBD/四惠</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>388</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/8108947/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/2c93804cc6b8ba931f2bb8303f5c778c968651.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">悠适 新国展 后沙峪 地铁15号首都机场 接送机 loft绿野仙踪房</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>首都机场/新国展</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>399</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/9220419/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/6d04442a238d02d289c622443f29ad60749420.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">4月可入住/来间特价房-单间大床-采光好-安静</p>
              <p class="sub-title"><span>整套2居室&middot;</span><span>可住2人 | </span><span /></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>59</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/10820072/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/2d1871a556592b10ef25a6685928413d1357104.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">东亚望京中心一居整租/地铁80米/Soho/798/中央美术学院/酒仙桥/国贸/鸟巢/故宫</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>望京</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>279</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/1128697/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="http://p0.meituan.net/iphoenix/9573da65e3a798c3f0178e245cbbbbdd846746.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【简•CG1d】十里堡地铁站主卧近天安门故宫/蓝锣鼓巷/东大桥/呼家楼/金台路/慈云寺莱锦产业园/人民日报社</p>
              <p class="sub-title"><span>整套4居室&middot;</span><span>可住2人 | </span><span>燕莎/亮马桥/朝阳公园</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>130</p>
            </div></a>
        </div>
      </div>
      <div class="products" :style="{display: active === 1 ? 'flex' : 'none'}">
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/10779396/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/5b7706363118d707a3b43ae5cc8e21dd1040532.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【九月●美宿】法式•轻奢/古楼/古文化街/观天津之眼全景/100寸投影</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>老城厢/鼓楼</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>118</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/10695368/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="http://p0.meituan.net/iphoenix/f43cf6ac4490e81df596a651d7723a941276446.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【瑰澍&middot;森岳】整租INS北欧森系阳光1.8米大床近地铁独立卫浴近水上公园南开大学肿瘤医院奥体中心</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住4人 | </span><span>王顶堤/华苑</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>168</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/10473753/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/a6f44aa49925fe1e12120e6dcb0a50d0296115.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【睿豪朴宿】No.35 投影/鼓楼/古文化街/天津之眼/天津站/大悦城</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>老城厢/鼓楼</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>66</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/8069101/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/3e0ef65aa9275ae60d1ebb3e63102ed9755396.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【落脚点】1号临近佛罗伦萨/城际站/V1汽车世界/百寸投影</p>
              <p class="sub-title"><span>整套2居室&middot;</span><span>可住4人 | </span><span>佛罗伦萨/威尼都</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>238</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/9249390/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/29401ad44fee21df4a832b635a9c4eb5216996.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">小鱼儿橙色牛油果大床房鼓楼天津之眼天津站西站巨幕投影</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>老城厢/鼓楼</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>128</p>
            </div></a>
        </div>
        <div class="minsu-item">
          <a href="https://minsu.meituan.com/housing/6378205/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" target="_blank">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/175c0ece503eba4a94fd105ce7dddd39415399.jpg@740w_416h_1e_1c" class="product-img">
              <img src="null@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">【九月美宿】抖音悠悠床少女心风格拍照地/天津之眼/古文化街/观天津之眼全景/100寸投影</p>
              <p class="sub-title"><span>整套1居室&middot;</span><span>可住2人 | </span><span>老城厢/鼓楼</span></p>
              <p class="price-number numfont price"><span class="price-icon">￥</span>118</p>
            </div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    switchTab (val) {
      this.active = val
    }
  }
}
</script>
