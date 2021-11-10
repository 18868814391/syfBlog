<template>
  <div class="Myread">
    <h2 class="myr-h2">{{ con.title }}</h2>
    <div class="ql-editor myr-con" v-html="con.content" />
  </div>
</template>
<script>
import { Toast } from 'vant'
import { getlightNovel } from '@/api'
export default {
  data() {
    return {
      id: '',
      con: ''
    }
  },
  created() {
    const self = this
    this.id = this.$route.query.id
    Toast.loading({
      mask: true,
      message: '加载中...'
    })
    getlightNovel({
      'id': self.id
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
.Myread{
  .myr-h2{
    text-align: center;
  }
  .myr-con{
    line-height: 50px;
    text-indent: 50px;
    font-size: 20px;
  }
}
</style>

