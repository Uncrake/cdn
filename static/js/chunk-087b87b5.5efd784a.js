(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-087b87b5"],{"5ad5":function(t,e,a){},a62a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"containerCenter"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"uniswapIcon",attrs:{"icon-class":t.icon}}),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"input",attrs:{placeholder:"Please enter..."},domProps:{value:t.searchInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])],1),a("el-row",{staticClass:"cardList",attrs:{gutter:20}},t._l(t.resList,(function(e,r){return a("el-col",{key:r,attrs:{lg:12,xs:24}},[a("div",{staticClass:"card"},[a("div",{staticClass:"coinInfo"},[a("div",{staticClass:"imgBox"},[a("el-image",{staticClass:"img img1",attrs:{src:t.logo_link.replace("#address#",e.token1)}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])]),a("el-image",{staticClass:"img img2",attrs:{src:t.logo_link.replace("#address#",e.token2)}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])])],1),a("div",{staticClass:"sybmol"},[a("a",{attrs:{href:"/defi/token?platform="+t.platform+"&address="+e.token1,target:"_blank"}},[t._v(t._s(e.token1Sybmol))]),t._v(" /"),a("a",{attrs:{href:"/defi/token?platform="+t.platform+"&address="+e.token2,target:"_blank"}},[t._v(t._s(e.token2Sybmol))])])]),a("ul",[a("li",[a("i",{staticClass:"el-icon-time icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Date:")]),t._v(t._s(e.timestamp))])]),a("li",[a("i",{staticClass:"el-icon-tickets icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Pair:")]),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_blank"}},[t._v(t._s(e.pair))])])]),a("li",[a("i",{staticClass:"el-icon-menu icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Liquidity:")]),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_balnk"}},[t._v(t._s(t._f("autoFixed")(e.liquidity1))+" "+t._s(e.token1Sybmol))]),t._v(" / "),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_balnk"}},[t._v(t._s(t._f("autoFixed")(e.liquidity2))+" "+t._s(e.token2Sybmol))])])])])])])})),1)],1)])},n=[],s=(a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),i={zh:{uniswap:{title:"Uniswap最新交易对"}},en:{uniswap:{title:"Uniswap latest trading pairs"}}},o=a("5ba3"),c=a("c039"),u=a.n(c),l=a("b893"),p="defi",d={name:"Defi",data:function(){return{searchInput:"",resList:[],rpc_node:"",factory_address:"",platform:"",logo_link:"",icon:""}},created:function(){this.$i18n.getLocaleMessage("en")[p]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,i,o,c,l,p,d,m,h,f,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.platform=t.icon=t.$route.name,"uniswap"===t.platform&&(t.rpc_node="https://mainnet.infura.io/v3/7533c3c93ff146b1b791cae8af63c25b",t.blockscan="https://etherscan.io",t.logo_link="https://tokens.1inch.exchange/#address#.png",t.factory_address="0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"),"mdex"===t.platform&&(t.rpc_node="https://http-mainnet.hecochain.com/",t.blockscan="https://scan.hecochain.com",t.factory_address="0xb0b670fc1F7724119963018DB0BfA86aDb22d941",t.logo_link="https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/#address#.png"),e.next=5,t.Data();case 5:a=e.sent,r=[],n=1,s=a.length-1;case 9:if(!(s>=0)){e.next=42;break}if(!(n>=80)){e.next=12;break}return e.abrupt("break",42);case 12:if(i=a[s].data.replace("0x000000000000000000000000","0x").substring(0,42),o=a[s].topics[1].replace("000000000000000000000000",""),c=a[s].topics[2].replace("000000000000000000000000",""),r[o]){e.next=19;break}return e.next=18,t.getTokenInfo(o);case 18:r[o]=e.sent;case 19:if(r[c]){e.next=23;break}return e.next=22,t.getTokenInfo(c);case 22:r[c]=e.sent;case 23:return l=r[o].symbol,p=r[c].symbol,e.t0=u.a.abi,e.t1=["uint112","uint112","uint32"],e.next=29,t.Liquidity(i);case 29:return e.t2=e.sent,d=e.t0.decodeParams.call(e.t0,e.t1,e.t2),m=parseInt("0x"+d[0].toString(16))/Math.pow(10,r[o].decimal),h=parseInt("0x"+d[1].toString(16))/Math.pow(10,r[c].decimal),e.next=35,t.BlockByHash(a[s].blockHash);case 35:f=e.sent,g=new Date(1e3*parseInt(f.timestamp)).toLocaleString(),t.resList.push({token1:o,token2:c,token1Sybmol:l,token2Sybmol:p,liquidity1:m,liquidity2:h,pair:i,timestamp:g}),n++;case 39:s--,e.next=9;break;case 42:case"end":return e.stop()}}),e)})))()},methods:{onSearch:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getTokenInfo(t.searchInput);case 3:a=e.sent,"UNI-V2"===a.symbol||"HMDX"===a.symbol?t.$router.push({name:"Pair",query:{platform:t.platform,address:t.searchInput}}):t.$router.push({name:"Token",query:{platform:t.platform,address:t.searchInput}}),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=t.rpc_node,e.t2=t.factory_address,e.t3=["0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9"],e.t4=o["toHex"],e.next=7,t.blockNumber();case 7:return e.t5=e.sent,e.t6=e.t5-1e4,e.t7=(0,e.t4)(e.t6),e.t8={address:e.t2,topics:e.t3,fromBlock:e.t7,toBlock:"latest"},e.t9=[e.t8],e.t10={jsonrpc:"2.0",id:1,method:"eth_getLogs",params:e.t9},e.t11={url:e.t1,method:"post",data:e.t10},e.next=16,e.t0.$ajax.call(e.t0,e.t11);case 16:return a=e.sent,e.abrupt("return",a.result);case 18:case"end":return e.stop()}}),e)})))()},blockNumber:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return a=e.sent,e.abrupt("return",parseInt(a.result));case 4:case"end":return e.stop()}}),e)})))()},Liquidity:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0902f1ac"},"latest"]}});case 2:return r=a.sent,a.abrupt("return",r.result);case 4:case"end":return a.stop()}}),a)})))()},BlockByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getBlockByHash",params:[t,!1],id:1}});case 2:return r=a.sent,a.abrupt("return",r.result);case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]}});case 2:return r=a.sent,a.next=5,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]}});case 5:return n=a.sent,a.abrupt("return",{symbol:l["a"].cleanAsciiText(u.a.toAscii(r.result).toString()),decimal:parseInt(n.result)});case 7:case"end":return a.stop()}}),a)})))()}}},m=d,h=(a("b323"),a("2877")),f=Object(h["a"])(m,r,n,!1,null,"90ba8be2",null);e["default"]=f.exports},b323:function(t,e,a){"use strict";a("5ad5")},b893:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("498a");var r=a("d4ec"),n=a("bee2"),s=a("ade3"),i=function(){function t(){Object(r["a"])(this,t),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(n["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var r=Math.ceil(61*Math.random());e+=this.chars[r]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,r,n;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{r=e.toString().split(".")[1].length}catch(s){r=0}return n=Math.pow(10,Math.max(a,r)),(this.numMul(t,n)+this.numMul(e,n))/n}},{key:"numSub",value:function(t,e){var a,r,n;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{r=e.toString().split(".")[1].length}catch(s){r=0}return n=Math.pow(10,Math.max(a,r)),(this.numMul(t,n)-this.numMul(e,n))/n}},{key:"numMul",value:function(t,e){var a=0,r=t.toString(),n=e.toString();try{a+=r.split(".")[1].length}catch(s){}try{a+=n.split(".")[1].length}catch(s){}return Number(r.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,r,n=0,s=0;try{n=t.toString().split(".")[1].length}catch(i){}try{s=e.toString().split(".")[1].length}catch(i){}return a=Number(t.toString().replace(".","")),r=Number(e.toString().replace(".","")),this.numMul(a/r,Math.pow(10,s-n))}}]),t}(),o=new i;e["a"]=o}}]);