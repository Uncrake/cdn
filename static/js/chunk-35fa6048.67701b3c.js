(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35fa6048"],{"03f6":function(t,e,s){"use strict";s("577c")},"111a":function(t,e,s){"use strict";s("5a8e")},"30db":function(t,e,s){},"36bc":function(t,e,s){},"577c":function(t,e,s){},"5a8e":function(t,e,s){},"9fd6":function(t,e,s){"use strict";s("30db")},d123:function(t,e,s){"use strict";s("36bc")},e023:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"headerBox"},[s("div",{staticClass:"imgBox"},[s("el-image",{staticClass:"img",attrs:{src:t.data.file,"preview-src-list":[t.data.file],fit:"contain"}})],1),s("div",{staticClass:"btnList"},[s("div",{staticClass:"iconBox",on:{click:function(e){return t.onDownLoad()}}},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"download"}})],1)])]),s("Tab",{attrs:{list:t.tabList,active:t.tabActive},on:{onChangeTabActive:t.onChangeTabActive}}),s("div",{directives:[{name:"show",rawName:"v-show",value:"assets"===t.tabActive,expression:"tabActive === 'assets'"}],staticClass:"assets"},[s("div",{staticClass:"leftBox"},[s("h1",{staticClass:"title"},[t._v(t._s(t.data.name))]),s("p",{staticClass:"desc"},[t._v(t._s(t.data.desc))]),s("ul",{staticClass:"addressOwner"},[s("li",[s("span",{staticClass:"label"},[t._v("MINTER")]),s("p",[s("el-tooltip",{attrs:{effect:"dark",content:t.data.minter,placement:"top"}},[s("span",[t._v(" "+t._s(t._f("miniAddress")(t.data.minter))+" ")])]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data.minter,expression:"data.minter",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[s("svg-icon",{staticClass:"copyIcon",attrs:{"icon-class":"copy"}})],1)],1)]),s("li",[s("span",{staticClass:"label"},[t._v("OWNER")]),s("p",[s("el-tooltip",{attrs:{effect:"dark",content:t.data.owner,placement:"top"}},[s("span",[t._v(" "+t._s(t._f("miniAddress")(t.data.owner))+" ")])]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data.owner,expression:"data.owner",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[s("svg-icon",{staticClass:"copyIcon",attrs:{"icon-class":"copy"}})],1)],1)])]),s("div",{staticClass:"baseBox nftDetail"},[s("h5",[t._v("NFT DETAILS")]),s("ul",[s("li",[s("span",{staticClass:"label"},[t._v("Contract Address")]),s("span",{staticClass:"value"},[s("el-tooltip",{attrs:{effect:"dark",content:t.data.contractAddress,placement:"top"}},[s("i",[t._v(t._s(t._f("miniAddress")(t.data.contractAddress)))])]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data.contractAddress,expression:"data.contractAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[s("svg-icon",{staticClass:"copyIcon",attrs:{"icon-class":"copy"}})],1)],1)]),t._m(0),t._m(1),t._m(2)])])]),s("div",{staticClass:"rightBox"},[s("div",{staticClass:"baseBox"},[t._m(3),t._m(4),s("div",{staticClass:"li"},[s("h5",[t._v("BIDDER")]),s("div",{staticClass:"infoBox"},[s("div",{staticClass:"avatars"}),s("p",{staticClass:"address"},[s("el-tooltip",{attrs:{effect:"dark",content:t.data.bidder,placement:"top"}},[s("span",[t._v(" "+t._s(t._f("miniAddress")(t.data.bidder))+" ")])]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data.bidder,expression:"data.bidder",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[s("svg-icon",{staticClass:"copyIcon",attrs:{"icon-class":"copy"}})],1)],1)])]),s("div",{staticClass:"li"},[s("h5",[t._v("OWNER")]),s("div",{staticClass:"infoBox"},[s("div",{staticClass:"avatars"}),s("p",{staticClass:"address"},[s("el-tooltip",{attrs:{effect:"dark",content:t.data.owner,placement:"top"}},[s("span",[t._v(" "+t._s(t._f("miniAddress")(t.data.owner))+" ")])]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data.owner,expression:"data.owner",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[s("svg-icon",{staticClass:"copyIcon",attrs:{"icon-class":"copy"}})],1)],1)])]),t._m(5)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"items"===t.tabActive,expression:"tabActive === 'items'"}],staticClass:"list"},[s("ItemsTab")],1)],1)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"label"},[t._v("Blockchain")]),s("span",{staticClass:"value"},[t._v("ETHEREUM")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"label"},[t._v("Transaction")]),s("span",{staticClass:"value"},[t._v("Link")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"label"},[t._v("已锻造的数量")]),s("span",{staticClass:"value"},[t._v("100")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"li"},[s("h5",[t._v("HIGHEST BID")]),s("div",{staticClass:"priceBox"},[s("span",{staticClass:"coinPrice"},[t._v("0.1300 ETH")]),s("span",{staticClass:"usdtPrice"},[t._v("$516.11")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"li"},[s("h5",[t._v("AUCTION ENDS")]),s("div",{staticClass:"infoBox"},[s("span",[t._v("2021-10-28 12:30:00")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btnBox"},[s("button",{attrs:{type:"button"}},[t._v("Mint")])])}],i=s("efe2"),n=s("52c1"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabDiv"},[s("ul",{staticClass:"tab"},t._l(t.list,(function(e){return s("li",{key:e.value,class:{on:t.active===e.value},on:{click:function(s){return t.onChangeTabActive(e.value)}}},[t._v(t._s(e.label))])})),0)])},l=[],r=(s("65f0"),{name:"CreateTokenTab",components:{},props:{list:{type:Array,default:function(){return[]}},active:{type:[Number,String],require:!0}},data:function(){return{}},methods:{onChangeTabActive:function(t){this.$emit("onChangeTabActive",t)}}}),d=r,p=(s("d123"),s("5d22")),u=Object(p["a"])(d,o,l,!1,null,"29704a2f",null),m=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"items"},[s("ListBox",{attrs:{list:t.list}},[s("div",{staticClass:"filterBox"},[s("el-form",{staticClass:"formBox",attrs:{inline:!0,model:t.form,"label-suffix":":"}},[s("div",{staticClass:"formLeft"},[s("el-form-item",[s("el-checkbox",{model:{value:t.form.isShowSelfNft,callback:function(e){t.$set(t.form,"isShowSelfNft",e)},expression:"form.isShowSelfNft"}},[t._v("只展示我持有的NFT")])],1)],1),s("div",{staticClass:"formRight"},[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{attrs:{placeholder:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"Type"}},[s("el-radio-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[s("el-radio-button",{attrs:{label:"All"}}),s("el-radio-button",{attrs:{label:"Active"}}),s("el-radio-button",{attrs:{label:"End"}})],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("Search")])],1)],1)])],1)])],1)},v=[],b=s("e367"),h={inject:["onCopySuccess"],components:{ListBox:b["a"]},data:function(){return{form:{name:"",type:"All",isShowSelfNft:!0},list:[{file:"https://pbs.twimg.com/profile_images/1448639174337351680/iOhqCZUn_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://desperateapewives.com/wp-content/uploads/Cleopatra-2.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://pbs.twimg.com/profile_images/1444633075586150405/K-qLgPjX_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://pbs.twimg.com/profile_images/1444633075586150405/K-qLgPjX_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://uploads-ssl.webflow.com/6171f5fb62e10573628403a1/61749174ec14862b5f22afa3_TOP-R-p-500.png",name:"cccc11",desc:"desc",price:"1",chain:"eth"}]}},computed:Object(i["a"])({},Object(n["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){},methods:{onSearch:function(){console.log("onSearch")}}},C=h,_=Object(p["a"])(C,f,v,!1,null,null,null),g=_.exports,w={zh:{nftAssets:{}},en:{nftAssets:{}}},y="nftAssets",x={name:y,inject:["onCopySuccess"],components:{Tab:m,ItemsTab:g},data:function(){return{viewName:y,data:{name:"Voice Recording 45 (Bliss Original Demo)",desc:"The original iPhone voice memo, and the first recorded instance of Santangelo's \"Bliss\". This is the only version of the song that features no collaborators and the production and songwriting is fully that of the artist. \n This item is the first of a series of original iPhone voice memos to be released from Santangelo's upcoming album AdWorld.",file:"https://d2iccaf7eutw5f.cloudfront.net/0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7/5790/poster",minter:"0xb56Ce069e2eC13568BC6Bd1cb6e13d9899B4d212",owner:"0xb56Ce069e2eC13568BC6Bd1cb6e13d9899B4d212",bidder:"0xb56Ce069e2eC13568BC6Bd1cb6e13d9899B4d212",contractAddress:"0xb56Ce069e2eC13568BC6Bd1cb6e13d9899B4d212"},tabList:[{label:"Assets",value:"assets"},{label:"Items",value:"items"}],list:[{file:"https://pbs.twimg.com/profile_images/1448639174337351680/iOhqCZUn_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://desperateapewives.com/wp-content/uploads/Cleopatra-2.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://pbs.twimg.com/profile_images/1444633075586150405/K-qLgPjX_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://pbs.twimg.com/profile_images/1444633075586150405/K-qLgPjX_400x400.jpg",name:"cccc11",desc:"desc",price:"1",chain:"eth"},{file:"https://uploads-ssl.webflow.com/6171f5fb62e10573628403a1/61749174ec14862b5f22afa3_TOP-R-p-500.png",name:"cccc11",desc:"desc",price:"1",chain:"eth"}],tabActive:"assets"}},computed:Object(i["a"])({},Object(n["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[y]||(this.$i18n.mergeLocaleMessage("en",w.en),this.$i18n.mergeLocaleMessage("zh",w.zh))},mounted:function(){},methods:{downloadIamge:function(t,e){var s=new Image;s.setAttribute("crossOrigin","anonymous"),s.onload=function(){var t=document.createElement("canvas");t.width=s.width,t.height=s.height;var a=t.getContext("2d");a.drawImage(s,0,0,s.width,s.height);var c=t.toDataURL("image/png"),i=document.createElement("a"),n=new MouseEvent("click");i.download=e||"photo",i.href=c,i.dispatchEvent(n)},s.src=t},onDownLoad:function(){this.downloadIamge(this.data.file,"pic")},onChangeTabActive:function(t){this.tabActive=t}}},B=x,A=(s("9fd6"),s("03f6"),Object(p["a"])(B,a,c,!1,null,"fa1d75d4",null));e["default"]=A.exports},e367:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listBox"},[s("div",{staticClass:"line"}),t._t("default"),s("ul",{staticClass:"list"},t._l(t.list,(function(e,a){return s("li",{key:a,staticClass:"item"},[s("div",{staticClass:"imgSize"},[s("div",{staticClass:"imgBox"},[s("el-image",{staticClass:"img",attrs:{src:e.file,"preview-src-list":[e.file],fit:"contain"}})],1)]),s("div",{staticClass:"baseBox"},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc"},[t._v(t._s(e.desc))])]),s("ul",{staticClass:"otherBox"},[s("li",[s("span",{staticClass:"label"},[t._v("Price")]),s("span",{staticClass:"value"},[t._v(t._s(e.price)+" ETH")])]),t._m(0,!0)])])})),0)],2)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"label"},[t._v("Status")]),s("span",{staticClass:"value"},[t._v("END")])])}],i=s("efe2"),n=s("52c1"),o="nftListBox",l={inject:["onCopySuccess"],components:{},props:{list:{require:!0,type:Array}},data:function(){return{viewName:o}},computed:Object(i["a"])({},Object(n["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){},methods:{onCreate:function(){this.$router.push({name:"nftCreate"})}}},r=l,d=(s("111a"),s("5d22")),p=Object(d["a"])(r,a,c,!1,null,"07cdfa16",null);e["a"]=p.exports}}]);