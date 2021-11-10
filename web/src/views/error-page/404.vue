<template>
  <div class="error-container">
    <div class="error-404">
      <p class="error-404-content">报告！404~~您的页面飞走了~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  components: { }
}
</script>

<style scoped lang="less">
.error-container{
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
}
</style>
