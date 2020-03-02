<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">'{{ msg }}'는 없는 사용자입니다.</v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: null
    }
  },
  data: () => ({
    timeout: 5000,
    color : 'error'
  })
};
</script>

<style>
</style>