(this.webpackJsonpimagessearch=this.webpackJsonpimagessearch||[]).push([[5],{158:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n(0),o=n(1),r=n(89),s=n.n(r),i=n(91),u=n(57),l=n(45),p=n(79),d="SEARCH_PHOTOS",h="GET_PHOTO",j="CLEAR_PHOTO",b="SET_LOADING",O="SET_LOADINGIMAGES",f="SET_ALERT",y="REMOVE_ALERT",g=function(t,e){switch(e.type){case j:return Object(p.a)(Object(p.a)({},t),{},{photo:[]});case h:return Object(p.a)(Object(p.a)({},t),{},{photo:e.payload,loading:!1});case d:return console.log("action.payload",e.payload),Object(p.a)(Object(p.a)({},t),{},{photos:e.payload,loading:!1});case b:return Object(p.a)(Object(p.a)({},t),{},{loading:!0});case O:return Object(p.a)(Object(p.a)({},t),{},{loadingImages:e.payload});default:return t}},m=n(92),x=n.n(m),v=function(t){var e=Object(c.useReducer)(g,{photos:[],loading:!1,loadingImages:!1,photo:[]}),n=Object(u.a)(e,2),o=n[0],r=n[1],p=function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,x.a.get("https://api.unsplash.com/search/collections?query=".concat(e,"&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls"));case 3:n=t.sent,r({type:d,payload:n.data.results});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.unsplash.com/collections/".concat(e,"?client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls"));case 2:n=t.sent,r({type:h,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){return r({type:b})};return Object(a.jsxs)(l.a.Provider,{value:{photo:o.photo,photos:o.photos,loadingImages:o.loadingImages,loading:o.loading,searchPhotos:p,getPhoto:f,clearPhoto:function(){r({type:j})},setLoadingImages:function(t){return r({type:O,payload:t})}},children:[" ",t.children]})},E=function(t,e){switch(e.type){case f:return{alert:e.payload};case y:return null;default:return t}},I=n(52),_=function(t){var e=Object(c.useReducer)(E,null),n=Object(u.a)(e,2),o=n[0],r=n[1];return Object(a.jsx)(I.a.Provider,{value:{alert:o,setAlert:function(t,e){r({type:f,payload:{msg:t,type:e}}),setTimeout((function(){return r({type:y})}),1e4)}},children:t.children})},T=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,146))})),w=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,71))})),A=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,147))})),H=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,159))}));e.default=function(){var t=Object(o.g)(),e=t.state&&t.state.background;return Object(a.jsx)("div",{children:Object(a.jsx)(v,{children:Object(a.jsxs)(_,{children:[Object(a.jsxs)(o.c,{location:e||t,children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(a.jsx)(o.a,{path:"/apiImages",component:w}),Object(a.jsx)(o.a,{path:"/main",component:A}),Object(a.jsx)(o.a,{component:T})]}),e&&Object(a.jsx)(o.a,{path:"/photo/:id",children:Object(a.jsx)(H,{})})]})})})}},45:function(t,e,n){"use strict";var a=n(0),c=Object(a.createContext)();e.a=c},52:function(t,e,n){"use strict";var a=n(0),c=Object(a.createContext)();e.a=c}}]);
//# sourceMappingURL=5.959aadaa.chunk.js.map