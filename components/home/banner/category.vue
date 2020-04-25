<template>
  <div class="left-banner">
    <div class="category-nav-container">
      <div class="category-nav-title-wrapper">
        <span class="category-nav-title">全部分类</span><span class="title-icon" />
      </div>
      <div class="category-nav-content-wrapper">
        <ul>
          <li
            v-for="menu in menus"
            :key="menu.type"
            class="nav-li"
            @mouseenter="showCategoryDetails(menu.type)"
            @mouseleave="hideCategoryDetails"
          >
            <i class="iconfontNew hc-icon-foodNew" />
            <span class="nav-text-wrapper"><span>
              <a href="#" class="link nav-text" target="_blank">
                {{ menu.name }}
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
        <div
          v-for="(item,index) in menus"
          :key="index"
          class="category-nav-detail"
          :class="{active:type === item.type}"
        >
          <div
            v-for="(categoryInfo,i) in item.child"
            :key="`categoryInfo-${i}`"
            class="detail-area"
          >
            <div
              class="detail-title-wrapper clearfix"
            >
              <h2>
                <a
                  href="#"
                  class="link detail-title"
                  target="_blank"
                >{{ categoryInfo.title }}</a>
              </h2>
              <a
                target="_blank"
                class="link detail-more"
              >更多<i class="detail-right-arrow" /></a>
            </div>
            <div class="detail-content">
              <a
                v-for="(name,j) in categoryInfo.child"
                :key="`name-${j}`"
                href="#"
                target="_blank"
                class="link detail-text"
              >{{ name }}</a>
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
      menus: this.$store.state.home.menu,
      type: '',
      detailActive: false,
      timer: null
    }
  },
  computed: {
  },
  methods: {
    showCategoryDetails (type) {
      this.detailActive = true
      this.type = type
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    hideCategoryDetails () {
      this.timer = setTimeout(() => {
        this.detailActive = false
        this.type = ''
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
      this.type = ''
    }
  }
}
</script>

<style lang="scss">

</style>
