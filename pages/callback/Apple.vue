<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    console.log('hello');
    try{
      let data = await AppleID.auth.signIn();
      this.AppleIDSignInOnSuccess(data);
    } catch (err) {
      this.AppleIDSignInOnFailure();
    }
  },
  methods: {
    AppleIDSignInOnSuccess(data) {
      console.log(data);
    },
    AppleIDSignInOnFailure(err) {
      console.log(err);
    }
  }
}
</script>
