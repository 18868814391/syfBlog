(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-416d3e4c"],{"510e":function(t,e,a){"use strict";a("5503")},5215:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boob-page"},[a("div",{staticClass:"inner draw",on:{mousemove:function(e){return t.beginPath(e)}}},[a("div",{staticClass:"wrap"},[a("canvas",{staticClass:"fl",attrs:{id:"canvas",width:"600",height:"400"},on:{mousedown:function(e){return t.canvasDown(e)},mouseup:function(e){return t.canvasUp(e)},mousemove:function(e){return t.canvasMove(e)},touchstart:function(e){return t.canvasDown(e)},touchend:function(e){return t.canvasUp(e)},touchmove:function(e){return t.canvasMove(e)}}}),a("div",{staticClass:"fl",attrs:{id:"control"}},[a("div",{attrs:{id:"canvas-color"}},[a("h5",[t._v(" 画笔颜色")]),a("ul",t._l(t.colors,(function(e,n){return a("li",{key:n,class:{active:t.config.lineColor===e},style:{background:e},on:{click:function(a){return t.setColor(e)}}})})),0)]),a("div",{attrs:{id:"canvas-brush"}},[a("h5",[t._v("画笔大小")]),t._l(t.brushs,(function(e,n){return a("span",{key:n,class:[e.className,{active:t.config.lineWidth===e.lineWidth}],on:{click:function(a){return t.setBrush(e.lineWidth)}}},[t._v(t._s(e.name))])}))],2),a("div",{attrs:{id:"canvas-control"}},[a("h5",[t._v("操作")]),t._l(t.controls,(function(e,n){return a("span",{key:n,class:e.className,attrs:{title:e.title},on:{click:function(a){return t.controlCanvas(e.action)}}},[t._v(t._s(e.name))])}))],2),a("div",{attrs:{id:"canvas-drawImage"}},[a("h5",[t._v("生成图像")]),a("button",{staticClass:"drawImage",on:{click:function(e){return t.getImage()}}},[t._v("生成")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl.length,expression:"imgUrl.length"}],attrs:{id:"img-box"}},t._l(t.imgUrl,(function(e,n){return a("div",{key:n,staticClass:"img-item"},[a("img",{attrs:{src:e}}),a("span",{staticClass:"fa fa-close",on:{click:function(a){return t.removeImg(e)}}})])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl.length,expression:"imgUrl.length"}],attrs:{id:"img-box2"}},t._l(t.imgUrl,(function(e,n){return a("div",{key:n,staticClass:"img-item22"},[a("button",{on:{click:function(a){return t.removeImg(e)}}},[t._v("移除")]),a("img",{attrs:{src:e}})])})),0),a("van-popup",{model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[a("div",{staticClass:"poup1-con"},[a("div",[t._v("给你的大作起个名吧")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.upname,expression:"upname"}],attrs:{id:"",type:"text",name:""},domProps:{value:t.upname},on:{input:function(e){e.target.composing||(t.upname=e.target.value)}}}),a("div",{staticClass:"poup1-con-op"},[a("button",{on:{click:function(e){t.show1=!t.show1}}},[t._v("取消")]),a("button",{on:{click:function(e){t.show1=!t.show1,t.show2=!0}}},[t._v("确认")])])])]),a("van-popup",{model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}},[a("div",{staticClass:"poup1-con"},[a("div",[t._v("来一句介绍吧")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.upmsg,expression:"upmsg"}],attrs:{id:"",type:"text",name:""},domProps:{value:t.upmsg},on:{input:function(e){e.target.composing||(t.upmsg=e.target.value)}}}),a("div",{staticClass:"poup1-con-op"},[a("button",{on:{click:function(e){t.show2=!t.show2}}},[t._v("取消")]),a("button",{on:{click:function(e){return t.prepre()}}},[t._v("确认")])])])]),a("div",{staticClass:"others"},[a("button",{on:{click:t.goMore}},[t._v("查看更多")])])],1)},s=[],o=(a("9cd1"),a("fd65")),i=(a("22ec"),a("bf33")),r=a("caaf"),c=a.n(r),l=a("365c"),h={components:{[i["a"].name]:i["a"],[o["a"].name]:o["a"]},data(){return{show1:!1,show2:!1,upImg:"",upname:"",upmsg:"",colors:["#fef4ac","#0018ba","#ffc200","#f32f15","#cccccc","#5ab639"],brushs:[{className:"small fa fa-paint-brush",lineWidth:3,name:"细"},{className:"middle fa fa-paint-brush",lineWidth:6,name:"中"},{className:"big fa fa-paint-brush",lineWidth:12,name:"粗"}],context:{},imgUrl:[],canvasMoveUse:!0,preDrawAry:[],nextDrawAry:[],middleAry:[],config:{lineWidth:1,lineColor:"#f2849e",shadowBlur:2}}},computed:{controls(){return[{title:"上一步",action:"prev",className:this.preDrawAry.length?"active fa fa-reply":"fa fa-reply",name:"prev"},{title:"下一步",action:"next",className:this.nextDrawAry.length?"active fa fa-share":"fa fa-share",name:"next"},{title:"清除",action:"clear",className:this.preDrawAry.length||this.nextDrawAry.length?"active fa fa-trash":"fa fa-trash",name:"clear"}]}},created(){this.$emit("setNav","在线涂鸦画板")},mounted(){const t=document.querySelector("#canvas");this.context=t.getContext("2d"),this.initDraw(),this.setCanvasStyle(),document.querySelector("#footer").classList.add("hide-footer"),document.querySelector("body").classList.add("fix-body")},destroyed(){document.querySelector("#footer").classList.remove("hide-footer"),document.querySelector("body").classList.remove("fix-body")},methods:{goMore(){this.$router.push({path:"/boobMore"})},isPc(){const t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];let a=!0;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>0){a=!1;break}return a},removeImg(t){this.imgUrl=this.imgUrl.filter(e=>e!==t)},initDraw(){const t=this.context.getImageData(0,0,600,400);this.middleAry.push(t)},canvasMove(t){if(this.canvasMoveUse){console.log("canvasMove");const e=t.target;let a,n;this.isPc()?(a=t.clientX-e.parentNode.offsetLeft,n=t.clientY-e.parentNode.offsetTop):(a=t.changedTouches[0].clientX-e.parentNode.offsetLeft,n=t.changedTouches[0].clientY-e.parentNode.offsetTop),this.context.lineTo(a,n),this.context.stroke()}},beginPath(t){const e=document.querySelector("#canvas");t.target!==e&&(console.log("beginPath"),this.context.beginPath())},canvasUp(t){console.log("canvasUp");const e=this.context.getImageData(0,0,600,400);this.nextDrawAry.length?(this.middleAry=[],this.middleAry=this.middleAry.concat(this.preDrawAry),this.middleAry.push(e),this.nextDrawAry=[]):this.middleAry.push(e),this.canvasMoveUse=!1},canvasDown(t){console.log("canvasDown"),this.canvasMoveUse=!0;const e=t.clientX-t.target.parentNode.offsetLeft,a=t.clientY-t.target.parentNode.offsetTop;this.setCanvasStyle(),this.context.beginPath(),this.context.moveTo(e,a),console.log("moveTo",e,a);const n=this.context.getImageData(0,0,600,400);this.preDrawAry.push(n)},setColor(t){this.config.lineColor=t},setBrush(t){this.config.lineWidth=t},controlCanvas(t){switch(t){case"prev":if(this.preDrawAry.length){const t=this.preDrawAry.pop(),e=this.middleAry[this.preDrawAry.length+1];this.nextDrawAry.push(e),this.context.putImageData(t,0,0)}break;case"next":if(this.nextDrawAry.length){const t=this.nextDrawAry.pop(),e=this.middleAry[this.middleAry.length-this.nextDrawAry.length-2];this.preDrawAry.push(e),this.context.putImageData(t,0,0)}break;case"clear":this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.preDrawAry=[],this.nextDrawAry=[],this.middleAry=[this.middleAry[0]];break}},getImage(){const t=this;i["a"].loading({mask:!0,message:"处理中..."});const e=document.querySelector("#canvas"),a=e.toDataURL("image/png");console.log(a),this.imgUrl.push(a),this.compress(a,150,.5).then((function(e){i["a"].clear(),console.log(e);let a=e;t.upImg=a.replace(new RegExp("\\+","g"),"%2B"),t.show1=!0}))},prepre(){this.uploadImg()},uploadImg(){const t=this;let e=c()().format("MMMM Do YYYY, h:mm:ss a");i["a"].loading({mask:!0,message:"提交中..."}),Object(l["q"])({content:t.upImg,msg:t.upmsg,Thename:t.upname,updataTime:e}).then(e=>{i["a"].clear(),t.show2=!1,0==e.data.errcode&&(Object(i["a"])("已经上传好了。我留下了。"),t.controlCanvas("clear"))}).catch(t=>{i["a"].clear()})},setCanvasStyle(){this.context.lineWidth=this.config.lineWidth,this.context.shadowBlur=this.config.shadowBlur,this.context.shadowColor=this.config.lineColor,this.context.strokeStyle=this.config.lineColor},compress(t,e,a){var n,s,o=function(t){var e=t.split(","),a=e[0].match(/:(.*?);/)[1];return a},i=new Image,r=new Promise(t=>i.onload=t);return i.src=t,r.then(()=>{n=i.width,s=i.height;var r=document.createElement("canvas"),c=r.getContext("2d");Math.max(n,s)>e?n>s?(r.width=e,r.height=e*s/n):(r.height=e,r.width=e*n/s):(r.width=n,r.height=s),c.clearRect(0,0,r.width,r.height),c.drawImage(i,0,0,r.width,r.height);var l=r.toDataURL(o(t),a);return l})}}},u=h,d=(a("510e"),a("cba8")),m=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=m.exports},5503:function(t,e,a){}}]);