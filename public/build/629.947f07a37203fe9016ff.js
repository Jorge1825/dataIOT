"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[629],{32346:(j,M,o)=>{o.d(M,{g:()=>U});var p=o(96540),E=o(32196),m=o(14186),P=o(79924),T=o(10354),D=o(29020),t=Object.defineProperty,A=Object.defineProperties,N=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,W=(g,f,$)=>f in g?t(g,f,{enumerable:!0,configurable:!0,writable:!0,value:$}):g[f]=$,F=(g,f)=>{for(var $ in f||(f={}))d.call(f,$)&&W(g,$,f[$]);if(C)for(var $ of C(f))B.call(f,$)&&W(g,$,f[$]);return g},S=(g,f)=>A(g,N(f));const U=({config:g,onChange:f,className:$})=>{const w=i=>{f(S(F({},g),{jsonData:S(F({},g.jsonData),{keepCookies:i})}))},x=i=>{f(S(F({},g),{jsonData:S(F({},g.jsonData),{timeout:parseInt(i.currentTarget.value,10)})}))},H={container:(0,E.css)({maxWidth:578})};return p.createElement(D.I,{title:"Advanced HTTP settings",className:(0,E.cx)(H.container,$)},p.createElement(m.I,{htmlFor:"advanced-http-cookies",label:"Allowed cookies",labelWidth:24,tooltip:"Grafana proxy deletes forwarded cookies by default. Specify cookies by name that should be forwarded to the data source.",disabled:g.readOnly,grow:!0},p.createElement(P.u,{id:"advanced-http-cookies",placeholder:"New cookie (hit enter to add)",tags:g.jsonData.keepCookies,onChange:w})),p.createElement(m.I,{htmlFor:"advanced-http-timeout",label:"Timeout",labelWidth:24,tooltip:"HTTP request timeout in seconds",disabled:g.readOnly,grow:!0},p.createElement(T.p,{id:"advanced-http-timeout",type:"number",min:0,placeholder:"Timeout in seconds","aria-label":"Timeout in seconds",value:g.jsonData.timeout,onChange:x})))}},6191:(j,M,o)=>{o.d(M,{X:()=>P});var p=o(32196),E=o(96540),m=o(40845);const P=({children:D})=>{const t=(0,m.of)(T);return E.createElement("div",{className:t.root},D)},T=D=>({root:(0,p.css)({display:"flex",flexWrap:"wrap",alignItems:"center",gap:D.spacing(3),minHeight:D.spacing(4)})})},31347:(j,M,o)=>{o.d(M,{Z:()=>E});var p=o(96540);const E=({grow:m,shrink:P})=>p.createElement("div",{style:{display:"block",flexGrow:m,flexShrink:P}})},42952:(j,M,o)=>{o.d(M,{T:()=>E,f:()=>p});var p=(m=>(m.Code="code",m.Builder="builder",m))(p||{});const E="Binary operations"},97535:(j,M,o)=>{o.d(M,{Bb:()=>W,Cs:()=>B,Ed:()=>U,N4:()=>F,P7:()=>w,Qn:()=>C,WV:()=>t,qv:()=>d,sM:()=>f,tY:()=>S,tt:()=>$});var p=o(2543),E=o.n(p),m=o(73372),P=o(43269);function T(i){return D(i/1e3)}function D(i){return Math.floor(i/60)}function t(i,_){if(i&&_){const h=T(i.from.valueOf())===T(_.from.valueOf()),b=T(i.to.valueOf())===T(_.to.valueOf());return!(h&&b)}return!1}const A=/[*+?()|\\.\[\]{}^$]/g;function N(i){return i.replace(A,"\\$&")}function C(i){return i.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')}function d(i){return i.replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}function B(i){return C(N(i))}function W(i,_){return F(_)?B(i):C(i)}function F(i){return!!(i&&(i.includes("=~")||i.includes("!~")))}function S(i){const _=["b","kib","Kib","kb","KB","mib","Mib","mb","MB","gib","Gib","gb","GB","tib","Tib","tb","TB","pib","Pib","pb","PB","eib","Eib","eb","EB"],h=new RegExp(`^(?:-?\\d+(?:\\.\\d+)?)(?:${_.join("|")})$`);return!!i.match(h)}function U(i,_,h){if(!_||h===void 0)return null;const b=_.fields.find(y=>y.name==="labelTypes")?.values[h];if(!b)return null;switch(b[i]){case"I":return P.HD.Indexed;case"S":return P.HD.StructuredMetadata;case"P":return P.HD.Parsed;default:return null}}const g={[m.D_.Equal]:"=",[m.D_.NotEqual]:"!=",[m.D_.EqualRegEx]:"=~",[m.D_.NotEqualRegEx]:"!~"},f=(0,p.invert)(g);function $(i){const _=i.labelMatchers.map(h=>{const b=g[h.operator];return b?`${h.name}${b}"${h.value}"`:""}).filter(h=>h!=="").join(", ");return _?`{${_}}`:""}function w(i){const _={};i.forEach(b=>{Object.keys(b).forEach(y=>{_[y]||(_[y]=new Set),_[y].has(b[y])||_[y].add(b[y])})});const h={};return H(Object.keys(_)).forEach(b=>{h[b]=H(Array.from(_[b]))}),{values:h,keys:Object.keys(h)}}const x=1e4;function H(i){return i.slice(0,x)}},11216:(j,M,o)=>{o.d(M,{af:()=>x,VR:()=>H,G3:()=>G,jC:()=>J,fu:()=>B,yD:()=>W,iZ:()=>V,UF:()=>i,OS:()=>h,hh:()=>g,sn:()=>U,EP:()=>f});var p=o(2543),E=o(55127),m=o.n(E),P=o(97535),T=o(71713),D=o(96540),t=o(88323);const A=({onChange:e,index:n,operationId:r,value:a,query:s,datasource:l,queryModeller:c})=>{const[u,v]=(0,D.useState)({});return D.createElement(t.l6,{inputId:h(r,n),autoFocus:a==="",openMenuOnFocus:!0,onOpenMenu:async()=>{v({isLoading:!0});const R=await N(s,l,c);v({options:R,isLoading:void 0})},isLoading:u.isLoading,allowCustomValue:!0,noOptionsMessage:"No labels found",loadingMessage:"Loading labels",options:u.options,value:C(a),onChange:R=>e(n,R.value)})};async function N(e,n,r){let a=e.labels;const s=r.renderLabels(a),l=await n.languageProvider.fetchSeriesLabels(s);return Object.keys(l).map(c=>({label:c,value:c}))}const C=e=>({label:e?.toString(),value:e});var d=o(54623);function B(e,n){const r=[_()],a=["$__auto"];let s;return e===d.EF.QuantileOverTime&&(a.push("0.95"),r.push({name:"Quantile",type:"number"})),n&&(r.push({name:"By label",type:"string",restParam:!0,optional:!0}),s=b(`__${e}_by`)),{id:e,name:K(e),params:r,defaultParams:a,alternativesKey:"range function",category:d.Ln.RangeFunctions,orderRank:d.h5.RangeVectorFunction,renderer:S,addOperationHandler:x,paramChangedHandler:s,explainHandler:(l,c)=>{let u=T.AW.find(v=>v.insertText===l.id)?.documentation??"";return l.params[0]==="$__auto"?`${u} \`$__auto\` is a variable that will be replaced with the [value of step](https://grafana.com/docs/grafana/next/datasources/loki/query-editor/#options) for range queries and with the value of the selected time range (calculated to - from) for instant queries.`:`${u} The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to \`${l.params[0]}\`.`}}}function W(e){const n=B(e,!0),r=n.params.slice(0,-1);return[n,{id:`__${e}_by`,name:`${K(e)} by`,params:[...r,{name:"Label",type:"string",restParam:!0,optional:!0,editor:A}],defaultParams:[...n.defaultParams,""],alternativesKey:"range function with grouping",category:d.Ln.RangeFunctions,renderer:F(e,"by"),paramChangedHandler:O(e),explainHandler:y(e,"by"),addOperationHandler:x,hideFromList:!0},{id:`__${e}_without`,name:`${K(e)} without`,params:[...r,{name:"Label",type:"string",restParam:!0,optional:!0,editor:A}],defaultParams:[...n.defaultParams,""],alternativesKey:"range function with grouping",category:d.Ln.RangeFunctions,renderer:F(e,"without"),paramChangedHandler:O(e),explainHandler:y(e,"without"),addOperationHandler:x,hideFromList:!0}]}function F(e,n){return function(a,s,l){const c=s.params.findIndex(R=>R.restParam),u=a.params.slice(0,c),v=a.params.slice(c);return u.length===2&&e===d.EF.QuantileOverTime?`${e}(${u[1]}, ${l} [${u[0]}]) ${n} (${v.join(", ")})`:`${e}(${l} [${u[0]}]) ${n} (${v.join(", ")})`}}function S(e,n,r){const a=e.params??[],s=a[0]??"$__auto";if(a.length===2&&e.id===d.EF.QuantileOverTime){const l=a[1];return`${e.id}(${l}, ${r} [${s}])`}return`${e.id}(${r} [${a[0]??"$__auto"}])`}function U(e,n,r){return["<","<=",">",">="].includes(String(e.params[1]))?`${r} | ${e.params[0]} ${e.params[1]} ${e.params[2]}`:`${r} | ${e.params[0]} ${e.params[1]} \`${e.params[2]}\``}function g(e,n){if(!e)return!1;const r=e.params[1].toString().startsWith("!");return n.filter(l=>l.id===d.EF.LabelFilter&&l.params[0]===e.params[0]&&l.params[2]===e.params[2]).some(l=>!!(r&&l.params[1].toString().startsWith("!")===!1||r===!1&&l.params[1].toString().startsWith("!")))}function f(e,n,r){switch(e.id){case d.EF.Logfmt:const[a=!1,s=!1,...l]=e.params;return`${r} | logfmt${a?" --strict":""}${s?" --keep-empty":""} ${l.filter(c=>c).join(", ")}`.trim();case d.EF.Json:return`${r} | json ${e.params.filter(c=>c).join(", ")}`.trim();case d.EF.Drop:return`${r} | drop ${e.params.filter(c=>c).join(", ")}`.trim();case d.EF.Keep:return`${r} | keep ${e.params.filter(c=>c).join(", ")}`.trim();default:return`${r} | ${e.id}`}}function $(e){return e.category===d.Ln.RangeFunctions}function w(e,n,r){const a=e.findIndex(s=>{const l=n.getOperationDefinition(s.id);return l?r(l):!1});return a===-1?e.length:a}function x(e,n,r){const a={id:e.id,params:e.defaultParams},s=[...n.operations],l=s.find(c=>{const u=r.getOperationDefinition(c.id);return u?$(u):!1});switch(e.category){case d.Ln.Aggregations:case d.Ln.Functions:if(!l){const u=w(s,r,v=>v.category===d.Ln.Functions);s.splice(u,0,{id:d.EF.Rate,params:["$__auto"]})}s.push(a);break;case d.Ln.RangeFunctions:if(l){const u=s.indexOf(l);s[u]=a;break}default:const c=w(s,r,u=>(e.orderRank??100)<(u.orderRank??100));s.splice(c,0,a);break}return{...n,operations:s}}function H(e,n){return{...n,binaryQueries:[...n.binaryQueries??[],{operator:"/",query:n}]}}function i(e,n){return function(a,s,l){const c=a.params.some(R=>typeof R=="string"&&R.includes("`")),u=c?'"':"`";let v;return c?v=a.params.map(R=>typeof R=="string"?(0,P.Qn)(R):R):v=a.params,n?`${l} ${e} ${u}(?i)${v.join(`${u} or ${u}(?i)`)}${u}`:`${l} ${e} ${u}${v.join(`${u} or ${u}`)}${u}`}}function _(){return{name:"Range",type:"string",options:["$__auto","1m","5m","10m","1h","24h"]}}function h(e,n){return`operations.${e}.param.${n}`}function b(e){return function(r,a,s){return a.params.length===s.params.length?{...a,id:e}:a}}function y(e,n){return function(a){const s=a.params.map(c=>`\`${c}\``).join(" and "),l=m()("label",a.params.length);switch(n){case"by":return`Calculates ${e} over dimensions while preserving ${l} ${s}.`;case"without":return`Calculates ${e} over the dimensions ${s}. All other labels are preserved.`;default:return`Calculates ${e} over the dimensions.`}}}function O(e){return function(r,a,s){return a.params.length<s.params.length?{...a,id:e}:a}}function K(e){return(0,p.capitalize)(e.replace(/_/g," "))}function V(e,n){const r={id:e.id,params:e.defaultParams};return{...n,operations:[...n.operations,r]}}function G(e,n={}){return[{id:e,name:K(e),params:[{name:"By label",type:"string",restParam:!0,optional:!0}],defaultParams:[],alternativesKey:"plain aggregations",category:d.Ln.Aggregations,renderer:Y,paramChangedHandler:b(`__${e}_by`),explainHandler:y(e,""),addOperationHandler:V,...n},{id:`__${e}_by`,name:`${K(e)} by`,params:[{name:"Label",type:"string",restParam:!0,optional:!0,editor:A}],defaultParams:[""],alternativesKey:"aggregations by",category:d.Ln.Aggregations,renderer:q(e),paramChangedHandler:O(e),explainHandler:y(e,"by"),addOperationHandler:V,hideFromList:!0,...n},{id:`__${e}_without`,name:`${K(e)} without`,params:[{name:"Label",type:"string",restParam:!0,optional:!0,editor:A}],defaultParams:[""],alternativesKey:"aggregations by",category:d.Ln.Aggregations,renderer:z(e),paramChangedHandler:O(e),explainHandler:y(e,"without"),addOperationHandler:V,hideFromList:!0,...n}]}function z(e){return function(r,a,s){return`${e} without(${r.params.join(", ")}) (${s})`}}function Y(e,n,r){const a=Q(e,n,r),s=e.id+"(";return r&&a.push(r),s+a.join(", ")+")"}function Q(e,n,r){return(e.params??[]).map((a,s)=>n.params[s].type==="string"?'"'+a+'"':a)}function q(e){return function(r,a,s){return`${e} by(${r.params.join(", ")}) (${s})`}}function J(e,n,r={}){const a=G(e,r);return a[0].params.unshift(...n.params),a[1].params.unshift(...n.params),a[2].params.unshift(...n.params),a[0].defaultParams=n.defaultParams,a[1].defaultParams=[...n.defaultParams,""],a[2].defaultParams=[...n.defaultParams,""],a[1].renderer=L(e),a[2].renderer=L(e),a}function L(e){return function(r,a,s){const l=a.params.findIndex(v=>v.restParam),c=r.params.slice(0,l),u=r.params.slice(l);return`${e} by(${u.join(", ")}) (${c.map((v,R)=>a.params[R].type==="string"?`"${v}"`:v).join(", ")}, ${s})`}}},54623:(j,M,o)=>{o.d(M,{EF:()=>P,IQ:()=>E,Ln:()=>m,NS:()=>D,h5:()=>T});var p=o(42952),E=(t=>(t.Log="log",t.Metric="metric",t))(E||{}),m=(t=>(t.Aggregations="Aggregations",t.RangeFunctions="Range functions",t.Functions="Functions",t.Formats="Formats",t.LineFilters="Line filters",t.LabelFilters="Label filters",t[t.BinaryOps=p.T]="BinaryOps",t))(m||{}),P=(t=>(t.Json="json",t.Logfmt="logfmt",t.Regexp="regexp",t.Pattern="pattern",t.Unpack="unpack",t.LineFormat="line_format",t.LabelFormat="label_format",t.Decolorize="decolorize",t.Drop="drop",t.Keep="keep",t.Rate="rate",t.RateCounter="rate_counter",t.CountOverTime="count_over_time",t.SumOverTime="sum_over_time",t.AvgOverTime="avg_over_time",t.MaxOverTime="max_over_time",t.MinOverTime="min_over_time",t.FirstOverTime="first_over_time",t.LastOverTime="last_over_time",t.StdvarOverTime="stdvar_over_time",t.StddevOverTime="stddev_over_time",t.QuantileOverTime="quantile_over_time",t.BytesRate="bytes_rate",t.BytesOverTime="bytes_over_time",t.AbsentOverTime="absent_over_time",t.Sum="sum",t.Avg="avg",t.Min="min",t.Max="max",t.Stddev="stddev",t.Stdvar="stdvar",t.Count="count",t.TopK="topk",t.BottomK="bottomk",t.LineContains="__line_contains",t.LineContainsNot="__line_contains_not",t.LineContainsCaseInsensitive="__line_contains_case_insensitive",t.LineContainsNotCaseInsensitive="__line_contains_not_case_insensitive",t.LineMatchesRegex="__line_matches_regex",t.LineMatchesRegexNot="__line_matches_regex_not",t.LineFilterIpMatches="__line_filter_ip_matches",t.LabelFilter="__label_filter",t.LabelFilterNoErrors="__label_filter_no_errors",t.LabelFilterIpMatches="__label_filter_ip_marches",t.Unwrap="unwrap",t.SumBy="__sum_by",t.SumWithout="__sum_without",t.Addition="__addition",t.Subtraction="__subtraction",t.MultiplyBy="__multiply_by",t.DivideBy="__divide_by",t.Modulo="__modulo",t.Exponent="__exponent",t.NestedQuery="__nested_query",t.EqualTo="__equal_to",t.NotEqualTo="__not_equal_to",t.GreaterThan="__greater_than",t.LessThan="__less_than",t.GreaterOrEqual="__greater_or_equal",t.LessOrEqual="__less_or_equal",t))(P||{}),T=(t=>(t[t.LineFilters=1]="LineFilters",t[t.Parsers=2]="Parsers",t[t.PipeOperations=3]="PipeOperations",t[t.Unwrap=4]="Unwrap",t[t.NoErrors=5]="NoErrors",t[t.RangeVectorFunction=5]="RangeVectorFunction",t[t.Last=6]="Last",t))(T||{});const D={equals:{label:"=",value:"=",description:"Equals",isMultiValue:!1},doesNotEqual:{label:"!=",value:"!=",description:"Does not equal",isMultiValue:!1},matchesRegex:{label:"=~",value:"=~",description:"Matches regex",isMultiValue:!0},doesNotMatchRegex:{label:"!~",value:"!~",description:"Does not match regex",isMultiValue:!0},greaterThan:{label:">",value:">",description:"Greater than",isMultiValue:!1},greaterThanOrEqual:{label:">=",value:">=",description:"Greater than or equal to",isMultiValue:!1},lessThan:{label:"<",value:"<",description:"Less than",isMultiValue:!1},lessThanOrEqual:{label:"<=",value:"<=",description:"Less than or equal to",isMultiValue:!1},contains:{label:"|=",value:"|=",description:"Contains",isMultiValue:!1},doesNotContain:{label:"!=",value:"!=",description:"Does not contain",isMultiValue:!1}}}}]);

//# sourceMappingURL=629.947f07a37203fe9016ff.js.map