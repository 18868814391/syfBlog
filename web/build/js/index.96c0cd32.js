(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"5cf7":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}var e={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,o){function i(n,i,a){if("undefined"!==typeof document){a=t({},o,a),"number"===typeof a.expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in a)a[s]&&(r+="; "+s,!0!==a[s]&&(r+="="+a[s].split(";")[0]));return document.cookie=n+"="+e.write(i,n)+r}}function a(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var a=n[i].split("="),r=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(o[s]=e.read(r,s),t===s)break}catch(c){}}return t?o[t]:o}}return Object.create({set:i,get:a,remove:function(e,n){i(e,"",t({},n,{expires:-1}))},withAttributes:function(e){return n(this.converter,t({},this.attributes,e))},withConverter:function(e){return n(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(e)}})}var o=n(e,{path:"/"});return o}))},"79f0":function(t,e,n){t.exports=n.p+"img/beian.d0289dc0.png"},"7abe":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexPage"},[t.admin?n("div",{staticClass:"app-head",staticStyle:{fontSize:"14px"}},[t._v(" 欢迎你啊！"+t._s(t.Thename)+" "),n("span",{staticStyle:{fontSize:"12px"},on:{click:t.logOut}},[t._v("退出")])]):n("div",{staticClass:"app-head"},[n("div",{on:{click:t.goLogin}},[t._v("登陆")]),n("div",{on:{click:t.goRegister}},[t._v("注册")])]),n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban liuyanpos1"},[n("disappearBtn",{attrs:{title:"留言板",rout:"footprint",idn:"id1"}})],1),n("div",{staticClass:"liuyanban liuyanpos2"},[n("disappearBtn",{attrs:{title:"聊天室",rout:"chatRoom",idn:"id2"}})],1),n("div",{staticClass:"liuyanban liuyanpos3"},[n("disappearBtn",{attrs:{title:"涂鸦板",rout:"boobBrand",idn:"id3"}})],1),n("div",{staticClass:"liuyanban liuyanpos4"},[n("disappearBtn",{attrs:{title:"1024",rout:"game1",idn:"id4"}})],1),n("div",{staticClass:"liuyanban liuyanpos5",on:{click:function(e){return t.sweep()}}},[n("disappearBtn",{attrs:{title:"扫一扫",idn:"id5"}})],1),n("div",{staticClass:"liuyanban liuyanpos6",on:{click:function(e){return t.goLive()}}},[n("disappearBtn",{attrs:{title:"视频聊天",idn:"id6"}})],1),n("div",{staticClass:"liuyanban liuyanpos7",on:{click:function(e){return t.goCoco()}}},[n("disappearBtn",{attrs:{title:"cocos",idn:"id7"}})],1),n("div",{staticClass:"liuyanban liuyanpos8",on:{click:function(e){return t.goThree()}}},[n("disappearBtn",{attrs:{title:"threeJs",idn:"id8"}})],1),n("br"),n("navTBox",{attrs:{taber:"工作笔记",rout:"blog",sum:7,ind:1}}),n("br"),n("navTBox",{attrs:{taber:"笔记上传",rout:"blogUpload",sum:7,ind:2}}),n("br"),n("navTBox",{attrs:{taber:"小说",rout:"read",sum:7,ind:4}}),n("br"),n("navTBox",{attrs:{taber:"文件夹",rout:"myfile",sum:7,ind:6}}),n("br"),n("navTBox",{attrs:{taber:"关于本站",rout:"aboutMe",sum:7,ind:7}})],1),t._m(0),n("van-popup",{model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("div",{staticClass:"pop",on:{click:function(e){return t.closePop()}}},[t._v(t._s(t.sweepStr))])]),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{textAlign:"center",marginTop:"40px"}},[n("a",{attrs:{href:"http://www.beian.miit.gov.cn/"}},[t._v("浙ICP备19028592号")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{padding:"20px 0"}},[o("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402003945"}},[o("img",{staticStyle:{float:"left"},attrs:{src:n("79f0")}}),o("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[t._v("浙公网安备 33010402003945号")])])])}],a=(n("9cd1"),n("fd65")),r=(n("22ec"),n("bf33")),s=n("90fe"),c=n("7917"),u=n("b8cd"),p=n("27ab"),d=n("7b04"),l=n.n(d),h=n("5cf7"),f=n.n(h),g={components:{[r["a"].name]:r["a"],[a["a"].name]:a["a"],[c["default"].name]:c["default"],[u["default"].name]:u["default"],[p["default"].name]:p["default"]},data(){return{sign:"",admin:Object(s["b"])(),Thename:Object(s["a"])(),position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:"",signature:"",showPop:!1,sweepStr:""}},created(){},mounted(){const t=this;setTimeout((function(){t.signature=sessionStorage.getItem("wxsignature"),t.signature&&l.a.config({debug:!1,appId:"wx3352249676449b29",timestamp:"1414587457",nonceStr:"syf",signature:t.signature,jsApiList:["checkJsApi","getLocation","scanQRCode","openLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]})}),1e3)},methods:{goLogin(){this.$router.push({path:"/login"})},goRegister(){this.$router.push({path:"/register"})},logOut(){f.a.set("admin","",{expires:-1}),f.a.set("Thename","".Thename,{expires:-1}),window.location.reload()},goUpload(){this.$router.push({path:"/upLoad"})},goRead(){this.$router.push({path:"/read"})},goCommon(){this.$router.push({path:"/myfile"})},goBlogUpload(){this.$router.push({path:"/blogUpload"})},goBlog(){this.$router.push({path:"/blog"})},goIM(){this.$router.push({path:"/session"})},goMap(){this.$router.push({path:"/map"})},goMusic(){this.$router.push({path:"/music"})},goMAD(){this.$router.push({path:"/mad"})},goAnime(){this.$router.push({path:"/anime"})},goCoco(){this.$router.push({path:"/cocos"})},gofootprint(){this.$router.push({path:"/footprint"})},aboutMe(){this.$router.push({path:"/aboutMe"})},gochatRoom(){this.$router.push({path:"/chatRoom"})},goThree(){window.location.href="https://www.shenyifan.top/threeJs/#/"},sweep(){const t=this;return new Promise((e,n)=>{l.a.ready((function(){l.a.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){console.log(e.resultStr);var n=e.resultStr;t.sweepStr=n,t.showPop=!0}})})),e()})},closePop(){this.showPop=!1},goLive(){window.location.href="https://www.shenyifan.top/live/"}}},m=g,v=(n("958c"),n("cba8")),b=Object(v["a"])(m,o,i,!1,null,null,null);e["default"]=b.exports},"90fe":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var o=n("5cf7"),i=n.n(o);function a(){return i.a.get("Thename")}function r(){return i.a.get("admin")}},"958c":function(t,e,n){"use strict";n("d1e8")},d1e8:function(t,e,n){}}]);