(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bb95e4e"],{"8d71":function(t,e,s){},b567:function(t,e,s){"use strict";s("8d71")},c768:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("svg-icon",{attrs:{"icon-class":"international"}}),s("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.$t("btcUnitConverter.title")))])],1),s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"300px","label-position":t.isPc?"left":"top"}},[s("el-form-item",{attrs:{label:"satoshi："}},[s("el-input",{staticClass:"inputNum",model:{value:t.satoshi,callback:function(e){t.satoshi=e},expression:"satoshi"}})],1),s("el-form-item",{attrs:{label:"Ubtc："}},[s("el-input",{staticClass:"inputNum",model:{value:t.ubtc,callback:function(e){t.ubtc=e},expression:"ubtc"}})],1),s("el-form-item",{attrs:{label:"Mbtc："}},[s("el-input",{staticClass:"inputNum",model:{value:t.mbtc,callback:function(e){t.mbtc=e},expression:"mbtc"}})],1),s("el-form-item",{attrs:{label:"Btc："}},[s("el-input",{staticClass:"inputNum",model:{value:t.btc,callback:function(e){t.btc=e},expression:"btc"}})],1)],1)],1)],1)},c=[],a=s("d211"),o=s("52c1"),i={zh:{btcUnitConverter:{number:"数量:",title:"BTC单位转换(BCH适用)",tableKey:"私钥",tableAddress:"地址",createBtn:"立即创建",exportBtn:"导出"}},en:{btcUnitConverter:{number:"Number:",title:"BTC Unit Converter(BCH适用)",tableKey:"Key",tableAddress:"tableAddress",createBtn:"Create",exportBtn:"export"}}},r=s("f71e"),l=s("a50d"),u=s.n(l),b="btcUnitConverter",f={name:"BtcUnitConverter",data:function(){return{form:{walletNum:1},satoshi:0,ubtc:0,mbtc:0,btc:0}},computed:Object(a["a"])({},Object(o["b"])(["isPc"])),watch:{satoshi:function(t){this.onConverter(t)},ubtc:function(t){t=u.a.convertBTC(t,"ubtc","satoshi"),this.onConverter(t)},mbtc:function(t){t=u.a.convertBTC(t,"mbtc","satoshi"),this.onConverter(t)},btc:function(t){t=u.a.convertBTC(t,"btc","satoshi"),this.onConverter(t)}},created:function(){this.$i18n.getLocaleMessage("en")[b]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},methods:{onConverter:function(t){this.satoshi=t,this.ubtc=u.a.convertBTC(t,"satoshi","ubtc"),this.mbtc=u.a.convertBTC(t,"satoshi","mbtc"),this.btc=u.a.convertBTC(t,"satoshi","btc")},handleCopy:function(t,e){Object(r["a"])(t,e)},clipboardSuccess:function(){this.$message({message:"Copy successfully",type:"success",duration:1500})}}},m=f,d=(s("b567"),s("5d22")),p=Object(d["a"])(m,n,c,!1,null,"884a588a",null);e["default"]=p.exports},f71e:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("6e6d"),c=s("7cbd"),a=s.n(c);function o(){n["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function i(){n["default"].prototype.$message({message:"Copy failed",type:"error"})}function r(t,e){var s=new a.a(e.target,{text:function(){return t}});s.on("success",(function(){o(),s.destroy()})),s.on("error",(function(){i(),s.destroy()})),s.onClick(e)}}}]);