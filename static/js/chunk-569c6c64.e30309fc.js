(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-569c6c64"],{10:function(e,t){},11:function(e,t){},"12ee":function(e,t,s){"use strict";s("77d0")},"3f9f":function(e,t,s){"use strict";s("d06e")},"46b9":function(e,t,s){},"5abe":function(e,t,s){"use strict";s.r(t);var n,a,r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("OneToMoreHeader",{attrs:{"support-networks":e.supportNetworks,title:e.$t("trxOneToMore.welcome")}}),s("div",{staticClass:"containerBg"},[s("div",{staticClass:"oneToMoreBox"},[s("div",{staticClass:"stepBox"},[s("el-steps",{attrs:{active:e.stepActive,"align-center":"","process-status":"finish","finish-status":"finish"}},[s("el-step",{attrs:{title:e.$t("trxOneToMore.prepare")}}),s("el-step",{attrs:{title:e.$t("trxOneToMore.confirm")}}),s("el-step",{attrs:{title:e.$t("trxOneToMore.send")}})],1)],1),0===e.stepActive?s("Step1",{on:{onStep1Confirm:e.onStep1Confirm}}):1===e.stepActive?s("Step2",{attrs:{"queue-list":e.queueList,address:e.address,decimals:e.decimals},on:{onStep2Prev:e.onStep2Prev,onStep2Next:e.onStep2Next,onStep2Confirm:e.onStep2Confirm}}):2===e.stepActive?s("Step3",{attrs:{send_tx:e.send_tx,c_abi:e.c_abi,"current-fee":e.currentFee,"array-limit":e.arrayLimit,c_address:e.c_address,"queue-list":e.queueList,address:e.address,decimals:e.decimals},on:{onStep3Prev:e.onStep3Prev}}):e._e()],1)])],1)},o=[],i=(s("6a61"),s("2e91")),l={zh:{trxOneToMore:{token:"代币",welcome:"欢迎使用CoinTool TRX批量发送",token_address_err:"代币地址错误",address_amount:"收款地址和数量",auto_amount:"自动添加数量",upload_file:"上传文件",iinsert_manually:"手动输入",download_examples:"下载例子",show_examples:"查看例子",delete_err:"删除无效地址",next:"下一步",address:"地址",slow:"慢",standard:"快",instant:"极速",inputAlert_1:"输入代币地址自动添加",inputAlert_2:"支持文件类型： CSV / Excel / Txt",inputAlert_3:"每一行应包括地址和数量，逗号分隔",inputAlert_4:"以下地址或金额不能发送",inputAlert_5:"可自动在每个地址后面添加数量",inputAlert_6:"请至少输入一条地址信息",inputAlert_7:"第 {line} 行: {str} 无效的钱包地址",inputAlert_8:"第 {line} 行: {str} 无效的数量",inputAlert_9:"第 {line} 行: {str} 请输入正确的格式，地址和数量以逗号分隔。例: address,number",inputAlert_10:"授信成功，请点击下一步！",inputAlert_11:"第 {line} 行: {str} 重复的地址",inputAlert_12:"发现重复地址",repeat_1:"保留第一个",repeat_2:"合并重复地址",repeat_3:"保留重复地址",step3_alert_1:"总共需要发送 {a} 次,还需要发送 {b} 次",step3_alert_2:"交易已全部发出，请等待交易被确认。",step3_alert_3:"祝贺，您的代币全部发送成功！",step3_alert_4:"您手动取消了交易，如需继续，请点击发送",step3_alert_5:"继续第 {d} 次交易",decimals:"位数",wallet_select_mainnet:"您的TRON钱包已选择 Mainnet网络",wallet_select_shasta:"您的TRON钱包已选择 Shasta网络",wallet_select:"请把您钱包的网络切换为 Mainnet 或者 Shasta网络",summary:"摘要",total_address_num:"地址总数",total_send_token_num:"代币发送总数",total_send_tx_num:"交易总数",token_balance:"代币余额",y_fee:"预估费用",you_balance:"你的 {symbol} 余额",d_allowance_b:"当前授信额度",y_allowance_b:"需授信额度",approve_amount:"授权额度",send_amount:"发送数量({amount} {symbol})",send_amount_b:"代币余额({amount} {symbol})",insufficient_balance:"{symbol} 余额不足",prepare:"准备",confirm:"确认",close:"关闭",send:"发送"}},en:{trxOneToMore:{token:"Token",welcome:"Welcome to CoinTool TRX Bulk Sender",token_address_err:"Token address error",address_amount:"Addresses with Amounts",auto_amount:"Auto add amounts",upload_file:"Upload file",iinsert_manually:"Insert manually",download_examples:"Download examples",show_examples:"Show examples",delete_err:"Delete them",next:"Next",address:"Address",slow:"Slow",standard:"Standard",instant:"Instant",inputAlert_1:"Input token address to add automatically",inputAlert_2:"Accepted: CSV / Excel / Txt",inputAlert_3:"The address and amount are separated by commas",inputAlert_4:"The below addresses cannot be processed",inputAlert_5:"Amount can be automatically added after each address",inputAlert_6:"Please enter at least one address information",inputAlert_7:"Line {line} : {str}  is a invalid wallet address",inputAlert_8:"Line {line} : {str}  is a invalid wrong amount",inputAlert_9:"Line {line} : {str}  is a invalid wallet address and wrong amount. E.g:address,number",inputAlert_10:"Request approve succeeded ! Please click next",inputAlert_11:"Line {line}: {str} is duplicate address",inputAlert_12:"Duplicated wallet addresses",repeat_1:"Keep the first one",repeat_2:"Merge balances",repeat_3:"Keep duplicate addresses",step3_alert_1:"A total of {a} needs to be sent,You need to send {b} more times",step3_alert_2:"All transactions have been sent out. Please wait for the transaction to be confirmed.",step3_alert_3:"Congratulations, all your tokens have been sent successfully!",step3_alert_4:"You have manually cancelled the transaction, to continue, please click send",step3_alert_5:"Continue with the {d} first transaction",decimals:"Decimals",summary:"Summary",wallet_select_mainnet:"Your TRON wallet has selected the Mainnet network",wallet_select_shasta:"Your TRON wallet has selected the Shasta network",wallet_select:"Please switch your wallet network to Mainnet or Shasta network",total_address_num:"Total number of addresses",total_send_token_num:"Total number of tokens to be sent",total_send_tx_num:"Total number of transactions needed",token_balance:"Your token balance",y_fee:"Approximate cost of operation",you_balance:"Your {symbol} balance",d_allowance_b:"Your current allowance",y_allowance_b:"Request approve amount",prepare:"Prepare",approve_amount:"Amount to approve",send_amount:"Exact amount to be sent ({amount} {symbol})",send_amount_b:"Your token balance({amount} {symbol})",insufficient_balance:"Insufficient {symbol} balance",confirm:"Confirm",close:"Close",send:"Send"}}},c=s("850d"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step1"},[s("div",{staticClass:"inputBox"},[s("div",{staticClass:"inputContext inputContextAddress"},[s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("trxOneToMore.token")))])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("trxOneToMore.inputAlert_1"),placement:e.isPc?"left-start":"top"}},[s("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_address,expression:"loading_address"}],staticStyle:{width:"100%"},attrs:{size:"large",filterable:"","filter-method":e.handleFilterAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},e._l(e.addressOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[s("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),s("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)],1),s("div",{staticClass:"inputContext inputContextDecimals"},[s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("trxOneToMore.decimals")))])]),s("el-input",{attrs:{size:"large",oninput:"value=value.replace(/[^\\d]/g,'')","max-length":"9"},model:{value:e.decimals,callback:function(t){e.decimals=t},expression:"decimals"}})],1)]),s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("trxOneToMore.address_amount")))]),s("span",{staticClass:"btnText",on:{click:e.onBulkAmount}},[e._v(e._s(e.$t("trxOneToMore.auto_amount")))]),e.isInput?s("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("trxOneToMore.upload_file")))]):s("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("trxOneToMore.iinsert_manually")))])]),s("el-row",[s("el-col",{attrs:{xs:{span:24}}},[e.isInput?s("Editor",{ref:"editor",on:{changed:e.onChangeEditor},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}):s("upload-excel-component",{attrs:{"on-success":e.onUploadFileSuccess,"before-upload":e.beforeUpload}})],1)],1),s("div",{staticClass:"label label-remark"},[e.isInput?s("span",[e._v(e._s(e.$t("trxOneToMore.inputAlert_3")))]):s("span",[e._v(e._s(e.$t("trxOneToMore.inputAlert_2")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isInput,expression:"!isInput"}],staticClass:"btnText"},[s("a",{attrs:{target:"_blank",href:"/example_trx.xlsx"}},[e._v(e._s(e.$t("trxOneToMore.download_examples")))])]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticClass:"btnText",on:{click:e.onExample}},[e._v(e._s(e.$t("trxOneToMore.show_examples")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[s("div",{staticClass:"label label-remark"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}]},[e._v(e._s(e.$t("trxOneToMore.inputAlert_4")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}]},[e._v(e._s(e.$t("trxOneToMore.inputAlert_12")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}],staticClass:"btnText",on:{click:e.onDeleteErr}},[e._v(e._s(e.$t("trxOneToMore.delete_err")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(1)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_1")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(2)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_2")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(3)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_3")))])]),s("ul",e._l(e.errInfoList,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.onNext}},[e._v(e._s(e.$t("trxOneToMore.next")))])],1)},d=[],p=(s("b4fb"),s("fe59"),s("9302"),s("e18c"),s("e35a"),s("2bbe"),s("0d7a"),s("6db4"),s("08ba"),s("d211")),_=s("3796"),m=s("fa7e"),b=s("c933"),h=s("986e"),w=s("52c1"),x={},f={name:"Step1",inject:["tronwalletStateTest"],components:{UploadExcelComponent:_["a"],Editor:m["a"]},computed:Object(p["a"])({},Object(w["b"])(["isPc"])),data:function(){return{balance:{},repeat:!1,repeat_status:!1,loading_address:!1,stepActive:1,addressOptions:[],address:"TRX",decimals:6,isInput:!0,editorValue:"",queueList:[],errInfoList:[]}},watch:{address:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(localStorage.setItem("trxOneToMore_address",e),"TRX"===e)t.decimals=6;else for(n in x)n===e&&(t.decimals=x[n].decimals);case 2:case"end":return s.stop()}}),s)})))()},editorValue:function(e){this.onEditCheck(e)}},created:function(){h["c"].$on(h["b"],(function(e){console.log(e,"step_state")}))},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.tronwalletStateTest();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:if(e.setNetwork(window.tronWeb.fullNode.host),e.addressOptions.push({value:"TRX",label:"TRX",decimals:6}),localStorage.getItem("trx_tokenConTract"))for(n in s=JSON.parse(localStorage.getItem("trx_tokenConTract")),x=s,s)e.addressOptions.push({value:s[n].address,label:s[n].symbol,decimals:s[n].decimals});localStorage.getItem("trxOneToMore_address")&&(e.address=localStorage.getItem("trxOneToMore_address"));case 8:case"end":return t.stop()}}),t)})))()},methods:{setNetwork:function(e){switch(e){case"https://api.shasta.trongrid.io":window.isMainnet=!1,this.$message({message:this.$t("trxOneToMore.wallet_select_shasta"),type:"success"});break;case"https://api.trongrid.io":window.isMainnet=!0,this.$message({message:this.$t("trxOneToMore.wallet_select_mainnet"),type:"success"});break;case"https://api.tronstack.io":window.isMainnet=!0,this.$message({message:this.$t("trxOneToMore.wallet_select_mainnet"),type:"success"});break;default:this.$message.error(this.$t("trxOneToMore.wallet_select"));break}},onExample:function(){this.editorValue="TVYL4aKxe87Niq9nKwc6d7957nc7Ubiz44,0.001\nTB7wXKnjyxjyUQ9sdKRFaL1UacsKb2N89m,1\nTQKjWTZ12b6vxnikAeVctU5US8hGZzTFVE,3.45"},onBulkAmount:function(){var e=this;this.$prompt(this.$t("trxOneToMore.auto_amount"),this.$t("trxOneToMore.inputAlert_5"),{confirmButtonText:this.$t("trxOneToMore.confirm"),cancelButtonText:this.$t("trxOneToMore.close")}).then((function(t){var s=t.value,n=e.editorValue.split("\n"),a="";for(var r in n){var o=n[r].split(",");o[1]&&(n[r]=o[0]),parseInt(r)+1===n.length?a+=n[r]+","+s:a+=n[r]+","+s+"\n"}e.editorValue=a})).catch((function(){}))},onNext:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.tronwalletStateTest();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:if(""!==e.editorValue){t.next=7;break}return e.$message.error(e.$t("trxOneToMore.inputAlert_6")),t.abrupt("return");case 7:if(s=e.onEditCheck(e.editorValue),!s){t.next=10;break}return t.abrupt("return");case 10:e.$emit("onStep1Confirm",{queueList:e.queueList,address:e.address,decimals:e.decimals});case 11:case"end":return t.stop()}}),t)})))()},onDeleteErr:function(){var e=this,t="",s=[];for(var n in this.queueList)s.push(this.queueList[n]);this.queueList=s,this.queueList.forEach((function(s,n){var a=n===e.queueList.length-1?"":"\n";t+=e.queueList[n].join()+a})),this.editorValue=t},onRepeat:function(e){var t=this,s="",n=[],a=[];for(var r in this.queueList)n[this.queueList[r][0]]&&1===e?delete this.queueList[r]:n[this.queueList[r][0]]&&2===e?(a[this.queueList[r][0]]+=parseFloat(this.queueList[r][1]),delete this.queueList[r]):(n[this.queueList[r][0]]=!0,2===e&&(a[this.queueList[r][0]]=parseFloat(this.queueList[r][1]),delete this.queueList[r]));if(2===e)for(var o in a)this.queueList.push([o,a[o]]);3===e&&(this.repeat_status=!0,this.repeat=!1,this.errInfoList=[]);var i=[];for(var l in this.queueList)i.push(this.queueList[l]);this.queueList=i,this.queueList.forEach((function(e,n){var a=n===t.queueList.length-1?"":"\n";s+=t.queueList[n].join()+a})),this.editorValue=s},onEditCheck:function(e){if(""===e)return this.queueList=[],this.errInfoList=[],void(this.repeat_status=!1);var t=e.split("\n"),s=[],n=[],a=[],r=!1,o=!1;for(var i in t){var l=parseInt(i)+1,c=t[i].trim().split(",");2===c.length?window.tronWeb.isAddress(c[0])?parseFloat(c[1])<0||!parseFloat(c[1])?(r=!0,n.push(this.$t("trxOneToMore.inputAlert_8",{line:l,str:c[1]}))):(a[c[0]]&&!this.repeat_status?(o=!0,r=!0,n.push(this.$t("trxOneToMore.inputAlert_11",{line:l,str:c[0]}))):a[c[0]]=!0,s.push(c)):(r=!0,n.push(this.$t("trxOneToMore.inputAlert_7",{line:l,str:c[0]}))):(r=!0,n.push(this.$t("trxOneToMore.inputAlert_9",{line:l,str:c[0]})))}return this.repeat=o,this.queueList=s,this.errInfoList=n,r},handleFilterAddress:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,a,r,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.tronwalletStateTest();case 2:if(s.sent){s.next=4;break}return s.abrupt("return");case 4:if(t.loading_address=!0,e=e.trim(),!(parseInt(e)<=1e6||isNaN(parseInt(e)))||window.tronWeb.isAddress(e)){s.next=9;break}return t.loading_address=!1,s.abrupt("return");case 9:if(!x[e]){s.next=13;break}return t.address=e,t.loading_address=!1,s.abrupt("return");case 13:if(s.prev=13,n="",a="",!window.tronWeb.isAddress(e)){s.next=22;break}return s.next=19,t.getInforTRONToken(e);case 19:r=s.sent,n=r.symbol,a=r.decimals;case 22:if(!(parseInt(e)>=1e6)){s.next=28;break}return s.next=25,window.tronWeb.trx.getTokenByID(parseInt(e));case 25:o=s.sent,n=o.abbr,a=o.precision;case 28:if(""!==n){s.next=32;break}return t.$message.error(t.$t("trxOneToMore.token_address_err")),t.loading_address=!1,s.abrupt("return");case 32:x[e]={symbol:"",decimals:""},x[e].symbol=n,x[e].decimals=parseInt(a),x[e].address=e,t.addressOptions.push({value:e,label:x[e].symbol,decimals:x[e].decimals}),t.address=e,t.decimals=x[e].decimals,localStorage.setItem("trx_tokenConTract",JSON.stringify(x)),s.next=45;break;case 42:s.prev=42,s.t0=s["catch"](13),t.$message.error(t.$t("trxOneToMore.token_address_err"));case 45:t.loading_address=!1;case 46:case"end":return s.stop()}}),s,null,[[13,42]])})))()},getInforTRONToken:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.tronWeb.setAddress("TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2"),t.abrupt("return",new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(s,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.tronWeb.contract().at(e);case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n(t.t0);case 9:return t.prev=9,t.next=12,Object(b["a"])([a.symbol().call().catch((function(e){return null})),a.decimals().call().catch((function(e){return null}))]).subscribe((function(e){var t={symbol:e[0],decimals:e[1]};s(t)}));case 12:t.next=17;break;case 14:t.prev=14,t.t1=t["catch"](9),n(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,6],[9,14]])})));return function(e,s){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})))()},onToggleInputType:function(){this.isInput=!this.isInput},beforeUpload:function(e){var t=e.size/1024/1024<10;return!!t||(this.$message({message:"Please do not upload files larger than 10m in size.",type:"warning"}),!1)},onChangeEditor:function(e){this.editorValue=e},onUploadFileSuccess:function(e){var t=e.results,s=(e.header,"");t.forEach((function(e,n){var a=n===t.length-1?"":"\n";s+="".concat(e.Address,",").concat(e.Amount).concat(a)})),this.editorValue=s,this.onToggleInputType()}}},v=f,g=(s("6ed9"),s("5d22")),T=Object(g["a"])(v,u,d,!1,null,"71eb1522",null),y=T.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step2"},[s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("trxOneToMore.summary")))])]),s("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.step2_loading,expression:"step2_loading"}],staticClass:"abstract"},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address,expression:"allowance_b < allowance_a && address !== 'TRX'"}]},[s("span",{staticClass:"number"},[e._v(e._s(e.allowance_a)+" "+e._s(e.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.y_allowance_b")))])]),s("li",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address,expression:"allowance_b < allowance_a && address !== 'TRX'"}]},[s("span",{staticClass:"number"},[e._v(e._s(e.allowance_b)+" "+e._s(e.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.d_allowance_b")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.address_count))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_address_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.send_amount)+" "+e._s(e.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_send_token_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.send_tx))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_send_tx_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.tokenBalance)+" "+e._s(e.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.token_balance")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.fee)+" TRX")]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.y_fee")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.ethBalance)+" TRX")]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.you_balance",{symbol:"TRX"})))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address&&0===e.approveList.length&&0===e.errInfoList.length,expression:"allowance_b < allowance_a && address !== 'TRX' && approveList.length === 0 && errInfoList.length ===0"}],staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("trxOneToMore.approve_amount")))])]),s("el-radio-group",{model:{value:e.allowance_select,callback:function(t){e.allowance_select=t},expression:"allowance_select"}},[s("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("trxOneToMore.send_amount",{amount:e.send_amount,symbol:e.symbol})))]),s("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("trxOneToMore.send_amount_b",{amount:e.tokenBalance,symbol:e.symbol}))+" ")])],1)],1),s("DealList",{attrs:{list:e.approveList}}),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.approve_status,expression:"approve_status"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.inputAlert_10"),type:"success",closable:!1,effect:"dark"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[s("ul",e._l(e.errInfoList,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("div",{staticClass:"btnBox"},[s("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),s("el-button",{attrs:{loading:e.step2_loading,size:"large",type:"primary",disabled:e.send_btn},on:{click:e.onNext}},[e._v(e._s(e.$t("trxOneToMore.next")))])],1)],1)},M=[],S=(s("2eeb"),s("513c"),s("1c2e"),s("b893")),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,n){return s("li",{key:t.address},[s("div",{staticClass:"left"},[s("span",{staticClass:"index"},[e._v(e._s(n+1))]),s("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/#/transaction/"+t.address}},[e._v(e._s(t.address))])]),s("div",{staticClass:"right"},[s("span",{staticClass:"status"},[0===t.status?s("i",{staticClass:"el-icon-loading"}):1===t.status?s("i",{staticClass:"el-icon-success"}):2===t.status?s("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},L=[],C={props:{list:{type:Array,required:!0}},data:function(){return{blockTxurl:""}},created:function(){},mounted:function(){this.blockTxurl=window.isMainnet?"https://tronscan.org":"https://shasta.tronscan.org"},methods:{}},A=C,$=(s("12ee"),Object(g["a"])(A,O,L,!1,null,"b4f577ea",null)),R=$.exports,I=s("7921"),q=s.n(I),N=[{constant:!1,inputs:[{name:"token",type:"address"},{name:"_contributors",type:"address[]"},{name:"_balances",type:"uint256[]"}],name:"multisendToken",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],W={name:"Step2",components:{DealList:R},props:{queueList:{type:Array,required:!0},address:{type:String,required:!0},decimals:{type:Number,required:!0}},data:function(){return{c_address:"",web3:{},send_tx:0,symbol:"TRX",approve_status:!1,send_amount:0,address_count:0,step2_loading:!1,fee:0,d_fee:0,allowance_select:2,currentFee:"",tokenBalance:0,ethBalance:0,send_btn:!1,approveList:[],errInfoList:[],allowance_a:0,allowance_b:0,arrayLimit:200,sliderMarks:{}}},watch:{step2_loading:function(e){h["c"].$emit(h["b"],e)}},created:function(){},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,a,r,o,i,l,c,u,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.step2_loading=!0,e.c_address=window.isMainnet?"TBgEFwQkrZUv3U25rUSWLt7TbP2N9WebiM":"TF8UnF1rZjGFd3ZLwvKGZ5xmtDThjfwYLx",t.next=5,e.onUpdateBalance(e.address);case 5:for(a in e.address_count=e.queueList.length,e.arrayLimit=30,e.send_tx=Math.ceil(e.queueList.length/e.arrayLimit),s=0,e.queueList)s=S["a"].numAdd(s,e.queueList[a][1]);return e.send_amount=s,t.next=13,window.tronWeb.contract().at(e.c_address);case 13:return r=t.sent,t.next=16,r.txFee().call();case 16:if(o=t.sent,e.currentFee=parseInt(o.toString()),console.log("currentFee",e.currentFee),i=window.tronWeb.fromSun(e.currentFee),e.d_fee=parseFloat(i),l=e.d_fee+50,e.fee=l,"TRX"!==e.address){t.next=31;break}if(!(e.ethBalance<e.send_amount+l)){t.next=29;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:"TRX"})),e.send_btn=!0,t.abrupt("return");case 29:t.next=53;break;case 31:if(localStorage.getItem("trx_tokenConTract"))for(u in c=JSON.parse(localStorage.getItem("trx_tokenConTract")),c)c[u].address===e.address&&(e.symbol=c[u].symbol);if(!(e.ethBalance<l)){t.next=37;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:"TRX"})),e.send_btn=!0,t.abrupt("return");case 37:if(!(e.tokenBalance<s)){t.next=42;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:e.symbol})),e.send_btn=!0,t.abrupt("return");case 42:if(!window.tronWeb.isAddress(e.address)){t.next=52;break}return t.next=45,window.tronWeb.contract().at(e.address);case 45:return d=t.sent,t.next=48,d.allowance(window.tronWeb.defaultAddress.base58,e.c_address).call();case 48:p=t.sent,e.allowance_b=parseInt(p.remaining._hex)/Math.pow(10,e.decimals),t.next=53;break;case 52:e.allowance_b=1e31;case 53:e.allowance_a=s,e.step2_loading=!1;case 55:case"end":return t.stop()}}),t)})))()},methods:{onNext:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,a,r,o,i,l,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!("TRX"!==e.address&&e.allowance_b<e.allowance_a)){t.next=15;break}return s={feeLimit:1e9,callValue:0},a=window.tronWeb.address.toHex(e.address),r="approve(address,uint256)",o=window.tronWeb.address.toHex(window.tronWeb.defaultAddress.base58),l=0,1===e.allowance_select?(l=e.send_amount,i=[{type:"address",value:e.c_address},{type:"uint256",value:new q.a(e.send_amount).times(new q.a(10).pow(Number(e.decimals))).toString(10)}]):(l=e.tokenBalance,i=[{type:"address",value:e.c_address},{type:"uint256",value:new q.a(e.tokenBalance).times(new q.a(10).pow(Number(e.decimals))).toString(10)}]),t.next=9,window.tronWeb.transactionBuilder.triggerSmartContract(a,r,s,i,o);case 9:return c=t.sent,t.next=12,window.tronWeb.trx.multiSign(c.transaction);case 12:return u=t.sent,window.tronWeb.trx.sendRawTransaction(u).then((function(e){var t=null,s=e.transaction.txID;n.approveList.push({address:s,status:0}),n.send_btn=!0,t=setInterval((function(){window.tronWeb.trx.getTransaction(s).then((function(e){e.ret&&e.ret.length>0&&"SUCCESS"===e.ret[0].contractRet&&(clearInterval(t),n.approveList=n.approveList.map((function(e){return e.address===s&&(e.status=1),e})),n.approve_status=!0,n.send_btn=!1,n.allowance_b=l)}))}),5e3)})).catch((function(e){console.log(e)})),t.abrupt("return");case 15:e.$emit("onStep2Confirm",{queueList:e.queueList,address:e.address,decimals:e.decimals,send_tx:e.send_tx,arrayLimit:e.arrayLimit,currentFee:e.currentFee,c_address:e.c_address,c_abi:N});case 16:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.$emit("onStep2Prev")},onUpdateBalance:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,a,r,o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,window.tronWeb.trx.getBalance(window.tronWeb.defaultAddress.base58);case 2:if(n=s.sent,t.ethBalance=parseFloat(window.tronWeb.fromSun(n)),"TRX"===e){s.next=18;break}if(a=t.decimals,!window.tronWeb.isAddress(e)){s.next=11;break}return s.next=9,window.tronWeb.transactionBuilder.triggerSmartContract(window.tronWeb.address.toHex(e),"balanceOf(address)",{},[{type:"address",value:window.tronWeb.defaultAddress.base58}],"417946F66D0FC67924DA0AC9936183AB3B07C81126");case 9:r=s.sent,t.tokenBalance=parseFloat(window.tronWeb.toDecimal("0x"+r.constant_result[0])/Math.pow(10,a));case 11:if(!(parseInt(e)>=1e6)){s.next=16;break}return s.next=14,window.tronWeb.trx.getAccount(window.tronWeb.defaultAddress.base58);case 14:for(i in o=s.sent,o.assetV2)parseInt(o.assetV2[i].key)===parseInt(e)&&(t.tokenBalance=parseFloat(o.assetV2[i].value/Math.pow(10,a)));case 16:s.next=19;break;case 18:t.tokenBalance=t.ethBalance;case 19:case"end":return s.stop()}}),s)})))()}}},B=W,F=(s("3f9f"),Object(g["a"])(B,k,M,!1,null,"a2ae3bfe",null)),j=F.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step3"},[s("div",{staticClass:"label"},[s("span",[e._v(" "+e._s(e.$t("trxOneToMore.step3_alert_1",{a:e.send_status.a,b:e.send_status.b})))]),s("span",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&!e.all_send,expression:"send_status.b === 0 && !all_send"}]},[e._v(e._s(e.$t("trxOneToMore.step3_alert_2")))])]),s("DealList",{attrs:{list:e.dealList}}),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&e.all_send,expression:"send_status.b ===0 && all_send"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.step3_alert_3"),type:"success",closable:!1,effect:"dark"}}),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.step3_alert_4"),type:"success",closable:!1,effect:"dark"}}),s("div",{staticClass:"btnBox"},[s("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],attrs:{size:"large",type:"primary"},on:{click:e.onSend}},[e._v(e._s(e.$t("trxOneToMore.step3_alert_5",{d:e.d_slice})))])],1)],1)},V=[],X=(s("1784"),s("77ad"),{name:"Step3",components:{DealList:R},props:{send_tx:{type:Number,required:!0},arrayLimit:{type:Number,required:!0},currentFee:{type:Number,required:!0},c_address:{type:String,required:!0},c_abi:{type:Array,required:!0},queueList:{type:Array,required:!0},address:{type:String,required:!0},decimals:{type:Number,required:!0}},data:function(){return{dealList:[],send_close:!1,addresses_to_send:[],balances_to_send:[],send_status:{},all_send:!1,d_slice:0,d_slice_s:0,web3:{}}},created:function(){},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in a=e,e.addresses_to_send=[],e.balances_to_send=[],e.queueList)e.addresses_to_send.push(e.queueList[s][0]),e.balances_to_send.push(new q.a(10).pow(e.decimals).times(e.queueList[s][1]).toString(10));return t.next=6,e._multisend(e.send_tx,e.arrayLimit);case 6:case"end":return t.stop()}}),t)})))()},methods:{onPrev:function(){this.$emit("onStep3Prev")},onSend:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.send_close=!1,t.next=3,e._multisend(e.d_slice_s,e.arrayLimit);case 3:case"end":return t.stop()}}),t)})))()},_multisend:function(e,t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o,i,l,c,u,d,p,_,m,b,h,w,x;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,s.d_slice=s.send_tx-e===0?1:s.send_tx-e+1,s.d_slice_s=e,s.send_status={a:s.send_tx,b:e},r=(e-1)*t,o=e*t,i=s.addresses_to_send.slice(r,o),l=s.balances_to_send.slice(r,o),"TRX"===s.address?(u=l.reduce((function(e,t){return new q.a(e).plus(new q.a(t))})),d=u.toString(),c=new q.a(s.currentFee).plus(d),console.log(s.currentFee,d,c.toString())):c=new q.a(s.currentFee),p={feeLimit:1e9,callValue:c},_=window.tronWeb.address.toHex(s.c_address),m=window.tronWeb.address.toHex(window.tronWeb.defaultAddress.base58),b="",h="",i.unshift("TK21BHkSvTrzSmgjQ933PPpnMybumy8Syn"),l.unshift(0),"TRX"===s.address?(b="bulksendEther(address[],uint256[])",h=[{type:"address[]",value:i},{type:"uint256[]",value:l}]):(window.tronWeb.isAddress(s.address)&&(b="bulksendToken(address,address[],uint256[])",h=[{type:"address",value:s.address},{type:"address[]",value:i},{type:"uint256[]",value:l}]),parseInt(s.address)>1e6&&(b="bulksendTRC10(uint256,address[],uint256[])",h=[{type:"uint256",value:s.address},{type:"address[]",value:i},{type:"uint256[]",value:l}])),n.next=19,window.tronWeb.transactionBuilder.triggerSmartContract(_,b,p,h,m);case 19:return w=n.sent,n.next=22,window.tronWeb.trx.multiSign(w.transaction);case 22:x=n.sent,window.tronWeb.trx.sendRawTransaction(x).then((function(n){var r=null,o=n.transaction.txID;a.dealList.push({address:o,status:0}),a.send_status={a:s.send_tx,b:e-1},r=setInterval((function(){window.tronWeb.trx.getTransaction(o).then((function(s){s.ret&&s.ret.length>0&&"SUCCESS"===s.ret[0].contractRet&&(clearInterval(r),a.dealList=a.dealList.map((function(e){return e.address===o&&(e.status=1),e})),e--,e>0?a._multisend(e,t):a.all_send=!0)}))}),5e3)})).catch((function(e){console.log("wwwwww",e)})),n.next=30;break;case 26:n.prev=26,n.t0=n["catch"](0),console.log("xxx",n.t0),"Confirmation declined by user"===n.t0&&(s.send_close=!0);case 30:case"end":return n.stop()}}),n,null,[[0,26]])})))()}}}),P=X,U=(s("6bd6"),Object(g["a"])(P,E,V,!1,null,"adf0814a",null)),D=U.exports,z="trxOneToMore",K={name:"TrxOneToMore",components:{OneToMoreHeader:c["a"],Step1:y,Step2:j,Step3:D},data:function(){return{supportNetworks:[{icon:"coin-trx",name:"TRX Mainnet"},{icon:"coin-debug1",name:"Shasta TestNet"}],stepActive:0,c_abi:[],send_tx:0,arrayLimit:0,c_address:"",currentFee:0,queueList:[],address:"TRX",decimals:6}},watch:{},created:function(){this.$i18n.getLocaleMessage("en")[z]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onStep1Confirm:function(e){var t=e.queueList,s=e.address,n=e.decimals;this.queueList=t,this.address=s,this.decimals=n,this.stepActive=1},onStep2Confirm:function(e){var t=e.queueList,s=e.address,n=e.decimals,a=e.send_tx,r=e.arrayLimit,o=e.currentFee,i=e.c_address,l=e.c_abi;this.queueList=t,this.address=s,this.decimals=n,this.send_tx=a,this.arrayLimit=r,this.currentFee=o,this.c_address=i,this.c_abi=l,this.stepActive=2},onStep2Prev:function(){this.stepActive=0},onStep2Next:function(){this.stepActive=2},onStep3Prev:function(){this.stepActive=1},onChangeEditor:function(e){this.editorValue=e}}},Y=K,H=(s("9ee7"),Object(g["a"])(Y,r,o,!1,null,"5d5c2e69",null));t["default"]=H.exports},"6b1c":function(e,t,s){},"6bd6":function(e,t,s){"use strict";s("6b1c")},"6ed9":function(e,t,s){"use strict";s("e34e")},"77d0":function(e,t,s){},9:function(e,t){},"9ee7":function(e,t,s){"use strict";s("46b9")},b893:function(e,t,s){"use strict";s("513c"),s("e18c"),s("e35a"),s("1c2e"),s("5e9f"),s("0d7a"),s("6db4");var n=s("0e4d"),a=s("94ef"),r=s("28f8"),o=function(){function e(){Object(n["a"])(this,e),Object(r["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(a["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,s="x"===e?t:3&t|8;return s.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",s=0;s<e;s++){var n=Math.ceil(61*Math.random());t+=this.chars[n]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var s,n,a;try{s=e.toString().split(".")[1].length}catch(r){s=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return a=Math.pow(10,Math.max(s,n)),(this.numMul(e,a)+this.numMul(t,a))/a}},{key:"numSub",value:function(e,t){var s,n,a;try{s=e.toString().split(".")[1].length}catch(r){s=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return a=Math.pow(10,Math.max(s,n)),(this.numMul(e,a)-this.numMul(t,a))/a}},{key:"numMul",value:function(e,t){var s=0,n=e.toString(),a=t.toString();try{s+=n.split(".")[1].length}catch(r){}try{s+=a.split(".")[1].length}catch(r){}return Number(n.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,s)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var s,n,a=0,r=0;try{a=e.toString().split(".")[1].length}catch(o){}try{r=t.toString().split(".")[1].length}catch(o){}return s=Number(e.toString().replace(".","")),n=Number(t.toString().replace(".","")),this.numMul(s/n,Math.pow(10,r-a))}}]),e}(),i=new o;t["a"]=i},d06e:function(e,t,s){},e34e:function(e,t,s){}}]);