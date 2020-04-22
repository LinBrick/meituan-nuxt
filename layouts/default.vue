<template>
  <div class="mt-container">
    <header class="com-header">
      <my-header />
    </header>
    <div id="react">
      <nuxt />
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
