<template>
  <div ref="nt1" class="navTBox" :class="start?'navTBoxAnime1':''" @click="goroute">
    <van-button plain type="primary">{{ taber }}</van-button>
  </div>

</template>
<script>
export default {
  name: 'NavTBox',
  props: {
    rout: {
      type: String,
      default() {
        return 'b'
      }
    },
    taber: {
      type: String,
      default() {
        return 'b'
      }
    },
    sum: {
      type: Number,
      default() {
        return 1
      }
    },
    ind: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  data() {
    return {
      start: false,
      end: true
    }
  },
  created() {

  },
  mounted() {
    // const self = this
    // let sum = this.sum
    // let ind = this.ind
    // setTimeout(() => {
    //   setInterval(() => {
    //     //     testDiv01.removeClass('transi');
    //     // testDiv01.width(); // Apply change
    //     // testDiv01.addClass('transi');
    //     // self.$refs.nt1.removeClass('navTBoxAnime1');
    //     // self.$refs.nt1.width();
    //     // self.$refs.nt1.addClass('navTBoxAnime1');
    //     self.start = true
    //     setTimeout(() => {
    //       self.start = false
    //     }, 500)
    //   }, sum * 250)
    // }, ind * 125)
  },
  methods: {
    goroute() {
      this.$router.push({ path: `/${this.rout}` })
    }
  }
}
</script>
<style lang="less" scoped>
  .navTBox{
    position: relative;
  }
  .navTBoxAnime1{
    animation: rotate .5s linear infinite;
  }
  .navTBoxAnime2{
    animation: shadow .5s linear infinite;
  }
</style>

