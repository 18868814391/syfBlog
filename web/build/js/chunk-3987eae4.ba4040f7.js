(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3987eae4"],{3507:function(t,c,e){"use strict";e("b8c1")},b8c1:function(t,c,e){},b8cc:function(t,c,e){"use strict";e.r(c);var a=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"mircleMenu"},t._l(t.titleData,(function(c,a){return e("div",{key:a,staticClass:"mircleMenu-t1"},[e("div",{staticClass:"mircleMenu-t3"},[t._v(t._s(c))]),t._l(t.conData[a],(function(a,n){return e("div",{key:n,staticClass:"mircleMenu-t2",on:{click:function(e){return t.goMircle(c,a)}}},[e("span",[t._v(t._s(a))])])}))],2)})),0)},n=[],o=(e("22ec"),e("bf33")),l=e("365c"),s={data(){return{conList:"",titleData:[],conData:[]}},created(){const t=this;o["a"].loading({mask:!0,message:"加载中..."}),Object(l["f"])({}).then(c=>{t.con=c.data.data,console.log("mircle",t.con),Object.keys(t.con).forEach((function(c){console.log(c,t.con[c]),t.titleData.push(c),t.conData.push(t.con[c])})),console.log(t.titleData),console.log(t.conData)}).catch(()=>{}).finally(()=>{o["a"].clear()})},methods:{goMircle(t,c){this.$router.push({path:"/readPage3",query:{chapterTitle:t,paragraphTitle:c}})}}},i=s,r=(e("3507"),e("cba8")),u=Object(r["a"])(i,a,n,!1,null,null,null);c["default"]=u.exports}}]);