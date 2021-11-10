<template>
  <div class="levelPage">
    <br>
    <div class="test-con">
      <div class="test-con-ques">
        天王盖地虎
      </div>
      <div class="test-con-tit">
        <van-field v-model="myname" class="input-item" placeholder="请输入下一句" />
      </div>
      <div class="reg-tip">你尽管猜，猜对了算我输.</div>
      <van-button class="butt-item" type="primary" @click="submit">提交</van-button>
    </div>

  </div>
</template>
<script>
import { Icon, Toast, Dialog, Button, Field } from 'vant'
import { levelGet } from '@/api'
import Cookies from 'js-cookie'
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      adm: '',
      myname: ''
    }
  },
  created() {
    this.adm = Cookies.get('admin')
  },
  methods: {
    submit() {
      const self = this
      Toast.loading({
        mask: true,
        message: '提交中...'
      })
      levelGet({
        adm: self.adm,
        myname: self.myname
      }).then((d) => {
        console.log(d.data)
        if (d.data.errcode == 0) {
          Toast(d.data.errmsg)
          window.history.go(-1)
        } else {
          Toast(d.data.errmsg)
        }
      }).catch((d) => {
        Toast(d.data.errmsg)
      })
    }
  }
}
</script>
<style lang="less">
.levelPage{
  .test-head{
    text-align: center;
  }
  .test-con{
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .test-con-tit{
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      margin-top:20px;
      justify-content: space-between;
      margin-top:10px;
    }
  }
  .butt-item{
    margin-top:10px;
  }
  .reg-tip{
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
}
</style>

