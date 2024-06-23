"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1168],{72557:($,P,e)=>{e.d(P,{A:()=>M});var t=e(96540),T=e(14186),u=e(67647),A=e(55852),D=e(73725);class M extends t.PureComponent{render(){const{searchQuery:k,linkButton:l,setSearchQuery:h,target:g,placeholder:f="Search by name or type",sortPicker:p}=this.props,E={href:l?.href,disabled:l?.disabled};return g&&(E.target=g),t.createElement("div",{className:"page-action-bar"},t.createElement(T.I,{grow:!0},t.createElement(u.Z,{value:k,onChange:h,placeholder:f})),p&&t.createElement(D.r,{onChange:p.onChange,value:p.value,getSortOptions:p.getSortOptions}),l&&t.createElement(A.z9,{...E},l.title))}}},44450:($,P,e)=>{e.r(P),e.d(P,{PlaylistPage:()=>z,default:()=>et});var t=e(96540),T=e(16817),u=e(55852),A=e(69529),D=e(96374),M=e(7521),L=e(17205),k=e(72557),l=e(44836),h=e(16233),g=e(32196),f=e(40845),p=e(72129),E=e(70255),v=e(10860),Z=e(71678),W=e(67061),j=e(93030),O=e(76885),x=e(37390),N=e(84167),S=e(88575),K=e(94354),b=e(10880),Q=e(10354),H=e(10534),V=e(22699);const Y=({playlistUid:a,onDismiss:n})=>{const[o,s]=(0,t.useState)(!1),[i,c]=(0,t.useState)(!1),m=[{label:(0,l.t)("share-playlist.mode-normal","Normal"),value:!1},{label:(0,l.t)("share-playlist.mode-tv","TV"),value:"tv"},{label:(0,l.t)("share-playlist.mode-kiosk","Kiosk"),value:!0}],d={};o&&(d.kiosk=o),i&&(d.autofitpanels=!0);const r=O.kM.renderUrl(`${(0,V.P_)()}/play/${a}`,d);return t.createElement(x.a,{isOpen:!0,title:(0,l.t)("share-playlist.title","Share playlist"),onDismiss:n},t.createElement(N.n,null,t.createElement(S.D,{label:(0,l.t)("share-playlist.mode","Mode")},t.createElement(K.z,{value:o,options:m,onChange:s})),t.createElement(S.D,null,t.createElement(b.S,{label:(0,l.t)("share-playlist.checkbox-label","Autofit"),description:(0,l.t)("share-playlist.checkbox-description","Panel heights will be adjusted to fit screen size"),name:"autofix",value:i,onChange:y=>c(y.currentTarget.checked)})),t.createElement(S.D,{label:(0,l.t)("share-playlist.link-url-label","Link URL")},t.createElement(Q.p,{id:"link-url-input",value:r,readOnly:!0,addonAfter:t.createElement(H.b,{icon:"copy",variant:"primary",getText:()=>r},t.createElement(l.x6,{i18nKey:"share-playlist.copy-link-button"},"Copy"))}))))},G=({playlist:a,setStartPlaylist:n,setPlaylistToDelete:o})=>t.createElement(v.Z,null,t.createElement(v.Z.Heading,null,a.name,t.createElement(Z.$s,{key:"button-share"},({showModal:s,hideModal:i})=>t.createElement(j._,{tooltip:(0,l.t)("playlist-page.card.tooltip","Share playlist"),icon:"share-alt",iconSize:"lg",onClick:()=>{s(Y,{playlistUid:a.uid,onDismiss:i})}}))),t.createElement(v.Z.Actions,null,t.createElement(u.$n,{variant:"secondary",icon:"play",onClick:()=>n(a)},t.createElement(l.x6,{i18nKey:"playlist-page.card.start"},"Start playlist")),h.TP.isEditor&&t.createElement(t.Fragment,null,t.createElement(u.z9,{key:"edit",variant:"secondary",href:`/playlists/edit/${a.uid}`,icon:"cog"},t.createElement(l.x6,{i18nKey:"playlist-page.card.edit"},"Edit playlist")),t.createElement(u.$n,{disabled:!1,onClick:()=>o(a),icon:"trash-alt",variant:"destructive"},t.createElement(l.x6,{i18nKey:"playlist-page.card.delete"},"Delete playlist"))))),J=({rootProps:a})=>{const n=(0,f.of)(X);return t.createElement(v.Z,{...a},t.createElement(v.Z.Heading,null,t.createElement(E.A,{width:140})),t.createElement(v.Z.Actions,null,t.createElement(W.B,{direction:"row",wrap:"wrap"},t.createElement(E.A,{containerClassName:n.button,width:142,height:32}),h.TP.isEditor&&t.createElement(t.Fragment,null,t.createElement(E.A,{containerClassName:n.button,width:135,height:32}),t.createElement(E.A,{containerClassName:n.button,width:153,height:32})))))},C=(0,p.j)(G,J);function X(a){return{button:(0,g.css)({lineHeight:1})}}const w=({playlists:a,setStartPlaylist:n,setPlaylistToDelete:o})=>{const s=(0,f.of)(I);return t.createElement("ul",{className:s.list},a.map(i=>t.createElement("li",{className:s.listItem,key:i.uid},t.createElement(C,{playlist:i,setStartPlaylist:n,setPlaylistToDelete:o}))))},q=({rootProps:a})=>{const n=(0,f.of)(I);return t.createElement("div",{"data-testid":"playlist-page-list-skeleton",className:n.list,...a},t.createElement(C.Skeleton,null),t.createElement(C.Skeleton,null),t.createElement(C.Skeleton,null))},F=(0,p.j)(w,q);function I(a){return{list:(0,g.css)({display:"grid"}),listItem:(0,g.css)({listStyle:"none"})}}var _=e(12131);const tt=({playlist:a,onDismiss:n})=>{const[o,s]=(0,t.useState)(!1),[i,c]=(0,t.useState)(!1),m=[{label:"Normal",value:!1},{label:"TV",value:"tv"},{label:"Kiosk",value:!0}],d=()=>{const r={};o&&(r.kiosk=o),i&&(r.autofitpanels=!0),_.Ny.push(O.kM.renderUrl(`/playlists/play/${a.uid}`,r))};return t.createElement(x.a,{isOpen:!0,icon:"play",title:"Start playlist",onDismiss:n},t.createElement(N.n,null,t.createElement(S.D,{label:"Mode"},t.createElement(K.z,{value:o,options:m,onChange:s})),t.createElement(b.S,{label:"Autofit",description:"Panel heights will be adjusted to fit screen size",name:"autofix",value:i,onChange:r=>c(r.currentTarget.checked)})),t.createElement(x.a.ButtonRow,null,t.createElement(u.$n,{variant:"primary",onClick:d},"Start ",a.name)))};var U=e(12604);const z=()=>{const a=(0,U.NF)(),[n,o]=(0,t.useState)(0),[s,i]=(0,t.useState)(""),c=(0,T.A)(()=>a.getAllPlaylist(),[n]),m=(0,t.useMemo)(()=>(0,U.GM)(c.value??[],s),[s,c]),[d,r]=(0,t.useState)(),[y,B]=(0,t.useState)(),lt=m&&m.length>0,at=()=>B(void 0),nt=()=>{y&&a.deletePlaylist(y.uid).finally(()=>{o(n+1),B(void 0)})},st=t.createElement(M.A,{title:(0,l.t)("playlist-page.empty.title","There are no playlists created yet"),buttonIcon:"plus",buttonLink:"playlists/new",buttonTitle:(0,l.t)("playlist-page.empty.button","Create Playlist"),buttonDisabled:!h.TP.isEditor,proTip:(0,l.t)("playlist-page.empty.pro-tip","You can use playlists to cycle dashboards on TVs without user control"),proTipLink:"http://docs.grafana.org/reference/playlist/",proTipLinkTitle:(0,l.t)("playlist-page.empty.pro-tip-link-title","Learn more"),proTipTarget:"_blank"}),R=c.loading||m.length>0||s.length>0;return t.createElement(L.Y,{actions:h.TP.isEditor?t.createElement(u.z9,{href:"/playlists/new"},t.createElement(l.x6,{i18nKey:"playlist-page.create-button.title"},"New playlist")):void 0,navId:"dashboards/playlists"},t.createElement(L.Y.Contents,null,R&&t.createElement(k.A,{searchQuery:s,setSearchQuery:i}),c.loading?t.createElement(F.Skeleton,null):t.createElement(t.Fragment,null,!lt&&s?t.createElement(A.p,{variant:"not-found",message:(0,l.t)("playlists.empty-state.message","No playlists found")}):t.createElement(F,{playlists:m,setStartPlaylist:r,setPlaylistToDelete:B}),!R&&st,y&&t.createElement(D.u,{title:y.name,confirmText:(0,l.t)("playlist-page.delete-modal.confirm-text","Delete"),body:(0,l.t)("playlist-page.delete-modal.body","Are you sure you want to delete {{name}} playlist?",{name:y.name}),onConfirm:nt,isOpen:!!y,onDismiss:at}),d&&t.createElement(tt,{playlist:d,onDismiss:()=>r(void 0)}))))},et=z}}]);

//# sourceMappingURL=PlaylistPage.46767ebb1dfb318df83b.js.map