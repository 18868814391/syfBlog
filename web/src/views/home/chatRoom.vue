<template>
  <div class="chat-page">
    <div class="chat-page-head">
      当前在线人数{{ num }}
      <!-- <div class="ttips"></div> -->
    </div>
    <div id="msg_box" class="chat-page-body">
      <div v-for="(item,ind) in histortist" :key="ind" class="chatMsg">
        <div v-if="item.adm!=admin" class="chatMsg-t1">{{ item.Thename }}说：</div>
        <div v-if="item.adm!=admin" class="chatMsg-t2">{{ item.updataTime }}</div>
        <div v-if="item.adm!=admin" class="chatMsg-t3">{{ item.content }}</div>

        <div v-if="item.adm==admin" class="chatMsg-t1 al gb">{{ item.Thename }}说：</div>
        <div v-if="item.adm==admin" class="chatMsg-t2 al gb">{{ item.updataTime }}</div>
        <div v-if="item.adm==admin" class="chatMsg-t3 al gb">{{ item.content }}</div>
      </div>
      <div class="historyRecord">————历史纪录————</div>
      <div v-for="(item,index) in chatList" :key="index" class="chatMsg">
        <div v-if="item.adm!=admin" class="chatMsg-t1">{{ item.Thename }}说：</div>
        <div v-if="item.adm!=admin" class="chatMsg-t2">{{ item.updataTime }}</div>
        <div v-if="item.adm!=admin" class="chatMsg-t3">
          <span v-if="item.content">{{ item.content }}</span>
          <span v-if="item.voice" @click="startVoice(item.voice)">[点击播放语音]</span>
        </div>

        <div v-if="item.adm==admin" class="chatMsg-t1 al gb">{{ item.Thename }}说：</div>
        <div v-if="item.adm==admin" class="chatMsg-t2 al gb">{{ item.updataTime }}</div>
        <div v-if="item.adm==admin" class="chatMsg-t3 al gb">
          <span v-if="item.content">{{ item.content }}</span>
          <span v-if="item.voice" @click="startVoice(item.voice)">[点击播放语音]</span>
        </div>
      </div>
    </div>
    <div class="chat-page-bottom">
      <textarea id="" v-model="con" type="text" name="" />
      <div class="sendop">
        <div class="sendop-b1">
          <button @click="show=!show">颜艺</button>
          <button @click="startRecord">{{ isRecording?'录音中...':'点击录音' }}</button>
        </div>
        <button @click="send">发送</button>
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <div class="emojBox">
        <div v-for="(item,inde) in emoji" :key="inde" class="emojBox-items" @click="selEmoj(item)">
          {{ item }}
        </div>
      </div>
    </van-popup>

  </div>
