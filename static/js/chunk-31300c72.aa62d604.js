(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31300c72"],{"03ff":function(s,t,e){},"0751":function(s,t,e){},"1d3e":function(s,t,e){"use strict";e("03ff")},"262d":function(s,t,e){},"2f5f":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"phone"},[e("div",{staticClass:"leftBox",style:"left: -"+(2*s.zoom-100)+"px"},[e("el-slider",{attrs:{vertical:"","input-size":"large",min:10,max:200,height:"200px"},on:{change:s.onChangeZoom},model:{value:s.zoom,callback:function(t){s.zoom=t},expression:"zoom"}})],1),e("div",{staticClass:"marvel-device iphone-x",style:"transform: scale("+s.zoom/100+");"},[s._m(0),e("div",{staticClass:"top-bar"}),e("div",{staticClass:"sleep"}),e("div",{staticClass:"bottom-bar"}),e("div",{staticClass:"volume"}),s._m(1),e("div",{staticClass:"inner-shadow"}),e("div",{staticClass:"screen"},[e("video",{directives:[{name:"show",rawName:"v-show",value:!s.loading,expression:"!loading"}],ref:"videoPlay",staticClass:"videoPlay",attrs:{preload:"auto",src:s.url,controls:"",loop:"","webkit-playsinline":"",playsinline:""},domProps:{muted:s.isMuted},on:{canplay:s.onVideoCanPlay,pause:s.onVideoPause,play:s.onVideoPlay,error:s.onVideoError}}),e("div",{directives:[{name:"show",rawName:"v-show",value:s.isPause,expression:"isPause"}],staticClass:"pause",on:{click:s.onVideoCanPlay}},[e("i",{staticClass:"el-icon-video-play"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.loading,expression:"loading"}],staticClass:"loading"},[e("i",{staticClass:"el-icon-loading"})]),e("div",{staticClass:"btnBox"},[e("button",{on:{click:function(t){return s.onPrev()}}},[e("svg-icon",{attrs:{"icon-class":"prev"}})],1),e("button",{on:{click:function(t){return s.onNext()}}},[e("svg-icon",{attrs:{"icon-class":"next"}})],1),e("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:s.copyText,expression:"copyText",arg:"copy"}],on:{click:function(t){return s.onShare()}}},[e("svg-icon",{attrs:{"icon-class":"share"}})],1)])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"right"},[s._v(" 123 ")])])])},o=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"notch"},[e("div",{staticClass:"camera"}),e("div",{staticClass:"speaker"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"overflow"},[e("div",{staticClass:"shadow shadow--tr"}),e("div",{staticClass:"shadow shadow--tl"}),e("div",{staticClass:"shadow shadow--br"}),e("div",{staticClass:"shadow shadow--bl"})])}],i=(e("a9e3"),e("96cf"),e("1da1")),n={name:"Happy",data:function(){return{copyText:window.location.href,zoom:100,videoQueue:[],loading:!0,url:"",isPause:!1,firstFlag:!1,isMuted:!0}},mounted:function(){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.getItem("happyZoom")&&(s.zoom=Number(localStorage.getItem("happyZoom"))),s.onNext();case 2:case"end":return t.stop()}}),t)})))()},methods:{onVideoPlay:function(){this.onVideoCanPlay()},onVideoPause:function(){this.isPause=!0},onChangeZoom:function(s){localStorage.setItem("happyZoom",s)},onVideoError:function(s){this.onNext()},onPrev:function(){this.videoQueue.length>0&&this.onNext()},onVideoCanPlay:function(){this.isPause=!1,this.loading=!1;var s=this.$refs.videoPlay;try{console.log("try"),s.play(),!1===this.firstFlag&&(this.isMuted=!1,this.firstFlag=!0)}catch(t){console.log(t,"出错拉"),this.isPause=!0}},onNext:function(){this.loading=!0;var s="https://www.nihaowua.com/v/video.php?t="+Math.random();this.url=s,this.videoQueue.push(s)},onShare:function(){this.$message.success("已复制链接，快去分享给好友吧~~")}}},c=n,r=(e("7706"),e("1d3e"),e("a74e"),e("2877")),l=Object(r["a"])(c,a,o,!1,null,"5b945b32",null);t["default"]=l.exports},7706:function(s,t,e){"use strict";e("262d")},a74e:function(s,t,e){"use strict";e("0751")}}]);