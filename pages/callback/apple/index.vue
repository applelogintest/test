<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    console.log('hello')

    // window.AppleID.auth.init({
    //   clientId: 'com.logintest.service',
    //   scope: 'email',
    //   redirectURI: 'https://www.appplelogintest.ga/callback/apple/',
    //   state: 'state',
    //   response_type: 'code id_token',
    //   response_mode: 'form_post',
    // })

    // const data = window.AppleID.auth.signIn()
  },
  methods: {
    AppleIDSignInOnSuccess(data) {
      console.log(data)
    },
    AppleIDSignInOnFailure(err) {
      console.log(err)
      console.log('hello')
    },
  },
}
</script>
