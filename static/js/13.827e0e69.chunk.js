(this.webpackJsonpimagessearch=this.webpackJsonpimagessearch||[]).push([[13],{105:function(n,t,e){"use strict";e.r(t);var i=e(4),o=e(0),r=e(2),a=e(59),c=e(15),s=e(13);function d(){var n=Object(c.a)(["\n height: 50%;\n width: auto;\n  overflow: hidden;\n  & > img {\n    height: 100%;\n     width: auto;\n  };\n  @media(min-width: 700px) {\n    height: 70%;\n  };\n  @media(min-width: 1024px) {\n    height: 80%;\n  };\n"]);return d=function(){return n},n}function h(){var n=Object(c.a)(["\n  position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                width: 80%;\n                height: 80%;\n                background: rgba(0, 0, 0, 0.15);\n                & > div {\n                    position: absolute;\n                    background: #fff;\n                    top: 50%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    width: 100%;\n                    height: 100%;\n                    text-align: center;\n                    padding: 15px;\n                    border: 2px solid #444;\n                };\n"]);return h=function(){return n},n}var l=s.default.div(h()),u=s.default.div(d()),b=Object(o.lazy)((function(){return Promise.resolve().then(e.bind(null,22))}));t.default=function(){var n=Object(o.useContext)(a.a)||{},t=n.clearPhoto,e=n.loading,c=n.photo,s=(c=void 0===c?{}:c).user,d=(s=void 0===s?{}:s).name,h=c.cover_photo,j=(h=void 0===h?{}:h).urls,p=(j=void 0===j?{}:j).small,f=h.user,g=(f=void 0===f?{}:f).location,v=c.title,x=Object(r.f)(),O=function(n){n.stopPropagation(),x.goBack(),t()};return Object(i.jsx)(l,{onClick:O,children:e?Object(i.jsx)("div",{children:Object(i.jsx)(b,{})}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Author: ",d]}),Object(i.jsx)(u,{children:p?Object(i.jsx)("img",{src:p,loading:"lazy",alt:v}):"no photo"}),Object(i.jsxs)("p",{children:["Location: ",g||"no location"]}),Object(i.jsx)("button",{type:"button",onClick:O,children:"Close"})]})})}}}]);
//# sourceMappingURL=13.827e0e69.chunk.js.map