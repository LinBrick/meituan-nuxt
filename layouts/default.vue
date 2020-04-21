<template>
  <div class="mt-container">
    <header class="com-header">
      <my-header />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>Footer</footer>
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
