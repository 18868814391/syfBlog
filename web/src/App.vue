<template>
  <div id="app">
    <router-view />
    <div id="pic" class="app-home" @click="$router.push('/')">
      <div>首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '', x: '', y: ''
    }
  },
  created() {

  },
  mounted() {
    let moveDiv = document.querySelector('#pic')
    this.w = document.documentElement.clientWidth || document.body.clientWidth
    this.h = document.documentElement.clientHeight || document.body.clientHeight
    this.x = moveDiv.offsetWidth
    this.y = moveDiv.offsetHeight
    moveDiv.addEventListener('touchstart', this.down, { passive: false })
    moveDiv.addEventListener('touchmove', this.move, { passive: false })
  },
  methods: {
    down() {
      let moveDiv = document.querySelector('#pic')
      var touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      this.dx = moveDiv.offsetLeft // 左偏移量
      this.dy = moveDiv.offsetTop // 上移量
    },
    move() {
      let moveDiv = document.querySelector('#pic')
      var touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      // 组织默认事件，防止body滑动
      event.preventDefault()
      this.nx = touch.clientX - this.position.x
      this.ny = touch.clientY - this.position.y
      this.xPum = this.dx + this.nx
      this.yPum = this.dy + this.ny
      // 边界判断
      this.xPum = this.xPum > 0 ? this.xPum : 0
      this.yPum = this.yPum > 0 ? this.yPum : 0
      this.xPum = this.xPum > this.w - this.x ? this.w - this.x : this.xPum
      this.yPum = this.yPum > this.h - this.y ? this.h - this.y : this.yPum

      moveDiv.style.left = this.xPum + 'px'
      moveDiv.style.top = this.yPum + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
  .app-home {
    position: fixed;
    right: 28px;
    bottom: 200px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
    background-image: linear-gradient( 135deg, rgb(49,76,172) 10%, rgb(242,159,191) 100%);
    z-index: 999999;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
    div {
      color: #fff;
      font-size: 8px;
    }
  }
</style>