</template>
<script>
import { Toast, Popup, Dialog } from 'vant'
import { yiiSocketIn, yiiSocketmsg } from '@/api'
import { getThename, getadmin } from '@/libs/utils.js'
import moment from 'moment'
import wx from 'weixin-js-sdk'
export default {
  components: {
    [Toast.name]: Toast,
    [Popup.name]: Popup,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      show: false,
      emoji: ['w(ﾟДﾟ)w', 'ヽ(✿ﾟ▽ﾟ)ノ', '(๑•̀ㅂ•́)و✧', '(⊙﹏⊙)', '┗|｀O′|┛', 'φ(≧ω≦*)♪', '凸(艹皿艹 )', '╰(*°▽°*)╯', '（´Д`）', '(#`O′)', '(＠_＠;)', '(ー`´ー)'],
      num: '', // 当前直播间人数
      histortist: [], // 历史信息，5条
      chatList: [],
      admin: getadmin(),
      Thename: getThename(),
      con: '',
      ws: null,
      hub: '', // 数据暂存,过长的数据socket会截断返回
      noAdm: '', // 匿名用户代号
      isRecording: false, // 正在录音中
      localId: '', // 本地录音的id
      serverId: '', // 本地录音上传后的服务端id
      openVoice: '', // 下载下来要被播放的本地音频
      signature: ''
    }
  },
  beforeRouteLeave(to, from, next) {
    this.ws.close()
    next()
  },
  created() {
    const self = this
    if (!getadmin()) {
      Toast('您尚未登陆，将随机分配您的用户名')
      let timestamp = (new Date()).valueOf()
      console.log(String(timestamp))
      this.noAdm = '匿名用户' + String(timestamp).substr(7, 10)
      console.log(this.noAdm)
      this.admin = this.noAdm
      this.Thename = this.noAdm
    }
    self.getlatest()
    // this.ws=new WebSocket("ws://118.31.62.251:4000");
    this.ws = new WebSocket('wss://www.shenyifan.top/socket/')
    this.ws.onopen = function() {
      console.log('握手成功')
    }
    this.ws.onmessage = function(e) {
      console.log('message:' + e.data)
      if (JSON.parse(e.data).content || JSON.parse(e.data).voice) {
        self.chatList.push(JSON.parse(e.data))
        self.$nextTick(function() {
          var msg_box = document.getElementById('msg_box')
          msg_box.scrollTop = msg_box.scrollHeight
        })
      } else {
        self.num = e.data
      }
    }
    this.ws.onerror = function() {
      Toast('socket连接以断开，请刷新页面')
      console.log('error')
    }
    setTimeout(function() {
      let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
      let obj = {
        adm: self.admin,
        Thename: self.Thename,
        content: self.Thename + '加入了聊天室',
        'updataTime': ddd
      }
      self.ws.send(JSON.stringify(obj))
    }, 2000)
  },
  mounted() {
    const self = this
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

    wx.onVoiceRecordEnd({
      // 录音时间超过一分钟没有停止的时候会执行 complete 回调
      complete: function(res) {
        self.localId = res.localId
        wx.uploadVoice({
          localId: self.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function(res) {
            self.serverId = res.serverId // 返回音频的服务器端ID
            Dialog.confirm({
              title: '提示',
              message: '音频上传好了，是否发送呢？'
            }).then(() => {
              let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
              let obj = {
                adm: self.admin,
                Thename: self.Thename,
                content: '',
                'updataTime': ddd,
                'voice': self.serverId
              }
              self.ws.send(JSON.stringify(obj))
            }).catch(() => {

            })
          }
        })
      }
    })
  },
  methods: {
    send() {
      const self = this
      if (self.isRecording) { // 正在录音中
        self.endAndSend()
      } else {
        if (!this.con) {
          Toast('请输入点什么')
          return false
        }
        let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
        let obj = {
          adm: self.admin,
          Thename: self.Thename,
          content: String(self.con),
          'updataTime': ddd
        }
        yiiSocketIn({ // 上传每一条对话信息
          'admin': self.admin,
          'content': self.con,
          'Thename': self.Thename,
          'updataTime': ddd
        }).then((d) => {

        }).catch((d) => {

        })
        this.ws.send(JSON.stringify(obj))
        this.con = ''
      }
    },
    getlatest() {
      const self = this
      yiiSocketmsg({
      }).then((d) => {
        console.log(d)
        self.histortist = d.data.errmsg
        self.histortist.reverse()
        console.log(self.histortist)
      }).catch((d) => {

      })
    },
    selEmoj(d) {
      this.con = this.con + d
      this.show = false
    },
    startRecord() {
      const self = this
      if (this.isRecording) { // 正在录音中,下面要结束录音
        self.endAndSend()
      } else { // 未开始录音，下面要开始录音
        this.isRecording = true
        wx.startRecord()
      }
    },
    startVoice(d) {
      const self = this
      Toast('录音下载中...')
      wx.downloadVoice({
        serverId: d, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function(res) {
          self.openVoice = res.localId // 返回音频的本地ID
          Toast('录音播放中，请开大音量:D')
          wx.playVoice({
            localId: self.openVoice // 需要播放的音频的本地ID，由stopRecord接口获得
          })
        }
      })
    },
    endAndSend() { // 终止录音并上传
      const self = this
      this.isRecording = false
      wx.stopRecord({
        success: function(res) {
          self.localId = res.localId
          wx.uploadVoice({
            localId: self.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              self.serverId = res.serverId // 返回音频的服务器端ID
              Dialog.confirm({
                title: '提示',
                message: '音频上传好了，是否发送呢？'
              }).then(() => {
                let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
                let obj = {
                  adm: self.admin,
                  Thename: self.Thename,
                  content: '',
                  'updataTime': ddd,
                  'voice': self.serverId
                }
                self.ws.send(JSON.stringify(obj))
              }).catch(() => {

              })
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
.chat-page{
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ttips{
    width: 100%;
    color: blue;
    font-size: 10px;
    text-align: center;
  }
  .chat-page-head{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: lightblue;
    position: relative;

  }
  .chat-page-bottom{
    width: 100%;
    height: 100px;
    background: lightblue;
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    z-index: 101;
    textarea{
      height: 90px;
      width: 50%;
      margin-right:10px;
    }
    .sendop{
      height: 90px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .sendop-b1{
        height: 40px;
        width: 100%;
        text-align: center;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        button{
          width:45%;
        }
      }
      button{
        height: 40px;
        width: 100%;
      }
    }

  }
  .chat-page-body{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    flex: 1;
    overflow-y: auto;
  }
  .chatMsg{
    width: 100%;
    background: lavender;
    margin: 5px 0;
    box-sizing: border-box;
    border-radius:4px;
    padding: 4px;
    box-sizing: border-box;
    .chatMsg-t1{
      font-size: 15px;
      font-weight: 600;
    }
    .chatMsg-t2{
      font-weight:100;
      font-size: 10px;
      color: #999;
    }
    .chatMsg-t3{
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  .al{
    text-align: right;
  }
  .gb{
    background: lightgreen;
  }
  .emojBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .emojBox-items{
      width: 22%;
      height: 20px;
      text-align: center;
      overflow: hidden;
      margin:20px 0;
      background: lavender;
    }
  }
  .historyRecord{
    width: 100%;
    text-align: center;
    color: #999;
    font-size: 10px;
  }
}
</style>

