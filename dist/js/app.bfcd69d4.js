(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"42ae":function(t,e,n){},5262:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"disable-dbl-tap-zoom"},[n("v-content",[n("router-view")],1)],1)},i=[],s={},l=s,c=n("2877"),u=n("6544"),d=n.n(u),h=n("7496"),p=n("a75b"),f=Object(c["a"])(l,o,i,!1,null,null,null),v=f.exports;d()(f,{VApp:h["a"],VContent:p["a"]});var g=n("f309");a["a"].use(g["a"]);var b=new g["a"]({}),m=n("890b"),w=n.n(m),y=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"disable-dbl-tap-zoom":""}},[n("Header"),n("BlockArray"),t.$store.state.render.overlay&&t.$store.state.render.canGetOverlay?n("v-overlay",{staticClass:"flex-column overlay--active"},[n("h1",{staticClass:"font-weight-bold display-4"},[t._v("Bingo!")]),n("v-row",{staticClass:"pt-8",attrs:{justify:"center"}},[t.$store.state.confettiSwitch?n("v-btn",{attrs:{color:"primary",large:"",elevation:"4"},on:{click:t.niceclick}},[t._v("Avondklokkie VO!")]):n("v-btn",{attrs:{color:"primary",large:"",elevation:"4"},on:{click:t.niceclick}},[t._v("Nice")])],1)],1):t._e(),n("v-container",{staticClass:"fill-height pb-15 mb-15"},[t.$store.state.render.bingo?n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3 mt-n10"},[t._v(" Bingo! ")])]):n("v-row")],1),n("Footer",{staticClass:"pt-0"})],1)},_=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"mb-2 disable-dbl-tap-zoom",attrs:{height:120,color:"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3"},[t._v(" Persco-Bingo! ")])])],1)],1)},V=[],x={},j=x,O=(n("de73"),n("a523")),S=n("0fd9"),B=n("8dd9"),$=Object(c["a"])(j,k,V,!1,null,"06bef40e",null),P=$.exports;d()($,{VContainer:O["a"],VRow:S["a"],VSheet:B["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-15 disable-dbl-tap-zoom"},[n("v-col",t._l(t.words,(function(e,a){return n("v-row",{key:e,staticClass:"ml-n12"},[n("v-spacer"),t._l(e,(function(t,e){return n("v-col",{key:t,staticClass:"pa-0 ma-1",attrs:{cols:"2"}},[n("Block",{attrs:{word:t,i:a,j:e}})],1)}))],2)})),1)],1)},E=[],R=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"disable-dbl-tap-zoom"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-sheet",{staticClass:"text-center transition-fast-in-fast-out",attrs:{elevation:a?8:3,rounded:"lg",height:"100",color:t.color,"max-width":"100%"},on:{click:t.invert}},[n("v-container",{staticClass:"fill-height"},[t.done?n("v-row",{staticClass:"wordtext text-break text-decoration-line-through",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.word)+" ")]):n("v-row",{staticClass:"wordtext text-break ",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.word)+" ")])],1)],1)]}}])})],1)}),M=[],A=(n("a9e3"),{props:{word:String,i:Number,j:Number},data:function(){return{color:"grey lighten-2",done:!1}},methods:{invert:function(){this.done=!this.done,this.setColor(),this.$store.commit("updateBingo",{blockState:this.done,i:this.i,j:this.j})},setColor:function(){this.color=this.done?"green lighten-1":"grey lighten-2"}}}),T=A,H=(n("7df9"),n("ce87")),I=Object(c["a"])(T,R,M,!1,null,null,null),L=I.exports;d()(I,{VContainer:O["a"],VHover:H["a"],VRow:S["a"],VSheet:B["a"]});var F={components:{Block:L},data:function(){return{words:[],wordArray:["Oplopen","Versoepelingen","Handhaving","21:00","22:00","Demis​sionair","Astra Zenica","Corona","Avond​klok","Maat​regelen","Britse variant","Mutatie","Vaccin​atie","Snel​test","Quaran​taine","Restau​rants","Winkels","Test​bewijs","Vaccinatie​graad","Middel​bare scholen","Basis​scholen","Scholen","Onder​wijs","HBO ","MBO","WO ","Crisis ","Contact​beroep","Cijfers","Risico","Jonge​ren","Oude​ren","RIVM","Mond​kapje","OMT","Veilig​heids​regio","Ander​halve meter ","Sport ","Quaran​taine","Wande​len","Bood​schappen","Symp​tomen","Op Afspraak","Team​sport","Contact​sport","Econo​mie","Gezond​heid","Bedrij​ven","Vaccin","De Zorg","Een​zaam​heid","Team​verband","Mentale Gezond​heid","Festi​vals","Lastige Fase","Verkiez​ingen","Stem​men","Irma is er!","Besmet​tingen","IC","Hoesten","Keel​pijn","Testen","Open​baar","Voort​gezet Onder​wijs","Kapper","Thuis​werken","Basis​regels","Zieken​huizen","Verpleeg​huizen","Experts","Pande​mie","CPB","CBS","Theater","Concert","Inenting","Evene​ment","Scholieren","Golf","Zomer","Herfst","Winter","Lente ","Verant​woord","Onder​zoek","Kwartaal","Bios​copen","Vakan​tie","Reizen","Trein","Handen Wassen","Elle​boog","Knuffels","Pas​poort","Vrij​heid","Vaccin​atie Plicht"]}},methods:{randomArray:function(t,e){var n,a,r=t.slice(0),o=t.length,i=o-e;while(o-- >i)a=Math.floor((o+1)*Math.random()),n=r[a],r[a]=r[o],r[o]=n;return r.slice(i)},getRandomlist:function(){for(var t=this.randomArray(this.wordArray,25),e=[],n=0;n<5;n++)e.push(t.slice(5*n,5*n+5));this.words=e}},mounted:function(){this.getRandomlist()}},G=F,W=n("62ad"),K=n("2fa4"),N=Object(c["a"])(G,z,E,!1,null,null,null),Z=N.exports;d()(N,{VCol:W["a"],VContainer:O["a"],VRow:S["a"],VSpacer:K["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pt-0 ma-0 disable-dbl-tap-zoom",attrs:{absolute:""}},[n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",{staticClass:"grey lighten-4"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{staticClass:"donottranslate"},[t._v(" mdi-information-variant ")]),n("v-icon",[t._v(" mdi-chevron-up ")])]},proxy:!0}])},[n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{text:"",outlined:""},on:{click:t.openWebpage}},[n("v-list-item",[t._v(" "+t._s((new Date).getFullYear())+" - ICheered "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-github ")])],1)],1)],1)],1),n("v-expansion-panel-content",{attrs:{absolute:""}},[n("v-col",[n("v-row",{staticClass:"justify-center text-center"},[n("p",{staticClass:"italic"},[t._v(" Issues, vragen, opmerkingen of suggesties? "),n("a",{attrs:{href:"https://icheered.nl/contact/index.html",target:"_blank"}},[t._v(" Contact me! ")])])]),n("v-row",{staticClass:"justify-center text-center pb-5"},[n("v-switch",{attrs:{label:"Studentenconfetti"},on:{click:t.switchClick},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),n("v-row",{staticClass:"justify-left text-left"},[n("h3",[t._v(" Laatste updates ")])]),n("v-row",{staticClass:"justify-left text-left"},[n("v-col",{staticClass:"pr-0 ma-0",attrs:{cols:"12"}},[n("ul",[n("li",[t._v("Iedereen heeft nu een random bingokaart")]),n("li",[t._v("Confetti")]),n("li",[t._v("...")]),n("li",[t._v("Eigenlijk vooral Confetti")])])])],1)],1)],1)],1)],1)],1)},J=[],Q={data:function(){return{sheet:!1,switch1:!1}},methods:{switchClick:function(){this.$store.state.confettiSwitch=this.switch1},openWebpage:function(){window.open("https://github.com/icheered/Sloth","_blank")}}},U=Q,Y=(n("7026"),n("8336")),q=n("cd55"),X=n("49e2"),tt=n("c865"),et=n("0393"),nt=n("553a"),at=n("132d"),rt=n("da13"),ot=n("b73d"),it=Object(c["a"])(U,D,J,!1,null,"7b52fe6a",null),st=it.exports;d()(it,{VBtn:Y["a"],VCol:W["a"],VExpansionPanel:q["a"],VExpansionPanelContent:X["a"],VExpansionPanelHeader:tt["a"],VExpansionPanels:et["a"],VFooter:nt["a"],VIcon:at["a"],VListItem:rt["a"],VRow:S["a"],VSwitch:ot["a"]});var lt={components:{Header:P,BlockArray:Z,Footer:st},data:function(){return{}},methods:{niceclick:function(){this.$store.state.render.canGetOverlay=!1,this.$confetti.stop()}},watch:{"$store.state.render.overlay":function(){this.$store.state.render.canGetOverlay&&this.$store.state.render.overlay?this.$store.state.confettiSwitch?this.$confetti.start({particles:[{type:"image",url:"https://www.dutchexpatshop.com/media/catalog/product/cache/ac21323b66bd6730a5f1021132460f2e/0/6/060520191339_48039BLK-1.png",size:40,amount:10,dropRate:5},{type:"image",url:"https://www.plus.nl/INTERSHOP/static/WFS/PLUS-Site/-/PLUS/nl_NL/product/L/861575.png",size:40,amount:10,dropRate:5}],particlesPerFrame:.8}):this.$confetti.start({particles:[{type:"circle",size:10,dropRate:10}]}):this.$confetti.stop()}}},ct=lt,ut=(n("21bb"),n("a797")),dt=Object(c["a"])(ct,C,_,!1,null,null,null),ht=dt.exports;d()(dt,{VBtn:Y["a"],VContainer:O["a"],VOverlay:ut["a"],VRow:S["a"]});var pt=[{path:"/",name:"home",component:ht}];a["a"].use(y["a"]);var ft=new y["a"]({routes:pt}),vt=ft;a["a"].use(r["a"]);var gt=new r["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0},confettiSwitch:!1},mutations:{updateBingo:function(t,e){var n=e.blockState,a=e.i,r=e.j;this.state.bingo[a][r]=n?1:0;for(var o=!1,i=0;i<this.state.bingo.length;i++)for(var s=0,l=0;l<this.state.bingo[i].length;l++)1==this.state.bingo[i][l]&&(s+=1),5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(i=0;i<this.state.bingo.length;i++)for(s=0,l=0;l<this.state.bingo[i].length;l++)1==this.state.bingo[l][i]&&(s+=1),5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(s=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][i]&&(s+=1);for(5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),s=0,i=0;i<this.state.bingo.length;i++)1==this.state.bingo[i][4-i]&&(s+=1);5==s&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),o||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),bt=gt;a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(w.a),a["a"].component("app",v),new a["a"]({vuetify:b,router:vt,store:bt,VueConfetti:w.a,render:function(t){return t(v)}}).$mount("#app")},7026:function(t,e,n){"use strict";n("42ae")},"7df9":function(t,e,n){"use strict";n("5262")},a8c9:function(t,e,n){},de73:function(t,e,n){"use strict";n("a8c9")}});
//# sourceMappingURL=app.bfcd69d4.js.map