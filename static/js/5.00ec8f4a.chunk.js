(this.webpackJsonpimagessearch=this.webpackJsonpimagessearch||[]).push([[5],{103:function(t,e,a){"use strict";a.r(e);var n,r=a(10),c=a(0),o=a(2),u=a(77),i=a.n(u),s=a(79),l=a(60),O=a(59),p=a(99),d=a(66);!function(t){t.GET_RANDOM_PHOTO="GET_RANDOM_PHOTO",t.SEARCH_PHOTOS="SEARCH_PHOTOS",t.GET_PHOTO="GET_PHOTO",t.CLEAR_PHOTO="CLEAR_PHOTO",t.ERROR="ERROR",t.SET_LOADING="SET_LOADING",t.SET_LOADINGIMAGES="SET_LOADINGIMAGES",t.SET_PAGINATION="SET_PAGINATION",t.SET_INDEX_FIRST_NUMBER="SET_INDEX_FIRST_NUMBER",t.SET_TEXT="SET_TEXT",t.SET_INPUT="SET_INPUT",t.SET_ALERT="SET_ALERT",t.REMOVE_ALERT="REMOVE_ALERT"}(n||(n={}));var b=function(t,e){switch(e.type){case n.CLEAR_PHOTO:return Object(d.a)(Object(d.a)({},t),{},{photo:[]});case n.GET_RANDOM_PHOTO:return Object(d.a)(Object(d.a)({},t),{},{loading:!1,randomPhoto:e.payload.map((function(t){return t.urls}))});case n.GET_PHOTO:return Object(d.a)(Object(d.a)({},t),{},{photo:e.payload,loading:!1});case n.SEARCH_PHOTOS:return Object(d.a)(Object(d.a)({},t),{},{photosFilterDuplicate:e.payload.results.filter((function(t,e,a){return a.findIndex((function(e){return e.title===t.title}))===e})),photos:e.payload.results,totalNumberPhotos:e.payload.total,loading:!1,numbersPagination:Object(p.a)(Array(Math.ceil(e.payload.total/50)).keys())});case n.ERROR:return Object(d.a)(Object(d.a)({},t),{},{error:e.payload});case n.SET_LOADING:return Object(d.a)(Object(d.a)({},t),{},{loading:!0});case n.SET_LOADINGIMAGES:return Object(d.a)(Object(d.a)({},t),{},{loadingImages:e.payload});default:return t}},E=a(80),h=a.n(E),T=function(t){var e=Object(c.useReducer)(b,{randomPhoto:null,photosFilterDuplicate:[],photos:[],loading:!1,loadingImages:!1,photo:"",numbersPagination:[],totalNumberPhotos:null,error:[]}),a=Object(l.a)(e,2),o=a[0],u=a[1],p=function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(!0),t.next=4,h.a.get("https://api.unsplash.com/photos/random?count=1&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls");case 4:e=t.sent,u({type:n.GET_RANDOM_PHOTO,payload:e.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),u({type:n.ERROR,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(s.a)(i.a.mark((function t(e){var a,r,c,o=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:50,t.prev=2,T(!0),t.next=6,h.a.get("https://api.unsplash.com/search/collections?query=".concat(e,"&page=").concat(a,"&per_page=").concat(r,"&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls"));case 6:c=t.sent,u({type:n.SEARCH_PHOTOS,payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),u({type:n.ERROR,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(s.a)(i.a.mark((function t(e){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://api.unsplash.com/collections/".concat(e,"?client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls"));case 3:a=t.sent,u({type:n.GET_PHOTO,payload:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),u({type:n.ERROR,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),T=function(){return u({type:n.SET_LOADING})};return Object(r.jsxs)(O.a.Provider,{value:{error:o.error,randomPhoto:o.randomPhoto,numbersPagination:o.numbersPagination,totalNumberPhotos:o.totalNumberPhotos,photos:o.photos,photo:o.photo,photosFilterDuplicate:o.photosFilterDuplicate,loadingImages:o.loadingImages,loading:o.loading,getRandomPhoto:p,searchPhotos:d,getPhoto:E,clearPhoto:function(){u({type:n.CLEAR_PHOTO})},setLoadingImages:function(t){return u({type:n.SET_LOADINGIMAGES,payload:t})}},children:[" ",t.children]})},j=function(t,e){switch(e.type){case n.SET_ALERT:return{alert:e.payload};case n.REMOVE_ALERT:return null;default:return t}},_=a(61),f=function(t){var e=Object(c.useReducer)(j,null),a=Object(l.a)(e,2),o=a[0],u=a[1];return Object(r.jsx)(_.a.Provider,{value:{alert:o,setAlert:function(t,e){u({type:n.SET_ALERT,payload:{msg:t,type:e}}),setTimeout((function(){return u({type:n.REMOVE_ALERT})}),5e3)}},children:t.children})},y=function(t,e){switch(e.type){case n.SET_TEXT:return Object(d.a)(Object(d.a)({},t),{},{value:e.payload,valueInput:t.value});default:return t}},R=a(62),P=function(t){var e=Object(c.useReducer)(y,{value:"",valueInput:""}),a=Object(l.a)(e,2),o=a[0],u=a[1];return Object(r.jsx)(R.a.Provider,{value:{value:o.value,valueInput:o.valueInput,setText:function(t){u({type:n.SET_TEXT,payload:t})}},children:t.children})},g=function(t,e){switch(e.type){case n.SET_PAGINATION:return Object(d.a)(Object(d.a)({},t),{},{currentPage:e.paylad});case n.SET_INDEX_FIRST_NUMBER:return Object(d.a)(Object(d.a)({},t),{},{indexFirstNumberPagination:t.indexFirstNumberPagination+e.payload});default:return t}},I=a(63),v=function(t){var e=Object(c.useReducer)(g,{currentPage:1,indexFirstNumberPagination:0}),a=Object(l.a)(e,2),o=a[0],u=a[1];return Object(r.jsx)(I.a.Provider,{value:{indexFirstNumberPagination:o.indexFirstNumberPagination,currentPage:o.currentPage,paginate:function(t){u({type:n.SET_PAGINATION,payload:t})},setIndexFirstNumberPagination:function(t){u({type:n.SET_INDEX_FIRST_NUMBER,payload:t})}},children:t.children})},m=Object(c.lazy)((function(){return a.e(14).then(a.bind(null,101))})),A=Object(c.lazy)((function(){return a.e(8).then(a.bind(null,102))})),S=Object(c.lazy)((function(){return a.e(6).then(a.bind(null,104))})),N=Object(c.lazy)((function(){return a.e(13).then(a.bind(null,105))}));e.default=function(){var t=Object(o.g)(),e=t.state&&t.state.background;return Object(r.jsx)("div",{children:Object(r.jsx)(T,{children:Object(r.jsx)(f,{children:Object(r.jsx)(P,{children:Object(r.jsxs)(v,{children:[Object(r.jsxs)(o.c,{location:e||t,children:[Object(r.jsx)(o.a,{exact:!0,path:"/",component:A}),Object(r.jsx)(o.a,{path:"/apiImages",component:A}),Object(r.jsx)(o.a,{path:"/main",component:S}),Object(r.jsx)(o.a,{component:m})]}),e&&Object(r.jsx)(o.a,{path:"/photo/:id",children:Object(r.jsx)(N,{})})]})})})})})}},59:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)();e.a=r},61:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)();e.a=r},62:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)();e.a=r},63:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)();e.a=r}}]);
//# sourceMappingURL=5.00ec8f4a.chunk.js.map