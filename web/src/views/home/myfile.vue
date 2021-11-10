<template>
  <div class="myFilePage">
    因为服务器的带宽只有1M啊 (ノへ￣、) <br>
    所以下载速度足足有100Kb/s啊 ヽ✿゜▽゜)ノ <br>
    上传一时爽啊，下载急死人 w(゜Д゜)w  <br>
    真的要紧的话，请向站长索要源文件吧 ┗|｀O′|┛ 嗷~~<br>
    <div v-for="(item,index) in tit" :key="index" class="mfg-tit">
      <span>{{ item }}</span>
      <div class="mfg-line" />
      <button @click="load(index)">下载</button>
    </div>
  </div>
</template>
<script>
import { getFile } from '@/api'
export default {
  data() {
    return {
      tit: '',
      loc: ''
    }
  },
  created() {
    const self = this
    getFile({

    }).then((d) => {
      console.log(d)
      self.tit = d.data.data.fileName
      self.loc = d.data.data.fileLocatiom
    }).catch((d) => {

    })
  },
  methods: {
    load(d) {
      window.location.href = this.loc[d]
    }
  }
}
</script>
<style lang="less">
.myFilePage{
  .mfg-tit{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .mfg-line{
    flex: 1;
    height: 1px;
    border-top:2px dashed #ccc;
    margin-left:10px;
    margin-right:10px;
  }
}
</style>

