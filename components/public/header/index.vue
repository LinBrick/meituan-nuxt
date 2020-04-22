<template>
  <div>
    <div class="header-bar">
      <div class="header-content clearfix">
        <geo />
        <my-nav />
      </div>
    </div>
    <search />
  </div>
</template>

<script>
import Geo from './geo'
import MyNav from './nav'
import Search from './search'

export default {
  components: {
    Geo,
    MyNav,
    Search
  }
}
</script>

<style lang="scss">

</style>
