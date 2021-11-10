<template>
  <div class="disappearBtn-page">
    <div class="divbtn cake" style="width:80px" @click="goRoute">
      <div id="btn" style="width:80px" ref="doom">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'disappearBtn',
  data(){
    return{

    }
  },
  props:{
    title: {
      type: String,
      default() {
        return '默认'
      }
    },
    rout: {
      type: String,
      default() {
        return 'b'
      }
    }, 
    idn: {
      type: String,
      default() {
        return ''
      }
    }, 
  },  
  mounted(){
  },
  methods:{
    goRoute(){
			if(this.rout=='b'){
				return false;
			}
      this.$router.push({ path: `/${this.rout}` }); 
    },
  },
}
</script>
<style lang="less">
.disappearBtn-page{
  #btn{
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius:10px;
    background:rgba(44,193,254,1);
    color: white; 
	}
}
</style>

