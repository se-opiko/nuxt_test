<template>
  <div>
    <a href="/products">プロダクトへ</a><br>
    {{now}}<br>
    <img src="~/assets/images/雨(テスト画像).jpg" width="300" alt=""><br>
    <div class="red-b">
      asstes/cssのテスト
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData( context ){
    console.log('asyncData')
    console.log(context.route.name)
  },
  created() {
    console.log('created')
  },
  fetch ( context ) {
    console.log('fetch')
  },

  data () {
    return {
      now: null
    }
  },

  mounted () {
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>
