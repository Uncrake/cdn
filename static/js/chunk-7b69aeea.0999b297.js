(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b69aeea"],{"18f2":function(e,t,n){},"2bcb":function(e,t,n){"use strict";n("9d46")},"326e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Card",{attrs:{"is-show-admin-btn":!1,icon:e.icon,title:1===e.createType?e.$t("tokenAdmin.idoTitle"):e.$t("route.tokenAdmin"),desc:e.$t("tokenAdmin.pageDesc")}},[e.isVerify?e._e():n("div",{staticClass:"verifyToken"},[n("CreateTokenTab",{staticStyle:{margin:"40px 0"},attrs:{list:e.tabsList,active:e.createType},on:{onChangeCreateTokenActive:e.onChangeCreateTokenActive}}),n("div",{staticClass:"verifyBox"},[n("el-input",{attrs:{placeholder:e.$t("tokenAdmin.verifyPlaceholder")},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),n("el-button",{staticClass:"verifyBtn",attrs:{type:"primary",loading:e.loading},on:{click:e.onGoAdmin}},[e._v(e._s(e.$t("tokenAdmin.verifyBtn")))])],1)],1),n("TokenAdminForm",{directives:[{name:"show",rawName:"v-show",value:e.isVerify&&0===e.createType,expression:"isVerify && createType === 0"}],ref:"TokenAdminForm",attrs:{token:e.token},on:{onSetIsVerify:e.onSetIsVerify}}),n("IdoAdminForm",{directives:[{name:"show",rawName:"v-show",value:e.isVerify&&1===e.createType,expression:"isVerify && createType === 1"}],ref:"IdoAdminForm",attrs:{token:e.token},on:{onSetIsVerify:e.onSetIsVerify}})],1)],1)},r=[],o=(n("a9e3"),n("96cf"),n("1da1")),s=n("5530"),i=n("2f62"),c={zh:{tokenAdmin:{rate:"兑换比例",cap:"募集总量",no_null:"不能为空!",uplimit:"最大额度",startTime:"启动时间",endDays:"募集天数",lockDays:"锁定天数",adminAddress:"管理员地址",idoTitle:"IDO 管理",idoLink:"IDO链接",update:"更新",pageDesc:"管理在CoinTool.App创建的代币功能",placeEnterToken:"请输入Token地址",tokenName:"代币名称：",initialSupply:"代币数量：",add:"增发：",DenverDeflaionaryDecay:"通货紧缩",blackadd:"黑名单添加",blackdel:"黑名单解除",unlockwallet:"请解锁钱包",noadmin:"抱歉，这个Token不属于你",nowebcreate:"抱歉，此Token本站不提供服务",destroyNum:"销毁数量：",ojbk:"操作成功",addBlackList:"黑名单：",coinState:"Token暂停：",confirm:"确定",tokenAddress:"Token地址:",getInfo:"获取信息",verifyBtn:"进入管理后台",cAlltoken:"取回全部Token",owner:"管理员",verifyPlaceholder:"请输入要管理的Token地址",input_1:"请输入要添加的黑名单地址",input_2:"请输入销毁数量",input_3:"请输入要增发的数量",input_4:"请输入要增发的地址",createTab1:"创建代币",createTab2:"IDO创建"}},en:{tokenAdmin:{rate:"Rate",cap:"To raise",update:"Update",uplimit:"Max. contribution",no_null:"Cannot be empty!",startTime:"Start time",endDays:"sale Days",lockDays:"lock Days",adminAddress:"Admin address",idoTitle:"IDO Manage token",idoLink:"IDO Link",pageDesc:"Manage the token function created in CoinTool.App",placeEnterToken:"Please enter the token address",tokenName:"Token name:",initialSupply:"Number of tokens:",add:"Mint:",owner:"Owner",blackadd:"Blacklist add",blackdel:"blacklist unlock",unlockwallet:"Please unlock the wallet",noadmin:"Sorry, this Token does not belong to you",nowebcreate:"Sorry, this Token is not available on this site",destroyNum:"Burn:",ojbk:"Operation successful",addBlackList:"Blacklist:",coinState:"Token suspension:",confirm:"Confirm",tokenAddress:"Token address:",getInfo:"Get Info",DenverDeflaionaryDecay:"Deflaionary",verifyBtn:"Enter admin backend",cAlltoken:"Claim All Token",verifyPlaceholder:"Please enter the Token address to be managed",input_1:"Please enter the address of the blacklist you want to add",input_2:"Please enter the number of destruction",input_3:"Please enter the quantity to be added",input_4:"Please enter the address to be added",createTab1:"Create Token",createTab2:"IDO Create"}}},l=n("12f9"),u=n("7691"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"right":"top",rules:e.rules,model:e.form,"label-width":"zh"===e.language?"130px":"150px"}},[n("el-form-item",{attrs:{label:e.$t("tokenAdmin.tokenName")}},[n("el-tag",[e._v(e._s(e.form.symbol))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.initialSupply")}},[n("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.form.initialSupply))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.owner")}},[n("el-input",{staticClass:"input",model:{value:e.form.owner,callback:function(t){e.$set(e.form,"owner",t)},expression:"form.owner"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.transferOwnership}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.DeflaionaryV2,expression:"!DeflaionaryV2"}],attrs:{label:e.$t("tokenAdmin.coinState")}},[n("el-switch",{staticStyle:{display:"block","margin-top":"6px"},attrs:{"active-color":"#1890ff","inactive-color":"#DCDFE6"},on:{change:e.onPaused},model:{value:e.form.coinState,callback:function(t){e.$set(e.form,"coinState",t)},expression:"form.coinState"}})],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.DeflaionaryV2,expression:"!DeflaionaryV2"}],attrs:{label:e.$t("tokenAdmin.addBlackList")}},[n("el-radio-group",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[n("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$t("tokenAdmin.blackadd")))]),n("el-radio",{attrs:{label:"2"}},[e._v(e._s(e.$t("tokenAdmin.blackdel")))])],1),n("br"),n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_1")},model:{value:e.form.blackAddress,callback:function(t){e.$set(e.form,"blackAddress",t)},expression:"form.blackAddress"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onblackAddress}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.DeflaionaryV2,expression:"!DeflaionaryV2"}],attrs:{label:e.$t("tokenAdmin.destroyNum")}},[n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_2")},model:{value:e.form.destroyNum,callback:function(t){e.$set(e.form,"destroyNum",t)},expression:"form.destroyNum"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onBurn}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.DeflaionaryV2,expression:"!DeflaionaryV2"}],attrs:{label:e.$t("tokenAdmin.add")}},[n("div",{staticStyle:{display:"inline-block"}},[n("el-input",{staticClass:"addNum",attrs:{placeholder:e.$t("tokenAdmin.input_3")},model:{value:e.form.addNum,callback:function(t){e.$set(e.form,"addNum",t)},expression:"form.addNum"}}),n("br"),n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_4")},model:{value:e.form.addAddress,callback:function(t){e.$set(e.form,"addAddress",t)},expression:"form.addAddress"}})],1),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onMint}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.Deflaionary||e.DeflaionaryV2,expression:"Deflaionary || DeflaionaryV2"}],attrs:{label:e.$t("tokenAdmin.DenverDeflaionaryDecay")}},[n("div",{staticStyle:{display:"inline-block"}},[n("el-input",{staticClass:"addNum",attrs:{type:"number",min:1,max:99,oninput:"value=value.substr(0,2);"},model:{value:e.form.transactionFee,callback:function(t){e.$set(e.form,"transactionFee",t)},expression:"form.transactionFee"}},[n("template",{slot:"append"},[e._v("%")])],2),n("br"),n("el-input",{staticClass:"addNum",attrs:{type:"number",min:1,max:99,oninput:"value=value.substr(0,2);"},model:{value:e.form.BurnFee,callback:function(t){e.$set(e.form,"BurnFee",t)},expression:"form.BurnFee"}},[n("template",{slot:"append"},[e._v("%")])],2),n("el-input",{directives:[{name:"show",rawName:"v-show",value:e.DeflaionaryV2,expression:"DeflaionaryV2"}],staticClass:"addNum",attrs:{type:"number",min:1,max:99,oninput:"value=value.substr(0,2);"},model:{value:e.form.charityFee,callback:function(t){e.$set(e.form,"charityFee",t)},expression:"form.charityFee"}},[n("template",{slot:"append"},[e._v("%")])],2),n("br"),n("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.DeflaionaryV2,expression:"!DeflaionaryV2"}],staticClass:"input",model:{value:e.form.transactionFeeAddress,callback:function(t){e.$set(e.form,"transactionFeeAddress",t)},expression:"form.transactionFeeAddress"}})],1),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onDeflaionary}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1)],1)},m=[],p=(n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("498a"),n("b893")),f=n("c039"),k=n.n(f),h=n("a835"),b=n("81ad"),g=n.n(b),x=n("901e"),v=n.n(x),y=n("5ba3"),A="tokenAdmin",w={inject:["onCheckConnect"],props:{token:{type:String,required:!0}},data:function(){return{loading:!0,Deflaionary:!1,DeflaionaryV2:!1,decimals:0,rules:{},form:{destroyNum:"",blackAddress:"",radio:"1",owner:"",coinState:!0,addNum:"",addAddress:"",transactionFeeAddress:"",transactionFee:"",BurnFee:"",charityFee:"",symbol:"BTC",initialSupply:21e6}}},computed:Object(s["a"])({},Object(i["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[A]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh))},mounted:function(){},methods:{init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,s,i,c,l,u,d,m,f,b,g,x,v,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={to:e.token,data:"0x8da5cb5b"},t.next=3,h["a"].sendEthcall(n);case 3:if(a=t.sent,a.replace("000000000000000000000000","").toLowerCase()===h["a"].getAccount().toLowerCase()){t.next=8;break}return e.$message.error(e.$t("tokenAdmin.noadmin")),e.$emit("onSetIsVerify",!1),t.abrupt("return");case 8:return e.form.owner=h["a"].getAccount(),r={to:e.token,data:"0x95d89b41"},o={to:e.token,data:"0x313ce567"},s={to:e.token,data:"0x18160ddd"},i={to:e.token,data:"0x5c975abb"},t.next=15,h["a"].sendEthcall(r);case 15:return c=t.sent,t.next=18,h["a"].sendEthcall(o);case 18:return l=t.sent,t.next=21,h["a"].sendEthcall(s);case 21:return u=t.sent,t.prev=22,t.next=25,h["a"].sendEthcall(i);case 25:d=t.sent,e.form.coinState=0!==parseInt(d),t.next=31;break;case 29:t.prev=29,t.t0=t["catch"](22);case 31:return t.prev=31,m={to:e.token,data:"0xb5862428"},f={to:e.token,data:"0x7b7e8bac"},b={to:e.token,data:"0xae9dd5e0"},g={to:e.token,data:"0x77ef7993"},t.t1=parseInt,t.next=39,h["a"].sendEthcall(b);case 39:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),e.form.transactionFee=t.t3/100,t.t4=parseInt,t.next=45,h["a"].sendEthcall(m);case 45:return t.t5=t.sent,t.t6=(0,t.t4)(t.t5),e.form.charityFee=t.t6/100,t.t7=parseInt,t.next=51,h["a"].sendEthcall(g);case 51:return t.t8=t.sent,t.t9=(0,t.t7)(t.t8),e.form.BurnFee=t.t9/100,t.next=56,h["a"].sendEthcall(f);case 56:e.form.transactionFeeAddress=t.sent.replace("000000000000000000000000",""),e.DeflaionaryV2=!0,t.next=63;break;case 60:t.prev=60,t.t10=t["catch"](31),console.log(t.t10);case 63:if(t.prev=63,e.DeflaionaryV2){t.next=82;break}return x={to:e.token,data:"0x7b7e8bac"},v={to:e.token,data:"0xcf820461"},y={to:e.token,data:"0xfce589d8"},t.t11=parseInt,t.next=71,h["a"].sendEthcall(v);case 71:return t.t12=t.sent,e.form.transactionFee=(0,t.t11)(t.t12),t.t13=parseInt,t.next=76,h["a"].sendEthcall(y);case 76:return t.t14=t.sent,e.form.BurnFee=(0,t.t13)(t.t14),t.next=80,h["a"].sendEthcall(x);case 80:e.form.transactionFeeAddress=t.sent.replace("000000000000000000000000",""),e.Deflaionary=!0;case 82:t.next=87;break;case 84:t.prev=84,t.t15=t["catch"](63),console.log(t.t15);case 87:e.$emit("onSetIsVerify",!0),e.decimals=parseInt(l),e.form.initialSupply=u/Math.pow(10,parseInt(l)),e.form.symbol=p["a"].cleanAsciiText(k.a.toAscii(c).toString());case 91:case"end":return t.stop()}}),t,null,[[22,29],[31,60],[63,84]])})))()},transferOwnership:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object(y["isAddress"])(e.form.owner)){t.next=3;break}return e.$message.error("Address error"),t.abrupt("return");case 3:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("transferOwnership",["address"]).toString("hex")+g.a.rawEncode(["address"],[e.form.owner]).toString("hex")},t.next=6,h["a"].sendTransaction(n);case 6:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 8:case"end":return t.stop()}}),t)})))()},onDeflaionary:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.DeflaionaryV2){t.next=4;break}n=g.a.methodID("updateFee",["uint256","uint256","uint256"]).toString("hex")+g.a.rawEncode(["uint256","uint256","uint256"],[e.form.transactionFee,e.form.BurnFee,e.form.charityFee]).toString("hex"),t.next=8;break;case 4:if(Object(y["isAddress"])(e.form.transactionFeeAddress)){t.next=7;break}return e.$message.error("Address error"),t.abrupt("return");case 7:n=g.a.methodID("updateFee",["uint256","uint256","address"]).toString("hex")+g.a.rawEncode(["uint256","uint256","address"],[e.form.transactionFee,e.form.BurnFee,e.form.transactionFeeAddress.trim()]).toString("hex");case 8:return a={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+n},t.next=11,h["a"].sendTransaction(a);case 11:r=t.sent,r&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 13:case"end":return t.stop()}}),t)})))()},onblackAddress:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="1"===e.form.radio,a={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("blackListAddress",["address","bool"]).toString("hex")+g.a.rawEncode(["address","bool"],[e.form.blackAddress,n]).toString("hex")},t.next=4,h["a"].sendTransaction(a);case 4:r=t.sent,r&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 6:case"end":return t.stop()}}),t)})))()},onPaused:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.form.coinState?"0x8456cb59":"0x3f4ba83a",a={from:h["a"].getAccount(),to:e.token,value:"0x0",data:n},t.next=4,h["a"].sendTransaction(a);case 4:r=t.sent,r&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 6:case"end":return t.stop()}}),t)})))()},onBurn:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("burn",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(e.decimals).times(e.form.destroyNum).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},onMint:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("mint",["address","uint256"]).toString("hex")+g.a.rawEncode(["address","uint256"],[e.form.addAddress,new v.a(10).pow(e.decimals).times(e.form.addNum).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()}}},$=w,T=(n("2bcb"),n("2877")),D=Object(T["a"])($,d,m,!1,null,"f6c25f5e",null),S=D.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"right":"top",rules:e.rules,model:e.form,"label-width":"zh"===e.language?"130px":"150px"}},[n("el-form-item",{attrs:{label:e.$t("tokenAdmin.idoLink")}},[n("el-tag",[n("a",{attrs:{target:"_blank",href:"https://cointool.app/ido/exchange?menu=1&contact=1&address="+e.token+"&c="+e.chainId}},[e._v(e._s(e.token))])]),n("el-alert",{attrs:{title:"Or send BNB / ETH / HT to Ido contract, which can be exchanged directly",type:"info"}}),n("p",[e._v("Please send "),n("el-tag",{attrs:{type:"danger"}},[e._v(" "+e._s(e.sale))]),e._v(" tokens to the Ido contract address,Used for IDO sending to users")],1)],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.tokenAddress")}},[n("el-input",{staticClass:"input",model:{value:e.form.tokenAddress,callback:function(t){e.$set(e.form,"tokenAddress",t)},expression:"form.tokenAddress"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.ontokenAddress}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.rate")}},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onrate}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.cap")}},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.cap,callback:function(t){e.$set(e.form,"cap",t)},expression:"form.cap"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.oncap}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.uplimit")}},[n("el-input",{model:{value:e.form.uplimit,callback:function(t){e.$set(e.form,"uplimit",t)},expression:"form.uplimit"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onuplimit}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.startTime")}},[n("el-date-picker",{attrs:{type:"datetime"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onstartTime}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.endDays")}},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.endDays,callback:function(t){e.$set(e.form,"endDays",t)},expression:"form.endDays"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onendDays}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.lockDays")}},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.lockDays,callback:function(t){e.$set(e.form,"lockDays",t)},expression:"form.lockDays"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onlockDays}},[e._v(e._s(e.$t("tokenAdmin.update")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.cAlltoken")}},[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.oncAlltoken}},[e._v(e._s(e.$t("tokenAdmin.cAlltoken")))])],1)],1)},C=[],j="tokenAdmin",I={inject:["onCheckConnect"],props:{token:{type:String,required:!0}},data:function(){return{loading:!0,decimals:0,sale:0,rules:{},form:{tokenAddress:"",startTime:"",rate:"",cap:"",uplimit:"",lockDays:"",endDays:""}}},computed:Object(s["a"])({},Object(i["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[j]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh))},mounted:function(){},methods:{init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.chainId=h["a"].getChainId(),n={to:e.token,data:"0x8da5cb5b"},t.next=4,h["a"].sendEthcall(n);case 4:return a=t.sent,a.replace("000000000000000000000000","").toLowerCase()!==h["a"].getAccount().toLowerCase()&&e.$message.error(e.$t("tokenAdmin.noadmin")),t.next=8,e.$ajax({url:h["a"].rpcNode(h["a"].getChainId()),method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e.token,data:"0x9d76ea58"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:e.token,data:"0xba9a061a"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:e.token,data:"0xc549e6b9"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:e.token,data:"0x664e9704"},"latest"]},{jsonrpc:"2.0",id:5,method:"eth_call",params:[{to:e.token,data:"0xec81b483"},"latest"]},{jsonrpc:"2.0",id:6,method:"eth_call",params:[{to:e.token,data:"0x3197cbb6"},"latest"]},{jsonrpc:"2.0",id:7,method:"eth_call",params:[{to:e.token,data:"0x27b3bf11"},"latest"]},{jsonrpc:"2.0",id:8,method:"eth_call",params:[{to:e.token,data:"0x242c8e69"},"latest"]},{jsonrpc:"2.0",id:9,method:"eth_call",params:[{to:e.token,data:"0xc59ee1dc"},"latest"]},{jsonrpc:"2.0",id:10,method:"eth_call",params:[{to:e.token,data:"0xf97c7d12"},"latest"]}]});case 8:r=t.sent,e.form.tokenAddress=r[0].result.replace("0x000000000000000000000000","0x"),e.form.startTime=e.timestampToTime(parseInt(r[1].result)),e.form.rate=parseInt(r[3].result),e.form.cap=parseInt(r[4].result),e.sale=e.form.rate*e.form.cap,e.form.uplimit=parseFloat(k.a.fromWei(parseInt(r[8].result),"ether")),e.form.lockDays=parseInt(r[7].result),e.form.endDays=parseInt(r[2].result),e.$emit("onSetIsVerify",!0),e.loading=!1;case 19:case"end":return t.stop()}}),t)})))()},onstartTime:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateSTART",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(new Date(e.form.startTime).getTime()/1e3).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},oncap:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateCAP",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(e.form.cap).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},onrate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateRATE",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(e.form.rate).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},oncAlltoken:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("claimTokens",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(2).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},onuplimit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateUPLIMIT",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(e.form.uplimit).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},onendDays:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateDAYS",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(e.form.endDays).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},onlockDays:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateLOCKTIME",["uint256"]).toString("hex")+g.a.rawEncode(["uint256"],[new v.a(10).pow(0).times(e.form.lockDays).toString(10)]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},ontokenAddress:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:h["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+g.a.methodID("updateTokenAddress",["address"]).toString("hex")+g.a.rawEncode(["address"],[e.form.tokenAddress]).toString("hex")},t.next=3,h["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},timestampToTime:function(e){var t=new Date(1e3*e),n=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+a+r+o+s+i}}},O=I,F=(n("e387"),Object(T["a"])(O,_,C,!1,null,"43308ede",null)),M=F.exports,E="tokenAdmin",N={name:"TokenAdmin",inject:["onCheckConnect"],components:{Card:l["a"],CreateTokenTab:u["a"],TokenAdminForm:S,IdoAdminForm:M},data:function(){return{tabsList:[],createType:0,isVerify:!1,token:"",icon:"",loading:!1}},computed:Object(s["a"])({},Object(i["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[E]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.tabsList=[{value:0,label:this.$t("tokenAdmin.createTab1")},{value:1,label:this.$t("tokenAdmin.createTab2")}]},mounted:function(){var e=this.$route.query,t=e.icon,n=e.createType;t&&(this.icon=t),n&&(this.createType=Number(n))},methods:{onChangeCreateTokenActive:function(e){this.createType=e},onSetIsVerify:function(e){this.isVerify=e,this.loading=e},onGoAdmin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.token){t.next=3;break}return e.$message.error(e.$t("tokenAdmin.placeEnterToken")),t.abrupt("return");case 3:if(h["a"].getAccount()){t.next=6;break}return e.$message.error(e.$t("tokenAdmin.unlockwallet")),t.abrupt("return");case 6:e.loading=!0,0===e.createType?e.$refs.TokenAdminForm.init():e.$refs.IdoAdminForm.init();case 8:case"end":return t.stop()}}),t)})))()}}},R=N,V=(n("5d2a"),Object(T["a"])(R,a,r,!1,null,"768e52e8",null));t["default"]=V.exports},"5d2a":function(e,t,n){"use strict";n("6b00")},"6b00":function(e,t,n){},7691:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"tabs"},e._l(e.list,(function(t){return n("li",{key:t.value,class:{on:e.active===t.value},on:{click:function(n){return e.onChangeCreateTokenActive(t.value)}}},[e._v(e._s(t.label))])})),0)},r=[],o=(n("a9e3"),{name:"CreateTokenTab",components:{},props:{list:{type:Array,default:function(){return[]}},active:{type:[Number,String],require:!0}},data:function(){return{}},methods:{onChangeCreateTokenActive:function(e){this.$emit("onChangeCreateTokenActive",e)}}}),s=o,i=(n("8950"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"6de644b8",null);t["a"]=c.exports},8950:function(e,t,n){"use strict";n("ea20")},"9d46":function(e,t,n){},b893:function(e,t,n){"use strict";n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("498a");var a=n("d4ec"),r=n("bee2"),o=n("ade3"),s=function(){function e(){Object(a["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(r["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",n=0;n<e;n++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var n,a,r;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(e,r)+this.numMul(t,r))/r}},{key:"numSub",value:function(e,t){var n,a,r;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(e,r)-this.numMul(t,r))/r}},{key:"numMul",value:function(e,t){var n=0,a=e.toString(),r=t.toString();try{n+=a.split(".")[1].length}catch(o){}try{n+=r.split(".")[1].length}catch(o){}return Number(a.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,n)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var n,a,r=0,o=0;try{r=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return n=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(n/a,Math.pow(10,o-r))}}]),e}(),i=new s;t["a"]=i},e387:function(e,t,n){"use strict";n("18f2")},ea20:function(e,t,n){}}]);