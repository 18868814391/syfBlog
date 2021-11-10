<template>
  <div class="foot-page">

    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="不要划拉划拉啦，已经没有了"
      @load="onLoad"
    >
      <div v-for="(item,index) in footList" :key="index" class="foot-page-list">
        <div class="foot-page-list-head">
          <span class="foot-page-list-head-t1" @click="seleOne(item)">
            <span style="color:blue">{{ item.Thename }}</span>说：
          </span>
          <span class="foot-page-list-head-t2">{{ item.updataTime }}</span>
        </div>
        <div class="foot-page-list-con">
          <div>{{ item.content }}</div>
          <div v-for="(itm,ind) in item.child" v-show="item.child[0]" :key="ind" class="foot-page-list-con-box">
            <div>
              <span style="color:blue" @click="seleOne2(itm,item)">{{ itm.Thename }}</span>
              对
              <span style="color:blue" @click="seleOne2(itm,item)">{{ itm.talkTo }}</span>
              说：
            </div>
            <div>{{ itm.content.replace(/(^\s*)|(\s*$)/g, "") }}</div>
          </div>
        </div>
      <!-- <button class="for-del">删除</button> -->
      </div>
    </van-list>

    <div class="inp-box">
      <textarea v-model="content" class="inp-box-txt" />
      <div class="inp-box-buttons">
        <button @click="confirm">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, List } from 'vant'
import { sendFoot, getFoot } from '@/api'
import moment from 'moment'
import { getThename, getadmin } from '@/libs/utils.js'
export default {
  components: {
    [Toast.name]: Toast,
    [List.name]: List
  },
  data() {
    return {
      loading: false,
      finished: false,
      footList: [],
      content: '',
      admin: '',
      Thename: '',
      start_page: 0,
      pages: 7,
      talkName: '',
      talkTo: '',
      belong: ''
    }
  },
  created() {
    const self = this
    this.admin = getadmin()
    this.Thename = getThename()

    getFoot({
      start_page: self.start_page,
      pages: self.pages
    }).then((d) => {
      self.start_page++
      console.log(d.data)
      self.footList = self.footList.concat(d.data.data)
      if (self.footList.length * 1 >= d.data.total_page * 1) {
        self.finished = true
      }
    }).catch((d) => {

    })
  },
  methods: {
    seleOne(d) {
      if (this.content.indexOf('说：') != -1) {
        let stArr = this.content.split('说：')
        this.content = stArr[1]
      }
      this.talkName = d.Thename
      this.talkTo = d.Thename
      this.belong = d.id
      this.content = '你对' + this.talkName + '说：' + '  ' + this.content
    },
    seleOne2(d, i) {
      if (this.content.indexOf('说：') != -1) {
        let stArr = this.content.split('说：')
        this.content = stArr[1]
      }
      this.talkName = d.Thename
      this.talkTo = d.Thename
      this.belong = i.id
      this.content = '你对' + this.talkName + '说：' + '  ' + this.content
    },
    onLoad() {
      const self = this
      getFoot({
        start_page: self.start_page,
        pages: self.pages
      }).then((d) => {
        self.start_page++
        self.loading = false
        self.footList = self.footList.concat(d.data.data)
        if (self.footList.length * 1 >= d.data.total_page * 1) {
          self.finished = true
        }
      }).catch((d) => {

      })
    },
    confirm() {
      if (!this.admin) {
        Toast('老铁，看到首页顶上那个蓝蓝的登陆注册按钮了吗？先去整一下吧。')
        return false
      }
      if (!this.content) {
        Toast('老铁，随便说点啥呗')
        return false
      }
      const self = this
      let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
      if (this.talkTo) {
        let stArr = self.content.split('说：')
        self.content = stArr[1]
      }
      sendFoot({
        admin: self.admin,
        Thename: self.Thename,
        content: self.content,
        time: ddd,
        talkTo: self.talkTo,
        belong: self.belong
      }).then((d) => {
        window.location.reload()
      }).catch((d) => {

      })
    }
  }
}
</script>
<style lang="less">
.foot-page{
  padding-bottom:150px;
  .foot-page-list{
    width: 90%;
    min-height: 50px;
    box-sizing: border-box;
    margin-bottom:15px;
    border-radius:4px;
    overflow: hidden;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top:5px;
    .foot-page-list-head{
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: lemonchiffon;
      padding: 0 5px;
      box-sizing: border-box;
      .foot-page-list-head-t1{
        font-size: 14px;
      }
      .foot-page-list-head-t2{
        font-size: 10px;
        color: #666;
      }
    }
    .foot-page-list-con{
      width: 100%;
      min-height: 40px;
      background: rgb(180, 219, 233);
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
      .foot-page-list-con-box{
        width: 80%;
        min-height:20px;
        background: rgb(193, 223, 233);
        margin-left:20px;
        font-size: 13px;
      }
    }
  }
  .inp-box{
    width: 100%;
    height: 100px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: lavender;
    position: fixed;
    bottom:0;
    .inp-box-txt{
      width: 80%;
      height: 70px;
      background: white;
    }
  }
  .inp-box-buttons{
    flex: 1;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .for-del{
    font-size: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>

