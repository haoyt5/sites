(this.webpackJsonpsites=this.webpackJsonpsites||[]).push([[0],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));n(2);var c=n(1),r=function(e){var t=e.title,n=e.id;return Object(c.jsx)("div",{className:"text-center py-4",id:n,children:Object(c.jsx)("h3",{children:t})})},s=function(e){var t=e.text,n=e.href;return Object(c.jsx)("a",{href:n,className:"text-success",rel:"noreferrer",target:"/"===n[0]?null:"_blank",children:t})}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var c=n(14),r=n.n(c),s=n(19),i=function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(e){return e?new Date(e).toLocaleDateString("en-US",{timeZone:"UTC",year:"2-digit",month:"short"}):""}},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(18),i=n.n(s),a=(n(25),n(26),n(27),n(13)),l=n(17),j=n(39),o=n(36),u=n(37),b=n(38),d=n(1),h=["title","href"],f=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,42))})),x=function(e){var t=e.title,n=e.href,c=Object(l.a)(e,h);return Object(d.jsx)(j.a,Object(a.a)(Object(a.a)({color:"link",href:n},c),{},{children:Object(d.jsx)("b",{children:t})}))};var O=function(){return Object(d.jsx)(o.a,{fluid:!0,className:"pt-4",children:Object(d.jsxs)(u.a,{className:"d-flex flex-row align-items-center ",children:[Object(d.jsx)(b.a,{lg:{offset:1,size:5},md:5,sm:6,xs:4,children:Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("span",{children:"..."}),children:Object(d.jsx)(f,{})})}),Object(d.jsxs)(b.a,{lg:{size:5},md:7,sm:6,xs:8,className:"d-flex justify-content-end",children:[Object(d.jsx)(x,{title:"Experience",href:"/#experience"}),Object(d.jsx)(x,{title:"Projects",href:"/#project"}),Object(d.jsx)(x,{target:"_blank",title:"Resume",href:"/assets/resume/Resume_KarenHYTu.pdf"}),Object(d.jsx)(x,{title:"Contact",href:"mailto:karenhaoyitu@gmail.com"})]}),Object(d.jsx)(b.a,{lg:{size:1},md:"0",sm:"0"})]})})},m=n(20),p=n(16),g=n(9),v=n(7),y=n(15),k=function(e){var t=e.href,n=e.icon;return Object(d.jsx)("a",{style:{fontSize:"1.35rem"},target:"_blank",className:"px-2 link-dark link-dark-hover",href:t,rel:"noreferrer",children:Object(d.jsx)(g.a,{icon:n})})};var w=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.socials;return Object(d.jsxs)("div",{children:[Object(d.jsx)(y.a,{title:"Contact Me \ud83d\udcee",id:"contact"}),Object(d.jsxs)("div",{style:{padding:"50px 0",background:"linear-gradient(90deg, rgba(223,225,198,1) 0%, rgba(208,223,209,1) 100%)"},children:[Object(d.jsx)(u.a,{className:"text-left",children:Object(d.jsx)(b.a,{lg:{size:"6",offset:"3"},md:{size:"8",offset:"2"},sm:{size:"11",offset:"1"},className:"px-2",children:Object(d.jsxs)("h5",{children:["Feel free to reach out via email at karenhaoyitu@gmail.com or on social media whether you have questions or want to say hi. \ud83d\ude42"," "]})})}),Object(d.jsxs)(u.a,{className:"text-center",children:[Object(d.jsx)("h4",{className:"py-2",children:n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{href:n.linkedin,icon:v.d}),Object(d.jsx)(k,{href:n.fb,icon:v.a})]})}),Object(d.jsx)("h4",{children:Object(d.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:Object(d.jsx)(j.a,{color:"dark",outline:!0,children:"Send an Email"})})})]})]})]})},z=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,43))})),N=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,45))})),S=Object(c.lazy)((function(){return Promise.all([n.e(8),n.e(7)]).then(n.bind(null,44))}));var C=function(){var e=Object(c.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){Object(p.b)("assets/data/landing.json").then((function(e){return r(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{style:{padding:"100px 3vw"},children:Object(d.jsxs)(c.Suspense,{fallback:Object(d.jsx)("span",{children:"..."}),children:[Object(d.jsx)(z,{}),Object(d.jsx)(N,{data:n}),Object(d.jsx)(S,{data:n})]})}),Object(d.jsx)(w,{data:n})]})},_=function(e){var t=e.href,n=e.icon;return Object(d.jsx)("a",{style:{fontSize:"1.35rem"},target:"_blank",className:"link-light px-1",href:t,rel:"noreferrer",children:Object(d.jsx)(g.a,{icon:n})})};var T=function(){return Object(d.jsx)("div",{className:"bg-dark text-light",style:{marginTop:"auto"},children:Object(d.jsx)(o.a,{fluid:!0,children:Object(d.jsxs)(u.a,{className:"w-100 d-flex align-items-center",children:[Object(d.jsxs)(b.a,{className:"py-1",lg:{offset:1,size:2},md:{offset:1,size:11},sm:"12",children:[Object(d.jsx)(_,{href:"https://github.com/haoyt5",icon:v.b}),Object(d.jsx)(_,{href:"https://www.linkedin.com/in/karenhytu/",icon:v.c}),Object(d.jsx)(_,{href:"https://www.pinterest.com/karenhaoyi/graphic-design/",icon:v.e}),Object(d.jsx)(_,{href:"https://www.youtube.com/channel/UCLKVQ7801gi-7K-PUmOyXDg/featured?view_as=subscriber",icon:v.f})]}),Object(d.jsx)(b.a,{className:"py-1",lg:{offset:5,size:4},md:{offset:1,size:11},sm:"12",children:Object(d.jsxs)("small",{children:["Copyright \xa92021 ",Object(d.jsx)("br",{}),"All Rights Reserved by Karen HY Tu"]})})]})})})};var D=function(){return Object(d.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[Object(d.jsx)(O,{}),Object(d.jsx)(C,{}),Object(d.jsx)(T,{})]})};var E=function(){return Object(d.jsx)(D,{})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.59ec9138.chunk.js.map