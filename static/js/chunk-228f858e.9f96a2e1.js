(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-228f858e"],{"719e":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("svg-icon",{attrs:{"icon-class":"international"}}),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("mirrorCheck.title")))])],1),t("el-alert",{attrs:{title:e.$t("mirrorCheck.support"),type:"success",closable:!1}}),t("el-row",[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("mirrorCheck.placeholder")},model:{value:e.address,callback:function(r){e.address=r},expression:"address"}})],1),t("el-row",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("mirrorCheck.check")))])],1),e._l(e.resList,(function(e,r){return t("el-alert",{key:r,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),t("div",{staticClass:"imgBox"},[t("el-alert",{attrs:{title:e.$t("mirrorCheck.contact"),type:"info"}}),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},s=[],n=(t("513c"),t("20a5"),t("e35a"),t("0d7a"),t("d211")),i=(t("6a61"),t("2e91")),o={zh:{mirrorCheck:{title:"mirror空投领取资格查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"少年你没有资格领取",checkAddress:"请检查地址是否正确",alert_ok:"可领取MIR的数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{mirrorCheck:{title:"mirror airdrop qualification check:",placeholder:"Please enter eth address for inquiry",check:"Check",networkError:"Juvenile, you are not eligible for it",noPermissions:"Juvenile, you are not eligible for it",checkAddress:"address length incorrect",alert_ok:"Number of MIR you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}},c=t("9905"),l="1mirrorCheck",u={name:"1mirrorCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},methods:{onCheck:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.resList=[],t=e.address.split(","),c["a"].mapLimit(t,e.runNum,function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(t,a){var s,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={},r.prev=1,r.next=4,e.getRes(t);case 4:i=r.sent,o=Number((parseInt(i.data.airdrop[0].amount)/1e18).toFixed(4)),s=Object(n["a"])(Object(n["a"])({},i),{},{status:200,address:t,num:o}),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),s=r.t0.response&&500===r.t0.response.status?{status:500,address:t}:{status:504,address:t};case 12:return r.prev=12,e.addResListItem(a,s),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})));return function(e,t){return r.apply(this,arguments)}}(),(function(e,r){e&&console.log(e),console.log(r,"res 拿到全部结果")}));case 3:case"end":return r.stop()}}),r)})))()},addResListItem:function(e,r){var t={200:this.$t("mirrorCheck.alert_ok",{a:r.num}),500:this.$t("mirrorCheck.noPermissions"),504:this.$t("mirrorCheck.networkError")};this.resList.push(Object(n["a"])(Object(n["a"])({},r),{},{type:200===r.status?"success":"error",desc:t[r.status]})),e(null,Object(n["a"])({},r))},getRes:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$ajax({url:"https://graph.mirror.finance/graphql",method:"post",data:{operationName:"airdrop",variables:{network:"ETH",address:e},query:'query airdrop($address: String!, $network: String = "TERRA") {  airdrop(address: $address, network: $network)}'}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},d=u,h=(t("b8da6"),t("5d22")),p=Object(h["a"])(d,a,s,!1,null,"50d66f5c",null);r["default"]=p.exports},b8da6:function(e,r,t){"use strict";t("d2d5")},d2d5:function(e,r,t){}}]);