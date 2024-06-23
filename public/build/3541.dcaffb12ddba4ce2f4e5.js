"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3541],{74400:(Pe,q,t)=>{t.d(q,{R:()=>re,I:()=>Be});var s=t(32196),e=t(96540),n=t(49785),b=t(40845),N=t(67061),le=t(29158),C=t(88575),L=t(60029),M=t(10354),W=t(94753),_=t(15292),K=t(56034),se=t(14578),ie=t(25027),ue=t(9518),ce=t(61410),B=t(57220),de=t(25968),me=t(64047),ee=t(46479),Y=t(2543),U=t(26272),T=t(55852),ge=t(88323),xe=t(90613),j=t(37390),H=t(28138),P=t(16233),Se=t(11230),w=t(31678),be=t(23770),Ge=t(63066),ve=t(23662),Re=t(48205),pe=t(85242);const m=()=>{const a=(0,b.of)(F),r=()=>window.open("https://github.com/grafana/grafana/issues/42947","_blank");return e.createElement(N.B,{gap:.5},e.createElement("div",{className:a.slashNotAllowed},"Folders with '/' character are not allowed."),e.createElement(K.m,{placement:"top",content:"Link to the Github issue",theme:"info"},e.createElement(se.I,{name:"info-circle",size:"xs",className:a.infoIcon,onClick:r})))},c=a=>a.indexOf("/")!==-1;function E(a){const{value:r}=a,l={warningCondition:v=>c(v),warningComponent:m},i={disallowValues:!0,isAllowedValue:v=>!c(v)};return e.createElement(pe.sR,{showRoot:!1,rootName:"",allowEmpty:!0,initialFolderUid:r?.uid,searchQueryType:w.SearchQueryType.AlertFolder,...a,permissionLevel:w.PermissionLevelString.Edit,customAdd:i,folderWarning:l})}const F=a=>({slashNotAllowed:(0,s.css)`
    color: ${a.colors.warning.main};
    font-size: 12px;
    margin-bottom: 2px;
  `,infoIcon:(0,s.css)`
    color: ${a.colors.warning.main};
    font-size: 12px;
    margin-bottom: 2px;
    cursor: pointer;
  `});var O=t(7921);const te=1e3,D=(a,r)=>{const o=(0,w.useDispatch)();(0,e.useEffect)(()=>{o((0,be.eB)({rulesSourceName:B.hY}))},[o]);const i=(0,ce.$)(u=>u.rulerRules)[B.hY];return{groupOptions:((0,ue.dy)(B.hY).find(u=>u.uid===a)?.groups??[]).map(u=>{const f=y(u);return{label:u.name,value:u.name,description:u.interval??Ge.pY,isDisabled:r?!1:f,isProvisioned:f}}).sort(G),loading:i?.loading}},y=a=>a.rules.some(r=>(0,ve.lT)(r.rulerRule)&&!!r.rulerRule.grafana_alert.provenance),G=(a,r)=>a.label?.localeCompare(r.label??"")||0,fe=(a,r)=>a.label?.toLowerCase().includes(r.toLowerCase());function Ee({groupfoldersForGrafana:a,enableProvisionedGroups:r}){const{formState:{errors:o},watch:l,setValue:i,control:v}=(0,n.xW)(),h=(0,b.of)(X),p=l("folder"),u=l("group"),{groupOptions:f,loading:g}=D(p?.uid??"",r),[x,S]=(0,e.useState)(!1),[R,A]=(0,e.useState)(!1),Q=()=>S(!0),z=()=>A(!0),J=d=>{Ce(),i("folder",d),S(!1)},Le=(d,$)=>{i("group",d),i("evaluateEvery",$),A(!1)},Ce=(0,e.useCallback)(()=>{i("group","")},[i]),Fe=(0,e.useCallback)(async d=>{const $=d?f.filter(oe=>fe(oe,d)):f;return(0,Y.take)($,te)},[f]),Me=(0,e.useMemo)(()=>(0,Y.debounce)(Fe,300,{leading:!0}),[Fe]),Te=u?{value:u,label:u}:void 0;return e.createElement("div",{className:h.container},e.createElement(N.B,{alignItems:"center"},e.createElement(C.D,{label:e.createElement(L.J,{htmlFor:"folder",description:"Select a folder to store your rule."},"Folder"),className:h.formInput,error:o.folder?.message,"data-testid":"folder-picker"},e.createElement(N.B,{direction:"row",alignItems:"center"},!x&&e.createElement(e.Fragment,null,e.createElement(n.xI,{render:({field:{ref:d,...$}})=>e.createElement("div",{style:{width:420}},e.createElement(E,{inputId:"folder",invalid:!!o.folder?.message,...$,enableReset:!0,onChange:({title:oe,uid:k})=>{$.onChange({title:oe,uid:k}),Ce()}})),name:"folder",rules:{required:{value:!0,message:"Select a folder"},validate:{pathSeparator:d=>(0,O.G0)(d.uid)}}}),e.createElement(W.E,{color:"secondary"},"or"),e.createElement(T.$n,{onClick:Q,type:"button",icon:"plus",fill:"outline",variant:"secondary",disabled:!P.TP.hasPermission(w.AccessControlAction.FoldersCreate)},"New folder"))||e.createElement("div",null,"Creating new folder..."))),x&&e.createElement(he,{onCreate:J,onClose:()=>S(!1)})),x&&e.createElement(he,{onCreate:J,onClose:()=>S(!1)}),e.createElement(N.B,{alignItems:"center"},e.createElement("div",{style:{width:420}},e.createElement(C.D,{label:"Evaluation group","data-testid":"group-picker",description:"Rules within the same group are evaluated concurrently over the same time interval.",className:h.formInput,error:o.group?.message,invalid:!!o.group?.message},e.createElement(n.xI,{render:({field:{ref:d,...$},fieldState:oe})=>e.createElement(ge.DW,{disabled:!p||g,inputId:"group",key:(0,Y.uniqueId)(),...$,onChange:k=>{$.onChange(k.label??"")},isLoading:g,invalid:!!p&&!u&&!!oe.error,loadOptions:Me,cacheOptions:!0,loadingMessage:"Loading groups...",defaultValue:Te,defaultOptions:f,getOptionLabel:k=>e.createElement("div",null,e.createElement("span",null,k.label),k.isProvisioned&&e.createElement(e.Fragment,null," ",e.createElement(Re.rS,null))),placeholder:"Select an evaluation group..."}),name:"group",control:v,rules:{required:{value:!0,message:"Must enter a group name"},validate:{pathSeparator:d=>(0,O.G0)(d)}}}))),e.createElement(xe.a,{marginTop:4,gap:1,display:"flex",alignItems:"center"},e.createElement(W.E,{color:"secondary"},"or"),e.createElement(T.$n,{onClick:z,type:"button",icon:"plus",fill:"outline",variant:"secondary",disabled:!p},"New evaluation group")),R&&e.createElement(ye,{onCreate:Le,onClose:()=>A(!1),groupfoldersForGrafana:a})))}function he({onClose:a,onCreate:r}){const o=(0,b.of)(X),[l,i]=(0,e.useState)(""),v=async()=>{const p=await(0,Se.vV)({title:l});if(!p.uid){H.A.emit(U.r1.alertError,["Folder could not be created"]);return}const u={title:p.title,uid:p.uid};r(u),H.A.emit(U.r1.alertSuccess,["Folder Created","OK"])},h=c(l);return e.createElement(j.a,{className:o.modal,isOpen:!0,title:"New folder",onDismiss:a,onClickBackdrop:a},e.createElement("div",{className:o.modalTitle},"Create a new folder to store your rule"),e.createElement("form",{onSubmit:v},e.createElement(C.D,{label:e.createElement(L.J,{htmlFor:"folder"},"Folder name"),error:"The folder name can't contain slashes",invalid:h},e.createElement(M.p,{autoFocus:!0,id:"folderName",placeholder:"Enter a name",value:l,onChange:p=>i(p.currentTarget.value),className:o.formInput})),e.createElement(j.a.ButtonRow,null,e.createElement(T.$n,{variant:"secondary",type:"button",onClick:a},"Cancel"),e.createElement(T.$n,{type:"submit",disabled:!l||h},"Create"))))}function ye({onClose:a,onCreate:r,groupfoldersForGrafana:o}){const l=(0,b.of)(X),i=()=>{r(Q("group"),Q("evaluateEvery"))},{watch:v}=(0,n.xW)(),h="eval-every-input",[p,u]=v(["group","folder.title"]),f=(o&&o[u]?.find(z=>z.name===p)?.rules)??[],g=()=>{a()},x=(0,n.mN)({defaultValues:{group:"",evaluateEvery:""},mode:"onChange",shouldFocusError:!0}),{register:S,handleSubmit:R,formState:A,getValues:Q}=x;return e.createElement(j.a,{className:l.modal,isOpen:!0,title:"New evaluation group",onDismiss:g,onClickBackdrop:g},e.createElement("div",{className:l.modalTitle},"Create a new evaluation group to use for this alert rule."),e.createElement(n.Op,{...x},e.createElement("form",{onSubmit:R(()=>i())},e.createElement(C.D,{label:e.createElement(L.J,{htmlFor:"group"},"Evaluation group name"),error:A.errors.group?.message,invalid:!!A.errors.group},e.createElement(M.p,{className:l.formInput,autoFocus:!0,id:"group",placeholder:"Enter a name",...S("group",{required:{value:!0,message:"Required."}})})),e.createElement(C.D,{error:A.errors.evaluateEvery?.message,invalid:!!A.errors.evaluateEvery,label:e.createElement(L.J,{htmlFor:h,description:"How often is the rule evaluated. Applies to every rule within the group."},"Evaluation interval")},e.createElement(M.p,{className:l.formInput,id:h,placeholder:"e.g. 5m",...S("evaluateEvery",(0,ee.iS)(f))})),e.createElement(j.a.ButtonRow,null,e.createElement(T.$n,{variant:"secondary",type:"button",onClick:g},"Cancel"),e.createElement(T.$n,{type:"submit",disabled:!A.isValid},"Create")))))}const X=a=>({container:(0,s.css)`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: ${a.breakpoints.values.lg}px;
    justify-content: space-between;
  `,formInput:(0,s.css)`
    flex-grow: 1;
  `,modal:(0,s.css)`
    width: ${a.breakpoints.values.sm}px;
  `,modalTitle:(0,s.css)`
    color: ${a.colors.text.secondary};
    margin-bottom: ${a.spacing(2)};
  `});var I=t(94822);const ae=[{value:I.Q8.Alerting,label:"Alerting"},{value:I.Q8.NoData,label:"No Data"},{value:I.Q8.OK,label:"OK"},{value:I.Q8.Error,label:"Error"},{value:I.Q8.KeepLast,label:"Keep Last State"}],Ie=({includeNoData:a,includeError:r,...o})=>{const l=(0,e.useMemo)(()=>a?r?ae:ae.filter(i=>i.value!==I.Q8.Error):ae.filter(i=>i.value!==I.Q8.NoData),[a,r]);return e.createElement(ge.l6,{options:l,...o})};var Ae=t(64100),Ne=t(271);const Be=10,ne=a=>({required:{value:!0,message:"Required."},validate:r=>{if(r==="0")return!0;try{const o=(0,de.M9)(r);if(o===0)return!0;try{const l=(0,de.M9)(a);return o>=l?!0:"Pending period must be greater than or equal to the evaluation interval."}catch{return!0}}catch(o){return o instanceof Error?o.message:"Failed to parse duration"}}}),Oe=(a,r)=>{const{groupOptions:o}=D(a,!1);return!(0,e.useCallback)(i=>o.some(v=>v.label===i),[o])(r)};function De({evaluateEvery:a,setEvaluateEvery:r,enableProvisionedGroups:o}){const l=(0,b.of)(Z),{watch:i,setValue:v,getValues:h}=(0,n.xW)(),[p,u]=(0,e.useState)(!1),[f,g,x]=i(["group","folder.uid","folder.title"]),R=(0,ce.$)(d=>d.rulerRules)[B.hY],Q=(0,ue.dy)(B.hY).find(d=>d.uid===g),z=Q?.groups.find(d=>d.name===f),J=Oe(g??"",f);(0,e.useEffect)(()=>{!J&&z?.interval&&r(z.interval)},[r,J,v,z]);const Le=(d=!1)=>{d||(0,ie.fH)(ie.le.leavingRuleGroupEdit),u(!1)},Ce=()=>u(!0),Fe=R?.loading||J||!g||!f,Me={name:x,rulesSource:B.hY,groups:[]},Te={name:f,interval:a,rules:[],totals:{}};return e.createElement("div",null,e.createElement(Ee,{groupfoldersForGrafana:R?.result,enableProvisionedGroups:o}),x&&p&&e.createElement(ee.u5,{namespace:Q??Me,group:z??Te,folderUid:g,onClose:()=>Le(),intervalEditOnly:!0,hideFolder:!0}),x&&f&&e.createElement("div",{className:l.evaluationContainer},e.createElement(N.B,{direction:"column",gap:0},e.createElement("div",{className:l.marginTop},e.createElement(N.B,{direction:"column",gap:1},h("group")&&h("evaluateEvery")&&e.createElement("span",null,"All rules in the selected group are evaluated every ",a,"."," ",!J&&e.createElement(le.K,{name:"pen","aria-label":"Edit",disabled:Fe,onClick:Ce})))))))}function V({evaluateEvery:a}){const r=(0,b.of)(Z),{register:o,formState:{errors:l}}=(0,n.xW)();return e.createElement(N.B,{direction:"row","justify-content":"flex-start","align-items":"flex-start"},e.createElement(C.D,{label:e.createElement(L.J,{htmlFor:"evaluateFor",description:"Period in which an alert rule can be in breach of the condition until the alert rule fires."},"Pending period"),className:r.inlineField,error:l.evaluateFor?.message,invalid:!!l.evaluateFor?.message,validationMessageHorizontalOverflow:!0},e.createElement(M.p,{id:"eval-for-input",width:8,...o("evaluateFor",ne(a))})))}function $e(){return e.createElement(N.B,{direction:"row",gap:.5,alignItems:"baseline"},e.createElement(W.E,{variant:"bodySmall",color:"secondary"},"Define how the alert rule is evaluated."),e.createElement(Ae.G,{contentText:"Evaluation groups are containers for evaluating alert and recording rules. An evaluation group defines an evaluation interval - how often a rule is checked. Alert rules within the same evaluation group are evaluated sequentially",externalLink:"https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/rule-evaluation/",linkText:"Read about evaluation",title:"Evaluation"}))}function re({evaluateEvery:a,setEvaluateEvery:r,existing:o,enableProvisionedGroups:l}){const i=(0,b.of)(Z),[v,h]=(0,e.useState)(!1),{watch:p,setValue:u}=(0,n.xW)(),f=p("isPaused");return e.createElement(Ne.P,{stepNo:3,title:"Set evaluation behavior",description:$e()},e.createElement(N.B,{direction:"column","justify-content":"flex-start","align-items":"flex-start"},e.createElement(De,{setEvaluateEvery:r,evaluateEvery:a,enableProvisionedGroups:l}),e.createElement(V,{evaluateEvery:a}),o&&e.createElement(C.D,{htmlFor:"pause-alert-switch"},e.createElement(n.xI,{render:()=>e.createElement(N.B,{gap:1,direction:"row",alignItems:"center"},e.createElement(_.d,{id:"pause-alert",onChange:g=>{u("isPaused",g.currentTarget.checked)},value:!!f}),e.createElement("label",{htmlFor:"pause-alert",className:i.switchLabel},"Pause evaluation",e.createElement(K.m,{placement:"top",content:"Turn on to pause evaluation for this alert rule.",theme:"info"},e.createElement(se.I,{tabIndex:0,name:"info-circle",size:"sm",className:i.infoIcon})))),name:"isPaused"}))),e.createElement(me.e,{isCollapsed:!v,onToggle:g=>h(!g),text:"Configure no data and error handling"}),v&&e.createElement(e.Fragment,null,e.createElement(C.D,{htmlFor:"no-data-state-input",label:"Alert state if no data or all values are null"},e.createElement(n.xI,{render:({field:{onChange:g,ref:x,...S}})=>e.createElement(Ie,{...S,inputId:"no-data-state-input",width:42,includeNoData:!0,includeError:!1,onChange:R=>g(R?.value)}),name:"noDataState"})),e.createElement(C.D,{htmlFor:"exec-err-state-input",label:"Alert state if execution error or timeout"},e.createElement(n.xI,{render:({field:{onChange:g,ref:x,...S}})=>e.createElement(Ie,{...S,inputId:"exec-err-state-input",width:42,includeNoData:!1,includeError:!0,onChange:R=>g(R?.value)}),name:"execErrState"}))))}const Z=a=>({inlineField:(0,s.css)`
    margin-bottom: 0;
  `,evaluateLabel:(0,s.css)`
    margin-right: ${a.spacing(1)};
  `,evaluationContainer:(0,s.css)`
    color: ${a.colors.text.secondary};
    max-width: ${a.breakpoints.values.sm}px;
    font-size: ${a.typography.size.sm};
  `,intervalChangedLabel:(0,s.css)`
    margin-bottom: ${a.spacing(1)};
  `,warningIcon:(0,s.css)`
    justify-self: center;
    margin-right: ${a.spacing(1)};
    color: ${a.colors.warning.text};
  `,infoIcon:(0,s.css)`
    margin-left: 10px;
  `,warningMessage:(0,s.css)`
    color: ${a.colors.warning.text};
  `,bold:(0,s.css)`
    font-weight: bold;
  `,alignInterval:(0,s.css)`
    margin-top: ${a.spacing(1)};
    margin-left: -${a.spacing(1)};
  `,marginTop:(0,s.css)`
    margin-top: ${a.spacing(1)};
  `,switchLabel:(0,s.css)(`
    color: ${a.colors.text.primary},
    cursor: 'pointer',
    fontSize: ${a.typography.bodySmall.fontSize},
  `)})},46479:(Pe,q,t)=>{t.d(q,{u5:()=>Re,iS:()=>ve});var s=t(32196),e=t(2543),n=t(96540),b=t(49785),N=t(39938),le=t(40845),C=t(37390),L=t(67061),M=t(88575),W=t(60029),_=t(10354),K=t(55852),se=t(3169),ie=t(40715),ue=t(31678),ce=t(61410),B=t(23770),de=t(82775),me=t(57220),ee=t(88467),Y=t(23662),U=t(25968),T=t(75591),ge=t(32264),xe=t(42418);const j=()=>n.createElement(xe.F,{severity:"warning",title:"Global evalutation interval limit exceeded"},"A minimum evaluation interval of ",n.createElement("strong",null,ge.$.unifiedAlerting.minInterval)," has been configured in Grafana.",n.createElement("br",null),"Please contact the administrator to configure a lower interval.");var H=t(99106),P=t(74400);const Se=10;function w({message:m,error:c}){return c?n.createElement(N.E,{color:"red",icon:"exclamation-circle",text:"Error",tooltip:m}):n.createElement(N.E,{color:"orange",icon:"exclamation-triangle",text:"Unknown",tooltip:m})}const be=m=>{try{const c=(0,U.M9)(m);return!(c<P.I*1e3||c%(P.I*1e3)!==0)}catch{return!1}},Ge=({rulesWithoutRecordingRules:m})=>{const c=(0,le.of)(pe),{watch:E}=(0,b.xW)(),F=E("groupInterval"),O=!F,te=m.slice().map((y,G)=>({id:G,data:(0,Y.jg)(y,F)})).sort((y,G)=>(0,U.ge)(y.data.forDuration)-(0,U.ge)(G.data.forDuration)),D=(0,n.useMemo)(()=>[{id:"alertName",label:"Alert",renderCell:({data:{alertName:y}})=>n.createElement(n.Fragment,null,y),size:"330px"},{id:"for",label:"Pending period",renderCell:({data:{forDuration:y}})=>n.createElement(n.Fragment,null,y),size:.5},{id:"numberEvaluations",label:"#Eval",renderCell:({data:{evaluationsToFire:y}})=>O?n.createElement(w,{message:"#Evaluations not available."}):be(F)?y===0?n.createElement(w,{message:"Invalid 'For' value: it should be greater or equal to evaluation interval.",error:!0}):n.createElement(n.Fragment,null,y):n.createElement(w,{message:"Invalid evaluation interval format",error:!0}),size:.4}],[F,O]);return n.createElement("div",{className:c.tableWrapper},n.createElement(T.E,{items:te,cols:D,pagination:{itemsPerPage:Se}}))},ve=m=>({required:{value:!0,message:"Required."},validate:c=>{try{const E=(0,U.M9)(c);return E<P.I*1e3?`Cannot be less than ${P.I} seconds.`:E%(P.I*1e3)!==0?`Must be a multiple of ${P.I} seconds.`:(0,B.uQ)(m,c).length===0?!0:"Invalid evaluation interval. Evaluation interval should be smaller or equal to 'For' values for existing rules in this group."}catch(E){return E instanceof Error?E.message:"Failed to parse duration"}}});function Re(m){const{namespace:c,group:E,onClose:F,intervalEditOnly:O,folderUid:te}=m,D=(0,le.of)(pe),y=(0,ue.useDispatch)(),{loading:G,error:fe,dispatched:Ee}=(0,ce.$)(r=>r.updateLotexNamespaceAndGroup)??ee.jA,he=(0,se._2)(),ye=(0,n.useMemo)(()=>({namespaceName:(0,H.EL)(c).name,groupName:E.name,groupInterval:E.interval??""}),[c,E]),X=(0,me.EV)(c.rulesSource),I=X===me.hY,ae=(0,H.EL)(c).parents,Ie=I?"Folder":"Namespace";(0,n.useEffect)(()=>{Ee&&!G&&!fe&&F(!0)},[Ee,G,F,fe]),(0,ie.o)(r=>r.unifiedAlerting.updateLotexNamespaceAndGroup=ee.jA);const Ae=r=>{const o=I?(0,H.wf)(r.namespaceName,ae):r.namespaceName;y((0,B.LU)({rulesSourceName:X,groupName:E.name,newGroupName:r.groupName,namespaceName:c.name,newNamespaceName:o,groupInterval:r.groupInterval||void 0,folderUid:te}))},Ne=(0,b.mN)({mode:"onBlur",defaultValues:ye,shouldFocusError:!0}),{handleSubmit:Be,register:ne,watch:Oe,formState:{isDirty:De,errors:V}}=Ne,$e=()=>{he.error("There are errors in the form. Correct the errors and retry.")},re=(0,e.compact)(E.rules.map(r=>r.rulerRule).filter(r=>!(0,Y.i7)(r))),Z=re.length>0,a=O||I?"Edit evaluation group":"Edit namespace or evaluation group";return n.createElement(C.a,{className:D.modal,isOpen:!0,title:a,onDismiss:F,onClickBackdrop:F},n.createElement(b.Op,{...Ne},n.createElement("form",{onSubmit:r=>r.preventDefault(),key:JSON.stringify(ye)},n.createElement(n.Fragment,null,!m.hideFolder&&n.createElement(L.B,{gap:1,alignItems:"center"},n.createElement(M.D,{className:D.formInput,label:n.createElement(W.J,{htmlFor:"namespaceName",description:!I&&"Change the current namespace name. Moving groups between namespaces is not supported"},Ie),invalid:!!V.namespaceName,error:V.namespaceName?.message},n.createElement(_.p,{id:"namespaceName",readOnly:O||I,...ne("namespaceName",{required:"Namespace name is required."})})),I&&m.folderUrl&&n.createElement(K.z9,{href:m.folderUrl,title:"Go to folder",variant:"secondary",icon:"folder-open",target:"_blank"})),n.createElement(M.D,{label:n.createElement(W.J,{htmlFor:"groupName"},"Evaluation group name"),invalid:!!V.groupName,error:V.groupName?.message},n.createElement(_.p,{autoFocus:!0,id:"groupName",readOnly:O,...ne("groupName",{required:"Evaluation group name is required."})})),n.createElement(M.D,{label:n.createElement(W.J,{htmlFor:"groupInterval",description:"How often is the rule evaluated. Applies to every rule within the group."},n.createElement(L.B,{gap:.5},"Evaluation interval")),invalid:!!V.groupInterval,error:V.groupInterval?.message},n.createElement(_.p,{id:"groupInterval",placeholder:"1m",...ne("groupInterval",ve(re))})),(0,de.q)(Oe("groupInterval")).exceedsLimit&&n.createElement(j,null),!Z&&n.createElement("div",null,"This group does not contain alert rules."),Z&&n.createElement(n.Fragment,null,n.createElement("div",null,"List of rules that belong to this group"),n.createElement("div",{className:D.evalRequiredLabel},"#Eval column represents the number of evaluations needed before alert starts firing."),n.createElement(Ge,{rulesWithoutRecordingRules:re})),n.createElement("div",{className:D.modalButtons},n.createElement(C.a.ButtonRow,null,n.createElement(K.$n,{variant:"secondary",type:"button",disabled:G,onClick:()=>F(!1),fill:"outline"},"Cancel"),n.createElement(K.$n,{type:"button",disabled:!De||G,onClick:Be(r=>Ae(r),$e)},G?"Saving...":"Save")))))))}const pe=m=>({modal:(0,s.css)`
    max-width: 560px;
  `,modalButtons:(0,s.css)`
    top: -24px;
    position: relative;
  `,formInput:(0,s.css)`
    flex: 1;
  `,tableWrapper:(0,s.css)`
    margin-top: ${m.spacing(2)};
    margin-bottom: ${m.spacing(2)};
    height: 100%;
  `,evalRequiredLabel:(0,s.css)`
    font-size: ${m.typography.bodySmall.fontSize};
  `})},41520:(Pe,q,t)=>{t.d(q,{V:()=>n});var s=t(96540),e=t(75471);function n(){return(0,s.useMemo)(()=>(0,e.Q9)(),[])}}}]);

//# sourceMappingURL=3541.dcaffb12ddba4ce2f4e5.js.map