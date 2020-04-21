<template>
  <div class="header-bar">
    <div class="header-content clearfix">
      <geo />
      <my-nav />
    </div>
  </div>
  <!-- <el-row :gutter="20" class="com-header">
    <el-col :span="6">
      <geo />
    </el-col>
  </el-row> -->
</template>

<script>
import Geo from './geo'
import MyNav from './nav'

export default {
  components: {
    Geo,
    MyNav
  }
}
</script>

<style lang="scss">

</style>
