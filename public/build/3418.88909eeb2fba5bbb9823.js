"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3418],{38348:(se,G,s)=>{s.d(G,{A:()=>b});var o=s(96540),t=s(14578),S=s(55852);function m({dashboards:A,onImport:N,onRemove:x}){function $(f){return f.revision!==f.importedRevision?"Update":"Re-import"}return o.createElement("table",{className:"filter-table"},o.createElement("tbody",null,A.map((f,V)=>o.createElement("tr",{key:`${f.dashboardId}-${V}`},o.createElement("td",{className:"width-1"},o.createElement(t.I,{name:"apps"})),o.createElement("td",null,f.imported?o.createElement("a",{href:f.importedUrl},f.title):o.createElement("span",null,f.title)),o.createElement("td",{style:{textAlign:"right"}},f.imported?o.createElement(S.$n,{variant:"secondary",size:"sm",onClick:()=>N(f,!0)},$(f)):o.createElement(S.$n,{variant:"secondary",size:"sm",onClick:()=>N(f,!1)},"Import"),f.imported&&o.createElement(S.$n,{"aria-label":"Delete dashboard",icon:"trash-alt",variant:"destructive",size:"sm",onClick:()=>x(f)}))))))}const b=m},50691:(se,G,s)=>{s.d(G,{fk:()=>W,yf:()=>P,Df:()=>m,Uj:()=>z,Jn:()=>$,z$:()=>w});var o=s(96540),t=s(43429),S=s(39938);function m({error:p}){const M=b(p);return o.createElement(S.E,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:M})}function b(p){switch(p){case t.ZK.modifiedSignature:return"Plugin disabled due to modified content";case t.ZK.invalidSignature:return"Plugin disabled due to invalid plugin signature";case t.ZK.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${p?`: ${p}`:""}`}}var A=s(40845),N=s(32196);const x=p=>(0,N.css)`
  background: ${p.colors.background.primary};
  border-color: ${p.colors.border.strong};
  color: ${p.colors.text.secondary};
