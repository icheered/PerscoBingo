(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],h=0,f=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"375f":function(t,e,n){"use strict";n("ee9a")},5262:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},i=[],s={},l=s,c=n("2877"),u=n("6544"),h=n.n(u),f=n("7496"),d=n("a75b"),v=Object(c["a"])(l,o,i,!1,null,null,null),g=v.exports;h()(v,{VApp:f["a"],VContent:d["a"]});var p=n("f309");r["a"].use(p["a"]);var b=new p["a"]({}),y=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("BlockArray"),t.$store.state.render.overlay&&t.$store.state.render.canGetOverlay?n("v-overlay",{staticClass:"flex-column"},[n("h1",{staticClass:"font-weight-bold display-4"},[t._v("Bingo!")]),n("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[n("v-btn",{attrs:{color:"primary",large:"",elevation:"4"},on:{click:t.niceclick}},[t._v("Nice")])],1)],1):t._e(),t.$store.state.render.bingo?n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3 pt-4"},[t._v(" Bingo! ")])])],1):t._e(),n("Footer")],1)},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"mb-2",attrs:{height:120,color:"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3"},[t._v(" Persco-Bingo! ")])])],1)],1)},j=[],C={},O=C,V=(n("375f"),n("a523")),k=n("0fd9"),x=n("8dd9"),B=Object(c["a"])(O,_,j,!1,null,"11ed0489",null),S=B.exports;h()(B,{VContainer:V["a"],VRow:k["a"],VSheet:x["a"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",t._l(t.words,(function(e,r){return n("v-row",{key:e},t._l(e,(function(t,e){return n("v-col",{key:t},[n("Block",{attrs:{word:t,i:r,j:e}})],1)})),1)})),1)},P=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-sheet",{staticClass:"text-center transition-fast-in-fast-out ma-n2",attrs:{elevation:r?8:3,rounded:"lg",height:"100",color:t.color},on:{click:t.invert}},[n("v-container",{staticClass:"fill-height"},[t.done?n("v-row",{staticClass:"wordtext text-decoration-line-through",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.word)+" ")]):n("v-row",{staticClass:"wordtext",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.word)+" ")])],1)],1)]}}])})],1)},E=[],H=(n("a9e3"),{props:{word:String,i:Number,j:Number},data:function(){return{color:"grey lighten-2",done:!1}},methods:{invert:function(){this.done=!this.done,this.setColor(),this.$store.commit("updateBingo",{blockState:this.done,i:this.i,j:this.j})},setColor:function(){this.color=this.done?"green lighten-1":"grey lighten-2"}}}),F=H,G=(n("7df9"),n("ce87")),I=Object(c["a"])(F,M,E,!1,null,null,null),A=I.exports;h()(I,{VContainer:V["a"],VHover:G["a"],VRow:k["a"],VSheet:x["a"]});var R={components:{Block:A},data:function(){return{words:[["Middel-bare scholen","Kappers","Horeca","IC","Ouderen"],["Mentale Gezond-heid","De Zorg","Mond-kapje","Corona","Besmet-tingen"],["Het Vaccin","Basis-regels","Avond-klok","Eenzaam-heid","Irma is er!"],["Lock-down","Basis scholen","Winkels","Festival","Bedrijven"],["Jongeren","Verkiez-ingen","Het OMT","Virus","Sport vereniging"]]}}},T=R,z=n("62ad"),J=Object(c["a"])(T,$,P,!1,null,null,null),N=J.exports;h()(J,{VCol:z["a"],VContainer:V["a"],VRow:k["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-5",attrs:{absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{text:"",outlined:""}},[n("v-list-item",{staticClass:"custom-btn",attrs:{href:"https://github.com/icheered/PerscoBingo",target:"_blank",hover:""}},[t._v(" "+t._s((new Date).getFullYear())+" - ICheered "),n("v-icon",{attrs:{right:""}},[t._v("fa-github")])],1)],1)],1)],1)},L=[],K={},W=K,Y=(n("73ae"),n("8336")),Z=n("553a"),q=n("132d"),Q=n("da13"),U=Object(c["a"])(W,D,L,!1,null,"4b26ac65",null),X=U.exports;h()(U,{VBtn:Y["a"],VCol:z["a"],VFooter:Z["a"],VIcon:q["a"],VListItem:Q["a"]});var tt={components:{Header:S,BlockArray:N,Footer:X},data:function(){return{}},methods:{niceclick:function(){this.$store.state.render.canGetOverlay=!1}}},et=tt,nt=n("a797"),rt=Object(c["a"])(et,m,w,!1,null,"ce7b3ba2",null),at=rt.exports;h()(rt,{VBtn:Y["a"],VContainer:V["a"],VOverlay:nt["a"],VRow:k["a"]});var ot=[{path:"/",name:"home",component:at}];r["a"].use(y["a"]);var it=new y["a"]({routes:ot}),st=it;r["a"].use(a["a"]);var lt=new a["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(t,e){var n=e.blockState,r=e.i,a=e.j;this.state.bingo[r][a]=n?1:0;for(var o=!1,i=0;i<this.state.bingo.length;i++)for(var s=0,l=0;l<this.state.bingo[i].length;l++)1==this.state.bingo[i][l]&&(s+=1),5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(i=0;i<this.state.bingo.length;i++)for(s=0,l=0;l<this.state.bingo[i].length;l++)1==this.state.bingo[l][i]&&(s+=1),5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(s=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][i]&&(s+=1);for(5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),s=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][4-i]&&(s+=1);5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),o||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),ct=lt;r["a"].config.productionTip=!1,r["a"].use(a["a"]),r["a"].component("app",g),new r["a"]({vuetify:b,router:st,store:ct,render:function(t){return t(g)}}).$mount("#app")},"73ae":function(t,e,n){"use strict";n("beef")},"7df9":function(t,e,n){"use strict";n("5262")},beef:function(t,e,n){},ee9a:function(t,e,n){}});
//# sourceMappingURL=app.0809697e.js.map