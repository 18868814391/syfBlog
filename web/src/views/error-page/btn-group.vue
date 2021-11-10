<template>
  <div class="btn">
    <van-button plain type="primary" size="small" @click="backHome">返回首页</van-button>
    <van-button plain type="info" size="small" @click="backPrev">返回上一页({{ second }}s)</van-button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  data() {
    return {
      second: 5,
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    backHome() {
      this.$router.replace({
        path: '/'
      })
    },
    backPrev() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">

</style>
