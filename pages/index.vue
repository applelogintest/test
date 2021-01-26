<template>
  <div>
    <apple-login />
    <nuxt-link to="/callback/apple">
      callback page
    </nuxt-link>
  </div>
</template>

<script>
import AppleLogin from '@/components/AppleLogin.vue'

export default {
  components: {
    AppleLogin
  }
}
</script>
