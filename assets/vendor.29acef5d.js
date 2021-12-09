var O={exports:{}},Z={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ly=Object.getOwnPropertySymbols,nC=Object.prototype.hasOwnProperty,rC=Object.prototype.propertyIsEnumerable;function iC(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function sC(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var $y=sC()?Object.assign:function(t,e){for(var n,r=iC(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)nC.call(n,o)&&(r[o]=n[o]);if(Ly){i=Ly(n);for(var a=0;a<i.length;a++)rC.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=$y,ss=60103,My=60106;Z.Fragment=60107;Z.StrictMode=60108;Z.Profiler=60114;var Fy=60109,Uy=60110,Vy=60112;Z.Suspense=60113;var jy=60115,By=60116;if(typeof Symbol=="function"&&Symbol.for){var nn=Symbol.for;ss=nn("react.element"),My=nn("react.portal"),Z.Fragment=nn("react.fragment"),Z.StrictMode=nn("react.strict_mode"),Z.Profiler=nn("react.profiler"),Fy=nn("react.provider"),Uy=nn("react.context"),Vy=nn("react.forward_ref"),Z.Suspense=nn("react.suspense"),jy=nn("react.memo"),By=nn("react.lazy")}var zy=typeof Symbol=="function"&&Symbol.iterator;function oC(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}function Do(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wy={};function os(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||qy}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Do(85));this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hy(){}Hy.prototype=os.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||qy}var hd=cd.prototype=new Hy;hd.constructor=cd;ld(hd,os.prototype);hd.isPureReactComponent=!0;var dd={current:null},Ky=Object.prototype.hasOwnProperty,Gy={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ky.call(e,r)&&!Gy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ss,type:t,key:s,ref:o,props:i,_owner:dd.current}}function aC(t,e){return{$$typeof:ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ss}function uC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yy=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uC(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ss:case My:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Yy,"$&/")+"/"),Ju(i,e,n,"",function(l){return l})):i!=null&&(fd(i)&&(i=aC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+pd(s,a);o+=Ju(s,e,n,u,i)}else if(u=oC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+pd(s,a++),o+=Ju(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Do(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lC(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Jy={current:null};function $n(){var t=Jy.current;if(t===null)throw Error(Do(321));return t}var cC={ReactCurrentDispatcher:Jy,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:dd,IsSomeRendererActing:{current:!1},assign:ld};Z.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error(Do(143));return t}};Z.Component=os;Z.PureComponent=cd;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cC;Z.cloneElement=function(t,e,n){if(t==null)throw Error(Do(267,t));var r=ld({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Ky.call(e,u)&&!Gy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ss,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Uy,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Fy,_context:t},t.Consumer=t};Z.createElement=Qy;Z.createFactory=function(t){var e=Qy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:Vy,render:t}};Z.isValidElement=fd;Z.lazy=function(t){return{$$typeof:By,_payload:{_status:-1,_result:t},_init:lC}};Z.memo=function(t,e){return{$$typeof:jy,type:t,compare:e===void 0?null:e}};Z.useCallback=function(t,e){return $n().useCallback(t,e)};Z.useContext=function(t,e){return $n().useContext(t,e)};Z.useDebugValue=function(){};Z.useEffect=function(t,e){return $n().useEffect(t,e)};Z.useImperativeHandle=function(t,e,n){return $n().useImperativeHandle(t,e,n)};Z.useLayoutEffect=function(t,e){return $n().useLayoutEffect(t,e)};Z.useMemo=function(t,e){return $n().useMemo(t,e)};Z.useReducer=function(t,e,n){return $n().useReducer(t,e,n)};Z.useRef=function(t){return $n().useRef(t)};Z.useState=function(t){return $n().useState(t)};Z.version="17.0.2";O.exports=Z;var AB=O.exports,Xy={exports:{}},zt={},Zy={exports:{}},ev={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var P=t.unstable_now();u(!0,P),u=null}catch(z){throw setTimeout(c,0),z}};e=function(P){u!==null?setTimeout(e,0,P):(u=P,setTimeout(c,0))},n=function(P,z){l=setTimeout(P,z)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,I=null,p=-1,f=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<P?Math.floor(1e3/P):5};var w=new MessageChannel,y=w.port2;w.port1.onmessage=function(){if(I!==null){var P=t.unstable_now();m=P+f;try{I(!0,P)?y.postMessage(null):(v=!1,I=null)}catch(z){throw y.postMessage(null),z}}else v=!1},e=function(P){I=P,v||(v=!0,y.postMessage(null))},n=function(P,z){p=h(function(){P(t.unstable_now())},z)},r=function(){d(p),p=-1}}function C(P,z){var G=P.length;P.push(z);e:for(;;){var pe=G-1>>>1,Se=P[pe];if(Se!==void 0&&0<W(Se,z))P[pe]=z,P[G]=Se,G=pe;else break e}}function N(P){return P=P[0],P===void 0?null:P}function F(P){var z=P[0];if(z!==void 0){var G=P.pop();if(G!==z){P[0]=G;e:for(var pe=0,Se=P.length;pe<Se;){var hn=2*(pe+1)-1,dn=P[hn],ar=hn+1,fn=P[ar];if(dn!==void 0&&0>W(dn,G))fn!==void 0&&0>W(fn,dn)?(P[pe]=fn,P[ar]=G,pe=ar):(P[pe]=dn,P[hn]=G,pe=hn);else if(fn!==void 0&&0>W(fn,G))P[pe]=fn,P[ar]=G,pe=ar;else break e}}return z}return null}function W(P,z){var G=P.sortIndex-z.sortIndex;return G!==0?G:P.id-z.id}var $=[],Te=[],yt=1,$e=null,Pe=3,ns=!1,xn=!1,ir=!1;function rs(P){for(var z=N(Te);z!==null;){if(z.callback===null)F(Te);else if(z.startTime<=P)F(Te),z.sortIndex=z.expirationTime,C($,z);else break;z=N(Te)}}function is(P){if(ir=!1,rs(P),!xn)if(N($)!==null)xn=!0,e(sr);else{var z=N(Te);z!==null&&n(is,z.startTime-P)}}function sr(P,z){xn=!1,ir&&(ir=!1,r()),ns=!0;var G=Pe;try{for(rs(z),$e=N($);$e!==null&&(!($e.expirationTime>z)||P&&!t.unstable_shouldYield());){var pe=$e.callback;if(typeof pe=="function"){$e.callback=null,Pe=$e.priorityLevel;var Se=pe($e.expirationTime<=z);z=t.unstable_now(),typeof Se=="function"?$e.callback=Se:$e===N($)&&F($),rs(z)}else F($);$e=N($)}if($e!==null)var hn=!0;else{var dn=N(Te);dn!==null&&n(is,dn.startTime-z),hn=!1}return hn}finally{$e=null,Pe=G,ns=!1}}var or=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){xn||ns||(xn=!0,e(sr))},t.unstable_getCurrentPriorityLevel=function(){return Pe},t.unstable_getFirstCallbackNode=function(){return N($)},t.unstable_next=function(P){switch(Pe){case 1:case 2:case 3:var z=3;break;default:z=Pe}var G=Pe;Pe=z;try{return P()}finally{Pe=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=or,t.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=Pe;Pe=P;try{return z()}finally{Pe=G}},t.unstable_scheduleCallback=function(P,z,G){var pe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?pe+G:pe):G=pe,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=G+Se,P={id:yt++,callback:z,priorityLevel:P,startTime:G,expirationTime:Se,sortIndex:-1},G>pe?(P.sortIndex=G,C(Te,P),N($)===null&&P===N(Te)&&(ir?r():ir=!0,n(is,G-pe))):(P.sortIndex=Se,C($,P),xn||ns||(xn=!0,e(sr))),P},t.unstable_wrapCallback=function(P){var z=Pe;return function(){var G=Pe;Pe=z;try{return P.apply(this,arguments)}finally{Pe=G}}}})(ev);Zy.exports=ev;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=O.exports,me=$y,Fe=Zy.exports;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Zu)throw Error(b(227));var tv=new Set,xo={};function Yr(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(xo[t]=e,t=0;t<e.length;t++)tv.add(e[t])}var Mn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),hC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nv=Object.prototype.hasOwnProperty,rv={},iv={};function dC(t){return nv.call(iv,t)?!0:nv.call(rv,t)?!1:hC.test(t)?iv[t]=!0:(rv[t]=!0,!1)}function fC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pC(t,e,n,r){if(e===null||typeof e=="undefined"||fC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Ye[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Ye[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Ye[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(pC(e,n,i,r)&&(n=null),r||i===null?dC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jr=Zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=60103,Xr=60106,ur=60107,vd=60108,$o=60114,wd=60109,_d=60110,el=60112,Mo=60113,tl=60120,nl=60115,Ed=60116,Id=60121,Td=60128,sv=60129,Sd=60130,kd=60131;if(typeof Symbol=="function"&&Symbol.for){var Ue=Symbol.for;Lo=Ue("react.element"),Xr=Ue("react.portal"),ur=Ue("react.fragment"),vd=Ue("react.strict_mode"),$o=Ue("react.profiler"),wd=Ue("react.provider"),_d=Ue("react.context"),el=Ue("react.forward_ref"),Mo=Ue("react.suspense"),tl=Ue("react.suspense_list"),nl=Ue("react.memo"),Ed=Ue("react.lazy"),Id=Ue("react.block"),Ue("react.scope"),Td=Ue("react.opaque.id"),sv=Ue("react.debug_trace_mode"),Sd=Ue("react.offscreen"),kd=Ue("react.legacy_hidden")}var ov=typeof Symbol=="function"&&Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Cd;function Uo(t){if(Cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var Ad=!1;function rl(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function mC(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=rl(t.type,!1),t;case 11:return t=rl(t.type.render,!1),t;case 22:return t=rl(t.type._render,!1),t;case 1:return t=rl(t.type,!0),t;default:return""}}function us(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ur:return"Fragment";case Xr:return"Portal";case $o:return"Profiler";case vd:return"StrictMode";case Mo:return"Suspense";case tl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _d:return(t.displayName||"Context")+".Consumer";case wd:return(t._context.displayName||"Context")+".Provider";case el:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case nl:return us(t.type);case Id:return us(t._render);case Ed:e=t._payload,t=t._init;try{return us(t(e))}catch{}}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gC(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=gC(t))}function uv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function bd(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cv(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function Nd(t,e){cv(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function yC(t){var e="";return Zu.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Pd(t,e){return t=me({children:void 0},e),(e=yC(e.children))&&(t.children=e),t}function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function fv(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Dd={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,gv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Dd.svg||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vC=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){vC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wC=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(t,e){if(e){if(wC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function $d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,cs=null,hs=null;function wv(t){if(t=oa(t)){if(typeof Fd!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Sl(e),Fd(t.stateNode,t.type,e))}}function _v(t){cs?hs?hs.push(t):hs=[t]:cs=t}function Ev(){if(cs){var t=cs,e=hs;if(hs=cs=null,wv(t),e)for(t=0;t<e.length;t++)wv(e[t])}}function Ud(t,e){return t(e)}function Iv(t,e,n,r,i){return t(e,n,r,i)}function Vd(){}var Tv=Ud,Zr=!1,jd=!1;function Bd(){(cs!==null||hs!==null)&&(Vd(),Ev())}function _C(t,e,n){if(jd)return t(e,n);jd=!0;try{return Tv(t,e,n)}finally{jd=!1,Bd()}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var zd=!1;if(Mn)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){zd=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{zd=!1}function EC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var qo=!1,al=null,ul=!1,qd=null,IC={onError:function(t){qo=!0,al=t}};function TC(t,e,n,r,i,s,o,a,u){qo=!1,al=null,EC.apply(IC,arguments)}function SC(t,e,n,r,i,s,o,a,u){if(TC.apply(this,arguments),qo){if(qo){var l=al;qo=!1,al=null}else throw Error(b(198));ul||(ul=!0,qd=l)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kv(t){if(ei(t)!==t)throw Error(b(188))}function kC(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kv(i),t;if(s===r)return kv(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Cv(t){if(t=kC(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Av(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var bv,Wd,Nv,Rv,Hd=!1,pn=[],cr=null,hr=null,dr=null,Wo=new Map,Ho=new Map,Ko=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Ov(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function Go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Kd(e,n,r,i,s),e!==null&&(e=oa(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function CC(t,e,n,r,i){switch(e){case"focusin":return cr=Go(cr,t,e,n,r,i),!0;case"dragenter":return hr=Go(hr,t,e,n,r,i),!0;case"mouseover":return dr=Go(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,Go(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,Go(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function AC(t){var e=ti(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Sv(n),e!==null){t.blockedOn=e,Rv(t.lanePriority,function(){Fe.unstable_runWithPriority(t.priority,function(){Nv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=oa(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Dv(t,e,n){ll(t)&&n.delete(e)}function bC(){for(Hd=!1;0<pn.length;){var t=pn[0];if(t.blockedOn!==null){t=oa(t.blockedOn),t!==null&&bv(t);break}for(var e=t.targetContainers;0<e.length;){var n=Zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&pn.shift()}cr!==null&&ll(cr)&&(cr=null),hr!==null&&ll(hr)&&(hr=null),dr!==null&&ll(dr)&&(dr=null),Wo.forEach(Dv),Ho.forEach(Dv)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,bC)))}function xv(t){function e(i){return Qo(i,t)}if(0<pn.length){Qo(pn[0],t);for(var n=1;n<pn.length;n++){var r=pn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Qo(cr,t),hr!==null&&Qo(hr,t),dr!==null&&Qo(dr,t),Wo.forEach(e),Ho.forEach(e),n=0;n<Ko.length;n++)r=Ko[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ko.length&&(n=Ko[0],n.blockedOn===null);)AC(n),n.blockedOn===null&&Ko.shift()}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Gd={},Lv={};Mn&&(Lv=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function hl(t){if(Gd[t])return Gd[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lv)return Gd[t]=e[n];return t}var $v=hl("animationend"),Mv=hl("animationiteration"),Fv=hl("animationstart"),Uv=hl("transitionend"),Vv=new Map,Qd=new Map,NC=["abort","abort",$v,"animationEnd",Mv,"animationIteration",Fv,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Uv,"transitionEnd","waiting","waiting"];function Yd(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Qd.set(r,e),Vv.set(r,i),Yr(i,[r])}}var RC=Fe.unstable_now;RC();var oe=8;function fs(t){if((1&t)!=0)return oe=15,1;if((2&t)!=0)return oe=14,2;if((4&t)!=0)return oe=13,4;var e=24&t;return e!==0?(oe=12,e):(t&32)!=0?(oe=11,32):(e=192&t,e!==0?(oe=10,e):(t&256)!=0?(oe=9,256):(e=3584&t,e!==0?(oe=8,e):(t&4096)!=0?(oe=7,4096):(e=4186112&t,e!==0?(oe=6,e):(e=62914560&t,e!==0?(oe=5,e):t&67108864?(oe=4,67108864):(t&134217728)!=0?(oe=3,134217728):(e=805306368&t,e!==0?(oe=2,e):(1073741824&t)!=0?(oe=1,1073741824):(oe=8,t))))))}function PC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function OC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(b(358,t))}}function Yo(t,e){var n=t.pendingLanes;if(n===0)return oe=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=oe=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=fs(u),i=oe):(a&=s,a!==0&&(r=fs(a),i=oe))}else s=n&~o,s!==0?(r=fs(s),i=oe):a!==0&&(r=fs(a),i=oe);if(r===0)return 0;if(r=31-fr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(fs(e),i<=oe)return e;oe=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fr(e),i=1<<n,r|=t[n],e&=~i;return r}function jv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=ps(24&~e),t===0?dl(10,e):t;case 10:return t=ps(192&~e),t===0?dl(8,e):t;case 8:return t=ps(3584&~e),t===0&&(t=ps(4186112&~e),t===0&&(t=512)),t;case 2:return e=ps(805306368&~e),e===0&&(e=268435456),e}throw Error(b(358,t))}function ps(t){return t&-t}function Jd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-fr(e),t[e]=n}var fr=Math.clz32?Math.clz32:LC,DC=Math.log,xC=Math.LN2;function LC(t){return t===0?32:31-(DC(t)/xC|0)|0}var $C=Fe.unstable_UserBlockingPriority,MC=Fe.unstable_runWithPriority,pl=!0;function FC(t,e,n,r){Zr||Vd();var i=Xd,s=Zr;Zr=!0;try{Iv(i,t,e,n,r)}finally{(Zr=s)||Bd()}}function UC(t,e,n,r){MC($C,Xd.bind(null,t,e,n,r))}function Xd(t,e,n,r){if(pl){var i;if((i=(e&4)==0)&&0<pn.length&&-1<Pv.indexOf(t))t=Kd(null,t,e,n,r),pn.push(t);else{var s=Zd(t,e,n,r);if(s===null)i&&Ov(t,r);else{if(i){if(-1<Pv.indexOf(t)){t=Kd(s,t,e,n,r),pn.push(t);return}if(CC(s,t,e,n,r))return;Ov(t,r)}yw(t,e,r,null,n)}}}}function Zd(t,e,n,r){var i=Md(r);if(i=ti(i),i!==null){var s=ei(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Sv(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return yw(t,e,r,i,n),null}var pr=null,ef=null,ml=null;function Bv(){if(ml)return ml;var t,e=ef,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ml=i.slice(t,1<r?1-r:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function zv(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:zv,this.isPropagationStopped=zv,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=xt(ms),Jo=me({},ms,{view:0,detail:0}),VC=xt(Jo),nf,rf,Xo,vl=me({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(nf=t.screenX-Xo.screenX,rf=t.screenY-Xo.screenY):rf=nf=0,Xo=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),qv=xt(vl),jC=me({},vl,{dataTransfer:0}),BC=xt(jC),zC=me({},Jo,{relatedTarget:0}),sf=xt(zC),qC=me({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),WC=xt(qC),HC=me({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KC=xt(HC),GC=me({},ms,{data:0}),Wv=xt(GC),QC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JC[t])?!!e[t]:!1}function of(){return XC}var ZC=me({},Jo,{key:function(t){if(t.key){var e=QC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eA=xt(ZC),tA=me({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hv=xt(tA),nA=me({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),rA=xt(nA),iA=me({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),sA=xt(iA),oA=me({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=xt(oA),uA=[9,13,27,32],af=Mn&&"CompositionEvent"in window,Zo=null;Mn&&"documentMode"in document&&(Zo=document.documentMode);var lA=Mn&&"TextEvent"in window&&!Zo,Kv=Mn&&(!af||Zo&&8<Zo&&11>=Zo),Gv=String.fromCharCode(32),Qv=!1;function Yv(t,e){switch(t){case"keyup":return uA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function cA(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(Qv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Qv?null:t;default:return null}}function hA(t,e){if(gs)return t==="compositionend"||!af&&Yv(t,e)?(t=Bv(),ml=ef=pr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dA[t.type]:e==="textarea"}function Zv(t,e,n,r){_v(r),e=_l(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ea=null,ta=null;function fA(t){dw(t,0)}function wl(t){var e=Es(t);if(uv(e))return t}function pA(t,e){if(t==="change")return e}var ew=!1;if(Mn){var uf;if(Mn){var lf="oninput"in document;if(!lf){var tw=document.createElement("div");tw.setAttribute("oninput","return;"),lf=typeof tw.oninput=="function"}uf=lf}else uf=!1;ew=uf&&(!document.documentMode||9<document.documentMode)}function nw(){ea&&(ea.detachEvent("onpropertychange",rw),ta=ea=null)}function rw(t){if(t.propertyName==="value"&&wl(ta)){var e=[];if(Zv(e,ta,t,Md(t)),t=fA,Zr)t(e);else{Zr=!0;try{Ud(t,e)}finally{Zr=!1,Bd()}}}}function mA(t,e,n){t==="focusin"?(nw(),ea=e,ta=n,ea.attachEvent("onpropertychange",rw)):t==="focusout"&&nw()}function gA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(ta)}function yA(t,e){if(t==="click")return wl(e)}function vA(t,e){if(t==="input"||t==="change")return wl(e)}function wA(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:wA,_A=Object.prototype.hasOwnProperty;function na(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!_A.call(e,n[r])||!qt(t[n[r]],e[n[r]]))return!1;return!0}function iw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sw(t,e){var n=iw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iw(n)}}function ow(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ow(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aw(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var EA=Mn&&"documentMode"in document&&11>=document.documentMode,ys=null,hf=null,ra=null,df=!1;function uw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||ys==null||ys!==sl(r)||(r=ys,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&na(ra,r)||(ra=r,r=_l(hf,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}Yd("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Yd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Yd(NC,2);for(var lw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ff=0;ff<lw.length;ff++)Qd.set(lw[ff],0);as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function hw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SC(r,e,void 0,t),t.currentTarget=null}function dw(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;hw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;hw(i,a,l),s=u}}}if(ul)throw t=qd,ul=!1,qd=null,t}function ue(t,e){var n=Tw(e),r=t+"__bubble";n.has(r)||(gw(e,t,2,!1),n.add(r))}var fw="_reactListening"+Math.random().toString(36).slice(2);function pw(t){t[fw]||(t[fw]=!0,tv.forEach(function(e){cw.has(e)||mw(e,!1,t,null),mw(e,!0,t,null)}))}function mw(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&cw.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Tw(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),gw(s,t,i,e),o.add(a))}function gw(t,e,n,r){var i=Qd.get(e);switch(i===void 0?2:i){case 0:i=FC;break;case 1:i=UC;break;default:i=Xd}n=i.bind(null,e,n,t),i=void 0,!zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yw(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_C(function(){var l=s,c=Md(n),h=[];e:{var d=Vv.get(t);if(d!==void 0){var g=tf,v=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":g=eA;break;case"focusin":v="focus",g=sf;break;case"focusout":v="blur",g=sf;break;case"beforeblur":case"afterblur":g=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=BC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rA;break;case $v:case Mv:case Fv:g=WC;break;case Uv:g=sA;break;case"scroll":g=VC;break;case"wheel":g=aA;break;case"copy":case"cut":case"paste":g=KC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hv}var I=(e&4)!=0,p=!I&&t==="scroll",f=I?d!==null?d+"Capture":null:d;I=[];for(var m=l,w;m!==null;){w=m;var y=w.stateNode;if(w.tag===5&&y!==null&&(w=y,f!==null&&(y=Bo(m,f),y!=null&&I.push(sa(m,y,w)))),p)break;m=m.return}0<I.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:I}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(v=n.relatedTarget||n.fromElement)&&(ti(v)||v[_s]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=l,v=v?ti(v):null,v!==null&&(p=ei(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=l),g!==v)){if(I=qv,y="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(I=Hv,y="onPointerLeave",f="onPointerEnter",m="pointer"),p=g==null?d:Es(g),w=v==null?d:Es(v),d=new I(y,m+"leave",g,n,c),d.target=p,d.relatedTarget=w,y=null,ti(c)===l&&(I=new I(f,m+"enter",v,n,c),I.target=w,I.relatedTarget=p,y=I),p=y,g&&v)t:{for(I=g,f=v,m=0,w=I;w;w=vs(w))m++;for(w=0,y=f;y;y=vs(y))w++;for(;0<m-w;)I=vs(I),m--;for(;0<w-m;)f=vs(f),w--;for(;m--;){if(I===f||f!==null&&I===f.alternate)break t;I=vs(I),f=vs(f)}I=null}else I=null;g!==null&&vw(h,d,g,I,!1),v!==null&&p!==null&&vw(h,p,v,I,!0)}}e:{if(d=l?Es(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=pA;else if(Xv(d))if(ew)C=vA;else{C=gA;var N=mA}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=yA);if(C&&(C=C(t,l))){Zv(h,C,n,c);break e}N&&N(t,d,l),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&Rd(d,"number",d.value)}switch(N=l?Es(l):window,t){case"focusin":(Xv(N)||N.contentEditable==="true")&&(ys=N,hf=l,ra=null);break;case"focusout":ra=hf=ys=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,uw(h,n,c);break;case"selectionchange":if(EA)break;case"keydown":case"keyup":uw(h,n,c)}var F;if(af)e:{switch(t){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else gs?Yv(t,n)&&(W="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(Kv&&n.locale!=="ko"&&(gs||W!=="onCompositionStart"?W==="onCompositionEnd"&&gs&&(F=Bv()):(pr=c,ef="value"in pr?pr.value:pr.textContent,gs=!0)),N=_l(l,W),0<N.length&&(W=new Wv(W,t,null,n,c),h.push({event:W,listeners:N}),F?W.data=F:(F=Jv(n),F!==null&&(W.data=F)))),(F=lA?cA(t,n):hA(t,n))&&(l=_l(l,"onBeforeInput"),0<l.length&&(c=new Wv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=F))}dw(h,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Bo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Bo(n,s),u!=null&&o.unshift(sa(n,u,a))):i||(u=Bo(n,s),u!=null&&o.push(sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function El(){}var pf=null,mf=null;function ww(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function gf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _w=typeof setTimeout=="function"?setTimeout:void 0,IA=typeof clearTimeout=="function"?clearTimeout:void 0;function yf(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ws(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ew(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vf=0;function TA(t){return{$$typeof:Td,toString:t,valueOf:t}}var Il=Math.random().toString(36).slice(2),mr="__reactFiber$"+Il,Tl="__reactProps$"+Il,_s="__reactContainer$"+Il,Iw="__reactEvents$"+Il;function ti(t){var e=t[mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_s]||n[mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ew(t);t!==null;){if(n=t[mr])return n;t=Ew(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[mr]||t[_s],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Sl(t){return t[Tl]||null}function Tw(t){var e=t[Iw];return e===void 0&&(e=t[Iw]=new Set),e}var wf=[],Is=-1;function gr(t){return{current:t}}function le(t){0>Is||(t.current=wf[Is],wf[Is]=null,Is--)}function ve(t,e){Is++,wf[Is]=t.current,t.current=e}var yr={},lt=gr(yr),Ct=gr(!1),ni=yr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function kl(){le(Ct),le(lt)}function Sw(t,e,n){if(lt.current!==yr)throw Error(b(168));ve(lt,e),ve(Ct,n)}function kw(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,us(e)||"Unknown",i));return me({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,ni=lt.current,ve(lt,t),ve(Ct,Ct.current),!0}function Cw(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=kw(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,le(Ct),le(lt),ve(lt,t)):le(Ct),ve(Ct,n)}var _f=null,ri=null,SA=Fe.unstable_runWithPriority,Ef=Fe.unstable_scheduleCallback,If=Fe.unstable_cancelCallback,kA=Fe.unstable_shouldYield,Aw=Fe.unstable_requestPaint,Tf=Fe.unstable_now,CA=Fe.unstable_getCurrentPriorityLevel,Al=Fe.unstable_ImmediatePriority,bw=Fe.unstable_UserBlockingPriority,Nw=Fe.unstable_NormalPriority,Rw=Fe.unstable_LowPriority,Pw=Fe.unstable_IdlePriority,Sf={},AA=Aw!==void 0?Aw:function(){},Fn=null,bl=null,kf=!1,Ow=Tf(),ct=1e4>Ow?Tf:function(){return Tf()-Ow};function Ss(){switch(CA()){case Al:return 99;case bw:return 98;case Nw:return 97;case Rw:return 96;case Pw:return 95;default:throw Error(b(332))}}function Dw(t){switch(t){case 99:return Al;case 98:return bw;case 97:return Nw;case 96:return Rw;case 95:return Pw;default:throw Error(b(332))}}function ii(t,e){return t=Dw(t),SA(t,e)}function aa(t,e,n){return t=Dw(t),Ef(t,e,n)}function mn(){if(bl!==null){var t=bl;bl=null,If(t)}xw()}function xw(){if(!kf&&Fn!==null){kf=!0;var t=0;try{var e=Fn;ii(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Fn=null}catch(n){throw Fn!==null&&(Fn=Fn.slice(t+1)),Ef(Al,mn),n}finally{kf=!1}}}var bA=Jr.ReactCurrentBatchConfig;function rn(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nl=gr(null),Rl=null,ks=null,Pl=null;function Cf(){Pl=ks=Rl=null}function Af(t){var e=Nl.current;le(Nl),t.type._context._currentValue=e}function Lw(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Cs(t,e){Rl=t,Pl=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(sn=!0),t.firstContext=null)}function Wt(t,e){if(Pl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Pl=t,e=1073741823),e={context:t,observedBits:e,next:null},ks===null){if(Rl===null)throw Error(b(308));ks=e,Rl.dependencies={lanes:0,firstContext:e,responders:null}}else ks=ks.next=e;return t._currentValue}var vr=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function $w(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Mw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ua(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,v=s;switch(a=e,d=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=v.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=me({},h,a);break e;case 2:vr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,_a|=o,t.lanes=o,t.memoizedState=h}}function Fw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Uw=new Zu.Component().refs;function Ol(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Tr(t),s=wr(r,i);s.payload=e,n!=null&&(s.callback=n),_r(t,s),Sr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Tr(t),s=wr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),_r(t,s),Sr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=Tr(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),_r(t,i),Sr(t,r,n)}};function Vw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,r)||!na(i,s):!0}function jw(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=At(e)?ni:lt.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Uw,bf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=At(e)?ni:lt.current,i.context=Ts(t,s)),ua(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ol(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),ua(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var xl=Array.isArray;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Uw&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Ll(t,e){if(t.type!=="textarea")throw Error(b(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function zw(t){function e(p,f){if(t){var m=p.lastEffect;m!==null?(m.nextEffect=f,p.lastEffect=f):p.firstEffect=p.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Ar(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags=2,f):m):(p.flags=2,f)):f}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=hp(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m,w){return f!==null&&f.elementType===m.type?(w=i(f,m.props),w.ref=la(p,f,m),w.return=p,w):(w=Zl(m.type,m.key,m.props,null,p.mode,w),w.ref=la(p,f,m),w.return=p,w)}function l(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=dp(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,y){return f===null||f.tag!==7?(f=xs(m,p.mode,w,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"||typeof f=="number")return f=hp(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lo:return m=Zl(f.type,f.key,f.props,null,p.mode,m),m.ref=la(p,null,f),m.return=p,m;case Xr:return f=dp(f,p.mode,m),f.return=p,f}if(xl(f)||Fo(f))return f=xs(f,p.mode,m,null),f.return=p,f;Ll(p,f)}return null}function d(p,f,m,w){var y=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return y!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lo:return m.key===y?m.type===ur?c(p,f,m.props.children,w,y):u(p,f,m,w):null;case Xr:return m.key===y?l(p,f,m,w):null}if(xl(m)||Fo(m))return y!==null?null:c(p,f,m,w,null);Ll(p,m)}return null}function g(p,f,m,w,y){if(typeof w=="string"||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Lo:return p=p.get(w.key===null?m:w.key)||null,w.type===ur?c(f,p,w.props.children,y,w.key):u(f,p,w,y);case Xr:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,y)}if(xl(w)||Fo(w))return p=p.get(m)||null,c(f,p,w,y,null);Ll(f,w)}return null}function v(p,f,m,w){for(var y=null,C=null,N=f,F=f=0,W=null;N!==null&&F<m.length;F++){N.index>F?(W=N,N=null):W=N.sibling;var $=d(p,N,m[F],w);if($===null){N===null&&(N=W);break}t&&N&&$.alternate===null&&e(p,N),f=s($,f,F),C===null?y=$:C.sibling=$,C=$,N=W}if(F===m.length)return n(p,N),y;if(N===null){for(;F<m.length;F++)N=h(p,m[F],w),N!==null&&(f=s(N,f,F),C===null?y=N:C.sibling=N,C=N);return y}for(N=r(p,N);F<m.length;F++)W=g(N,p,F,m[F],w),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?F:W.key),f=s(W,f,F),C===null?y=W:C.sibling=W,C=W);return t&&N.forEach(function(Te){return e(p,Te)}),y}function I(p,f,m,w){var y=Fo(m);if(typeof y!="function")throw Error(b(150));if(m=y.call(m),m==null)throw Error(b(151));for(var C=y=null,N=f,F=f=0,W=null,$=m.next();N!==null&&!$.done;F++,$=m.next()){N.index>F?(W=N,N=null):W=N.sibling;var Te=d(p,N,$.value,w);if(Te===null){N===null&&(N=W);break}t&&N&&Te.alternate===null&&e(p,N),f=s(Te,f,F),C===null?y=Te:C.sibling=Te,C=Te,N=W}if($.done)return n(p,N),y;if(N===null){for(;!$.done;F++,$=m.next())$=h(p,$.value,w),$!==null&&(f=s($,f,F),C===null?y=$:C.sibling=$,C=$);return y}for(N=r(p,N);!$.done;F++,$=m.next())$=g(N,p,F,$.value,w),$!==null&&(t&&$.alternate!==null&&N.delete($.key===null?F:$.key),f=s($,f,F),C===null?y=$:C.sibling=$,C=$);return t&&N.forEach(function(yt){return e(p,yt)}),y}return function(p,f,m,w){var y=typeof m=="object"&&m!==null&&m.type===ur&&m.key===null;y&&(m=m.props.children);var C=typeof m=="object"&&m!==null;if(C)switch(m.$$typeof){case Lo:e:{for(C=m.key,y=f;y!==null;){if(y.key===C){switch(y.tag){case 7:if(m.type===ur){n(p,y.sibling),f=i(y,m.props.children),f.return=p,p=f;break e}break;default:if(y.elementType===m.type){n(p,y.sibling),f=i(y,m.props),f.ref=la(p,y,m),f.return=p,p=f;break e}}n(p,y);break}else e(p,y);y=y.sibling}m.type===ur?(f=xs(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Zl(m.type,m.key,m.props,null,p.mode,w),w.ref=la(p,f,m),w.return=p,p=w)}return o(p);case Xr:e:{for(y=m.key;f!==null;){if(f.key===y)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=dp(m,p.mode,w),f.return=p,p=f}return o(p)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=hp(m,p.mode,w),f.return=p,p=f),o(p);if(xl(m))return v(p,f,m,w);if(Fo(m))return I(p,f,m,w);if(C&&Ll(p,m),typeof m=="undefined"&&!y)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(b(152,us(p.type)||"Component"))}return n(p,f)}}var $l=zw(!0),qw=zw(!1),ca={},gn=gr(ca),ha=gr(ca),da=gr(ca);function si(t){if(t===ca)throw Error(b(174));return t}function Rf(t,e){switch(ve(da,e),ve(ha,t),ve(gn,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}le(gn),ve(gn,e)}function As(){le(gn),le(ha),le(da)}function Ww(t){si(da.current);var e=si(gn.current),n=xd(e,t.type);e!==n&&(ve(ha,t),ve(gn,n))}function Pf(t){ha.current===t&&(le(gn),le(ha))}var we=gr(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Un=null,Er=null,yn=!1;function Hw(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Kw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Of(t){if(yn){var e=Er;if(e){var n=e;if(!Kw(t,e)){if(e=ws(n.nextSibling),!e||!Kw(t,e)){t.flags=t.flags&-1025|2,yn=!1,Un=t;return}Hw(Un,n)}Un=t,Er=ws(e.firstChild)}else t.flags=t.flags&-1025|2,yn=!1,Un=t}}function Gw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Fl(t){if(t!==Un)return!1;if(!yn)return Gw(t),yn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!gf(e,t.memoizedProps))for(e=Er;e;)Hw(t,e),e=ws(e.nextSibling);if(Gw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Er=ws(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Er=null}}else Er=Un?ws(t.stateNode.nextSibling):null;return!0}function Df(){Er=Un=null,yn=!1}var bs=[];function xf(){for(var t=0;t<bs.length;t++)bs[t]._workInProgressVersionPrimary=null;bs.length=0}var fa=Jr.ReactCurrentDispatcher,Ht=Jr.ReactCurrentBatchConfig,pa=0,ke=null,ht=null,Je=null,Ul=!1,ma=!1;function bt(){throw Error(b(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function $f(t,e,n,r,i,s){if(pa=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fa.current=t===null||t.memoizedState===null?RA:PA,t=n(r,i),ma){s=0;do{if(ma=!1,!(25>s))throw Error(b(301));s+=1,Je=ht=null,e.updateQueue=null,fa.current=OA,t=n(r,i)}while(ma)}if(fa.current=zl,e=ht!==null&&ht.next!==null,pa=0,Je=ht=ke=null,Ul=!1,e)throw Error(b(300));return t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ke.memoizedState=Je=t:Je=Je.next=t,Je}function ai(){if(ht===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=Je===null?ke.memoizedState:Je.next;if(e!==null)Je=e,ht=t;else{if(t===null)throw Error(b(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Je===null?ke.memoizedState=Je=t:Je=Je.next=t}return Je}function vn(t,e){return typeof e=="function"?e(t):e}function ga(t){var e=ai(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ht,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((pa&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,ke.lanes|=l,_a|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,qt(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ya(t){var e=ai(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qw(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(pa&t)===t)&&(e._workInProgressVersionPrimary=r,bs.push(e))),t)return n(e._source);throw bs.push(e),Error(b(350))}function Yw(t,e,n,r){var i=wt;if(i===null)throw Error(b(349));var s=e._getVersion,o=s(e._source),a=fa.current,u=a.useState(function(){return Qw(i,e,n)}),l=u[1],c=u[0];u=Je;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,v=h.source;h=h.subscribe;var I=ke;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var p=s(e._source);if(!qt(o,p)){p=n(e._source),qt(c,p)||(l(p),p=Tr(I),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var f=i.entanglements,m=p;0<m;){var w=31-fr(m),y=1<<w;f[w]|=p,m&=~y}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,f=d.setSnapshot;try{f(p(e._source));var m=Tr(I);i.mutableReadLanes|=m&i.pendingLanes}catch(w){f(function(){throw w})}})},[e,r]),qt(g,n)&&qt(v,e)&&qt(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:vn,lastRenderedState:c},t.dispatch=l=Vf.bind(null,ke,t),u.queue=t,u.baseQueue=null,c=Qw(i,e,n),u.memoizedState=u.baseState=c),c}function Jw(t,e,n){var r=ai();return Yw(r,t,e,n)}function va(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:vn,lastRenderedState:t},t=t.dispatch=Vf.bind(null,ke,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xw(t){var e=oi();return t={current:t},e.memoizedState=t}function jl(){return ai().memoizedState}function Mf(t,e,n,r){var i=oi();ke.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function Ff(t,e,n,r){var i=ai();r=r===void 0?null:r;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,r!==null&&Lf(r,o.deps)){Vl(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function Zw(t,e){return Mf(516,4,t,e)}function Bl(t,e){return Ff(516,4,t,e)}function e0(t,e){return Ff(4,2,t,e)}function t0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n0(t,e,n){return n=n!=null?n.concat([t]):null,Ff(4,2,t0.bind(null,e,t),n)}function Uf(){}function r0(t,e){var n=ai();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i0(t,e){var n=ai();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NA(t,e){var n=Ss();ii(98>n?98:n,function(){t(!0)}),ii(97<n?97:n,function(){var r=Ht.transition;Ht.transition=1;try{t(!1),e()}finally{Ht.transition=r}})}function Vf(t,e,n){var r=Lt(),i=Tr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ke||o!==null&&o===ke)ma=Ul=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,qt(u,a))return}catch{}finally{}Sr(t,i,r)}}var zl={readContext:Wt,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useOpaqueIdentifier:bt,unstable_isNewReconciler:!1},RA={readContext:Wt,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Zw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mf(4,2,t0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mf(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=oi();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Vf.bind(null,ke,t),[r.memoizedState,t]},useRef:Xw,useState:va,useDebugValue:Uf,useDeferredValue:function(t){var e=va(t),n=e[0],r=e[1];return Zw(function(){var i=Ht.transition;Ht.transition=1;try{r(t)}finally{Ht.transition=i}},[t]),n},useTransition:function(){var t=va(!1),e=t[0];return t=NA.bind(null,t[1]),Xw(t),[t,e]},useMutableSource:function(t,e,n){var r=oi();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Yw(r,t,e,n)},useOpaqueIdentifier:function(){if(yn){var t=!1,e=TA(function(){throw t||(t=!0,n("r:"+(vf++).toString(36))),Error(b(355))}),n=va(e)[1];return(ke.mode&2)==0&&(ke.flags|=516,Vl(5,function(){n("r:"+(vf++).toString(36))},void 0,null)),e}return e="r:"+(vf++).toString(36),va(e),e},unstable_isNewReconciler:!1},PA={readContext:Wt,useCallback:r0,useContext:Wt,useEffect:Bl,useImperativeHandle:n0,useLayoutEffect:e0,useMemo:i0,useReducer:ga,useRef:jl,useState:function(){return ga(vn)},useDebugValue:Uf,useDeferredValue:function(t){var e=ga(vn),n=e[0],r=e[1];return Bl(function(){var i=Ht.transition;Ht.transition=1;try{r(t)}finally{Ht.transition=i}},[t]),n},useTransition:function(){var t=ga(vn)[0];return[jl().current,t]},useMutableSource:Jw,useOpaqueIdentifier:function(){return ga(vn)[0]},unstable_isNewReconciler:!1},OA={readContext:Wt,useCallback:r0,useContext:Wt,useEffect:Bl,useImperativeHandle:n0,useLayoutEffect:e0,useMemo:i0,useReducer:ya,useRef:jl,useState:function(){return ya(vn)},useDebugValue:Uf,useDeferredValue:function(t){var e=ya(vn),n=e[0],r=e[1];return Bl(function(){var i=Ht.transition;Ht.transition=1;try{r(t)}finally{Ht.transition=i}},[t]),n},useTransition:function(){var t=ya(vn)[0];return[jl().current,t]},useMutableSource:Jw,useOpaqueIdentifier:function(){return ya(vn)[0]},unstable_isNewReconciler:!1},DA=Jr.ReactCurrentOwner,sn=!1;function Nt(t,e,n,r){e.child=t===null?qw(e,null,n,r):$l(e,t.child,n,r)}function s0(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=$f(t,e,n,r,s,i),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Vn(t,e,i)):(e.flags|=1,Nt(t,e,r,i),e.child)}function o0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!lp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,a0(t,e,o,r,i,s)):(t=Zl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:na,n(i,r)&&t.ref===e.ref)?Vn(t,e,s):(e.flags|=1,t=Ar(o,r),t.ref=e.ref,t.return=e,e.child=t)}function a0(t,e,n,r,i,s){if(t!==null&&na(t.memoizedProps,r)&&t.ref===e.ref)if(sn=!1,(s&i)!=0)(t.flags&16384)!=0&&(sn=!0);else return e.lanes=t.lanes,Vn(t,e,s);return Bf(t,e,n,r,s)}function jf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Xl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Xl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Xl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Xl(e,r);return Nt(t,e,i,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Bf(t,e,n,r,i){var s=At(n)?ni:lt.current;return s=Ts(e,s),Cs(e,i),n=$f(t,e,n,r,s,i),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Vn(t,e,i)):(e.flags|=1,Nt(t,e,n,i),e.child)}function l0(t,e,n,r,i){if(At(n)){var s=!0;Cl(e)}else s=!1;if(Cs(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),jw(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Wt(l):(l=At(n)?ni:lt.current,l=Ts(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Bw(e,o,r,l),vr=!1;var d=e.memoizedState;o.state=d,ua(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ct.current||vr?(typeof c=="function"&&(Ol(e,n,c,r),u=e.memoizedState),(a=vr||Vw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,$w(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:rn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=At(n)?ni:lt.current,u=Ts(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Bw(e,o,r,u),vr=!1,d=e.memoizedState,o.state=d,ua(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ct.current||vr?(typeof g=="function"&&(Ol(e,n,g,r),v=e.memoizedState),(l=vr||Vw(e,n,l,r,d,v,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return zf(t,e,n,r,s,i)}function zf(t,e,n,r,i,s){u0(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Cw(e,n,!1),Vn(t,e,s);r=e.stateNode,DA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$l(e,t.child,null,s),e.child=$l(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&Cw(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?Sw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sw(t,e.context,!1),Rf(t,e.containerInfo)}var ql={dehydrated:null,retryLane:0};function h0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ve(we,i&1),t===null?(r.fallback!==void 0&&Of(e),t=r.children,i=r.fallback,s?(t=d0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ql,t):typeof r.unstable_expectedLoadTime=="number"?(t=d0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ql,e.lanes=33554432,t):(n=cp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=p0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ql,r):(n=f0(t,e,r.children,n),e.memoizedState=null,n):s?(r=p0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ql,r):(n=f0(t,e,r.children,n),e.memoizedState=null,n)}function d0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=cp(e,i,0,null),n=xs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function f0(t,e,n,r){var i=t.child;return t=i.sibling,n=Ar(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function p0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Ar(o,a),t!==null?r=Ar(t,r):(r=xs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function m0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Lw(t.return,e)}function qf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function g0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=we.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m0(t,n);else if(t.tag===19)m0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(we,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qf(e,!0,n,null,s,e.lastEffect);break;case"together":qf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_a|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var y0,Wf,v0,w0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};v0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(gn.current);var s=null;switch(n){case"input":i=bd(t,i),r=bd(t,r),s=[];break;case"option":i=Pd(t,i),r=Pd(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Od(t,i),r=Od(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}Ld(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(xo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ue("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Td?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};w0=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!yn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xA(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return At(e.type)&&kl(),null;case 3:return As(),le(Ct),le(lt),xf(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Wf(e),null;case 5:Pf(e);var i=si(da.current);if(n=e.type,t!==null&&e.stateNode!=null)v0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(b(166));return null}if(t=si(gn.current),Fl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mr]=e,r[Tl]=s,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(t=0;t<ia.length;t++)ue(ia[t],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":lv(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":dv(r,s),ue("invalid",r)}Ld(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):xo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r));switch(n){case"input":il(r),hv(r,s,!0);break;case"textarea":il(r),pv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Dd.html&&(t=mv(n)),t===Dd.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mr]=e,t[Tl]=r,y0(t,e,!1,!1),e.stateNode=t,o=$d(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)ue(ia[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":lv(t,r),i=bd(t,r),ue("invalid",t);break;case"option":i=Pd(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ue("invalid",t);break;case"textarea":dv(t,r),i=Od(t,r),ue("invalid",t);break;default:i=r}Ld(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?vv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&yd(t,s,u,o))}switch(n){case"input":il(t),hv(t,r,!1);break;case"textarea":il(t),pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}ww(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)w0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));n=si(da.current),si(gn.current),Fl(e)?(r=e.stateNode,n=e.memoizedProps,r[mr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mr]=e,e.stateNode=r)}return null;case 13:return le(we),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Fl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(we.current&1)!=0?Xe===0&&(Xe=3):((Xe===0||Xe===3)&&(Xe=4),wt===null||(_a&134217727)==0&&(Rs&134217727)==0||Os(wt,dt))),(r||n)&&(e.flags|=4),null);case 4:return As(),Wf(e),t===null&&pw(e.stateNode.containerInfo),null;case 10:return Af(e),null;case 17:return At(e.type)&&kl(),null;case 19:if(le(we),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)wa(r,!1);else{if(Xe!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=64,wa(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(we,we.current&1|2),e.child}t=t.sibling}r.tail!==null&&ct()>np&&(e.flags|=64,s=!0,wa(r,!1),e.lanes=33554432)}else{if(!s)if(t=Ml(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!yn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*ct()-r.renderingStartTime>np&&n!==1073741824&&(e.flags|=64,s=!0,wa(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=ct(),n.sibling=null,e=we.current,ve(we,s?e&1|2:e&1),n):null;case 23:case 24:return up(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(b(156,e.tag))}function LA(t){switch(t.tag){case 1:At(t.type)&&kl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(As(),le(Ct),le(lt),xf(),e=t.flags,(e&64)!=0)throw Error(b(285));return t.flags=e&-4097|64,t;case 5:return Pf(t),null;case 13:return le(we),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return le(we),null;case 4:return As(),null;case 10:return Af(t),null;case 23:case 24:return up(),null;default:return null}}function Hf(t,e){try{var n="",r=e;do n+=mC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $A=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,rp=r),Kf(t,e)},n}function E0(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Kf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this),Kf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var MA=typeof WeakSet=="function"?WeakSet:Set;function I0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Cr(t,n)}else e.current=null}function FA(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:rn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&yf(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(b(163))}function UA(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(M0(n,t),KA(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:rn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Fw(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Fw(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&ww(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&xv(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(b(163))}function T0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=yv("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function S0(t,e){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(_f,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)M0(e,n);else{r=e;try{i()}catch(s){Cr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(I0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Cr(e,s)}break;case 5:I0(e);break;case 4:b0(t,e)}}function k0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:{for(var e=t.return;e!==null;){if(C0(e))break e;e=e.return}throw Error(b(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(b(161))}n.flags&16&&(Vo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||C0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Gf(t,n,e):Qf(t,n,e)}function Gf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Qf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function b0(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(b(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(S0(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(S0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Yf(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Tl]=r,t==="input"&&r.type==="radio"&&r.name!=null&&cv(n,r),$d(t,i),e=$d(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?vv(n,a):o==="dangerouslySetInnerHTML"?gv(n,a):o==="children"?Vo(n,a):yd(n,o,a,e)}switch(t){case"input":Nd(n,r);break;case"textarea":fv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?ls(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?ls(n,!!r.multiple,r.defaultValue,!0):ls(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(b(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,xv(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(tp=ct(),T0(e.child,!0)),N0(e);return;case 19:N0(e);return;case 17:return;case 23:case 24:T0(e,e.memoizedState!==null);return}throw Error(b(163))}function N0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MA),e.forEach(function(r){var i=YA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function VA(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var jA=Math.ceil,Wl=Jr.ReactCurrentDispatcher,Jf=Jr.ReactCurrentOwner,H=0,wt=null,Oe=null,dt=0,ui=0,Xf=gr(0),Xe=0,Hl=null,Ns=0,_a=0,Rs=0,Zf=0,ep=null,tp=0,np=1/0;function Ps(){np=ct()+500}var x=null,Kl=!1,rp=null,wn=null,Ir=!1,Ea=null,Ia=90,ip=[],sp=[],jn=null,Ta=0,op=null,Gl=-1,Bn=0,Ql=0,Sa=null,Yl=!1;function Lt(){return(H&48)!=0?ct():Gl!==-1?Gl:Gl=ct()}function Tr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Ss()===99?1:2;if(Bn===0&&(Bn=Ns),bA.transition!==0){Ql!==0&&(Ql=ep!==null?ep.pendingLanes:0),t=Bn;var e=4186112&~Ql;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Ss(),(H&4)!=0&&t===98?t=dl(12,Bn):(t=PC(t),t=dl(t,Bn)),t}function Sr(t,e,n){if(50<Ta)throw Ta=0,op=null,Error(b(185));if(t=Jl(t,e),t===null)return null;fl(t,e,n),t===wt&&(Rs|=e,Xe===4&&Os(t,dt));var r=Ss();e===1?(H&8)!=0&&(H&48)==0?ap(t):(Kt(t,n),H===0&&(Ps(),mn())):((H&4)==0||r!==98&&r!==99||(jn===null?jn=new Set([t]):jn.add(t)),Kt(t,n)),ep=t}function Jl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Kt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-fr(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,fs(u);var c=oe;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=Yo(t,t===wt?dt:0),e=oe,r===0)n!==null&&(n!==Sf&&If(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Sf&&If(n)}e===15?(n=ap.bind(null,t),Fn===null?(Fn=[n],bl=Ef(Al,xw)):Fn.push(n),n=Sf):e===14?n=aa(99,ap.bind(null,t)):(n=OC(e),n=aa(n,R0.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function R0(t){if(Gl=-1,Ql=Bn=0,(H&48)!=0)throw Error(b(327));var e=t.callbackNode;if(kr()&&t.callbackNode!==e)return null;var n=Yo(t,t===wt?dt:0);if(n===0)return null;var r=n,i=H;H|=16;var s=x0();(wt!==t||dt!==r)&&(Ps(),Ds(t,r));do try{qA();break}catch(a){D0(t,a)}while(1);if(Cf(),Wl.current=s,H=i,Oe!==null?r=0:(wt=null,dt=0,r=Xe),(Ns&Rs)!=0)Ds(t,0);else if(r!==0){if(r===2&&(H|=64,t.hydrate&&(t.hydrate=!1,yf(t.containerInfo)),n=jv(t),n!==0&&(r=ka(t,n))),r===1)throw e=Hl,Ds(t,0),Os(t,n),Kt(t,ct()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(b(345));case 2:li(t);break;case 3:if(Os(t,n),(n&62914560)===n&&(r=tp+500-ct(),10<r)){if(Yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_w(li.bind(null,t),r);break}li(t);break;case 4:if(Os(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-fr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=ct()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jA(n/1960))-n,10<n){t.timeoutHandle=_w(li.bind(null,t),n);break}li(t);break;case 5:li(t);break;default:throw Error(b(329))}}return Kt(t,ct()),t.callbackNode===e?R0.bind(null,t):null}function Os(t,e){for(e&=~Zf,e&=~Rs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fr(e),r=1<<n;t[n]=-1,e&=~r}}function ap(t){if((H&48)!=0)throw Error(b(327));if(kr(),t===wt&&(t.expiredLanes&dt)!=0){var e=dt,n=ka(t,e);(Ns&Rs)!=0&&(e=Yo(t,e),n=ka(t,e))}else e=Yo(t,0),n=ka(t,e);if(t.tag!==0&&n===2&&(H|=64,t.hydrate&&(t.hydrate=!1,yf(t.containerInfo)),e=jv(t),e!==0&&(n=ka(t,e))),n===1)throw n=Hl,Ds(t,0),Os(t,e),Kt(t,ct()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t),Kt(t,ct()),null}function BA(){if(jn!==null){var t=jn;jn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Kt(e,ct())})}mn()}function P0(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Ps(),mn())}}function O0(t,e){var n=H;H&=-2,H|=8;try{return t(e)}finally{H=n,H===0&&(Ps(),mn())}}function Xl(t,e){ve(Xf,ui),ui|=e,Ns|=e}function up(){ui=Xf.current,le(Xf)}function Ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IA(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:As(),le(Ct),le(lt),xf();break;case 5:Pf(r);break;case 4:As();break;case 13:le(we);break;case 19:le(we);break;case 10:Af(r);break;case 23:case 24:up()}n=n.return}wt=t,Oe=Ar(t.current,null),dt=ui=Ns=e,Xe=0,Hl=null,Zf=Rs=_a=0}function D0(t,e){do{var n=Oe;try{if(Cf(),fa.current=zl,Ul){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ul=!1}if(pa=0,Je=ht=ke=null,ma=!1,Jf.current=null,n===null||n.return===null){Xe=1,Hl=e,Oe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(we.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var v=d.memoizedState;if(v!==null)g=v.dehydrated!==null;else{var I=d.memoizedProps;g=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var p=d.updateQueue;if(p===null){var f=new Set;f.add(l),d.updateQueue=f}else p.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=wr(-1,1);m.tag=2,_r(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new $A,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var y=QA.bind(null,s,l,a);l.then(y,y)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((us(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Xe!==5&&(Xe=2),u=Hf(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var C=_0(d,s,e);Mw(d,C);break e;case 1:s=u;var N=d.type,F=d.stateNode;if((d.flags&64)==0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(wn===null||!wn.has(F)))){d.flags|=4096,e&=-e,d.lanes|=e;var W=E0(d,s,e);Mw(d,W);break e}}d=d.return}while(d!==null)}$0(n)}catch($){e=$,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function x0(){var t=Wl.current;return Wl.current=zl,t===null?zl:t}function ka(t,e){var n=H;H|=16;var r=x0();wt===t&&dt===e||Ds(t,e);do try{zA();break}catch(i){D0(t,i)}while(1);if(Cf(),H=n,Wl.current=r,Oe!==null)throw Error(b(261));return wt=null,dt=0,Xe}function zA(){for(;Oe!==null;)L0(Oe)}function qA(){for(;Oe!==null&&!kA();)L0(Oe)}function L0(t){var e=U0(t.alternate,t,ui);t.memoizedProps=t.pendingProps,e===null?$0(t):Oe=e,Jf.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=xA(n,e,ui),n!==null){Oe=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(ui&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=LA(e),n!==null){n.flags&=2047,Oe=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Xe===0&&(Xe=5)}function li(t){var e=Ss();return ii(99,WA.bind(null,t,e)),null}function WA(t,e){do kr();while(Ea!==null);if((H&48)!=0)throw Error(b(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-fr(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(jn!==null&&(r&24)==0&&jn.has(t)&&jn.delete(t),t===wt&&(Oe=wt=null,dt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=H,H|=32,Jf.current=null,pf=pl,o=aw(),cf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,v=0,I=o,p=null;t:for(;;){for(var f;I!==a||s!==0&&I.nodeType!==3||(h=c+s),I!==u||l!==0&&I.nodeType!==3||(d=c+l),I.nodeType===3&&(c+=I.nodeValue.length),(f=I.firstChild)!==null;)p=I,I=f;for(;;){if(I===o)break t;if(p===a&&++g===s&&(h=c),p===u&&++v===l&&(d=c),(f=I.nextSibling)!==null)break;I=p,p=I.parentNode}I=f}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;mf={focusedElem:o,selectionRange:a},pl=!1,Sa=null,Yl=!1,x=r;do try{HA()}catch($){if(x===null)throw Error(b(330));Cr(x,$),x=x.nextEffect}while(x!==null);Sa=null,x=r;do try{for(o=t;x!==null;){var m=x.flags;if(m&16&&Vo(x.stateNode,""),m&128){var w=x.alternate;if(w!==null){var y=w.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(m&1038){case 2:A0(x),x.flags&=-3;break;case 6:A0(x),x.flags&=-3,Yf(x.alternate,x);break;case 1024:x.flags&=-1025;break;case 1028:x.flags&=-1025,Yf(x.alternate,x);break;case 4:Yf(x.alternate,x);break;case 8:a=x,b0(o,a);var C=a.alternate;k0(a),C!==null&&k0(C)}x=x.nextEffect}}catch($){if(x===null)throw Error(b(330));Cr(x,$),x=x.nextEffect}while(x!==null);if(y=mf,w=aw(),m=y.focusedElem,o=y.selectionRange,w!==m&&m&&m.ownerDocument&&ow(m.ownerDocument.documentElement,m)){for(o!==null&&cf(m)&&(w=o.start,y=o.end,y===void 0&&(y=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(y,m.value.length)):(y=(w=m.ownerDocument||document)&&w.defaultView||window,y.getSelection&&(y=y.getSelection(),a=m.textContent.length,C=Math.min(o.start,a),o=o.end===void 0?C:Math.min(o.end,a),!y.extend&&C>o&&(a=o,o=C,C=a),a=sw(m,C),s=sw(m,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),y.removeAllRanges(),C>o?(y.addRange(w),y.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),y.addRange(w)))))),w=[],y=m;y=y.parentNode;)y.nodeType===1&&w.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)y=w[m],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}pl=!!pf,mf=pf=null,t.current=n,x=r;do try{for(m=t;x!==null;){var N=x.flags;if(N&36&&UA(m,x.alternate,x),N&128){w=void 0;var F=x.ref;if(F!==null){var W=x.stateNode;switch(x.tag){case 5:w=W;break;default:w=W}typeof F=="function"?F(w):F.current=w}}x=x.nextEffect}}catch($){if(x===null)throw Error(b(330));Cr(x,$),x=x.nextEffect}while(x!==null);x=null,AA(),H=i}else t.current=n;if(Ir)Ir=!1,Ea=t,Ia=e;else for(x=r;x!==null;)e=x.nextEffect,x.nextEffect=null,x.flags&8&&(N=x,N.sibling=null,N.stateNode=null),x=e;if(r=t.pendingLanes,r===0&&(wn=null),r===1?t===op?Ta++:(Ta=0,op=t):Ta=0,n=n.stateNode,ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(_f,n,void 0,(n.current.flags&64)==64)}catch{}if(Kt(t,ct()),Kl)throw Kl=!1,t=rp,rp=null,t;return(H&8)!=0||mn(),null}function HA(){for(;x!==null;){var t=x.alternate;Yl||Sa===null||((x.flags&8)!=0?Av(x,Sa)&&(Yl=!0):x.tag===13&&VA(t,x)&&Av(x,Sa)&&(Yl=!0));var e=x.flags;(e&256)!=0&&FA(t,x),(e&512)==0||Ir||(Ir=!0,aa(97,function(){return kr(),null})),x=x.nextEffect}}function kr(){if(Ia!==90){var t=97<Ia?97:Ia;return Ia=90,ii(t,GA)}return!1}function KA(t,e){ip.push(e,t),Ir||(Ir=!0,aa(97,function(){return kr(),null}))}function M0(t,e){sp.push(e,t),Ir||(Ir=!0,aa(97,function(){return kr(),null}))}function GA(){if(Ea===null)return!1;var t=Ea;if(Ea=null,(H&48)!=0)throw Error(b(331));var e=H;H|=32;var n=sp;sp=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(b(330));Cr(s,u)}}for(n=ip,ip=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(b(330));Cr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return H=e,mn(),!0}function F0(t,e,n){e=Hf(n,e),e=_0(t,e,1),_r(t,e),e=Lt(),t=Jl(t,1),t!==null&&(fl(t,1,e),Kt(t,e))}function Cr(t,e){if(t.tag===3)F0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){F0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){t=Hf(e,t);var i=E0(n,t,1);if(_r(n,i),i=Lt(),n=Jl(n,1),n!==null)fl(n,1,i),Kt(n,i);else if(typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function QA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(dt&n)===n&&(Xe===4||Xe===3&&(dt&62914560)===dt&&500>ct()-tp?Ds(t,0):Zf|=n),Kt(t,e)}function YA(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Ss()===99?1:2:(Bn===0&&(Bn=Ns),e=ps(62914560&~Bn),e===0&&(e=4194304))),n=Lt(),t=Jl(t,e),t!==null&&(fl(t,e,n),Kt(t,n))}var U0;U0=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)sn=!0;else if((n&r)!=0)sn=(t.flags&16384)!=0;else{switch(sn=!1,e.tag){case 3:c0(e),Df();break;case 5:Ww(e);break;case 1:At(e.type)&&Cl(e);break;case 4:Rf(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ve(Nl,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?h0(t,e,n):(ve(we,we.current&1),e=Vn(t,e,n),e!==null?e.sibling:null);ve(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return g0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(we,we.current),r)break;return null;case 23:case 24:return e.lanes=0,jf(t,e,n)}return Vn(t,e,n)}else sn=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Ts(e,lt.current),Cs(e,n),i=$f(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)){var s=!0;Cl(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bf(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ol(e,r,o,t),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=zf(null,e,r,!0,s,n)}else e.tag=0,Nt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=XA(i),t=rn(i,t),s){case 0:e=Bf(null,e,i,t,n);break e;case 1:e=l0(null,e,i,t,n);break e;case 11:e=s0(null,e,i,t,n);break e;case 14:e=o0(null,e,i,rn(i.type,t),r,n);break e}throw Error(b(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),l0(t,e,r,i,n);case 3:if(c0(e),r=e.updateQueue,t===null||r===null)throw Error(b(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,$w(t,e),ua(e,r,null,n),r=e.memoizedState.element,r===i)Df(),e=Vn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Er=ws(e.stateNode.containerInfo.firstChild),Un=e,s=yn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],bs.push(s);for(n=qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Nt(t,e,r,n),Df();e=e.child}return e;case 5:return Ww(e),t===null&&Of(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gf(r,i)?o=null:s!==null&&gf(r,s)&&(e.flags|=16),u0(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Of(e),null;case 13:return h0(t,e,n);case 4:return Rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$l(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),s0(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ve(Nl,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=qt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ct.current){e=Vn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=wr(-1,n&-n),l.tag=2,_r(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Lw(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Cs(e,n),i=Wt(i,s.unstable_observedBits),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return i=e.type,s=rn(i,e.pendingProps),s=rn(i.type,s),o0(t,e,i,s,r,n);case 15:return a0(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,At(r)?(t=!0,Cl(e)):t=!1,Cs(e,n),jw(e,r,i),Nf(e,r,i,n),zf(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 23:return jf(t,e,n);case 24:return jf(t,e,n)}throw Error(b(156,e.tag))};function JA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new JA(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XA(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===el)return 11;if(t===nl)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ur:return xs(n.children,i,s,e);case sv:o=8,i|=16;break;case vd:o=8,i|=1;break;case $o:return t=Gt(12,n,e,i|8),t.elementType=$o,t.type=$o,t.lanes=s,t;case Mo:return t=Gt(13,n,e,i),t.type=Mo,t.elementType=Mo,t.lanes=s,t;case tl:return t=Gt(19,n,e,i),t.elementType=tl,t.lanes=s,t;case Sd:return cp(n,i,s,e);case kd:return t=Gt(24,n,e,i),t.elementType=kd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wd:o=10;break e;case _d:o=9;break e;case el:o=11;break e;case nl:o=14;break e;case Ed:o=16,r=null;break e;case Id:o=22;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xs(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function cp(t,e,n,r){return t=Gt(23,t,r,e),t.elementType=Sd,t.lanes=n,t}function hp(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function dp(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZA(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.mutableSourceEagerHydrationData=null}function eb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ec(t,e,n,r){var i=e.current,s=Lt(),o=Tr(i);e:if(n){n=n._reactInternals;t:{if(ei(n)!==n||n.tag!==1)throw Error(b(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(At(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(b(171))}if(n.tag===1){var u=n.type;if(At(u)){n=kw(n,u,a);break e}}n=a}else n=yr;return e.context===null?e.context=n:e.pendingContext=n,e=wr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),_r(i,e),Sr(i,o,s),o}function fp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){V0(t,e),(t=t.alternate)&&V0(t,e)}function tb(){return null}function mp(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ZA(t,e,n!=null&&n.hydrate===!0),e=Gt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,bf(e),t[_s]=n.current,pw(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}mp.prototype.render=function(t){ec(t,this._internalRoot,null,null)};mp.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;ec(null,t,null,function(){e[_s]=null})};function Ca(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nb(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new mp(t,0,e?{hydrate:!0}:void 0)}function tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=fp(o);a.call(l)}}ec(e,o,t,i)}else{if(s=n._reactRootContainer=nb(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=fp(o);u.call(l)}}O0(function(){ec(e,o,t,i)})}return fp(o)}bv=function(t){if(t.tag===13){var e=Lt();Sr(t,4,e),pp(t,4)}};Wd=function(t){if(t.tag===13){var e=Lt();Sr(t,67108864,e),pp(t,67108864)}};Nv=function(t){if(t.tag===13){var e=Lt(),n=Tr(t);Sr(t,n,e),pp(t,n)}};Rv=function(t,e){return e()};Fd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(b(90));uv(r),Nd(r,i)}}}break;case"textarea":fv(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Ud=P0;Iv=function(t,e,n,r,i){var s=H;H|=4;try{return ii(98,t.bind(null,e,n,r,i))}finally{H=s,H===0&&(Ps(),mn())}};Vd=function(){(H&49)==0&&(BA(),kr())};Tv=function(t,e){var n=H;H|=2;try{return t(e)}finally{H=n,H===0&&(Ps(),mn())}};function j0(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(e))throw Error(b(200));return eb(t,e,null,n)}var rb={Events:[oa,Es,Sl,_v,Ev,kr,{current:!1}]},Aa={findFiberByHostInstance:ti,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},ib={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{_f=nc.inject(ib),ri=nc}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rb;zt.createPortal=j0;zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):Error(b(268,Object.keys(t)));return t=Cv(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t,e){var n=H;if((n&48)!=0)return t(e);H|=1;try{if(t)return ii(99,t.bind(null,e))}finally{H=n,mn()}};zt.hydrate=function(t,e,n){if(!Ca(e))throw Error(b(200));return tc(null,t,e,!0,n)};zt.render=function(t,e,n){if(!Ca(e))throw Error(b(200));return tc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Ca(t))throw Error(b(40));return t._reactRootContainer?(O0(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[_s]=null})}),!0):!1};zt.unstable_batchedUpdates=P0;zt.unstable_createPortal=function(t,e){return j0(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ca(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return tc(t,e,n,!1,r)};zt.version="17.0.2";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Xy.exports=zt;var bB=Xy.exports;function rc(){return rc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rc.apply(this,arguments)}var ci,gp=ci||(ci={});gp.Pop="POP";gp.Push="PUSH";gp.Replace="REPLACE";var z0=function(t){return t};function q0(t){t.preventDefault(),t.returnValue=""}function W0(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function sb(){return Math.random().toString(36).substr(2,8)}function ob(t){var e=t.pathname,n=t.search;return t=t.hash,(e===void 0?"/":e)+(n===void 0?"":n)+(t===void 0?"":t)}function Ls(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function ab(t){function e(){var p=u.location,f=l.state||{};return[f.idx,z0({pathname:p.pathname,search:p.search,hash:p.hash,state:f.usr||null,key:f.key||"default"})]}function n(p){return typeof p=="string"?p:ob(p)}function r(p,f){return f===void 0&&(f=null),z0(rc({pathname:g.pathname,hash:"",search:""},typeof p=="string"?Ls(p):p,{state:f,key:sb()}))}function i(p){h=p,p=e(),d=p[0],g=p[1],v.call({action:h,location:g})}function s(p,f){function m(){s(p,f)}var w=ci.Push,y=r(p,f);if(!I.length||(I.call({action:w,location:y,retry:m}),!1)){var C=[{usr:y.state,key:y.key,idx:d+1},n(y)];y=C[0],C=C[1];try{l.pushState(y,"",C)}catch{u.location.assign(C)}i(w)}}function o(p,f){function m(){o(p,f)}var w=ci.Replace,y=r(p,f);I.length&&(I.call({action:w,location:y,retry:m}),1)||(y=[{usr:y.state,key:y.key,idx:d},n(y)],l.replaceState(y[0],"",y[1]),i(w))}function a(p){l.go(p)}t===void 0&&(t={}),t=t.window;var u=t===void 0?document.defaultView:t,l=u.history,c=null;u.addEventListener("popstate",function(){if(c)I.call(c),c=null;else{var p=ci.Pop,f=e(),m=f[0];if(f=f[1],I.length){if(m!=null){var w=d-m;w&&(c={action:p,location:f,retry:function(){a(-1*w)}},a(w))}}else i(p)}});var h=ci.Pop;t=e();var d=t[0],g=t[1],v=W0(),I=W0();return d==null&&(d=0,l.replaceState(rc({},l.state,{idx:d}),"")),{get action(){return h},get location(){return g},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(p){return v.push(p)},block:function(p){var f=I.push(p);return I.length===1&&u.addEventListener("beforeunload",q0),function(){f(),I.length||u.removeEventListener("beforeunload",q0)}}}}/**
 * React Router v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _n(t,e){if(!t)throw new Error(e)}const H0=O.exports.createContext(null),yp=O.exports.createContext(null),ic=O.exports.createContext({outlet:null,matches:[]});function NB(t){let{to:e,replace:n,state:r}=t;ba()||_n(!1);let i=hb();return O.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function ub(t){return db()}function lb(t){_n(!1)}function cb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:s,static:o=!1}=t;ba()&&_n(!1);let a=Ob(e),u=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ls(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=O.exports.useMemo(()=>{let I=Y0(l,a);return I==null?null:{pathname:I,search:c,hash:h,state:d,key:g}},[a,l,c,h,d,g]);return v==null?null:O.exports.createElement(H0.Provider,{value:u},O.exports.createElement(yp.Provider,{children:n,value:{location:v,navigationType:i}}))}function RB(t){let{children:e,location:n}=t;return fb(vp(e),n)}function ba(){return O.exports.useContext(yp)!=null}function K0(){return ba()||_n(!1),O.exports.useContext(yp).location}function hb(){ba()||_n(!1);let{basename:t,navigator:e}=O.exports.useContext(H0),{matches:n}=O.exports.useContext(ic),{pathname:r}=K0(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=Pb(a,JSON.parse(i),r);t!=="/"&&(l.pathname=hi([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}function db(){return O.exports.useContext(ic).outlet}function fb(t,e){ba()||_n(!1);let{matches:n}=O.exports.useContext(ic),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=K0(),a;if(e){var u;let d=typeof e=="string"?Ls(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||_n(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=pb(t,{pathname:c});return kb(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:hi([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:hi([s,d.pathnameBase])})),n)}function vp(t){let e=[];return O.exports.Children.forEach(t,n=>{if(!O.exports.isValidElement(n))return;if(n.type===O.exports.Fragment){e.push.apply(e,vp(n.props.children));return}n.type!==lb&&_n(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=vp(n.props.children)),e.push(r)}),e}function pb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ls(e):e,i=Y0(r.pathname||"/",n);if(i==null)return null;let s=G0(t);mb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Sb(s[a],t,i);return o}function G0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||_n(!1),o.relativePath=o.relativePath.slice(r.length));let a=hi([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&_n(!1),G0(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Ib(a,i.index),routesMeta:u})}),e}function mb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Tb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gb=/^:\w+$/,yb=3,vb=2,wb=1,_b=10,Eb=-2,Q0=t=>t==="*";function Ib(t,e){let n=t.split("/"),r=n.length;return n.some(Q0)&&(r+=Eb),e&&(r+=vb),n.filter(i=>!Q0(i)).reduce((i,s)=>i+(gb.test(s)?yb:s===""?wb:_b),r)}function Tb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Sb(t,e,n){let r=e,{routesMeta:i}=t,s={},o="/",a=[];for(let u=0;u<i.length;++u){let l=i[u],c=u===i.length-1,h=o==="/"?n:n.slice(o.length)||"/",d=Cb({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h);if(!d)return null;Object.assign(s,d.params);let g=r[l.childrenIndex];a.push({params:s,pathname:hi([o,d.pathname]),pathnameBase:hi([o,d.pathnameBase]),route:g}),d.pathnameBase!=="/"&&(o=hi([o,d.pathnameBase])),r=g.children}return a}function kb(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>O.exports.createElement(ic.Provider,{children:r.route.element!==void 0?r.route.element:O.exports.createElement(ub,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function Cb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ab(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=bb(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function Ab(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|$)",[new RegExp(i,e?void 0:"i"),r]}function bb(t,e){try{return decodeURIComponent(t)}catch{return t}}function Nb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ls(t):t;return{pathname:n?n.startsWith("/")?n:Rb(n,e):e,search:Db(r),hash:xb(i)}}function Rb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pb(t,e,n){let r=typeof t=="string"?Ls(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=Nb(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Y0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),Ob=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Db=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function PB(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=ab({window:r}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),O.exports.createElement(cb,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var J0=Array.isArray,X0=Object.keys,Lb=Object.prototype.hasOwnProperty,$b=typeof Element!="undefined";function wp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=J0(t),r=J0(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!=0;)if(!wp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,u=e instanceof Date;if(a!=u)return!1;if(a&&u)return t.getTime()==e.getTime();var l=t instanceof RegExp,c=e instanceof RegExp;if(l!=c)return!1;if(l&&c)return t.toString()==e.toString();var h=X0(t);if(s=h.length,s!==X0(e).length)return!1;for(i=s;i--!=0;)if(!Lb.call(e,h[i]))return!1;if($b&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!=0;)if(o=h[i],!(o==="_owner"&&t.$$typeof)&&!wp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var di=function(e,n){try{return wp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}},Mb=function(e){return Fb(e)&&!Ub(e)};function Fb(t){return!!t&&typeof t=="object"}function Ub(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Bb(t)}var Vb=typeof Symbol=="function"&&Symbol.for,jb=Vb?Symbol.for("react.element"):60103;function Bb(t){return t.$$typeof===jb}function zb(t){return Array.isArray(t)?[]:{}}function sc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Na(zb(t),t,e):t}function qb(t,e,n){return t.concat(e).map(function(r){return sc(r,n)})}function Wb(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=sc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=sc(e[i],n):r[i]=Na(t[i],e[i],n)}),r}function Na(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||qb,n.isMergeableObject=n.isMergeableObject||Mb;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):Wb(t,e,n):sc(e,n)}Na.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Na(r,i,n)},{})};var _p=Na,Hb=typeof global=="object"&&global&&global.Object===Object&&global,Z0=Hb,Kb=typeof self=="object"&&self&&self.Object===Object&&self,Gb=Z0||Kb||Function("return this")(),En=Gb,Qb=En.Symbol,br=Qb,e_=Object.prototype,Yb=e_.hasOwnProperty,Jb=e_.toString,Ra=br?br.toStringTag:void 0;function Xb(t){var e=Yb.call(t,Ra),n=t[Ra];try{t[Ra]=void 0;var r=!0}catch{}var i=Jb.call(t);return r&&(e?t[Ra]=n:delete t[Ra]),i}var Zb=Object.prototype,eN=Zb.toString;function tN(t){return eN.call(t)}var nN="[object Null]",rN="[object Undefined]",t_=br?br.toStringTag:void 0;function fi(t){return t==null?t===void 0?rN:nN:t_&&t_ in Object(t)?Xb(t):tN(t)}function n_(t,e){return function(n){return t(e(n))}}var iN=n_(Object.getPrototypeOf,Object),Ep=iN;function pi(t){return t!=null&&typeof t=="object"}var sN="[object Object]",oN=Function.prototype,aN=Object.prototype,r_=oN.toString,uN=aN.hasOwnProperty,lN=r_.call(Object);function i_(t){if(!pi(t)||fi(t)!=sN)return!1;var e=Ep(t);if(e===null)return!0;var n=uN.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&r_.call(n)==lN}function cN(){this.__data__=[],this.size=0}function s_(t,e){return t===e||t!==t&&e!==e}function oc(t,e){for(var n=t.length;n--;)if(s_(t[n][0],e))return n;return-1}var hN=Array.prototype,dN=hN.splice;function fN(t){var e=this.__data__,n=oc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():dN.call(e,n,1),--this.size,!0}function pN(t){var e=this.__data__,n=oc(e,t);return n<0?void 0:e[n][1]}function mN(t){return oc(this.__data__,t)>-1}function gN(t,e){var n=this.__data__,r=oc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zn.prototype.clear=cN;zn.prototype.delete=fN;zn.prototype.get=pN;zn.prototype.has=mN;zn.prototype.set=gN;function yN(){this.__data__=new zn,this.size=0}function vN(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function wN(t){return this.__data__.get(t)}function _N(t){return this.__data__.has(t)}function Pa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var EN="[object AsyncFunction]",IN="[object Function]",TN="[object GeneratorFunction]",SN="[object Proxy]";function o_(t){if(!Pa(t))return!1;var e=fi(t);return e==IN||e==TN||e==EN||e==SN}var kN=En["__core-js_shared__"],Ip=kN,a_=function(){var t=/[^.]+$/.exec(Ip&&Ip.keys&&Ip.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function CN(t){return!!a_&&a_ in t}var AN=Function.prototype,bN=AN.toString;function mi(t){if(t!=null){try{return bN.call(t)}catch{}try{return t+""}catch{}}return""}var NN=/[\\^$.*+?()[\]{}|]/g,RN=/^\[object .+?Constructor\]$/,PN=Function.prototype,ON=Object.prototype,DN=PN.toString,xN=ON.hasOwnProperty,LN=RegExp("^"+DN.call(xN).replace(NN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $N(t){if(!Pa(t)||CN(t))return!1;var e=o_(t)?LN:RN;return e.test(mi(t))}function MN(t,e){return t==null?void 0:t[e]}function gi(t,e){var n=MN(t,e);return $N(n)?n:void 0}var FN=gi(En,"Map"),Oa=FN,UN=gi(Object,"create"),Da=UN;function VN(){this.__data__=Da?Da(null):{},this.size=0}function jN(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var BN="__lodash_hash_undefined__",zN=Object.prototype,qN=zN.hasOwnProperty;function WN(t){var e=this.__data__;if(Da){var n=e[t];return n===BN?void 0:n}return qN.call(e,t)?e[t]:void 0}var HN=Object.prototype,KN=HN.hasOwnProperty;function GN(t){var e=this.__data__;return Da?e[t]!==void 0:KN.call(e,t)}var QN="__lodash_hash_undefined__";function YN(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Da&&e===void 0?QN:e,this}function yi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yi.prototype.clear=VN;yi.prototype.delete=jN;yi.prototype.get=WN;yi.prototype.has=GN;yi.prototype.set=YN;function JN(){this.size=0,this.__data__={hash:new yi,map:new(Oa||zn),string:new yi}}function XN(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ac(t,e){var n=t.__data__;return XN(e)?n[typeof e=="string"?"string":"hash"]:n.map}function ZN(t){var e=ac(this,t).delete(t);return this.size-=e?1:0,e}function eR(t){return ac(this,t).get(t)}function tR(t){return ac(this,t).has(t)}function nR(t,e){var n=ac(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Nr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nr.prototype.clear=JN;Nr.prototype.delete=ZN;Nr.prototype.get=eR;Nr.prototype.has=tR;Nr.prototype.set=nR;var rR=200;function iR(t,e){var n=this.__data__;if(n instanceof zn){var r=n.__data__;if(!Oa||r.length<rR-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Nr(r)}return n.set(t,e),this.size=n.size,this}function $s(t){var e=this.__data__=new zn(t);this.size=e.size}$s.prototype.clear=yN;$s.prototype.delete=vN;$s.prototype.get=wN;$s.prototype.has=_N;$s.prototype.set=iR;function sR(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var oR=function(){try{var t=gi(Object,"defineProperty");return t({},"",{}),t}catch{}}(),u_=oR;function l_(t,e,n){e=="__proto__"&&u_?u_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var aR=Object.prototype,uR=aR.hasOwnProperty;function c_(t,e,n){var r=t[e];(!(uR.call(t,e)&&s_(r,n))||n===void 0&&!(e in t))&&l_(t,e,n)}function uc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],u=r?r(n[a],t[a],a,n,t):void 0;u===void 0&&(u=t[a]),i?l_(n,a,u):c_(n,a,u)}return n}function lR(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var cR="[object Arguments]";function h_(t){return pi(t)&&fi(t)==cR}var d_=Object.prototype,hR=d_.hasOwnProperty,dR=d_.propertyIsEnumerable,fR=h_(function(){return arguments}())?h_:function(t){return pi(t)&&hR.call(t,"callee")&&!dR.call(t,"callee")},pR=fR,mR=Array.isArray,xa=mR;function gR(){return!1}var f_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,p_=f_&&typeof module=="object"&&module&&!module.nodeType&&module,yR=p_&&p_.exports===f_,m_=yR?En.Buffer:void 0,vR=m_?m_.isBuffer:void 0,wR=vR||gR,g_=wR,_R=9007199254740991,ER=/^(?:0|[1-9]\d*)$/;function IR(t,e){var n=typeof t;return e=e==null?_R:e,!!e&&(n=="number"||n!="symbol"&&ER.test(t))&&t>-1&&t%1==0&&t<e}var TR=9007199254740991;function y_(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=TR}var SR="[object Arguments]",kR="[object Array]",CR="[object Boolean]",AR="[object Date]",bR="[object Error]",NR="[object Function]",RR="[object Map]",PR="[object Number]",OR="[object Object]",DR="[object RegExp]",xR="[object Set]",LR="[object String]",$R="[object WeakMap]",MR="[object ArrayBuffer]",FR="[object DataView]",UR="[object Float32Array]",VR="[object Float64Array]",jR="[object Int8Array]",BR="[object Int16Array]",zR="[object Int32Array]",qR="[object Uint8Array]",WR="[object Uint8ClampedArray]",HR="[object Uint16Array]",KR="[object Uint32Array]",ce={};ce[UR]=ce[VR]=ce[jR]=ce[BR]=ce[zR]=ce[qR]=ce[WR]=ce[HR]=ce[KR]=!0;ce[SR]=ce[kR]=ce[MR]=ce[CR]=ce[FR]=ce[AR]=ce[bR]=ce[NR]=ce[RR]=ce[PR]=ce[OR]=ce[DR]=ce[xR]=ce[LR]=ce[$R]=!1;function GR(t){return pi(t)&&y_(t.length)&&!!ce[fi(t)]}function Tp(t){return function(e){return t(e)}}var v_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,La=v_&&typeof module=="object"&&module&&!module.nodeType&&module,QR=La&&La.exports===v_,Sp=QR&&Z0.process,YR=function(){try{var t=La&&La.require&&La.require("util").types;return t||Sp&&Sp.binding&&Sp.binding("util")}catch{}}(),Ms=YR,w_=Ms&&Ms.isTypedArray,JR=w_?Tp(w_):GR,XR=JR,ZR=Object.prototype,eP=ZR.hasOwnProperty;function __(t,e){var n=xa(t),r=!n&&pR(t),i=!n&&!r&&g_(t),s=!n&&!r&&!i&&XR(t),o=n||r||i||s,a=o?lR(t.length,String):[],u=a.length;for(var l in t)(e||eP.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||IR(l,u)))&&a.push(l);return a}var tP=Object.prototype;function kp(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||tP;return t===n}var nP=n_(Object.keys,Object),rP=nP,iP=Object.prototype,sP=iP.hasOwnProperty;function oP(t){if(!kp(t))return rP(t);var e=[];for(var n in Object(t))sP.call(t,n)&&n!="constructor"&&e.push(n);return e}function E_(t){return t!=null&&y_(t.length)&&!o_(t)}function Cp(t){return E_(t)?__(t):oP(t)}function aP(t,e){return t&&uc(e,Cp(e),t)}function uP(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var lP=Object.prototype,cP=lP.hasOwnProperty;function hP(t){if(!Pa(t))return uP(t);var e=kp(t),n=[];for(var r in t)r=="constructor"&&(e||!cP.call(t,r))||n.push(r);return n}function Ap(t){return E_(t)?__(t,!0):hP(t)}function dP(t,e){return t&&uc(e,Ap(e),t)}var I_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,T_=I_&&typeof module=="object"&&module&&!module.nodeType&&module,fP=T_&&T_.exports===I_,S_=fP?En.Buffer:void 0,k_=S_?S_.allocUnsafe:void 0;function pP(t,e){if(e)return t.slice();var n=t.length,r=k_?k_(n):new t.constructor(n);return t.copy(r),r}function C_(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function mP(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function A_(){return[]}var gP=Object.prototype,yP=gP.propertyIsEnumerable,b_=Object.getOwnPropertySymbols,vP=b_?function(t){return t==null?[]:(t=Object(t),mP(b_(t),function(e){return yP.call(t,e)}))}:A_,bp=vP;function wP(t,e){return uc(t,bp(t),e)}function N_(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var _P=Object.getOwnPropertySymbols,EP=_P?function(t){for(var e=[];t;)N_(e,bp(t)),t=Ep(t);return e}:A_,R_=EP;function IP(t,e){return uc(t,R_(t),e)}function P_(t,e,n){var r=e(t);return xa(t)?r:N_(r,n(t))}function TP(t){return P_(t,Cp,bp)}function SP(t){return P_(t,Ap,R_)}var kP=gi(En,"DataView"),Np=kP,CP=gi(En,"Promise"),Rp=CP,AP=gi(En,"Set"),Pp=AP,bP=gi(En,"WeakMap"),Op=bP,O_="[object Map]",NP="[object Object]",D_="[object Promise]",x_="[object Set]",L_="[object WeakMap]",$_="[object DataView]",RP=mi(Np),PP=mi(Oa),OP=mi(Rp),DP=mi(Pp),xP=mi(Op),vi=fi;(Np&&vi(new Np(new ArrayBuffer(1)))!=$_||Oa&&vi(new Oa)!=O_||Rp&&vi(Rp.resolve())!=D_||Pp&&vi(new Pp)!=x_||Op&&vi(new Op)!=L_)&&(vi=function(t){var e=fi(t),n=e==NP?t.constructor:void 0,r=n?mi(n):"";if(r)switch(r){case RP:return $_;case PP:return O_;case OP:return D_;case DP:return x_;case xP:return L_}return e});var Dp=vi,LP=Object.prototype,$P=LP.hasOwnProperty;function MP(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&$P.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var FP=En.Uint8Array,M_=FP;function xp(t){var e=new t.constructor(t.byteLength);return new M_(e).set(new M_(t)),e}function UP(t,e){var n=e?xp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var VP=/\w*$/;function jP(t){var e=new t.constructor(t.source,VP.exec(t));return e.lastIndex=t.lastIndex,e}var F_=br?br.prototype:void 0,U_=F_?F_.valueOf:void 0;function BP(t){return U_?Object(U_.call(t)):{}}function zP(t,e){var n=e?xp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var qP="[object Boolean]",WP="[object Date]",HP="[object Map]",KP="[object Number]",GP="[object RegExp]",QP="[object Set]",YP="[object String]",JP="[object Symbol]",XP="[object ArrayBuffer]",ZP="[object DataView]",eO="[object Float32Array]",tO="[object Float64Array]",nO="[object Int8Array]",rO="[object Int16Array]",iO="[object Int32Array]",sO="[object Uint8Array]",oO="[object Uint8ClampedArray]",aO="[object Uint16Array]",uO="[object Uint32Array]";function lO(t,e,n){var r=t.constructor;switch(e){case XP:return xp(t);case qP:case WP:return new r(+t);case ZP:return UP(t,n);case eO:case tO:case nO:case rO:case iO:case sO:case oO:case aO:case uO:return zP(t,n);case HP:return new r;case KP:case YP:return new r(t);case GP:return jP(t);case QP:return new r;case JP:return BP(t)}}var V_=Object.create,cO=function(){function t(){}return function(e){if(!Pa(e))return{};if(V_)return V_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),hO=cO;function dO(t){return typeof t.constructor=="function"&&!kp(t)?hO(Ep(t)):{}}var fO="[object Map]";function pO(t){return pi(t)&&Dp(t)==fO}var j_=Ms&&Ms.isMap,mO=j_?Tp(j_):pO,gO=mO,yO="[object Set]";function vO(t){return pi(t)&&Dp(t)==yO}var B_=Ms&&Ms.isSet,wO=B_?Tp(B_):vO,_O=wO,EO=1,IO=2,TO=4,z_="[object Arguments]",SO="[object Array]",kO="[object Boolean]",CO="[object Date]",AO="[object Error]",q_="[object Function]",bO="[object GeneratorFunction]",NO="[object Map]",RO="[object Number]",W_="[object Object]",PO="[object RegExp]",OO="[object Set]",DO="[object String]",xO="[object Symbol]",LO="[object WeakMap]",$O="[object ArrayBuffer]",MO="[object DataView]",FO="[object Float32Array]",UO="[object Float64Array]",VO="[object Int8Array]",jO="[object Int16Array]",BO="[object Int32Array]",zO="[object Uint8Array]",qO="[object Uint8ClampedArray]",WO="[object Uint16Array]",HO="[object Uint32Array]",ae={};ae[z_]=ae[SO]=ae[$O]=ae[MO]=ae[kO]=ae[CO]=ae[FO]=ae[UO]=ae[VO]=ae[jO]=ae[BO]=ae[NO]=ae[RO]=ae[W_]=ae[PO]=ae[OO]=ae[DO]=ae[xO]=ae[zO]=ae[qO]=ae[WO]=ae[HO]=!0;ae[AO]=ae[q_]=ae[LO]=!1;function lc(t,e,n,r,i,s){var o,a=e&EO,u=e&IO,l=e&TO;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Pa(t))return t;var c=xa(t);if(c){if(o=MP(t),!a)return C_(t,o)}else{var h=Dp(t),d=h==q_||h==bO;if(g_(t))return pP(t,a);if(h==W_||h==z_||d&&!i){if(o=u||d?{}:dO(t),!a)return u?IP(t,dP(o,t)):wP(t,aP(o,t))}else{if(!ae[h])return i?t:{};o=lO(t,h,a)}}s||(s=new $s);var g=s.get(t);if(g)return g;s.set(t,o),_O(t)?t.forEach(function(p){o.add(lc(p,e,n,p,t,s))}):gO(t)&&t.forEach(function(p,f){o.set(f,lc(p,e,n,f,t,s))});var v=l?u?SP:TP:u?Ap:Cp,I=c?void 0:v(t);return sR(I||t,function(p,f){I&&(f=p,p=t[f]),c_(o,f,lc(p,e,n,f,t,s))}),o}var KO=4;function H_(t){return lc(t,KO)}function K_(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var GO="[object Symbol]";function Lp(t){return typeof t=="symbol"||pi(t)&&fi(t)==GO}var QO="Expected a function";function $p(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(QO);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new($p.Cache||Nr),n}$p.Cache=Nr;var YO=500;function JO(t){var e=$p(t,function(r){return n.size===YO&&n.clear(),r}),n=e.cache;return e}var XO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ZO=/\\(\\)?/g,eD=JO(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(XO,function(n,r,i,s){e.push(i?s.replace(ZO,"$1"):r||n)}),e}),tD=eD,nD=1/0;function rD(t){if(typeof t=="string"||Lp(t))return t;var e=t+"";return e=="0"&&1/t==-nD?"-0":e}var iD=1/0,G_=br?br.prototype:void 0,Q_=G_?G_.toString:void 0;function Y_(t){if(typeof t=="string")return t;if(xa(t))return K_(t,Y_)+"";if(Lp(t))return Q_?Q_.call(t):"";var e=t+"";return e=="0"&&1/t==-iD?"-0":e}function sD(t){return t==null?"":Y_(t)}function J_(t){return xa(t)?K_(t,rD):Lp(t)?[t]:C_(tD(sD(t)))}var oD=!0;function aD(t,e){if(!oD){if(t)return;var n="Warning: "+e;typeof console!="undefined"&&console.warn(n);try{throw Error(n)}catch{}}}var X_={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,Mp=Ve?Symbol.for("react.element"):60103,Fp=Ve?Symbol.for("react.portal"):60106,cc=Ve?Symbol.for("react.fragment"):60107,hc=Ve?Symbol.for("react.strict_mode"):60108,dc=Ve?Symbol.for("react.profiler"):60114,fc=Ve?Symbol.for("react.provider"):60109,pc=Ve?Symbol.for("react.context"):60110,Up=Ve?Symbol.for("react.async_mode"):60111,mc=Ve?Symbol.for("react.concurrent_mode"):60111,gc=Ve?Symbol.for("react.forward_ref"):60112,yc=Ve?Symbol.for("react.suspense"):60113,uD=Ve?Symbol.for("react.suspense_list"):60120,vc=Ve?Symbol.for("react.memo"):60115,wc=Ve?Symbol.for("react.lazy"):60116,lD=Ve?Symbol.for("react.block"):60121,cD=Ve?Symbol.for("react.fundamental"):60117,hD=Ve?Symbol.for("react.responder"):60118,dD=Ve?Symbol.for("react.scope"):60119;function $t(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Mp:switch(t=t.type,t){case Up:case mc:case cc:case dc:case hc:case yc:return t;default:switch(t=t&&t.$$typeof,t){case pc:case gc:case wc:case vc:case fc:return t;default:return e}}case Fp:return e}}}function Z_(t){return $t(t)===mc}ie.AsyncMode=Up;ie.ConcurrentMode=mc;ie.ContextConsumer=pc;ie.ContextProvider=fc;ie.Element=Mp;ie.ForwardRef=gc;ie.Fragment=cc;ie.Lazy=wc;ie.Memo=vc;ie.Portal=Fp;ie.Profiler=dc;ie.StrictMode=hc;ie.Suspense=yc;ie.isAsyncMode=function(t){return Z_(t)||$t(t)===Up};ie.isConcurrentMode=Z_;ie.isContextConsumer=function(t){return $t(t)===pc};ie.isContextProvider=function(t){return $t(t)===fc};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mp};ie.isForwardRef=function(t){return $t(t)===gc};ie.isFragment=function(t){return $t(t)===cc};ie.isLazy=function(t){return $t(t)===wc};ie.isMemo=function(t){return $t(t)===vc};ie.isPortal=function(t){return $t(t)===Fp};ie.isProfiler=function(t){return $t(t)===dc};ie.isStrictMode=function(t){return $t(t)===hc};ie.isSuspense=function(t){return $t(t)===yc};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cc||t===mc||t===dc||t===hc||t===yc||t===uD||typeof t=="object"&&t!==null&&(t.$$typeof===wc||t.$$typeof===vc||t.$$typeof===fc||t.$$typeof===pc||t.$$typeof===gc||t.$$typeof===cD||t.$$typeof===hD||t.$$typeof===dD||t.$$typeof===lD)};ie.typeOf=$t;X_.exports=ie;var eE=X_.exports,fD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tE={};tE[eE.ForwardRef]=fD;tE[eE.Memo]=pD;function Ze(){return Ze=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ze.apply(this,arguments)}function nE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var on=function(e){return typeof e=="function"},_c=function(e){return e!==null&&typeof e=="object"},mD=function(e){return String(Math.floor(Number(e)))===e},Vp=function(e){return Object.prototype.toString.call(e)==="[object String]"},jp=function(e){return _c(e)&&on(e.then)};function Qt(t,e,n,r){r===void 0&&(r=0);for(var i=J_(e);t&&r<i.length;)t=t[i[r++]];return t===void 0?n:t}function wi(t,e,n){for(var r=H_(t),i=r,s=0,o=J_(e);s<o.length-1;s++){var a=o[s],u=Qt(t,o.slice(0,s+1));if(u&&(_c(u)||Array.isArray(u)))i=i[a]=H_(u);else{var l=o[s+1];i=i[a]=mD(l)&&Number(l)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function rE(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];_c(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},rE(a,e,n,r[o])):r[o]=e}return r}var Ec=O.exports.createContext(void 0);Ec.displayName="FormikContext";Ec.Provider;Ec.Consumer;function gD(){var t=O.exports.useContext(Ec);return t||aD(!1),t}function yD(t,e){switch(e.type){case"SET_VALUES":return Ze({},t,{values:e.payload});case"SET_TOUCHED":return Ze({},t,{touched:e.payload});case"SET_ERRORS":return di(t.errors,e.payload)?t:Ze({},t,{errors:e.payload});case"SET_STATUS":return Ze({},t,{status:e.payload});case"SET_ISSUBMITTING":return Ze({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Ze({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Ze({},t,{values:wi(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Ze({},t,{touched:wi(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Ze({},t,{errors:wi(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Ze({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Ze({},t,{touched:rE(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return Ze({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Ze({},t,{isSubmitting:!1});default:return t}}var _i={},Ic={};function OB(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,u=t.enableReinitialize,l=u===void 0?!1:u,c=t.onSubmit,h=nE(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=Ze({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},h),g=O.exports.useRef(d.initialValues),v=O.exports.useRef(d.initialErrors||_i),I=O.exports.useRef(d.initialTouched||Ic),p=O.exports.useRef(d.initialStatus),f=O.exports.useRef(!1),m=O.exports.useRef({});O.exports.useEffect(function(){return f.current=!0,function(){f.current=!1}},[]);var w=O.exports.useReducer(yD,{values:d.initialValues,errors:d.initialErrors||_i,touched:d.initialTouched||Ic,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),y=w[0],C=w[1],N=O.exports.useCallback(function(_,L){return new Promise(function(V,B){var Y=d.validate(_,L);Y==null?V(_i):jp(Y)?Y.then(function(re){V(re||_i)},function(re){B(re)}):V(Y)})},[d.validate]),F=O.exports.useCallback(function(_,L){var V=d.validationSchema,B=on(V)?V(L):V,Y=L&&B.validateAt?B.validateAt(L,_):wD(_,B);return new Promise(function(re,Me){Y.then(function(){re(_i)},function(Ln){Ln.name==="ValidationError"?re(vD(Ln)):Me(Ln)})})},[d.validationSchema]),W=O.exports.useCallback(function(_,L){return new Promise(function(V){return V(m.current[_].validate(L))})},[]),$=O.exports.useCallback(function(_){var L=Object.keys(m.current).filter(function(B){return on(m.current[B].validate)}),V=L.length>0?L.map(function(B){return W(B,Qt(_,B))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(V).then(function(B){return B.reduce(function(Y,re,Me){return re==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||re&&(Y=wi(Y,L[Me],re)),Y},{})})},[W]),Te=O.exports.useCallback(function(_){return Promise.all([$(_),d.validationSchema?F(_):{},d.validate?N(_):{}]).then(function(L){var V=L[0],B=L[1],Y=L[2],re=_p.all([V,B,Y],{arrayMerge:_D});return re})},[d.validate,d.validationSchema,$,N,F]),yt=Yt(function(_){return _===void 0&&(_=y.values),C({type:"SET_ISVALIDATING",payload:!0}),Te(_).then(function(L){return f.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:L})),L})});O.exports.useEffect(function(){o&&f.current===!0&&di(g.current,d.initialValues)&&yt(g.current)},[o,yt]);var $e=O.exports.useCallback(function(_){var L=_&&_.values?_.values:g.current,V=_&&_.errors?_.errors:v.current?v.current:d.initialErrors||{},B=_&&_.touched?_.touched:I.current?I.current:d.initialTouched||{},Y=_&&_.status?_.status:p.current?p.current:d.initialStatus;g.current=L,v.current=V,I.current=B,p.current=Y;var re=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!_&&!!_.isSubmitting,errors:V,touched:B,status:Y,values:L,isValidating:!!_&&!!_.isValidating,submitCount:!!_&&!!_.submitCount&&typeof _.submitCount=="number"?_.submitCount:0}})};if(d.onReset){var Me=d.onReset(y.values,Dy);jp(Me)?Me.then(re):re()}else re()},[d.initialErrors,d.initialStatus,d.initialTouched]);O.exports.useEffect(function(){f.current===!0&&!di(g.current,d.initialValues)&&(l&&(g.current=d.initialValues,$e()),o&&yt(g.current))},[l,d.initialValues,$e,o,yt]),O.exports.useEffect(function(){l&&f.current===!0&&!di(v.current,d.initialErrors)&&(v.current=d.initialErrors||_i,C({type:"SET_ERRORS",payload:d.initialErrors||_i}))},[l,d.initialErrors]),O.exports.useEffect(function(){l&&f.current===!0&&!di(I.current,d.initialTouched)&&(I.current=d.initialTouched||Ic,C({type:"SET_TOUCHED",payload:d.initialTouched||Ic}))},[l,d.initialTouched]),O.exports.useEffect(function(){l&&f.current===!0&&!di(p.current,d.initialStatus)&&(p.current=d.initialStatus,C({type:"SET_STATUS",payload:d.initialStatus}))},[l,d.initialStatus,d.initialTouched]);var Pe=Yt(function(_){if(m.current[_]&&on(m.current[_].validate)){var L=Qt(y.values,_),V=m.current[_].validate(L);return jp(V)?(C({type:"SET_ISVALIDATING",payload:!0}),V.then(function(B){return B}).then(function(B){C({type:"SET_FIELD_ERROR",payload:{field:_,value:B}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:_,value:V}}),Promise.resolve(V))}else if(d.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),F(y.values,_).then(function(B){return B}).then(function(B){C({type:"SET_FIELD_ERROR",payload:{field:_,value:B[_]}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),ns=O.exports.useCallback(function(_,L){var V=L.validate;m.current[_]={validate:V}},[]),xn=O.exports.useCallback(function(_){delete m.current[_]},[]),ir=Yt(function(_,L){C({type:"SET_TOUCHED",payload:_});var V=L===void 0?i:L;return V?yt(y.values):Promise.resolve()}),rs=O.exports.useCallback(function(_){C({type:"SET_ERRORS",payload:_})},[]),is=Yt(function(_,L){var V=on(_)?_(y.values):_;C({type:"SET_VALUES",payload:V});var B=L===void 0?n:L;return B?yt(V):Promise.resolve()}),sr=O.exports.useCallback(function(_,L){C({type:"SET_FIELD_ERROR",payload:{field:_,value:L}})},[]),or=Yt(function(_,L,V){C({type:"SET_FIELD_VALUE",payload:{field:_,value:L}});var B=V===void 0?n:V;return B?yt(wi(y.values,_,L)):Promise.resolve()}),P=O.exports.useCallback(function(_,L){var V=L,B=_,Y;if(!Vp(_)){_.persist&&_.persist();var re=_.target?_.target:_.currentTarget,Me=re.type,Ln=re.name,ad=re.id,ud=re.value,eC=re.checked,CB=re.outerHTML,xy=re.options,tC=re.multiple;V=L||Ln||ad,B=/number|range/.test(Me)?(Y=parseFloat(ud),isNaN(Y)?"":Y):/checkbox/.test(Me)?ID(Qt(y.values,V),eC,ud):xy&&tC?ED(xy):ud}V&&or(V,B)},[or,y.values]),z=Yt(function(_){if(Vp(_))return function(L){return P(L,_)};P(_)}),G=Yt(function(_,L,V){L===void 0&&(L=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:_,value:L}});var B=V===void 0?i:V;return B?yt(y.values):Promise.resolve()}),pe=O.exports.useCallback(function(_,L){_.persist&&_.persist();var V=_.target,B=V.name,Y=V.id,re=V.outerHTML,Me=L||B||Y;G(Me,!0)},[G]),Se=Yt(function(_){if(Vp(_))return function(L){return pe(L,_)};pe(_)}),hn=O.exports.useCallback(function(_){on(_)?C({type:"SET_FORMIK_STATE",payload:_}):C({type:"SET_FORMIK_STATE",payload:function(){return _}})},[]),dn=O.exports.useCallback(function(_){C({type:"SET_STATUS",payload:_})},[]),ar=O.exports.useCallback(function(_){C({type:"SET_ISSUBMITTING",payload:_})},[]),fn=Yt(function(){return C({type:"SUBMIT_ATTEMPT"}),yt().then(function(_){var L=_ instanceof Error,V=!L&&Object.keys(_).length===0;if(V){var B;try{if(B=Kk(),B===void 0)return}catch(Y){throw Y}return Promise.resolve(B).then(function(Y){return f.current&&C({type:"SUBMIT_SUCCESS"}),Y}).catch(function(Y){if(f.current)throw C({type:"SUBMIT_FAILURE"}),Y})}else if(f.current&&(C({type:"SUBMIT_FAILURE"}),L))throw _})}),Hk=Yt(function(_){_&&_.preventDefault&&on(_.preventDefault)&&_.preventDefault(),_&&_.stopPropagation&&on(_.stopPropagation)&&_.stopPropagation(),fn().catch(function(L){console.warn("Warning: An unhandled error was caught from submitForm()",L)})}),Dy={resetForm:$e,validateForm:yt,validateField:Pe,setErrors:rs,setFieldError:sr,setFieldTouched:G,setFieldValue:or,setStatus:dn,setSubmitting:ar,setTouched:ir,setValues:is,setFormikState:hn,submitForm:fn},Kk=Yt(function(){return c(y.values,Dy)}),Gk=Yt(function(_){_&&_.preventDefault&&on(_.preventDefault)&&_.preventDefault(),_&&_.stopPropagation&&on(_.stopPropagation)&&_.stopPropagation(),$e()}),Qk=O.exports.useCallback(function(_){return{value:Qt(y.values,_),error:Qt(y.errors,_),touched:!!Qt(y.touched,_),initialValue:Qt(g.current,_),initialTouched:!!Qt(I.current,_),initialError:Qt(v.current,_)}},[y.errors,y.touched,y.values]),Yk=O.exports.useCallback(function(_){return{setValue:function(V,B){return or(_,V,B)},setTouched:function(V,B){return G(_,V,B)},setError:function(V){return sr(_,V)}}},[or,G,sr]),Jk=O.exports.useCallback(function(_){var L=_c(_),V=L?_.name:_,B=Qt(y.values,V),Y={name:V,value:B,onChange:z,onBlur:Se};if(L){var re=_.type,Me=_.value,Ln=_.as,ad=_.multiple;re==="checkbox"?Me===void 0?Y.checked=!!B:(Y.checked=!!(Array.isArray(B)&&~B.indexOf(Me)),Y.value=Me):re==="radio"?(Y.checked=B===Me,Y.value=Me):Ln==="select"&&ad&&(Y.value=Y.value||[],Y.multiple=!0)}return Y},[Se,z,y.values]),od=O.exports.useMemo(function(){return!di(g.current,y.values)},[g.current,y.values]),Xk=O.exports.useMemo(function(){return typeof a!="undefined"?od?y.errors&&Object.keys(y.errors).length===0:a!==!1&&on(a)?a(d):a:y.errors&&Object.keys(y.errors).length===0},[a,od,y.errors,d]),Zk=Ze({},y,{initialValues:g.current,initialErrors:v.current,initialTouched:I.current,initialStatus:p.current,handleBlur:Se,handleChange:z,handleReset:Gk,handleSubmit:Hk,resetForm:$e,setErrors:rs,setFormikState:hn,setFieldTouched:G,setFieldValue:or,setFieldError:sr,setStatus:dn,setSubmitting:ar,setTouched:ir,setValues:is,submitForm:fn,validateForm:yt,validateField:Pe,isValid:Xk,dirty:od,unregisterField:xn,registerField:ns,getFieldProps:Jk,getFieldMeta:Qk,getFieldHelpers:Yk,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return Zk}function vD(t){var e={};if(t.inner){if(t.inner.length===0)return wi(e,t.path,t.message);for(var n=t.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var o=s;Qt(e,o.path)||(e=wi(e,o.path,o.message))}}return e}function wD(t,e,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var i=Bp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r})}function Bp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||i_(i)?Bp(i):i!==""?i:void 0}):i_(t[r])?e[r]=Bp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function _D(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]=="undefined"){var a=n.clone!==!1,u=a&&n.isMergeableObject(s);r[o]=u?_p(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=_p(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function ED(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function ID(t,e,n){if(typeof t=="boolean")return Boolean(e);var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return Boolean(e);return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var TD=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?O.exports.useLayoutEffect:O.exports.useEffect;function Yt(t){var e=O.exports.useRef(t);return TD(function(){e.current=t}),O.exports.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var SD=O.exports.forwardRef(function(t,e){var n=t.action,r=nE(t,["action"]),i=n!=null?n:"#",s=gD(),o=s.handleReset,a=s.handleSubmit;return O.exports.createElement("form",Object.assign({onSubmit:a,ref:e,onReset:o,action:i},r))});SD.displayName="Form";var kD={exports:{}},$a={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CD=O.exports,iE=60103;$a.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var sE=Symbol.for;iE=sE("react.element"),$a.Fragment=sE("react.fragment")}var AD=CD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bD=Object.prototype.hasOwnProperty,ND={key:!0,ref:!0,__self:!0,__source:!0};function oE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bD.call(e,r)&&!ND.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iE,type:t,key:s,ref:o,props:i,_owner:AD.current}}$a.jsx=oE;$a.jsxs=oE;kD.exports=$a;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},PD=function(t){const e=aE(t);return uE.encodeByteArray(e,!0)},lE=function(t){return PD(t).replace(/\./g,"")},OD=function(t){try{return uE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DD(n)||(t[n]=Tc(t[n],e[n]));return t}function DD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lE(JSON.stringify(n)),lE(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cE(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function zp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $D(){return typeof self=="object"&&self.self===self}function qp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MD(){return he().indexOf("Electron/")>=0}function Wp(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FD(){return he().indexOf("MSAppHost/")>=0}function UD(){return!zp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kc(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=VD,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function jD(t,e){return t.replace(BD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dE(s)&&dE(o)){if(!Hp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fE(t,e){const n=new qD(t,e);return n.subscribe.bind(n)}class qD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kp),i.error===void 0&&(i.error=Kp),i.complete===void 0&&(i.complete=Kp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GD(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KD(t){return t===Ii?void 0:t}function GD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const pE={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},YD=ee.INFO,JD={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},XD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=YD,this._logHandler=XD,this._userLogHandler=null,Gp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function ZD(t){Gp.forEach(e=>{e.setLogLevel(t)})}function ex(t,e){for(const n of Gp){let r=null;e&&e.level&&(r=pE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qp="@firebase/app",mE="0.7.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Cc("@firebase/app"),rx="@firebase/app-compat",ix="@firebase/analytics-compat",sx="@firebase/analytics",ox="@firebase/app-check-compat",ax="@firebase/app-check",ux="@firebase/auth",lx="@firebase/auth-compat",cx="@firebase/database",hx="@firebase/database-compat",dx="@firebase/functions",fx="@firebase/functions-compat",px="@firebase/installations",mx="@firebase/installations-compat",gx="@firebase/messaging",yx="@firebase/messaging-compat",vx="@firebase/performance",wx="@firebase/performance-compat",_x="@firebase/remote-config",Ex="@firebase/remote-config-compat",Ix="@firebase/storage",Tx="@firebase/storage-compat",Sx="@firebase/firestore",kx="@firebase/firestore-compat",Cx="firebase",Ax="9.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]",bx={[Qp]:"fire-core",[rx]:"fire-core-compat",[sx]:"fire-analytics",[ix]:"fire-analytics-compat",[ax]:"fire-app-check",[ox]:"fire-app-check-compat",[ux]:"fire-auth",[lx]:"fire-auth-compat",[cx]:"fire-rtdb",[hx]:"fire-rtdb-compat",[dx]:"fire-fn",[fx]:"fire-fn-compat",[px]:"fire-iid",[mx]:"fire-iid-compat",[gx]:"fire-fcm",[yx]:"fire-fcm-compat",[vx]:"fire-perf",[wx]:"fire-perf-compat",[_x]:"fire-rc",[Ex]:"fire-rc-compat",[Ix]:"fire-gcs",[Tx]:"fire-gcs-compat",[Sx]:"fire-fst",[kx]:"fire-fst-compat","fire-js":"fire-js",[Cx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Fa=new Map;function Ac(t,e){try{t.container.addComponent(e)}catch(n){Yp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gE(t,e){t.container.addOrOverwriteComponent(e)}function Si(t){const e=t.name;if(Fa.has(e))return Yp.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,t);for(const n of Rr.values())Ac(n,t);return!0}function yE(t,e){return t.container.getProvider(e)}function Nx(t,e,n=Ti){yE(t,e).clearInstance(n)}function Rx(){Fa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ua=new Ei("app","Firebase",Px);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ua.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=Ax;function vE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ti,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ua.create("bad-app-name",{appName:String(r)});const i=Rr.get(r);if(i){if(Hp(t,i.options)&&Hp(n,i.config))return i;throw Ua.create("duplicate-app",{appName:r})}const s=new QD(r);for(const a of Fa.values())s.addComponent(a);const o=new Ox(t,n,s);return Rr.set(r,o),o}function Dx(t=Ti){const e=Rr.get(t);if(!e)throw Ua.create("no-app",{appName:t});return e}function xx(){return Array.from(Rr.values())}async function wE(t){const e=t.name;Rr.has(e)&&(Rr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function In(t,e,n){var r;let i=(r=bx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yp.warn(a.join(" "));return}Si(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function _E(t,e){if(t!==null&&typeof t!="function")throw Ua.create("invalid-log-argument");ex(t,e)}function EE(t){ZD(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){Si(new qn("platform-logger",e=>new tx(e),"PRIVATE")),In(Qp,mE,t),In(Qp,mE,"esm2017"),In("fire-js","")}Lx("");var $x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:ki,_DEFAULT_ENTRY_NAME:Ti,_addComponent:Ac,_addOrOverwriteComponent:gE,_apps:Rr,_clearComponents:Rx,_components:Fa,_getProvider:yE,_registerComponent:Si,_removeServiceInstance:Nx,deleteApp:wE,getApp:Dx,getApps:xx,initializeApp:vE,onLog:_E,registerVersion:In,setLogLevel:EE,FirebaseError:Jt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n){this._delegate=e,this.firebase=n,Ac(e,new qn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),wE(this._delegate)))}_getService(e,n=Ti){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ti){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ac(this._delegate,e)}_addOrOverwriteComponent(e){gE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},IE=new Ei("app-compat","Firebase",Fx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:In,setLogLevel:EE,onLog:_E,apps:null,SDK_VERSION:ki,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:$x}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ti,!hE(e,l))throw IE.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=vE(l,c);if(hE(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Si(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw IE.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&Tc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){const t=Ux(Mx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:TE,extendNamespace:e,createSubscribe:fE,ErrorFactory:Ei,deepExtend:Tc});function e(n){Tc(t,n)}return t}const Vx=TE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Cc("@firebase/app-compat"),jx="@firebase/app-compat",Bx="0.1.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){In(jx,Bx,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($D()&&self.firebase!==void 0){SE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&SE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Va=Vx;zx();var qx="firebase",Wx="9.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Va.registerVersion(qx,Wx,"app-compat");var Hx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Jp=Jp||{},K=Hx||self;function bc(){}function Xp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ja(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Kx(t){return Object.prototype.hasOwnProperty.call(t,Zp)&&t[Zp]||(t[Zp]=++Gx)}var Zp="closure_uid_"+(1e9*Math.random()>>>0),Gx=0;function Qx(t,e,n){return t.call.apply(t.bind,arguments)}function Yx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=Qx:et=Yx,et.apply(null,arguments)}function Nc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Pr(){this.s=this.s,this.o=this.o}var Jx=0,Xx={};Pr.prototype.s=!1;Pr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Jx!=0)){var t=Kx(this);delete Xx[t]}};Pr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},CE=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Zx(t){e:{var e=qL;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function AE(t){return Array.prototype.concat.apply([],arguments)}function em(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rc(t){return/^[\s\xa0]*$/.test(t)}var bE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _t(t,e){return t.indexOf(e)!=-1}function tm(t,e){return t<e?-1:t>e?1:0}var Et;e:{var NE=K.navigator;if(NE){var RE=NE.userAgent;if(RE){Et=RE;break e}}Et=""}function nm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PE(t){const e={};for(const n in t)e[n]=t[n];return e}var OE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function DE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<OE.length;s++)n=OE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rm(t){return rm[" "](t),t}rm[" "]=bc;function eL(t){var e=rL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tL=_t(Et,"Opera"),Vs=_t(Et,"Trident")||_t(Et,"MSIE"),xE=_t(Et,"Edge"),im=xE||Vs,LE=_t(Et,"Gecko")&&!(_t(Et.toLowerCase(),"webkit")&&!_t(Et,"Edge"))&&!(_t(Et,"Trident")||_t(Et,"MSIE"))&&!_t(Et,"Edge"),nL=_t(Et.toLowerCase(),"webkit")&&!_t(Et,"Edge");function $E(){var t=K.document;return t?t.documentMode:void 0}var Pc;e:{var sm="",om=function(){var t=Et;if(LE)return/rv:([^\);]+)(\)|;)/.exec(t);if(xE)return/Edge\/([\d\.]+)/.exec(t);if(Vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nL)return/WebKit\/(\S+)/.exec(t);if(tL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(om&&(sm=om?om[1]:""),Vs){var am=$E();if(am!=null&&am>parseFloat(sm)){Pc=String(am);break e}}Pc=sm}var rL={};function iL(){return eL(function(){let t=0;const e=bE(String(Pc)).split("."),n=bE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=tm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||tm(i[2].length==0,s[2].length==0)||tm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var um;if(K.document&&Vs){var ME=$E();um=ME||parseInt(Pc,10)||void 0}else um=void 0;var sL=um,oL=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",bc,e),K.removeEventListener("test",bc,e)}catch{}return t}();function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};function Ba(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(LE){e:{try{rm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ba.Z.h.call(this)}}tt(Ba,ft);var aL={2:"touch",3:"pen",4:"mouse"};Ba.prototype.h=function(){Ba.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var za="closure_listenable_"+(1e6*Math.random()|0),uL=0;function lL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++uL,this.ca=this.fa=!1}function Oc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Dc(t){this.src=t,this.g={},this.h=0}Dc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new lL(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function lm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=kE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Oc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var hm="closure_lm_"+(1e6*Math.random()|0),dm={};function FE(t,e,n,r,i){if(r&&r.once)return VE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)FE(t,e[s],n,r,i);return null}return n=gm(n),t&&t[za]?t.N(e,n,ja(r)?!!r.capture:!!r,i):UE(t,e,n,!1,r,i)}function UE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ja(i)?!!i.capture:!!i,a=pm(t);if(a||(t[hm]=a=new Dc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=cL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)oL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(BE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cL(){function t(n){return e.call(t.src,t.listener,n)}var e=hL;return t}function VE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)VE(t,e[s],n,r,i);return null}return n=gm(n),t&&t[za]?t.O(e,n,ja(r)?!!r.capture:!!r,i):UE(t,e,n,!0,r,i)}function jE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jE(t,e[s],n,r,i);else r=ja(r)?!!r.capture:!!r,n=gm(n),t&&t[za]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cm(s,n,r,i),-1<n&&(Oc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cm(e,n,r,i)),(n=-1<t?e[t]:null)&&fm(n))}function fm(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[za])lm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(BE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pm(e))?(lm(n,t),n.h==0&&(n.src=null,e[hm]=null)):Oc(t)}}}function BE(t){return t in dm?dm[t]:dm[t]="on"+t}function hL(t,e){if(t.ca)t=!0;else{e=new Ba(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&fm(t),t=n.call(r,e)}return t}function pm(t){return t=t[hm],t instanceof Dc?t:null}var mm="__closure_events_fn_"+(1e9*Math.random()>>>0);function gm(t){return typeof t=="function"?t:(t[mm]||(t[mm]=function(e){return t.handleEvent(e)}),t[mm])}function je(){Pr.call(this),this.i=new Dc(this),this.P=this,this.I=null}tt(je,Pr);je.prototype[za]=!0;je.prototype.removeEventListener=function(t,e,n,r){jE(this,t,e,n,r)};function nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(r,t),DE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xc(o,r,!0,e)&&i}if(o=e.g=t,i=xc(o,r,!0,e)&&i,i=xc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xc(o,r,!1,e)&&i}je.prototype.M=function(){if(je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Oc(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&lm(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ym=K.JSON.stringify;function dL(){var t=qE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fL{constructor(){this.h=this.g=null}add(e,n){const r=zE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pL,t=>t.reset());class pL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mL(t){K.setTimeout(()=>{throw t},0)}function vm(t,e){wm||gL(),_m||(wm(),_m=!0),qE.add(t,e)}var wm;function gL(){var t=K.Promise.resolve(void 0);wm=function(){t.then(yL)}}var _m=!1,qE=new fL;function yL(){for(var t;t=dL();){try{t.h.call(t.g)}catch(n){mL(n)}var e=zE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_m=!1}function Lc(t,e){je.call(this),this.h=t||1,this.g=e||K,this.j=et(this.kb,this),this.l=Date.now()}tt(Lc,je);D=Lc.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),nt(this,"tick"),this.da&&(Em(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Em(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Lc.Z.M.call(this),Em(this),delete this.g};function Im(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function WE(t){t.g=Im(()=>{t.g=null,t.i&&(t.i=!1,WE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vL extends Pr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:WE(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(t){Pr.call(this),this.h=t,this.g={}}tt(qa,Pr);var HE=[];function KE(t,e,n,r){Array.isArray(n)||(n&&(HE[0]=n.toString()),n=HE);for(var i=0;i<n.length;i++){var s=FE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function GE(t){nm(t.g,function(e,n){this.g.hasOwnProperty(n)&&fm(e)},t),t.g={}}qa.prototype.M=function(){qa.Z.M.call(this),GE(this)};qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $c(){this.g=!0}$c.prototype.Aa=function(){this.g=!1};function wL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _L(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function js(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+IL(t,n)+(r?" "+r:"")})}function EL(t,e){t.info(function(){return"TIMEOUT: "+e})}$c.prototype.info=function(){};function IL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ym(n)}catch{return e}}var Ci={},QE=null;function Mc(){return QE=QE||new je}Ci.Ma="serverreachability";function YE(t){ft.call(this,Ci.Ma,t)}tt(YE,ft);function Wa(t){const e=Mc();nt(e,new YE(e,t))}Ci.STAT_EVENT="statevent";function JE(t,e){ft.call(this,Ci.STAT_EVENT,t),this.stat=e}tt(JE,ft);function It(t){const e=Mc();nt(e,new JE(e,t))}Ci.Na="timingevent";function XE(t,e){ft.call(this,Ci.Na,t),this.size=e}tt(XE,ft);function Ha(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Fc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ZE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tm(){}Tm.prototype.h=null;function eI(t){return t.h||(t.h=t.i())}function tI(){}var Ka={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Sm(){ft.call(this,"d")}tt(Sm,ft);function km(){ft.call(this,"c")}tt(km,ft);var Cm;function Uc(){}tt(Uc,Tm);Uc.prototype.g=function(){return new XMLHttpRequest};Uc.prototype.i=function(){return{}};Cm=new Uc;function Ga(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new qa(this),this.P=TL,t=im?125:void 0,this.W=new Lc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new nI}function nI(){this.i=null,this.g="",this.h=!1}var TL=45e3,Am={},Vc={};D=Ga.prototype;D.setTimeout=function(t){this.P=t};function bm(t,e,n){t.K=1,t.v=Wc(Wn(e)),t.s=n,t.U=!0,rI(t,null)}function rI(t,e){t.F=Date.now(),Qa(t),t.A=Wn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dI(n.h,"t",r),t.C=0,n=t.l.H,t.h=new nI,t.g=LI(t.l,n?e:null,!t.s),0<t.O&&(t.L=new vL(et(t.Ia,t,t.g),t.O)),KE(t.V,t.g,"readystatechange",t.gb),e=t.H?PE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Wa(1),wL(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&Hn(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const c=Hn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||im||this.g&&(this.h.h||this.g.ga()||SI(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Wa(3):Wa(2)),jc(this);var n=this.g.ba();this.N=n;t:if(iI(this)){var r=SI(this.g);t="";var i=r.length,s=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ai(this),Ya(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,_L(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rc(a)){var l=a;break t}}l=null}if(n=l)js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nm(this,n);else{this.i=!1,this.o=3,It(12),Ai(this),Ya(this);break e}}this.U?(sI(this,c,o),im&&this.i&&c==3&&(KE(this.V,this.W,"tick",this.fb),this.W.start())):(js(this.j,this.m,o,null),Nm(this,o)),c==4&&Ai(this),this.i&&!this.I&&(c==4?PI(this.l,this):(this.i=!1,Qa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Ai(this),Ya(this)}}}catch{}finally{}};function iI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function sI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=SL(t,n),i==Vc){e==4&&(t.o=4,It(14),r=!1),js(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Am){t.o=4,It(15),js(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else js(t.j,t.m,i,null),Nm(t,i);iI(t)&&i!=Vc&&i!=Am&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vm(e),e.L=!0,It(11))):(js(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),Ya(t))}D.fb=function(){if(this.g){var t=Hn(this.g),e=this.g.ga();this.C<e.length&&(jc(this),sI(this,t,e),this.i&&t!=4&&Qa(this))}};function SL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vc:(n=Number(e.substring(n,r)),isNaN(n)?Am:(r+=1,r+n>e.length?Vc:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Ai(this)};function Qa(t){t.Y=Date.now()+t.P,oI(t,t.P)}function oI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ha(et(t.eb,t),e)}function jc(t){t.B&&(K.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(EL(this.j,this.A),this.K!=2&&(Wa(3),It(17)),Ai(this),this.o=2,Ya(this)):oI(this,this.Y-t)};function Ya(t){t.l.G==0||t.I||PI(t.l,t)}function Ai(t){jc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Em(t.W),GE(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Om(n.i,t))){if(n.I=t.N,!t.J&&Om(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jc(n),Qc(n);else break e;Um(n),It(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ha(et(n.ab,n),6e3));if(1>=mI(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ri(n,11)}else if((t.J||n.g==t)&&Jc(n),!Rc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(_t(v,"spdy")||_t(v,"quic")||_t(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Dm(s,s.h),s.h=null))}if(r.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,ge(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=xI(r,r.H?r.la:null,r.W),o.J){gI(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(jc(a),Qa(a)),r.g=o}else NI(r);0<n.l.length&&Yc(n)}else l[0]!="stop"&&l[0]!="close"||Ri(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ri(n,7):Mm(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Wa(4)}catch{}}function kL(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Rm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xp(t)||typeof t=="string")CE(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xp(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=kL(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Bs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Bs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Bs.prototype;D.R=function(){Pm(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Pm(this),this.g.concat()};function Pm(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];bi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],bi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}D.get=function(t,e){return bi(this.h,t)?this.h[t]:e};D.set=function(t,e){bi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function bi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var aI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function CL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ni(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ni){this.g=e!==void 0?e:t.g,Bc(this,t.j),this.s=t.s,zc(this,t.i),qc(this,t.m),this.l=t.l,e=t.h;var n=new Za;n.i=e.i,e.g&&(n.g=new Bs(e.g),n.h=e.h),uI(this,n),this.o=t.o}else t&&(n=String(t).match(aI))?(this.g=!!e,Bc(this,n[1]||"",!0),this.s=Ja(n[2]||""),zc(this,n[3]||"",!0),qc(this,n[4]),this.l=Ja(n[5]||"",!0),uI(this,n[6]||"",!0),this.o=Ja(n[7]||"")):(this.g=!!e,this.h=new Za(null,this.g))}Ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xa(e,lI,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xa(e,lI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xa(n,n.charAt(0)=="/"?PL:RL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xa(n,DL)),t.join("")};function Wn(t){return new Ni(t)}function Bc(t,e,n){t.j=n?Ja(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zc(t,e,n){t.i=n?Ja(e,!0):e}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uI(t,e,n){e instanceof Za?(t.h=e,xL(t.h,t.g)):(n||(e=Xa(e,OL)),t.h=new Za(e,t.g))}function ge(t,e,n){t.h.set(e,n)}function Wc(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function AL(t){return t instanceof Ni?Wn(t):new Ni(t,void 0)}function bL(t,e,n,r){var i=new Ni(null,void 0);return t&&Bc(i,t),e&&zc(i,e),n&&qc(i,n),r&&(i.l=r),i}function Ja(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lI=/[#\/\?@]/g,RL=/[#\?:]/g,PL=/[#\?]/g,OL=/[#\?@]/g,DL=/#/g;function Za(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Or(t){t.g||(t.g=new Bs,t.h=0,t.i&&CL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Za.prototype;D.add=function(t,e){Or(this),this.i=null,t=zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cI(t,e){Or(t),e=zs(t,e),bi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,bi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Pm(t)))}function hI(t,e){return Or(t),e=zs(t,e),bi(t.g.h,e)}D.forEach=function(t,e){Or(this),this.g.forEach(function(n,r){CE(n,function(i){t.call(e,i,r,this)},this)},this)};D.T=function(){Or(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};D.R=function(t){Or(this);var e=[];if(typeof t=="string")hI(this,t)&&(e=AE(e,this.g.get(zs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=AE(e,t[n])}return e};D.set=function(t,e){return Or(this),this.i=null,t=zs(this,t),hI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function dI(t,e,n){cI(t,e),0<n.length&&(t.i=null,t.g.set(zs(t,e),em(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xL(t,e){e&&!t.j&&(Or(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cI(this,r),dI(this,i,n))},t)),t.j=e}var LL=class{constructor(t,e){this.h=t,this.g=e}};function fI(t){this.l=t||$L,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $L=10;function pI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mI(t){return t.h?1:t.g?t.g.size:0}function Om(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dm(t,e){t.g?t.g.add(e):t.h=e}function gI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fI.prototype.cancel=function(){if(this.i=yI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return em(t.i)}function xm(){}xm.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};xm.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function ML(){this.g=new xm}function FL(t,e,n){const r=n||"";try{Rm(t,function(i,s){let o=i;ja(i)&&(o=ym(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function UL(t,e){const n=new $c;if(K.Image){const r=new Image;r.onload=Nc(Hc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Nc(Hc,n,r,"TestLoadImage: error",!1,e),r.onabort=Nc(Hc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Nc(Hc,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Hc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function eu(t){this.l=t.$b||null,this.j=t.ib||!1}tt(eu,Tm);eu.prototype.g=function(){return new Kc(this.l,this.j)};eu.prototype.i=function(t){return function(){return t}}({});function Kc(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Kc,je);var Lm=0;D=Kc.prototype;D.open=function(t,e){if(this.readyState!=Lm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nu(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tu(this)),this.readyState=Lm};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nu(this)),this.g&&(this.readyState=3,nu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vI(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function vI(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tu(this):nu(this),this.readyState==3&&vI(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,tu(this))};D.Ta=function(t){this.g&&(this.response=t,tu(this))};D.ha=function(){this.g&&tu(this)};function tu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nu(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VL=K.JSON.parse;function Ce(t){je.call(this),this.headers=new Bs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wI,this.K=this.L=!1}tt(Ce,je);var wI="",jL=/^https?$/i,BL=["POST","PUT"];D=Ce.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cm.g(),this.C=this.u?eI(this.u):eI(Cm),this.g.onreadystatechange=et(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){_I(this,s);return}t=n||"";const i=new Bs(this.headers);r&&Rm(r,function(s,o){i.set(o,s)}),r=Zx(i.T()),n=K.FormData&&t instanceof K.FormData,!(0<=kE(BL,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{TI(this),0<this.B&&((this.K=zL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.pa,this)):this.A=Im(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){_I(this,s)}};function zL(t){return Vs&&iL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function qL(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Jp!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function _I(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EI(t),Gc(t)}function EI(t){t.D||(t.D=!0,nt(t,"complete"),nt(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Gc(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),Ce.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?II(this):this.cb())};D.cb=function(){II(this)};function II(t){if(t.h&&typeof Jp!="undefined"&&(!t.C[1]||Hn(t)!=4||t.ba()!=2)){if(t.v&&Hn(t)==4)Im(t.Fa,0,t);else if(nt(t,"readystatechange"),Hn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(aI)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!jL.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<Hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",EI(t)}}finally{Gc(t)}}}}function Gc(t,e){if(t.g){TI(t);const n=t.g,r=t.C[0]?bc:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function TI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Hn(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VL(e)}};function SI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function WL(t){let e="";return nm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $m(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=WL(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function ru(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kI(t){this.za=0,this.l=[],this.h=new $c,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ru("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ru("baseRetryDelayMs",5e3,t),this.$a=ru("retryDelaySeedMs",1e4,t),this.Ya=ru("forwardChannelMaxRetries",2,t),this.ra=ru("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new fI(t&&t.concurrentRequestLimit),this.Ca=new ML,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=kI.prototype;D.ma=8;D.G=1;function Mm(t){if(CI(t),t.G==3){var e=t.V++,n=Wn(t.F);ge(n,"SID",t.J),ge(n,"RID",e),ge(n,"TYPE","terminate"),iu(t,n),e=new Ga(t,t.h,e,void 0),e.K=2,e.v=Wc(Wn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=LI(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qa(e)}DI(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Qc(t){t.g&&(Vm(t),t.g.cancel(),t.g=null)}function CI(t){Qc(t),t.u&&(K.clearTimeout(t.u),t.u=null),Jc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Fm(t,e){t.l.push(new LL(t.Za++,e)),t.G==3&&Yc(t)}function Yc(t){pI(t.i)||t.m||(t.m=!0,vm(t.Ha,t),t.C=0)}function HL(t,e){return mI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ha(et(t.Ha,t,e),OI(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ga(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=PE(s),DE(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=bI(this,i,e),n=Wn(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),iu(this,n),this.o&&s&&$m(n,this.o,s),Dm(this.i,i),this.Ra&&ge(n,"TYPE","init"),this.ja?(ge(n,"$req",e),ge(n,"SID","null"),i.$=!0,bm(i,n,null)):bm(i,n,e),this.G=2}}else this.G==3&&(t?AI(this,t):this.l.length==0||pI(this.i)||AI(this))};function AI(t,e){var n;e?n=e.m:n=t.V++;const r=Wn(t.F);ge(r,"SID",t.J),ge(r,"RID",n),ge(r,"AID",t.U),iu(t,r),t.o&&t.s&&$m(r,t.o,t.s),n=new Ga(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=bI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Dm(t.i,n),bm(n,r,e)}function iu(t,e){t.j&&Rm({},function(n,r){ge(e,r,n)})}function bI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?et(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{FL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function NI(t){t.g||t.u||(t.Y=1,vm(t.Ga,t),t.A=0)}function Um(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ha(et(t.Ga,t),OI(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,RI(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ha(et(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,It(10),Qc(this),RI(this))};function Vm(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function RI(t){t.g=new Ga(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Wn(t.oa);ge(e,"RID","rpc"),ge(e,"SID",t.J),ge(e,"CI",t.N?"0":"1"),ge(e,"AID",t.U),iu(t,e),ge(e,"TYPE","xmlhttp"),t.o&&t.s&&$m(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Wc(Wn(e)),n.s=null,n.U=!0,rI(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Qc(this),Um(this),It(19))};function Jc(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function PI(t,e){var n=null;if(t.g==e){Jc(t),Vm(t),t.g=null;var r=2}else if(Om(t.i,e))n=e.D,gI(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Mc(),nt(r,new XE(r,n,e,i)),Yc(t)}else NI(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&HL(t,e)||r==2&&Um(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}}function OI(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ri(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=et(t.jb,t);n||(n=new Ni("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Bc(n,"https"),Wc(n)),UL(n.toString(),r)}else It(2);t.G=0,t.j&&t.j.va(e),DI(t),CI(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),It(2)):(this.h.info("Failed to ping google.com"),It(1))};function DI(t){t.G=0,t.I=-1,t.j&&((yI(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,em(t.l),t.l.length=0),t.j.ua())}function xI(t,e,n){let r=AL(n);if(r.i!="")e&&zc(r,e+"."+r.i),qc(r,r.m);else{const i=K.location;r=bL(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&nm(t.aa,function(i,s){ge(r,s,i)}),e=t.D,n=t.sa,e&&n&&ge(r,e,n),ge(r,"VER",t.ma),iu(t,r),r}function LI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ce(new eu({ib:!0})):new Ce(t.qa),e.L=t.H,e}function $I(){}D=$I.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Xc(){if(Vs&&!(10<=Number(sL)))throw Error("Environmental error: no available transport.")}Xc.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){je.call(this),this.g=new kI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}tt(Mt,je);Mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vm(et(t.hb,t,e))),It(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=xI(t,null,t.W),Yc(t)};Mt.prototype.close=function(){Mm(this.g)};Mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Fm(this.g,e)}else this.v?(e={},e.__data__=ym(t),Fm(this.g,e)):Fm(this.g,t)};Mt.prototype.M=function(){this.g.j=null,delete this.j,Mm(this.g),delete this.g,Mt.Z.M.call(this)};function MI(t){Sm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(MI,Sm);function FI(){km.call(this),this.status=1}tt(FI,km);function qs(t){this.g=t}tt(qs,$I);qs.prototype.xa=function(){nt(this.g,"a")};qs.prototype.wa=function(t){nt(this.g,new MI(t))};qs.prototype.va=function(t){nt(this.g,new FI(t))};qs.prototype.ua=function(){nt(this.g,"b")};Xc.prototype.createWebChannel=Xc.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Fc.NO_ERROR=0;Fc.TIMEOUT=8;Fc.HTTP_ERROR=6;ZE.COMPLETE="complete";tI.EventType=Ka;Ka.OPEN="a";Ka.CLOSE="b";Ka.ERROR="c";Ka.MESSAGE="d";je.prototype.listen=je.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.La;Ce.prototype.getLastErrorCode=Ce.prototype.Da;Ce.prototype.getStatus=Ce.prototype.ba;Ce.prototype.getResponseJson=Ce.prototype.Qa;Ce.prototype.getResponseText=Ce.prototype.ga;Ce.prototype.send=Ce.prototype.ea;var KL=function(){return new Xc},GL=function(){return Mc()},jm=Fc,QL=ZE,YL=Ci,UI={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},JL=eu,Zc=tI,XL=Ce;const VI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws="9.6.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Cc("@firebase/firestore");function Bm(){return Dr.logLevel}function ZL(t){Dr.setLogLevel(t)}function A(t,...e){if(Dr.logLevel<=ee.DEBUG){const n=e.map(zm);Dr.debug(`Firestore (${Ws}): ${t}`,...n)}}function Ae(t,...e){if(Dr.logLevel<=ee.ERROR){const n=e.map(zm);Dr.error(`Firestore (${Ws}): ${t}`,...n)}}function su(t,...e){if(Dr.logLevel<=ee.WARN){const n=e.map(zm);Dr.warn(`Firestore (${Ws}): ${t}`,...n)}}function zm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw Ae(e),new Error(e)}function q(t,e){t||U()}function e$(t,e){t||U()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class n${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r${constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Be,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new jI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new rt(e)}}class i${constructor(e,n,r){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class s${constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new i$(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a${constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),new o$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u$(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.I=-1;class BI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=u$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function zI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ze(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ou.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ou?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends ou{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const l$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ou{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return l$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new S(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.fields=e,e.sort(it.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c$(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new qe(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const h$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(q(!!t),typeof t=="string"){let e=0;const n=h$.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function HI(t){const e=t.mapValue.fields.__previous_value__;return qm(e)?HI(e):e}function au(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return t==null}function eh(t){return t===0&&1/t==-1/0}function KI(t){return typeof t=="number"&&Number.isInteger(t)&&!eh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ne.fromString(e))}static fromName(e){return new M(ne.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ne(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qm(t)?4:10:U()}function Tn(t,e){const n=Di(t);if(n!==Di(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return au(t).isEqual(au(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xr(r.timestampValue),o=xr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gs(r.bytesValue).isEqual(Gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return be(r.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return be(r.integerValue)===be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=be(r.doubleValue),o=be(i.doubleValue);return s===o?eh(s)===eh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qI(s)!==qI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Tn(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function uu(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Qs(t,e){const n=Di(t),r=Di(e);if(n!==r)return J(n,r);switch(n){case 0:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=be(i.integerValue||i.doubleValue),a=be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return GI(t.timestampValue,e.timestampValue);case 4:return GI(au(t),au(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Gs(i),a=Gs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(be(i.latitude),be(s.latitude));return o!==0?o:J(be(i.longitude),be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Qs(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=Qs(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function GI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=xr(t),r=xr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Wm(t){return Hm(t)}function Hm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Hm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Hm(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function th(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Km(t){return!!t&&"integerValue"in t}function Gm(t){return!!t&&"arrayValue"in t}function QI(t){return!!t&&"nullValue"in t}function YI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nh(t){return!!t&&"mapValue"in t}function lu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lu(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lu(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=lu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(lu(this.value))}}function JI(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new it([n]);if(nh(r)){const s=JI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ks(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ye(e,0,Q.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new ye(e,1,n,r,0)}static newNoDocument(e,n){return new ye(e,2,n,pt.empty(),0)}static newUnknownDocument(e,n){return new ye(e,3,n,pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ye(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function XI(t,e=null,n=[],r=[],i=null,s=null,o=null){return new d$(t,e,n,r,i,s,o)}function cu(t){const e=R(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>p$(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=sh(e.startAt)),e.endAt&&(n+="|ub:",n+=sh(e.endAt)),e.R=n}return e.R}function f$(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Wm(r.value)}`;var r}).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+sh(t.startAt)),t.endAt&&(e+=", endAt: "+sh(t.endAt)),`Target(${e})`}function rh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!I$(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Tn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tT(t.startAt,e.startAt)&&tT(t.endAt,e.endAt)}function ih(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Tt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new m$(e,n,r):n==="array-contains"?new v$(e,r):n==="in"?new w$(e,r):n==="not-in"?new _$(e,r):n==="array-contains-any"?new E$(e,r):new Tt(e,n,r)}static P(e,n,r){return n==="in"?new g$(e,r):new y$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Qs(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.v(Qs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function p$(t){return t.field.canonicalString()+t.op.toString()+Wm(t.value)}class m$ extends Tt{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.v(n)}}class g$ extends Tt{constructor(e,n){super(e,"in",n),this.keys=ZI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class y$ extends Tt{constructor(e,n){super(e,"not-in",n),this.keys=ZI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ZI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class v$ extends Tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gm(n)&&uu(n.arrayValue,this.value)}}class w$ extends Tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uu(this.value.arrayValue,n)}}class _$ extends Tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(uu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uu(this.value.arrayValue,n)}}class E$ extends Tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uu(this.value.arrayValue,r))}}class hu{constructor(e,n){this.position=e,this.before=n}}function sh(t){return`${t.before?"b":"a"}:${t.position.map(e=>Wm(e)).join(",")}`}class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function I$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function eT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function tT(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function nT(t,e,n,r,i,s,o,a){return new Kn(t,e,n,r,i,s,o,a)}function Js(t){return new Kn(t)}function oh(t){return!Oi(t.limit)&&t.limitType==="F"}function ah(t){return!Oi(t.limit)&&t.limitType==="L"}function Qm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ym(t){for(const e of t.filters)if(e.V())return e.field;return null}function Jm(t){return t.collectionGroup!==null}function Xs(t){const e=R(t);if(e.S===null){e.S=[];const n=Ym(e),r=Qm(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new Ys(n)),e.S.push(new Ys(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ys(it.keyField(),s))}}}return e.S}function Xt(t){const e=R(t);if(!e.D)if(e.limitType==="F")e.D=XI(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Xs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ys(s.field,o))}const r=e.endAt?new hu(e.endAt.position,!e.endAt.before):null,i=e.startAt?new hu(e.startAt.position,!e.startAt.before):null;e.D=XI(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function rT(t,e,n){return new Kn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function du(t,e){return rh(Xt(t),Xt(e))&&t.limitType===e.limitType}function iT(t){return`${cu(Xt(t))}|lt:${t.limitType}`}function Xm(t){return`Query(target=${f$(Xt(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!eT(n.startAt,Xs(n),r)||n.endAt&&eT(n.endAt,Xs(n),r))}(t,e)}function sT(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=T$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function T$(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Qs(a,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(e)?"-0":e}}function aT(t){return{integerValue:""+t}}function uT(t,e){return KI(e)?aT(e):oT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function S$(t,e,n){return t instanceof Zs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof xi?cT(t,e):t instanceof Li?hT(t,e):function(r,i){const s=lT(r,i),o=dT(s)+dT(r.N);return Km(s)&&Km(r.N)?aT(o):oT(r.k,o)}(t,e)}function k$(t,e,n){return t instanceof xi?cT(t,e):t instanceof Li?hT(t,e):n}function lT(t,e){return t instanceof eo?Km(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Zs extends uh{}class xi extends uh{constructor(e){super(),this.elements=e}}function cT(t,e){const n=fT(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Li extends uh{constructor(e){super(),this.elements=e}}function hT(t,e){let n=fT(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class eo extends uh{constructor(e,n){super(),this.k=e,this.N=n}}function dT(t){return be(t.integerValue||t.doubleValue)}function fT(t){return Gm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.field=e,this.transform=n}}function C$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof xi&&r instanceof xi||n instanceof Li&&r instanceof Li?Hs(n.elements,r.elements,Tn):n instanceof eo&&r instanceof eo?Tn(n.N,r.N):n instanceof Zs&&r instanceof Zs}(t.transform,e.transform)}class A${constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function b$(t,e,n){t instanceof mu?function(r,i,s){const o=r.value.clone(),a=yT(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(r,i,s){if(!lh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=yT(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(gT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zm(t,e,n){t instanceof mu?function(r,i,s){if(!lh(r.precondition,i))return;const o=r.value.clone(),a=vT(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(mT(i),o).setHasLocalMutations()}(t,e,n):t instanceof Lr?function(r,i,s){if(!lh(r.precondition,i))return;const o=vT(r.fieldTransforms,s,i),a=i.data;a.setAll(gT(r)),a.setAll(o),i.convertToFoundDocument(mT(i),a).setHasLocalMutations()}(t,e,n):function(r,i){lh(r.precondition,i)&&i.convertToNoDocument(Q.min())}(t,e)}function N$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lT(r.transform,i||null);s!=null&&(n==null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function pT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hs(n,r,(i,s)=>C$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function mT(t){return t.isFoundDocument()?t.version:Q.min()}class mu extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Lr extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function gT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yT(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,k$(o,a,n[i]))}return r}function vT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,S$(s,o,e))}return r}class gu extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class eg extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,X;function wT(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function _T(t){if(t===void 0)return Ae("GRPC error has no .code"),E.UNKNOWN;switch(t){case Re.OK:return E.OK;case Re.CANCELLED:return E.CANCELLED;case Re.UNKNOWN:return E.UNKNOWN;case Re.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Re.INTERNAL:return E.INTERNAL;case Re.UNAVAILABLE:return E.UNAVAILABLE;case Re.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Re.NOT_FOUND:return E.NOT_FOUND;case Re.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Re.ABORTED:return E.ABORTED;case Re.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Re.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(X=Re||(Re={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hh(this.root,e,this.comparator,!1)}getReverseIterator(){return new hh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hh(this.root,e,this.comparator,!0)}}class hh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:st.RED,this.left=i!=null?i:st.EMPTY,this.right=s!=null?s:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ET(this.data.getIterator())}getIteratorFrom(e){return new ET(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class ET{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=new De(M.comparator);function Zt(){return P$}const O$=new De(M.comparator);function tg(){return O$}const D$=new De(M.comparator);function IT(){return D$}const x$=new _e(M.comparator);function se(...t){let e=x$;for(const n of t)e=e.add(n);return e}const L$=new _e(J);function dh(){return L$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,n)),new yu(Q.min(),r,dh(),Zt(),se())}}class vu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new vu(qe.EMPTY_BYTE_STRING,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.F=i}}class TT{constructor(e,n){this.targetId=e,this.O=n}}class ST{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kT{constructor(){this.M=0,this.L=AT(),this.B=qe.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=se(),n=se(),r=se();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new vu(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=AT()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class $${constructor(e){this.et=e,this.nt=new Map,this.st=Zt(),this.it=CT(),this.rt=new _e(J)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.O.count,i=this.wt(n);if(i){const s=i.target;if(ih(s))if(r===0){const o=new M(s.path);this.ct(n,o,ye.newNoDocument(o,Q.min()))}else q(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&ih(a.target)){const u=new M(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.ct(o,u,ye.newNoDocument(u,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=se();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new yu(e,n,this.rt,this.st,r);return this.st=Zt(),this.it=CT(),this.rt=new _e(J),i}at(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new kT,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new _e(J),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new kT),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function CT(){return new De(M.comparator)}function AT(){return new De(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),F$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class U${constructor(e,n){this.databaseId=e,this.C=n}}function wu(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(t,e){return t.C?e.toBase64():e.toUint8Array()}function V$(t,e){return wu(t,e.toTimestamp())}function We(t){return q(!!t),Q.fromTimestamp(function(e){const n=xr(e);return new ze(n.seconds,n.nanos)}(t))}function ng(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function NT(t){const e=ne.fromString(t);return q(jT(e)),e}function _u(t,e){return ng(t.databaseId,e.path)}function Sn(t,e){const n=NT(e);if(n.get(1)!==t.databaseId.projectId)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(PT(n))}function rg(t,e){return ng(t.databaseId,e)}function RT(t){const e=NT(t);return e.length===4?ne.emptyPath():PT(e)}function Eu(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PT(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function OT(t,e,n){return{name:_u(t,e),fields:n.value.mapValue.fields}}function DT(t,e,n){const r=Sn(t,e.name),i=We(e.updateTime),s=new pt({mapValue:{fields:e.fields}}),o=ye.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function j$(t,e){return"found"in e?function(n,r){q(!!r.found),r.found.name,r.found.updateTime;const i=Sn(n,r.found.name),s=We(r.found.updateTime),o=new pt({mapValue:{fields:r.found.fields}});return ye.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){q(!!r.missing),q(!!r.readTime);const i=Sn(n,r.missing),s=We(r.readTime);return ye.newNoDocument(i,s)}(t,e):U()}function B$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.C?(q(l===void 0||typeof l=="string"),qe.fromBase64String(l||"")):(q(l===void 0||l instanceof Uint8Array),qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:_T(u.code);return new S(l,u.message||"")}(o);n=new ST(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sn(t,r.document.name),s=We(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=ye.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new fh(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sn(t,r.document),s=r.readTime?We(r.readTime):Q.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sn(t,r.document),s=r.removedTargetIds||[];n=new fh([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new R$(i),o=r.targetId;n=new TT(o,s)}}return n}function ph(t,e){let n;if(e instanceof mu)n={update:OT(t,e.key,e.value)};else if(e instanceof gu)n={delete:_u(t,e.key)};else if(e instanceof Lr)n={update:OT(t,e.key,e.data),updateMask:Q$(e.fieldMask)};else{if(!(e instanceof eg))return U();n={verify:_u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Zs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Li)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof eo)return{fieldPath:s.field.canonicalString(),increment:o.N};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:V$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function xT(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ne.updateTime(We(i.updateTime)):i.exists!==void 0?Ne.exists(i.exists):Ne.none()}(e.currentDocument):Ne.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)q(o.setToServerValue==="REQUEST_TIME"),a=new Zs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new xi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Li(l)}else"increment"in o?a=new eo(s,o.increment):U();const u=it.fromServerFormat(o.fieldPath);return new pu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Sn(t,e.update.name),s=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Ks(u.map(l=>it.fromServerFormat(l)))}(e.updateMask);return new Lr(i,s,o,n,r)}return new mu(i,s,n,r)}if(e.delete){const i=Sn(t,e.delete);return new gu(i,n)}if(e.verify){const i=Sn(t,e.verify);return new eg(i,n)}return U()}function z$(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?We(r.updateTime):We(i);return s.isEqual(Q.min())&&(s=We(i)),new A$(s,r.transformResults||[])}(n,e))):[]}function LT(t,e){return{documents:[rg(t,e.path)]}}function $T(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=rg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(YI(c.value))return{unaryFilter:{field:to(c.field),op:"IS_NAN"}};if(QI(c.value))return{unaryFilter:{field:to(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(YI(c.value))return{unaryFilter:{field:to(c.field),op:"IS_NOT_NAN"}};if(QI(c.value))return{unaryFilter:{field:to(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(c.field),op:H$(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:to(l.field),direction:W$(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||Oi(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=UT(e.startAt)),e.endAt&&(n.structuredQuery.endAt=UT(e.endAt)),n}function MT(t){let e=RT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=FT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ys(no(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Oi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=VT(n.startAt));let l=null;return n.endAt&&(l=VT(n.endAt)),nT(e,i,o,s,a,"F",u,l)}function q$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function FT(t){return t?t.unaryFilter!==void 0?[G$(t)]:t.fieldFilter!==void 0?[K$(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>FT(e)).reduce((e,n)=>e.concat(n)):U():[]}function UT(t){return{before:t.before,values:t.position}}function VT(t){const e=!!t.before,n=t.values||[];return new hu(n,e)}function W$(t){return M$[t]}function H$(t){return F$[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return it.fromServerFormat(t.fieldPath)}function K$(t){return Tt.create(no(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}function G$(t){switch(t.unaryFilter.op){case"IS_NAN":const e=no(t.unaryFilter.field);return Tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=no(t.unaryFilter.field);return Tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=no(t.unaryFilter.field);return Tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=no(t.unaryFilter.field);return Tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}function Q$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=BT(e)),e=Y$(t.get(n),e);return BT(e)}function Y$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function BT(t){return t+""}function Gn(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),ne.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:U()}s=o+2}return new ne(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n){this.seconds=e,this.nanoseconds=n}}class Ut{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}Ut.store="owner",Ut.key="owner";class $r{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}$r.store="mutationQueues",$r.keyPath="userId";class de{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}de.store="mutations",de.keyPath="batchId",de.userMutationsIndex="userMutationsIndex",de.userMutationsKeyPath=["userId","batchId"];class mt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,an(n)]}static key(e,n,r){return[e,an(n),r]}}mt.store="documentMutations",mt.PLACEHOLDER=new mt;class X${constructor(e,n){this.path=e,this.readTime=n}}class Z${constructor(e,n){this.path=e,this.version=n}}class Ee{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}Ee.store="remoteDocuments",Ee.readTimeIndex="readTimeIndex",Ee.readTimeIndexPath="readTime",Ee.collectionReadTimeIndex="collectionReadTimeIndex",Ee.collectionReadTimeIndexPath=["parentPath","readTime"];class kn{constructor(e){this.byteSize=e}}kn.store="remoteDocumentGlobal",kn.key="remoteDocumentGlobalKey";class Rt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Rt.store="targets",Rt.keyPath="targetId",Rt.queryTargetsIndexName="queryTargetsIndex",Rt.queryTargetsKeyPath=["canonicalId","targetId"];class ot{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}ot.store="targetDocuments",ot.keyPath=["targetId","path"],ot.documentTargetsIndex="documentTargetsIndex",ot.documentTargetsKeyPath=["path","targetId"];class Vt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Vt.key="targetGlobalKey",Vt.store="targetGlobal";class $i{constructor(e,n){this.collectionId=e,this.parent=n}}$i.store="collectionParents",$i.keyPath=["collectionId","parent"];class Qn{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}Qn.store="clientMetadata",Qn.keyPath="clientId";class ro{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}ro.store="bundles",ro.keyPath="bundleId";class io{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}io.store="namedQueries",io.keyPath="name";const eM=[$r.store,de.store,mt.store,Ee.store,Rt.store,Ut.store,Vt.store,ot.store,Qn.store,kn.store,$i.store,ro.store,io.store],zT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.It=new Be,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new Iu(e,n.error)):this.It.resolve()},this.transaction.onerror=r=>{const i=ig(r.target.error);this.It.reject(new Iu(e,i))}}static open(e,n,r,i){try{return new mh(n,e.transaction(i,r))}catch(s){throw new Iu(n,s)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new nM(n)}}class un{constructor(e,n,r){this.name=e,this.version=n,this.Rt=r,un.Pt(he())===12.2&&Ae("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Fi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!kc())return!1;if(un.vt())return!0;const e=he(),n=un.Pt(e),r=0<n&&n<10,i=un.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,n){return e.store(n)}static Pt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Ct(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Iu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new S(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Iu(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Rt.Nt(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=n=>this.kt(n)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=mh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),T.reject(l))).toPromise();return u.catch(()=>{}),await a.At,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class tM{constructor(e){this.$t=e,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(e){this.$t=e}done(){this.Ft=!0}Lt(e){this.Ot=e}delete(){return Fi(this.$t.delete())}}class Iu extends S{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Mi(t){return t.name==="IndexedDbTransactionError"}class nM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Fi(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Fi(this.store.add(e))}get(e){return Fi(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Fi(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Fi(this.store.count())}Bt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Ut(r,(s,o)=>{i.push(o)}).next(()=>i)}qt(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Kt=!1;const i=this.cursor(r);return this.Ut(i,(s,o,a)=>a.delete())}jt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Ut(i,n)}Qt(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=ig(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Ut(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new tM(a),l=n(a.primaryKey,a.value,u);if(l instanceof T){const c=l.catch(h=>(u.done(),T.reject(h)));r.push(c)}u.isDone?i():u.Mt===null?a.continue():a.continue(u.Mt)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Kt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Fi(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ig(r.target.error);n(i)}})}let WT=!1;function ig(t){const e=un.Pt(he());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return WT||(WT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT extends qT{constructor(e,n){super(),this.Wt=e,this.currentSequenceNumber=n}}function Pt(t,e){const n=R(t);return un.Dt(n.Wt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&b$(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Zm(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Zm(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>pT(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>pT(n,r))}}class og{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=IT();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new og(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.Gt=e}}function ag(t,e){if(e.document)return DT(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=M.fromSegments(e.noDocument.path),r=oo(e.noDocument.readTime),i=ye.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=M.fromSegments(e.unknownDocument.path),r=oo(e.unknownDocument.version);return ye.newUnknownDocument(n,r)}return U()}function GT(t,e,n){const r=ug(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:_u(a,u.key),fields:u.data.value.mapValue.fields,updateTime:wu(a,u.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new Ee(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=so(e.version),a=e.hasCommittedMutations;return new Ee(null,new X$(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=so(e.version);return new Ee(new Z$(s,o),null,null,!0,r,i)}return U()}function ug(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function QT(t){const e=new ze(t[0],t[1]);return Q.fromTimestamp(e)}function so(t){const e=t.toTimestamp();return new J$(e.seconds,e.nanoseconds)}function oo(t){const e=new ze(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function ao(t,e){const n=(e.baseMutations||[]).map(s=>xT(t.Gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>xT(t.Gt,s)),i=ze.fromMillis(e.localWriteTimeMs);return new sg(e.batchId,i,n,r)}function Tu(t){const e=oo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?oo(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(q((i=t.query).documents.length===1),r=Xt(Js(RT(i.documents[0])))):r=function(s){return Xt(MT(s))}(t.query),new Mr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,qe.fromBase64String(t.resumeToken))}function YT(t,e){const n=so(e.snapshotVersion),r=so(e.lastLimboFreeSnapshotVersion);let i;i=ih(e.target)?LT(t.Gt,e.target):$T(t.Gt,e.target);const s=e.resumeToken.toBase64();return new Rt(e.targetId,cu(e.target),n,s,e.sequenceNumber,r,i)}function lg(t){const e=MT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{getBundleMetadata(e,n){return JT(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:oo(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return JT(e).put({bundleId:(r=n).id,createTime:so(We(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return XT(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:lg(i.bundledQuery),readTime:oo(i.readTime)};var i})}saveNamedQuery(e,n){return XT(e).put(function(r){return{name:r.name,readTime:so(We(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function JT(t){return Pt(t,ro.store)}function XT(t){return Pt(t,io.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.zt=new cg}addToCollectionParentIndex(e,n){return this.zt.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.zt.getEntries(n))}}class cg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(){this.Ht=new cg}addToCollectionParentIndex(e,n){if(!this.Ht.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ht.add(n)});const s={collectionId:r,parent:an(i)};return ZT(e).put(s)}return T.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[zI(n),""],!1,!0);return ZT(e).Bt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Gn(o.parent))}return r})}}function ZT(t){return Pt(t,$i.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ot{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e,n){const r=t.store(de.store),i=t.store(mt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.jt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{q(a===1)}));const l=[];for(const c of n.mutations){const h=mt.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return T.waitFor(s).next(()=>l)}function gh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(41943040,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);class hg{constructor(e,n,r,i){this.userId=e,this.k=n,this.Jt=r,this.referenceDelegate=i,this.Yt={}}static Xt(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new hg(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Fr(e).jt({index:de.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=uo(e),o=Fr(e);return o.add({}).next(a=>{q(typeof a=="number");const u=new sg(a,n,r,i),l=function(d,g,v){const I=v.baseMutations.map(f=>ph(d.Gt,f)),p=v.mutations.map(f=>ph(d.Gt,f));return new de(g,v.batchId,v.localWriteTime.toMillis(),I,p)}(this.k,this.userId,u),c=[];let h=new _e((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of i){const g=mt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,mt.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Jt.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Yt[a]=u.keys()}),T.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Fr(e).get(n).next(r=>r?(q(r.userId===this.userId),ao(this.k,r)):null)}Zt(e,n){return this.Yt[n]?T.resolve(this.Yt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Yt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Fr(e).jt({index:de.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(q(a.batchId>=r),s=ao(this.k,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Fr(e).jt({index:de.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Fr(e).Bt(de.userMutationsIndex,n).next(r=>r.map(i=>ao(this.k,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=mt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return uo(e).jt({range:i},(o,a,u)=>{const[l,c,h]=o,d=Gn(c);if(l===this.userId&&n.path.isEqual(d))return Fr(e).get(h).next(g=>{if(!g)throw U();q(g.userId===this.userId),s.push(ao(this.k,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(J);const i=[];return n.forEach(s=>{const o=mt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=uo(e).jt({range:a},(l,c,h)=>{const[d,g,v]=l,I=Gn(g);d===this.userId&&s.path.isEqual(I)?r=r.add(v):h.done()});i.push(u)}),T.waitFor(i).next(()=>this.te(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=mt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(J);return uo(e).jt({range:o},(u,l,c)=>{const[h,d,g]=u,v=Gn(d);h===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(g)):c.done()}).next(()=>this.te(e,a))}te(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Fr(e).get(s).next(o=>{if(o===null)throw U();q(o.userId===this.userId),r.push(ao(this.k,o))}))}),T.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return tS(e.Wt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ee(n.batchId)}),T.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return T.resolve();const r=IDBKeyRange.lowerBound(mt.prefixForUser(this.userId)),i=[];return uo(e).jt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Gn(s[1]);i.push(u)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return nS(e,this.userId,n)}ne(e){return rS(e).get(this.userId).next(n=>n||new $r(this.userId,-1,""))}}function nS(t,e,n){const r=mt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return uo(t).jt({range:s,Kt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Fr(t){return Pt(t,de.store)}function uo(t){return Pt(t,mt.store)}function rS(t){return Pt(t,$r.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Ui(0)}static re(){return new Ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n){this.referenceDelegate=e,this.k=n}allocateTargetId(e){return this.oe(e).next(n=>{const r=new Ui(n.highestTargetId);return n.highestTargetId=r.next(),this.ae(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(n=>Q.fromTimestamp(new ze(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.oe(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.ae(e,i)))}addTargetData(e,n){return this.ce(e,n).next(()=>this.oe(e).next(r=>(r.targetCount+=1,this.ue(n,r),this.ae(e,r))))}updateTargetData(e,n){return this.ce(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>lo(e).delete(n.targetId)).next(()=>this.oe(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.ae(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return lo(e).jt((o,a)=>{const u=Tu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>T.waitFor(s)).next(()=>i)}forEachTarget(e,n){return lo(e).jt((r,i)=>{const s=Tu(i);n(s)})}oe(e){return iS(e).get(Vt.key).next(n=>(q(n!==null),n))}ae(e,n){return iS(e).put(Vt.key,n)}ce(e,n){return lo(e).put(YT(this.k,n))}ue(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.oe(e).next(n=>n.targetCount)}getTargetData(e,n){const r=cu(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return lo(e).jt({range:i,index:Rt.queryTargetsIndexName},(o,a,u)=>{const l=Tu(a);rh(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Ur(e);return n.forEach(o=>{const a=an(o.path);i.push(s.put(new ot(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),T.waitFor(i)}removeMatchingKeys(e,n,r){const i=Ur(e);return T.forEach(n,s=>{const o=an(s.path);return T.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Ur(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Ur(e);let s=se();return i.jt({range:r,Kt:!0},(o,a,u)=>{const l=Gn(o[1]),c=new M(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=an(n.path),i=IDBKeyRange.bound([r],[zI(r)],!1,!0);let s=0;return Ur(e).jt({index:ot.documentTargetsIndex,Kt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return lo(e).get(n).next(r=>r?Tu(r):null)}}function lo(t){return Pt(t,Rt.store)}function iS(t){return Pt(t,Vt.store)}function Ur(t){return Pt(t,ot.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==zT)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class aM{constructor(e){this.he=e,this.buffer=new _e(sS),this.le=0}fe(){return++this.le}de(e){const n=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uM{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const n=this.we?3e5:6e4;A("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Mi(r)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Vi(r)}await this.me(e)})}}class lM{constructor(e,n){this.ge=e,this.params=n}calculateTargetCount(e,n){return this.ge.ye(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return T.resolve(Ft.I);const r=new aM(n);return this.ge.forEachTarget(e,i=>r.de(i.sequenceNumber)).next(()=>this.ge.pe(e,i=>r.de(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.ge.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.ge.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(eS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eS):this.Te(e,n))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Bm()<=ee.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new lM(r,i)}(this,n)}ye(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.pe(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pe(e,n){return this.Ie(e,(r,i)=>n(i))}addReference(e,n,r){return yh(e,r)}removeReference(e,n,r){return yh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return yh(e,n)}Ae(e,n){return function(r,i){let s=!1;return rS(r).Qt(o=>nS(r,o,i).next(a=>(a&&(s=!0),T.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(o,a)=>{if(a<=n){const u=this.Ae(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),Ur(e).delete([0,an(o.path)])))});i.push(u)}}).next(()=>T.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return yh(e,n)}Ie(e,n){const r=Ur(e);let i,s=Ft.I;return r.jt({index:ot.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Ft.I&&n(new M(Gn(i)),s),s=l,i=u):s=Ft.I}).next(()=>{s!==Ft.I&&n(new M(Gn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function yh(t,e){return Ur(t).put(function(n,r){return new ot(0,an(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WI(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.changes=new co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ye.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n){this.k=e,this.Jt=n}addEntry(e,n,r){return Vr(e).put(vh(n),r)}removeEntry(e,n){const r=Vr(e),i=vh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Re(e,r)))}getEntry(e,n){return Vr(e).get(vh(n)).next(r=>this.Pe(n,r))}be(e,n){return Vr(e).get(vh(n)).next(r=>({document:this.Pe(n,r),size:gh(r)}))}getEntries(e,n){let r=Zt();return this.ve(e,n,(i,s)=>{const o=this.Pe(i,s);r=r.insert(i,o)}).next(()=>r)}Ve(e,n){let r=Zt(),i=new De(M.comparator);return this.ve(e,n,(s,o)=>{const a=this.Pe(s,o);r=r.insert(s,a),i=i.insert(s,gh(o))}).next(()=>({documents:r,Se:i}))}ve(e,n,r){if(n.isEmpty())return T.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return Vr(e).jt({range:i},(a,u,l)=>{const c=M.fromSegments(a);for(;o&&M.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Lt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=Zt();const s=n.path.length+1,o={};if(r.isEqual(Q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=ug(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=Ee.collectionReadTimeIndex}return Vr(e).jt(o,(a,u,l)=>{if(a.length!==s)return;const c=ag(this.k,u);n.path.isPrefixOf(c.key.path)?fu(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new dM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return aS(e).get(kn.key).next(n=>(q(!!n),n))}Re(e,n){return aS(e).put(kn.key,n)}Pe(e,n){if(n){const r=ag(this.k,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return ye.newInvalidDocument(e)}}class dM extends oS{constructor(e,n){super(),this.De=e,this.trackRemovals=n,this.Ce=new co(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Ce.get(s);if(o.document.isValidDocument()){const u=GT(this.De.k,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=gh(u)-a,n.push(this.De.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=GT(this.De.k,ye.newNoDocument(s,Q.min()),this.getReadTime(s));n.push(this.De.addEntry(e,s,u))}else n.push(this.De.removeEntry(e,s))}),i.forEach(s=>{n.push(this.De.Jt.addToCollectionParentIndex(e,s))}),n.push(this.De.updateMetadata(e,r)),T.waitFor(n)}getFromCache(e,n){return this.De.be(e,n).next(r=>(this.Ce.set(n,r.size),r.document))}getAllFromCache(e,n){return this.De.Ve(e,n).next(({documents:r,Se:i})=>(i.forEach((s,o)=>{this.Ce.set(s,o)}),r))}}function aS(t){return Pt(t,kn.store)}function Vr(t){return Pt(t,Ee.store)}function vh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e){this.k=e}Nt(e,n,r,i){q(r<i&&r>=0&&i<=11);const s=new mh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(Ut.store)}(e),function(a){a.createObjectStore($r.store,{keyPath:$r.keyPath}),a.createObjectStore(de.store,{keyPath:de.keyPath,autoIncrement:!0}).createIndex(de.userMutationsIndex,de.userMutationsKeyPath,{unique:!0}),a.createObjectStore(mt.store)}(e),uS(e),function(a){a.createObjectStore(Ee.store)}(e));let o=T.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(ot.store),a.deleteObjectStore(Rt.store),a.deleteObjectStore(Vt.store)}(e),uS(e)),o=o.next(()=>function(a){const u=a.store(Vt.store),l=new Vt(0,0,Q.min().toTimestamp(),0);return u.put(Vt.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(de.store).Bt().next(l=>{a.deleteObjectStore(de.store),a.createObjectStore(de.store,{keyPath:de.keyPath,autoIncrement:!0}).createIndex(de.userMutationsIndex,de.userMutationsKeyPath,{unique:!0});const c=u.store(de.store),h=l.map(d=>c.put(d));return T.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(Qn.store,{keyPath:Qn.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ne(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(kn.store)}(e),this.ke(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.$e(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(Ee.store);u.createIndex(Ee.readTimeIndex,Ee.readTimeIndexPath,{unique:!1}),u.createIndex(Ee.collectionReadTimeIndex,Ee.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.Fe(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(ro.store,{keyPath:ro.keyPath})})(e),function(a){a.createObjectStore(io.store,{keyPath:io.keyPath})}(e)})),o}ke(e){let n=0;return e.store(Ee.store).jt((r,i)=>{n+=gh(i)}).next(()=>{const r=new kn(n);return e.store(kn.store).put(kn.key,r)})}Ne(e){const n=e.store($r.store),r=e.store(de.store);return n.Bt().next(i=>T.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Bt(de.userMutationsIndex,o).next(a=>T.forEach(a,u=>{q(u.userId===s.userId);const l=ao(this.k,u);return tS(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(ot.store),r=e.store(Ee.store);return e.store(Vt.store).get(Vt.key).next(i=>{const s=[];return r.jt((o,a)=>{const u=new ne(o),l=function(c){return[0,an(c)]}(u);s.push(n.get(l).next(c=>c?T.resolve():(h=>n.put(new ot(0,an(h),i.highestListenSequenceNumber)))(u)))}).next(()=>T.waitFor(s))})}$e(e,n){e.createObjectStore($i.store,{keyPath:$i.keyPath});const r=n.store($i.store),i=new cg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:an(u)})}};return n.store(Ee.store).jt({Kt:!0},(o,a)=>{const u=new ne(o);return s(u.popLast())}).next(()=>n.store(mt.store).jt({Kt:!0},([o,a,u],l)=>{const c=Gn(a);return s(c.popLast())}))}Fe(e){const n=e.store(Rt.store);return n.jt((r,i)=>{const s=Tu(i),o=YT(this.k,s);return n.put(o)})}}function uS(t){t.createObjectStore(ot.store,{keyPath:ot.keyPath}).createIndex(ot.documentTargetsIndex,ot.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Rt.store,{keyPath:Rt.keyPath}).createIndex(Rt.queryTargetsIndexName,Rt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Vt.store)}const dg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fg{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Me=l,this.Le=c,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!fg.bt())throw new S(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cM(this,i),this.Ge=n+"main",this.k=new KT(u),this.ze=new un(this.Ge,11,new fM(this.k)),this.He=new oM(this.referenceDelegate,this.k),this.Jt=new sM,this.Je=function(h,d){return new hM(h,d)}(this.k,this.Jt),this.Ye=new rM,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,c===!1&&Ae("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,dg);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new Ft(e,this.Me)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>wh(e).put(new Qn(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(n=>this.isPrimary&&!n?this.an(e).next(()=>!1):!!n&&this.cn(e).next(()=>!0))).catch(e=>{if(Mi(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return Su(e).get(Ut.key).next(n=>T.resolve(this.un(n)))}hn(e){return wh(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Pt(n,Qn.store);return r.Bt().next(i=>{const s=this.dn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return T.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const n of e)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?T.resolve(!0):Su(e).get(Ut.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,dg);return!1}}return!(!this.networkEnabled||!this.inForeground)||wh(e).Bt().next(r=>this.dn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Ut.store,Qn.store],e=>{const n=new HT(e,Ft.I);return this.an(n).next(()=>this.hn(n))}),this.ze.close(),this.pn()}dn(e,n){return e.filter(r=>this.fn(r.updateTimeMs,n)&&!this._n(r.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>wh(e).Bt().next(n=>this.dn(n,18e5).map(r=>r.clientId)))}get started(){return this.Ue}getMutationQueue(e){return hg.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,eM,o=>(s=new HT(o,this.Be?this.Be.next():Ft.I),n==="readwrite-primary"?this.rn(s).next(a=>!!a||this.on(s)).next(a=>{if(!a)throw Ae(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new S(E.FAILED_PRECONDITION,zT);return r(s)}).next(a=>this.cn(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return Su(e).get(Ut.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)&&!this.un(n)&&!(this.Le||this.allowTabSynchronization&&n.allowTabSynchronization))throw new S(E.FAILED_PRECONDITION,dg)})}cn(e){const n=new Ut(this.clientId,this.allowTabSynchronization,Date.now());return Su(e).put(Ut.key,n)}static bt(){return un.bt()}an(e){const n=Su(e);return n.get(Ut.key).next(r=>this.un(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete(Ut.key)):T.resolve())}fn(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ae(`Detected an update time that is in the future: ${e} > ${r}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),UD()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var n;try{const r=((n=this.Xe)===null||n===void 0?void 0:n.getItem(this.wn(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ae("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){Ae("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Su(t){return Pt(t,Ut.store)}function wh(t){return Pt(t,Qn.store)}function pg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n){this.progress=e,this.In=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Pn(e,n,r))}Pn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):Jm(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new M(n)).next(r=>{let i=tg();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=tg();return this.Jt.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const u=function(l,c){return new Kn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=ye.newInvalidDocument(c),i=i.insert(c,h)),Zm(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{fu(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=se();for(const o of n)for(const a of o.mutations)a instanceof Lr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Q.min())?this.Mn(e,n):this.On.vn(e,i).next(s=>{const o=this.Ln(n,s);return(oh(n)||ah(n))&&this.Bn(n.limitType,o,i,r)?this.Mn(e,n):(Bm()<=ee.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xm(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(e,n){let r=new _e(sT(e));return n.forEach((i,s)=>{fu(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mn(e,n){return Bm()<=ee.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Xm(n)),this.On.getDocumentsMatchingQuery(e,n,Q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new De(J),this.Kn=new co(s=>cu(s),rh),this.jn=Q.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new lS(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function hS(t,e,n,r){return new mM(t,e,n,r)}async function dS(t,e){const n=R(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new lS(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=se();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.vn(o,h).next(d=>({Gn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function gM(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(v=>{const I=u.docVersions.get(g);q(I!==null),v.version.compareTo(I)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&l.addEntry(v,u.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function fS(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function yM(t,e){const n=R(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,g),function(v,I,p){return q(I.resumeToken.approximateByteSize()>0),v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,g,l)&&a.push(n.He.updateTargetData(s,g))}});let u=Zt();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(pS(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(Q.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,u)).next(()=>u)}).then(s=>(n.qn=i,s))}function pS(t,e,n,r,i){let s=se();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Zt();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):A("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function vM(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function ho(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new Mr(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function fo(t,e,n){const r=R(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mi(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function _h(t,e,n){const r=R(t);let i=Q.min(),s=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=R(a),h=c.Kn.get(l);return h!==void 0?T.resolve(c.qn.get(h)):c.He.getTargetData(u,l)}(r,o,Xt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:se())).next(a=>({documents:a,zn:s})))}function mS(t,e){const n=R(t),r=R(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function gS(t){const e=R(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=R(r);let a=Zt(),u=ug(s);const l=Vr(i),c=IDBKeyRange.lowerBound(u,!0);return l.jt({index:Ee.readTimeIndex,range:c},(h,d)=>{const g=ag(o.k,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({In:a,readTime:QT(u)}))}(e.Qn,n,e.jn)).then(({In:n,readTime:r})=>(e.jn=r,n))}async function wM(t){const e=R(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=Vr(r);let s=Q.min();return i.jt({index:Ee.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=QT(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.jn=n})}async function _M(t,e,n,r){const i=R(t);let s=se(),o=Zt(),a=IT();for(const c of n){const h=e.Hn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Jn(c)),a=a.insert(h,e.Yn(c.metadata.readTime))}const u=i.Qn.newChangeBuffer({trackRemovals:!0}),l=await ho(i,function(c){return Xt(Js(ne.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>pS(c,u,o,Q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.He.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.He.addMatchingKeys(c,s,l.targetId)).next(()=>i.Wn.Vn(c,h)).next(()=>h)))}async function EM(t,e,n=se()){const r=await ho(t,Xt(lg(e.bundledQuery))),i=R(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ye.saveNamedQuery(s,e);const a=r.withResumeToken(qe.EMPTY_BYTE_STRING,o);return i.qn=i.qn.insert(a.targetId,a),i.He.updateTargetData(s,a).next(()=>i.He.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.He.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return T.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:We(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:lg(r.bundledQuery),readTime:We(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.ts=new _e(He.es),this.ns=new _e(He.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new He(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new He(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new M(new ne([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new M(new ne([])),r=new He(n,e),i=new He(n,e+1);let s=se();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return M.comparator(e.key,n.key)||J(e.fs,n.fs)}static ss(e,n){return J(e.fs,n.fs)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new _e(He.es)}checkEmpty(e){return T.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new sg(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new He(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return T.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return T.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(J);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),T.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new He(new M(s),0);let a=new _e(J);return this.ws.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.fs)),!0)},o),T.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return T.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new He(n,0),i=this.ws.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,T.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new De(M.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.clone():ye.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():ye.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Zt();const s=new M(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||fu(n,u)&&(i=i.insert(u.key,u.clone()))}return T.resolve(i)}Es(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kM(this)}getSize(e){return T.resolve(this.size)}}class kM extends oS{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.persistence=e,this.Is=new co(n=>cu(n),rh),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.As=0,this.Rs=new gg,this.targetCount=0,this.Ps=Ui.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),T.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.ce(n),T.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n){this.bs={},this.Be=new Ft(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new CM(this),this.Jt=new iM,this.Je=function(r,i){return new SM(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new KT(n),this.Ye=new IM(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new TM(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new bM(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class bM extends qT{constructor(e){super(),this.currentSequenceNumber=e}}class yg{constructor(e){this.persistence=e,this.Cs=new gg,this.Ns=null}static ks(e){return new yg(e)}get xs(){if(this.Ns)return this.Ns;throw U()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),T.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.xs,r=>{const i=M.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e){return`firestore_clients_${t}_${e}`}function vS(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function vg(t,e){return`firestore_targets_${t}_${e}`}class Eh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Fs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new S(i.error.code,i.error.message))),o?new Eh(e,n,i.state,s):(Ae("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ku{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Fs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new S(r.error.code,r.error.message))),s?new ku(e,r.state,i):(Ae("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ih{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Fs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=dh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=KI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ih(e,s):(Ae("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class wg{constructor(e,n){this.clientId=e,this.onlineState=n}static Fs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new wg(n.clientId,n.onlineState):(Ae("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _g{constructor(){this.activeTargetIds=dh()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Eg{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new De(J),this.started=!1,this.js=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Qs=yS(this.persistenceKey,this.Bs),this.Ws=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new _g),this.Gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Js=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Ys=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const r of e){if(r===this.Bs)continue;const i=this.getItem(yS(this.persistenceKey,r));if(i){const s=Ih.Fs(r,i);s&&(this.Ks=this.Ks.insert(s.clientId,s))}}this.Xs();const n=this.storage.getItem(this.Js);if(n){const r=this.Zs(n);r&&this.ti(r)}for(const r of this.js)this.qs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let n=!1;return this.Ks.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,n,r){this.ni(e,n,r),this.si(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(vg(this.persistenceKey,e));if(r){const i=ku.Fs(e,r);i&&(n=i.state)}}return this.ii.Ms(e),this.Xs(),n}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vg(this.persistenceKey,e))}updateQueryState(e,n,r){this.ri(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.si(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Qs)return void Ae("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Gs.test(n.key)){if(n.newValue==null){const r=this.ci(n.key);return this.ui(r,null)}{const r=this.hi(n.key,n.newValue);if(r)return this.ui(r.clientId,r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.li(n.key,n.newValue);if(r)return this.fi(r)}}else if(this.Hs.test(n.key)){if(n.newValue!==null){const r=this.di(n.key,n.newValue);if(r)return this.wi(r)}}else if(n.key===this.Js){if(n.newValue!==null){const r=this.Zs(n.newValue);if(r)return this.ti(r)}}else if(n.key===this.Ws){const r=function(i){let s=Ft.I;if(i!=null)try{const o=JSON.parse(i);q(typeof o=="number"),s=o}catch(o){Ae("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Ft.I&&this.sequenceNumberHandler(r)}else if(n.key===this.Ys)return this.syncEngine._i()}}else this.js.push(n)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(e,n,r){const i=new Eh(this.currentUser,e,n,r),s=vS(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}si(e){const n=vS(this.persistenceKey,this.currentUser,e);this.removeItem(n)}oi(e){const n={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(n))}ri(e,n,r){const i=vg(this.persistenceKey,e),s=new ku(e,n,r);this.setItem(i,s.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(e){const n=this.Gs.exec(e);return n?n[1]:null}hi(e,n){const r=this.ci(e);return Ih.Fs(r,n)}li(e,n){const r=this.zs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Eh.Fs(new rt(s),i,n)}di(e,n){const r=this.Hs.exec(e),i=Number(r[1]);return ku.Fs(i,n)}Zs(e){return wg.Fs(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,n){const r=n?this.Ks.insert(e,n):this.Ks.remove(e),i=this.ei(this.Ks),s=this.ei(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.yi(o,a).then(()=>{this.Ks=r})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let n=dh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class wS{constructor(){this.pi=new _g,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new _g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);A("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(u=>(A("RestConnection","Received: ",u),u),u=>{throw su("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=RM[e];return`${this.Mi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new XL;a.listenOnce(QL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jm.NO_ERROR:const l=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(l)),s(l);break;case jm.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new S(E.DEADLINE_EXCEEDED,"Request time out"));break;case jm.HTTP_ERROR:const c=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(v)>=0?v:E.UNKNOWN}(h.status);o(new S(d,h.message))}else o(new S(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new S(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}Qi(e,n,r){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=KL(),o=GL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JL({})),this.qi(a.initMessageHeaders,n,r),cE()||Sc()||MD()||Wp()||FD()||qp()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");A("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new PM({Vi:v=>{h?A("Connection","Not sending because WebChannel is closed:",v):(c||(A("Connection","Opening WebChannel transport."),l.open(),c=!0),A("Connection","WebChannel sending:",v),l.send(v))},Si:()=>l.close()}),g=(v,I,p)=>{v.listen(I,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return g(l,Zc.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),g(l,Zc.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.Fi())}),g(l,Zc.EventType.ERROR,v=>{h||(h=!0,su("Connection","WebChannel transport errored:",v),d.Fi(new S(E.UNAVAILABLE,"The operation could not be completed")))}),g(l,Zc.EventType.MESSAGE,v=>{var I;if(!h){const p=v.data[0];q(!!p);const f=p,m=f.error||((I=f[0])===null||I===void 0?void 0:I.error);if(m){A("Connection","WebChannel received error:",m);const w=m.status;let y=function(N){const F=Re[N];if(F!==void 0)return _T(F)}(w),C=m.message;y===void 0&&(y=E.INTERNAL,C="Unknown error status: "+w+" with message "+m.message),h=!0,d.Fi(new S(y,C)),l.close()}else A("Connection","WebChannel received:",p),d.Oi(p)}}),g(o,YL.STAT_EVENT,v=>{v.stat===UI.PROXY?A("Connection","Detected buffering proxy"):v.stat===UI.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){return typeof window!="undefined"?window:null}function Th(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return new U$(t,!0)}class Ig{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,i,s,o,a,u){this.Oe=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Ig(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Ae(n.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new S(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DM extends IS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=B$(this.k,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?We(s.readTime):Q.min()}(e);return this.listener.Pr(n,r)}br(e){const n={};n.database=Eu(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=ih(a)?{documents:LT(i,a)}:{query:$T(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=bT(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=wu(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=q$(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Eu(this.k),n.removeTarget=e,this.gr(n)}}class xM extends IS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=z$(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.Cr(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Eu(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ph(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(E.UNKNOWN,i.toString())})}ji(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(E.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class $M{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ae(n),this.Lr=!1):A("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{jr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=R(a);u.Gr.add(4),await po(u),u.Jr.set("Unknown"),u.Gr.delete(4),await Au(u)}(this))})}),this.Jr=new $M(r,i)}}async function Au(t){if(jr(t))for(const e of t.zr)await e(!0)}async function po(t){for(const e of t.zr)await e(!1)}function Sh(t,e){const n=R(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),kg(n)?Sg(n):go(n).lr()&&Tg(n,e))}function bu(t,e){const n=R(t),r=go(n);n.Wr.delete(e),r.lr()&&TS(n,e),n.Wr.size===0&&(r.lr()?r._r():jr(n)&&n.Jr.set("Unknown"))}function Tg(t,e){t.Yr.X(e.targetId),go(t).br(e)}function TS(t,e){t.Yr.X(e),go(t).vr(e)}function Sg(t){t.Yr=new $$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),go(t).start(),t.Jr.Br()}function kg(t){return jr(t)&&!go(t).hr()&&t.Wr.size>0}function jr(t){return R(t).Gr.size===0}function SS(t){t.Yr=void 0}async function FM(t){t.Wr.forEach((e,n)=>{Tg(t,e)})}async function UM(t,e){SS(t),kg(t)?(t.Jr.Kr(e),Sg(t)):t.Jr.set("Unknown")}async function VM(t,e,n){if(t.Jr.set("Online"),e instanceof ST&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kh(t,r)}else if(e instanceof fh?t.Yr.ot(e):e instanceof TT?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(Q.min()))try{const r=await fS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(u);l&&i.Wr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken(qe.EMPTY_BYTE_STRING,u.snapshotVersion)),TS(i,a);const l=new Mr(u.target,a,1,u.sequenceNumber);Tg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await kh(t,r)}}async function kh(t,e,n){if(!Mi(e))throw e;t.Gr.add(1),await po(t),t.Jr.set("Offline"),n||(n=()=>fS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Au(t)})}function kS(t,e){return e().catch(n=>kh(t,n,e))}async function mo(t){const e=R(t),n=Br(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;jM(e);)try{const i=await vM(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,BM(e,i)}catch(i){await kh(e,i)}CS(e)&&AS(e)}function jM(t){return jr(t)&&t.Qr.length<10}function BM(t,e){t.Qr.push(e);const n=Br(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function CS(t){return jr(t)&&!Br(t).hr()&&t.Qr.length>0}function AS(t){Br(t).start()}async function zM(t){Br(t).kr()}async function qM(t){const e=Br(t);for(const n of t.Qr)e.Dr(n.mutations)}async function WM(t,e,n){const r=t.Qr.shift(),i=og.from(r,e,n);await kS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mo(t)}async function HM(t,e){e&&Br(t).Sr&&await async function(n,r){if(i=r.code,wT(i)&&i!==E.ABORTED){const s=n.Qr.shift();Br(n).wr(),await kS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await mo(n)}var i}(t,e),CS(t)&&AS(t)}async function Cg(t,e){const n=R(t);e?(n.Gr.delete(2),await Au(n)):e||(n.Gr.add(2),await po(n),n.Jr.set("Unknown"))}function go(t){return t.Xr||(t.Xr=function(e,n,r){const i=R(e);return i.Fr(),new DM(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:FM.bind(null,t),Ni:UM.bind(null,t),Pr:VM.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),kg(t)?Sg(t):t.Jr.set("Unknown")):(await t.Xr.stop(),SS(t))})),t.Xr}function Br(t){return t.Zr||(t.Zr=function(e,n,r){const i=R(e);return i.Fr(),new xM(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:zM.bind(null,t),Ni:HM.bind(null,t),Nr:qM.bind(null,t),Cr:WM.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await mo(t)):(await t.Zr.stop(),t.Qr.length>0&&(A("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ag(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yo(t,e){if(Ae("AsyncQueue",`${e}: ${t}`),Mi(t))return new S(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=tg(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.eo=new De(M.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):U():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class wo{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new wo(e,n,vo.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.so=void 0,this.listeners=[]}}class GM{constructor(){this.queries=new co(e=>iT(e),du),this.onlineState="Unknown",this.io=new Set}}async function bg(t,e){const n=R(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new KM),i)try{s.so=await n.onListen(r)}catch(o){const a=yo(o,`Initialization of query '${Xm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Rg(n)}async function Ng(t,e){const n=R(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function QM(t,e){const n=R(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&Rg(n)}function YM(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Rg(t){t.io.forEach(e=>{e.next()})}class Pg{constructor(e,n,r){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.payload=e,this.byteLength=n}_o(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.k=e}Hn(e){return Sn(this.k,e)}Jn(e){return e.metadata.exists?DT(this.k,e.document,!1):ye.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return We(e)}}class XM{constructor(e,n,r){this.mo=e,this.localStore=n,this.k=r,this.queries=[],this.documents=[],this.progress=RS(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}po(e){const n=new Map,r=new NS(this.k);for(const i of e)if(i.metadata.queries){const s=r.Hn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||se()).add(s);n.set(o,a)}}return n}async complete(){const e=await _M(this.localStore,new NS(this.k),this.documents,this.mo.id),n=this.po(this.documents);for(const r of this.queries)await EM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new pM(Object.assign({},this.progress),e)}}function RS(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.key=e}}class OS{constructor(e){this.key=e}}class DS{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=se(),this.mutatedKeys=se(),this.Ao=sT(e),this.Ro=new vo(this.Ao)}get Po(){return this.To}bo(e,n){const r=n?n.vo:new bS,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=oh(this.query)&&i.size===this.query.limit?i.last():null,l=ah(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=fu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;d&&g?d.data.isEqual(g.data)?v!==I&&(r.track({type:3,doc:g}),p=!0):this.Vo(d,g)||(r.track({type:2,doc:g}),p=!0,(u&&this.Ao(g,u)>0||l&&this.Ao(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),p=!0):d&&!g&&(r.track({type:1,doc:d}),p=!0,(u||l)&&(a=!0)),p&&(g?(o=o.add(g),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),oh(this.query)||ah(this.query))for(;o.size>this.query.limit;){const c=oh(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(h)-g(d)}(l.type,c.type)||this.Ao(l.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,s.length!==0||u?{snapshot:new wo(this.query,e.Ro,i,s,e.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new bS,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=se(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new OS(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new PS(r))}),n}ko(e){this.To=e.zn,this.Io=se();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return wo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class ZM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eF{constructor(e){this.key=e,this.$o=!1}}class tF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new co(a=>iT(a),du),this.Mo=new Map,this.Lo=new Set,this.Bo=new De(M.comparator),this.Uo=new Map,this.qo=new gg,this.Ko={},this.jo=new Map,this.Qo=Ui.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function nF(t,e){const n=Mg(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await ho(n.localStore,Xt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Og(n,e,r,a==="current"),n.isPrimaryClient&&Sh(n.remoteStore,o)}return i}async function Og(t,e,n,r){t.Go=(c,h,d)=>async function(g,v,I,p){let f=v.view.bo(I);f.Bn&&(f=await _h(g.localStore,v.query,!1).then(({documents:y})=>v.view.bo(y,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,g.isPrimaryClient,m);return Lg(g,v.targetId,w.Co),w.snapshot}(t,c,h,d);const i=await _h(t.localStore,e,!0),s=new DS(e,i.zn),o=s.bo(i.documents),a=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Lg(t,n,u.Co);const l=new ZM(e,n,s);return t.Oo.set(e,l),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),u.snapshot}async function rF(t,e){const n=R(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(s=>!du(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bu(n.remoteStore,r.targetId),_o(n,r.targetId)}).catch(Vi)):(_o(n,r.targetId),await fo(n.localStore,r.targetId,!0))}async function iF(t,e,n){const r=Fg(t);try{const i=await function(s,o){const a=R(s),u=ze.now(),l=o.reduce((h,d)=>h.add(d.key),se());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(d=>{c=d;const g=[];for(const v of o){const I=N$(v,c.get(v.key));I!=null&&g.push(new Lr(v.key,I,JI(I.value.mapValue),Ne.exists(!0)))}return a.An.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ko[s.currentUser.toKey()];u||(u=new De(J)),u=u.insert(o,a),s.Ko[s.currentUser.toKey()]=u}(r,i.batchId,n),await Yn(r,i.changes),await mo(r.remoteStore)}catch(i){const s=yo(i,"Failed to persist write");n.reject(s)}}async function xS(t,e){const n=R(t);try{const r=await yM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?q(o.$o):i.removedDocuments.size>0&&(q(o.$o),o.$o=!1))}),await Yn(n,r,e)}catch(r){await Vi(r)}}function LS(t,e,n){const r=R(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Oo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ro(o)&&(u=!0)}),u&&Rg(a)}(r.eventManager,e),i.length&&r.Fo.Pr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sF(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new De(M.comparator);o=o.insert(s,ye.newNoDocument(s,Q.min()));const a=se().add(s),u=new yu(Q.min(),new Map,new _e(J),o,a);await xS(r,u),r.Bo=r.Bo.remove(s),r.Uo.delete(e),$g(r)}else await fo(r.localStore,e,!1).then(()=>_o(r,e,n)).catch(Vi)}async function oF(t,e){const n=R(t),r=e.batch.batchId;try{const i=await gM(n.localStore,e);xg(n,r,null),Dg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yn(n,i)}catch(i){await Vi(i)}}async function aF(t,e,n){const r=R(t);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.An.lookupMutationBatch(u,o).next(c=>(q(c!==null),l=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,l))})}(r.localStore,e);xg(r,e,n),Dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yn(r,i)}catch(i){await Vi(i)}}async function uF(t,e){const n=R(t);jr(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=R(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.An.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.jo.get(r)||[];i.push(e),n.jo.set(r,i)}catch(r){const i=yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Dg(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function xg(t,e,n){const r=R(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||$S(t,r)})}function $S(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(bu(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),$g(t))}function Lg(t,e,n){for(const r of n)r instanceof PS?(t.qo.addReference(r.key,e),lF(t,r)):r instanceof OS?(A("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||$S(t,r.key)):U()}function lF(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(A("SyncEngine","New document in limbo: "+n),t.Lo.add(r),$g(t))}function $g(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new M(ne.fromString(e)),r=t.Qo.next();t.Uo.set(r,new eF(n)),t.Bo=t.Bo.insert(n,r),Sh(t.remoteStore,new Mr(Xt(Js(n.path)),r,2,Ft.I))}}async function Yn(t,e,n){const r=R(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,u)=>{o.push(r.Go(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=mg.$n(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(a,u){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(u,h=>T.forEach(h.kn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Mi(c))throw c;A("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qn.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.qn=l.qn.insert(h,v)}}}(r.localStore,s))}async function cF(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await dS(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new S(E.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yn(n,r.Gn)}}function hF(t,e){const n=R(t),r=n.Uo.get(e);if(r&&r.$o)return se().add(r.key);{let i=se();const s=n.Mo.get(e);if(!s)return i;for(const o of s){const a=n.Oo.get(o);i=i.unionWith(a.view.Po)}return i}}async function dF(t,e){const n=R(t),r=await _h(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&Lg(n,e.targetId,i.Co),i}async function fF(t){const e=R(t);return gS(e.localStore).then(n=>Yn(e,n))}async function pF(t,e,n,r){const i=R(t),s=await function(o,a){const u=R(o),l=R(u.An);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Zt(c,a).next(h=>h?u.Wn.vn(c,h):T.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await mo(i.remoteStore):n==="acknowledged"||n==="rejected"?(xg(i,e,r||null),Dg(i,e),function(o,a){R(R(o).An).ee(a)}(i.localStore,e)):U(),await Yn(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function mF(t,e){const n=R(t);if(Mg(n),Fg(n),e===!0&&n.Wo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await MS(n,r.toArray());n.Wo=!0,await Cg(n.remoteStore,!0);for(const s of i)Sh(n.remoteStore,s)}else if(e===!1&&n.Wo!==!1){const r=[];let i=Promise.resolve();n.Mo.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(_o(n,o),fo(n.localStore,o,!0))),bu(n.remoteStore,o)}),await i,await MS(n,r),function(s){const o=R(s);o.Uo.forEach((a,u)=>{bu(o.remoteStore,u)}),o.qo.hs(),o.Uo=new Map,o.Bo=new De(M.comparator)}(n),n.Wo=!1,await Cg(n.remoteStore,!1)}}async function MS(t,e,n){const r=R(t),i=[],s=[];for(const o of e){let a;const u=r.Mo.get(o);if(u&&u.length!==0){a=await ho(r.localStore,Xt(u[0]));for(const l of u){const c=r.Oo.get(l),h=await dF(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await mS(r.localStore,o);a=await ho(r.localStore,l),await Og(r,FS(l),o,!1)}i.push(a)}return r.Fo.Pr(s),i}function FS(t){return nT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function gF(t){const e=R(t);return R(R(e.localStore).persistence).Tn()}async function yF(t,e,n,r){const i=R(t);if(i.Wo)A("SyncEngine","Ignoring unexpected query state notification.");else if(i.Mo.has(e))switch(n){case"current":case"not-current":{const s=await gS(i.localStore),o=yu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Yn(i,s,o);break}case"rejected":await fo(i.localStore,e,!0),_o(i,e,r);break;default:U()}}async function vF(t,e,n){const r=Mg(t);if(r.Wo){for(const i of e){if(r.Mo.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await mS(r.localStore,i),o=await ho(r.localStore,s);await Og(r,FS(s),o.targetId,!1),Sh(r.remoteStore,o)}for(const i of n)r.Mo.has(i)&&await fo(r.localStore,i,!1).then(()=>{bu(r.remoteStore,i),_o(r,i)}).catch(Vi)}}function Mg(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sF.bind(null,e),e.Fo.Pr=QM.bind(null,e.eventManager),e.Fo.zo=YM.bind(null,e.eventManager),e}function Fg(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aF.bind(null,e),e}function wF(t,e,n){const r=R(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=R(h),v=We(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",I=>g.Ye.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(v)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(RS(a));const u=new XM(a,i.localStore,s.k);let l=await s.Ho();for(;l;){const h=await u.yo(l);h&&o._updateProgress(h),l=await s.Ho()}const c=await u.complete();await Yn(i,c.In,void 0),await function(h,d){const g=R(h);return g.persistence.runTransaction("Save bundle","readwrite",v=>g.Ye.saveBundleMetadata(v,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){su("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class US{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return hS(this.persistence,new cS,e.initialUser,this.k)}Yo(e){return new AM(yg.ks,this.k)}Jo(e){return new wS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VS extends US{constructor(e,n,r){super(),this.ta=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await wM(this.localStore),await this.ta.initialize(this,e),await Fg(this.ta.syncEngine),await mo(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return hS(this.persistence,new cS,e.initialUser,this.k)}Xo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new uM(n,e.asyncQueue)}Yo(e){const n=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new fg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,ES(),Th(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new wS}}class _F extends VS{constructor(e,n){super(e,n,!1),this.ta=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ta.syncEngine;this.sharedClientState instanceof Eg&&(this.sharedClientState.syncEngine={mi:pF.bind(null,n),gi:yF.bind(null,n),yi:vF.bind(null,n),Tn:gF.bind(null,n),_i:fF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.sn(async r=>{await mF(this.ta.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Jo(e){const n=ES();if(!Eg.bt(n))throw new S(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Eg(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ug{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>LS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cF.bind(null,this.syncEngine),await Cg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GM}createDatastore(e){const n=Cu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new OM(i));var i;return function(s,o,a,u){return new LM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>LS(this.syncEngine,a,0),o=_S.bt()?new _S:new NM,new MM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new tF(r,i,s,o,a,u);return l&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);A("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await po(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e,n){this.sa=e,this.k=n,this.metadata=new Be,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(r=>{r&&r._o()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const e=await this.oa();if(e===null)return null;const n=this.ia.decode(e),r=Number(n);isNaN(r)&&this.aa(`length string (${n}) is not valid number`);const i=await this.ca(r);return new JM(JSON.parse(i),e.length+r)}ua(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oa(){for(;this.ua()<0&&!await this.ha(););if(this.buffer.length===0)return null;const e=this.ua();e<0&&this.aa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ca(e){for(;this.buffer.length<e;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const n=this.ia.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}aa(e){throw this.sa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ha(){const e=await this.sa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=R(r),o=Eu(s.k)+"/documents",a={documents:i.map(h=>_u(s.k,h))},u=await s.ji("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=j$(s.k,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());q(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new gu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=M.fromPath(r);this.mutations.push(new eg(i,this.precondition(i)))}),await async function(n,r){const i=R(n),s=Eu(i.k)+"/documents",o={writes:r.map(a=>ph(i.k,a))};await i.Bi("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw U();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new S(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new S(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.la=5,this.ur=new Ig(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const e=new IF(this.datastore),n=this.da(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.wa(i)}))}).catch(r=>{this.wa(r)})})}da(e){try{const n=this.updateFunction(e);return!Oi(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}wa(e){this.la>0&&this._a(e)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(e)}_a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!wT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=BI.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function BS(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vg(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=R(s);a.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const u=jr(a);a.Gr.add(3),await po(a),u&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Au(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Vg(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await BS(t,new US)),t.offlineComponents}async function Ah(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await zS(t,new Ug)),t.onlineComponents}function qS(t){return Vg(t).then(e=>e.persistence)}function jg(t){return Vg(t).then(e=>e.localStore)}function WS(t){return Ah(t).then(e=>e.remoteStore)}function Bg(t){return Ah(t).then(e=>e.syncEngine)}async function Eo(t){const e=await Ah(t),n=e.eventManager;return n.onListen=nF.bind(null,e.syncEngine),n.onUnlisten=rF.bind(null,e.syncEngine),n}function kF(t){return t.asyncQueue.enqueue(async()=>{const e=await qS(t),n=await WS(t);return e.setNetworkEnabled(!0),function(r){const i=R(r);return i.Gr.delete(0),Au(i)}(n)})}function CF(t){return t.asyncQueue.enqueue(async()=>{const e=await qS(t),n=await WS(t);return e.setNetworkEnabled(!1),async function(r){const i=R(r);i.Gr.add(0),await po(i),i.Jr.set("Offline")}(n)})}function AF(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=R(a);return l.persistence.runTransaction("read document","readonly",c=>l.Wn.Rn(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new S(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=yo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await jg(t),e,n)),n.promise}function HS(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ch({next:h=>{s.enqueueAndForget(()=>Ng(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new S(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new S(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Pg(Js(o.path),l,{includeMetadataChanges:!0,wo:!0});return bg(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function bF(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await _h(r,i,!0),a=new DS(i,o.zn),u=a.bo(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=yo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await jg(t),e,n)),n.promise}function KS(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ch({next:h=>{s.enqueueAndForget(()=>Ng(i,c)),h.fromCache&&a.source==="server"?u.reject(new S(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Pg(o,l,{includeMetadataChanges:!0,wo:!0});return bg(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function NF(t,e){const n=new Ch(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).io.add(i),i.next()}(await Eo(t),n)),()=>{n.na(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).io.delete(i)}(await Eo(t),n))}}function RF(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Ah(i).then(s=>s.datastore)}(t);new TF(t.asyncQueue,r,e,n).run()}),n.promise}function PF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new EF(u,l)}(function(u,l){if(u instanceof Uint8Array)return jS(u,l);if(u instanceof ArrayBuffer)return jS(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Cu(e));t.asyncQueue.enqueueAndForget(async()=>{wF(await Bg(t),i,r)})}function OF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=R(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ye.getNamedQuery(s,r))}(await jg(t),e))}class DF{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e,n){if(!n)throw new S(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QS(t,e,n,r){if(e===!0&&r===!0)throw new S(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function YS(t){if(!M.isDocumentKey(t))throw new S(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function JS(t){if(M.isDocumentKey(t))throw new S(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bh(t);throw new S(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XS(t,e){if(e<=0)throw new S(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ZS({}),this._settingsFrozen=!1,e instanceof Io?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(i.options.projectId)}(e))}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ZS(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new t$;switch(n.type){case"gapi":const r=n.client;return q(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new s$(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=GS.get(e);n&&(A("ComponentProvider","Removing Datastore"),GS.delete(e),n.terminate())}(this),Promise.resolve()}}function xF(t,e,n,r={}){var i;const s=(t=te(t,Nu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&su("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=LD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(u)}t._authCredentials=new n$(new jI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}}class gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class Cn extends gt{constructor(e,n,r){super(e,n,Js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new M(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function e1(t,e,...n){if(t=j(t),zg("collection","path",e),t instanceof Nu){const r=ne.fromString(e,...n);return JS(r),new Cn(t,null,r)}{if(!(t instanceof fe||t instanceof Cn))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return JS(r),new Cn(t.firestore,null,r)}}function LF(t,e){if(t=te(t,Nu),zg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gt(t,null,function(n){return new Kn(ne.emptyPath(),n)}(e))}function Nh(t,e,...n){if(t=j(t),arguments.length===1&&(e=BI.A()),zg("doc","path",e),t instanceof Nu){const r=ne.fromString(e,...n);return YS(r),new fe(t,null,new M(r))}{if(!(t instanceof fe||t instanceof Cn))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return YS(r),new fe(t.firestore,t instanceof Cn?t.converter:null,new M(r))}}function t1(t,e){return t=j(t),e=j(e),(t instanceof fe||t instanceof Cn)&&(e instanceof fe||e instanceof Cn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function n1(t,e){return t=j(t),e=j(e),t instanceof gt&&e instanceof gt&&t.firestore===e.firestore&&du(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Ig(this,"async_queue_retry"),this.Ra=()=>{const n=Th();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Th();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new Be;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Mi(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(r=>{this.Ta=r,this.Ea=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ae("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ea=!1,r))));return this.ma=n,n}enqueueAfterDelay(e,n,r){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const i=Ag.createAndSchedule(this,e,n,r,s=>this.Va(s));return this.pa.push(i),i}Pa(){this.Ta&&U()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}function qg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class MF{constructor(){this._progressObserver={},this._taskCompletionResolver=new Be,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF=-1;class Ie extends Nu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new $F,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||r1(this),this._firestoreClient.terminate()}}function Ke(t){return t._firestoreClient||r1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function r1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new DF(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new SF(t._authCredentials,t._appCheckCredentials,t._queue,r)}function UF(t,e){s1(t=te(t,Ie));const n=Ke(t),r=t._freezeSettings(),i=new Ug;return i1(n,i,new VS(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function VF(t){s1(t=te(t,Ie));const e=Ke(t),n=t._freezeSettings(),r=new Ug;return i1(e,r,new _F(r,n.cacheSizeBytes))}function i1(t,e,n){const r=new Be;return t.asyncQueue.enqueue(async()=>{try{await BS(t,n),await zS(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===E.FAILED_PRECONDITION||s.code===E.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function jF(t){if(t._initialized&&!t._terminated)throw new S(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Be;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!un.bt())return Promise.resolve();const r=n+"main";await un.delete(r)}(pg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function BF(t){return function(e){const n=new Be;return e.asyncQueue.enqueueAndForget(async()=>uF(await Bg(e),n)),n.promise}(Ke(t=te(t,Ie)))}function zF(t){return kF(Ke(t=te(t,Ie)))}function qF(t){return CF(Ke(t=te(t,Ie)))}function WF(t,e){const n=Ke(t=te(t,Ie)),r=new MF;return PF(n,t._databaseId,e,r),r}function HF(t,e){return OF(Ke(t=te(t,Ie)),e).then(n=>n?new gt(t,null,n.query):null)}function s1(t){if(t._initialized||t._terminated)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(qe.fromBase64String(e))}catch(n){throw new S(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KF=/^__.*__$/;class GF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class o1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ph{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.Ma(e),i}La(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Dh(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(a1(this.xa)&&KF.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class QF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Cu(e)}ja(e,n,r,i=!1){return new Ph({xa:e,methodName:n,Ka:r,path:it.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Bi(t){const e=t._freezeSettings(),n=Cu(t._databaseId);return new QF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Oh(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);Gg("Data must be an object, but it was:",o,r);const a=c1(r,o);let u,l;if(s.merge)u=new Ks(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Qg(e,h,n);if(!o.contains(d))throw new S(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);d1(c,d)||c.push(d)}u=new Ks(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new GF(new pt(a),u,l)}class Ru extends ji{_toFieldTransform(e){if(e.xa!==2)throw e.xa===1?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ru}}function u1(t,e,n){return new Ph({xa:3,Ka:e.settings.Ka,methodName:t._methodName,Oa:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Wg extends ji{_toFieldTransform(e){return new pu(e.path,new Zs)}isEqual(e){return e instanceof Wg}}class YF extends ji{constructor(e,n){super(e),this.Qa=n}_toFieldTransform(e){const n=u1(this,e,!0),r=this.Qa.map(s=>zi(s,n)),i=new xi(r);return new pu(e.path,i)}isEqual(e){return this===e}}class JF extends ji{constructor(e,n){super(e),this.Qa=n}_toFieldTransform(e){const n=u1(this,e,!0),r=this.Qa.map(s=>zi(s,n)),i=new Li(r);return new pu(e.path,i)}isEqual(e){return this===e}}class XF extends ji{constructor(e,n){super(e),this.Wa=n}_toFieldTransform(e){const n=new eo(e.k,uT(e.k,this.Wa));return new pu(e.path,n)}isEqual(e){return this===e}}function Hg(t,e,n,r){const i=t.ja(1,e,n);Gg("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();Pi(r,(u,l)=>{const c=Yg(e,u,n);l=j(l);const h=i.La(c);if(l instanceof Ru)s.push(c);else{const d=zi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ks(s);return new o1(o,a,i.fieldTransforms)}function Kg(t,e,n,r,i,s){const o=t.ja(1,e,n),a=[Qg(e,r,n)],u=[i];if(s.length%2!=0)throw new S(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Qg(e,s[d])),u.push(s[d+1]);const l=[],c=pt.empty();for(let d=a.length-1;d>=0;--d)if(!d1(l,a[d])){const g=a[d];let v=u[d];v=j(v);const I=o.La(g);if(v instanceof Ru)l.push(g);else{const p=zi(v,I);p!=null&&(l.push(g),c.set(g,p))}}const h=new Ks(l);return new o1(c,h,o.fieldTransforms)}function l1(t,e,n,r=!1){return zi(n,t.ja(r?4:3,e))}function zi(t,e){if(h1(t=j(t)))return Gg("Unsupported field value:",e,t),c1(t,e);if(t instanceof ji)return function(n,r){if(!a1(r.xa))throw r.Ua(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ua(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=zi(o,r.Ba(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uT(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:wu(r.k,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wu(r.k,i)}}if(n instanceof Rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof An)return{bytesValue:bT(r.k,n._byteString)};if(n instanceof fe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ng(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ua(`Unsupported field value: ${bh(n)}`)}(t,e)}function c1(t,e){const n={};return WI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=zi(i,e.Fa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Rh||t instanceof An||t instanceof fe||t instanceof ji)}function Gg(t,e,n){if(!h1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=bh(n);throw r==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function Qg(t,e,n){if((e=j(e))instanceof zr)return e._internalPath;if(typeof e=="string")return Yg(t,e);throw Dh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ZF=new RegExp("[~\\*/\\[\\]]");function Yg(t,e,n){if(e.search(ZF)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zr(...e.split("."))._internalPath}catch{throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new S(E.INVALID_ARGUMENT,a+t+u)}function d1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eU extends Pu{data(){return super.data()}}function xh(t,e){return typeof e=="string"?Yg(t,e):e instanceof zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jn extends Pu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ou extends Jn{data(e={}){return super.data(e)}}class qr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ou(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ou(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ou(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:tU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function f1(t,e){return t instanceof Jn&&e instanceof Jn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof qr&&e instanceof qr&&t._firestore===e._firestore&&n1(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){if(ah(t)&&t.explicitOrderBy.length===0)throw new S(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Du{}function Wr(t,...e){for(const n of e)t=n._apply(t);return t}class nU extends Du{constructor(e,n,r){super(),this.Ga=e,this.za=n,this.Ha=r,this.type="where"}_apply(e){const n=Bi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new S(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){_1(c,l);const g=[];for(const v of c)g.push(w1(a,i,v));h={arrayValue:{values:g}}}else h=w1(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_1(c,l),h=l1(o,s,c,l==="in"||l==="not-in");const d=Tt.create(u,l,h);return function(g,v){if(v.V()){const p=Ym(g);if(p!==null&&!p.isEqual(v.field))throw new S(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${p.toString()}' and '${v.field.toString()}'`);const f=Qm(g);f!==null&&E1(g,v.field,f)}const I=function(p,f){for(const m of p.filters)if(f.indexOf(m.op)>=0)return m.op;return null}(g,function(p){switch(p){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(I!==null)throw I===v.op?new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${I.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ga,this.za,this.Ha);return new gt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Kn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function rU(t,e,n){const r=e,i=xh("where",t);return new nU(i,r,n)}class iU extends Du{constructor(e,n){super(),this.Ga=e,this.Ja=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ys(i,s);return function(a,u){if(Qm(a)===null){const l=Ym(a);l!==null&&E1(a,l,u.field)}}(r,o),o}(e._query,this.Ga,this.Ja);return new gt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Kn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function sU(t,e="asc"){const n=e,r=xh("orderBy",t);return new iU(r,n)}class m1 extends Du{constructor(e,n,r){super(),this.type=e,this.Ya=n,this.Xa=r}_apply(e){return new gt(e.firestore,e.converter,rT(e._query,this.Ya,this.Xa))}}function oU(t){return XS("limit",t),new m1("limit",t,"F")}function aU(t){return XS("limitToLast",t),new m1("limitToLast",t,"L")}class g1 extends Du{constructor(e,n,r){super(),this.type=e,this.Za=n,this.tc=r}_apply(e){const n=v1(e,this.type,this.Za,this.tc);return new gt(e.firestore,e.converter,function(r,i){return new Kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function uU(...t){return new g1("startAt",t,!0)}function lU(...t){return new g1("startAfter",t,!1)}class y1 extends Du{constructor(e,n,r){super(),this.type=e,this.Za=n,this.tc=r}_apply(e){const n=v1(e,this.type,this.Za,this.tc);return new gt(e.firestore,e.converter,function(r,i){return new Kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function cU(...t){return new y1("endBefore",t,!0)}function hU(...t){return new y1("endAt",t,!1)}function v1(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Pu)return function(i,s,o,a,u){if(!a)throw new S(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Xs(i))if(c.field.isKeyField())l.push(th(s,a.key));else{const h=a.data.field(c.field);if(qm(h))throw new S(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new S(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new hu(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Bi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new S(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const v=l[g];if(h[g].field.isKeyField()){if(typeof v!="string")throw new S(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Jm(s)&&v.indexOf("/")!==-1)throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const I=s.path.child(ne.fromString(v));if(!M.isDocumentKey(I))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const p=new M(I);d.push(th(o,p))}else{const I=l1(a,u,v);d.push(I)}}return new hu(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function w1(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new S(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jm(e)&&n.indexOf("/")!==-1)throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!M.isDocumentKey(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return th(t,new M(r))}if(n instanceof fe)return th(t,n._key);throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${bh(n)}.`)}function _1(t,e){if(!Array.isArray(t)||t.length===0)throw new S(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new S(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function E1(t,e,n){if(!n.isEqual(e))throw new S(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{convertValue(e,n="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return Pi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Rh(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=HI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(au(e));default:return null}}convertTimestamp(e){const n=xr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);q(jT(r));const i=new Io(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Ae(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class dU extends Jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bi(e)}set(e,n,r){this._verifyNotCommitted();const i=Hr(e,this._firestore),s=Lh(i.converter,n,r),o=Oh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Hr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof zr?Kg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Hg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Hr(e,this._firestore);return this._mutations=this._mutations.concat(new gu(n._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hr(t,e){if((t=j(t)).firestore!==e)throw new S(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){t=te(t,fe);const e=te(t.firestore,Ie);return HS(Ke(e),t._key).then(n=>Xg(e,t,n))}class Wi extends Jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,n)}}function mU(t){t=te(t,fe);const e=te(t.firestore,Ie),n=Ke(e),r=new Wi(e);return AF(n,t._key).then(i=>new Jn(e,r,t._key,i,new qi(i!==null&&i.hasLocalMutations,!0),t.converter))}function gU(t){t=te(t,fe);const e=te(t.firestore,Ie);return HS(Ke(e),t._key,{source:"server"}).then(n=>Xg(e,t,n))}function yU(t){t=te(t,gt);const e=te(t.firestore,Ie),n=Ke(e),r=new Wi(e);return p1(t._query),KS(n,t._query).then(i=>new qr(e,r,t,i))}function vU(t){t=te(t,gt);const e=te(t.firestore,Ie),n=Ke(e),r=new Wi(e);return bF(n,t._query).then(i=>new qr(e,r,t,i))}function wU(t){t=te(t,gt);const e=te(t.firestore,Ie),n=Ke(e),r=new Wi(e);return KS(n,t._query,{source:"server"}).then(i=>new qr(e,r,t,i))}function I1(t,e,n){t=te(t,fe);const r=te(t.firestore,Ie),i=Lh(t.converter,e,n);return xu(r,[Oh(Bi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ne.none())])}function T1(t,e,n,...r){t=te(t,fe);const i=te(t.firestore,Ie),s=Bi(i);let o;return o=typeof(e=j(e))=="string"||e instanceof zr?Kg(s,"updateDoc",t._key,e,n,r):Hg(s,"updateDoc",t._key,e),xu(i,[o.toMutation(t._key,Ne.exists(!0))])}function _U(t){return xu(te(t.firestore,Ie),[new gu(t._key,Ne.none())])}function EU(t,e){const n=te(t.firestore,Ie),r=Nh(t),i=Lh(t.converter,e);return xu(n,[Oh(Bi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function S1(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(qg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof fe)l=te(t.firestore,Ie),c=Js(t._key.path),u={next:h=>{e[o]&&e[o](Xg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=te(t,gt);l=te(h.firestore,Ie),c=h._query;const d=new Wi(l);u={next:g=>{e[o]&&e[o](new qr(l,d,h,g))},error:e[o+1],complete:e[o+2]},p1(t._query)}return function(h,d,g,v){const I=new Ch(v),p=new Pg(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>bg(await Eo(h),p)),()=>{I.na(),h.asyncQueue.enqueueAndForget(async()=>Ng(await Eo(h),p))}}(Ke(l),c,a,u)}function IU(t,e){return NF(Ke(t=te(t,Ie)),qg(e)?e:{next:e})}function xu(t,e){return function(n,r){const i=new Be;return n.asyncQueue.enqueueAndForget(async()=>iF(await Bg(n),r,i)),i.promise}(Ke(t),e)}function Xg(t,e,n){const r=n.docs.get(e._key),i=new Wi(t);return new Jn(t,i,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Bi(e)}get(e){const n=Hr(e,this._firestore),r=new dU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return U();const s=i[0];if(s.isFoundDocument())return new Pu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Pu(this._firestore,r,n._key,null,n.converter);throw U()})}set(e,n,r){const i=Hr(e,this._firestore),s=Lh(i.converter,n,r),o=Oh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Hr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof zr?Kg(this._dataReader,"Transaction.update",s._key,n,r,i):Hg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Hr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Hr(e,this._firestore),r=new Wi(this._firestore);return super.get(e).then(i=>new Jn(this._firestore,r,n._key,i._document,new qi(!1,!1),n.converter))}}function SU(t,e){return RF(Ke(t=te(t,Ie)),n=>e(new TU(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(){return new Ru("deleteField")}function CU(){return new Wg("serverTimestamp")}function AU(...t){return new YF("arrayUnion",t)}function bU(...t){return new JF("arrayRemove",t)}function NU(t){return new XF("increment",t)}(function(t,e=!0){(function(n){Ws=n})(ki),Si(new qn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Ie(i,new r$(n.getProvider("auth-internal")),new a$(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),In(VI,"3.4.0",t),In(VI,"3.4.0","esm2017")})();const RU="@firebase/firestore-compat",PU="0.1.9";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new S("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){if(typeof Uint8Array=="undefined")throw new S("unimplemented","Uint8Arrays are not available in this environment.")}function C1(){if(!c$())throw new S("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Lu{constructor(e){this._delegate=e}static fromBase64String(e){return C1(),new Lu(An.fromBase64String(e))}static fromUint8Array(e){return k1(),new Lu(An.fromUint8Array(e))}toBase64(){return C1(),this._delegate.toBase64()}toUint8Array(){return k1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){return OU(t,["next","error","complete"])}function OU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{enableIndexedDbPersistence(e,n){return UF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return VF(e._delegate)}clearIndexedDbPersistence(e){return jF(e._delegate)}}class A1{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Io||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&su("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){xF(this._delegate,e,n,r)}enableNetwork(){return zF(this._delegate)}disableNetwork(){return qF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,QS("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return BF(this._delegate)}onSnapshotsInSync(e){return IU(this._delegate,e)}get app(){if(!this._appCompat)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new To(this,e1(this._delegate,e))}catch(n){throw St(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,Nh(this._delegate,e))}catch(n){throw St(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new kt(this,LF(this._delegate,e))}catch(n){throw St(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return SU(this._delegate,n=>e(new b1(this,n)))}batch(){return Ke(this._delegate),new N1(new fU(this._delegate,e=>xu(this._delegate,e)))}loadBundle(e){return WF(this._delegate,e)}namedQuery(e){return HF(this._delegate,e).then(n=>n?new kt(this,n):null)}}class $h extends Jg{constructor(e){super();this.firestore=e}convertBytes(e){return new Lu(new An(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function xU(t){ZL(t)}class b1{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}get(e){const n=Ki(e);return this._delegate.get(n).then(r=>new $u(this._firestore,new Jn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ki(e);return r?(Zg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ki(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ki(e);return this._delegate.delete(n),this}}class N1{constructor(e){this._delegate=e}set(e,n,r){const i=Ki(e);return r?(Zg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ki(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ki(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Hi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ou(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Mu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Hi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Hi(e,new $h(e),n),i.set(n,s)),s}}Hi.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}static forPath(e,n,r){if(e.length%2!=0)throw new S("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new fe(n._delegate,r,new M(e)))}static forKey(e,n,r){return new en(n,new fe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new To(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new To(this.firestore,e1(this._delegate,e))}catch(n){throw St(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof fe?t1(this._delegate,e):!1}set(e,n){n=Zg("DocumentReference.set",n);try{return n?I1(this._delegate,e,n):I1(this._delegate,e)}catch(r){throw St(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?T1(this._delegate,e):T1(this._delegate,e,n,...r)}catch(i){throw St(i,"updateDoc()","DocumentReference.update()")}}delete(){return _U(this._delegate)}onSnapshot(...e){const n=R1(e),r=P1(e,i=>new $u(this.firestore,new Jn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return S1(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mU(this._delegate):(e==null?void 0:e.source)==="server"?n=gU(this._delegate):n=pU(this._delegate),n.then(r=>new $u(this.firestore,new Jn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Hi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function St(t,e,n){return t.message=t.message.replace(e,n),t}function R1(t){for(const e of t)if(typeof e=="object"&&!ey(e))return e;return{}}function P1(t,e){var n,r;let i;return ey(t[0])?i=t[0]:ey(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class $u{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return f1(this._delegate,e._delegate)}}class Mu extends $u{data(e){const n=this._delegate.data(e);return e$(n!==void 0),n}}class kt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}where(e,n,r){try{return new kt(this.firestore,Wr(this._delegate,rU(e,n,r)))}catch(i){throw St(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new kt(this.firestore,Wr(this._delegate,sU(e,n)))}catch(r){throw St(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new kt(this.firestore,Wr(this._delegate,oU(e)))}catch(n){throw St(n,"limit()","Query.limit()")}}limitToLast(e){try{return new kt(this.firestore,Wr(this._delegate,aU(e)))}catch(n){throw St(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new kt(this.firestore,Wr(this._delegate,uU(...e)))}catch(n){throw St(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new kt(this.firestore,Wr(this._delegate,lU(...e)))}catch(n){throw St(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new kt(this.firestore,Wr(this._delegate,cU(...e)))}catch(n){throw St(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new kt(this.firestore,Wr(this._delegate,hU(...e)))}catch(n){throw St(n,"endAt()","Query.endAt()")}}isEqual(e){return n1(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=vU(this._delegate):(e==null?void 0:e.source)==="server"?n=wU(this._delegate):n=yU(this._delegate),n.then(r=>new ty(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=R1(e),r=P1(e,i=>new ty(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return S1(this._delegate,n,r)}withConverter(e){return new kt(this.firestore,e?this._delegate.withConverter(Hi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class LU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Mu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ty{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new kt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Mu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new LU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Mu(this._firestore,r))})}isEqual(e){return f1(this._delegate,e._delegate)}}class To extends kt{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,Nh(this._delegate)):new en(this.firestore,Nh(this._delegate,e))}catch(n){throw St(n,"doc()","CollectionReference.doc()")}}add(e){return EU(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return t1(this._delegate,e._delegate)}withConverter(e){return new To(this.firestore,e?this._delegate.withConverter(Hi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ki(t){return te(t,fe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(...e){this._delegate=new zr(...e)}static documentId(){return new ny(it.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof zr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._delegate=e}static serverTimestamp(){const e=CU();return e._methodName="FieldValue.serverTimestamp",new Gi(e)}static delete(){const e=kU();return e._methodName="FieldValue.delete",new Gi(e)}static arrayUnion(...e){const n=AU(...e);return n._methodName="FieldValue.arrayUnion",new Gi(n)}static arrayRemove(...e){const n=bU(...e);return n._methodName="FieldValue.arrayRemove",new Gi(n)}static increment(e){const n=NU(e);return n._methodName="FieldValue.increment",new Gi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U={Firestore:A1,GeoPoint:Rh,Timestamp:ze,Blob:Lu,Transaction:b1,WriteBatch:N1,DocumentReference:en,DocumentSnapshot:$u,Query:kt,QueryDocumentSnapshot:Mu,QuerySnapshot:ty,CollectionReference:To,FieldPath:ny,FieldValue:Gi,setLogLevel:xU,CACHE_SIZE_UNLIMITED:FF};function MU(t,e){t.INTERNAL.registerComponent(new qn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},$U)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(t){MU(t,(e,n)=>new A1(e,n,new DU)),t.registerVersion(RU,PU)}FU(Va);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ry(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Fu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},So={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function O1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VU=UU,jU=O1,D1=new Ei("auth","Firebase",O1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Cc("@firebase/auth");function Mh(t,...e){x1.logLevel<=ee.ERROR&&x1.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,...e){throw iy(t,...e)}function ut(t,...e){return iy(t,...e)}function L1(t,e,n){const r=Object.assign(Object.assign({},jU()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function ko(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&at(t,"argument-error"),L1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return D1.create(t,...e)}function k(t,e,...n){if(!t)throw iy(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mh(e),new Error(e)}function ln(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new Map;function jt(t){ln(t instanceof Function,"Expected a class definition");let e=$1.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$1.set(t,e),e)}function BU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sy(){return M1()==="http:"||M1()==="https:"}function M1(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sy()||qp()||"connection"in navigator)?navigator.onLine:!0}function qU(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=cE()||Sc()}get(){return zU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HU=new Vu(3e4,6e4);function xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ge(t,e,n,r,i={}){return F1(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(ay.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),ay.fetch()(U1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function F1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WU),e);try{const i=new KU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fh(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fh(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fh(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw L1(t,c,l);at(t,c)}}catch(i){if(i instanceof Jt)throw i;at(t,"network-request-failed")}}async function Xn(t,e,n,r,i={}){const s=await Ge(t,e,n,r,i);return"mfaPendingCredential"in s&&at(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?oy(t.config,i):`${t.config.apiScheme}://${i}`}class KU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"timeout")),HU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fh(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GU(t,e){return Ge(t,"POST","/v1/accounts:delete",e)}async function QU(t,e){return Ge(t,"POST","/v1/accounts:update",e)}async function YU(t,e){return Ge(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JU(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=Uh(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ju(uy(i.auth_time)),issuedAtTime:ju(uy(i.iat)),expirationTime:ju(uy(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uy(t){return Number(t)*1e3}function Uh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mh("JWT malformed, contained fewer than 3 sections"),null;try{const i=OD(n);return i?JSON.parse(i):(Mh("Failed to decode base64 JWT payload"),null)}catch(i){return Mh("Caught error parsing JWT payload as JSON",i),null}}function XU(t){const e=Uh(t);return k(e,"internal-error"),k(typeof e.exp!="undefined","internal-error"),k(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&ZU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ju(this.lastLoginAt),this.creationTime=ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zn(t,YU(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?rV(s.providerUserInfo):[],a=nV(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function tV(t){const e=j(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rV(t){return t.map(e=>{var{providerId:n}=e,r=ry(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iV(t,e){const n=await F1(t,{},()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U1(t,i,"/v1/token",`key=${s}`);return ay.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken!="undefined","internal-error"),k(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):XU(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zu;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zu,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){k(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ry(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new eV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new V1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JU(this,e)}reload(){return tV(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,GU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:y,isAnonymous:C,providerData:N,stsTokenManager:F}=n;k(w&&F,e,"internal-error");const W=zu.fromJSON(this.name,F);k(typeof w=="string",e,"internal-error"),Kr(h,e.name),Kr(d,e.name),k(typeof y=="boolean",e,"internal-error"),k(typeof C=="boolean",e,"internal-error"),Kr(g,e.name),Kr(v,e.name),Kr(I,e.name),Kr(p,e.name),Kr(f,e.name),Kr(m,e.name);const $=new Qi({uid:w,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:I,stsTokenManager:W,createdAt:f,lastLoginAt:m});return N&&Array.isArray(N)&&($.providerData=N.map(Te=>Object.assign({},Te))),p&&($._redirectEventId=p),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new zu;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}j1.type="NONE";const qu=j1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class Co{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Co(jt(qu),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||jt(qu);const o=Yi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Qi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Co(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Co(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H1(e))return"Blackberry";if(K1(e))return"Webos";if(ly(e))return"Safari";if((e.includes("chrome/")||q1(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z1(t=he()){return/firefox\//i.test(t)}function ly(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q1(t=he()){return/crios\//i.test(t)}function W1(t=he()){return/iemobile/i.test(t)}function Wu(t=he()){return/android/i.test(t)}function H1(t=he()){return/blackberry/i.test(t)}function K1(t=he()){return/webos/i.test(t)}function Ao(t=he()){return/iphone|ipad|ipod/i.test(t)}function sV(t=he()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function oV(t=he()){var e;return Ao(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function aV(){return Wp()&&document.documentMode===10}function G1(t=he()){return Ao(t)||Wu(t)||K1(t)||H1(t)||/windows phone/i.test(t)||W1(t)}function uV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e=[]){let n;switch(t){case"Browser":n=B1(he());break;case"Worker":n=`${B1(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y1(this),this.idTokenSubscription=new Y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;this._deleted||(this.persistenceManager=await Co.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Qe(t){return j(t)}class Y1{constructor(e){this.auth=e,this.observer=null,this.addObserver=fE(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cV(t,e,n){const r=Qe(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=J1(e),{host:o,port:a}=hV(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dV()}function J1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hV(t){const e=J1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:X1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:X1(o)}}}function X1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(t,e){return Ge(t,"POST","/v1/accounts:resetPassword",xe(t,e))}async function ek(t,e){return Ge(t,"POST","/v1/accounts:update",e)}async function fV(t,e){return Ge(t,"POST","/v1/accounts:update",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}async function Vh(t,e){return Ge(t,"POST","/v1/accounts:sendOobCode",xe(t,e))}async function mV(t,e){return Vh(t,e)}async function gV(t,e){return Vh(t,e)}async function yV(t,e){return Vh(t,e)}async function vV(t,e){return Vh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}async function _V(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends bo{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return pV(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wV(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ek(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _V(e,{idToken:n,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="http://localhost";class Nn extends bo{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ry(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:EV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(t,e){return Ge(t,"POST","/v1/accounts:sendVerificationCode",xe(t,e))}async function TV(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e))}async function SV(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e));if(n.temporaryProof)throw Fh(t,"account-exists-with-different-credential",n);return n}const kV={USER_NOT_FOUND:"user-not-found"};async function CV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,n),kV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends bo{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Ji({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ji({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return TV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return SV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return CV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ji({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bV(t){const e=Us(Ma(t)).link,n=e?Us(Ma(e)).deep_link_id:null,r=Us(Ma(t)).deep_link_id;return(r?Us(Ma(r)).link:null)||r||n||e||t}class jh{constructor(e){var n,r,i,s,o,a;const u=Us(Ma(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=AV((i=u.mode)!==null&&i!==void 0?i:null);k(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bV(e);try{return new jh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,n){return Hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jh.parseLink(n);return k(r,"argument-error"),Hu._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends tr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ro extends No{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Nn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Nn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ro.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ro.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ro(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends No{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends No{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends No{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV="http://localhost";class Po extends bo{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Po(r,s)}static _create(e,n){return new Po(e,n)}buildRequest(){return{requestUri:NV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV="saml.";class Bh extends tr{constructor(e){k(e.startsWith(RV),"argument-error");super(e)}static credentialFromResult(e){return Bh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Bh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Po.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Po._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends No{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return Xn(t,"POST","/v1/accounts:signUp",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=nk(r);return new tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nk(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nk(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(t){var e;const n=Qe(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await tk(n,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,zh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zh(e,n,r,i)}}function rk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OV(t,e){const n=j(t);await qh(!0,n,e);const{providerUserInfo:r}=await QU(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=ik(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function cy(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}async function qh(t,e,n){await Bu(e);const r=ik(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zn(t,rk(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Uh(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&at(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e,n=!1){const r="signIn",i=await rk(t,r,e),s=await tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Wh(t,e){return ok(Qe(t),e)}async function ak(t,e){const n=j(t);return await qh(!1,n,e.providerId),cy(n,e)}async function uk(t,e){return sk(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DV(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xV(t,e){const n=Qe(t),r=await DV(n,{token:e,returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?hy._fromServerResponse(e,n):at(e,"internal-error")}}class hy extends Hh{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new hy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LV(t,e,n){const r=j(t),i={requestType:"PASSWORD_RESET",email:e};n&&Kh(r,i,n),await gV(r,i)}async function $V(t,e,n){await Z1(j(t),{oobCode:e,newPassword:n})}async function MV(t,e){await fV(j(t),{oobCode:e})}async function lk(t,e){const n=j(t),r=await Z1(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Hh._fromServerResponse(Qe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function FV(t,e){const{data:n}=await lk(j(t),e);return n.email}async function UV(t,e,n){const r=Qe(t),i=await tk(r,{returnSecureToken:!0,email:e,password:n}),s=await tn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function VV(t,e,n){return Wh(j(t),Gr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jV(t,e,n){const r=j(t),i={requestType:"EMAIL_SIGNIN",email:e};k(n.handleCodeInApp,r,"argument-error"),n&&Kh(r,i,n),await yV(r,i)}function BV(t,e){const n=jh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function zV(t,e,n){const r=j(t),i=Gr.credentialWithLink(e,n||Uu());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Wh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(t,e){return Ge(t,"POST","/v1/accounts:createAuthUri",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,e){const n=sy()?Uu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await qV(j(t),r);return i||[]}async function HV(t,e){const n=j(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Kh(n.auth,i,e);const{email:s}=await mV(n.auth,i);s!==t.email&&await t.reload()}async function KV(t,e,n){const r=j(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Kh(r.auth,s,n);const{email:o}=await vV(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GV(t,e){return Ge(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zn(r,GV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YV(t,e){return ck(j(t),e,null)}function JV(t,e){return ck(j(t),null,e)}async function ck(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Zn(t,ek(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Uh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Oo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new ZV(s,i);case"github.com":return new ej(s,i);case"google.com":return new tj(s,i);case"twitter.com":return new nj(s,i,t.screenName||null);case"custom":case"anonymous":return new Oo(s,null);default:return new Oo(s,r,i)}}class Oo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class hk extends Oo{constructor(e,n,r,i){super(e,n,r);this.username=i}}class ZV extends Oo{constructor(e,n){super(e,"facebook.com",n)}}class ej extends hk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class tj extends Oo{constructor(e,n){super(e,"google.com",n)}}class nj extends hk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function rj(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:XV(n)}class Xi{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Xi("enroll",e)}static _fromMfaPendingCredential(e){return new Xi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Xi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Xi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Qe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Hh._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=Xi._fromMfaPendingCredential(i.mfaPendingCredential);return new dy(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await tn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),tn._forOperation(n.user,n.operationType,l);default:at(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function ij(t,e){var n;const r=j(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),dy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sj(t,e){return Ge(t,"POST","/v2/accounts/mfaEnrollment:start",xe(t,e))}function oj(t,e){return Ge(t,"POST","/v2/accounts/mfaEnrollment:finalize",xe(t,e))}function aj(t,e){return Ge(t,"POST","/v2/accounts/mfaEnrollment:withdraw",xe(t,e))}class fy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Hh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new fy(e)}async getSession(){return Xi._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Zn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Zn(this.user,aj(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const py=new WeakMap;function uj(t){const e=j(t);return py.has(e)||py.set(e,fy._fromUser(e)),py.get(e)}const Gh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(){const t=he();return ly(t)||Ao(t)}const cj=1e3,hj=10;class fk extends dk{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lj()&&uV(),this.fallbackToPolling=G1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);aV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hj):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fk.type="LOCAL";const my=fk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk extends dk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pk.type="SESSION";const Zi=pk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dj(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await dj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Ku("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function pj(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof Le().WorkerGlobalScope!="undefined"&&typeof Le().importScripts=="function"}async function mj(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yj(){return gy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="firebaseLocalStorageDb",vj=1,Yh="firebaseLocalStorage",gk="fbase_key";class Gu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jh(t,e){return t.transaction([Yh],e?"readwrite":"readonly").objectStore(Yh)}function wj(){const t=indexedDB.deleteDatabase(mk);return new Gu(t).toPromise()}function yy(){const t=indexedDB.open(mk,vj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yh,{keyPath:gk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yh)?e(r):(r.close(),await wj(),e(await yy()))})})}async function yk(t,e,n){const r=Jh(t,!0).put({[gk]:e,value:n});return new Gu(r).toPromise()}async function _j(t,e){const n=Jh(t,!1).get(e),r=await new Gu(n).toPromise();return r===void 0?null:r.value}function vk(t,e){const n=Jh(t,!0).delete(e);return new Gu(n).toPromise()}const Ej=800,Ij=3;class wk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ij)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(yj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mj(),!this.activeServiceWorker)return;this.sender=new fj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yy();return await yk(e,Gh,"1"),await vk(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yk(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_j(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vk(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jh(i,!1).getAll();return new Gu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ej)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wk.type="LOCAL";const Xh=wk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tj(t,e){return Ge(t,"POST","/v2/accounts/mfaSignIn:start",xe(t,e))}function Sj(t,e){return Ge(t,"POST","/v2/accounts/mfaSignIn:finalize",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kj(t){return(await Ge(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _k(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cj().appendChild(r)})}function Ek(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj=500,bj=6e4,Zh=1e12;class Nj{constructor(e){this.auth=e,this.counter=Zh,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Rj(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Zh;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Zh;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Zh;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Rj{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Pj(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bj)},Aj))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Pj(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=Ek("rcb"),Oj=new Vu(3e4,6e4),Dj="https://www.google.com/recaptcha/api.js?";class xj{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Le().grecaptcha}load(e,n=""){return k(Lj(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Le().grecaptcha):new Promise((r,i)=>{const s=Le().setTimeout(()=>{i(ut(e,"network-request-failed"))},Oj.get());Le()[vy]=()=>{Le().clearTimeout(s),delete Le()[vy];const a=Le().grecaptcha;if(!a){i(ut(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Dj}?${Fs({onload:vy,render:"explicit",hl:n})}`;_k(o).catch(()=>{clearTimeout(s),i(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Le().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lj(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class $j{async load(e){return new Nj(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="recaptcha",Mj={theme:"light",type:"image"};class Fj{constructor(e,n=Object.assign({},Mj),r){this.parameters=n,this.type=Ik,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qe(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new $j:new xj,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(sy()&&!gy(),this.auth,"internal-error"),await Uj(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kj(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Uj(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ji._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Vj(t,e,n){const r=Qe(t),i=await ed(r,e,j(n));return new wy(i,s=>Wh(r,s))}async function jj(t,e,n){const r=j(t);await qh(!1,r,"phone");const i=await ed(r.auth,e,j(n));return new wy(i,s=>ak(r,s))}async function Bj(t,e,n){const r=j(t),i=await ed(r.auth,e,j(n));return new wy(i,s=>uk(r,s))}async function ed(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===Ik,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await sj(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await Tj(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await IV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function zj(t,e){await cy(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=Qe(e)}verifyPhoneNumber(e,n){return ed(this.auth,e,j(n))}static credential(e,n){return Ji._fromVerification(e,n)}static credentialFromResult(e){const n=e;return cn.credentialFromTaggedObject(n)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ji._fromTokenResponse(n,r):null}}cn.PROVIDER_ID="phone";cn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,e){return e?jt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends bo{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qj(t){return ok(t.auth,new _y(t),t.bypassAuthState)}function Wj(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),sk(n,new _y(t),t.bypassAuthState)}async function Hj(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),cy(n,new _y(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qj;case"linkViaPopup":case"linkViaRedirect":return Hj;case"reauthViaPopup":case"reauthViaRedirect":return Wj;default:at(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj=new Vu(2e3,1e4);async function Gj(t,e,n){const r=Qe(t);ko(t,e,tr);const i=es(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function Qj(t,e,n){const r=j(t);ko(r.auth,e,tr);const i=es(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Yj(t,e,n){const r=j(t);ko(r.auth,e,tr);const i=es(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends Tk{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Kj.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj="pendingRedirect",td=new Map;class Xj extends Tk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=td.get(this.auth._key());if(!e){try{const r=await Zj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}td.set(this.auth._key(),e)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zj(t,e){const n=kk(e),r=Sk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ey(t,e){return Sk(t)._set(kk(e),"true")}function e2(){td.clear()}function Sk(t){return jt(t._redirectPersistence)}function kk(t){return Yi(Jj,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e,n){return n2(t,e,n)}async function n2(t,e,n){const r=Qe(t);ko(t,e,tr);const i=es(r,n);return await Ey(i,r),i._openRedirect(r,e,"signInViaRedirect")}function r2(t,e,n){return i2(t,e,n)}async function i2(t,e,n){const r=j(t);ko(r.auth,e,tr);const i=es(r.auth,n);await Ey(i,r.auth);const s=await Ck(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function s2(t,e,n){return o2(t,e,n)}async function o2(t,e,n){const r=j(t);ko(r.auth,e,tr);const i=es(r.auth,n);await qh(!1,r,e.providerId),await Ey(i,r.auth);const s=await Ck(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function a2(t,e){return await Qe(t)._initializationPromise,nd(t,e,!1)}async function nd(t,e,n=!1){const r=Qe(t),i=es(r,e),o=await new Xj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ck(t){const e=Ku(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=10*60*1e3;class Ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u2&&this.cachedEventUids.clear(),this.cachedEventUids.has(bk(e))}saveEventToCache(e){this.cachedEventUids.add(bk(e)),this.lastProcessedEventTime=Date.now()}}function bk(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e={}){return Ge(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h2=/^https?/;async function d2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rk(t);for(const n of e)try{if(f2(n))return}catch{}at(t,"unauthorized-domain")}function f2(t){const e=Uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h2.test(n))return!1;if(c2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new Vu(3e4,6e4);function Pk(){const t=Le().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function m2(t){return new Promise((e,n)=>{var r,i,s;function o(){Pk(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pk(),n(ut(t,"network-request-failed"))},timeout:p2.get()})}if((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Le().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Ek("iframefcb");return Le()[a]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},_k(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw rd=null,e})}let rd=null;function g2(t){return rd=rd||m2(t),rd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Vu(5e3,15e3),v2="__/auth/iframe",w2="emulator/auth/iframe",_2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I2(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oy(e,w2):`https://${t.config.authDomain}/${v2}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=E2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function T2(t){const e=await g2(t),n=Le().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:I2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},y2.get());function u(){Le().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k2=500,C2=600,A2="_blank",b2="http://localhost";class Ok{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N2(t,e,n,r=k2,i=C2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},S2),{width:r.toString(),height:i.toString(),top:s,left:o}),l=he().toLowerCase();n&&(a=q1(l)?A2:n),z1(l)&&(e=e||b2,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(oV(l)&&a!=="_self")return R2(e||"",a),new Ok(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new Ok(h)}function R2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="__/auth/handler",O2="emulator/auth/handler";function Iy(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof No){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${D2(t)}?${Fs(a).slice(1)}`}function D2({config:t}){return t.emulator?oy(t,O2):`https://${t.authDomain}/${P2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="webStorageSupport";class x2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=nd}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Iy(e,n,r,Uu(),i);return N2(e,o,Ku())}async _openRedirect(e,n,r,i){return await this._originValidation(e),pj(Iy(e,n,r,Uu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await T2(e),r=new Ak(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ty,{type:Ty},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ty];o!==void 0&&n(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G1()||ly()||Ao()}}const L2=x2;class $2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return bn("unexpected MultiFactorSessionType")}}}class Sy extends $2{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Sy(e)}_finalizeEnroll(e,n,r){return oj(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Sj(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dk{constructor(){}static assertion(e){return Sy._fromCredential(e)}}Dk.FACTOR_ID="phone";var xk="@firebase/auth",Lk="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function U2(t){Si(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),k(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q1(t)},u=new lV(o,a);return BU(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new qn("auth-internal",e=>{const n=Qe(e.getProvider("auth").getImmediate());return(r=>new M2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(xk,Lk,F2(t)),In(xk,Lk,"esm2017")}U2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=2e3;async function j2(t,e,n){var r;const{BuildInfo:i}=ts();ln(e.sessionId,"AuthEvent did not contain a session ID");const s=await H2(e.sessionId),o={};return Ao()?o.ibi=i.packageName:Wu()?o.apn=i.packageName:at(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Iy(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function B2(t){const{BuildInfo:e}=ts(),n={};Ao()?n.iosBundleId=e.packageName:Wu()?n.androidPackageName=e.packageName:at(t,"operation-not-supported-in-this-environment"),await Rk(t,n)}function z2(t){const{cordova:e}=ts();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,sV()?"_blank":"_system","location=yes"),n(i)})})}async function q2(t,e,n){const{cordova:r}=ts();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(ut(t,"redirect-cancelled-by-user"))},V2))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Wu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function W2(t){var e,n,r,i,s,o,a,u,l,c;const h=ts();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function H2(t){const e=K2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function K2(t){if(ln(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=20;class Q2 extends Ak{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Y2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Z2(),postBody:null,tenantId:t.tenantId,error:ut(t,"no-auth-event")}}function J2(t,e){return ky()._set(Cy(t),e)}async function $k(t){const e=await ky()._get(Cy(t));return e&&await ky()._remove(Cy(t)),e}function X2(t,e){var n,r;const i=tB(e);if(i.includes("/__/auth/callback")){const s=id(i),o=s.firebaseError?eB(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?ut(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Z2(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<G2;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ky(){return jt(my)}function Cy(t){return Yi("authEvent",t.config.apiKey,t.name)}function eB(t){try{return JSON.parse(t)}catch{return null}}function tB(t){const e=id(t),n=e.link?decodeURIComponent(e.link):void 0,r=id(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return id(i).link||i||r||n||t}function id(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Us(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nB=500;class rB{constructor(){this._redirectPersistence=Zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=nd}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Q2(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){at(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){W2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),e2(),await this._originValidation(e);const o=Y2(e,r,i);await J2(e,o);const a=await j2(e,o,n),u=await z2(a);return q2(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ts(),o=setTimeout(async()=>{await $k(e),n.onEvent(Mk())},nB),a=async c=>{clearTimeout(o);const h=await $k(e);let d=null;h&&(c==null?void 0:c.url)&&(d=X2(h,c.url)),n.onEvent(d||Mk())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;ts().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const iB=rB;function Mk(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sB(t,e){Qe(t)._logFramework(e)}var oB="@firebase/auth-compat",aB="0.2.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB=1e3;function sd(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function lB(){return sd()==="http:"||sd()==="https:"}function Fk(t=he()){return!!((sd()==="file:"||sd()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function cB(){return Sc()||zp()}function hB(){return Wp()&&(document==null?void 0:document.documentMode)===11}function dB(t=he()){return/Edge\/\d+/.test(t)}function fB(t=he()){return hB()||dB(t)}function Uk(){try{const t=self.localStorage,e=Ku();if(t)return t.setItem(e,"1"),t.removeItem(e),fB()?kc():!0}catch{return Ay()&&kc()}return!1}function Ay(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function by(){return(lB()||qp()||Fk())&&!cB()&&Uk()&&!Ay()}function Vk(){return Fk()&&typeof document!="undefined"}async function pB(){return Vk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},uB);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={LOCAL:"local",NONE:"none",SESSION:"session"},Qu=k,jk="persistence";function mB(t,e){if(Qu(Object.values(Bt).includes(e),t,"invalid-persistence-type"),Sc()){Qu(e!==Bt.SESSION,t,"unsupported-persistence-type");return}if(zp()){Qu(e===Bt.NONE,t,"unsupported-persistence-type");return}if(Ay()){Qu(e===Bt.NONE||e===Bt.LOCAL&&kc(),t,"unsupported-persistence-type");return}Qu(e===Bt.NONE||Uk(),t,"unsupported-persistence-type")}async function Ny(t){await t._initializationPromise;const e=Bk(),n=Yi(jk,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function gB(t,e){const n=Bk();if(!(n==null?void 0:n.sessionStorage))return[];const r=Yi(jk,t,e);switch(n.sessionStorage.getItem(r)){case Bt.NONE:return[qu];case Bt.LOCAL:return[Xh,Zi];case Bt.SESSION:return[Zi];default:return[]}}function Bk(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB=k;class Qr{constructor(){this.browserResolver=jt(L2),this.cordovaResolver=jt(iB),this.underlyingResolver=null,this._redirectPersistence=Zi,this._completeRedirectFn=nd}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yB(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await pB();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){return t.unwrap()}function vB(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wB(t){return qk(t)}function _B(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new EB(t,ij(t,e))}else if(r){const i=qk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function qk(t){const{_tokenResponse:e}=t instanceof Jt?t.customData:t;if(!e)return null;if(!(t instanceof Jt)&&"temporaryProof"in e&&"phoneNumber"in e)return cn.credentialFromResult(t);const n=e.providerId;if(!n||n===Fu.PASSWORD)return null;let r;switch(n){case Fu.GOOGLE:r=Pn;break;case Fu.FACEBOOK:r=Rn;break;case Fu.GITHUB:r=On;break;case Fu.TWITTER:r=Dn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Po._create(n,a):Nn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ro(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Jt?r.credentialFromError(t):r.credentialFromResult(t)}function Dt(t,e){return e.catch(n=>{throw n instanceof Jt&&_B(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:wB(n),additionalUserInfo:rj(n),user:rr.getOrCreate(i)}})}async function Ry(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Dt(t,n.confirm(r))}}class EB{constructor(e,n){this.resolver=n,this.auth=vB(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Dt(zk(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._delegate=e,this.multiFactor=uj(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Dt(this.auth,ak(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ry(this.auth,jj(this._delegate,e,n))}async linkWithPopup(e){return Dt(this.auth,Yj(this._delegate,e,Qr))}async linkWithRedirect(e){return await Ny(Qe(this.auth)),s2(this._delegate,e,Qr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Dt(this.auth,uk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ry(this.auth,Bj(this._delegate,e,n))}reauthenticateWithPopup(e){return Dt(this.auth,Qj(this._delegate,e,Qr))}async reauthenticateWithRedirect(e){return await Ny(Qe(this.auth)),r2(this._delegate,e,Qr)}sendEmailVerification(e){return HV(this._delegate,e)}async unlink(e){return await OV(this._delegate,e),this}updateEmail(e){return YV(this._delegate,e)}updatePassword(e){return JV(this._delegate,e)}updatePhoneNumber(e){return zj(this._delegate,e)}updateProfile(e){return QV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return KV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=k;class Py{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Yu(r,"invalid-api-key",{appName:e.name});let i=[qu];if(typeof window!="undefined"){i=gB(r,e.name);for(const o of[Xh,my,Zi])i.includes(o)||i.push(o)}Yu(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?Qr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(VU),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){cV(this._delegate,e,n)}applyActionCode(e){return MV(this._delegate,e)}checkActionCode(e){return lk(this._delegate,e)}confirmPasswordReset(e,n){return $V(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Dt(this._delegate,UV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return WV(this._delegate,e)}isSignInWithEmailLink(e){return BV(this._delegate,e)}async getRedirectResult(){Yu(by(),this._delegate,"operation-not-supported-in-this-environment");const e=await a2(this._delegate,Qr);return e?Dt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){sB(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Wk(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Wk(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return jV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return LV(this._delegate,e,n||void 0)}async setPersistence(e){mB(this._delegate,e);let n;switch(e){case Bt.SESSION:n=Zi;break;case Bt.LOCAL:n=await jt(Xh)._isAvailable()?Xh:my;break;case Bt.NONE:n=qu;break;default:return at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Dt(this._delegate,PV(this._delegate))}signInWithCredential(e){return Dt(this._delegate,Wh(this._delegate,e))}signInWithCustomToken(e){return Dt(this._delegate,xV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Dt(this._delegate,VV(this._delegate,e,n))}signInWithEmailLink(e,n){return Dt(this._delegate,zV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ry(this._delegate,Vj(this._delegate,e,n))}async signInWithPopup(e){return Yu(by(),this._delegate,"operation-not-supported-in-this-environment"),Dt(this._delegate,Gj(this._delegate,e,Qr))}async signInWithRedirect(e){return Yu(by(),this._delegate,"operation-not-supported-in-this-environment"),await Ny(this._delegate),t2(this._delegate,e,Qr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return FV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Py.Persistence=Bt;function Wk(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.providerId="phone",this._delegate=new cn(zk(Va.auth()))}static credential(e,n){return cn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Oy.PHONE_SIGN_IN_METHOD=cn.PHONE_SIGN_IN_METHOD;Oy.PROVIDER_ID=cn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=k;class TB{constructor(e,n,r=Va.app()){var i;IB((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Fj(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SB="auth-compat";function kB(t){t.INTERNAL.registerComponent(new qn(SB,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Py(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:So.EMAIL_SIGNIN,PASSWORD_RESET:So.PASSWORD_RESET,RECOVER_EMAIL:So.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:So.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:So.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:So.VERIFY_EMAIL}},EmailAuthProvider:Gr,FacebookAuthProvider:Rn,GithubAuthProvider:On,GoogleAuthProvider:Pn,OAuthProvider:Ro,SAMLAuthProvider:Bh,PhoneAuthProvider:Oy,PhoneMultiFactorGenerator:Dk,RecaptchaVerifier:TB,TwitterAuthProvider:Dn,Auth:Py,AuthCredential:bo,Error:Jt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(oB,aB)}kB(Va);export{PB as B,NB as N,AB as R,OB as a,RB as b,lb as c,bB as d,Va as f,kD as j,O as r,hb as u};
