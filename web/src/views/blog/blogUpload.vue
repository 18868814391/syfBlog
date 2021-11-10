<template>
  <div class="uploadPage">
    <br>
    <van-field v-model="novelName" placeholder="标题" />
    <br>
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    />
    <button class="upBtn" @click="uploadRich">上传富文本</button>
  </div>
</template>
<script>
import { Icon, Toast, Dialog, Field, Progress, Popup } from 'vant'
import { yiiBlogAdd } from '@/api'
import Cookies from 'js-cookie'
import moment from 'moment'
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
    [Progress.name]: Progress,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false,
      content: null,
      editorOption: {},
      novelName: '',
      chapterTitle: '',
      paragraphTitle: '',
      size: '',
      pro: 0,
      kb: 0,
      timeObj: '',
      loding: false,
      adm: ''
    }
  },
  created() {
    this.adm = Cookies.get('admin')
  },
  methods: {
    onEditorBlur() { // 失去焦点事件

    },
    onEditorFocus() { // 获得焦点事件

    },
    onEditorChange() { // 内容改变事件
      console.log(this.content)
    },
    uploadRich() {
      const self = this
      let ddd = moment().format('MMMM Do YYYY, h:mm:ss a')
      if (!self.novelName) {
        Toast('请输入名字')
      } else if (!self.content) {
        Toast('请输入内容')
      } else if (!self.adm) {
        Toast('未获取到用户身份')
      } else {
        Toast.loading({
          mask: true,
          message: '提交中...'
        })
        console.log(self.content)
        self.content = self.content.replace(new RegExp('\\+', 'g'), '%2B')
        yiiBlogAdd({
          'adm': self.adm,
          'title': self.novelName,
          'content': self.content,
          'updataTime': ddd,
          'state': ''
        }).then((d) => {
          if (d.data.errcode == 0) {
            Toast('上传成功')
            self.$router.push({ path: '/blog' })
          } else {
            Toast(d.data.errmsg)
          }
        }).catch((d) => {
          Toast(d.data.errmsg)
        })
      }
    }
  }
}
</script>
<style lang="less">
.uploadPage{
  display: flex;
  flex-direction: column;
  align-items: center;
  .progress{
    width: 300px;
    height: 50px;
    padding-top:20px;
    box-sizing: border-box;
  }
  .upBtn{
    margin-top: 20px;
  }
}
</style>

