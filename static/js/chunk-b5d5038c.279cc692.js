(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5d5038c"],{2530:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"container"},[s._m(0),t("div",{staticClass:"tool"},[t("CreateTokenTab",{staticClass:"tab",attrs:{list:s.tabsList,active:s.activeTabs},on:{onChangeCreateTokenActive:s.onChangeCreateTokenActive}}),t("div",{staticClass:"switchBox"},[t("el-switch",{attrs:{"active-color":"#4c4471","inactive-color":"#d8dfeb","active-text":"已投入"},model:{value:s.isInput,callback:function(a){s.isInput=a},expression:"isInput"}})],1)],1),t("div",{staticClass:"cardList"},[t("el-row",{attrs:{gutter:20}},s._l(s.list,(function(a,e){return t("el-col",{key:e,attrs:{xs:24,sm:8,md:8,lg:8,xl:6}},[t("div",{staticClass:"idoExchange"},[t("div",{staticClass:"iconInfo"},[t("el-image",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png"}},[t("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[t("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png"}})])]),t("span",{staticClass:"name"},[s._v("BTC")])],1),t("div",{staticClass:"exchangeInfo"},[t("div",{staticClass:"info"},[t("span",{staticClass:"label"},[s._v("Remaining limit")]),t("span",{staticClass:"value"},[s._v(s._s(a.quota)+" "+s._s(a.defSybmol))])]),t("div",{staticClass:"info"},[t("span",{staticClass:"label leftAlign"},[s._v("Exchange proportion")]),t("span",{staticClass:"value"},[s._v("1 "+s._s(a.defSybmol)+" : "+s._s(a.rate)+" "+s._s(a.tokenName))])])]),t("div",{staticClass:"statusBox"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"end"}}),t("p",[s._v("Presale Over")])],1),t("div",{staticClass:"progressBox"},[t("el-progress",{attrs:{percentage:a.percentage,"stroke-width":20,color:"#4c4471","text-inside":!0}}),t("div",{staticClass:"textBox"},[t("span",[s._v(s._s(a.self_quota)+" "+s._s(a.defSybmol))]),t("span",[s._v(s._s(a.cap)+" "+s._s(a.defSybmol))])])],1),t("div",{staticClass:"table"},[t("ul",[t("li",[t("span",{staticClass:"label"},[s._v(s._s("Presale Start Time"))]),t("span",{staticClass:"value"},[s._v(s._s(a.startTime))])]),t("li",[t("span",{staticClass:"label"},[s._v(s._s("Presale End Time"))]),t("span",{staticClass:"value"},[s._v(s._s(a.endTime))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:1===a.idotype,expression:"item.idotype===1"}]},[t("span",{staticClass:"label"},[s._v(s._s("Claim Time"))]),t("span",{staticClass:"value"},[s._v(s._s(a.claimTime)),t("span",{directives:[{name:"show",rawName:"v-show",value:a.lockDay>0,expression:"item.lockDay>0"}]},[s._v("(Lock Day: "+s._s(a.lockDay)+")")])])]),t("li",[t("span",{staticClass:"label"},[s._v(s._s("For Sale"))]),t("span",{staticClass:"value"},[s._v(s._s(a.sale)+" "+s._s(a.tokenName))])]),t("li",[t("span",{staticClass:"label"},[s._v(s._s("To raise")+"("+s._s(a.defSybmol)+")")]),t("span",{staticClass:"value"},[s._v(s._s(a.cap)+" "+s._s(a.defSybmol))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.b_amount>0,expression:"item.b_amount > 0"}]},[t("span",{staticClass:"label"},[s._v(s._s("Max Contribution"))]),t("span",{staticClass:"value"},[s._v(s._s(a.b_amount)+" "+s._s(a.defSybmol))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.autoswap,expression:"item.autoswap"}]},[t("span",{staticClass:"label"},[s._v(s._s("Swap Listing Rate"))]),t("span",{staticClass:"value"},[s._v(s._s(a.swapRate)+" "+s._s(a.tokenName)+" per "+s._s(a.defSybmol))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.autoswap,expression:"item.autoswap"}]},[t("span",{staticClass:"label"},[s._v(s._s("Swap Liquidity %"))]),t("span",{staticClass:"value"},[s._v(s._s(a.fundingRate)+" %")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.autoswap,expression:"item.autoswap"}]},[t("span",{staticClass:"label"},[s._v(s._s("Add Liquidity Pool"))]),t("span",{staticClass:"value"},[s._v(s._s(a.add_pool))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.autoswap,expression:"item.autoswap"}]},[t("span",{staticClass:"label"},[s._v(s._s("Liquidity Unlock Date "))]),t("span",{staticClass:"value"},[s._v(s._s(a.lpUnlockTime))])]),t("li",{directives:[{name:"show",rawName:"v-show",value:a.whitelist,expression:"item.whitelist"}]},[t("span",{staticClass:"label"},[s._v(s._s("Whitelist"))]),t("span",{staticClass:"value"},[s._v("True")])])])]),t("div",{staticClass:"btnBox"},[t("button",[s._v(s._s("Detail"))])])])])})),1)],1)])},i=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"header"},[t("h1",[s._v("IDO")])])}],l=t("efe2"),n=t("52c1"),o=t("7691"),c={zh:{demo:{}},en:{demo:{}}},r="idoList",v={name:r,inject:["onCheckConnect"],components:{CreateTokenTab:o["a"]},data:function(){return{isInput:!1,list:[{over_start:!1,whitelist:!1,isw:!1,buy:!0,c:56,contract:"",tokenContract:"",init_loading:!0,isEnd:!1,loading:!1,inputModel:"",isUnfold:!0,rate:0,countDown:"",quota:0,cap:0,startTime:"0",b_amount:0,endTime:"",claimTime:0,lockDay:0,Balance:0,startTimeunix:0,endTimeunix:0,claimTimeunix:0,xtoken:0,sale:0,asale:0,idotype:0,defSybmol:"ETH",decimal:18,startIdostatus:!1,route_title:"",route_icon:"",saleok:!1,tokenBalance:0,tokenName:"",totalSupply:0,isdisabledFn:!0,self_quota:0,sjInfo:!1,autoswap:!1,swapRate:"",fundingRate:"",lpUnlockTime:"",logo:"",web:"",twitter:"",telegram:"",github:"",newVersion:!1,comment:!1,description:"",pairAddress:"",add_pool:"",scanlink:"",percentage:50}],tabsList:[],activeTabs:0}},computed:Object(l["a"])({},Object(n["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[r]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.tabsList=[{value:0,label:"All"},{value:1,label:"NotStarted"},{value:2,label:"Start"},{value:3,label:"End"}]},mounted:function(){},methods:{onChangeCreateTokenActive:function(s){this.activeTabs=s}}},u=v,d=(t("6cab"),t("5d22")),p=Object(d["a"])(u,e,i,!1,null,"2b19bc4c",null);a["default"]=p.exports},"6cab":function(s,a,t){"use strict";t("7721")},7721:function(s,a,t){}}]);