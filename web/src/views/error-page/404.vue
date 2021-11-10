<template>
  <div class="error-container">
    <div class="error-404">
      <img src="@/assets/img/404.png" alt="404" class="main-404-bg">
      <p class="error-404-content">报告！404~~您的页面飞走了~</p>
      <btn-group class="btn" />
    </div>
  </div>
</template>

<script>
import BtnGroup from './btn-group'
export default {
  name: 'ErrorPage',
  components: { BtnGroup }
}
</script>

<style scoped lang="less">
.error-container{
  @include fxied-center();
}
.error-404-content{
  line-height: 30px;
  text-align: center;
}
.btn{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
