/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
define(function(){"use strict";function At(){var e=gt.splice(0,gt.length);yt=0;while(e.length)e.shift().call(null,e.shift())}function Ot(e,t){for(var n=0,r=e.length;n<r;n++)Ut(e[n],t)}function Mt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Lt(r,k[Dt(r)])}function _t(e){return function(t){st(t)&&(Ut(t,e),Ot(t.querySelectorAll(L),e))}}function Dt(e){var t=ft.call(e,"is"),n=e.nodeName.toUpperCase(),r=O.call(C,t?x+t.toUpperCase():S+n);return t&&-1<r&&!Pt(n,t)?-1:r}function Pt(e,t){return-1<L.indexOf(e+'[is="'+t+'"]')}function Ht(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[m]||2,o=e[y]||3;St&&(!i||i===t)&&t[l]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[l](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Bt(e){var t=_t(e);return function(e){gt.push(t,e.target),yt&&clearTimeout(yt),yt=setTimeout(At,1)}}function jt(t){Et&&(Et=!1,t.currentTarget.removeEventListener(w,jt)),Ot((t.target||e).querySelectorAll(L),t.detail===a?a:o),rt&&qt()}function Ft(e,t){var n=this;ht.call(n,e,t),xt.call(n,{target:n})}function It(e,t){et(e,t),Ct?Ct.observe(e,vt):(wt&&(e.setAttribute=Ft,e[i]=Nt(e),e[s](E,xt)),e[s](b,Ht)),e[d]&&St&&(e.created=!0,e[d](),e.created=!1)}function qt(){for(var e,t=0,n=ot.length;t<n;t++)e=ot[t],A.contains(e)||(n--,ot.splice(t--,1),Ut(e,a))}function Rt(e){throw new Error("A "+e+" type is already registered")}function Ut(e,t){var n,r=Dt(e);-1<r&&(kt(e,k[r]),r=0,t===o&&!e[o]?(e[a]=!1,e[o]=!0,r=1,rt&&O.call(ot,e)<0&&ot.push(e)):t===a&&!e[a]&&(e[o]=!1,e[a]=!0,r=1),r&&(n=e[t+u])&&n.call(e))}function zt(){}function Wt(t,n,i){var s=i&&i[f]||"",o=n.prototype,u=Z(o),a=n.observedAttributes||H,m={prototype:u};it(u,d,{value:function(){if(J)J=!1;else if(!this[U]){this[U]=!0,new n(this),o[d]&&o[d].call(this);var e=K[G.get(n)];(!W||e.create.length>1)&&$t(this)}}}),it(u,l,{value:function(e){-1<O.call(a,e)&&o[l].apply(this,arguments)}}),o[h]&&it(u,c,{value:o[h]}),o[p]&&it(u,v,{value:o[p]}),s&&(m[f]=s),t=t.toUpperCase(),K[t]={constructor:n,create:s?[s,Y(t)]:[t]},G.set(n,t),e[r](t.toLowerCase(),m),Jt(t),Q[t].r()}function Xt(e){var t=K[e.toUpperCase()];return t&&t.constructor}function Vt(e){return typeof e=="string"?e:e&&e.is||""}function $t(e){var t=e[l],n=t?e.attributes:H,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function Jt(e){return e=e.toUpperCase(),e in Q||(Q[e]={},Q[e].p=new $(function(t){Q[e].r=t})),Q[e].p}function Kt(){z&&delete window.customElements,P(window,"customElements",{configurable:!0,value:new zt}),P(window,"CustomElementRegistry",{configurable:!0,value:zt});for(var t=function(t){var n=window[t];if(n){window[t]=function(r){var i,s;return r||(r=this),r[U]||(J=!0,i=K[G.get(r.constructor)],s=W&&i.create.length===1,r=s?Reflect.construct(n,H,i.constructor):e.createElement.apply(e,i.create),r[U]=!0,J=!1,s||$t(r)),r},window[t].prototype=n.prototype;try{n.prototype.constructor=window[t]}catch(r){R=!0,P(n,U,{value:window[t]})}}},r=n.get(/^HTML[A-Z]*[a-z]/),i=r.length;i--;t(r[i]));e.createElement=function(e,t){var n=Vt(t);return n?dt.call(this,e,Y(n)):dt.call(this,e)}}var e=window.document,t=window.Object,n=function(e){var n=/^[A-Z]+[a-z]/,r=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(t.create||t)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(t){return typeof t=="string"?s[t]||(n.test(t)?[]:""):r(t)},o.set=function(t,r){return n.test(t)?i(t,r):i(r,t),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}}),r="registerElement",i="__"+r+(window.Math.random()*1e5>>0),s="addEventListener",o="attached",u="Callback",a="detached",f="extends",l="attributeChanged"+u,c=o+u,h="connected"+u,p="disconnected"+u,d="created"+u,v=a+u,m="ADDITION",g="MODIFICATION",y="REMOVAL",b="DOMAttrModified",w="DOMContentLoaded",E="DOMSubtreeModified",S="<",x="=",T=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,N=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],C=[],k=[],L="",A=e.documentElement,O=C.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},M=t.prototype,_=M.hasOwnProperty,D=M.isPrototypeOf,P=t.defineProperty,H=[],B=t.getOwnPropertyDescriptor,j=t.getOwnPropertyNames,F=t.getPrototypeOf,I=t.setPrototypeOf,q=!!t.__proto__,R=!1,U="__dreCEv1",z=window.customElements,W=!!(z&&z.define&&z.get&&z.whenDefined),X=t.create||t,V=window.Map||function(){var t=[],n=[],r;return{get:function(e){return n[O.call(t,e)]},set:function(e,i){r=O.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},$=window.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},J=!1,K=X(null),Q=X(null),G=new V,Y=String,Z=t.create||function Yt(e){return e?(Yt.prototype=e,new Yt):this},et=I||(q?function(e,t){return e.__proto__=t,e}:j&&B?function(){function e(e,t){for(var n,r=j(t),i=0,s=r.length;i<s;i++)n=r[i],_.call(e,n)||P(e,n,B(t,n))}return function(t,n){do e(t,n);while((n=F(n))&&!D.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),tt=window.MutationObserver||window.WebKitMutationObserver,nt=(window.HTMLElement||window.Element||window.Node).prototype,rt=!D.call(nt,A),it=rt?function(e,t,n){return e[t]=n.value,e}:P,st=rt?function(e){return e.nodeType===1}:function(e){return D.call(nt,e)},ot=rt&&[],ut=nt.cloneNode,at=nt.dispatchEvent,ft=nt.getAttribute,lt=nt.hasAttribute,ct=nt.removeAttribute,ht=nt.setAttribute,pt=e.createElement,dt=pt,vt=tt&&{attributes:!0,characterData:!0,attributeOldValue:!0},mt=tt||function(e){wt=!1,A.removeEventListener(b,mt)},gt,yt=0,bt=!1,wt=!0,Et=!0,St=!0,xt,Tt,Nt,Ct,kt,Lt;r in e||(I||q?(kt=function(e,t){D.call(t,e)||It(e,t)},Lt=It):(kt=function(e,n){e[i]||(e[i]=t(!0),It(e,n))},Lt=kt),rt?(wt=!1,function(){var e=B(nt,s),t=e.value,n=function(e){var t=new CustomEvent(b,{bubbles:!0});t.attrName=e,t.prevValue=ft.call(this,e),t.newValue=null,t[y]=t.attrChange=2,ct.call(this,e),at.call(this,t)},r=function(e,t){var n=lt.call(this,e),r=n&&ft.call(this,e),i=new CustomEvent(b,{bubbles:!0});ht.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[g]=i.attrChange=1:i[m]=i.attrChange=0,at.call(this,i)},o=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(b,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[m]=s.attrChange=0:s[g]=s.attrChange=1,at.call(t,s))};e.value=function(e,s,u){e===b&&this[l]&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,s,u)},P(nt,s,e)}()):tt||(A[s](b,mt),A.setAttribute(i,1),A.removeAttribute(i),wt&&(xt=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Nt(t);for(s in r){if(!(s in n))return Tt(0,t,s,n[s],r[s],m);if(r[s]!==n[s])return Tt(1,t,s,n[s],r[s],g)}for(s in n)if(!(s in r))return Tt(2,t,s,n[s],r[s],y)}},Tt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Ht(o)},Nt=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),e[r]=function(n,r){p=n.toUpperCase(),bt||(bt=!0,tt?(Ct=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new tt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,St&&s[l]&&i.attributeName!=="style"&&(o=ft.call(s,i.attributeName),o!==i.oldValue&&s[l](i.attributeName,i.oldValue,o)))})}(_t(o),_t(a)),Ct.observe(e,{childList:!0,subtree:!0})):(gt=[],e[s]("DOMNodeInserted",Bt(o)),e[s]("DOMNodeRemoved",Bt(a))),e[s](w,jt),e[s]("readystatechange",jt),nt.cloneNode=function(e){var t=ut.call(this,!!e),n=Dt(t);return-1<n&&Lt(t,k[n]),e&&Mt(t.querySelectorAll(L)),t}),-2<O.call(C,x+p)+O.call(C,S+p)&&Rt(n);if(!T.test(p)||-1<O.call(N,p))throw new Error("The type "+n+" is invalid");var i=function(){return c?e.createElement(h,p):e.createElement(h)},u=r||M,c=_.call(u,f),h=c?r[f].toUpperCase():p,p,d;return c&&-1<O.call(C,S+h)&&Rt(h),d=C.push((c?x:S)+p)-1,L=L.concat(L.length?",":"",c?h+'[is="'+n.toLowerCase()+'"]':h),i.prototype=k[d]=_.call(u,"prototype")?u.prototype:Z(nt),Ot(e.querySelectorAll(L),o),i},e.createElement=dt=function(t,n){var r=Vt(n),i=r?pt.call(e,t,Y(r)):pt.call(e,t),s=""+t,o=O.call(C,(r?x:S)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=Pt(s.toUpperCase(),r))),St=!e.createElement.innerHTMLHelper,u&&Lt(i,k[o]),i}),zt.prototype={constructor:zt,define:W?function(e,t,n){if(n)Wt(e,t,n);else{var r=e.toUpperCase();K[r]={constructor:t,create:[r]},G.set(t,r),z.define(e,t)}}:Wt,get:W?function(e){return z.get(e)||Xt(e)}:Xt,whenDefined:W?function(e){return $.race([z.whenDefined(e),Jt(e)])}:Jt};if(!z)Kt();else try{(function(t,n,r){n[f]="a",t.prototype=Z(HTMLAnchorElement.prototype),t.prototype.constructor=t,window.customElements.define(r,t,n);if(ft.call(e.createElement("a",{is:r}),"is")!==r||W&&ft.call(new t,"is")!==r)throw n})(function Zt(){return Reflect.construct(HTMLAnchorElement,[],Zt)},{},"document-register-element-a")}catch(Qt){Kt()}try{pt.call(e,"a","a")}catch(Gt){Y=function(e){return{is:e}}}});