webpackJsonp([0],{"1/oy":function(t,n){},"9M+g":function(t,n){},Id91:function(t,n){},Jmt5:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r={name:"App",mounted:function(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},data:function(){return{style:{}}},methods:{resizeHandler:function(){var t=.9*window.innerWidth,n=1.5*t,e=100;n+70>window.innerHeight?t=(n=window.innerHeight-140)/1.5:e=(window.innerHeight-n+70)/2;var i=(window.innerWidth-t)/2;console.log({width:t+"px",height:n+"px",top:e+"px",left:i+"px"}),window.innerHeight<600&&(t=window.innerWidth,n=window.innerHeight,e=0,i=0),this.style={width:t+"px",height:n+"px",top:e+"px",left:i+"px"}}}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{style:this.style,attrs:{id:"app"}},[n("div",{attrs:{id:"viewport"}},[n("router-view")],1),this._v(" "),n("div",{attrs:{id:"top"}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"notice"}},[n("h1",[this._v("竖起来看效果更好")]),this._v(" "),n("img",{attrs:{src:e("Vxuj")}})])}]};var v=e("VU/8")(r,s,!1,function(t){e("PxS5")},null,null).exports,o=e("/ocq"),_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"box"}},[e("h1",{attrs:{id:"main-title"}},[t._v("头脑风暴")]),t._v(" "),e("b-button",{attrs:{id:"start-btn",size:"lg",variant:"primary"},on:{click:t.start}},[t._v("\n      开始挑战\n  ")]),t._v(" "),e("b-button",{attrs:{id:"result-btn"},on:{click:t.result}},[t._v("\n      排行榜\n  ")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"banner-bottom"}},[n("img",{attrs:{src:e("Vxuj")}})])}]};var d=e("VU/8")({name:"Welcome",methods:{start:function(t){this.$router.push("/game")},result:function(t){this.$router.push("/result")}}},_,!1,function(t){e("ddGs")},"data-v-454b5f76",null).exports,c={name:"Game",mounted:function(){setInterval(this.updateTime,1e3)},data:function(){return{second:0,ti:0,question:"Panopath的中文名是？",answers:["过来人","来过人","来来人","过人"],correct:0}},methods:{updateTime:function(){this.second++},clickAnswer:function(t){console.log(t,this.correct),t===this.correct?console.log("correct"):(console.log("not right"),this.$router.push("/result"))},clickSkip:function(){console.log("Skip")}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"box"}},[e("h1",[t._v("挑战者：AQ")]),t._v(" "),e("div",{attrs:{id:"sec-col"}},[e("div",{attrs:{id:"used-sec"}},[t._v("已用 "+t._s(t.second)+" 秒")]),t._v(" "),e("div",{attrs:{id:"ti-num"}},[t._v("答对 "+t._s(t.ti)+" 题")])]),t._v(" "),e("div",{attrs:{id:"question"}},[t._v("\n    "+t._s(t.question)+"\n  ")]),t._v(" "),t._l(t.answers,function(n,i){return e("div",{key:i,staticClass:"choice",on:{click:function(n){t.clickAnswer(i)}}},[t._v("\n    "+t._s(n)+"\n  ")])}),t._v(" "),e("div",{staticClass:"choice",on:{click:function(n){t.clickSkip()}}},[t._v("\n    跳过本题\n  ")])],2)},staticRenderFns:[]};var u=e("VU/8")(c,a,!1,function(t){e("yOzj")},"data-v-875f22d8",null).exports,l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"box"}},[n("h1",[this._v("排行榜")]),this._v(" "),this._m(0),this._v(" "),n("b-button",{attrs:{id:"back-btn",size:"lg",variant:"primary"},on:{click:this.back}},[this._v("\n      返回\n  ")])],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",{attrs:{id:"level-table"}},[e("tr",[e("th",[t._v("\n          名次\n        ")]),t._v(" "),e("th",[t._v("\n          昵称\n        ")]),t._v(" "),e("th",[t._v("\n          答对题数\n        ")]),t._v(" "),e("th",[t._v("\n          用时\n        ")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AQ")]),t._v(" "),e("td",[t._v("150")]),t._v(" "),e("td",[t._v("30min5s")])])])])}]};var h=e("VU/8")({name:"Result",computed:{username:function(){return this.$route.params.username}},methods:{back:function(){this.$router.go(-1)}},data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){e("Ofh1")},"data-v-7999f39d",null).exports,m=e("e6fC");e("Jmt5"),e("9M+g");i.a.use(o.a),i.a.use(m.a);var p=new o.a({routes:[{name:"Welcome",path:"/",alias:"/welcome",component:d},{name:"Game",path:"/game",component:u,beforeEnter:function(t,n,e){console.log(n),"Welcome"==n.name?e():e("/")}},{name:"Resule",path:"/result",component:h}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:v},template:"<App/>"})},Ofh1:function(t,n){},PxS5:function(t,n){},Vxuj:function(t,n,e){t.exports=e.p+"static/img/banner-bottom.6dad6cc.png"},ddGs:function(t,n){},yOzj:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.115f35af59d2201cf6b0.js.map