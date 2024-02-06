(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function Nb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},xi={},km={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),Ab=Symbol.for("react.portal"),$b=Symbol.for("react.fragment"),Lb=Symbol.for("react.strict_mode"),Mb=Symbol.for("react.profiler"),zb=Symbol.for("react.provider"),jb=Symbol.for("react.context"),Fb=Symbol.for("react.forward_ref"),Vb=Symbol.for("react.suspense"),Ub=Symbol.for("react.memo"),Bb=Symbol.for("react.lazy"),Gh=Symbol.iterator;function Hb(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,Sm={};function uo(t,e,r){this.props=t,this.context=e,this.refs=Sm,this.updater=r||Im}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=uo.prototype;function Qu(t,e,r){this.props=t,this.context=e,this.refs=Sm,this.updater=r||Im}var Yu=Qu.prototype=new Dm;Yu.constructor=Qu;Em(Yu,uo.prototype);Yu.isPureReactComponent=!0;var Qh=Array.isArray,Pm=Object.prototype.hasOwnProperty,Xu={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Tm(t,e,r){var n,o={},s=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Pm.call(e,n)&&!Rm.hasOwnProperty(n)&&(o[n]=e[n]);var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(n in i=t.defaultProps,i)o[n]===void 0&&(o[n]=i[n]);return{$$typeof:_s,type:t,key:s,ref:a,props:o,_owner:Xu.current}}function qb(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function Kb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Yh=/\/+/g;function Pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kb(""+t.key):e.toString(36)}function Pa(t,e,r,n,o){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case _s:case Ab:a=!0}}if(a)return a=t,o=o(a),t=n===""?"."+Pl(a,0):n,Qh(o)?(r="",t!=null&&(r=t.replace(Yh,"$&/")+"/"),Pa(o,e,r,"",function(c){return c})):o!=null&&(Ju(o)&&(o=qb(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Yh,"$&/")+"/")+t)),e.push(o)),1;if(a=0,n=n===""?".":n+":",Qh(t))for(var i=0;i<t.length;i++){s=t[i];var l=n+Pl(s,i);a+=Pa(s,e,r,l,o)}else if(l=Hb(t),typeof l=="function")for(t=l.call(t),i=0;!(s=t.next()).done;)s=s.value,l=n+Pl(s,i++),a+=Pa(s,e,r,l,o);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ta(t,e,r){if(t==null)return t;var n=[],o=0;return Pa(t,n,"","",function(s){return e.call(r,s,o++)}),n}function Wb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},Ra={transition:null},Gb={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:Xu};q.Children={map:ta,forEach:function(t,e,r){ta(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=uo;q.Fragment=$b;q.Profiler=Mb;q.PureComponent=Qu;q.StrictMode=Lb;q.Suspense=Vb;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gb;q.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Em({},t.props),o=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xu.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(l in e)Pm.call(e,l)&&!Rm.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&i!==void 0?i[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){i=Array(l);for(var c=0;c<l;c++)i[c]=arguments[c+2];n.children=i}return{$$typeof:_s,type:t.type,key:o,ref:s,props:n,_owner:a}};q.createContext=function(t){return t={$$typeof:jb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zb,_context:t},t.Consumer=t};q.createElement=Tm;q.createFactory=function(t){var e=Tm.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:Fb,render:t}};q.isValidElement=Ju;q.lazy=function(t){return{$$typeof:Bb,_payload:{_status:-1,_result:t},_init:Wb}};q.memo=function(t,e){return{$$typeof:Ub,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Qe.current.useCallback(t,e)};q.useContext=function(t){return Qe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};q.useEffect=function(t,e){return Qe.current.useEffect(t,e)};q.useId=function(){return Qe.current.useId()};q.useImperativeHandle=function(t,e,r){return Qe.current.useImperativeHandle(t,e,r)};q.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Qe.current.useMemo(t,e)};q.useReducer=function(t,e,r){return Qe.current.useReducer(t,e,r)};q.useRef=function(t){return Qe.current.useRef(t)};q.useState=function(t){return Qe.current.useState(t)};q.useSyncExternalStore=function(t,e,r){return Qe.current.useSyncExternalStore(t,e,r)};q.useTransition=function(){return Qe.current.useTransition()};q.version="18.2.0";km.exports=q;var W=km.exports;const Qb=Nb(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yb=W,Xb=Symbol.for("react.element"),Jb=Symbol.for("react.fragment"),Zb=Object.prototype.hasOwnProperty,e1=Yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,r){var n,o={},s=null,a=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Zb.call(e,n)&&!t1.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:Xb,type:t,key:s,ref:a,props:o,_owner:e1.current}}xi.Fragment=Jb;xi.jsx=Om;xi.jsxs=Om;Cm.exports=xi;var xm=Cm.exports;const R=xm.jsx,U=xm.jsxs;var Ic={},_m={exports:{}},ft={},Nm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,N){var L=I.length;I.push(N);e:for(;0<L;){var M=L-1>>>1,se=I[M];if(0<o(se,N))I[M]=N,I[L]=se,L=M;else break e}}function r(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var N=I[0],L=I.pop();if(L!==N){I[0]=L;e:for(var M=0,se=I.length,lr=se>>>1;M<lr;){var at=2*(M+1)-1,Dl=I[at],Hr=at+1,ea=I[Hr];if(0>o(Dl,L))Hr<se&&0>o(ea,Dl)?(I[M]=ea,I[Hr]=L,M=Hr):(I[M]=Dl,I[at]=L,M=at);else if(Hr<se&&0>o(ea,L))I[M]=ea,I[Hr]=L,M=Hr;else break e}}return N}function o(I,N){var L=I.sortIndex-N.sortIndex;return L!==0?L:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,i=a.now();t.unstable_now=function(){return a.now()-i}}var l=[],c=[],u=1,d=null,h=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var N=r(c);N!==null;){if(N.callback===null)n(c);else if(N.startTime<=I)n(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=r(c)}}function w(I){if(v=!1,m(I),!y)if(r(l)!==null)y=!0,bo(S);else{var N=r(c);N!==null&&le(w,N.startTime-I)}}function S(I,N){y=!1,v&&(v=!1,f(x),x=-1),g=!0;var L=h;try{for(m(N),d=r(l);d!==null&&(!(d.expirationTime>N)||I&&!st());){var M=d.callback;if(typeof M=="function"){d.callback=null,h=d.priorityLevel;var se=M(d.expirationTime<=N);N=t.unstable_now(),typeof se=="function"?d.callback=se:d===r(l)&&n(l),m(N)}else n(l);d=r(l)}if(d!==null)var lr=!0;else{var at=r(c);at!==null&&le(w,at.startTime-N),lr=!1}return lr}finally{d=null,h=L,g=!1}}var T=!1,O=null,x=-1,Z=5,B=-1;function st(){return!(t.unstable_now()-B<Z)}function Br(){if(O!==null){var I=t.unstable_now();B=I;var N=!0;try{N=O(!0,I)}finally{N?ir():(T=!1,O=null)}}else T=!1}var ir;if(typeof p=="function")ir=function(){p(Br)};else if(typeof MessageChannel<"u"){var wo=new MessageChannel,Zs=wo.port2;wo.port1.onmessage=Br,ir=function(){Zs.postMessage(null)}}else ir=function(){D(Br,0)};function bo(I){O=I,T||(T=!0,ir())}function le(I,N){x=D(function(){I(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,bo(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var L=h;h=N;try{return I()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=h;h=I;try{return N()}finally{h=L}},t.unstable_scheduleCallback=function(I,N,L){var M=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,I={id:u++,callback:N,priorityLevel:I,startTime:L,expirationTime:se,sortIndex:-1},L>M?(I.sortIndex=L,e(c,I),r(l)===null&&I===r(c)&&(v?(f(x),x=-1):v=!0,le(w,L-M))):(I.sortIndex=se,e(l,I),y||g||(y=!0,bo(S))),I},t.unstable_shouldYield=st,t.unstable_wrapCallback=function(I){var N=h;return function(){var L=h;h=N;try{return I.apply(this,arguments)}finally{h=L}}}})(Am);Nm.exports=Am;var r1=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=W,ht=r1;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,es={};function yn(t,e){Qn(t,e),Qn(t+"Capture",e)}function Qn(t,e){for(es[t]=e,t=0;t<e.length;t++)Lm.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},Jh={};function o1(t){return Ec.call(Jh,t)?!0:Ec.call(Xh,t)?!1:n1.test(t)?Jh[t]=!0:(Xh[t]=!0,!1)}function s1(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a1(t,e,r,n){if(e===null||typeof e>"u"||s1(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,r,n,o,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zu,ed);Ne[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zu,ed);Ne[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zu,ed);Ne[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,r,n){var o=Ne.hasOwnProperty(e)?Ne[e]:null;(o!==null?o.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a1(e,r,o,n)&&(r=null),n||o===null?o1(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):o.mustUseProperty?t[o.propertyName]=r===null?o.type===3?!1:"":r:(e=o.attributeName,n=o.attributeNamespace,r===null?t.removeAttribute(e):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var ar=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),zm=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),jm=Symbol.for("react.offscreen"),Zh=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Zh&&t[Zh]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Rl;function xo(t){if(Rl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var Tl=!1;function Ol(t,e){if(!t||Tl)return"";Tl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var n=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){n=c}t.call(e.prototype)}else{try{throw Error()}catch(c){n=c}t()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),s=n.stack.split(`
`),a=o.length-1,i=s.length-1;1<=a&&0<=i&&o[a]!==s[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==s[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==s[i]){var l=`
`+o[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=i);break}}}finally{Tl=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?xo(t):""}function i1(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Ol(t.type,!1),t;case 11:return t=Ol(t.type.render,!1),t;case 1:return t=Ol(t.type,!0),t;default:return""}}function Rc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pn:return"Fragment";case Dn:return"Portal";case Sc:return"Profiler";case rd:return"StrictMode";case Dc:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zm:return(t.displayName||"Context")+".Consumer";case Mm:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:Rc(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Rc(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c1(t){var e=Fm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=c1(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Fm(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tc(t,e){var r=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function ep(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Or(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Um(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Oc(t,e){Um(t,e);var r=Or(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,r):e.hasOwnProperty("defaultValue")&&xc(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function xc(t,e,r){(e!=="number"||Ua(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var _o=Array.isArray;function jn(t,e,r,n){if(t=t.options,e){e={};for(var o=0;o<r.length;o++)e["$"+r[o]]=!0;for(r=0;r<t.length;r++)o=e.hasOwnProperty("$"+t[r].value),t[r].selected!==o&&(t[r].selected=o),o&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Or(r),e=null,o=0;o<t.length;o++){if(t[o].value===r){t[o].selected=!0,n&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function _c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(C(92));if(_o(r)){if(1<r.length)throw Error(C(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Or(r)}}function Bm(t,e){var r=Or(e.value),n=Or(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,o){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){u1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function Km(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function Wm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Km(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,o):t[r]=o}}var d1=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(d1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lc=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mc=null,Fn=null,Vn=null;function op(t){if(t=$s(t)){if(typeof Mc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Li(e),Mc(t.stateNode,t.type,e))}}function Gm(t){Fn?Vn?Vn.push(t):Vn=[t]:Fn=t}function Qm(){if(Fn){var t=Fn,e=Vn;if(Vn=Fn=null,op(t),e)for(t=0;t<e.length;t++)op(e[t])}}function Ym(t,e){return t(e)}function Xm(){}var xl=!1;function Jm(t,e,r){if(xl)return t(e,r);xl=!0;try{return Ym(t,e,r)}finally{xl=!1,(Fn!==null||Vn!==null)&&(Xm(),Qm())}}function rs(t,e){var r=t.stateNode;if(r===null)return null;var n=Li(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(C(231,e,typeof r));return r}var zc=!1;if(Xt)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){zc=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{zc=!1}function h1(t,e,r,n,o,s,a,i,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(u){this.onError(u)}}var Fo=!1,Ba=null,Ha=!1,jc=null,p1={onError:function(t){Fo=!0,Ba=t}};function f1(t,e,r,n,o,s,a,i,l){Fo=!1,Ba=null,h1.apply(p1,arguments)}function m1(t,e,r,n,o,s,a,i,l){if(f1.apply(this,arguments),Fo){if(Fo){var c=Ba;Fo=!1,Ba=null}else throw Error(C(198));Ha||(Ha=!0,jc=c)}}function vn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sp(t){if(vn(t)!==t)throw Error(C(188))}function g1(t){var e=t.alternate;if(!e){if(e=vn(t),e===null)throw Error(C(188));return e!==t?null:t}for(var r=t,n=e;;){var o=r.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===r)return sp(o),t;if(s===n)return sp(o),e;s=s.sibling}throw Error(C(188))}if(r.return!==n.return)r=o,n=s;else{for(var a=!1,i=o.child;i;){if(i===r){a=!0,r=o,n=s;break}if(i===n){a=!0,n=o,r=s;break}i=i.sibling}if(!a){for(i=s.child;i;){if(i===r){a=!0,r=s,n=o;break}if(i===n){a=!0,n=s,r=o;break}i=i.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?t:e}function eg(t){return t=g1(t),t!==null?tg(t):null}function tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tg(t);if(e!==null)return e;t=t.sibling}return null}var rg=ht.unstable_scheduleCallback,ap=ht.unstable_cancelCallback,y1=ht.unstable_shouldYield,v1=ht.unstable_requestPaint,me=ht.unstable_now,w1=ht.unstable_getCurrentPriorityLevel,ad=ht.unstable_ImmediatePriority,ng=ht.unstable_UserBlockingPriority,qa=ht.unstable_NormalPriority,b1=ht.unstable_LowPriority,og=ht.unstable_IdlePriority,_i=null,Mt=null;function C1(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(_i,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:E1,k1=Math.log,I1=Math.LN2;function E1(t){return t>>>=0,t===0?32:31-(k1(t)/I1|0)|0}var sa=64,aa=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,o=t.suspendedLanes,s=t.pingedLanes,a=r&268435455;if(a!==0){var i=a&~o;i!==0?n=No(i):(s&=a,s!==0&&(n=No(s)))}else a=r&~o,a!==0?n=No(a):s!==0&&(n=No(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&o)&&(o=n&-n,s=e&-e,o>=s||o===16&&(s&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Pt(e),o=1<<r,n|=t[r],e&=~o;return n}function S1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D1(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,o=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Pt(s),i=1<<a,l=o[a];l===-1?(!(i&r)||i&n)&&(o[a]=S1(i,e)):l<=e&&(t.expiredLanes|=i),s&=~i}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function _l(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ns(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pt(e),t[e]=r}function P1(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var o=31-Pt(r),s=1<<o;e[o]=0,n[o]=-1,t[o]=-1,r&=~s}}function id(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Pt(r),o=1<<n;o&e|t[n]&e&&(t[n]|=e),r&=~o}}var X=0;function ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,ld,lg,cg,ug,Vc=!1,ia=[],yr=null,vr=null,wr=null,ns=new Map,os=new Map,hr=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function Io(t,e,r,n,o,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},e!==null&&(e=$s(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function T1(t,e,r,n,o){switch(e){case"focusin":return yr=Io(yr,t,e,r,n,o),!0;case"dragenter":return vr=Io(vr,t,e,r,n,o),!0;case"mouseover":return wr=Io(wr,t,e,r,n,o),!0;case"pointerover":var s=o.pointerId;return ns.set(s,Io(ns.get(s)||null,t,e,r,n,o)),!0;case"gotpointercapture":return s=o.pointerId,os.set(s,Io(os.get(s)||null,t,e,r,n,o)),!0}return!1}function dg(t){var e=Gr(t.target);if(e!==null){var r=vn(e);if(r!==null){if(e=r.tag,e===13){if(e=Zm(r),e!==null){t.blockedOn=e,ug(t.priority,function(){lg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Lc=n,r.target.dispatchEvent(n),Lc=null}else return e=$s(r),e!==null&&ld(e),t.blockedOn=r,!1;e.shift()}return!0}function lp(t,e,r){Ta(t)&&r.delete(e)}function O1(){Vc=!1,yr!==null&&Ta(yr)&&(yr=null),vr!==null&&Ta(vr)&&(vr=null),wr!==null&&Ta(wr)&&(wr=null),ns.forEach(lp),os.forEach(lp)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Vc||(Vc=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,O1)))}function ss(t){function e(o){return Eo(o,t)}if(0<ia.length){Eo(ia[0],t);for(var r=1;r<ia.length;r++){var n=ia[r];n.blockedOn===t&&(n.blockedOn=null)}}for(yr!==null&&Eo(yr,t),vr!==null&&Eo(vr,t),wr!==null&&Eo(wr,t),ns.forEach(e),os.forEach(e),r=0;r<hr.length;r++)n=hr[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<hr.length&&(r=hr[0],r.blockedOn===null);)dg(r),r.blockedOn===null&&hr.shift()}var Un=ar.ReactCurrentBatchConfig,Wa=!0;function x1(t,e,r,n){var o=X,s=Un.transition;Un.transition=null;try{X=1,cd(t,e,r,n)}finally{X=o,Un.transition=s}}function _1(t,e,r,n){var o=X,s=Un.transition;Un.transition=null;try{X=4,cd(t,e,r,n)}finally{X=o,Un.transition=s}}function cd(t,e,r,n){if(Wa){var o=Uc(t,e,r,n);if(o===null)Ul(t,e,n,Ga,r),ip(t,n);else if(T1(o,t,e,r,n))n.stopPropagation();else if(ip(t,n),e&4&&-1<R1.indexOf(t)){for(;o!==null;){var s=$s(o);if(s!==null&&ig(s),s=Uc(t,e,r,n),s===null&&Ul(t,e,n,Ga,r),s===o)break;o=s}o!==null&&n.stopPropagation()}else Ul(t,e,n,null,r)}}var Ga=null;function Uc(t,e,r,n){if(Ga=null,t=sd(n),t=Gr(t),t!==null)if(e=vn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Zm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w1()){case ad:return 1;case ng:return 4;case qa:case b1:return 16;case og:return 536870912;default:return 16}default:return 16}}var fr=null,ud=null,Oa=null;function pg(){if(Oa)return Oa;var t,e=ud,r=e.length,n,o="value"in fr?fr.value:fr.textContent,s=o.length;for(t=0;t<r&&e[t]===o[t];t++);var a=r-t;for(n=1;n<=a&&e[r-n]===o[s-n];n++);return Oa=o.slice(t,1<n?1-n:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function cp(){return!1}function mt(t){function e(r,n,o,s,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(r=t[i],this[i]=r?r(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:cp,this.isPropagationStopped=cp,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=mt(ho),As=de({},ho,{view:0,detail:0}),N1=mt(As),Nl,Al,So,Ni=de({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Nl=t.screenX-So.screenX,Al=t.screenY-So.screenY):Al=Nl=0,So=t),Nl)},movementY:function(t){return"movementY"in t?t.movementY:Al}}),up=mt(Ni),A1=de({},Ni,{dataTransfer:0}),$1=mt(A1),L1=de({},As,{relatedTarget:0}),$l=mt(L1),M1=de({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=mt(M1),j1=de({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F1=mt(j1),V1=de({},ho,{data:0}),dp=mt(V1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function hd(){return q1}var K1=de({},As,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W1=mt(K1),G1=de({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=mt(G1),Q1=de({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),Y1=mt(Q1),X1=de({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=mt(X1),Z1=de({},Ni,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=mt(Z1),t0=[9,13,27,32],pd=Xt&&"CompositionEvent"in window,Vo=null;Xt&&"documentMode"in document&&(Vo=document.documentMode);var r0=Xt&&"TextEvent"in window&&!Vo,fg=Xt&&(!pd||Vo&&8<Vo&&11>=Vo),pp=String.fromCharCode(32),fp=!1;function mg(t,e){switch(t){case"keyup":return t0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rn=!1;function n0(t,e){switch(t){case"compositionend":return gg(e);case"keypress":return e.which!==32?null:(fp=!0,pp);case"textInput":return t=e.data,t===pp&&fp?null:t;default:return null}}function o0(t,e){if(Rn)return t==="compositionend"||!pd&&mg(t,e)?(t=pg(),Oa=ud=fr=null,Rn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!s0[t.type]:e==="textarea"}function yg(t,e,r,n){Gm(n),e=Qa(e,"onChange"),0<e.length&&(r=new dd("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Uo=null,as=null;function a0(t){Rg(t,0)}function Ai(t){var e=xn(t);if(Vm(e))return t}function i0(t,e){if(t==="change")return e}var vg=!1;if(Xt){var Ll;if(Xt){var Ml="oninput"in document;if(!Ml){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Ml=typeof gp.oninput=="function"}Ll=Ml}else Ll=!1;vg=Ll&&(!document.documentMode||9<document.documentMode)}function yp(){Uo&&(Uo.detachEvent("onpropertychange",wg),as=Uo=null)}function wg(t){if(t.propertyName==="value"&&Ai(as)){var e=[];yg(e,as,t,sd(t)),Jm(a0,e)}}function l0(t,e,r){t==="focusin"?(yp(),Uo=e,as=r,Uo.attachEvent("onpropertychange",wg)):t==="focusout"&&yp()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ai(as)}function u0(t,e){if(t==="click")return Ai(e)}function d0(t,e){if(t==="input"||t==="change")return Ai(e)}function h0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:h0;function is(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ec.call(e,o)||!Tt(t[o],e[o]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var r=vp(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vp(r)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ua(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=Cg(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&bg(r.ownerDocument.documentElement,r)){if(n!==null&&fd(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=r.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!t.extend&&s>n&&(o=n,n=s,s=o),o=wp(r,s);var a=wp(r,n);o&&a&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f0=Xt&&"documentMode"in document&&11>=document.documentMode,Tn=null,Bc=null,Bo=null,Hc=!1;function bp(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hc||Tn==null||Tn!==Ua(n)||(n=Tn,"selectionStart"in n&&fd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Bo&&is(Bo,n)||(Bo=n,n=Qa(Bc,"onSelect"),0<n.length&&(e=new dd("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Tn)))}function ca(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var On={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},zl={},kg={};Xt&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $i(t){if(zl[t])return zl[t];if(!On[t])return t;var e=On[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in kg)return zl[t]=e[r];return t}var Ig=$i("animationend"),Eg=$i("animationiteration"),Sg=$i("animationstart"),Dg=$i("transitionend"),Pg=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Pg.set(t,e),yn(e,[t])}for(var jl=0;jl<Cp.length;jl++){var Fl=Cp[jl],m0=Fl.toLowerCase(),g0=Fl[0].toUpperCase()+Fl.slice(1);Lr(m0,"on"+g0)}Lr(Ig,"onAnimationEnd");Lr(Eg,"onAnimationIteration");Lr(Sg,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Dg,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function kp(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,m1(n,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],o=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var a=n.length-1;0<=a;a--){var i=n[a],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==s&&o.isPropagationStopped())break e;kp(o,i,c),s=l}else for(a=0;a<n.length;a++){if(i=n[a],l=i.instance,c=i.currentTarget,i=i.listener,l!==s&&o.isPropagationStopped())break e;kp(o,i,c),s=l}}}if(Ha)throw t=jc,Ha=!1,jc=null,t}function te(t,e){var r=e[Qc];r===void 0&&(r=e[Qc]=new Set);var n=t+"__bubble";r.has(n)||(Tg(e,t,2,!1),r.add(n))}function Vl(t,e,r){var n=0;e&&(n|=4),Tg(r,t,n,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[ua]){t[ua]=!0,Lm.forEach(function(r){r!=="selectionchange"&&(y0.has(r)||Vl(r,!1,t),Vl(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,Vl("selectionchange",!1,e))}}function Tg(t,e,r,n){switch(hg(e)){case 1:var o=x1;break;case 4:o=_1;break;default:o=cd}r=o.bind(null,e,r,t),o=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),n?o!==void 0?t.addEventListener(e,r,{capture:!0,passive:o}):t.addEventListener(e,r,!0):o!==void 0?t.addEventListener(e,r,{passive:o}):t.addEventListener(e,r,!1)}function Ul(t,e,r,n,o){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var i=n.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;i!==null;){if(a=Gr(i),a===null)return;if(l=a.tag,l===5||l===6){n=s=a;continue e}i=i.parentNode}}n=n.return}Jm(function(){var c=s,u=sd(r),d=[];e:{var h=Pg.get(t);if(h!==void 0){var g=dd,y=t;switch(t){case"keypress":if(xa(r)===0)break e;case"keydown":case"keyup":g=W1;break;case"focusin":y="focus",g=$l;break;case"focusout":y="blur",g=$l;break;case"beforeblur":case"afterblur":g=$l;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Y1;break;case Ig:case Eg:case Sg:g=z1;break;case Dg:g=J1;break;case"scroll":g=N1;break;case"wheel":g=e0;break;case"copy":case"cut":case"paste":g=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=hp}var v=(e&4)!==0,D=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=rs(p,f),w!=null&&v.push(cs(p,w,m)))),D)break;p=p.return}0<v.length&&(h=new g(h,y,null,r,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&r!==Lc&&(y=r.relatedTarget||r.fromElement)&&(Gr(y)||y[Jt]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=c,y=y?Gr(y):null,y!==null&&(D=vn(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(v=up,w="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=hp,w="onPointerLeave",f="onPointerEnter",p="pointer"),D=g==null?h:xn(g),m=y==null?h:xn(y),h=new v(w,p+"leave",g,r,u),h.target=D,h.relatedTarget=m,w=null,Gr(u)===c&&(v=new v(f,p+"enter",y,r,u),v.target=m,v.relatedTarget=D,w=v),D=w,g&&y)t:{for(v=g,f=y,p=0,m=v;m;m=kn(m))p++;for(m=0,w=f;w;w=kn(w))m++;for(;0<p-m;)v=kn(v),p--;for(;0<m-p;)f=kn(f),m--;for(;p--;){if(v===f||f!==null&&v===f.alternate)break t;v=kn(v),f=kn(f)}v=null}else v=null;g!==null&&Ip(d,h,g,v,!1),y!==null&&D!==null&&Ip(d,D,y,v,!0)}}e:{if(h=c?xn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=i0;else if(mp(h))if(vg)S=d0;else{S=c0;var T=l0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=u0);if(S&&(S=S(t,c))){yg(d,S,r,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&xc(h,"number",h.value)}switch(T=c?xn(c):window,t){case"focusin":(mp(T)||T.contentEditable==="true")&&(Tn=T,Bc=c,Bo=null);break;case"focusout":Bo=Bc=Tn=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,bp(d,r,u);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":bp(d,r,u)}var O;if(pd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rn?mg(t,r)&&(x="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(fg&&r.locale!=="ko"&&(Rn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Rn&&(O=pg()):(fr=u,ud="value"in fr?fr.value:fr.textContent,Rn=!0)),T=Qa(c,x),0<T.length&&(x=new dp(x,t,null,r,u),d.push({event:x,listeners:T}),O?x.data=O:(O=gg(r),O!==null&&(x.data=O)))),(O=r0?n0(t,r):o0(t,r))&&(c=Qa(c,"onBeforeInput"),0<c.length&&(u=new dp("onBeforeInput","beforeinput",null,r,u),d.push({event:u,listeners:c}),u.data=O))}Rg(d,e)})}function cs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Qa(t,e){for(var r=e+"Capture",n=[];t!==null;){var o=t,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=rs(t,r),s!=null&&n.unshift(cs(t,s,o)),s=rs(t,e),s!=null&&n.push(cs(t,s,o))),t=t.return}return n}function kn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,r,n,o){for(var s=e._reactName,a=[];r!==null&&r!==n;){var i=r,l=i.alternate,c=i.stateNode;if(l!==null&&l===n)break;i.tag===5&&c!==null&&(i=c,o?(l=rs(r,s),l!=null&&a.unshift(cs(r,l,i))):o||(l=rs(r,s),l!=null&&a.push(cs(r,l,i)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var v0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Ep(t){return(typeof t=="string"?t:""+t).replace(v0,`
`).replace(w0,"")}function da(t,e,r){if(e=Ep(e),Ep(t)!==e&&r)throw Error(C(425))}function Ya(){}var qc=null,Kc=null;function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(k0)}:Gc;function k0(t){setTimeout(function(){throw t})}function Bl(t,e){var r=e,n=0;do{var o=r.nextSibling;if(t.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){t.removeChild(o),ss(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);ss(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Nt="__reactFiber$"+po,us="__reactProps$"+po,Jt="__reactContainer$"+po,Qc="__reactEvents$"+po,I0="__reactListeners$"+po,E0="__reactHandles$"+po;function Gr(t){var e=t[Nt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Jt]||r[Nt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Dp(t);t!==null;){if(r=t[Nt])return r;t=Dp(t)}return e}t=r,r=t.parentNode}return null}function $s(t){return t=t[Nt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Li(t){return t[us]||null}var Yc=[],_n=-1;function Mr(t){return{current:t}}function ne(t){0>_n||(t.current=Yc[_n],Yc[_n]=null,_n--)}function ee(t,e){_n++,Yc[_n]=t.current,t.current=e}var xr={},He=Mr(xr),et=Mr(!1),on=xr;function Yn(t,e){var r=t.type.contextTypes;if(!r)return xr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in r)o[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function tt(t){return t=t.childContextTypes,t!=null}function Xa(){ne(et),ne(He)}function Pp(t,e,r){if(He.current!==xr)throw Error(C(168));ee(He,e),ee(et,r)}function Og(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in e))throw Error(C(108,l1(t)||"Unknown",o));return de({},r,n)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,on=He.current,ee(He,t),ee(et,et.current),!0}function Rp(t,e,r){var n=t.stateNode;if(!n)throw Error(C(169));r?(t=Og(t,e,on),n.__reactInternalMemoizedMergedChildContext=t,ne(et),ne(He),ee(He,t)):ne(et),ee(et,r)}var Kt=null,Mi=!1,Hl=!1;function xg(t){Kt===null?Kt=[t]:Kt.push(t)}function S0(t){Mi=!0,xg(t)}function zr(){if(!Hl&&Kt!==null){Hl=!0;var t=0,e=X;try{var r=Kt;for(X=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Kt=null,Mi=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(t+1)),rg(ad,zr),o}finally{X=e,Hl=!1}}return null}var Nn=[],An=0,Za=null,ei=0,gt=[],yt=0,sn=null,Wt=1,Gt="";function qr(t,e){Nn[An++]=ei,Nn[An++]=Za,Za=t,ei=e}function _g(t,e,r){gt[yt++]=Wt,gt[yt++]=Gt,gt[yt++]=sn,sn=t;var n=Wt;t=Gt;var o=32-Pt(n)-1;n&=~(1<<o),r+=1;var s=32-Pt(e)+o;if(30<s){var a=o-o%5;s=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Wt=1<<32-Pt(e)+o|r<<o|n,Gt=s+t}else Wt=1<<s|r<<o|n,Gt=t}function md(t){t.return!==null&&(qr(t,1),_g(t,1,0))}function gd(t){for(;t===Za;)Za=Nn[--An],Nn[An]=null,ei=Nn[--An],Nn[An]=null;for(;t===sn;)sn=gt[--yt],gt[yt]=null,Gt=gt[--yt],gt[yt]=null,Wt=gt[--yt],gt[yt]=null}var ut=null,lt=null,ae=!1,Dt=null;function Ng(t,e){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Tp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ut=t,lt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ut=t,lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=sn!==null?{id:Wt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ut=t,lt=null,!0):!1;default:return!1}}function Xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(ae){var e=lt;if(e){var r=e;if(!Tp(t,e)){if(Xc(t))throw Error(C(418));e=br(r.nextSibling);var n=ut;e&&Tp(t,e)?Ng(n,r):(t.flags=t.flags&-4097|2,ae=!1,ut=t)}}else{if(Xc(t))throw Error(C(418));t.flags=t.flags&-4097|2,ae=!1,ut=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ut=t}function ha(t){if(t!==ut)return!1;if(!ae)return Op(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wc(t.type,t.memoizedProps)),e&&(e=lt)){if(Xc(t))throw Ag(),Error(C(418));for(;e;)Ng(t,e),e=br(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){lt=br(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}lt=null}}else lt=ut?br(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=lt;t;)t=br(t.nextSibling)}function Xn(){lt=ut=null,ae=!1}function yd(t){Dt===null?Dt=[t]:Dt.push(t)}var D0=ar.ReactCurrentBatchConfig;function Et(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var ti=Mr(null),ri=null,$n=null,vd=null;function wd(){vd=$n=ri=null}function bd(t){var e=ti.current;ne(ti),t._currentValue=e}function Zc(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Bn(t,e){ri=t,vd=$n=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},$n===null){if(ri===null)throw Error(C(308));$n=t,ri.dependencies={lanes:0,firstContext:t}}else $n=$n.next=t;return e}var Qr=null;function Cd(t){Qr===null?Qr=[t]:Qr.push(t)}function $g(t,e,r,n){var o=e.interleaved;return o===null?(r.next=r,Cd(e)):(r.next=o.next,o.next=r),e.interleaved=r,Zt(t,n)}function Zt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var dr=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var o=n.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),n.pending=e,Zt(t,r)}return o=n.interleaved,o===null?(e.next=e,Cd(n)):(e.next=o.next,o.next=e),n.interleaved=e,Zt(t,r)}function _a(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,id(t,r)}}function xp(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?o=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?o=s=e:s=s.next=e}else o=s=e;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ni(t,e,r,n){var o=t.updateQueue;dr=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var l=i,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==a&&(i===null?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=o.baseState;a=0,u=c=l=null,i=s;do{var h=i.lane,g=i.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=t,v=i;switch(h=e,g=r,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=de({},d,h);break e;case 2:dr=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else g={eventTime:g,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,a|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else s===null&&(o.shared.lanes=0);ln|=a,t.lanes=a,t.memoizedState=d}}function _p(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(C(191,o));o.call(n)}}}var Mg=new $m.Component().refs;function eu(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:de({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var zi={isMounted:function(t){return(t=t._reactInternals)?vn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Ge(),o=Ir(t),s=Yt(n,o);s.payload=e,r!=null&&(s.callback=r),e=Cr(t,s,o),e!==null&&(Rt(e,t,o,n),_a(e,t,o))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Ge(),o=Ir(t),s=Yt(n,o);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=Cr(t,s,o),e!==null&&(Rt(e,t,o,n),_a(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Ge(),n=Ir(t),o=Yt(r,n);o.tag=2,e!=null&&(o.callback=e),e=Cr(t,o,n),e!==null&&(Rt(e,t,n,r),_a(e,t,n))}};function Np(t,e,r,n,o,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,a):e.prototype&&e.prototype.isPureReactComponent?!is(r,n)||!is(o,s):!0}function zg(t,e,r){var n=!1,o=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(o=tt(e)?on:He.current,n=e.contextTypes,s=(n=n!=null)?Yn(t,o):xr),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zi,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ap(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&zi.enqueueReplaceState(e,e.state,null)}function tu(t,e,r,n){var o=t.stateNode;o.props=r,o.state=t.memoizedState,o.refs=Mg,kd(t);var s=e.contextType;typeof s=="object"&&s!==null?o.context=Ct(s):(s=tt(e)?on:He.current,o.context=Yn(t,s)),o.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eu(t,e,s,r),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&zi.enqueueReplaceState(o,o.state,null),ni(t,r,o,n),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Do(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,t));var o=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var i=o.refs;i===Mg&&(i=o.refs={}),a===null?delete i[s]:i[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function jg(t){function e(f,p){if(t){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function r(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function n(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=Er(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function i(f,p,m,w){return p===null||p.tag!==6?(p=Xl(m,f.mode,w),p.return=f,p):(p=o(p,m),p.return=f,p)}function l(f,p,m,w){var S=m.type;return S===Pn?u(f,p,m.props.children,w,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&$p(S)===p.type)?(w=o(p,m.props),w.ref=Do(f,p,m),w.return=f,w):(w=za(m.type,m.key,m.props,null,f.mode,w),w.ref=Do(f,p,m),w.return=f,w)}function c(f,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Jl(m,f.mode,w),p.return=f,p):(p=o(p,m.children||[]),p.return=f,p)}function u(f,p,m,w,S){return p===null||p.tag!==7?(p=rn(m,f.mode,w,S),p.return=f,p):(p=o(p,m),p.return=f,p)}function d(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ra:return m=za(p.type,p.key,p.props,null,f.mode,m),m.ref=Do(f,null,p),m.return=f,m;case Dn:return p=Jl(p,f.mode,m),p.return=f,p;case ur:var w=p._init;return d(f,w(p._payload),m)}if(_o(p)||Co(p))return p=rn(p,f.mode,m,null),p.return=f,p;pa(f,p)}return null}function h(f,p,m,w){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:i(f,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:return m.key===S?l(f,p,m,w):null;case Dn:return m.key===S?c(f,p,m,w):null;case ur:return S=m._init,h(f,p,S(m._payload),w)}if(_o(m)||Co(m))return S!==null?null:u(f,p,m,w,null);pa(f,m)}return null}function g(f,p,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,i(p,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ra:return f=f.get(w.key===null?m:w.key)||null,l(p,f,w,S);case Dn:return f=f.get(w.key===null?m:w.key)||null,c(p,f,w,S);case ur:var T=w._init;return g(f,p,m,T(w._payload),S)}if(_o(w)||Co(w))return f=f.get(m)||null,u(p,f,w,S,null);pa(p,w)}return null}function y(f,p,m,w){for(var S=null,T=null,O=p,x=p=0,Z=null;O!==null&&x<m.length;x++){O.index>x?(Z=O,O=null):Z=O.sibling;var B=h(f,O,m[x],w);if(B===null){O===null&&(O=Z);break}t&&O&&B.alternate===null&&e(f,O),p=s(B,p,x),T===null?S=B:T.sibling=B,T=B,O=Z}if(x===m.length)return r(f,O),ae&&qr(f,x),S;if(O===null){for(;x<m.length;x++)O=d(f,m[x],w),O!==null&&(p=s(O,p,x),T===null?S=O:T.sibling=O,T=O);return ae&&qr(f,x),S}for(O=n(f,O);x<m.length;x++)Z=g(O,f,x,m[x],w),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?x:Z.key),p=s(Z,p,x),T===null?S=Z:T.sibling=Z,T=Z);return t&&O.forEach(function(st){return e(f,st)}),ae&&qr(f,x),S}function v(f,p,m,w){var S=Co(m);if(typeof S!="function")throw Error(C(150));if(m=S.call(m),m==null)throw Error(C(151));for(var T=S=null,O=p,x=p=0,Z=null,B=m.next();O!==null&&!B.done;x++,B=m.next()){O.index>x?(Z=O,O=null):Z=O.sibling;var st=h(f,O,B.value,w);if(st===null){O===null&&(O=Z);break}t&&O&&st.alternate===null&&e(f,O),p=s(st,p,x),T===null?S=st:T.sibling=st,T=st,O=Z}if(B.done)return r(f,O),ae&&qr(f,x),S;if(O===null){for(;!B.done;x++,B=m.next())B=d(f,B.value,w),B!==null&&(p=s(B,p,x),T===null?S=B:T.sibling=B,T=B);return ae&&qr(f,x),S}for(O=n(f,O);!B.done;x++,B=m.next())B=g(O,f,x,B.value,w),B!==null&&(t&&B.alternate!==null&&O.delete(B.key===null?x:B.key),p=s(B,p,x),T===null?S=B:T.sibling=B,T=B);return t&&O.forEach(function(Br){return e(f,Br)}),ae&&qr(f,x),S}function D(f,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Pn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:e:{for(var S=m.key,T=p;T!==null;){if(T.key===S){if(S=m.type,S===Pn){if(T.tag===7){r(f,T.sibling),p=o(T,m.props.children),p.return=f,f=p;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&$p(S)===T.type){r(f,T.sibling),p=o(T,m.props),p.ref=Do(f,T,m),p.return=f,f=p;break e}r(f,T);break}else e(f,T);T=T.sibling}m.type===Pn?(p=rn(m.props.children,f.mode,w,m.key),p.return=f,f=p):(w=za(m.type,m.key,m.props,null,f.mode,w),w.ref=Do(f,p,m),w.return=f,f=w)}return a(f);case Dn:e:{for(T=m.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){r(f,p.sibling),p=o(p,m.children||[]),p.return=f,f=p;break e}else{r(f,p);break}else e(f,p);p=p.sibling}p=Jl(m,f.mode,w),p.return=f,f=p}return a(f);case ur:return T=m._init,D(f,p,T(m._payload),w)}if(_o(m))return y(f,p,m,w);if(Co(m))return v(f,p,m,w);pa(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(r(f,p.sibling),p=o(p,m),p.return=f,f=p):(r(f,p),p=Xl(m,f.mode,w),p.return=f,f=p),a(f)):r(f,p)}return D}var Jn=jg(!0),Fg=jg(!1),Ls={},zt=Mr(Ls),ds=Mr(Ls),hs=Mr(Ls);function Yr(t){if(t===Ls)throw Error(C(174));return t}function Id(t,e){switch(ee(hs,e),ee(ds,t),ee(zt,Ls),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}ne(zt),ee(zt,e)}function Zn(){ne(zt),ne(ds),ne(hs)}function Vg(t){Yr(hs.current);var e=Yr(zt.current),r=Nc(e,t.type);e!==r&&(ee(ds,t),ee(zt,r))}function Ed(t){ds.current===t&&(ne(zt),ne(ds))}var ce=Mr(0);function oi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function Sd(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Na=ar.ReactCurrentDispatcher,Kl=ar.ReactCurrentBatchConfig,an=0,ue=null,we=null,Ee=null,si=!1,Ho=!1,ps=0,P0=0;function Ae(){throw Error(C(321))}function Dd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Tt(t[r],e[r]))return!1;return!0}function Pd(t,e,r,n,o,s){if(an=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?x0:_0,t=r(n,o),Ho){s=0;do{if(Ho=!1,ps=0,25<=s)throw Error(C(301));s+=1,Ee=we=null,e.updateQueue=null,Na.current=N0,t=r(n,o)}while(Ho)}if(Na.current=ai,e=we!==null&&we.next!==null,an=0,Ee=we=ue=null,si=!1,e)throw Error(C(300));return t}function Rd(){var t=ps!==0;return ps=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ue.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function kt(){if(we===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Ee===null?ue.memoizedState:Ee.next;if(e!==null)Ee=e,we=t;else{if(t===null)throw Error(C(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?ue.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function fs(t,e){return typeof e=="function"?e(t):e}function Wl(t){var e=kt(),r=e.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=t;var n=we,o=n.baseQueue,s=r.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}n.baseQueue=o=s,r.pending=null}if(o!==null){s=o.next,n=n.baseState;var i=a=null,l=null,c=s;do{var u=c.lane;if((an&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:t(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(i=l=d,a=n):l=l.next=d,ue.lanes|=u,ln|=u}c=c.next}while(c!==null&&c!==s);l===null?a=n:l.next=i,Tt(n,e.memoizedState)||(Ze=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){o=t;do s=o.lane,ue.lanes|=s,ln|=s,o=o.next;while(o!==t)}else o===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Gl(t){var e=kt(),r=e.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=t;var n=r.dispatch,o=r.pending,s=e.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do s=t(s,a.action),a=a.next;while(a!==o);Tt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,n]}function Ug(){}function Bg(t,e){var r=ue,n=kt(),o=e(),s=!Tt(n.memoizedState,o);if(s&&(n.memoizedState=o,Ze=!0),n=n.queue,Td(Kg.bind(null,r,n,t),[t]),n.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(r.flags|=2048,ms(9,qg.bind(null,r,n,o,e),void 0,null),Se===null)throw Error(C(349));an&30||Hg(r,e,o)}return o}function Hg(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function qg(t,e,r,n){e.value=r,e.getSnapshot=n,Wg(e)&&Gg(t)}function Kg(t,e,r){return r(function(){Wg(e)&&Gg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Tt(t,r)}catch{return!0}}function Gg(t){var e=Zt(t,1);e!==null&&Rt(e,t,1,-1)}function Lp(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},e.queue=t,t=t.dispatch=O0.bind(null,ue,t),[e.memoizedState,t]}function ms(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Qg(){return kt().memoizedState}function Aa(t,e,r,n){var o=_t();ue.flags|=t,o.memoizedState=ms(1|e,r,void 0,n===void 0?null:n)}function ji(t,e,r,n){var o=kt();n=n===void 0?null:n;var s=void 0;if(we!==null){var a=we.memoizedState;if(s=a.destroy,n!==null&&Dd(n,a.deps)){o.memoizedState=ms(e,r,s,n);return}}ue.flags|=t,o.memoizedState=ms(1|e,r,s,n)}function Mp(t,e){return Aa(8390656,8,t,e)}function Td(t,e){return ji(2048,8,t,e)}function Yg(t,e){return ji(4,2,t,e)}function Xg(t,e){return ji(4,4,t,e)}function Jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zg(t,e,r){return r=r!=null?r.concat([t]):null,ji(4,4,Jg.bind(null,e,t),r)}function Od(){}function ey(t,e){var r=kt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Dd(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function ty(t,e){var r=kt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Dd(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function ry(t,e,r){return an&21?(Tt(r,e)||(r=sg(),ue.lanes|=r,ln|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=r)}function R0(t,e){var r=X;X=r!==0&&4>r?r:4,t(!0);var n=Kl.transition;Kl.transition={};try{t(!1),e()}finally{X=r,Kl.transition=n}}function ny(){return kt().memoizedState}function T0(t,e,r){var n=Ir(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},oy(t))sy(e,r);else if(r=$g(t,e,r,n),r!==null){var o=Ge();Rt(r,t,n,o),ay(r,e,n)}}function O0(t,e,r){var n=Ir(t),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(oy(t))sy(e,o);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,i=s(a,r);if(o.hasEagerState=!0,o.eagerState=i,Tt(i,a)){var l=e.interleaved;l===null?(o.next=o,Cd(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}r=$g(t,e,o,n),r!==null&&(o=Ge(),Rt(r,t,n,o),ay(r,e,n))}}function oy(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function sy(t,e){Ho=si=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function ay(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,id(t,r)}}var ai={readContext:Ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},x0={readContext:Ct,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Mp,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Aa(4194308,4,Jg.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var r=_t();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=_t();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=T0.bind(null,ue,t),[n.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Lp,useDebugValue:Od,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Lp(!1),e=t[0];return t=R0.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ue,o=_t();if(ae){if(r===void 0)throw Error(C(407));r=r()}else{if(r=e(),Se===null)throw Error(C(349));an&30||Hg(n,e,r)}o.memoizedState=r;var s={value:r,getSnapshot:e};return o.queue=s,Mp(Kg.bind(null,n,s,t),[t]),n.flags|=2048,ms(9,qg.bind(null,n,s,r,e),void 0,null),r},useId:function(){var t=_t(),e=Se.identifierPrefix;if(ae){var r=Gt,n=Wt;r=(n&~(1<<32-Pt(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ps++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=P0++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_0={readContext:Ct,useCallback:ey,useContext:Ct,useEffect:Td,useImperativeHandle:Zg,useInsertionEffect:Yg,useLayoutEffect:Xg,useMemo:ty,useReducer:Wl,useRef:Qg,useState:function(){return Wl(fs)},useDebugValue:Od,useDeferredValue:function(t){var e=kt();return ry(e,we.memoizedState,t)},useTransition:function(){var t=Wl(fs)[0],e=kt().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Bg,useId:ny,unstable_isNewReconciler:!1},N0={readContext:Ct,useCallback:ey,useContext:Ct,useEffect:Td,useImperativeHandle:Zg,useInsertionEffect:Yg,useLayoutEffect:Xg,useMemo:ty,useReducer:Gl,useRef:Qg,useState:function(){return Gl(fs)},useDebugValue:Od,useDeferredValue:function(t){var e=kt();return we===null?e.memoizedState=t:ry(e,we.memoizedState,t)},useTransition:function(){var t=Gl(fs)[0],e=kt().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Bg,useId:ny,unstable_isNewReconciler:!1};function eo(t,e){try{var r="",n=e;do r+=i1(n),n=n.return;while(n);var o=r}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:o,digest:null}}function Ql(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function ru(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function iy(t,e,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){li||(li=!0,hu=n),ru(t,e)},r}function ly(t,e,r){r=Yt(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var o=e.value;r.payload=function(){return n(o)},r.callback=function(){ru(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ru(t,e),typeof n!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function zp(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new A0;var o=new Set;n.set(e,o)}else o=n.get(e),o===void 0&&(o=new Set,n.set(e,o));o.has(r)||(o.add(r),t=G0.bind(null,t,e,r),e.then(t,t))}function jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,r,n,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Yt(-1,1),e.tag=2,Cr(r,e,1))),r.lanes|=1),t)}var $0=ar.ReactCurrentOwner,Ze=!1;function Ke(t,e,r,n){e.child=t===null?Fg(e,null,r,n):Jn(e,t.child,r,n)}function Vp(t,e,r,n,o){r=r.render;var s=e.ref;return Bn(e,o),n=Pd(t,e,r,n,s,o),r=Rd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,er(t,e,o)):(ae&&r&&md(e),e.flags|=1,Ke(t,e,n,o),e.child)}function Up(t,e,r,n,o){if(t===null){var s=r.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,cy(t,e,s,n,o)):(t=za(r.type,null,n,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&o)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:is,r(a,n)&&t.ref===e.ref)return er(t,e,o)}return e.flags|=1,t=Er(s,n),t.ref=e.ref,t.return=e,e.child=t}function cy(t,e,r,n,o){if(t!==null){var s=t.memoizedProps;if(is(s,n)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=n=s,(t.lanes&o)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,er(t,e,o)}return nu(t,e,r,n,o)}function uy(t,e,r){var n=e.pendingProps,o=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Mn,it),it|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Mn,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ee(Mn,it),it|=n}else s!==null?(n=s.baseLanes|r,e.memoizedState=null):n=r,ee(Mn,it),it|=n;return Ke(t,e,o,r),e.child}function dy(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function nu(t,e,r,n,o){var s=tt(r)?on:He.current;return s=Yn(e,s),Bn(e,o),r=Pd(t,e,r,n,s,o),n=Rd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,er(t,e,o)):(ae&&n&&md(e),e.flags|=1,Ke(t,e,r,o),e.child)}function Bp(t,e,r,n,o){if(tt(r)){var s=!0;Ja(e)}else s=!1;if(Bn(e,o),e.stateNode===null)$a(t,e),zg(e,r,n),tu(e,r,n,o),n=!0;else if(t===null){var a=e.stateNode,i=e.memoizedProps;a.props=i;var l=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Ct(c):(c=tt(r)?on:He.current,c=Yn(e,c));var u=r.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==n||l!==c)&&Ap(e,a,n,c),dr=!1;var h=e.memoizedState;a.state=h,ni(e,n,a,o),l=e.memoizedState,i!==n||h!==l||et.current||dr?(typeof u=="function"&&(eu(e,r,u,n),l=e.memoizedState),(i=dr||Np(e,r,i,n,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),a.props=n,a.state=l,a.context=c,n=i):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,Lg(t,e),i=e.memoizedProps,c=e.type===e.elementType?i:Et(e.type,i),a.props=c,d=e.pendingProps,h=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=tt(r)?on:He.current,l=Yn(e,l));var g=r.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==d||h!==l)&&Ap(e,a,n,l),dr=!1,h=e.memoizedState,a.state=h,ni(e,n,a,o);var y=e.memoizedState;i!==d||h!==y||et.current||dr?(typeof g=="function"&&(eu(e,r,g,n),y=e.memoizedState),(c=dr||Np(e,r,c,n,h,y,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),a.props=n,a.state=y,a.context=l,n=c):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),n=!1)}return ou(t,e,r,n,s,o)}function ou(t,e,r,n,o,s){dy(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return o&&Rp(e,r,!1),er(t,e,s);n=e.stateNode,$0.current=e;var i=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=Jn(e,t.child,null,s),e.child=Jn(e,null,i,s)):Ke(t,e,i,s),e.memoizedState=n.state,o&&Rp(e,r,!0),e.child}function hy(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),Id(t,e.containerInfo)}function Hp(t,e,r,n,o){return Xn(),yd(o),e.flags|=256,Ke(t,e,r,n),e.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(t){return{baseLanes:t,cachePool:null,transitions:null}}function py(t,e,r){var n=e.pendingProps,o=ce.current,s=!1,a=(e.flags&128)!==0,i;if((i=a)||(i=t!==null&&t.memoizedState===null?!1:(o&2)!==0),i?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),ee(ce,o&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,s?(n=e.mode,s=e.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ui(a,n,0,null),t=rn(t,n,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=au(r),e.memoizedState=su,t):xd(e,a));if(o=t.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return L0(t,e,a,n,i,o,r);if(s){s=n.fallback,a=e.mode,o=t.child,i=o.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=Er(o,l),n.subtreeFlags=o.subtreeFlags&14680064),i!==null?s=Er(i,s):(s=rn(s,a,r,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,a=t.child.memoizedState,a=a===null?au(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~r,e.memoizedState=su,n}return s=t.child,t=s.sibling,n=Er(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function xd(t,e){return e=Ui({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,r,n){return n!==null&&yd(n),Jn(e,t.child,null,r),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function L0(t,e,r,n,o,s,a){if(r)return e.flags&256?(e.flags&=-257,n=Ql(Error(C(422))),fa(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,o=e.mode,n=Ui({mode:"visible",children:n.children},o,0,null),s=rn(s,o,a,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&Jn(e,t.child,null,a),e.child.memoizedState=au(a),e.memoizedState=su,s);if(!(e.mode&1))return fa(t,e,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var i=n.dgst;return n=i,s=Error(C(419)),n=Ql(s,n,void 0),fa(t,e,a,n)}if(i=(a&t.childLanes)!==0,Ze||i){if(n=Se,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Zt(t,o),Rt(n,t,o,-1))}return Md(),n=Ql(Error(C(421))),fa(t,e,a,n)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=Q0.bind(null,t),o._reactRetry=e,null):(t=s.treeContext,lt=br(o.nextSibling),ut=e,ae=!0,Dt=null,t!==null&&(gt[yt++]=Wt,gt[yt++]=Gt,gt[yt++]=sn,Wt=t.id,Gt=t.overflow,sn=e),e=xd(e,n.children),e.flags|=4096,e)}function qp(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Zc(t.return,e,r)}function Yl(t,e,r,n,o){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=o)}function fy(t,e,r){var n=e.pendingProps,o=n.revealOrder,s=n.tail;if(Ke(t,e,n.children,r),n=ce.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,r,e);else if(t.tag===19)qp(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ee(ce,n),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(r=e.child,o=null;r!==null;)t=r.alternate,t!==null&&oi(t)===null&&(o=r),r=r.sibling;r=o,r===null?(o=e.child,e.child=null):(o=r.sibling,r.sibling=null),Yl(e,!1,o,r,s);break;case"backwards":for(r=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&oi(t)===null){e.child=o;break}t=o.sibling,o.sibling=r,r=o,o=t}Yl(e,!0,r,null,s);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),ln|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,r=Er(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Er(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function M0(t,e,r){switch(e.tag){case 3:hy(e),Xn();break;case 5:Vg(e);break;case 1:tt(e.type)&&Ja(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,o=e.memoizedProps.value;ee(ti,n._currentValue),n._currentValue=o;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ee(ce,ce.current&1),e.flags|=128,null):r&e.child.childLanes?py(t,e,r):(ee(ce,ce.current&1),t=er(t,e,r),t!==null?t.sibling:null);ee(ce,ce.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return fy(t,e,r);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(ce,ce.current),n)break;return null;case 22:case 23:return e.lanes=0,uy(t,e,r)}return er(t,e,r)}var my,iu,gy,yy;my=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};iu=function(){};gy=function(t,e,r,n){var o=t.memoizedProps;if(o!==n){t=e.stateNode,Yr(zt.current);var s=null;switch(r){case"input":o=Tc(t,o),n=Tc(t,n),s=[];break;case"select":o=de({},o,{value:void 0}),n=de({},n,{value:void 0}),s=[];break;case"textarea":o=_c(t,o),n=_c(t,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ya)}Ac(r,n);var a;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var i=o[c];for(a in i)i.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(es.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in n){var l=n[c];if(i=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==i&&(l!=null||i!=null))if(c==="style")if(i){for(a in i)!i.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&i[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(s||(s=[]),s.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(es.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",t),s||i===l||(s=[])):(s=s||[]).push(c,l))}r&&(s=s||[]).push("style",r);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yy=function(t,e,r,n){r!==n&&(e.flags|=4)};function Po(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var o=t.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function z0(t,e,r){var n=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return tt(e.type)&&Xa(),$e(e),null;case 3:return n=e.stateNode,Zn(),ne(et),ne(He),Sd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(mu(Dt),Dt=null))),iu(t,e),$e(e),null;case 5:Ed(e);var o=Yr(hs.current);if(r=e.type,t!==null&&e.stateNode!=null)gy(t,e,r,n,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(C(166));return $e(e),null}if(t=Yr(zt.current),ha(e)){n=e.stateNode,r=e.type;var s=e.memoizedProps;switch(n[Nt]=e,n[us]=s,t=(e.mode&1)!==0,r){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(o=0;o<Ao.length;o++)te(Ao[o],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":ep(n,s),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},te("invalid",n);break;case"textarea":rp(n,s),te("invalid",n)}Ac(r,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var i=s[a];a==="children"?typeof i=="string"?n.textContent!==i&&(s.suppressHydrationWarning!==!0&&da(n.textContent,i,t),o=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&da(n.textContent,i,t),o=["children",""+i]):es.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&te("scroll",n)}switch(r){case"input":na(n),tp(n,s,!0);break;case"textarea":na(n),np(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ya)}n=o,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(r,{is:n.is}):(t=a.createElement(r),r==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,r),t[Nt]=e,t[us]=n,my(t,e,!1,!1),e.stateNode=t;e:{switch(a=$c(r,n),r){case"dialog":te("cancel",t),te("close",t),o=n;break;case"iframe":case"object":case"embed":te("load",t),o=n;break;case"video":case"audio":for(o=0;o<Ao.length;o++)te(Ao[o],t);o=n;break;case"source":te("error",t),o=n;break;case"img":case"image":case"link":te("error",t),te("load",t),o=n;break;case"details":te("toggle",t),o=n;break;case"input":ep(t,n),o=Tc(t,n),te("invalid",t);break;case"option":o=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},o=de({},n,{value:void 0}),te("invalid",t);break;case"textarea":rp(t,n),o=_c(t,n),te("invalid",t);break;default:o=n}Ac(r,o),i=o;for(s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="style"?Wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qm(t,l)):s==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ts(t,l):typeof l=="number"&&ts(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(es.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&td(t,s,l,a))}switch(r){case"input":na(t),tp(t,n,!1);break;case"textarea":na(t),np(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Or(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?jn(t,!!n.multiple,s,!1):n.defaultValue!=null&&jn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Ya)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)yy(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(C(166));if(r=Yr(hs.current),Yr(zt.current),ha(e)){if(n=e.stateNode,r=e.memoizedProps,n[Nt]=e,(s=n.nodeValue!==r)&&(t=ut,t!==null))switch(t.tag){case 3:da(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(n.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Nt]=e,e.stateNode=n}return $e(e),null;case 13:if(ne(ce),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&lt!==null&&e.mode&1&&!(e.flags&128))Ag(),Xn(),e.flags|=98560,s=!1;else if(s=ha(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Nt]=e}else Xn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Dt!==null&&(mu(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?Ce===0&&(Ce=3):Md())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Zn(),iu(t,e),t===null&&ls(e.stateNode.containerInfo),$e(e),null;case 10:return bd(e.type._context),$e(e),null;case 17:return tt(e.type)&&Xa(),$e(e),null;case 19:if(ne(ce),s=e.memoizedState,s===null)return $e(e),null;if(n=(e.flags&128)!==0,a=s.rendering,a===null)if(n)Po(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=oi(t),a!==null){for(e.flags|=128,Po(s,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)s=r,t=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ee(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>to&&(e.flags|=128,n=!0,Po(s,!1),e.lanes=4194304)}else{if(!n)if(t=oi(a),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ae)return $e(e),null}else 2*me()-s.renderingStartTime>to&&r!==1073741824&&(e.flags|=128,n=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(r=s.last,r!==null?r.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,r=ce.current,ee(ce,n?r&1|2:r&1),e):($e(e),null);case 22:case 23:return Ld(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?it&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function j0(t,e){switch(gd(e),e.tag){case 1:return tt(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zn(),ne(et),ne(He),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(ne(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Xn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(ce),null;case 4:return Zn(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var ma=!1,ze=!1,F0=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ln(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){pe(t,e,n)}else r.current=null}function lu(t,e,r){try{r()}catch(n){pe(t,e,n)}}var Kp=!1;function V0(t,e){if(qc=Wa,t=Cg(),fd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,i=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var g;d!==r||o!==0&&d.nodeType!==3||(i=a+o),d!==s||n!==0&&d.nodeType!==3||(l=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===r&&++c===o&&(i=a),h===s&&++u===n&&(l=a),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}r=i===-1||l===-1?null:{start:i,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Kc={focusedElem:t,selectionRange:r},Wa=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Et(e.type,v),D);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Kp,Kp=!1,y}function qo(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var s=o.destroy;o.destroy=void 0,s!==void 0&&lu(e,r,s)}o=o.next}while(o!==n)}}function Fi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function cu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function vy(t){var e=t.alternate;e!==null&&(t.alternate=null,vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[us],delete e[Qc],delete e[I0],delete e[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wy(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Ya));else if(n!==4&&(t=t.child,t!==null))for(uu(t,e,r),t=t.sibling;t!==null;)uu(t,e,r),t=t.sibling}function du(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(du(t,e,r),t=t.sibling;t!==null;)du(t,e,r),t=t.sibling}var Re=null,St=!1;function cr(t,e,r){for(r=r.child;r!==null;)by(t,e,r),r=r.sibling}function by(t,e,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(_i,r)}catch{}switch(r.tag){case 5:ze||Ln(r,e);case 6:var n=Re,o=St;Re=null,cr(t,e,r),Re=n,St=o,Re!==null&&(St?(t=Re,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(St?(t=Re,r=r.stateNode,t.nodeType===8?Bl(t.parentNode,r):t.nodeType===1&&Bl(t,r),ss(t)):Bl(Re,r.stateNode));break;case 4:n=Re,o=St,Re=r.stateNode.containerInfo,St=!0,cr(t,e,r),Re=n,St=o;break;case 0:case 11:case 14:case 15:if(!ze&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&lu(r,e,a),o=o.next}while(o!==n)}cr(t,e,r);break;case 1:if(!ze&&(Ln(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){pe(r,e,i)}cr(t,e,r);break;case 21:cr(t,e,r);break;case 22:r.mode&1?(ze=(n=ze)||r.memoizedState!==null,cr(t,e,r),ze=n):cr(t,e,r);break;default:cr(t,e,r)}}function Gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new F0),e.forEach(function(n){var o=Y0.bind(null,t,n);r.has(n)||(r.add(n),n.then(o,o))})}}function It(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var s=t,a=e,i=a;e:for(;i!==null;){switch(i.tag){case 5:Re=i.stateNode,St=!1;break e;case 3:Re=i.stateNode.containerInfo,St=!0;break e;case 4:Re=i.stateNode.containerInfo,St=!0;break e}i=i.return}if(Re===null)throw Error(C(160));by(s,a,o),Re=null,St=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){pe(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling}function Cy(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(It(e,t),xt(t),n&4){try{qo(3,t,t.return),Fi(3,t)}catch(v){pe(t,t.return,v)}try{qo(5,t,t.return)}catch(v){pe(t,t.return,v)}}break;case 1:It(e,t),xt(t),n&512&&r!==null&&Ln(r,r.return);break;case 5:if(It(e,t),xt(t),n&512&&r!==null&&Ln(r,r.return),t.flags&32){var o=t.stateNode;try{ts(o,"")}catch(v){pe(t,t.return,v)}}if(n&4&&(o=t.stateNode,o!=null)){var s=t.memoizedProps,a=r!==null?r.memoizedProps:s,i=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&Um(o,s),$c(i,a);var c=$c(i,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?Wm(o,d):u==="dangerouslySetInnerHTML"?qm(o,d):u==="children"?ts(o,d):td(o,u,d,c)}switch(i){case"input":Oc(o,s);break;case"textarea":Bm(o,s);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?jn(o,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?jn(o,!!s.multiple,s.defaultValue,!0):jn(o,!!s.multiple,s.multiple?[]:"",!1))}o[us]=s}catch(v){pe(t,t.return,v)}}break;case 6:if(It(e,t),xt(t),n&4){if(t.stateNode===null)throw Error(C(162));o=t.stateNode,s=t.memoizedProps;try{o.nodeValue=s}catch(v){pe(t,t.return,v)}}break;case 3:if(It(e,t),xt(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ss(e.containerInfo)}catch(v){pe(t,t.return,v)}break;case 4:It(e,t),xt(t);break;case 13:It(e,t),xt(t),o=t.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ad=me())),n&4&&Gp(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(ze=(c=ze)||u,It(e,t),ze=c):It(e,t),xt(t),n&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(P=t,u=t.child;u!==null;){for(d=P=u;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:Ln(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){pe(n,r,v)}}break;case 5:Ln(h,h.return);break;case 22:if(h.memoizedState!==null){Yp(d);continue}}g!==null?(g.return=h,P=g):Yp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Km("display",a))}catch(v){pe(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){pe(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:It(e,t),xt(t),n&4&&Gp(t);break;case 21:break;default:It(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(wy(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ts(o,""),n.flags&=-33);var s=Wp(t);du(t,s,o);break;case 3:case 4:var a=n.stateNode.containerInfo,i=Wp(t);uu(t,i,a);break;default:throw Error(C(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U0(t,e,r){P=t,ky(t)}function ky(t,e,r){for(var n=(t.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||ma;if(!a){var i=o.alternate,l=i!==null&&i.memoizedState!==null||ze;i=ma;var c=ze;if(ma=a,(ze=l)&&!c)for(P=o;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?Xp(o):l!==null?(l.return=a,P=l):Xp(o);for(;s!==null;)P=s,ky(s),s=s.sibling;P=o,ma=i,ze=c}Qp(t)}else o.subtreeFlags&8772&&s!==null?(s.return=o,P=s):Qp(t)}}function Qp(t){for(;P!==null;){var e=P;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||Fi(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ze)if(r===null)n.componentDidMount();else{var o=e.elementType===e.type?r.memoizedProps:Et(e.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,n);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}_p(e,a,r)}break;case 5:var i=e.stateNode;if(r===null&&e.flags&4){r=i;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ss(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ze||e.flags&512&&cu(e)}catch(h){pe(e,e.return,h)}}if(e===t){P=null;break}if(r=e.sibling,r!==null){r.return=e.return,P=r;break}P=e.return}}function Yp(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var r=e.sibling;if(r!==null){r.return=e.return,P=r;break}P=e.return}}function Xp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Fi(4,e)}catch(l){pe(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var o=e.return;try{n.componentDidMount()}catch(l){pe(e,o,l)}}var s=e.return;try{cu(e)}catch(l){pe(e,s,l)}break;case 5:var a=e.return;try{cu(e)}catch(l){pe(e,a,l)}}}catch(l){pe(e,e.return,l)}if(e===t){P=null;break}var i=e.sibling;if(i!==null){i.return=e.return,P=i;break}P=e.return}}var B0=Math.ceil,ii=ar.ReactCurrentDispatcher,_d=ar.ReactCurrentOwner,bt=ar.ReactCurrentBatchConfig,G=0,Se=null,ve=null,xe=0,it=0,Mn=Mr(0),Ce=0,gs=null,ln=0,Vi=0,Nd=0,Ko=null,Xe=null,Ad=0,to=1/0,qt=null,li=!1,hu=null,kr=null,ga=!1,mr=null,ci=0,Wo=0,pu=null,La=-1,Ma=0;function Ge(){return G&6?me():La!==-1?La:La=me()}function Ir(t){return t.mode&1?G&2&&xe!==0?xe&-xe:D0.transition!==null?(Ma===0&&(Ma=sg()),Ma):(t=X,t!==0||(t=window.event,t=t===void 0?16:hg(t.type)),t):1}function Rt(t,e,r,n){if(50<Wo)throw Wo=0,pu=null,Error(C(185));Ns(t,r,n),(!(G&2)||t!==Se)&&(t===Se&&(!(G&2)&&(Vi|=r),Ce===4&&pr(t,xe)),rt(t,n),r===1&&G===0&&!(e.mode&1)&&(to=me()+500,Mi&&zr()))}function rt(t,e){var r=t.callbackNode;D1(t,e);var n=Ka(t,t===Se?xe:0);if(n===0)r!==null&&ap(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&ap(r),e===1)t.tag===0?S0(Jp.bind(null,t)):xg(Jp.bind(null,t)),C0(function(){!(G&6)&&zr()}),r=null;else{switch(ag(n)){case 1:r=ad;break;case 4:r=ng;break;case 16:r=qa;break;case 536870912:r=og;break;default:r=qa}r=Oy(r,Iy.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Iy(t,e){if(La=-1,Ma=0,G&6)throw Error(C(327));var r=t.callbackNode;if(Hn()&&t.callbackNode!==r)return null;var n=Ka(t,t===Se?xe:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=ui(t,n);else{e=n;var o=G;G|=2;var s=Sy();(Se!==t||xe!==e)&&(qt=null,to=me()+500,tn(t,e));do try{K0();break}catch(i){Ey(t,i)}while(1);wd(),ii.current=s,G=o,ve!==null?e=0:(Se=null,xe=0,e=Ce)}if(e!==0){if(e===2&&(o=Fc(t),o!==0&&(n=o,e=fu(t,o))),e===1)throw r=gs,tn(t,0),pr(t,n),rt(t,me()),r;if(e===6)pr(t,n);else{if(o=t.current.alternate,!(n&30)&&!H0(o)&&(e=ui(t,n),e===2&&(s=Fc(t),s!==0&&(n=s,e=fu(t,s))),e===1))throw r=gs,tn(t,0),pr(t,n),rt(t,me()),r;switch(t.finishedWork=o,t.finishedLanes=n,e){case 0:case 1:throw Error(C(345));case 2:Kr(t,Xe,qt);break;case 3:if(pr(t,n),(n&130023424)===n&&(e=Ad+500-me(),10<e)){if(Ka(t,0)!==0)break;if(o=t.suspendedLanes,(o&n)!==n){Ge(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=Gc(Kr.bind(null,t,Xe,qt),e);break}Kr(t,Xe,qt);break;case 4:if(pr(t,n),(n&4194240)===n)break;for(e=t.eventTimes,o=-1;0<n;){var a=31-Pt(n);s=1<<a,a=e[a],a>o&&(o=a),n&=~s}if(n=o,n=me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*B0(n/1960))-n,10<n){t.timeoutHandle=Gc(Kr.bind(null,t,Xe,qt),n);break}Kr(t,Xe,qt);break;case 5:Kr(t,Xe,qt);break;default:throw Error(C(329))}}}return rt(t,me()),t.callbackNode===r?Iy.bind(null,t):null}function fu(t,e){var r=Ko;return t.current.memoizedState.isDehydrated&&(tn(t,e).flags|=256),t=ui(t,e),t!==2&&(e=Xe,Xe=r,e!==null&&mu(e)),t}function mu(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function H0(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],s=o.getSnapshot;o=o.value;try{if(!Tt(s(),o))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Nd,e&=~Vi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Pt(e),n=1<<r;t[r]=-1,e&=~n}}function Jp(t){if(G&6)throw Error(C(327));Hn();var e=Ka(t,0);if(!(e&1))return rt(t,me()),null;var r=ui(t,e);if(t.tag!==0&&r===2){var n=Fc(t);n!==0&&(e=n,r=fu(t,n))}if(r===1)throw r=gs,tn(t,0),pr(t,e),rt(t,me()),r;if(r===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,Xe,qt),rt(t,me()),null}function $d(t,e){var r=G;G|=1;try{return t(e)}finally{G=r,G===0&&(to=me()+500,Mi&&zr())}}function cn(t){mr!==null&&mr.tag===0&&!(G&6)&&Hn();var e=G;G|=1;var r=bt.transition,n=X;try{if(bt.transition=null,X=1,t)return t()}finally{X=n,bt.transition=r,G=e,!(G&6)&&zr()}}function Ld(){it=Mn.current,ne(Mn)}function tn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,b0(r)),ve!==null)for(r=ve.return;r!==null;){var n=r;switch(gd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Xa();break;case 3:Zn(),ne(et),ne(He),Sd();break;case 5:Ed(n);break;case 4:Zn();break;case 13:ne(ce);break;case 19:ne(ce);break;case 10:bd(n.type._context);break;case 22:case 23:Ld()}r=r.return}if(Se=t,ve=t=Er(t.current,null),xe=it=e,Ce=0,gs=null,Nd=Vi=ln=0,Xe=Ko=null,Qr!==null){for(e=0;e<Qr.length;e++)if(r=Qr[e],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=o,n.next=a}r.pending=n}Qr=null}return t}function Ey(t,e){do{var r=ve;try{if(wd(),Na.current=ai,si){for(var n=ue.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}si=!1}if(an=0,Ee=we=ue=null,Ho=!1,ps=0,_d.current=null,r===null||r.return===null){Ce=1,gs=e,ve=null;break}e:{var s=t,a=r.return,i=r,l=e;if(e=xe,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=i,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=jp(a);if(g!==null){g.flags&=-257,Fp(g,a,i,s,e),g.mode&1&&zp(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){zp(s,c,e),Md();break e}l=Error(C(426))}}else if(ae&&i.mode&1){var D=jp(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Fp(D,a,i,s,e),yd(eo(l,i));break e}}s=l=eo(l,i),Ce!==4&&(Ce=2),Ko===null?Ko=[s]:Ko.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=iy(s,l,e);xp(s,f);break e;case 1:i=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kr===null||!kr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ly(s,i,e);xp(s,w);break e}}s=s.return}while(s!==null)}Py(r)}catch(S){e=S,ve===r&&r!==null&&(ve=r=r.return);continue}break}while(1)}function Sy(){var t=ii.current;return ii.current=ai,t===null?ai:t}function Md(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Se===null||!(ln&268435455)&&!(Vi&268435455)||pr(Se,xe)}function ui(t,e){var r=G;G|=2;var n=Sy();(Se!==t||xe!==e)&&(qt=null,tn(t,e));do try{q0();break}catch(o){Ey(t,o)}while(1);if(wd(),G=r,ii.current=n,ve!==null)throw Error(C(261));return Se=null,xe=0,Ce}function q0(){for(;ve!==null;)Dy(ve)}function K0(){for(;ve!==null&&!y1();)Dy(ve)}function Dy(t){var e=Ty(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?Py(t):ve=e,_d.current=null}function Py(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=j0(r,e),r!==null){r.flags&=32767,ve=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,ve=null;return}}else if(r=z0(r,e,it),r!==null){ve=r;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Ce===0&&(Ce=5)}function Kr(t,e,r){var n=X,o=bt.transition;try{bt.transition=null,X=1,W0(t,e,r,n)}finally{bt.transition=o,X=n}return null}function W0(t,e,r,n){do Hn();while(mr!==null);if(G&6)throw Error(C(327));r=t.finishedWork;var o=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(P1(t,s),t===Se&&(ve=Se=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ga||(ga=!0,Oy(qa,function(){return Hn(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var a=X;X=1;var i=G;G|=4,_d.current=null,V0(t,r),Cy(r,t),p0(Kc),Wa=!!qc,Kc=qc=null,t.current=r,U0(r),v1(),G=i,X=a,bt.transition=s}else t.current=r;if(ga&&(ga=!1,mr=t,ci=o),s=t.pendingLanes,s===0&&(kr=null),C1(r.stateNode),rt(t,me()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)o=e[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,t=hu,hu=null,t;return ci&1&&t.tag!==0&&Hn(),s=t.pendingLanes,s&1?t===pu?Wo++:(Wo=0,pu=t):Wo=0,zr(),null}function Hn(){if(mr!==null){var t=ag(ci),e=bt.transition,r=X;try{if(bt.transition=null,X=16>t?16:t,mr===null)var n=!1;else{if(t=mr,mr=null,ci=0,G&6)throw Error(C(331));var o=G;for(G|=4,P=t.current;P!==null;){var s=P,a=s.child;if(P.flags&16){var i=s.deletions;if(i!==null){for(var l=0;l<i.length;l++){var c=i[l];for(P=c;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,P=d;else for(;P!==null;){u=P;var h=u.sibling,g=u.return;if(vy(u),u===c){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,P=a;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,P=f;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=p;P!==null;){if(i=P,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Fi(9,i)}}catch(S){pe(i,i.return,S)}if(i===a){P=null;break e}var w=i.sibling;if(w!==null){w.return=i.return,P=w;break e}P=i.return}}if(G=o,zr(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(_i,t)}catch{}n=!0}return n}finally{X=r,bt.transition=e}}return!1}function Zp(t,e,r){e=eo(r,e),e=iy(t,e,1),t=Cr(t,e,1),e=Ge(),t!==null&&(Ns(t,1,e),rt(t,e))}function pe(t,e,r){if(t.tag===3)Zp(t,t,r);else for(;e!==null;){if(e.tag===3){Zp(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kr===null||!kr.has(n))){t=eo(r,t),t=ly(e,t,1),e=Cr(e,t,1),t=Ge(),e!==null&&(Ns(e,1,t),rt(e,t));break}}e=e.return}}function G0(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&r,Se===t&&(xe&r)===r&&(Ce===4||Ce===3&&(xe&130023424)===xe&&500>me()-Ad?tn(t,0):Nd|=r),rt(t,e)}function Ry(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var r=Ge();t=Zt(t,e),t!==null&&(Ns(t,e,r),rt(t,r))}function Q0(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Ry(t,r)}function Y0(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,o=t.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(e),Ry(t,r)}var Ty;Ty=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Ze=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ze=!1,M0(t,e,r);Ze=!!(t.flags&131072)}else Ze=!1,ae&&e.flags&1048576&&_g(e,ei,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;$a(t,e),t=e.pendingProps;var o=Yn(e,He.current);Bn(e,r),o=Pd(null,e,n,t,o,r);var s=Rd();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(n)?(s=!0,Ja(e)):s=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kd(e),o.updater=zi,e.stateNode=o,o._reactInternals=e,tu(e,n,t,r),e=ou(null,e,n,!0,s,r)):(e.tag=0,ae&&s&&md(e),Ke(null,e,o,r),e=e.child),e;case 16:n=e.elementType;e:{switch($a(t,e),t=e.pendingProps,o=n._init,n=o(n._payload),e.type=n,o=e.tag=J0(n),t=Et(n,t),o){case 0:e=nu(null,e,n,t,r);break e;case 1:e=Bp(null,e,n,t,r);break e;case 11:e=Vp(null,e,n,t,r);break e;case 14:e=Up(null,e,n,Et(n.type,t),r);break e}throw Error(C(306,n,""))}return e;case 0:return n=e.type,o=e.pendingProps,o=e.elementType===n?o:Et(n,o),nu(t,e,n,o,r);case 1:return n=e.type,o=e.pendingProps,o=e.elementType===n?o:Et(n,o),Bp(t,e,n,o,r);case 3:e:{if(hy(e),t===null)throw Error(C(387));n=e.pendingProps,s=e.memoizedState,o=s.element,Lg(t,e),ni(e,n,null,r);var a=e.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){o=eo(Error(C(423)),e),e=Hp(t,e,n,r,o);break e}else if(n!==o){o=eo(Error(C(424)),e),e=Hp(t,e,n,r,o);break e}else for(lt=br(e.stateNode.containerInfo.firstChild),ut=e,ae=!0,Dt=null,r=Fg(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xn(),n===o){e=er(t,e,r);break e}Ke(t,e,n,r)}e=e.child}return e;case 5:return Vg(e),t===null&&Jc(e),n=e.type,o=e.pendingProps,s=t!==null?t.memoizedProps:null,a=o.children,Wc(n,o)?a=null:s!==null&&Wc(n,s)&&(e.flags|=32),dy(t,e),Ke(t,e,a,r),e.child;case 6:return t===null&&Jc(e),null;case 13:return py(t,e,r);case 4:return Id(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Jn(e,null,n,r):Ke(t,e,n,r),e.child;case 11:return n=e.type,o=e.pendingProps,o=e.elementType===n?o:Et(n,o),Vp(t,e,n,o,r);case 7:return Ke(t,e,e.pendingProps,r),e.child;case 8:return Ke(t,e,e.pendingProps.children,r),e.child;case 12:return Ke(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,o=e.pendingProps,s=e.memoizedProps,a=o.value,ee(ti,n._currentValue),n._currentValue=a,s!==null)if(Tt(s.value,a)){if(s.children===o.children&&!et.current){e=er(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){a=s.child;for(var l=i.firstContext;l!==null;){if(l.context===n){if(s.tag===1){l=Yt(-1,r&-r),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Zc(s.return,r,e),i.lanes|=r;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(C(341));a.lanes|=r,i=a.alternate,i!==null&&(i.lanes|=r),Zc(a,r,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ke(t,e,o.children,r),e=e.child}return e;case 9:return o=e.type,n=e.pendingProps.children,Bn(e,r),o=Ct(o),n=n(o),e.flags|=1,Ke(t,e,n,r),e.child;case 14:return n=e.type,o=Et(n,e.pendingProps),o=Et(n.type,o),Up(t,e,n,o,r);case 15:return cy(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,o=e.pendingProps,o=e.elementType===n?o:Et(n,o),$a(t,e),e.tag=1,tt(n)?(t=!0,Ja(e)):t=!1,Bn(e,r),zg(e,n,o),tu(e,n,o,r),ou(null,e,n,!0,t,r);case 19:return fy(t,e,r);case 22:return uy(t,e,r)}throw Error(C(156,e.tag))};function Oy(t,e){return rg(t,e)}function X0(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(t,e,r,n){return new X0(t,e,r,n)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function J0(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===od)return 14}return 2}function Er(t,e){var r=t.alternate;return r===null?(r=wt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function za(t,e,r,n,o,s){var a=2;if(n=t,typeof t=="function")zd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Pn:return rn(r.children,o,s,e);case rd:a=8,o|=8;break;case Sc:return t=wt(12,r,e,o|2),t.elementType=Sc,t.lanes=s,t;case Dc:return t=wt(13,r,e,o),t.elementType=Dc,t.lanes=s,t;case Pc:return t=wt(19,r,e,o),t.elementType=Pc,t.lanes=s,t;case jm:return Ui(r,o,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mm:a=10;break e;case zm:a=9;break e;case nd:a=11;break e;case od:a=14;break e;case ur:a=16,n=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=wt(a,r,e,o),e.elementType=t,e.type=n,e.lanes=s,e}function rn(t,e,r,n){return t=wt(7,t,n,e),t.lanes=r,t}function Ui(t,e,r,n){return t=wt(22,t,n,e),t.elementType=jm,t.lanes=r,t.stateNode={isHidden:!1},t}function Xl(t,e,r){return t=wt(6,t,null,e),t.lanes=r,t}function Jl(t,e,r){return e=wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Z0(t,e,r,n,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function jd(t,e,r,n,o,s,a,i,l){return t=new Z0(t,e,r,i,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function eC(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function xy(t){if(!t)return xr;t=t._reactInternals;e:{if(vn(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var r=t.type;if(tt(r))return Og(t,r,e)}return e}function _y(t,e,r,n,o,s,a,i,l){return t=jd(r,n,!0,t,o,s,a,i,l),t.context=xy(null),r=t.current,n=Ge(),o=Ir(r),s=Yt(n,o),s.callback=e??null,Cr(r,s,o),t.current.lanes=o,Ns(t,o,n),rt(t,n),t}function Bi(t,e,r,n){var o=e.current,s=Ge(),a=Ir(o);return r=xy(r),e.context===null?e.context=r:e.pendingContext=r,e=Yt(s,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Cr(o,e,a),t!==null&&(Rt(t,o,a,s),_a(t,o,a)),a}function di(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ef(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Fd(t,e){ef(t,e),(t=t.alternate)&&ef(t,e)}function tC(){return null}var Ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Hi.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Bi(t,e,null,null)};Hi.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cn(function(){Bi(null,t,null,null)}),e[Jt]=null}};function Hi(t){this._internalRoot=t}Hi.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<hr.length&&e!==0&&e<hr[r].priority;r++);hr.splice(r,0,t),r===0&&dg(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tf(){}function rC(t,e,r,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var c=di(a);s.call(c)}}var a=_y(e,n,t,0,null,!1,!1,"",tf);return t._reactRootContainer=a,t[Jt]=a.current,ls(t.nodeType===8?t.parentNode:t),cn(),a}for(;o=t.lastChild;)t.removeChild(o);if(typeof n=="function"){var i=n;n=function(){var c=di(l);i.call(c)}}var l=jd(t,0,!1,null,null,!1,!1,"",tf);return t._reactRootContainer=l,t[Jt]=l.current,ls(t.nodeType===8?t.parentNode:t),cn(function(){Bi(e,l,r,n)}),l}function Ki(t,e,r,n,o){var s=r._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var i=o;o=function(){var l=di(a);i.call(l)}}Bi(e,a,t,o)}else a=rC(r,e,t,o,n);return di(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=No(e.pendingLanes);r!==0&&(id(e,r|1),rt(e,me()),!(G&6)&&(to=me()+500,zr()))}break;case 13:cn(function(){var n=Zt(t,1);if(n!==null){var o=Ge();Rt(n,t,1,o)}}),Fd(t,1)}};ld=function(t){if(t.tag===13){var e=Zt(t,134217728);if(e!==null){var r=Ge();Rt(e,t,134217728,r)}Fd(t,134217728)}};lg=function(t){if(t.tag===13){var e=Ir(t),r=Zt(t,e);if(r!==null){var n=Ge();Rt(r,t,e,n)}Fd(t,e)}};cg=function(){return X};ug=function(t,e){var r=X;try{return X=t,e()}finally{X=r}};Mc=function(t,e,r){switch(e){case"input":if(Oc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var o=Li(n);if(!o)throw Error(C(90));Vm(n),Oc(n,o)}}}break;case"textarea":Bm(t,r);break;case"select":e=r.value,e!=null&&jn(t,!!r.multiple,e,!1)}};Ym=$d;Xm=cn;var nC={usingClientEntryPoint:!1,Events:[$s,xn,Li,Gm,Qm,$d]},Ro={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oC={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||tC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{_i=ya.inject(oC),Mt=ya}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nC;ft.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(C(200));return eC(t,e,null,r)};ft.createRoot=function(t,e){if(!Ud(t))throw Error(C(299));var r=!1,n="",o=Ny;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=jd(t,1,!1,null,null,r,!1,n,o),t[Jt]=e.current,ls(t.nodeType===8?t.parentNode:t),new Vd(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=eg(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return cn(t)};ft.hydrate=function(t,e,r){if(!qi(e))throw Error(C(200));return Ki(null,t,e,!0,r)};ft.hydrateRoot=function(t,e,r){if(!Ud(t))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,o=!1,s="",a=Ny;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=_y(e,null,t,1,r??null,o,!1,s,a),t[Jt]=e.current,ls(t),n)for(t=0;t<n.length;t++)r=n[t],o=r._getVersion,o=o(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,o]:e.mutableSourceEagerHydrationData.push(r,o);return new Hi(e)};ft.render=function(t,e,r){if(!qi(e))throw Error(C(200));return Ki(null,t,e,!1,r)};ft.unmountComponentAtNode=function(t){if(!qi(t))throw Error(C(40));return t._reactRootContainer?(cn(function(){Ki(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};ft.unstable_batchedUpdates=$d;ft.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!qi(r))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Ki(t,e,r,!1,n)};ft.version="18.2.0-next-9e3b772b8-20220608";function Ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ay)}catch(t){console.error(t)}}Ay(),_m.exports=ft;var sC=_m.exports,rf=sC;Ic.createRoot=rf.createRoot,Ic.hydrateRoot=rf.hydrateRoot;/**
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
 */const $y=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):(o&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128)}return e},aC=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const o=t[r++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){const s=t[r++];e[n++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=t[r++],a=t[r++],i=t[r++],l=((o&7)<<18|(s&63)<<12|(a&63)<<6|i&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=t[r++],a=t[r++];e[n++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<t.length;o+=3){const s=t[o],a=o+1<t.length,i=a?t[o+1]:0,l=o+2<t.length,c=l?t[o+2]:0,u=s>>2,d=(s&3)<<4|i>>4;let h=(i&15)<<2|c>>6,g=c&63;l||(g=64,a||(h=64)),n.push(r[u],r[d],r[h],r[g])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<t.length;){const s=r[t.charAt(o++)],i=o<t.length?r[t.charAt(o)]:0;++o;const c=o<t.length?r[t.charAt(o)]:64;++o;const d=o<t.length?r[t.charAt(o)]:64;if(++o,s==null||i==null||c==null||d==null)throw new iC;const h=s<<2|i>>4;if(n.push(h),c!==64){const g=i<<4&240|c>>2;if(n.push(g),d!==64){const y=c<<6&192|d;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=$y(t);return Ly.encodeByteArray(e,!0)},hi=function(t){return lC(t).replace(/\./g,"")},cC=function(t){try{return Ly.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=()=>uC().__FIREBASE_DEFAULTS__,hC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cC(t[1]);return e&&JSON.parse(e)},My=()=>{try{return dC()||hC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fC=t=>{var e,r;return(r=(e=My())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},mC=t=>{const e=fC(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},zy=()=>{var t;return(t=My())===null||t===void 0?void 0:t.config};/**
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
 */class gC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function yC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",o=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),i="";return[hi(JSON.stringify(r)),hi(JSON.stringify(a)),i].join(".")}function vC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jy(){try{return typeof indexedDB=="object"}catch{return!1}}function Fy(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var s;e(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}function wC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bC="FirebaseError";class jr extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=bC,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},o=`${this.service}/${e}`,s=this.errors[e],a=s?CC(s,n):"Error",i=`${this.serviceName}: ${a} (${o}).`;return new jr(o,i,n)}}function CC(t,e){return t.replace(kC,(r,n)=>{const o=e[n];return o!=null?String(o):`<${n}?>`})}const kC=/\{\$([^}]+)}/g;function pi(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const o of r){if(!n.includes(o))return!1;const s=t[o],a=e[o];if(nf(s)&&nf(a)){if(!pi(s,a))return!1}else if(s!==a)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function nf(t){return t!==null&&typeof t=="object"}/**
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
 */const IC=1e3,EC=2,SC=4*60*60*1e3,DC=.5;function of(t,e=IC,r=EC){const n=e*Math.pow(r,t),o=Math.round(DC*n*(Math.random()-.5)*2);return Math.min(SC,n+o)}/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class PC{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new gC;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&n.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TC(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:o});n.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[s,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);n===i&&a.resolve(o)}return o}onInit(e,r){var n;const o=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&e(a,o),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const o of n)try{o(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:RC(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RC(t){return t===Wr?void 0:t}function TC(t){return t.instantiationMode==="EAGER"}/**
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
 */class OC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new PC(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const xC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},_C=Y.INFO,NC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},AC=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),o=NC[e];if(o)console[o](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=AC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const $C=(t,e)=>e.some(r=>t instanceof r);let sf,af;function LC(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,gu=new WeakMap,Uy=new WeakMap,Zl=new WeakMap,Hd=new WeakMap;function zC(t){const e=new Promise((r,n)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{r(Sr(t.result)),o()},a=()=>{n(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&Vy.set(r,t)}).catch(()=>{}),Hd.set(e,t),e}function jC(t){if(gu.has(t))return;const e=new Promise((r,n)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{r(),o()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});gu.set(t,e)}let yu={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uy.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Sr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FC(t){yu=t(yu)}function VC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(ec(this),e,...r);return Uy.set(n,e.sort?e.sort():[e]),Sr(n)}:MC().includes(t)?function(...e){return t.apply(ec(this),e),Sr(Vy.get(this))}:function(...e){return Sr(t.apply(ec(this),e))}}function UC(t){return typeof t=="function"?VC(t):(t instanceof IDBTransaction&&jC(t),$C(t,LC())?new Proxy(t,yu):t)}function Sr(t){if(t instanceof IDBRequest)return zC(t);if(Zl.has(t))return Zl.get(t);const e=UC(t);return e!==t&&(Zl.set(t,e),Hd.set(e,t)),e}const ec=t=>Hd.get(t);function BC(t,e,{blocked:r,upgrade:n,blocking:o,terminated:s}={}){const a=indexedDB.open(t,e),i=Sr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Sr(a.result),l.oldVersion,l.newVersion,Sr(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),i.then(l=>{s&&l.addEventListener("close",()=>s()),o&&l.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),i}const HC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],tc=new Map;function lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=qC.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||HC.includes(r)))return;const s=async function(a,...i){const l=this.transaction(a,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(i.shift())),(await Promise.all([c[r](...i),o&&l.done]))[0]};return tc.set(e,s),s}FC(t=>({...t,get:(e,r,n)=>lf(e,r)||t.get(e,r,n),has:(e,r)=>!!lf(e,r)||t.has(e,r)}));/**
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
 */class KC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(WC(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",cf="0.9.13";/**
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
 */const un=new Bd("@firebase/app"),GC="@firebase/app-compat",QC="@firebase/analytics-compat",YC="@firebase/analytics",XC="@firebase/app-check-compat",JC="@firebase/app-check",ZC="@firebase/auth",ek="@firebase/auth-compat",tk="@firebase/database",rk="@firebase/database-compat",nk="@firebase/functions",ok="@firebase/functions-compat",sk="@firebase/installations",ak="@firebase/installations-compat",ik="@firebase/messaging",lk="@firebase/messaging-compat",ck="@firebase/performance",uk="@firebase/performance-compat",dk="@firebase/remote-config",hk="@firebase/remote-config-compat",pk="@firebase/storage",fk="@firebase/storage-compat",mk="@firebase/firestore",gk="@firebase/firestore-compat",yk="firebase",vk="9.23.0";/**
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
 */const wu="[DEFAULT]",wk={[vu]:"fire-core",[GC]:"fire-core-compat",[YC]:"fire-analytics",[QC]:"fire-analytics-compat",[JC]:"fire-app-check",[XC]:"fire-app-check-compat",[ZC]:"fire-auth",[ek]:"fire-auth-compat",[tk]:"fire-rtdb",[rk]:"fire-rtdb-compat",[nk]:"fire-fn",[ok]:"fire-fn-compat",[sk]:"fire-iid",[ak]:"fire-iid-compat",[ik]:"fire-fcm",[lk]:"fire-fcm-compat",[ck]:"fire-perf",[uk]:"fire-perf-compat",[dk]:"fire-rc",[hk]:"fire-rc-compat",[pk]:"fire-gcs",[fk]:"fire-gcs-compat",[mk]:"fire-fst",[gk]:"fire-fst-compat","fire-js":"fire-js",[yk]:"fire-js-all"};/**
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
 */const fi=new Map,bu=new Map;function bk(t,e){try{t.container.addComponent(e)}catch(r){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function _r(t){const e=t.name;if(bu.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;bu.set(e,t);for(const r of fi.values())bk(r,t);return!0}function Ms(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ck={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dr=new Wi("app","Firebase",Ck);/**
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
 */class kk{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ik=vk;function By(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),o=n.name;if(typeof o!="string"||!o)throw Dr.create("bad-app-name",{appName:String(o)});if(r||(r=zy()),!r)throw Dr.create("no-options");const s=fi.get(o);if(s){if(pi(r,s.options)&&pi(n,s.config))return s;throw Dr.create("duplicate-app",{appName:o})}const a=new OC(o);for(const l of bu.values())a.addComponent(l);const i=new kk(r,n,a);return fi.set(o,i),i}function Hy(t=wu){const e=fi.get(t);if(!e&&t===wu&&zy())return By();if(!e)throw Dr.create("no-app",{appName:t});return e}function jt(t,e,r){var n;let o=(n=wk[t])!==null&&n!==void 0?n:t;r&&(o+=`-${r}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const i=[`Unable to register library "${o}" with version "${e}":`];s&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&i.push("and"),a&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(i.join(" "));return}_r(new tr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Ek="firebase-heartbeat-database",Sk=1,ys="firebase-heartbeat-store";let rc=null;function qy(){return rc||(rc=BC(Ek,Sk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),rc}async function Dk(t){try{return await(await qy()).transaction(ys).objectStore(ys).get(Ky(t))}catch(e){if(e instanceof jr)un.warn(e.message);else{const r=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(r.message)}}}async function uf(t,e){try{const n=(await qy()).transaction(ys,"readwrite");await n.objectStore(ys).put(e,Ky(t)),await n.done}catch(r){if(r instanceof jr)un.warn(r.message);else{const n=Dr.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});un.warn(n.message)}}}function Ky(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pk=1024,Rk=30*24*60*60*1e3;class Tk{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new xk(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=df();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(o=>o.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=Rk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=df(),{heartbeatsToSend:r,unsentEntries:n}=Ok(this._heartbeatsCache.heartbeats),o=hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function df(){return new Date().toISOString().substring(0,10)}function Ok(t,e=Pk){const r=[];let n=t.slice();for(const o of t){const s=r.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),hf(r)>e){s.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),hf(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class xk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jy()?Fy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return uf(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return uf(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function hf(t){return hi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _k(t){_r(new tr("platform-logger",e=>new KC(e),"PRIVATE")),_r(new tr("heartbeat",e=>new Tk(e),"PRIVATE")),jt(vu,cf,t),jt(vu,cf,"esm2017"),jt("fire-js","")}_k("");var Nk="firebase",Ak="9.23.0";/**
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
 */jt(Nk,Ak,"app");var $k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,qd=qd||{},z=$k||self;function Gi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lk(t){return Object.prototype.hasOwnProperty.call(t,nc)&&t[nc]||(t[nc]=++Mk)}var nc="closure_uid_"+(1e9*Math.random()>>>0),Mk=0;function zk(t,e,r){return t.call.apply(t.bind,arguments)}function jk(t,e,r){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,n),t.apply(e,o)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=zk:Ve=jk,Ve.apply(null,arguments)}function va(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var n=r.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function Pe(t,e){function r(){}r.prototype=e.prototype,t.$=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.ac=function(n,o,s){for(var a=Array(arguments.length-2),i=2;i<arguments.length;i++)a[i-2]=arguments[i];return e.prototype[o].apply(n,a)}}function Fr(){this.s=this.s,this.o=this.o}var Fk=0;Fr.prototype.s=!1;Fr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fk!=0)&&Lk(this)};Fr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let r=0;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1};function Kd(t){const e=t.length;if(0<e){const r=Array(e);for(let n=0;n<e;n++)r[n]=t[n];return r}return[]}function pf(t,e){for(let r=1;r<arguments.length;r++){const n=arguments[r];if(Gi(n)){const o=t.length||0,s=n.length||0;t.length=o+s;for(let a=0;a<s;a++)t[o+a]=n[a]}else t.push(n)}}function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Vk=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function vs(t){return/^[\s\xa0]*$/.test(t)}function Qi(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function At(t){return Qi().indexOf(t)!=-1}function Wd(t){return Wd[" "](t),t}Wd[" "]=function(){};function Uk(t,e){var r=AI;return Object.prototype.hasOwnProperty.call(r,t)?r[t]:r[t]=e(t)}var Bk=At("Opera"),ro=At("Trident")||At("MSIE"),Gy=At("Edge"),Cu=Gy||ro,Qy=At("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),Hk=Qi().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function Yy(){var t=z.document;return t?t.documentMode:void 0}var ku;e:{var oc="",sc=function(){var t=Qi();if(Qy)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gy)return/Edge\/([\d\.]+)/.exec(t);if(ro)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Hk)return/WebKit\/(\S+)/.exec(t);if(Bk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sc&&(oc=sc?sc[1]:""),ro){var ac=Yy();if(ac!=null&&ac>parseFloat(oc)){ku=String(ac);break e}}ku=oc}var Iu;if(z.document&&ro){var ff=Yy();Iu=ff||parseInt(ku,10)||void 0}else Iu=void 0;var qk=Iu;function ws(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qy){e:{try{Wd(e.nodeName);var o=!0;break e}catch{}o=!1}o||(e=null)}}else r=="mouseover"?e=t.fromElement:r=="mouseout"&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.$.h.call(this)}}Pe(ws,Ue);var Kk={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),Wk=0;function Gk(t,e,r,n,o){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!n,this.la=o,this.key=++Wk,this.fa=this.ia=!1}function Yi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gd(t,e,r){for(const n in t)e.call(r,t[n],n,t)}function Qk(t,e){for(const r in t)e.call(void 0,t[r],r,t)}function Xy(t){const e={};for(const r in t)e[r]=t[r];return e}const mf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jy(t,e){let r,n;for(let o=1;o<arguments.length;o++){n=arguments[o];for(r in n)t[r]=n[r];for(let s=0;s<mf.length;s++)r=mf[s],Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}}function Xi(t){this.src=t,this.g={},this.h=0}Xi.prototype.add=function(t,e,r,n,o){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var a=Su(t,e,n,o);return-1<a?(e=t[a],r||(e.ia=!1)):(e=new Gk(e,this.src,s,!!n,o),e.ia=r,t.push(e)),e};function Eu(t,e){var r=e.type;if(r in t.g){var n=t.g[r],o=Wy(n,e),s;(s=0<=o)&&Array.prototype.splice.call(n,o,1),s&&(Yi(e),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Su(t,e,r,n){for(var o=0;o<t.length;++o){var s=t[o];if(!s.fa&&s.listener==e&&s.capture==!!r&&s.la==n)return o}return-1}var Qd="closure_lm_"+(1e6*Math.random()|0),ic={};function Zy(t,e,r,n,o){if(n&&n.once)return tv(t,e,r,n,o);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zy(t,e[s],r,n,o);return null}return r=Jd(r),t&&t[js]?t.O(e,r,zs(n)?!!n.capture:!!n,o):ev(t,e,r,!1,n,o)}function ev(t,e,r,n,o,s){if(!e)throw Error("Invalid event type");var a=zs(o)?!!o.capture:!!o,i=Xd(t);if(i||(t[Qd]=i=new Xi(t)),r=i.add(e,r,n,a,s),r.proxy)return r;if(n=Yk(),r.proxy=n,n.src=t,n.listener=r,t.addEventListener)Vk||(o=a),o===void 0&&(o=!1),t.addEventListener(e.toString(),n,o);else if(t.attachEvent)t.attachEvent(nv(e.toString()),n);else if(t.addListener&&t.removeListener)t.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Yk(){function t(r){return e.call(t.src,t.listener,r)}const e=Xk;return t}function tv(t,e,r,n,o){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tv(t,e[s],r,n,o);return null}return r=Jd(r),t&&t[js]?t.P(e,r,zs(n)?!!n.capture:!!n,o):ev(t,e,r,!0,n,o)}function rv(t,e,r,n,o){if(Array.isArray(e))for(var s=0;s<e.length;s++)rv(t,e[s],r,n,o);else n=zs(n)?!!n.capture:!!n,r=Jd(r),t&&t[js]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],r=Su(s,r,n,o),-1<r&&(Yi(s[r]),Array.prototype.splice.call(s,r,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Su(e,r,n,o)),(r=-1<t?e[t]:null)&&Yd(r))}function Yd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[js])Eu(e.i,t);else{var r=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(r,n,t.capture):e.detachEvent?e.detachEvent(nv(r),n):e.addListener&&e.removeListener&&e.removeListener(n),(r=Xd(e))?(Eu(r,t),r.h==0&&(r.src=null,e[Qd]=null)):Yi(t)}}}function nv(t){return t in ic?ic[t]:ic[t]="on"+t}function Xk(t,e){if(t.fa)t=!0;else{e=new ws(e,this);var r=t.listener,n=t.la||t.src;t.ia&&Yd(t),t=r.call(n,e)}return t}function Xd(t){return t=t[Qd],t instanceof Xi?t:null}var lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jd(t){return typeof t=="function"?t:(t[lc]||(t[lc]=function(e){return t.handleEvent(e)}),t[lc])}function De(){Fr.call(this),this.i=new Xi(this),this.S=this,this.J=null}Pe(De,Fr);De.prototype[js]=!0;De.prototype.removeEventListener=function(t,e,r,n){rv(this,t,e,r,n)};function _e(t,e){var r,n=t.J;if(n)for(r=[];n;n=n.J)r.push(n);if(t=t.S,n=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var o=e;e=new Ue(n,t),Jy(e,o)}if(o=!0,r)for(var s=r.length-1;0<=s;s--){var a=e.g=r[s];o=wa(a,n,!0,e)&&o}if(a=e.g=t,o=wa(a,n,!0,e)&&o,o=wa(a,n,!1,e)&&o,r)for(s=0;s<r.length;s++)a=e.g=r[s],o=wa(a,n,!1,e)&&o}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Yi(r[n]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,r,n){return this.i.add(String(t),e,!1,r,n)};De.prototype.P=function(t,e,r,n){return this.i.add(String(t),e,!0,r,n)};function wa(t,e,r,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var o=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.fa&&a.capture==r){var i=a.listener,l=a.la||a.src;a.ia&&Eu(t.i,a),o=i.call(l,n)!==!1&&o}}return o&&!n.defaultPrevented}var Zd=z.JSON.stringify;class Jk{constructor(e,r){this.i=e,this.j=r,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Zk(){var t=eh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eI{constructor(){this.h=this.g=null}add(e,r){const n=ov.get();n.set(e,r),this.h?this.h.next=n:this.g=n,this.h=n}}var ov=new Jk(()=>new tI,t=>t.reset());class tI{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}function rI(t){var e=1;t=t.split(":");const r=[];for(;0<e&&t.length;)r.push(t.shift()),e--;return t.length&&r.push(t.join(":")),r}function nI(t){z.setTimeout(()=>{throw t},0)}let bs,Cs=!1,eh=new eI,sv=()=>{const t=z.Promise.resolve(void 0);bs=()=>{t.then(oI)}};var oI=()=>{for(var t;t=Zk();){try{t.h.call(t.g)}catch(r){nI(r)}var e=ov;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cs=!1};function Ji(t,e){De.call(this),this.h=t||1,this.g=e||z,this.j=Ve(this.qb,this),this.l=Date.now()}Pe(Ji,De);E=Ji.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(th(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function th(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}E.N=function(){Ji.$.N.call(this),th(this),delete this.g};function rh(t,e,r){if(typeof t=="function")r&&(t=Ve(t,r));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function av(t){t.g=rh(()=>{t.g=null,t.i&&(t.i=!1,av(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sI extends Fr{constructor(e,r){super(),this.m=e,this.j=r,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:av(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Fr.call(this),this.h=t,this.g={}}Pe(ks,Fr);var gf=[];function iv(t,e,r,n){Array.isArray(r)||(r&&(gf[0]=r.toString()),r=gf);for(var o=0;o<r.length;o++){var s=Zy(e,r[o],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lv(t){Gd(t.g,function(e,r){this.g.hasOwnProperty(r)&&Yd(e)},t),t.g={}}ks.prototype.N=function(){ks.$.N.call(this),lv(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zi(){this.g=!0}Zi.prototype.Ea=function(){this.g=!1};function aI(t,e,r,n,o,s){t.info(function(){if(t.g)if(s)for(var a="",i=s.split("&"),l=0;l<i.length;l++){var c=i[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");a=2<=d.length&&d[1]=="type"?a+(u+"="+c+"&"):a+(u+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+n+") [attempt "+o+"]: "+e+`
`+r+`
`+a})}function iI(t,e,r,n,o,s,a){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+o+"]: "+e+`
`+r+`
`+s+" "+a})}function zn(t,e,r,n){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cI(t,r)+(n?" "+n:"")})}function lI(t,e){t.info(function(){return"TIMEOUT: "+e})}Zi.prototype.info=function(){};function cI(t,e){if(!t.g)return e;if(!e)return null;try{var r=JSON.parse(e);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(2>n.length)){var o=n[1];if(Array.isArray(o)&&!(1>o.length)){var s=o[0];if(s!="noop"&&s!="stop"&&s!="close")for(var a=1;a<o.length;a++)o[a]=""}}}}return Zd(r)}catch{return e}}var wn={},yf=null;function el(){return yf=yf||new De}wn.Ta="serverreachability";function cv(t){Ue.call(this,wn.Ta,t)}Pe(cv,Ue);function Is(t){const e=el();_e(e,new cv(e))}wn.STAT_EVENT="statevent";function uv(t,e){Ue.call(this,wn.STAT_EVENT,t),this.stat=e}Pe(uv,Ue);function We(t){const e=el();_e(e,new uv(e,t))}wn.Ua="timingevent";function dv(t,e){Ue.call(this,wn.Ua,t),this.size=e}Pe(dv,Ue);function Fs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var tl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nh(){}nh.prototype.h=null;function vf(t){return t.h||(t.h=t.i())}function pv(){}var Vs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oh(){Ue.call(this,"d")}Pe(oh,Ue);function sh(){Ue.call(this,"c")}Pe(sh,Ue);var Du;function rl(){}Pe(rl,nh);rl.prototype.g=function(){return new XMLHttpRequest};rl.prototype.i=function(){return{}};Du=new rl;function Us(t,e,r,n){this.l=t,this.j=e,this.m=r,this.W=n||1,this.U=new ks(this),this.P=uI,t=Cu?125:void 0,this.V=new Ji(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fv}function fv(){this.i=null,this.g="",this.h=!1}var uI=45e3,Pu={},mi={};E=Us.prototype;E.setTimeout=function(t){this.P=t};function Ru(t,e,r){t.L=1,t.v=ol(rr(e)),t.s=r,t.S=!0,mv(t,null)}function mv(t,e){t.G=Date.now(),Bs(t),t.A=rr(t.v);var r=t.A,n=t.W;Array.isArray(n)||(n=[String(n)]),Iv(r.i,"t",n),t.C=0,r=t.l.J,t.h=new fv,t.g=Hv(t.l,r?e:null,!t.s),0<t.O&&(t.M=new sI(Ve(t.Pa,t,t.g),t.O)),iv(t.U,t.g,"readystatechange",t.nb),e=t.I?Xy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Is(),aI(t.j,t.u,t.A,t.m,t.W,t.s)}E.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};E.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Cu||this.g&&(this.h.h||this.g.ja()||kf(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?Is(3):Is(2)),nl(this);var r=this.g.da();this.ca=r;t:if(gv(this)){var n=kf(this.g);t="";var o=n.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Go(this);var a="";break t}this.h.i=new z.TextDecoder}for(e=0;e<o;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==o-1});n.splice(0,o),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=r==200,iI(this.j,this.u,this.A,this.m,this.W,u,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var i,l=this.g;if((i=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vs(i)){var c=i;break t}}c=null}if(r=c)zn(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tu(this,r);else{this.i=!1,this.o=3,We(12),Xr(this),Go(this);break e}}this.S?(yv(this,u,a),Cu&&this.i&&u==3&&(iv(this.U,this.V,"tick",this.mb),this.V.start())):(zn(this.j,this.m,a,null),Tu(this,a)),u==4&&Xr(this),this.i&&!this.J&&(u==4?Fv(this.l,this):(this.i=!1,Bs(this)))}else xI(this.g),r==400&&0<a.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),Xr(this),Go(this)}}}catch{}finally{}};function gv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function yv(t,e,r){let n=!0,o;for(;!t.J&&t.C<r.length;)if(o=dI(t,r),o==mi){e==4&&(t.o=4,We(14),n=!1),zn(t.j,t.m,null,"[Incomplete Response]");break}else if(o==Pu){t.o=4,We(15),zn(t.j,t.m,r,"[Invalid Chunk]"),n=!1;break}else zn(t.j,t.m,o,null),Tu(t,o);gv(t)&&o!=mi&&o!=Pu&&(t.h.g="",t.C=0),e!=4||r.length!=0||t.h.h||(t.o=1,We(16),n=!1),t.i=t.i&&n,n?0<r.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),dh(e),e.M=!0,We(11))):(zn(t.j,t.m,r,"[Invalid Chunked Response]"),Xr(t),Go(t))}E.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.C<e.length&&(nl(this),yv(this,t,e),this.i&&t!=4&&Bs(this))}};function dI(t,e){var r=t.C,n=e.indexOf(`
`,r);return n==-1?mi:(r=Number(e.substring(r,n)),isNaN(r)?Pu:(n+=1,n+r>e.length?mi:(e=e.slice(n,n+r),t.C=n+r,e)))}E.cancel=function(){this.J=!0,Xr(this)};function Bs(t){t.Y=Date.now()+t.P,vv(t,t.P)}function vv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fs(Ve(t.lb,t),e)}function nl(t){t.B&&(z.clearTimeout(t.B),t.B=null)}E.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lI(this.j,this.A),this.L!=2&&(Is(),We(17)),Xr(this),this.o=2,Go(this)):vv(this,this.Y-t)};function Go(t){t.l.H==0||t.J||Fv(t.l,t)}function Xr(t){nl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,th(t.V),lv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Tu(t,e){try{var r=t.l;if(r.H!=0&&(r.g==t||Ou(r.i,t))){if(!t.K&&Ou(r.i,t)&&r.H==3){try{var n=r.Ja.g.parse(e)}catch{n=null}if(Array.isArray(n)&&n.length==3){var o=n;if(o[0]==0){e:if(!r.u){if(r.g)if(r.g.G+3e3<t.G)vi(r),il(r);else break e;uh(r),We(18)}}else r.Fa=o[1],0<r.Fa-r.V&&37500>o[2]&&r.G&&r.A==0&&!r.v&&(r.v=Fs(Ve(r.ib,r),6e3));if(1>=Dv(r.i)&&r.oa){try{r.oa()}catch{}r.oa=void 0}}else Jr(r,11)}else if((t.K||r.g==t)&&vi(r),!vs(e))for(o=r.Ja.g.parse(e),e=0;e<o.length;e++){let c=o[e];if(r.V=c[0],c=c[1],r.H==2)if(c[0]=="c"){r.K=c[1],r.pa=c[2];const u=c[3];u!=null&&(r.ra=u,r.l.info("VER="+r.ra));const d=c[4];d!=null&&(r.Ga=d,r.l.info("SVER="+r.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(n=1.5*h,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=n.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ah(s,s.h),s.h=null))}if(n.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(n.Da=v,re(n.I,n.F,v))}}r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-t.G,r.l.info("Handshake RTT: "+r.S+"ms")),n=r;var a=t;if(n.wa=Bv(n,n.J?n.pa:null,n.Y),a.K){Pv(n.i,a);var i=a,l=n.L;l&&i.setTimeout(l),i.B&&(nl(i),Bs(i)),n.g=a}else zv(n);0<r.j.length&&ll(r)}else c[0]!="stop"&&c[0]!="close"||Jr(r,7);else r.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jr(r,7):ch(r):c[0]!="noop"&&r.h&&r.h.Aa(c),r.A=0)}}Is(4)}catch{}}function hI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Gi(t)){for(var e=[],r=t.length,n=0;n<r;n++)e.push(t[n]);return e}e=[],r=0;for(n in t)e[r++]=t[n];return e}function pI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Gi(t)||typeof t=="string"){var e=[];t=t.length;for(var r=0;r<t;r++)e.push(r);return e}e=[],r=0;for(const n in t)e[r++]=n;return e}}}function wv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Gi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var r=pI(t),n=hI(t),o=n.length,s=0;s<o;s++)e.call(void 0,n[s],r&&r[s],t)}var bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fI(t,e){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var n=t[r].indexOf("="),o=null;if(0<=n){var s=t[r].substring(0,n);o=t[r].substring(n+1)}else s=t[r];e(s,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function nn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nn){this.h=t.h,gi(this,t.j),this.s=t.s,this.g=t.g,yi(this,t.m),this.l=t.l;var e=t.i,r=new Es;r.i=e.i,e.g&&(r.g=new Map(e.g),r.h=e.h),wf(this,r),this.o=t.o}else t&&(e=String(t).match(bv))?(this.h=!1,gi(this,e[1]||"",!0),this.s=$o(e[2]||""),this.g=$o(e[3]||"",!0),yi(this,e[4]),this.l=$o(e[5]||"",!0),wf(this,e[6]||"",!0),this.o=$o(e[7]||"")):(this.h=!1,this.i=new Es(null,this.h))}nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lo(e,bf,!0),":");var r=this.g;return(r||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lo(e,bf,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Lo(r,r.charAt(0)=="/"?yI:gI,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.o)&&t.push("#",Lo(r,wI)),t.join("")};function rr(t){return new nn(t)}function gi(t,e,r){t.j=r?$o(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wf(t,e,r){e instanceof Es?(t.i=e,bI(t.i,t.h)):(r||(e=Lo(e,vI)),t.i=new Es(e,t.h))}function re(t,e,r){t.i.set(e,r)}function ol(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $o(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lo(t,e,r){return typeof t=="string"?(t=encodeURI(t).replace(e,mI),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bf=/[#\/\?@]/g,gI=/[#\?:]/g,yI=/[#\?]/g,vI=/[#\?@]/g,wI=/#/g;function Es(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new Map,t.h=0,t.i&&fI(t.i,function(e,r){t.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}E=Es.prototype;E.add=function(t,e){Vr(this),this.i=null,t=fo(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(e),this.h+=1,this};function Cv(t,e){Vr(t),e=fo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kv(t,e){return Vr(t),e=fo(t,e),t.g.has(e)}E.forEach=function(t,e){Vr(this),this.g.forEach(function(r,n){r.forEach(function(o){t.call(e,o,n,this)},this)},this)};E.ta=function(){Vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),r=[];for(let n=0;n<e.length;n++){const o=t[n];for(let s=0;s<o.length;s++)r.push(e[n])}return r};E.Z=function(t){Vr(this);let e=[];if(typeof t=="string")kv(this,t)&&(e=e.concat(this.g.get(fo(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)e=e.concat(t[r])}return e};E.set=function(t,e){return Vr(this),this.i=null,t=fo(this,t),kv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};E.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Iv(t,e,r){Cv(t,e),0<r.length&&(t.i=null,t.g.set(fo(t,e),Kd(r)),t.h+=r.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var r=0;r<e.length;r++){var n=e[r];const s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var o=s;a[n]!==""&&(o+="="+encodeURIComponent(String(a[n]))),t.push(o)}}return this.i=t.join("&")};function fo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bI(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach(function(r,n){var o=n.toLowerCase();n!=o&&(Cv(this,n),Iv(this,o,r))},t)),t.j=e}var CI=class{constructor(t,e){this.g=t,this.map=e}};function Ev(t){this.l=t||kI,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kI=10;function Sv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dv(t){return t.h?1:t.g?t.g.size:0}function Ou(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ah(t,e){t.g?t.g.add(e):t.h=e}function Pv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ev.prototype.cancel=function(){if(this.i=Rv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const r of t.g.values())e=e.concat(r.F);return e}return Kd(t.i)}var II=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function EI(){this.g=new II}function SI(t,e,r){const n=r||"";try{wv(t,function(o,s){let a=o;zs(o)&&(a=Zd(o)),e.push(n+s+"="+encodeURIComponent(a))})}catch(o){throw e.push(n+"type="+encodeURIComponent("_badmap")),o}}function DI(t,e){const r=new Zi;if(z.Image){const n=new Image;n.onload=va(ba,r,n,"TestLoadImage: loaded",!0,e),n.onerror=va(ba,r,n,"TestLoadImage: error",!1,e),n.onabort=va(ba,r,n,"TestLoadImage: abort",!1,e),n.ontimeout=va(ba,r,n,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else e(!1)}function ba(t,e,r,n,o){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,o(n)}catch{}}function Hs(t){this.l=t.fc||null,this.j=t.ob||!1}Pe(Hs,nh);Hs.prototype.g=function(){return new sl(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function sl(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ih,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(sl,De);var ih=0;E=sl.prototype;E.open=function(t,e){if(this.readyState!=ih)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ss(this)};E.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=ih};E.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Tv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}E.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):Ss(this),this.readyState==3&&Tv(this)}};E.Za=function(t){this.g&&(this.response=this.responseText=t,qs(this))};E.Ya=function(t){this.g&&(this.response=t,qs(this))};E.ka=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ss(t)}E.setRequestHeader=function(t,e){this.v.append(t,e)};E.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=e.next();return t.join(`\r
`)};function Ss(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PI=z.JSON.parse;function fe(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ov,this.L=this.M=!1}Pe(fe,De);var Ov="",RI=/^https?$/i,TI=["POST","PUT"];E=fe.prototype;E.Oa=function(t){this.M=t};E.ha=function(t,e,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Du.g(),this.C=this.u?vf(this.u):vf(Du),this.g.onreadystatechange=Ve(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Cf(this,s);return}if(t=r||"",r=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var o in n)r.set(o,n[o]);else if(typeof n.keys=="function"&&typeof n.get=="function")for(const s of n.keys())r.set(s,n.get(s));else throw Error("Unknown input type for opt_headers: "+String(n));n=Array.from(r.keys()).find(s=>s.toLowerCase()=="content-type"),o=z.FormData&&t instanceof z.FormData,!(0<=Wy(TI,e))||n||o||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of r)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nv(this),0<this.B&&((this.L=OI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.ua,this)):this.A=rh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cf(this,s)}};function OI(t){return ro&&typeof t.timeout=="number"&&t.ontimeout!==void 0}E.ua=function(){typeof qd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function Cf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xv(t),al(t)}function xv(t){t.F||(t.F=!0,_e(t,"complete"),_e(t,"error"))}E.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_e(this,"complete"),_e(this,"abort"),al(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),al(this,!0)),fe.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?_v(this):this.kb())};E.kb=function(){_v(this)};function _v(t){if(t.h&&typeof qd<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)rh(t.La,0,t);else if(_e(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var r;if(!(r=e)){var n;if(n=a===0){var o=String(t.I).match(bv)[1]||null;!o&&z.self&&z.self.location&&(o=z.self.location.protocol.slice(0,-1)),n=!RI.test(o?o.toLowerCase():"")}r=n}if(r)_e(t,"complete"),_e(t,"success");else{t.m=6;try{var s=2<$t(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",xv(t)}}finally{al(t)}}}}function al(t,e){if(t.g){Nv(t);const r=t.g,n=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_e(t,"ready");try{r.onreadystatechange=n}catch{}}}function Nv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}E.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}E.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PI(e)}};function kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ov:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xI(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let n=0;n<t.length;n++){if(vs(t[n]))continue;var r=rI(t[n]);const o=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const s=e[o]||[];e[o]=s,s.push(r)}Qk(e,function(n){return n.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Av(t){let e="";return Gd(t,function(r,n){e+=n,e+=":",e+=r,e+=`\r
`}),e}function lh(t,e,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=Av(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):re(t,e,r))}function To(t,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||e}function $v(t){this.Ga=0,this.j=[],this.l=new Zi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=To("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=To("baseRetryDelayMs",5e3,t),this.hb=To("retryDelaySeedMs",1e4,t),this.eb=To("forwardChannelMaxRetries",2,t),this.xa=To("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ev(t&&t.concurrentRequestLimit),this.Ja=new EI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=$v.prototype;E.ra=8;E.H=1;function ch(t){if(Lv(t),t.H==3){var e=t.W++,r=rr(t.I);if(re(r,"SID",t.K),re(r,"RID",e),re(r,"TYPE","terminate"),Ks(t,r),e=new Us(t,t.l,e),e.L=2,e.v=ol(rr(r)),r=!1,z.navigator&&z.navigator.sendBeacon)try{r=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!r&&z.Image&&(new Image().src=e.v,r=!0),r||(e.g=Hv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Bs(e)}Uv(t)}function il(t){t.g&&(dh(t),t.g.cancel(),t.g=null)}function Lv(t){il(t),t.u&&(z.clearTimeout(t.u),t.u=null),vi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ll(t){if(!Sv(t.i)&&!t.m){t.m=!0;var e=t.Na;bs||sv(),Cs||(bs(),Cs=!0),eh.add(e,t),t.C=0}}function _I(t,e){return Dv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fs(Ve(t.Na,t,e),Vv(t,t.C)),t.C++,!0)}E.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const o=new Us(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Xy(s),Jy(s,this.U)):s=this.U),this.o!==null||this.O||(o.I=s,s=null),this.P)e:{for(var e=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&(n=n.map.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=r;break e}if(e===4096||r===this.j.length-1){e=r+1;break e}}e=1e3}else e=1e3;e=Mv(this,o,e),r=rr(this.I),re(r,"RID",t),re(r,"CVER",22),this.F&&re(r,"X-HTTP-Session-Id",this.F),Ks(this,r),s&&(this.O?e="headers="+encodeURIComponent(String(Av(s)))+"&"+e:this.o&&lh(r,this.o,s)),ah(this.i,o),this.bb&&re(r,"TYPE","init"),this.P?(re(r,"$req",e),re(r,"SID","null"),o.aa=!0,Ru(o,r,null)):Ru(o,r,e),this.H=2}}else this.H==3&&(t?If(this,t):this.j.length==0||Sv(this.i)||If(this))};function If(t,e){var r;e?r=e.m:r=t.W++;const n=rr(t.I);re(n,"SID",t.K),re(n,"RID",r),re(n,"AID",t.V),Ks(t,n),t.o&&t.s&&lh(n,t.o,t.s),r=new Us(t,t.l,r,t.C+1),t.o===null&&(r.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Mv(t,r,1e3),r.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ah(t.i,r),Ru(r,n,e)}function Ks(t,e){t.na&&Gd(t.na,function(r,n){re(e,n,r)}),t.h&&wv({},function(r,n){re(e,n,r)})}function Mv(t,e,r){r=Math.min(t.j.length,r);var n=t.h?Ve(t.h.Va,t.h,t):null;e:{var o=t.j;let s=-1;for(;;){const a=["count="+r];s==-1?0<r?(s=o[0].g,a.push("ofs="+s)):s=0:a.push("ofs="+s);let i=!0;for(let l=0;l<r;l++){let c=o[l].g;const u=o[l].map;if(c-=s,0>c)s=Math.max(0,o[l].g-100),i=!1;else try{SI(u,a,"req"+c+"_")}catch{n&&n(u)}}if(i){n=a.join("&");break e}}}return t=t.j.splice(0,r),e.F=t,n}function zv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bs||sv(),Cs||(bs(),Cs=!0),eh.add(e,t),t.A=0}}function uh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fs(Ve(t.Ma,t),Vv(t,t.A)),t.A++,!0)}E.Ma=function(){if(this.u=null,jv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fs(Ve(this.jb,this),t)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),il(this),jv(this))};function dh(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function jv(t){t.g=new Us(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rr(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),Ks(t,e),t.o&&t.s&&lh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var r=t.g;t=t.pa,r.L=1,r.v=ol(rr(e)),r.s=null,r.S=!0,mv(r,t)}E.ib=function(){this.v!=null&&(this.v=null,il(this),uh(this),We(19))};function vi(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Fv(t,e){var r=null;if(t.g==e){vi(t),dh(t),t.g=null;var n=2}else if(Ou(t.i,e))r=e.F,Pv(t.i,e),n=1;else return;if(t.H!=0){if(e.i)if(n==1){r=e.s?e.s.length:0,e=Date.now()-e.G;var o=t.C;n=el(),_e(n,new dv(n,r)),ll(t)}else zv(t);else if(o=e.o,o==3||o==0&&0<e.ca||!(n==1&&_I(t,e)||n==2&&uh(t)))switch(r&&0<r.length&&(e=t.i,e.i=e.i.concat(r)),o){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function Vv(t,e){let r=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(r*=2),r*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var r=null;t.h&&(r=null);var n=Ve(t.pb,t);r||(r=new nn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||gi(r,"https"),ol(r)),DI(r.toString(),n)}else We(2);t.H=0,t.h&&t.h.za(e),Uv(t),Lv(t)}E.pb=function(t){t?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function Uv(t){if(t.H=0,t.ma=[],t.h){const e=Rv(t.i);(e.length!=0||t.j.length!=0)&&(pf(t.ma,e),pf(t.ma,t.j),t.i.i.length=0,Kd(t.j),t.j.length=0),t.h.ya()}}function Bv(t,e,r){var n=r instanceof nn?rr(r):new nn(r);if(n.g!="")e&&(n.g=e+"."+n.g),yi(n,n.m);else{var o=z.location;n=o.protocol,e=e?e+"."+o.hostname:o.hostname,o=+o.port;var s=new nn(null);n&&gi(s,n),e&&(s.g=e),o&&yi(s,o),r&&(s.l=r),n=s}return r=t.F,e=t.Da,r&&e&&re(n,r,e),re(n,"VER",t.ra),Ks(t,n),n}function Hv(t,e,r){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=r&&t.Ha&&!t.va?new fe(new Hs({ob:!0})):new fe(t.va),e.Oa(t.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function qv(){}E=qv.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function wi(){if(ro&&!(10<=Number(qk)))throw Error("Environmental error: no available transport.")}wi.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){De.call(this),this.g=new $v(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}Pe(pt,De);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,r=this.h||void 0;We(0),t.Y=e,t.na=r||{},t.G=t.aa,t.I=Bv(t,null,t.Y),ll(t)};pt.prototype.close=function(){ch(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.v&&(r={},r.__data__=Zd(t),t=r);e.j.push(new CI(e.fb++,t)),e.H==3&&ll(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,ch(this.g),delete this.g,pt.$.N.call(this)};function Kv(t){oh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const r in e){t=r;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Kv,oh);function Wv(){sh.call(this),this.status=1}Pe(Wv,sh);function mo(t){this.g=t}Pe(mo,qv);mo.prototype.Ba=function(){_e(this.g,"a")};mo.prototype.Aa=function(t){_e(this.g,new Kv(t))};mo.prototype.za=function(t){_e(this.g,new Wv)};mo.prototype.ya=function(){_e(this.g,"b")};function NI(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(Ot,NI);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cc(t,e,r){r||(r=0);var n=Array(16);if(typeof e=="string")for(var o=0;16>o;++o)n[o]=e.charCodeAt(r++)|e.charCodeAt(r++)<<8|e.charCodeAt(r++)<<16|e.charCodeAt(r++)<<24;else for(o=0;16>o;++o)n[o]=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;e=t.g[0],r=t.g[1],o=t.g[2];var s=t.g[3],a=e+(s^r&(o^s))+n[0]+3614090360&4294967295;e=r+(a<<7&4294967295|a>>>25),a=s+(o^e&(r^o))+n[1]+3905402710&4294967295,s=e+(a<<12&4294967295|a>>>20),a=o+(r^s&(e^r))+n[2]+606105819&4294967295,o=s+(a<<17&4294967295|a>>>15),a=r+(e^o&(s^e))+n[3]+3250441966&4294967295,r=o+(a<<22&4294967295|a>>>10),a=e+(s^r&(o^s))+n[4]+4118548399&4294967295,e=r+(a<<7&4294967295|a>>>25),a=s+(o^e&(r^o))+n[5]+1200080426&4294967295,s=e+(a<<12&4294967295|a>>>20),a=o+(r^s&(e^r))+n[6]+2821735955&4294967295,o=s+(a<<17&4294967295|a>>>15),a=r+(e^o&(s^e))+n[7]+4249261313&4294967295,r=o+(a<<22&4294967295|a>>>10),a=e+(s^r&(o^s))+n[8]+1770035416&4294967295,e=r+(a<<7&4294967295|a>>>25),a=s+(o^e&(r^o))+n[9]+2336552879&4294967295,s=e+(a<<12&4294967295|a>>>20),a=o+(r^s&(e^r))+n[10]+4294925233&4294967295,o=s+(a<<17&4294967295|a>>>15),a=r+(e^o&(s^e))+n[11]+2304563134&4294967295,r=o+(a<<22&4294967295|a>>>10),a=e+(s^r&(o^s))+n[12]+1804603682&4294967295,e=r+(a<<7&4294967295|a>>>25),a=s+(o^e&(r^o))+n[13]+4254626195&4294967295,s=e+(a<<12&4294967295|a>>>20),a=o+(r^s&(e^r))+n[14]+2792965006&4294967295,o=s+(a<<17&4294967295|a>>>15),a=r+(e^o&(s^e))+n[15]+1236535329&4294967295,r=o+(a<<22&4294967295|a>>>10),a=e+(o^s&(r^o))+n[1]+4129170786&4294967295,e=r+(a<<5&4294967295|a>>>27),a=s+(r^o&(e^r))+n[6]+3225465664&4294967295,s=e+(a<<9&4294967295|a>>>23),a=o+(e^r&(s^e))+n[11]+643717713&4294967295,o=s+(a<<14&4294967295|a>>>18),a=r+(s^e&(o^s))+n[0]+3921069994&4294967295,r=o+(a<<20&4294967295|a>>>12),a=e+(o^s&(r^o))+n[5]+3593408605&4294967295,e=r+(a<<5&4294967295|a>>>27),a=s+(r^o&(e^r))+n[10]+38016083&4294967295,s=e+(a<<9&4294967295|a>>>23),a=o+(e^r&(s^e))+n[15]+3634488961&4294967295,o=s+(a<<14&4294967295|a>>>18),a=r+(s^e&(o^s))+n[4]+3889429448&4294967295,r=o+(a<<20&4294967295|a>>>12),a=e+(o^s&(r^o))+n[9]+568446438&4294967295,e=r+(a<<5&4294967295|a>>>27),a=s+(r^o&(e^r))+n[14]+3275163606&4294967295,s=e+(a<<9&4294967295|a>>>23),a=o+(e^r&(s^e))+n[3]+4107603335&4294967295,o=s+(a<<14&4294967295|a>>>18),a=r+(s^e&(o^s))+n[8]+1163531501&4294967295,r=o+(a<<20&4294967295|a>>>12),a=e+(o^s&(r^o))+n[13]+2850285829&4294967295,e=r+(a<<5&4294967295|a>>>27),a=s+(r^o&(e^r))+n[2]+4243563512&4294967295,s=e+(a<<9&4294967295|a>>>23),a=o+(e^r&(s^e))+n[7]+1735328473&4294967295,o=s+(a<<14&4294967295|a>>>18),a=r+(s^e&(o^s))+n[12]+2368359562&4294967295,r=o+(a<<20&4294967295|a>>>12),a=e+(r^o^s)+n[5]+4294588738&4294967295,e=r+(a<<4&4294967295|a>>>28),a=s+(e^r^o)+n[8]+2272392833&4294967295,s=e+(a<<11&4294967295|a>>>21),a=o+(s^e^r)+n[11]+1839030562&4294967295,o=s+(a<<16&4294967295|a>>>16),a=r+(o^s^e)+n[14]+4259657740&4294967295,r=o+(a<<23&4294967295|a>>>9),a=e+(r^o^s)+n[1]+2763975236&4294967295,e=r+(a<<4&4294967295|a>>>28),a=s+(e^r^o)+n[4]+1272893353&4294967295,s=e+(a<<11&4294967295|a>>>21),a=o+(s^e^r)+n[7]+4139469664&4294967295,o=s+(a<<16&4294967295|a>>>16),a=r+(o^s^e)+n[10]+3200236656&4294967295,r=o+(a<<23&4294967295|a>>>9),a=e+(r^o^s)+n[13]+681279174&4294967295,e=r+(a<<4&4294967295|a>>>28),a=s+(e^r^o)+n[0]+3936430074&4294967295,s=e+(a<<11&4294967295|a>>>21),a=o+(s^e^r)+n[3]+3572445317&4294967295,o=s+(a<<16&4294967295|a>>>16),a=r+(o^s^e)+n[6]+76029189&4294967295,r=o+(a<<23&4294967295|a>>>9),a=e+(r^o^s)+n[9]+3654602809&4294967295,e=r+(a<<4&4294967295|a>>>28),a=s+(e^r^o)+n[12]+3873151461&4294967295,s=e+(a<<11&4294967295|a>>>21),a=o+(s^e^r)+n[15]+530742520&4294967295,o=s+(a<<16&4294967295|a>>>16),a=r+(o^s^e)+n[2]+3299628645&4294967295,r=o+(a<<23&4294967295|a>>>9),a=e+(o^(r|~s))+n[0]+4096336452&4294967295,e=r+(a<<6&4294967295|a>>>26),a=s+(r^(e|~o))+n[7]+1126891415&4294967295,s=e+(a<<10&4294967295|a>>>22),a=o+(e^(s|~r))+n[14]+2878612391&4294967295,o=s+(a<<15&4294967295|a>>>17),a=r+(s^(o|~e))+n[5]+4237533241&4294967295,r=o+(a<<21&4294967295|a>>>11),a=e+(o^(r|~s))+n[12]+1700485571&4294967295,e=r+(a<<6&4294967295|a>>>26),a=s+(r^(e|~o))+n[3]+2399980690&4294967295,s=e+(a<<10&4294967295|a>>>22),a=o+(e^(s|~r))+n[10]+4293915773&4294967295,o=s+(a<<15&4294967295|a>>>17),a=r+(s^(o|~e))+n[1]+2240044497&4294967295,r=o+(a<<21&4294967295|a>>>11),a=e+(o^(r|~s))+n[8]+1873313359&4294967295,e=r+(a<<6&4294967295|a>>>26),a=s+(r^(e|~o))+n[15]+4264355552&4294967295,s=e+(a<<10&4294967295|a>>>22),a=o+(e^(s|~r))+n[6]+2734768916&4294967295,o=s+(a<<15&4294967295|a>>>17),a=r+(s^(o|~e))+n[13]+1309151649&4294967295,r=o+(a<<21&4294967295|a>>>11),a=e+(o^(r|~s))+n[4]+4149444226&4294967295,e=r+(a<<6&4294967295|a>>>26),a=s+(r^(e|~o))+n[11]+3174756917&4294967295,s=e+(a<<10&4294967295|a>>>22),a=o+(e^(s|~r))+n[2]+718787259&4294967295,o=s+(a<<15&4294967295|a>>>17),a=r+(s^(o|~e))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(o+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+o&4294967295,t.g[3]=t.g[3]+s&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var r=e-this.blockSize,n=this.m,o=this.h,s=0;s<e;){if(o==0)for(;s<=r;)cc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(n[o++]=t.charCodeAt(s++),o==this.blockSize){cc(this,n),o=0;break}}else for(;s<e;)if(n[o++]=t[s++],o==this.blockSize){cc(this,n),o=0;break}}this.h=o,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var r=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=r&255,r/=256;for(this.j(t),t=Array(16),e=r=0;4>e;++e)for(var n=0;32>n;n+=8)t[r++]=this.g[e]>>>n&255;return t};function J(t,e){this.h=e;for(var r=[],n=!0,o=t.length-1;0<=o;o--){var s=t[o]|0;n&&s==e||(r[o]=s,n=!1)}this.g=r}var AI={};function hh(t){return-128<=t&&128>t?Uk(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function Lt(t){if(isNaN(t)||!isFinite(t))return qn;if(0>t)return Oe(Lt(-t));for(var e=[],r=1,n=0;t>=r;n++)e[n]=t/r|0,r*=xu;return new J(e,0)}function Gv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Oe(Gv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Lt(Math.pow(e,8)),n=qn,o=0;o<t.length;o+=8){var s=Math.min(8,t.length-o),a=parseInt(t.substring(o,o+s),e);8>s?(s=Lt(Math.pow(e,s)),n=n.R(s).add(Lt(a))):(n=n.R(r),n=n.add(Lt(a)))}return n}var xu=4294967296,qn=hh(0),_u=hh(1),Ef=hh(16777216);E=J.prototype;E.ea=function(){if(vt(this))return-Oe(this).ea();for(var t=0,e=1,r=0;r<this.g.length;r++){var n=this.D(r);t+=(0<=n?n:xu+n)*e,e*=xu}return t};E.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qt(this))return"0";if(vt(this))return"-"+Oe(this).toString(t);for(var e=Lt(Math.pow(t,6)),r=this,n="";;){var o=Ci(r,e).g;r=bi(r,o.R(e));var s=((0<r.g.length?r.g[0]:r.h)>>>0).toString(t);if(r=o,Qt(r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}};E.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}E.X=function(t){return t=bi(this,t),vt(t)?-1:Qt(t)?0:1};function Oe(t){for(var e=t.g.length,r=[],n=0;n<e;n++)r[n]=~t.g[n];return new J(r,~t.h).add(_u)}E.abs=function(){return vt(this)?Oe(this):this};E.add=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],n=0,o=0;o<=e;o++){var s=n+(this.D(o)&65535)+(t.D(o)&65535),a=(s>>>16)+(this.D(o)>>>16)+(t.D(o)>>>16);n=a>>>16,s&=65535,a&=65535,r[o]=a<<16|s}return new J(r,r[r.length-1]&-2147483648?-1:0)};function bi(t,e){return t.add(Oe(e))}E.R=function(t){if(Qt(this)||Qt(t))return qn;if(vt(this))return vt(t)?Oe(this).R(Oe(t)):Oe(Oe(this).R(t));if(vt(t))return Oe(this.R(Oe(t)));if(0>this.X(Ef)&&0>t.X(Ef))return Lt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,r=[],n=0;n<2*e;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var o=0;o<t.g.length;o++){var s=this.D(n)>>>16,a=this.D(n)&65535,i=t.D(o)>>>16,l=t.D(o)&65535;r[2*n+2*o]+=a*l,Ca(r,2*n+2*o),r[2*n+2*o+1]+=s*l,Ca(r,2*n+2*o+1),r[2*n+2*o+1]+=a*i,Ca(r,2*n+2*o+1),r[2*n+2*o+2]+=s*i,Ca(r,2*n+2*o+2)}for(n=0;n<e;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=e;n<2*e;n++)r[n]=0;return new J(r,0)};function Ca(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Oo(t,e){this.g=t,this.h=e}function Ci(t,e){if(Qt(e))throw Error("division by zero");if(Qt(t))return new Oo(qn,qn);if(vt(t))return e=Ci(Oe(t),e),new Oo(Oe(e.g),Oe(e.h));if(vt(e))return e=Ci(t,Oe(e)),new Oo(Oe(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var r=_u,n=e;0>=n.X(t);)r=Sf(r),n=Sf(n);var o=In(r,1),s=In(n,1);for(n=In(n,2),r=In(r,2);!Qt(n);){var a=s.add(n);0>=a.X(t)&&(o=o.add(r),s=a),n=In(n,1),r=In(r,1)}return e=bi(t,o.R(e)),new Oo(o,e)}for(o=qn;0<=t.X(e);){for(r=Math.max(1,Math.floor(t.ea()/e.ea())),n=Math.ceil(Math.log(r)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),s=Lt(r),a=s.R(e);vt(a)||0<a.X(t);)r-=n,s=Lt(r),a=s.R(e);Qt(s)&&(s=_u),o=o.add(s),t=bi(t,a)}return new Oo(o,t)}E.gb=function(t){return Ci(this,t).h};E.and=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],n=0;n<e;n++)r[n]=this.D(n)&t.D(n);return new J(r,this.h&t.h)};E.or=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],n=0;n<e;n++)r[n]=this.D(n)|t.D(n);return new J(r,this.h|t.h)};E.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],n=0;n<e;n++)r[n]=this.D(n)^t.D(n);return new J(r,this.h^t.h)};function Sf(t){for(var e=t.g.length+1,r=[],n=0;n<e;n++)r[n]=t.D(n)<<1|t.D(n-1)>>>31;return new J(r,t.h)}function In(t,e){var r=e>>5;e%=32;for(var n=t.g.length-r,o=[],s=0;s<n;s++)o[s]=0<e?t.D(s+r)>>>e|t.D(s+r+1)<<32-e:t.D(s+r);return new J(o,t.h)}wi.prototype.createWebChannel=wi.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;tl.NO_ERROR=0;tl.TIMEOUT=8;tl.HTTP_ERROR=6;hv.COMPLETE="complete";pv.EventType=Vs;Vs.OPEN="a";Vs.CLOSE="b";Vs.ERROR="c";Vs.MESSAGE="d";De.prototype.listen=De.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=Lt;J.fromString=Gv;var $I=function(){return new wi},LI=function(){return el()},uc=tl,MI=hv,zI=wn,Df={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jI=Hs,ka=pv,FI=fe,VI=Ot,Kn=J;const Pf="@firebase/firestore";/**
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
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */let go="9.23.0";/**
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
 */const dn=new Bd("@firebase/firestore");function Rf(){return dn.logLevel}function _(t,...e){if(dn.logLevel<=Y.DEBUG){const r=e.map(ph);dn.debug(`Firestore (${go}): ${t}`,...r)}}function nr(t,...e){if(dn.logLevel<=Y.ERROR){const r=e.map(ph);dn.error(`Firestore (${go}): ${t}`,...r)}}function no(t,...e){if(dn.logLevel<=Y.WARN){const r=e.map(ph);dn.warn(`Firestore (${go}): ${t}`,...r)}}function ph(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function oe(t,e){t||j()}function V(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends jr{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class Qv{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(Me.UNAUTHENTICATED))}shutdown(){}}class BI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class HI{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){let n=this.i;const o=l=>this.i!==n?(n=this.i,r(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await o(this.currentUser)})},i=l=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>i(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?i(l):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),a()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(oe(typeof n.accessToken=="string"),new Qv(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Me(e)}}class qI{constructor(e,r,n){this.h=e,this.l=r,this.m=n,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class KI{constructor(e,r,n){this.h=e,this.l=r,this.m=n}getToken(){return Promise.resolve(new qI(this.h,this.l,this.m))}start(e,r){e.enqueueRetryable(()=>r(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,r){const n=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.T;return this.T=s.token,_("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?r(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const o=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?o(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(oe(typeof r.token=="string"),this.T=r.token,new WI(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */class Yv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const o=QI(40);for(let s=0;s<o.length;++s)n.length<20&&o[s]<r&&(n+=e.charAt(o[s]%e.length))}return n}}function Q(t,e){return t<e?-1:t>e?1:0}function oo(t,e,r){return t.length===e.length&&t.every((n,o)=>r(n,e[o]))}/**
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
 */class ke{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new ke(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ke(0,0))}static max(){return new F(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ds{constructor(e,r,n){r===void 0?r=0:r>e.length&&j(),n===void 0?n=e.length-r:n>e.length-r&&j(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return Ds.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof Ds?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let o=0;o<n;o++){const s=e.get(o),a=r.get(o);if(s<a)return-1;if(s>a)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class ie extends Ds{construct(e,r,n){return new ie(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(o=>o.length>0))}return new ie(r)}static emptyPath(){return new ie([])}}const YI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ds{construct(e,r,n){return new Fe(e,r,n)}static isValidIdentifier(e){return YI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const r=[];let n="",o=0;const s=()=>{if(n.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let a=!1;for(;o<e.length;){const i=e[o];if(i==="\\"){if(o+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[o+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,o+=2}else i==="`"?(a=!a,o++):i!=="."||a?(n+=i,o++):(s(),o++)}if(s(),a)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(r)}static emptyPath(){return new Fe([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ie.fromString(e))}static fromName(e){return new $(ie.fromString(e).popFirst(5))}static empty(){return new $(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return ie.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ie(e.slice()))}}function XI(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,o=F.fromTimestamp(n===1e9?new ke(r+1,0):new ke(r,n));return new Nr(o,$.empty(),e)}function JI(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new Nr(F.min(),$.empty(),-1)}static max(){return new Nr(F.max(),$.empty(),-1)}}function ZI(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=$.comparator(t.documentKey,e.documentKey),r!==0?r:Q(t.largestBatchId,e.largestBatchId))}/**
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
 */const eE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ws(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==eE)throw t;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new k((n,o)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,o)},this.catchCallback=s=>{this.wrapFailure(r,s).next(n,o)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof k?r:k.resolve(r)}catch(r){return k.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):k.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):k.reject(r)}static resolve(e){return new k((r,n)=>{r(e)})}static reject(e){return new k((r,n)=>{n(e)})}static waitFor(e){return new k((r,n)=>{let o=0,s=0,a=!1;e.forEach(i=>{++o,i.next(()=>{++s,a&&s===o&&r()},l=>n(l))}),a=!0,s===o&&r()})}static or(e){let r=k.resolve(!1);for(const n of e)r=r.next(o=>o?k.resolve(o):n());return r}static forEach(e,r){const n=[];return e.forEach((o,s)=>{n.push(r.call(this,o,s))}),this.waitFor(n)}static mapArray(e,r){return new k((n,o)=>{const s=e.length,a=new Array(s);let i=0;for(let l=0;l<s;l++){const c=l;r(e[c]).next(u=>{a[c]=u,++i,i===s&&n(a)},u=>o(u))}})}static doWhile(e,r){return new k((n,o)=>{const s=()=>{e()===!0?r().next(()=>{s()},o):n()};s()})}}function Gs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fh{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ot(n),this.ut=n=>r.writeSequenceNumber(n))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}fh.ct=-1;function cl(t){return t==null}function ki(t){return t===0&&1/t==-1/0}function rE(t){return typeof t=="number"&&Number.isInteger(t)&&!ki(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tf(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function bn(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function Xv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class he{constructor(e,r){this.comparator=e,this.root=r||Te.EMPTY}insert(e,r){return new he(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const o=this.comparator(e,n.key);if(o===0)return r+n.left.size;o<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,r,n,o){this.isReverse=o,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=r?n(e.key,r):1,r&&o&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,r,n,o,s){this.key=e,this.value=r,this.color=n??Te.RED,this.left=o??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,o,s){return new Te(e??this.key,r??this.value,n??this.color,o??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let o=this;const s=n(e,o.key);return o=s<0?o.copy(null,null,null,o.left.insert(e,r,n),null):s===0?o.copy(null,r,null,null,null):o.copy(null,null,null,null,o.right.insert(e,r,n)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,o=this;if(r(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,r),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),r(e,o.key)===0){if(o.right.isEmpty())return Te.EMPTY;n=o.right.min(),o=o.copy(n.key,n.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,r))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,r,n,o){return this}insert(t,e,r){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const o=n.getNext();if(this.comparator(o.key,e[1])>=0)return;r(o.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new Of(this.data.getIterator())}getIteratorFrom(e){return new Of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const o=r.getNext().key,s=n.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Be(this.comparator);return r.data=e,r}}class Of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new ct([])}unionWith(e){let r=new Be(Fe.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new ct(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(n){try{return atob(n)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Jv("Invalid base64 string: "+o):o}}(e);return new qe(r)}static fromUint8Array(e){const r=function(n){let o="";for(let s=0;s<n.length;++s)o+=String.fromCharCode(n[s]);return o}(e);return new qe(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const nE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(oe(!!t),typeof t=="string"){let e=0;const r=nE.exec(t);if(oe(!!r),r[1]){let o=r[1];o=(o+"000000000").substr(0,9),e=Number(o)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hn(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function mh(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function gh(t){const e=t.mapValue.fields.__previous_value__;return mh(e)?gh(e):e}function Ps(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class oE{constructor(e,r,n,o,s,a,i,l,c){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=i,this.longPollingOptions=l,this.useFetchStreams=c}}class Rs{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new Rs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mh(t)?4:sE(t)?9007199254740991:10:j()}function Bt(t,e){if(t===e)return!0;const r=pn(t);if(r!==pn(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ps(t).isEqual(Ps(e));case 3:return function(n,o){if(typeof n.timestampValue=="string"&&typeof o.timestampValue=="string"&&n.timestampValue.length===o.timestampValue.length)return n.timestampValue===o.timestampValue;const s=Ar(n.timestampValue),a=Ar(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,o){return hn(n.bytesValue).isEqual(hn(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,o){return ye(n.geoPointValue.latitude)===ye(o.geoPointValue.latitude)&&ye(n.geoPointValue.longitude)===ye(o.geoPointValue.longitude)}(t,e);case 2:return function(n,o){if("integerValue"in n&&"integerValue"in o)return ye(n.integerValue)===ye(o.integerValue);if("doubleValue"in n&&"doubleValue"in o){const s=ye(n.doubleValue),a=ye(o.doubleValue);return s===a?ki(s)===ki(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(n,o){const s=n.mapValue.fields||{},a=o.mapValue.fields||{};if(Tf(s)!==Tf(a))return!1;for(const i in s)if(s.hasOwnProperty(i)&&(a[i]===void 0||!Bt(s[i],a[i])))return!1;return!0}(t,e);default:return j()}}function Ts(t,e){return(t.values||[]).find(r=>Bt(r,e))!==void 0}function so(t,e){if(t===e)return 0;const r=pn(t),n=pn(e);if(r!==n)return Q(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=ye(o.integerValue||o.doubleValue),i=ye(s.integerValue||s.doubleValue);return a<i?-1:a>i?1:a===i?0:isNaN(a)?isNaN(i)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(Ps(t),Ps(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(o,s){const a=hn(o),i=hn(s);return a.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),i=s.split("/");for(let l=0;l<a.length&&l<i.length;l++){const c=Q(a[l],i[l]);if(c!==0)return c}return Q(a.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Q(ye(o.latitude),ye(s.latitude));return a!==0?a:Q(ye(o.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],i=s.values||[];for(let l=0;l<a.length&&l<i.length;++l){const c=so(a[l],i[l]);if(c)return c}return Q(a.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Ea.mapValue&&s===Ea.mapValue)return 0;if(o===Ea.mapValue)return 1;if(s===Ea.mapValue)return-1;const a=o.fields||{},i=Object.keys(a),l=s.fields||{},c=Object.keys(l);i.sort(),c.sort();for(let u=0;u<i.length&&u<c.length;++u){const d=Q(i[u],c[u]);if(d!==0)return d;const h=so(a[i[u]],l[c[u]]);if(h!==0)return h}return Q(i.length,c.length)}(t.mapValue,e.mapValue);default:throw j()}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const r=Ar(t),n=Ar(e),o=Q(r.seconds,n.seconds);return o!==0?o:Q(r.nanos,n.nanos)}function ao(t){return Nu(t)}function Nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const o=Ar(n);return`time(${o.seconds},${o.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hn(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,$.fromName(r).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(n){let o="[",s=!0;for(const a of n.values||[])s?s=!1:o+=",",o+=Nu(a);return o+"]"}(t.arrayValue):"mapValue"in t?function(n){const o=Object.keys(n.fields||{}).sort();let s="{",a=!0;for(const i of o)a?a=!1:s+=",",s+=`${i}:${Nu(n.fields[i])}`;return s+"}"}(t.mapValue):j();var e,r}function Au(t){return!!t&&"integerValue"in t}function yh(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function Nf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function Qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bn(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=Qo(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Qo(t.arrayValue.values[r]);return e}return Object.assign({},t)}function sE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!ja(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(r)}setAll(e){let r=Fe.emptyPath(),n={},o=[];e.forEach((a,i)=>{if(!r.isImmediateParentOf(i)){const l=this.getFieldsMap(r);this.applyChanges(l,n,o),n={},o=[],r=i.popLast()}a?n[i.lastSegment()]=Qo(a):o.push(i.lastSegment())});const s=this.getFieldsMap(r);this.applyChanges(s,n,o)}delete(e){const r=this.field(e.popLast());ja(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let o=r.mapValue.fields[e.get(n)];ja(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=o),r=o}return r.mapValue.fields}applyChanges(e,r,n){bn(r,(o,s)=>e[o]=s);for(const o of n)delete e[o]}clone(){return new Je(Qo(this.value))}}function Zv(t){const e=[];return bn(t.fields,(r,n)=>{const o=new Fe([r]);if(ja(n)){const s=Zv(n.mapValue).fields;if(s.length===0)e.push(o);else for(const a of s)e.push(o.child(a))}else e.push(o)}),new ct(e)}/**
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
 */class je{constructor(e,r,n,o,s,a,i){this.key=e,this.documentType=r,this.version=n,this.readTime=o,this.createTime=s,this.data=a,this.documentState=i}static newInvalidDocument(e){return new je(e,0,F.min(),F.min(),F.min(),Je.empty(),0)}static newFoundDocument(e,r,n,o){return new je(e,1,r,F.min(),n,o,0)}static newNoDocument(e,r){return new je(e,2,r,F.min(),F.min(),Je.empty(),0)}static newUnknownDocument(e,r){return new je(e,3,r,F.min(),F.min(),Je.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,r){this.position=e,this.inclusive=r}}function Af(t,e,r){let n=0;for(let o=0;o<t.position.length;o++){const s=e[o],a=t.position[o];if(s.field.isKeyField()?n=$.comparator($.fromName(a.referenceValue),r.key):n=so(a,r.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function $f(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Bt(t.position[r],e.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,r="asc"){this.field=e,this.dir=r}}function aE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{}class be extends ew{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new lE(e,r,n):r==="array-contains"?new dE(e,n):r==="in"?new hE(e,n):r==="not-in"?new pE(e,n):r==="array-contains-any"?new fE(e,n):new be(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new cE(e,n):new uE(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(so(r,this.value)):r!==null&&pn(this.value)===pn(r)&&this.matchesComparison(so(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ht extends ew{constructor(e,r){super(),this.filters=e,this.op=r,this.lt=null}static create(e,r){return new Ht(e,r)}matches(e){return tw(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(r=>r.isInequality());return e!==null?e.field:null}ft(e){for(const r of this.getFlattenedFilters())if(e(r))return r;return null}}function tw(t){return t.op==="and"}function rw(t){return iE(t)&&tw(t)}function iE(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function $u(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(rw(t))return t.filters.map(e=>$u(e)).join(",");{const e=t.filters.map(r=>$u(r)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof be?function(r,n){return n instanceof be&&r.op===n.op&&r.field.isEqual(n.field)&&Bt(r.value,n.value)}(t,e):t instanceof Ht?function(r,n){return n instanceof Ht&&r.op===n.op&&r.filters.length===n.filters.length?r.filters.reduce((o,s,a)=>o&&nw(s,n.filters[a]),!0):!1}(t,e):void j()}function ow(t){return t instanceof be?function(e){return`${e.field.canonicalString()} ${e.op} ${ao(e.value)}`}(t):t instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(ow).join(" ,")+"}"}(t):"Filter"}class lE extends be{constructor(e,r,n){super(e,r,n),this.key=$.fromName(n.referenceValue)}matches(e){const r=$.comparator(e.key,this.key);return this.matchesComparison(r)}}class cE extends be{constructor(e,r){super(e,"in",r),this.keys=sw("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class uE extends be{constructor(e,r){super(e,"not-in",r),this.keys=sw("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function sw(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>$.fromName(n.referenceValue))}class dE extends be{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return yh(r)&&Ts(r.arrayValue,this.value)}}class hE extends be{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Ts(this.value.arrayValue,r)}}class pE extends be{constructor(e,r){super(e,"not-in",r)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Ts(this.value.arrayValue,r)}}class fE extends be{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!yh(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Ts(this.value.arrayValue,n))}}/**
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
 */class mE{constructor(e,r=null,n=[],o=[],s=null,a=null,i=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=o,this.limit=s,this.startAt=a,this.endAt=i,this.dt=null}}function Lf(t,e=null,r=[],n=[],o=null,s=null,a=null){return new mE(t,e,r,n,o,s,a)}function vh(t){const e=V(t);if(e.dt===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>$u(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),cl(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>ao(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>ao(n)).join(",")),e.dt=r}return e.dt}function wh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!aE(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!nw(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$f(t.startAt,e.startAt)&&$f(t.endAt,e.endAt)}function Lu(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ul{constructor(e,r=null,n=[],o=[],s=null,a="F",i=null,l=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=o,this.limit=s,this.limitType=a,this.startAt=i,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function gE(t,e,r,n,o,s,a,i){return new ul(t,e,r,n,o,s,a,i)}function bh(t){return new ul(t)}function Mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vE(t){for(const e of t.filters){const r=e.getFirstInequalityField();if(r!==null)return r}return null}function wE(t){return t.collectionGroup!==null}function Wn(t){const e=V(t);if(e.wt===null){e.wt=[];const r=vE(e),n=yE(e);if(r!==null&&n===null)r.isKeyField()||e.wt.push(new Yo(r)),e.wt.push(new Yo(Fe.keyField(),"asc"));else{let o=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(o=!0);if(!o){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yo(Fe.keyField(),s))}}}return e.wt}function or(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=Lf(e.path,e.collectionGroup,Wn(e),e.filters,e.limit,e.startAt,e.endAt);else{const r=[];for(const s of Wn(e)){const a=s.dir==="desc"?"asc":"desc";r.push(new Yo(s.field,a))}const n=e.endAt?new Ii(e.endAt.position,e.endAt.inclusive):null,o=e.startAt?new Ii(e.startAt.position,e.startAt.inclusive):null;e._t=Lf(e.path,e.collectionGroup,r,e.filters,e.limit,n,o)}return e._t}function Mu(t,e,r){return new ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function dl(t,e){return wh(or(t),or(e))&&t.limitType===e.limitType}function aw(t){return`${vh(or(t))}|lt:${t.limitType}`}function zu(t){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(n=>ow(n)).join(", ")}]`),cl(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(n=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(n)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>ao(n)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>ao(n)).join(",")),`Target(${r})`}(or(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&function(r,n){const o=n.key.path;return r.collectionGroup!==null?n.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,n){for(const o of Wn(r))if(!o.field.isKeyField()&&n.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,n){for(const o of r.filters)if(!o.matches(n))return!1;return!0}(t,e)&&function(r,n){return!(r.startAt&&!function(o,s,a){const i=Af(o,s,a);return o.inclusive?i<=0:i<0}(r.startAt,Wn(r),n)||r.endAt&&!function(o,s,a){const i=Af(o,s,a);return o.inclusive?i>=0:i>0}(r.endAt,Wn(r),n))}(t,e)}function bE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,r)=>{let n=!1;for(const o of Wn(t)){const s=CE(o,e,r);if(s!==0)return s;n=n||o.field.isKeyField()}return 0}}function CE(t,e,r){const n=t.field.isKeyField()?$.comparator(e.key,r.key):function(o,s,a){const i=s.data.field(o),l=a.data.field(o);return i!==null&&l!==null?so(i,l):j()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return j()}}/**
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
 */class yo{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[o,s]of n)if(this.equalsFn(o,e))return s}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),o=this.inner[n];if(o===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],e))return void(o[s]=[e,r]);o.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let o=0;o<n.length;o++)if(this.equalsFn(n[o][0],e))return n.length===1?delete this.inner[r]:n.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(r,n)=>{for(const[o,s]of n)e(o,s)})}isEmpty(){return Xv(this.inner)}size(){return this.innerSize}}/**
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
 */const kE=new he($.comparator);function sr(){return kE}const lw=new he($.comparator);function Mo(...t){let e=lw;for(const r of t)e=e.insert(r.key,r);return e}function cw(t){let e=lw;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function Zr(){return Xo()}function uw(){return Xo()}function Xo(){return new yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const IE=new he($.comparator),EE=new Be($.comparator);function H(...t){let e=EE;for(const r of t)e=e.add(r);return e}const SE=new Be(Q);function DE(){return SE}/**
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
 */function dw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function PE(t,e){return rE(e)?hw(e):dw(t,e)}/**
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
 */class pl{constructor(){this._=void 0}}function RE(t,e,r){return t instanceof Ei?function(n,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return o&&mh(o)&&(o=gh(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof Os?fw(t,e):t instanceof xs?mw(t,e):function(n,o){const s=pw(n,o),a=zf(s)+zf(n.gt);return Au(s)&&Au(n.gt)?hw(a):dw(n.serializer,a)}(t,e)}function TE(t,e,r){return t instanceof Os?fw(t,e):t instanceof xs?mw(t,e):r}function pw(t,e){return t instanceof Si?Au(r=e)||function(n){return!!n&&"doubleValue"in n}(r)?e:{integerValue:0}:null;var r}class Ei extends pl{}class Os extends pl{constructor(e){super(),this.elements=e}}function fw(t,e){const r=gw(e);for(const n of t.elements)r.some(o=>Bt(o,n))||r.push(n);return{arrayValue:{values:r}}}class xs extends pl{constructor(e){super(),this.elements=e}}function mw(t,e){let r=gw(e);for(const n of t.elements)r=r.filter(o=>!Bt(o,n));return{arrayValue:{values:r}}}class Si extends pl{constructor(e,r){super(),this.serializer=e,this.gt=r}}function zf(t){return ye(t.integerValue||t.doubleValue)}function gw(t){return yh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OE(t,e){return t.field.isEqual(e.field)&&function(r,n){return r instanceof Os&&n instanceof Os||r instanceof xs&&n instanceof xs?oo(r.elements,n.elements,Bt):r instanceof Si&&n instanceof Si?Bt(r.gt,n.gt):r instanceof Ei&&n instanceof Ei}(t.transform,e.transform)}class xE{constructor(e,r){this.version=e,this.transformResults=r}}class Ft{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function yw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ww(t.key,Ft.none()):new Qs(t.key,t.data,Ft.none());{const r=t.data,n=Je.empty();let o=new Be(Fe.comparator);for(let s of e.fields)if(!o.has(s)){let a=r.field(s);a===null&&s.length>1&&(s=s.popLast(),a=r.field(s)),a===null?n.delete(s):n.set(s,a),o=o.add(s)}return new Ur(t.key,n,new ct(o.toArray()),Ft.none())}}function _E(t,e,r){t instanceof Qs?function(n,o,s){const a=n.value.clone(),i=Ff(n.fieldTransforms,o,s.transformResults);a.setAll(i),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,r):t instanceof Ur?function(n,o,s){if(!Fa(n.precondition,o))return void o.convertToUnknownDocument(s.version);const a=Ff(n.fieldTransforms,o,s.transformResults),i=o.data;i.setAll(vw(n)),i.setAll(a),o.convertToFoundDocument(s.version,i).setHasCommittedMutations()}(t,e,r):function(n,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function Jo(t,e,r,n){return t instanceof Qs?function(o,s,a,i){if(!Fa(o.precondition,s))return a;const l=o.value.clone(),c=Vf(o.fieldTransforms,i,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,r,n):t instanceof Ur?function(o,s,a,i){if(!Fa(o.precondition,s))return a;const l=Vf(o.fieldTransforms,i,s),c=s.data;return c.setAll(vw(o)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(u=>u.field))}(t,e,r,n):function(o,s,a){return Fa(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,r)}function NE(t,e){let r=null;for(const n of t.fieldTransforms){const o=e.data.field(n.field),s=pw(n.transform,o||null);s!=null&&(r===null&&(r=Je.empty()),r.set(n.field,s))}return r||null}function jf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,n){return r===void 0&&n===void 0||!(!r||!n)&&oo(r,n,(o,s)=>OE(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends fl{constructor(e,r,n,o=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ur extends fl{constructor(e,r,n,o,s=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vw(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function Ff(t,e,r){const n=new Map;oe(t.length===r.length);for(let o=0;o<r.length;o++){const s=t[o],a=s.transform,i=e.data.field(s.field);n.set(s.field,TE(a,i,r[o]))}return n}function Vf(t,e,r){const n=new Map;for(const o of t){const s=o.transform,a=r.data.field(o.field);n.set(o.field,RE(s,a,e))}return n}class ww extends fl{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AE extends fl{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $E{constructor(e,r,n,o){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=o}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(e.key)&&_E(s,e,n[o])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=Jo(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=Jo(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=uw();return this.mutations.forEach(o=>{const s=e.get(o.key),a=s.overlayedDocument;let i=this.applyToLocalView(a,s.mutatedFields);i=r.has(o.key)?null:i;const l=yw(a,i);l!==null&&n.set(o.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),H())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(r,n)=>jf(r,n))&&oo(this.baseMutations,e.baseMutations,(r,n)=>jf(r,n))}}class Ch{constructor(e,r,n,o){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=o}static from(e,r,n){oe(e.mutations.length===n.length);let o=IE;const s=e.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,n[a].version);return new Ch(e,r,n,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ME{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var ge,K;function zE(t){switch(t){default:return j();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function bw(t){if(t===void 0)return nr("GRPC error has no .code"),b.UNKNOWN;switch(t){case ge.OK:return b.OK;case ge.CANCELLED:return b.CANCELLED;case ge.UNKNOWN:return b.UNKNOWN;case ge.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ge.INTERNAL:return b.INTERNAL;case ge.UNAVAILABLE:return b.UNAVAILABLE;case ge.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ge.NOT_FOUND:return b.NOT_FOUND;case ge.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ge.ABORTED:return b.ABORTED;case ge.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ge.DATA_LOSS:return b.DATA_LOSS;default:return j()}}(K=ge||(ge={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sa}static getOrCreateInstance(){return Sa===null&&(Sa=new kh),Sa}onExistenceFilterMismatch(e){const r=Symbol();return this.onExistenceFilterMismatchCallbacks.set(r,e),()=>this.onExistenceFilterMismatchCallbacks.delete(r)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(r=>r(e))}}let Sa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Kn([4294967295,4294967295],0);function Uf(t){const e=jE().encode(t),r=new VI;return r.update(e),new Uint8Array(r.digest())}function Bf(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),o=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kn([r,n],0),new Kn([o,s],0)]}class Ih{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new zo(`Invalid padding: ${r}`);if(n<0)throw new zo(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new zo(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new zo(`Invalid padding when bitmap length is 0: ${r}`);this.It=8*e.length-r,this.Tt=Kn.fromNumber(this.It)}Et(e,r,n){let o=e.add(r.multiply(Kn.fromNumber(n)));return o.compare(FE)===1&&(o=new Kn([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const r=Uf(e),[n,o]=Bf(r);for(let s=0;s<this.hashCount;s++){const a=this.Et(n,o,s);if(!this.At(a))return!1}return!0}static create(e,r,n){const o=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ih(s,o,r);return n.forEach(i=>a.insert(i)),a}insert(e){if(this.It===0)return;const r=Uf(e),[n,o]=Bf(r);for(let s=0;s<this.hashCount;s++){const a=this.Et(n,o,s);this.Rt(a)}}Rt(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ml{constructor(e,r,n,o,s){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const o=new Map;return o.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new ml(F.min(),o,new he(Q),sr(),H())}}class Ys{constructor(e,r,n,o,s){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new Ys(n,r,H(),H(),H())}}/**
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
 */class Va{constructor(e,r,n,o){this.Pt=e,this.removedTargetIds=r,this.key=n,this.bt=o}}class Cw{constructor(e,r){this.targetId=e,this.Vt=r}}class kw{constructor(e,r,n=qe.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=o}}class Hf{constructor(){this.St=0,this.Dt=Kf(),this.Ct=qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),r=H(),n=H();return this.Dt.forEach((o,s)=>{switch(s){case 0:e=e.add(o);break;case 2:r=r.add(o);break;case 1:n=n.add(o);break;default:j()}}),new Ys(this.Ct,this.xt,e,r,n)}Ft(){this.Nt=!1,this.Dt=Kf()}Bt(e,r){this.Nt=!0,this.Dt=this.Dt.insert(e,r)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class VE{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=sr(),this.zt=qf(),this.Wt=new he(Q)}Ht(e){for(const r of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(r,e.bt):this.Yt(r,e.key,e.bt);for(const r of e.removedTargetIds)this.Yt(r,e.key,e.bt)}Xt(e){this.forEachTarget(e,r=>{const n=this.Zt(r);switch(e.state){case 0:this.te(r)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(r);break;case 3:this.te(r)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(r)&&(this.ee(r),n.$t(e.resumeToken));break;default:j()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Qt.forEach((n,o)=>{this.te(o)&&r(o)})}ne(e){var r;const n=e.targetId,o=e.Vt.count,s=this.se(n);if(s){const a=s.target;if(Lu(a))if(o===0){const i=new $(a.path);this.Yt(n,i,je.newNoDocument(i,F.min()))}else oe(o===1);else{const i=this.ie(n);if(i!==o){const l=this.re(e,i);if(l!==0){this.ee(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,c)}(r=kh.instance)===null||r===void 0||r.notifyOnExistenceFilterMismatch(function(c,u,d){var h,g,y,v,D,f;const p={localCacheCount:u,existenceFilterCount:d.count},m=d.unchangedNames;return m&&(p.bloomFilter={applied:c===0,hashCount:(h=m==null?void 0:m.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(f=(D=m==null?void 0:m.bits)===null||D===void 0?void 0:D.padding)!==null&&f!==void 0?f:0}),p}(l,i,e.Vt))}}}}re(e,r){const{unchangedNames:n,count:o}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:a=0},hashCount:i=0}=n;let l,c;try{l=hn(s).toUint8Array()}catch(u){if(u instanceof Jv)return no("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Ih(l,a,i)}catch(u){return no(u instanceof zo?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:o!==r-this.oe(e.targetId,c)?2:0}oe(e,r){const n=this.Gt.getRemoteKeysForTarget(e);let o=0;return n.forEach(s=>{const a=this.Gt.ue(),i=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;r.vt(i)||(this.Yt(e,s,null),o++)}),o}ce(e){const r=new Map;this.Qt.forEach((s,a)=>{const i=this.se(a);if(i){if(s.current&&Lu(i.target)){const l=new $(i.target.path);this.jt.get(l)!==null||this.ae(a,l)||this.Yt(a,l,je.newNoDocument(l,e))}s.Mt&&(r.set(a,s.Ot()),s.Ft())}});let n=H();this.zt.forEach((s,a)=>{let i=!0;a.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(i=!1,!1)}),i&&(n=n.add(s))}),this.jt.forEach((s,a)=>a.setReadTime(e));const o=new ml(e,r,this.Wt,this.jt,n);return this.jt=sr(),this.zt=qf(),this.Wt=new he(Q),o}Jt(e,r){if(!this.te(e))return;const n=this.ae(e,r.key)?2:0;this.Zt(e).Bt(r.key,n),this.jt=this.jt.insert(r.key,r),this.zt=this.zt.insert(r.key,this.he(r.key).add(e))}Yt(e,r,n){if(!this.te(e))return;const o=this.Zt(e);this.ae(e,r)?o.Bt(r,1):o.Lt(r),this.zt=this.zt.insert(r,this.he(r).delete(e)),n&&(this.jt=this.jt.insert(r,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const r=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let r=this.Qt.get(e);return r||(r=new Hf,this.Qt.set(e,r)),r}he(e){let r=this.zt.get(e);return r||(r=new Be(Q),this.zt=this.zt.insert(e,r)),r}te(e){const r=this.se(e)!==null;return r||_("WatchChangeAggregator","Detected inactive target",e),r}se(e){const r=this.Qt.get(e);return r&&r.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Hf),this.Gt.getRemoteKeysForTarget(e).forEach(r=>{this.Yt(e,r,null)})}ae(e,r){return this.Gt.getRemoteKeysForTarget(e).has(r)}}function qf(){return new he($.comparator)}function Kf(){return new he($.comparator)}const UE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HE=(()=>({and:"AND",or:"OR"}))();class qE{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function ju(t,e){return t.useProto3Json||cl(e)?e:{value:e}}function Di(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KE(t,e){return Di(t,e.toTimestamp())}function Vt(t){return oe(!!t),F.fromTimestamp(function(e){const r=Ar(e);return new ke(r.seconds,r.nanos)}(t))}function Eh(t,e){return function(r){return new ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Ew(t){const e=ie.fromString(t);return oe(Rw(e)),e}function Fu(t,e){return Eh(t.databaseId,e.path)}function dc(t,e){const r=Ew(e);if(r.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new $(Sw(r))}function Vu(t,e){return Eh(t.databaseId,e)}function WE(t){const e=Ew(t);return e.length===4?ie.emptyPath():Sw(e)}function Uu(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sw(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wf(t,e,r){return{name:Fu(t,e),fields:r.value.mapValue.fields}}function GE(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(oe(c===void 0||typeof c=="string"),qe.fromBase64String(c||"")):(oe(c===void 0||c instanceof Uint8Array),qe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,i=a&&function(l){const c=l.code===void 0?b.UNKNOWN:bw(l.code);return new A(c,l.message||"")}(a);r=new kw(n,o,s,i||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const o=dc(t,n.document.name),s=Vt(n.document.updateTime),a=n.document.createTime?Vt(n.document.createTime):F.min(),i=new Je({mapValue:{fields:n.document.fields}}),l=je.newFoundDocument(o,s,a,i),c=n.targetIds||[],u=n.removedTargetIds||[];r=new Va(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const o=dc(t,n.document),s=n.readTime?Vt(n.readTime):F.min(),a=je.newNoDocument(o,s),i=n.removedTargetIds||[];r=new Va([],i,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const o=dc(t,n.document),s=n.removedTargetIds||[];r=new Va([],s,o,null)}else{if(!("filter"in e))return j();{e.filter;const n=e.filter;n.targetId;const{count:o=0,unchangedNames:s}=n,a=new ME(o,s),i=n.targetId;r=new Cw(i,a)}}return r}function QE(t,e){let r;if(e instanceof Qs)r={update:Wf(t,e.key,e.value)};else if(e instanceof ww)r={delete:Fu(t,e.key)};else if(e instanceof Ur)r={update:Wf(t,e.key,e.data),updateMask:oS(e.fieldMask)};else{if(!(e instanceof AE))return j();r={verify:Fu(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const a=s.transform;if(a instanceof Ei)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Os)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Si)return{fieldPath:s.field.canonicalString(),increment:a.gt};throw j()}(0,n))),e.precondition.isNone||(r.currentDocument=function(n,o){return o.updateTime!==void 0?{updateTime:KE(n,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j()}(t,e.precondition)),r}function YE(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(r=>function(n,o){let s=n.updateTime?Vt(n.updateTime):Vt(o);return s.isEqual(F.min())&&(s=Vt(o)),new xE(s,n.transformResults||[])}(r,e))):[]}function XE(t,e){return{documents:[Vu(t,e.path)]}}function JE(t,e){const r={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(r.parent=Vu(t,n),r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r.parent=Vu(t,n.popLast()),r.structuredQuery.from=[{collectionId:n.lastSegment()}]);const o=function(l){if(l.length!==0)return Pw(Ht.create(l,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:En(u.field),direction:tS(u.dir)}}(c))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const a=ju(t,e.limit);var i;return a!==null&&(r.structuredQuery.limit=a),e.startAt&&(r.structuredQuery.startAt={before:(i=e.startAt).inclusive,values:i.position}),e.endAt&&(r.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),r}function ZE(t){let e=WE(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let o=null;if(n>0){oe(n===1);const u=r.from[0];u.allDescendants?o=u.collectionId:e=e.child(u.collectionId)}let s=[];r.where&&(s=function(u){const d=Dw(u);return d instanceof Ht&&rw(d)?d.getFilters():[d]}(r.where));let a=[];r.orderBy&&(a=r.orderBy.map(u=>function(d){return new Yo(Sn(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let i=null;r.limit&&(i=function(u){let d;return d=typeof u=="object"?u.value:u,cl(d)?null:d}(r.limit));let l=null;r.startAt&&(l=function(u){const d=!!u.before,h=u.values||[];return new Ii(h,d)}(r.startAt));let c=null;return r.endAt&&(c=function(u){const d=!u.before,h=u.values||[];return new Ii(h,d)}(r.endAt)),gE(e,o,a,s,i,"F",l,c)}function eS(t,e){const r=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function Dw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Sn(e.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const n=Sn(e.unaryFilter.field);return be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Sn(e.unaryFilter.field);return be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Sn(e.unaryFilter.field);return be.create(s,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return be.create(Sn(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>Dw(r)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function tS(t){return UE[t]}function rS(t){return BE[t]}function nS(t){return HE[t]}function En(t){return{fieldPath:t.canonicalString()}}function Sn(t){return Fe.fromServerFormat(t.fieldPath)}function Pw(t){return t instanceof be?function(e){if(e.op==="=="){if(Nf(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NAN"}};if(_f(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Nf(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NAN"}};if(_f(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(e.field),op:rS(e.op),value:e.value}}}(t):t instanceof Ht?function(e){const r=e.getFilters().map(n=>Pw(n));return r.length===1?r[0]:{compositeFilter:{op:nS(e.op),filters:r}}}(t):j()}function oS(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function Rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,r,n,o,s=F.min(),a=F.min(),i=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=i,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sS{constructor(e){this.fe=e}}function aS(t){const e=ZE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mu(e,e.limit,"L"):e}/**
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
 */class iS{constructor(){this.rn=new lS}addToCollectionParentIndex(e,r){return this.rn.add(r),k.resolve()}getCollectionParents(e,r){return k.resolve(this.rn.getEntries(r))}addFieldIndex(e,r){return k.resolve()}deleteFieldIndex(e,r){return k.resolve()}getDocumentsMatchingTarget(e,r){return k.resolve(null)}getIndexType(e,r){return k.resolve(0)}getFieldIndexes(e,r){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,r){return k.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,r){return k.resolve(Nr.min())}updateCollectionGroup(e,r,n){return k.resolve()}updateIndexEntries(e,r){return k.resolve()}}class lS{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),o=this.index[r]||new Be(ie.comparator),s=!o.has(n);return this.index[r]=o.add(n),s}has(e){const r=e.lastSegment(),n=e.popLast(),o=this.index[r];return o&&o.has(n)}getEntries(e){return(this.index[e]||new Be(ie.comparator)).toArray()}}/**
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
 */class io{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new io(0)}static Mn(){return new io(-1)}}/**
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
 */class cS{constructor(){this.changes=new yo(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?k.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class dS{constructor(e,r,n,o){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=o}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(o=>(n=o,this.remoteDocumentCache.getEntry(e,r))).next(o=>(n!==null&&Jo(n.mutation,o,ct.empty(),ke.now()),o))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,H()).next(()=>n))}getLocalViewOfDocuments(e,r,n=H()){const o=Zr();return this.populateOverlays(e,o,r).next(()=>this.computeViews(e,r,o,n).next(s=>{let a=Mo();return s.forEach((i,l)=>{a=a.insert(i,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,r){const n=Zr();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,H()))}populateOverlays(e,r,n){const o=[];return n.forEach(s=>{r.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(e,o).next(s=>{s.forEach((a,i)=>{r.set(a,i)})})}computeViews(e,r,n,o){let s=sr();const a=Xo(),i=Xo();return r.forEach((l,c)=>{const u=n.get(c.key);o.has(c.key)&&(u===void 0||u.mutation instanceof Ur)?s=s.insert(c.key,c):u!==void 0?(a.set(c.key,u.mutation.getFieldMask()),Jo(u.mutation,c,u.mutation.getFieldMask(),ke.now())):a.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>a.set(c,u)),r.forEach((c,u)=>{var d;return i.set(c,new uS(u,(d=a.get(c))!==null&&d!==void 0?d:null))}),i))}recalculateAndSaveOverlays(e,r){const n=Xo();let o=new he((a,i)=>a-i),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(a=>{for(const i of a)i.keys().forEach(l=>{const c=r.get(l);if(c===null)return;let u=n.get(l)||ct.empty();u=i.applyToLocalView(c,u),n.set(l,u);const d=(o.get(i.batchId)||H()).add(l);o=o.insert(i.batchId,d)})}).next(()=>{const a=[],i=o.getReverseIterator();for(;i.hasNext();){const l=i.getNext(),c=l.key,u=l.value,d=uw();u.forEach(h=>{if(!s.has(h)){const g=yw(r.get(h),n.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,d))}return k.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):wE(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n):this.getDocumentsMatchingCollectionQuery(e,r,n)}getNextDocuments(e,r,n,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,o-s.size):k.resolve(Zr());let i=-1,l=s;return a.next(c=>k.forEach(c,(u,d)=>(i<d.largestBatchId&&(i=d.largestBatchId),s.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,H())).next(u=>({batchId:i,changes:cw(u)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new $(r)).next(n=>{let o=Mo();return n.isFoundDocument()&&(o=o.insert(n.key,n)),o})}getDocumentsMatchingCollectionGroupQuery(e,r,n){const o=r.collectionGroup;let s=Mo();return this.indexManager.getCollectionParents(e,o).next(a=>k.forEach(a,i=>{const l=function(c,u){return new ul(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(r,i.child(o));return this.getDocumentsMatchingCollectionQuery(e,l,n).next(c=>{c.forEach((u,d)=>{s=s.insert(u,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o))).next(s=>{o.forEach((i,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,je.newInvalidDocument(c)))});let a=Mo();return s.forEach((i,l)=>{const c=o.get(i);c!==void 0&&Jo(c.mutation,l,ct.empty(),ke.now()),hl(r,l)&&(a=a.insert(i,l))}),a})}}/**
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
 */class hS{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,r){return k.resolve(this.cs.get(r))}saveBundleMetadata(e,r){var n;return this.cs.set(r.id,{id:(n=r).id,version:n.version,createTime:Vt(n.createTime)}),k.resolve()}getNamedQuery(e,r){return k.resolve(this.hs.get(r))}saveNamedQuery(e,r){return this.hs.set(r.name,function(n){return{name:n.name,query:aS(n.bundledQuery),readTime:Vt(n.readTime)}}(r)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.overlays=new he($.comparator),this.ls=new Map}getOverlay(e,r){return k.resolve(this.overlays.get(r))}getOverlays(e,r){const n=Zr();return k.forEach(r,o=>this.getOverlay(e,o).next(s=>{s!==null&&n.set(o,s)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((o,s)=>{this.we(e,r,s)}),k.resolve()}removeOverlaysForBatchId(e,r,n){const o=this.ls.get(n);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(n)),k.resolve()}getOverlaysForCollection(e,r,n){const o=Zr(),s=r.length+1,a=new $(r.child("")),i=this.overlays.getIteratorFrom(a);for(;i.hasNext();){const l=i.getNext().value,c=l.getKey();if(!r.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&o.set(l.getKey(),l)}return k.resolve(o)}getOverlaysForCollectionGroup(e,r,n,o){let s=new he((c,u)=>c-u);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===r&&c.largestBatchId>n){let u=s.get(c.largestBatchId);u===null&&(u=Zr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const i=Zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>i.set(c,u)),!(i.size()>=o)););return k.resolve(i)}we(e,r,n){const o=this.overlays.get(n.key);if(o!==null){const a=this.ls.get(o.largestBatchId).delete(n.key);this.ls.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new LE(r,n));let s=this.ls.get(r);s===void 0&&(s=H(),this.ls.set(r,s)),this.ls.set(r,s.add(n.key))}}/**
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
 */class Sh{constructor(){this.fs=new Be(Ie.ds),this.ws=new Be(Ie._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,r){const n=new Ie(e,r);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.ys(new Ie(e,r))}ps(e,r){e.forEach(n=>this.removeReference(n,r))}Is(e){const r=new $(new ie([])),n=new Ie(r,e),o=new Ie(r,e+1),s=[];return this.ws.forEachInRange([n,o],a=>{this.ys(a),s.push(a.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const r=new $(new ie([])),n=new Ie(r,e),o=new Ie(r,e+1);let s=H();return this.ws.forEachInRange([n,o],a=>{s=s.add(a.key)}),s}containsKey(e){const r=new Ie(e,0),n=this.fs.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,r){this.key=e,this.As=r}static ds(e,r){return $.comparator(e.key,r.key)||Q(e.As,r.As)}static _s(e,r){return Q(e.As,r.As)||$.comparator(e.key,r.key)}}/**
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
 */class fS{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.vs=1,this.Rs=new Be(Ie.ds)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,o){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $E(s,r,n,o);this.mutationQueue.push(a);for(const i of o)this.Rs=this.Rs.add(new Ie(i.key,s)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,r){return k.resolve(this.Ps(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,o=this.bs(n),s=o<0?0:o;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,o],a=>{const i=this.Ps(a.As);s.push(i)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new Be(Q);return r.forEach(o=>{const s=new Ie(o,0),a=new Ie(o,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,a],i=>{n=n.add(i.As)})}),k.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,o=n.length+1;let s=n;$.isDocumentKey(s)||(s=s.child(""));const a=new Ie(new $(s),0);let i=new Be(Q);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===o&&(i=i.add(l.As)),!0)},a),k.resolve(this.Vs(i))}Vs(e){const r=[];return e.forEach(n=>{const o=this.Ps(n);o!==null&&r.push(o)}),r}removeMutationBatch(e,r){oe(this.Ss(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Rs;return k.forEach(r.mutations,o=>{const s=new Ie(o.key,r.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,r){const n=new Ie(r,0),o=this.Rs.firstAfterOrEqual(n);return k.resolve(r.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ss(e,r){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const r=this.bs(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class mS{constructor(e){this.Ds=e,this.docs=new he($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,o=this.docs.get(n),s=o?o.size:0,a=this.Ds(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return k.resolve(n?n.document.mutableCopy():je.newInvalidDocument(r))}getEntries(e,r){let n=sr();return r.forEach(o=>{const s=this.docs.get(o);n=n.insert(o,s?s.document.mutableCopy():je.newInvalidDocument(o))}),k.resolve(n)}getDocumentsMatchingQuery(e,r,n,o){let s=sr();const a=r.path,i=new $(a.child("")),l=this.docs.getIteratorFrom(i);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||ZI(JI(u),n)<=0||(o.has(u.key)||hl(r,u))&&(s=s.insert(u.key,u.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,r,n,o){j()}Cs(e,r){return k.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new gS(this)}getSize(e){return k.resolve(this.size)}}class gS extends cS{constructor(e){super(),this.os=e}applyChanges(e){const r=[];return this.changes.forEach((n,o)=>{o.isValidDocument()?r.push(this.os.addEntry(e,o)):this.os.removeEntry(n)}),k.waitFor(r)}getFromCache(e,r){return this.os.getEntry(e,r)}getAllFromCache(e,r){return this.os.getEntries(e,r)}}/**
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
 */class yS{constructor(e){this.persistence=e,this.xs=new yo(r=>vh(r),wh),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Sh,this.targetCount=0,this.Ms=io.kn()}forEachTarget(e,r){return this.xs.forEach((n,o)=>r(o)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Ns&&(this.Ns=r),k.resolve()}Fn(e){this.xs.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.Ms=new io(r),this.highestTargetId=r),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,r){return this.Fn(r),this.targetCount+=1,k.resolve()}updateTargetData(e,r){return this.Fn(r),k.resolve()}removeTargetData(e,r){return this.xs.delete(r.target),this.ks.Is(r.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,r,n){let o=0;const s=[];return this.xs.forEach((a,i)=>{i.sequenceNumber<=r&&n.get(i.targetId)===null&&(this.xs.delete(a),s.push(this.removeMatchingKeysForTargetId(e,i.targetId)),o++)}),k.waitFor(s).next(()=>o)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,r){const n=this.xs.get(r)||null;return k.resolve(n)}addMatchingKeys(e,r,n){return this.ks.gs(r,n),k.resolve()}removeMatchingKeys(e,r,n){this.ks.ps(r,n);const o=this.persistence.referenceDelegate,s=[];return o&&r.forEach(a=>{s.push(o.markPotentiallyOrphaned(e,a))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,r){return this.ks.Is(r),k.resolve()}getMatchingKeysForTargetId(e,r){const n=this.ks.Es(r);return k.resolve(n)}containsKey(e,r){return k.resolve(this.ks.containsKey(r))}}/**
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
 */class vS{constructor(e,r){this.$s={},this.overlays={},this.Os=new fh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new yS(this),this.indexManager=new iS,this.remoteDocumentCache=function(n){return new mS(n)}(n=>this.referenceDelegate.Ls(n)),this.serializer=new sS(r),this.qs=new hS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new pS,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.$s[e.toKey()];return n||(n=new fS(r,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,r,n){_("MemoryPersistence","Starting transaction:",e);const o=new wS(this.Os.next());return this.referenceDelegate.Us(),n(o).next(s=>this.referenceDelegate.Ks(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Gs(e,r){return k.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,r)))}}class wS extends tE{constructor(e){super(),this.currentSequenceNumber=e}}class Dh{constructor(e){this.persistence=e,this.Qs=new Sh,this.js=null}static zs(e){return new Dh(e)}get Ws(){if(this.js)return this.js;throw j()}addReference(e,r,n){return this.Qs.addReference(n,r),this.Ws.delete(n.toString()),k.resolve()}removeReference(e,r,n){return this.Qs.removeReference(n,r),this.Ws.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,r){return this.Ws.add(r.toString()),k.resolve()}removeTarget(e,r){this.Qs.Is(r.targetId).forEach(o=>this.Ws.add(o.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(o=>{o.forEach(s=>this.Ws.add(s.toString()))}).next(()=>n.removeTargetData(e,r))}Us(){this.js=new Set}Ks(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ws,n=>{const o=$.fromPath(n);return this.Hs(e,o).next(s=>{s||r.removeEntry(o,F.min())})}).next(()=>(this.js=null,r.apply(e)))}updateLimboDocument(e,r){return this.Hs(e,r).next(n=>{n?this.Ws.delete(r.toString()):this.Ws.add(r.toString())})}Ls(e){return 0}Hs(e,r){return k.or([()=>k.resolve(this.Qs.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Gs(e,r)])}}/**
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
 */class Ph{constructor(e,r,n,o){this.targetId=e,this.fromCache=r,this.Fi=n,this.Bi=o}static Li(e,r){let n=H(),o=H();for(const s of r.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new Ph(e,r.fromCache,n,o)}}/**
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
 */class bS{constructor(){this.qi=!1}initialize(e,r){this.Ui=e,this.indexManager=r,this.qi=!0}getDocumentsMatchingQuery(e,r,n,o){return this.Ki(e,r).next(s=>s||this.Gi(e,r,o,n)).next(s=>s||this.Qi(e,r))}Ki(e,r){if(Mf(r))return k.resolve(null);let n=or(r);return this.indexManager.getIndexType(e,n).next(o=>o===0?null:(r.limit!==null&&o===1&&(r=Mu(r,null,"F"),n=or(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=H(...s);return this.Ui.getDocuments(e,a).next(i=>this.indexManager.getMinOffset(e,n).next(l=>{const c=this.ji(r,i);return this.zi(r,c,a,l.readTime)?this.Ki(e,Mu(r,null,"F")):this.Wi(e,c,r,l)}))})))}Gi(e,r,n,o){return Mf(r)||o.isEqual(F.min())?this.Qi(e,r):this.Ui.getDocuments(e,n).next(s=>{const a=this.ji(r,s);return this.zi(r,a,n,o)?this.Qi(e,r):(Rf()<=Y.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),zu(r)),this.Wi(e,a,r,XI(o,-1)))})}ji(e,r){let n=new Be(iw(e));return r.forEach((o,s)=>{hl(e,s)&&(n=n.add(s))}),n}zi(e,r,n,o){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const s=e.limitType==="F"?r.last():r.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Qi(e,r){return Rf()<=Y.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",zu(r)),this.Ui.getDocumentsMatchingQuery(e,r,Nr.min())}Wi(e,r,n,o){return this.Ui.getDocumentsMatchingQuery(e,n,o).next(s=>(r.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class CS{constructor(e,r,n,o){this.persistence=e,this.Hi=r,this.serializer=o,this.Ji=new he(Q),this.Yi=new yo(s=>vh(s),wh),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dS(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ji))}}function kS(t,e,r,n){return new CS(t,e,r,n)}async function Tw(t,e){const r=V(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let o;return r.mutationQueue.getAllMutationBatches(n).next(s=>(o=s,r.tr(e),r.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],i=[];let l=H();for(const c of o){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){i.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return r.localDocuments.getDocuments(n,l).next(c=>({er:c,removedBatchIds:a,addedBatchIds:i}))})})}function IS(t,e){const r=V(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const o=e.batch.keys(),s=r.Zi.newChangeBuffer({trackRemovals:!0});return function(a,i,l,c){const u=l.batch,d=u.keys();let h=k.resolve();return d.forEach(g=>{h=h.next(()=>c.getEntry(i,g)).next(y=>{const v=l.docVersions.get(g);oe(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(i,u))}(r,n,e,s).next(()=>s.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,o,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let i=H();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(i=i.add(a.batch.mutations[l].key));return i}(e))).next(()=>r.localDocuments.getDocuments(n,o))})}function Ow(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Bs.getLastRemoteSnapshotVersion(r))}function ES(t,e){const r=V(t),n=e.snapshotVersion;let o=r.Ji;return r.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=r.Zi.newChangeBuffer({trackRemovals:!0});o=r.Ji;const i=[];e.targetChanges.forEach((u,d)=>{const h=o.get(d);if(!h)return;i.push(r.Bs.removeMatchingKeys(s,u.removedDocuments,d).next(()=>r.Bs.addMatchingKeys(s,u.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,n)),o=o.insert(d,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(h,g,u)&&i.push(r.Bs.updateTargetData(s,g))});let l=sr(),c=H();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&i.push(r.persistence.referenceDelegate.updateLimboDocument(s,u))}),i.push(SS(s,a,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!n.isEqual(F.min())){const u=r.Bs.getLastRemoteSnapshotVersion(s).next(d=>r.Bs.setTargetsMetadata(s,s.currentSequenceNumber,n));i.push(u)}return k.waitFor(i).next(()=>a.apply(s)).next(()=>r.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(r.Ji=o,s))}function SS(t,e,r){let n=H(),o=H();return r.forEach(s=>n=n.add(s)),e.getEntries(t,n).next(s=>{let a=sr();return r.forEach((i,l)=>{const c=s.get(i);l.isFoundDocument()!==c.isFoundDocument()&&(o=o.add(i)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(i,l.readTime),a=a.insert(i,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),a=a.insert(i,l)):_("LocalStore","Ignoring outdated watch update for ",i,". Current version:",c.version," Watch version:",l.version)}),{nr:a,sr:o}})}function DS(t,e){const r=V(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function PS(t,e){const r=V(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let o;return r.Bs.getTargetData(n,e).next(s=>s?(o=s,k.resolve(o)):r.Bs.allocateTargetId(n).next(a=>(o=new gr(e,a,"TargetPurposeListen",n.currentSequenceNumber),r.Bs.addTargetData(n,o).next(()=>o))))}).then(n=>{const o=r.Ji.get(n.targetId);return(o===null||n.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(r.Ji=r.Ji.insert(n.targetId,n),r.Yi.set(e,n.targetId)),n})}async function Bu(t,e,r){const n=V(t),o=n.Ji.get(e),s=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!Gs(a))throw a;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ji=n.Ji.remove(e),n.Yi.delete(o.target)}function Gf(t,e,r){const n=V(t);let o=F.min(),s=H();return n.persistence.runTransaction("Execute query","readonly",a=>function(i,l,c){const u=V(i),d=u.Yi.get(c);return d!==void 0?k.resolve(u.Ji.get(d)):u.Bs.getTargetData(l,c)}(n,a,or(e)).next(i=>{if(i)return o=i.lastLimboFreeSnapshotVersion,n.Bs.getMatchingKeysForTargetId(a,i.targetId).next(l=>{s=l})}).next(()=>n.Hi.getDocumentsMatchingQuery(a,e,r?o:F.min(),r?s:H())).next(i=>(RS(n,bE(e),i),{documents:i,ir:s})))}function RS(t,e,r){let n=t.Xi.get(e)||F.min();r.forEach((o,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),t.Xi.set(e,n)}class Qf{constructor(){this.activeTargetIds=DE()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TS{constructor(){this.Hr=new Qf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,r,n){this.Jr[e]=r}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Qf,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OS{Yr(e){}shutdown(){}}/**
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
 */class Yf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da=null;function hc(){return Da===null?Da=268435456+Math.round(2147483648*Math.random()):Da++,"0x"+Da.toString(16)}/**
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
 */const xS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _S{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Le="WebChannelConnection";class NS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.mo=r+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,r,n,o,s){const a=hc(),i=this.To(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,i,n);const l={};return this.Eo(l,o,s),this.Ao(e,i,l,n).then(c=>(_("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw no("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",i,"request:",n),c})}vo(e,r,n,o,s,a){return this.Io(e,r,n,o,s)}Eo(e,r,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+go,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>e[s]=o),n&&n.headers.forEach((o,s)=>e[s]=o)}To(e,r){const n=xS[e];return`${this.mo}/v1/${r}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,r,n,o){const s=hc();return new Promise((a,i)=>{const l=new FI;l.setWithCredentials(!0),l.listenOnce(MI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uc.NO_ERROR:const u=l.getResponseJson();_(Le,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),a(u);break;case uc.TIMEOUT:_(Le,`RPC '${e}' ${s} timed out`),i(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const d=l.getStatus();if(_(Le,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const y=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(D)>=0?D:b.UNKNOWN}(g.status);i(new A(y,g.message))}else i(new A(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else i(new A(b.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{_(Le,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(o);_(Le,`RPC '${e}' ${s} sending request:`,o),l.send(r,"POST",c,n,15)})}Ro(e,r,n){const o=hc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=$I(),i=LI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new jI({})),this.Eo(l.initMessageHeaders,r,n),l.encodeInitMessageHeaders=!0;const u=s.join("");_(Le,`Creating RPC '${e}' stream ${o}: ${u}`,l);const d=a.createWebChannel(u,l);let h=!1,g=!1;const y=new _S({ro:D=>{g?_(Le,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(h||(_(Le,`Opening RPC '${e}' stream ${o} transport.`),d.open(),h=!0),_(Le,`RPC '${e}' stream ${o} sending:`,D),d.send(D))},oo:()=>d.close()}),v=(D,f,p)=>{D.listen(f,m=>{try{p(m)}catch(w){setTimeout(()=>{throw w},0)}})};return v(d,ka.EventType.OPEN,()=>{g||_(Le,`RPC '${e}' stream ${o} transport opened.`)}),v(d,ka.EventType.CLOSE,()=>{g||(g=!0,_(Le,`RPC '${e}' stream ${o} transport closed`),y.wo())}),v(d,ka.EventType.ERROR,D=>{g||(g=!0,no(Le,`RPC '${e}' stream ${o} transport errored:`,D),y.wo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),v(d,ka.EventType.MESSAGE,D=>{var f;if(!g){const p=D.data[0];oe(!!p);const m=p,w=m.error||((f=m[0])===null||f===void 0?void 0:f.error);if(w){_(Le,`RPC '${e}' stream ${o} received error:`,w);const S=w.status;let T=function(x){const Z=ge[x];if(Z!==void 0)return bw(Z)}(S),O=w.message;T===void 0&&(T=b.INTERNAL,O="Unknown error status: "+S+" with message "+w.message),g=!0,y.wo(new A(T,O)),d.close()}else _(Le,`RPC '${e}' stream ${o} received:`,p),y._o(p)}}),v(i,zI.STAT_EVENT,D=>{D.stat===Df.PROXY?_(Le,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===Df.NOPROXY&&_(Le,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function pc(){return typeof document<"u"?document:null}/**
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
 */function gl(t){return new qE(t,!0)}/**
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
 */class xw{constructor(e,r,n=1e3,o=1.5,s=6e4){this.ii=e,this.timerId=r,this.Po=n,this.bo=o,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const r=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),o=Math.max(0,r-n);o>0&&_("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.So} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,o,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class _w{constructor(e,r,n,o,s,a,i,l){this.ii=e,this.$o=n,this.Oo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=i,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new xw(e,r)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,r){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():r&&r.code===b.RESOURCE_EXHAUSTED?(nr(r.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):r&&r.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(r)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),r=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,o])=>{this.Fo===r&&this.Zo(n,o)},n=>{e(()=>{const o=new A(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.tu(o)})})}Zo(e,r){const n=this.Xo(this.Fo);this.stream=this.eu(e,r),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(o=>{n(()=>this.tu(o))}),this.stream.onMessage(o=>{n(()=>this.onMessage(o))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return r=>{this.ii.enqueueAndForget(()=>this.Fo===e?r():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends _w{constructor(e,r,n,o,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,o,a),this.serializer=s}eu(e,r){return this.connection.Ro("Listen",e,r)}onMessage(e){this.qo.reset();const r=GE(this.serializer,e),n=function(o){if(!("targetChange"in o))return F.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Vt(s.readTime):F.min()}(e);return this.listener.nu(r,n)}su(e){const r={};r.database=Uu(this.serializer),r.addTarget=function(o,s){let a;const i=s.target;if(a=Lu(i)?{documents:XE(o,i)}:{query:JE(o,i)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=Iw(o,s.resumeToken);const l=ju(o,s.expectedCount);l!==null&&(a.expectedCount=l)}else if(s.snapshotVersion.compareTo(F.min())>0){a.readTime=Di(o,s.snapshotVersion.toTimestamp());const l=ju(o,s.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const n=eS(this.serializer,e);n&&(r.labels=n),this.Wo(r)}iu(e){const r={};r.database=Uu(this.serializer),r.removeTarget=e,this.Wo(r)}}class $S extends _w{constructor(e,r,n,o,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,o,a),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,r){return this.connection.Ro("Write",e,r)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const r=YE(e.writeResults,e.commitTime),n=Vt(e.commitTime);return this.listener.cu(n,r)}return oe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Uu(this.serializer),this.Wo(e)}uu(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>QE(this.serializer,n))};this.Wo(r)}}/**
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
 */class LS extends class{}{constructor(e,r,n,o){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=o,this.lu=!1}fu(){if(this.lu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,r,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Io(e,r,n,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new A(b.UNKNOWN,o.toString())})}vo(e,r,n,o){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,r,n,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(b.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class MS{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(nr(r),this.mu=!1):_("OnlineStateTracker",r)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class zS{constructor(e,r,n,o,s){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(a=>{n.enqueueAndForget(async()=>{Cn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(i){const l=V(i);l.vu.add(4),await Xs(l),l.bu.set("Unknown"),l.vu.delete(4),await yl(l)}(this))})}),this.bu=new MS(n,o)}}async function yl(t){if(Cn(t))for(const e of t.Ru)await e(!0)}async function Xs(t){for(const e of t.Ru)await e(!1)}function Nw(t,e){const r=V(t);r.Au.has(e.targetId)||(r.Au.set(e.targetId,e),Oh(r)?Th(r):vo(r).Ko()&&Rh(r,e))}function Aw(t,e){const r=V(t),n=vo(r);r.Au.delete(e),n.Ko()&&$w(r,e),r.Au.size===0&&(n.Ko()?n.jo():Cn(r)&&r.bu.set("Unknown"))}function Rh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}vo(t).su(e)}function $w(t,e){t.Vu.qt(e),vo(t).iu(e)}function Th(t){t.Vu=new VE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.bu.gu()}function Oh(t){return Cn(t)&&!vo(t).Uo()&&t.Au.size>0}function Cn(t){return V(t).vu.size===0}function Lw(t){t.Vu=void 0}async function jS(t){t.Au.forEach((e,r)=>{Rh(t,e)})}async function FS(t,e){Lw(t),Oh(t)?(t.bu.Iu(e),Th(t)):t.bu.set("Unknown")}async function VS(t,e,r){if(t.bu.set("Online"),e instanceof kw&&e.state===2&&e.cause)try{await async function(n,o){const s=o.cause;for(const a of o.targetIds)n.Au.has(a)&&(await n.remoteSyncer.rejectListen(a,s),n.Au.delete(a),n.Vu.removeTarget(a))}(t,e)}catch(n){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Pi(t,n)}else if(e instanceof Va?t.Vu.Ht(e):e instanceof Cw?t.Vu.ne(e):t.Vu.Xt(e),!r.isEqual(F.min()))try{const n=await Ow(t.localStore);r.compareTo(n)>=0&&await function(o,s){const a=o.Vu.ce(s);return a.targetChanges.forEach((i,l)=>{if(i.resumeToken.approximateByteSize()>0){const c=o.Au.get(l);c&&o.Au.set(l,c.withResumeToken(i.resumeToken,s))}}),a.targetMismatches.forEach((i,l)=>{const c=o.Au.get(i);if(!c)return;o.Au.set(i,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),$w(o,i);const u=new gr(c.target,i,l,c.sequenceNumber);Rh(o,u)}),o.remoteSyncer.applyRemoteEvent(a)}(t,r)}catch(n){_("RemoteStore","Failed to raise snapshot:",n),await Pi(t,n)}}async function Pi(t,e,r){if(!Gs(e))throw e;t.vu.add(1),await Xs(t),t.bu.set("Offline"),r||(r=()=>Ow(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await r(),t.vu.delete(1),await yl(t)})}function Mw(t,e){return e().catch(r=>Pi(t,r,e))}async function vl(t){const e=V(t),r=$r(e);let n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;US(e);)try{const o=await DS(e.localStore,n);if(o===null){e.Eu.length===0&&r.jo();break}n=o.batchId,BS(e,o)}catch(o){await Pi(e,o)}zw(e)&&jw(e)}function US(t){return Cn(t)&&t.Eu.length<10}function BS(t,e){t.Eu.push(e);const r=$r(t);r.Ko()&&r.ou&&r.uu(e.mutations)}function zw(t){return Cn(t)&&!$r(t).Uo()&&t.Eu.length>0}function jw(t){$r(t).start()}async function HS(t){$r(t).hu()}async function qS(t){const e=$r(t);for(const r of t.Eu)e.uu(r.mutations)}async function KS(t,e,r){const n=t.Eu.shift(),o=Ch.from(n,e,r);await Mw(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await vl(t)}async function WS(t,e){e&&$r(t).ou&&await async function(r,n){if(o=n.code,zE(o)&&o!==b.ABORTED){const s=r.Eu.shift();$r(r).Qo(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,n)),await vl(r)}var o}(t,e),zw(t)&&jw(t)}async function Xf(t,e){const r=V(t);r.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const n=Cn(r);r.vu.add(3),await Xs(r),n&&r.bu.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.vu.delete(3),await yl(r)}async function GS(t,e){const r=V(t);e?(r.vu.delete(2),await yl(r)):e||(r.vu.add(2),await Xs(r),r.bu.set("Unknown"))}function vo(t){return t.Su||(t.Su=function(e,r,n){const o=V(e);return o.fu(),new AS(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,n)}(t.datastore,t.asyncQueue,{uo:jS.bind(null,t),ao:FS.bind(null,t),nu:VS.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Oh(t)?Th(t):t.bu.set("Unknown")):(await t.Su.stop(),Lw(t))})),t.Su}function $r(t){return t.Du||(t.Du=function(e,r,n){const o=V(e);return o.fu(),new $S(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,n)}(t.datastore,t.asyncQueue,{uo:HS.bind(null,t),ao:WS.bind(null,t),au:qS.bind(null,t),cu:KS.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await vl(t)):(await t.Du.stop(),t.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class xh{constructor(e,r,n,o,s){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=o,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,r,n,o,s){const a=Date.now()+n,i=new xh(e,r,a,o,s);return i.start(n),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _h(t,e){if(nr("AsyncQueue",`${e}: ${t}`),Gs(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gn{constructor(e){this.comparator=e?(r,n)=>e(r,n)||$.comparator(r.key,n.key):(r,n)=>$.comparator(r.key,n.key),this.keyedMap=Mo(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const o=r.getNext().key,s=n.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new Gn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class Jf{constructor(){this.Cu=new he($.comparator)}track(e){const r=e.doc.key,n=this.Cu.get(r);n?e.type!==0&&n.type===3?this.Cu=this.Cu.insert(r,e):e.type===3&&n.type!==1?this.Cu=this.Cu.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Cu=this.Cu.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Cu=this.Cu.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Cu=this.Cu.remove(r):e.type===1&&n.type===2?this.Cu=this.Cu.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Cu=this.Cu.insert(r,{type:2,doc:e.doc}):j():this.Cu=this.Cu.insert(r,e)}xu(){const e=[];return this.Cu.inorderTraversal((r,n)=>{e.push(n)}),e}}class lo{constructor(e,r,n,o,s,a,i,l,c){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=i,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,r,n,o,s){const a=[];return r.forEach(i=>{a.push({type:0,doc:i})}),new lo(e,r,Gn.emptySet(r),a,n,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(r[o].type!==n[o].type||!r[o].doc.isEqual(n[o].doc))return!1;return!0}}/**
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
 */class QS{constructor(){this.Nu=void 0,this.listeners=[]}}class YS{constructor(){this.queries=new yo(e=>aw(e),dl),this.onlineState="Unknown",this.ku=new Set}}async function XS(t,e){const r=V(t),n=e.query;let o=!1,s=r.queries.get(n);if(s||(o=!0,s=new QS),o)try{s.Nu=await r.onListen(n)}catch(a){const i=_h(a,`Initialization of query '${zu(e.query)}' failed`);return void e.onError(i)}r.queries.set(n,s),s.listeners.push(e),e.Mu(r.onlineState),s.Nu&&e.$u(s.Nu)&&Nh(r)}async function JS(t,e){const r=V(t),n=e.query;let o=!1;const s=r.queries.get(n);if(s){const a=s.listeners.indexOf(e);a>=0&&(s.listeners.splice(a,1),o=s.listeners.length===0)}if(o)return r.queries.delete(n),r.onUnlisten(n)}function ZS(t,e){const r=V(t);let n=!1;for(const o of e){const s=o.query,a=r.queries.get(s);if(a){for(const i of a.listeners)i.$u(o)&&(n=!0);a.Nu=o}}n&&Nh(r)}function eD(t,e,r){const n=V(t),o=n.queries.get(e);if(o)for(const s of o.listeners)s.onError(r);n.queries.delete(e)}function Nh(t){t.ku.forEach(e=>{e.next()})}class tD{constructor(e,r,n){this.query=e,this.Ou=r,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const n=[];for(const o of e.docChanges)o.type!==3&&n.push(o);e=new lo(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),r=!0):this.qu(e,this.onlineState)&&(this.Uu(e),r=!0),this.Bu=e,r}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let r=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),r=!0),r}qu(e,r){if(!e.fromCache)return!0;const n=r!=="Offline";return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const r=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Uu(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Fw{constructor(e){this.key=e}}class Vw{constructor(e){this.key=e}}class rD{constructor(e,r){this.query=e,this.Yu=r,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=iw(e),this.ec=new Gn(this.tc)}get nc(){return this.Yu}sc(e,r){const n=r?r.ic:new Jf,o=r?r.ec:this.ec;let s=r?r.mutatedKeys:this.mutatedKeys,a=o,i=!1;const l=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,c=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((u,d)=>{const h=o.get(u),g=hl(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;h&&g?h.data.isEqual(g.data)?y!==v&&(n.track({type:3,doc:g}),D=!0):this.rc(h,g)||(n.track({type:2,doc:g}),D=!0,(l&&this.tc(g,l)>0||c&&this.tc(g,c)<0)&&(i=!0)):!h&&g?(n.track({type:0,doc:g}),D=!0):h&&!g&&(n.track({type:1,doc:h}),D=!0,(l||c)&&(i=!0)),D&&(g?(a=a.add(g),s=v?s.add(u):s.delete(u)):(a=a.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const u=this.query.limitType==="F"?a.last():a.first();a=a.delete(u.key),s=s.delete(u.key),n.track({type:1,doc:u})}return{ec:a,ic:n,zi:i,mutatedKeys:s}}rc(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n){const o=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((c,u)=>function(d,h){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(d)-g(h)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(n);const a=r?this.uc():[],i=this.Zu.size===0&&this.current?1:0,l=i!==this.Xu;return this.Xu=i,s.length!==0||l?{snapshot:new lo(this.query,e.ec,o,s,e.mutatedKeys,i===0,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:a}:{cc:a}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Jf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(r=>this.Yu=this.Yu.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Yu=this.Yu.delete(r)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(n=>{this.ac(n.key)&&(this.Zu=this.Zu.add(n.key))});const r=[];return e.forEach(n=>{this.Zu.has(n)||r.push(new Vw(n))}),this.Zu.forEach(n=>{e.has(n)||r.push(new Fw(n))}),r}hc(e){this.Yu=e.ir,this.Zu=H();const r=this.sc(e.documents);return this.applyChanges(r,!0)}lc(){return lo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class nD{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class oD{constructor(e){this.key=e,this.fc=!1}}class sD{constructor(e,r,n,o,s,a){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.dc={},this.wc=new yo(i=>aw(i),dl),this._c=new Map,this.mc=new Set,this.gc=new he($.comparator),this.yc=new Map,this.Ic=new Sh,this.Tc={},this.Ec=new Map,this.Ac=io.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function aD(t,e){const r=gD(t);let n,o;const s=r.wc.get(e);if(s)n=s.targetId,r.sharedClientState.addLocalQueryTarget(n),o=s.view.lc();else{const a=await PS(r.localStore,or(e)),i=r.sharedClientState.addLocalQueryTarget(a.targetId);n=a.targetId,o=await iD(r,e,n,i==="current",a.resumeToken),r.isPrimaryClient&&Nw(r.remoteStore,a)}return o}async function iD(t,e,r,n,o){t.Rc=(d,h,g)=>async function(y,v,D,f){let p=v.view.sc(D);p.zi&&(p=await Gf(y.localStore,v.query,!1).then(({documents:S})=>v.view.sc(S,p)));const m=f&&f.targetChanges.get(v.targetId),w=v.view.applyChanges(p,y.isPrimaryClient,m);return em(y,v.targetId,w.cc),w.snapshot}(t,d,h,g);const s=await Gf(t.localStore,e,!0),a=new rD(e,s.ir),i=a.sc(s.documents),l=Ys.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",o),c=a.applyChanges(i,t.isPrimaryClient,l);em(t,r,c.cc);const u=new nD(e,r,a);return t.wc.set(e,u),t._c.has(r)?t._c.get(r).push(e):t._c.set(r,[e]),c.snapshot}async function lD(t,e){const r=V(t),n=r.wc.get(e),o=r._c.get(n.targetId);if(o.length>1)return r._c.set(n.targetId,o.filter(s=>!dl(s,e))),void r.wc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(n.targetId),r.sharedClientState.isActiveQueryTarget(n.targetId)||await Bu(r.localStore,n.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(n.targetId),Aw(r.remoteStore,n.targetId),Hu(r,n.targetId)}).catch(Ws)):(Hu(r,n.targetId),await Bu(r.localStore,n.targetId,!0))}async function cD(t,e,r){const n=yD(t);try{const o=await function(s,a){const i=V(s),l=ke.now(),c=a.reduce((h,g)=>h.add(g.key),H());let u,d;return i.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=sr(),y=H();return i.Zi.getEntries(h,c).next(v=>{g=v,g.forEach((D,f)=>{f.isValidDocument()||(y=y.add(D))})}).next(()=>i.localDocuments.getOverlayedDocuments(h,g)).next(v=>{u=v;const D=[];for(const f of a){const p=NE(f,u.get(f.key).overlayedDocument);p!=null&&D.push(new Ur(f.key,p,Zv(p.value.mapValue),Ft.exists(!0)))}return i.mutationQueue.addMutationBatch(h,l,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(u,y);return i.documentOverlayCache.saveOverlays(h,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:cw(u)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(o.batchId),function(s,a,i){let l=s.Tc[s.currentUser.toKey()];l||(l=new he(Q)),l=l.insert(a,i),s.Tc[s.currentUser.toKey()]=l}(n,o.batchId,r),await Js(n,o.changes),await vl(n.remoteStore)}catch(o){const s=_h(o,"Failed to persist write");r.reject(s)}}async function Uw(t,e){const r=V(t);try{const n=await ES(r.localStore,e);e.targetChanges.forEach((o,s)=>{const a=r.yc.get(s);a&&(oe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.fc=!0:o.modifiedDocuments.size>0?oe(a.fc):o.removedDocuments.size>0&&(oe(a.fc),a.fc=!1))}),await Js(r,n,e)}catch(n){await Ws(n)}}function Zf(t,e,r){const n=V(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const o=[];n.wc.forEach((s,a)=>{const i=a.view.Mu(e);i.snapshot&&o.push(i.snapshot)}),function(s,a){const i=V(s);i.onlineState=a;let l=!1;i.queries.forEach((c,u)=>{for(const d of u.listeners)d.Mu(a)&&(l=!0)}),l&&Nh(i)}(n.eventManager,e),o.length&&n.dc.nu(o),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function uD(t,e,r){const n=V(t);n.sharedClientState.updateQueryState(e,"rejected",r);const o=n.yc.get(e),s=o&&o.key;if(s){let a=new he($.comparator);a=a.insert(s,je.newNoDocument(s,F.min()));const i=H().add(s),l=new ml(F.min(),new Map,new he(Q),a,i);await Uw(n,l),n.gc=n.gc.remove(s),n.yc.delete(e),Ah(n)}else await Bu(n.localStore,e,!1).then(()=>Hu(n,e,r)).catch(Ws)}async function dD(t,e){const r=V(t),n=e.batch.batchId;try{const o=await IS(r.localStore,e);Hw(r,n,null),Bw(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await Js(r,o)}catch(o){await Ws(o)}}async function hD(t,e,r){const n=V(t);try{const o=await function(s,a){const i=V(s);return i.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return i.mutationQueue.lookupMutationBatch(l,a).next(u=>(oe(u!==null),c=u.keys(),i.mutationQueue.removeMutationBatch(l,u))).next(()=>i.mutationQueue.performConsistencyCheck(l)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>i.localDocuments.getDocuments(l,c))})}(n.localStore,e);Hw(n,e,r),Bw(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await Js(n,o)}catch(o){await Ws(o)}}function Bw(t,e){(t.Ec.get(e)||[]).forEach(r=>{r.resolve()}),t.Ec.delete(e)}function Hw(t,e,r){const n=V(t);let o=n.Tc[n.currentUser.toKey()];if(o){const s=o.get(e);s&&(r?s.reject(r):s.resolve(),o=o.remove(e)),n.Tc[n.currentUser.toKey()]=o}}function Hu(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t._c.get(e))t.wc.delete(n),r&&t.dc.Pc(n,r);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(n=>{t.Ic.containsKey(n)||qw(t,n)})}function qw(t,e){t.mc.delete(e.path.canonicalString());const r=t.gc.get(e);r!==null&&(Aw(t.remoteStore,r),t.gc=t.gc.remove(e),t.yc.delete(r),Ah(t))}function em(t,e,r){for(const n of r)n instanceof Fw?(t.Ic.addReference(n.key,e),pD(t,n)):n instanceof Vw?(_("SyncEngine","Document no longer in limbo: "+n.key),t.Ic.removeReference(n.key,e),t.Ic.containsKey(n.key)||qw(t,n.key)):j()}function pD(t,e){const r=e.key,n=r.path.canonicalString();t.gc.get(r)||t.mc.has(n)||(_("SyncEngine","New document in limbo: "+r),t.mc.add(n),Ah(t))}function Ah(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const r=new $(ie.fromString(e)),n=t.Ac.next();t.yc.set(n,new oD(r)),t.gc=t.gc.insert(r,n),Nw(t.remoteStore,new gr(or(bh(r.path)),n,"TargetPurposeLimboResolution",fh.ct))}}async function Js(t,e,r){const n=V(t),o=[],s=[],a=[];n.wc.isEmpty()||(n.wc.forEach((i,l)=>{a.push(n.Rc(l,e,r).then(c=>{if((c||r)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){o.push(c);const u=Ph.Li(l.targetId,c);s.push(u)}}))}),await Promise.all(a),n.dc.nu(o),await async function(i,l){const c=V(i);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(l,d=>k.forEach(d.Fi,h=>c.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>k.forEach(d.Bi,h=>c.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!Gs(u))throw u;_("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const h=c.Ji.get(d),g=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(g);c.Ji=c.Ji.insert(d,y)}}}(n.localStore,s))}async function fD(t,e){const r=V(t);if(!r.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const n=await Tw(r.localStore,e);r.currentUser=e,function(o,s){o.Ec.forEach(a=>{a.forEach(i=>{i.reject(new A(b.CANCELLED,s))})}),o.Ec.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Js(r,n.er)}}function mD(t,e){const r=V(t),n=r.yc.get(e);if(n&&n.fc)return H().add(n.key);{let o=H();const s=r._c.get(e);if(!s)return o;for(const a of s){const i=r.wc.get(a);o=o.unionWith(i.view.nc)}return o}}function gD(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uD.bind(null,e),e.dc.nu=ZS.bind(null,e.eventManager),e.dc.Pc=eD.bind(null,e.eventManager),e}function yD(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hD.bind(null,e),e}class tm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,r){return null}createIndexBackfillerScheduler(e,r){return null}createLocalStore(e){return kS(this.persistence,new bS,e.initialUser,this.serializer)}createPersistence(e){return new vS(Dh.zs,this.serializer)}createSharedClientState(e){return new TS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vD{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Zf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=fD.bind(null,this.syncEngine),await GS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YS}createDatastore(e){const r=gl(e.databaseInfo.databaseId),n=(o=e.databaseInfo,new NS(o));var o;return function(s,a,i,l){return new LS(s,a,i,l)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return r=this.localStore,n=this.datastore,o=e.asyncQueue,s=i=>Zf(this.syncEngine,i,0),a=Yf.D()?new Yf:new OS,new zS(r,n,o,s,a);var r,n,o,s,a}createSyncEngine(e,r){return function(n,o,s,a,i,l,c){const u=new sD(n,o,s,a,i,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}terminate(){return async function(e){const r=V(e);_("RemoteStore","RemoteStore shutting down."),r.vu.add(5),await Xs(r),r.Pu.shutdown(),r.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class wD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,r){this.muted||setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class bD{constructor(e,r,n,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=o,this.user=Me.UNAUTHENTICATED,this.clientId=Yv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=_h(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const r=await t.getConfiguration();await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async o=>{n.isEqual(o)||(await Tw(e.localStore,o),n=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rm(t,e){t.asyncQueue.verifyOperationInProgress();const r=await kD(t);_("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(r,n),t.setCredentialChangeListener(o=>Xf(e.remoteStore,o)),t.setAppCheckTokenChangeListener((o,s)=>Xf(e.remoteStore,s)),t._onlineComponents=e}function CD(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!CD(r))throw r;no("Error using user provided cache. Falling back to memory cache: "+r),await fc(t,new tm)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await fc(t,new tm);return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await rm(t,t._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await rm(t,new vD))),t._onlineComponents}function ID(t){return Kw(t).then(e=>e.syncEngine)}async function ED(t){const e=await Kw(t),r=e.eventManager;return r.onListen=aD.bind(null,e.syncEngine),r.onUnlisten=lD.bind(null,e.syncEngine),r}function SD(t,e,r={}){const n=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,i,l){const c=new wD({next:d=>{s.enqueueAndForget(()=>JS(o,u));const h=d.docs.has(a);!h&&d.fromCache?l.reject(new A(b.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&i&&i.source==="server"?l.reject(new A(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new tD(bh(a.path),c,{includeMetadataChanges:!0,Ku:!0});return XS(o,u)}(await ED(t),t.asyncQueue,e,r,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const nm=new Map;/**
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
 */function Gw(t,e,r){if(!r)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DD(t,e,r,n){if(e===!0&&n===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function om(t){if(!$.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sm(t){if($.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=$h(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
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
 */class am{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ww((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new A(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new A(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new A(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(r=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,r.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var r,n}}class wl{constructor(e,r,n,o){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new am({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new am(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UI;switch(r.type){case"firstParty":return new KI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=nm.get(e);r&&(_("ComponentProvider","Removing Datastore"),nm.delete(e),r.terminate())}(this),Promise.resolve()}}function PD(t,e,r,n={}){var o;const s=(t=fn(t,wl))._getSettings(),a=`${e}:${r}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let i,l;if(typeof n.mockUserToken=="string")i=n.mockUserToken,l=Me.MOCK_USER;else{i=yC(n.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Me(c)}t._authCredentials=new BI(new Qv(i,l))}}/**
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
 */class nt{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Lh{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Lh(this.firestore,e,this._query)}}class Rr extends Lh{constructor(e,r,n){super(e,r,bh(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new $(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function RD(t,e,...r){if(t=Ut(t),Gw("collection","path",e),t instanceof wl){const n=ie.fromString(e,...r);return sm(n),new Rr(t,null,n)}{if(!(t instanceof nt||t instanceof Rr))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(ie.fromString(e,...r));return sm(n),new Rr(t.firestore,null,n)}}function mc(t,e,...r){if(t=Ut(t),arguments.length===1&&(e=Yv.A()),Gw("doc","path",e),t instanceof wl){const n=ie.fromString(e,...r);return om(n),new nt(t,null,new $(n))}{if(!(t instanceof nt||t instanceof Rr))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(ie.fromString(e,...r));return om(n),new nt(t.firestore,t instanceof Rr?t.converter:null,new $(n))}}/**
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
 */class TD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new xw(this,"async_queue_retry"),this.Xc=()=>{const r=pc();r&&_("AsyncQueue","Visibility state changed to "+r.visibilityState),this.qo.Mo()};const e=pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const r=pc();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const r=new Pr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Gs(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const r=this.Gc.then(()=>(this.Hc=!0,e().catch(n=>{this.Wc=n,this.Hc=!1;const o=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(n);throw nr("INTERNAL UNHANDLED ERROR: ",o),n}).then(n=>(this.Hc=!1,n))));return this.Gc=r,r}enqueueAfterDelay(e,r,n){this.Zc(),this.Yc.indexOf(e)>-1&&(r=0);const o=xh.createAndSchedule(this,e,r,n,s=>this.na(s));return this.zc.push(o),o}Zc(){this.Wc&&j()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const r of this.zc)if(r.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.zc)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const r=this.zc.indexOf(e);this.zc.splice(r,1)}}class bl extends wl{constructor(e,r,n,o){super(e,r,n,o),this.type="firestore",this._queue=new TD,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yw(this),this._firestoreClient.terminate()}}function OD(t,e){const r=typeof t=="object"?t:Hy(),n=typeof t=="string"?t:e||"(default)",o=Ms(r,"firestore").getImmediate({identifier:n});if(!o._initialized){const s=mC("firestore");s&&PD(o,...s)}return o}function Qw(t){return t._firestoreClient||Yw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yw(t){var e,r,n;const o=t._freezeSettings(),s=function(a,i,l,c){return new oE(a,i,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ww(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._firestoreClient=new bD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((r=o.cache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=o.cache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
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
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(qe.fromBase64String(e))}catch(r){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new co(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Cl{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mh{constructor(e){this._methodName=e}}/**
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
 */class zh{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */const xD=/^__.*__$/;class _D{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,r,this.fieldTransforms):new Qs(e,this.data,r,this.fieldTransforms)}}class Xw{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Ur(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class jh{constructor(e,r,n,o,s,a){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=o,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new jh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),o=this.aa({path:n,la:!1});return o.fa(e),o}da(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),o=this.aa({path:n,la:!1});return o.ua(),o}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ri(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Jw(this.ca)&&xD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ND{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||gl(e)}ya(e,r,n,o=!1){return new jh({ca:e,methodName:r,ga:n,path:Fe.emptyPath(),la:!1,ma:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zw(t){const e=t._freezeSettings(),r=gl(t._databaseId);return new ND(t._databaseId,!!e.ignoreUndefinedProperties,r)}function AD(t,e,r,n,o,s={}){const a=t.ya(s.merge||s.mergeFields?2:0,e,r,o);Fh("Data must be an object, but it was:",a,n);const i=eb(n,a);let l,c;if(s.merge)l=new ct(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const h=qu(e,d,r);if(!a.contains(h))throw new A(b.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);rb(u,h)||u.push(h)}l=new ct(u),c=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=a.fieldTransforms;return new _D(new Je(i),l,c)}class kl extends Mh{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kl}}function $D(t,e,r,n){const o=t.ya(1,e,r);Fh("Data must be an object, but it was:",o,n);const s=[],a=Je.empty();bn(n,(l,c)=>{const u=Vh(e,l,r);c=Ut(c);const d=o.da(u);if(c instanceof kl)s.push(u);else{const h=Il(c,d);h!=null&&(s.push(u),a.set(u,h))}});const i=new ct(s);return new Xw(a,i,o.fieldTransforms)}function LD(t,e,r,n,o,s){const a=t.ya(1,e,r),i=[qu(e,n,r)],l=[o];if(s.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)i.push(qu(e,s[h])),l.push(s[h+1]);const c=[],u=Je.empty();for(let h=i.length-1;h>=0;--h)if(!rb(c,i[h])){const g=i[h];let y=l[h];y=Ut(y);const v=a.da(g);if(y instanceof kl)c.push(g);else{const D=Il(y,v);D!=null&&(c.push(g),u.set(g,D))}}const d=new ct(c);return new Xw(u,d,a.fieldTransforms)}function Il(t,e){if(tb(t=Ut(t)))return Fh("Unsupported field value:",e,t),eb(t,e);if(t instanceof Mh)return function(r,n){if(!Jw(n.ca))throw n._a(`${r._methodName}() can only be used with update() and set()`);if(!n.path)throw n._a(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(n);o&&n.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(r,n){const o=[];let s=0;for(const a of r){let i=Il(a,n.wa(s));i==null&&(i={nullValue:"NULL_VALUE"}),o.push(i),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,n){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PE(n.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ke.fromDate(r);return{timestampValue:Di(n.serializer,o)}}if(r instanceof ke){const o=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Di(n.serializer,o)}}if(r instanceof zh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof co)return{bytesValue:Iw(n.serializer,r._byteString)};if(r instanceof nt){const o=n.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw n._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Eh(r.firestore._databaseId||n.databaseId,r._key.path)}}throw n._a(`Unsupported field value: ${$h(r)}`)}(t,e)}function eb(t,e){const r={};return Xv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(t,(n,o)=>{const s=Il(o,e.ha(n));s!=null&&(r[n]=s)}),{mapValue:{fields:r}}}function tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof zh||t instanceof co||t instanceof nt||t instanceof Mh)}function Fh(t,e,r){if(!tb(r)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(r)){const n=$h(r);throw n==="an object"?e._a(t+" a custom object"):e._a(t+" "+n)}}function qu(t,e,r){if((e=Ut(e))instanceof Cl)return e._internalPath;if(typeof e=="string")return Vh(t,e);throw Ri("Field path arguments must be of type string or ",t,!1,void 0,r)}const MD=new RegExp("[~\\*/\\[\\]]");function Vh(t,e,r){if(e.search(MD)>=0)throw Ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Cl(...e.split("."))._internalPath}catch{throw Ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function Ri(t,e,r,n,o){const s=n&&!n.isEmpty(),a=o!==void 0;let i=`Function ${e}() called with invalid data`;r&&(i+=" (via `toFirestore()`)"),i+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${o}`),l+=")"),new A(b.INVALID_ARGUMENT,i+t+l)}function rb(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class nb{constructor(e,r,n,o,s){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(ob("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class zD extends nb{data(){return super.data()}}function ob(t,e){return typeof e=="string"?Vh(t,e):e instanceof Cl?e._internalPath:e._delegate._internalPath}class jD{convertValue(e,r="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 10:return this.convertObject(e.mapValue,r);default:throw j()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return bn(e,(o,s)=>{n[o]=this.convertValue(s,r)}),n}convertGeoPoint(e){return new zh(ye(e.latitude),ye(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=gh(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Ps(e));default:return null}}convertTimestamp(e){const r=Ar(e);return new ke(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=ie.fromString(e);oe(Rw(n));const o=new Rs(n.get(1),n.get(3)),s=new $(n.popFirst(5));return o.isEqual(r)||nr(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),s}}/**
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
 */function FD(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
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
 */class VD{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sb extends nb{constructor(e,r,n,o,s,a){super(e,r,n,o,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new UD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(ob("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class UD extends sb{data(e={}){return super.data(e)}}/**
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
 */function gc(t){t=fn(t,nt);const e=fn(t.firestore,bl);return SD(Qw(e),t._key).then(r=>KD(e,t,r))}class BD extends jD{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,r)}}function HD(t,e,r){t=fn(t,nt);const n=fn(t.firestore,bl),o=FD(t.converter,e,r);return ab(n,[AD(Zw(n),"setDoc",t._key,o,t.converter!==null,r).toMutation(t._key,Ft.none())])}function qD(t,e,r,...n){t=fn(t,nt);const o=fn(t.firestore,bl),s=Zw(o);let a;return a=typeof(e=Ut(e))=="string"||e instanceof Cl?LD(s,"updateDoc",t._key,e,r,n):$D(s,"updateDoc",t._key,e),ab(o,[a.toMutation(t._key,Ft.exists(!0))])}function ab(t,e){return function(r,n){const o=new Pr;return r.asyncQueue.enqueueAndForget(async()=>cD(await ID(r),n,o)),o.promise}(Qw(t),e)}function KD(t,e,r){const n=r.docs.get(e._key),o=new BD(t);return new sb(t,o,e._key,n,new VD(r.hasPendingWrites,r.fromCache),e.converter)}(function(t,e=!0){(function(r){go=r})(Ik),_r(new tr("firestore",(r,{instanceIdentifier:n,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new bl(new HI(r.getProvider("auth-internal")),new GI(r.getProvider("app-check-internal")),function(i,l){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rs(i.options.projectId,l)}(s,n),s);return o=Object.assign({useFetchStreams:e},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),jt(Pf,"3.13.0",t),jt(Pf,"3.13.0","esm2017")})();const WD=(t,e)=>e.some(r=>t instanceof r);let im,lm;function GD(){return im||(im=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QD(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ib=new WeakMap,Ku=new WeakMap,lb=new WeakMap,yc=new WeakMap,Uh=new WeakMap;function YD(t){const e=new Promise((r,n)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{r(Tr(t.result)),o()},a=()=>{n(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&ib.set(r,t)}).catch(()=>{}),Uh.set(e,t),e}function XD(t){if(Ku.has(t))return;const e=new Promise((r,n)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{r(),o()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ku.set(t,e)}let Wu={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lb.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Tr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JD(t){Wu=t(Wu)}function ZD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(vc(this),e,...r);return lb.set(n,e.sort?e.sort():[e]),Tr(n)}:QD().includes(t)?function(...e){return t.apply(vc(this),e),Tr(ib.get(this))}:function(...e){return Tr(t.apply(vc(this),e))}}function eP(t){return typeof t=="function"?ZD(t):(t instanceof IDBTransaction&&XD(t),WD(t,GD())?new Proxy(t,Wu):t)}function Tr(t){if(t instanceof IDBRequest)return YD(t);if(yc.has(t))return yc.get(t);const e=eP(t);return e!==t&&(yc.set(t,e),Uh.set(e,t)),e}const vc=t=>Uh.get(t);function tP(t,e,{blocked:r,upgrade:n,blocking:o,terminated:s}={}){const a=indexedDB.open(t,e),i=Tr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Tr(a.result),l.oldVersion,l.newVersion,Tr(a.transaction))}),r&&a.addEventListener("blocked",()=>r()),i.then(l=>{s&&l.addEventListener("close",()=>s()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),i}const rP=["get","getKey","getAll","getAllKeys","count"],nP=["put","add","delete","clear"],wc=new Map;function cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=nP.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||rP.includes(r)))return;const s=async function(a,...i){const l=this.transaction(a,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(i.shift())),(await Promise.all([c[r](...i),o&&l.done]))[0]};return wc.set(e,s),s}JD(t=>({...t,get:(e,r,n)=>cm(e,r)||t.get(e,r,n),has:(e,r)=>!!cm(e,r)||t.has(e,r)}));const cb="@firebase/installations",Bh="0.6.4";/**
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
 */const ub=1e4,db=`w:${Bh}`,hb="FIS_v2",oP="https://firebaseinstallations.googleapis.com/v1",sP=60*60*1e3,aP="installations",iP="Installations";/**
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
 */const lP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mn=new Wi(aP,iP,lP);function pb(t){return t instanceof jr&&t.code.includes("request-failed")}/**
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
 */function fb({projectId:t}){return`${oP}/projects/${t}/installations`}function mb(t){return{token:t.token,requestStatus:2,expiresIn:uP(t.expiresIn),creationTime:Date.now()}}async function gb(t,e){const n=(await e.json()).error;return mn.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function yb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cP(t,{refreshToken:e}){const r=yb(t);return r.append("Authorization",dP(e)),r}async function vb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uP(t){return Number(t.replace("s","000"))}function dP(t){return`${hb} ${t}`}/**
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
 */async function hP({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=fb(t),o=yb(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={fid:r,authVersion:hb,appId:t.appId,sdkVersion:db},i={method:"POST",headers:o,body:JSON.stringify(a)},l=await vb(()=>fetch(n,i));if(l.ok){const c=await l.json();return{fid:c.fid||r,registrationStatus:2,refreshToken:c.refreshToken,authToken:mb(c.authToken)}}else throw await gb("Create Installation",l)}/**
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
 */function wb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function pP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fP=/^[cdef][\w-]{21}$/,Gu="";function mP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=gP(t);return fP.test(r)?r:Gu}catch{return Gu}}function gP(t){return pP(t).substr(0,22)}/**
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
 */function El(t){return`${t.appName}!${t.appId}`}/**
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
 */const bb=new Map;function Cb(t,e){const r=El(t);kb(r,e),yP(r,e)}function kb(t,e){const r=bb.get(t);if(r)for(const n of r)n(e)}function yP(t,e){const r=vP();r&&r.postMessage({key:t,fid:e}),wP()}let en=null;function vP(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=t=>{kb(t.data.key,t.data.fid)}),en}function wP(){bb.size===0&&en&&(en.close(),en=null)}/**
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
 */const bP="firebase-installations-database",CP=1,gn="firebase-installations-store";let bc=null;function Hh(){return bc||(bc=tP(bP,CP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gn)}}})),bc}async function Ti(t,e){const r=El(t),o=(await Hh()).transaction(gn,"readwrite"),s=o.objectStore(gn),a=await s.get(r);return await s.put(e,r),await o.done,(!a||a.fid!==e.fid)&&Cb(t,e.fid),e}async function Ib(t){const e=El(t),n=(await Hh()).transaction(gn,"readwrite");await n.objectStore(gn).delete(e),await n.done}async function Sl(t,e){const r=El(t),o=(await Hh()).transaction(gn,"readwrite"),s=o.objectStore(gn),a=await s.get(r),i=e(a);return i===void 0?await s.delete(r):await s.put(i,r),await o.done,i&&(!a||a.fid!==i.fid)&&Cb(t,i.fid),i}/**
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
 */async function qh(t){let e;const r=await Sl(t.appConfig,n=>{const o=kP(n),s=IP(t,o);return e=s.registrationPromise,s.installationEntry});return r.fid===Gu?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function kP(t){const e=t||{fid:mP(),registrationStatus:0};return Eb(e)}function IP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(mn.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=EP(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SP(t)}:{installationEntry:e}}async function EP(t,e){try{const r=await hP(t,e);return Ti(t.appConfig,r)}catch(r){throw pb(r)&&r.customData.serverCode===409?await Ib(t.appConfig):await Ti(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function SP(t){let e=await um(t.appConfig);for(;e.registrationStatus===1;)await wb(100),e=await um(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await qh(t);return n||r}return e}function um(t){return Sl(t,e=>{if(!e)throw mn.create("installation-not-found");return Eb(e)})}function Eb(t){return DP(t)?{fid:t.fid,registrationStatus:0}:t}function DP(t){return t.registrationStatus===1&&t.registrationTime+ub<Date.now()}/**
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
 */async function PP({appConfig:t,heartbeatServiceProvider:e},r){const n=RP(t,r),o=cP(t,r),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={installation:{sdkVersion:db,appId:t.appId}},i={method:"POST",headers:o,body:JSON.stringify(a)},l=await vb(()=>fetch(n,i));if(l.ok){const c=await l.json();return mb(c)}else throw await gb("Generate Auth Token",l)}function RP(t,{fid:e}){return`${fb(t)}/${e}/authTokens:generate`}/**
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
 */async function Kh(t,e=!1){let r;const n=await Sl(t.appConfig,s=>{if(!Sb(s))throw mn.create("not-registered");const a=s.authToken;if(!e&&xP(a))return s;if(a.requestStatus===1)return r=TP(t,e),s;{if(!navigator.onLine)throw mn.create("app-offline");const i=NP(s);return r=OP(t,i),i}});return r?await r:n.authToken}async function TP(t,e){let r=await dm(t.appConfig);for(;r.authToken.requestStatus===1;)await wb(100),r=await dm(t.appConfig);const n=r.authToken;return n.requestStatus===0?Kh(t,e):n}function dm(t){return Sl(t,e=>{if(!Sb(e))throw mn.create("not-registered");const r=e.authToken;return AP(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OP(t,e){try{const r=await PP(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await Ti(t.appConfig,n),r}catch(r){if(pb(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Ib(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ti(t.appConfig,n)}throw r}}function Sb(t){return t!==void 0&&t.registrationStatus===2}function xP(t){return t.requestStatus===2&&!_P(t)}function _P(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sP}function NP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AP(t){return t.requestStatus===1&&t.requestTime+ub<Date.now()}/**
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
 */async function $P(t){const e=t,{installationEntry:r,registrationPromise:n}=await qh(e);return n?n.catch(console.error):Kh(e).catch(console.error),r.fid}/**
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
 */async function LP(t,e=!1){const r=t;return await MP(r),(await Kh(r,e)).token}async function MP(t){const{registrationPromise:e}=await qh(t);e&&await e}/**
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
 */function zP(t){if(!t||!t.options)throw Cc("App Configuration");if(!t.name)throw Cc("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw Cc(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cc(t){return mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Db="installations",jP="installations-internal",FP=t=>{const e=t.getProvider("app").getImmediate(),r=zP(e),n=Ms(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},VP=t=>{const e=t.getProvider("app").getImmediate(),r=Ms(e,Db).getImmediate();return{getId:()=>$P(r),getToken:o=>LP(r,o)}};function UP(){_r(new tr(Db,FP,"PUBLIC")),_r(new tr(jP,VP,"PRIVATE"))}UP();jt(cb,Bh);jt(cb,Bh,"esm2017");/**
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
 */const Oi="analytics",BP="firebase_id",HP="origin",qP=60*1e3,KP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wh="https://www.googletagmanager.com/gtag/js";/**
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
 */const ot=new Bd("@firebase/analytics");/**
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
 */const WP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new Wi("analytics","Analytics",WP);/**
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
 */function GP(t){if(!t.startsWith(Wh)){const e=dt.create("invalid-gtag-resource",{gtagURL:t});return ot.warn(e.message),""}return t}function Pb(t){return Promise.all(t.map(e=>e.catch(r=>r)))}function QP(t,e){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(t,e)),r}function YP(t,e){const r=QP("firebase-js-sdk-policy",{createScriptURL:GP}),n=document.createElement("script"),o=`${Wh}?l=${t}&id=${e}`;n.src=r?r==null?void 0:r.createScriptURL(o):o,n.async=!0,document.head.appendChild(n)}function XP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function JP(t,e,r,n,o,s){const a=n[o];try{if(a)await e[a];else{const l=(await Pb(r)).find(c=>c.measurementId===o);l&&await e[l.appId]}}catch(i){ot.error(i)}t("config",o,s)}async function ZP(t,e,r,n,o){try{let s=[];if(o&&o.send_to){let a=o.send_to;Array.isArray(a)||(a=[a]);const i=await Pb(r);for(const l of a){const c=i.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",n,o||{})}catch(s){ot.error(s)}}function e2(t,e,r,n){async function o(s,...a){try{if(s==="event"){const[i,l]=a;await ZP(t,e,r,i,l)}else if(s==="config"){const[i,l]=a;await JP(t,e,r,n,i,l)}else if(s==="consent"){const[i]=a;t("consent","update",i)}else if(s==="get"){const[i,l,c]=a;t("get",i,l,c)}else if(s==="set"){const[i]=a;t("set",i)}else t(s,...a)}catch(i){ot.error(i)}}return o}function t2(t,e,r,n,o){let s=function(...a){window[n].push(arguments)};return window[o]&&typeof window[o]=="function"&&(s=window[o]),window[o]=e2(s,t,e,r),{gtagCore:s,wrappedGtag:window[o]}}function r2(t){const e=window.document.getElementsByTagName("script");for(const r of Object.values(e))if(r.src&&r.src.includes(Wh)&&r.src.includes(t))return r;return null}/**
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
 */const n2=30,o2=1e3;class s2{constructor(e={},r=o2){this.throttleMetadata=e,this.intervalMillis=r}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,r){this.throttleMetadata[e]=r}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Rb=new s2;function a2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function i2(t){var e;const{appId:r,apiKey:n}=t,o={method:"GET",headers:a2(n)},s=KP.replace("{app-id}",r),a=await fetch(s,o);if(a.status!==200&&a.status!==304){let i="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(i=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:i})}return a.json()}async function l2(t,e=Rb,r){const{appId:n,apiKey:o,measurementId:s}=t.options;if(!n)throw dt.create("no-app-id");if(!o){if(s)return{measurementId:s,appId:n};throw dt.create("no-api-key")}const a=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new d2;return setTimeout(async()=>{i.abort()},r!==void 0?r:qP),Tb({appId:n,apiKey:o,measurementId:s},a,i,e)}async function Tb(t,{throttleEndTimeMillis:e,backoffCount:r},n,o=Rb){var s;const{appId:a,measurementId:i}=t;try{await c2(n,e)}catch(l){if(i)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:i};throw l}try{const l=await i2(t);return o.deleteThrottleMetadata(a),l}catch(l){const c=l;if(!u2(c)){if(o.deleteThrottleMetadata(a),i)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:i};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?of(r,o.intervalMillis,n2):of(r,o.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:r+1};return o.setThrottleMetadata(a,d),ot.debug(`Calling attemptFetch again in ${u} millis`),Tb(t,d,n,o)}}function c2(t,e){return new Promise((r,n)=>{const o=Math.max(e-Date.now(),0),s=setTimeout(r,o);t.addEventListener(()=>{clearTimeout(s),n(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u2(t){if(!(t instanceof jr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class d2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h2(t,e,r,n,o){if(o&&o.global){t("event",r,n);return}else{const s=await e,a=Object.assign(Object.assign({},n),{send_to:s});t("event",r,a)}}/**
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
 */async function p2(){if(jy())try{await Fy()}catch(t){return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function f2(t,e,r,n,o,s,a){var i;const l=l2(t);l.then(g=>{r[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ot.error(g)),e.push(l);const c=p2().then(g=>{if(g)return n.getId()}),[u,d]=await Promise.all([l,c]);r2(s)||YP(s,u.measurementId),o("js",new Date);const h=(i=a==null?void 0:a.config)!==null&&i!==void 0?i:{};return h[HP]="firebase",h.update=!0,d!=null&&(h[BP]=d),o("config",u.measurementId,h),u.measurementId}/**
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
 */class m2{constructor(e){this.app=e}_delete(){return delete Zo[this.app.options.appId],Promise.resolve()}}let Zo={},hm=[];const pm={};let kc="dataLayer",g2="gtag",fm,Ob,mm=!1;function y2(){const t=[];if(vC()&&t.push("This is a browser extension environment."),wC()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,o)=>`(${o+1}) ${n}`).join(" "),r=dt.create("invalid-analytics-context",{errorInfo:e});ot.warn(r.message)}}function v2(t,e,r){y2();const n=t.options.appId;if(!n)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(Zo[n]!=null)throw dt.create("already-exists",{id:n});if(!mm){XP(kc);const{wrappedGtag:s,gtagCore:a}=t2(Zo,hm,pm,kc,g2);Ob=s,fm=a,mm=!0}return Zo[n]=f2(t,hm,pm,e,fm,kc,r),new m2(t)}function w2(t=Hy()){t=Ut(t);const e=Ms(t,Oi);return e.isInitialized()?e.getImmediate():b2(t)}function b2(t,e={}){const r=Ms(t,Oi);if(r.isInitialized()){const o=r.getImmediate();if(pi(e,r.getOptions()))return o;throw dt.create("already-initialized")}return r.initialize({options:e})}function C2(t,e,r,n){t=Ut(t),h2(Ob,Zo[t.app.options.appId],e,r,n).catch(o=>ot.error(o))}const gm="@firebase/analytics",ym="0.10.0";function k2(){_r(new tr(Oi,(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return v2(n,o,r)},"PUBLIC")),_r(new tr("analytics-internal",t,"PRIVATE")),jt(gm,ym),jt(gm,ym,"esm2017");function t(e){try{const r=e.getProvider(Oi).getImmediate();return{logEvent:(n,o,s)=>C2(r,n,o,s)}}catch(r){throw dt.create("interop-component-reg-failed",{reason:r})}}}k2();function I2(){return U("div",{children:[R("div",{className:"text-4xl font-bold",children:"Correct or Incorrect Concept?"}),U("div",{children:[R("div",{className:"text-2xl mt-4",children:"Scope of this annotation task"}),R("p",{className:"mt-2",children:"The goal of this task is simply to evaluate if Large Language Models are able to generate a correct concept given a category and a feature."}),R("div",{className:"text-2xl mt-4",children:"What are you going to do?"}),R("p",{className:"mt-2",children:"In this annotation task, you will be given a concept to evaluate. Your job is to decide whether the concept satisfy the given category and criteria."}),U("p",{className:"mt-2",children:['At any point during the annotation task, you can mark a concept as "',R("i",{children:"wrong"}),'" if you find it erroneous. An erroneous concept coul be a truncated word (e.g., "t-shi") or a fragment of text (e.g., "that satisfy the").']}),U("p",{className:"mt-2",children:["You will need to complete ",R("b",{children:"500"})," of these ",R("b",{children:"annotations"}),", which should take about ",R("b",{children:"30 minutes"}),". It's important to note that this task does not evaluate your knowledge of English, so you don't need to worry about being tested. If you need more information about the word, you can use the internet to help you."]})]})]})}function vm(){return U("div",{className:"absolute bottom-5 left-5 text-md mt-4",children:["Based on ",R("a",{href:"https://evilscript.eu",children:"Federico Torrielli"})," software."]})}function E2({title:t,titleId:e,...r},n){return W.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":e},r),t?W.createElement("title",{id:e},t):null,W.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}))}const S2=W.forwardRef(E2),D2=S2;function P2({title:t,titleId:e,...r},n){return W.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":e},r),t?W.createElement("title",{id:e},t):null,W.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"}))}const R2=W.forwardRef(P2),T2=R2;function O2({title:t,titleId:e,...r},n){return W.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":e},r),t?W.createElement("title",{id:e},t):null,W.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const x2=W.forwardRef(O2),_2=x2;function N2({text:t,different_icon:e}){const[r,n]=W.useState(!0),[o,s]=W.useState(!0);return r?R("div",{className:"bg-blue-600",children:R("div",{className:"mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8",children:U("div",{className:"flex flex-wrap items-center justify-between",children:[U("div",{className:"flex w-0 flex-1 items-center",children:[R("span",{className:"flex rounded-lg bg-blue-800 p-2",children:e?R(D2,{className:"h-6 w-6 text-white","aria-hidden":"true"}):R(T2,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),U("p",{className:`ml-3 font-medium text-white ${o?"truncate":"whitespace-normal"}`,onClick:()=>{s(!o)},children:[R("span",{className:"md:hidden",children:t}),R("span",{className:"hidden md:inline",children:t})]})]}),R("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:U("button",{type:"button",className:"-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",onClick:()=>n(!1),children:[R("span",{className:"sr-only",children:"Dismiss"}),R(_2,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})})}):R("div",{})}function A2(){return U("div",{children:[R("div",{className:"text-4xl font-bold",children:"Some Examples of annotation"}),U("div",{children:[R("div",{className:"text-2xl mt-4",children:"Correct Concept"}),U("p",{className:"mt-2",children:["For instance, given the triplet",U("ul",{children:[U("li",{children:["Concept: ",R("i",{children:"mosquito"})," "]}),U("li",{children:["Category: ",R("i",{children:"animal"})]}),U("li",{children:["Criteria: ",R("i",{children:"can fly."})]})]}),"the answer is ",R("b",{children:"Yes"})," because the mosquito is an animal that flies."]}),R("div",{className:"text-2xl mt-4",children:"Incorrect Concept"}),U("p",{className:"mt-2",children:["For instance, given the triplet",U("ul",{children:[U("li",{children:["Concept: ",R("i",{children:"superman"})," "]}),U("li",{children:["Category: ",R("i",{children:"vehicle"})]}),U("li",{children:["Criteria: ",R("i",{children:"made of steel."})]})]}),"the answer is ",R("b",{children:"No"})," because superman is not a vehicle made of steel."]}),R("div",{className:"text-2xl mt-4",children:"Incorrect Concept"}),U("p",{className:"mt-2",children:['At any point during the annotation task, you can mark a concept as "',R("i",{children:"wrong"}),'" if you find it erroneous. For instance, given the triplet',U("ul",{children:[U("li",{children:["Concept: ",R("i",{children:"kang"})," "]}),U("li",{children:["Category: ",R("i",{children:"animal"})]}),U("li",{children:["Criteria: ",R("i",{children:"can jump."})]})]}),"will be labeled as ",R("b",{children:"wrong"}),' because "kang" is an incomplete word.']})]})]})}const wm=[{cat:"vehicles",slot:"part",value:"car seat",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have car seat. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, suv, jeep, minivan, station wagon, sedan, hatchback, pickup truck`,concepts:["van","suv","jeep","minivan","station wagon","sedan","hatchback","pickup truck"],selected:"sedan",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have car seat. "},{cat:"food",slot:"specialization",value:"cracker",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are cracker. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        crackers, 
        saltines, 
        graham crackers, 
        Ritz crackers, 
        Wheat`,concepts:["crackers","saltines","graham crackers","ritz crackers"],selected:"ritz crackers",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are cracker. "},{cat:"instruments",slot:"user",value:"busker",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used by buskers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, violin, harmonica, saxophone, trumpet, flute, accordion, banjo, ukulele,`,concepts:["trumpet"],selected:"trumpet",model:"alpacino-supercot-13b",criteria:"Criteria: are used by buskers. "},{cat:"clothes",slot:"material",value:"sheepskin",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of sheepskin. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        coat, jacket, vest, sweater, scarf, gloves, boots, shoes, pants, socks. 
`,concepts:["coat","vest","gloves","boots","shoes","pants","socks"],selected:"coat",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of sheepskin. "},{cat:"food",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Milk
2. Sugar
3. Flour
4. Salt
5. Butter
6. Cheese
7.`,concepts:["milk","sugar","flour","salt","butter"],selected:"sugar",model:"manticore-13b",criteria:"Criteria: can be white. "},{cat:"animals",slot:"activity",value:"roam",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be roam. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, goat, pig, chicken, duck, rabbit.`,concepts:["horse","cow","sheep","goat","pig","chicken","duck"],selected:"horse",model:"manticore-13b",criteria:"Criteria: can be roam. "},{cat:"instruments",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, trumpet, violin, guitar, saxophone, oboe, cello, harp, drum`,concepts:["trumpet","harp"],selected:"trumpet",model:"nous-hermes-13b",criteria:"Criteria: can be silver. "},{cat:"animals",slot:"activity",value:"kill",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be kill. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        lion, tiger, bear, wolf, shark, crocodile, snake, spider, scorpion, mosqu`,concepts:["shark","crocodile","scorpion","mosqu"],selected:"mosqu",model:"alpacino-supercot-13b",criteria:"Criteria: can be kill. "},{cat:"animals",slot:"shape",value:"circular",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be circular. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Owl
        2. Octopus
        3. Snail
        4. Starfish
        5. Seahor`,concepts:["owl","octopus","starfish","seahor"],selected:"starfish",model:"alpacino-supercot-13b",criteria:"Criteria: can be circular. "},{cat:"instruments",slot:"material",value:"cork",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be made of cork. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, oboe, bassoon, trumpet, trombone, tuba, euphonium`,concepts:["trumpet","tuba","euphonium"],selected:"tuba",model:"llama-13b-supercot",criteria:"Criteria: can be made of cork. "},{cat:"vehicles",slot:"part",value:"chain",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have chain. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, motorcycle, truck, bicycle, scooter, boat, airplane, helicopter, tractor, snowmobile`,concepts:["snowmobile"],selected:"snowmobile",model:"alpacino-supercot-13b",criteria:"Criteria: can have chain. "},{cat:"clothes",slot:"part",value:"dickie",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have dickie. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, coat, sweater, dress, skirt, trousers, blouse, vest.`,concepts:["pants","coat","trousers","vest"],selected:"pants",model:"manticore-13b",criteria:"Criteria: can have dickie. "},{cat:"food",slot:"part",value:"Zea mays rugosa",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have Zea mays rugosa. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
Zea mays rugosa`,concepts:["zea mays rugosa"],selected:"zea mays rugosa",model:"llama-13b-supercot",criteria:"Criteria: can have Zea mays rugosa. "},{cat:"appliance",slot:"part",value:"grate",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have grate. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, toaster, oven, blender, coffee maker, air conditioner, vacuum cleaner`,concepts:["blender","coffee maker","air conditioner","vacuum cleaner"],selected:"coffee maker",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have grate. "},{cat:"clothes",slot:"part",value:"shirttail",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have shirttail. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shirt, blouse, dress, skirt, pants, shorts, jacket, sweater, sweatshirt, coat.`,concepts:["pants","shorts","sweatshirt","coat"],selected:"sweatshirt",model:"nous-hermes-13b",criteria:"Criteria: can have shirttail. "},{cat:"food",slot:"product",value:"crop",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce crop. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "corn, wheat, rice, soybeans, potatoes, sugarcane, cassava, sorghum, barley`,concepts:["soybeans","potatoes","sugarcane","cassava","sorghum","barley"],selected:"sorghum",model:"manticore-13b",criteria:"Criteria: can produce crop. "},{cat:"clothes",slot:"colorPattern",value:"grey",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be grey. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, sweater, jacket, coat, dress, skirt, jeans, sweatpants, sweatsh`,concepts:["pants","coat","jeans","sweatpants","sweatsh"],selected:"sweatsh",model:"llama-13b-supercot",criteria:"Criteria: can be grey. "},{cat:"animals",slot:"purpose",value:"beast of burden",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used for beast of burden. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        camel, donkey, elephant, horse, mule, ox, pony, reindeer, yak, zebra`,concepts:["camel","donkey","horse","mule","ox","pony","reindeer","yak","zebra"],selected:"reindeer",model:"alpacino-supercot-13b",criteria:"Criteria: are used for beast of burden. "},{cat:"home",slot:"place",value:"courtyard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be found or used in courtyards. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        courtyard, patio, garden, fountain, bench, table, chairs, umbrella, plants, flowers.`,concepts:["courtyard","patio","garden","bench","table","chairs","umbrella","plants","flowers"],selected:"plants",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in courtyards. "},{cat:"food",slot:"place",value:"orchard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in orchards. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, pears, peaches, plums, apricots, cherries, almonds, pistachios, waln`,concepts:["apples","pears","peaches","plums","apricots","cherries","almonds","pistachios","waln"],selected:"apricots",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in orchards. "},{cat:"food",slot:"howToUse",value:"steam",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for steam. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of food and can be used for steam: 
        asparagus`,concepts:["here is a list of","asparagus"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can be used for steam. "},{cat:"artifacts",slot:"part",value:"pendant",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have pendant. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Amulet
2. Brooch
3. Charm
4. Cross
5. Locket
6. Medallion
`,concepts:["amulet","brooch","charm","cross","locket","medallion"],selected:"amulet",model:"nous-hermes-13b",criteria:"Criteria: can have pendant. "},{cat:"food",slot:"taste",value:"dessert",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be dessert. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "cake, pie, ice cream, chocolate, candy, cookies, donuts, cupcakes, pudding,`,concepts:["cake","pie","ice cream","chocolate","candy","cookies","donuts","cupcakes","pudding"],selected:"donuts",model:"manticore-13b",criteria:"Criteria: can be dessert. "},{cat:"instruments",slot:"part",value:"reed",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have reed. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, oboe, clarinet, saxophone, bassoon, harmonica, accordion, recorder, pan flute,`,concepts:["recorder","pan flute"],selected:"recorder",model:"llama-13b-supercot",criteria:"Criteria: can have reed. "},{cat:"animals",slot:"movement",value:"run",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can run. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        rabbit, deer, horse, cheetah, antelope, gazelle, zebra, giraffe, tiger,`,concepts:["horse","cheetah","antelope","gazelle","zebra","giraffe"],selected:"antelope",model:"llama-13b-supercot",criteria:"Criteria: can run. "},{cat:"food",slot:"accessory",value:"cheese",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with cheese. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cheese, mozzarella, parmesan, cheddar, brie, gouda, feta, blue cheese`,concepts:["mozzarella","parmesan","cheddar","brie","gouda","feta","blue cheese"],selected:"parmesan",model:"manticore-13b",criteria:"Criteria: are related with cheese. "},{cat:"clothes",slot:"material",value:"polyester",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of polyester. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        polyester, shirt, pants, jacket, sweater, dress, socks, shoes, hat, scarf.`,concepts:["polyester","pants","socks","shoes"],selected:"polyester",model:"manticore-13b",criteria:"Criteria: can be made of polyester. "},{cat:"containers",slot:"content",value:"wine",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain wines. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Wine bottle
2. Wine glass
3. Wine decanter
4. Wine rack
5. Wine`,concepts:["wine bottle","wine glass","wine decanter","wine rack","wine"],selected:"wine glass",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: contain wines. "},{cat:"vehicles",slot:"part",value:"porthole",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have porthole. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, boat, airplane, train, motorcycle, bicycle, scooter, van.`,concepts:["train","van"],selected:"train",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have porthole. "},{cat:"instruments",slot:"part",value:"string",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have string. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, violin, piano, flute, saxophone, clarinet, trumpet, trombone, harp, accordion`,concepts:["trumpet","harp"],selected:"harp",model:"llama-13b-supercot",criteria:"Criteria: can have string. "},{cat:"artifacts",slot:"part",value:"fastener",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have fastener. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        screw, nail, bolt, rivet, staple, clip, pin, hook, clasp, buckle`,concepts:["screw","nail","bolt","rivet","staple","clip","pin","hook","clasp","buckle"],selected:"buckle",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have fastener. "},{cat:"vehicles",slot:"part",value:"screw propeller",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have screw propeller. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        helicopter, airplane, boat, submarine, car, truck, motorcycle, bicycle, scooter, hovercraft`,concepts:["submarine","hovercraft"],selected:"hovercraft",model:"alpacino-supercot-13b",criteria:"Criteria: can have screw propeller. "},{cat:"instruments",slot:"accessory",value:"seat",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are related with seat. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        chair, stool, bench, couch, sofa, armchair, ottoman, recliner, divan, love seat`,concepts:["chair","stool","bench","couch","sofa","armchair","ottoman","recliner","divan","love seat"],selected:"bench",model:"llama-13b-supercot",criteria:"Criteria: are related with seat. "},{cat:"containers",slot:"content",value:"haversack",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain haversacks. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        haversacks, duffel bags, backpacks, suitcases, trunks, barrels, crates, baskets`,concepts:["haversacks","duffel bags","backpacks","suitcases","trunks","barrels","crates","baskets"],selected:"haversacks",model:"nous-hermes-13b",criteria:"Criteria: contain haversacks. "},{cat:"food",slot:"part",value:"orange rind",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have orange rind. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "orange, grapefruit, tangerine, clementine, pomelo, pumpkin, carrot, sweet potato`,concepts:["grapefruit","tangerine","clementine","pomelo","pumpkin","sweet potato"],selected:"pumpkin",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have orange rind. "},{cat:"tools",slot:"shape",value:"cylindrical",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be cylindrical. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, pliers, drill, saw, tape measure, level, ruler, chisel`,concepts:["wrench","pliers","drill","saw","tape measure","level","ruler","chisel"],selected:"ruler",model:"llama-13b-supercot",criteria:"Criteria: can be cylindrical. "},{cat:"vehicles",slot:"user",value:"pedestrian",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by pedestrians. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, scooter, skateboard, rollerblades, wheelchair, stroller, walker, cane,`,concepts:["skateboard","rollerblades","wheelchair","stroller","walker","cane"],selected:"cane",model:"manticore-13b",criteria:"Criteria: are used by pedestrians. "},{cat:"home",slot:"part",value:"drain basket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can have drain basket. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, dishwasher, washing machine, dryer, sink, bathtub, shower, toilet`,concepts:["refrigerator","dishwasher","washing machine","dryer","bathtub"],selected:"refrigerator",model:"llama-13b-supercot",criteria:"Criteria: can have drain basket. "},{cat:"home",slot:"shape",value:"round",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be round. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bed,table,chair,lamp,clock,vase,bowl,plate,rug,mat`,concepts:["bed","table","lamp","clock","bowl","plate","rug","mat"],selected:"plate",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be round. "},{cat:"food",slot:"place",value:"supermarket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in supermarkets. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Milk, 
2. Bread, 
3. Eggs, 
4. Butter, 
5.`,concepts:["milk","eggs","butter"],selected:"milk",model:"manticore-13b",criteria:"Criteria: can be found or used in supermarkets. "},{cat:"clothes",slot:"user",value:"horseman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used by horsemen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        riding boots, jodhpurs, breeches, helmet, saddle, bridle, whip, spurs, bo`,concepts:["riding boots","jodhpurs","breeches","helmet","saddle","bridle","whip","spurs","bo"],selected:"breeches",model:"nous-hermes-13b",criteria:"Criteria: are used by horsemen. "},{cat:"food",slot:"product",value:"peel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce peel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        banana, orange, lemon, lime, grapefruit, avocado, kiwi, mango, pineapple,`,concepts:["lemon","lime","grapefruit","avocado","kiwi","mango","pineapple"],selected:"grapefruit",model:"alpacino-supercot-13b",criteria:"Criteria: can produce peel. "},{cat:"clothes",slot:"part",value:"finger",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have finger. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, gloves, socks, shoes, hat, scarf, sweater, coat.`,concepts:["pants","gloves","socks","shoes","coat"],selected:"shoes",model:"alpacino-supercot-13b",criteria:"Criteria: can have finger. "},{cat:"appliance",slot:"part",value:"light",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have light. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, oven, toaster, blender, coffee maker, air conditioner, vacuum cleaner`,concepts:["blender","coffee maker","air conditioner","vacuum cleaner"],selected:"blender",model:"manticore-13b",criteria:"Criteria: can have light. "},{cat:"tools",slot:"purpose",value:"fasten",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are used for fasten. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, 
        wrench, 
        screwdriver, 
        hammer, 
        saw, 
       `,concepts:["pliers","wrench","saw"],selected:"pliers",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used for fasten. "},{cat:"instruments",slot:"part",value:"bridge",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have bridge. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, violin, piano, harp, banjo, mandolin, ukulele, saxophone, flute, clarinet`,concepts:["harp"],selected:"harp",model:"alpacino-supercot-13b",criteria:"Criteria: can have bridge. "},{cat:"artifacts",slot:"part",value:"beaver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have beaver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        canoe, beaver dam, beaver tail, beaver teeth, beaver pelt, beaver lodge, beaver skull,`,concepts:["canoe","beaver dam","beaver tail","beaver teeth","beaver pelt","beaver lodge","beaver skull"],selected:"beaver dam",model:"llama-13b-supercot",criteria:"Criteria: can have beaver. "},{cat:"vehicles",slot:"part",value:"petrol engine",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have petrol engine. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, boat, airplane, helicopter, bicycle, scooter, lawnmower,`,concepts:["lawnmower"],selected:"lawnmower",model:"nous-hermes-13b",criteria:"Criteria: can have petrol engine. "},{cat:"food",slot:"product",value:"pancake",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce pancake. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pancake, flour, eggs, milk, sugar, butter, baking powder, syrup, blueberries, choc`,concepts:["pancake","flour","eggs","milk","sugar","butter","baking powder","syrup","blueberries","choc"],selected:"baking powder",model:"manticore-13b",criteria:"Criteria: can produce pancake. "},{cat:"vehicles",slot:"part",value:"cockpit",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have cockpit. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, plane, helicopter, boat, submarine, tank, motorcycle, bicycle, hot air balloon`,concepts:["submarine","tank","hot air balloon"],selected:"tank",model:"llama-13b-supercot",criteria:"Criteria: can have cockpit. "},{cat:"food",slot:"material",value:"unleavened",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be made of unleavened. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, crackers, matzo, naan, pita, roti, tortilla, chapati, paratha, puri.`,concepts:["crackers","matzo","naan","pita","roti","tortilla","chapati","paratha","puri"],selected:"pita",model:"manticore-13b",criteria:"Criteria: can be made of unleavened. "},{cat:"vehicles",slot:"part",value:"dynamo",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have dynamo. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, scooter, bus, train, plane, boat, helicopter. 
`,concepts:["train"],selected:"train",model:"llama-13b-supercot",criteria:"Criteria: can have dynamo. "},{cat:"vehicles",slot:"part",value:"sunshine-roof",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have sunshine-roof. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:"10 words that belong to the category and have sunshine-roof.",concepts:["roof"],selected:"roof",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have sunshine-roof. "},{cat:"instruments",slot:"shape",value:"hollow",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be hollow. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, oboe, trumpet, trombone, saxophone, violin, guitar, drum, harp`,concepts:["trumpet","harp"],selected:"trumpet",model:"nous-hermes-13b",criteria:"Criteria: can be hollow. "},{cat:"artifacts",slot:"shape",value:"rond",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be rond. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Amphora
2. Vase
3. Urn
4. Bowl
5. Plate
6. Goblet
`,concepts:["amphora","vase","urn","bowl","goblet"],selected:"amphora",model:"nous-hermes-13b",criteria:"Criteria: can be rond. "},{cat:"artifacts",slot:"shape",value:"arched",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be arched. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        canoe, bow, arrow, spear, axe, hammer, sword, shield, bowl, pot.`,concepts:["canoe","bow","arrow","spear","axe","hammer","sword","bowl","pot"],selected:"bow",model:"alpacino-supercot-13b",criteria:"Criteria: can be arched. "},{cat:"vehicles",slot:"purpose",value:"race",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used for race. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,bike,motorcycle,truck,bus,boat,plane,helicopter,racingcar,rallycar`,concepts:["bike","racingcar","rallycar"],selected:"rallycar",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used for race. "},{cat:"clothes",slot:"user",value:"women",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used by womens. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        skirt, dress, blouse, top, pants, shirt, jacket, coat, sweater, leggings. 
`,concepts:["top","pants","coat","leggings"],selected:"leggings",model:"llama-13b-supercot",criteria:"Criteria: are used by womens. "},{cat:"appliance",slot:"place",value:"hotel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be found or used in hotels. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, toaster, coffee maker, iron, hair dryer, television, air conditioner, safe,`,concepts:["coffee maker","iron","hair dryer","air conditioner","safe"],selected:"hair dryer",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in hotels. "},{cat:"clothes",slot:"part",value:"fur",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have fur. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        fur coat, fur hat, fur boots, fur scarf, fur gloves, fur pants, fur jacket, fur vest, fur`,concepts:["fur coat","fur hat","fur boots","fur scarf","fur gloves","fur pants","fur jacket","fur vest","fur"],selected:"fur hat",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have fur. "},{cat:"instruments",slot:"purpose",value:"improvise",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used to improvise. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, saxophone, trumpet, trombone, clarinet, piano, guitar, violin, drums, harmonica.`,concepts:["trumpet","drums"],selected:"drums",model:"llama-13b-supercot",criteria:"Criteria: are used to improvise. "},{cat:"appliance",slot:"purpose",value:"cooking",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used for cooking. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        oven, stove, microwave, toaster, blender, crockpot, pressure cooker, food processor, rice cooker`,concepts:["blender","crockpot","pressure cooker","food processor","rice cooker"],selected:"food processor",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used for cooking. "},{cat:"appliance",slot:"supply",value:"gas",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: use gas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, dryer, dishwasher, water heater, furnace, boiler,`,concepts:["water heater","furnace"],selected:"water heater",model:"nous-hermes-13b",criteria:"Criteria: use gas. "},{cat:"food",slot:"user",value:"adult",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by adults. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, banana, carrot, cheese, cucumber, eggplant, lettuce, onion, potato, tomato.`,concepts:["eggplant","lettuce"],selected:"lettuce",model:"manticore-13b",criteria:"Criteria: are used by adults. "},{cat:"animals",slot:"purpose",value:"research",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used for research. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        elephant, gorilla, chimpanzee, dolphin, whale, shark, snake, frog, par`,concepts:["gorilla","chimpanzee","dolphin","whale","shark","par"],selected:"shark",model:"nous-hermes-13b",criteria:"Criteria: are used for research. "},{cat:"containers",slot:"material",value:"polyester",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of polyester. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        polyester, plastic, metal, glass, cardboard, paper, wood, cloth, leather, bamboo. 

`,concepts:["polyester","plastic","metal","glass","cardboard","paper","wood","cloth","leather","bamboo"],selected:"cloth",model:"llama-13b-supercot",criteria:"Criteria: can be made of polyester. "},{cat:"food",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of food and can be white: 
        - Cauliflower
`,concepts:["here is a list of","cauliflower"],selected:"cauliflower",model:"nous-hermes-13b",criteria:"Criteria: can be white. "},{cat:"food",slot:"howToUse",value:"peel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for peel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "orange, banana, kiwi, grapefruit, lemon, lime, tangerine, pineapple, m`,concepts:["kiwi","grapefruit","lemon","lime","tangerine","pineapple","m"],selected:"tangerine",model:"manticore-13b",criteria:"Criteria: can be used for peel. "},{cat:"food",slot:"accessory",value:"glass",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with glass. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        milk, juice, water, soda, wine, beer, whiskey, vodka, champagne, margarita`,concepts:["milk","water","soda","whiskey","vodka","champagne","margarita"],selected:"champagne",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are related with glass. "},{cat:"instruments",slot:"howToUse",value:"fill",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be used for fill. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, trumpet, trombone, tuba, violin, viola, cello,`,concepts:["trumpet","tuba","viola"],selected:"viola",model:"llama-13b-supercot",criteria:"Criteria: can be used for fill. "},{cat:"food",slot:"part",value:"tannin",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have tannin. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, grapes, tea, coffee, red wine, black tea, green tea, red wine, black tea, green tea, red`,concepts:["apples","grapes","red wine","black tea","green tea","red wine","black tea","green tea","red"],selected:"red",model:"llama-13b-supercot",criteria:"Criteria: can have tannin. "},{cat:"animals",slot:"behavior",value:"cunning",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be cunning. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Fox
2. Raccoon
3. Snake
4. Owl
5. Shark
6. Cheetah`,concepts:["raccoon","owl","shark","cheetah"],selected:"raccoon",model:"manticore-13b",criteria:"Criteria: can be cunning. "},{cat:"animals",slot:"colorPattern",value:"beige",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be beige. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, goat, pig, rabbit, fox, deer. 

###`,concepts:["horse","cow","sheep","goat","pig"],selected:"goat",model:"llama-13b-supercot",criteria:"Criteria: can be beige. "},{cat:"instruments",slot:"bodyPart",value:"knee",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have or be used with knee. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, oboe, bassoon, trumpet, trombone, tuba, violin, viola, cello`,concepts:["trumpet","tuba","viola"],selected:"tuba",model:"nous-hermes-13b",criteria:"Criteria: can have or be used with knee. "},{cat:"clothes",slot:"part",value:"sole",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have sole. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shoes, sandals, boots, sneakers, socks, slippers, flip-flops, dress`,concepts:["pants","shoes","sandals","boots","sneakers","socks","slippers","flip","flops"],selected:"sneakers",model:"manticore-13b",criteria:"Criteria: can have sole. "},{cat:"vehicles",slot:"part",value:"wheel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have wheel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "car, truck, bike, motorcycle, bus, train, plane, boat, van, SUV"`,concepts:["bike","train","van","suv"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have wheel. "},{cat:"artifacts",slot:"material",value:"plastic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be made of plastic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        plastic, toy, container, bottle, cup, bowl, spoon, fork, knife, plate. 

##`,concepts:["plastic","toy","container","bottle","cup","bowl","spoon","fork","knife"],selected:"bottle",model:"llama-13b-supercot",criteria:"Criteria: can be made of plastic. "},{cat:"appliance",slot:"part",value:"oven",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have oven. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        oven, stove, microwave, refrigerator, dishwasher, washing machine, dryer, air condition`,concepts:["washing machine","air condition"],selected:"air condition",model:"nous-hermes-13b",criteria:"Criteria: can have oven. "},{cat:"vehicles",slot:"part",value:"pedal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have pedal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, car, motorcycle, truck, bus, train, boat, airplane, helicopter, scooter.`,concepts:["train"],selected:"train",model:"nous-hermes-13b",criteria:"Criteria: can have pedal. "},{cat:"food",slot:"accessory",value:"meat",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with meat. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        beef, pork, lamb, chicken, turkey, ham, bacon, sausage, steak, hamburger.`,concepts:["beef","pork","lamb","chicken","turkey","ham","bacon","sausage","steak","hamburger"],selected:"bacon",model:"manticore-13b",criteria:"Criteria: are related with meat. "},{cat:"vehicles",slot:"sound",value:"throbbing",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can throbbing. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "car, motorcycle, truck, bus, boat, airplane, helicopter, bicycle, scooter, train"`,concepts:["train"],selected:"train",model:"nous-hermes-13b",criteria:"Criteria: can throbbing. "},{cat:"tools",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, saw, chisel, pliers, drill, knife, axe, spanner`,concepts:["wrench","saw","chisel","pliers","drill","knife","axe","spanner"],selected:"chisel",model:"llama-13b-supercot",criteria:"Criteria: can be silver. "},{cat:"vehicles",slot:"part",value:"storage area",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have storage area. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        van, truck, SUV, minivan, station wagon, hatchback, cargo van, pickup truck, trailer,`,concepts:["van","suv","minivan","station wagon","hatchback","cargo van","pickup truck","trailer"],selected:"cargo van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have storage area. "},{cat:"artifacts",slot:"part",value:"felloe",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have felloe. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`

### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
       `,concepts:["instruction","provide a list of"],selected:"instruction",model:"llama-13b-supercot",criteria:"Criteria: can have felloe. "},{cat:"food",slot:"part",value:"pulp",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have pulp. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, orange, banana, mango, pineapple, avocado, grapefruit, strawberry, raspberry`,concepts:["mango","pineapple","avocado","grapefruit","raspberry"],selected:"avocado",model:"alpacino-supercot-13b",criteria:"Criteria: can have pulp. "},{cat:"artifacts",slot:"user",value:"climber",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: are used by climbers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        climbers, ice axes, crampons, harnesses, ropes, carabiners, helmets, climbing shoes`,concepts:["climbers","ice axes","crampons","harnesses","ropes","carabiners","helmets","climbing shoes"],selected:"crampons",model:"manticore-13b",criteria:"Criteria: are used by climbers. "},{cat:"containers",slot:"place",value:"canteen",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be found or used in canteens. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        canteen, container, cup, dish, jar, plate, pot, bowl, tray, utensil.`,concepts:["canteen","cup","dish","jar","plate","utensil"],selected:"canteen",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in canteens. "},{cat:"appliance",slot:"part",value:"lens",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have lens. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, oven, dishwasher, washing machine, dryer, television, computer, camera`,concepts:["washing machine","computer","camera"],selected:"computer",model:"nous-hermes-13b",criteria:"Criteria: can have lens. "},{cat:"food",slot:"part",value:"tomato",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have tomato. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        tomato, pizza, spaghetti, lasagna, soup, salad, sandwich, burger, taco, salsa`,concepts:["pizza","spaghetti","lasagna","soup","burger","taco","salsa"],selected:"salsa",model:"alpacino-supercot-13b",criteria:"Criteria: can have tomato. "},{cat:"containers",slot:"place",value:"cellar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be found or used in cellars. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Barrel
        2. Bottle
        3. Bucket
        4. Can
        5. Cask
        `,concepts:["cask"],selected:"cask",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in cellars. "},{cat:"animals",slot:"activity",value:"bait",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be bait. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, 
        dog, 
        rat, 
        mouse, 
        squirrel, 
        rabbit,`,concepts:["rat","mouse","squirrel"],selected:"mouse",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be bait. "},{cat:"animals",slot:"sound",value:"yelp",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria:  yelp. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:"\n```\ndog,cat,lion,tiger,elephant,monkey,giraffe,zebra,hippopot",concepts:["giraffe","zebra","hippopot"],selected:"zebra",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria:  yelp. "},{cat:"animals",slot:"activity",value:"watch",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be watch. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        tiger, lion, elephant, giraffe, zebra, cheetah, leopard, rhinoceros`,concepts:["giraffe","zebra","cheetah","leopard","rhinoceros"],selected:"cheetah",model:"nous-hermes-13b",criteria:"Criteria: can be watch. "},{cat:"vehicles",slot:"part",value:"drogue",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have drogue. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, tractor, trailer, semi-trailer, tanker, ambulance, firetruck`,concepts:["van","trailer","semi","trailer","tanker","ambulance","firetruck"],selected:"ambulance",model:"alpacino-supercot-13b",criteria:"Criteria: can have drogue. "},{cat:"food",slot:"howToUse",value:"soak",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for soak. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "rice, pasta, bread, oats, quinoa, lentils, barley, corn, potatoes, noodles`,concepts:["pasta","oats","quinoa","lentils","barley","potatoes","noodles"],selected:"barley",model:"nous-hermes-13b",criteria:"Criteria: can be used for soak. "},{cat:"instruments",slot:"place",value:"France",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be found or used in Frances. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, violin, guitar, piano, accordion, harmonica, saxophone, clarinet, trumpet, trombone`,concepts:["trumpet"],selected:"trumpet",model:"manticore-13b",criteria:"Criteria: can be found or used in Frances. "},{cat:"food",slot:"consistency",value:"tart",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be tart. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Lemon
2. Grapefruit
3. Tangerine
4. Lime
5. Kumquat
6`,concepts:["lemon","grapefruit","tangerine","lime","kumquat"],selected:"lime",model:"manticore-13b",criteria:"Criteria: can be tart. "},{cat:"animals",slot:"part",value:"feeler",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have feeler. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Spider
2. Caterpillar
3. Centipede
4. Millipede
5. Earthworm
6`,concepts:["caterpillar","centipede","millipede","earthworm"],selected:"caterpillar",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have feeler. "},{cat:"vehicles",slot:"content",value:"luggage",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: contain luggage. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        [car, truck, van, bus, SUV, RV, motorcycle, bicycle, boat, airplane]`,concepts:["van","suv","rv"],selected:"van",model:"manticore-13b",criteria:"Criteria: contain luggage. "},{cat:"clothes",slot:"colorPattern",value:"red",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be red. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category "clothes" and can be red: shirt, dress, pants, jack`,concepts:["here are","clothes","and can be red","pants","jack"],selected:"jack",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be red. "},{cat:"vehicles",slot:"part",value:"skeletal frame",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have skeletal frame. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, boat, airplane, helicopter, train, bus, tank.`,concepts:["train","tank"],selected:"tank",model:"nous-hermes-13b",criteria:"Criteria: can have skeletal frame. "},{cat:"tools",slot:"shape",value:"long",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be long. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, wrench, screwdriver, hammer, saw, drill, measuring tape, level, screws, n`,concepts:["pliers","wrench","saw","drill","measuring tape","level","screws","n"],selected:"screws",model:"nous-hermes-13b",criteria:"Criteria: can be long. "},{cat:"animals",slot:"group",value:"colony",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are grouped in colony. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "ants, bees, termites, ants, bees, termites, ants, bees, termites, ants,`,concepts:["ants","bees","termites","ants","bees","termites","ants","bees","termites","ants"],selected:"ants",model:"manticore-13b",criteria:"Criteria: are grouped in colony. "},{cat:"clothes",slot:"colorPattern",value:"grey",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be grey. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, sweater, jacket, coat, shoes, socks, t-shirt, sweatpants,`,concepts:["pants","coat","shoes","socks","t","sweatpants"],selected:"socks",model:"alpacino-supercot-13b",criteria:"Criteria: can be grey. "},{cat:"food",slot:"howToUse",value:"shuck",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for shuck. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shuck, corn, oyster, clam, mussel, scallop, crab, lobster, shrimp, pra`,concepts:["shuck","oyster","clam","mussel","scallop","crab","lobster","shrimp","pra"],selected:"crab",model:"alpacino-supercot-13b",criteria:"Criteria: can be used for shuck. "},{cat:"vehicles",slot:"purpose",value:"rental",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used for rental. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, SUV, motorcycle, ATV, boat, camper, RV`,concepts:["van","suv","atv","camper","rv"],selected:"rv",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used for rental. "},{cat:"food",slot:"part",value:"dough",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have dough. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, cake, cookie, doughnut, pastry, pizza, roll, tortilla, biscuit, cracker`,concepts:["cake","cookie","doughnut","pastry","pizza","roll","tortilla","biscuit","cracker"],selected:"doughnut",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have dough. "},{cat:"vehicles",slot:"part",value:"ridge rope",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have ridge rope. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of vehicles and can have ridge rope: 
        truck,`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can have ridge rope. "},{cat:"food",slot:"user",value:"cook",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by cooks. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - butter
        - flour
        - sugar
        - salt
        - pepper
        - olive oil
        -`,concepts:["butter","flour","sugar","salt","pepper","olive oil"],selected:"salt",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by cooks. "},{cat:"home",slot:"shape",value:"elongated",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be elongated. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bed, chair, couch, desk, table, sofa, mattress, pillow, rug, carpet`,concepts:["bed","couch","desk","table","sofa","mattress","pillow","rug","carpet"],selected:"table",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be elongated. "},{cat:"food",slot:"place",value:"bakery",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in bakeries. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, flour, sugar, butter, eggs, milk, yeast, chocolate chips, cinnamon, vanilla`,concepts:["flour","sugar","butter","eggs","milk","yeast","chocolate chips","cinnamon","vanilla"],selected:"yeast",model:"manticore-13b",criteria:"Criteria: can be found or used in bakeries. "},{cat:"vehicles",slot:"user",value:"pedestrian",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by pedestrians. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, skateboard, rollerblades, scooter, wheelchair, walker, cane, crutches`,concepts:["skateboard","rollerblades","wheelchair","walker","cane","crutches"],selected:"wheelchair",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by pedestrians. "},{cat:"vehicles",slot:"part",value:"low",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have low. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, train.`,concepts:["van","train"],selected:"train",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have low. "},{cat:"food",slot:"product",value:"loaf",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce loaf. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
banana, bread, cake, cheese, egg, flour, milk, muffin, pizza, toast. 

`,concepts:["cake","egg","flour","milk","muffin","pizza","toast"],selected:"pizza",model:"llama-13b-supercot",criteria:"Criteria: can produce loaf. "},{cat:"food",slot:"time",value:"lunch",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be consumed or used during lunch. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Sandwich
2. Salad
3. Soup
4. Pasta
5. Burger
6. Pizza
7`,concepts:["soup","pasta","burger","pizza"],selected:"soup",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be consumed or used during lunch. "},{cat:"tools",slot:"purpose",value:"weeding",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are used for weeding. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shovel, rake, hoe, spade, fork, trowel, weeder, cultivator, pruner, she`,concepts:["fork","weeder","cultivator","pruner","she"],selected:"cultivator",model:"alpacino-supercot-13b",criteria:"Criteria: are used for weeding. "},{cat:"animals",slot:"place",value:"land",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in lands. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 animals that can be found or used in lands: 
        - Cow
        - Horse
       `,concepts:["here is a list of","cow","horse"],selected:"cow",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in lands. "},{cat:"containers",slot:"content",value:"wallet",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain wallets. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        wallet, purse, pouch, bag, case, pocket, satchel, briefcase, backpack, suitcase. 
`,concepts:["wallet","purse","pouch","case","pocket","satchel","briefcase","backpack","suitcase"],selected:"case",model:"llama-13b-supercot",criteria:"Criteria: contain wallets. "},{cat:"vehicles",slot:"part",value:"screw",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have screw. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, boat, airplane, helicopter, train, bus, van.`,concepts:["train","van"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have screw. "},{cat:"tools",slot:"part",value:"pinhead",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can have pinhead. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, pliers, saw, chisel, level, measuring tape, screws,`,concepts:["wrench","pliers","saw","chisel","level","measuring tape","screws"],selected:"pliers",model:"manticore-13b",criteria:"Criteria: can have pinhead. "},{cat:"food",slot:"consistency",value:"crunchy",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be crunchy. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, potato chips, pretzels, carrots, celery, popcorn, corn chips, tortilla ch`,concepts:["apples","potato chips","pretzels","carrots","celery","popcorn","corn chips","tortilla ch"],selected:"popcorn",model:"llama-13b-supercot",criteria:"Criteria: can be crunchy. "},{cat:"home",slot:"shape",value:"cylindrical",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be cylindrical. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        broom, mop, vacuum cleaner, dustpan, brush, dustbuster, feather duster, vacuum,`,concepts:["broom","mop","vacuum cleaner","dustpan","brush","dustbuster","feather duster","vacuum"],selected:"dustpan",model:"llama-13b-supercot",criteria:"Criteria: can be cylindrical. "},{cat:"food",slot:"product",value:"sauce",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce sauce. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. tomato
2. onion
3. garlic
4. ginger
5. soy sauce
6. vineg`,concepts:["garlic","ginger","soy sauce","vineg"],selected:"ginger",model:"manticore-13b",criteria:"Criteria: can produce sauce. "},{cat:"artifacts",slot:"part",value:"visor",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have visor. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        helmet, visor, goggles, mask, shield, armor, breastplate, cuirass, corselet, ha`,concepts:["goggles","mask","armor","breastplate","cuirass","corselet","ha"],selected:"mask",model:"nous-hermes-13b",criteria:"Criteria: can have visor. "},{cat:"animals",slot:"user",value:"beekeeper",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used by beekeepers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        beeswax, honeycomb, queen bee, beehive, honey, beekeeper, bee sting, be`,concepts:["beeswax","honeycomb","queen bee","beehive","honey","beekeeper","bee sting","be"],selected:"beekeeper",model:"manticore-13b",criteria:"Criteria: are used by beekeepers. "},{cat:"appliance",slot:"supply",value:"fire",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: use fire. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, microwave, toaster, coffee maker, grill, fireplace, heater`,concepts:["coffee maker","grill"],selected:"grill",model:"llama-13b-supercot",criteria:"Criteria: use fire. "},{cat:"containers",slot:"material",value:"cloth",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of cloth. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Bag, 
        2. Sack, 
        3. Pouch, 
        4. Purse, 
`,concepts:["sack","pouch","purse"],selected:"pouch",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of cloth. "},{cat:"animals",slot:"part",value:"mouth",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have mouth. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat,dog,lion,tiger,elephant,giraffe,hippopotamus,crocodile,`,concepts:["giraffe","hippopotamus","crocodile"],selected:"crocodile",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have mouth. "},{cat:"tools",slot:"accessory",value:"toolbox",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are related with toolbox. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, wrench, screwdriver, pliers, saw, tape measure, level, drill, screws, nails`,concepts:["wrench","pliers","saw","tape measure","level","drill","screws","nails"],selected:"wrench",model:"alpacino-supercot-13b",criteria:"Criteria: are related with toolbox. "},{cat:"food",slot:"part",value:"cabbage",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have cabbage. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cabbage, broccoli, cauliflower, brussels sprouts, kale, collard greens, bok choy`,concepts:["broccoli","cauliflower","brussels sprouts","kale","collard greens","bok choy"],selected:"kale",model:"llama-13b-supercot",criteria:"Criteria: can have cabbage. "},{cat:"instruments",slot:"part",value:"rope",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have rope. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        violin, guitar, harp, piano, banjo, dulcimer, marimba, vibraphone, xylo`,concepts:["harp","dulcimer","marimba","vibraphone","xylo"],selected:"vibraphone",model:"nous-hermes-13b",criteria:"Criteria: can have rope. "},{cat:"appliance",slot:"part",value:"refrigerator",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have refrigerator. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, washing machine, dishwasher, oven, air conditioner, vacuum cleaner`,concepts:["washing machine","air conditioner","vacuum cleaner"],selected:"vacuum cleaner",model:"llama-13b-supercot",criteria:"Criteria: can have refrigerator. "},{cat:"vehicles",slot:"place",value:"dry dock",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be found or used in dry docks. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        truck, crane, tugboat, barge, bulldozer, excavator, forklift, dump truck`,concepts:["crane","tugboat","barge","excavator","dump truck"],selected:"tugboat",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in dry docks. "},{cat:"clothes",slot:"size",value:"tall",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be tall. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirts, dresses, skirts, coats, jackets, trousers, blouses, sweaters,`,concepts:["pants","shirts","dresses","skirts","coats","jackets","trousers","blouses","sweaters"],selected:"shirts",model:"manticore-13b",criteria:"Criteria: can be tall. "},{cat:"appliance",slot:"user",value:"doctor",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used by doctors. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Stethoscope
2. Scalpel
3. Forceps
4. Syringe
5. Thermometer
6`,concepts:["stethoscope","scalpel","forceps","syringe"],selected:"scalpel",model:"llama-13b-supercot",criteria:"Criteria: are used by doctors. "},{cat:"food",slot:"accessory",value:"bean",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with bean. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        beans, black beans, kidney beans, pinto beans, chickpeas, lentils, soybeans,`,concepts:["beans","black beans","kidney beans","pinto beans","chickpeas","lentils","soybeans"],selected:"pinto beans",model:"manticore-13b",criteria:"Criteria: are related with bean. "},{cat:"home",slot:"part",value:"throne",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can have throne. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        throne, chair, couch, sofa, bed, table, desk, bench, stool, ottoman

### Inst`,concepts:["throne","couch","sofa","bed","table","desk","bench","stool","ottoman","inst"],selected:"couch",model:"alpacino-supercot-13b",criteria:"Criteria: can have throne. "},{cat:"food",slot:"colorPattern",value:"pink",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be pink. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can be pink: strawberry, cotton candy, grape`,concepts:["here are","cotton candy","grape"],selected:"cotton candy",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be pink. "},{cat:"clothes",slot:"user",value:"workman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used by workmen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        trousers, boots, gloves, helmet, goggles, overalls, safety belt, harness, hard hat`,concepts:["trousers","boots","gloves","helmet","goggles","overalls","safety belt","harness","hard hat"],selected:"safety belt",model:"llama-13b-supercot",criteria:"Criteria: are used by workmen. "},{cat:"appliance",slot:"purpose",value:"enlarge",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used to enlarge. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category`,concepts:["instruction","provide a list of","category"],selected:"category",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to enlarge. "},{cat:"home",slot:"content",value:"liquid",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: contain liquids. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "water, milk, juice, tea, coffee, wine, oil, vinegar, honey, syrup"`,concepts:["water","milk","juice","tea","coffee","wine","oil","vinegar","honey","syrup"],selected:"syrup",model:"manticore-13b",criteria:"Criteria: contain liquids. "},{cat:"vehicles",slot:"sound",value:"rumbling",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: sound rumbling. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bus, train, airplane, helicopter, boat, submarine, tank.`,concepts:["train","submarine","tank"],selected:"train",model:"alpacino-supercot-13b",criteria:"Criteria: sound rumbling. "},{cat:"vehicles",slot:"part",value:"coachwork",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have coachwork. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bus,car,coach,firetruck,limousine,motorcycle,schoolbus,train,truck,van`,concepts:["coach","firetruck","limousine","schoolbus","train","van"],selected:"coach",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have coachwork. "},{cat:"vehicles",slot:"place",value:"farm",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be found or used in farms. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        truck, tractor, combine, harvester, trailer, grain cart, hay baler, manure spreader, plow`,concepts:["combine","harvester","trailer","grain cart","hay baler","manure spreader","plow"],selected:"plow",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in farms. "},{cat:"clothes",slot:"colorPattern",value:"striped",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be striped. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, dress, socks, shoes, tie, scarf, jacket, sweater, pajamas.`,concepts:["pants","socks","shoes","tie","pajamas"],selected:"tie",model:"manticore-13b",criteria:"Criteria: can be striped. "},{cat:"instruments",slot:"purpose",value:"light music",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used for light music. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        piano, violin, guitar, flute, saxophone, clarinet, trumpet, trombone, drums, harp.`,concepts:["trumpet","drums","harp"],selected:"trumpet",model:"llama-13b-supercot",criteria:"Criteria: are used for light music. "},{cat:"containers",slot:"user",value:"woman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: are used by women. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of containers and are used by women: 
        handbag, purse`,concepts:["here is a list of","handbag","purse"],selected:"purse",model:"nous-hermes-13b",criteria:"Criteria: are used by women. "},{cat:"animals",slot:"movement",value:"creep",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can creep. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "snake, spider, insect, lizard, worm, centipede, scorpion, frog, toad, t`,concepts:["worm","centipede","scorpion","toad","t"],selected:"worm",model:"nous-hermes-13b",criteria:"Criteria: can creep. "},{cat:"vehicles",slot:"part",value:"nose",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have nose. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Car
2. Truck
3. Bus
4. Train
5. Plane
6. Boat
7. Motorcycle`,concepts:["train"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have nose. "},{cat:"clothes",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, dress, socks, underwear, jacket, skirt, blouse, sweater, shoes.`,concepts:["pants","socks","underwear","shoes"],selected:"shoes",model:"nous-hermes-13b",criteria:"Criteria: can be white. "},{cat:"food",slot:"consistency",value:"tart",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be tart. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, lemon, grapefruit, tangerine, cranberry, rhubarb, kiwi, pomegranate`,concepts:["lemon","grapefruit","tangerine","cranberry","rhubarb","kiwi","pomegranate"],selected:"lemon",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be tart. "},{cat:"artifacts",slot:"part",value:"rim",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have rim. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pot, bowl, cup, vase, plate, jar, pitcher, mug, glass, cup

### Instruction:`,concepts:["pot","bowl","cup","vase","jar","pitcher","mug","cup","instruction"],selected:"pitcher",model:"alpacino-supercot-13b",criteria:"Criteria: can have rim. "},{cat:"vehicles",slot:"accessory",value:"scraper",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are related with scraper. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Scraper
2. Scraper truck
3. Scraper machine
4. Scraper blade
5.`,concepts:["scraper","scraper truck","scraper machine","scraper blade"],selected:"scraper",model:"manticore-13b",criteria:"Criteria: are related with scraper. "},{cat:"vehicles",slot:"part",value:"window",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have window. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "car, truck, bus, motorcycle, bicycle, boat, airplane, helicopter, train, van"`,concepts:["train","van"],selected:"train",model:"nous-hermes-13b",criteria:"Criteria: can have window. "},{cat:"containers",slot:"content",value:"drink",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain drinks. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cup, mug, glass, bottle, flask, can, jar, jug, bowl, pitcher.`,concepts:["cup","mug","glass","flask","jar","jug","pitcher"],selected:"jar",model:"alpacino-supercot-13b",criteria:"Criteria: contain drinks. "},{cat:"instruments",slot:"shape",value:"circular",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be circular. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, drum, trumpet, guitar, violin, harp, saxophone, clarinet, oboe, bassoon`,concepts:["trumpet","harp"],selected:"trumpet",model:"nous-hermes-13b",criteria:"Criteria: can be circular. "},{cat:"food",slot:"howToUse",value:"soak",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for soak. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        soy sauce, vinegar, balsamic vinegar, lemon juice, rice vinegar, apple cider`,concepts:["soy sauce","vinegar","balsamic vinegar","lemon juice","rice vinegar","apple cider"],selected:"balsamic vinegar",model:"manticore-13b",criteria:"Criteria: can be used for soak. "},{cat:"containers",slot:"material",value:"aluminum",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of aluminum. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        aluminum can, aluminum foil, aluminum pan, aluminum pot, aluminum tray, aluminum`,concepts:["aluminum can","aluminum foil","aluminum pan","aluminum pot","aluminum tray","aluminum"],selected:"aluminum pan",model:"llama-13b-supercot",criteria:"Criteria: can be made of aluminum. "},{cat:"instruments",slot:"part",value:"mouthpiece",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have mouthpiece. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, trumpet, trombone, euphonium, tuba, oboe, bassoon`,concepts:["trumpet","euphonium","tuba"],selected:"trumpet",model:"llama-13b-supercot",criteria:"Criteria: can have mouthpiece. "},{cat:"artifacts",slot:"part",value:"platen",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have platen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - pottery
        - sculpture
        - vase
        - bowl
        - urn
        - figurine
       `,concepts:["pottery","sculpture","vase","bowl","urn","figurine"],selected:"sculpture",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have platen. "},{cat:"animals",slot:"movement",value:"attack",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can attack. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, lion, tiger, bear, shark, crocodile, snake, spider, scorpion, bee.`,concepts:["shark","crocodile","scorpion"],selected:"scorpion",model:"llama-13b-supercot",criteria:"Criteria: can attack. "},{cat:"appliance",slot:"part",value:"water back",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have water back. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, 
        washing machine, 
        dishwasher, 
        water heater, 
`,concepts:["washing machine","water heater"],selected:"water heater",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have water back. "},{cat:"instruments",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, trumpet, trombone, violin, viola, cello, harp,`,concepts:["trumpet","viola","harp"],selected:"viola",model:"alpacino-supercot-13b",criteria:"Criteria: can be silver. "},{cat:"home",slot:"material",value:"porcelain",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of porcelain. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Toilet
2. Sink
3. Bathtub
4. Shower
5. Washbasin
6.`,concepts:["bathtub","washbasin"],selected:"washbasin",model:"nous-hermes-13b",criteria:"Criteria: can be made of porcelain. "},{cat:"tools",slot:"colorPattern",value:"black",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be black. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, pliers, saw, drill, chisel, scissors, knife, ax`,concepts:["wrench","pliers","saw","drill","chisel","knife","ax"],selected:"knife",model:"llama-13b-supercot",criteria:"Criteria: can be black. "},{cat:"instruments",slot:"part",value:"resonance chamber",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have resonance chamber. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, piano, violin, cello, flute, clarinet, saxophone, trumpet, trombone, tuba`,concepts:["trumpet","tuba"],selected:"trumpet",model:"llama-13b-supercot",criteria:"Criteria: can have resonance chamber. "},{cat:"clothes",slot:"part",value:"shirttail",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have shirttail. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shirt, blouse, dress, skirt, pants, shorts, jacket, coat, sweater, sweatshirt.`,concepts:["pants","shorts","coat","sweatshirt"],selected:"coat",model:"manticore-13b",criteria:"Criteria: can have shirttail. "},{cat:"animals",slot:"place",value:"Kenia",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in Kenias. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Giraffe
2. Zebra
3. Lion
4. Elephant
5. Cheetah
6. Rh`,concepts:["giraffe","zebra","cheetah","rh"],selected:"rh",model:"manticore-13b",criteria:"Criteria: can be found or used in Kenias. "},{cat:"clothes",slot:"purpose",value:"ride",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used to ride. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jacket, helmet, boots, gloves, goggles, saddle, stirrups, reins,`,concepts:["pants","helmet","boots","gloves","goggles","saddle","stirrups","reins"],selected:"helmet",model:"manticore-13b",criteria:"Criteria: are used to ride. "},{cat:"clothes",slot:"material",value:"fleece",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of fleece. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        jeans, jacket, sweater, sweatpants, hoodie, pajamas, sweatshirt, vest,`,concepts:["jeans","sweatpants","hoodie","pajamas","sweatshirt","vest"],selected:"hoodie",model:"llama-13b-supercot",criteria:"Criteria: can be made of fleece. "},{cat:"animals",slot:"activity",value:"sleep",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be sleep. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 animals that can sleep: 
        - Cat, 
        - Dog, 
        - Bear`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can be sleep. "},{cat:"food",slot:"user",value:"somellier",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by somelliers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, bananas, grapes, oranges, lemons, strawberries, raspberries, blueberries,`,concepts:["apples","bananas","grapes","oranges","lemons","strawberries","raspberries","blueberries"],selected:"lemons",model:"llama-13b-supercot",criteria:"Criteria: are used by somelliers. "},{cat:"animals",slot:"place",value:"larva",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in larvas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. maggot
2. caterpillar
3. grub
4. worm
5. fly larva
6.`,concepts:["maggot","caterpillar","grub","worm","fly larva"],selected:"maggot",model:"manticore-13b",criteria:"Criteria: can be found or used in larvas. "},{cat:"vehicles",slot:"part",value:"fuel pod",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have fuel pod. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, boat, airplane, helicopter, bicycle, scooter, segway, hovercraft`,concepts:["segway","hovercraft"],selected:"segway",model:"llama-13b-supercot",criteria:"Criteria: can have fuel pod. "},{cat:"clothes",slot:"part",value:"tongue",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have tongue. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, dress, skirt, shoes, socks, pajamas, underwear, swe`,concepts:["pants","shoes","socks","pajamas","underwear","swe"],selected:"pajamas",model:"nous-hermes-13b",criteria:"Criteria: can have tongue. "},{cat:"clothes",slot:"place",value:"hospital",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be found or used in hospitals. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, 
        scrubs, 
        lab coat, 
        surgical mask, 
        gloves, 
`,concepts:["pants","scrubs","lab coat","surgical mask","gloves"],selected:"surgical mask",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be found or used in hospitals. "},{cat:"home",slot:"generalization",value:"barrier",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: are barrier. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. door
2. gate
3. fence
4. wall
5. window
6. curtain
7. lock
8`,concepts:["fence","wall","window","curtain","lock"],selected:"lock",model:"nous-hermes-13b",criteria:"Criteria: are barrier. "},{cat:"instruments",slot:"purpose",value:"practice",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used for practice. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, trumpet, trombone, violin, guitar, piano, drums, cello.`,concepts:["trumpet","drums"],selected:"drums",model:"manticore-13b",criteria:"Criteria: are used for practice. "},{cat:"clothes",slot:"purpose",value:"protect",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used to protect. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jacket, raincoat, umbrella, gloves, scarf, helmet, goggles, boots`,concepts:["pants","raincoat","umbrella","gloves","helmet","goggles","boots"],selected:"gloves",model:"manticore-13b",criteria:"Criteria: are used to protect. "},{cat:"artifacts",slot:"efficiency",value:"strong",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be strong. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        knife, sword, axe, hammer, shield, bow, spear, club, mace, chisel. 

`,concepts:["knife","sword","axe","hammer","bow","spear","club","mace","chisel"],selected:"axe",model:"llama-13b-supercot",criteria:"Criteria: can be strong. "},{cat:"vehicles",slot:"part",value:"lubber's hole",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have lubber's hole. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, van, motorcycle, bicycle, boat, airplane, helicopter, tank.`,concepts:["van","tank"],selected:"tank",model:"alpacino-supercot-13b",criteria:"Criteria: can have lubber's hole. "},{cat:"animals",slot:"sound",value:"croaking",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can croaking. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        frog, toad, bullfrog, tree frog, green frog, leopard frog, bullfrog,`,concepts:["toad","bullfrog","tree frog","green frog","leopard frog","bullfrog"],selected:"tree frog",model:"llama-13b-supercot",criteria:"Criteria: can croaking. "},{cat:"containers",slot:"content",value:"sand",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain sand. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Sandbox
2. Sandcastle
3. Sandal
4. Sandpit
5. Sandwich
6. Sandblaster
`,concepts:["sandbox","sandcastle","sandal","sandpit","sandwich","sandblaster"],selected:"sandwich",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: contain sand. "},{cat:"vehicles",slot:"user",value:"corps",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by corps. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        truck, jeep, humvee, tank, armored car, ambulance, bus, motorcycle, helicopter, airplane`,concepts:["jeep","humvee","tank","armored car","ambulance"],selected:"jeep",model:"alpacino-supercot-13b",criteria:"Criteria: are used by corps. "},{cat:"animals",slot:"part",value:"body",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have body. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, elephant, horse, lion, monkey, rabbit, tiger, whale, zebra

`,concepts:["horse","whale","zebra"],selected:"whale",model:"alpacino-supercot-13b",criteria:"Criteria: can have body. "},{cat:"instruments",slot:"user",value:"drummer",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used by drummers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        snare drum, bass drum, hi-hat, crash cymbal, ride cymbal, splash cymbal, tom-tom`,concepts:["snare drum","bass drum","hi","hat","crash cymbal","ride cymbal","splash cymbal","tom","tom"],selected:"bass drum",model:"alpacino-supercot-13b",criteria:"Criteria: are used by drummers. "},{cat:"artifacts",slot:"material",value:"gold",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be made of gold. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        gold, jewelry, crown, ring, necklace, bracelet, earring, statue, coin

### Instruction`,concepts:["gold","crown","ring","statue","coin","instruction"],selected:"gold",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of gold. "},{cat:"food",slot:"product",value:"syrup",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce syrup. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - Honey
        - Maple syrup
        - Sorghum syrup
        - Molasses
        - Corn syrup`,concepts:["honey","maple syrup","sorghum syrup","molasses","corn syrup"],selected:"honey",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can produce syrup. "},{cat:"clothes",slot:"user",value:"baseman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used by basemen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        jeans, t-shirt, jersey, baseball cap, cleats, batting gloves, helmet, catcher's`,concepts:["jeans","t","jersey","baseball cap","cleats","batting gloves","helmet","catcher","s"],selected:"cleats",model:"nous-hermes-13b",criteria:"Criteria: are used by basemen. "},{cat:"tools",slot:"purpose",value:"build",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are used to build. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, saw, measuring tape, level, drill, screws, nails, p`,concepts:["wrench","saw","measuring tape","level","drill","screws","nails","p"],selected:"measuring tape",model:"nous-hermes-13b",criteria:"Criteria: are used to build. "},{cat:"vehicles",slot:"user",value:"passenger",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by passengers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,bus,train,airplane,boat,taxi,van,limousine,coach,motorcycle
`,concepts:["train","van","limousine","coach"],selected:"limousine",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by passengers. "},{cat:"food",slot:"user",value:"adult",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by adults. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, bananas, carrots, celery, cucumbers, lettuce, onions, peppers, tomatoes,`,concepts:["apples","bananas","carrots","celery","cucumbers","lettuce","onions","peppers","tomatoes"],selected:"lettuce",model:"alpacino-supercot-13b",criteria:"Criteria: are used by adults. "},{cat:"animals",slot:"user",value:"handler",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used by handlers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, sheep, goat, cow, pig, chicken, duck, rabbit. 

###`,concepts:["horse","sheep","goat","cow","pig","chicken","duck"],selected:"sheep",model:"llama-13b-supercot",criteria:"Criteria: are used by handlers. "},{cat:"food",slot:"product",value:"whiskey",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce whiskey. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        whiskey`,concepts:["whiskey"],selected:"whiskey",model:"manticore-13b",criteria:"Criteria: can produce whiskey. "},{cat:"animals",slot:"purpose",value:"food",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used for food. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cow, pig, chicken, sheep, goat, duck, turkey, fish, beef, lamb.`,concepts:["cow","pig","chicken","sheep","goat","duck","turkey","fish","beef","lamb"],selected:"duck",model:"alpacino-supercot-13b",criteria:"Criteria: are used for food. "},{cat:"instruments",slot:"part",value:"bellows",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have bellows. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, accordion, harmonica, trumpet, clarinet, oboe, saxophone, bagpipes, recorder`,concepts:["trumpet","bagpipes","recorder"],selected:"bagpipes",model:"nous-hermes-13b",criteria:"Criteria: can have bellows. "},{cat:"food",slot:"howToUse",value:"glaze",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for glaze. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        applesauce, apricot, blueberry, cherry, cranberry, grape, lemon, orange, peach,`,concepts:["applesauce","apricot","blueberry","cherry","cranberry","grape","lemon","peach"],selected:"cherry",model:"alpacino-supercot-13b",criteria:"Criteria: can be used for glaze. "},{cat:"vehicles",slot:"part",value:"taillight",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have taillight. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        [car, truck, bus, motorcycle, bicycle, boat, airplane, helicopter, train, taxi]`,concepts:["train"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have taillight. "},{cat:"instruments",slot:"part",value:"finger hole",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have finger hole. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, oboe, saxophone, trumpet, trombone, violin, viola, cello,`,concepts:["trumpet","viola"],selected:"viola",model:"manticore-13b",criteria:"Criteria: can have finger hole. "},{cat:"animals",slot:"activity",value:"fuck",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be fuck. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, pig, chicken, duck, goose, turkey.`,concepts:["horse","cow","sheep","pig","chicken","duck","goose","turkey"],selected:"horse",model:"alpacino-supercot-13b",criteria:"Criteria: can be fuck. "},{cat:"instruments",slot:"howToUse",value:"fill",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be used for fill. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, clarinet, saxophone, trumpet, trombone, tuba, violin, guitar, piano, drum.`,concepts:["trumpet","tuba"],selected:"trumpet",model:"nous-hermes-13b",criteria:"Criteria: can be used for fill. "},{cat:"clothes",slot:"material",value:"felt",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of felt. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        jeans, pants, jacket, coat, shirt, sweater, dress, skirt, shoes, boots. 
`,concepts:["jeans","pants","coat","shoes","boots"],selected:"jeans",model:"llama-13b-supercot",criteria:"Criteria: can be made of felt. "},{cat:"animals",slot:"colorPattern",value:"striped",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be striped. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        tiger, zebra, giraffe, panda, skunk, leopard, cheetah, wildebeest,`,concepts:["zebra","giraffe","panda","skunk","leopard","cheetah","wildebeest"],selected:"skunk",model:"nous-hermes-13b",criteria:"Criteria: can be striped. "},{cat:"clothes",slot:"specialization",value:"stocking cap",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are stocking cap. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "stocking cap, knit cap, beanie, skullcap, watch cap, balaclava, ski mask, face mask, head`,concepts:["stocking cap","knit cap","beanie","skullcap","watch cap","balaclava","ski mask","face mask","head"],selected:"skullcap",model:"nous-hermes-13b",criteria:"Criteria: are stocking cap. "},{cat:"food",slot:"specialization",value:"cubeb",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are cubeb. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cubeb, cubeb pepper, cubeb pepper plant, cubeb pepper seeds, cubeb pepper spice, cubeb`,concepts:["cubeb","cubeb pepper","cubeb pepper plant","cubeb pepper seeds","cubeb pepper spice","cubeb"],selected:"cubeb pepper plant",model:"alpacino-supercot-13b",criteria:"Criteria: are cubeb. "},{cat:"clothes",slot:"part",value:"sleeve",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have sleeve. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, sweater, coat, dress, blouse, sweatshirt, t-shirt, h`,concepts:["pants","coat","sweatshirt","t","h"],selected:"t",model:"manticore-13b",criteria:"Criteria: can have sleeve. "},{cat:"vehicles",slot:"part",value:"automobile engine",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have automobile engine. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        [car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, train]`,concepts:["van","train"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have automobile engine. "},{cat:"food",slot:"time",value:"lunch",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be consumed or used during lunch. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, bananas, bread, cheese, chicken, lettuce, milk, oranges, pasta, tomatoes. 
`,concepts:["apples","bananas","chicken","lettuce","milk","oranges","pasta","tomatoes"],selected:"chicken",model:"llama-13b-supercot",criteria:"Criteria: can be consumed or used during lunch. "},{cat:"vehicles",slot:"part",value:"steering wheel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have steering wheel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        [car, truck, bus, motorcycle, bicycle, boat, airplane, helicopter, train, tank]`,concepts:["train","tank"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have steering wheel. "},{cat:"food",slot:"accessory",value:"pizza",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with pizza. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pizza, cheese, tomato sauce, mozzarella, pepperoni, basil, garlic, oregano`,concepts:["pizza","tomato sauce","mozzarella","pepperoni","basil","garlic","oregano"],selected:"pepperoni",model:"manticore-13b",criteria:"Criteria: are related with pizza. "},{cat:"food",slot:"accessory",value:"marmalade",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with marmalade. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        marmalade, marmalade, marmalade, marmalade, marmalade, marmalade, marmalade, marmal`,concepts:["marmalade","marmalade","marmalade","marmalade","marmalade","marmalade","marmalade","marmal"],selected:"marmalade",model:"alpacino-supercot-13b",criteria:"Criteria: are related with marmalade. "},{cat:"artifacts",slot:"howToUse",value:"fasten",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be used for fasten. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        screw, nail, staple, glue, tape, clamp, bolt, rivet, nuts, washer`,concepts:["screw","nail","staple","glue","tape","clamp","bolt","rivet","nuts","washer"],selected:"rivet",model:"llama-13b-supercot",criteria:"Criteria: can be used for fasten. "},{cat:"animals",slot:"activity",value:"chase",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be chase. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, lion, tiger, cheetah, jaguar, leopard, wolf, coyote, fo`,concepts:["cheetah","jaguar","leopard","coyote","fo"],selected:"coyote",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be chase. "},{cat:"food",slot:"howToUse",value:"cook",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for cook. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can be used for cook: apple, banana, carrot, eggplant`,concepts:["here are","eggplant"],selected:"eggplant",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for cook. "},{cat:"animals",slot:"colorPattern",value:"black",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be black. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, cow, horse, sheep, goat, pig, crow, raven, blackbird.`,concepts:["cow","horse","sheep","goat","pig","crow","raven","blackbird"],selected:"crow",model:"alpacino-supercot-13b",criteria:"Criteria: can be black. "},{cat:"appliance",slot:"part",value:"microwave",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have microwave. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        microwave, oven, refrigerator, washing machine, dishwasher, air conditioner, television, computer,`,concepts:["washing machine","air conditioner","computer"],selected:"computer",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have microwave. "},{cat:"clothes",slot:"part",value:"counter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have counter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, 
        shirt, 
        jacket, 
        sweater, 
        socks, 
       `,concepts:["pants","socks"],selected:"pants",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have counter. "},{cat:"home",slot:"material",value:"iron",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of iron. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        iron, ironing board, ironing board cover, ironing board cover pad, ironing board pad, ironing board pad cover, ironing`,concepts:["iron","ironing board","ironing board cover","ironing board pad","ironing"],selected:"ironing board",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of iron. "},{cat:"clothes",slot:"bodyPart",value:"neck",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have or be used with neck. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "shirt, blouse, sweater, scarf, tie, hoodie, jacket, sweatshirt, dress, p`,concepts:["tie","hoodie","sweatshirt","p"],selected:"tie",model:"nous-hermes-13b",criteria:"Criteria: can have or be used with neck. "},{cat:"animals",slot:"behavior",value:"cute",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be cute. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        kitten, puppy, bunny, panda, koala, monkey, elephant, penguin, tiger,`,concepts:["kitten","puppy","bunny","panda","koala","penguin"],selected:"koala",model:"llama-13b-supercot",criteria:"Criteria: can be cute. "},{cat:"appliance",slot:"shape",value:"elongated",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be elongated. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, washing machine, vacuum cleaner, dishwasher, microwave oven, air conditioner,`,concepts:["washing machine","vacuum cleaner","microwave oven","air conditioner"],selected:"vacuum cleaner",model:"llama-13b-supercot",criteria:"Criteria: can be elongated. "},{cat:"artifacts",slot:"shape",value:"rond",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be rond. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. bowl
        2. vase
        3. urn
        4. cup
        5. plate
        6.`,concepts:["bowl","vase","urn","cup"],selected:"bowl",model:"alpacino-supercot-13b",criteria:"Criteria: can be rond. "},{cat:"instruments",slot:"part",value:"fall-board",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have fall-board. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "piano, harp, guitar, violin, cello, flute, clarinet, saxophone, trumpet,`,concepts:["harp","trumpet"],selected:"harp",model:"manticore-13b",criteria:"Criteria: can have fall-board. "},{cat:"food",slot:"material",value:"sourdough",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be made of sourdough. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, pancakes, waffles, biscuits, cakes, muffins, pizza, pita, bagels,`,concepts:["pancakes","waffles","biscuits","cakes","muffins","pizza","pita","bagels"],selected:"bagels",model:"llama-13b-supercot",criteria:"Criteria: can be made of sourdough. "},{cat:"food",slot:"product",value:"loaf",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce loaf. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - Bread
        - Cake
        - Cookie
        - Loaf
        - Muffin
        - Pastry
`,concepts:["cake","cookie","loaf","muffin","pastry"],selected:"cookie",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can produce loaf. "},{cat:"animals",slot:"colorPattern",value:"brown",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be brown. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, pig, chicken, rabbit, bear, deer, squirrel`,concepts:["horse","cow","pig","chicken","squirrel"],selected:"squirrel",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be brown. "},{cat:"clothes",slot:"part",value:"hemline",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have hemline. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        dress, skirt, pants, shorts, shirt, blouse, jacket, coat, sweater, jumper.`,concepts:["pants","shorts","coat","jumper"],selected:"shorts",model:"nous-hermes-13b",criteria:"Criteria: can have hemline. "},{cat:"clothes",slot:"part",value:"lace",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have lace. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        skirt, dress, shirt, blouse, top, pants, leggings, tights, socks, shoes. `,concepts:["top","pants","leggings","tights","socks","shoes"],selected:"tights",model:"llama-13b-supercot",criteria:"Criteria: can have lace. "},{cat:"clothes",slot:"specialization",value:"strapless",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are strapless. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        skirt, dress, top, blouse, shirt, pants, shorts, leggings, jumpsuit, romper.`,concepts:["top","pants","shorts","leggings","jumpsuit","romper"],selected:"jumpsuit",model:"llama-13b-supercot",criteria:"Criteria: are strapless. "},{cat:"animals",slot:"part",value:"collar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have collar. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        dog, cat, horse, cow, pig, sheep, goat, rabbit, chicken, duck.`,concepts:["horse","cow","pig","sheep","goat","chicken","duck"],selected:"pig",model:"nous-hermes-13b",criteria:"Criteria: can have collar. "},{cat:"clothes",slot:"part",value:"tongue",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have tongue. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, 
        shirt, 
        socks, 
        shoes, 
        jacket, 
       `,concepts:["pants","socks","shoes"],selected:"socks",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have tongue. "},{cat:"food",slot:"smell",value:"balsamic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can smell balsamic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        balsamic, vinegar, olive oil, garlic, basil, rosemary, thyme, oregano,`,concepts:["balsamic","vinegar","olive oil","garlic","basil","rosemary","thyme","oregano"],selected:"vinegar",model:"nous-hermes-13b",criteria:"Criteria: can smell balsamic. "},{cat:"appliance",slot:"purpose",value:"cooking",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used for cooking. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        stove, oven, microwave, toaster, blender, crockpot, pressure cooker, coffee maker, rice cook`,concepts:["blender","crockpot","pressure cooker","coffee maker","rice cook"],selected:"pressure cooker",model:"manticore-13b",criteria:"Criteria: are used for cooking. "},{cat:"vehicles",slot:"part",value:"mudguard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have mudguard. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, motorcycle, car, truck, bus, van, jeep, SUV, tractor, trailer.`,concepts:["van","jeep","suv","trailer"],selected:"trailer",model:"alpacino-supercot-13b",criteria:"Criteria: can have mudguard. "},{cat:"vehicles",slot:"part",value:"bilge pump",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have bilge pump. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        [boat, ship, submarine, yacht, sailboat, motorboat, cruise ship, ferry, tugbo`,concepts:["submarine","sailboat","motorboat","cruise ship","ferry","tugbo"],selected:"motorboat",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have bilge pump. "},{cat:"artifacts",slot:"purpose",value:"groom",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: are used to groom. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        comb, 
        brush, 
        scissors, 
        clippers, 
        tweezers, 
`,concepts:["comb","brush","scissors","clippers","tweezers"],selected:"brush",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to groom. "},{cat:"animals",slot:"movement",value:"jump",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can jump. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Kangaroo
2. Frog
3. Grasshopper
4. Squirrel
5. Flea
`,concepts:["kangaroo","grasshopper","squirrel","flea"],selected:"grasshopper",model:"manticore-13b",criteria:"Criteria: can jump. "},{cat:"appliance",slot:"part",value:"capillary",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have capillary. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, washing machine, microwave, dishwasher, vacuum cleaner, air conditioner, oven`,concepts:["washing machine","vacuum cleaner","air conditioner"],selected:"washing machine",model:"alpacino-supercot-13b",criteria:"Criteria: can have capillary. "},{cat:"vehicles",slot:"part",value:"frame",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have frame. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, scooter, bus, train, airplane, boat, helicopter

`,concepts:["train"],selected:"train",model:"alpacino-supercot-13b",criteria:"Criteria: can have frame. "},{cat:"animals",slot:"accessory",value:"muzzle",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are related with muzzle. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, pig, sheep, goat, rabbit, fox, wolf.`,concepts:["horse","cow","pig","sheep","goat"],selected:"horse",model:"manticore-13b",criteria:"Criteria: are related with muzzle. "},{cat:"animals",slot:"colorPattern",value:"black",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be black. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, cow, horse, sheep, goat, pig, crow, raven, blackbird.`,concepts:["cow","horse","sheep","goat","pig","crow","raven","blackbird"],selected:"blackbird",model:"alpacino-supercot-13b",criteria:"Criteria: can be black. "},{cat:"animals",slot:"sound",value:"growl",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can growl. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, lion, tiger, bear, wolf, jaguar, leopard, cheetah, lynx`,concepts:["jaguar","leopard","cheetah","lynx"],selected:"lynx",model:"manticore-13b",criteria:"Criteria: can growl. "},{cat:"clothes",slot:"bodyPart",value:"head",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have or be used with head. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Shirt
2. Hat
3. Jacket
4. Pants
5. Shoes
6. Socks
7.`,concepts:["pants","shoes","socks"],selected:"pants",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have or be used with head. "},{cat:"animals",slot:"part",value:"belly",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have belly. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, elephant, pig, cow, lion, tiger, giraffe, hippopotam`,concepts:["horse","pig","cow","giraffe","hippopotam"],selected:"hippopotam",model:"llama-13b-supercot",criteria:"Criteria: can have belly. "},{cat:"clothes",slot:"part",value:"shirt button",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have shirt button. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shirt, t-shirt, polo shirt, dress shirt, button-down shirt, blouse, sweater, jack`,concepts:["t","polo shirt","dress shirt","button","down shirt","jack"],selected:"dress shirt",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have shirt button. "},{cat:"clothes",slot:"material",value:"linen",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of linen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, dress, shirt, jacket, skirt, blouse, shorts, pajamas, towel, scarf`,concepts:["pants","shorts","pajamas","towel"],selected:"towel",model:"nous-hermes-13b",criteria:"Criteria: can be made of linen. "},{cat:"containers",slot:"part",value:"stave",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can have stave. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "bucket, barrel, drum, crate, box, can, jar, bottle, vase, pot"`,concepts:["drum","crate","jar","vase"],selected:"drum",model:"manticore-13b",criteria:"Criteria: can have stave. "},{cat:"food",slot:"part",value:"flour",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have flour. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Bread
2. Pasta
3. Pizza
4. Cake
5. Cookies
6. Crackers
`,concepts:["pasta","pizza","cake","cookies","crackers"],selected:"cookies",model:"manticore-13b",criteria:"Criteria: can have flour. "},{cat:"artifacts",slot:"part",value:"lever",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have lever. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        artifacts, tools, machinery, equipment, weaponry, utensils, furniture, vehicles, appliances, gadgets`,concepts:["artifacts","tools","machinery","equipment","weaponry","utensils","furniture","vehicles","appliances","gadgets"],selected:"gadgets",model:"nous-hermes-13b",criteria:"Criteria: can have lever. "},{cat:"food",slot:"part",value:"curd",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have curd. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
milk, cheese, yogurt, butter, sour cream, cream cheese, cottage cheese, ricotta`,concepts:["milk","yogurt","butter","sour cream","cream cheese","cottage cheese","ricotta"],selected:"ricotta",model:"llama-13b-supercot",criteria:"Criteria: can have curd. "},{cat:"appliance",slot:"purpose",value:"display",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used to display. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Television
2. Computer
3. Projector
4. Monitor
5. Printer
6. Speaker
7. Mic`,concepts:["computer","speaker","mic"],selected:"mic",model:"llama-13b-supercot",criteria:"Criteria: are used to display. "},{cat:"food",slot:"part",value:"fructose",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have fructose. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, banana, orange, pineapple, mango, grapes, watermelon, peach, apricot,`,concepts:["pineapple","mango","grapes","watermelon","peach","apricot"],selected:"grapes",model:"nous-hermes-13b",criteria:"Criteria: can have fructose. "},{cat:"instruments",slot:"part",value:"key",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have key. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        piano, trumpet, guitar, violin, flute, saxophone, clarinet, oboe, harp, organ.`,concepts:["trumpet","harp"],selected:"trumpet",model:"nous-hermes-13b",criteria:"Criteria: can have key. "},{cat:"food",slot:"howToUse",value:"press",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for press. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "apple, banana, orange, grape, strawberry, pineapple, mango, peach, kiwi, avoc`,concepts:["grape","pineapple","mango","peach","kiwi","avoc"],selected:"mango",model:"nous-hermes-13b",criteria:"Criteria: can be used for press. "},{cat:"vehicles",slot:"part",value:"cookhouse",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have cookhouse. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        caravan, motorhome, trailer, campervan, camper, caravanette, caravanette, caravanette, caravan`,concepts:["caravan","motorhome","trailer","campervan","camper","caravanette","caravanette","caravanette","caravan"],selected:"camper",model:"alpacino-supercot-13b",criteria:"Criteria: can have cookhouse. "},{cat:"vehicles",slot:"part",value:"hold",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have hold. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bus, car, van, truck, train, boat, airplane, helicopter, motorcycle, bicycle`,concepts:["van","train"],selected:"van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have hold. "},{cat:"vehicles",slot:"part",value:"running board",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have running board. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        truck, bus, van, car, jeep, SUV, motorcycle, bicycle, boat, airplane.`,concepts:["van","jeep","suv"],selected:"suv",model:"nous-hermes-13b",criteria:"Criteria: can have running board. "},{cat:"clothes",slot:"purpose",value:"ride",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used for ride. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, boots, helmet, gloves, goggles, sunglasses, scarf`,concepts:["pants","boots","helmet","gloves","goggles","sunglasses"],selected:"goggles",model:"alpacino-supercot-13b",criteria:"Criteria: are used for ride. "},{cat:"home",slot:"place",value:"venue",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be found or used in venues. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        kitchen, dining room, living room, bedroom, bathroom, laundry room, garage, basement, attic, por`,concepts:["kitchen","dining room","living room","bedroom","bathroom","laundry room","garage","basement","attic","por"],selected:"attic",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in venues. "},{cat:"vehicles",slot:"part",value:"windshield",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have windshield. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, tractor. 
`,concepts:["van"],selected:"van",model:"llama-13b-supercot",criteria:"Criteria: can have windshield. "},{cat:"vehicles",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, tractor. 
`,concepts:["van"],selected:"van",model:"llama-13b-supercot",criteria:"Criteria: can be white. "},{cat:"appliance",slot:"purpose",value:"truck",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used for truck. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, microwave, air conditioner, heater, radio, GPS, toolbox,`,concepts:["air conditioner","gps","toolbox"],selected:"gps",model:"nous-hermes-13b",criteria:"Criteria: are used for truck. "},{cat:"home",slot:"material",value:"iron",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of iron. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, microwave, toaster, coffee maker, ironing board, iron, fireplace`,concepts:["refrigerator","stove","oven","microwave","toaster","coffee maker","ironing board","iron","fireplace"],selected:"iron",model:"nous-hermes-13b",criteria:"Criteria: can be made of iron. "},{cat:"clothes",slot:"material",value:"wool",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of wool. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        coat, sweater, jumper, cardigan, scarf, gloves, hat, socks, tights, sweatpants`,concepts:["coat","jumper","cardigan","gloves","socks","tights","sweatpants"],selected:"jumper",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of wool. "},{cat:"vehicles",slot:"part",value:"handlebar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have handlebar. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, motorcycle, scooter, moped, tricycle, quadricycle, motorbike, motor scooter`,concepts:["moped","quadricycle","motorbike","motor scooter"],selected:"motorbike",model:"llama-13b-supercot",criteria:"Criteria: can have handlebar. "},{cat:"clothes",slot:"part",value:"waistband",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have waistband. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, 
        shorts, 
        jeans, 
        skirt, 
        dress, 
        sh`,concepts:["pants","shorts","jeans","sh"],selected:"sh",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have waistband. "},{cat:"containers",slot:"place",value:"garden",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be found or used in gardens. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        container, pot, planter, basket, tray, box, tub, barrel, bin, crate`,concepts:["planter","bin","crate"],selected:"crate",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in gardens. "},{cat:"containers",slot:"content",value:"biscuit",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain biscuits. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        biscuit tin, cookie jar, cookie box, biscuit barrel, biscuit tin, cookie jar, cookie box, bisc`,concepts:["biscuit tin","cookie jar","cookie box","biscuit barrel","biscuit tin","cookie jar","cookie box","bisc"],selected:"cookie box",model:"alpacino-supercot-13b",criteria:"Criteria: contain biscuits. "},{cat:"clothes",slot:"time",value:"winter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be consumed or used during winter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        coat, scarf, gloves, hat, boots, sweater, socks, pants, jacket, blanket.`,concepts:["coat","gloves","boots","socks","pants","blanket"],selected:"boots",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be consumed or used during winter. "},{cat:"home",slot:"purpose",value:"bar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: are used to bar. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        barbecue, barbecue sauce, barbecue grill, barbecue pit, barbecue smoker, barbecue`,concepts:["barbecue","barbecue sauce","barbecue grill","barbecue pit","barbecue smoker","barbecue"],selected:"barbecue",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to bar. "},{cat:"appliance",slot:"material",value:"cast iron",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be made of cast iron. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cast iron skillet, cast iron griddle, cast iron Dutch oven, cast iron waffle maker, cast iron frying pan`,concepts:["cast iron skillet","cast iron griddle","cast iron dutch oven","cast iron frying pan"],selected:"cast iron griddle",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be made of cast iron. "},{cat:"food",slot:"part",value:"sweet corn plant",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have sweet corn plant. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can have sweet corn plant: apple, banana, cucumber, egg`,concepts:["here are","egg"],selected:"egg",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have sweet corn plant. "},{cat:"food",slot:"product",value:"wine",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce wine. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, grapes, oranges, pears, peaches, plums, strawberries, raspberries, blue`,concepts:["apples","grapes","oranges","pears","peaches","plums","strawberries","raspberries","blue"],selected:"oranges",model:"alpacino-supercot-13b",criteria:"Criteria: can produce wine. "},{cat:"vehicles",slot:"part",value:"frame",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have frame. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,bike,motorcycle,truck,van,bus,train,boat,airplane,helicopter`,concepts:["bike","van","train"],selected:"van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have frame. "},{cat:"vehicles",slot:"part",value:"spar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have spar. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of vehicles and can have spar: 
        car, truck,`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can have spar. "},{cat:"animals",slot:"activity",value:"kill",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be kill. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        lion, tiger, bear, wolf, shark, snake, crocodile, spider, scorpion, mosqu`,concepts:["shark","crocodile","scorpion","mosqu"],selected:"scorpion",model:"llama-13b-supercot",criteria:"Criteria: can be kill. "},{cat:"food",slot:"howToUse",value:"butter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for butter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        butter, margarine, cream cheese, sour cream, yogurt, mayonnaise, salad dressing,`,concepts:["butter","margarine","cream cheese","sour cream","yogurt","mayonnaise","salad dressing"],selected:"cream cheese",model:"alpacino-supercot-13b",criteria:"Criteria: can be used for butter. "},{cat:"animals",slot:"colorPattern",value:"orange",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be orange. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        lion, 
        tiger, 
        pumpkin, 
        orange, 
        monkey, 
       `,concepts:["pumpkin","orange"],selected:"orange",model:"manticore-13b",criteria:"Criteria: can be orange. "},{cat:"home",slot:"part",value:"wall",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can have wall. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bedroom, bathroom, kitchen, living room, dining room, hallway, closet, garage, attic, basement.`,concepts:["bedroom","bathroom","kitchen","living room","dining room","hallway","closet","garage","attic","basement"],selected:"kitchen",model:"alpacino-supercot-13b",criteria:"Criteria: can have wall. "},{cat:"animals",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 animals that can be white: 
        - Albino squirrel
        - Arctic fox`,concepts:["here is a list of","albino squirrel","arctic fox"],selected:"albino squirrel",model:"nous-hermes-13b",criteria:"Criteria: can be white. "},{cat:"animals",slot:"product",value:"honey",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can produce honey. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
bee, honeybee, bumblebee, honeybee, honeybee, honeybee, honeybe`,concepts:["honeybee","bumblebee","honeybee","honeybee","honeybee","honeybe"],selected:"honeybe",model:"llama-13b-supercot",criteria:"Criteria: can produce honey. "},{cat:"containers",slot:"place",value:"restaurant",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be found or used in restaurants. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        knives, forks, spoons, plates, bowls, cups, glasses, napkins, straws, chop`,concepts:["knives","forks","spoons","plates","bowls","cups","glasses","napkins","straws","chop"],selected:"glasses",model:"llama-13b-supercot",criteria:"Criteria: can be found or used in restaurants. "},{cat:"artifacts",slot:"part",value:"rib",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have rib. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pot, bowl, vase, plate, cup, jar, urn, pitcher, goblet, mug.`,concepts:["pot","bowl","vase","cup","jar","urn","pitcher","goblet","mug"],selected:"pot",model:"alpacino-supercot-13b",criteria:"Criteria: can have rib. "},{cat:"vehicles",slot:"purpose",value:"move",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used for move. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, bike, truck, bus, train, plane, boat, scooter, motorcycle, bicycle`,concepts:["bike","train"],selected:"bike",model:"nous-hermes-13b",criteria:"Criteria: are used for move. "},{cat:"animals",slot:"place",value:"hive",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in hives. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bee, honeybee, honey, wax, hive, queen bee, worker bee, drone bee,`,concepts:["honeybee","honey","wax","hive","queen bee","worker bee","drone bee"],selected:"wax",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be found or used in hives. "},{cat:"vehicles",slot:"part",value:"roof",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have roof. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, tractor. 
`,concepts:["van"],selected:"van",model:"llama-13b-supercot",criteria:"Criteria: can have roof. "},{cat:"food",slot:"howToUse",value:"peel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for peel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple,banana,kiwi,orange,pear,grapefruit,mango,pineapple,watermelon`,concepts:["kiwi","grapefruit","mango","pineapple","watermelon"],selected:"watermelon",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for peel. "},{cat:"appliance",slot:"purpose",value:"screen",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used for screen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        microwave, refrigerator, washing machine, air conditioner, television, computer, oven, dishwasher,`,concepts:["washing machine","air conditioner","computer"],selected:"air conditioner",model:"alpacino-supercot-13b",criteria:"Criteria: are used for screen. "},{cat:"food",slot:"place",value:"glass",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in glasses. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can be found or used in glasses: bread, cheese, crackers`,concepts:["here are","crackers"],selected:"crackers",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be found or used in glasses. "},{cat:"containers",slot:"shape",value:"square",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be square. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Box
2. Case
3. Cube
4. Crate
5. Jar
6. Package
7. Pail
`,concepts:["case","cube","crate","jar","package","pail"],selected:"pail",model:"manticore-13b",criteria:"Criteria: can be square. "},{cat:"home",slot:"place",value:"living room",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be found or used in living rooms. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Sofa
2. Rug
3. Coffee table
4. Lamp
5. Bookshelf
6. P`,concepts:["sofa","rug","coffee table","lamp","bookshelf","p"],selected:"bookshelf",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be found or used in living rooms. "},{cat:"home",slot:"purpose",value:"cookery",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: are used for cookery. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        oven, stove, microwave, frying pan, knife, spatula, cutting board, measuring cups,`,concepts:["oven","stove","microwave","frying pan","spatula","cutting board","measuring cups"],selected:"oven",model:"alpacino-supercot-13b",criteria:"Criteria: are used for cookery. "},{cat:"food",slot:"consistency",value:"juicy",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be juicy. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, orange, banana, watermelon, strawberry, grapefruit, peach, pineapple, mango`,concepts:["watermelon","grapefruit","peach","pineapple","mango"],selected:"pineapple",model:"manticore-13b",criteria:"Criteria: can be juicy. "},{cat:"animals",slot:"colorPattern",value:"grey",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be grey. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, fox, rabbit, wolf, elephant, zebra, giraffe, penguin, owl,`,concepts:["zebra","giraffe","penguin","owl"],selected:"penguin",model:"llama-13b-supercot",criteria:"Criteria: can be grey. "},{cat:"vehicles",slot:"part",value:"seat",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have seat. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, train.`,concepts:["van","train"],selected:"train",model:"alpacino-supercot-13b",criteria:"Criteria: can have seat. "},{cat:"food",slot:"part",value:"curd",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have curd. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        milk, yogurt, cheese, butter, cream, ice cream, sour cream, cottage cheese,`,concepts:["milk","yogurt","butter","cream","ice cream","sour cream","cottage cheese"],selected:"cream",model:"alpacino-supercot-13b",criteria:"Criteria: can have curd. "},{cat:"appliance",slot:"purpose",value:"cook",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used to cook. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        oven, stove, microwave, toaster, blender, crockpot, pressure cooker, rice cooker, grill`,concepts:["blender","crockpot","pressure cooker","rice cooker","grill"],selected:"crockpot",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to cook. "},{cat:"food",slot:"consistency",value:"crisp",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be crisp. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        crispy, crunchy, crispy, crispy, crispy, crispy, crispy, cris`,concepts:["crispy","crunchy","crispy","crispy","crispy","crispy","crispy","cris"],selected:"crispy",model:"manticore-13b",criteria:"Criteria: can be crisp. "},{cat:"instruments",slot:"purpose",value:"light music",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used for light music. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, violin, guitar, harp, piano, trumpet, saxophone, clarinet, oboe, xy`,concepts:["harp","trumpet","xy"],selected:"xy",model:"nous-hermes-13b",criteria:"Criteria: are used for light music. "},{cat:"clothes",slot:"user",value:"soldier",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are used by soldiers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        trousers, jacket, boots, helmet, backpack, bulletproof vest, camouflage, flak jacket,`,concepts:["trousers","boots","helmet","backpack","bulletproof vest","camouflage","flak jacket"],selected:"camouflage",model:"nous-hermes-13b",criteria:"Criteria: are used by soldiers. "},{cat:"animals",slot:"part",value:"leg",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have leg. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, goat, pig, chicken, duck, rabbit.`,concepts:["horse","cow","sheep","goat","pig","chicken","duck"],selected:"pig",model:"manticore-13b",criteria:"Criteria: can have leg. "},{cat:"vehicles",slot:"movement",value:"southbound",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are southbound. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, van, motorcycle, bicycle, boat, airplane, helicopter, train.`,concepts:["van","train"],selected:"train",model:"alpacino-supercot-13b",criteria:"Criteria: are southbound. "},{cat:"clothes",slot:"part",value:"pant leg",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have pant leg. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jeans, shorts, skirts, dresses, trousers, leggings, jumpsuits, overalls`,concepts:["pants","jeans","shorts","skirts","dresses","trousers","leggings","jumpsuits","overalls"],selected:"jumpsuits",model:"manticore-13b",criteria:"Criteria: can have pant leg. "},{cat:"appliance",slot:"place",value:"weather station",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be found or used in weather stations. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Anemometer
        2. Barometer
        3. Hygrometer
        4. Thermometer
        5.`,concepts:["anemometer","barometer","hygrometer"],selected:"anemometer",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in weather stations. "},{cat:"home",slot:"material",value:"enamel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of enamel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, microwave, toaster, coffee maker, teapot, kettle,`,concepts:["refrigerator","stove","oven","microwave","toaster","coffee maker","teapot","kettle"],selected:"toaster",model:"nous-hermes-13b",criteria:"Criteria: can be made of enamel. "},{cat:"animals",slot:"purpose",value:"guard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used for guard. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, elephant, lion, tiger, eagle, owl, hawk, falcon. `,concepts:["horse","eagle","owl","hawk","falcon"],selected:"owl",model:"llama-13b-supercot",criteria:"Criteria: are used for guard. "},{cat:"animals",slot:"activity",value:"sleep",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be sleep. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, pig, elephant, lion, giraffe, hippopotamus`,concepts:["horse","cow","sheep","pig","giraffe","hippopotamus"],selected:"cow",model:"alpacino-supercot-13b",criteria:"Criteria: can be sleep. "},{cat:"animals",slot:"behavior",value:"feral",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be feral. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "feral cats, feral dogs, feral pigs, feral horses, feral goats, feral sheep, feral`,concepts:["feral cats","feral dogs","feral pigs","feral horses","feral goats","feral sheep","feral"],selected:"feral",model:"manticore-13b",criteria:"Criteria: can be feral. "},{cat:"food",slot:"taste",value:"iced",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be iced. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can be iced: ice cream, sorbet, frozen yog`,concepts:["here are","ice cream","sorbet","frozen yog"],selected:"ice cream",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be iced. "},{cat:"tools",slot:"part",value:"thread",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can have thread. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, wrench, screwdriver, drill, hammer, saw, measuring tape, level, screws, n`,concepts:["pliers","wrench","drill","saw","measuring tape","level","screws","n"],selected:"level",model:"nous-hermes-13b",criteria:"Criteria: can have thread. "},{cat:"vehicles",slot:"part",value:"mirror",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have mirror. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,truck,van,bus,motorcycle,scooter,bike,boat,airplane,helicopter`,concepts:["van","bike"],selected:"van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have mirror. "},{cat:"vehicles",slot:"part",value:"interior",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have interior. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, submarine

##`,concepts:["van","submarine"],selected:"submarine",model:"alpacino-supercot-13b",criteria:"Criteria: can have interior. "},{cat:"food",slot:"accessory",value:"macaroni",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with macaroni. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        macaroni, pasta, spaghetti, noodles, elbow macaroni, macaroni and cheese, macaron`,concepts:["macaroni","pasta","spaghetti","noodles","elbow macaroni","macaroni and cheese","macaron"],selected:"pasta",model:"nous-hermes-13b",criteria:"Criteria: are related with macaroni. "},{cat:"clothes",slot:"part",value:"crown",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have crown. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, dress, jacket, coat, shoes, boots, hat, crown.`,concepts:["pants","coat","shoes","boots","crown"],selected:"crown",model:"manticore-13b",criteria:"Criteria: can have crown. "},{cat:"vehicles",slot:"part",value:"bunk",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have bunk. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, campervan, motorhome, trailer, bus, boat, plane, helicopter, hot air balloon`,concepts:["campervan","motorhome","trailer","hot air balloon"],selected:"hot air balloon",model:"alpacino-supercot-13b",criteria:"Criteria: can have bunk. "},{cat:"vehicles",slot:"time",value:"holiday",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be consumed or used during holiday. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Gasoline
2. Fuel
3. Oil
4. Tires
5. Batteries
6. Spark plugs`,concepts:["gasoline","fuel","oil","tires","batteries","spark plugs"],selected:"fuel",model:"manticore-13b",criteria:"Criteria: can be consumed or used during holiday. "},{cat:"clothes",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, dress, jacket, skirt, blouse, sweater, t-shirt, sweatpants,`,concepts:["pants","t","sweatpants"],selected:"sweatpants",model:"alpacino-supercot-13b",criteria:"Criteria: can be white. "},{cat:"animals",slot:"group",value:"hive",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are grouped in hive. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bee, wasp, hornet, ant, termite, bumblebee, honeybee, honeycomb, honey`,concepts:["wasp","hornet","termite","bumblebee","honeybee","honeycomb","honey"],selected:"hornet",model:"alpacino-supercot-13b",criteria:"Criteria: are grouped in hive. "},{cat:"artifacts",slot:"place",value:"clothes shop",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be found or used in clothes shops. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        jeans, t-shirts, shoes, belts, jackets, hats, dresses, skirts, pants`,concepts:["jeans","t","shirts","shoes","belts","jackets","hats","dresses","skirts","pants"],selected:"pants",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in clothes shops. "},{cat:"animals",slot:"activity",value:"feed",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be feed. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 animals that can be fed: cat, dog, cow, pig, chicken, sheep, horse, goat,`,concepts:["here are","cow","pig","chicken","sheep","horse","goat"],selected:"sheep",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be feed. "},{cat:"clothes",slot:"material",value:"cloth",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of cloth. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Shirt
2. Pants
3. Dress
4. Jacket
5. Skirt
6. Sweater
`,concepts:["pants"],selected:"pants",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be made of cloth. "},{cat:"food",slot:"howToUse",value:"slice",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for slice. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "bread, cake, pizza, sandwich, pita, bagel, tortilla, cracker, pastry, bisc`,concepts:["cake","pizza","pita","bagel","tortilla","cracker","pastry","bisc"],selected:"bagel",model:"manticore-13b",criteria:"Criteria: can be used for slice. "},{cat:"animals",slot:"activity",value:"overwinter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be overwinter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of animals and can be overwinter: cat, dog, rabbit, hamster,`,concepts:["here are","hamster"],selected:"here are",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be overwinter. "},{cat:"vehicles",slot:"part",value:"fender",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have fender. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,truck,van,bus,motorcycle,bike,scooter,boat,plane,train`,concepts:["van","bike","train"],selected:"van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have fender. "},{cat:"tools",slot:"place",value:"laboratory",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be found or used in laboratories. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Bunsen burner
2. Pipette
3. Microscope
4. Centrifuge
5. Balance
6`,concepts:["bunsen burner","pipette","microscope","centrifuge","balance"],selected:"balance",model:"manticore-13b",criteria:"Criteria: can be found or used in laboratories. "},{cat:"vehicles",slot:"material",value:"wood",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be made of wood. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        canoe, rowboat, sailboat, raft, dinghy, yacht, motorboat, pontoon boat,`,concepts:["canoe","rowboat","sailboat","raft","dinghy","motorboat","pontoon boat"],selected:"canoe",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of wood. "},{cat:"artifacts",slot:"howToUse",value:"wear",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be used for wear. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category`,concepts:["instruction","provide a list of","category"],selected:"provide a list of",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for wear. "},{cat:"vehicles",slot:"user",value:"farmer",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by farmers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        tractor, combine harvester, plough, harrow, seed drill, sprayer, baler, thresher, hay`,concepts:["combine harvester","plough","harrow","seed drill","sprayer","baler","thresher","hay"],selected:"hay",model:"manticore-13b",criteria:"Criteria: are used by farmers. "},{cat:"animals",slot:"size",value:"medium",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be medium. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of animals and can be medium: cat, dog, horse, cow, pig, ch`,concepts:["here are","horse","cow","pig","ch"],selected:"ch",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be medium. "},{cat:"food",slot:"howToUse",value:"yield",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for yield. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of food and can be used for yield: 
        - Broccoli`,concepts:["here is a list of","broccoli"],selected:"broccoli",model:"manticore-13b",criteria:"Criteria: can be used for yield. "},{cat:"appliance",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, toaster, washing machine, dishwasher, blender, coffee maker, air`,concepts:["washing machine","blender","coffee maker","air"],selected:"blender",model:"nous-hermes-13b",criteria:"Criteria: can be silver. "},{cat:"vehicles",slot:"part",value:"fo'c'sle",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have fo'c'sle. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "car, truck, bus, train, boat, plane, motorcycle, bicycle, scooter, ATV"`,concepts:["train","atv"],selected:"atv",model:"nous-hermes-13b",criteria:"Criteria: can have fo'c'sle. "},{cat:"containers",slot:"purpose",value:"storage",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: are used for storage. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "basket, box, chest, crate, cupboard, drawer, jar, locker, trunk, vase"`,concepts:["chest","crate","cupboard","drawer","jar","locker","trunk","vase"],selected:"trunk",model:"manticore-13b",criteria:"Criteria: are used for storage. "},{cat:"vehicles",slot:"part",value:"car window",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have car window. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, scooter, boat, airplane, helicopter

`,concepts:["van"],selected:"van",model:"alpacino-supercot-13b",criteria:"Criteria: can have car window. "},{cat:"animals",slot:"activity",value:"sting",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be sting. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Bee
2. Hornet
3. Wasp
4. Yellowjacket
5. Honeybee
6.`,concepts:["hornet","wasp","yellowjacket","honeybee"],selected:"honeybee",model:"llama-13b-supercot",criteria:"Criteria: can be sting. "},{cat:"containers",slot:"content",value:"spray",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain sprays. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        spray bottles, aerosol cans, perfume bottles, shampoo bottles, hairspray bottles, de`,concepts:["spray bottles","aerosol cans","perfume bottles","shampoo bottles","hairspray bottles","de"],selected:"spray bottles",model:"manticore-13b",criteria:"Criteria: contain sprays. "},{cat:"food",slot:"taste",value:"acid",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be acid. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        orange, lemon, lime, grapefruit, tomato, vinegar, pineapple, kiwi, strawberry`,concepts:["lemon","lime","grapefruit","vinegar","pineapple","kiwi"],selected:"kiwi",model:"llama-13b-supercot",criteria:"Criteria: can be acid. "},{cat:"clothes",slot:"material",value:"nylon",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of nylon. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, socks, shoes, pajamas, underwear, gloves, scarf,`,concepts:["pants","socks","shoes","pajamas","underwear","gloves"],selected:"underwear",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of nylon. "},{cat:"home",slot:"purpose",value:"cookery",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: are used for cookery. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cookware, pots, pans, utensils, cutlery, crockery, kitchen appliances, kitchen gadgets`,concepts:["cookware","pots","pans","utensils","crockery","kitchen appliances","kitchen gadgets"],selected:"crockery",model:"manticore-13b",criteria:"Criteria: are used for cookery. "},{cat:"food",slot:"part",value:"core",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have core. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apple, banana, cherry, grape, orange, peach, pear, plum, strawberry, watermelon`,concepts:["cherry","grape","peach","plum","watermelon"],selected:"grape",model:"nous-hermes-13b",criteria:"Criteria: can have core. "},{cat:"artifacts",slot:"part",value:"felly",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have felly. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. pottery, 
        2. vase, 
        3. bowl, 
        4. cup, 
`,concepts:["pottery","vase","bowl","cup"],selected:"vase",model:"alpacino-supercot-13b",criteria:"Criteria: can have felly. "},{cat:"clothes",slot:"specialization",value:"long pants",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: are long pants. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jeans, trousers, slacks, chinos, khakis, cargos, bermudas`,concepts:["pants","jeans","trousers","slacks","chinos","khakis","cargos","bermudas"],selected:"chinos",model:"manticore-13b",criteria:"Criteria: are long pants. "},{cat:"artifacts",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of artifacts and can be white: ceramic, porcelain, marble,`,concepts:["here are","ceramic","porcelain","marble"],selected:"ceramic",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be white. "},{cat:"home",slot:"purpose",value:"entrance",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: are used for entrance. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Door
2. Gate
3. Entrance
4. Key
5. Lock
6. Handle
7. Knob`,concepts:["key","lock","handle","knob"],selected:"knob",model:"nous-hermes-13b",criteria:"Criteria: are used for entrance. "},{cat:"food",slot:"product",value:"bread",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce bread. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, flour, dough, yeast, baking powder, baking soda, salt, sugar, butter, milk.`,concepts:["flour","dough","yeast","baking powder","baking soda","salt","sugar","butter","milk"],selected:"flour",model:"llama-13b-supercot",criteria:"Criteria: can produce bread. "},{cat:"vehicles",slot:"part",value:"radio",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have radio. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, tractor. 
`,concepts:["van"],selected:"van",model:"llama-13b-supercot",criteria:"Criteria: can have radio. "},{cat:"home",slot:"colorPattern",value:"white",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be white. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. whiteboard, 
        2. wall, 
        3. ceiling, 
        4. door, 
        `,concepts:["whiteboard","wall","ceiling"],selected:"wall",model:"alpacino-supercot-13b",criteria:"Criteria: can be white. "},{cat:"food",slot:"smell",value:"floral",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can smell floral. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Lavender
2. Honeysuckle
3. Jasmine
4. Gardenia
5. Rose
6. L`,concepts:["lavender","honeysuckle","jasmine","gardenia","rose","l"],selected:"rose",model:"manticore-13b",criteria:"Criteria: can smell floral. "},{cat:"home",slot:"content",value:"milk",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: contain milks. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. milk, 
2. cheese, 
3. butter, 
4. cream, 
5. yog`,concepts:["milk","cheese","butter","cream","yog"],selected:"milk",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: contain milks. "},{cat:"containers",slot:"material",value:"fibre",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of fibre. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. basket
2. box
3. bowl
4. bag
5. case
6. carton
7. crate
`,concepts:["case","carton","crate"],selected:"carton",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be made of fibre. "},{cat:"food",slot:"product",value:"cornflake",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce cornflake. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cornflakes, cereal, flakes, breakfast, food, snack, crunchy, delicious, tasty,`,concepts:["cornflakes","flakes","breakfast","food","snack","crunchy","delicious","tasty"],selected:"flakes",model:"manticore-13b",criteria:"Criteria: can produce cornflake. "},{cat:"vehicles",slot:"part",value:"coaster brake",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have coaster brake. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:"10 words that belong to the category and have coaster brake: bicycle, tricycle, moped, motorcycle, scooter",concepts:["moped"],selected:"moped",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have coaster brake. "},{cat:"food",slot:"howToUse",value:"butter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for butter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        butter, margarine, spread, cream cheese, jam, honey, syrup, mayonnaise, salad dressing`,concepts:["butter","margarine","spread","cream cheese","jam","honey","syrup","mayonnaise","salad dressing"],selected:"mayonnaise",model:"nous-hermes-13b",criteria:"Criteria: can be used for butter. "},{cat:"vehicles",slot:"place",value:"motorway",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be found or used in motorways. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, lorry, van, motorcycle, bicycle, tractor, trailer, semi-trailer.`,concepts:["lorry","van","trailer","semi","trailer"],selected:"semi",model:"llama-13b-supercot",criteria:"Criteria: can be found or used in motorways. "},{cat:"clothes",slot:"colorPattern",value:"pink",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be pink. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        dress, blouse, skirt, pants, shirt, jacket, sweater, shoes, socks, hat.`,concepts:["pants","shoes","socks"],selected:"socks",model:"nous-hermes-13b",criteria:"Criteria: can be pink. "},{cat:"clothes",slot:"bodyPart",value:"ankle",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have or be used with ankle. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shoes, socks, boots, sandals, tights, leggings, stockings, shorts, skir`,concepts:["pants","shoes","socks","boots","sandals","tights","leggings","stockings","shorts","skir"],selected:"skir",model:"manticore-13b",criteria:"Criteria: can have or be used with ankle. "},{cat:"instruments",slot:"howToUse",value:"play",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be used for play. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category`,concepts:["instruction","provide a list of","category"],selected:"category",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for play. "},{cat:"appliance",slot:"part",value:"door",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have door. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, oven, microwave, dishwasher, washing machine, dryer, air conditioner, he`,concepts:["washing machine","air conditioner","he"],selected:"he",model:"nous-hermes-13b",criteria:"Criteria: can have door. "},{cat:"food",slot:"howToUse",value:"braise",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for braise. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        beef, pork, lamb, chicken, mushrooms, onions, carrots, celery, garlic, tom`,concepts:["beef","pork","lamb","chicken","mushrooms","onions","carrots","celery","garlic","tom"],selected:"garlic",model:"nous-hermes-13b",criteria:"Criteria: can be used for braise. "},{cat:"instruments",slot:"part",value:"tailpiece",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have tailpiece. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        violin, viola, cello, double bass, guitar, harp, piano, flute, clarinet, trumpet.`,concepts:["viola","double bass","harp","trumpet"],selected:"double bass",model:"nous-hermes-13b",criteria:"Criteria: can have tailpiece. "},{cat:"home",slot:"material",value:"pottery",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of pottery. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pottery, ceramic, crockery, earthenware, terracotta, porcelain, bone china, stoneware`,concepts:["pottery","ceramic","crockery","earthenware","terracotta","porcelain","bone china","stoneware"],selected:"earthenware",model:"nous-hermes-13b",criteria:"Criteria: can be made of pottery. "},{cat:"artifacts",slot:"part",value:"clasp",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have clasp. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bracelet, necklace, ring, earring, brooch, belt, buckle, clasp, pin, pendant. `,concepts:["ring","brooch","belt","buckle","clasp","pin"],selected:"brooch",model:"llama-13b-supercot",criteria:"Criteria: can have clasp. "},{cat:"vehicles",slot:"place",value:"rental",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be found or used in rentals. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        rental cars, rental trucks, rental vans, rental motorcycles, rental boats, rental RVs`,concepts:["rental cars","rental trucks","rental vans","rental motorcycles","rental boats","rental rvs"],selected:"rental cars",model:"manticore-13b",criteria:"Criteria: can be found or used in rentals. "},{cat:"instruments",slot:"generalization",value:"instrumentation",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are instrumentation. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, violin, guitar, piano, saxophone, trumpet, trombone, clarinet, drums, harp
`,concepts:["trumpet","drums","harp"],selected:"drums",model:"alpacino-supercot-13b",criteria:"Criteria: are instrumentation. "},{cat:"artifacts",slot:"user",value:"cyclist",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: are used by cyclists. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle helmet, cycling shoes, cycling shorts, cycling jersey, cycling gloves, cycling glass`,concepts:["bicycle helmet","cycling shoes","cycling shorts","cycling jersey","cycling gloves","cycling glass"],selected:"bicycle helmet",model:"manticore-13b",criteria:"Criteria: are used by cyclists. "},{cat:"tools",slot:"shape",value:"cylindrical",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be cylindrical. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        hammer, screwdriver, wrench, pliers, drill, saw, tape measure, level, ruler, chisel`,concepts:["wrench","pliers","drill","saw","tape measure","level","ruler","chisel"],selected:"drill",model:"alpacino-supercot-13b",criteria:"Criteria: can be cylindrical. "},{cat:"containers",slot:"part",value:"glass",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can have glass. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        glass, jar, bottle, vase, cup, bowl, pitcher, flask, can, jar.`,concepts:["glass","jar","vase","cup","pitcher","flask","jar"],selected:"flask",model:"alpacino-supercot-13b",criteria:"Criteria: can have glass. "},{cat:"home",slot:"shape",value:"round",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be round. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bed, table, chair, lamp, clock, bowl, plate, cup, vase, rug.`,concepts:["bed","table","lamp","clock","bowl","plate","cup","rug"],selected:"bed",model:"alpacino-supercot-13b",criteria:"Criteria: can be round. "},{cat:"tools",slot:"colorPattern",value:"brown",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: can be brown. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, wrench, shovel, rake, hoe, axe, saw, hammer, screwdriver, chis`,concepts:["pliers","wrench","axe","saw","chis"],selected:"pliers",model:"nous-hermes-13b",criteria:"Criteria: can be brown. "},{cat:"vehicles",slot:"part",value:"topside",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have topside. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, boat, airplane, helicopter, bicycle, scooter

`,concepts:["van"],selected:"van",model:"alpacino-supercot-13b",criteria:"Criteria: can have topside. "},{cat:"vehicles",slot:"purpose",value:"dock",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used for dock. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, trailer, boat, ship, ferry, barge, tugboat, yacht, hovercraft. `,concepts:["trailer","ferry","barge","tugboat","hovercraft"],selected:"barge",model:"llama-13b-supercot",criteria:"Criteria: are used for dock. "},{cat:"food",slot:"user",value:"fruiterer",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by fruiterers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and are used by fruiterers: apples, bananas, oranges`,concepts:["here are","apples","bananas","oranges"],selected:"bananas",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by fruiterers. "},{cat:"food",slot:"howToUse",value:"knead",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for knead. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - Bread
        - Dough
        - Pastry
        - Pizza
        - Cake
        - Cookie
       `,concepts:["dough","pastry","pizza","cake","cookie"],selected:"pastry",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for knead. "},{cat:"animals",slot:"activity",value:"feed",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be feed. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, cow, sheep, pig, chicken, duck, goat, rabbit.`,concepts:["horse","cow","sheep","pig","chicken","duck","goat"],selected:"sheep",model:"manticore-13b",criteria:"Criteria: can be feed. "},{cat:"vehicles",slot:"part",value:"oil",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have oil. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car,truck,van,bus,motorcycle,boat,airplane,helicopter,train,subway`,concepts:["van","train","subway"],selected:"subway",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have oil. "},{cat:"clothes",slot:"part",value:"bootlace",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have bootlace. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shoes, boots, sandals, sneakers, slippers, loafers, oxfords, moccasins, s`,concepts:["shoes","boots","sandals","sneakers","slippers","loafers","oxfords","moccasins","s"],selected:"sandals",model:"alpacino-supercot-13b",criteria:"Criteria: can have bootlace. "},{cat:"vehicles",slot:"part",value:"nose",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have nose. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, motorcycle, bicycle, boat, airplane, helicopter, train, submarine

##`,concepts:["train","submarine"],selected:"submarine",model:"alpacino-supercot-13b",criteria:"Criteria: can have nose. "},{cat:"vehicles",slot:"part",value:"sprocket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have sprocket. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, motorcycle, car, truck, bus, train, airplane, helicopter, tank, bulldozer.`,concepts:["train","tank"],selected:"train",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have sprocket. "},{cat:"vehicles",slot:"user",value:"helmsman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by helmsmen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        - rudder
        - tiller
        - wheel
        - oar
        - paddle
        - tillage
        -`,concepts:["rudder","tiller","wheel","oar","paddle","tillage"],selected:"paddle",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by helmsmen. "},{cat:"appliance",slot:"place",value:"conference room",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be found or used in conference rooms. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, coffee maker, water dispenser, projector, whiteboard, speakerphone, video conferencing system`,concepts:["coffee maker","water dispenser","whiteboard","speakerphone"],selected:"whiteboard",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in conference rooms. "},{cat:"containers",slot:"material",value:"canvas",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of canvas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
canvas, sack, bag, pouch, bucket, box, crate, barrel, drum, chest. 

### Inst`,concepts:["canvas","sack","pouch","crate","drum","chest","inst"],selected:"canvas",model:"llama-13b-supercot",criteria:"Criteria: can be made of canvas. "},{cat:"home",slot:"part",value:"rim",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can have rim. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        mug, bowl, plate, cup, glass, pot, pan, saucepan, frying pan, skillet. 
`,concepts:["bowl","plate","cup","glass","pot","pan","saucepan","frying pan","skillet"],selected:"pan",model:"llama-13b-supercot",criteria:"Criteria: can have rim. "},{cat:"clothes",slot:"part",value:"placket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have placket. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, coat, dress, blouse, skirt, trousers, sweater, suit. 
`,concepts:["pants","coat","trousers","suit"],selected:"suit",model:"llama-13b-supercot",criteria:"Criteria: can have placket. "},{cat:"vehicles",slot:"movement",value:"sailing",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can sailing. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "boat, ship, yacht, sailboat, cruise ship, ferry, submarine, hovercraft, catamaran,`,concepts:["sailboat","cruise ship","ferry","submarine","hovercraft","catamaran"],selected:"cruise ship",model:"manticore-13b",criteria:"Criteria: can sailing. "},{cat:"home",slot:"material",value:"plastic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of plastic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        plastic, bottle, container, bag, wrap, cover, sheet, film, tube, case
`,concepts:["plastic","bottle","container","bag","wrap","cover","sheet","film","tube","case"],selected:"tube",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be made of plastic. "},{cat:"instruments",slot:"generalization",value:"brass",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are brass. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        trumpet,
        trombone,
        french horn,
        tuba,
        euphonium,
        sax`,concepts:["trumpet","french horn","tuba","euphonium","sax"],selected:"euphonium",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are brass. "},{cat:"instruments",slot:"purpose",value:"playing",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are used to playing. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, violin, guitar, piano, drums, saxophone, trumpet, clarinet, harp, cello.`,concepts:["drums","trumpet","harp"],selected:"drums",model:"manticore-13b",criteria:"Criteria: are used to playing. "},{cat:"containers",slot:"content",value:"spray",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain sprays. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        spray can, spray bottle, spray paint, spray paint can, spray paint canister, spray paint container, sp`,concepts:["spray can","spray bottle","spray paint","spray paint can","spray paint canister","sp"],selected:"spray bottle",model:"alpacino-supercot-13b",criteria:"Criteria: contain sprays. "},{cat:"home",slot:"content",value:"liquid",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: contain liquids. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        water, milk, juice, tea, coffee, beer, wine, soda, milkshake, lemonade. 

`,concepts:["water","milk","juice","tea","coffee","beer","wine","soda","milkshake","lemonade"],selected:"water",model:"llama-13b-supercot",criteria:"Criteria: contain liquids. "},{cat:"vehicles",slot:"part",value:"bicycle wheel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have bicycle wheel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, tricycle, unicycle, quadracycle, recumbent bicycle, bicycle trailer, b`,concepts:["unicycle","quadracycle","recumbent bicycle","bicycle trailer","b"],selected:"recumbent bicycle",model:"nous-hermes-13b",criteria:"Criteria: can have bicycle wheel. "},{cat:"animals",slot:"generalization",value:"hymenopter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are hymenopter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ant, bee, wasp, hornet, bumblebee, honeybee, yellowjacket, paper wasp, vel`,concepts:["wasp","hornet","bumblebee","honeybee","yellowjacket","paper wasp","vel"],selected:"bumblebee",model:"llama-13b-supercot",criteria:"Criteria: are hymenopter. "},{cat:"instruments",slot:"material",value:"metal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be made of metal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, violin, flute, saxophone, trumpet, trombone, clarinet, piano, drum, cymbal`,concepts:["trumpet","cymbal"],selected:"cymbal",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of metal. "},{cat:"food",slot:"part",value:"stalk",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have stalk. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        carrot, celery, asparagus, artichoke, broccoli, cauliflower, corn, cucumber,`,concepts:["celery","asparagus","artichoke","broccoli","cauliflower"],selected:"celery",model:"llama-13b-supercot",criteria:"Criteria: can have stalk. "},{cat:"food",slot:"howToUse",value:"stew",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for stew. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        beef, chicken, lamb, pork, beef broth, chicken broth, lamb broth, pork bro`,concepts:["beef","chicken","lamb","pork","beef broth","chicken broth","lamb broth","pork bro"],selected:"lamb broth",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for stew. "},{cat:"tools",slot:"purpose",value:"grip",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are used to grip. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, 
        wrench, 
        hammer, 
        screwdriver, 
        pliers, 
`,concepts:["pliers","wrench","pliers"],selected:"wrench",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to grip. "},{cat:"vehicles",slot:"part",value:"anchor",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have anchor. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, boat, truck, airplane, submarine, motorcycle, bicycle, helicopter, hot air balloon,`,concepts:["submarine","hot air balloon"],selected:"submarine",model:"llama-13b-supercot",criteria:"Criteria: can have anchor. "},{cat:"animals",slot:"user",value:"policeman",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used by policemen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Horse
        2. Dog
        3. Cat
        4. Elephant
        5. Giraffe
        `,concepts:["horse","giraffe"],selected:"giraffe",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by policemen. "},{cat:"artifacts",slot:"howToUse",value:"fasten",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be used for fasten. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        nails, screws, bolts, staples, glue, tape, clamps, clips, zippers,`,concepts:["nails","screws","bolts","staples","glue","tape","clamps","clips","zippers"],selected:"nails",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for fasten. "},{cat:"artifacts",slot:"shape",value:"spherical",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be spherical. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Globe
2. Ball
3. Orb
4. Sphere
5. Marble
6. Egg
7.`,concepts:["globe","ball","orb","sphere","marble","egg"],selected:"ball",model:"manticore-13b",criteria:"Criteria: can be spherical. "},{cat:"instruments",slot:"howToUse",value:"sing",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be used for sing. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, violin, piano, flute, saxophone, clarinet, trumpet, trombone, harmonica, accordion`,concepts:["trumpet"],selected:"trumpet",model:"alpacino-supercot-13b",criteria:"Criteria: can be used for sing. "},{cat:"food",slot:"accessory",value:"sandwich",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with sandwich. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bread, meat, cheese, lettuce, tomato, mayonnaise, mustard, butter, ham, turkey.`,concepts:["meat","lettuce","mayonnaise","mustard","butter","ham","turkey"],selected:"meat",model:"manticore-13b",criteria:"Criteria: are related with sandwich. "},{cat:"clothes",slot:"part",value:"leg",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have leg. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        jeans, pants, trousers, shorts, skirt, dress, leggings, tights, stockings, socks`,concepts:["jeans","pants","trousers","shorts","leggings","tights","stockings","socks"],selected:"stockings",model:"llama-13b-supercot",criteria:"Criteria: can have leg. "},{cat:"vehicles",slot:"user",value:"passenger",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by passengers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, bus, taxi, train, plane, subway, tram, ferry, bike, boat. 

### Inst`,concepts:["train","subway","ferry","bike","inst"],selected:"inst",model:"llama-13b-supercot",criteria:"Criteria: are used by passengers. "},{cat:"vehicles",slot:"part",value:"trunk",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have trunk. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, jeep, SUV, station wagon, minivan, pickup truck, hatchback, sedan`,concepts:["van","jeep","suv","station wagon","minivan","pickup truck","hatchback","sedan"],selected:"minivan",model:"alpacino-supercot-13b",criteria:"Criteria: can have trunk. "},{cat:"animals",slot:"activity",value:"love",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be love. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, horse, elephant, monkey, lion, tiger, panda, giraffe, dolphin.`,concepts:["horse","panda","giraffe","dolphin"],selected:"panda",model:"llama-13b-supercot",criteria:"Criteria: can be love. "},{cat:"animals",slot:"place",value:"tropic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in tropics. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        lion, tiger, jaguar, leopard, cheetah, gorilla, chimpanzee, orangut`,concepts:["jaguar","leopard","cheetah","gorilla","chimpanzee","orangut"],selected:"jaguar",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in tropics. "},{cat:"instruments",slot:"part",value:"loud pedal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have loud pedal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, guitar, piano, trumpet, saxophone, violin, drums, bass, cello, harp.`,concepts:["trumpet","drums","harp"],selected:"harp",model:"manticore-13b",criteria:"Criteria: can have loud pedal. "},{cat:"food",slot:"product",value:"cereal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can produce cereal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cereal, rice, wheat, oats, corn, barley, rye, sorghum, millet, buckw`,concepts:["oats","barley","rye","sorghum","millet","buckw"],selected:"oats",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can produce cereal. "},{cat:"clothes",slot:"bodyPart",value:"hand",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have or be used with hand. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, gloves, scarf, hat, shoes, socks, belt, handkerchief`,concepts:["pants","gloves","shoes","socks","belt","handkerchief"],selected:"belt",model:"nous-hermes-13b",criteria:"Criteria: can have or be used with hand. "},{cat:"food",slot:"smell",value:"acidic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can smell acidic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Vinegar
2. Lemon
3. Lime
4. Orange
5. Grapefruit
6. Pine`,concepts:["vinegar","lemon","lime","grapefruit","pine"],selected:"pine",model:"manticore-13b",criteria:"Criteria: can smell acidic. "},{cat:"appliance",slot:"user",value:"teacher",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used by teachers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. projector
2. whiteboard
3. printer
4. scanner
5. document camera
6. interactive board
7.`,concepts:["whiteboard","document camera","interactive board"],selected:"interactive board",model:"manticore-13b",criteria:"Criteria: are used by teachers. "},{cat:"home",slot:"material",value:"china",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of china. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        china, plates, bowls, cups, saucers, mugs, teapots, teacups, sugar bowls,`,concepts:["china","plates","bowls","cups","saucers","mugs","teapots","teacups","sugar bowls"],selected:"teacups",model:"llama-13b-supercot",criteria:"Criteria: can be made of china. "},{cat:"animals",slot:"place",value:"tropic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in tropics. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        lion, elephant, gorilla, monkey, tiger, leopard, zebra, parrot, toucan`,concepts:["gorilla","leopard","zebra","parrot","toucan"],selected:"leopard",model:"llama-13b-supercot",criteria:"Criteria: can be found or used in tropics. "},{cat:"animals",slot:"movement",value:"jump",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can jump. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        rabbit, kangaroo, frog, cat, squirrel, monkey, grasshopper, flea, spider,`,concepts:["kangaroo","squirrel","grasshopper","flea"],selected:"flea",model:"llama-13b-supercot",criteria:"Criteria: can jump. "},{cat:"vehicles",slot:"part",value:"spoke",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have spoke. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, motorcycle, tricycle, wheelchair, scooter, skateboard, unicycle, bicycle`,concepts:["wheelchair","skateboard","unicycle"],selected:"unicycle",model:"llama-13b-supercot",criteria:"Criteria: can have spoke. "},{cat:"food",slot:"howToUse",value:"glaze",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for glaze. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        glaze, caramel, honey, soy, balsamic, maple, chocolate, teriyaki, bar`,concepts:["glaze","caramel","honey","soy","balsamic","maple","chocolate","teriyaki","bar"],selected:"glaze",model:"nous-hermes-13b",criteria:"Criteria: can be used for glaze. "},{cat:"food",slot:"part",value:"curd",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have curd. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        curd, cheese, yogurt, butter, milk, cream, sour cream, cottage cheese, ric`,concepts:["curd","yogurt","butter","milk","cream","sour cream","cottage cheese","ric"],selected:"sour cream",model:"manticore-13b",criteria:"Criteria: can have curd. "},{cat:"containers",slot:"content",value:"reusable",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: contain reusables. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        glass, plastic, aluminum, stainless steel, ceramic, paper, cardboard, cloth, wood, bambo`,concepts:["glass","plastic","aluminum","stainless steel","ceramic","paper","cardboard","cloth","wood","bambo"],selected:"wood",model:"alpacino-supercot-13b",criteria:"Criteria: contain reusables. "},{cat:"clothes",slot:"part",value:"belt loop",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have belt loop. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shorts, skirts, dresses, jackets, coats, shirts, blouses, sweaters, sho`,concepts:["pants","shorts","skirts","dresses","jackets","coats","shirts","blouses","sweaters","sho"],selected:"skirts",model:"nous-hermes-13b",criteria:"Criteria: can have belt loop. "},{cat:"home",slot:"shape",value:"round",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be round. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, microwave, toaster, coffee maker, washing machine, dryer, dishwasher, tr`,concepts:["refrigerator","microwave","toaster","coffee maker","washing machine","dryer","dishwasher","tr"],selected:"dryer",model:"nous-hermes-13b",criteria:"Criteria: can be round. "},{cat:"containers",slot:"part",value:"bung",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can have bung. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        can, bottle, jar, jug, pot, vase, cup, bowl, box, jar.`,concepts:["jar","jug","vase","cup","jar"],selected:"cup",model:"alpacino-supercot-13b",criteria:"Criteria: can have bung. "},{cat:"vehicles",slot:"part",value:"windshield wiper",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have windshield wiper. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, van, motorcycle, bicycle, boat, airplane, helicopter, train.`,concepts:["van","train"],selected:"train",model:"manticore-13b",criteria:"Criteria: can have windshield wiper. "},{cat:"home",slot:"material",value:"wood",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be made of wood. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        wooden, furniture, table, chair, desk, cabinet, shelf, bookcase, bed, dresser.`,concepts:["wooden","furniture","table","desk","cabinet","shelf","bookcase","bed","dresser"],selected:"bookcase",model:"nous-hermes-13b",criteria:"Criteria: can be made of wood. "},{cat:"instruments",slot:"part",value:"thumbhole",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have thumbhole. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        flute, violin, recorder, oboe, clarinet, bassoon, saxophone, trumpet, trombone,`,concepts:["recorder","trumpet"],selected:"recorder",model:"manticore-13b",criteria:"Criteria: can have thumbhole. "},{cat:"animals",slot:"place",value:"India",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in Indias. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Elephant
        2. Tiger
        3. Leopard
        4. Rhinoceros
        5. Cam`,concepts:["leopard","rhinoceros","cam"],selected:"rhinoceros",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in Indias. "},{cat:"vehicles",slot:"part",value:"radar dome",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have radar dome. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, motorcycle, bicycle, airplane, helicopter, boat, submarine, tank. 
`,concepts:["submarine","tank"],selected:"submarine",model:"llama-13b-supercot",criteria:"Criteria: can have radar dome. "},{cat:"artifacts",slot:"part",value:"rim",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have rim. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pot, cup, bowl, vase, plate, mug, pitcher, glass, jar, bottle. 

###`,concepts:["pot","cup","bowl","vase","mug","pitcher","jar","bottle"],selected:"mug",model:"llama-13b-supercot",criteria:"Criteria: can have rim. "},{cat:"clothes",slot:"part",value:"neckband",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have neckband. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shirt, t-shirt, blouse, sweater, sweatshirt, hoodie, jumper, cardigan,`,concepts:["t","sweatshirt","hoodie","jumper","cardigan"],selected:"cardigan",model:"llama-13b-supercot",criteria:"Criteria: can have neckband. "},{cat:"animals",slot:"place",value:"larva",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be found or used in larvas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        caterpillar, silkworm, maggot, grub, larva, pupa, chrysalis, cocoon,`,concepts:["caterpillar","silkworm","maggot","grub","larva","pupa","chrysalis","cocoon"],selected:"grub",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in larvas. "},{cat:"food",slot:"user",value:"greengrocer",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are used by greengrocers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of food and are used by greengrocers: apple, banana,`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: are used by greengrocers. "},{cat:"appliance",slot:"part",value:"scale bar",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have scale bar. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, oven, microwave, dishwasher, washing machine, dryer, air conditioner, he`,concepts:["washing machine","air conditioner","he"],selected:"air conditioner",model:"manticore-13b",criteria:"Criteria: can have scale bar. "},{cat:"animals",slot:"movement",value:"hop",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can hop. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        rabbit, kangaroo, frog, grasshopper, bunny, hare, kangaroo rat, jer`,concepts:["kangaroo","grasshopper","bunny","hare","kangaroo rat","jer"],selected:"bunny",model:"nous-hermes-13b",criteria:"Criteria: can hop. "},{cat:"food",slot:"part",value:"Zea mays rugosa",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can have Zea mays rugosa. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        corn, popcorn, cornmeal, hominy, grits, polenta, cornstarch, corn syrup, corn on`,concepts:["popcorn","cornmeal","hominy","grits","polenta","cornstarch","corn syrup","corn on"],selected:"corn syrup",model:"nous-hermes-13b",criteria:"Criteria: can have Zea mays rugosa. "},{cat:"vehicles",slot:"material",value:"steel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can be made of steel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cars, trucks, motorcycles, bicycles, buses, trains, airplanes, helicopters, boats,`,concepts:["cars","trucks","motorcycles","bicycles","buses","trains","airplanes","helicopters","boats"],selected:"airplanes",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of steel. "},{cat:"animals",slot:"part",value:"pad",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have pad. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 animals that can have paws: 
        - Cat
        - Dog
        - Rabbit
`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can have pad. "},{cat:"vehicles",slot:"part",value:"helm",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have helm. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, boat, airplane, helicopter, hot air balloon, bicycle, scooter`,concepts:["hot air balloon"],selected:"hot air balloon",model:"alpacino-supercot-13b",criteria:"Criteria: can have helm. "},{cat:"clothes",slot:"material",value:"plastic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of plastic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, 
        jacket, 
        shoes, 
        backpack, 
        raincoat, 
`,concepts:["pants","shoes","backpack","raincoat"],selected:"raincoat",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be made of plastic. "},{cat:"clothes",slot:"material",value:"linen",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be made of linen. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, dress, jacket, skirt, blouse, coat, trousers, shirt, suit. 
`,concepts:["pants","coat","trousers","suit"],selected:"trousers",model:"llama-13b-supercot",criteria:"Criteria: can be made of linen. "},{cat:"appliance",slot:"supply",value:"coal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: use coal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, oven, washing machine, dryer, dishwasher, air conditioner, heater`,concepts:["washing machine","air conditioner"],selected:"air conditioner",model:"llama-13b-supercot",criteria:"Criteria: use coal. "},{cat:"animals",slot:"colorPattern",value:"black",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be black. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, cow, horse, sheep, pig, crow, raven, horsefly, beetle.`,concepts:["cow","horse","sheep","pig","crow","raven","horsefly"],selected:"raven",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be black. "},{cat:"animals",slot:"activity",value:"kill",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be kill. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        tiger, lion, snake, spider, scorpion, shark, crocodile, bear, wolf, cob`,concepts:["scorpion","shark","crocodile","cob"],selected:"cob",model:"nous-hermes-13b",criteria:"Criteria: can be kill. "},{cat:"clothes",slot:"part",value:"placket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have placket. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, coat, dress, blouse, sweater, sweatshirt, t-shirt, vest`,concepts:["pants","coat","sweatshirt","t","vest"],selected:"vest",model:"alpacino-supercot-13b",criteria:"Criteria: can have placket. "},{cat:"animals",slot:"activity",value:"sing",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be sing. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, lion, tiger, elephant, giraffe, zebra, monkey, panda, koala`,concepts:["giraffe","zebra","panda","koala"],selected:"giraffe",model:"alpacino-supercot-13b",criteria:"Criteria: can be sing. "},{cat:"clothes",slot:"part",value:"pocket",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have pocket. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jacket, coat, shirt, dress, jeans, sweater, sweatpants, shorts, skirt.`,concepts:["pants","coat","jeans","sweatpants","shorts"],selected:"jeans",model:"nous-hermes-13b",criteria:"Criteria: can have pocket. "},{cat:"food",slot:"place",value:"greengrocer",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in greengrocers. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "apples, bananas, carrots, cucumbers, lettuce, onions, peppers, potatoes, tomatoes`,concepts:["apples","bananas","carrots","cucumbers","lettuce","onions","peppers","potatoes","tomatoes"],selected:"cucumbers",model:"manticore-13b",criteria:"Criteria: can be found or used in greengrocers. "},{cat:"appliance",slot:"part",value:"button",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have button. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category`,concepts:["instruction","provide a list of","category"],selected:"instruction",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have button. "},{cat:"artifacts",slot:"purpose",value:"groom",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: are used to groom. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Brush
2. Comb
3. Scissors
4. Tweezers
5. Nail clippers
6.`,concepts:["brush","comb","scissors","tweezers","nail clippers"],selected:"comb",model:"manticore-13b",criteria:"Criteria: are used to groom. "},{cat:"instruments",slot:"generalization",value:"bowed stringed instrument",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: are bowed stringed instrument. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        violin, viola, cello, double bass.`,concepts:["viola","double bass"],selected:"double bass",model:"manticore-13b",criteria:"Criteria: are bowed stringed instrument. "},{cat:"food",slot:"smell",value:"balsamic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can smell balsamic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        balsamic vinegar, balsamic reduction, balsamic glaze, balsamic dressing, bals`,concepts:["balsamic vinegar","balsamic reduction","balsamic glaze","balsamic dressing","bals"],selected:"balsamic dressing",model:"alpacino-supercot-13b",criteria:"Criteria: can smell balsamic. "},{cat:"vehicles",slot:"purpose",value:"ride",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used to ride. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bicycle, car, bus, motorcycle, scooter, train, taxi, truck, van.`,concepts:["train","van"],selected:"train",model:"manticore-13b",criteria:"Criteria: are used to ride. "},{cat:"containers",slot:"efficiency",value:"impermeable",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be impermeable. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        plastic, glass, metal, ceramic, wood, cardboard, paper, cloth, leather, rubber.`,concepts:["plastic","glass","metal","ceramic","wood","cardboard","paper","cloth","leather","rubber"],selected:"metal",model:"alpacino-supercot-13b",criteria:"Criteria: can be impermeable. "},{cat:"appliance",slot:"purpose",value:"display",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used to display. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, stove, microwave, oven, dishwasher, washing machine, dryer, air condition`,concepts:["washing machine","air condition"],selected:"air condition",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used to display. "},{cat:"vehicles",slot:"part",value:"dashboard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have dashboard. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, van, motorcycle, bicycle, boat, airplane, train, helicopter`,concepts:["van","train"],selected:"van",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have dashboard. "},{cat:"vehicles",slot:"part",value:"chain guard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have chain guard. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, scooter, ATV, snowmobile, lawnmower, tractor,`,concepts:["atv","snowmobile","lawnmower"],selected:"atv",model:"alpacino-supercot-13b",criteria:"Criteria: can have chain guard. "},{cat:"animals",slot:"activity",value:"play",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be play. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Cat
2. Dog
3. Horse
4. Monkey
5. Lion
6. Tiger
7. Eleph`,concepts:["horse","eleph"],selected:"eleph",model:"nous-hermes-13b",criteria:"Criteria: can be play. "},{cat:"home",slot:"part",value:"can",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can have can. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        can, oven, stove, microwave, refrigerator, freezer, dishwasher, washing machine,`,concepts:["can","oven","stove","microwave","refrigerator","freezer","dishwasher","washing machine"],selected:"microwave",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have can. "},{cat:"artifacts",slot:"material",value:"steel",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be made of steel. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        1. Sword
        2. Knife
        3. Axe
        4. Spear
        5. Shovel
`,concepts:["sword","knife","axe","spear","shovel"],selected:"sword",model:"alpacino-supercot-13b",criteria:"Criteria: can be made of steel. "},{cat:"home",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Silverware
2. Silverware drawer
3. Silverware tray
4. Silver platter
5. Silver candlest`,concepts:["silverware","silverware drawer","silverware tray","silver platter","silver candlest"],selected:"silverware drawer",model:"llama-13b-supercot",criteria:"Criteria: can be silver. "},{cat:"animals",slot:"activity",value:"migrate",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be migrate. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Bird
2. Butterfly
3. Caterpillar
4. Fish
5. Frog
6. Insect`,concepts:["caterpillar","fish"],selected:"fish",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be migrate. "},{cat:"tools",slot:"user",value:"sailor",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: tools. 
        Criteria: are used by sailors. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pliers, 
        wrench, 
        screwdriver, 
        hammer, 
        saw, 
       `,concepts:["pliers","wrench","saw"],selected:"saw",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are used by sailors. "},{cat:"food",slot:"smell",value:"bitter",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can smell bitter. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Coffee
2. Chocolate
3. Broccoli
4. Brussels sprouts
5. Cabbage`,concepts:["chocolate","broccoli","brussels sprouts"],selected:"broccoli",model:"llama-13b-supercot",criteria:"Criteria: can smell bitter. "},{cat:"animals",slot:"activity",value:"drink",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be drink. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat,dog,elephant,giraffe,hippopotamus,kangaroo,lion,monkey,`,concepts:["giraffe","hippopotamus","kangaroo"],selected:"hippopotamus",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be drink. "},{cat:"food",slot:"accessory",value:"macaroni",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with macaroni. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        macaroni, macaroni and cheese, macaroni salad, macaroni pizza, macaroni and cheese p`,concepts:["macaroni","macaroni and cheese","macaroni salad","macaroni pizza"],selected:"macaroni and cheese",model:"alpacino-supercot-13b",criteria:"Criteria: are related with macaroni. "},{cat:"animals",slot:"part",value:"egg",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can have egg. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, chicken, duck, hen, ostrich, quail, rabbit, turkey, turtle, emu`,concepts:["chicken","duck","hen","ostrich","quail","turkey","emu"],selected:"turkey",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have egg. "},{cat:"appliance",slot:"shape",value:"pointy",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be pointy. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Pencil
2. Knife
3. Fork
4. Scissors
5. Screwdriver
6.`,concepts:["pencil","knife","fork","scissors","screwdriver"],selected:"screwdriver",model:"llama-13b-supercot",criteria:"Criteria: can be pointy. "},{cat:"vehicles",slot:"part",value:"log",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have log. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of vehicles and can have log: 
        car, truck, bus`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can have log. "},{cat:"animals",slot:"activity",value:"migrate",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be migrate. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        deer, duck, eagle, flamingo, goose, hummingbird, ostrich, pelican, swan,`,concepts:["duck","eagle","flamingo","goose","hummingbird","ostrich","pelican","swan"],selected:"goose",model:"alpacino-supercot-13b",criteria:"Criteria: can be migrate. "},{cat:"appliance",slot:"purpose",value:"service",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: are used for service. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        refrigerator, washing machine, microwave, vacuum cleaner, air conditioner, dishwasher, toaster`,concepts:["washing machine","vacuum cleaner","air conditioner"],selected:"vacuum cleaner",model:"llama-13b-supercot",criteria:"Criteria: are used for service. "},{cat:"instruments",slot:"part",value:"key",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can have key. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        guitar, piano, violin, flute, saxophone, clarinet, trumpet, trombone, harp, accordion`,concepts:["trumpet","harp"],selected:"trumpet",model:"llama-13b-supercot",criteria:"Criteria: can have key. "},{cat:"food",slot:"howToUse",value:"cultivate",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be used for cultivate. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        carrot, 
        cucumber, 
        lettuce, 
        tomato, 
        onion, 
`,concepts:["lettuce"],selected:"lettuce",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be used for cultivate. "},{cat:"home",slot:"place",value:"driveway",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can be found or used in driveways. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of home and can be found or used in driveways: 
        -`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: can be found or used in driveways. "},{cat:"food",slot:"accessory",value:"oven",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with oven. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        bake, cake, cookie, pie, pizza, bread, pasta, roast, grill, broil.`,concepts:["bake","cake","cookie","pie","pizza","pasta","roast","grill","broil"],selected:"broil",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: are related with oven. "},{cat:"animals",slot:"colorPattern",value:"spotted",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be spotted. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, elephant, giraffe, horse, lion, monkey, penguin, tiger, zebra`,concepts:["giraffe","horse","penguin","zebra"],selected:"penguin",model:"manticore-13b",criteria:"Criteria: can be spotted. "},{cat:"vehicles",slot:"purpose",value:"race",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used for race. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of vehicles and are used for race: 
        car, truck,`,concepts:["here is a list of"],selected:"here is a list of",model:"nous-hermes-13b",criteria:"Criteria: are used for race. "},{cat:"vehicles",slot:"part",value:"tack",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have tack. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, motorcycle, bicycle, boat, airplane, helicopter, train, bus, van.`,concepts:["train","van"],selected:"van",model:"nous-hermes-13b",criteria:"Criteria: can have tack. "},{cat:"instruments",slot:"howToUse",value:"expand",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: instruments. 
        Criteria: can be used for expand. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        trumpet, trombone, saxophone, clarinet, flute, violin, cello, piano, guitar, harp`,concepts:["trumpet","harp"],selected:"trumpet",model:"llama-13b-supercot",criteria:"Criteria: can be used for expand. "},{cat:"artifacts",slot:"part",value:"bead",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have bead. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Beaded
2. Beadwork
3. Beaded curtain
4. Beaded necklace
5. B`,concepts:["beaded","beadwork","beaded curtain","beaded necklace","b"],selected:"b",model:"manticore-13b",criteria:"Criteria: can have bead. "},{cat:"home",slot:"sound",value:"clink",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: home. 
        Criteria: can clink. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        ### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category`,concepts:["instruction","provide a list of","category"],selected:"provide a list of",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can clink. "},{cat:"artifacts",slot:"colorPattern",value:"silver",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be silver. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        silver, spoon, fork, knife, plate, bowl, cup, ring, bracelet, necklace.`,concepts:["silver","spoon","fork","knife","bowl","cup","ring"],selected:"spoon",model:"alpacino-supercot-13b",criteria:"Criteria: can be silver. "},{cat:"artifacts",slot:"part",value:"pickup",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can have pickup. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pickup, truck, car, bike, scooter, motorcycle, bicycle, skateboard, wheelchair,`,concepts:["pickup","truck","car","bike","scooter","motorcycle","bicycle","skateboard","wheelchair"],selected:"bicycle",model:"alpacino-supercot-13b",criteria:"Criteria: can have pickup. "},{cat:"food",slot:"place",value:"vineyard",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in vineyards. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, grapes, pears, peaches, plums, cherries, strawberries, raspberries, blue`,concepts:["apples","grapes","pears","peaches","plums","cherries","strawberries","raspberries","blue"],selected:"apples",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in vineyards. "},{cat:"containers",slot:"shape",value:"square",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be square. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        can, box, crate, jar, package, pail, pot, tin, vase.`,concepts:["crate","jar","package","pail","vase"],selected:"package",model:"alpacino-supercot-13b",criteria:"Criteria: can be square. "},{cat:"clothes",slot:"part",value:"belt loop",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have belt loop. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, jeans, shorts, skirts, dresses, jackets, coats, shirts, blouses, swe`,concepts:["pants","jeans","shorts","skirts","dresses","jackets","coats","shirts","blouses","swe"],selected:"swe",model:"manticore-13b",criteria:"Criteria: can have belt loop. "},{cat:"artifacts",slot:"material",value:"elastic",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: artifacts. 
        Criteria: can be made of elastic. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
1. Rubber
2. Latex
3. Silicone
4. Neoprene
5. Spandex
6. Nyl`,concepts:["rubber","latex","silicone","neoprene","spandex","nyl"],selected:"spandex",model:"llama-13b-supercot",criteria:"Criteria: can be made of elastic. "},{cat:"animals",slot:"purpose",value:"pet",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used for pet. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, dog, bird, fish, hamster, rabbit, guinea pig, ferret, turtle, iguana.`,concepts:["fish","hamster","guinea pig","ferret","iguana"],selected:"ferret",model:"llama-13b-supercot",criteria:"Criteria: are used for pet. "},{cat:"clothes",slot:"part",value:"shirting",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can have shirting. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        shirt, blouse, dress, pants, skirt, jacket, coat, sweater, vest, suit.`,concepts:["pants","coat","vest","suit"],selected:"suit",model:"nous-hermes-13b",criteria:"Criteria: can have shirting. "},{cat:"appliance",slot:"place",value:"cinema",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be found or used in cinemas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        microwave, popcorn, projector, refrigerator, soda, speaker, television, vending machine, washing machine`,concepts:["popcorn","soda","speaker","vending machine","washing machine"],selected:"speaker",model:"alpacino-supercot-13b",criteria:"Criteria: can be found or used in cinemas. "},{cat:"clothes",slot:"size",value:"short",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: clothes. 
        Criteria: can be short. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        pants, shirt, jacket, dress, skirt, shoes, socks, hat, scarf, gloves.`,concepts:["pants","shoes","socks","gloves"],selected:"socks",model:"manticore-13b",criteria:"Criteria: can be short. "},{cat:"appliance",slot:"place",value:"cinema",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can be found or used in cinemas. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
cinema, projector, screen, popcorn, soda, candy, recliner, sound system, concession stand, ticket`,concepts:["cinema","screen","popcorn","soda","candy","recliner","sound system","concession stand","ticket"],selected:"concession stand",model:"llama-13b-supercot",criteria:"Criteria: can be found or used in cinemas. "},{cat:"vehicles",slot:"part",value:"tail",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have tail. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, bus, van, motorcycle, bicycle, boat, airplane, helicopter, train.`,concepts:["van","train"],selected:"train",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can have tail. "},{cat:"food",slot:"accessory",value:"corn",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: are related with corn. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        corn, cornmeal, cornbread, cornstarch, corn syrup, corn on the cob, cornflakes, corn`,concepts:["cornmeal","cornbread","cornstarch","corn syrup","corn on the cob","cornflakes"],selected:"cornmeal",model:"manticore-13b",criteria:"Criteria: are related with corn. "},{cat:"vehicles",slot:"user",value:"hostess",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: are used by hostesses. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "limousine, taxi, bus, car, van, truck, motorcycle, bicycle, helicopter, airplane`,concepts:["limousine","van"],selected:"van",model:"manticore-13b",criteria:"Criteria: are used by hostesses. "},{cat:"vehicles",slot:"part",value:"saddle",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have saddle. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here is a list of 10 words that belong to the category of vehicles and can have saddle: 
        bicycle, horse`,concepts:["here is a list of","horse"],selected:"horse",model:"nous-hermes-13b",criteria:"Criteria: can have saddle. "},{cat:"food",slot:"time",value:"meal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be consumed or used during meal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        apples, bananas, bread, butter, cheese, chicken, coffee, eggs, milk, rice. 

###`,concepts:["apples","bananas","butter","chicken","eggs","milk"],selected:"butter",model:"llama-13b-supercot",criteria:"Criteria: can be consumed or used during meal. "},{cat:"vehicles",slot:"part",value:"radiator grille",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: vehicles. 
        Criteria: can have radiator grille. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        car, truck, van, bus, motorcycle, bicycle, boat, airplane, helicopter, tractor.`,concepts:["van"],selected:"van",model:"alpacino-supercot-13b",criteria:"Criteria: can have radiator grille. "},{cat:"food",slot:"place",value:"store",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: food. 
        Criteria: can be found or used in stores. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        Here are 10 words that belong to the category of food and can be found or used in stores: bread, milk, eggs, cheese`,concepts:["here are","milk","eggs"],selected:"eggs",model:"wizard-vicuna-13b-uncensored-hf",criteria:"Criteria: can be found or used in stores. "},{cat:"containers",slot:"material",value:"metal",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: containers. 
        Criteria: can be made of metal. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        metal, tin, aluminum, steel, iron, copper, zinc, brass, silver, gold. 

###`,concepts:["metal","aluminum","steel","iron","copper","zinc","brass","silver","gold"],selected:"aluminum",model:"llama-13b-supercot",criteria:"Criteria: can be made of metal. "},{cat:"animals",slot:"user",value:"owner",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: are used by owners. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        "dogs, cats, horses, birds, fish, hamsters, rabbits, guinea pigs, reptiles, ferrets`,concepts:["dogs","cats","horses","birds","fish","hamsters","rabbits","guinea pigs","reptiles","ferrets"],selected:"hamsters",model:"nous-hermes-13b",criteria:"Criteria: are used by owners. "},{cat:"appliance",slot:"part",value:"sensor",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: appliance. 
        Criteria: can have sensor. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        oven, refrigerator, washing machine, air conditioner, microwave, dishwasher, coffee maker,`,concepts:["washing machine","air conditioner","coffee maker"],selected:"washing machine",model:"manticore-13b",criteria:"Criteria: can have sensor. "},{cat:"animals",slot:"behavior",value:"cunning",prompt:`### Instruction: 
        Provide a list of 10 words that belong to the category and satisfy the criteria. 
        Category: animals. 
        Criteria: can be cunning. 
        Desired output: comma-separated list of words. 
        ### Response: 
        Output: `,result:`
        cat, fox, raccoon, squirrel, rat, mongoose, weasel, skunk, opossum, otter`,concepts:["raccoon","squirrel","rat","mongoose","weasel","skunk","opossum","otter"],selected:"opossum",model:"llama-13b-supercot",criteria:"Criteria: can be cunning. "}],$2={apiKey:"AIzaSyC4ucBLoaMpGMRfLh8q-cxPBGQIcq4MIz0",authDomain:"semagram-gpt.firebaseapp.com",projectId:"semagram-gpt",storageBucket:"semagram-gpt.appspot.com",messagingSenderId:"174798440592",appId:"1:174798440592:web:ef74cfc206a4f3168bb015",measurementId:"G-ZK9LP9L4M9"},xb=By($2);w2(xb);const _b=OD(xb),bm=RD(_b,"annotations");function L2(){const[t,e]=W.useState(""),[r,n]=W.useState(!1),[o,s]=W.useState(!1),[a,i]=W.useState(!1),[l,c]=W.useState([]),[u,d]=W.useState(0),[h,g]=W.useState([]),[y,v]=W.useState([]),[D,f]=W.useState([]),[p,m]=W.useState(!1),[w,S]=W.useState(!1),[T,O]=W.useState(new Date),[x,Z]=W.useState([]),B={1:wm,default:wm},st=(le,I)=>(I.getTime()-le.getTime())/1e3,Br=le=>{const I=mc(bm,le);gc(I).then(N=>{if(!N.exists())console.log("No such document!");else{const L=N.data(),M=JSON.stringify(L),se=new Blob([M],{type:"application/json"}),lr=URL.createObjectURL(se),at=document.createElement("a");at.href=lr,at.download=le+".json",document.body.appendChild(at),at.click(),document.body.removeChild(at)}})},ir=(le,I)=>{const N=document.getElementById("progress-bar");N&&l&&(N.style.width=`${(le+1)/I*100}%`)},wo=le=>{const I=[...h,le];g(I),bo(I)},Zs=async le=>{if(le.key==="Enter"||le.type==="click"){if(t.length===0)return alert("Please enter your name");const I=t.toLowerCase().trim();if(e(I),I.startsWith("admin")){const L=I.substring(6);Br(L);return}c(B[I]||B.default);const N=mc(bm,I);await gc(N).then(L=>{if(L.exists()){const M=L.data();M!=null&&M.dataset&&(M==null?void 0:M.i)>=(M==null?void 0:M.dataset.length)?alert("Thank you for your participation, you already completed the task!"):M&&(ir(M.i,M.dataset.length),g(M.answers),Z(M.timeDiffs),d(M.i),v(M.isWrong),f(M.models),n(!0))}else n(!0)})}O(new Date)},bo=async le=>{if(!p){m(!0);const I=st(T,new Date),N=document.getElementById("hard-checkbox");if(l&&(ir(u,l.length),S(!0)),l&&u<l.length){const L=N.checked,M=l[u].model;v([...y,L]),Z([...x,I]),f([...D,M]);const se=mc(_b,"annotations/"+t);await gc(se).then(lr=>{lr.exists()?qD(se,{answers:le,i:le.length,isWrong:[...y,N.checked],timeDiffs:[...x,I],models:[...D,M],date:new Date}):HD(se,{name:t,answers:le,i:le.length,dataset:l,isWrong:[...y,N.checked],timeDiffs:[...x,I],models:[...D,M],date:new Date}),d(le.length)})}O(new Date),N.checked=!1,l&&u+1>=l.length&&(alert("Thank you for your participation!"),n(!1),g([]),d(0)),m(!1)}};return r?U("div",{children:[U("div",{className:"text-center justify-center mt-12",children:[R(vm,{}),R("h1",{className:"text-4xl font-bold",children:"Is the concept correct with respect to the category and the criteria?"}),U("p",{className:"text-xl mt-6",id:"line",children:["Category: ",l?l[u].cat:""]}),R("p",{className:"text-xl mt-6",id:"line",children:l?l[u].criteria:""}),U("p",{className:"text-xl mt-6",id:"line",children:["Concept: ",R("span",{className:"ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-50 rounded-md",children:R("b",{children:l?l[u].selected:""})})]})]}),U("div",{className:"flex justify-center mt-8",children:[R("button",{id:"middle-button",onClick:()=>wo("yes"),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg disabled:bg-gray-500",disabled:p,children:"Yes"}),R("button",{id:"advanced-button",onClick:()=>wo("no"),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg disabled:bg-gray-500",disabled:p,children:"No"})]}),U("div",{className:"flex justify-center mt-4",children:[U("p",{children:["Is this concept ",R("a",{href:"#",className:"text-blue-600 hover:text-blue-700 cursor-default",title:"Please select this option if the concept is erroneous",children:"erroneous"}),"?"]}),R("input",{id:"hard-checkbox",type:"checkbox",className:"ml-2 h-6 w-6 rounded-full shadow checked:shadow-xl cursor-pointer"})]}),w&&l?R("div",{className:"flex justify-center mt-8 max-w-2xl mx-auto",children:U("div",{id:"progress-bar",className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full",style:{height:17,width:`${(u+1)/l.length*100}%`},children:[Math.round((u+1)/l.length*100),"%"]})}):R("div",{})]}):o?a?U("div",{children:[R(N2,{text:"Remember that with your username you can always resume the session where you left"}),R(vm,{}),U("div",{className:"text-center mt-12",children:[R("div",{className:"text-4xl font-bold",children:"Ready to get bored?"}),R("div",{className:"text-2xl mt-4",children:"Please enter your name to start"}),R("div",{children:R("input",{value:t,onChange:le=>e(le.target.value.toLowerCase()),onKeyDown:Zs,className:"rounded-lg shadow-lg p-2 border border-gray-400 mt-4",placeholder:"Type your name here..."})}),R("div",{children:R("button",{className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg",onClick:Zs,children:"Start"})})]})]}):U("div",{className:"text-center mt-8 max-w-3xl mx-auto",style:{overflowY:"scroll"},children:[R(A2,{}),R("button",{className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg",onClick:()=>i(!0),children:"Proceed"})]}):U("div",{className:"text-center mt-8 max-w-3xl mx-auto",style:{overflowY:"scroll"},children:[R(I2,{}),R("button",{className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg",onClick:()=>s(!0),children:"Proceed"})]})}function M2(){const[t,e]=W.useState(!1),[r,n]=W.useState(!1),o=()=>{if(t){document.documentElement.classList.remove("dark-mode"),e(!1);const s=document.getElementsByTagName("input");for(const a of s)a.classList.remove("dark-mode-input")}else{document.documentElement.classList.add("dark-mode"),e(!0);const s=document.getElementsByTagName("input");for(const a of s)a.classList.add("dark-mode-input")}};return W.useEffect(()=>{const s=()=>{n(window.scrollY>0)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),R("div",{className:`sticky-button ${r?"sticky":""}`,children:U("label",{className:"switch",children:[R("input",{type:"checkbox",onClick:o}),R("div",{className:"slider round"})]})})}Ic.createRoot(document.getElementById("root")).render(U(Qb.StrictMode,{children:[R(L2,{}),R(M2,{})]}));
