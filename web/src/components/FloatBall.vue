<template>
  <transition name="fadeBtn">
    <div
      v-if="isShow&&pathAdd!='/studentList'&&pathAdd!='/'"
      ref="dragIcon"
      class="dragIcon"
      :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}"
      @touchstart.stop="handleTouchStart"
      @touchmove.prevent.stop="handleTouchMove($event)"
      @touchend.stop="handleTouchEnd"
    >
      <van-icon v-if="pathAdd=='/location'||pathAdd=='/report'" class="back" name="wap-home-o" @click="goHome()" />
      <van-icon v-else class="back" name="share-o" @click="goBack()" />
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: '返回'
    },
    itemWidth: {
      type: Number,
      default: 60
    },
    itemHeight: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      startToMove: false,
      isShow: true,
      timer: null,
      currentTop: null,
      clientW: document.documentElement.clientWidth, // 视口宽
      clientH: document.documentElement.clientHeight // 视口高
    }
  },
  computed: {
    pathAdd() {
      return this.$store.state.auth.pathAdd
    }
  },
  created() {
    this.left = (this.clientW - this.itemWidth - 30)
    this.top = (this.clientH / 1.3 - this.itemHeight / 2)
  },
  mounted() {
    this.bindScrollEvent()
  },
  beforeDestroy() {
    // 记得销毁一些全局的的事件
    this.removeScrollEvent()
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/studentList' })
    },
    goBack() {
      this.$router.back(-1)
    },
    handleTouchStart() {
      this.startToMove = true
      this.$refs.dragIcon.style.transition = 'none'
    },
    handleTouchMove(e) {
      const clientX = e.targetTouches[0].clientX// 手指相对视口的x
      const clientY = e.targetTouches[0].clientY// 手指相对视口的y
      const isInScreen = clientX <= this.clientW && clientX >= 0 && clientY <= this.clientH && clientY >= 0
      if (this.startToMove && e.targetTouches.length === 1) {
        if (isInScreen) {
          this.left = clientX - this.itemWidth / 2
          this.top = clientY - this.itemHeight / 2
        }
      }
    },
    handleTouchEnd() {
      if (this.left < (this.clientW / 2)) {
        this.left = 30// 不让贴边 所以设置30没设置0
        this.handleIconY()
      } else {
        this.left = this.clientW - this.itemWidth - 30// 不让贴边 所以减30
        this.handleIconY()
      }
      this.$refs.dragIcon.style.transition = 'all .3s'
    },
    handleIconY() {
      if (this.top < 0) {
        this.top = 30// 不上帖上边所以设置为30 没设置0
      } else if (this.top + this.itemHeight > this.clientH) {
        this.top = this.clientH - this.itemHeight - 30// 不让帖下边所以减30
      }
    },
    bindScrollEvent() {
      window.addEventListener('scroll', this.handleScrollStart)
    },
    removeScrollEvent() {
      window.removeEventListener('scroll', this.handleScrollStart)
    },
    handleScrollStart() {
      this.isShow = false
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.handleScrollEnd()
      }, 300)
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
    },
    handleScrollEnd() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 判断是否停止滚动的条件
      if (this.scrollTop == this.currentTop) {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/variables.less';
.dragIcon {
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  box-shadow: 4px 9px 9px -4px @blue;
  .back{
    transform: rotateY(180deg);
    font-size: 25px;
    color: @blue;
  }
}
.fadeBtn-enter {
  opacity: 1;
}
.fadeBtn-leave-to {
  opacity: 0;
}
.fadeBtn-enter-active,
.fadeBtn-leave-active {
  transition: opacity 0.3s;
}
</style>
