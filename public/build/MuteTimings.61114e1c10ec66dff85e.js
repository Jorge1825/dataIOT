"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4501,1488],{39349:(J,D,t)=>{t.r(D),t.d(D,{default:()=>ba,useMuteTimingNavData:()=>ta});var a=t(96540),S=t(58476),P=t(42418),M=t(83277),k=t(37959),p=t(32196),b=t(49785),I=t(40845),U=t(39558),A=t(84167),E=t(88575),r=t(10354),d=t(55852),B=t(31678),C=t(51488),R=t(70383),V=t(23770),w=t(98164),O=t(57220),H=t(56361),h=t(54486),j=t(48205),F=t(2543),G=t(67061),Q=t(14578),na=t(15292),ra=t(39268),X=t(14186),oa=t(29158),sa=t(56034),ca=t(23896),x=t(4724);const q="Times must be between 00:00 and 24:00 UTC",ma=({intervalIndex:e})=>{const n=(0,I.of)(la),{register:i,formState:o,getValues:l,watch:v}=(0,b.xW)(),g=v(`time_intervals.${e}.disable`),{fields:f,append:c,remove:s}=(0,b.jz)({name:`time_intervals.${e}.times`}),m=o.errors.time_intervals?.[e],u=m?.times?.some?.(y=>y?.start_time||y?.end_time)??!1;return a.createElement("div",null,a.createElement(E.D,{className:n.field,label:"Time range",description:"The time inclusive of the start and exclusive of the end time (in UTC if no location has been selected, otherwise local time)",invalid:u},a.createElement(a.Fragment,null,f.map((y,T)=>{const L=m?.times?.[T],W=`time_intervals.${e}.times.${T}.start_time`,Z=`time_intervals.${e}.times.${T}.end_time`,K=()=>{const _=l(W),$=l(Z);return[_,$]};return a.createElement("div",{className:n.timeRange,key:y.id},a.createElement(ra.C,null,a.createElement(X.I,{label:"Start time",invalid:!!L?.start_time,error:L?.start_time?.message},a.createElement(r.p,{...i(W,{validate:_=>{if(!(0,x.Hy)(_))return q;const[N,z]=K();if(!(0,x.oB)(N,z))return"Start time must be before end time"}}),className:n.timeRangeInput,maxLength:5,readOnly:g,suffix:a.createElement(Q.I,{name:"clock-nine"}),defaultValue:y.start_time,placeholder:"HH:mm","data-testid":"mute-timing-starts-at"})),a.createElement(X.I,{label:"End time",invalid:!!L?.end_time,error:L?.end_time?.message},a.createElement(r.p,{...i(`time_intervals.${e}.times.${T}.end_time`,{validate:_=>{if(!(0,x.Hy)(_))return q;const[N,z]=K();if(!(0,x.oB)(N,z))return"End time must be after start time"}}),className:n.timeRangeInput,maxLength:5,readOnly:g,suffix:a.createElement(Q.I,{name:"clock-nine"}),defaultValue:y.end_time,placeholder:"HH:mm","data-testid":"mute-timing-ends-at"})),a.createElement(oa.K,{className:n.deleteTimeRange,title:"Remove",name:"trash-alt",onClick:_=>{_.preventDefault(),s(T)},tooltip:"Remove time range"})))}))),a.createElement(ca.A,{shouldWrap:g,wrap:y=>a.createElement(sa.m,{content:"This time interval is disabled",placement:"right-start"},y)},a.createElement(d.$n,{className:n.addTimeRange,variant:"secondary",type:"button",icon:"plus",disabled:g,onClick:()=>c({start_time:"",end_time:""})},"Add another time range")))},la=e=>({field:(0,p.css)`
    margin-bottom: 0;
  `,timeRange:(0,p.css)`
    margin-bottom: ${e.spacing(1)};
  `,timeRangeInput:(0,p.css)`
    width: 90px;
  `,deleteTimeRange:(0,p.css)`
    margin: ${e.spacing(1)} 0 0 ${e.spacing(.5)};
  `,addTimeRange:(0,p.css)`
    margin-bottom: ${e.spacing(2)};
  `});var ua=t(88323);const Aa=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Ciudad_Juarez","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/South_Pole","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","GMT","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Local","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","UTC"],da=e=>{const n=Aa.map(i=>({label:i,value:i}));return a.createElement(ua.l6,{...e,options:n})},ga=()=>{const e=(0,I.of)(aa),{formState:n,register:i,setValue:o}=(0,b.xW)(),{fields:l,append:v,remove:g}=(0,b.jz)({name:"time_intervals"}),{isGrafanaAlertmanager:f}=(0,R.VI)();return a.createElement(A.n,{label:"Time intervals"},a.createElement(a.Fragment,null,a.createElement("p",null,"A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."),a.createElement(G.B,{direction:"column",gap:2},l.map((c,s)=>{const m=n.errors;return i(`time_intervals.${s}.location`),a.createElement("div",{key:c.id,className:e.timeIntervalSection},a.createElement(ma,{intervalIndex:s}),a.createElement(E.D,{label:"Location",invalid:!!m.time_intervals?.[s]?.location,error:m.time_intervals?.[s]?.location?.message},a.createElement(da,{prefix:a.createElement(Q.I,{name:"map-marker"}),width:50,onChange:u=>{o(`time_intervals.${s}.location`,u.value)},defaultValue:{label:c.location,value:c.location},"data-testid":"mute-timing-location"})),a.createElement(E.D,{label:"Days of the week"},a.createElement(ha,{onChange:u=>{o(`time_intervals.${s}.weekdays`,u)},defaultValue:c.weekdays})),a.createElement(E.D,{label:"Days of the month",description:"The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",invalid:!!m.time_intervals?.[s]?.days_of_month,error:m.time_intervals?.[s]?.days_of_month?.message},a.createElement(r.p,{...i(`time_intervals.${s}.days_of_month`,{validate:u=>(0,h.Ww)(u,y=>{const T=parseInt(y,10);return T>-31&&T<0||T>0&&T<32},"Invalid day")}),width:50,defaultValue:c.days_of_month,placeholder:"Example: 1, 14:16, -1","data-testid":"mute-timing-days"})),a.createElement(E.D,{label:"Months",description:"The months of the year in either numerical or the full calendar month",invalid:!!m.time_intervals?.[s]?.months,error:m.time_intervals?.[s]?.months?.message},a.createElement(r.p,{...i(`time_intervals.${s}.months`,{validate:u=>(0,h.Ww)(u,y=>h.KR.includes(y)||parseInt(y,10)<13&&parseInt(y,10)>0,"Invalid month")}),width:50,placeholder:"Example: 1:3, may:august, december",defaultValue:c.months,"data-testid":"mute-timing-months"})),a.createElement(E.D,{label:"Years",invalid:!!m.time_intervals?.[s]?.years,error:m.time_intervals?.[s]?.years?.message??""},a.createElement(r.p,{...i(`time_intervals.${s}.years`,{validate:u=>(0,h.Ww)(u,y=>/^\d{4}$/.test(y),"Invalid year")}),width:50,placeholder:"Example: 2021:2022, 2030",defaultValue:c.years,"data-testid":"mute-timing-years"})),a.createElement(G.B,{direction:"row",gap:2},a.createElement(d.$n,{type:"button",variant:"destructive",fill:"outline",icon:"trash-alt",onClick:()=>g(s)},"Remove time interval"),!f&&a.createElement(na.K,{id:`time_intervals.${s}.disable`,label:"Disable",showLabel:!0,transparent:!0,...i(`time_intervals.${s}.disable`)})))})),a.createElement(d.$n,{type:"button",variant:"secondary",className:e.removeTimeIntervalButton,onClick:()=>{v(h.oU)},icon:"plus"},"Add another time interval")))},fa=e=>{const n=e.split(",").map(i=>i.trim()).flatMap(i=>i.includes(":")?pa(i):i).map(i=>i.toLowerCase()).filter(i=>h.jU.includes(i));return(0,F.uniq)(n)};function pa(e){const[n="",i=""]=e.split(":"),o=h.jU.indexOf(n),l=h.jU.indexOf(i);return h.jU.slice(o,l+1)}const ha=({defaultValue:e="",onChange:n})=>{const i=(0,I.of)(aa),o=fa(e),[l,v]=(0,a.useState)(o),g=f=>{l.includes(f)?v(c=>(0,F.without)(c,f)):v(c=>(0,F.concat)(c,f))};return(0,a.useEffect)(()=>{n(l.join(", "))},[l,n]),a.createElement("div",{"data-testid":"mute-timing-weekdays"},a.createElement(G.B,{gap:1},h.jU.map(f=>{const c=(0,p.cx)(i.dayOfTheWeek,l.includes(f)&&"selected"),s=f.slice(0,3);return a.createElement("button",{type:"button",key:f,className:c,onClick:()=>g(f)},(0,F.upperFirst)(s))})))},aa=e=>({input:(0,p.css)`
    width: 400px;
  `,timeIntervalSection:(0,p.css)`
    background-color: ${e.colors.background.secondary};
    padding: ${e.spacing(2)};
  `,removeTimeIntervalButton:(0,p.css)`
    margin-top: ${e.spacing(2)};
  `,dayOfTheWeek:(0,p.css)`
    cursor: pointer;
    user-select: none;
    padding: ${e.spacing(1)} ${e.spacing(3)};

    border: solid 1px ${e.colors.border.medium};
    background: none;
    border-radius: ${e.shape.radius.default};

    color: ${e.colors.text.secondary};

    &.selected {
      font-weight: ${e.typography.fontWeightBold};
      color: ${e.colors.primary.text};
      border-color: ${e.colors.primary.border};
      background: ${e.colors.primary.transparent};
    }
  `}),Ea=e=>{const n={name:"",time_intervals:[h.oU]};if(!e)return n;const i=e.time_intervals.map(o=>({times:o.times,weekdays:o.weekdays?.join(", "),days_of_month:o.days_of_month?.join(", "),months:o.months?.join(", "),years:o.years?.join(", "),location:o.location??h.oU.location,disable:(0,h.jb)(o)}));return{name:e.name,time_intervals:i}},Y=(e,n,i,o)=>{const l=n?e?.filter(({name:v})=>v!==n.name):e;return o?[...l,i]:[...l]},va=({fromLegacyTimeInterval:e,fromTimeIntervals:n,showError:i,loading:o,provenance:l})=>{const v=(0,B.useDispatch)(),{selectedAlertmanager:g}=(0,R.VI)(),f=(0,I.of)(Ta),[c,s]=(0,a.useState)(!1),{currentData:m}=(0,C.f)(g),u=m?.alertmanager_config,T=!!n?n:e,L=u?.mute_time_intervals??[],W=u?.time_intervals??[],Z=Ea(T),K=(0,b.mN)({defaultValues:Z}),_=$=>{if(!m)return;const N=(0,h.iF)($),z=g===O.hY,ia=n===void 0&&e===void 0,Sa=z?{mute_time_intervals:[...Y(W,n,N,!1),...Y(L,e,N,!0)]}:{time_intervals:Y(W,n,N,!!n||ia),mute_time_intervals:e&&!ia?Y(L,e,N,!0):void 0},{mute_time_intervals:ka,time_intervals:Na,...Ba}=u??{},Ca={...m,alertmanager_config:{...Ba,route:T&&N.name!==T.name?(0,w.Lt)(N.name,T.name,u?.route??{}):u?.route,...Sa}},Da=v((0,V.RW)({newConfig:Ca,oldConfig:m,alertManagerSourceName:g,successMessage:"Mute timing saved",redirectPath:"/alerting/routes/",redirectSearch:"tab=mute_timings"}));s(!0),Da.unwrap().finally(()=>{s(!1)})};return a.createElement(a.Fragment,null,l&&a.createElement(j.Yi,{resource:j.hk.MuteTiming}),o&&a.createElement(U._,{text:"Loading mute timing"}),i&&a.createElement(P.F,{title:"No matching mute timing found"}),m&&!o&&!i&&a.createElement(b.Op,{...K},a.createElement("form",{onSubmit:K.handleSubmit(_),"data-testid":"mute-timing-form"},a.createElement(A.n,{label:"Create mute timing",disabled:!!l||c},a.createElement(E.D,{required:!0,label:"Name",description:"A unique name for the mute timing",invalid:!!K.formState.errors?.name,error:K.formState.errors.name?.message},a.createElement(r.p,{...K.register("name",{required:!0,validate:$=>ya($,T,L,W)}),className:f.input,"data-testid":"mute-timing-name"})),a.createElement(ga,null),a.createElement(d.$n,{type:"submit",className:f.submitButton,disabled:c},"Save mute timing"),a.createElement(d.z9,{type:"button",variant:"secondary",fill:"outline",href:(0,H.nL)("/alerting/routes/",g,{tab:"mute_timings"}),disabled:c},"Cancel")))))};function ya(e,n,i,o){if(!n){const l=i?.find(({name:g})=>e===g),v=o?.find(({name:g})=>e===g);return l||v?`Mute timing already exists for "${e}"`:!0}}const Ta=e=>({input:(0,p.css)`
    width: 400px;
  `,submitButton:(0,p.css)`
    margin-right: ${e.spacing(1)};
  `}),ea=va,Pa=()=>{const[e]=(0,M.s)(),{selectedAlertmanager:n}=(0,R.VI)(),{currentData:i,isLoading:o,error:l}=(0,C.f)(n,{refetchOnFocus:!0,refetchOnReconnect:!0}),v=i?.alertmanager_config,g=(0,a.useCallback)((f,c)=>{const m=(c?v?.time_intervals??[]:v?.mute_time_intervals??[]).find(({name:u})=>u===f);if(m){const u=v?.muteTimeProvenances?.[m.name];return{...m,provenance:u}}return m},[v]);return a.createElement(a.Fragment,null,l&&!o&&!i&&a.createElement(P.F,{severity:"error",title:`Error loading Alertmanager config for ${n}`},l.message||"Unknown error."),i&&!l&&a.createElement(S.dO,null,a.createElement(S.qh,{exact:!0,path:"/alerting/routes/mute-timing/new"},a.createElement(ea,{loading:o})),a.createElement(S.qh,{exact:!0,path:"/alerting/routes/mute-timing/edit"},()=>{if(e.muteName){const f=g(String(e.muteName),!1),c=g(String(e.muteName),!0),m=!!c?c:f,u=m?.provenance;return a.createElement(ea,{loading:o,fromLegacyTimeInterval:f,fromTimeIntervals:c,showError:!m&&!o,provenance:u})}return a.createElement(S.rd,{to:"/alerting/routes"})})))},Ma=()=>{const e=ta();return a.createElement(k.y,{navId:"am-routes",pageNav:e,accessType:"notification"},a.createElement(Pa,null))};function ta(){const{isExact:e,path:n}=(0,S.W5)(),[i,o]=(0,a.useState)();return(0,a.useEffect)(()=>{n==="/alerting/routes/mute-timing/new"?o({id:"alert-policy-new",text:"Add mute timing"}):n==="/alerting/routes/mute-timing/edit"&&o({id:"alert-policy-edit",text:"Edit mute timing"})},[n,e]),i}const ba=Ma},23896:(J,D,t)=>{t.d(D,{A:()=>P});var a=t(96540);function S({children:M,shouldWrap:k,wrap:p},b){return k?a.cloneElement(p(M)):M}const P=(0,a.forwardRef)(S)},4724:(J,D,t)=>{t.d(D,{Hy:()=>p,IT:()=>b,av:()=>U,oB:()=>I});var a=t(95093),S=t.n(a),P=t(96540),M=t(98164);const k=/^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)/,p=A=>A?k.test(A):!0,b=A=>[...A.mute_time_intervals??[],...A.time_intervals??[]],I=(A,E)=>{if(!A&&!E)return!0;if(!A&&E||A&&!E)return!1;const r="HH:mm",d=S()().startOf("day").add(A,r),B=S()().startOf("day").add(E,r);return!!(A&&E&&d.isBefore(B)||A&&E&&B.isAfter(d))};function U(A){return A.time_intervals.map((r,d)=>{const{times:B,weekdays:C,days_of_month:R,months:V,years:w,location:O}=r,H=(0,M.Dm)(B,O),h=(0,M.uH)(C),j=(0,M.UL)(R),F=(0,M.$P)(V),G=(0,M.mP)(w);return P.createElement(P.Fragment,{key:JSON.stringify(r)+d},`${H} ${h}`,P.createElement("br",null),[j,F,G].join(" | "),P.createElement("br",null))})}},51488:(J,D,t)=>{t.d(D,{f:()=>S});var a=t(82843);function S(P,M){const k=a.m.endpoints.getAlertmanagerConfiguration.useQuery(P??"",{...M,skip:!P});return{...k,error:k.error}}},54486:(J,D,t)=>{t.d(D,{KR:()=>M,Ww:()=>p,d6:()=>E,iF:()=>I,jU:()=>P,jb:()=>A,oU:()=>k});var a=t(2543),S=t.n(a);const P=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],M=["january","february","march","april","may","june","july","august","september","october","november","december"],k={times:[{start_time:"",end_time:""}],weekdays:"",days_of_month:"",months:"",years:"",location:"",disable:!1},p=(r,d,B)=>r?r.split(",").map(C=>C.trim()).every(C=>C.split(":").every(d))||B:!0,b=r=>r?r.split(",").map(d=>d.trim()):void 0,I=r=>{const d=r.time_intervals.map(({times:B,weekdays:C,days_of_month:R,months:V,years:w,location:O,disable:H})=>{const h={times:U(B,H),weekdays:b(C)?.map(j=>j.toLowerCase()),days_of_month:b(R),months:b(V),years:b(w),location:O||void 0};return(0,a.omitBy)(h,a.isUndefined)});return{name:r.name,time_intervals:d}};function U(r,d){if(d)return[];const B=r?.filter(({start_time:C,end_time:R})=>!!C&&!!R);return B?.length?B:void 0}function A(r){return r.times?.length===0||r.weekdays?.length===0||r.days_of_month?.length===0||r.months?.length===0||r.years?.length===0}function E(r){return r.time_intervals.every(d=>A(d))}}}]);

//# sourceMappingURL=MuteTimings.61114e1c10ec66dff85e.js.map