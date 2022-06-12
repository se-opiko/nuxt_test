<template>
  <div>
    <nuxt-link to="/products/create">作成画面へ</nuxt-link>
    <test></test>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'products'
})
</script>