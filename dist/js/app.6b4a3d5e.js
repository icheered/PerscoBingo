(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],d=0,h=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4537:function(e,t,n){"use strict";n("d404")},5262:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"disable-dbl-tap-zoom"},[n("v-content",[n("router-view")],1)],1)},s=[],i={},l=i,c=n("2877"),u=n("6544"),d=n.n(u),h=n("7496"),f=n("a75b"),v=Object(c["a"])(l,o,s,!1,null,null,null),p=v.exports;d()(v,{VApp:h["a"],VContent:f["a"]});var g=n("f309");a["a"].use(g["a"]);var b=new g["a"]({}),m=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"disable-dbl-tap-zoom":""}},[n("Header"),n("BlockArray"),e.$store.state.render.overlay&&e.$store.state.render.canGetOverlay?n("v-overlay",{staticClass:"flex-column"},[n("h1",{staticClass:"font-weight-bold display-4"},[e._v("Bingo!")]),n("v-row",{staticClass:"pt-8",attrs:{justify:"center"}},[n("v-btn",{attrs:{color:"primary",large:"",elevation:"4"},on:{click:e.niceclick}},[e._v("Nice")])],1)],1):e._e(),n("v-container",{staticClass:"fill-height pb-15 mb-15"},[e.$store.state.render.bingo?n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3 mt-n10"},[e._v(" Bingo! ")])]):n("v-row")],1),n("Footer",{staticClass:"pt-0"})],1)},w=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"mb-2 disable-dbl-tap-zoom",attrs:{height:120,color:"grey lighten-3"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3"},[e._v(" Persco-Bingo! ")])])],1)],1)},_=[],x={},V=x,j=(n("de73"),n("a523")),k=n("0fd9"),O=n("8dd9"),B=Object(c["a"])(V,C,_,!1,null,"06bef40e",null),S=B.exports;d()(B,{VContainer:j["a"],VRow:k["a"],VSheet:O["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mb-15 disable-dbl-tap-zoom"},[n("v-col",e._l(e.words,(function(t,a){return n("v-row",{key:t,staticClass:"ml-n12"},[n("v-spacer"),e._l(t,(function(e,t){return n("v-col",{key:e,staticClass:"pa-0 ma-1",attrs:{cols:"2"}},[n("Block",{attrs:{word:e,i:a,j:t}})],1)}))],2)})),1)],1)},E=[],P=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"disable-dbl-tap-zoom"},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[n("v-sheet",{staticClass:"text-center transition-fast-in-fast-out",attrs:{elevation:a?8:3,rounded:"lg",height:"100",color:e.color,"max-width":"100%"},on:{click:e.invert}},[n("v-container",{staticClass:"fill-height"},[e.done?n("v-row",{staticClass:"wordtext text-break text-decoration-line-through",attrs:{align:"center",justify:"center"}},[e._v(" "+e._s(e.word)+" ")]):n("v-row",{staticClass:"wordtext text-break ",attrs:{align:"center",justify:"center"}},[e._v(" "+e._s(e.word)+" ")])],1)],1)]}}])})],1)}),M=[],$=(n("a9e3"),{props:{word:String,i:Number,j:Number},data:function(){return{color:"grey lighten-2",done:!1}},methods:{invert:function(){this.done=!this.done,this.setColor(),this.$store.commit("updateBingo",{blockState:this.done,i:this.i,j:this.j})},setColor:function(){this.color=this.done?"green lighten-1":"grey lighten-2"}}}),R=$,T=(n("7df9"),n("ce87")),A=Object(c["a"])(R,P,M,!1,null,null,null),I=A.exports;d()(A,{VContainer:j["a"],VHover:T["a"],VRow:k["a"],VSheet:O["a"]});var H={components:{Block:I},data:function(){return{words:[],wordArray:["Corona","Avond​klok","Maat​regelen","Britse variant","Mutatie","Vaccin​atie","Snel​test","Quaran​taine","Restau​rants","Winkels","Test​bewijs","Vaccinatie​graad","Middel​bare scholen","Basis​scholen","Scholen","Onder​wijs","HBO ","MBO","WO ","Crisis ","Contact​beroep","Cijfers","Risico","Jonge​ren","Oude​ren","RIVM","Mond​kapje","OMT","Veilig​heids​regio","Ander​halve meter ","Sport ","Quaran​taine","Wande​len","Bood​schappen","Symp​tomen","Op Afspraak","Team​sport","Contact​sport","Econo​mie","Gezond​heid","Bedrij​ven","Vaccin","De Zorg","Een​zaam​heid","Team​verband","Mentale Gezond​heid","Festi​vals","Lastige Fase","Verkiez​ingen","Stem​men","Irma is er!","Besmet​tingen","IC","Hoesten","Keel​pijn","Testen","Open​baar","Voort​gezet Onder​wijs","Kapper","Thuis​werken","Basis​regels","Zieken​huizen","Verpleeg​huizen","Experts","Pande​mie","CPB","CBS","Theater","Concert","Inenting","Evene​ment","Scholieren","Golf","Zomer","Herfst","Winter","Lente ","Verant​woord","Onder​zoek","Kwartaal","Bios​copen","Vakan​tie","Reizen","Trein","Handen Wassen","Elle​boog","Knuffels"]}},methods:{randomArray:function(e,t){var n,a,r=e.slice(0),o=e.length,s=o-t;while(o-- >s)a=Math.floor((o+1)*Math.random()),n=r[a],r[a]=r[o],r[o]=n;return r.slice(s)},getRandomlist:function(){for(var e=this.randomArray(this.wordArray,25),t=[],n=0;n<5;n++)t.push(e.slice(5*n,5*n+5));this.words=t}},mounted:function(){this.getRandomlist()}},G=H,F=n("62ad"),W=n("2fa4"),K=Object(c["a"])(G,z,E,!1,null,null,null),L=K.exports;d()(K,{VCol:F["a"],VContainer:j["a"],VRow:k["a"],VSpacer:W["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"pt-0 ma-0 disable-dbl-tap-zoom",attrs:{absolute:""}},[n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",{staticClass:"grey lighten-4"},[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{staticClass:"donottranslate"},[e._v(" mdi-information-variant ")]),n("v-icon",[e._v(" mdi-chevron-up ")])]},proxy:!0}])},[n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{text:"",outlined:""}},[n("v-list-item",{staticClass:"custom-btn",attrs:{href:"https://github.com/icheered/PerscoBingo",target:"_blank",hover:""}},[e._v(" "+e._s((new Date).getFullYear())+" - ICheered "),n("v-icon",{attrs:{right:""}},[e._v("fa-github")])],1)],1)],1)],1),n("v-expansion-panel-content",{attrs:{absolute:""}},[n("v-col",[n("v-row",{staticClass:"justify-center text-center pb-3"},[n("p",{staticClass:"italic"},[e._v(" Issues, vragen, opmerkingen of suggesties? "),n("a",{attrs:{href:"https://icheered.nl/contact/index.html",target:"_blank"}},[e._v(" Contact me! ")])])]),n("v-row",{staticClass:"justify-center text-center"},[n("h3",[e._v(" Laatste update ")])]),n("v-row",{staticClass:"justify-center text-center"},[e._v(" Iedereen heeft nu een random bingokaart! ")])],1)],1)],1)],1)],1)},N=[],Z={data:function(){return{sheet:!1}}},D=Z,Q=(n("4537"),n("8336")),Y=n("cd55"),q=n("49e2"),U=n("c865"),X=n("0393"),ee=n("553a"),te=n("132d"),ne=n("da13"),ae=Object(c["a"])(D,J,N,!1,null,"21aafa3f",null),re=ae.exports;d()(ae,{VBtn:Q["a"],VCol:F["a"],VExpansionPanel:Y["a"],VExpansionPanelContent:q["a"],VExpansionPanelHeader:U["a"],VExpansionPanels:X["a"],VFooter:ee["a"],VIcon:te["a"],VListItem:ne["a"],VRow:k["a"]});var oe={components:{Header:S,BlockArray:L,Footer:re},data:function(){return{}},methods:{niceclick:function(){this.$store.state.render.canGetOverlay=!1}}},se=oe,ie=(n("cccb"),n("a797")),le=Object(c["a"])(se,y,w,!1,null,null,null),ce=le.exports;d()(le,{VBtn:Q["a"],VContainer:j["a"],VOverlay:ie["a"],VRow:k["a"]});var ue=[{path:"/",name:"home",component:ce}];a["a"].use(m["a"]);var de=new m["a"]({routes:ue}),he=de;a["a"].use(r["a"]);var fe=new r["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(e,t){var n=t.blockState,a=t.i,r=t.j;this.state.bingo[a][r]=n?1:0;for(var o=!1,s=0;s<this.state.bingo.length;s++)for(var i=0,l=0;l<this.state.bingo[s].length;l++)1==this.state.bingo[s][l]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(s=0;s<this.state.bingo.length;s++)for(i=0,l=0;l<this.state.bingo[s].length;l++)1==this.state.bingo[l][s]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0);for(i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][s]&&(i+=1);for(5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][4-s]&&(i+=1);5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,o=!0),o||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),ve=fe;a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].component("app",p),new a["a"]({vuetify:b,router:he,store:ve,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,t,n){},"7df9":function(e,t,n){"use strict";n("5262")},a8c9:function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")},d404:function(e,t,n){},de73:function(e,t,n){"use strict";n("a8c9")}});
//# sourceMappingURL=app.6b4a3d5e.js.map