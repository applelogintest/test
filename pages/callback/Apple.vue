<template>
  <div>hello</div>
</template>
<script>
export default {
  mounted() {
    console.log('hello');
    this.AppleIDSignInOnSuccess();
    this.AppleIDSignInOnFailure();
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
