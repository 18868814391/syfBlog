<template>
  <div class="navTBox" :class="start?'navTBoxAnime1':''" @click="goroute" ref="nt1">
    <div class="navTBox2" :class="start?'navTBoxAnime2':''" ref="nt2"></div>
    {{taber}}
  </div>
</template>
<script>
export default {
  name: 'navTBox',  
  props:{
    rout: {
      type: String,
      default() {
        return 'b'
      }
    },
    taber: {
      type: String,
      default() {
        return 'b'
      }
    },
    sum: {
      type: Number,
      default() {
        return 1
      }
    }, 
    ind: {
      type: Number,
      default() {
        return 1
      }
    }, 
  },
  data(){
    return{
      start:false,
      end:true,
    }
  },
  created(){

  },
  mounted(){
    const self=this;
    let sum=this.sum;
    let ind=this.ind;
    setTimeout(()=>{
      setInterval(()=>{
    //     testDiv01.removeClass('transi');
    // testDiv01.width(); // Apply change
    // testDiv01.addClass('transi');
        // self.$refs.nt1.removeClass('navTBoxAnime1');
        // self.$refs.nt1.width();
        // self.$refs.nt1.addClass('navTBoxAnime1');
        self.start=true;
        setTimeout(()=>{
         self.start=false; 
        },500)
      },sum*250)
    },ind*125)
  },
  methods:{
    goroute(){
      this.$router.push({ path: `/${this.rout}` }); 
    },
  },
}
</script>
<style lang="less" scoped>
  .navTBox2{
    height: 8px; width:100%; background: #000; opacity: .2; border-radius: 50%;
    position: absolute;
    top:60px;
  }
  .navTBox{
    border-radius: 5px;
    background: white;
    position: relative;
    min-width: 50px;
    height:50px;
    text-align: center;
    line-height: 50px;
    padding: 0 5px;
  }
  .navTBoxAnime1{
    animation: rotate .5s linear infinite;
  }
  .navTBoxAnime2{
    animation: shadow .5s linear infinite;
  }
  @keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.2);}
  }

  @keyframes rotate {
    0% {
    transform: translateY(0) ;
  }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(20px) scale(1.1, 0.9);
       
    }
    75% {
        ransform: translateY(10px) ;
    }
    100% {
        transform: translateY(0) ;
    }
  }  
</style>


