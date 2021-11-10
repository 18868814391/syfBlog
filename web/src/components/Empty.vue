<template>
  <div class="empty">
    <img src="@/assets/img/empty.png" alt="">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    description: {
      type: String,
      default: '暂无内容'
    }
  }
}
</script>

<style scoped lang="less">
.empty{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-flow: column;
    p{
        font-size: 18px;
        font-weight: 500;
        color: #000000;
        line-height: 36px;
    }
}
</style>
