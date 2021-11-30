<template>
  <div class="read-page">
    <div v-if="list[0]" class="novelItem" @click="goRead('2')">
      <img src="@/assets/img/lapulasi.png" alt="">
      {{ list[0].title }}
    </div>
    <div v-if="list[0]" class="novelItem" @click="goRead('3')">
      <img src="@/assets/img/seven.png" alt="">
      {{ list[1].title }}
    </div>
    <div v-if="list[0]" class="novelItem" @click="goRead('4')">
      <img src="@/assets/img/theone.png" alt="">
      {{ list[2].title }}
    </div>
    <div v-if="list[0]" class="novelItem" @click="goRead('5')">
      <img src="@/assets/img/treedrogon.png" alt="">
      {{ list[3].title }}
    </div>
    <div class="novelItem" @click="goRead2">
      <img src="@/assets/img/mircle11.png" alt="">
      有关奇迹的设定
    </div>
  </div>
</template>
<script>
import { lightNovelList } from '@/api'
import { Toast } from 'vant'
export default {
  data() {
    return {
      list: ''
    }
  },
  created() {
    const self = this
    Toast.loading({
      mask: true,
      message: '加载中...'
    })
    lightNovelList({

    }).then((d) => {
      self.list = d.data.data
    }).catch(() => {

    }).finally(() => {
      Toast.clear()
    })
  },
  methods: {
    goRead(d) {
      this.$router.push({ path: '/readPage', query: { id: d }})
    },
    goRead2() {
      this.$router.push({ path: '/readPage2' })
    }
  }
}
</script>
<style lang="less">
.read-page{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .novelItem{
    width: 100px;
    font-size: 12px;
    margin-top:15px;
    margin-left: 5vw;
    img{
      width: 100px;
      height:150px;
      border: 1px solid #ccc;
    }
  }
}
</style>

