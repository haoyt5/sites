(this.webpackJsonpsites=this.webpackJsonpsites||[]).push([[0],{18:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(5),c=(n(2),n(0)),a=function(e){var t=e.text,n=e.style,a=e.href;return Object(c.jsx)("a",{href:a,className:"btn-link text-dark ",rel:"noreferrer",target:"/"===a[0]?null:"_blank",children:Object(c.jsx)("div",{className:"d-inline-block text-center px-2 rounded-block-link",style:Object(r.a)(Object(r.a)({},n),{},{borderRadius:"15px",height:"1.5rem",lineHeight:"1.5rem"}),children:" ".concat(t," ")})})},s=function(e){var t=e.title,n=e.id;return Object(c.jsx)("div",{className:"text-center pb-4 m-0",id:n,style:{paddingTop:"70px"},children:Object(c.jsx)("h3",{children:t})})},i=function(e){var t=e.text,n=e.href;return Object(c.jsx)("a",{href:n,className:"text-success",rel:"noreferrer",target:"/"===n[0]?null:"_blank",children:t})}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(17),c=n(22),a=function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){return e?new Date(e).toLocaleDateString("en-US",{timeZone:"UTC",year:"2-digit",month:"short"}):""}},21:function(e){e.exports=JSON.parse('{"nav":[{"name":"Experience","url":"/#experience","theme":"blue","target":false},{"name":"Projects","url":"/#project","theme":"purple","target":false},{"name":"Resume","url":"/assets/resume/Resume_KarenHYTu.pdf","theme":"yellow","target":true},{"name":"Contact","url":"mailto:karenhaoyitu@gmail.com","theme":"green","target":false}]}')},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(20),s=n.n(a),i=(n(27),n(28),n(29),n(5)),l=n(12),j=n(40),o=n(37),b=n(38),u=n(39),d=n(13),h=n(9),f=n(16),x=n(0),O=["title","href"],m=function(e){var t=e.title,n=e.href,r=Object(l.a)(e,O);return Object(x.jsx)(j.a,Object(i.a)(Object(i.a)({color:"link",href:n},r),{},{children:Object(x.jsx)("h2",{children:Object(x.jsx)("b",{children:t})})}))};var p=function(e){var t=e.nav,n=Object(r.useState)(!1),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"p-1 md-navbar cursor-pointer ",onClick:function(){return s(!a)},children:Object(x.jsx)("h2",{className:"m-0",children:Object(x.jsx)(h.a,{icon:f.a})})}),Object(x.jsx)("div",{className:"position-absolute zindex-popover md-navbar-popover ".concat(a?"d-block":"d-none"),children:Object(x.jsxs)(o.a,{style:{padding:"1rem 1rem"},children:[Object(x.jsx)("div",{className:"d-inline-block",children:Object(x.jsx)("div",{className:"m-0 close-btn cursor-pointer p-2",onClick:function(){return s(!a)},children:Object(x.jsx)(h.a,{icon:f.c})})}),Object(x.jsx)("div",{className:"d-flex flex-column md-navbar-popover-content",children:t.map((function(e){return Object(x.jsx)(m,{className:"nav-popover-btn hover-btn-".concat(e.theme),title:e.name,href:e.url,target:e.target?"_blank":null,onClick:function(){return s(!a)}},e.url)}))})]})})]})},v=n(21),g=["title","href"],k=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,42))})),y=function(e){var t=e.title,n=e.href,r=Object(l.a)(e,g);return Object(x.jsx)(j.a,Object(i.a)(Object(i.a)({color:"link",href:n},r),{},{children:Object(x.jsx)("b",{children:t})}))};var N=function(){var e=v.nav;return Object(x.jsx)(o.a,{fluid:!0,className:"py-2  bg-white fixed-top ",children:Object(x.jsxs)(b.a,{className:"d-flex flex-row align-items-center ",children:[Object(x.jsx)(u.a,{lg:{offset:1,size:5},md:5,sm:6,xs:4,children:Object(x.jsx)(r.Suspense,{fallback:Object(x.jsx)("span",{children:"..."}),children:Object(x.jsx)(k,{})})}),Object(x.jsxs)(u.a,{lg:{size:5},md:7,sm:6,xs:8,className:"d-flex justify-content-end",children:[e.map((function(e){return Object(x.jsx)(y,{className:"lg-navbar",title:e.name,href:e.url,target:e.target?"_blank":null},e.url)})),Object(x.jsx)(p,{nav:e})]}),Object(x.jsx)(u.a,{lg:{size:1},md:"0",sm:"0"})]})})},w=n(19),z=n(8),S=n(18),C=function(e){var t=e.href,n=e.icon;return Object(x.jsx)("a",{style:{fontSize:"1.35rem"},target:"_blank",className:"px-2 link-dark link-dark-hover",href:t,rel:"noreferrer",children:Object(x.jsx)(h.a,{icon:n})})};var _=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.socials;return Object(x.jsxs)("div",{children:[Object(x.jsx)(S.b,{title:"Contact Me \ud83d\udcee",id:"contact"}),Object(x.jsxs)("div",{style:{padding:"50px 0.75rem",background:"linear-gradient(90deg, rgba(223,225,198,1) 0%, rgba(208,223,209,1) 100%)"},children:[Object(x.jsx)(b.a,{className:"text-left text-introduction ",children:Object(x.jsxs)(u.a,{lg:{size:"6",offset:"3"},md:{size:"8",offset:"2"},sm:"12",children:["Feel free to reach out via email at ",Object(x.jsx)("b",{children:"karenhaoyitu@gmail.com"})," or on social media whether you have questions or want to say hi. \ud83d\ude42"," "]})}),Object(x.jsxs)(b.a,{className:"text-center",children:[Object(x.jsx)("h4",{className:"py-2",children:n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{href:n.linkedin,icon:z.d}),Object(x.jsx)(C,{href:n.fb,icon:z.a})]})}),Object(x.jsx)("h4",{children:Object(x.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:Object(x.jsx)(j.a,{color:"dark",outline:!0,children:"Send an Email"})})})]})]})]})},T=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,43))})),R=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,45))})),D=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,44))}));var E=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){Object(w.b)("assets/data/landing.json").then((function(e){return c(e)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{style:{padding:"10vh 3vw"},children:Object(x.jsxs)(r.Suspense,{fallback:Object(x.jsx)("span",{children:"..."}),children:[Object(x.jsx)(T,{}),Object(x.jsx)(R,{data:n}),Object(x.jsx)(D,{data:n})]})}),Object(x.jsx)(_,{data:n})]})},F=function(e){var t=e.href,n=e.icon;return Object(x.jsx)("a",{style:{fontSize:"1.35rem"},target:"_blank",className:"link-light px-1",href:t,rel:"noreferrer",children:Object(x.jsx)(h.a,{icon:n})})};var H=function(){return Object(x.jsx)("div",{className:"bg-dark text-light",style:{marginTop:"auto"},children:Object(x.jsx)(o.a,{fluid:!0,children:Object(x.jsxs)(b.a,{className:"w-100 d-flex align-items-center",children:[Object(x.jsxs)(u.a,{className:"py-1",lg:{offset:1,size:2},md:{offset:1,size:11},sm:"12",children:[Object(x.jsx)(F,{href:"https://github.com/haoyt5",icon:z.b}),Object(x.jsx)(F,{href:"https://www.linkedin.com/in/karenhytu/",icon:z.c}),Object(x.jsx)(F,{href:"https://www.pinterest.com/karenhaoyi/graphic-design/",icon:z.e}),Object(x.jsx)(F,{href:"https://www.youtube.com/channel/UCLKVQ7801gi-7K-PUmOyXDg/featured?view_as=subscriber",icon:z.f})]}),Object(x.jsx)(u.a,{className:"py-1",lg:{offset:5,size:4},md:{offset:1,size:11},sm:"12",children:Object(x.jsxs)("small",{children:["Copyright \xa92021 ",Object(x.jsx)("br",{}),"All Rights Reserved by Karen HY Tu"]})})]})})})};var K=function(){return Object(x.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[Object(x.jsx)(N,{}),Object(x.jsx)(E,{}),Object(x.jsx)(H,{})]})};var U=function(){return Object(x.jsx)(K,{})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.673aca18.chunk.js.map