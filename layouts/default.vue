<template>
  <div class="mt-container">
    <header class="com-header">
      <my-header />
    </header>
    <div id="react">
      <nuxt />
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/public/header/index'
export default {
  components: {
    MyHeader
  }
}
</script>