`;function $(){const p=(0,A.of)(x);return o.createElement(S.E,{text:"Installed",color:"orange",className:p})}var f=s(33378),V=s(66864),X=s(98624),k=s(55852);function z({plugin:p}){const M=(0,A.of)(x),H=q=>{q.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${p.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,f.a)("enterprise.plugins")?o.createElement(S.E,{text:"Enterprise",color:"blue"}):o.createElement(V.Gy,null,o.createElement(X.B,{status:p.signature}),o.createElement(S.E,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:M}),o.createElement(k.$n,{size:"sm",fill:"text",icon:"external-link-alt",onClick:H},"Learn more"))}function w({plugin:p}){const M=(0,A.of)(Y);return o.createElement("p",{className:M.hasUpdate},"Update available!")}const Y=p=>({hasUpdate:(0,N.css)`
      color: ${p.colors.text.secondary};
      font-size: ${p.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `});function W(){return o.createElement(S.E,{icon:"exclamation-triangle",text:"Angular",color:"orange",tooltip:"This plugin uses deprecated functionality, support for which is being removed."})}function P(){return o.createElement(S.E,{icon:"exclamation-triangle",text:"Deprecated",color:"orange",tooltip:"This plugin is deprecated and no longer receives updates."})}},93418:(se,G,s)=>{s.d(G,{V:()=>ft});var o=s(32196),t=s(96540),S=s(58476),m=s(32264),b=s(40845),A=s(40980),N=s(42418),x=s(66864),$=s(17205),f=s(31678),V=s(74106),X=s(39558);const k=({text:e="Loading..."})=>t.createElement("div",{className:"page-loader-wrapper"},t.createElement(X._,{text:e}));var z=s(13834),w=s(67061),Y=s(48840),W=s(72724),P=s(5129);const p=({versions:e=[],installedVersion:a})=>{const n=(0,b.of)(M),r=(0,P.Gl)(e);return e.length===0?t.createElement("p",null,"No version history was found."):t.createElement("table",{className:n.table},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Version"),t.createElement("th",null,"Last updated"),t.createElement("th",null,"Grafana Dependency"))),t.createElement("tbody",null,e.map(l=>{const d=a===l.version;return t.createElement("tr",{key:l.version},d?t.createElement("td",{className:n.currentVersion},l.version," (installed version)"):l.version===r?.version?t.createElement("td",null,l.version," (latest compatible version)"):t.createElement("td",null,l.version),t.createElement("td",{className:d?n.currentVersion:""},(0,W.fq)(l.createdAt)),t.createElement("td",{className:d?n.currentVersion:""},l.grafanaDependency||"N/A"))})))},M=e=>({container:(0,o.css)`
    padding: ${e.spacing(2,4,3)};
  `,table:(0,o.css)`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `,currentVersion:(0,o.css)`
    font-weight: ${e.typography.fontWeightBold};
  `});var H=s(16817),q=s(60677);const ae=e=>(0,H.A)(async()=>e&&(m.$.pluginAdminExternalManageEnabled&&m.$.featureToggles.managedPluginsInstall?e.isFullyInstalled:e.isInstalled)&&!e.isDisabled?(0,q.W3)(e.id):null,[e?.id,e?.isInstalled,e?.isDisabled]);var c=s(66253),j=s(2543),re=s(95344),K=s(17172),le=s(7376),D=s(55852);class ie extends t.PureComponent{constructor(a){super(a),this.element=null,this.preUpdateHook=()=>Promise.resolve(),this.postUpdateHook=()=>Promise.resolve(),this.update=()=>{const n=this.model.id;this.preUpdateHook().then(()=>{const r=(0,j.extend)({enabled:this.model.enabled,pinned:this.model.pinned,jsonData:this.model.jsonData,secureJsonData:this.model.secureJsonData},{});return(0,K.AI)().post(`/api/plugins/${n}/settings`,r)}).then(this.postUpdateHook).then(r=>{window.location.href=window.location.href})},this.setPreUpdateHook=n=>{this.preUpdateHook=n},this.setPostUpdateHook=n=>{this.postUpdateHook=n},this.importDashboards=()=>((0,re.l)("AppConfig","importDashboards()"),Promise.resolve()),this.enable=()=>{this.model.enabled=!0,this.model.pinned=!0,this.update()},this.disable=()=>{this.model.enabled=!1,this.model.pinned=!1,this.update()},this.state={angularCtrl:null,refresh:0}}componentDidMount(){setTimeout(()=>{this.setState({refresh:this.state.refresh+1})},5)}componentDidUpdate(a){if(!this.element||this.state.angularCtrl)return;this.model=(0,j.cloneDeep)(this.props.app.meta);const n=(0,le.E)(),r='<plugin-component type="app-config-ctrl"></plugin-component>',l={ctrl:this,isAppConfigCtrl:!0},d=n.load(this.element,l,r);this.setState({angularCtrl:d})}render(){const a=this.model,n=(0,o.css)({marginRight:"8px"});return t.createElement("div",null,t.createElement("div",{ref:r=>this.element=r}),t.createElement("br",null),t.createElement("br",null),a&&t.createElement("div",{className:"gf-form"},!a.enabled&&t.createElement(D.$n,{variant:"primary",onClick:this.enable,className:n},"Enable"),a.enabled&&t.createElement(D.$n,{variant:"primary",onClick:this.update,className:n},"Update"),a.enabled&&t.createElement(D.$n,{variant:"destructive",onClick:this.disable,className:n},"Disable")))}}var Q=s(26272),F=s(10096),oe=s(38348);class _ extends t.PureComponent{constructor(a){super(a),this.importAll=()=>{this.importNext(0)},this.importNext=n=>{const{dashboards:r}=this.state;return this.import(r[n],!0).then(()=>n+1<r.length?new Promise(l=>{setTimeout(()=>{this.importNext(n+1).then(()=>{l()})},500)}):Promise.resolve())},this.import=(n,r)=>{const{plugin:l,datasource:d}=this.props,g={pluginId:l.id,path:n.path,overwrite:r,inputs:d?[{name:"*",type:"datasource",pluginId:d.meta.id,value:d.name}]:[]};return(0,K.AI)().post("/api/dashboards/import",g).then(y=>{F.lE.emit(Q.r1.alertSuccess,["Dashboard Imported",n.title]),(0,j.extend)(n,y),this.setState({dashboards:[...this.state.dashboards]})})},this.remove=n=>{(0,K.AI)().delete("/api/dashboards/uid/"+n.uid).then(()=>{n.imported=!1,this.setState({dashboards:[...this.state.dashboards]})})},this.state={loading:!0,dashboards:[]}}async componentDidMount(){const a=this.props.plugin.id;(0,K.AI)().get(`/api/plugins/${a}/dashboards`).then(n=>{this.setState({dashboards:n,loading:!1})})}render(){const{loading:a,dashboards:n}=this.state;return a?t.createElement("div",null,"loading..."):!n||!n.length?t.createElement("div",null,"No dashboards are included with this plugin"):t.createElement(oe.A,{dashboards:n,onImport:this.import,onRemove:this.remove})}}var ce=s(70713),ue=s(62467),E=s(43429),de=s(62930),i=s(7521),u=s(66359),v=s(24439);function I({plugin:e}){const a=(0,b.of)(T),n=(0,t.useMemo)(()=>e.type===E.QE.datasource?{query:"*",ds_type:e.id,kind:["dashboard"]}:{query:"*",panel_type:e.id,kind:["panel"]},[e]),r=(0,H.A)(()=>(0,v.getGrafanaSearcher)().search(n),[n]),l=r.value;return l?.totalRows?t.createElement("div",{className:a.wrap},t.createElement("div",{className:a.info},e.name," is used ",t.createElement("b",null,l.totalRows)," times."),t.createElement(ce.Ay,null,({width:d,height:g})=>t.createElement(u.P,{response:l,width:d,height:g,clearSelection:()=>{},keyboardEvents:(0,ue.of)(),onTagSelected:()=>{}}))):r.loading?t.createElement(de.y,null):m.$.featureToggles.panelTitleSearch?t.createElement(i.A,{title:`${e.name} is not used in any dashboards yet`,buttonIcon:"plus",buttonTitle:"Create Dashboard",buttonLink:`dashboard/new?panelType=${e.id}&editPanel=1`}):t.createElement(N.F,{title:"Missing feature toggle: panelTitleSearch"},"Plugin usage requires the new search index to find usage across dashboards")}const T=e=>({wrap:(0,o.css)`
      width: 100%;
      height: 100%;
    `,info:(0,o.css)`
      padding-bottom: 30px;
    `});function ee({plugin:e,queryParams:a,pageId:n}){const r=(0,b.of)(me),{value:l}=ae(e),d=(0,t.useMemo)(()=>[{id:"action",header:"Action",cell:({cell:{value:h}})=>h},{id:"scope",header:"Scope",cell:({cell:{value:h}})=>h}],[]);if(n===c.LZ.OVERVIEW)return t.createElement("div",{className:(0,o.cx)(r.readme,r.container),dangerouslySetInnerHTML:{__html:e.details?.readme??"No plugin help or readme markdown file was found"}});if(n===c.LZ.VERSIONS)return t.createElement("div",{className:r.container},t.createElement(p,{versions:e.details?.versions,installedVersion:e.installedVersion}));if(n===c.LZ.CONFIG&&l?.angularConfigCtrl)return t.createElement("div",{className:r.container},t.createElement(ie,{app:l}));const g=e.iam?.permissions||e.details?.iam?.permissions;if(m.$.featureToggles.externalServiceAccounts&&n===c.LZ.IAM&&g&&g.length>0)return t.createElement(t.Fragment,null,t.createElement(w.B,{direction:"row"},"The ",e.name," plugin needs a service account to be able to query Grafana. The following list contains the permissions available to the service account:"),t.createElement(Y.j,{columns:d,data:g,getRowId:h=>String(h.action)}));if(l?.configPages){for(const h of l.configPages)if(n===h.id)return t.createElement("div",{className:r.container},t.createElement(z.a,{meta:l.meta},t.createElement(h.body,{plugin:l,query:a})))}return n===c.LZ.USAGE&&l?t.createElement("div",{className:r.container},t.createElement(I,{plugin:l?.meta})):n===c.LZ.DASHBOARDS&&l?t.createElement("div",{className:r.container},t.createElement(_,{plugin:l?.meta})):t.createElement("div",{className:r.container},t.createElement("p",null,"Page not found."))}const me=e=>({container:(0,o.css)({height:"100%"}),readme:(0,o.css)({"& img":{maxWidth:"100%"},"h1, h2, h3":{marginTop:e.spacing(3),marginBottom:e.spacing(2)},"*:first-child":{marginTop:0},li:{marginLeft:e.spacing(2),"& > p":{margin:e.spacing(1,0)}},a:{color:e.colors.text.link,"&:hover":{color:e.colors.text.link,textDecoration:"underline"}},table:{tableLayout:"fixed",width:"100%","td, th":{overflowX:"auto",padding:e.spacing(.5,1)},"table, th, td":{border:`1px solid ${e.colors.border.medium}`,borderCollapse:"collapse"}}})});var he=s(13544);function Ce({className:e,plugin:a}){return a.isDisabled?t.createElement(N.F,{severity:"error",title:"Plugin disabled",className:e,"data-testid":he.Tp.pages.PluginPage.disabledInfo},Te(a.error),t.createElement("p",null,"Please contact your server administrator to get this resolved."),t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer"},"Read more about managing plugins")):null}function Te(e){switch(e){case E.ZK.modifiedSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");case E.ZK.invalidSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");case E.ZK.missingSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");default:return t.createElement("p",null,"We failed to run this plugin due to an unkown reason and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin.")}}function $e({className:e,plugin:a}){const n=a.signature===E.Ac.valid,r=a.signature===E.Ac.internal,l=a.isDisabled&&Ue(a.error);return n||r||l?null:t.createElement(N.F,{severity:"warning",title:"Invalid plugin signature","data-testid":he.Tp.pages.PluginPage.signatureInfo,className:e},t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."),t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer"},"Read more about plugins signing."))}function Ue(e){switch(e){case E.ZK.invalidSignature:case E.ZK.missingSignature:case E.ZK.modifiedSignature:return!0;default:return!1}}const Me=(e,a)=>{const{loading:n,error:r,value:l}=ae(e),{pathname:d}=(0,S.zy)(),g=Re(e,l),y=!!e?.isPublished,h=a||g,R=(0,t.useMemo)(()=>{const ne=e&&F.TP.hasPermissionInMetadata(f.AccessControlAction.PluginsWrite,e),L=[];if(y&&L.push({text:c.og.VERSIONS,id:c.LZ.VERSIONS,icon:"history",url:`${d}?page=${c.LZ.VERSIONS}`,active:c.LZ.VERSIONS===h}),!l||(m.$.featureToggles.externalServiceAccounts&&(e?.iam||e?.details?.iam)&&L.push({text:c.og.IAM,icon:"shield",id:c.LZ.IAM,url:`${d}?page=${c.LZ.IAM}`,active:c.LZ.IAM===h}),m.$.featureToggles.panelTitleSearch&&(l.meta.type===E.QE.panel||l.meta.type===E.QE.datasource)&&L.push({text:c.og.USAGE,icon:"list-ul",id:c.LZ.USAGE,url:`${d}?page=${c.LZ.USAGE}`,active:c.LZ.USAGE===h}),!ne))return L;if(l.meta.type===E.QE.app){if(l.angularConfigCtrl&&L.push({text:"Config",icon:"cog",id:c.LZ.CONFIG,url:`${d}?page=${c.LZ.CONFIG}`,active:c.LZ.CONFIG===h}),l.configPages)for(const U of l.configPages)L.push({text:U.title,icon:U.icon,id:U.id,url:`${d}?page=${U.id}`,active:U.id===h});l.meta.includes?.find(U=>U.type===E.ib.dashboard)&&L.push({text:"Dashboards",icon:"apps",id:c.LZ.DASHBOARDS,url:`${d}?page=${c.LZ.DASHBOARDS}`,active:c.LZ.DASHBOARDS===h})}return L},[e,l,d,y,h]),Z={text:e?.name??"",img:e?.info.logos.small,children:[{text:c.og.OVERVIEW,icon:"file-alt",id:c.LZ.OVERVIEW,url:`${d}?page=${c.LZ.OVERVIEW}`,active:c.LZ.OVERVIEW===h},...R]};return{error:r,loading:n,navModel:Z,activePageId:h}};function Re(e,a){return!e||!a||!F.TP.hasPermissionInMetadata(f.AccessControlAction.PluginsWrite,e)||a.meta.type!==E.QE.app?c.LZ.OVERVIEW:a.angularConfigCtrl?c.LZ.CONFIG:a.configPages?.length?a.configPages[0].id:c.LZ.OVERVIEW}var J=s(14578),te=s(2913),Be=s(84684);function Ge({plugin:e}){const{value:a}=ae(e);if(!a||!F.TP.hasPermission(f.AccessControlAction.PluginsWrite))return null;const{enabled:n,jsonData:r}=a?.meta,l=()=>pe(e.id,{enabled:!0,pinned:!0,jsonData:r}),d=()=>{pe(e.id,{enabled:!1,pinned:!1,jsonData:r})};return t.createElement(t.Fragment,null,!n&&t.createElement(D.$n,{variant:"primary",onClick:l},"Enable"),n&&t.createElement(D.$n,{variant:"destructive",onClick:d},"Disable"))}const pe=async(e,a)=>{try{await(0,Be.ij)(e,a),window.location.reload()}catch(n){console.error("Error while updating the plugin",n)}};var Ee=s(85464),ve=s(16233);function It(){return config.bootData.user.isGrafanaAdmin}function Dt(){return contextSrv.hasRole("Admin")}function Ve(){return ve.TP.hasPermission(f.AccessControlAction.DataSourcesCreate)&&ve.TP.hasPermission(f.AccessControlAction.DataSourcesWrite)}function We({plugin:e}){const a=(0,f.useDispatch)(),n=(0,Ee.aM)(),r=(0,t.useCallback)(()=>{const d={name:e.name,id:e.id};a((0,Ee.du)(d,n.Edit))},[a,e,n]);if(!Ve())return null;const l=m.$.featureToggles.managedPluginsInstall&&m.$.pluginAdminExternalManageEnabled&&!e.isFullyInstalled;return t.createElement(D.$n,{variant:"primary",onClick:r,disabled:l,title:l?"The plugin isn't usable yet, it may take some time to complete the installation.":void 0},"Add new data source")}function Fe({plugin:e}){if(!e.isInstalled||e.isDisabled)return null;switch(e.type){case E.QE.datasource:return t.createElement(We,{plugin:e});case E.QE.app:return t.createElement(Ge,{plugin:e});default:return null}}var Ze=s(33378),C=s(83391);const Oe=({plugin:e,pluginStatus:a,latestCompatibleVersion:n})=>{const r=(0,b.of)(ke),l=m.$.pluginAdminExternalManageEnabled,d=F.TP.hasPermission(f.AccessControlAction.PluginsInstall),g=(0,C.pw)(),y=!!n;return e.type===E.QE.renderer?t.createElement("div",{className:r.message},"Renderer plugins cannot be managed by the Plugin Catalog."):e.type===E.QE.secretsmanager?t.createElement("div",{className:r.message},"Secrets manager plugins cannot be managed by the Plugin Catalog."):e.isEnterprise&&!(0,Ze.a)("enterprise.plugins")?t.createElement(x.Gy,{height:"auto",align:"center"},t.createElement("span",{className:r.message},"No valid Grafana Enterprise license detected."),t.createElement(D.z9,{href:`${(0,P.H2)(e.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt"},"Learn more")):e.isDev?t.createElement("div",{className:r.message},"This is a development build of the plugin and can't be uninstalled."):!d&&!l?t.createElement("div",{className:r.message},ze(a)):e.isPublished?y?g?null:t.createElement("div",{className:r.message},"The install controls have been disabled because the Grafana server cannot access grafana.com."):t.createElement("div",{className:r.message},t.createElement(J.I,{name:"exclamation-triangle"}),"\xA0This plugin doesn't support your version of Grafana."):t.createElement("div",{className:r.message},t.createElement(J.I,{name:"exclamation-triangle"})," This plugin is not published to"," ",t.createElement("a",{href:"https://www.grafana.com/plugins",target:"__blank",rel:"noreferrer"},"grafana.com/plugins")," ","and can't be managed via the catalog.")},ke=e=>({message:(0,o.css)`
      color: ${e.colors.text.secondary};
    `});function ze(e){switch(e){case c.u8.INSTALL:case c.u8.REINSTALL:return"You do not have permission to install this plugin.";case c.u8.UNINSTALL:return"You do not have permission to uninstall this plugin.";case c.u8.UPDATE:return"You do not have permission to update this plugin.";default:return"You do not have permission to manage this plugin."}}var we=s(12131),He=s(96374),ge=s(28138),je=s(83277),Ke=s(91219),ye=s(14110);const Qe=e=>{(0,ye.rR)("grafana_plugin_install_clicked",e)},Je=e=>{(0,ye.rR)("grafana_plugin_uninstall_clicked",e)};function Xe({plugin:e,pluginStatus:a,latestCompatibleVersion:n,hasInstallWarning:r,setNeedReload:l}){const d=(0,f.useDispatch)(),[g]=(0,je.s)(),y=(0,S.zy)(),{isInstalling:h,error:R}=(0,C.XN)(),{isUninstalling:Z,error:ne}=(0,C.qG)(),L=(0,C.xX)(),U=(0,C.Gp)(),O=(0,C.SQ)(),Et=(0,C.A5)(),[vt,Ie]=(0,t.useState)(!1),yt=()=>Ie(!0),De=()=>Ie(!1),Ae=Z?"Uninstalling":"Uninstall",xe={plugin_id:e.id,plugin_type:e.type,path:y.pathname};(0,t.useEffect)(()=>()=>{O()},[]);const Pt=async()=>{Qe(xe);const B=await L(e.id,n?.version);if(!R&&!("error"in B)){let fe=`Installed ${e.name}`;m.$.pluginAdminExternalManageEnabled&&te.Ay.featureToggles.managedPluginsInstall&&(fe="Install requested, this may take a few minutes."),ge.A.emit(Q.r1.alertSuccess,[fe]),e.type==="app"&&l?.(!0),await Et(e.id)}},Ne=async()=>{if(De(),Je(xe),await U(e.id),!ne){const B=g.page;B!==c.LZ.OVERVIEW&&B!==c.LZ.VERSIONS&&we.Ny.replace(`${y.pathname}?page=${c.LZ.OVERVIEW}`);let Le=`Uninstalled ${e.name}`;m.$.pluginAdminExternalManageEnabled&&te.Ay.featureToggles.managedPluginsInstall&&(Le="Uninstall requested, this may take a few minutes."),ge.A.emit(Q.r1.alertSuccess,[Le]),e.type==="app"&&(d((0,Ke.fc)({pluginID:e.id})),l?.(!1))}},St=async()=>{await L(e.id,n?.version,!0),R||ge.A.emit(Q.r1.alertSuccess,[`Updated ${e.name}`])};if(a===c.u8.UNINSTALL){const B=m.$.pluginAdminExternalManageEnabled&&te.Ay.featureToggles.managedPluginsInstall?e.isUninstallingFromInstance:Z;return t.createElement(t.Fragment,null,t.createElement(He.u,{isOpen:vt,title:`Uninstall ${e.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:Ne,onDismiss:De}),t.createElement(x.Gy,{align:"flex-start",width:"auto",height:"auto"},t.createElement(D.$n,{variant:"destructive",disabled:B,onClick:yt},Ae)))}if(!e.isPublished||r)return null;if(a===c.u8.UPDATE){const B=m.$.pluginAdminExternalManageEnabled&&te.Ay.featureToggles.managedPluginsInstall?e.isUpdatingFromInstance:h;return t.createElement(x.Gy,{align:"flex-start",width:"auto",height:"auto"},t.createElement(D.$n,{disabled:B,onClick:St},h?"Updating":"Update"),t.createElement(D.$n,{variant:"destructive",disabled:Z,onClick:Ne},Ae))}const bt=h||R||!m.$.angularSupportEnabled&&e.angularDetected;return t.createElement(D.$n,{disabled:bt,onClick:Pt},h?"Installing":"Install")}function Ye({pluginId:e,pluginStatus:a,angularDetected:n}){const r=`${(0,P.H2)(e)}/?tab=installation`;return a===c.u8.UPDATE?t.createElement(x.Gy,{height:"auto"},t.createElement(D.z9,{href:r,target:"_blank",rel:"noopener noreferrer"},"Update via grafana.com"),t.createElement(D.z9,{variant:"destructive",href:r,target:"_blank",rel:"noopener noreferrer"},"Uninstall via grafana.com")):a===c.u8.UNINSTALL?t.createElement(D.z9,{variant:"destructive",href:r,target:"_blank",rel:"noopener noreferrer"},"Uninstall via grafana.com"):t.createElement(D.z9,{disabled:!m.$.angularSupportEnabled&&n,href:r,target:"_blank",rel:"noopener noreferrer"},"Install via grafana.com")}const qe=({plugin:e})=>{const a=(0,b.of)(_e),n=(0,C.pw)(),r=(0,P.Gl)(e?.details?.versions),[l,d]=(0,t.useState)(!1);if(!e)return null;const g=(0,P.N6)(e,n,r),y=m.$.pluginAdminExternalManageEnabled,h=e.isInstalled?e.hasUpdate?c.u8.UPDATE:c.u8.UNINSTALL:c.u8.INSTALL,R=e.isCore||e.isDisabled||!(0,P.j_)();return t.createElement(x.gW,null,t.createElement(x.Gy,null,!R&&t.createElement(t.Fragment,null,y&&!g&&!te.Ay.featureToggles.managedPluginsInstall?t.createElement(Ye,{pluginId:e.id,pluginStatus:h,angularDetected:e.angularDetected}):t.createElement(Xe,{plugin:e,latestCompatibleVersion:r,pluginStatus:h,setNeedReload:d,hasInstallWarning:g})),t.createElement(Fe,{plugin:e})),l&&t.createElement(x.Gy,null,t.createElement(J.I,{name:"exclamation-triangle"}),t.createElement("span",{className:a.message},"Refresh the page to see the changes")))},_e=e=>({message:(0,o.css)`
      color: ${e.colors.text.secondary};
    `}),et=({plugin:e})=>{const a=(0,C.pw)(),n=(0,b.of)(tt),{error:r}=(0,C.XN)();if(!e)return null;const l=(0,P.Gl)(e.details?.versions),d=e.isInstalled?e.hasUpdate?c.u8.UPDATE:c.u8.UNINSTALL:c.u8.INSTALL;return t.createElement("div",{className:n.subtitle},r&&t.createElement(N.F,{title:"message"in r?r.message:""},typeof r=="string"?r:r.error),e?.description&&t.createElement("div",null,e?.description),e?.details?.links&&e.details.links.length>0&&t.createElement("span",null,e.details.links.map((g,y)=>t.createElement(t.Fragment,{key:y},y>0&&" | ",t.createElement("a",{href:g.url,className:"external-link"},g.name)))),(0,P.N6)(e,a,l)&&t.createElement(Oe,{plugin:e,pluginStatus:d,latestCompatibleVersion:l}))},tt=e=>({subtitle:(0,o.css)`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `});var nt=s(50691);function at({plugin:e,grafanaDependency:a}){const n=(0,b.of)(st),r=e.details?.pluginDependencies;return!a&&(!r||!r.length)?null:t.createElement(w.B,{gap:1},!!a&&t.createElement("div",{className:n.depBadge},t.createElement(J.I,{name:"grafana",className:n.icon}),"Grafana ",a),r&&r.length>0&&t.createElement("div",null,r.map(d=>t.createElement("span",{className:n.depBadge,key:d.name},t.createElement(J.I,{name:c.Ip[d.type],className:n.icon}),d.name," ",d.version))))}const st=e=>({dependencyTitle:(0,o.css)`
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,depBadge:(0,o.css)({display:"flex",alignItems:"flex-start"}),icon:(0,o.css)`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var rt=s(98624),lt=s(39938);const Pe={[E.kv.grafana]:"grafana",[E.kv.commercial]:"shield",[E.kv.community]:"shield",DEFAULT:"shield-exclamation"};function it({signatureType:e,signatureOrg:a=""}){const n=(0,b.of)(be);if(!e&&!a)return null;const r=e===E.kv.grafana?"Grafana Labs":(0,j.capitalize)(e),l=Pe[e||""]||Pe.DEFAULT;return t.createElement(t.Fragment,null,t.createElement(Se,null,t.createElement("div",{className:n.detailsWrapper},t.createElement("strong",{className:n.strong},"Level:\xA0"),t.createElement(J.I,{size:"xs",name:l}),"\xA0",r)),t.createElement(Se,null,t.createElement("strong",{className:n.strong},"Signed by:")," ",a))}const Se=({children:e})=>{const a=(0,b.of)(be);return t.createElement(lt.E,{color:"green",className:a.badge,text:e})},be=e=>({badge:(0,o.css)`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
  `,detailsWrapper:(0,o.css)`
    align-items: center;
    display: flex;
  `,strong:(0,o.css)`
    color: ${e.colors.text.primary};
  `,icon:(0,o.css)`
    margin-right: ${e.spacing(.5)};
  `});function ot({plugin:e}){const a=(0,b.of)(ct),n=e.signature===E.Ac.valid;return t.createElement("div",{className:a.container},t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",className:a.link},t.createElement(rt.B,{status:e.signature})),n&&t.createElement(it,{signatureType:e.signatureType,signatureOrg:e.signatureOrg}))}const ct=e=>({container:(0,o.css)`
      display: flex;
      flex-wrap: wrap;
      gap: ${e.spacing(.5)};
    `,link:(0,o.css)`
      display: inline-flex;
      align-items: center;
    `}),ut=e=>{const a=[];if(!e)return a;const n=(0,P.Gl)(e.details?.versions),r=!e.isInstalled;let l=e.installedVersion;!l&&r&&n?.version&&(l=n?.version),l&&a.push({label:"Version",value:l}),e.orgName&&a.push({label:"From",value:e.orgName}),(!e.signatureType||e.signatureType===E.kv.community||e.signatureType===E.kv.commercial)&&e.downloads>0&&a.push({label:"Downloads",value:new Intl.NumberFormat().format(e.downloads)});const g=e.details?.pluginDependencies;let y=e.details?.grafanaDependency;return r&&n?.grafanaDependency&&(y=n?.grafanaDependency),!y&&(!g||!g.length)||a.push({label:"Dependencies",value:t.createElement(at,{plugin:e,grafanaDependency:y})}),e.isDisabled&&a.push({label:"Status",value:t.createElement(nt.Df,{error:e.error})}),a.push({label:"Signature",value:t.createElement(ot,{plugin:e})}),a},At=e=>({subtitle:css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `}),dt=e=>{const a=ut(e);return{actions:t.createElement(qe,{plugin:e}),info:a,subtitle:t.createElement(et,{plugin:e})}};var mt=s(36663);function gt(e){const{className:a,plugin:n}=e,[r,l]=(0,t.useState)(!1);return n.isDeprecated&&!r?t.createElement(N.F,{severity:"warning",title:"Deprecated",className:a,onRemove:()=>l(!0)},t.createElement("p",null,"This ",n.type," plugin is"," ",t.createElement("a",{className:"external-link",href:"https://grafana.com/legal/plugin-deprecation/",rel:"noreferrer",target:"_blank"},"deprecated")," ","and has been removed from the catalog."),n.details?.statusContext&&t.createElement("div",{className:"markdown-html",dangerouslySetInnerHTML:{__html:(0,mt.G)(n.details.statusContext)}})):null}function ft({pluginId:e,navId:a="plugins",notFoundComponent:n=t.createElement(pt,null),notFoundNavModel:r={text:"Unknown plugin",subTitle:"The requested ID does not belong to any plugin",active:!0}}){const l=(0,S.zy)(),d=new URLSearchParams(l.search),g=(0,C.ob)(e),{navModel:y,activePageId:h}=Me(g,d.get("page")),{actions:R,info:Z,subtitle:ne}=dt(g),{isLoading:L}=(0,C.m5)(),{isLoading:U}=(0,C.wr)(),O=(0,b.of)(ht);return L||U?t.createElement($.Y,{navId:a,pageNav:{text:"",active:!0}},t.createElement(k,null)):g?t.createElement($.Y,{navId:a,pageNav:y,actions:R,subTitle:ne,info:Z},t.createElement($.Y.Contents,null,t.createElement(A.J,{className:O.tabContent},g.angularDetected&&t.createElement(V.c,{className:O.alert,angularSupportEnabled:m.$?.angularSupportEnabled,pluginId:g.id,pluginType:g.type,showPluginDetailsLink:!1,interactionElementId:"plugin-details-page"}),t.createElement($e,{plugin:g,className:O.alert}),t.createElement(Ce,{plugin:g,className:O.alert}),t.createElement(gt,{plugin:g,className:O.alert}),t.createElement(ee,{queryParams:Object.fromEntries(d),plugin:g,pageId:h})))):t.createElement($.Y,{navId:a,pageNav:r},n)}const ht=e=>({alert:(0,o.css)`
      margin-bottom: ${e.spacing(2)};
    `,subtitle:(0,o.css)`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `,tabContent:(0,o.css)`
      overflow: auto;
      height: 100%;
      padding-left: 5px;
    `});function pt(){return t.createElement(x.PE,{justify:"center",align:"center"},t.createElement(N.F,{severity:f.AppNotificationSeverity.Warning,title:"Plugin not found"},"That plugin cannot be found. Please check the url is correct or ",t.createElement("br",null),"go to the ",t.createElement("a",{href:"/plugins"},"plugin catalog"),"."))}},83391:(se,G,s)=>{s.d(G,{Tr:()=>de,A5:()=>E,wr:()=>Q,m5:()=>ie,PW:()=>H,F9:()=>c,ob:()=>q,xX:()=>j,XN:()=>F,pw:()=>le,Gp:()=>K,qG:()=>oe,SQ:()=>re});var o=s(96540),t=s(31678),S=s(5129),m=s(20701),b=s(31326),A=s(1081),N=s(54479),x=s(14110),$=s(66253);const f=i=>i.plugins,V=(0,A.Mz)(f,({items:i})=>i),X=(0,A.Mz)(f,({settings:i})=>i.displayMode),{selectAll:k,selectById:z}=b.AI.getSelectors(V),w=i=>(0,A.Mz)(k,u=>{const v=i.keyword?(0,N.xb)(i.keyword.toLowerCase()):"",I=v!==""?(0,S.TD)(u,v):null;return v&&(0,x.rR)("plugins_search",{resultsCount:I?.length}),u.filter(T=>!(v&&I==null||v&&!I?.includes(T.id)||i.type&&T.type!==i.type||i.isInstalled!==void 0&&T.isInstalled!==i.isInstalled||i.isEnterprise!==void 0&&T.isEnterprise!==i.isEnterprise))}),Y=i=>(0,A.Mz)(k,u=>{const v=[];for(const I of u)I.error&&(!i||I.type===i)&&v.push({pluginId:I.id,errorCode:I.error,pluginType:I.type});return v}),W=i=>(0,A.Mz)(f,({requests:u={}})=>u[i]),P=i=>(0,A.Mz)(W(i),u=>u?.status===$.IZ.Pending),p=i=>(0,A.Mz)(W(i),u=>u?.status===$.IZ.Rejected?u?.error:null),M=i=>(0,A.Mz)(W(i),u=>u===void 0),H=(i,u=S.by.nameAsc)=>{_();const v=(0,o.useMemo)(()=>w(i),[i]),I=(0,t.useSelector)(v),{isLoading:T,error:ee}=D(),me=(0,S.Xc)(I,u);return{isLoading:T,error:ee,plugins:me}},q=i=>(_(),ue(i),(0,t.useSelector)(u=>z(u,i))),ae=i=>(ce(),useSelector(u=>selectById(u,i))),c=i=>(_(),(0,t.useSelector)(Y(i))),j=()=>{const i=(0,t.useDispatch)();return(u,v,I)=>i((0,m.ai)({id:u,version:v,isUpdating:I}))},re=()=>{const i=(0,t.useDispatch)();return()=>i((0,m.nT)())},K=()=>{const i=(0,t.useDispatch)();return u=>i((0,m.JC)(u))},le=()=>(0,t.useSelector)(p(m.JJ.typePrefix))===null,D=()=>{const i=(0,t.useSelector)(P("plugins/fetchLocal")),u=(0,t.useSelector)(p("plugins/fetchLocal"));return{isLoading:i,error:u}},ie=()=>{const i=(0,t.useSelector)(P(m.mj.typePrefix)),u=(0,t.useSelector)(P("plugins/fetchLocal")),v=(0,t.useSelector)(P("plugins/fetchRemote")),I=i||u||v,T=(0,t.useSelector)(p(m.mj.typePrefix));return{isLoading:I,error:T}},Q=()=>{const i=(0,t.useSelector)(P(m.t5.typePrefix)),u=(0,t.useSelector)(p(m.t5.typePrefix));return{isLoading:i,error:u}},F=()=>{const i=(0,t.useSelector)(P(m.ai.typePrefix)),u=(0,t.useSelector)(p(m.ai.typePrefix));return{isInstalling:i,error:u}},oe=()=>{const i=(0,t.useSelector)(P(m.JC.typePrefix)),u=(0,t.useSelector)(p(m.JC.typePrefix));return{isUninstalling:i,error:u}},_=()=>{const i=(0,t.useDispatch)(),u=(0,t.useSelector)(M(m.mj.typePrefix));(0,o.useEffect)(()=>{u&&i((0,m.mj)())},[])},ce=()=>{const i=useDispatch(),u=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{u&&i(fetchAllLocal())},[])},ue=i=>{const u=(0,t.useDispatch)(),v=(0,t.useSelector)(ee=>z(ee,i)),T=!(0,t.useSelector)(P(m.t5.typePrefix))&&v&&!v.details;(0,o.useEffect)(()=>{T&&u((0,m.t5)(i))},[v])},E=()=>{const i=(0,t.useDispatch)();return u=>i((0,m.t5)(u))},de=()=>{const i=(0,t.useDispatch)();return{displayMode:(0,t.useSelector)(X),setDisplayMode:v=>i((0,b.qo)(v))}}}}]);

//# sourceMappingURL=3418.88909eeb2fba5bbb9823.js.map