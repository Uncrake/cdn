(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49a9f8e5"],{4548:function(e,s,t){var r=t("1e2c"),n=t("cbab"),o=t("da10"),a=t("ef71").f,i=function(e){return function(s){var t,i=o(s),c=n(i),l=c.length,u=0,d=[];while(l>u)t=c[u++],r&&!a.call(i,t)||d.push(e?[t,i[t]]:i[t]);return d}};e.exports={entries:i(!0),values:i(!1)}},"568b":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticStyle:{background:"#2b313c",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[t("div",{staticClass:"pwd_box"},[t("header",[e._m(0),t("h3",[e._v(e._s(e.$t("randomPassword.randomPassword")))])]),t("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.y_password,expression:"y_password",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],staticClass:"pwd_show_wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.y_password,expression:"y_password"}],attrs:{type:"text",placeholder:e.$t("randomPassword.password_display_box"),readonly:""},domProps:{value:e.y_password},on:{input:function(s){s.target.composing||(e.y_password=s.target.value)}}}),t("div",{staticClass:"copy"},[t("p",[e._v(e._s(e.$t("randomPassword.click_Copy")))])])]),t("div",{staticClass:"pwd_len_wrap"},[t("p",[e._v(e._s(e.$t("randomPassword.length"))+e._s(e.y_length))]),t("div",{staticClass:"len_box"},[t("span",[e._v("4")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.y_length,expression:"y_length"}],attrs:{type:"range",min:"4",max:"32"},domProps:{value:e.y_length},on:{__r:function(s){e.y_length=s.target.value}}}),t("span",[e._v("32")])])]),t("div",{staticClass:"pwd_settings_wrap"},[t("p",[e._v(e._s(e.$t("randomPassword.setting")))]),t("div",{staticClass:"settings_box"},[t("div",{staticClass:"setting"},[t("label",[e._v(e._s(e.$t("randomPassword.include_uppercase"))+" ")]),t("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_upper},on:{click:e.isUpper}})]),t("div",{staticClass:"setting"},[t("label",[e._v(e._s(e.$t("randomPassword.include_lowercase"))+" ")]),t("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_lower},on:{click:e.isLower}})]),t("div",{staticClass:"setting"},[t("label",[e._v(e._s(e.$t("randomPassword.include_number"))+" ")]),t("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_number},on:{click:e.isNumber}})]),t("div",{staticClass:"setting"},[t("label",[e._v(e._s(e.$t("randomPassword.include_symbol"))+" ")]),t("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_symbol},on:{click:e.isSymbol}})])])]),t("div",{staticClass:"submit"},[t("input",{attrs:{type:"submit"},domProps:{value:e.$t("randomPassword.generate_password")},on:{click:e.submit}})])])])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"dot"},[t("span"),t("span"),t("span")])}],o=(t("dbb3"),t("fe59"),t("77ad"),t("fe8a"),t("d575"),t("08ba"),{zh:{randomPassword:{randomPassword:"随机密码生成器",password_display_box:"密码显示框:",click_Copy:"点击复制",setting:"设置",include_uppercase:"包含大写",include_lowercase:"包含小写",include_number:"包含数字",include_symbol:"包含符号",generate_password:"生成密码",length:"长度:"}},en:{randomPassword:{randomPassword:"Random Password Generator",password_display_box:"Password display box",click_Copy:"Click Copy",setting:"Setting",include_uppercase:"include uppercase",include_lowercase:"include lowercase",include_number:"include number",include_symbol:"include symbol",generate_password:"Generate password",length:"Length:"}}}),a="randomPassword",i={name:"RandomPassword",data:function(){return{y_upper:!0,y_lower:!0,y_number:!0,y_symbol:!1,y_length:8,y_password:"",numArr:["0","1","2","3","4","5","6","7","8","9"],upperArr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],lowerArr:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],symArr:["_","-","$","%","&","@","+","!"],isCopyText:!0}},created:function(){this.$i18n.getLocaleMessage("en")[a]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},methods:{copySuccess:function(e){this.$message.success(this.$t("common.copySuccess"))},copyError:function(){this.$message.error(this.$t("common.copyError"))},getUpper:function(){return this.getFunc(this.upperArr)},getLower:function(){return this.getFunc(this.lowerArr)},getNumber:function(){return this.getFunc(this.numArr)},getSymbol:function(){return this.getFunc(this.symArr)},getFunc:function(e){var s=Math.floor(Math.random()*e.length);return e[s]},isUpper:function(){this.y_upper=!this.y_upper},isLower:function(){this.y_lower=!this.y_lower},isNumber:function(){this.y_number=!this.y_number},isSymbol:function(){this.y_symbol=!this.y_symbol},submit:function(){var e={upper:this.getUpper,lower:this.getLower,number:this.getNumber,symbol:this.getSymbol};function s(s,t,r,n,o){var a="",i=t+r+n+o,c=[{upper:t},{lower:r},{number:n},{symbol:o}].filter((function(e){return Object.values(e)[0]}));if(0!==i){for(var l=0;l<s;l++)c.forEach((function(s){var t=Object.keys(s)[0];a+=e[t]()}));return a.slice(0,s)}alert("请至少选择一项")}this.y_password=s(this.y_length,this.y_upper,this.y_lower,this.y_number,this.y_symbol)}}},c=i,l=(t("98ec"),t("5d22")),u=Object(l["a"])(c,r,n,!1,null,"ef6d99e8",null);s["default"]=u.exports},"5c22":function(e,s,t){},"98ec":function(e,s,t){"use strict";t("5c22")},d575:function(e,s,t){var r=t("1c8b"),n=t("4548").values;r({target:"Object",stat:!0},{values:function(e){return n(e)}})}}]);