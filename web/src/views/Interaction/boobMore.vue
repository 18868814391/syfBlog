<template>
  <div class="boobMore-page">
    <div v-for="(item,index) in boobList" :key="index" class="boobMore-page-con">
      <img :src="item.content" alt="">
      <div>名字：{{ item.Thename }}</div>
      <div>介绍：{{ item.msg }}</div>
      <div>时间：{{ item.updataTime }}</div>
    </div>
    <div class="moreButton" @click="forMore">
      <button>加载更多</button>
    </div>
  </div>
</template>
<script>
import { yiiGetDood } from '@/api'
import { Toast, Popup } from 'vant'
export default {
  components: {
    [Toast.name]: Toast,
    [Popup.name]: Popup
  },
  data() {
    return {
      boobList: '',
      start: 0
    }
  },
  created() {
    const self = this
    yiiGetDood({
      start: 0
    }).then((d) => {
      self.boobList = d.data.data
    }).catch((d) => {

    })
  },
  methods: {
    forMore() {
      const self = this
      this.start++
      Toast.loading({
        mask: true,
        message: '提交中...'
      })
      yiiGetDood({
        start: self.start
      }).then((d) => {
        Toast.clear()
        self.boobList = self.boobList.concat(d.data.data)
        if (d.data.data.length <= 0) {
          Toast('再戳也没有更多了 = =!')
        }
      }).catch((d) => {
        Toast.clear()
      })
    }
  }
}
</script>
<style lang="less">
.boobMore-page{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .boobMore-page-con{
    width: 40%;
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
    margin-top:20px;
    font-size: 12px;
    color: #666;
    img{
      width: 100%;
    }
  }
  .moreButton{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top:20px;
  }
}
</style>

