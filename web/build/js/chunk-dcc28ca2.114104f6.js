(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcc28ca2"],{e987:function(e,t,a){},eb3c:function(e,t,a){"use strict";a("e987")},f94a:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"MyBread"},[a("h2",{staticClass:"MB-tit"},[e._v(e._s(e.con.title))]),a("div",{staticClass:"MB-time"},[e._v(" 由用户"+e._s(e.con.adm)+"在 "+e._s(e.con.updatatime)+"上传 ")]),a("div",{staticClass:"ql-editor BlogrichTxt",domProps:{innerHTML:e._s(e.richText)}})])},o=[],n=(a("22ec"),a("bf33")),s=a("365c"),i=(a("b881"),{components:{[n["a"].name]:n["a"]},data(){return{id:"",con:"",richText:"",toast:"",timer:""}},beforeDestroy(){window.scrollTo(0,0)},created(){const e=this,t=n["a"].loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"loading... 3 秒"});let a=3;const c=setInterval(()=>{a--,a>=0?t.message=`loading... ${a} 秒`:a<0&&a>=-3?t.message="好吧，我的服务器是捡来的":a<-3&&a>-6?t.message="或许是你的网络问题，我关掉了嗷":a<=-6&&(n["a"].clear(),clearInterval(c))},1e3);this.id=this.$route.query.id,Object(s["b"])({id:e.id}).then(t=>{n["a"].clear(),clearInterval(c),e.con=t.data.data,e.richText=e.con.content,console.log(e.richText),e.goTop()}).catch(()=>{n["a"].clear(),clearInterval(c)})},methods:{goTop(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}}),r=i,l=(a("eb3c"),a("cba8")),d=Object(l["a"])(r,c,o,!1,null,null,null);t["default"]=d.exports}}]);