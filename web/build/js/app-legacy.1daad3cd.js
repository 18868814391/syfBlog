(function(e){function t(t){for(var a,o,r=t[0],i=t[1],s=t[2],d=0,l=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c={app:0},u=[];function r(e){return i.p+"js/"+({error:"error",index:"index"}[e]||e)+"-legacy."+{"chunk-09b1d7fe":"00f04094","chunk-0bef602b":"713fca95","chunk-0f9f56c5":"23a5f770","chunk-5a606b8e":"01f2aa40","chunk-a26248bc":"f00eb7be","chunk-a889e70e":"48d068c4","chunk-aa87da68":"7a0670aa","chunk-18e63b12":"367367f0","chunk-1c134234":"1d83d9ad","chunk-1e9e8d0b":"7fb41237","chunk-41e2334e":"99eb7e12","chunk-4ede64f0":"213f58b9","chunk-6159e5aa":"3a8b7851","chunk-6731b35c":"1a937298","chunk-681e2c11":"f3df277f","chunk-6e8b1aef":"1ad9336a","chunk-c40c665a":"6354807e","chunk-f38ac7cc":"ce90f9d0",error:"f19b907d",index:"845c9bd0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09b1d7fe":1,"chunk-0bef602b":1,"chunk-5a606b8e":1,"chunk-a26248bc":1,"chunk-a889e70e":1,"chunk-aa87da68":1,"chunk-18e63b12":1,"chunk-1c134234":1,"chunk-1e9e8d0b":1,"chunk-41e2334e":1,"chunk-4ede64f0":1,"chunk-6159e5aa":1,"chunk-6731b35c":1,"chunk-681e2c11":1,"chunk-6e8b1aef":1,"chunk-c40c665a":1,"chunk-f38ac7cc":1,error:1,index:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({error:"error",index:"index"}[e]||e)+"."+{"chunk-09b1d7fe":"b24935e2","chunk-0bef602b":"beddfec6","chunk-0f9f56c5":"31d6cfe0","chunk-5a606b8e":"803560a6","chunk-a26248bc":"fed69024","chunk-a889e70e":"501c90eb","chunk-aa87da68":"d0e6106a","chunk-18e63b12":"251e4abc","chunk-1c134234":"262259bd","chunk-1e9e8d0b":"d0424668","chunk-41e2334e":"7b2c6b60","chunk-4ede64f0":"6bdea874","chunk-6159e5aa":"84801658","chunk-6731b35c":"54ed9271","chunk-681e2c11":"61bd67f3","chunk-6e8b1aef":"b54f67b6","chunk-c40c665a":"4daff674","chunk-f38ac7cc":"7e28c8d6",error:"f9b0a4ed",index:"5c645991"}[e]+".css",c=i.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var s=u[r],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){s=l[r],d=s.getAttribute("data-href");if(d===a||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02bc":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"empty"},[a("img",{attrs:{src:n("b45c"),alt:""}}),a("p",[e._v(e._s(e.description))])])},o=[],c={name:"Empty",props:{description:{type:String,default:"暂无内容"}}},u=c,r=(n("12fd"),n("cba8")),i=Object(r["a"])(u,a,o,!1,null,"e460dc0c",null);t["default"]=i.exports},"12fd":function(e,t,n){"use strict";n("4fc8")},2323:function(e,t,n){var a={"./Empty.vue":"02bc","./FloatBall.vue":"7a5e","./disappearBtn.vue":"27ab","./jumpBox.vue":"7917","./navTBox.vue":"b8cd"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="2323"},"27ab":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"disappearBtn-page"},[n("div",{staticClass:"divbtn cake",staticStyle:{width:"80px"},on:{click:e.goRoute}},[n("div",{ref:"doom",staticStyle:{width:"80px"},attrs:{id:"btn"}},[e._v(e._s(e.title))])])])},o=[],c={name:"DisappearBtn",props:{title:{type:String,default:function(){return"默认"}},rout:{type:String,default:function(){return"b"}},idn:{type:String,default:function(){return""}}},data:function(){return{}},mounted:function(){},methods:{goRoute:function(){if("b"==this.rout)return!1;this.$router.push({path:"/".concat(this.rout)})}}},u=c,r=(n("e2ab"),n("cba8")),i=Object(r["a"])(u,a,o,!1,null,null,null);t["default"]=i.exports},"33ec":function(e,t,n){},"365c":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return v})),n.d(t,"p",(function(){return g})),n.d(t,"o",(function(){return y})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return k})),n.d(t,"m",(function(){return w})),n.d(t,"q",(function(){return x})),n.d(t,"n",(function(){return P})),n.d(t,"j",(function(){return T}));var a=n("4ff3"),o=n.n(a);o.a.defaults.baseURL="https://www.shenyifan.top/apis/php";var c=o.a.create({timeout:1e4}),u=c;o.a.defaults.baseURL="/node";o.a.create({timeout:1e4});function r(e){return u({url:"/upload/getFile.php",method:"post",data:e})}function i(e){return u({url:"/upload/BlogList.php",method:"post",data:e})}function s(e){return u({url:"/upload/BlogDetail.php",method:"post",data:e})}function d(e){return u({url:"/novel/lightNovelList.php",method:"post",data:e})}function l(e){return u({url:"/novel/getNovel.php",method:"post",data:e})}function f(e){return u({url:"/novel/heavyNovelList.php",method:"post",data:e})}function h(e){return u({url:"/novel/mircleDetail.php",method:"post",data:e})}function p(e){return u({url:"/interaction/footprint.php",method:"post",data:e})}function m(e){return u({url:"/interaction/footList.php",method:"post",data:e})}function b(e){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:e})}function v(e){return u({url:"/yii/web/index.php?r=blog/search",method:"post",data:e})}function g(e){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:e})}function y(e){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:e})}function A(e){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:e})}function k(e){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:e})}function w(e){return u({url:"/yii/web/index.php?r=blog/tabs",method:"post",data:e})}function x(e){return u({url:"/yii/web/index.php?r=common/savedood",method:"post",data:e})}function P(e){return u({url:"/yii/web/index.php?r=common/getdood",method:"post",data:e})}function T(e){return u({url:"/wechat/access.php",method:"post",data:e})}},4674:function(e,t,n){},4693:function(e,t,n){},"4fc8":function(e,t,n){},5646:function(e,t,n){"use strict";n("dbeb")},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"debounce",(function(){return Me})),n.d(a,"isNumber",(function(){return We.a}));n("c8ba"),n("5961"),n("7ecd"),n("0185");var o=n("430a"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"app-home",attrs:{id:"pic"},on:{click:function(t){return e.$router.push("/")}}},[n("div",[e._v("首页")])])],1)},u=[],r=n("7b04"),i=n.n(r),s=n("365c"),d={name:"App",data:function(){return{position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:""}},created:function(){Object(s["j"])({}).then((function(e){self.sign=e.data.data,console.log(self.sign),sessionStorage.setItem("wxsignature",self.sign.signature),i.a.config({debug:!1,appId:"wx3352249676449b29",timestamp:"1414587457",nonceStr:"syf",signature:self.sign.signature,jsApiList:["checkJsApi","getLocation","scanQRCode","openLocation","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]})})).catch((function(e){}))},mounted:function(){var e=document.querySelector("#pic");this.w=document.documentElement.clientWidth||document.body.clientWidth,this.h=document.documentElement.clientHeight||document.body.clientHeight,this.x=e.offsetWidth,this.y=e.offsetHeight,e.addEventListener("touchstart",this.down,{passive:!1}),e.addEventListener("touchmove",this.move,{passive:!1})},methods:{down:function(){var e,t=document.querySelector("#pic");e=event.touches?event.touches[0]:event,this.position.x=e.clientX,this.position.y=e.clientY,this.dx=t.offsetLeft,this.dy=t.offsetTop},move:function(){var e,t=document.querySelector("#pic");e=event.touches?event.touches[0]:event,event.preventDefault(),this.nx=e.clientX-this.position.x,this.ny=e.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,this.xPum=this.xPum>0?this.xPum:0,this.yPum=this.yPum>0?this.yPum:0,this.xPum=this.xPum>this.w-this.x?this.w-this.x:this.xPum,this.yPum=this.yPum>this.h-this.y?this.h-this.y:this.yPum,t.style.left=this.xPum+"px",t.style.top=this.yPum+"px"}}},l=d,f=(n("a3da"),n("cba8")),h=Object(f["a"])(l,c,u,!1,null,"cf5ef408",null),p=h.exports,m=n("efbe"),b=(n("44ad"),n("a9b6"),n("2690"),n("d4f9"),n("ac56")),v=[{path:"/404",meta:{title:"找不到页面"},component:function(){return n.e("error").then(n.bind(null,"1db4"))}}],g=[].concat(v,[{path:"*",redirect:"/404"}]),y={path:"/",meta:{cache:!1,title:""},component:function(){return n.e("index").then(n.bind(null,"7abe"))}};o["a"].use(b["a"]);var A=function(){return new b["a"]({mode:"hash",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[y].concat(Object(m["a"])(g),[{path:"/login",name:"login",component:function(){return n.e("chunk-681e2c11").then(n.bind(null,"9ed6"))},meta:{title:"登录",noAnima:!0}},{path:"/register",name:"register",component:function(){return n.e("chunk-c40c665a").then(n.bind(null,"b953"))},meta:{title:"注册",noAnima:!0}},{path:"/blog",name:"blog",component:function(){return n.e("chunk-6159e5aa").then(n.bind(null,"8439"))},meta:{title:"BLOG",noAnima:!0,keepAlive:!0}},{path:"/readBlog",name:"readBlog",component:function(){return n.e("chunk-18e63b12").then(n.bind(null,"f94a"))},meta:{title:"MyBLOG",noAnima:!0}},{path:"/blogUpload",name:"blogUpload",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-aa87da68")]).then(n.bind(null,"59fe"))},meta:{title:"BLOG上传",noAnima:!0}},{path:"/read",name:"read",component:function(){return n.e("chunk-41e2334e").then(n.bind(null,"e694"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage",name:"readPage",component:function(){return n.e("chunk-f38ac7cc").then(n.bind(null,"b0bd"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage2",name:"readPage2",component:function(){return n.e("chunk-09b1d7fe").then(n.bind(null,"b8cc"))},meta:{title:"浏览",noAnima:!0}},{path:"/readPage3",name:"readPage3",component:function(){return n.e("chunk-6731b35c").then(n.bind(null,"8c48"))},meta:{title:"浏览",noAnima:!0}},{path:"/footprint",name:"footprint",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-a26248bc")]).then(n.bind(null,"4d83"))},meta:{title:"留言板",noAnima:!0}},{path:"/boobBrand",name:"boobBrand",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-a889e70e")]).then(n.bind(null,"5215"))},meta:{title:"涂鸦板",noAnima:!0}},{path:"/boobMore",name:"boobMore",component:function(){return n.e("chunk-1e9e8d0b").then(n.bind(null,"e0e0"))},meta:{title:"涂鸦板",noAnima:!0}},{path:"/game1",name:"game1",component:function(){return n.e("chunk-0bef602b").then(n.bind(null,"151d"))},meta:{title:"game1",noAnima:!0,keepAlive:!0}},{path:"/chatRoom",name:"chatRoom",component:function(){return Promise.all([n.e("chunk-0f9f56c5"),n.e("chunk-5a606b8e")]).then(n.bind(null,"9166"))},meta:{title:"聊天室",noAnima:!0}},{path:"/cocos",name:"cocos",component:function(){return n.e("chunk-4ede64f0").then(n.bind(null,"3e06"))},meta:{title:"coco游戏",noAnima:!0}},{path:"/aboutMe",name:"aboutMe",component:function(){return n.e("chunk-6e8b1aef").then(n.bind(null,"4e52"))},meta:{title:"关于本站",noAnima:!0}},{path:"/myfile",name:"myfile",component:function(){return n.e("chunk-1c134234").then(n.bind(null,"55b9"))},meta:{title:"文件夹",noAnima:!0}}])})},k=A();var w=b["a"].prototype.push;b["a"].prototype.push=function(e){return w.call(this,e).catch((function(e){return e}))};var x=k,P=(n("3fab"),n("ed02"),n("7736")),T={cachedRoutes:function(e){return e.auth.cachedRoutes}};o["a"].use(P["a"]);var B=n("d307"),j=B.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),a=B(t);return e[n]=a.default,e}),{}),E=new P["a"].Store({getters:T,modules:j}),L=E,O=(n("be3e"),n("0a18")),S=(n("f479"),n("0b9e")),C=(n("b6c5"),n("a618")),R=(n("3e62"),n("f6d3")),H=(n("9693"),n("065e")),D=(n("716b"),n("2c4f")),Z=(n("e579"),n("beca")),W=(n("6fc8"),n("248d")),M=(n("cbc3"),n("ce6b")),V=(n("6f46"),n("ca4d")),z=(n("cd8a"),n("358f")),F=(n("2f7a"),n("0c3d")),J=(n("d57b"),n("fe83")),X=(n("120c"),n("c994")),Y=(n("7a09"),n("ca0b")),G=(n("742e"),n("0d8e")),U=(n("2bb0"),n("711d")),I=(n("5dc2"),n("22e5")),K=(n("e1f3"),n("849c")),Q=(n("66fa"),n("31d5")),q=(n("c50e"),n("c96b")),N=(n("ee86"),n("0381")),_=(n("c120"),n("0c29")),$=(n("cd5b"),n("b15c")),ee=(n("d236"),n("9efc")),te=(n("22ec"),n("bf33")),ne=(n("69f8"),n("317a")),ae=(n("fa30"),n("ca8e")),oe=(n("93db"),n("65d1")),ce=(n("db3e"),n("d6b2")),ue=(n("551c"),n("e5f3")),re=(n("22f0"),n("6fad")),ie=(n("e841"),n("f86a")),se=(n("53d1"),n("61ff")),de=(n("d2aa"),n("b754")),le=(n("f2f1"),n("f84b")),fe=(n("f2e9"),n("01a8")),he=(n("10cc"),n("fe54")),pe=(n("0c97"),n("7ca3")),me=(n("8dc6"),n("08ed")),be=(n("0081"),n("37a6")),ve=(n("1c90"),n("b1e7")),ge=(n("bdaa"),n("114f")),ye=(n("ab59"),n("8c9f")),Ae=(n("3440"),n("088a")),ke=(n("46a3"),n("fde2")),we=(n("9ba1"),n("94f5")),xe=(n("be2d"),n("50f2")),Pe=(n("9cd1"),n("fd65")),Te=(n("c5ca"),n("9b05")),Be=(n("fa5d"),n("69ed")),je=(n("6f39"),n("24e6")),Ee=(n("0841"),n("2d48")),Le=(n("e800"),n("8967")),Oe=(n("9a2f"),n("e584")),Se=(n("378e"),n("ec6b"));o["a"].use(Se["a"]),o["a"].use(Le["a"]).use(Oe["a"]),o["a"].use(Ee["a"]),o["a"].use(je["a"]),o["a"].use(Te["a"]).use(Be["a"]),o["a"].use(Pe["a"]),o["a"].use(xe["a"]),o["a"].use(ke["a"]).use(we["a"]),o["a"].use(Ae["a"]),o["a"].use(ye["a"]),o["a"].use(ge["a"]),o["a"].use(ve["a"]),o["a"].use(be["a"]),o["a"].use(me["a"]),o["a"].use(pe["a"]),o["a"].use(he["a"]),o["a"].use(fe["a"]),o["a"].use(le["a"]),o["a"].use(de["a"]),o["a"].use(se["a"]),o["a"].use(re["a"]).use(ie["a"]),o["a"].use(ue["a"]),o["a"].use(ce["a"]),o["a"].use(oe["a"]),o["a"].use(ae["a"]),o["a"].use(ne["a"]),o["a"].use(te["a"]),o["a"].use($["a"]).use(ee["a"]),o["a"].use(_["a"]),o["a"].use(N["a"]),o["a"].use(q["a"]),o["a"].use(Q["a"]),o["a"].use(K["a"]),o["a"].use(I["a"]),o["a"].use(G["a"]).use(U["a"]),o["a"].use(Y["a"]),o["a"].use(J["a"]).use(X["a"]),o["a"].use(z["a"]).use(F["a"]),o["a"].use(V["a"]),o["a"].use(M["a"]),o["a"].use(W["a"]),o["a"].use(Z["a"]),o["a"].use(H["a"]).use(D["a"]),o["a"].use(C["a"]).use(R["a"]),o["a"].use(S["a"]),o["a"].use(O["a"]);var Ce=n("b881"),Re=n.n(Ce),He=(n("121a"),n("7e41"),n("96be"),n("4693"),n("9f35"),n("33ec"),n("6e0c"),n("44ce"),n("c81a")),De=n.n(He),Ze=n("d370"),We=n.n(Ze),Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"===typeof e)return De()(e,t,{leading:n,trailing:a})},Ve=n("2323"),ze=Ve.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),a=Ve(t);return e[n]=a.default,e}),{}),Fe=function(e){for(var t in ze)e.component(t,ze[t])},Je={install:Fe},Xe=n("ed3b"),Ye=(n("e186"),n("3e22"),n("38bc")),Ge=n.n(Ye),Ue=(n("70e7"),function(e){setTimeout((function(){e.name&&e.meta&&e.meta.cache&&L.dispatch("auth/updateCachedRoutes",e.name)}),20)});x.beforeEach(function(){var e=Object(Xe["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:L.commit("auth/SET_PATHADD",t.path),document.title=t.meta.title,Ue(t),a();case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),x.afterEach((function(e,t){Ge.a.done()})),o["a"].prototype.$g=a,o["a"].use(Re.a),o["a"].use(Je),o["a"].config.productionTip=!1,new o["a"]({router:x,store:L,render:function(e){return e(p)}}).$mount("#app")},"6e0c":function(e,t,n){},7917:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jumpBox-page"},[n("div",{staticClass:"container"},[n("span",{staticClass:"girl"},[e._v("仆")]),n("div",{staticClass:"boys"},[n("span",[e._v("届")]),n("span",[e._v("か")]),n("span",[e._v("な")]),n("span",[e._v("い")])])])])}],c={name:"JumpBox",data:function(){return{}},mounted:function(){},methods:{}},u=c,r=(n("5646"),n("cba8")),i=Object(r["a"])(u,a,o,!1,null,"3e750a1a",null);t["default"]=i.exports},"7a5e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fadeBtn"}},[e.isShow&&"/studentList"!=e.pathAdd&&"/"!=e.pathAdd?n("div",{ref:"dragIcon",staticClass:"dragIcon",style:{left:e.left+"px",top:e.top+"px",width:e.itemWidth+"px",height:e.itemHeight+"px"},on:{touchstart:function(t){return t.stopPropagation(),e.handleTouchStart.apply(null,arguments)},touchmove:function(t){return t.preventDefault(),t.stopPropagation(),e.handleTouchMove(t)},touchend:function(t){return t.stopPropagation(),e.handleTouchEnd.apply(null,arguments)}}},["/location"==e.pathAdd||"/report"==e.pathAdd?n("van-icon",{staticClass:"back",attrs:{name:"wap-home-o"},on:{click:function(t){return e.goHome()}}}):n("van-icon",{staticClass:"back",attrs:{name:"share-o"},on:{click:function(t){return e.goBack()}}})],1):e._e()])},o=[],c=(n("8372"),{props:{text:{type:String,default:"返回"},itemWidth:{type:Number,default:60},itemHeight:{type:Number,default:60}},data:function(){return{left:0,top:0,startToMove:!1,isShow:!0,timer:null,currentTop:null,clientW:document.documentElement.clientWidth,clientH:document.documentElement.clientHeight}},computed:{pathAdd:function(){return this.$store.state.auth.pathAdd}},created:function(){this.left=this.clientW-this.itemWidth-30,this.top=this.clientH/1.3-this.itemHeight/2},mounted:function(){this.bindScrollEvent()},beforeDestroy:function(){this.removeScrollEvent()},methods:{goHome:function(){this.$router.push({path:"/studentList"})},goBack:function(){this.$router.back(-1)},handleTouchStart:function(){this.startToMove=!0,this.$refs.dragIcon.style.transition="none"},handleTouchMove:function(e){var t=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY,a=t<=this.clientW&&t>=0&&n<=this.clientH&&n>=0;this.startToMove&&1===e.targetTouches.length&&a&&(this.left=t-this.itemWidth/2,this.top=n-this.itemHeight/2)},handleTouchEnd:function(){this.left<this.clientW/2?(this.left=30,this.handleIconY()):(this.left=this.clientW-this.itemWidth-30,this.handleIconY()),this.$refs.dragIcon.style.transition="all .3s"},handleIconY:function(){this.top<0?this.top=30:this.top+this.itemHeight>this.clientH&&(this.top=this.clientH-this.itemHeight-30)},bindScrollEvent:function(){window.addEventListener("scroll",this.handleScrollStart)},removeScrollEvent:function(){window.removeEventListener("scroll",this.handleScrollStart)},handleScrollStart:function(){var e=this;this.isShow=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){e.handleScrollEnd()}),300),this.currentTop=document.documentElement.scrollTop||document.body.scrollTop},handleScrollEnd:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.scrollTop==this.currentTop&&(this.isShow=!0)}}}),u=c,r=(n("ff22"),n("cba8")),i=Object(r["a"])(u,a,o,!1,null,"28496ae4",null);t["default"]=i.exports},a3da:function(e,t,n){"use strict";n("d769")},b45c:function(e,t){e.exports="data:image/png;base64,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"},b8cd:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"nt1",staticClass:"navTBox",class:e.start?"navTBoxAnime1":"",on:{click:e.goroute}},[n("div",{ref:"nt2",staticClass:"navTBox2",class:e.start?"navTBoxAnime2":""}),e._v(" "+e._s(e.taber)+" ")])},o=[],c=(n("8372"),{name:"NavTBox",props:{rout:{type:String,default:function(){return"b"}},taber:{type:String,default:function(){return"b"}},sum:{type:Number,default:function(){return 1}},ind:{type:Number,default:function(){return 1}}},data:function(){return{start:!1,end:!0}},created:function(){},mounted:function(){},methods:{goroute:function(){this.$router.push({path:"/".concat(this.rout)})}}}),u=c,r=(n("c9d0"),n("cba8")),i=Object(r["a"])(u,a,o,!1,null,"a95c0e16",null);t["default"]=i.exports},c7d4:function(e,t,n){"use strict";n.r(t);n("688d"),n("4fb6");var a={cachedRoutes:[],pathAdd:""},o={SET_CACHED_ROUTES:function(e,t){!e.cachedRoutes.includes(t)&&e.cachedRoutes.push(t)},SET_PATHADD:function(e,t){e.pathAdd=t}},c={updateCachedRoutes:function(e,t){var n=e.commit;n("SET_CACHED_ROUTES",t)}};t["default"]={namespaced:!0,state:a,mutations:o,actions:c}},c9d0:function(e,t,n){"use strict";n("d755")},d307:function(e,t,n){var a={"./auth.js":"c7d4"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="d307"},d5ad:function(e,t,n){},d755:function(e,t,n){},d769:function(e,t,n){},dbeb:function(e,t,n){},e2ab:function(e,t,n){"use strict";n("4674")},ff22:function(e,t,n){"use strict";n("d5ad")}});