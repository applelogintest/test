<template>
  <div
    @click="test"
    id="appleid-signin"
    data-color="black"
    data-border="true"
    class="custom-apple-btn"
  />
</template>

<script>
export default {
  name: 'AppleLogin',
  mounted() {
    AppleID.auth.init({
      clientId: 'com.logintest.service',
      scope: 'email',
      redirectURI: 'https://www.appplelogintest.ga/callback/apple',
      state: 'state',
      response_mode: 'form_post'
    })
  },
  methods: {
    test() {
      console.log('hello')
      AppleID.auth.signIn()
    }
  },
}
</script>
<style scoped>
.custom-apple-btn {
  width: 226px;
  height: 50px;
}
</style>
