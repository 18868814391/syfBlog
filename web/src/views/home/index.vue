<template>
  <div class="indexPage">
    <div v-if="!admin" class="app-head">
      <div @click="goLogin">登陆</div>
      <div @click="goRegister">注册</div>
    </div>
    <div v-else class="app-head" style="fontSize:14px;">
      欢迎你啊！{{ Thename }}
      <span style="fontSize:12px;" @click="logOut">退出</span>
    </div>

    <div class="index-item">
      <div class="liuyanban liuyanpos1">
        <disappearBtn :title="'留言板'" :rout="'footprint'" :idn="'id1'" />
      </div>
      <div class="liuyanban liuyanpos2">
        <disappearBtn :title="'聊天室'" :rout="'chatRoom'" :idn="'id2'" />
      </div>
      <div class="liuyanban liuyanpos3">
        <disappearBtn :title="'涂鸦板'" :rout="'boobBrand'" :idn="'id3'" />
      </div>
      <div class="liuyanban liuyanpos4">
        <disappearBtn :title="'1024'" :rout="'game1'" :idn="'id4'" />
      </div>
      <div class="liuyanban liuyanpos5" @click="sweep()">
        <disappearBtn :title="'扫一扫'" :idn="'id5'" />
      </div>
      <div class="liuyanban liuyanpos6" @click="goLive()">
        <disappearBtn :title="'视频聊天'" :idn="'id6'" />
      </div>
      <div class="liuyanban liuyanpos7" @click="goCoco()">
        <disappearBtn :title="'cocos'" :idn="'id7'" />
      </div>
      <div class="liuyanban liuyanpos8" @click="goThree()">
        <disappearBtn :title="'threeJs'" :idn="'id8'" />
      </div>
      <br>
      <navTBox :taber="'工作笔记'" :rout="'blog'" :sum="7" :ind="1" />
      <br>
      <navTBox :taber="'笔记上传'" :rout="'blogUpload'" :sum="7" :ind="2" />
      <br>
      <navTBox :taber="'小说'" :rout="'read'" :sum="7" :ind="4" />
      <br>
      <!-- <navTBox :taber="'Music'" :rout="'music'" :sum="7" :ind="5" />
      <br> -->
      <!-- <div @click="goMAD">MAD</div> -->

      <!-- <div @click="goAnime">Anime</div> -->

      <!-- <div @click="goUpload">上传页面</div> -->
      <navTBox :taber="'文件夹'" :rout="'myfile'" :sum="7" :ind="6" />
      <br>
      <!-- <div @click="gofootprint">留言板</div> -->
      <navTBox :taber="'关于本站'" :rout="'aboutMe'" :sum="7" :ind="7" />
    </div>
    <div style="textAlign:center;marginTop:40px;">
      <a href="http://www.beian.miit.gov.cn/">浙ICP备19028592号</a>
    </div>
    <van-popup v-model="showPop">
      <div class="pop" @click="closePop()">{{ sweepStr }}</div>
    </van-popup>
    <div style="padding:20px 0;">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402003945" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="@/assets/img/beian.png" style="float:left;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33010402003945号</p></a>
    </div>
  </div>
