<template>
  <div class="header-bar">
    <div class="header-content clearfix">
      <geo />
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
export default {
  components: {
    Geo
  }
}
</script>

<style lang="scss">

</style>
