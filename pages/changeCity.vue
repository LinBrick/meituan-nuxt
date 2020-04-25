<template>
  <div class="page">
    <div class="op-area">
      <div class="choose-by-province">
        <h3 class="l-attr">
          按省份选择:
        </h3>
        <div class="choose-wrap">
          <div class="province-choose">
            <el-select v-model="province" placeholder="省份" filterable>
              <el-option
                v-for="item in provinceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="city-choose">
            <el-select v-model="city" :disabled="cityDisable" filterable placeholder="城市">
              <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div><div class="search">
        <h3 class="l-attr">
          直接搜索：
        </h3>
        <el-select v-model="input" placeholder="请输入城市中文名" filterable>
          <el-option
            v-for="item in allCities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="citylist">
      <h3 class="l-attr">
        热门城市：
      </h3>
      <p class="r-info">
        <a href="//bj.meituan.com" class="link city">北京</a><a href="//sh.meituan.com" class="link city">上海</a><a href="//gz.meituan.com" class="link city">广州</a><a href="//sz.meituan.com" class="link city">深圳</a><a href="//tj.meituan.com" class="link city">天津</a><a href="//xa.meituan.com" class="link city">西安</a><a href="//cq.meituan.com" class="link city">重庆</a><a href="//hz.meituan.com" class="link city">杭州</a><a href="//nj.meituan.com" class="link city">南京</a><a href="//wh.meituan.com" class="link city">武汉</a><a href="//cd.meituan.com" class="link city">成都</a>
      </p>
    </div>
    <div class="citylist recent-city">
      <h3 class="l-attr">
        最近访问：
      </h3><p class="r-info">
        <a href="//jm.meituan.com" class="link city">江门</a><a href="//panzhihua.meituan.com" class="link city">攀枝花</a><a href="//am.meituan.com" class="link city">澳门</a><a href="//gz.meituan.com" class="link city">广州</a><a href="//bj.meituan.com" class="link city">北京</a>
      </p>
    </div>
    <div class="alphabet">
      <h3 class="l-attr">
        按拼音首字母选择：
      </h3>
      <p class="r-info">
        <span v-for="item in cityGroup" :key="item" class="letter" @click="jumpGroupCity(item.title)">{{ item.title }}</span>
      </p>
    </div>
    <div class="alphabet-city-area">
      <div
        v-for="item in cityGroup"
        :id="`city-${item.title}`"
        :key="item.title"
        class="city-area"
      >
        <span class="city-label">{{ item.title }}</span>
        <span class="cities">
          <a
            v-for="_city in item.city"
            :key="_city"
            href="//as.meituan.com"
            class="link city"
          >{{ _city }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import pyjs from 'js-pinyin'
import request from '@/utils/request'

export default {
  data () {
    return {
      province: '',
      provinceList: [],
      city: '',
      cityList: [],
      input: '',
      allCities: [],
      cityGroup: []
    }
  },
  computed: {
    cityDisable () {
      return this.cityList.length === 0
    }
  },
  watch: {
    async province (newPvalue) {
      const { status, data: { city } } = await request({
        url: `/geo/province/${newPvalue}`,
        method: 'get'
      })
      if (status === 200) {
        this.cityList = city.map((item) => {
          return {
            value: item.id,
            label: item.name
          }
        })
        this.cvalue = ''
      }
    }
  },
  async mounted () {
    // 获取省份
    const { status, data: { province } } = await request({
      url: '/geo/province',
      method: 'get'
    })
    if (status === 200) {
      this.provinceList = province.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }

    // 获取所有城市
    const { status: status1, data: { city } } = await request({
      url: '/geo/city',
      method: 'get'
    })
    if (status1 === 200) {
      this.allCities = city.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }

    this.cityPYFormat()
  },
  methods: {
    async cityPYFormat () {
      const self = this
      const blocks = []
      // const { status, data: { city } } = await self.$axios.get('/geo/city')
      const { status, data: { city } } = await request({
        url: '/geo/city',
        method: 'get'
      })
      if (status === 200) {
        let p
        let c
        const d = {}
        city.forEach((item) => {
          p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
          c = p.charCodeAt(0)
          if (c > 96 && c < 123) {
            if (!d[p]) {
              d[p] = []
            }
            d[p].push(item.name)
          }
        })
        for (const [k, v] of Object.entries(d)) {
          blocks.push({
            title: k.toUpperCase(),
            city: v
          })
        }
        blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
        self.cityGroup = blocks
      }
    },
    jumpGroupCity (item) {
      window.location.href = `/changeCity#city-${item}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/meituan-css/change_city.css';
.page .op-area .choose-wrap .province-choose{
  padding: 0 !important;
  border: 0 !important;
}
.page .op-area .choose-wrap .city-choose{
  padding: 0 !important;
  border: 0 !important;
}
</style>
