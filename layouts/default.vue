<template>
  <el-container>
    <el-header class="com-header">
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index'
export default {
  components: {
    MyHeader
  }
}
</script>
