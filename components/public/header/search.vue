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
          @blur="isFocus=false"
          @input="searchChange"
        >
        <button class="header-search-btn">
          <i class="iconfont iconsousuo" />
        </button>
      </div>
      <div class="header-search-suggest" :class="{block:isFocus}">
        <div v-if="isHotPlace" class="header-search-noinput">
          <!-- <div class="header-search-history" style="display: block;">
            <h6>最近搜索</h6>
            <span class="header-search-clean">删除搜索历史</span>
            <ul>
              <li v-for="(item,index) in hotPlaceList" :key="index">
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </div> -->
          <h6>热门搜索</h6>
          <div class="header-search-hotword">
            <ul>
              <li v-for="(item,index) in hotPlaceList" :key="index">
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="isSearchList" class="header-search-hasinput">
          <ul>
            <li v-for="(item,index) in searchList" :key="index">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-search-hotword" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import request from '@/utils/request'

export default {
  data () {
    return {
      keyword: '',
      isFocus: false,
      hotPlaceList: this.$store.state.home.hotPlace,
      searchList: []
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && this.keyword.trim() === ''
    },
    isSearchList () {
      return this.isFocus && this.keyword.trim() !== ''
    }
  },
  methods: {
    searchKeyword () {
      this.isFocus = true
    },
    searchChange: _.debounce(async function () {
      const city = this.$store.state.geo.position.city.replace('市', '')
      const { data: { top } } = await request({
        url: '/search/top',
        method: 'get',
        params: {
          input: this.keyword,
          city
        }
      })
      this.searchList = top.slice(0, 10)
    }, 300)
  }
}
</script>

<style lang="scss">
.com-header .header-search-module .header-search-suggest .header-search-hasinput{
  display: block !important;
}
</style>
