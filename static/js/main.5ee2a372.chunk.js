(this["webpackJsonpby-react"]=this["webpackJsonpby-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(4),s=n(5),m=n(7),l=n(6),u=n(1),f={transInfo2DateMs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{h:0,m:0,s:0};return 36e5*e.h+6e4*e.m+1e3*e.s},transInfo2Str:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{h:0,m:0,s:0},t={h:"\u5c0f\u65f6",m:"\u5206\u949f",s:"\u79d2"},n="";for(var a in t)e[a]&&(n+="".concat(e[a]).concat(t[a]));return n||(n="0\u65f60\u52060\u79d2"),n},formateInfo:function(e){return Object(u.a)(Object(u.a)({},{h:0,m:0,s:0}),e)},formateDate:function(e){return e instanceof Date?{h:f.pad(e.getHours()),m:f.pad(e.getMinutes()),s:f.pad(e.getSeconds())}:{}},transMs2Date:function(e,t){var n=function(e){return t?f.pad(parseInt(e)):parseInt(e)},a=e<0,r=n((e=Math.abs(e))/36e5),o=n((e-36e5*r)/6e4);return{h:r,m:o,s:n((e-36e5*r-6e4*o)/1e3),flag:a?"-":""}},parseDate:function(e,t){return e instanceof Date?Object(u.a)(Object(u.a)({},f.formateDate(e)),{flag:""}):f.transMs2Date(e,t)},pad:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="0".repeat(t-1);return String(e).length<t?"".concat(n).concat(e):e}},d=f,p=(n(13),function(e){var t=e.date,n=void 0===t?null:t;if("number"!==typeof n&&!(n instanceof Date))return"--";var a=d.parseDate(n,!0);return r.a.createElement("span",{className:"time-display"},"".concat(a.flag).concat(a.h,":").concat(a.m,":").concat(a.s))}),h=(n(14),function(e){var t=e.maxHour,n=void 0===t?24:t,o=e.maxMinute,i=void 0===o?60:o,c=e.maxSecond,s=void 0===c?60:c,m=e.onChange,l=e.children,f=e.info,d=void 0===f?{h:0,m:0,s:0}:f,p=[{key:"h",max:n+1,text:"\u65f6"},{key:"m",max:i+1,text:"\u5206"},{key:"s",max:s+1,text:"\u79d2"}],h=Object(u.a)(Object(u.a)({},{}),d),v=function(e,t){h[t]=Number(e.target.value),m&&m(h)};return r.a.createElement("section",{className:"time-setter"},p.map((function(e,t){return r.a.createElement(a.Fragment,{key:e.key},r.a.createElement("select",{onChange:function(t){v(t,e.key)},value:d[e.key]},new Array(e.max).fill("").map((function(e,t){return r.a.createElement("option",{key:t,value:t},t)}))),r.a.createElement("b",{className:"text"},e.text))})),l)}),v=(n(15),function(e){var t=e.lists,n=void 0===t?[{m:10},{m:30},{h:1}]:t,a=e.onSetTime;return r.a.createElement("div",{className:"quick-time-setter"},n.map((function(e){return r.a.createElement("button",{key:JSON.stringify(e),onClick:function(){a&&a(d.formateInfo(e))}},"+\xa0",d.transInfo2Str(e))})))}),S=(n(16),n(17),null),E=null,D=!1,b=null,g=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).tickTime=function(){!function t(){setTimeout((function(){e.setState({nowDate:new Date}),t(),S&&S()}),1e3)}()},e.reset=function(){S=null,e.setState({leftTime:null,timeSetterInfo:d.formateInfo(0)})},e.componentDidMount=function(){e.tickTime()},e.clickSetterHandler=function(){var t=function(){D=!1,e.setState({leftTime:d.transInfo2DateMs(e.state.timeSetterInfo),endTime:Date.now()+d.transInfo2DateMs(e.state.timeSetterInfo),pauseStatus:1}),S=function(){e.setState({leftTime:e.state.endTime-Date.now()},(function(){e.state.leftTime<=0&&(D||(alert("done"),D=!0))}))}};S?window.confirm("\u6b63\u5728\u5012\u8ba1\u65f6\u4e2d\uff0c\u662f\u5426\u91cd\u65b0\u8bbe\u7f6e\u8ba1\u65f6\u65f6\u95f4\uff1f")&&t():t()},e.timeSetterChangeHandler=function(t){e.setState({timeSetterInfo:t})},e.state={nowDate:new Date,leftTime:null,endTime:null,timeSetterInfo:{h:0,m:0,s:0},pauseStatus:1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"now-time-wrapper"},r.a.createElement("span",{className:"now-time"},"\u5f53\u524d\u65f6\u95f4"),r.a.createElement(p,{date:this.state.nowDate})),r.a.createElement("div",{className:"time-setter-wrapper"},r.a.createElement("div",null,"\u8bbe\u7f6e\u8ba1\u65f6"),r.a.createElement(v,{onSetTime:function(t){e.setState({timeSetterInfo:d.transMs2Date(d.transInfo2DateMs(e.state.timeSetterInfo)+d.transInfo2DateMs(t))})}}),r.a.createElement("div",{className:"control-btn-list"},r.a.createElement("button",{onClick:this.clickSetterHandler},"\u8bbe\u7f6e"),r.a.createElement("button",{onClick:function(){var t=1===e.state.pauseStatus;e.setState({pauseStatus:t?0:1}),t?(E=S,S=null,b=Date.now()):(S=E,e.setState({endTime:e.state.endTime+(Date.now()-b)}))}},1===this.state.pauseStatus?"\u6682\u505c":"\u6062\u590d"),r.a.createElement("button",{onClick:function(){e.reset()}},"\u91cd\u7f6e")),r.a.createElement(h,{info:this.state.timeSetterInfo,onChange:this.timeSetterChangeHandler})),r.a.createElement("div",{className:"left-time-wrapper"},r.a.createElement("span",{className:"left-time"},"\u5269\u4f59\u65f6\u95f4"),r.a.createElement(p,{date:this.state.leftTime})))}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5ee2a372.chunk.js.map