</template>
<script>
import { Toast, Popup } from 'vant'
import { getThename, getadmin } from '@/libs/utils.js'
import jumpBox from '@/components/jumpBox.vue'
import navTBox from '@/components/navTBox.vue'
import disappearBtn from '@/components/disappearBtn.vue'
import wx from 'weixin-js-sdk'
import Cookies from 'js-cookie'
export default {
  components: {
    [Toast.name]: Toast,
    [Popup.name]: Popup,
    [jumpBox.name]: jumpBox,
    [navTBox.name]: navTBox,
    [disappearBtn.name]: disappearBtn
  },
  data() {
    return {
      sign: '', // 微信签名相关
      admin: getadmin(),
      Thename: getThename(),
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '', x: '', y: '',
      signature: '',
      showPop: false,
      sweepStr: ''
    }
  },
  created() {

  },
  mounted() {
    const self = this
    setTimeout(function() {
      self.signature = sessionStorage.getItem('wxsignature')
      if (self.signature) {
        wx.config({
          debug: false, // 开启调试模式,
          appId: 'wx3352249676449b29', // 必填，企业号的唯一标识，此处填写企业号corpid
          timestamp: '1414587457', // 必填，生成签名的时间戳 self.sign.timestamp
          nonceStr: 'syf', // 必填，生成签名的随机串 self.sign.noncestr
          signature: self.signature, // 必填，签名，见附录1
          jsApiList: ['checkJsApi', 'getLocation', 'scanQRCode', 'openLocation', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      }
    }, 1000)
  },
  methods: {
    goLogin() {
      this.$router.push({ path: '/login' })
    },
    goRegister() {
      this.$router.push({ path: '/register' })
    },
    logOut() {
      Cookies.set('admin', '', { expires: -1 })
      Cookies.set('Thename', ''.Thename, { expires: -1 })
      window.location.reload()
    },
    goUpload() {
      this.$router.push({ path: '/upLoad' })
    },
    goRead() {
      this.$router.push({ path: '/read' })
    },
    goCommon() {
      this.$router.push({ path: '/myfile' })
    },
    goBlogUpload() {
      this.$router.push({ path: '/blogUpload' })
    },
    goBlog() {
      this.$router.push({ path: '/blog' })
    },
    goIM() {
      this.$router.push({ path: '/session' })
    },
    goMap() {
      this.$router.push({ path: '/map' })
    },
    goMusic() {
      this.$router.push({ path: '/music' })
    },
    goMAD() {
      this.$router.push({ path: '/mad' })
    },
    goAnime() {
      this.$router.push({ path: '/anime' })
    },
    goCoco() {
      this.$router.push({ path: '/cocos' })
    },
    gofootprint() {
      this.$router.push({ path: '/footprint' })
    },
    aboutMe() {
      this.$router.push({ path: '/aboutMe' })
    },
    gochatRoom() {
      this.$router.push({ path: '/chatRoom' })
    },
    goThree() {
      window.location.href = 'https://www.shenyifan.top/threeJs/#/'
    },
    sweep() {
      const self = this
      return new Promise((resolve, reject) => {
        wx.ready(function() {
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success: function(res) {
              console.log(res.resultStr)
              var result = res.resultStr
              self.sweepStr = result
              self.showPop = true
            }
          })
        })
        resolve()
      })
    },
    closePop() {
      this.showPop = false
    },
    goLive() {
      window.location.href = 'https://www.shenyifan.top/live/'
    }
  }
}
</script>
<style lang="less">
.indexPage{
  width:100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction:column;
  align-items: center;
  .app-head{
    width: 100%;
    height: 50px;
    background-image: linear-gradient( 135deg, rgb(49,76,172) 10%, rgb(242,159,191) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    overflow: hidden;
    color: white;
  }
  .index-item{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .liuyanban{
    .liuyanban-t{
      text-align: center;
      margin-top:40px;
      position: relative;
      z-index: 10;
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .liuyanpos1{
    margin-top:5px;
    width: 80px;
    position: absolute;
    top:0px;
    left:10px;
    height: 75px;
  }
  .liuyanpos6{
    margin-top:100px;
    width: 80px;
    position: absolute;
    top:0px;
    right:10px;
    height: 75px;
  }
  .liuyanpos7{
    margin-top:190px;
    width: 80px;
    position: absolute;
    top:0px;
    right:10px;
    height: 75px;
  }
  .liuyanpos8{
    margin-top:280px;
    width: 80px;
    position: absolute;
    top:0px;
    right:10px;
    height: 75px;
  }
  .liuyanpos2{
    margin-top:5px;
    width: 80px;
    position: absolute;
    top:0px;
    right:10px;
    height: 75px;
  }
  .liuyanpos3{
    margin-top:100px;
    width: 80px;
    position: absolute;
    top:0px;
    left:10px;
    height: 75px;
  }
  .liuyanpos4{
    margin-top:190px;
    width: 80px;
    position: absolute;
    top:0px;
    left:10px;
    height: 75px;
  }
  .liuyanpos5{
    margin-top:280px;
    width: 80px;
    position: absolute;
    top:0px;
    left:10px;
    height: 75px;
  }
  .jumpBox{
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .textBox::before{
    content: '';
    height: 8px; width:100%; background: #000; opacity: .2; border-radius: 50%;
    position: absolute;
    top:60px;
    // animation: shadow .5s linear infinite;
  }
  .textBox{
    border-radius: 5px;
    background: #fff;
    // animation: rotate .5s linear infinite;
    position: relative;
    min-width: 50px;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  @keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.2);}
  }

  @keyframes rotate {
    0% {
    transform: translateY(0) ;
  }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(20px) scale(1.1, 0.9);

    }
    75% {
        ransform: translateY(10px) ;
    }
    100% {
        transform: translateY(0) ;
    }
  }
  .bottom-govBox{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .pop{
    padding: 10px;
    width: 80vw;
    word-break: break-all;
  }
}
</style>

