(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8152bd1e"],{"5f12":function(e,t,a){},"62f6":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));a("16ca"),a("24a8"),a("529f");var n=function(e,t){var a=(100*(e/t-1)).toFixed(2);return Number(a)},i=function(e){if("undefined"!==typeof e){var t=e>0?"+":"";return"".concat(t).concat(Number(e.toFixed(2)),"%")}}},"6f62":function(e,t,a){},"8b6f":function(e,t,a){"use strict";a("6f62")},"9ae80":function(e,t,a){"use strict";a("5f12")},a69a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("Sidebar",{attrs:{symbol:e.symbol},on:{onChangeSymbol:e.onChangeSymbol}}),a("div",{staticClass:"main"},[a("div",{staticClass:"coinInfo"},[e._v(e._s(e.symbol.toUpperCase())+" "+e._s(e.price))]),a("div",{staticClass:"kline"},[a("ul",{staticClass:"timeRange"},e._l(e.timeRange,(function(t){return a("li",{key:t.value,class:{on:e.defaultTime.value===t.value},on:{click:function(a){return e.onChangeTimeRange(t)}}},[e._v(e._s(t.lable))])})),0),e.lineChartData.values.length>0?a("line-chart",{attrs:{"chart-data":e.lineChartData}}):e._e()],1),a("div",{staticClass:"ball"},[a("div",{staticClass:"box"},[a("h5",[e._v("高抛")]),a("ball-chart",{attrs:{"chart-data":e.upBallChartData}}),a("p",{staticClass:"info"},[e._v("连续4次")]),a("p",{staticClass:"remark"},[e._v("大于4个时间轴前的价格")])],1),a("div",{staticClass:"box"},[a("h5",[e._v("低吸")]),a("ball-chart",{attrs:{"chart-data":e.downBallChartData}}),a("p",{staticClass:"info"},[e._v("连续4次")]),a("p",{staticClass:"remark"},[e._v("小于4个时间轴前的价格")])],1)]),a("div",{staticClass:"table"},[a("h5",[e._v(e._s(e.defaultTime.lable)+" 时间轴均值")]),a("ul",{staticClass:"ul"},e._l(e.tableData,(function(t){return a("li",{key:t.key},[a("p",{staticClass:"title"},[e._v(e._s(t.key)+"个")]),a("p",{staticClass:"per",class:t.averageRage>0?"green":"red"},[e._v(" "+e._s(""===t.average?"-":e.getRateText(t.averageRage))+" ")]),a("p",{staticClass:"price",class:t.averageRage>0?"green":"red"},[e._v(" "+e._s(""===t.average?"-":"$"+e.$options.filters.autoFixed(t.average))+" ")])])})),0)]),a("div",{staticClass:"table"},[a("h5",[e._v(e._s(e.defaultTime.lable)+" 时间轴最小")]),a("ul",{staticClass:"ul"},e._l(e.tableData,(function(t){return a("li",{key:t.key},[a("p",{staticClass:"title"},[e._v(e._s(t.key)+"个")]),a("p",{staticClass:"per",class:t.minRage>0?"green":"red"},[e._v(" "+e._s(""===t.min?"-":e.getRateText(t.minRage))+" ")]),a("p",{staticClass:"price",class:t.minRage>0?"green":"red"},[e._v(" "+e._s(""===t.min?"-":"$"+e.$options.filters.autoFixed(t.min))+" ")])])})),0)]),a("div",{staticClass:"table",staticStyle:{"margin-bottom":"50px"}},[a("h5",[e._v(e._s(e.defaultTime.lable)+" 时间轴最大")]),a("ul",{staticClass:"ul"},e._l(e.tableData,(function(t){return a("li",{key:t.key},[a("p",{staticClass:"title"},[e._v(e._s(t.key)+"个")]),a("p",{staticClass:"per",class:t.maxRage>0?"green":"red"},[e._v(" "+e._s(""===t.max?"-":e.getRateText(t.maxRage))+" ")]),a("p",{staticClass:"price",class:t.maxRage>0?"green":"red"},[e._v(" "+e._s(""===t.max?"-":"$"+e.$options.filters.autoFixed(t.max))+" ")])])})),0)])])],1)},i=[],s=(a("16ca"),a("33375"),a("5d08"),a("e938"),a("27ae"),a("4008"),a("2a2d"),a("7def"),a("84c2"),a("479d"),a("1980"),a("d421"),a("49be"),a("5bbe"),a("9f39"),a("7168"),a("01c0"),a("2d0c"),a("18e8"),a("209f"),a("3448"),a("d67a"),a("1e64"),a("484b"),a("ce6b"),a("1ba7"),a("3015"),a("d156"),a("3dcd"),a("ccd6"),a("5530")),r=a("2f62"),l={zh:{demo:{}},en:{demo:{}}},o=a("c1df"),c=a.n(o),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},h=[],d=(a("1d43"),a("feb3"),a("313e")),m=a.n(d),f=a("ed08"),b={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(f["c"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var v="rgba(74, 177, 103, 1)",p="rgba(74, 177, 103, 1)",g="rgba(231, 53, 79, 1)",y="rgba(231, 53, 79, 1)",_={mixins:[b],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.initChart()}}},mounted:function(){console.log(m.a)},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=m.a.init(this.$el),this.setOptions(this.chartData)},setOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.values,a=e.categoryData,n=e.volumes;this.chart.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e){var t=e[0],a="\n              ".concat(t.name,"<br/>\n              开盘:").concat(t.data[1],"<br/>\n              收盘:").concat(t.data[2],"<br/>\n              最高:").concat(t.data[4],"<br/>\n              最低:").concat(t.data[3],"<br/>\n              ");return a}},legend:{textStyle:{color:"rgba(255,255,255,1)"},data:["MA5","MA10","MA20","MA30"]},grid:{left:"10%",right:"10%",bottom:"20%"},xAxis:{type:"category",data:a,scale:!0,boundaryGap:!1,axisLine:{onZero:!1,lineStyle:{color:"RGBA(33, 38, 54, 1)",width:2}},splitLine:{show:!1},splitNumber:20,min:"dataMin",max:"dataMax",axisLabel:{textStyle:{color:"rgba(177, 190, 226, 1)",fontSize:12},showMaxLabel:!0}},yAxis:{scale:!0,splitLine:{show:!0,lineStyle:{color:"RGBA(33, 38, 54, 1)"}},axisLine:{onZero:!1,lineStyle:{color:"rgba(107, 123, 171, 1)",width:2}},axisLabel:{textStyle:{color:"rgba(107, 123, 171, 1)",fontSize:12},showMaxLabel:!0,showMinLabel:!0},axisTick:{show:!0}},dataZoom:[{textStyle:{color:"#8392A5"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",dataBackground:{areaStyle:{color:"#8392A5"},lineStyle:{opacity:.8,color:"#8392A5"}},handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}},{type:"inside",start:50,end:100}],series:[{name:"日K",type:"candlestick",data:t,itemStyle:{color:v,color0:g,borderColor:p,borderColor0:y},markPoint:{label:{normal:{formatter:function(e){return null!=e?Math.round(e.value):""}}},data:[{name:"highest value",type:"max",valueDim:"highest",label:{formatter:function(e){return e.value}}},{name:"lowest value",type:"min",valueDim:"lowest",label:{formatter:function(e){return e.value}}},{name:"average value on close",type:"average",valueDim:"close",label:{formatter:function(e){return e.value}}}],tooltip:{formatter:function(e){return e.name+"<br>"+(e.data.coord||"")}}},markLine:{symbol:["none","none"],data:[[{name:"from lowest to highest",type:"min",valueDim:"lowest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}},{type:"max",valueDim:"highest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}}],{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"}]}},{name:"Volume",type:"bar",xAxisIndex:1,yAxisIndex:1,data:n}]})}}},C=_,x=a("2877"),w=Object(x["a"])(C,u,h,!1,null,null,null),D=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},S=[];a("a98e");a("817d");var R="rgba(74, 177, 103, 1)",M="rgba(250, 93, 93, 1)",$={mixins:[b],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"150px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.initChart()}}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=m.a.init(this.$el),this.setOptions(this.chartData)},setOptions:function(e){var t=e.data,a=e.type;this.chart.setOption({series:[{type:"liquidFill",label:{fontSize:36,color:"white"},data:[t||0],radius:"90%",phase:0,period:2e3,waveLength:"100%",animationDurationUpdate:2e3,itemStyle:{normal:{shadowBlur:0,color:"up"===a?R:M}},backgroundStyle:{color:"rgba(0,0,0,0)"},outline:{itemStyle:{borderWidth:5,borderColor:"#1F2639",shadowBlur:0},borderDistance:0}}]})}}},z=$,O=Object(x["a"])(z,k,S,!1,null,null,null),E=O.exports,T=a("62f6"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar"},[a("ul",e._l(e.list,(function(t){return a("li",{key:t,class:{on:e.symbol===t},on:{click:function(a){return e.onChangeSymbol(t)}}},[e._v(e._s(t.toUpperCase())+" / USDT")])})),0)])},L=[],A=(a("e3b5"),a("4b4e"),a("96cf"),a("1da1")),B={name:"Sidebar",components:{},props:{symbol:{type:String,default:"btc",require:!0}},data:function(){return{list:[]}},computed:Object(s["a"])({},Object(r["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:e.list=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{onChangeSymbol:function(e){e!==this.symbol&&this.$emit("onChangeSymbol",e)},getData:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:"https://api.huobi.be/v1/common/currencys",method:"get",data:{}});case 2:return a=t.sent,n=a.data,i=["hb10","usdt"],t.abrupt("return",n.filter((function(e){return-1===i.indexOf(e)})));case 6:case"end":return t.stop()}}),t)})))()}}},N=B,Y=(a("8b6f"),Object(x["a"])(N,j,L,!1,null,"162786ac",null)),H=Y.exports,F=a("acff"),J="band",q=null,U={name:"Band",inject:["onCheckConnect"],components:{LineChart:D,BallChart:E,Sidebar:H},data:function(){return{timeRange:[{lable:"1 min",value:"1min",time:60},{lable:"5 min",value:"5min",time:300},{lable:"15 min",value:"15min",time:900},{lable:"30 min",value:"30min",time:1800},{lable:"1 hour",value:"1hour",time:3600},{lable:"2 hour",value:"2hour",time:7200},{lable:"4 hour",value:"4hour",time:14400},{lable:"12 hour",value:"12hour",time:43200},{lable:"1 day",value:"1day",time:86400},{lable:"1 week",value:"1week",time:604800}],klineData:[],defaultTime:{lable:"1 min",value:"1min",time:60},lineChartData:{categoryData:[],volumes:[],values:[]},upBallChartData:{type:"up",data:.5},downBallChartData:{type:"down",data:.2},symbol:"btc",price:4e4,tableData:[]}},computed:Object(s["a"])({},Object(r["b"])(["isConnect","account","isPc","language"])),watch:{klineData:function(e){var t=JSON.parse(JSON.stringify(e));t.length>0&&(this.price=t[t.length-1].close),this.lineChartData=this.handleKlineChartData(t),this.calculateTableData(t)}},created:function(){this.$i18n.getLocaleMessage("en")[J]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){this.onConnectWebSocket()},deactivated:function(){q.close()},methods:{onReset:function(){this.klineData=[],this.tableData=[]},onChangeSymbol:function(e){this.onReset(),this.unsub(),this.symbol=e,this.sub()},getRateText:function(e){return Object(T["b"])(e)},getTimerShaft:function(e,t){if(e>t.length)return{key:e,average:"",max:"",min:""};var a=Object(f["b"])(t,"close")/e,n=Math.max.apply(Math,t.map((function(e){return e.close}))),i=Math.min.apply(Math,t.map((function(e){return e.close})));return{key:e,average:a,averageRage:Object(T["a"])(this.price,a),max:Math.max.apply(Math,t.map((function(e){return e.close}))),maxRage:Object(T["a"])(this.price,n),min:Math.min.apply(Math,t.map((function(e){return e.close}))),minRage:Object(T["a"])(this.price,i)}},calculateTableData:function(e){var t=this,a=[3,7,14,30,60,90,180,365],n=e.reverse();this.tableData=a.map((function(e,a){return t.getTimerShaft(e,n.slice(0,e))}))},onChangeTimeRange:function(e){this.onReset(),this.unsub(),this.defaultTime=e,this.sub()},handleKlineChartData:function(e){console.log(e,"res");for(var t={"1min":"hh:mm","5min":"hh:mm","15min":"hh:mm","30min":"MM-DD hh:mm","1hour":"MM-dd hh:mm","2hour":"MM-dd hh:mm","4hour":"MM-dd hh:mm","6hour":"MM-dd hh:mm","12hour":"MM-dd hh:mm","1day":"YYYY-MM-DD","3day":"YYYY-MM-DD","1week":"YYYY-MM-DD"},a=t[this.defaultTime.value],n=[],i=[],s=[],r=0;r<e.length;r++){n.push(c()(1e3*e[r].id).format(a)),i.push([e[r].open,e[r].close,e[r].low,e[r].high]);var l=e[r].open>e[r].close?1:-1;s.push([r,e[r].vol,l])}return console.log(s,"volumes"),{categoryData:n,values:i,volumes:s}},unsub:function(){var e={unsub:"market.".concat(this.symbol,"usdt.kline.").concat(this.defaultTime.value)};q.send(JSON.stringify(e))},sub:function(){var e={req:"market.".concat(this.symbol,"usdt.kline.").concat(this.defaultTime.value),from:Math.round((new Date).getTime()/1e3)-60*this.defaultTime.time,to:Math.round((new Date).getTime()/1e3),id:"requestK"};"market.".concat(this.symbol,"usdt.kline.").concat(this.defaultTime.value);q.send(JSON.stringify(e))},onConnectWebSocket:function(){var e=this,t="wss://api.hadax.com/ws";q=new WebSocket(t),q.onopen=function(){e.sub()},q.onmessage=function(e){var t=e.data,n=new FileReader;n.onload=function(e){var t=new Uint8Array(e.target.result),n=F["a"].inflate(t,{to:"string"});a(n)},n.readAsArrayBuffer(t,"utf-8")},q.onclose=function(){console.log("connection closed")};var a=function(t){var a=JSON.parse(t);if(console.log(t,"msg"),a.ping)n(a.ping);else if("ok"===a.status)a.data&&a.data.length>0&&(e.klineData=a.data);else{if(0===e.klineData.length)return;var i=a.tick,s=e.klineData[e.klineData.length-1];s.id===i.id?e.$set(e.klineData,e.klineData.length-1,i):(e.klineData.push(i),console.log("push"))}};function n(e){q.send(JSON.stringify({pong:e}))}}}},I=U,K=(a("9ae80"),Object(x["a"])(I,n,i,!1,null,"25a5f476",null));t["default"]=K.exports}}]);