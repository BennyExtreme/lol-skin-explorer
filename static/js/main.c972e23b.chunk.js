(this["webpackJsonplol-champ-skins"]=this["webpackJsonplol-champ-skins"]||[]).push([[0],{23:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),r=t(15),s=t.n(r),a=(t(23),t(6)),o=t(2),j=t(0);function l(){return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("div",{children:["In-game data provided by"," ",Object(j.jsx)("a",{href:"https://communitydragon.org/",rel:"noreferrer",target:"_blank",children:"CommunityDragon"}),". Skin Explorer isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc."]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["Built by"," ",Object(j.jsx)("a",{href:"https://github.com/preyneyv",target:"_blank",rel:"noreferrer",children:"@preyneyv"}),"."]}),Object(j.jsx)("a",{href:"https://github.com/preyneyv/lol-skin-explorer",target:"_blank",rel:"noreferrer",children:"View Source on GitHub"})]})]})}function d(e){var n=e.children;return Object(j.jsx)("div",{className:"footer-container",children:n})}var u=t(4),b=t(5),h=t(17),O=t(14),f=t.n(O),m=t(8),p=t(16),x=[],v=[],k={},y="https://raw.communitydragon.org/pbe",g="".concat(y,"/plugins/rcp-be-lol-game-data/global/default"),I=Object(p.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/content-metadata.json"),{method:"GET",cache:"no-cache"}).then((function(e){return e.json()}));case 2:return n=e.sent,t="?".concat(encodeURIComponent(n.version)),e.next=6,Promise.all([fetch("".concat(g,"/v1/champion-summary.json").concat(t)).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return-1!==e.id})).sort((function(e,n){return e.name>n.name?1:-1})).map((function(e){return Object(b.a)(Object(b.a)({},e),{},{key:e.alias.toLowerCase()})}))})).then((function(e){return x.push.apply(x,Object(m.a)(e))})),fetch("".concat(g,"/v1/skinlines.json").concat(t)).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return 0!==e.id})).sort((function(e,n){return e.name>n.name?1:-1}))})).then((function(e){return v.push.apply(v,Object(m.a)(e))})),fetch("".concat(g,"/v1/skins.json").concat(t)).then((function(e){return e.json()})).then((function(e){return Object.assign(k,e)}))]).then((function(){return!0}));case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))();function w(e){return[Math.floor(e/1e3),e%1e3]}function S(e){return Object.values(k).filter((function(n){return w(n.id)[0]===e}))}function E(e){return Object.values(k).filter((function(n){var t;return null===(t=n.skinLines)||void 0===t?void 0:t.some((function(n){return n.id===e}))})).sort((function(e,n){var t=w(e.id)[0],c=w(n.id)[0];return x.findIndex((function(e){return e.id===t}))-x.findIndex((function(e){return e.id===c}))}))}function N(e){return e.replace("/lol-game-data/assets",g).toLowerCase()}var L={kUltimate:["ultimate.png","Ultimate"],kMythic:["mythic.png","Mythic"],kLegendary:["legendary.png","Legendary"],kEpic:["epic.png","Epic"]};function $(e){if(!L[e.rarity])return null;var n=Object(u.a)(L[e.rarity],2),t=n[0],c=n[1];return["".concat(g,"/v1/rarity-gem-icons/").concat(t),c]}function C(e){var n=w(e.id),t=Object(u.a)(n,2),c=t[0],i=t[1],r=x.find((function(e){return e.id===c})).key;return"https://teemo.gg/model-viewer?game=league-of-legends&type=champions&object=".concat(r,"&skinid=").concat(r,"-").concat(i)}var P,M=t(12),T=t.n(M);function _(){var e=Object(c.useRef)(),n=Object(o.g)(),t=Object(c.useState)(""),i=Object(u.a)(t,2),r=i[0],s=i[1],a=Object(c.useState)(0),l=Object(u.a)(a,2),d=l[0],b=l[1],h=Object(c.useState)(!1),O=Object(u.a)(h,2),f=O[0],m=O[1],p=Object(c.useMemo)((function(){return r.length?P.search(r,{limit:5}):[]}),[r]);function v(){var e=p[d];console.log(e),function(e,t){if("champion"===e&&n(Object(o.d)("/champions/:champion",{champion:t.key})),"skinline"===e&&n(Object(o.d)("/skinlines/:id",{id:t.id})),"skin"===e){var c=w(t.id)[0],i=x.find((function(e){return e.id===c}));n(Object(o.d)("/champions/:cKey/skins/:sId",{cKey:i.key,sId:t.id}))}}(e.item.$$type,e.item),s("")}return Object(c.useEffect)((function(){return b(0)}),[r]),Object(c.useEffect)((function(){function n(n){var t;"Slash"===n.code&&n.altKey&&(null===(t=e.current)||void 0===t||t.focus(),n.preventDefault())}return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}})),Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("input",{ref:e,type:"search",placeholder:"Search (Alt + /)",value:r,onChange:function(e){return s(e.target.value)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},onKeyDown:function(e){"ArrowDown"===e.key&&(b((d+1)%p.length),e.preventDefault()),"ArrowUp"===e.key&&(b((0===d?p.length:d)-1),e.preventDefault()),"Enter"===e.key&&p.length&&(v(),e.preventDefault(),e.target.blur())}}),f&&0!==p.length&&Object(j.jsx)("ul",{children:p.map((function(e,n){var t=e.item;return Object(j.jsxs)("li",{onMouseEnter:function(){return b(n)},onClick:v,className:T()(t.$$type,{selected:d===n}),children:["champion"===t.$$type?Object(j.jsx)("img",{src:N(t.squarePortraitPath),alt:t.name}):"skin"===t.$$type?Object(j.jsx)("img",{src:N(t.tilePath),alt:t.name}):null,Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:t.name}),"champion"===t.$$type?Object(j.jsx)("span",{children:"Champion"}):"skinline"===t.$$type?Object(j.jsx)("span",{children:"Skinline"}):Object(j.jsx)("span",{children:"Skin"})]})]},n)}))})]})}I.then((function(){return P=new h.a(x.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{$$type:"champion"})})).concat(v.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{$$type:"skinline"})}))).concat(Object.values(k).map((function(e){return Object(b.a)(Object(b.a)({},e),{},{$$type:"skin"})}))),{keys:["name"]})}));var D=t(30),G=t(31),R=t(32),B=t(33),K=t(34),A=t(35),J=t(36),U=t(37);function V(e){return window.location.hash=e,null}function H(e){Object(c.useEffect)((function(){var n=document.title;return document.title="".concat(e," \xb7 Skin Explorer"),function(){document.title=n}}),[e])}function q(e){var n=Object(o.g)();Object(c.useEffect)((function(){function t(t){console.log(t.code),"Escape"===t.code&&(n(e),t.preventDefault())}return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[n,e])}function F(e,n){var t=Object(c.useState)(localStorage[e]?JSON.parse(localStorage[e]):n),i=Object(u.a)(t,2),r=i[0],s=i[1];return[r,function(n){s(n),localStorage[e]=JSON.stringify(n)}]}function Z(e){var n,t=e.back,i=e.skins,r=e.current,s=e.title,l=e.linkTo,d=e.showSkinline,b=e.showChampion,h=Object(c.useState)(""),O=Object(u.a)(h,2),f=O[0],m=O[1],p=Object(c.useState)(!1),k=Object(u.a)(p,2),y=k[0],g=k[1],I=F("carousel__centered",!1),S=Object(u.a)(I,2),E=S[0],L=S[1],P=F("carousel__fill",!1),M=Object(u.a)(P,2),_=M[0],V=M[1];Object(c.useEffect)((function(){g(!1)}),[r,E]);var Z,z,Q=Object(o.g)(),W=i.findIndex((function(e){return e.id===r})),X=i[W];i.length>1&&(z=i[(0===W?i.length:W)-1],Z=i[(W+1)%i.length]),H(X.name),q(t);var Y=$(X),ee=w(r)[0],ne=x.find((function(e){return e.id===ee})),te=(null===(n=X.skinLines)||void 0===n?void 0:n.length)?X.skinLines.map((function(e){return v.find((function(n){return n.id===e.id}))})):[];console.log(ne,te),Object(c.useEffect)((function(){function e(e){i.length>1&&("ArrowLeft"===e.key&&Q(l(z)),"ArrowRight"===e.key&&Q(l(Z))),console.log(e.key),"KeyZ"===e.code&&V(!_),"KeyC"===e.code&&L(!E)}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[i,z,Z,l,Q,_,V,E,L]);var ce=E?X.splashVideoPath:X.collectionSplashVideoPath,ie=E?X.splashPath:X.uncenteredSplashPath;return Object(j.jsxs)("div",{className:"skin-carousel",children:[!y&&Object(j.jsx)("div",{className:"preloader",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})}),Object(j.jsxs)("header",{children:[Object(j.jsxs)(a.b,{to:t,children:[Object(j.jsx)(D.a,{}),Object(j.jsx)("span",{children:s})]}),Object(j.jsx)("div",{className:"btn",onClick:function(){return V(!_)},title:"Fill Screen (Z)",children:_?Object(j.jsx)(G.a,{}):Object(j.jsx)(R.a,{})}),Object(j.jsx)("div",{className:"btn",onClick:function(){return L(!E)},title:"Centered (C)",children:E?Object(j.jsx)(B.a,{}):Object(j.jsx)(K.a,{})})]}),Object(j.jsx)("div",{className:"mouse-event-block"}),z&&Object(j.jsxs)(a.b,{to:l(z),className:"prev",onMouseOver:function(){return m("prev")},onMouseOut:function(){return m("")},children:[Object(j.jsx)("img",{src:N(z.splashPath),alt:z.name}),Object(j.jsx)("div",{children:z.name}),Object(j.jsx)(D.a,{})]}),Object(j.jsx)("div",{className:T()("current",{"hover-prev":"prev"===f,"hover-next":"next"===f,fill:_}),children:ce?Object(j.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,src:N(ce)}):Object(j.jsx)("img",{onLoad:function(){return g(!0)},className:T()({loading:!y}),src:N(ie),alt:X.name})}),Object(j.jsxs)("div",{className:"overlay",children:[Object(j.jsx)("span",{children:X.name}),Object(j.jsx)(A.a,{}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Y&&Object(j.jsxs)("div",{className:"rarity",children:[Object(j.jsx)("img",{src:Y[0],alt:Y[1]}),Object(j.jsx)("span",{children:Y[1]})]}),b&&Object(j.jsx)(a.b,{to:Object(o.d)("/champions/:key",{key:ne.key}),children:ne.name}),d&&0!==te.length&&te.map((function(e){return Object(j.jsx)(a.b,{to:Object(o.d)("/skinlines/:id",{id:e.id}),children:e.name},e.id)}))]}),X.description?Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:X.description}}):Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:"No description available."})}),Object(j.jsxs)("a",{href:C(X),rel:"noreferrer",target:"_blank",children:["View Model on Teemo.GG ",Object(j.jsx)(J.a,{size:12})]})]})]}),Z&&Object(j.jsxs)(a.b,{to:l(Z),className:"next",onMouseOver:function(){return m("next")},onMouseOut:function(){return m("")},children:[Object(j.jsx)("img",{src:N(Z.splashPath),alt:Z.name}),Object(j.jsx)("div",{children:Z.name}),Object(j.jsx)(U.a,{})]})]})}function z(e){var n=e.title,t=e.skins,c=e.linkTo;return Object(j.jsxs)(d,{children:[Object(j.jsxs)("div",{className:"skin-list",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)(a.b,{to:"/",children:[Object(j.jsx)(D.a,{}),Object(j.jsx)("span",{children:"Home"})]}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsx)("h1",{children:n}),Object(j.jsx)(_,{})]})]}),Object(j.jsx)("div",{children:t.map((function(e){var n=$(e);return Object(j.jsxs)(a.b,{to:c(e),children:[Object(j.jsx)("img",{src:N(e.tilePath),alt:e.name}),Object(j.jsxs)("div",{children:[n&&Object(j.jsx)("img",{src:n[0],title:n[1],alt:n[1]}),e.name]})]},e.id)}))})]}),Object(j.jsx)(l,{})]})}function Q(){return Object(j.jsx)("div",{className:"champions-index",children:x.map((function(e){return Object(j.jsxs)(a.b,{title:e.name,to:Object(o.d)("/champions/:champion",{champion:e.key}),children:[Object(j.jsx)("img",{src:N(e.squarePortraitPath),alt:e.name}),Object(j.jsx)("div",{children:e.name})]},e.id)}))})}function W(){var e,n,t=Object(o.h)().champion;if(H(null===(e=n=x.find((function(e){return e.key===t})))||void 0===e?void 0:e.name),q("/"),!n)return V("/");var c=S(n.id);return Object(j.jsx)(z,{title:n.name,skins:c,linkTo:function(e){return Object(o.d)("/champions/:champion/skins/:skinId",{champion:t,skinId:e.id})}})}function X(){var e,n=Object(o.h)(),t=n.champion,c=n.skinId;try{if(!(e=x.find((function(e){return e.key===t}))))throw new Error("Bad champion")}catch(r){return V("/")}var i=S(e.id);return i.find((function(e){return e.id===parseInt(c)}))?Object(j.jsx)(Z,{back:Object(o.d)("/champions/:champion",{champion:t}),title:e.name,skins:i,current:parseInt(c),linkTo:function(e){return Object(o.d)("/champions/:champion/skins/:skinId",{champion:t,skinId:e.id})},showSkinline:!0}):V(Object(o.d)("/champions/:champion",{champion:t}))}function Y(){return Object(j.jsx)("div",{className:"skinlines-index",children:v.map((function(e){return Object(j.jsx)(a.b,{to:Object(o.d)("/skinlines/:lineId",{lineId:e.id}),children:e.name},e.id)}))})}function ee(){var e,n=Object(o.h)().lineId;q("/");try{var t=parseInt(n);if(!(e=v.find((function(e){return e.id===t}))))throw new Error("Bad skinline id")}catch(i){return V("/")}var c=E(e.id);return Object(j.jsx)(z,{title:e.name,skins:c,linkTo:function(e){return Object(o.d)("/skinlines/:lineId/skins/:skinId",{lineId:n,skinId:e.id})}})}function ne(){var e,n=Object(o.h)(),t=n.lineId,c=n.skinId;try{var i=parseInt(t);if(!(e=v.find((function(e){return e.id===i}))))throw new Error("Bad skinline id")}catch(s){return V("/")}var r=E(e.id);return r.find((function(e){return e.id===parseInt(c)}))?Object(j.jsx)(Z,{back:Object(o.d)("/skinlines/:lineId",{lineId:t}),title:e.name,skins:r,current:parseInt(c),linkTo:function(e){return Object(o.d)("/skinlines/:lineId/skins/:skinId",{lineId:t,skinId:e.id})},showChampion:!0}):V(Object(o.d)("/skinlines/:lineId",{lineId:t}))}function te(){Object(o.g)();return Object(j.jsxs)(d,{children:[Object(j.jsxs)("div",{className:"home",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Skin Explorer"}),Object(j.jsx)(_,{})]}),Object(j.jsx)("h2",{children:"Champions"}),Object(j.jsx)(Q,{}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{children:"Skinlines"}),Object(j.jsx)(Y,{})]}),Object(j.jsx)(l,{})]})}t(28);var ce=function(){var e=function(e){var n=Object(c.useState)(null),t=Object(u.a)(n,2),i=t[0],r=t[1];return Object(c.useEffect)((function(){e.then((function(e){return r(e)}))})),i}(I);return Object(c.useEffect)((function(){document.body.scrollTo({top:0})}),[window.location.hash]),Object(j.jsx)(a.a,{children:e?Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(te,{})}),Object(j.jsx)(o.a,{path:"/champions/:champion",element:Object(j.jsx)(W,{})}),Object(j.jsx)(o.a,{path:"/champions/:champion/skins/:skinId",element:Object(j.jsx)(X,{})}),Object(j.jsx)(o.a,{path:"/skinlines/:lineId",element:Object(j.jsx)(ee,{})}),Object(j.jsx)(o.a,{path:"/skinlines/:lineId/skins/:skinId",element:Object(j.jsx)(ne,{})})]}):Object(j.jsx)("div",{className:"preloader",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(ce,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c972e23b.chunk.js.map