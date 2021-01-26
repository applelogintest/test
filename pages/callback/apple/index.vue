<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    console.log('hello')
    console.log('hello2')
    console.log('hello3')

    window.AppleID.auth.init()

    const data = window.AppleID.auth.signIn()
    console.log(data)
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
