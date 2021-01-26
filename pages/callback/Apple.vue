<template>
  <div />
</template>
<script>
export default {
  mounted() {
    const data = window.AppleID.auth.signIn()
    console.log(data)
  },
}
</script>
