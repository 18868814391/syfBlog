(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"5cf7":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}var e={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,i){function o(n,o,a){if("undefined"!==typeof document){a=t({},i,a),"number"===typeof a.expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in a)a[s]&&(r+="; "+s,!0!==a[s]&&(r+="="+a[s].split(";")[0]));return document.cookie=n+"="+e.write(o,n)+r}}function a(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],i={},o=0;o<n.length;o++){var a=n[o].split("="),r=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(i[s]=e.read(r,s),t===s)break}catch(c){}}return t?i[t]:i}}return Object.create({set:o,get:a,remove:function(e,n){o(e,"",t({},n,{expires:-1}))},withAttributes:function(e){return n(this.converter,t({},this.attributes,e))},withConverter:function(e){return n(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(e)}})}var i=n(e,{path:"/"});return i}))},"6ead":function(t,e,n){"use strict";var i=n("7c9e").forEach,o=n("a3a6"),a=o("forEach");t.exports=a?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"724c":function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},"79f0":function(t,e,n){t.exports=n.p+"img/beian.d0289dc0.png"},"7abe":function(t,e,n){"use strict";n.r(e);var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexPage"},[t.admin?n("div",{staticClass:"app-head",staticStyle:{fontSize:"14px"}},[t._v(" 欢迎你啊！"+t._s(t.Thename)+" "),n("span",{staticStyle:{fontSize:"12px"},on:{click:t.logOut}},[t._v("退出")])]):n("div",{staticClass:"app-head"},[n("div",{on:{click:t.goLogin}},[t._v("登陆")]),n("div",{on:{click:t.goRegister}},[t._v("注册")])]),n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban liuyanpos1"},[n("disappearBtn",{attrs:{title:"留言板",rout:"footprint",idn:"id1"}})],1),n("div",{staticClass:"liuyanban liuyanpos2"},[n("disappearBtn",{attrs:{title:"聊天室",rout:"chatRoom",idn:"id2"}})],1),n("div",{staticClass:"liuyanban liuyanpos3"},[n("disappearBtn",{attrs:{title:"涂鸦板",rout:"boobBrand",idn:"id3"}})],1),n("div",{staticClass:"liuyanban liuyanpos4"},[n("disappearBtn",{attrs:{title:"1024",rout:"game1",idn:"id4"}})],1),n("div",{staticClass:"liuyanban liuyanpos5",on:{click:function(e){return t.sweep()}}},[n("disappearBtn",{attrs:{title:"扫一扫",idn:"id5"}})],1),n("div",{staticClass:"liuyanban liuyanpos6",on:{click:function(e){return t.goLive()}}},[n("disappearBtn",{attrs:{title:"视频聊天",idn:"id6"}})],1),n("div",{staticClass:"liuyanban liuyanpos7",on:{click:function(e){return t.goCoco()}}},[n("disappearBtn",{attrs:{title:"cocos",idn:"id7"}})],1),n("div",{staticClass:"liuyanban liuyanpos8",on:{click:function(e){return t.goThree()}}},[n("disappearBtn",{attrs:{title:"threeJs",idn:"id8"}})],1),n("br"),n("navTBox",{attrs:{taber:"syf笔记",rout:"blog",sum:7,ind:1}}),n("br"),n("navTBox",{attrs:{taber:"blog upload",rout:"blogUpload",sum:7,ind:2}}),n("br"),n("navTBox",{attrs:{taber:"novel",rout:"read",sum:7,ind:4}}),n("br"),n("navTBox",{attrs:{taber:"文件夹",rout:"myfile",sum:7,ind:6}}),n("br"),n("navTBox",{attrs:{taber:"关于本站",rout:"aboutMe",sum:7,ind:7}})],1),t._m(0),n("van-popup",{model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("div",{staticClass:"pop",on:{click:function(e){return t.closePop()}}},[t._v(t._s(t.sweepStr))])]),t._m(1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{textAlign:"center",marginTop:"40px"}},[n("a",{attrs:{href:"http://www.beian.miit.gov.cn/"}},[t._v("浙ICP备19028592号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"20px 0"}},[i("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402003945"}},[i("img",{staticStyle:{float:"left"},attrs:{src:n("79f0")}}),i("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[t._v("浙公网安备 33010402003945号")])])])}],r=n("724c"),s=(n("9cd1"),n("fd65")),c=(n("22ec"),n("bf33")),u=(n("3e22"),n("a9b6"),n("90fe")),l=n("7917"),p=n("b8cd"),d=n("27ab"),f=n("7b04"),h=n.n(f),g=n("5cf7"),v=n.n(g),b={components:(i={},Object(r["a"])(i,c["a"].name,c["a"]),Object(r["a"])(i,s["a"].name,s["a"]),Object(r["a"])(i,l["default"].name,l["default"]),Object(r["a"])(i,p["default"].name,p["default"]),Object(r["a"])(i,d["default"].name,d["default"]),i),data:function(){return{sign:"",admin:Object(u["b"])(),Thename:Object(u["a"])(),position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:"",signature:"",showPop:!1,sweepStr:""}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.signature=sessionStorage.getItem("wxsignature"),t.signature&&h.a.config({debug:!1,appId:"wx3352249676449b29",timestamp:"1414587457",nonceStr:"syf",signature:t.signature,jsApiList:["checkJsApi","getLocation","scanQRCode","openLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]})}),1e3)},methods:{goLogin:function(){this.$router.push({path:"/login"})},goRegister:function(){this.$router.push({path:"/register"})},logOut:function(){v.a.set("admin","",{expires:-1}),v.a.set("Thename","".Thename,{expires:-1}),window.location.reload()},goUpload:function(){this.$router.push({path:"/upLoad"})},goRead:function(){this.$router.push({path:"/read"})},goCommon:function(){this.$router.push({path:"/myfile"})},goBlogUpload:function(){this.$router.push({path:"/blogUpload"})},goBlog:function(){this.$router.push({path:"/blog"})},goIM:function(){this.$router.push({path:"/session"})},goMap:function(){this.$router.push({path:"/map"})},goMusic:function(){this.$router.push({path:"/music"})},goMAD:function(){this.$router.push({path:"/mad"})},goAnime:function(){this.$router.push({path:"/anime"})},goCoco:function(){this.$router.push({path:"/cocos"})},gofootprint:function(){this.$router.push({path:"/footprint"})},aboutMe:function(){this.$router.push({path:"/aboutMe"})},gochatRoom:function(){this.$router.push({path:"/chatRoom"})},goThree:function(){window.location.href="https://www.shenyifan.top/threeJs/#/"},sweep:function(){var t=this;return new Promise((function(e,n){h.a.ready((function(){h.a.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){console.log(e.resultStr);var n=e.resultStr;t.sweepStr=n,t.showPop=!0}})})),e()}))},closePop:function(){this.showPop=!1},goLive:function(){window.location.href="https://www.shenyifan.top/live/"}}},m=b,x=(n("958c"),n("cba8")),w=Object(x["a"])(m,o,a,!1,null,null,null);e["default"]=w.exports},"89cf":function(t,e,n){"use strict";var i=n("c3fb"),o=n("7faf"),a=n("e7ec"),r=n("7314"),s=n("4d08"),c=n("16bc"),u=n("41be"),l=n("4228"),p=n("3975"),d=n("568e"),f=n("78f8"),h=n("0e65"),g=n("9535"),v=n("c64f"),b=n("ba60"),m=n("8caa"),x=n("b68d"),w=m.UNSUPPORTED_Y,y=4294967295,C=Math.min,R=[].push,k=a(/./.exec),B=a(R),S=a("".slice),$=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=f(u(this)),r=void 0===n?y:n>>>0;if(0===r)return[];if(void 0===t)return[a];if(!s(t))return o(e,a,t,r);var c,l,p,d=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,h+"g");while(c=o(b,m,a)){if(l=m.lastIndex,l>v&&(B(d,S(a,v,c.index)),c.length>1&&c.index<a.length&&i(R,d,g(c,1)),p=c[0].length,v=l,d.length>=r))break;m.lastIndex===c.index&&m.lastIndex++}return v===a.length?!p&&k(m,"")||B(d,""):B(d,S(a,v)),d.length>r?g(d,0,r):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:o(e,this,t,n)}:e,[function(e,n){var i=u(this),r=void 0==e?void 0:h(e,t);return r?o(r,e,i,n):o(a,f(i),e,n)},function(t,i){var o=c(this),r=f(t),s=n(a,o,r,i,a!==e);if(s.done)return s.value;var u=l(o,RegExp),h=o.unicode,g=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(w?"g":"y"),b=new u(w?"^(?:"+o.source+")":o,g),m=void 0===i?y:i>>>0;if(0===m)return[];if(0===r.length)return null===v(b,r)?[r]:[];var x=0,R=0,k=[];while(R<r.length){b.lastIndex=w?0:R;var $,_=v(b,w?S(r,R):r);if(null===_||($=C(d(b.lastIndex+(w?R:0)),r.length))===x)R=p(r,R,h);else{if(B(k,S(r,x,R)),k.length===m)return k;for(var P=1;P<=_.length-1;P++)if(B(k,_[P]),k.length===m)return k;R=x=$}}return B(k,S(r,x)),k}]}),!$,w)},"90fe":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));n("3fab"),n("89cf"),n("a9b6"),n("c284"),n("ed02");var i=n("5cf7"),o=n.n(i);function a(){return o.a.get("Thename")}function r(){return o.a.get("admin")}},"958c":function(t,e,n){"use strict";n("d1e8")},a3a6:function(t,e,n){"use strict";var i=n("b68d");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},c284:function(t,e,n){var i=n("c6da"),o=n("3ec5"),a=n("77bc"),r=n("6ead"),s=n("d28a"),c=function(t){if(t&&t.forEach!==r)try{s(t,"forEach",r)}catch(e){t.forEach=r}};for(var u in o)o[u]&&c(i[u]&&i[u].prototype);c(a)},d1e8:function(t,e,n){}}]);