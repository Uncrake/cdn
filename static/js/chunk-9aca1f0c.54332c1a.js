(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aca1f0c"],{"4bb1":function(e,t,a){},a0ab:function(e,t,a){"use strict";a("4bb1")},cc95:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("svg-icon",{attrs:{"icon-class":"international"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("avaxCheck.title")))])],1),a("el-alert",{attrs:{title:e.$t("avaxCheck.support"),type:"success",closable:!1}}),a("el-row",[a("el-input",{attrs:{type:"textarea",placeholder:e.$t("avaxCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("el-row",{staticStyle:{margin:"10px 0"}},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("avaxCheck.check")))])],1),a("el-alert",{attrs:{title:"AVAX雪崩网络空投:在12月7日前持有UNI和SUSHI 代币的持有人空投，空投数量:UNI=0.7*(UNI数量^0.8)，SUSHI=0.7*(SUSHI^0.8)，领取在官网领取，非ETH网络，一个PNG按照2.11日现价48元左右",type:"info",effect:"dark"}}),a("br"),e._l(e.resList,(function(e,t){return a("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),a("div",{staticClass:"imgBox"},[a("el-alert",{attrs:{title:e.$t("avaxCheck.contact"),type:"info"}}),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},s=[],n=a("efe2"),c=a("4833"),i=(a("6a61"),a("37de"),a("22f9"),a("65f0"),a("05d6"),a("1e34"),{zh:{avaxCheck:{title:"AVAX空投领取资格查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"少年你没有资格领取",checkAddress:"请检查地址是否正确",alert_ok:"可领取PNG的数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{avaxCheck:{title:"avax airdrop qualification check:",placeholder:"Please enter eth address for inquiry",check:"Check",networkError:"Juvenile, you are not eligible for it.",noPermissions:"Juvenile, you are not eligible for it",checkAddress:"address length incorrect",alert_ok:"Number of PNG you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}}),o=a("9905"),l="avaxCheck",u={name:"AvaxCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,e.resList=[],r=e.address.split(","),o["a"].mapLimit(r,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(r,s){var c,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={},t.prev=1,t.next=4,e.getRes(r);case 4:i=t.sent,o=Number((parseInt(i.result)/1e18).toFixed(4)),c=Object(n["a"])(Object(n["a"])({},i),{},{status:200,address:r,num:o}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),c=t.t0.response&&500===t.t0.response.status?{status:500,address:r}:{status:504,address:r};case 12:return t.prev=12,a.addResListItem(s,c),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,a){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var a={200:this.$t("avaxCheck.alert_ok",{a:t.num}),500:this.$t("avaxCheck.noPermissions"),504:this.$t("avaxCheck.networkError")};this.resList.push(Object(n["a"])(Object(n["a"])({},t),{},{type:200===t.status?"success":"error",desc:a[t.status]})),e(null,Object(n["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:"https://api.avax.network/ext/bc/C/rpc",method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x0C58C2041da4CfCcF5818Bbe3b66DBC23B3902d9",data:"0x4f420151000000000000000000000000"+e.replace("0x","")},"latest"]}});case 2:return r=a.sent,a.abrupt("return",r);case 4:case"end":return a.stop()}}),a)})))()}}},d=u,h=(a("a0ab"),a("5d22")),p=Object(h["a"])(d,r,s,!1,null,"14b1062b",null);t["default"]=p.exports}}]);