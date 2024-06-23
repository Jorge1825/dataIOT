"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6590],{72602:(z,i,t)=>{t.r(i),t.d(i,{SnapshotListPage:()=>S,default:()=>R});var e=t(96540),d=t(17205),v=t(24705),g=t(32264),f=t(96374),r=t(44836),E=t(69064),p=t(32196),o=t(70255),u=t(55852),x=t(40845),k=t(72129);const C=({snapshot:n,onRemove:l})=>{const s=n.externalUrl||n.url;return e.createElement("tr",null,e.createElement("td",null,e.createElement("a",{href:s},n.name)),e.createElement("td",null,e.createElement("a",{href:s},s)),e.createElement("td",null,n.external&&e.createElement("span",{className:"query-keyword"},e.createElement(r.x6,{i18nKey:"snapshot.external-badge"},"External"))),e.createElement("td",{className:"text-center"},e.createElement(u.z9,{href:s,variant:"secondary",size:"sm",icon:"eye"},e.createElement(r.x6,{i18nKey:"snapshot.view-button"},"View"))),e.createElement("td",{className:"text-right"},e.createElement(u.$n,{variant:"destructive",size:"sm",icon:"times",onClick:l})))},b=({rootProps:n})=>{const l=(0,x.of)(A);return e.createElement("tr",{...n},e.createElement("td",null,e.createElement(o.A,{width:80})),e.createElement("td",null,e.createElement(o.A,{width:240})),e.createElement("td",null),e.createElement("td",null,e.createElement(o.A,{width:63,height:24,containerClassName:l.blockSkeleton})),e.createElement("td",null,e.createElement(o.A,{width:22,height:24,containerClassName:l.blockSkeleton})))},c=(0,k.j)(C,b),A=()=>({blockSkeleton:(0,p.css)({display:"block",lineHeight:1})});function L(){return(0,E.s)().getSnapshots().then(n=>n.map(l=>({...l,url:`${g.$.appUrl}dashboard/snapshot/${l.key}`})))}const N=()=>{const[n,l]=(0,e.useState)([]),[s,y]=(0,e.useState)(!1),[m,h]=(0,e.useState)();(0,v.A)(async()=>{y(!0);const a=await L();y(!1),l(a)},[l]);const T=(0,e.useCallback)(async a=>{const w=n.filter($=>$.key!==a.key);l(w),await(0,E.s)().deleteSnapshot(a.key).catch(()=>{l(n)})},[n]);return e.createElement("div",null,e.createElement("table",{className:"filter-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement("strong",null,e.createElement(r.x6,{i18nKey:"snapshot.name-column-header"},"Name"))),e.createElement("th",null,e.createElement("strong",null,e.createElement(r.x6,{i18nKey:"snapshot.url-column-header"},"Snapshot url"))),e.createElement("th",{style:{width:"70px"}}),e.createElement("th",{style:{width:"30px"}}),e.createElement("th",{style:{width:"25px"}}))),e.createElement("tbody",null,s?e.createElement(e.Fragment,null,e.createElement(c.Skeleton,null),e.createElement(c.Skeleton,null),e.createElement(c.Skeleton,null)):n.map(a=>e.createElement(c,{key:a.key,snapshot:a,onRemove:()=>h(a)})))),e.createElement(f.u,{isOpen:!!m,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${m?.name}'?`,confirmText:"Delete",onDismiss:()=>h(void 0),onConfirm:()=>{T(m),h(void 0)}}))},S=({})=>e.createElement(d.Y,{navId:"dashboards/snapshots"},e.createElement(d.Y.Contents,null,e.createElement(N,null))),R=S}}]);

//# sourceMappingURL=SnapshotListPage.11be9cf24c6b7bd901f9.js.map