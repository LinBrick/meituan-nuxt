<template>
  <div class="left-banner">
    <div class="category-nav-container">
      <div class="category-nav-title-wrapper">
        <span class="category-nav-title">全部分类</span><span class="title-icon" />
      </div>
      <div class="category-nav-content-wrapper">
        <ul>
          <li class="nav-li" @mouseenter="showCategoryDetails" @mouseleave="hideCategoryDetails">
            <i class="iconfontNew hc-icon-foodNew" />
            <span class="nav-text-wrapper"><span>
              <a href="#" class="link nav-text" target="_blank">
                美食
              </a>
            </span>
            </span>
            <i class="nav-right-arrow" />
          </li>
        </ul>
      </div>
      <div
        class="category-nav-detail-wrapper"
        :class="{active:detailActive}"
        @mouseenter="detailsEnter"
        @mouseleave="detailsLeave"
      >
        <div class="category-nav-detail active">
          <div class="detail-area">
            <div class="detail-title-wrapper clearfix">
              <h2>
                <a
                  href="https://gz.meituan.com/meishi/"
                  data-bid="b_atx2p7dc"
                  data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:1,&quot;index&quot;:&quot;1_1_0&quot;,&quot;title&quot;:&quot;美食&quot;}}"
                  class="link detail-title"
                  target="_blank"
                  data-query="utm_source=meituanweb"
                >美食</a>
              </h2><a
                href="https://gz.meituan.com/meishi/"
                data-bid="b_atx2p7dc"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:1,&quot;index&quot;:&quot;1_1_more&quot;,&quot;title&quot;:&quot;美食&quot;}}"
                class="link detail-more"
                target="_blank"
                data-query="utm_source=meituanweb"
              >更多<i class="detail-right-arrow" /></a>
            </div>
            <div class="detail-content">
              <a
                href="https://gz.meituan.com/meishi/c393/"
                data-bid="b_atx2p7dc"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:393,&quot;index&quot;:&quot;1_1_1&quot;,&quot;title&quot;:&quot;代金券&quot;}}"
                class="link detail-text"
                target="_blank"
                data-query="utm_source=meituanweb"
              >代金券</a>
              <a
                href="https://gz.meituan.com/meishi/c11/"
                data-bid="b_atx2p7dc"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:11,&quot;index&quot;:&quot;1_1_2&quot;,&quot;title&quot;:&quot;甜点饮品&quot;}}"
                class="link detail-text"
                target="_blank"
                data-query="utm_source=meituanweb"
              >甜点饮品</a>
              <a
                href="https://gz.meituan.com/meishi/c17/"
                data-bid="b_atx2p7dc"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:17,&quot;index&quot;:&quot;1_1_3&quot;,&quot;title&quot;:&quot;火锅&quot;}}"
                class="link detail-text"
                target="_blank"
                data-query="utm_source=meituanweb"
              >火锅</a>
              <a
                href="https://gz.meituan.com/meishi/c40/"
                data-bid="b_atx2p7dc"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:40,&quot;index&quot;:&quot;1_1_4&quot;,&quot;title&quot;:&quot;自助餐&quot;}}"
                class="link detail-text"
                target="_blank"
                data-query="utm_source=meituanweb"
              >自助餐</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailActive: false,
      timer: null
    }
  },
  methods: {
    showCategoryDetails () {
      this.detailActive = true
    },
    hideCategoryDetails () {
      this.timer = setTimeout(() => {
        this.detailActive = false
      }, 200)
    },
    detailsEnter () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.detailActive = true
    },
    detailsLeave () {
      this.detailActive = false
    }
  }
}
</script>

<style lang="scss">

</style>
