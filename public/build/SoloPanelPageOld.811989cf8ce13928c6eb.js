"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4492],{55087:(M,o,e)=>{e.r(o),e.d(o,{SoloPanel:()=>l,SoloPanelPage:()=>i,default:()=>D});var n=e(96540),u=e(63329),h=e(70713),p=e(76888),c=e(39569),P=e(79999);const E=r=>({dashboard:r.dashboard.getModel()}),m={initDashboard:P.vR},_=(0,u.connect)(E,m);class i extends n.Component{constructor(){super(...arguments),this.state={panel:null,notFound:!1}}static{this.contextType=p.YE}componentDidMount(){const{match:a,route:t}=this.props;this.props.initDashboard({urlSlug:a.params.slug,urlUid:a.params.uid,urlType:a.params.type,routeName:t.routeName,fixUrl:!1,keybindingSrv:this.context.keybindings})}getPanelId(){return parseInt(this.props.queryParams.panelId??"0",10)}componentDidUpdate(a){const{dashboard:t}=this.props;if(t&&(!a.dashboard||a.dashboard.uid!==t.uid)){const s=t.getPanelByUrlId(this.props.queryParams.panelId);if(!s){this.setState({notFound:!0});return}s&&t.exitViewPanel(s),this.setState({panel:s}),t.initViewPanel(s)}}render(){return n.createElement(l,{dashboard:this.props.dashboard,notFound:this.state.notFound,panel:this.state.panel,panelId:this.getPanelId(),timezone:this.props.queryParams.timezone})}}const l=({dashboard:r,notFound:a,panel:t,panelId:s,timezone:f})=>a?n.createElement("div",{className:"alert alert-error"},"Panel with id ",s," not found"):!t||!r?n.createElement("div",null,"Loading & initializing dashboard"):n.createElement("div",{className:"panel-solo"},n.createElement(h.Ay,null,({width:d,height:g})=>d===0?null:n.createElement(c.L,{stateKey:t.key,width:d,height:g,dashboard:r,panel:t,isEditing:!1,isViewing:!0,lazy:!1,timezone:f,hideMenu:!0}))),D=_(i)}}]);

//# sourceMappingURL=SoloPanelPageOld.811989cf8ce13928c6eb.js.map