(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6464],{6464:()=>{ace.define("ace/snippets",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/anchor","ace/keyboard/hash_handler","ace/tokenizer","ace/lib/dom","ace/editor"],function(b,y,H){"use strict";var L=b("./lib/oop"),S=b("./lib/event_emitter").EventEmitter,R=b("./lib/lang"),C=b("./range").Range,T=b("./anchor").Anchor,x=b("./keyboard/hash_handler").HashHandler,$=b("./tokenizer").Tokenizer,k=C.comparePoints,w=function(){this.snippetMap={},this.snippetNameMap={}};(function(){L.implement(this,S),this.getTokenizer=function(){function t(n,s,r){return n=n.substr(1),/^\d+$/.test(n)&&!r.inFormatString?[{tabstopId:parseInt(n,10)}]:[{text:n}]}function e(n){return"(?:[^\\\\"+n+"]|\\\\.)"}return w.$tokenizer=new $({start:[{regex:/:/,onMatch:function(n,s,r){return r.length&&r[0].expectIf?(r[0].expectIf=!1,r[0].elseBranch=r[0],[r[0]]):":"}},{regex:/\\./,onMatch:function(n,s,r){var a=n[1];return a=="}"&&r.length||"`$\\".indexOf(a)!=-1?n=a:r.inFormatString&&(a=="n"||a=="t"?n=`
`:"ulULE".indexOf(a)!=-1&&(n={changeCase:a,local:a>"a"})),[n]}},{regex:/}/,onMatch:function(n,s,r){return[r.length?r.shift():n]}},{regex:/\$(?:\d+|\w+)/,onMatch:t},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(n,s,r){var a=t(n.substr(1),s,r);return r.unshift(a[0]),a},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+e("\\|")+"*\\|",onMatch:function(n,s,r){r[0].choices=n.slice(1,-1).split(",")},next:"start"},{regex:"/("+e("/")+"+)/(?:("+e("/")+"*)/)(\\w*):?",onMatch:function(n,s,r){var a=r[0];return a.fmtString=n,n=this.splitRegex.exec(n),a.guard=n[1],a.fmt=n[2],a.flag=n[3],""},next:"start"},{regex:"`"+e("`")+"*`",onMatch:function(n,s,r){return r[0].code=n.splice(1,-1),""},next:"start"},{regex:"\\?",onMatch:function(n,s,r){r[0]&&(r[0].expectIf=!0)},next:"start"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:"/("+e("/")+"+)/",token:"regex"},{regex:"",onMatch:function(n,s,r){r.inFormatString=!0},next:"start"}]}),w.prototype.getTokenizer=function(){return w.$tokenizer},w.$tokenizer},this.tokenizeTmSnippet=function(t,e){return this.getTokenizer().getLineTokens(t,e).tokens.map(function(n){return n.value||n})},this.$getDefaultValue=function(t,e){if(/^[A-Z]\d+$/.test(e)){var n=e.substr(1);return(this.variables[e[0]+"__"]||{})[n]}if(/^\d+$/.test(e))return(this.variables.__||{})[e];if(e=e.replace(/^TM_/,""),!!t){var s=t.session;switch(e){case"CURRENT_WORD":var r=s.getWordRange();case"SELECTION":case"SELECTED_TEXT":return s.getTextRange(r);case"CURRENT_LINE":return s.getLine(t.getCursorPosition().row);case"PREV_LINE":return s.getLine(t.getCursorPosition().row-1);case"LINE_INDEX":return t.getCursorPosition().column;case"LINE_NUMBER":return t.getCursorPosition().row+1;case"SOFT_TABS":return s.getUseSoftTabs()?"YES":"NO";case"TAB_SIZE":return s.getTabSize();case"FILENAME":case"FILEPATH":return"";case"FULLNAME":return"Ace"}}},this.variables={},this.getVariableValue=function(t,e){return this.variables.hasOwnProperty(e)?this.variables[e](t,e)||"":this.$getDefaultValue(t,e)||""},this.tmStrFormat=function(t,e,n){var s=e.flag||"",r=e.guard;r=new RegExp(r,s.replace(/[^gi]/,""));var a=this.tokenizeTmSnippet(e.fmt,"formatString"),c=this,h=t.replace(r,function(){c.variables.__=arguments;for(var l=c.resolveVariables(a,n),f="E",d=0;d<l.length;d++){var v=l[d];if(typeof v=="object")if(l[d]="",v.changeCase&&v.local){var m=l[d+1];m&&typeof m=="string"&&(v.changeCase=="u"?l[d]=m[0].toUpperCase():l[d]=m[0].toLowerCase(),l[d+1]=m.substr(1))}else v.changeCase&&(f=v.changeCase);else f=="U"?l[d]=v.toUpperCase():f=="L"&&(l[d]=v.toLowerCase())}return l.join("")});return this.variables.__=null,h},this.resolveVariables=function(t,e){for(var n=[],s=0;s<t.length;s++){var r=t[s];if(typeof r=="string")n.push(r);else{if(typeof r!="object")continue;if(r.skip)c(r);else{if(r.processed<s)continue;if(r.text){var a=this.getVariableValue(e,r.text);a&&r.fmtString&&(a=this.tmStrFormat(a,r)),r.processed=s,r.expectIf==null?a&&(n.push(a),c(r)):a?r.skip=r.elseBranch:c(r)}else(r.tabstopId!=null||r.changeCase!=null)&&n.push(r)}}}function c(h){var l=t.indexOf(h,s+1);l!=-1&&(s=l)}return n},this.insertSnippetForSelection=function(t,e){var n=t.getCursorPosition(),s=t.session.getLine(n.row),r=t.session.getTabString(),a=s.match(/^\s*/)[0];n.column<a.length&&(a=a.slice(0,n.column)),e=e.replace(/\r/g,"");var c=this.tokenizeTmSnippet(e);c=this.resolveVariables(c,t),c=c.map(function(M){return M==`
`?M+a:typeof M=="string"?M.replace(/\t/g,r):M});var h=[];c.forEach(function(M,A){if(typeof M=="object"){var P=M.tabstopId,E=h[P];if(E||(E=h[P]=[],E.index=P,E.value=""),E.indexOf(M)===-1){E.push(M);var F=c.indexOf(M,A+1);if(F!==-1){var O=c.slice(A+1,F),K=O.some(function(G){return typeof G=="object"});K&&!E.value?E.value=O:O.length&&(!E.value||typeof E.value!="string")&&(E.value=O.join(""))}}}}),h.forEach(function(M){M.length=0});var l={};function f(M){for(var A=[],P=0;P<M.length;P++){var E=M[P];if(typeof E=="object"){if(l[E.tabstopId])continue;var F=M.lastIndexOf(E,P-1);E=A[F]||{tabstopId:E.tabstopId}}A[P]=E}return A}for(var d=0;d<c.length;d++){var v=c[d];if(typeof v=="object"){var m=v.tabstopId,_=c.indexOf(v,d+1);if(l[m]){l[m]===v&&(l[m]=null);continue}var N=h[m],z=typeof N.value=="string"?[N.value]:f(N.value);z.unshift(d+1,Math.max(0,_-d)),z.push(v),l[m]=v,c.splice.apply(c,z),N.indexOf(v)===-1&&N.push(v)}}var D=0,I=0,B="";c.forEach(function(M){if(typeof M=="string"){var A=M.split(`
`);A.length>1?(I=A[A.length-1].length,D+=A.length-1):I+=M.length,B+=M}else M.start?M.end={row:D,column:I}:M.start={row:D,column:I}});var W=t.getSelectionRange(),V=t.session.replace(W,B),U=new o(t),j=t.inVirtualSelectionMode&&t.selection.index;U.addTabstops(h,W.start,V,j)},this.insertSnippet=function(t,e){var n=this;if(t.inVirtualSelectionMode)return n.insertSnippetForSelection(t,e);t.forEachSelection(function(){n.insertSnippetForSelection(t,e)},null,{keepOrder:!0}),t.tabstopManager&&t.tabstopManager.tabNext()},this.$getScope=function(t){var e=t.session.$mode.$id||"";if(e=e.split("/").pop(),e==="html"||e==="php"){e==="php"&&!t.session.$mode.inlinePhp&&(e="html");var n=t.getCursorPosition(),s=t.session.getState(n.row);typeof s=="object"&&(s=s[0]),s.substring&&(s.substring(0,3)=="js-"?e="javascript":s.substring(0,4)=="css-"?e="css":s.substring(0,4)=="php-"&&(e="php"))}return e},this.getActiveScopes=function(t){var e=this.$getScope(t),n=[e],s=this.snippetMap;return s[e]&&s[e].includeScopes&&n.push.apply(n,s[e].includeScopes),n.push("_"),n},this.expandWithTab=function(t,e){var n=this,s=t.forEachSelection(function(){return n.expandSnippetForSelection(t,e)},null,{keepOrder:!0});return s&&t.tabstopManager&&t.tabstopManager.tabNext(),s},this.expandSnippetForSelection=function(t,e){var n=t.getCursorPosition(),s=t.session.getLine(n.row),r=s.substring(0,n.column),a=s.substr(n.column),c=this.snippetMap,h;return this.getActiveScopes(t).some(function(l){var f=c[l];return f&&(h=this.findMatchingSnippet(f,r,a)),!!h},this),h?(e&&e.dryRun||(t.session.doc.removeInLine(n.row,n.column-h.replaceBefore.length,n.column+h.replaceAfter.length),this.variables.M__=h.matchBefore,this.variables.T__=h.matchAfter,this.insertSnippetForSelection(t,h.content),this.variables.M__=this.variables.T__=null),!0):!1},this.findMatchingSnippet=function(t,e,n){for(var s=t.length;s--;){var r=t[s];if(!(r.startRe&&!r.startRe.test(e))&&!(r.endRe&&!r.endRe.test(n))&&!(!r.startRe&&!r.endRe))return r.matchBefore=r.startRe?r.startRe.exec(e):[""],r.matchAfter=r.endRe?r.endRe.exec(n):[""],r.replaceBefore=r.triggerRe?r.triggerRe.exec(e)[0]:"",r.replaceAfter=r.endTriggerRe?r.endTriggerRe.exec(n)[0]:"",r}},this.snippetMap={},this.snippetNameMap={},this.register=function(t,e){var n=this.snippetMap,s=this.snippetNameMap,r=this;t||(t=[]);function a(l){return l&&!/^\^?\(.*\)\$?$|^\\b$/.test(l)&&(l="(?:"+l+")"),l||""}function c(l,f,d){return l=a(l),f=a(f),d?(l=f+l,l&&l[l.length-1]!="$"&&(l=l+"$")):(l=l+f,l&&l[0]!="^"&&(l="^"+l)),new RegExp(l)}function h(l){l.scope||(l.scope=e||"_"),e=l.scope,n[e]||(n[e]=[],s[e]={});var f=s[e];if(l.name){var d=f[l.name];d&&r.unregister(d),f[l.name]=l}n[e].push(l),l.tabTrigger&&!l.trigger&&(!l.guard&&/^\w/.test(l.tabTrigger)&&(l.guard="\\b"),l.trigger=R.escapeRegExp(l.tabTrigger)),!(!l.trigger&&!l.guard&&!l.endTrigger&&!l.endGuard)&&(l.startRe=c(l.trigger,l.guard,!0),l.triggerRe=new RegExp(l.trigger,"",!0),l.endRe=c(l.endTrigger,l.endGuard,!0),l.endTriggerRe=new RegExp(l.endTrigger,"",!0))}t&&t.content?h(t):Array.isArray(t)&&t.forEach(h),this._signal("registerSnippets",{scope:e})},this.unregister=function(t,e){var n=this.snippetMap,s=this.snippetNameMap;function r(a){var c=s[a.scope||e];if(c&&c[a.name]){delete c[a.name];var h=n[a.scope||e],l=h&&h.indexOf(a);l>=0&&h.splice(l,1)}}t.content?r(t):Array.isArray(t)&&t.forEach(r)},this.parseSnippetFile=function(t){t=t.replace(/\r/g,"");for(var e=[],n={},s=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,r;r=s.exec(t);){if(r[1])try{n=JSON.parse(r[1]),e.push(n)}catch{}if(r[4])n.content=r[4].replace(/^\t/gm,""),e.push(n),n={};else{var a=r[2],c=r[3];if(a=="regex"){var h=/\/((?:[^\/\\]|\\.)*)|$/g;n.guard=h.exec(c)[1],n.trigger=h.exec(c)[1],n.endTrigger=h.exec(c)[1],n.endGuard=h.exec(c)[1]}else a=="snippet"?(n.tabTrigger=c.match(/^\S*/)[0],n.name||(n.name=c)):n[a]=c}}return e},this.getSnippetByName=function(t,e){var n=this.snippetNameMap,s;return this.getActiveScopes(e).some(function(r){var a=n[r];return a&&(s=a[t]),!!s},this),s}}).call(w.prototype);var o=function(t){if(t.tabstopManager)return t.tabstopManager;t.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=R.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(t)};(function(){this.attach=function(t){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=t,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(t){var e=t,n=t.action[0]=="r",s=t.start,r=t.end,a=s.row,c=r.row,h=c-a,l=r.column-s.column;if(n&&(h=-h,l=-l),!this.$inChange&&n){var f=this.selectedTabstop,d=f&&!f.some(function(N){return k(N.start,s)<=0&&k(N.end,r)>=0});if(d)return this.detach()}for(var v=this.ranges,m=0;m<v.length;m++){var _=v[m];if(!(_.end.row<s.row)){if(n&&k(s,_.start)<0&&k(r,_.end)>0){this.removeRange(_),m--;continue}_.start.row==a&&_.start.column>s.column&&(_.start.column+=l),_.end.row==a&&_.end.column>=s.column&&(_.end.column+=l),_.start.row>=a&&(_.start.row+=h),_.end.row>=a&&(_.end.row+=h),k(_.start,_.end)>0&&this.removeRange(_)}}v.length||this.detach()},this.updateLinkedFields=function(){var t=this.selectedTabstop;if(!(!t||!t.hasLinkedRanges)){this.$inChange=!0;for(var e=this.editor.session,n=e.getTextRange(t.firstNonLinked),s=t.length;s--;){var r=t[s];if(r.linked){var a=y.snippetManager.tmStrFormat(n,r.original);e.replace(r,a)}}this.$inChange=!1}},this.onAfterExec=function(t){t.command&&!t.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var t=this.editor.selection.lead,e=this.editor.selection.anchor,n=this.editor.selection.isEmpty(),s=this.ranges.length;s--;)if(!this.ranges[s].linked){var r=this.ranges[s].contains(t.row,t.column),a=n||this.ranges[s].contains(e.row,e.column);if(r&&a)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(t){var e=this.tabstops.length,n=this.index+(t||1);n=Math.min(Math.max(n,1),e),n==e&&(n=0),this.selectTabstop(n),n===0&&this.detach()},this.selectTabstop=function(t){this.$openTabstops=null;var e=this.tabstops[this.index];if(e&&this.addTabstopMarkers(e),this.index=t,e=this.tabstops[this.index],!(!e||!e.length)){if(this.selectedTabstop=e,this.editor.inVirtualSelectionMode)this.editor.selection.setRange(e.firstNonLinked);else{var n=this.editor.multiSelect;n.toSingleRange(e.firstNonLinked.clone());for(var s=e.length;s--;)e.hasLinkedRanges&&e[s].linked||n.addRange(e[s].clone(),!0);n.ranges[0]&&n.addRange(n.ranges[0].clone())}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)}},this.addTabstops=function(t,e,n){if(this.$openTabstops||(this.$openTabstops=[]),!t[0]){var s=C.fromPoints(n,n);p(s.start,e),p(s.end,e),t[0]=[s],t[0].index=0}var r=this.index,a=[r+1,0],c=this.ranges;t.forEach(function(h,l){for(var f=this.$openTabstops[l]||h,d=h.length;d--;){var v=h[d],m=C.fromPoints(v.start,v.end||v.start);u(m.start,e),u(m.end,e),m.original=v,m.tabstop=f,c.push(m),f!=h?f.unshift(m):f[d]=m,v.fmtString?(m.linked=!0,f.hasLinkedRanges=!0):f.firstNonLinked||(f.firstNonLinked=m)}f.firstNonLinked||(f.hasLinkedRanges=!1),f===h&&(a.push(f),this.$openTabstops[l]=f),this.addTabstopMarkers(f)},this),a.length>2&&(this.tabstops.length&&a.push(a.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,a))},this.addTabstopMarkers=function(t){var e=this.editor.session;t.forEach(function(n){n.markerId||(n.markerId=e.addMarker(n,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(t){var e=this.editor.session;t.forEach(function(n){e.removeMarker(n.markerId),n.markerId=null})},this.removeRange=function(t){var e=t.tabstop.indexOf(t);t.tabstop.splice(e,1),e=this.ranges.indexOf(t),this.ranges.splice(e,1),this.editor.session.removeMarker(t.markerId),t.tabstop.length||(e=this.tabstops.indexOf(t.tabstop),e!=-1&&this.tabstops.splice(e,1),this.tabstops.length||this.detach())},this.keyboardHandler=new x,this.keyboardHandler.bindKeys({Tab:function(t){y.snippetManager&&y.snippetManager.expandWithTab(t)||t.tabstopManager.tabNext(1)},"Shift-Tab":function(t){t.tabstopManager.tabNext(-1)},Esc:function(t){t.tabstopManager.detach()},Return:function(t){return!1}})}).call(o.prototype);var i={};i.onChange=T.prototype.onChange,i.setPosition=function(t,e){this.pos.row=t,this.pos.column=e},i.update=function(t,e,n){this.$insertRight=n,this.pos=t,this.onChange(e)};var u=function(t,e){t.row==0&&(t.column+=e.column),t.row+=e.row},p=function(t,e){t.row==e.row&&(t.column-=e.column),t.row-=e.row};b("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"),y.snippetManager=new w;var g=b("./editor").Editor;(function(){this.insertSnippet=function(t,e){return y.snippetManager.insertSnippet(this,t,e)},this.expandSnippet=function(t){return y.snippetManager.expandWithTab(this,t)}}).call(g.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],function(b,y,H){"use strict";var L=b("../virtual_renderer").VirtualRenderer,S=b("../editor").Editor,R=b("../range").Range,C=b("../lib/event"),T=b("../lib/lang"),x=b("../lib/dom"),$=function(w){var o=new L(w);o.$maxLines=4;var i=new S(o);return i.setHighlightActiveLine(!1),i.setShowPrintMargin(!1),i.renderer.setShowGutter(!1),i.renderer.setHighlightGutterLine(!1),i.$mouseHandler.$focusWaitTimout=0,i.$highlightTagPending=!0,i},k=function(w){var o=x.createElement("div"),i=new $(o);w&&w.appendChild(o),o.style.display="none",i.renderer.content.style.cursor="default",i.renderer.setStyle("ace_autocomplete"),i.setOption("displayIndentGuides",!1),i.setOption("dragDelay",150);var u=function(){};i.focus=u,i.$isFocused=!0,i.renderer.$cursorLayer.restartTimer=u,i.renderer.$cursorLayer.element.style.opacity=0,i.renderer.$maxLines=8,i.renderer.$keepTextAreaAtCursor=!1,i.setHighlightActiveLine(!1),i.session.highlight(""),i.session.$searchHighlight.clazz="ace_highlight-marker",i.on("mousedown",function(r){var a=r.getDocumentPosition();i.selection.moveToPosition(a),t.start.row=t.end.row=a.row,r.stop()});var p,g=new R(-1,0,-1,1/0),t=new R(-1,0,-1,1/0);t.id=i.session.addMarker(t,"ace_active-line","fullLine"),i.setSelectOnHover=function(r){r?g.id&&(i.session.removeMarker(g.id),g.id=null):g.id=i.session.addMarker(g,"ace_line-hover","fullLine")},i.setSelectOnHover(!1),i.on("mousemove",function(r){if(!p){p=r;return}if(!(p.x==r.x&&p.y==r.y)){p=r,p.scrollTop=i.renderer.scrollTop;var a=p.getDocumentPosition().row;g.start.row!=a&&(g.id||i.setRow(a),n(a))}}),i.renderer.on("beforeRender",function(){if(p&&g.start.row!=-1){p.$pos=null;var r=p.getDocumentPosition().row;g.id||i.setRow(r),n(r,!0)}}),i.renderer.on("afterRender",function(){var r=i.getRow(),a=i.renderer.$textLayer,c=a.element.childNodes[r-a.config.firstRow];c!=a.selectedNode&&(a.selectedNode&&x.removeCssClass(a.selectedNode,"ace_selected"),a.selectedNode=c,c&&x.addCssClass(c,"ace_selected"))});var e=function(){n(-1)},n=function(r,a){r!==g.start.row&&(g.start.row=g.end.row=r,a||i.session._emit("changeBackMarker"),i._emit("changeHoverMarker"))};i.getHoveredRow=function(){return g.start.row},C.addListener(i.container,"mouseout",e),i.on("hide",e),i.on("changeSelection",e),i.session.doc.getLength=function(){return i.data.length},i.session.doc.getLine=function(r){var a=i.data[r];return typeof a=="string"?a:a&&a.value||""};var s=i.session.bgTokenizer;return s.$tokenizeRow=function(r){var a=i.data[r],c=[];if(!a)return c;typeof a=="string"&&(a={value:a}),a.caption||(a.caption=a.value||a.name);for(var h=-1,l,f,d=0;d<a.caption.length;d++)f=a.caption[d],l=a.matchMask&1<<d?1:0,h!==l?(c.push({type:a.className||(l?"completion-highlight":""),value:f}),h=l):c[c.length-1].value+=f;if(a.meta){var v=i.renderer.$size.scrollerWidth/i.renderer.layerConfig.characterWidth,m=a.meta;m.length+a.caption.length>v-2&&(m=m.substr(0,v-a.caption.length-3)+"\u2026"),c.push({type:"rightAlignedText",value:m})}return c},s.$updateOnChange=u,s.start=u,i.session.$computeWidth=function(){return this.screenWidth=0},i.$blockScrolling=1/0,i.isOpen=!1,i.isTopdown=!1,i.autoSelect=!0,i.data=[],i.setData=function(r){i.setValue(T.stringRepeat(`
`,r.length),-1),i.data=r||[],i.setRow(0)},i.getData=function(r){return i.data[r]},i.getRow=function(){return t.start.row},i.setRow=function(r){r=Math.max(this.autoSelect?0:-1,Math.min(this.data.length,r)),t.start.row!=r&&(i.selection.clearSelection(),t.start.row=t.end.row=r||0,i.session._emit("changeBackMarker"),i.moveCursorTo(r||0,0),i.isOpen&&i._signal("select"))},i.on("changeSelection",function(){i.isOpen&&i.setRow(i.selection.lead.row),i.renderer.scrollCursorIntoView()}),i.hide=function(){this.container.style.display="none",this._signal("hide"),i.isOpen=!1},i.show=function(r,a,c){var h=this.container,l=window.innerHeight,f=window.innerWidth,d=this.renderer,v=d.$maxLines*a*1.4,m=r.top+this.$borderSize,_=m>l/2&&!c;_&&m+a+v>l?(d.$maxPixelHeight=m-2*this.$borderSize,h.style.top="",h.style.bottom=l-m+"px",i.isTopdown=!1):(m+=a,d.$maxPixelHeight=l-m-.2*a,h.style.top=m+"px",h.style.bottom="",i.isTopdown=!0),h.style.display="",this.renderer.$textLayer.checkForSizeChanges();var N=r.left;N+h.offsetWidth>f&&(N=f-h.offsetWidth),h.style.left=N+"px",this._signal("show"),p=null,i.isOpen=!0},i.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},i.$imageSize=0,i.$borderSize=1,i};x.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"),y.AcePopup=k}),ace.define("ace/autocomplete/util",["require","exports","module"],function(b,y,H){"use strict";y.parForEach=function(S,R,C){var T=0,x=S.length;x===0&&C();for(var $=0;$<x;$++)R(S[$],function(k,w){T++,T===x&&C(k,w)})};var L=/[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;y.retrievePrecedingIdentifier=function(S,R,C){C=C||L;for(var T=[],x=R-1;x>=0&&C.test(S[x]);x--)T.push(S[x]);return T.reverse().join("")},y.retrieveFollowingIdentifier=function(S,R,C){C=C||L;for(var T=[],x=R;x<S.length&&C.test(S[x]);x++)T.push(S[x]);return T},y.getCompletionPrefix=function(S){var R=S.getCursorPosition(),C=S.session.getLine(R.row),T;return S.completers.forEach(function(x){x.identifierRegexps&&x.identifierRegexps.forEach(function($){!T&&$&&(T=this.retrievePrecedingIdentifier(C,R.column,$))}.bind(this))}.bind(this)),T||this.retrievePrecedingIdentifier(C,R.column)}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/snippets"],function(b,y,H){"use strict";var L=b("./keyboard/hash_handler").HashHandler,S=b("./autocomplete/popup").AcePopup,R=b("./autocomplete/util"),C=b("./lib/event"),T=b("./lib/lang"),x=b("./lib/dom"),$=b("./snippets").snippetManager,k=function(){this.autoInsert=!1,this.autoSelect=!0,this.exactMatch=!1,this.gatherCompletionsId=0,this.keyboardHandler=new L,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=T.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=T.delayedCall(this.updateDocTooltip.bind(this),50)};(function(){this.$init=function(){return this.popup=new S(document.body||document.documentElement),this.popup.on("click",function(o){this.insertMatch(),o.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.tooltipTimer.bind(null,null)),this.popup.on("select",this.tooltipTimer.bind(null,null)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},this.getPopup=function(){return this.popup||this.$init()},this.openPopup=function(o,i,u){this.popup||this.$init(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered),o.keyBinding.addKeyboardHandler(this.keyboardHandler);var p=o.renderer;if(this.popup.setRow(this.autoSelect?0:-1),u)u&&!i&&this.detach();else{this.popup.setTheme(o.getTheme()),this.popup.setFontSize(o.getFontSize());var g=p.layerConfig.lineHeight,t=p.$cursorLayer.getPixelPosition(this.base,!0);t.left-=this.popup.getTextLeftOffset();var e=o.container.getBoundingClientRect();t.top+=e.top-p.layerConfig.offset,t.left+=e.left-o.renderer.scrollLeft,t.left+=p.gutterWidth,this.popup.show(t,g)}},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.hideDocTooltip(),this.gatherCompletionsId+=1,this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null},this.changeListener=function(o){var i=this.editor.selection.lead;(i.row!=this.base.row||i.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(o){var i=document.activeElement,u=this.editor.textInput.getElement(),p=o.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(o.relatedTarget),g=this.popup&&this.popup.container;i!=u&&i.parentNode!=g&&!p&&i!=this.tooltipNode&&o.relatedTarget!=u&&this.detach()},this.mousedownListener=function(o){this.detach()},this.mousewheelListener=function(o){this.detach()},this.goTo=function(o){var i=this.popup.getRow(),u=this.popup.session.getLength()-1;switch(o){case"up":i=i<=0?u:i-1;break;case"down":i=i>=u?-1:i+1;break;case"start":i=0;break;case"end":i=u;break}this.popup.setRow(i)},this.insertMatch=function(o,i){if(o||(o=this.popup.getData(this.popup.getRow())),!o)return!1;if(o.completer&&o.completer.insertMatch)o.completer.insertMatch(this.editor,o);else{if(this.completions.filterText)for(var u=this.editor.selection.getAllRanges(),p=0,g;g=u[p];p++)g.start.column-=this.completions.filterText.length,this.editor.session.remove(g);o.snippet?$.insertSnippet(this.editor,o.snippet):this.editor.execCommand("insertstring",o.value||o)}this.detach()},this.commands={Up:function(o){o.completer.goTo("up")},Down:function(o){o.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(o){o.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(o){o.completer.goTo("end")},Esc:function(o){o.completer.detach()},Return:function(o){return o.completer.insertMatch()},"Shift-Return":function(o){o.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(o){var i=o.completer.insertMatch();if(!i&&!o.tabstopManager)o.completer.goTo("down");else return i},PageUp:function(o){o.completer.popup.gotoPageUp()},PageDown:function(o){o.completer.popup.gotoPageDown()}},this.gatherCompletions=function(o,i){var u=o.getSession(),p=o.getCursorPosition(),g=R.getCompletionPrefix(o);this.base=u.doc.createAnchor(p.row,p.column-g.length),this.base.$insertRight=!0;var t=[],e=o.completers.length;return o.completers.forEach(function(n,s){n.getCompletions(o,u,p,g,function(r,a){!r&&a&&(t=t.concat(a)),i(null,{prefix:R.getCompletionPrefix(o),matches:t,finished:--e===0})})}),!0},this.showPopup=function(o){this.editor&&this.detach(),this.activated=!0,this.editor=o,o.completer!=this&&(o.completer&&o.completer.detach(),o.completer=this),o.on("changeSelection",this.changeListener),o.on("blur",this.blurListener),o.on("mousedown",this.mousedownListener),o.on("mousewheel",this.mousewheelListener),this.updateCompletions()},this.updateCompletions=function(o){if(o&&this.base&&this.completions){var i=this.editor.getCursorPosition(),u=this.editor.session.getTextRange({start:this.base,end:i});if(u==this.completions.filterText)return;if(this.completions.setFilter(u),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==u&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,u,o);return}var p=this.gatherCompletionsId;this.gatherCompletions(this.editor,function(g,t){var e=function(){if(t.finished)return this.detach()}.bind(this),n=t.prefix,s=t&&t.matches;if(!s||!s.length)return e();if(!(n.indexOf(t.prefix)!==0||p!=this.gatherCompletionsId)){this.completions=new w(s),this.exactMatch&&(this.completions.exactMatch=!0),this.completions.setFilter(n);var r=this.completions.filtered;if(!r.length||r.length==1&&r[0].value==n&&!r[0].snippet)return e();if(this.autoInsert&&r.length==1&&t.finished)return this.insertMatch(r[0]);this.openPopup(this.editor,n,o)}}.bind(this))},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},this.updateDocTooltip=function(){var o=this.popup,i=o.data,u=i&&(i[o.getHoveredRow()]||i[o.getRow()]),p=null;if(!u||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();if(this.editor.completers.some(function(g){return g.getDocTooltip&&(p=g.getDocTooltip(u)),p}),p||(p=u),typeof p=="string"&&(p={docText:p}),!p||!(p.docHTML||p.docText))return this.hideDocTooltip();this.showDocTooltip(p)},this.showDocTooltip=function(o){this.tooltipNode||(this.tooltipNode=x.createElement("div"),this.tooltipNode.className="ace_tooltip ace_doc-tooltip",this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this));var i=this.tooltipNode;o.docHTML?i.innerHTML=o.docHTML:o.docText&&(i.textContent=o.docText),i.parentNode||document.body.appendChild(i);var u=this.popup,p=u.container.getBoundingClientRect();i.style.top=u.container.style.top,i.style.bottom=u.container.style.bottom,window.innerWidth-p.right<320?(i.style.right=window.innerWidth-p.left+"px",i.style.left=""):(i.style.left=p.right+1+"px",i.style.right=""),i.style.display="block"},this.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var o=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==o&&this.editor.focus(),this.tooltipNode=null,o.parentNode&&o.parentNode.removeChild(o)}},this.onTooltipClick=function(o){for(var i=o.target;i&&i!=this.tooltipNode;){if(i.nodeName=="A"&&i.href){i.rel="noreferrer",i.target="_blank";break}i=i.parentNode}}}).call(k.prototype),k.startCommand={name:"startAutocomplete",exec:function(o){o.completer||(o.completer=new k),o.completer.autoInsert=!1,o.completer.autoSelect=!0,o.completer.showPopup(o),o.completer.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var w=function(o,i){this.all=o,this.filtered=o,this.filterText=i||"",this.exactMatch=!1};(function(){this.setFilter=function(o){if(o.length>this.filterText&&o.lastIndexOf(this.filterText,0)===0)var i=this.filtered;else var i=this.all;this.filterText=o,i=this.filterCompletions(i,this.filterText),i=i.sort(function(p,g){return g.exactMatch-p.exactMatch||g.score-p.score});var u=null;i=i.filter(function(p){var g=p.snippet||p.caption||p.value;return g===u?!1:(u=g,!0)}),this.filtered=i},this.filterCompletions=function(o,i){var u=[],p=i.toUpperCase(),g=i.toLowerCase();e:for(var t=0,e;e=o[t];t++){var n=e.value||e.caption||e.snippet;if(n){var s=-1,r=0,a=0,c,h;if(this.exactMatch){if(i!==n.substr(0,i.length))continue e}else for(var l=0;l<i.length;l++){var f=n.indexOf(g[l],s+1),d=n.indexOf(p[l],s+1);if(c=f>=0&&(d<0||f<d)?f:d,c<0)continue e;h=c-s-1,h>0&&(s===-1&&(a+=10),a+=h),r=r|1<<c,s=c}e.matchMask=r,e.exactMatch=a?0:1,e.score=(e.score||0)-a,u.push(e)}}return u}}).call(w.prototype),y.Autocomplete=k,y.FilteredList=w}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(b,y,H){var L=b("../range").Range,S=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function R(T,x){var $=T.getTextRange(L.fromPoints({row:0,column:0},x));return $.split(S).length-1}function C(T,x){var $=R(T,x),k=T.getValue().split(S),w=Object.create(null),o=k[$];return k.forEach(function(i,u){if(!(!i||i===o)){var p=Math.abs($-u),g=k.length-p;w[i]?w[i]=Math.max(g,w[i]):w[i]=g}}),w}y.getCompletions=function(T,x,$,k,w){var o=C(x,$,k),i=Object.keys(o);w(null,i.map(function(u){return{caption:u,value:u,score:o[u],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(b,y,H){"use strict";var L=b("../snippets").snippetManager,S=b("../autocomplete").Autocomplete,R=b("../config"),C=b("../lib/lang"),T=b("../autocomplete/util"),x=b("../autocomplete/text_completer"),$={getCompletions:function(e,n,s,r,a){if(n.$mode.completer)return n.$mode.completer.getCompletions(e,n,s,r,a);var c=e.session.getState(s.row),h=n.$mode.getCompletions(c,n,s,r);a(null,h)}},k={getCompletions:function(e,n,s,r,a){var c=L.snippetMap,h=[];L.getActiveScopes(e).forEach(function(l){for(var f=c[l]||[],d=f.length;d--;){var v=f[d],m=v.name||v.tabTrigger;m&&h.push({caption:m,snippet:v.content,meta:v.tabTrigger&&!v.name?v.tabTrigger+"\u21E5 ":"snippet",type:"snippet"})}},this),a(null,h)},getDocTooltip:function(e){e.type=="snippet"&&!e.docHTML&&(e.docHTML=["<b>",C.escapeHTML(e.caption),"</b>","<hr></hr>",C.escapeHTML(e.snippet)].join(""))}},w=[k,x,$];y.setCompleters=function(e){w.length=0,e&&w.push.apply(w,e)},y.addCompleter=function(e){w.push(e)},y.textCompleter=x,y.keyWordCompleter=$,y.snippetCompleter=k;var o={name:"expandSnippet",exec:function(e){return L.expandWithTab(e)},bindKey:"Tab"},i=function(e,n){u(n.session.$mode)},u=function(e){var n=e.$id;L.files||(L.files={}),p(n),e.modes&&e.modes.forEach(u)},p=function(e){if(!(!e||L.files[e])){var n=e.replace("mode","snippets");L.files[e]={},R.loadModule(n,function(s){s&&(L.files[e]=s,!s.snippets&&s.snippetText&&(s.snippets=L.parseSnippetFile(s.snippetText)),L.register(s.snippets||[],s.scope),s.includeScopes&&(L.snippetMap[s.scope].includeScopes=s.includeScopes,s.includeScopes.forEach(function(r){p("ace/mode/"+r)})))})}},g=function(e){var n=e.editor,s=n.completer&&n.completer.activated;if(e.command.name==="backspace")s&&!T.getCompletionPrefix(n)&&n.completer.detach();else if(e.command.name==="insertstring"){var r=T.getCompletionPrefix(n);r&&!s&&(n.completer||(n.completer=new S),n.completer.autoInsert=!1,n.completer.showPopup(n))}},t=b("../editor").Editor;b("../config").defineOptions(t.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:w),this.commands.addCommand(S.startCommand)):this.commands.removeCommand(S.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:w),this.commands.on("afterExec",g)):this.commands.removeListener("afterExec",g)},value:!1},enableSnippets:{set:function(e){e?(this.commands.addCommand(o),this.on("changeMode",i),i(null,this)):(this.commands.removeCommand(o),this.off("changeMode",i))},value:!1}})}),function(){ace.acequire(["ace/ext/language_tools"],function(){})}()}}]);

//# sourceMappingURL=6464.f379e014f9909e621de6.js.map