<template>
  <div class="cocos">
    <div class="cocos-Box" @click="goGame('/game001')">
      方块卡位
    </div>
    <div class="cocos-Box" @click="goGame('/game002')">
      连续跳板
    </div>
    <div class="cocos-Box" @click="goGame('/game003')">
      茅草跳一跳
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    goGame(d) {
      window.location.href = 'https://www.shenyifan.top/games' + d
    }
  }
}
</script>
<style lang="less">
.cocos{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cocos-Box{
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid lightblue;
    border-radius:10px;
    color: lightcoral;
    margin: 10px 0;

  }
}
</style>
