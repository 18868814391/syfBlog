(function(t){function e(e){for(var a,o,i=e[0],r=e[1],s=e[2],d=0,l=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);f&&f(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(a=!1)}a&&(u.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},c={app:0},u=[];function i(t){return r.p+"js/"+({error:"error",index:"index"}[t]||t)+"-legacy."+{"chunk-09b1d7fe":"5643b7f9","chunk-0bef602b":"364e11ec","chunk-0f9f56c5":"23a5f770","chunk-5a606b8e":"01f2aa40","chunk-a26248bc":"f00eb7be","chunk-a889e70e":"48d068c4","chunk-aa87da68":"7a0670aa","chunk-18e63b12":"367367f0","chunk-1c134234":"1d83d9ad","chunk-1e9e8d0b":"7fb41237","chunk-41e2334e":"5376f85a","chunk-4ede64f0":"213f58b9","chunk-6159e5aa":"3a8b7851","chunk-6731b35c":"1a937298","chunk-681e2c11":"f3df277f","chunk-6e8b1aef":"1ad9336a","chunk-c40c665a":"6354807e","chunk-f38ac7cc":"ce90f9d0",error:"f19b907d",index:"2bbe1334"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-09b1d7fe":1,"chunk-0bef602b":1,"chunk-5a606b8e":1,"chunk-a26248bc":1,"chunk-a889e70e":1,"chunk-aa87da68":1,"chunk-18e63b12":1,"chunk-1c134234":1,"chunk-1e9e8d0b":1,"chunk-41e2334e":1,"chunk-4ede64f0":1,"chunk-6159e5aa":1,"chunk-6731b35c":1,"chunk-681e2c11":1,"chunk-6e8b1aef":1,"chunk-c40c665a":1,"chunk-f38ac7cc":1,error:1,index:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({error:"error",index:"index"}[t]||t)+"."+{"chunk-09b1d7fe":"b24935e2","chunk-0bef602b":"83497280","chunk-0f9f56c5":"31d6cfe0","chunk-5a606b8e":"803560a6","chunk-a26248bc":"fed69024","chunk-a889e70e":"501c90eb","chunk-aa87da68":"d0e6106a","chunk-18e63b12":"251e4abc","chunk-1c134234":"262259bd","chunk-1e9e8d0b":"d0424668","chunk-41e2334e":"76a457d2","chunk-4ede64f0":"6bdea874","chunk-6159e5aa":"84801658","chunk-6731b35c":"54ed9271","chunk-681e2c11":"61bd67f3","chunk-6e8b1aef":"b54f67b6","chunk-c40c665a":"4daff674","chunk-f38ac7cc":"7e28c8d6",error:"f9b0a4ed",index:"367130f2"}[t]+".css",c=r.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===a||d===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[t],f.parentNode.removeChild(f),n(u)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=i(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02bc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty"},[a("img",{attrs:{src:n("b45c"),alt:""}}),a("p",[t._v(t._s(t.description))])])},o=[],c={name:"Empty",props:{description:{type:String,default:"暂无内容"}}},u=c,i=(n("12fd"),n("cba8")),r=Object(i["a"])(u,a,o,!1,null,"e460dc0c",null);e["default"]=r.exports},"12fd":function(t,e,n){"use strict";n("4fc8")},2323:function(t,e,n){var a={"./Empty.vue":"02bc","./FloatBall.vue":"7a5e","./disappearBtn.vue":"27ab","./jumpBox.vue":"7917","./navTBox.vue":"b8cd"};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=c,t.exports=o,o.id="2323"},"27ab":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"disappearBtn-page"},[n("div",{staticClass:"divbtn cake",staticStyle:{width:"80px"},on:{click:t.goRoute}},[n("div",{ref:"doom",staticStyle:{width:"80px"},attrs:{id:"btn"}},[t._v(t._s(t.title))])])])},o=[],c={name:"DisappearBtn",props:{title:{type:String,default:function(){return"默认"}},rout:{type:String,default:function(){return"b"}},idn:{type:String,default:function(){return""}}},data:function(){return{}},mounted:function(){},methods:{goRoute:function(){if("b"==this.rout)return!1;this.$router.push({path:"/".concat(this.rout)})}}},u=c,i=(n("e2ab"),n("cba8")),r=Object(i["a"])(u,a,o,!1,null,null,null);e["default"]=r.exports},"33ec":function(t,e,n){},"365c":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return v})),n.d(e,"p",(function(){return g})),n.d(e,"o",(function(){return y})),n.d(e,"r",(function(){return A})),n.d(e,"s",(function(){return k})),n.d(e,"m",(function(){return w})),n.d(e,"q",(function(){return x})),n.d(e,"n",(function(){return P})),n.d(e,"j",(function(){return T}));var a=n("4ff3"),o=n.n(a);o.a.defaults.baseURL="https://www.shenyifan.top/apis/php";var c=o.a.create({timeout:1e4}),u=c;o.a.defaults.baseURL="/node";o.a.create({timeout:1e4});function i(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function r(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function d(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function l(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function f(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function h(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function p(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function m(t){return u({url:"/interaction/footList.php",method:"post",data:t})}function b(t){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function v(t){return u({url:"/yii/web/index.php?r=blog/search",method:"post",data:t})}function g(t){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function y(t){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function A(t){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function k(t){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function w(t){return u({url:"/yii/web/index.php?r=blog/tabs",method:"post",data:t})}function x(t){return u({url:"/yii/web/index.php?r=common/savedood",method:"post",data:t})}function P(t){return u({url:"/yii/web/index.php?r=common/getdood",method:"post",data:t})}function T(t){return u({url:"/wechat/access.php",method:"post",data:t})}},4674:function(t,e,n){},4693:function(t,e,n){},"4fc8":function(t,e,n){},5646:function(t,e,n){"use strict";n("dbeb")},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"debounce",(function(){return Mt})),n.d(a,"isNumber",(function(){return Wt.a}));n("c8ba"),n("5961"),n("7ecd"),n("0185");var o=n("430a"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"app-home",attrs:{id:"pic"},on:{click:function(e){return t.$router.push("/")}}},[n("div",[t._v("首页")])])],1)},u=[],i=n("7b04"),r=n.n(i),s=n("365c"),d={name:"App",data:function(){return{position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:""}},created:function(){Object(s["j"])({}).then((function(t){self.sign=t.data.data,console.log(self.sign),sessionStorage.setItem("wxsignature",self.sign.signature),r.a.config({debug:!1,appId:"wx3352249676449b29",timestamp:"1414587457",nonceStr:"syf",signature:self.sign.signature,jsApiList:["checkJsApi","getLocation","scanQRCode","openLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]})})).catch((function(t){}))},mounted:function(){var t=document.querySelector("#pic");this.w=document.documentElement.clientWidth||document.body.clientWidth,this.h=document.documentElement.clientHeight||document.body.clientHeight,this.x=t.offsetWidth,this.y=t.offsetHeight,t.addEventListener("touchstart",this.down,{passive:!1}),t.addEventListener("touchmove",this.move,{passive:!1})},methods:{down:function(){var t,e=document.querySelector("#pic");t=event.touches?event.touches[0]:event,this.position.x=t.clientX,this.position.y=t.clientY,this.dx=e.offsetLeft,this.dy=e.offsetTop},move:function(){var t,e=document.querySelector("#pic");t=event.touches?event.touches[0]:event,event.preventDefault(),this.nx=t.clientX-this.position.x,this.ny=t.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,this.xPum=this.xPum>0?this.xPum:0,this.yPum=this.yPum>0?this.yPum:0,this.xPum=this.xPum>this.w-this.x?this.w-this.x:this.xPum,this.yPum=this.yPum>this.h-this.y?this.h-this.y:this.yPum,e.style.left=this.xPum+"px",e.style.top=this.yPum+"px"}}},l=d,f=(n("a3da"),n("cba8")),h=Object(f["a"])(l,c,u,!1,null,"cf5ef408",null),p=h.exports,m=n("efbe"),b=(n("44ad"),n("a9b6"),n("2690"),n("d4f9"),n("ac56")),v=[{path:"/404",meta:{title:"找不到页面"},component:function(){return n.e("error").then(n.bind(null,"1db4"))}}],g=[].concat(v,[{path:"*",redirect:"/404"}]),y={path:"/",meta:{cache:!1,title:""},component:function(){return n.e("index").then(n.bind(null,"7abe"))}};o["a"].use(b["a"]);var A=function(){return new b["a"]({mode:"hash",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[y].concat(Object(m["a"])(g),[{path:"/login",name:"login",component:function(){return n.e("chunk-681e2c11").then(n.bind(null,"9ed6"))},meta:{title:"登录",noAnima:!0}},{path:"/register",name:"register",component:function(){return n.e("chunk-c40c665a").then(n.bind(null,"b953"))},meta:{title:"注册",noAnima:!0}},{path:"/blog",name:"blog",component:function(){return n.e("chunk-6159e5aa").then(n.bind(null,"8439"))},meta:{title:"BLOG",noAnima:!0,keepAlive:!0}},{path:"/readBlog",name:"readBlog",component:function(){return n.e("chunk-18e63b12").then(n.bind(null,"f94a"))},meta:{title:"MyBLOG",noAnima:!0}},{path:"/blogUpload",name:"blogUpload",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-aa87da68")]).then(n.bind(null,"59fe"))},meta:{title:"BLOG上传",noAnima:!0}},{path:"/read",name:"read",component:function(){return n.e("chunk-41e2334e").then(n.bind(null,"e694"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage",name:"readPage",component:function(){return n.e("chunk-f38ac7cc").then(n.bind(null,"b0bd"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage2",name:"readPage2",component:function(){return n.e("chunk-09b1d7fe").then(n.bind(null,"b8cc"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage3",name:"readPage3",component:function(){return n.e("chunk-6731b35c").then(n.bind(null,"8c48"))},meta:{title:"浏览",noAnima:!0}},{path:"/footprint",name:"footprint",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-a26248bc")]).then(n.bind(null,"4d83"))},meta:{title:"留言板",noAnima:!0}},{path:"/boobBrand",name:"boobBrand",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-a889e70e")]).then(n.bind(null,"5215"))},meta:{title:"涂鸦板",noAnima:!0}},{path:"/boobMore",name:"boobMore",component:function(){return n.e("chunk-1e9e8d0b").then(n.bind(null,"e0e0"))},meta:{title:"涂鸦板",noAnima:!0}},{path:"/game1",name:"game1",component:function(){return n.e("chunk-0bef602b").then(n.bind(null,"151d"))},meta:{title:"game1",noAnima:!0,keepAlive:!0}},{path:"/chatRoom",name:"chatRoom",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-5a606b8e")]).then(n.bind(null,"9166"))},meta:{title:"聊天室",noAnima:!0}},{path:"/cocos",name:"cocos",component:function(){return n.e("chunk-4ede64f0").then(n.bind(null,"3e06"))},meta:{title:"coco游戏",noAnima:!0}},{path:"/aboutMe",name:"aboutMe",component:function(){return n.e("chunk-6e8b1aef").then(n.bind(null,"4e52"))},meta:{title:"关于本站",noAnima:!0}},{path:"/myfile",name:"myfile",component:function(){return n.e("chunk-1c134234").then(n.bind(null,"55b9"))},meta:{title:"文件夹",noAnima:!0}}])})},k=A();var w=b["a"].prototype.push;b["a"].prototype.push=function(t){return w.call(this,t).catch((function(t){return t}))};var x=k,P=(n("3fab"),n("ed02"),n("7736")),T={cachedRoutes:function(t){return t.auth.cachedRoutes}};o["a"].use(P["a"]);var B=n("d307"),j=B.keys().reduce((function(t,e){var n=e.replace(/^\.\/(.*)\.\w+$/,"$1"),a=B(e);return t[n]=a.default,t}),{}),E=new P["a"].Store({getters:T,modules:j}),L=E,O=(n("be3e"),n("0a18")),S=(n("f479"),n("0b9e")),C=(n("b6c5"),n("a618")),R=(n("3e62"),n("f6d3")),H=(n("9693"),n("065e")),D=(n("716b"),n("2c4f")),Z=(n("e579"),n("beca")),W=(n("6fc8"),n("248d")),M=(n("cbc3"),n("ce6b")),V=(n("6f46"),n("ca4d")),z=(n("cd8a"),n("358f")),F=(n("2f7a"),n("0c3d")),J=(n("d57b"),n("fe83")),X=(n("120c"),n("c994")),Y=(n("7a09"),n("ca0b")),G=(n("742e"),n("0d8e")),I=(n("2bb0"),n("711d")),U=(n("5dc2"),n("22e5")),K=(n("e1f3"),n("849c")),Q=(n("66fa"),n("31d5")),q=(n("c50e"),n("c96b")),N=(n("ee86"),n("0381")),_=(n("c120"),n("0c29")),$=(n("cd5b"),n("b15c")),tt=(n("d236"),n("9efc")),et=(n("22ec"),n("bf33")),nt=(n("69f8"),n("317a")),at=(n("fa30"),n("ca8e")),ot=(n("93db"),n("65d1")),ct=(n("db3e"),n("d6b2")),ut=(n("551c"),n("e5f3")),it=(n("22f0"),n("6fad")),rt=(n("e841"),n("f86a")),st=(n("53d1"),n("61ff")),dt=(n("d2aa"),n("b754")),lt=(n("f2f1"),n("f84b")),ft=(n("f2e9"),n("01a8")),ht=(n("10cc"),n("fe54")),pt=(n("0c97"),n("7ca3")),mt=(n("8dc6"),n("08ed")),bt=(n("0081"),n("37a6")),vt=(n("1c90"),n("b1e7")),gt=(n("bdaa"),n("114f")),yt=(n("ab59"),n("8c9f")),At=(n("3440"),n("088a")),kt=(n("46a3"),n("fde2")),wt=(n("9ba1"),n("94f5")),xt=(n("be2d"),n("50f2")),Pt=(n("9cd1"),n("fd65")),Tt=(n("c5ca"),n("9b05")),Bt=(n("fa5d"),n("69ed")),jt=(n("6f39"),n("24e6")),Et=(n("0841"),n("2d48")),Lt=(n("e800"),n("8967")),Ot=(n("9a2f"),n("e584")),St=(n("378e"),n("ec6b"));o["a"].use(St["a"]),o["a"].use(Lt["a"]).use(Ot["a"]),o["a"].use(Et["a"]),o["a"].use(jt["a"]),o["a"].use(Tt["a"]).use(Bt["a"]),o["a"].use(Pt["a"]),o["a"].use(xt["a"]),o["a"].use(kt["a"]).use(wt["a"]),o["a"].use(At["a"]),o["a"].use(yt["a"]),o["a"].use(gt["a"]),o["a"].use(vt["a"]),o["a"].use(bt["a"]),o["a"].use(mt["a"]),o["a"].use(pt["a"]),o["a"].use(ht["a"]),o["a"].use(ft["a"]),o["a"].use(lt["a"]),o["a"].use(dt["a"]),o["a"].use(st["a"]),o["a"].use(it["a"]).use(rt["a"]),o["a"].use(ut["a"]),o["a"].use(ct["a"]),o["a"].use(ot["a"]),o["a"].use(at["a"]),o["a"].use(nt["a"]),o["a"].use(et["a"]),o["a"].use($["a"]).use(tt["a"]),o["a"].use(_["a"]),o["a"].use(N["a"]),o["a"].use(q["a"]),o["a"].use(Q["a"]),o["a"].use(K["a"]),o["a"].use(U["a"]),o["a"].use(G["a"]).use(I["a"]),o["a"].use(Y["a"]),o["a"].use(J["a"]).use(X["a"]),o["a"].use(z["a"]).use(F["a"]),o["a"].use(V["a"]),o["a"].use(M["a"]),o["a"].use(W["a"]),o["a"].use(Z["a"]),o["a"].use(H["a"]).use(D["a"]),o["a"].use(C["a"]).use(R["a"]),o["a"].use(S["a"]),o["a"].use(O["a"]);var Ct=n("b881"),Rt=n.n(Ct),Ht=(n("121a"),n("7e41"),n("96be"),n("4693"),n("9f35"),n("33ec"),n("6e0c"),n("44ce"),n("c81a")),Dt=n.n(Ht),Zt=n("d370"),Wt=n.n(Zt),Mt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"===typeof t)return Dt()(t,e,{leading:n,trailing:a})},Vt=n("2323"),zt=Vt.keys().reduce((function(t,e){var n=e.replace(/^\.\/(.*)\.\w+$/,"$1"),a=Vt(e);return t[n]=a.default,t}),{}),Ft=function(t){for(var e in zt)t.component(e,zt[e])},Jt={install:Ft},Xt=n("ed3b"),Yt=(n("e186"),n("3e22"),n("38bc")),Gt=n.n(Yt),It=(n("70e7"),function(t){setTimeout((function(){t.name&&t.meta&&t.meta.cache&&L.dispatch("auth/updateCachedRoutes",t.name)}),20)});x.beforeEach(function(){var t=Object(Xt["a"])(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:L.commit("auth/SET_PATHADD",e.path),document.title=e.meta.title,It(e),a();case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()),x.afterEach((function(t,e){Gt.a.done()})),o["a"].prototype.$g=a,o["a"].use(Rt.a),o["a"].use(Jt),o["a"].config.productionTip=!1,new o["a"]({router:x,store:L,render:function(t){return t(p)}}).$mount("#app")},"6e0c":function(t,e,n){},7917:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumpBox-page"},[n("div",{staticClass:"container"},[n("span",{staticClass:"girl"},[t._v("仆")]),n("div",{staticClass:"boys"},[n("span",[t._v("届")]),n("span",[t._v("か")]),n("span",[t._v("な")]),n("span",[t._v("い")])])])])}],c={name:"JumpBox",data:function(){return{}},mounted:function(){},methods:{}},u=c,i=(n("5646"),n("cba8")),r=Object(i["a"])(u,a,o,!1,null,"3e750a1a",null);e["default"]=r.exports},"7a5e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fadeBtn"}},[t.isShow&&"/studentList"!=t.pathAdd&&"/"!=t.pathAdd?n("div",{ref:"dragIcon",staticClass:"dragIcon",style:{left:t.left+"px",top:t.top+"px",width:t.itemWidth+"px",height:t.itemHeight+"px"},on:{touchstart:function(e){return e.stopPropagation(),t.handleTouchStart.apply(null,arguments)},touchmove:function(e){return e.preventDefault(),e.stopPropagation(),t.handleTouchMove(e)},touchend:function(e){return e.stopPropagation(),t.handleTouchEnd.apply(null,arguments)}}},["/location"==t.pathAdd||"/report"==t.pathAdd?n("van-icon",{staticClass:"back",attrs:{name:"wap-home-o"},on:{click:function(e){return t.goHome()}}}):n("van-icon",{staticClass:"back",attrs:{name:"share-o"},on:{click:function(e){return t.goBack()}}})],1):t._e()])},o=[],c=(n("8372"),{props:{text:{type:String,default:"返回"},itemWidth:{type:Number,default:60},itemHeight:{type:Number,default:60}},data:function(){return{left:0,top:0,startToMove:!1,isShow:!0,timer:null,currentTop:null,clientW:document.documentElement.clientWidth,clientH:document.documentElement.clientHeight}},computed:{pathAdd:function(){return this.$store.state.auth.pathAdd}},created:function(){this.left=this.clientW-this.itemWidth-30,this.top=this.clientH/1.3-this.itemHeight/2},mounted:function(){this.bindScrollEvent()},beforeDestroy:function(){this.removeScrollEvent()},methods:{goHome:function(){this.$router.push({path:"/studentList"})},goBack:function(){this.$router.back(-1)},handleTouchStart:function(){this.startToMove=!0,this.$refs.dragIcon.style.transition="none"},handleTouchMove:function(t){var e=t.targetTouches[0].clientX,n=t.targetTouches[0].clientY,a=e<=this.clientW&&e>=0&&n<=this.clientH&&n>=0;this.startToMove&&1===t.targetTouches.length&&a&&(this.left=e-this.itemWidth/2,this.top=n-this.itemHeight/2)},handleTouchEnd:function(){this.left<this.clientW/2?(this.left=30,this.handleIconY()):(this.left=this.clientW-this.itemWidth-30,this.handleIconY()),this.$refs.dragIcon.style.transition="all .3s"},handleIconY:function(){this.top<0?this.top=30:this.top+this.itemHeight>this.clientH&&(this.top=this.clientH-this.itemHeight-30)},bindScrollEvent:function(){window.addEventListener("scroll",this.handleScrollStart)},removeScrollEvent:function(){window.removeEventListener("scroll",this.handleScrollStart)},handleScrollStart:function(){var t=this;this.isShow=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.handleScrollEnd()}),300),this.currentTop=document.documentElement.scrollTop||document.body.scrollTop},handleScrollEnd:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.scrollTop==this.currentTop&&(this.isShow=!0)}}}),u=c,i=(n("ff22"),n("cba8")),r=Object(i["a"])(u,a,o,!1,null,"28496ae4",null);e["default"]=r.exports},a3da:function(t,e,n){"use strict";n("d769")},b45c:function(t,e){t.exports="data:image/png;base64,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"},b8cd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"nt1",staticClass:"navTBox",class:t.start?"navTBoxAnime1":"",on:{click:t.goroute}},[n("div",{ref:"nt2",staticClass:"navTBox2",class:t.start?"navTBoxAnime2":""}),t._v(" "+t._s(t.taber)+" ")])},o=[],c=(n("8372"),{name:"NavTBox",props:{rout:{type:String,default:function(){return"b"}},taber:{type:String,default:function(){return"b"}},sum:{type:Number,default:function(){return 1}},ind:{type:Number,default:function(){return 1}}},data:function(){return{start:!1,end:!0}},created:function(){},mounted:function(){var t=this,e=this.sum,n=this.ind;setTimeout((function(){setInterval((function(){t.start=!0,setTimeout((function(){t.start=!1}),500)}),250*e)}),125*n)},methods:{goroute:function(){this.$router.push({path:"/".concat(this.rout)})}}}),u=c,i=(n("e98d"),n("cba8")),r=Object(i["a"])(u,a,o,!1,null,"3841bada",null);e["default"]=r.exports},c7d4:function(t,e,n){"use strict";n.r(e);n("688d"),n("4fb6");var a={cachedRoutes:[],pathAdd:""},o={SET_CACHED_ROUTES:function(t,e){!t.cachedRoutes.includes(e)&&t.cachedRoutes.push(e)},SET_PATHADD:function(t,e){t.pathAdd=e}},c={updateCachedRoutes:function(t,e){var n=t.commit;n("SET_CACHED_ROUTES",e)}};e["default"]={namespaced:!0,state:a,mutations:o,actions:c}},d307:function(t,e,n){var a={"./auth.js":"c7d4"};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=c,t.exports=o,o.id="d307"},d5ad:function(t,e,n){},d769:function(t,e,n){},dbeb:function(t,e,n){},e2ab:function(t,e,n){"use strict";n("4674")},e98d:function(t,e,n){"use strict";n("ee34")},ee34:function(t,e,n){},ff22:function(t,e,n){"use strict";n("d5ad")}});