(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{a4KE:function(e,t,a){"use strict";var s=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=i(a("VXEj")),r=i(a("2Taf")),u=i(a("vZ4D")),l=i(a("l4Ni")),c=i(a("ujKo")),d=i(a("MhPg")),o=s(a("q1tI")),f=a("LLXN");function p(e){return function(){var t,a=(0,c.default)(e);if(m()){var s=(0,c.default)(this).constructor;t=Reflect.construct(a,arguments,s)}else t=a.apply(this,arguments);return(0,l.default)(this,t)}}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var g={strong:o.default.createElement("font",{className:"strong"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:o.default.createElement("font",{className:"medium"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:o.default.createElement("font",{className:"weak"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},y=function(e){(0,d.default)(a,e);var t=p(a);function a(){var e;(0,r.default)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i)),e.getData=function(){return[{title:(0,f.formatMessage)({id:"app.settings.security.password"},{}),description:o.default.createElement(o.Fragment,null,(0,f.formatMessage)({id:"app.settings.security.password-description"}),"\uff1a",g.strong),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.phone"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.phone-description"},{}),"\uff1a138****8293"),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.question"},{}),description:(0,f.formatMessage)({id:"app.settings.security.question-description"},{}),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.set",defaultMessage:"Set"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.email"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.mfa"},{}),description:(0,f.formatMessage)({id:"app.settings.security.mfa-description"},{}),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.bind",defaultMessage:"Bind"}))]}]},e}return(0,u.default)(a,[{key:"render",value:function(){return o.default.createElement(o.Fragment,null,o.default.createElement(n.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return o.default.createElement(n.default.Item,{actions:e.actions},o.default.createElement(n.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o.Component),M=y;t.default=M}}]);