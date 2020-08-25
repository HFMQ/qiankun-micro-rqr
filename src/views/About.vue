<template>
  <div class="about">
    <h1>This is an rqr about page ...</h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  created() {
    console.log('hf', this.$store.state.userStore.currentUser);
  },
};
</script>
