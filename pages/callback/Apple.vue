<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    console.log('hello');
      let data = AppleID.auth.signIn();
      console.log(data);
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
