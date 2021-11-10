<template>
  <div class="Myread3">
    <h2 class="myr-3">{{ con.title }}</h2>
    <div class="ql-editor myr3-con" v-html="con.content" />
  </div>
</template>
<script>
import { getMircleDetail } from '@/api'
import { Toast } from 'vant'
export default {
  data() {
    return {
      chapterTitle: '',
      paragraphTitle: '',
      con: ''
    }
  },
  created() {
    const self = this
    this.chapterTitle = this.$route.query.chapterTitle
    this.paragraphTitle = this.$route.query.paragraphTitle
    Toast.loading({
      mask: true,
      message: '加载中...'
    })
    getMircleDetail({
      'chapterTitle': self.chapterTitle,
      'paragraphTitle': self.paragraphTitle
    }).then((d) => {
      self.con = d.data.data
    }).catch(() => {

    }).finally(() => {
      Toast.clear()
    })
  },
  methods: {

  }
}
</script>
<style lang="less">
.Myread3{
  .myr-3{
    text-align: center;
  }
  .myr3-con{
    line-height: 50px;
    text-indent: 50px;
    font-size: 20px;
  }
}
</style>
