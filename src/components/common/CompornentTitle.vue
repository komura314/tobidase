<template>
  <div>
    <div class="text-caption mt-5" v-text="ruby"></div>
    <div class="text-h4 md-2" v-text="title"></div>
    <v-divider />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    ruby: {
      type: String,
      default: '',
    },
  },
}
</script>
