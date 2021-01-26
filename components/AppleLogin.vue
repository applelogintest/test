<template>
  <div
    id="appleid-signin"
    data-color="black"
    data-border="true"
    class="custom-apple-btn"
    @click="test"
  />
</template>

<script>
export default {
  name: 'AppleLogin',
  mounted() {
    window.AppleID.auth.init({
      clientId: 'com.logintest.service',
      scope: 'email',
      redirectURI: 'https://www.appplelogintest.ga/callback/apple/',
      state: 'state',
      response_type: 'code',
      response_mode: 'form_post',
    })
  },
  methods: {
    test() {
      console.log('hello')
      window.AppleID.auth.signIn()
    },
  },
}
</script>
<style scoped>
.custom-apple-btn {
  width: 226px;
  height: 50px;
}
</style>
