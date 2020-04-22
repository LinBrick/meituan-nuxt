<template>
  <div class="header-content clearfix">
    <div class="header-title-module">
      <div class="header-title">
        <nuxt-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </nuxt-link>
      </div>
    </div>
    <div class="header-search-module">
      <div class="header-search-block">
        <input
          v-model="keyword"
          class="header-search-input"
          type="text"
          placeholder="搜索商家或地点"
          @focus="searchKeyword"
          @blur="showSearchSuggest=false"
        >
        <button class="header-search-btn">
          <i class="iconfont iconsousuo" />
        </button>
      </div>
      <div class="header-search-suggest" :class="{block:showSearchSuggest}">
        <div class="header-search-noinput">
          <div class="header-search-history" style="display: block;">
            <h6>最近搜索</h6>
            <span class="header-search-clean">删除搜索历史</span>
            <ul>
              <li><a href="https://bj.meituan.com/s/%E5%A4%A7%E5%98%B4%E7%8C%AB/">大嘴猫</a></li>
            </ul>
          </div>
          <h6>热门搜索</h6>
          <div class="header-search-hotword" />
        </div>
        <div class="header-search-hasinput">
          <ul />
        </div>
      </div>
      <div class="header-search-hotword" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      showSearchSuggest: false,
      searchResultList: []
    }
  },
  methods: {
    searchKeyword () {
      this.showSearchSuggest = true
    }
  }
}
</script>
