(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e28786c"],{"3aca":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("svg-icon",{attrs:{"icon-class":"international"}}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("lonCheck.title")))])],1),r("el-alert",{attrs:{title:e.$t("lonCheck.support"),type:"success",closable:!1}}),r("el-row",[r("el-input",{attrs:{type:"textarea",placeholder:e.$t("lonCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),r("el-row",{staticStyle:{margin:"10px 0"}},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("lonCheck.check")))])],1),e._l(e.resList,(function(e,t){return r("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),r("div",{staticClass:"imgBox"},[r("el-alert",{attrs:{title:e.$t("lonCheck.contact"),type:"info"}}),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},n=[],a=(r("a9e3"),r("b680"),r("ac1f"),r("1276"),r("5530")),c=(r("96cf"),r("1da1")),o={zh:{lonCheck:{title:"LON空投领取资格查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"因网络原因查询失败，请稍后重试",alert_ok:"可领取LON的数量:   {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb",checkAddress:"请检查地址是否正确"}},en:{lonCheck:{title:"Lon airdrop qualification check:",placeholder:"Please enter eth address for inquiry",check:"Check",noPermissions:"Juvenile, you are not eligible for it",networkError:"The query failed for network reasons. Please try again.",alert_ok:"Number of Lon you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb",checkAddress:"address length incorrect"}}},i=r("71f1"),l=r.n(i),u="lonCheck",d={name:"LonCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[u]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],r=e.address.split(","),console.log(r),l.a.mapLimit(r,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(r,s){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,e.getRes(r);case 4:a=t.sent,console.log(a),a.length>0?(c=Number((parseInt(a[0].balance)/1e18).toFixed(4)),n={status:200,num:c,address:r}):n={status:500,num:0,address:r},t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),n=t.t0.response&&400===t.t0.response.status?{status:400,address:r}:{status:504,address:r};case 12:return t.prev=12,e.addResListItem(s,n),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,r){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e),console.log(t,"res 拿到全部结果")}));case 4:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var r={200:this.$t("lonCheck.alert_ok",{a:t.num}),500:this.$t("lonCheck.noPermissions"),400:this.$t("lonCheck.checkAddress"),504:this.$t("lonCheck.networkError")};this.resList.push(Object(a["a"])(Object(a["a"])({},t),{},{type:200===t.status?"success":"error",desc:r[t.status]})),e(null,Object(a["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:"https://api.tokenlon.im/v1/lon-edge/accounts/"+e+"/claims?status=all",method:"get"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}}},h=d,p=(r("41ac"),r("2877")),m=Object(p["a"])(h,s,n,!1,null,"9432d572",null);t["default"]=m.exports},"41ac":function(e,t,r){"use strict";r("f884")},f884:function(e,t,r){}}]);