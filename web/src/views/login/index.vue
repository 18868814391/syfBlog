<template>
  <div class="register-page">
    <div class="rebox">
      <van-field v-model="admin" class="login-inp" placeholder="请输入账户" />
      <van-field v-model="code" class="login-inp" placeholder="请输入登陆密码" type="password" />
      <div class="login-tip">非常抱歉，懒得写忘记密码功能，忘了就再去注册个呗</div>
      <van-button class="login-inp2" type="primary" @click="submit">提交</van-button>
    </div>

  </div>
</template>
<script>
import { Icon, Toast, Dialog, Field } from 'vant'
import { loginIN, yiiLogin } from '@/api'
import md5 from 'js-md5'
import Cookies from 'js-cookie'
// Vue.use(Dialog);
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Field.name]: Field
  },
  data() {
    return {
      admin: '',
      code: ''
    }
  },
  created() {
    if (Cookies.get('Thename')) {
      this.$router.replace({ path: '/' })
    }
  },
  methods: {
    submit() {
      const self = this
      yiiLogin({
        admin: self.admin,
        code: md5(self.code)
      }).then((d) => {
        console.log(d.data)
        if (d.data.errcode == 0) {
          let Thename = d.data.data.Thename
          Cookies.set('admin', self.admin, { expires: 60 })
          Cookies.set('Thename', d.data.data.Thename, { expires: 60 })
          Toast(`${Thename}，欢迎`)
          this.$router.replace({ path: '/' })
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
.register-page{
  .rebox{
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-inp{
    margin-top:10px;
  }
  .login-inp2{
    margin-top:10px;
    position: relative;
    margin:10px auto;
  }
  .login-tip{
    margin-top:10px;
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
}
</style>

