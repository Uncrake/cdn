(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24bfacde"],{"0c47":function(e,t,r){var n=r("da84"),a=r("d44e");a(n.JSON,"JSON",!0)},"23dc":function(e,t,r){var n=r("d44e");n(Math,"Math",!0)},"5ed4":function(e,t,r){"use strict";r("9f01")},"6c6a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[r("iframe",{attrs:{id:"iframe-widget",src:"https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&link_id=3236decae62425&to=eth&FAQ=false&logo=false&locales=false&lang=",width:"100%",height:"350px",frameborder:"0"}})])],1)},a=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("944a"),r("99af"),r("4de4"),r("4160"),r("c975"),r("d81d"),r("fb6a"),r("0c47"),r("23dc"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3"),r("841c"),r("1276"),r("498a"),r("159b"),r("ddb0"),r("53ca")),c={name:"Swap",data:function(){return{loading:!0}},created:function(){},mounted:function(){var e=this,t=document.querySelector("#iframe-widget");t.attachEvent?t.attachEvent("onload",(function(){console.log("已加载完毕"),e.loading=!1})):t.onload=function(){e.loading=!1,console.log("已加载完毕")}}};!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===Object(o["a"])(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!==typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){var n=r(2),a=r(3),o=r(4);e.exports=function(e,t){return n(e)||a(e,t)||o()}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){r.r(t);var n=r(1),a=r.n(n),o=r(0),c=r.n(o);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return decodeURI(e).split(t).map((function(e){return e.trim().toLowerCase()}))}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e){var t={};return e.slice(e.indexOf("?")+1,e.length).split("&").forEach((function(e){var r=e.split("="),n=c()(r,2),a=n[0],o=n[1],l=escape(o);if(""!==l&&"undefined"!==l)switch(a){case"amount":t.valueFrom=l;break;case"from":t.currencyFrom=l;break;case"to":t.currencyTo=l;break;case"FAQ":t.FAQ="true"===l;break;case"logo":t.logo="true"===l;break;case"address":t.recipientAddress=l;break;case"link_id":t.linkId=l;break;case"lang":t.lang=l;break;case"userid":t.userId="true"===l;break;case"currencies_from":t.availableFromCurrencies=i(o);break;case"currencies_to":t.availableToCurrencies=i(o);break;case"locales":t.locales="false"!==l}})),t},s=document.getElementById("iframe-widget");null===s&&console.error("EXCHANGE WIDGET: iframe-widget not found");var d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u(s?s.src:""),{},u(window.location.search)),f=d.valueFrom,p=d.currencyFrom,b=d.currencyTo,m=d.FAQ,g=d.logo,v=d.recipientAddress,h=d.linkId,y=d.userId,w=d.availableFromCurrencies,O=d.availableToCurrencies,x=d.lang,j=d.locales,k=escape(h||"");s&&(s.src="".concat("https://changenow.io/embeds/exchange-widget/v2/widget.html","?amount=").concat(f,"&from=").concat(p,"&link_id=").concat(k,"&to=").concat(b,"&FAQ=").concat(m,"&logo=").concat(g,"&userid=").concat(y,"&address=").concat(v||"","&currencies_from=").concat(w,"&currencies_to=").concat(O,"&lang=").concat(x,"&locales=").concat(j)),window.addEventListener("message",(function(e){if("Close modal"===e.data.messageText&&document.querySelector(".wrapper-iframe").remove(),"Open modal"===e.data.messageText){var t=e.data.dataQuery,r=document.createElement("iframe"),n=document.createElement("div");n.className="wrapper-iframe",n.style.cssText="\n      position: fixed;\n      top: 0;\n      height: 100vh;\n      width: 100vw;\n      z-index: 2147483647;\n    ",window.document.body.appendChild(n),n.appendChild(r);var a=escape(t.linkId?t.linkId:"");r.src="".concat("https://changenow.io/embeds/exchange-widget/v2/stepper.html","?amount=").concat(t.valueFrom,"&from=").concat(t.currencyFrom,"&to=").concat(t.currencyTo,"&FAQ=").concat(t.FAQ,"&userid=").concat(y,"&rate=").concat(t.rate,"&logo=").concat(t.logo,"&address=").concat(t.recipientAddress,"&link_id=").concat(a,"&currencies_from=").concat(t.availableFromCurrencies,"&currencies_to=").concat(t.availableToCurrencies,"&lang=").concat(t.lang,"&locales=").concat(t.locales),r.id="iframe-stepper",r.width="100%",r.height="100%",r.frameBorder="0"}}),!1)}]);var i=c,l=(r("5ed4"),r("2877")),u=Object(l["a"])(i,n,a,!1,null,"6f6069ef",null);t["default"]=u.exports},"944a":function(e,t,r){var n=r("746f");n("toStringTag")},"9f01":function(e,t,r){}}]);