<template>
  <div />
</template>

<script>
import request from '@/utils/request'

export default {
  layout: 'blank',
  middleware: async (ctx) => {
    const { status, data } = await request({
      url: '/users/exit',
      method: 'get'
    })
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
