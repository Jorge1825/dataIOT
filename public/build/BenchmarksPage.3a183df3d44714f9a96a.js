"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9354],{98351:(O,m,o)=>{o.r(m),o.d(m,{BenchmarksPage:()=>j,default:()=>U});var c=o(96540),u=o(66864),i=o(32196),n=o(94659),S=o(46942),h=o.n(S),l=o(40845),g=o(55852);function p(){return console.log("process.env.NODE_ENV","production"),(0,n.jsx)(u.gW,null,(0,n.jsx)("div",null,"Emotion performance tests"),(0,n.jsx)(a,{name:"No styles",Component:z}),(0,n.jsx)(a,{name:"inline emotion/css",Component:W}),(0,n.jsx)(a,{name:"useStyles no cx",Component:C}),(0,n.jsx)(a,{name:"useStyles with conditional cx styles",Component:N}),(0,n.jsx)(a,{name:"useStyles with css prop",Component:E}),(0,n.jsx)(a,{name:"useStyles with conditional css prop",Component:P}),(0,n.jsx)(a,{name:"useStyles with conditional classnames",Component:b}))}const a=({name:s,Component:e})=>{const[t,d]=(0,c.useState)(0);return(0,n.jsx)("div",null,(0,n.jsx)(g.$n,{onClick:()=>d(t>2?0:t+1)},s),t>0&&(0,n.jsx)(T,{id:s},v(e)))};a.displayName="TestScenario";function v(s){const e=[];for(let t=0;t<5e3;t++)e.push((0,n.jsx)(s,{index:t,key:t.toString()}));return(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap"}},e)}function C({index:s}){const e=(0,l.of)(r);return(0,n.jsx)("div",{className:e.main},(0,n.jsx)("div",{className:e.child},s))}function N({index:s}){const e=(0,l.of)(r),t=(0,i.cx)(e.main,{[e.large]:s>10,[e.disabed]:s%10===0});return(0,n.jsx)("div",{className:t},(0,n.jsx)("div",{className:e.child},s))}function b({index:s}){const e=(0,l.of)(r),t=h()(e.main,{[e.large]:s>10,[e.disabed]:s%10===0});return(0,n.jsx)("div",{className:t},(0,n.jsx)("div",{className:e.child},s))}function E({index:s}){const e=(0,l.of)(x);return(0,n.jsx)("div",{css:e.main},(0,n.jsx)("div",{css:e.child},s))}function P({index:s}){const e=(0,l.of)(x),t=[e.main,s>10&&e.large,s%10===0&&e.disabed];return(0,n.jsx)("div",{css:t},(0,n.jsx)("div",{css:e.child},s))}function W({index:s}){const e=(0,l.$j)(),t=r(e);return(0,n.jsx)("div",{className:t.main},(0,n.jsx)("div",{className:t.child},s))}function z({index:s}){return(0,n.jsx)("div",{className:"no-styles-main"},(0,n.jsx)("div",{className:"no-styles-child"},s))}function T({children:s,id:e}){const t=(d,k,B,D,M,R)=>{console.log("Profile "+d,B)};return(0,n.jsx)(c.Profiler,{id:e,onRender:t},s)}const r=s=>({main:(0,i.css)(y(s)),large:(0,i.css)({fontSize:"20px",color:"red"}),disabed:(0,i.css)({fontSize:"10px",color:"gray"}),child:(0,i.css)(f(s))}),x=s=>({main:y(s),large:{fontSize:"20px",color:"red"},disabed:{fontSize:"10px",color:"gray"},child:f(s)});function y(s){return{background:"blue",border:"1px solid red",color:"white",padding:s.spacing(1),shadow:s.shadows.z1,":hover":{background:s.colors.background.primary}}}function f(s){return{padding:"2px",fontSize:"10px",boxShadow:"none",textAlign:"center",textDecoration:"none"}}const j=()=>c.createElement(u.gW,null,c.createElement(p,null)),U=j}}]);

//# sourceMappingURL=BenchmarksPage.3a183df3d44714f9a96a.js.map