"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5804],{15111:(L,u,e)=>{e.r(u),e.d(u,{BrowseFolderLibraryPanelsPage:()=>D,default:()=>E});var a=e(96540),M=e(17205),i=e(9134),t=e(71101),h=e(16678),n=e(24643),o=e(55314);function D({match:C}){const{uid:l}=C.params,{data:s}=(0,o.kH)(l),[r,O]=(0,a.useState)(void 0),[f]=(0,o.iB)(),_=(0,a.useMemo)(()=>{if(!s)return;const d=(0,t.R4)(s),m=(0,t.pq)(s.uid),c=d.children?.find(P=>P.id===m);return c&&(c.active=!0),d},[s]),v=l?async d=>{if(s){const m=await f({...s,title:d});if("error"in m)throw m.error}}:void 0;return a.createElement(M.Y,{navId:"dashboards/browse",pageNav:_,onEditTitle:v,actions:a.createElement(a.Fragment,null,s&&a.createElement(i.m,{folder:s}))},a.createElement(M.Y.Contents,null,a.createElement(h.j,{onClick:O,currentFolderUID:l,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0}),r?a.createElement(n.F,{onDismiss:()=>O(void 0),libraryPanel:r}):null))}const E=D},18241:(L,u,e)=>{e.d(u,{T:()=>C});var a=e(96540),M=e(32264),i=e(96374),t=e(94753),h=e(68402),n=e(42418),o=e(44836),D=e(55314),E=e(43907);const C=({onConfirm:l,onDismiss:s,selectedItems:r,...O})=>{const{data:f}=(0,D.G2)(r),_=!M.$.featureToggles.nestedFolders&&f&&(f.alertRule||f.libraryPanel),[v,d]=(0,a.useState)(!1),m=async()=>{d(!0);try{await l(),d(!1),s()}catch{d(!1)}};return a.createElement(i.u,{body:a.createElement(a.Fragment,null,a.createElement(t.E,{element:"p"},a.createElement(o.x6,{i18nKey:"browse-dashboards.action.delete-modal-text"},"This action will delete the following content:")),a.createElement(E.x,{selectedItems:r}),a.createElement(h.$,{v:2})),description:a.createElement(a.Fragment,null,_?a.createElement(n.F,{severity:"warning",title:(0,o.t)("browse-dashboards.action.delete-modal-invalid-title","Cannot delete folder")},a.createElement(o.x6,{i18nKey:"browse-dashboards.action.delete-modal-invalid-text"},"One or more folders contain library panels or alert rules. Delete these first in order to proceed.")):null),confirmationText:"Delete",confirmText:v?(0,o.t)("browse-dashboards.action.deleting","Deleting..."):(0,o.t)("browse-dashboards.action.delete-button","Delete"),onDismiss:s,onConfirm:m,title:(0,o.t)("browse-dashboards.action.delete-modal-title","Delete"),...O})}},51887:(L,u,e)=>{e.d(u,{J:()=>l});var a=e(96540),M=e(37390),i=e(42418),t=e(94753),h=e(68402),n=e(88575),o=e(55852),D=e(36607),E=e(44836),C=e(43907);const l=({onConfirm:s,onDismiss:r,selectedItems:O,...f})=>{const[_,v]=(0,a.useState)(),[d,m]=(0,a.useState)(!1),c=Object.keys(O.folder).filter(b=>O.folder[b]),P=async()=>{if(_!==void 0){m(!0);try{await s(_),m(!1),r()}catch{m(!1)}}};return a.createElement(M.a,{title:(0,E.t)("browse-dashboards.action.move-modal-title","Move"),onDismiss:r,...f},c.length>0&&a.createElement(i.F,{severity:"info",title:(0,E.t)("browse-dashboards.action.move-modal-alert","Moving this item may change its permissions.")}),a.createElement(t.E,{element:"p"},a.createElement(E.x6,{i18nKey:"browse-dashboards.action.move-modal-text"},"This action will move the following content:")),a.createElement(C.x,{selectedItems:O}),a.createElement(h.$,{v:3}),a.createElement(n.D,{label:(0,E.t)("browse-dashboards.action.move-modal-field-label","Folder name")},a.createElement(D.d,{value:_,excludeUIDs:c,onChange:v})),a.createElement(M.a.ButtonRow,null,a.createElement(o.$n,{onClick:r,variant:"secondary",fill:"outline"},a.createElement(E.x6,{i18nKey:"browse-dashboards.action.cancel-button"},"Cancel")),a.createElement(o.$n,{disabled:_===void 0||d,onClick:P,variant:"primary"},d?(0,E.t)("browse-dashboards.action.moving","Moving..."):(0,E.t)("browse-dashboards.action.move-button","Move"))))}},9134:(L,u,e)=>{e.d(u,{m:()=>m});var a=e(96540),M=e(32264),i=e(14110),t=e(12131),h=e(38138),n=e(64539),o=e(83122),D=e(55852),E=e(14578),C=e(87978),l=e(5108),s=e(10096),r=e(44836),O=e(28444),f=e(55314),_=e(49904),v=e(18241),d=e(51887);function m({folder:c}){const[P,b]=(0,a.useState)(!1),[A,B]=(0,a.useState)(!1),[T]=(0,f.aF)(),[R]=(0,f.Ko)(),{canEditFolders:U,canDeleteFolders:g,canViewPermissions:K,canSetPermissions:y}=(0,_.N)(c),W=M.$.featureToggles.nestedFolders&&U,p=async I=>{await T({folder:c,destinationUID:I}),(0,i.rR)("grafana_manage_dashboards_item_moved",{item_counts:{folder:1,dashboard:0},source:"folder_actions"})},F=async()=>{await R(c),(0,i.rR)("grafana_manage_dashboards_item_deleted",{item_counts:{folder:1,dashboard:0},source:"folder_actions"});const{parents:I}=c,z=I&&I.length?I[I.length-1].url:"/dashboards";t.Ny.push(z)},S=()=>{s.lE.publish(new O.S8({component:d.J,props:{selectedItems:{folder:{[c.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:p}}))},x=()=>{s.lE.publish(new O.S8({component:v.T,props:{selectedItems:{folder:{[c.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:F}}))},w=(0,r.t)("browse-dashboards.folder-actions-button.manage-permissions","Manage permissions"),$=(0,r.t)("browse-dashboards.folder-actions-button.move","Move"),N=(0,r.t)("browse-dashboards.folder-actions-button.delete","Delete"),V=a.createElement(h.W,null,K&&a.createElement(n.D,{onClick:()=>B(!0),label:w}),W&&a.createElement(n.D,{onClick:S,label:$}),g&&a.createElement(n.D,{destructive:!0,onClick:x,label:N}));return!K&&!W&&!g?null:a.createElement(a.Fragment,null,a.createElement(o.m,{overlay:V,onVisibleChange:b},a.createElement(D.$n,{variant:"secondary"},a.createElement(r.x6,{i18nKey:"browse-dashboards.folder-actions-button.folder-actions"},"Folder actions"),a.createElement(E.I,{name:P?"angle-up":"angle-down"}))),A&&a.createElement(C._,{title:(0,r.t)("browse-dashboards.action.manage-permissions-button","Manage permissions"),subtitle:c.title,onClose:()=>B(!1),size:"md"},a.createElement(l.x,{resource:"folders",resourceId:c.uid,canSetPermissions:y})))}},49904:(L,u,e)=>{e.d(u,{N:()=>h});var a=e(32264),M=e(10096),i=e(31678);function t(n,o){return o?M.TP.hasPermissionInMetadata(n,o):M.TP.hasPermission(n)}function h(n){const o=t(i.AccessControlAction.DashboardsCreate,n),D=!!((!n||a.$.featureToggles.nestedFolders)&&t(i.AccessControlAction.FoldersCreate)),E=t(i.AccessControlAction.FoldersDelete,n),C=t(i.AccessControlAction.DashboardsWrite,n),l=t(i.AccessControlAction.FoldersWrite,n),s=t(i.AccessControlAction.FoldersPermissionsWrite,n),r=t(i.AccessControlAction.FoldersPermissionsRead,n);return{canCreateDashboards:o,canCreateFolders:D,canDeleteFolders:E,canEditDashboards:C,canEditFolders:l,canSetPermissions:s,canViewPermissions:r}}},24643:(L,u,e)=>{e.d(u,{F:()=>r});var a=e(32196),M=e(76459),i=e.n(M),t=e(96540),h=e(76885),n=e(12131),o=e(40845),D=e(37390),E=e(88323),C=e(55852),l=e(44836),s=e(57767);function r({libraryPanel:_,onDismiss:v}){const d=(0,o.of)(f),[m,c]=(0,t.useState)(!1),[P,b]=(0,t.useState)(0),[A,B]=(0,t.useState)(void 0);(0,t.useEffect)(()=>{(async()=>{const K=await(0,s.GN)(_.uid);b(K.length)})()},[_.uid]);const T=(0,t.useCallback)(g=>O(_.uid,g,c),[_.uid]),R=(0,t.useMemo)(()=>i()(T,300,{leading:!0}),[T]),U=g=>{g.preventDefault(),n.Ny.push(h.kM.renderUrl(`/d/${A?.value?.uid}`,{}))};return t.createElement(D.a,{title:(0,l.t)("library-panels.modal.title","View panel in dashboard"),onDismiss:v,onClickBackdrop:v,isOpen:!0},t.createElement("div",{className:d.container},P===0?t.createElement("span",null,t.createElement(l.x6,{i18nKey:"library-panels.modal.panel-not-linked"},"Panel is not linked to a dashboard. Add the panel to a dashboard and retry.")):null,P>0?t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(l.x6,{i18nKey:"library-panels.modal.body",count:P},"This panel is being used in ",{count:P}," dashboard. Please choose which dashboard to view the panel in:")),t.createElement(E.DW,{isClearable:!0,isLoading:m,defaultOptions:!0,loadOptions:R,onChange:B,placeholder:(0,l.t)("library-panels.modal.select-placeholder","Start typing to search for dashboard"),noOptionsMessage:(0,l.t)("library-panels.modal.select-no-options-message","No dashboards found")})):null),t.createElement(D.a.ButtonRow,null,t.createElement(C.$n,{variant:"secondary",onClick:v,fill:"outline"},t.createElement(l.x6,{i18nKey:"library-panels.modal.button-cancel"},"Cancel")),t.createElement(C.$n,{onClick:U,disabled:!A},A?(0,l.t)("library-panels.modal.button-view-panel1","View panel in {{label}}...",{label:A?.label}):(0,l.t)("library-panels.modal.button-view-panel2","View panel in dashboard..."))))}async function O(_,v,d){d(!0);const c=(await(0,s.xV)(_)).filter(P=>P.title.toLowerCase().includes(v.toLowerCase())).map(P=>({label:P.title,value:P}));return d(!1),c}function f(_){return{container:(0,a.css)``}}}}]);

//# sourceMappingURL=FolderLibraryPanelsPage.c64e90758fe7c3f25b9b.js.map