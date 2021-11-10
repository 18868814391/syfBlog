<template>
  <div class="MyBread">
    <h2 class="MB-tit">{{ con.title }}</h2>
    <div class="MB-time">
      由用户{{ con.adm }}在
      {{ con.updatatime }}上传
    </div>
    <div class="ql-editor BlogrichTxt" v-html="richText" />
  </div>
</template>
<script>
import { blogDetail } from '@/api'
import { quillEditor } from 'vue-quill-editor'
import { Toast } from 'vant'
export default {
  components: {
    [Toast.name]: Toast
  },
  data() {
    return {
      id: '',
      con: '',
      richText: '',
      toast: '',
      timer: ''
    }
  },
  beforeDestroy() {
    window.scrollTo(0, 0)
  },
  created() {
    const self = this
    const toast = Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: 'spinner',
      message: 'loading... 3 秒'
    })
    let second = 3

    const timer = setInterval(() => {
      second--
      if (second >= 0) {
        toast.message = `loading... ${second} 秒`
      } else if (second < 0 && second >= -3) {
        toast.message = `好吧，我的服务器是捡来的`
      } else if (second < -3 && second > -6) {
        toast.message = `或许是你的网络问题，我关掉了嗷`
      } else if (second <= -6) {
        Toast.clear()
        clearInterval(timer)
      }
    }, 1000)

    this.id = this.$route.query.id
    blogDetail({
      'id': self.id
    }).then((d) => {
      Toast.clear()
      clearInterval(timer)
      self.con = d.data.data
      self.richText = self.con.content
      console.log(self.richText)
      self.goTop()
    }).catch(() => {
      Toast.clear()
      clearInterval(timer)
    })
  },
  methods: {
    goTop() {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }
}
</script>
<style lang="less">
.MyBread{
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .MB-tit{
    text-indent: 10px;
  }
  .MB-time{
    text-indent: 10px;
    color: #999999;
    font-size: 12px;
    margin-top:10px;
    margin-bottom:10px;
  }
  .BlogrichTxt{
    img{
      width: 100%;
    }
  }
}
</style>
