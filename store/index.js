import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    userInfo,
    geo,
    home
  },
  actions: {
    async nuxtServerInit ({
      commit
    }, { req, app }) {
      // 用户信息
      const { status: status4, data: { mobilePhone } } = await app.$axios.post('/users/getUser')
      commit('userInfo/setUsername', status4 === 200 ? mobilePhone : '')
      // 地址
      const { status, data: { province, city } } = await app.$axios.get('/geo/getPosition')
      commit('geo/setPosition', status === 200 ? { city, province } : { city: '', province: '' })
      // 菜单
      const { status: status2, data: { menu } } = await app.$axios.get('geo/menu')
      commit('home/setMenu', status2 === 200 ? menu : [])
      // 热门城市
      const { status: status3, data: { result } } = await app.$axios.get('/search/hotPlace', {
        params: {
          city: app.store.state.geo.position.city.replace('市', '')
        }
      })
      commit('home/setHotPlace', status3 === 200 ? result : [])
    }
  }
})

export default store
