<template>
  <div class="right-banner">
    <headerLinks />
    <recommended />
  </div>
</template>

<script>
import HeaderLinks from './headerLinks'
import Recommended from './recommended'

export default {
  components: {
    HeaderLinks,
    Recommended
  }
}
</script>
