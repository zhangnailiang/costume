(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{cfSo:function(e,t,a){e.exports={title:"antd-pro\\pages\\-profile\\-basic-profile-title"}},hJFj:function(e,t,a){"use strict";var n=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("g9YV");var u=n(a("wCAj"));a("/zsF");var o=n(a("PArb")),i=n(a("2Taf")),d=n(a("vZ4D")),c=n(a("l4Ni")),f=n(a("ujKo")),s=n(a("MhPg"));a("Awhp");var m,p,g=n(a("KrTs")),y=r(a("q1tI")),h=a("MuoO"),E=n(a("+kNj")),v=n(a("zHco")),k=n(a("cfSo"));function x(e){return function(){var t,a=(0,f.default)(e);if(b()){var n=(0,f.default)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return(0,c.default)(this,t)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var I=E.default.Description,w=[{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5f53\u524d\u8fdb\u5ea6",dataIndex:"rate",key:"rate"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"success"===e?y.default.createElement(g.default,{status:"success",text:"\u6210\u529f"}):y.default.createElement(g.default,{status:"processing",text:"\u8fdb\u884c\u4e2d"})}},{title:"\u64cd\u4f5c\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65f6",dataIndex:"cost",key:"cost"}],B=(m=(0,h.connect)(function(e){var t=e.profile,a=e.loading;return{profile:t,loading:a.effects["profile/fetchBasic"]}}),m(p=function(e){(0,s.default)(a,e);var t=x(a);function a(){return(0,i.default)(this,a),t.apply(this,arguments)}return(0,d.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"profile/fetchBasic"})}},{key:"render",value:function(){var e=this.props,t=e.profile,a=e.loading,n=t.basicGoods,r=t.basicProgress,i=[];if(n.length){var d=0,c=0;n.forEach(function(e){d+=Number(e.num),c+=Number(e.amount)}),i=n.concat({id:"\u603b\u8ba1",num:d,amount:c})}var f=function(e,t,a){var r={children:e,props:{}};return a===n.length&&(r.props.colSpan=0),r},s=[{title:"\u5546\u54c1\u7f16\u53f7",dataIndex:"id",key:"id",render:function(e,t,a){return a<n.length?y.default.createElement("a",{href:""},e):{children:y.default.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:4}}}},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name",key:"name",render:f},{title:"\u5546\u54c1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:f},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",align:"right",render:f},{title:"\u6570\u91cf\uff08\u4ef6\uff09",dataIndex:"num",key:"num",align:"right",render:function(e,t,a){return a<n.length?e:y.default.createElement("span",{style:{fontWeight:600}},e)}},{title:"\u91d1\u989d",dataIndex:"amount",key:"amount",align:"right",render:function(e,t,a){return a<n.length?e:y.default.createElement("span",{style:{fontWeight:600}},e)}}];return y.default.createElement(v.default,{title:"\u57fa\u7840\u8be6\u60c5\u9875"},y.default.createElement(l.default,{bordered:!1},y.default.createElement(E.default,{size:"large",title:"\u9000\u6b3e\u7533\u8bf7",style:{marginBottom:32}},y.default.createElement(I,{term:"\u53d6\u8d27\u5355\u53f7"},"1000000000"),y.default.createElement(I,{term:"\u72b6\u6001"},"\u5df2\u53d6\u8d27"),y.default.createElement(I,{term:"\u9500\u552e\u5355\u53f7"},"1234123421"),y.default.createElement(I,{term:"\u5b50\u8ba2\u5355"},"3214321432")),y.default.createElement(o.default,{style:{marginBottom:32}}),y.default.createElement(E.default,{size:"large",title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:32}},y.default.createElement(I,{term:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),y.default.createElement(I,{term:"\u8054\u7cfb\u7535\u8bdd"},"18100000000"),y.default.createElement(I,{term:"\u5e38\u7528\u5feb\u9012"},"\u83dc\u9e1f\u4ed3\u50a8"),y.default.createElement(I,{term:"\u53d6\u8d27\u5730\u5740"},"\u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u4e07\u5858\u8def18\u53f7"),y.default.createElement(I,{term:"\u5907\u6ce8"},"\u65e0")),y.default.createElement(o.default,{style:{marginBottom:32}}),y.default.createElement("div",{className:k.default.title},"\u9000\u8d27\u5546\u54c1"),y.default.createElement(u.default,{style:{marginBottom:24},pagination:!1,loading:a,dataSource:i,columns:s,rowKey:"id"}),y.default.createElement("div",{className:k.default.title},"\u9000\u8d27\u8fdb\u5ea6"),y.default.createElement(u.default,{style:{marginBottom:16},pagination:!1,loading:a,dataSource:r,columns:w})))}}]),a}(y.Component))||p),S=B;t.default=S}}]);