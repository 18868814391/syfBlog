(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"5cf7":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}var e={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,i){function o(n,o,a){if("undefined"!==typeof document){a=t({},i,a),"number"===typeof a.expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in a)a[s]&&(r+="; "+s,!0!==a[s]&&(r+="="+a[s].split(";")[0]));return document.cookie=n+"="+e.write(o,n)+r}}function a(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],i={},o=0;o<n.length;o++){var a=n[o].split("="),r=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(i[s]=e.read(r,s),t===s)break}catch(u){}}return t?i[t]:i}}return Object.create({set:o,get:a,remove:function(e,n){o(e,"",t({},n,{expires:-1}))},withAttributes:function(e){return n(this.converter,t({},this.attributes,e))},withConverter:function(e){return n(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(e)}})}var i=n(e,{path:"/"});return i}))},"79f0":function(t,e,n){t.exports=n.p+"img/beian.d0289dc0.png"},"7abe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexPage"},[t.admin?n("div",{staticClass:"app-head",staticStyle:{fontSize:"14px"}},[t._v(" 欢迎你啊！"+t._s(t.Thename)+" "),n("span",{staticStyle:{fontSize:"12px"},on:{click:t.logOut}},[t._v("退出")])]):n("div",{staticClass:"app-head"},[n("div",{on:{click:t.goLogin}},[t._v("登陆")]),n("div",{on:{click:t.goRegister}},[t._v("注册")])]),n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban liuyanpos1"},[n("disappearBtn",{attrs:{title:"留言板",rout:"footprint",idn:"id1"}})],1),n("div",{staticClass:"liuyanban liuyanpos2"},[n("disappearBtn",{attrs:{title:"聊天室",rout:"chatRoom",idn:"id2"}})],1),n("div",{staticClass:"liuyanban liuyanpos3"},[n("disappearBtn",{attrs:{title:"涂鸦板",rout:"boobBrand",idn:"id3"}})],1),n("div",{staticClass:"liuyanban liuyanpos4"},[n("disappearBtn",{attrs:{title:"1024",rout:"game1",idn:"id4"}})],1),n("div",{staticClass:"liuyanban liuyanpos5",on:{click:function(e){return t.sweep()}}},[n("disappearBtn",{attrs:{title:"扫一扫",idn:"id5"}})],1),n("div",{staticClass:"liuyanban liuyanpos6",on:{click:function(e){return t.goLive()}}},[n("disappearBtn",{attrs:{title:"视频聊天",idn:"id6"}})],1),n("div",{staticClass:"liuyanban liuyanpos7",on:{click:function(e){return t.goCoco()}}},[n("disappearBtn",{attrs:{title:"cocos",idn:"id7"}})],1),n("div",{staticClass:"liuyanban liuyanpos8",on:{click:function(e){return t.goThree()}}},[n("disappearBtn",{attrs:{title:"threeJs",idn:"id8"}})],1),n("br"),n("navTBox",{attrs:{taber:"syf笔记",rout:"blog",sum:7,ind:1}}),n("br"),n("navTBox",{attrs:{taber:"blog upload",rout:"blogUpload",sum:7,ind:2}}),n("br"),n("navTBox",{attrs:{taber:"novel",rout:"read",sum:7,ind:4}}),n("br"),n("navTBox",{attrs:{taber:"文件夹",rout:"myfile",sum:7,ind:6}}),n("br"),n("navTBox",{attrs:{taber:"关于本站",rout:"aboutMe",sum:7,ind:7}})],1),t._m(0),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{textAlign:"center",marginTop:"40px"}},[n("a",{attrs:{href:"http://www.beian.miit.gov.cn/"}},[t._v("浙ICP备19028592号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"300px",margin:"0 auto",padding:"20px 0"}},[i("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402003945"}},[i("img",{staticStyle:{float:"left"},attrs:{src:n("79f0")}}),i("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[t._v("浙公网安备 33010402003945号")])])])}],a=(n("22ec"),n("bf33")),r=n("90fe"),s=n("7917"),u=n("b8cd"),c=n("27ab"),p=n("7b04"),d=n.n(p),l=n("5cf7"),h=n.n(l),f={components:{[a["a"].name]:a["a"],[s["default"].name]:s["default"],[u["default"].name]:u["default"],[c["default"].name]:c["default"]},data(){return{sign:"",admin:Object(r["b"])(),Thename:Object(r["a"])(),position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:"",signature:""}},created(){},mounted(){const t=this;setTimeout((function(){t.signature=sessionStorage.getItem("wxsignature"),t.signature&&d.a.config({debug:!1,appId:"wx3352249676449b29",timestamp:"1414587457",nonceStr:"syf",signature:t.signature,jsApiList:["checkJsApi","getLocation","scanQRCode","openLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]})}),1e3)},methods:{goLogin(){this.$router.push({path:"/login"})},goRegister(){this.$router.push({path:"/register"})},logOut(){h.a.set("admin","",{expires:-1}),h.a.set("Thename","".Thename,{expires:-1}),window.location.reload()},goUpload(){this.$router.push({path:"/upLoad"})},goRead(){this.$router.push({path:"/read"})},goCommon(){this.$router.push({path:"/myfile"})},goBlogUpload(){this.$router.push({path:"/blogUpload"})},goBlog(){this.$router.push({path:"/blog"})},goIM(){this.$router.push({path:"/session"})},goMap(){this.$router.push({path:"/map"})},goMusic(){this.$router.push({path:"/music"})},goMAD(){this.$router.push({path:"/mad"})},goAnime(){this.$router.push({path:"/anime"})},goCoco(){this.$router.push({path:"/cocos"})},gofootprint(){this.$router.push({path:"/footprint"})},aboutMe(){this.$router.push({path:"/aboutMe"})},gochatRoom(){this.$router.push({path:"/chatRoom"})},goThree(){window.location.href="https://www.shenyifan.top/threeJs/#/"},sweep(){return new Promise((t,e)=>{d.a.ready((function(){d.a.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(t){}})})),t()})},goLive(){window.location.href="https://www.shenyifan.top/live/"}}},g=f,m=(n("958c"),n("cba8")),b=Object(m["a"])(g,i,o,!1,null,null,null);e["default"]=b.exports},"90fe":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var i=n("5cf7"),o=n.n(i);function a(){return o.a.get("Thename")}function r(){return o.a.get("admin")}},"958c":function(t,e,n){"use strict";n("d1e8")},d1e8:function(t,e,n){}}]);