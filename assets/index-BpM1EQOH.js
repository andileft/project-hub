(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Q1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},Uu={},y0={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),Y1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),sI=Symbol.for("react.memo"),iI=Symbol.for("react.lazy"),Zm=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,w0={};function Si(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||_0}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=Si.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||_0}var cf=uf.prototype=new E0;cf.constructor=uf;v0(cf,Si.prototype);cf.isPureReactComponent=!0;var eg=Array.isArray,T0=Object.prototype.hasOwnProperty,hf={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)T0.call(e,r)&&!I0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ha,type:t,key:i,ref:o,props:s,_owner:hf.current}}function aI(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tg=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function Tl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case Y1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Yc(o,0):r,eg(s)?(n="",t!=null&&(n=t.replace(tg,"$&/")+"/"),Tl(s,e,n,"",function(c){return c})):s!=null&&(df(s)&&(s=aI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(tg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",eg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Yc(i,l);o+=Tl(i,e,n,u,s)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Yc(i,l++),o+=Tl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],s=0;return Tl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},Il={transition:null},cI={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Il,ReactCurrentOwner:hf};function k0(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Si;ue.Fragment=J1;ue.Profiler=Z1;ue.PureComponent=uf;ue.StrictMode=X1;ue.Suspense=rI;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;ue.act=k0;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=hf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)T0.call(e,u)&&!I0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ha,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};ue.createElement=x0;ue.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:nI,render:t}};ue.isValidElement=df;ue.lazy=function(t){return{$$typeof:iI,_payload:{_status:-1,_result:t},_init:uI}};ue.memo=function(t,e){return{$$typeof:sI,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};ue.unstable_act=k0;ue.useCallback=function(t,e){return xt.current.useCallback(t,e)};ue.useContext=function(t){return xt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return xt.current.useEffect(t,e)};ue.useId=function(){return xt.current.useId()};ue.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return xt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};ue.useRef=function(t){return xt.current.useRef(t)};ue.useState=function(t){return xt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return xt.current.useTransition()};ue.version="18.3.1";y0.exports=ue;var J=y0.exports;const pn=Q1(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hI=J,dI=Symbol.for("react.element"),fI=Symbol.for("react.fragment"),pI=Object.prototype.hasOwnProperty,mI=hI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gI={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pI.call(e,r)&&!gI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:dI,type:t,key:i,ref:o,props:s,_owner:mI.current}}Uu.Fragment=fI;Uu.jsx=S0;Uu.jsxs=S0;g0.exports=Uu;var d=g0.exports,A0={exports:{}},Ht={},C0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var K=z.length;z.push(Y);e:for(;0<K;){var Q=K-1>>>1,ie=z[Q];if(0<s(ie,Y))z[Q]=Y,z[K]=ie,K=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],K=z.pop();if(K!==Y){z[0]=K;e:for(var Q=0,ie=z.length,ke=ie>>>1;Q<ke;){var _t=2*(Q+1)-1,vt=z[_t],Lt=_t+1,tn=z[Lt];if(0>s(vt,K))Lt<ie&&0>s(tn,vt)?(z[Q]=tn,z[Lt]=K,Q=Lt):(z[Q]=vt,z[_t]=K,Q=_t);else if(Lt<ie&&0>s(tn,K))z[Q]=tn,z[Lt]=K,Q=Lt;else break e}}return Y}function s(z,Y){var K=z.sortIndex-Y.sortIndex;return K!==0?K:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,v=!1,A=!1,R=!1,O=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N(z){if(R=!1,S(z),!A)if(n(u)!==null)A=!0,Ye(F);else{var Y=n(c);Y!==null&&et(N,Y.startTime-z)}}function F(z,Y){A=!1,R&&(R=!1,k(_),_=-1),v=!0;var K=g;try{for(S(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||z&&!C());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var ie=Q(m.expirationTime<=Y);Y=t.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(u)&&r(u),S(Y)}else r(u);m=n(u)}if(m!==null)var ke=!0;else{var _t=n(c);_t!==null&&et(N,_t.startTime-Y),ke=!1}return ke}finally{m=null,g=K,v=!1}}var U=!1,T=null,_=-1,I=5,E=-1;function C(){return!(t.unstable_now()-E<I)}function b(){if(T!==null){var z=t.unstable_now();E=z;var Y=!0;try{Y=T(!0,z)}finally{Y?x():(U=!1,T=null)}}else U=!1}var x;if(typeof w=="function")x=function(){w(b)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ee=B.port2;B.port1.onmessage=b,x=function(){ee.postMessage(null)}}else x=function(){O(b,0)};function Ye(z){T=z,U||(U=!0,x())}function et(z,Y){_=O(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,Ye(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var K=g;g=Y;try{return z()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=g;g=z;try{return Y()}finally{g=K}},t.unstable_scheduleCallback=function(z,Y,K){var Q=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Q+K:Q):K=Q,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=K+ie,z={id:p++,callback:Y,priorityLevel:z,startTime:K,expirationTime:ie,sortIndex:-1},K>Q?(z.sortIndex=K,e(c,z),n(u)===null&&z===n(c)&&(R?(k(_),_=-1):R=!0,et(N,K-Q))):(z.sortIndex=ie,e(u,z),A||v||(A=!0,Ye(F))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Y=g;return function(){var K=g;g=Y;try{return z.apply(this,arguments)}finally{g=K}}}})(R0);C0.exports=R0;var yI=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=J,zt=yI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,Mo={};function xs(t,e){di(t,e),di(t+"Capture",e)}function di(t,e){for(Mo[t]=e,t=0;t<e.length;t++)b0.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ng={},rg={};function wI(t){return Uh.call(rg,t)?!0:Uh.call(ng,t)?!1:vI.test(t)?rg[t]=!0:(ng[t]=!0,!1)}function EI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TI(t,e,n,r){if(e===null||typeof e>"u"||EI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ff,pf);ot[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ff,pf);ot[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ff,pf);ot[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mf(t,e,n,r){var s=ot.hasOwnProperty(e)?ot[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TI(e,n,s,r)&&(n=null),r||s===null?wI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),gf=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),sg=Symbol.iterator;function Xi(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Jc;function uo(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var Xc=!1;function Zc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function II(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case Bh:return"Profiler";case gf:return"StrictMode";case $h:return"Suspense";case zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case P0:return(t._context.displayName||"Context")+".Provider";case yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function xI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kI(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=kI(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V0(t,e){e=e.checked,e!=null&&mf(t,"checked",e,!1)}function qh(t,e){V0(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gh(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function ni(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ag(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(co(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function M0(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,F0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SI=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function B0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=U0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var AI=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yh(t,e){if(e){if(AI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xh=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zh=null,ri=null,si=null;function ug(t){if(t=pa(t)){if(typeof Zh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Wu(e),Zh(t.stateNode,t.type,e))}}function $0(t){ri?si?si.push(t):si=[t]:ri=t}function z0(){if(ri){var t=ri,e=si;if(si=ri=null,ug(t),e)for(t=0;t<e.length;t++)ug(e[t])}}function H0(t,e){return t(e)}function W0(){}var eh=!1;function q0(t,e,n){if(eh)return t(e,n);eh=!0;try{return H0(t,e,n)}finally{eh=!1,(ri!==null||si!==null)&&(W0(),z0())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ed=!1;if(Bn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ed=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ed=!1}function CI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Eo=!1,Gl=null,Kl=!1,td=null,RI={onError:function(t){Eo=!0,Gl=t}};function bI(t,e,n,r,s,i,o,l,u){Eo=!1,Gl=null,CI.apply(RI,arguments)}function PI(t,e,n,r,s,i,o,l,u){if(bI.apply(this,arguments),Eo){if(Eo){var c=Gl;Eo=!1,Gl=null}else throw Error(j(198));Kl||(Kl=!0,td=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cg(t){if(ks(t)!==t)throw Error(j(188))}function NI(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return cg(s),t;if(i===r)return cg(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function K0(t){return t=NI(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=zt.unstable_scheduleCallback,hg=zt.unstable_cancelCallback,OI=zt.unstable_shouldYield,DI=zt.unstable_requestPaint,$e=zt.unstable_now,LI=zt.unstable_getCurrentPriorityLevel,wf=zt.unstable_ImmediatePriority,J0=zt.unstable_UserBlockingPriority,Ql=zt.unstable_NormalPriority,VI=zt.unstable_LowPriority,X0=zt.unstable_IdlePriority,Bu=null,Tn=null;function MI(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:UI,jI=Math.log,FI=Math.LN2;function UI(t){return t>>>=0,t===0?32:31-(jI(t)/FI|0)|0}var tl=64,nl=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ho(l):(i&=o,i!==0&&(r=ho(i)))}else o=n&~s,o!==0?r=ho(o):i!==0&&(r=ho(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),s=1<<n,r|=t[n],e&=~s;return r}function BI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-un(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=BI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z0(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function zI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-un(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tv,Tf,nv,rv,sv,rd=!1,rl=[],vr=null,wr=null,Er=null,Uo=new Map,Bo=new Map,ur=[],HI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function eo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=pa(e),e!==null&&Tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function WI(t,e,n,r,s){switch(e){case"focusin":return vr=eo(vr,t,e,n,r,s),!0;case"dragenter":return wr=eo(wr,t,e,n,r,s),!0;case"mouseover":return Er=eo(Er,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Uo.set(i,eo(Uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Bo.set(i,eo(Bo.get(i)||null,t,e,n,r,s)),!0}return!1}function iv(t){var e=ss(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=G0(n),e!==null){t.blockedOn=e,sv(t.priority,function(){nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xh=r,n.target.dispatchEvent(r),Xh=null}else return e=pa(n),e!==null&&Tf(e),t.blockedOn=n,!1;e.shift()}return!0}function fg(t,e,n){xl(t)&&n.delete(e)}function qI(){rd=!1,vr!==null&&xl(vr)&&(vr=null),wr!==null&&xl(wr)&&(wr=null),Er!==null&&xl(Er)&&(Er=null),Uo.forEach(fg),Bo.forEach(fg)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,qI)))}function $o(t){function e(s){return to(s,t)}if(0<rl.length){to(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&to(vr,t),wr!==null&&to(wr,t),Er!==null&&to(Er,t),Uo.forEach(e),Bo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&ur.shift()}var ii=Jn.ReactCurrentBatchConfig,Jl=!0;function GI(t,e,n,r){var s=we,i=ii.transition;ii.transition=null;try{we=1,If(t,e,n,r)}finally{we=s,ii.transition=i}}function KI(t,e,n,r){var s=we,i=ii.transition;ii.transition=null;try{we=4,If(t,e,n,r)}finally{we=s,ii.transition=i}}function If(t,e,n,r){if(Jl){var s=sd(t,e,n,r);if(s===null)hh(t,e,r,Xl,n),dg(t,r);else if(WI(s,t,e,n,r))r.stopPropagation();else if(dg(t,r),e&4&&-1<HI.indexOf(t)){for(;s!==null;){var i=pa(s);if(i!==null&&tv(i),i=sd(t,e,n,r),i===null&&hh(t,e,r,Xl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else hh(t,e,r,null,n)}}var Xl=null;function sd(t,e,n,r){if(Xl=null,t=vf(r),t=ss(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function ov(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LI()){case wf:return 1;case J0:return 4;case Ql:case VI:return 16;case X0:return 536870912;default:return 16}default:return 16}}var gr=null,xf=null,kl=null;function av(){if(kl)return kl;var t,e=xf,n=e.length,r,s="value"in gr?gr.value:gr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return kl=s.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function pg(){return!1}function Wt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sl:pg,this.isPropagationStopped=pg,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=Wt(Ai),fa=De({},Ai,{view:0,detail:0}),QI=Wt(fa),nh,rh,no,$u=De({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(nh=t.screenX-no.screenX,rh=t.screenY-no.screenY):rh=nh=0,no=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),mg=Wt($u),YI=De({},$u,{dataTransfer:0}),JI=Wt(YI),XI=De({},fa,{relatedTarget:0}),sh=Wt(XI),ZI=De({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=Wt(ZI),tx=De({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=Wt(tx),rx=De({},Ai,{data:0}),gg=Wt(rx),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ox[t])?!!e[t]:!1}function Sf(){return ax}var lx=De({},fa,{key:function(t){if(t.key){var e=sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=Wt(lx),cx=De({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=Wt(cx),hx=De({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),dx=Wt(hx),fx=De({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Wt(fx),mx=De({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Wt(mx),yx=[9,13,27,32],Af=Bn&&"CompositionEvent"in window,To=null;Bn&&"documentMode"in document&&(To=document.documentMode);var _x=Bn&&"TextEvent"in window&&!To,lv=Bn&&(!Af||To&&8<To&&11>=To),_g=" ",vg=!1;function uv(t,e){switch(t){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function vx(t,e){switch(t){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(vg=!0,_g);case"textInput":return t=e.data,t===_g&&vg?null:t;default:return null}}function wx(t,e){if(Ws)return t==="compositionend"||!Af&&uv(t,e)?(t=av(),kl=xf=gr=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lv&&e.locale!=="ko"?null:e.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ex[t.type]:e==="textarea"}function hv(t,e,n,r){$0(r),e=Zl(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,zo=null;function Tx(t){Tv(t,0)}function zu(t){var e=Ks(t);if(L0(e))return t}function Ix(t,e){if(t==="change")return e}var dv=!1;if(Bn){var ih;if(Bn){var oh="oninput"in document;if(!oh){var Eg=document.createElement("div");Eg.setAttribute("oninput","return;"),oh=typeof Eg.oninput=="function"}ih=oh}else ih=!1;dv=ih&&(!document.documentMode||9<document.documentMode)}function Tg(){Io&&(Io.detachEvent("onpropertychange",fv),zo=Io=null)}function fv(t){if(t.propertyName==="value"&&zu(zo)){var e=[];hv(e,zo,t,vf(t)),q0(Tx,e)}}function xx(t,e,n){t==="focusin"?(Tg(),Io=e,zo=n,Io.attachEvent("onpropertychange",fv)):t==="focusout"&&Tg()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(zo)}function Sx(t,e){if(t==="click")return zu(e)}function Ax(t,e){if(t==="input"||t==="change")return zu(e)}function Cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:Cx;function Ho(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uh.call(e,s)||!hn(t[s],e[s]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=Ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mv(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rx(t){var e=mv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pv(n.ownerDocument.documentElement,n)){if(r!==null&&Cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=xg(n,i);var o=xg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=Bn&&"documentMode"in document&&11>=document.documentMode,qs=null,id=null,xo=null,od=!1;function kg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||qs==null||qs!==ql(r)||(r=qs,"selectionStart"in r&&Cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Ho(xo,r)||(xo=r,r=Zl(id,"onSelect"),0<r.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gs={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},ah={},gv={};Bn&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Hu(t){if(ah[t])return ah[t];if(!Gs[t])return t;var e=Gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gv)return ah[t]=e[n];return t}var yv=Hu("animationend"),_v=Hu("animationiteration"),vv=Hu("animationstart"),wv=Hu("transitionend"),Ev=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Ev.set(t,e),xs(e,[t])}for(var lh=0;lh<Sg.length;lh++){var uh=Sg[lh],Px=uh.toLowerCase(),Nx=uh[0].toUpperCase()+uh.slice(1);zr(Px,"on"+Nx)}zr(yv,"onAnimationEnd");zr(_v,"onAnimationIteration");zr(vv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(wv,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PI(r,e,void 0,t),t.currentTarget=null}function Tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Ag(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Ag(s,l,c),i=u}}}if(Kl)throw t=td,Kl=!1,td=null,t}function Ae(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var r=t+"__bubble";n.has(r)||(Iv(e,t,2,!1),n.add(r))}function ch(t,e,n){var r=0;e&&(r|=4),Iv(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[ol]){t[ol]=!0,b0.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,ch("selectionchange",!1,e))}}function Iv(t,e,n,r){switch(ov(e)){case 1:var s=GI;break;case 4:s=KI;break;default:s=If}n=s.bind(null,e,n,t),s=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function hh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ss(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}q0(function(){var c=i,p=vf(n),m=[];e:{var g=Ev.get(t);if(g!==void 0){var v=kf,A=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":v=ux;break;case"focusin":A="focus",v=sh;break;case"focusout":A="blur",v=sh;break;case"beforeblur":case"afterblur":v=sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=JI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dx;break;case yv:case _v:case vv:v=ex;break;case wv:v=px;break;case"scroll":v=QI;break;case"wheel":v=gx;break;case"copy":case"cut":case"paste":v=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yg}var R=(e&4)!==0,O=!R&&t==="scroll",k=R?g!==null?g+"Capture":null:g;R=[];for(var w=c,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,k!==null&&(N=Fo(w,k),N!=null&&R.push(qo(w,N,S)))),O)break;w=w.return}0<R.length&&(g=new v(g,A,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Xh&&(A=n.relatedTarget||n.fromElement)&&(ss(A)||A[$n]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?ss(A):null,A!==null&&(O=ks(A),A!==O||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(R=mg,N="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=yg,N="onPointerLeave",k="onPointerEnter",w="pointer"),O=v==null?g:Ks(v),S=A==null?g:Ks(A),g=new R(N,w+"leave",v,n,p),g.target=O,g.relatedTarget=S,N=null,ss(p)===c&&(R=new R(k,w+"enter",A,n,p),R.target=S,R.relatedTarget=O,N=R),O=N,v&&A)t:{for(R=v,k=A,w=0,S=R;S;S=js(S))w++;for(S=0,N=k;N;N=js(N))S++;for(;0<w-S;)R=js(R),w--;for(;0<S-w;)k=js(k),S--;for(;w--;){if(R===k||k!==null&&R===k.alternate)break t;R=js(R),k=js(k)}R=null}else R=null;v!==null&&Cg(m,g,v,R,!1),A!==null&&O!==null&&Cg(m,O,A,R,!0)}}e:{if(g=c?Ks(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var F=Ix;else if(wg(g))if(dv)F=Ax;else{F=kx;var U=xx}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Sx);if(F&&(F=F(t,c))){hv(m,F,n,p);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Gh(g,"number",g.value)}switch(U=c?Ks(c):window,t){case"focusin":(wg(U)||U.contentEditable==="true")&&(qs=U,id=c,xo=null);break;case"focusout":xo=id=qs=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,kg(m,n,p);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":kg(m,n,p)}var T;if(Af)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?uv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(lv&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(T=av()):(gr=p,xf="value"in gr?gr.value:gr.textContent,Ws=!0)),U=Zl(c,_),0<U.length&&(_=new gg(_,t,null,n,p),m.push({event:_,listeners:U}),T?_.data=T:(T=cv(n),T!==null&&(_.data=T)))),(T=_x?vx(t,n):wx(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(p=new gg("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=T))}Tv(m,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fo(t,n),i!=null&&r.unshift(qo(t,i,s)),i=Fo(t,e),i!=null&&r.push(qo(t,i,s))),t=t.return}return r}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Fo(n,i),u!=null&&o.unshift(qo(n,u,l))):s||(u=Fo(n,i),u!=null&&o.push(qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Lx,"")}function al(t,e,n){if(e=Rg(e),Rg(t)!==e&&n)throw Error(j(425))}function eu(){}var ad=null,ld=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(jx)}:cd;function jx(t){setTimeout(function(){throw t})}function dh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),$o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);$o(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ci,Go="__reactProps$"+Ci,$n="__reactContainer$"+Ci,hd="__reactEvents$"+Ci,Fx="__reactListeners$"+Ci,Ux="__reactHandles$"+Ci;function ss(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pg(t);t!==null;){if(n=t[wn])return n;t=Pg(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[wn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Wu(t){return t[Go]||null}var dd=[],Qs=-1;function Hr(t){return{current:t}}function Re(t){0>Qs||(t.current=dd[Qs],dd[Qs]=null,Qs--)}function xe(t,e){Qs++,dd[Qs]=t.current,t.current=e}var Dr={},gt=Hr(Dr),bt=Hr(!1),ps=Dr;function fi(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Pt(t){return t=t.childContextTypes,t!=null}function tu(){Re(bt),Re(gt)}function Ng(t,e,n){if(gt.current!==Dr)throw Error(j(168));xe(gt,e),xe(bt,n)}function xv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,xI(t)||"Unknown",s));return De({},n,r)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ps=gt.current,xe(gt,t),xe(bt,bt.current),!0}function Og(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=xv(t,e,ps),r.__reactInternalMemoizedMergedChildContext=t,Re(bt),Re(gt),xe(gt,t)):Re(bt),xe(bt,n)}var Dn=null,qu=!1,fh=!1;function kv(t){Dn===null?Dn=[t]:Dn.push(t)}function Bx(t){qu=!0,kv(t)}function Wr(){if(!fh&&Dn!==null){fh=!0;var t=0,e=we;try{var n=Dn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,qu=!1}catch(s){throw Dn!==null&&(Dn=Dn.slice(t+1)),Y0(wf,Wr),s}finally{we=e,fh=!1}}return null}var Ys=[],Js=0,ru=null,su=0,Gt=[],Kt=0,ms=null,Ln=1,Vn="";function ts(t,e){Ys[Js++]=su,Ys[Js++]=ru,ru=t,su=e}function Sv(t,e,n){Gt[Kt++]=Ln,Gt[Kt++]=Vn,Gt[Kt++]=ms,ms=t;var r=Ln;t=Vn;var s=32-un(r)-1;r&=~(1<<s),n+=1;var i=32-un(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ln=1<<32-un(e)+s|n<<s|r,Vn=i+t}else Ln=1<<i|n<<s|r,Vn=t}function Rf(t){t.return!==null&&(ts(t,1),Sv(t,1,0))}function bf(t){for(;t===ru;)ru=Ys[--Js],Ys[Js]=null,su=Ys[--Js],Ys[Js]=null;for(;t===ms;)ms=Gt[--Kt],Gt[Kt]=null,Vn=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null}var $t=null,Ft=null,be=!1,an=null;function Av(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ft=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Ln,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ft=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(be){var e=Ft;if(e){var n=e;if(!Dg(t,e)){if(fd(t))throw Error(j(418));e=Tr(n.nextSibling);var r=$t;e&&Dg(t,e)?Av(r,n):(t.flags=t.flags&-4097|2,be=!1,$t=t)}}else{if(fd(t))throw Error(j(418));t.flags=t.flags&-4097|2,be=!1,$t=t}}}function Lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function ll(t){if(t!==$t)return!1;if(!be)return Lg(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=Ft)){if(fd(t))throw Cv(),Error(j(418));for(;e;)Av(t,e),e=Tr(e.nextSibling)}if(Lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=$t?Tr(t.stateNode.nextSibling):null;return!0}function Cv(){for(var t=Ft;t;)t=Tr(t.nextSibling)}function pi(){Ft=$t=null,be=!1}function Pf(t){an===null?an=[t]:an.push(t)}var $x=Jn.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vg(t){var e=t._init;return e(t._payload)}function Rv(t){function e(k,w){if(t){var S=k.deletions;S===null?(k.deletions=[w],k.flags|=16):S.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)e(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function s(k,w){return k=Sr(k,w),k.index=0,k.sibling=null,k}function i(k,w,S){return k.index=S,t?(S=k.alternate,S!==null?(S=S.index,S<w?(k.flags|=2,w):S):(k.flags|=2,w)):(k.flags|=1048576,w)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,w,S,N){return w===null||w.tag!==6?(w=wh(S,k.mode,N),w.return=k,w):(w=s(w,S),w.return=k,w)}function u(k,w,S,N){var F=S.type;return F===Hs?p(k,w,S.props.children,N,S.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ir&&Vg(F)===w.type)?(N=s(w,S.props),N.ref=ro(k,w,S),N.return=k,N):(N=Ol(S.type,S.key,S.props,null,k.mode,N),N.ref=ro(k,w,S),N.return=k,N)}function c(k,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Eh(S,k.mode,N),w.return=k,w):(w=s(w,S.children||[]),w.return=k,w)}function p(k,w,S,N,F){return w===null||w.tag!==7?(w=cs(S,k.mode,N,F),w.return=k,w):(w=s(w,S),w.return=k,w)}function m(k,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=wh(""+w,k.mode,S),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xa:return S=Ol(w.type,w.key,w.props,null,k.mode,S),S.ref=ro(k,null,w),S.return=k,S;case zs:return w=Eh(w,k.mode,S),w.return=k,w;case ir:var N=w._init;return m(k,N(w._payload),S)}if(co(w)||Xi(w))return w=cs(w,k.mode,S,null),w.return=k,w;ul(k,w)}return null}function g(k,w,S,N){var F=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(k,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xa:return S.key===F?u(k,w,S,N):null;case zs:return S.key===F?c(k,w,S,N):null;case ir:return F=S._init,g(k,w,F(S._payload),N)}if(co(S)||Xi(S))return F!==null?null:p(k,w,S,N,null);ul(k,S)}return null}function v(k,w,S,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return k=k.get(S)||null,l(w,k,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Xa:return k=k.get(N.key===null?S:N.key)||null,u(w,k,N,F);case zs:return k=k.get(N.key===null?S:N.key)||null,c(w,k,N,F);case ir:var U=N._init;return v(k,w,S,U(N._payload),F)}if(co(N)||Xi(N))return k=k.get(S)||null,p(w,k,N,F,null);ul(w,N)}return null}function A(k,w,S,N){for(var F=null,U=null,T=w,_=w=0,I=null;T!==null&&_<S.length;_++){T.index>_?(I=T,T=null):I=T.sibling;var E=g(k,T,S[_],N);if(E===null){T===null&&(T=I);break}t&&T&&E.alternate===null&&e(k,T),w=i(E,w,_),U===null?F=E:U.sibling=E,U=E,T=I}if(_===S.length)return n(k,T),be&&ts(k,_),F;if(T===null){for(;_<S.length;_++)T=m(k,S[_],N),T!==null&&(w=i(T,w,_),U===null?F=T:U.sibling=T,U=T);return be&&ts(k,_),F}for(T=r(k,T);_<S.length;_++)I=v(T,k,_,S[_],N),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?_:I.key),w=i(I,w,_),U===null?F=I:U.sibling=I,U=I);return t&&T.forEach(function(C){return e(k,C)}),be&&ts(k,_),F}function R(k,w,S,N){var F=Xi(S);if(typeof F!="function")throw Error(j(150));if(S=F.call(S),S==null)throw Error(j(151));for(var U=F=null,T=w,_=w=0,I=null,E=S.next();T!==null&&!E.done;_++,E=S.next()){T.index>_?(I=T,T=null):I=T.sibling;var C=g(k,T,E.value,N);if(C===null){T===null&&(T=I);break}t&&T&&C.alternate===null&&e(k,T),w=i(C,w,_),U===null?F=C:U.sibling=C,U=C,T=I}if(E.done)return n(k,T),be&&ts(k,_),F;if(T===null){for(;!E.done;_++,E=S.next())E=m(k,E.value,N),E!==null&&(w=i(E,w,_),U===null?F=E:U.sibling=E,U=E);return be&&ts(k,_),F}for(T=r(k,T);!E.done;_++,E=S.next())E=v(T,k,_,E.value,N),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?_:E.key),w=i(E,w,_),U===null?F=E:U.sibling=E,U=E);return t&&T.forEach(function(b){return e(k,b)}),be&&ts(k,_),F}function O(k,w,S,N){if(typeof S=="object"&&S!==null&&S.type===Hs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Xa:e:{for(var F=S.key,U=w;U!==null;){if(U.key===F){if(F=S.type,F===Hs){if(U.tag===7){n(k,U.sibling),w=s(U,S.props.children),w.return=k,k=w;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ir&&Vg(F)===U.type){n(k,U.sibling),w=s(U,S.props),w.ref=ro(k,U,S),w.return=k,k=w;break e}n(k,U);break}else e(k,U);U=U.sibling}S.type===Hs?(w=cs(S.props.children,k.mode,N,S.key),w.return=k,k=w):(N=Ol(S.type,S.key,S.props,null,k.mode,N),N.ref=ro(k,w,S),N.return=k,k=N)}return o(k);case zs:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(k,w.sibling),w=s(w,S.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else e(k,w);w=w.sibling}w=Eh(S,k.mode,N),w.return=k,k=w}return o(k);case ir:return U=S._init,O(k,w,U(S._payload),N)}if(co(S))return A(k,w,S,N);if(Xi(S))return R(k,w,S,N);ul(k,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(k,w.sibling),w=s(w,S),w.return=k,k=w):(n(k,w),w=wh(S,k.mode,N),w.return=k,k=w),o(k)):n(k,w)}return O}var mi=Rv(!0),bv=Rv(!1),iu=Hr(null),ou=null,Xs=null,Nf=null;function Of(){Nf=Xs=ou=null}function Df(t){var e=iu.current;Re(iu),t._currentValue=e}function md(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oi(t,e){ou=t,Nf=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(ou===null)throw Error(j(308));Xs=t,ou.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var is=null;function Lf(t){is===null?is=[t]:is.push(t)}function Pv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Lf(e)):(n.next=s.next,s.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,zn(t,n)}return s=r.interleaved,s===null?(e.next=e,Lf(r)):(e.next=s.next,s.next=e),r.interleaved=e,zn(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}function Mg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var s=t.updateQueue;or=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,R=l;switch(g=e,v=n,R.tag){case 1:if(A=R.payload,typeof A=="function"){m=A.call(v,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,g=typeof A=="function"?A.call(v,m,g):A,g==null)break e;m=De({},m,g);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=v,u=m):p=p.next=v,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var ma={},In=Hr(ma),Ko=Hr(ma),Qo=Hr(ma);function os(t){if(t===ma)throw Error(j(174));return t}function Mf(t,e){switch(xe(Qo,e),xe(Ko,t),xe(In,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qh(e,t)}Re(In),xe(In,e)}function gi(){Re(In),Re(Ko),Re(Qo)}function Ov(t){os(Qo.current);var e=os(In.current),n=Qh(e,t.type);e!==n&&(xe(Ko,t),xe(In,n))}function jf(t){Ko.current===t&&(Re(In),Re(Ko))}var Ne=Hr(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function Ff(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var Cl=Jn.ReactCurrentDispatcher,mh=Jn.ReactCurrentBatchConfig,gs=0,Oe=null,Ge=null,Xe=null,uu=!1,ko=!1,Yo=0,zx=0;function ct(){throw Error(j(321))}function Uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Bf(t,e,n,r,s,i){if(gs=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?Gx:Kx,t=n(r,s),ko){i=0;do{if(ko=!1,Yo=0,25<=i)throw Error(j(301));i+=1,Xe=Ge=null,e.updateQueue=null,Cl.current=Qx,t=n(r,s)}while(ko)}if(Cl.current=cu,e=Ge!==null&&Ge.next!==null,gs=0,Xe=Ge=Oe=null,uu=!1,e)throw Error(j(300));return t}function $f(){var t=Yo!==0;return Yo=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Oe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function en(){if(Ge===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Oe.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error(j(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Oe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Jo(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((gs&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Oe.lanes|=p,ys|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yh(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);hn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Dv(){}function Lv(t,e){var n=Oe,r=en(),s=e(),i=!hn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,zf(jv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Mv.bind(null,n,r,s,e),void 0,null),Ze===null)throw Error(j(349));gs&30||Vv(n,e,s)}return s}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,r){e.value=n,e.getSnapshot=r,Fv(e)&&Uv(t)}function jv(t,e,n){return n(function(){Fv(e)&&Uv(t)})}function Fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function Uv(t){var e=zn(t,1);e!==null&&cn(e,t,1,-1)}function Fg(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,Oe,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Bv(){return en().memoizedState}function Rl(t,e,n,r){var s=_n();Oe.flags|=t,s.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var s=en();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&Uf(r,o.deps)){s.memoizedState=Xo(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=Xo(1|e,n,i,r)}function Ug(t,e){return Rl(8390656,8,t,e)}function zf(t,e){return Gu(2048,8,t,e)}function $v(t,e){return Gu(4,2,t,e)}function zv(t,e){return Gu(4,4,t,e)}function Hv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wv(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,Hv.bind(null,e,t),n)}function Hf(){}function qv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return gs&21?(hn(n,e)||(n=Z0(),Oe.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Hx(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=mh.transition;mh.transition={};try{t(!1),e()}finally{we=n,mh.transition=r}}function Qv(){return en().memoizedState}function Wx(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(t))Jv(e,n);else if(n=Pv(t,e,n,r),n!==null){var s=It();cn(n,t,r,s),Xv(n,e,r)}}function qx(t,e,n){var r=kr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(t))Jv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(s.next=s,Lf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Pv(t,e,s,r),n!==null&&(s=It(),cn(n,t,r,s),Xv(n,e,r))}}function Yv(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function Jv(t,e){ko=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}var cu={readContext:Zt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Gx={readContext:Zt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Hv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wx.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Fg,useDebugValue:Hf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Fg(!1),e=t[0];return t=Hx.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=_n();if(be){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ze===null)throw Error(j(349));gs&30||Vv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ug(jv.bind(null,r,i,t),[t]),r.flags|=2048,Xo(9,Mv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=_n(),e=Ze.identifierPrefix;if(be){var n=Vn,r=Ln;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kx={readContext:Zt,useCallback:qv,useContext:Zt,useEffect:zf,useImperativeHandle:Wv,useInsertionEffect:$v,useLayoutEffect:zv,useMemo:Gv,useReducer:gh,useRef:Bv,useState:function(){return gh(Jo)},useDebugValue:Hf,useDeferredValue:function(t){var e=en();return Kv(e,Ge.memoizedState,t)},useTransition:function(){var t=gh(Jo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Lv,useId:Qv,unstable_isNewReconciler:!1},Qx={readContext:Zt,useCallback:qv,useContext:Zt,useEffect:zf,useImperativeHandle:Wv,useInsertionEffect:$v,useLayoutEffect:zv,useMemo:Gv,useReducer:yh,useRef:Bv,useState:function(){return yh(Jo)},useDebugValue:Hf,useDeferredValue:function(t){var e=en();return Ge===null?e.memoizedState=t:Kv(e,Ge.memoizedState,t)},useTransition:function(){var t=yh(Jo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Lv,useId:Qv,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=kr(t),i=Fn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ir(t,i,s),e!==null&&(cn(e,t,s,r),Al(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=kr(t),i=Fn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ir(t,i,s),e!==null&&(cn(e,t,s,r),Al(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=kr(t),s=Fn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ir(t,s,r),e!==null&&(cn(e,t,r,n),Al(e,t,r))}};function Bg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,r)||!Ho(s,i):!0}function Zv(t,e,n){var r=!1,s=Dr,i=e.contextType;return typeof i=="object"&&i!==null?i=Zt(i):(s=Pt(e)?ps:gt.current,r=e.contextTypes,i=(r=r!=null)?fi(t,s):Dr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function $g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Vf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Zt(i):(i=Pt(e)?ps:gt.current,s.context=fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ku.enqueueReplaceState(s,s.state,null),au(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e){try{var n="",r=e;do n+=II(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function _h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function ew(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,Cd=r),_d(t,e)},n}function tw(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){_d(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=ck.bind(null,t,e,n),e.then(t,t))}function Hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var Jx=Jn.ReactCurrentOwner,Rt=!1;function Tt(t,e,n,r){e.child=t===null?bv(e,null,n,r):mi(e,t.child,n,r)}function qg(t,e,n,r,s){n=n.render;var i=e.ref;return oi(e,s),r=Bf(t,e,n,r,i,s),n=$f(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Hn(t,e,s)):(be&&n&&Rf(e),e.flags|=1,Tt(t,e,r,s),e.child)}function Gg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Xf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,nw(t,e,i,r,s)):(t=Ol(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&t.ref===e.ref)return Hn(t,e,s)}return e.flags|=1,t=Sr(i,r),t.ref=e.ref,t.return=e,e.child=t}function nw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ho(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Hn(t,e,s)}return vd(t,e,n,r,s)}function rw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(ei,Mt),Mt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(ei,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(ei,Mt),Mt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(ei,Mt),Mt|=r;return Tt(t,e,s,n),e.child}function sw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,r,s){var i=Pt(n)?ps:gt.current;return i=fi(e,i),oi(e,s),n=Bf(t,e,n,r,i,s),r=$f(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Hn(t,e,s)):(be&&r&&Rf(e),e.flags|=1,Tt(t,e,n,s),e.child)}function Kg(t,e,n,r,s){if(Pt(n)){var i=!0;nu(e)}else i=!1;if(oi(e,s),e.stateNode===null)bl(t,e),Zv(e,n,r),yd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Pt(n)?ps:gt.current,c=fi(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&$g(e,o,r,c),or=!1;var g=e.memoizedState;o.state=g,au(e,r,o,s),u=e.memoizedState,l!==r||g!==u||bt.current||or?(typeof p=="function"&&(gd(e,n,p,r),u=e.memoizedState),(l=or||Bg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Pt(n)?ps:gt.current,u=fi(e,u));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&$g(e,o,r,u),or=!1,g=e.memoizedState,o.state=g,au(e,r,o,s);var A=e.memoizedState;l!==m||g!==A||bt.current||or?(typeof v=="function"&&(gd(e,n,v,r),A=e.memoizedState),(c=or||Bg(e,n,c,r,g,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return wd(t,e,n,r,i,s)}function wd(t,e,n,r,s,i){sw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Og(e,n,!1),Hn(t,e,i);r=e.stateNode,Jx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mi(e,t.child,null,i),e.child=mi(e,null,l,i)):Tt(t,e,l,i),e.memoizedState=r.state,s&&Og(e,n,!0),e.child}function iw(t){var e=t.stateNode;e.pendingContext?Ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ng(t,e.context,!1),Mf(t,e.containerInfo)}function Qg(t,e,n,r,s){return pi(),Pf(s),e.flags|=256,Tt(t,e,n,r),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function ow(t,e,n){var r=e.pendingProps,s=Ne.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(Ne,s&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ju(o,r,0,null),t=cs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Td(n),e.memoizedState=Ed,t):Wf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Xx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Sr(l,i):(i=cs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ed,r}return i=t.child,t=i.sibling,r=Sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wf(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&Pf(r),mi(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=_h(Error(j(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ju({mode:"visible",children:r.children},s,0,null),i=cs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&mi(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Ed,i);if(!(e.mode&1))return cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=_h(i,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=Ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,zn(t,s),cn(r,t,s,-1))}return Jf(),r=_h(Error(j(421))),cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=hk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ft=Tr(s.nextSibling),$t=e,be=!0,an=null,t!==null&&(Gt[Kt++]=Ln,Gt[Kt++]=Vn,Gt[Kt++]=ms,Ln=t.id,Vn=t.overflow,ms=e),e=Wf(e,r.children),e.flags|=4096,e)}function Yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),md(t.return,e,n)}function vh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function aw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,n,e);else if(t.tag===19)Yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),vh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&lu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}vh(e,!0,n,null,i);break;case"together":vh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zx(t,e,n){switch(e.tag){case 3:iw(e),pi();break;case 5:Ov(e);break;case 1:Pt(e.type)&&nu(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(iu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?ow(t,e,n):(xe(Ne,Ne.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);xe(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,rw(t,e,n)}return Hn(t,e,n)}var lw,Id,uw,cw;lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};uw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,os(In.current);var i=null;switch(n){case"input":s=Wh(t,s),r=Wh(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Kh(t,s),r=Kh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eu)}Yh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ek(t,e,n){var r=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Pt(e.type)&&tu(),ht(e),null;case 3:return r=e.stateNode,gi(),Re(bt),Re(gt),Ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Pd(an),an=null))),Id(t,e),ht(e),null;case 5:jf(e);var s=os(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)uw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ht(e),null}if(t=os(In.current),ll(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[wn]=e,r[Go]=i,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<fo.length;s++)Ae(fo[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":ig(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":ag(r,i),Ae("invalid",r)}Yh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&al(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&al(r.textContent,l,t),s=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Za(r),og(r,i,!0);break;case"textarea":Za(r),lg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=eu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[Go]=r,lw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jh(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),s=r;break;case"iframe":case"object":case"embed":Ae("load",t),s=r;break;case"video":case"audio":for(s=0;s<fo.length;s++)Ae(fo[s],t);s=r;break;case"source":Ae("error",t),s=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),s=r;break;case"details":Ae("toggle",t),s=r;break;case"input":ig(t,r),s=Wh(t,r),Ae("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":ag(t,r),s=Kh(t,r),Ae("invalid",t);break;default:s=r}Yh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?B0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&F0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ae("scroll",t):u!=null&&mf(t,i,u,o))}switch(n){case"input":Za(t),og(t,r,!1);break;case"textarea":Za(t),lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ni(t,!!r.multiple,i,!1):r.defaultValue!=null&&ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=os(Qo.current),os(In.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(i=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ht(e),null;case 13:if(Re(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Ft!==null&&e.mode&1&&!(e.flags&128))Cv(),pi(),e.flags|=98560,i=!1;else if(i=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[wn]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),i=!1}else an!==null&&(Pd(an),an=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Ke===0&&(Ke=3):Jf())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return gi(),Id(t,e),t===null&&Wo(e.stateNode.containerInfo),ht(e),null;case 10:return Df(e.type._context),ht(e),null;case 17:return Pt(e.type)&&tu(),ht(e),null;case 19:if(Re(Ne),i=e.memoizedState,i===null)return ht(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)so(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lu(t),o!==null){for(e.flags|=128,so(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Ne,Ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&$e()>_i&&(e.flags|=128,r=!0,so(i,!1),e.lanes=4194304)}else{if(!r)if(t=lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!be)return ht(e),null}else 2*$e()-i.renderingStartTime>_i&&n!==1073741824&&(e.flags|=128,r=!0,so(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$e(),e.sibling=null,n=Ne.current,xe(Ne,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function tk(t,e){switch(bf(e),e.tag){case 1:return Pt(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),Re(bt),Re(gt),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(Re(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ne),null;case 4:return gi(),null;case 10:return Df(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var hl=!1,pt=!1,nk=typeof WeakSet=="function"?WeakSet:Set,G=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Jg=!1;function rk(t,e){if(ad=Jl,t=mv(),Cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var v;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:t,selectionRange:n},Jl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,O=A.memoizedState,k=e.stateNode,w=k.getSnapshotBeforeUpdate(e.elementType===e.type?R:sn(e.type,R),O);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Me(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return A=Jg,Jg=!1,A}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&xd(e,n,i)}s=s.next}while(s!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hw(t){var e=t.alternate;e!==null&&(t.alternate=null,hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[Go],delete e[hd],delete e[Fx],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dw(t){return t.tag===5||t.tag===3||t.tag===4}function Xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var nt=null,on=!1;function rr(t,e,n){for(n=n.child;n!==null;)fw(t,e,n),n=n.sibling}function fw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:pt||Zs(n,e);case 6:var r=nt,s=on;nt=null,rr(t,e,n),nt=r,on=s,nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?dh(t.parentNode,n):t.nodeType===1&&dh(t,n),$o(t)):dh(nt,n.stateNode));break;case 4:r=nt,s=on,nt=n.stateNode.containerInfo,on=!0,rr(t,e,n),nt=r,on=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&xd(n,e,o),s=s.next}while(s!==r)}rr(t,e,n);break;case 1:if(!pt&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,rr(t,e,n),pt=r):rr(t,e,n);break;default:rr(t,e,n)}}function Zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nk),e.forEach(function(r){var s=dk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,on=!1;break e;case 3:nt=l.stateNode.containerInfo,on=!0;break e;case 4:nt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(nt===null)throw Error(j(160));fw(i,o,s),nt=null,on=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Me(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pw(e,t),e=e.sibling}function pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),gn(t),r&4){try{So(3,t,t.return),Qu(3,t)}catch(R){Me(t,t.return,R)}try{So(5,t,t.return)}catch(R){Me(t,t.return,R)}}break;case 1:rn(e,t),gn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(rn(e,t),gn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var s=t.stateNode;try{jo(s,"")}catch(R){Me(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&V0(s,i),Jh(l,o);var c=Jh(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?B0(s,m):p==="dangerouslySetInnerHTML"?F0(s,m):p==="children"?jo(s,m):mf(s,p,m,c)}switch(l){case"input":qh(s,i);break;case"textarea":M0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ni(s,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?ni(s,!!i.multiple,i.defaultValue,!0):ni(s,!!i.multiple,i.multiple?[]:"",!1))}s[Go]=i}catch(R){Me(t,t.return,R)}}break;case 6:if(rn(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Me(t,t.return,R)}}break;case 3:if(rn(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(R){Me(t,t.return,R)}break;case 4:rn(e,t),gn(t);break;case 13:rn(e,t),gn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Kf=$e())),r&4&&Zg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||p,rn(e,t),pt=c):rn(e,t),gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(G=t,p=t.child;p!==null;){for(m=G=p;G!==null;){switch(g=G,v=g.child,g.tag){case 0:case 11:case 14:case 15:So(4,g,g.return);break;case 1:Zs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(R){Me(r,n,R)}}break;case 5:Zs(g,g.return);break;case 22:if(g.memoizedState!==null){ty(m);continue}}v!==null?(v.return=g,G=v):ty(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=U0("display",o))}catch(R){Me(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(R){Me(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:rn(e,t),gn(t),r&4&&Zg(t);break;case 21:break;default:rn(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(jo(s,""),r.flags&=-33);var i=Xg(t);Ad(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xg(t);Sd(t,l,o);break;default:throw Error(j(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sk(t,e,n){G=t,mw(t)}function mw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||hl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||pt;l=hl;var c=pt;if(hl=o,(pt=u)&&!c)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?ny(s):u!==null?(u.return=o,G=u):ny(s);for(;i!==null;)G=i,mw(i),i=i.sibling;G=s,hl=l,pt=c}ey(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):ey(t)}}function ey(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&jg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&$o(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}pt||e.flags&512&&kd(e)}catch(g){Me(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function ty(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function ny(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Me(e,s,u)}}var i=e.return;try{kd(e)}catch(u){Me(e,i,u)}break;case 5:var o=e.return;try{kd(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var ik=Math.ceil,hu=Jn.ReactCurrentDispatcher,qf=Jn.ReactCurrentOwner,Jt=Jn.ReactCurrentBatchConfig,ge=0,Ze=null,He=null,it=0,Mt=0,ei=Hr(0),Ke=0,Zo=null,ys=0,Yu=0,Gf=0,Ao=null,At=null,Kf=0,_i=1/0,On=null,du=!1,Cd=null,xr=null,dl=!1,yr=null,fu=0,Co=0,Rd=null,Pl=-1,Nl=0;function It(){return ge&6?$e():Pl!==-1?Pl:Pl=$e()}function kr(t){return t.mode&1?ge&2&&it!==0?it&-it:$x.transition!==null?(Nl===0&&(Nl=Z0()),Nl):(t=we,t!==0||(t=window.event,t=t===void 0?16:ov(t.type)),t):1}function cn(t,e,n,r){if(50<Co)throw Co=0,Rd=null,Error(j(185));da(t,n,r),(!(ge&2)||t!==Ze)&&(t===Ze&&(!(ge&2)&&(Yu|=n),Ke===4&&cr(t,it)),Nt(t,r),n===1&&ge===0&&!(e.mode&1)&&(_i=$e()+500,qu&&Wr()))}function Nt(t,e){var n=t.callbackNode;$I(t,e);var r=Yl(t,t===Ze?it:0);if(r===0)n!==null&&hg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hg(n),e===1)t.tag===0?Bx(ry.bind(null,t)):kv(ry.bind(null,t)),Mx(function(){!(ge&6)&&Wr()}),n=null;else{switch(ev(r)){case 1:n=wf;break;case 4:n=J0;break;case 16:n=Ql;break;case 536870912:n=X0;break;default:n=Ql}n=Iw(n,gw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gw(t,e){if(Pl=-1,Nl=0,ge&6)throw Error(j(327));var n=t.callbackNode;if(ai()&&t.callbackNode!==n)return null;var r=Yl(t,t===Ze?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pu(t,r);else{e=r;var s=ge;ge|=2;var i=_w();(Ze!==t||it!==e)&&(On=null,_i=$e()+500,us(t,e));do try{lk();break}catch(l){yw(t,l)}while(!0);Of(),hu.current=i,ge=s,He!==null?e=0:(Ze=null,it=0,e=Ke)}if(e!==0){if(e===2&&(s=nd(t),s!==0&&(r=s,e=bd(t,s))),e===1)throw n=Zo,us(t,0),cr(t,r),Nt(t,$e()),n;if(e===6)cr(t,r);else{if(s=t.current.alternate,!(r&30)&&!ok(s)&&(e=pu(t,r),e===2&&(i=nd(t),i!==0&&(r=i,e=bd(t,i))),e===1))throw n=Zo,us(t,0),cr(t,r),Nt(t,$e()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ns(t,At,On);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=Kf+500-$e(),10<e)){if(Yl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=cd(ns.bind(null,t,At,On),e);break}ns(t,At,On);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-un(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){t.timeoutHandle=cd(ns.bind(null,t,At,On),r);break}ns(t,At,On);break;case 5:ns(t,At,On);break;default:throw Error(j(329))}}}return Nt(t,$e()),t.callbackNode===n?gw.bind(null,t):null}function bd(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=pu(t,e),t!==2&&(e=At,At=n,e!==null&&Pd(e)),t}function Pd(t){At===null?At=t:At.push.apply(At,t)}function ok(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!hn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Gf,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function ry(t){if(ge&6)throw Error(j(327));ai();var e=Yl(t,0);if(!(e&1))return Nt(t,$e()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var r=nd(t);r!==0&&(e=r,n=bd(t,r))}if(n===1)throw n=Zo,us(t,0),cr(t,e),Nt(t,$e()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ns(t,At,On),Nt(t,$e()),null}function Qf(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(_i=$e()+500,qu&&Wr())}}function _s(t){yr!==null&&yr.tag===0&&!(ge&6)&&ai();var e=ge;ge|=1;var n=Jt.transition,r=we;try{if(Jt.transition=null,we=1,t)return t()}finally{we=r,Jt.transition=n,ge=e,!(ge&6)&&Wr()}}function Yf(){Mt=ei.current,Re(ei)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vx(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tu();break;case 3:gi(),Re(bt),Re(gt),Ff();break;case 5:jf(r);break;case 4:gi();break;case 13:Re(Ne);break;case 19:Re(Ne);break;case 10:Df(r.type._context);break;case 22:case 23:Yf()}n=n.return}if(Ze=t,He=t=Sr(t.current,null),it=Mt=e,Ke=0,Zo=null,Gf=Yu=ys=0,At=Ao=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}is=null}return t}function yw(t,e){do{var n=He;try{if(Of(),Cl.current=cu,uu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}uu=!1}if(gs=0,Xe=Ge=Oe=null,ko=!1,Yo=0,qf.current=null,n===null||n.return===null){Ke=1,Zo=e,He=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=it,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Hg(o);if(v!==null){v.flags&=-257,Wg(v,o,l,i,e),v.mode&1&&zg(i,c,e),e=v,u=c;var A=e.updateQueue;if(A===null){var R=new Set;R.add(u),e.updateQueue=R}else A.add(u);break e}else{if(!(e&1)){zg(i,c,e),Jf();break e}u=Error(j(426))}}else if(be&&l.mode&1){var O=Hg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Wg(O,o,l,i,e),Pf(yi(u,l));break e}}i=u=yi(u,l),Ke!==4&&(Ke=2),Ao===null?Ao=[i]:Ao.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var k=ew(i,u,e);Mg(i,k);break e;case 1:l=u;var w=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=tw(i,l,e);Mg(i,N);break e}}i=i.return}while(i!==null)}ww(n)}catch(F){e=F,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function _w(){var t=hu.current;return hu.current=cu,t===null?cu:t}function Jf(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(ys&268435455)&&!(Yu&268435455)||cr(Ze,it)}function pu(t,e){var n=ge;ge|=2;var r=_w();(Ze!==t||it!==e)&&(On=null,us(t,e));do try{ak();break}catch(s){yw(t,s)}while(!0);if(Of(),ge=n,hu.current=r,He!==null)throw Error(j(261));return Ze=null,it=0,Ke}function ak(){for(;He!==null;)vw(He)}function lk(){for(;He!==null&&!OI();)vw(He)}function vw(t){var e=Tw(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?ww(t):He=e,qf.current=null}function ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tk(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,He=null;return}}else if(n=ek(n,e,Mt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ke===0&&(Ke=5)}function ns(t,e,n){var r=we,s=Jt.transition;try{Jt.transition=null,we=1,uk(t,e,n,r)}finally{Jt.transition=s,we=r}return null}function uk(t,e,n,r){do ai();while(yr!==null);if(ge&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(zI(t,i),t===Ze&&(He=Ze=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Iw(Ql,function(){return ai(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Jt.transition,Jt.transition=null;var o=we;we=1;var l=ge;ge|=4,qf.current=null,rk(t,n),pw(n,t),Rx(ld),Jl=!!ad,ld=ad=null,t.current=n,sk(n),DI(),ge=l,we=o,Jt.transition=i}else t.current=n;if(dl&&(dl=!1,yr=t,fu=s),i=t.pendingLanes,i===0&&(xr=null),MI(n.stateNode),Nt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(du)throw du=!1,t=Cd,Cd=null,t;return fu&1&&t.tag!==0&&ai(),i=t.pendingLanes,i&1?t===Rd?Co++:(Co=0,Rd=t):Co=0,Wr(),null}function ai(){if(yr!==null){var t=ev(fu),e=Jt.transition,n=we;try{if(Jt.transition=null,we=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,fu=0,ge&6)throw Error(j(331));var s=ge;for(ge|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var p=G;switch(p.tag){case 0:case 11:case 15:So(8,p,i)}var m=p.child;if(m!==null)m.return=p,G=m;else for(;G!==null;){p=G;var g=p.sibling,v=p.return;if(hw(p),p===c){G=null;break}if(g!==null){g.return=v,G=g;break}G=v}}}var A=i.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var O=R.sibling;R.sibling=null,R=O}while(R!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,G=k;break e}G=i.return}}var w=t.current;for(G=w;G!==null;){o=G;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,G=S;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qu(9,l)}}catch(F){Me(l,l.return,F)}if(l===o){G=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,G=N;break e}G=l.return}}if(ge=s,Wr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{we=n,Jt.transition=e}}return!1}function sy(t,e,n){e=yi(n,e),e=ew(t,e,1),t=Ir(t,e,1),e=It(),t!==null&&(da(t,1,e),Nt(t,e))}function Me(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=yi(n,t),t=tw(e,t,1),e=Ir(e,t,1),t=It(),e!==null&&(da(e,1,t),Nt(e,t));break}}e=e.return}}function ck(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(it&n)===n&&(Ke===4||Ke===3&&(it&130023424)===it&&500>$e()-Kf?us(t,0):Gf|=n),Nt(t,e)}function Ew(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=It();t=zn(t,e),t!==null&&(da(t,e,n),Nt(t,n))}function hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ew(t,n)}function dk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Ew(t,n)}var Tw;Tw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Zx(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,be&&e.flags&1048576&&Sv(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var s=fi(e,gt.current);oi(e,n),s=Bf(null,e,r,t,s,n);var i=$f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(i=!0,nu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Vf(e),s.updater=Ku,e.stateNode=s,s._reactInternals=e,yd(e,r,t,n),e=wd(null,e,r,!0,i,n)):(e.tag=0,be&&i&&Rf(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=pk(r),t=sn(r,t),s){case 0:e=vd(null,e,r,t,n);break e;case 1:e=Kg(null,e,r,t,n);break e;case 11:e=qg(null,e,r,t,n);break e;case 14:e=Gg(null,e,r,sn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),vd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Kg(t,e,r,s,n);case 3:e:{if(iw(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Nv(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=yi(Error(j(423)),e),e=Qg(t,e,r,n,s);break e}else if(r!==s){s=yi(Error(j(424)),e),e=Qg(t,e,r,n,s);break e}else for(Ft=Tr(e.stateNode.containerInfo.firstChild),$t=e,be=!0,an=null,n=bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===s){e=Hn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Ov(e),t===null&&pd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ud(r,s)?o=null:i!==null&&ud(r,i)&&(e.flags|=32),sw(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return ow(t,e,n);case 4:return Mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),qg(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(iu,r._currentValue),r._currentValue=o,i!==null)if(hn(i.value,o)){if(i.children===s.children&&!bt.current){e=Hn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),md(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),md(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,oi(e,n),s=Zt(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=sn(r,e.pendingProps),s=sn(r.type,s),Gg(t,e,r,s,n);case 15:return nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),bl(t,e),e.tag=1,Pt(r)?(t=!0,nu(e)):t=!1,oi(e,n),Zv(e,r,s),yd(e,r,s,n),wd(null,e,r,!0,t,n);case 19:return aw(t,e,n);case 22:return rw(t,e,n)}throw Error(j(156,e.tag))};function Iw(t,e){return Y0(t,e)}function fk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new fk(t,e,n,r)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pk(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yf)return 11;if(t===_f)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return cs(n.children,s,i,e);case gf:o=8,s|=8;break;case Bh:return t=Yt(12,n,e,s|2),t.elementType=Bh,t.lanes=i,t;case $h:return t=Yt(13,n,e,s),t.elementType=$h,t.lanes=i,t;case zh:return t=Yt(19,n,e,s),t.elementType=zh,t.lanes=i,t;case O0:return Ju(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P0:o=10;break e;case N0:o=9;break e;case yf:o=11;break e;case _f:o=14;break e;case ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function cs(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function wh(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,r,s,i,o,l,u){return t=new mk(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(i),t}function gk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xw(t){if(!t)return Dr;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Pt(n))return xv(t,n,e)}return e}function kw(t,e,n,r,s,i,o,l,u){return t=Zf(n,r,!0,t,s,i,o,l,u),t.context=xw(null),n=t.current,r=It(),s=kr(n),i=Fn(r,s),i.callback=e??null,Ir(n,i,s),t.current.lanes=s,da(t,s,r),Nt(t,r),t}function Xu(t,e,n,r){var s=e.current,i=It(),o=kr(s);return n=xw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(s,e,o),t!==null&&(cn(t,s,o,i),Al(t,s,o)),o}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ep(t,e){iy(t,e),(t=t.alternate)&&iy(t,e)}function yk(){return null}var Sw=typeof reportError=="function"?reportError:function(t){console.error(t)};function tp(t){this._internalRoot=t}Zu.prototype.render=tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Xu(t,e,null,null)};Zu.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Xu(null,t,null,null)}),e[$n]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&iv(t)}};function np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oy(){}function _k(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=mu(o);i.call(c)}}var o=kw(e,r,t,0,null,!1,!1,"",oy);return t._reactRootContainer=o,t[$n]=o.current,Wo(t.nodeType===8?t.parentNode:t),_s(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=mu(u);l.call(c)}}var u=Zf(t,0,!1,null,null,!1,!1,"",oy);return t._reactRootContainer=u,t[$n]=u.current,Wo(t.nodeType===8?t.parentNode:t),_s(function(){Xu(e,u,n,r)}),u}function tc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=mu(o);l.call(u)}}Xu(e,o,t,s)}else o=_k(n,e,t,s,r);return mu(o)}tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(Ef(e,n|1),Nt(e,$e()),!(ge&6)&&(_i=$e()+500,Wr()))}break;case 13:_s(function(){var r=zn(t,1);if(r!==null){var s=It();cn(r,t,1,s)}}),ep(t,1)}};Tf=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=It();cn(e,t,134217728,n)}ep(t,134217728)}};nv=function(t){if(t.tag===13){var e=kr(t),n=zn(t,e);if(n!==null){var r=It();cn(n,t,e,r)}ep(t,e)}};rv=function(){return we};sv=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Zh=function(t,e,n){switch(e){case"input":if(qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Wu(r);if(!s)throw Error(j(90));L0(r),qh(r,s)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&ni(t,!!n.multiple,e,!1)}};H0=Qf;W0=_s;var vk={usingClientEntryPoint:!1,Events:[pa,Ks,Wu,$0,z0,Qf]},io={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wk={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Bu=fl.inject(wk),Tn=fl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(e))throw Error(j(200));return gk(t,e,null,n)};Ht.createRoot=function(t,e){if(!np(t))throw Error(j(299));var n=!1,r="",s=Sw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,r,s),t[$n]=e.current,Wo(t.nodeType===8?t.parentNode:t),new tp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return _s(t)};Ht.hydrate=function(t,e,n){if(!ec(e))throw Error(j(200));return tc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!np(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Sw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kw(e,null,t,1,n??null,s,!1,i,o),t[$n]=e.current,Wo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Zu(e)};Ht.render=function(t,e,n){if(!ec(e))throw Error(j(200));return tc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!ec(t))throw Error(j(40));return t._reactRootContainer?(_s(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ht.unstable_batchedUpdates=Qf;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return tc(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function Aw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Aw)}catch(t){console.error(t)}}Aw(),A0.exports=Ht;var Ek=A0.exports,Cw,ay=Ek;Cw=ay.createRoot,ay.hydrateRoot;const Tk="modulepreload",Ik=function(t){return"/project-hub/"+t},ly={},Rw=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=Ik(u),u in ly)return;ly[u]=!0;const c=u.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Tk,c||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((g,v)=>{m.addEventListener("load",g),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},xk=()=>{};var uy={};/**
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
 */const bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[p],n[m],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new Sk;const g=i<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),m!==64){const A=c<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ak=function(t){const e=bw(t);return Pw.encodeByteArray(e,!0)},gu=function(t){return Ak(t).replace(/\./g,"")},Nw=function(t){try{return Pw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rk=()=>Ck().__FIREBASE_DEFAULTS__,bk=()=>{if(typeof process>"u"||typeof uy>"u")return;const t=uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nw(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return xk()||Rk()||bk()||Pk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dw=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lw=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},Vw=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Nk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}const Ro={};function Ok(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ro))Ro[e]?t.emulator.push(e):t.prod.push(e);return t}function Dk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let cy=!1;function sp(t,e){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||Ro[t]===e||Ro[t]||cy)return;Ro[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Ok().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{cy=!0,o()},g}function p(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Dk(r),v=n("text"),A=document.getElementById(v)||document.createElement("span"),R=n("learnmore"),O=document.getElementById(R)||document.createElement("a"),k=n("preprendIcon"),w=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),p(O,R);const N=c();u(w,k),S.append(w,A,O,N),document.body.appendChild(S)}i?(A.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Vk(){var t;const e=(t=nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uk(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bk(){return!Vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $k(){try{return typeof indexedDB=="object"}catch{return!1}}function zk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hk="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Wk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new mn(s,l,r)}}function Wk(t,e){return t.replace(qk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hy(i)&&hy(o)){if(!vs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hy(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kk(t,e){const n=new Qk(t,e);return n.subscribe.bind(n)}class Qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Th),s.error===void 0&&(s.error=Th),s.complete===void 0&&(s.complete=Th);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Th(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rs="[DEFAULT]";/**
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
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zk(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(t){return t===rs?void 0:t}function Zk(t){return t.instantiationMode==="EAGER"}/**
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
 */class eS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const tS={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},nS=ce.INFO,rS={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},sS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=nS,this._logHandler=sS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const iS=(t,e)=>e.some(n=>t instanceof n);let dy,fy;function oS(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aS(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jw=new WeakMap,Nd=new WeakMap,Fw=new WeakMap,Ih=new WeakMap,ip=new WeakMap;function lS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jw.set(n,t)}).catch(()=>{}),ip.set(e,t),e}function uS(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cS(t){Od=t(Od)}function hS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xh(this),e,...n);return Fw.set(r,e.sort?e.sort():[e]),Ar(r)}:aS().includes(t)?function(...e){return t.apply(xh(this),e),Ar(jw.get(this))}:function(...e){return Ar(t.apply(xh(this),e))}}function dS(t){return typeof t=="function"?hS(t):(t instanceof IDBTransaction&&uS(t),iS(t,oS())?new Proxy(t,Od):t)}function Ar(t){if(t instanceof IDBRequest)return lS(t);if(Ih.has(t))return Ih.get(t);const e=dS(t);return e!==t&&(Ih.set(t,e),ip.set(e,t)),e}const xh=t=>ip.get(t);function fS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const pS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],kh=new Map;function py(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kh.get(e))return kh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return kh.set(e,i),i}cS(t=>({...t,get:(e,n,r)=>py(e,n)||t.get(e,n,r),has:(e,n)=>!!py(e,n)||t.has(e,n)}));/**
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
 */class gS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",my="0.13.2";/**
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
 */const qn=new rc("@firebase/app"),_S="@firebase/app-compat",vS="@firebase/analytics-compat",wS="@firebase/analytics",ES="@firebase/app-check-compat",TS="@firebase/app-check",IS="@firebase/auth",xS="@firebase/auth-compat",kS="@firebase/database",SS="@firebase/data-connect",AS="@firebase/database-compat",CS="@firebase/functions",RS="@firebase/functions-compat",bS="@firebase/installations",PS="@firebase/installations-compat",NS="@firebase/messaging",OS="@firebase/messaging-compat",DS="@firebase/performance",LS="@firebase/performance-compat",VS="@firebase/remote-config",MS="@firebase/remote-config-compat",jS="@firebase/storage",FS="@firebase/storage-compat",US="@firebase/firestore",BS="@firebase/ai",$S="@firebase/firestore-compat",zS="firebase",HS="11.10.0";/**
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
 */const Ld="[DEFAULT]",WS={[Dd]:"fire-core",[_S]:"fire-core-compat",[wS]:"fire-analytics",[vS]:"fire-analytics-compat",[TS]:"fire-app-check",[ES]:"fire-app-check-compat",[IS]:"fire-auth",[xS]:"fire-auth-compat",[kS]:"fire-rtdb",[SS]:"fire-data-connect",[AS]:"fire-rtdb-compat",[CS]:"fire-fn",[RS]:"fire-fn-compat",[bS]:"fire-iid",[PS]:"fire-iid-compat",[NS]:"fire-fcm",[OS]:"fire-fcm-compat",[DS]:"fire-perf",[LS]:"fire-perf-compat",[VS]:"fire-rc",[MS]:"fire-rc-compat",[jS]:"fire-gcs",[FS]:"fire-gcs-compat",[US]:"fire-fst",[$S]:"fire-fst-compat",[BS]:"fire-vertex","fire-js":"fire-js",[zS]:"fire-js-all"};/**
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
 */const yu=new Map,qS=new Map,Vd=new Map;function gy(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lr(t){const e=t.name;if(Vd.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of yu.values())gy(n,t);for(const n of qS.values())gy(n,t);return!0}function _a(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const GS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ga("app","Firebase",GS);/**
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
 */class KS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=HS;function Uw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Cr.create("bad-app-name",{appName:String(s)});if(n||(n=Lw()),!n)throw Cr.create("no-options");const i=yu.get(s);if(i){if(vs(n,i.options)&&vs(r,i.config))return i;throw Cr.create("duplicate-app",{appName:s})}const o=new eS(s);for(const u of Vd.values())o.addComponent(u);const l=new KS(n,r,o);return yu.set(s,l),l}function sc(t=Ld){const e=yu.get(t);if(!e&&t===Ld&&Lw())return Uw();if(!e)throw Cr.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let s=(r=WS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}Lr(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const QS="firebase-heartbeat-database",YS=1,ea="firebase-heartbeat-store";let Sh=null;function Bw(){return Sh||(Sh=fS(QS,YS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Sh}async function JS(t){try{const n=(await Bw()).transaction(ea),r=await n.objectStore(ea).get($w(t));return await n.done,r}catch(e){if(e instanceof mn)qn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function yy(t,e){try{const r=(await Bw()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,$w(t)),await r.done}catch(n){if(n instanceof mn)qn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function $w(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XS=1024,ZS=30;class eA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_y();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ZS){const o=rA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_y(),{heartbeatsToSend:r,unsentEntries:s}=tA(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function _y(){return new Date().toISOString().substring(0,10)}function tA(t,e=XS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?zk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vy(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}function rA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function sA(t){Lr(new Wn("platform-logger",e=>new gS(e),"PRIVATE")),Lr(new Wn("heartbeat",e=>new eA(e),"PRIVATE")),Xt(Dd,my,t),Xt(Dd,my,"esm2017"),Xt("fire-js","")}sA("");var iA="firebase",oA="11.10.0";/**
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
 */Xt(iA,oA,"app");var wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,zw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.D=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,C,b){for(var x=Array(arguments.length-2),B=2;B<arguments.length;B++)x[B-2]=arguments[B];return _.prototype[C].apply(E,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)E[C]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(C=0;16>C;++C)E[C]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],C=T.g[2];var b=T.g[3],x=_+(b^I&(C^b))+E[0]+3614090360&4294967295;_=I+(x<<7&4294967295|x>>>25),x=b+(C^_&(I^C))+E[1]+3905402710&4294967295,b=_+(x<<12&4294967295|x>>>20),x=C+(I^b&(_^I))+E[2]+606105819&4294967295,C=b+(x<<17&4294967295|x>>>15),x=I+(_^C&(b^_))+E[3]+3250441966&4294967295,I=C+(x<<22&4294967295|x>>>10),x=_+(b^I&(C^b))+E[4]+4118548399&4294967295,_=I+(x<<7&4294967295|x>>>25),x=b+(C^_&(I^C))+E[5]+1200080426&4294967295,b=_+(x<<12&4294967295|x>>>20),x=C+(I^b&(_^I))+E[6]+2821735955&4294967295,C=b+(x<<17&4294967295|x>>>15),x=I+(_^C&(b^_))+E[7]+4249261313&4294967295,I=C+(x<<22&4294967295|x>>>10),x=_+(b^I&(C^b))+E[8]+1770035416&4294967295,_=I+(x<<7&4294967295|x>>>25),x=b+(C^_&(I^C))+E[9]+2336552879&4294967295,b=_+(x<<12&4294967295|x>>>20),x=C+(I^b&(_^I))+E[10]+4294925233&4294967295,C=b+(x<<17&4294967295|x>>>15),x=I+(_^C&(b^_))+E[11]+2304563134&4294967295,I=C+(x<<22&4294967295|x>>>10),x=_+(b^I&(C^b))+E[12]+1804603682&4294967295,_=I+(x<<7&4294967295|x>>>25),x=b+(C^_&(I^C))+E[13]+4254626195&4294967295,b=_+(x<<12&4294967295|x>>>20),x=C+(I^b&(_^I))+E[14]+2792965006&4294967295,C=b+(x<<17&4294967295|x>>>15),x=I+(_^C&(b^_))+E[15]+1236535329&4294967295,I=C+(x<<22&4294967295|x>>>10),x=_+(C^b&(I^C))+E[1]+4129170786&4294967295,_=I+(x<<5&4294967295|x>>>27),x=b+(I^C&(_^I))+E[6]+3225465664&4294967295,b=_+(x<<9&4294967295|x>>>23),x=C+(_^I&(b^_))+E[11]+643717713&4294967295,C=b+(x<<14&4294967295|x>>>18),x=I+(b^_&(C^b))+E[0]+3921069994&4294967295,I=C+(x<<20&4294967295|x>>>12),x=_+(C^b&(I^C))+E[5]+3593408605&4294967295,_=I+(x<<5&4294967295|x>>>27),x=b+(I^C&(_^I))+E[10]+38016083&4294967295,b=_+(x<<9&4294967295|x>>>23),x=C+(_^I&(b^_))+E[15]+3634488961&4294967295,C=b+(x<<14&4294967295|x>>>18),x=I+(b^_&(C^b))+E[4]+3889429448&4294967295,I=C+(x<<20&4294967295|x>>>12),x=_+(C^b&(I^C))+E[9]+568446438&4294967295,_=I+(x<<5&4294967295|x>>>27),x=b+(I^C&(_^I))+E[14]+3275163606&4294967295,b=_+(x<<9&4294967295|x>>>23),x=C+(_^I&(b^_))+E[3]+4107603335&4294967295,C=b+(x<<14&4294967295|x>>>18),x=I+(b^_&(C^b))+E[8]+1163531501&4294967295,I=C+(x<<20&4294967295|x>>>12),x=_+(C^b&(I^C))+E[13]+2850285829&4294967295,_=I+(x<<5&4294967295|x>>>27),x=b+(I^C&(_^I))+E[2]+4243563512&4294967295,b=_+(x<<9&4294967295|x>>>23),x=C+(_^I&(b^_))+E[7]+1735328473&4294967295,C=b+(x<<14&4294967295|x>>>18),x=I+(b^_&(C^b))+E[12]+2368359562&4294967295,I=C+(x<<20&4294967295|x>>>12),x=_+(I^C^b)+E[5]+4294588738&4294967295,_=I+(x<<4&4294967295|x>>>28),x=b+(_^I^C)+E[8]+2272392833&4294967295,b=_+(x<<11&4294967295|x>>>21),x=C+(b^_^I)+E[11]+1839030562&4294967295,C=b+(x<<16&4294967295|x>>>16),x=I+(C^b^_)+E[14]+4259657740&4294967295,I=C+(x<<23&4294967295|x>>>9),x=_+(I^C^b)+E[1]+2763975236&4294967295,_=I+(x<<4&4294967295|x>>>28),x=b+(_^I^C)+E[4]+1272893353&4294967295,b=_+(x<<11&4294967295|x>>>21),x=C+(b^_^I)+E[7]+4139469664&4294967295,C=b+(x<<16&4294967295|x>>>16),x=I+(C^b^_)+E[10]+3200236656&4294967295,I=C+(x<<23&4294967295|x>>>9),x=_+(I^C^b)+E[13]+681279174&4294967295,_=I+(x<<4&4294967295|x>>>28),x=b+(_^I^C)+E[0]+3936430074&4294967295,b=_+(x<<11&4294967295|x>>>21),x=C+(b^_^I)+E[3]+3572445317&4294967295,C=b+(x<<16&4294967295|x>>>16),x=I+(C^b^_)+E[6]+76029189&4294967295,I=C+(x<<23&4294967295|x>>>9),x=_+(I^C^b)+E[9]+3654602809&4294967295,_=I+(x<<4&4294967295|x>>>28),x=b+(_^I^C)+E[12]+3873151461&4294967295,b=_+(x<<11&4294967295|x>>>21),x=C+(b^_^I)+E[15]+530742520&4294967295,C=b+(x<<16&4294967295|x>>>16),x=I+(C^b^_)+E[2]+3299628645&4294967295,I=C+(x<<23&4294967295|x>>>9),x=_+(C^(I|~b))+E[0]+4096336452&4294967295,_=I+(x<<6&4294967295|x>>>26),x=b+(I^(_|~C))+E[7]+1126891415&4294967295,b=_+(x<<10&4294967295|x>>>22),x=C+(_^(b|~I))+E[14]+2878612391&4294967295,C=b+(x<<15&4294967295|x>>>17),x=I+(b^(C|~_))+E[5]+4237533241&4294967295,I=C+(x<<21&4294967295|x>>>11),x=_+(C^(I|~b))+E[12]+1700485571&4294967295,_=I+(x<<6&4294967295|x>>>26),x=b+(I^(_|~C))+E[3]+2399980690&4294967295,b=_+(x<<10&4294967295|x>>>22),x=C+(_^(b|~I))+E[10]+4293915773&4294967295,C=b+(x<<15&4294967295|x>>>17),x=I+(b^(C|~_))+E[1]+2240044497&4294967295,I=C+(x<<21&4294967295|x>>>11),x=_+(C^(I|~b))+E[8]+1873313359&4294967295,_=I+(x<<6&4294967295|x>>>26),x=b+(I^(_|~C))+E[15]+4264355552&4294967295,b=_+(x<<10&4294967295|x>>>22),x=C+(_^(b|~I))+E[6]+2734768916&4294967295,C=b+(x<<15&4294967295|x>>>17),x=I+(b^(C|~_))+E[13]+1309151649&4294967295,I=C+(x<<21&4294967295|x>>>11),x=_+(C^(I|~b))+E[4]+4149444226&4294967295,_=I+(x<<6&4294967295|x>>>26),x=b+(I^(_|~C))+E[11]+3174756917&4294967295,b=_+(x<<10&4294967295|x>>>22),x=C+(_^(b|~I))+E[2]+718787259&4294967295,C=b+(x<<15&4294967295|x>>>17),x=I+(b^(C|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var I=_-this.blockSize,E=this.B,C=this.h,b=0;b<_;){if(C==0)for(;b<=I;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(E[C++]=T.charCodeAt(b++),C==this.blockSize){s(this,E),C=0;break}}else for(;b<_;)if(E[C++]=T[b++],C==this.blockSize){s(this,E),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var I=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=I&255,I/=256;for(this.u(T),T=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)T[I++]=this.g[_]>>>E&255;return T};function i(T,_){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;for(var I=[],E=!0,C=T.length-1;0<=C;C--){var b=T[C]|0;E&&b==_||(I[C]=b,E=!1)}this.g=I}var l={};function u(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return O(c(-T));for(var _=[],I=1,E=0;T>=I;E++)_[E]=T/I|0,I*=4294967296;return new o(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return O(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),E=m,C=0;C<T.length;C+=8){var b=Math.min(8,T.length-C),x=parseInt(T.substring(C,C+b),_);8>b?(b=c(Math.pow(_,b)),E=E.j(b).add(c(x))):(E=E.j(I),E=E.add(c(x)))}return E}var m=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-O(this).m();for(var T=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(R(this))return"-"+O(this).toString(T);for(var _=c(Math.pow(T,6)),I=this,E="";;){var C=N(I,_).g;I=k(I,C.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=C,A(I))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=k(this,T),R(T)?-1:A(T)?0:1};function O(T){for(var _=T.g.length,I=[],E=0;E<_;E++)I[E]=~T.g[E];return new o(I,~T.h).add(g)}t.abs=function(){return R(this)?O(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0,C=0;C<=_;C++){var b=E+(this.i(C)&65535)+(T.i(C)&65535),x=(b>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);E=x>>>16,b&=65535,x&=65535,I[C]=x<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function k(T,_){return T.add(O(_))}t.j=function(T){if(A(this)||A(T))return m;if(R(this))return R(T)?O(this).j(O(T)):O(O(this).j(T));if(R(T))return O(this.j(O(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<T.g.length;C++){var b=this.i(E)>>>16,x=this.i(E)&65535,B=T.i(C)>>>16,ee=T.i(C)&65535;I[2*E+2*C]+=x*ee,w(I,2*E+2*C),I[2*E+2*C+1]+=b*ee,w(I,2*E+2*C+1),I[2*E+2*C+1]+=x*B,w(I,2*E+2*C+1),I[2*E+2*C+2]+=b*B,w(I,2*E+2*C+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function w(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function S(T,_){this.g=T,this.h=_}function N(T,_){if(A(_))throw Error("division by zero");if(A(T))return new S(m,m);if(R(T))return _=N(O(T),_),new S(O(_.g),O(_.h));if(R(_))return _=N(T,O(_)),new S(O(_.g),_.h);if(30<T.g.length){if(R(T)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,E=_;0>=E.l(T);)I=F(I),E=F(E);var C=U(I,1),b=U(E,1);for(E=U(E,2),I=U(I,2);!A(E);){var x=b.add(E);0>=x.l(T)&&(C=C.add(I),b=x),E=U(E,1),I=U(I,1)}return _=k(T,C.j(_)),new S(C,_)}for(C=m;0<=T.l(_);){for(I=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=c(I),x=b.j(_);R(x)||0<x.l(T);)I-=E,b=c(I),x=b.j(_);A(b)&&(b=g),C=C.add(b),T=k(T,x)}return new S(C,T)}t.A=function(T){return N(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&T.i(E);return new o(I,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|T.i(E);return new o(I,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^T.i(E);return new o(I,this.h^T.h)};function F(T){for(var _=T.g.length+1,I=[],E=0;E<_;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(I,T.h)}function U(T,_){var I=_>>5;_%=32;for(var E=T.g.length-I,C=[],b=0;b<E;b++)C[b]=0<_?T.i(b+I)>>>_|T.i(b+I+1)<<32-_:T.i(b+I);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,Rr=o}).apply(typeof wy<"u"?wy:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hw,go,Ww,Dl,Md,qw,Gw,Kw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,y=!1,P={next:function(){if(!y&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,f){return a.call.apply(a.bind,arguments)}function m(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,P,D){for(var $=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)$[Ee-2]=arguments[Ee];return h.prototype[P].apply(y,$)}}function R(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const P=a.length||0,D=y.length||0;a.length=P+D;for(let $=0;$<D;$++)a[P+$]=y[$]}else a.push(y)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let D=0;D<I.length;D++)f=I[D],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function x(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,f){const y=ee.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var ee=new k(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let et,z=!1,Y=new B,K=()=>{const a=l.Promise.resolve(void 0);et=()=>{a.then(Q)}};var Q=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(f){b(f)}var h=ee;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function vt(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{N(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vt.aa.h.call(this)}}A(vt,ke);var Lt={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),bc=0;function Pc(a,h,f,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=P,this.key=++bc,this.da=this.fa=!1}function Ps(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ns(a){this.src=a,this.g={},this.h=0}Ns.prototype.add=function(a,h,f,y,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=Vi(a,h,y,P);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new Pc(h,this.src,D,!!y,P),h.fa=f,a.push(h)),h};function Li(a,h){var f=h.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(y,P,1),D&&(Ps(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vi(a,h,f,y){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==y)return P}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),ji={};function Na(a,h,f,y,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Na(a,h[D],f,y,P);return null}return f=pe(f),a&&a[tn]?a.K(h,f,c(y)?!!y.capture:!1,P):Nc(a,h,f,!1,y,P)}function Nc(a,h,f,y,P,D){if(!h)throw Error("Invalid event type");var $=c(P)?!!P.capture:!!P,Ee=Z(a);if(Ee||(a[Mi]=Ee=new Ns(a)),f=Ee.add(h,f,y,$,D),f.proxy)return f;if(y=Oc(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)_t||(P=$),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(M(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Oc(){function a(f){return h.call(a.src,a.listener,f)}const h=q;return a}function Oa(a,h,f,y,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)Oa(a,h[D],f,y,P);else y=c(y)?!!y.capture:!!y,f=pe(f),a&&a[tn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=Vi(D,f,y,P),-1<f&&(Ps(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Z(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vi(h,f,y,P)),(f=-1<a?h[a]:null)&&Fi(f))}function Fi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tn])Li(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(M(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Z(h))?(Li(f,a),f.h==0&&(f.src=null,h[Mi]=null)):Ps(a)}}}function M(a){return a in ji?ji[a]:ji[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new vt(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Fi(a),a=f.call(y,h)}return a}function Z(a){return a=a[Mi],a instanceof Ns?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function re(){ie.call(this),this.i=new Ns(this),this.M=this,this.F=null}A(re,ie),re.prototype[tn]=!0,re.prototype.removeEventListener=function(a,h,f,y){Oa(this,a,h,f,y)};function _e(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var P=h;h=new ke(y,a),E(h,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var $=h.g=f[D];P=Zn($,y,!0,h)&&P}if($=h.g=a,P=Zn($,y,!0,h)&&P,P=Zn($,y,!1,h)&&P,f)for(D=0;D<f.length;D++)$=h.g=f[D],P=Zn($,y,!1,h)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)Ps(f[y]);delete a.g[h],a.h--}}this.F=null},re.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},re.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Zn(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==f){var Ee=$.listener,tt=$.ha||$.src;$.fa&&Li(a.i,$),P=Ee.call(tt,y)!==!1&&P}}return P&&!y.defaultPrevented}function Da(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Os(a){a.g=Da(()=>{a.g=null,a.i&&(a.i=!1,Os(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Dc extends ie{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Os(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(a){ie.call(this),this.h=a,this.g={}}A(Yr,ie);var La=[];function de(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&Fi(h)},a),a.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),de(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pe=l.JSON.stringify,x1=l.JSON.parse,k1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Lc(){}Lc.prototype.h=null;function lm(a){return a.h||(a.h=a.i())}function um(){}var Ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vc(){ke.call(this,"d")}A(Vc,ke);function Mc(){ke.call(this,"c")}A(Mc,ke);var Jr={},cm=null;function Va(){return cm=cm||new re}Jr.La="serverreachability";function hm(a){ke.call(this,Jr.La,a)}A(hm,ke);function Bi(a){const h=Va();_e(h,new hm(h))}Jr.STAT_EVENT="statevent";function dm(a,h){ke.call(this,Jr.STAT_EVENT,a),this.stat=h}A(dm,ke);function wt(a){const h=Va();_e(h,new dm(h,a))}Jr.Ma="timingevent";function fm(a,h){ke.call(this,Jr.Ma,a),this.size=h}A(fm,ke);function $i(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function S1(a,h,f,y,P,D){a.info(function(){if(a.g)if(D)for(var $="",Ee=D.split("&"),tt=0;tt<Ee.length;tt++){var ye=Ee[tt].split("=");if(1<ye.length){var lt=ye[0];ye=ye[1];var ut=lt.split("_");$=2<=ut.length&&ut[1]=="type"?$+(lt+"="+ye+"&"):$+(lt+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+f+`
`+$})}function A1(a,h,f,y,P,D,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+f+`
`+D+" "+$})}function Ds(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+R1(a,f)+(y?" "+y:"")})}function C1(a,h){a.info(function(){return"TIMEOUT: "+h})}zi.prototype.info=function(){};function R1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Pe(f)}catch{return h}}var Ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jc;function ja(){}A(ja,Lc),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},jc=new ja;function er(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mm}function mm(){this.i=null,this.g="",this.h=!1}var gm={},Fc={};function Uc(a,h,f){a.L=1,a.v=$a(Pn(h)),a.m=f,a.P=!0,ym(a,null)}function ym(a,h){a.F=Date.now(),Fa(a),a.A=Pn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Pm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new mm,a.g=Qm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Dc(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(La[0]=P.toString()),P=La);for(var D=0;D<P.length;D++){var $=Na(f,P[D],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Bi(),S1(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const ut=Nn(this.g);var h=this.g.Ba();const Ms=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||jm(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Ms?Bi(3):Bi(2)),Bc(this);var f=this.g.Z();this.X=f;t:if(_m(this)){var y=jm(this.g);a="";var P=y.length,D=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Hi(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==P-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,A1(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,tt=this.g;if((Ee=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ee)){var ye=Ee;break t}}ye=null}if(f=ye)Ds(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$c(this,f);else{this.o=!1,this.s=3,wt(12),Xr(this),Hi(this);break e}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<$.length;)if(nn=b1(this,$),nn==Fc){ut==4&&(this.s=4,wt(14),f=!1),Ds(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==gm){this.s=4,wt(15),Ds(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Ds(this.i,this.l,nn,null),$c(this,nn);if(_m(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||$.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)Ds(this.i,this.l,$,"[Invalid Chunked Response]"),Xr(this),Hi(this);else if(0<$.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Kc(lt),lt.M=!0,wt(11))}}else Ds(this.i,this.l,$,null),$c(this,$);ut==4&&Xr(this),this.o&&!this.J&&(ut==4?Wm(this.j,this):(this.o=!1,Fa(this)))}else G1(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Xr(this),Hi(this)}}}catch{}finally{}};function _m(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function b1(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Fc:(f=Number(h.substring(f,y)),isNaN(f)?gm:(y+=1,y+f>h.length?Fc:(h=h.slice(y,y+f),a.C=y+f,h)))}er.prototype.cancel=function(){this.J=!0,Xr(this)};function Fa(a){a.S=Date.now()+a.I,vm(a,a.I)}function vm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$i(g(a.ba,a),h)}function Bc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(C1(this.i,this.A),this.L!=2&&(Bi(),wt(17)),Xr(this),this.s=2,Hi(this)):vm(this,this.S-a)};function Hi(a){a.j.G==0||a.J||Wm(a.j,a)}function Xr(a){Bc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,de(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function $c(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||zc(f.h,a))){if(!a.K&&zc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ka(f),qa(f);else break e;Gc(f),wt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=$i(g(f.Za,f),6e3));if(1>=Tm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else es(f,11)}else if((a.K||f.g==a)&&Ka(f),!w(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let ye=P[h];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const lt=ye[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ut=ye[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const Ms=ye[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(y=1.5*Ms,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const nn=a.g;if(nn){const Ya=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ya){var D=y.h;D.g||Ya.indexOf("spdy")==-1&&Ya.indexOf("quic")==-1&&Ya.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Hc(D,D.h),D.h=null))}if(y.D){const Qc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(y.ya=Qc,Se(y.I,y.D,Qc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var $=a;if(y.qa=Km(y,y.J?y.ia:null,y.W),$.K){Im(y.h,$);var Ee=$,tt=y.L;tt&&(Ee.I=tt),Ee.B&&(Bc(Ee),Fa(Ee)),y.g=$}else zm(y);0<f.i.length&&Ga(f)}else ye[0]!="stop"&&ye[0]!="close"||es(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?es(f,7):qc(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}Bi(4)}catch{}}var P1=class{constructor(a,h){this.g=a,this.map=h}};function wm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Em(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Tm(a){return a.h?1:a.g?a.g.size:0}function zc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Hc(a,h){a.g?a.g.add(h):a.h=h}function Im(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wm.prototype.cancel=function(){if(this.i=xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return R(a.i)}function N1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function O1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function km(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=O1(a),y=N1(a),P=y.length,D=0;D<P;D++)h.call(void 0,y[D],f&&f[D],a)}var Sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),P=null;if(0<=y){var D=a[f].substring(0,y);P=a[f].substring(y+1)}else D=a[f];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,Ua(this,a.j),this.o=a.o,this.g=a.g,Ba(this,a.s),this.l=a.l;var h=a.i,f=new Gi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Am(this,f),this.m=a.m}else a&&(h=String(a).match(Sm))?(this.h=!1,Ua(this,h[1]||"",!0),this.o=Wi(h[2]||""),this.g=Wi(h[3]||"",!0),Ba(this,h[4]),this.l=Wi(h[5]||"",!0),Am(this,h[6]||"",!0),this.m=Wi(h[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qi(h,Cm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qi(h,Cm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(qi(f,f.charAt(0)=="/"?M1:V1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",qi(f,F1)),a.join("")};function Pn(a){return new Zr(a)}function Ua(a,h,f){a.j=f?Wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ba(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Am(a,h,f){h instanceof Gi?(a.i=h,U1(a.i,a.h)):(f||(h=qi(h,j1)),a.i=new Gi(h,a.h))}function Se(a,h,f){a.i.set(h,f)}function $a(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,L1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function L1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cm=/[#\/\?@]/g,V1=/[#\?:]/g,M1=/[#\?]/g,j1=/[#\?@]/g,F1=/#/g;function Gi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&D1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Gi.prototype,t.add=function(a,h){tr(this),this.i=null,a=Ls(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Rm(a,h){tr(a),h=Ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bm(a,h){return tr(a),h=Ls(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(h,P,y,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const P=a[y];for(let D=0;D<P.length;D++)f.push(h[y])}return f},t.V=function(a){tr(this);let h=[];if(typeof a=="string")bm(this,a)&&(h=h.concat(this.g.get(Ls(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return tr(this),this.i=null,a=Ls(this,a),bm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Pm(a,h,f){Rm(a,h),0<f.length&&(a.i=null,a.g.set(Ls(a,h),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const D=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var P=D;$[y]!==""&&(P+="="+encodeURIComponent(String($[y]))),a.push(P)}}return this.i=a.join("&")};function Ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function U1(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(Rm(this,y),Pm(this,P,f))},a)),a.j=h}function B1(a,h){const f=new zi;if(l.Image){const y=new Image;y.onload=v(nr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=v(nr,f,"TestLoadImage: error",!1,h,y),y.onabort=v(nr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(nr,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function $1(a,h){const f=new zi,y=new AbortController,P=setTimeout(()=>{y.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function z1(){this.g=new k1}function H1(a,h,f){const y=f||"";try{km(a,function(P,D){let $=P;c(P)&&($=Pe(P)),h.push(y+D+"="+encodeURIComponent($))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}A(za,Lc),za.prototype.g=function(){return new Ha(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function Ha(a,h){re.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ha,re),t=Ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ki(this):Qi(this),this.readyState==3&&Nm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ki(this))},t.Qa=function(a){this.g&&(this.response=a,Ki(this))},t.ga=function(){this.g&&Ki(this)};function Ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Om(a){let h="";return U(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Wc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Om(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Se(a,h,f))}function Ve(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ve,re);var W1=/^https?$/i,q1=["POST","PUT"];t=Ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jc.g(),this.v=this.o?lm(this.o):lm(jc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Dm(this,D);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())f.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(q1,h,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of f)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Dm(this,D)}};function Dm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Lm(a),Wa(a)}function Lm(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vm(this):this.bb())},t.bb=function(){Vm(this)};function Vm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Da(a.Ea,0,a);else if(_e(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=$===0){var P=String(a.D).match(Sm)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!W1.test(P?P.toLowerCase():"")}f=y}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var D=2<Nn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Lm(a)}}finally{Wa(a)}}}}function Wa(a,h){if(a.g){Mm(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=y}catch{}}}function Mm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),x1(h)}};function jm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function G1(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var f=C(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[P]||[];h[P]=D,D.push(f)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Fm(a){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yi("baseRetryDelayMs",5e3,a),this.cb=Yi("retryDelaySeedMs",1e4,a),this.Wa=Yi("forwardChannelMaxRetries",2,a),this.wa=Yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wm(a&&a.concurrentRequestLimit),this.Da=new z1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){wt(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Km(this,null,this.W),Ga(this)};function qc(a){if(Um(a),a.G==3){var h=a.U++,f=Pn(a.I);if(Se(f,"SID",a.K),Se(f,"RID",h),Se(f,"TYPE","terminate"),Ji(a,f),h=new er(a,a.j,h),h.L=2,h.v=$a(Pn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Qm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fa(h)}Gm(a)}function qa(a){a.g&&(Kc(a),a.g.cancel(),a.g=null)}function Um(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!Em(a.h)&&!a.s){a.s=!0;var h=a.Ga;et||K(),z||(et(),z=!0),Y.add(h,a),a.B=0}}function K1(a,h){return Tm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$i(g(a.Ga,a,h),qm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new er(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=$m(this,P,h),f=Pn(this.I),Se(f,"RID",a),Se(f,"CVER",22),this.D&&Se(f,"X-HTTP-Session-Id",this.D),Ji(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Om(D)))+"&"+h:this.m&&Wc(f,this.m,D)),Hc(this.h,P),this.Ua&&Se(f,"TYPE","init"),this.P?(Se(f,"$req",h),Se(f,"SID","null"),P.T=!0,Uc(P,f,null)):Uc(P,f,h),this.G=2}}else this.G==3&&(a?Bm(this,a):this.i.length==0||Em(this.h)||Bm(this))};function Bm(a,h){var f;h?f=h.l:f=a.U++;const y=Pn(a.I);Se(y,"SID",a.K),Se(y,"RID",f),Se(y,"AID",a.T),Ji(a,y),a.m&&a.o&&Wc(y,a.m,a.o),f=new er(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Hc(a.h,f),Uc(f,y,h)}function Ji(a,h){a.H&&U(a.H,function(f,y){Se(h,y,f)}),a.l&&km({},function(f,y){Se(h,y,f)})}function $m(a,h,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const $=["count="+f];D==-1?0<f?(D=P[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let Ee=!0;for(let tt=0;tt<f;tt++){let ye=P[tt].g;const lt=P[tt].map;if(ye-=D,0>ye)D=Math.max(0,P[tt].g-100),Ee=!1;else try{H1(lt,$,"req"+ye+"_")}catch{y&&y(lt)}}if(Ee){y=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function zm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;et||K(),z||(et(),z=!0),Y.add(h,a),a.v=0}}function Gc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$i(g(a.Fa,a),qm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Hm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$i(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),qa(this),Hm(this))};function Kc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Hm(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Se(h,"RID","rpc"),Se(h,"SID",a.K),Se(h,"AID",a.T),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(h,"TO",a.ja),Se(h,"TYPE","xmlhttp"),Ji(a,h),a.m&&a.o&&Wc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=$a(Pn(h)),f.m=null,f.P=!0,ym(f,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),Gc(this),wt(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Wm(a,h){var f=null;if(a.g==h){Ka(a),Kc(a),a.g=null;var y=2}else if(zc(a.h,h))f=h.D,Im(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;y=Va(),_e(y,new fm(y,f)),Ga(a)}else zm(a);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&K1(a,h)||y==2&&Gc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function qm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),y=a.Xa;const P=!y;y=new Zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ua(y,"https"),$a(y),P?B1(y.toString(),f):$1(y.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(h),Gm(a),Um(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Gm(a){if(a.G=0,a.ka=[],a.l){const h=xm(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Km(a,h,f){var y=f instanceof Zr?Pn(f):new Zr(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ba(y,y.s);else{var P=l.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new Zr(null);y&&Ua(D,y),h&&(D.g=h),P&&Ba(D,P),f&&(D.l=f),y=D}return f=a.D,h=a.ya,f&&h&&Se(y,f,h),Se(y,"VER",a.la),Ji(a,y),y}function Qm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ve(new za({eb:f})):new Ve(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ym(){}t=Ym.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qa(){}Qa.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){re.call(this),this.g=new Fm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vs(this)}A(Vt,re),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){qc(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Pe(a),a=f);h.i.push(new P1(h.Ya++,a)),h.G==3&&Ga(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,qc(this.g),delete this.g,Vt.aa.N.call(this)};function Jm(a){Vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Jm,Vc);function Xm(){Mc.call(this),this.status=1}A(Xm,Mc);function Vs(a){this.g=a}A(Vs,Ym),Vs.prototype.ua=function(){_e(this.g,"a")},Vs.prototype.ta=function(a){_e(this.g,new Jm(a))},Vs.prototype.sa=function(a){_e(this.g,new Xm)},Vs.prototype.ra=function(){_e(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Kw=function(){return new Qa},Gw=function(){return Va()},qw=Jr,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,Dl=Ma,pm.COMPLETE="complete",Ww=pm,um.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",re.prototype.listen=re.prototype.K,go=um,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Hw=Ve}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Ey="@firebase/firestore",Ty="4.8.0";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ri="11.10.0";/**
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
 */const ws=new rc("@firebase/firestore");function Fs(){return ws.logLevel}function W(t,...e){if(ws.logLevel<=ce.DEBUG){const n=e.map(op);ws.debug(`Firestore (${Ri}): ${t}`,...n)}}function Gn(t,...e){if(ws.logLevel<=ce.ERROR){const n=e.map(op);ws.error(`Firestore (${Ri}): ${t}`,...n)}}function Vr(t,...e){if(ws.logLevel<=ce.WARN){const n=e.map(op);ws.warn(`Firestore (${Ri}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qw(t,r,n)}function Qw(t,e,n){let r=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Qw(e,s,r)}function oe(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Yw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Yw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class cA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new cA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Jw(){return new TextEncoder}/**
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
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function jd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ae(r,s);{const i=Jw(),o=pA(i.encode(xy(t,n)),i.encode(xy(e,n)));return o!==0?o:ae(r,s)}}n+=r>65535?2:1}return ae(t.length,e.length)}function xy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function pA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ae(t[n],e[n]);return ae(t.length,e.length)}function vi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ky="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ae(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),s=vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?vn.extractNumericId(e).compare(vn.extractNumericId(n)):jd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class Ie extends vn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const mA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends vn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return mA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ky}static keyField(){return new st([ky])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ie.fromString(e))}static fromName(e){return new X(Ie.fromString(e).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ie(e.slice()))}}/**
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
 */function Xw(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gA(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sy(t){if(!X.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ay(t){if(X.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function va(t,e){if(!Zw(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cy=-62135596800,Ry=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ry);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cy)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ry}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(va(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:qe("string",Ce._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ta=-1;function yA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Mr(s,X.empty(),e)}function _A(t){return new Mr(t.readTime,t.key,ta)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(se.min(),X.empty(),ta)}static max(){return new Mr(se.max(),X.empty(),ta)}}function vA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const wA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==wA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function TA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}oc.ue=-1;/**
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
 */const lp=-1;function ac(t){return t==null}function _u(t){return t===0&&1/t==-1/0}function IA(t){return typeof t=="number"&&Number.isInteger(t)&&!_u(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const eE="";function xA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=by(e)),e=kA(t.get(n),e);return by(e)}function kA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case eE:n+="";break;default:n+=i}}return n}function by(t){return t+eE+""}/**
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
 */function Py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Qe(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class nE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nE("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const SA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=SA.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */const rE="server_timestamp",sE="__type__",iE="__previous_value__",oE="__local_write_time__";function up(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[sE])===null||n===void 0?void 0:n.stringValue)===rE}function lc(t){const e=t.mapValue.fields[iE];return up(e)?lc(e):e}function na(t){const e=jr(t.mapValue.fields[oE].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,n,r,s,i,o,l,u,c,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p}}const vu="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||vu}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===vu}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const aE="__type__",CA="__max__",gl={mapValue:{}},lE="__vector__",wu="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?up(t)?4:bA(t)?9007199254740991:RA(t)?10:11:ne(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jr(s.timestampValue),l=jr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),l=Be(i.doubleValue);return o===l?_u(o)===_u(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Py(o)!==Py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function sa(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Be(i.integerValue||i.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(na(t),na(e));case 5:return jd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Fr(i),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=ae(l[c],u[c]);if(p!==0)return p}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ae(Be(i.latitude),Be(o.latitude));return l!==0?l:ae(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,p;const m=i.fields||{},g=o.fields||{},v=(l=m[wu])===null||l===void 0?void 0:l.arrayValue,A=(u=g[wu])===null||u===void 0?void 0:u.arrayValue,R=ae(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return R!==0?R:Dy(v,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===gl.mapValue&&o===gl.mapValue)return 0;if(i===gl.mapValue)return 1;if(o===gl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=jd(u[m],p[m]);if(g!==0)return g;const v=wi(l[u[m]],c[p[m]]);if(v!==0)return v}return ae(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{le:n})}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=jr(t),r=jr(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function Dy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=wi(n[s],r[s]);if(i)return i}return ae(n.length,r.length)}function Ei(t){return Fd(t)}function Fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fd(n.fields[o])}`;return s+"}"}(t.mapValue):ne(61005,{value:t})}function Ll(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(t);return e?16+Ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ll(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Gr(r.fields,(i,o)=>{s+=i.length+Ll(o)}),s}(t.mapValue);default:throw ne(13486,{value:t})}}function Ly(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ud(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function Vy(t){return!!t&&"nullValue"in t}function My(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function RA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[aE])===null||n===void 0?void 0:n.stringValue)===lE}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CA}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=bo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(bo(this.value))}}function uE(t){const e=[];return Gr(t.fields,(n,r)=>{const s=new st([n]);if(Vl(r)){const i=uE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,se.min(),se.min(),se.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,se.min(),se.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,se.min(),se.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eu{constructor(e,n){this.position=e,this.inclusive=n}}function jy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tu{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cE{}class We extends cE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OA(e,n,r):n==="array-contains"?new VA(e,r):n==="in"?new MA(e,r):n==="not-in"?new jA(e,r):n==="array-contains-any"?new FA(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DA(e,r):new LA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(wi(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends cE{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new dn(e,n)}matches(e){return hE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hE(t){return t.op==="and"}function dE(t){return NA(t)&&hE(t)}function NA(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Bd(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ei(t.value);if(dE(t))return t.filters.map(e=>Bd(e)).join(",");{const e=t.filters.map(n=>Bd(n)).join(",");return`${t.op}(${e})`}}function fE(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&fE(o,s.filters[l]),!0):!1}(t,e):void ne(19439)}function pE(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ei(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(pE).join(" ,")+"}"}(t):"Filter"}class OA extends We{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class DA extends We{constructor(e,n){super(e,"in",n),this.keys=mE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LA extends We{constructor(e,n){super(e,"not-in",n),this.keys=mE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class VA extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&sa(n.arrayValue,this.value)}}class MA extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class jA extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!sa(this.value.arrayValue,n)}}class FA extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
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
 */class UA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Uy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UA(t,e,n,r,s,i,o)}function hp(t){const e=oe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ei(r)).join(",")),e.Pe=n}return e.Pe}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fy(t.startAt,e.startAt)&&Fy(t.endAt,e.endAt)}function $d(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class wa{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function BA(t,e,n,r,s,i,o,l){return new wa(t,e,n,r,s,i,o,l)}function uc(t){return new wa(t)}function By(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gE(t){return t.collectionGroup!==null}function Po(t){const e=oe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Qe(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Tu(i,r))}),n.has(st.keyField().canonicalString())||e.Te.push(new Tu(st.keyField(),r))}return e.Te}function xn(t){const e=oe(t);return e.Ie||(e.Ie=$A(e,Po(t))),e.Ie}function $A(t,e){if(t.limitType==="F")return Uy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tu(s.field,i)});const n=t.endAt?new Eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Eu(t.startAt.position,t.startAt.inclusive):null;return Uy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zd(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hd(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return dp(xn(t),xn(e))&&t.limitType===e.limitType}function yE(t){return`${hp(xn(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pE(s)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ei(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ei(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=jy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Po(r),s)||r.endAt&&!function(o,l,u){const c=jy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Po(r),s))}(t,e)}function zA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _E(t){return(e,n)=>{let r=!1;for(const s of Po(t)){const i=HA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?wi(u,c):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
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
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tE(this.inner)}size(){return this.innerSize}}/**
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
 */const WA=new Le(X.comparator);function Kn(){return WA}const vE=new Le(X.comparator);function yo(...t){let e=vE;for(const n of t)e=e.insert(n.key,n);return e}function wE(t){let e=vE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return No()}function EE(){return No()}function No(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new Le(X.comparator),GA=new Qe(X.comparator);function he(...t){let e=GA;for(const n of t)e=e.add(n);return e}const KA=new Qe(ae);function QA(){return KA}/**
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
 */function fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_u(e)?"-0":e}}function TE(t){return{integerValue:""+t}}function YA(t,e){return IA(e)?TE(e):fp(t,e)}/**
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
 */class dc{constructor(){this._=void 0}}function JA(t,e,n){return t instanceof Iu?function(s,i){const o={fields:{[sE]:{stringValue:rE},[oE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&up(i)&&(i=lc(i)),i&&(o.fields[iE]=i),{mapValue:o}}(n,e):t instanceof ia?xE(t,e):t instanceof oa?kE(t,e):function(s,i){const o=IE(s,i),l=$y(o)+$y(s.Ee);return Ud(o)&&Ud(s.Ee)?TE(l):fp(s.serializer,l)}(t,e)}function XA(t,e,n){return t instanceof ia?xE(t,e):t instanceof oa?kE(t,e):n}function IE(t,e){return t instanceof xu?function(r){return Ud(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Iu extends dc{}class ia extends dc{constructor(e){super(),this.elements=e}}function xE(t,e){const n=SE(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends dc{constructor(e){super(),this.elements=e}}function kE(t,e){let n=SE(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class xu extends dc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function $y(t){return Be(t.integerValue||t.doubleValue)}function SE(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ia&&s instanceof ia||r instanceof oa&&s instanceof oa?vi(r.elements,s.elements,bn):r instanceof xu&&s instanceof xu?bn(r.Ee,s.Ee):r instanceof Iu&&s instanceof Iu}(t.transform,e.transform)}class eC{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function AE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pc(t.key,Dt.none()):new Ea(t.key,t.data,Dt.none());{const n=t.data,r=Ct.empty();let s=new Qe(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kr(t.key,r,new Ut(s.toArray()),Dt.none())}}function tC(t,e,n){t instanceof Ea?function(s,i,o){const l=s.value.clone(),u=Hy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(s,i,o){if(!Ml(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Hy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(CE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oo(t,e,n,r){return t instanceof Ea?function(i,o,l,u){if(!Ml(i.precondition,o))return l;const c=i.value.clone(),p=Wy(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(i,o,l,u){if(!Ml(i.precondition,o))return l;const c=Wy(i.fieldTransforms,u,o),p=o.data;return p.setAll(CE(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Ml(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function nC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=IE(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function zy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vi(r,s,(i,o)=>ZA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kr extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function CE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hy(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,XA(o,l,n[s]))}return r}function Wy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,JA(i,o,e))}return r}class pc extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rC extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=EE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=AE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,r)=>zy(n,r))&&vi(this.baseMutations,e.baseMutations,(n,r)=>zy(n,r))}}class pp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pp(e,n,r,s)}}/**
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
 */class iC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,me;function aC(t){switch(t){case L.OK:return ne(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function RE(t){if(t===void 0)return Gn("GRPC error has no .code"),L.UNKNOWN;switch(t){case ze.OK:return L.OK;case ze.CANCELLED:return L.CANCELLED;case ze.UNKNOWN:return L.UNKNOWN;case ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ze.INTERNAL:return L.INTERNAL;case ze.UNAVAILABLE:return L.UNAVAILABLE;case ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ze.NOT_FOUND:return L.NOT_FOUND;case ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ze.ABORTED:return L.ABORTED;case ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ze.DATA_LOSS:return L.DATA_LOSS;default:return ne(39323,{code:t})}}(me=ze||(ze={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const lC=new Rr([4294967295,4294967295],0);function qy(t){const e=Jw().encode(t),n=new zw;return n.update(e),new Uint8Array(n.digest())}function Gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class mp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(r<0)throw new _o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Rr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(lC)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=qy(e),[r,s]=Gy(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=qy(e),[r,s]=Gy(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(se.min(),s,new Le(ae),Kn(),he())}}class Ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,he(),he(),he())}}/**
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
 */class jl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class bE{constructor(e,n){this.targetId=e,this.De=n}}class PE{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ky{constructor(){this.ve=0,this.Ce=Qy(),this.Fe=at.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=he(),n=he(),r=he();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new Ta(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Qy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class uC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Kn(),this.je=yl(),this.Je=yl(),this.He=new Le(ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if($d(i))if(r===0){const o=new X(i.path);this.Xe(n,o,mt.newNoDocument(o,se.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof nE)return Vr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mp(o,s,i)}catch(u){return Vr(u instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&$d(l.target)){const u=new X(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,mt.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=he();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new mc(e,n,this.He,this.ze,r);return this.ze=Kn(),this.je=yl(),this.Je=yl(),this.He=new Le(ae),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Ky,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Qe(ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Qe(ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ky),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function yl(){return new Le(X.comparator)}function Qy(){return new Le(X.comparator)}const cC={asc:"ASCENDING",desc:"DESCENDING"},hC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dC={and:"AND",or:"OR"};class fC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wd(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pC(t,e){return ku(t,e.toTimestamp())}function kn(t){return ve(!!t,49232),se.fromTimestamp(function(n){const r=jr(n);return new Ce(r.seconds,r.nanos)}(t))}function gp(t,e){return qd(t,e).canonicalString()}function qd(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OE(t){const e=Ie.fromString(t);return ve(jE(e),10190,{key:e.toString()}),e}function Gd(t,e){return gp(t.databaseId,e.path)}function Ah(t,e){const n=OE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(LE(n))}function DE(t,e){return gp(t.databaseId,e)}function mC(t){const e=OE(t);return e.length===4?Ie.emptyPath():LE(e)}function Kd(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LE(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Yy(t,e,n){return{name:Gd(t,e),fields:n.value.mapValue.fields}}function gC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,p){return c.useProto3Json?(ve(p===void 0||typeof p=="string",58123),at.fromBase64String(p||"")):(ve(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),at.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?L.UNKNOWN:RE(c.code);return new H(p,c.message||"")}(o);n=new PE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ah(t,r.document.name),i=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):se.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new jl(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ah(t,r.document),i=r.readTime?kn(r.readTime):se.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ah(t,r.document),i=r.removedTargetIds||[];n=new jl([],i,s,null)}else{if(!("filter"in e))return ne(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oC(s,i),l=r.targetId;n=new bE(l,o)}}return n}function yC(t,e){let n;if(e instanceof Ea)n={update:Yy(t,e.key,e.value)};else if(e instanceof pc)n={delete:Gd(t,e.key)};else if(e instanceof Kr)n={update:Yy(t,e.key,e.data),updateMask:SC(e.fieldMask)};else{if(!(e instanceof rC))return ne(16599,{Rt:e.type});n={verify:Gd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Iu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(t,e.precondition)),n}function _C(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?kn(s.updateTime):kn(i);return o.isEqual(se.min())&&(o=kn(i)),new eC(o,s.transformResults||[])}(n,e))):[]}function vC(t,e){return{documents:[DE(t,e.path)]}}function wC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DE(t,s);const i=function(c){if(c.length!==0)return ME(dn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:Bs(g.field),direction:IC(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:s}}function EC(t){let e=mC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=VE(m);return g instanceof dn&&dE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new Tu($s(A.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ac(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,v=m.values||[];return new Eu(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,v=m.values||[];return new Eu(v,g)}(n.endAt)),BA(e,s,o,i,l,"F",u,c)}function TC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function VE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create($s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>VE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function IC(t){return cC[t]}function xC(t){return hC[t]}function kC(t){return dC[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function $s(t){return st.fromServerFormat(t.fieldPath)}function ME(t){return t instanceof We?function(n){if(n.op==="=="){if(My(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(My(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(n.field),op:xC(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>ME(s));return r.length===1?r[0]:{compositeFilter:{op:kC(n.op),filters:r}}}(t):ne(54877,{filter:t})}function SC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,i=se.min(),o=se.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class AC{constructor(e){this.gt=e}}function CC(t){const e=EC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hd(e,e.limit,"L"):e}/**
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
 */class RC{constructor(){this.Dn=new bC}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Mr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class bC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Ie.comparator)).toArray()}}/**
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
 */const Jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},FE=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(FE,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class Ti{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ti(0)}static ur(){return new Ti(-1)}}/**
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
 */const Xy="LruGarbageCollector",PC=1048576;function Zy([t,e],[n,r]){const s=ae(t,n);return s===0?ae(e,r):s}class NC{constructor(e){this.Tr=e,this.buffer=new Qe(Zy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Xy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?W(Xy,"Ignoring IndexedDB error during garbage collection: ",n):await bi(n)}await this.Rr(3e5)})}}class DC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(oc.ue);const r=new NC(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Jy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Fs()<=ce.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function LC(t,e){return new DC(t,e)}/**
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
 */class VC{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oo(r.mutation,s,Ut.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=as();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=No(),l=function(){return No()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof Kr)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Oo(p.mutation,c,p.mutation.getFieldMask(),Ce.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>{var m;return l.set(c,new MC(p,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let s=new Le((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||Ut.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||he()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=EE();p.forEach(g=>{if(!i.has(g)){const v=AE(n.get(g),r.get(g));v!==null&&m.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(as());let l=ta,u=i;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,he())).next(p=>({batchId:l,changes:wE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=yo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new wa(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,mt.newInvalidDocument(p)))});let l=yo();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&Oo(p.mutation,c,Ut.empty(),Ce.now()),hc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class FC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:CC(s.bundledQuery),readTime:kn(s.readTime)}}(n)),V.resolve()}}/**
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
 */class UC{constructor(){this.overlays=new Le(X.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=as(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=as(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=as(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return V.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iC(n,r));let i=this.kr.get(n);i===void 0&&(i=he(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class yp{constructor(){this.qr=new Qe(Je.Qr),this.$r=new Qe(Je.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Je(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new X(new Ie([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new X(new Ie([])),r=new Je(n,e),s=new Je(n,e+1);let i=he();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return X.comparator(e.key,n.key)||ae(e.Hr,n.Hr)}static Ur(e,n){return ae(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
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
 */class $C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Qe(Je.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?lp:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ae);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Je(new X(i),0);let l=new Qe(ae);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Je(n,0),s=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zC{constructor(e){this.ni=e,this.docs=function(){return new Le(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vA(_A(p),r)<=0||(s.has(p.key)||hc(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HC(this)}getSize(e){return V.resolve(this.size)}}class HC extends VC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class WC{constructor(e){this.persistence=e,this.ii=new As(n=>hp(n),dp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new yp,this.targetCount=0,this._i=Ti.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
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
 */class UE{constructor(e,n){this.ai={},this.overlays={},this.ui=new oc(0),this.ci=!1,this.ci=!0,this.li=new BC,this.referenceDelegate=e(this),this.hi=new WC(this),this.indexManager=new RC,this.remoteDocumentCache=function(s){return new zC(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new AC(n),this.Ti=new FC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new $C(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new qC(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qC extends EA{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Ai=new yp,this.Ri=null}static Vi(e){return new _p(e)}get mi(){if(this.Ri)return this.Ri;throw ne(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const s=X.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Su{constructor(e,n){this.persistence=e,this.gi=new As(r=>xA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LC(this,n)}static Vi(e,n){return new Su(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ll(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class vp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vp(e,n.fromCache,r,s)}}/**
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
 */class GC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Bk()?8:TA(yt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GC;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Fs()<=ce.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Fs()<=ce.DEBUG&&W("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Fs()<=ce.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):V.resolve())}ps(e,n){if(By(n))return V.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hd(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,Hd(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,s){return By(n)||s.isEqual(se.min())?V.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?V.resolve(null):(Fs()<=ce.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.vs(e,o,n,yA(s,ta)).next(l=>l))})}bs(e,n){let r=new Qe(_E(e));return n.forEach((s,i)=>{hc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Fs()<=ce.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Us(n)),this.gs.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const wp="LocalStore",QC=3e8;class YC{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Le(ae),this.Ms=new As(i=>hp(i),dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function JC(t,e,n,r){return new YC(t,e,n,r)}async function BE(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=he();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function XC(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let v=V.resolve();return g.forEach(A=>{v=v.next(()=>p.getEntry(u,A)).next(R=>{const O=c.docVersions.get(A);ve(O!==null,48541),R.version.compareTo(O)<0&&(m.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),p.addEntry(R)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $E(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function ZC(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,p.addedDocuments,m)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(at.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):p.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(p.resumeToken,r)),s=s.insert(m,v),function(R,O,k){return R.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=QC?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,v,p)&&l.push(n.hi.updateTargetData(i,v))});let u=Kn(),c=he();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(eR(i,o,e.documentUpdates).next(p=>{u=p.Ls,c=p.ks})),!r.isEqual(se.min())){const p=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Fs=s,i))}function eR(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(wp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:s}})}function tR(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nR(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Qd(t,e,n){const r=oe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pi(o))throw o;W(wp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function e_(t,e,n){const r=oe(t);let s=se.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=oe(u),g=m.Ms.get(p);return g!==void 0?V.resolve(m.Fs.get(g)):m.hi.getTargetData(c,p)}(r,o,xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:he())).next(l=>(rR(r,zA(e),l),{documents:l,qs:i})))}function rR(t,e,n){let r=t.xs.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class t_{constructor(){this.activeTargetIds=QA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sR{constructor(){this.Fo=new t_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new t_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iR{xo(e){}shutdown(){}}/**
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
 */const n_="ConnectivityMonitor";class r_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(n_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(n_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _l=null;function Yd(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
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
 */const Ch="RestConnection",oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===vu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Yd(),l=this.Go(e,n.toUriEncodedString());W(Ch,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(l),p=qr(c);return this.jo(e,l,u,r,p).then(m=>(W(Ch,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Vr(Ch,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=oR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class lR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const dt="WebChannelConnection";class uR extends aR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Yd();return new Promise((l,u)=>{const c=new Hw;c.setWithCredentials(!0),c.listenOnce(Ww.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dl.NO_ERROR:const m=c.getResponseJson();W(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Dl.TIMEOUT:W(dt,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const g=c.getStatus();if(W(dt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const A=v==null?void 0:v.error;if(A&&A.status&&A.message){const R=function(k){const w=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(A.status);u(new H(R,A.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{W(dt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);W(dt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",p,r,15)})}P_(e,n,r){const s=Yd(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kw(),l=Gw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");W(dt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);this.T_(m);let g=!1,v=!1;const A=new lR({Ho:O=>{v?W(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(W(dt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(dt,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},Yo:()=>m.close()}),R=(O,k,w)=>{O.listen(k,S=>{try{w(S)}catch(N){setTimeout(()=>{throw N},0)}})};return R(m,go.EventType.OPEN,()=>{v||(W(dt,`RPC '${e}' stream ${s} transport opened.`),A.s_())}),R(m,go.EventType.CLOSE,()=>{v||(v=!0,W(dt,`RPC '${e}' stream ${s} transport closed`),A.__(),this.I_(m))}),R(m,go.EventType.ERROR,O=>{v||(v=!0,Vr(dt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),A.__(new H(L.UNAVAILABLE,"The operation could not be completed")))}),R(m,go.EventType.MESSAGE,O=>{var k;if(!v){const w=O.data[0];ve(!!w,16349);const S=w,N=(S==null?void 0:S.error)||((k=S[0])===null||k===void 0?void 0:k.error);if(N){W(dt,`RPC '${e}' stream ${s} received error:`,N);const F=N.status;let U=function(I){const E=ze[I];if(E!==void 0)return RE(E)}(F),T=N.message;U===void 0&&(U=L.INTERNAL,T="Unknown error status: "+F+" with message "+N.message),v=!0,A.__(new H(U,T)),m.close()}else W(dt,`RPC '${e}' stream ${s} received:`,w),A.a_(w)}}),R(l,qw.STAT_EVENT,O=>{O.stat===Md.PROXY?W(dt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Md.NOPROXY&&W(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.o_()},0),A}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Rh(){return typeof document<"u"?document:null}/**
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
 */function gc(t){return new fC(t,!0)}/**
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
 */class zE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const s_="PersistentStream";class HE{constructor(e,n,r,s,i,o,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return W(s_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(W(s_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends HE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=gC(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?kn(o.readTime):se.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Kd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=$d(u)?{documents:vC(i,u)}:{query:wC(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=NE(i,o.resumeToken);const c=Wd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ku(i,o.snapshotVersion.toTimestamp());const c=Wd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=TC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Kd(this.serializer),n.removeTarget=e,this.k_(n)}}class hR extends HE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=_C(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Kd(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yC(this.serializer,r))};this.k_(n)}}/**
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
 */class dR{}class fR extends dR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,qd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,qd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class pR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Gn(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Es="RemoteStore";class mR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(W(Es,"Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.Ia.add(4),await Ia(c),c.Aa.set("Unknown"),c.Ia.delete(4),await yc(c)}(this))})}),this.Aa=new pR(r,s)}}async function yc(t){if(Cs(t))for(const e of t.da)await e(!0)}async function Ia(t){for(const e of t.da)await e(!1)}function WE(t,e){const n=oe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),xp(n)?Ip(n):Ni(n).x_()&&Tp(n,e))}function Ep(t,e){const n=oe(t),r=Ni(n);n.Ta.delete(e),r.x_()&&qE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Cs(n)&&n.Aa.set("Unknown"))}function Tp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ni(t).H_(e)}function qE(t,e){t.Ra.$e(e),Ni(t).Y_(e)}function Ip(t){t.Ra=new uC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ni(t).start(),t.Aa.aa()}function xp(t){return Cs(t)&&!Ni(t).M_()&&t.Ta.size>0}function Cs(t){return oe(t).Ia.size===0}function GE(t){t.Ra=void 0}async function gR(t){t.Aa.set("Online")}async function yR(t){t.Ta.forEach((e,n)=>{Tp(t,e)})}async function _R(t,e){GE(t),xp(t)?(t.Aa.la(e),Ip(t)):t.Aa.set("Unknown")}async function vR(t,e,n){if(t.Aa.set("Online"),e instanceof PE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){W(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Au(t,r)}else if(e instanceof jl?t.Ra.Ye(e):e instanceof bE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(se.min()))try{const r=await $E(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ta.get(c);p&&i.Ta.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=i.Ta.get(u);if(!p)return;i.Ta.set(u,p.withResumeToken(at.EMPTY_BYTE_STRING,p.snapshotVersion)),qE(i,u);const m=new _r(p.target,u,c,p.sequenceNumber);Tp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Es,"Failed to raise snapshot:",r),await Au(t,r)}}async function Au(t,e,n){if(!Pi(e))throw e;t.Ia.add(1),await Ia(t),t.Aa.set("Offline"),n||(n=()=>$E(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Es,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await yc(t)})}function KE(t,e){return e().catch(n=>Au(t,n,e))}async function _c(t){const e=oe(t),n=Br(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lp;for(;wR(e);)try{const s=await tR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,ER(e,s)}catch(s){await Au(e,s)}QE(e)&&YE(e)}function wR(t){return Cs(t)&&t.Pa.length<10}function ER(t,e){t.Pa.push(e);const n=Br(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function QE(t){return Cs(t)&&!Br(t).M_()&&t.Pa.length>0}function YE(t){Br(t).start()}async function TR(t){Br(t).na()}async function IR(t){const e=Br(t);for(const n of t.Pa)e.X_(n.mutations)}async function xR(t,e,n){const r=t.Pa.shift(),s=pp.from(r,e,n);await KE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _c(t)}async function kR(t,e){e&&Br(t).Z_&&await async function(r,s){if(function(o){return aC(o)&&o!==L.ABORTED}(s.code)){const i=r.Pa.shift();Br(r).N_(),await KE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _c(r)}}(t,e),QE(t)&&YE(t)}async function i_(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),W(Es,"RemoteStore received new credentials");const r=Cs(n);n.Ia.add(3),await Ia(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await yc(n)}async function SR(t,e){const n=oe(t);e?(n.Ia.delete(2),await yc(n)):e||(n.Ia.add(2),await Ia(n),n.Aa.set("Unknown"))}function Ni(t){return t.Va||(t.Va=function(n,r,s){const i=oe(n);return i.ia(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:gR.bind(null,t),e_:yR.bind(null,t),n_:_R.bind(null,t),J_:vR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),xp(t)?Ip(t):t.Aa.set("Unknown")):(await t.Va.stop(),GE(t))})),t.Va}function Br(t){return t.ma||(t.ma=function(n,r,s){const i=oe(n);return i.ia(),new hR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:TR.bind(null,t),n_:kR.bind(null,t),ea:IR.bind(null,t),ta:xR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await _c(t)):(await t.ma.stop(),t.Pa.length>0&&(W(Es,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class kp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new kp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sp(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Pi(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class li{static emptySet(e){return new li(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class o_{constructor(){this.fa=new Le(X.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ne(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ii(e,n,li.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class AR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class CR{constructor(){this.queries=a_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=a_(),i.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function a_(){return new As(t=>yE(t),cc)}async function Ap(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new AR,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Sp(o,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Rp(n)}async function Cp(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RR(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Rp(n)}function bR(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Rp(t){t.Da.forEach(e=>{e.next()})}var Jd,l_;(l_=Jd||(Jd={})).Fa="default",l_.Cache="cache";class bp{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Jd.Cache}}/**
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
 */class JE{constructor(e){this.key=e}}class XE{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=he(),this.mutatedKeys=he(),this.Xa=_E(e),this.eu=new li(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new o_,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),v=hc(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;g&&v?g.data.isEqual(v.data)?A!==R&&(r.track({type:3,doc:v}),O=!0):this.iu(g,v)||(r.track({type:2,doc:v}),O=!0,(u&&this.Xa(v,u)>0||c&&this.Xa(v,c)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),O=!0):g&&!v&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(v?(o=o.add(v),i=R?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((p,m)=>function(v,A){const R=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{At:O})}};return R(v)-R(A)}(p.type,m.type)||this.Xa(p.doc,m.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Ii(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new o_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=he(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new XE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new JE(r))}),n}uu(e){this.Ha=e.qs,this.Za=he();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ii.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Pp="SyncEngine";class NR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OR{constructor(e){this.key=e,this.lu=!1}}class DR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new As(l=>yE(l),cc),this.Tu=new Map,this.Iu=new Set,this.du=new Le(X.comparator),this.Eu=new Map,this.Au=new yp,this.Ru={},this.Vu=new Map,this.mu=Ti.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LR(t,e,n=!0){const r=sT(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await ZE(r,e,n,!0),s}async function VR(t,e){const n=sT(t);await ZE(n,e,!0,!1)}async function ZE(t,e,n,r){const s=await nR(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await MR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&WE(t.remoteStore,s),l}async function MR(t,e,n,r,s){t.gu=(m,g,v)=>async function(R,O,k,w){let S=O.view.nu(k);S.Ds&&(S=await e_(R.localStore,O.query,!1).then(({documents:T})=>O.view.nu(T,S)));const N=w&&w.targetChanges.get(O.targetId),F=w&&w.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(S,R.isPrimaryClient,N,F);return c_(R,O.targetId,U._u),U.snapshot}(t,m,g,v);const i=await e_(t.localStore,e,!0),o=new PR(e,i.qs),l=o.nu(i.documents),u=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);c_(t,n,c._u);const p=new NR(e,n,o);return t.Pu.set(e,p),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function jR(t,e,n){const r=oe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!cc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ep(r.remoteStore,s.targetId),Xd(r,s.targetId)}).catch(bi)):(Xd(r,s.targetId),await Qd(r.localStore,s.targetId,!0))}async function FR(t,e){const n=oe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ep(n.remoteStore,r.targetId))}async function UR(t,e,n){const r=GR(t);try{const s=await function(o,l){const u=oe(o),c=Ce.now(),p=l.reduce((v,A)=>v.add(A.key),he());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Kn(),R=he();return u.Os.getEntries(v,p).next(O=>{A=O,A.forEach((k,w)=>{w.isValidDocument()||(R=R.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(O=>{m=O;const k=[];for(const w of l){const S=nC(w,m.get(w.key).overlayedDocument);S!=null&&k.push(new Kr(w.key,S,uE(S.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,k,l)}).next(O=>{g=O;const k=O.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(v,O.batchId,k)})}).then(()=>({batchId:g.batchId,changes:wE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new Le(ae)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,s.batchId,n),await xa(r,s.changes),await _c(r.remoteStore)}catch(s){const i=Sp(s,"Failed to persist write");n.reject(i)}}async function eT(t,e){const n=oe(t);try{const r=await ZC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ve(o.lu,14607):s.removedDocuments.size>0&&(ve(o.lu,42227),o.lu=!1))}),await xa(n,r,e)}catch(r){await bi(r)}}function u_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.wa)g.va(l)&&(c=!0)}),c&&Rp(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Le(X.comparator);o=o.insert(i,mt.newNoDocument(i,se.min()));const l=he().add(i),u=new mc(se.min(),new Map,new Le(ae),o,l);await eT(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Np(r)}else await Qd(r.localStore,e,!1).then(()=>Xd(r,e,n)).catch(bi)}async function $R(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await XC(n.localStore,e);nT(n,r,null),tT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xa(n,s)}catch(s){await bi(s)}}async function zR(t,e,n){const r=oe(t);try{const s=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);nT(r,e,n),tT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xa(r,s)}catch(s){await bi(s)}}function tT(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function nT(t,e,n){const r=oe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Xd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||rT(t,r)})}function rT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ep(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Np(t))}function c_(t,e,n){for(const r of n)r instanceof JE?(t.Au.addReference(r.key,e),HR(t,r)):r instanceof XE?(W(Pp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||rT(t,r.key)):ne(19791,{yu:r})}function HR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(Pp,"New document in limbo: "+n),t.Iu.add(r),Np(t))}function Np(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Ie.fromString(e)),r=t.mu.next();t.Eu.set(r,new OR(n)),t.du=t.du.insert(n,r),WE(t.remoteStore,new _r(xn(uc(n.path)),r,"TargetPurposeLimboResolution",oc.ue))}}async function xa(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=vp.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(u,c){const p=oe(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.Is,v=>p.persistence.referenceDelegate.addReference(m,g.targetId,v)).next(()=>V.forEach(g.ds,v=>p.persistence.referenceDelegate.removeReference(m,g.targetId,v)))))}catch(m){if(!Pi(m))throw m;W(wp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const v=p.Fs.get(g),A=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(A);p.Fs=p.Fs.insert(g,R)}}}(r.localStore,i))}async function WR(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){W(Pp,"User change. New user:",e.toKey());const r=await BE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xa(n,r.Bs)}}function qR(t,e){const n=oe(t),r=n.Eu.get(e);if(r&&r.lu)return he().add(r.key);{let s=he();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function sT(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.hu.J_=RR.bind(null,e.eventManager),e.hu.pu=bR.bind(null,e.eventManager),e}function GR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zR.bind(null,e),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return JC(this.persistence,new KC,e.initialUser,this.serializer)}Du(e){return new UE(_p.Vi,this.serializer)}bu(e){return new sR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class KR extends Cu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ve(this.persistence.referenceDelegate instanceof Su,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new UE(r=>Su.Vi(r,n),this.serializer)}}class Zd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await SR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CR}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=function(i){return new uR(i)}(e.databaseInfo);return function(i,o,l,u){return new fR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new mR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>u_(this.syncEngine,n,0),function(){return r_.C()?new r_:new iR}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new DR(s,i,o,l,u,c);return p&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);W(Es,"RemoteStore shutting down."),i.Ia.add(5),await Ia(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zd.provider={build:()=>new Zd};/**
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
 */class Op{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const $r="FirestoreClient";class QR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bh(t,e){t.asyncQueue.verifyOperationInProgress(),W($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await BE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Vr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Vr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function h_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YR(t);W($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>i_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>i_(e.remoteStore,s)),t._onlineComponents=e}async function YR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W($r,"Using user provided OfflineComponentProvider");try{await bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vr("Error using user provided cache. Falling back to memory cache: "+n),await bh(t,new Cu)}}else W($r,"Using default OfflineComponentProvider"),await bh(t,new KR(void 0));return t._offlineComponents}async function iT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W($r,"Using user provided OnlineComponentProvider"),await h_(t,t._uninitializedComponentsProvider._online)):(W($r,"Using default OnlineComponentProvider"),await h_(t,new Zd))),t._onlineComponents}function JR(t){return iT(t).then(e=>e.syncEngine)}async function Ru(t){const e=await iT(t),n=e.eventManager;return n.onListen=LR.bind(null,e.syncEngine),n.onUnlisten=jR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FR.bind(null,e.syncEngine),n}function XR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const p=new Op({next:g=>{p.Ou(),o.enqueueAndForget(()=>Cp(i,m));const v=g.docs.has(l);!v&&g.fromCache?c.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new bp(uc(l.path),p,{includeMetadataChanges:!0,ka:!0});return Ap(i,m)}(await Ru(t),t.asyncQueue,e,n,r)),r.promise}function ZR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const p=new Op({next:g=>{p.Ou(),o.enqueueAndForget(()=>Cp(i,m)),g.fromCache&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new bp(l,p,{includeMetadataChanges:!0,ka:!0});return Ap(i,m)}(await Ru(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function oT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const d_=new Map;/**
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
 */const aT="firestore.googleapis.com",f_=!0;class p_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aT,this.ssl=f_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:f_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=FE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PC)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aA;switch(r.type){case"firstParty":return new hA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=d_.get(n);r&&(W("ComponentProvider","Removing Datastore"),d_.delete(n),r.terminate())}(this),Promise.resolve()}}function e2(t,e,n,r={}){var s;t=Ot(t,vc);const i=qr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(rp(`https://${u}`),sp("Firestore",!0)),o.host!==aT&&o.host!==u&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:r});if(!vs(c,l)&&(t._setSettings(c),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=ft.MOCK_USER;else{p=Mw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ft(g)}t._authCredentials=new lA(new Yw(p,m))}}/**
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
 */class Rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(va(n,je._jsonSchema))return new je(e,r||null,new X(Ie.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:qe("string",je._jsonSchemaVersion),referencePath:qe("string")};class br extends Rs{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new X(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function ls(t,e,...n){if(t=Te(t),Xw("collection","path",e),t instanceof vc){const r=Ie.fromString(e,...n);return Ay(r),new br(t,null,r)}{if(!(t instanceof je||t instanceof br))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ay(r),new br(t.firestore,null,r)}}function oo(t,e,...n){if(t=Te(t),arguments.length===1&&(e=ap.newId()),Xw("doc","path",e),t instanceof vc){const r=Ie.fromString(e,...n);return Sy(r),new je(t,null,new X(r))}{if(!(t instanceof je||t instanceof br))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Sy(r),new je(t.firestore,t instanceof br?t.converter:null,new X(r))}}/**
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
 */const m_="AsyncQueue";class g_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zE(this,"async_queue_retry"),this.oc=()=>{const r=Rh();r&&W(m_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Un;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pi(e))throw e;W(m_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Gn("INTERNAL UNHANDLED ERROR: ",y_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=kp.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&ne(47125,{hc:y_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function y_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function __(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qn extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new g_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new g_(e),this._firestoreClient=void 0,await e}}}function t2(t,e){const n=typeof t=="object"?t:sc(),r=typeof t=="string"?t:vu,s=_a(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dw("firestore");i&&e2(s,...i)}return s}function ka(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||n2(t),t._firestoreClient}function n2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,p){return new AA(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,oT(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new QR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(at.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(va(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:qe("string",Qt._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dp{constructor(e){this._methodName=e}}/**
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
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(va(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:qe("string",Sn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(va(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:qe("string",An._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const r2=/^__.*__$/;class s2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class lT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ec:t})}}class Lp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return bu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(uT(this.Ec)&&r2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Dc(e,n,r,s=!1){return new Lp({Ec:e,methodName:n,bc:r,path:st.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wc(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cT(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Vp("Data must be an object, but it was:",o,r);const l=fT(r,o);let u,c;if(i.merge)u=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=ef(e,m,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);mT(p,g)||p.push(g)}u=new Ut(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new s2(new Ct(l),u,c)}class Ec extends Dp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}function hT(t,e,n,r){const s=t.Dc(1,e,n);Vp("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();Gr(r,(u,c)=>{const p=Mp(e,u,n);c=Te(c);const m=s.gc(p);if(c instanceof Ec)i.push(p);else{const g=Aa(c,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new Ut(i);return new lT(o,l,s.fieldTransforms)}function dT(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[ef(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ef(e,i[g])),u.push(i[g+1]);const c=[],p=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!mT(c,l[g])){const v=l[g];let A=u[g];A=Te(A);const R=o.gc(v);if(A instanceof Ec)c.push(v);else{const O=Aa(A,R);O!=null&&(c.push(v),p.set(v,O))}}const m=new Ut(c);return new lT(p,m,o.fieldTransforms)}function o2(t,e,n,r=!1){return Aa(n,t.Dc(r?4:3,e))}function Aa(t,e){if(pT(t=Te(t)))return Vp("Unsupported field value:",e,t),fT(t,e);if(t instanceof Dp)return function(r,s){if(!uT(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Aa(l,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:ku(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(s.serializer,i)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:NE(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,l){return{mapValue:{fields:{[aE]:{stringValue:lE},[wu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return fp(l.serializer,c)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${ic(r)}`)}(t,e)}function fT(t,e){const n={};return tE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,s)=>{const i=Aa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function pT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Sn||t instanceof Qt||t instanceof je||t instanceof Dp||t instanceof An)}function Vp(t,e,n){if(!pT(n)||!Zw(n)){const r=ic(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ef(t,e,n){if((e=Te(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return Mp(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const a2=new RegExp("[~\\*/\\[\\]]");function Mp(t,e,n){if(e.search(a2)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function mT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l2 extends gT{data(){return super.data()}}function jp(t,e){return typeof e=="string"?Mp(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
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
 */function yT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fp{}class u2 extends Fp{}function c2(t,e,...n){let r=[];e instanceof Fp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Up).length,l=i.filter(u=>u instanceof Tc).length;if(o>1||o>0&&l>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tc extends u2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tc(e,n,r)}_apply(e){const n=this._parse(e);return _T(e._query,n),new Rs(e.firestore,e.converter,zd(e._query,n))}_parse(e){const n=wc(e.firestore);return function(i,o,l,u,c,p,m){let g;if(c.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){w_(m,p);const A=[];for(const R of m)A.push(v_(u,i,R));g={arrayValue:{values:A}}}else g=v_(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||w_(m,p),g=o2(l,o,m,p==="in"||p==="not-in");return We.create(c,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function h2(t,e,n){const r=e,s=jp("where",t);return Tc._create(s,r,n)}class Up extends Fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Up(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)_T(o,u),o=zd(o,u)}(e._query,n),new Rs(e.firestore,e.converter,zd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function v_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gE(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!X.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ly(t,new X(r))}if(n instanceof je)return Ly(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function w_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _T(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class d2{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[wu].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new An(i)}convertGeoPoint(e){return new Sn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(jE(r),9688,{name:e});const s=new ra(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hs extends gT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:qe("string",hs._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class Fl extends hs{data(e={}){return super.data(e)}}class ds{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Fl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Fl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:f2(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
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
 */function p2(t){t=Ot(t,je);const e=Ot(t.firestore,Qn);return XR(ka(e),t._key).then(n=>wT(e,t,n))}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:qe("string",ds._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class Bp extends d2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function Ul(t){t=Ot(t,Rs);const e=Ot(t.firestore,Qn),n=ka(e),r=new Bp(e);return yT(t._query),ZR(n,t._query).then(s=>new ds(e,r,t,s))}function m2(t,e,n){t=Ot(t,je);const r=Ot(t.firestore,Qn),s=vT(t.converter,e,n);return Ic(r,[cT(wc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function g2(t,e,n,...r){t=Ot(t,je);const s=Ot(t.firestore,Qn),i=wc(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Sa?dT(i,"updateDoc",t._key,e,n,r):hT(i,"updateDoc",t._key,e),Ic(s,[o.toMutation(t._key,Dt.exists(!0))])}function y2(t){return Ic(Ot(t.firestore,Qn),[new pc(t._key,Dt.none())])}function _2(t,...e){var n,r,s;t=Te(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||__(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(__(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,c,p;if(t instanceof je)c=Ot(t.firestore,Qn),p=uc(t._key.path),u={next:m=>{e[o]&&e[o](wT(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ot(t,Rs);c=Ot(m.firestore,Qn),p=m._query;const g=new Bp(c);u={next:v=>{e[o]&&e[o](new ds(c,g,m,v))},error:e[o+1],complete:e[o+2]},yT(t._query)}return function(g,v,A,R){const O=new Op(R),k=new bp(v,O,A);return g.asyncQueue.enqueueAndForget(async()=>Ap(await Ru(g),k)),()=>{O.Ou(),g.asyncQueue.enqueueAndForget(async()=>Cp(await Ru(g),k))}}(ka(c),p,l,u)}function Ic(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>UR(await JR(r),s,i)),i.promise}(ka(t),e)}function wT(t,e,n){const r=n.docs.get(e._key),s=new Bp(t);return new hs(t,s,e._key,r,new vo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class v2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=wc(e)}set(e,n,r){this._verifyNotCommitted();const s=Ph(e,this._firestore),i=vT(s.converter,n,r),o=cT(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Dt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ph(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Sa?dT(this._dataReader,"WriteBatch.update",i._key,n,r,s):hT(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ph(e,this._firestore);return this._mutations=this._mutations.concat(new pc(n._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ph(t,e){if((t=Te(t)).firestore!==e)throw new H(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function E_(t){return ka(t=Ot(t,Qn)),new v2(t,e=>Ic(t,e))}(function(e,n=!0){(function(s){Ri=s})(Ss),Lr(new Wn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Qn(new uA(r.getProvider("auth-internal")),new dA(o,r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Xt(Ey,Ty,e),Xt(Ey,Ty,"esm2017")})();function $p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function aa(t){return this instanceof aa?(this.v=t,this):new aa(t)}function w2(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),l("next"),l("throw"),l("return",o),s[Symbol.asyncIterator]=function(){return this},s;function o(v){return function(A){return Promise.resolve(A).then(v,m)}}function l(v,A){r[v]&&(s[v]=function(R){return new Promise(function(O,k){i.push([v,R,O,k])>1||u(v,R)})},A&&(s[v]=A(s[v])))}function u(v,A){try{c(r[v](A))}catch(R){g(i[0][3],R)}}function c(v){v.value instanceof aa?Promise.resolve(v.value.v).then(p,m):g(i[0][2],v)}function p(v){u("next",v)}function m(v){u("throw",v)}function g(v,A){v(A),i.shift(),i.length&&u(i[0][0],i[0][1])}}function ET(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E2=ET,TT=new ga("auth","Firebase",ET());/**
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
 */const Pu=new rc("@firebase/auth");function T2(t,...e){Pu.logLevel<=ce.WARN&&Pu.warn(`Auth (${Ss}): ${t}`,...e)}function Bl(t,...e){Pu.logLevel<=ce.ERROR&&Pu.error(`Auth (${Ss}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw zp(t,...e)}function Cn(t,...e){return zp(t,...e)}function IT(t,e,n){const r=Object.assign(Object.assign({},E2()),{[e]:n});return new ga("auth","Firebase",r).create(e,{appName:t.name})}function Pr(t){return IT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TT.create(t,...e)}function te(t,e,...n){if(!t)throw zp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Yn(t,e){t||Mn(e)}/**
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
 */function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I2(){return T_()==="http:"||T_()==="https:"}function T_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function x2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I2()||jk()||"connection"in navigator)?navigator.onLine:!0}function k2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Lk()||Fk()}get(){return x2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hp(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const A2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C2=new Ca(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qr(t,e,n,r,s={}){return kT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return Mk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&qr(t.emulatorConfig.host)&&(c.credentials="include"),xT.fetch()(await ST(t,t.config.apiHost,n,l),c)})}async function kT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},S2),e);try{const s=new b2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw IT(t,p,c);fn(t,p)}}catch(s){if(s instanceof mn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function xc(t,e,n,r,s={}){const i=await Qr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ST(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hp(t.config,s):`${t.config.apiScheme}://${s}`;return A2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function R2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class b2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),C2.get())})}}function vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Cn(t,e,r);return s.customData._tokenResponse=n,s}function I_(t){return t!==void 0&&t.enterprise!==void 0}class P2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return R2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N2(t,e){return Qr(t,"GET","/v2/recaptchaConfig",bs(t,e))}/**
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
 */async function O2(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function Nu(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D2(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=Wp(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Do(Nh(s.auth_time)),issuedAtTime:Do(Nh(s.iat)),expirationTime:Do(Nh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nh(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nw(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function x_(t){const e=Wp(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&L2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class V2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),s=await la(t,Nu(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?AT(i.providerUserInfo):[],l=j2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new nf(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function M2(t){const e=Te(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function AT(t){return t.map(e=>{var{providerId:n}=e,r=$p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function F2(t,e){const n=await kT(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ST(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&qr(t.emulatorConfig.host)&&(u.credentials="include"),xT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U2(t,e){return Qr(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):x_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=x_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await F2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ui;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D2(this,e)}reload(){return M2(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await la(this,O2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:N,isAnonymous:F,providerData:U,stsTokenManager:T}=n;te(S&&T,e,"internal-error");const _=ui.fromJSON(this.name,T);te(typeof S=="string",e,"internal-error"),sr(m,e.name),sr(g,e.name),te(typeof N=="boolean",e,"internal-error"),te(typeof F=="boolean",e,"internal-error"),sr(v,e.name),sr(A,e.name),sr(R,e.name),sr(O,e.name),sr(k,e.name),sr(w,e.name);const I=new ln({uid:S,auth:e,email:g,emailVerified:N,displayName:m,isAnonymous:F,photoURL:A,phoneNumber:v,tenantId:R,stsTokenManager:_,createdAt:k,lastLoginAt:w});return U&&Array.isArray(U)&&(I.providerData=U.map(E=>Object.assign({},E))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ui;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ou(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?AT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ui;l.updateFromIdToken(r);const u=new ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const k_=new Map;function jn(t){Yn(t instanceof Function,"Expected a class definition");let e=k_.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k_.set(t,e),e)}/**
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
 */class CT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CT.type="NONE";const S_=CT;/**
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
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$l(this.userKey,s.apiKey,i),this.fullPersistenceKey=$l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Nu(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(jn(S_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||jn(S_);const o=$l(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await Nu(e,{idToken:p}).catch(()=>{});if(!g)break;m=await ln._fromGetAccountInfoResponse(e,g,p)}else m=ln._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ci(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ci(i,e,r))}}/**
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
 */function A_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DT(e))return"Blackberry";if(LT(e))return"Webos";if(bT(e))return"Safari";if((e.includes("chrome/")||PT(e))&&!e.includes("edge/"))return"Chrome";if(OT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RT(t=yt()){return/firefox\//i.test(t)}function bT(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PT(t=yt()){return/crios\//i.test(t)}function NT(t=yt()){return/iemobile/i.test(t)}function OT(t=yt()){return/android/i.test(t)}function DT(t=yt()){return/blackberry/i.test(t)}function LT(t=yt()){return/webos/i.test(t)}function qp(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function B2(t=yt()){var e;return qp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $2(){return Uk()&&document.documentMode===10}function VT(t=yt()){return qp(t)||OT(t)||LT(t)||DT(t)||/windows phone/i.test(t)||NT(t)}/**
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
 */function MT(t,e=[]){let n;switch(t){case"Browser":n=A_(yt());break;case"Worker":n=`${A_(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
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
 */class z2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function H2(t,e={}){return Qr(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
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
 */const W2=6;class q2{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class G2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C_(this),this.idTokenSubscription=new C_(this),this.beforeStateQueue=new z2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nu(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Pr(this));const n=e?Te(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H2(this),n=new q2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=MT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&T2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Te(t)}class C_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kk(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K2(t){kc=t}function jT(t){return kc.loadJS(t)}function Q2(){return kc.recaptchaEnterpriseScript}function Y2(){return kc.gapiScript}function J2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class X2{constructor(){this.enterprise=new Z2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Z2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eb="recaptcha-enterprise",FT="NO_RECAPTCHA";class tb{constructor(e){this.type=eb,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{N2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new P2(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;I_(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(FT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new X2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&I_(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Q2();u.length!==0&&(u+=l),jT(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function R_(t,e,n,r=!1,s=!1){const i=new tb(t);let o;if(s)o=FT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function b_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await R_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await R_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function nb(t,e){const n=_a(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vs(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sb(t,e,n){const r=Oi(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=UT(e),{host:o,port:l}=ib(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(vs(c,r.config.emulator)&&vs(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,qr(o)?(rp(`${i}//${o}${u}`),sp("Auth",!0)):ob()}function UT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ib(t){const e=UT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:P_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:P_(o)}}}function P_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function ab(t,e){return Qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lb(t,e){return xc(t,"POST","/v1/accounts:signInWithPassword",bs(t,e))}/**
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
 */async function ub(t,e){return xc(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}async function cb(t,e){return xc(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}/**
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
 */class ua extends Gp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return b_(e,n,"signInWithPassword",lb);case"emailLink":return ub(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return b_(e,r,"signUpPassword",ab);case"emailLink":return cb(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hi(t,e){return xc(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
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
 */const hb="http://localhost";class Ts extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$p(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function db(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fb(t){const e=po(mo(t)).link,n=e?po(mo(e)).deep_link_id:null,r=po(mo(t)).deep_link_id;return(r?po(mo(r)).link:null)||r||n||e||t}class Kp{constructor(e){var n,r,s,i,o,l;const u=po(mo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=db((s=u.mode)!==null&&s!==void 0?s:null);te(c&&p&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=fb(e);try{return new Kp(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kp.parseLink(n);return te(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class BT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ra extends BT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Ra{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class dr extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
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
 */class fr extends Ra{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends Ra{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=N_(r);return new xi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=N_(r);return new xi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function N_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Du extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Du(e,n,r,s)}}function $T(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(t,i,e,r):i})}async function pb(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
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
 */async function mb(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Pr(r));const s="reauthenticate";try{const i=await la(t,$T(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Wp(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),xi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
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
 */async function zT(t,e,n=!1){if(jt(t.app))return Promise.reject(Pr(t));const r="signIn",s=await $T(t,r,e),i=await xi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gb(t,e){return zT(Oi(t),e)}/**
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
 */async function yb(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _b(t,e,n){return jt(t.app)?Promise.reject(Pr(t)):gb(Te(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yb(t),r})}function vb(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function wb(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Eb(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function Tb(t){return Te(t).signOut()}const Lu="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ib=1e3,xb=10;class WT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=VT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WT.type="LOCAL";const kb=WT;/**
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
 */class qT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qT.type="SESSION";const GT=qT;/**
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
 */function Sb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await Sb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Qp("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function Cb(t){Rn().location.href=t}/**
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
 */function KT(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function Rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pb(){return KT()?self:null}/**
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
 */const QT="firebaseLocalStorageDb",Nb=1,Vu="firebaseLocalStorage",YT="fbase_key";class ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function Ob(){const t=indexedDB.deleteDatabase(QT);return new ba(t).toPromise()}function rf(){const t=indexedDB.open(QT,Nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:YT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await Ob(),e(await rf()))})})}async function O_(t,e,n){const r=Ac(t,!0).put({[YT]:e,value:n});return new ba(r).toPromise()}async function Db(t,e){const n=Ac(t,!1).get(e),r=await new ba(n).toPromise();return r===void 0?null:r.value}function D_(t,e){const n=Ac(t,!0).delete(e);return new ba(n).toPromise()}const Lb=800,Vb=3;class JT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(Pb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rb(),!this.activeServiceWorker)return;this.sender=new Ab(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rf();return await O_(e,Lu,"1"),await D_(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>O_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Db(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ac(s,!1).getAll();return new ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JT.type="LOCAL";const Mb=JT;new Ca(3e4,6e4);/**
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
 */function jb(t,e){return e?jn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yp extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fb(t){return zT(t.auth,new Yp(t),t.bypassAuthState)}function Ub(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),mb(n,new Yp(t),t.bypassAuthState)}async function Bb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),pb(n,new Yp(t),t.bypassAuthState)}/**
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
 */class XT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fb;case"linkViaPopup":case"linkViaRedirect":return Bb;case"reauthViaPopup":case"reauthViaRedirect":return Ub;default:fn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $b=new Ca(2e3,1e4);class ti extends XT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$b.get())};e()}}ti.currentPopupAction=null;/**
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
 */const zb="pendingRedirect",zl=new Map;class Hb extends XT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await Wb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wb(t,e){const n=Kb(e),r=Gb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qb(t,e){zl.set(t._key(),e)}function Gb(t){return jn(t._redirectPersistence)}function Kb(t){return $l(zb,t.config.apiKey,t.name)}async function Qb(t,e,n=!1){if(jt(t.app))return Promise.reject(Pr(t));const r=Oi(t),s=jb(r,e),o=await new Hb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yb=10*60*1e3;class Jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(L_(e))}saveEventToCache(e){this.cachedEventUids.add(L_(e)),this.lastProcessedEventTime=Date.now()}}function L_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZT(t);default:return!1}}/**
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
 */async function Zb(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
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
 */const eP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tP=/^https?/;async function nP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zb(t);for(const n of e)try{if(rP(n))return}catch{}fn(t,"unauthorized-domain")}function rP(t){const e=tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tP.test(n))return!1;if(eP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sP=new Ca(3e4,6e4);function V_(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iP(t){return new Promise((e,n)=>{var r,s,i;function o(){V_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V_(),n(Cn(t,"network-request-failed"))},timeout:sP.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=J2("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},jT(`${Y2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function oP(t){return Hl=Hl||iP(t),Hl}/**
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
 */const aP=new Ca(5e3,15e3),lP="__/auth/iframe",uP="emulator/auth/iframe",cP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dP(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,uP):`https://${t.config.authDomain}/${lP}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},s=hP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ya(r).slice(1)}`}async function fP(t){const e=await oP(t),n=Rn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:dP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},aP.get());function u(){Rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const pP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mP=500,gP=600,yP="_blank",_P="http://localhost";class M_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,n,r=mP,s=gP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=yt().toLowerCase();n&&(l=PT(c)?yP:n),RT(c)&&(e=e||_P,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[v,A])=>`${g}${v}=${A},`,"");if(B2(c)&&l!=="_self")return wP(e||"",l),new M_(null);const m=window.open(e||"",l,p);te(m,t,"popup-blocked");try{m.focus()}catch{}return new M_(m)}function wP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EP="__/auth/handler",TP="emulator/auth/handler",IP=encodeURIComponent("fac");async function j_(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:s};if(e instanceof BT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Ra){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${IP}=${encodeURIComponent(u)}`:"";return`${xP(t)}?${ya(l).slice(1)}${c}`}function xP({config:t}){return t.emulator?Hp(t,TP):`https://${t.authDomain}/${EP}`}/**
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
 */const Oh="webStorageSupport";class kP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GT,this._completeRedirectFn=Qb,this._overrideRedirectResult=qb}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await j_(e,n,r,tf(),s);return vP(e,o,Qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await j_(e,n,r,tf(),s);return Cb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fP(e),r=new Jb(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oh,{type:Oh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VT()||bT()||qp()}}const SP=kP;var F_="@firebase/auth",U_="1.10.8";/**
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
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RP(t){Lr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:MT(t)},c=new G2(r,s,i,u);return rb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lr(new Wn("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(F_,U_,CP(t)),Xt(F_,U_,"esm2017")}/**
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
 */const bP=5*60,PP=Vw("authIdTokenMaxAge")||bP;let B_=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PP)return;const s=n==null?void 0:n.token;B_!==s&&(B_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function OP(t=sc()){const e=_a(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nb(t,{popupRedirectResolver:SP,persistence:[Mb,kb,GT]}),r=Vw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=NP(i.toString());wb(n,o,()=>o(n.currentUser)),vb(n,l=>o(l))}}const s=Ow("auth");return s&&sb(n,`http://${s}`),n}function DP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}K2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RP("Browser");/**
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
 */const e1="firebasestorage.googleapis.com",t1="storageBucket",LP=2*60*1e3,VP=10*60*1e3;/**
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
 */class Ue extends mn{constructor(e,n,r=0){super(Dh(e),`Firebase Storage: ${n} (${Dh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Dh(t){return"storage/"+t}function Jp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function MP(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jP(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function UP(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BP(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $P(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zP(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function HP(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function WP(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qP(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+t1+"' property when initializing the app?")}function GP(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KP(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QP(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sf(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function n1(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Lo(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ao(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw WP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},R=n===e1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",k=new RegExp(`^https?://${R}/${s}/${O}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:v,indices:A,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<S.length;N++){const F=S[N],U=F.regex.exec(e);if(U){const T=U[F.indices.bucket];let _=U[F.indices.path];_||(_=""),r=new Bt(T,_),F.postModify(r);break}}if(r==null)throw HP(e);return r}}class JP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function XP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function p(...O){c||(c=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(v,u())},O)}function g(){i&&clearTimeout(i)}function v(O,...k){if(c){g();return}if(O){g(),p.call(null,O,...k);return}if(u()||o){g(),p.call(null,O,...k);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let A=!1;function R(O){A||(A=!0,g(),!c&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function ZP(t){t(!1)}/**
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
 */function eN(t){return t!==void 0}function tN(t){return typeof t=="object"&&!Array.isArray(t)}function Xp(t){return typeof t=="string"||t instanceof String}function $_(t){return Zp()&&t instanceof Blob}function Zp(){return typeof Blob<"u"}function z_(t,e,n,r){if(r<e)throw sf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Cc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function r1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var fs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fs||(fs={}));/**
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
 */function nN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class rN{constructor(e,n,r,s,i,o,l,u,c,p,m,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,R)=>{this.resolve_=A,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===fs.NO_ERROR,u=i.getStatus();if(!l||nN(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===fs.ABORT;r(!1,new wl(!1,null,p));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new wl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());eN(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Jp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?n1():zP();o(u)}else{const u=$P();o(u)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=XP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lN(t,e,n,r,s,i,o=!0,l=!1){const u=r1(t.urlParams),c=t.url+u,p=Object.assign({},t.headers);return oN(p,e),sN(p,n),iN(p,i),aN(p,r),new rN(c,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function uN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cN(...t){const e=uN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zp())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dN(t){if(typeof atob>"u")throw QP("base-64");return atob(t)}/**
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
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lh{constructor(e,n){this.data=e,this.contentType=n||null}}function fN(t,e){switch(t){case En.RAW:return new Lh(s1(e));case En.BASE64:case En.BASE64URL:return new Lh(i1(t,e));case En.DATA_URL:return new Lh(mN(e),gN(e))}throw Jp()}function s1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pN(t){let e;try{e=decodeURIComponent(t)}catch{throw Lo(En.DATA_URL,"Malformed data URL.")}return s1(e)}function i1(t,e){switch(t){case En.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Lo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Lo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dN(e)}catch(s){throw s.message.includes("polyfill")?s:Lo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class o1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Lo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mN(t){const e=new o1(t);return e.base64?i1(En.BASE64,e.rest):pN(e.rest)}function gN(t){return new o1(t).contentType}function yN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class mr{constructor(e,n){let r=0,s="";$_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if($_(this.data_)){const r=this.data_,s=hN(r,e,n);return s===null?null:new mr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Zp()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(cN.apply(null,n))}else{const n=e.map(o=>Xp(o)?fN(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new mr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function a1(t){let e;try{e=JSON.parse(t)}catch{return null}return tN(e)?e:null}/**
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
 */function _N(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function l1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function wN(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||wN}}let El=null;function EN(t){return!Xp(t)||t.length<2?t:l1(t)}function u1(){if(El)return El;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return EN(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),El=t,El}function TN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Bt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function IN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return TN(r,t),r}function c1(t,e,n){const r=a1(e);return r===null?null:IN(t,r,n)}function xN(t,e,n,r){const s=a1(e);if(s===null||!Xp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),v=Cc(g,n,r),A=r1({alt:"media",token:c});return v+A})[0]}function kN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class em{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function h1(t){if(!t)throw Jp()}function SN(t,e){function n(r,s){const i=c1(t,s,e);return h1(i!==null),i}return n}function AN(t,e){function n(r,s){const i=c1(t,s,e);return h1(i!==null),xN(i,s,t.host,t._protocol)}return n}function d1(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=UP():s=FP():n.getStatus()===402?s=jP(t.bucket):n.getStatus()===403?s=BP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function f1(t){const e=d1(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=MP(t.path)),i.serverResponse=s.serverResponse,i}return n}function CN(t,e,n){const r=e.fullServerUrl(),s=Cc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new em(s,i,AN(t,n),o);return l.errorHandler=f1(e),l}function RN(t,e){const n=e.fullServerUrl(),r=Cc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new em(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=f1(e),l}function bN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bN(null,e)),r}function NN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let N=0;N<2;N++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=PN(e,r,s),p=kN(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",v=mr.getBlob(m,r,g);if(v===null)throw GP();const A={name:c.fullPath},R=Cc(i,t.host,t._protocol),O="POST",k=t.maxUploadRetryTime,w=new em(R,O,SN(t,n),k);return w.urlParams=A,w.headers=o,w.body=v.uploadData(),w.errorHandler=d1(e),w}class ON{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ao("cannot .send() more than once");if(qr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ao("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ao("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ao("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ao("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DN extends ON{initXhr(){this.xhr_.responseType="text"}}function tm(){return new DN}/**
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
 */class Is{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return l1(this._location.path)}get storage(){return this._service}get parent(){const e=_N(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function LN(t,e,n){t._throwIfRoot("uploadBytes");const r=NN(t.storage,t._location,u1(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,tm).then(s=>({metadata:s,ref:t}))}function VN(t){t._throwIfRoot("getDownloadURL");const e=CN(t.storage,t._location,u1());return t.storage.makeRequestWithTokens(e,tm).then(n=>{if(n===null)throw KP();return n})}function MN(t){t._throwIfRoot("deleteObject");const e=RN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,tm)}function jN(t,e){const n=vN(t._location.path,e),r=new Bt(t._location.bucket,n);return new Is(t.storage,r)}/**
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
 */function FN(t){return/^[A-Za-z]+:\/\//.test(t)}function UN(t,e){return new Is(t,e)}function p1(t,e){if(t instanceof nm){const n=t;if(n._bucket==null)throw qP();const r=new Is(n,n._bucket);return e!=null?p1(r,e):r}else return e!==void 0?jN(t,e):t}function BN(t,e){if(e&&FN(e)){if(t instanceof nm)return UN(t,e);throw sf("To use ref(service, url), the first argument must be a Storage instance.")}else return p1(t,e)}function H_(t,e){const n=e==null?void 0:e[t1];return n==null?null:Bt.makeFromBucketSpec(n,t)}function $N(t,e,n,r={}){t.host=`${e}:${n}`;const s=qr(e);s&&(rp(`https://${t.host}/b`),sp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Mw(i,t.app.options.projectId))}class nm{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=e1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LP,this._maxUploadRetryTime=VP,this._requests=new Set,s!=null?this._bucket=Bt.makeFromBucketSpec(s,this._host):this._bucket=H_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=H_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new JP(n1());{const o=lN(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const W_="@firebase/storage",q_="0.13.14";/**
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
 */const m1="storage";function zN(t,e,n){return t=Te(t),LN(t,e,n)}function HN(t){return t=Te(t),VN(t)}function WN(t){return t=Te(t),MN(t)}function g1(t,e){return t=Te(t),BN(t,e)}function qN(t=sc(),e){t=Te(t);const r=_a(t,m1).getImmediate({identifier:e}),s=Dw("storage");return s&&GN(r,...s),r}function GN(t,e,n,r={}){$N(t,e,n,r)}function KN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nm(n,r,s,e,Ss)}function QN(){Lr(new Wn(m1,KN,"PUBLIC").setMultipleInstances(!0)),Xt(W_,q_,""),Xt(W_,q_,"esm2017")}QN();var G_="@firebase/ai",of="1.4.1";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="AI",K_="us-central1",YN="https://firebasevertexai.googleapis.com",JN="v1beta",Q_=of,XN="gl-js",ZN=180*1e3;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=["user","model","function","system"];var J_;(function(t){t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(J_||(J_={}));var X_;(function(t){t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE",t.OFF="OFF"})(X_||(X_={}));var Z_;(function(t){t.SEVERITY="SEVERITY",t.PROBABILITY="PROBABILITY"})(Z_||(Z_={}));var e0;(function(t){t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(e0||(e0={}));var Mu;(function(t){t.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",t.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",t.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",t.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH",t.HARM_SEVERITY_UNSUPPORTED="HARM_SEVERITY_UNSUPPORTED"})(Mu||(Mu={}));var t0;(function(t){t.SAFETY="SAFETY",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(t0||(t0={}));var ju;(function(t){t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL"})(ju||(ju={}));var n0;(function(t){t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(n0||(n0={}));var r0;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.AUDIO="AUDIO",t.DOCUMENT="DOCUMENT"})(r0||(r0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s0;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(s0||(s0={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i0;(function(t){t.BLOCK_LOW_AND_ABOVE="block_low_and_above",t.BLOCK_MEDIUM_AND_ABOVE="block_medium_and_above",t.BLOCK_ONLY_HIGH="block_only_high",t.BLOCK_NONE="block_none"})(i0||(i0={}));var o0;(function(t){t.BLOCK_ALL="dont_allow",t.ALLOW_ADULT="allow_adult",t.ALLOW_ALL="allow_all"})(o0||(o0={}));var a0;(function(t){t.SQUARE="1:1",t.LANDSCAPE_3x4="3:4",t.PORTRAIT_4x3="4:3",t.LANDSCAPE_16x9="16:9",t.PORTRAIT_9x16="9:16"})(a0||(a0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.backendType=e}}class rm extends y1{constructor(){super(Xn.GOOGLE_AI)}}class Pa extends y1{constructor(e=K_){super(Xn.VERTEX_AI),e?this.location=e:this.location=K_}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r,s){this.app=e,this.backend=n;const i=s==null?void 0:s.getImmediate({optional:!0}),o=r==null?void 0:r.getImmediate({optional:!0});this.auth=o||null,this.appCheck=i||null,n instanceof Pa?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends mn{constructor(e,n,r){const s=ki,i=`${s}/${e}`,o=`${s}: ${n} (${i})`;super(e,o),this.code=e,this.customErrorData=r,Error.captureStackTrace&&Error.captureStackTrace(this,fe),Object.setPrototypeOf(this,fe.prototype),this.toString=()=>o}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){if(t instanceof rm)return`${ki}/googleai`;if(t instanceof Pa)return`${ki}/vertexai/${t.location}`;throw new fe("error",`Invalid backend: ${JSON.stringify(t.backendType)}`)}function nO(t){const e=t.split("/");if(e[0]!==ki)throw new fe("error",`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const r=e[2];if(!r)throw new fe("error",`Invalid instance identifier, unknown location '${t}'`);return new Pa(r);case"googleai":return new rm;default:throw new fe("error",`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){var r,s,i,o,l,u;if(!((s=(r=e.app)===null||r===void 0?void 0:r.options)===null||s===void 0)&&s.apiKey)if(!((o=(i=e.app)===null||i===void 0?void 0:i.options)===null||o===void 0)&&o.projectId)if(!((u=(l=e.app)===null||l===void 0?void 0:l.options)===null||u===void 0)&&u.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},jt(e.app)&&e.app.settings.appCheckToken){const c=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:c})}else e.appCheck&&(this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=Vo.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new fe("no-app-id",'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new fe("no-project-id",'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new fe("no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,n){return n===Xn.GOOGLE_AI?Vo.normalizeGoogleAIModelName(e):Vo.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new rc("@firebase/vertexai");/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ca;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.PREDICT="predict"})(ca||(ca={}));class _1{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiSettings=r,this.stream=s,this.requestOptions=i}toString(){const e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){var e;return((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||YN}get apiVersion(){return JN}get modelPath(){if(this.apiSettings.backend instanceof rm)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof Pa)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new fe("error",`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){const e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}}function rO(){const t=[];return t.push(`${XN}/${Q_}`),t.push(`fire/${Q_}`),t.join(" ")}async function sO(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",rO()),e.append("x-goog-api-key",t.apiSettings.apiKey),t.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.apiSettings.appId),t.apiSettings.getAppCheckToken){const n=await t.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&Nr.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.apiSettings.getAuthToken){const n=await t.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function iO(t,e,n,r,s,i){const o=new _1(t,e,n,r,i);return{url:o.toString(),fetchOptions:{method:"POST",headers:await sO(o),body:s}}}async function sm(t,e,n,r,s,i){const o=new _1(t,e,n,r,i);let l,u;try{const c=await iO(t,e,n,r,s,i),p=(i==null?void 0:i.timeout)!=null&&i.timeout>=0?i.timeout:ZN,m=new AbortController;if(u=setTimeout(()=>m.abort(),p),c.fetchOptions.signal=m.signal,l=await fetch(c.url,c.fetchOptions),!l.ok){let g="",v;try{const A=await l.json();g=A.error.message,A.error.details&&(g+=` ${JSON.stringify(A.error.details)}`,v=A.error.details)}catch{}throw l.status===403&&v.some(A=>A.reason==="SERVICE_DISABLED")&&v.some(A=>{var R,O;return(O=(R=A.links)===null||R===void 0?void 0:R[0])===null||O===void 0?void 0:O.description.includes("Google developers console API activation")})?new fe("api-not-enabled",`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${o.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:l.status,statusText:l.statusText,errorDetails:v}):new fe("fetch-error",`Error fetching from ${o}: [${l.status} ${l.statusText}] ${g}`,{status:l.status,statusText:l.statusText,errorDetails:v})}}catch(c){let p=c;throw c.code!=="fetch-error"&&c.code!=="api-not-enabled"&&c instanceof Error&&(p=new fe("error",`Error fetching from ${o.toString()}: ${c.message}`),p.stack=c.stack),p}finally{u&&clearTimeout(u)}return l}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),oO(t)}function oO(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Nr.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new fe("response-error",`Response error: ${ar(t)}. Response body stored in error.response`,{response:t});return aO(t)}else if(t.promptFeedback)throw new fe("response-error",`Text not available. ${ar(t)}`,{response:t});return""},t.inlineDataParts=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Nr.warn(`This response had ${t.candidates.length} candidates. Returning data from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new fe("response-error",`Response error: ${ar(t)}. Response body stored in error.response`,{response:t});return uO(t)}else if(t.promptFeedback)throw new fe("response-error",`Data not available. ${ar(t)}`,{response:t})},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Nr.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new fe("response-error",`Response error: ${ar(t)}. Response body stored in error.response`,{response:t});return lO(t)}else if(t.promptFeedback)throw new fe("response-error",`Function call not available. ${ar(t)}`,{response:t})},t}function aO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text);return i.length>0?i.join(""):""}function lO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}function uO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.inlineData&&i.push(o);if(i.length>0)return i}const cO=[ju.RECITATION,ju.SAFETY];function Wl(t){return!!t.finishReason&&cO.includes(t.finishReason)}function ar(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];Wl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){var e,n;if((e=t.safetySettings)===null||e===void 0||e.forEach(r=>{if(r.method)throw new fe("unsupported","SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),!((n=t.generationConfig)===null||n===void 0)&&n.topK){const r=Math.round(t.generationConfig.topK);r!==t.generationConfig.topK&&(Nr.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=r)}return t}function im(t){return{candidates:t.candidates?dO(t.candidates):void 0,prompt:t.promptFeedback?fO(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function hO(t,e){return{generateContentRequest:Object.assign({model:e},t)}}function dO(t){const e=[];let n;return e&&t.forEach(r=>{var s;let i;if(r.citationMetadata&&(i={citations:r.citationMetadata.citationSources}),r.safetyRatings&&(n=r.safetyRatings.map(l=>{var u,c,p;return Object.assign(Object.assign({},l),{severity:(u=l.severity)!==null&&u!==void 0?u:Mu.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(c=l.probabilityScore)!==null&&c!==void 0?c:0,severityScore:(p=l.severityScore)!==null&&p!==void 0?p:0})})),!((s=r.content)===null||s===void 0)&&s.parts.some(l=>l==null?void 0:l.videoMetadata))throw new fe("unsupported","Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const o={index:r.index,content:r.content,finishReason:r.finishReason,finishMessage:r.finishMessage,safetyRatings:n,citationMetadata:i,groundingMetadata:r.groundingMetadata};e.push(o)}),e}function fO(t){const e=[];return t.safetyRatings.forEach(r=>{var s,i,o;e.push({category:r.category,probability:r.probability,severity:(s=r.severity)!==null&&s!==void 0?s:Mu.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(i=r.probabilityScore)!==null&&i!==void 0?i:0,severityScore:(o=r.severityScore)!==null&&o!==void 0?o:0,blocked:r.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function pO(t,e){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=yO(n),[s,i]=r.tee();return{stream:gO(s,e),response:mO(i,e)}}async function mO(t,e){const n=[],r=t.getReader();for(;;){const{done:s,value:i}=await r.read();if(s){let o=_O(n);return e.backend.backendType===Xn.GOOGLE_AI&&(o=im(o)),Fu(o)}n.push(i)}}function gO(t,e){return w2(this,arguments,function*(){const r=t.getReader();for(;;){const{value:s,done:i}=yield aa(r.read());if(i)break;let o;e.backend.backendType===Xn.GOOGLE_AI?o=Fu(im(s)):o=Fu(s),yield yield aa(o)}})}function yO(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new fe("parse-failed","Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(l0),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new fe("parse-failed",`Error parsing JSON response: "${u[1]}`));return}r.enqueue(c),s=s.substring(u[0].length),u=s.match(l0)}return i()})}}})}function _O(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t)if(r.candidates)for(const s of r.candidates){const i=s.index||0;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:s.index}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[]});const o={};for(const l of s.content.parts){if(l.text!==void 0){if(l.text==="")continue;o.text=l.text}if(l.functionCall&&(o.functionCall=l.functionCall),Object.keys(o).length===0)throw new fe("invalid-content","Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");n.candidates[i].content.parts.push(o)}}}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e,n,r){t.backend.backendType===Xn.GOOGLE_AI&&(n=v1(n));const s=await sm(e,ca.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return pO(s,t)}async function E1(t,e,n,r){t.backend.backendType===Xn.GOOGLE_AI&&(n=v1(n));const s=await sm(e,ca.GENERATE_CONTENT,t,!1,JSON.stringify(n),r),i=await vO(s,t);return{response:Fu(i)}}async function vO(t,e){const n=await t.json();return e.backend.backendType===Xn.GOOGLE_AI?im(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function af(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return wO(e)}function wO(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new fe("invalid-content","Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!r&&!s)throw new fe("invalid-content","No Content is provided for sending chat message.");return r?e:n}function Vh(t){let e;return t.contents?e=t:e={contents:[af(t)]},t.systemInstruction&&(e.systemInstruction=T1(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=["text","inlineData","functionCall","functionResponse"],EO={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]},c0={user:["model"],function:["model"],model:["user","function"],system:[]};function TO(t){let e=null;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new fe("invalid-content",`First Content should be with role 'user', got ${r}`);if(!Y_.includes(r))throw new fe("invalid-content",`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Y_)}`);if(!Array.isArray(s))throw new fe("invalid-content","Content should have 'parts' but property with an array of Parts");if(s.length===0)throw new fe("invalid-content","Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0};for(const l of s)for(const u of u0)u in l&&(i[u]+=1);const o=EO[r];for(const l of u0)if(!o.includes(l)&&i[l]>0)throw new fe("invalid-content",`Content with role '${r}' can't contain '${l}' part`);if(e&&!c0[r].includes(e.role))throw new fe("invalid-content",`Content with role '${r}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(c0)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="SILENT_ERROR";class IO{constructor(e,n,r,s){this.model=n,this.params=r,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,r!=null&&r.history&&(TO(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,r,s,i,o;await this._sendPromise;const l=af(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,contents:[...this._history,l]};let c={};return this._sendPromise=this._sendPromise.then(()=>E1(this._apiSettings,this.model,u,this.requestOptions)).then(p=>{var m,g;if(p.response.candidates&&p.response.candidates.length>0){this._history.push(l);const v={parts:((m=p.response.candidates)===null||m===void 0?void 0:m[0].content.parts)||[],role:((g=p.response.candidates)===null||g===void 0?void 0:g[0].content.role)||"model"};this._history.push(v)}else{const v=ar(p.response);v&&Nr.warn(`sendMessage() was unsuccessful. ${v}. Inspect response object for details.`)}c=p}),await this._sendPromise,c}async sendMessageStream(e){var n,r,s,i,o;await this._sendPromise;const l=af(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,contents:[...this._history,l]},c=w1(this._apiSettings,this.model,u,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>c).catch(p=>{throw new Error(h0)}).then(p=>p.response).then(p=>{if(p.candidates&&p.candidates.length>0){this._history.push(l);const m=Object.assign({},p.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=ar(p);m&&Nr.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(p=>{p.message!==h0&&Nr.error(p)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e,n,r){let s="";if(t.backend.backendType===Xn.GOOGLE_AI){const o=hO(n,e);s=JSON.stringify(o)}else s=JSON.stringify(n);return(await sm(e,ca.COUNT_TOKENS,t,!1,s,r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO extends Vo{constructor(e,n,r){super(e,n.model),this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=T1(n.systemInstruction),this.requestOptions=r||{}}async generateContent(e){const n=Vh(e);return E1(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}async generateContentStream(e){const n=Vh(e);return w1(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}startChat(e){return new IO(this._apiSettings,this.model,Object.assign({tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}async countTokens(e){const n=Vh(e);return xO(this._apiSettings,this.model,n)}}function SO(t=sc(),e){t=Te(t);const n=_a(t,ki),r=new Pa(void 0),s=tO(r);return n.getImmediate({identifier:s})}function AO(t,e,n){if(!e.model)throw new fe("no-model","Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");return new kO(t,e,n)}function CO(){Lr(new Wn(ki,(t,{instanceIdentifier:e})=>{if(!e)throw new fe("error","AIService instance identifier is undefined.");const n=nO(e),r=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new eO(r,n,s,i)},"PUBLIC").setMultipleInstances(!0)),Xt(G_,of),Xt(G_,of,"esm2017")}CO();const lr="projects",RO={apiKey:"AIzaSyCBz55HZYrgOICFHCrZNMzsqUCsbBJXZ8E",authDomain:"project-tracker-prod-aae7c.firebaseapp.com",projectId:"project-tracker-prod-aae7c",storageBucket:"project-tracker-prod-aae7c.firebasestorage.app",messagingSenderId:"22966312336",appId:"1:22966312336:web:8ffc666511048cb4716715"},Rc=Uw(RO),Mh=OP(Rc),qt=t2(Rc),I1=qN(Rc),bO=SO(Rc);AO(bO,{model:"gemini-2.0-flash"});const PO=({label:t,type:e="text",value:n,onChange:r,required:s,placeholder:i,options:o,action:l,disabled:u})=>d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("label",{className:"text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1",children:t}),l]}),o?d.jsx("select",{disabled:u,className:"w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm disabled:opacity-75",value:n,onChange:c=>r(c.target.value),children:o.map(c=>d.jsx("option",{value:c,children:c},c))}):d.jsx("input",{type:e,disabled:u,className:"w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm placeholder:text-slate-300 placeholder:font-normal disabled:opacity-75",value:n,onChange:c=>r(c.target.value),required:s,placeholder:i})]}),NO=pn.memo(PO),OO=({title:t,value:e,icon:n,subtitle:r})=>d.jsxs("div",{className:"bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsx("div",{className:"p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors",children:n}),r&&d.jsx("span",{className:"text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-full",children:r})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1",children:t}),d.jsx("p",{className:"text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight",children:e})]})]}),TD=pn.memo(OO),DO=({className:t,style:e,...n})=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:d.jsx("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"})}),ID=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}),d.jsx("path",{d:"M5 3v4"}),d.jsx("path",{d:"M19 17v4"}),d.jsx("path",{d:"M3 5h4"}),d.jsx("path",{d:"M17 19h4"})]}),LO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("circle",{cx:"12",cy:"12",r:"4"}),d.jsx("path",{d:"M12 2v2"}),d.jsx("path",{d:"M12 20v2"}),d.jsx("path",{d:"m4.93 4.93 1.41 1.41"}),d.jsx("path",{d:"m17.66 17.66 1.41 1.41"}),d.jsx("path",{d:"M2 12h2"}),d.jsx("path",{d:"M20 12h2"}),d.jsx("path",{d:"m6.34 17.66-1.41 1.41"}),d.jsx("path",{d:"m19.07 4.93-1.41 1.41"})]}),VO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M18 6 6 18"}),d.jsx("path",{d:"m6 6 18 12"})]}),om=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M3 6h18"}),d.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),d.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),d.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),d.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]}),lf=({className:t,style:e,...n})=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:d.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),am=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"m9 12 2 2 4-4"})]}),MO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d.jsx("polyline",{points:"17 8 12 3 7 8"}),d.jsx("line",{x1:"12",x2:"12",y1:"3",y2:"15"})]}),jO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M5 12h14"}),d.jsx("path",{d:"M12 5v14"})]}),FO=({className:t,style:e,...n})=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:d.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),d0=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),d.jsx("polyline",{points:"14 2 14 8 20 8"}),d.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),d.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),d.jsx("line",{x1:"10",x2:"8",y1:"9",y2:"9"})]}),UO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),d.jsx("line",{x1:"4",x2:"4",y1:"22",y2:"15"})]}),BO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),d.jsx("polyline",{points:"14 2 14 8 20 8"}),d.jsx("path",{d:"M12 18v-4"}),d.jsx("path",{d:"M8 18v-2"}),d.jsx("path",{d:"M16 18v-6"})]}),f0=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),d.jsx("path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}),d.jsx("path",{d:"M3 12A9 3 0 0 0 21 12"})]}),jh=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),p0=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}),d.jsx("circle",{cx:"12",cy:"12",r:"2"}),d.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),$O=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"}),d.jsx("path",{d:"M9 18h6"}),d.jsx("path",{d:"M10 22h4"})]}),zO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polyline",{points:"12 6 12 12 16.5 12"})]}),HO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"}),d.jsx("path",{d:"m9 12 2 2 4-4"})]}),WO=({className:t,style:e,...n})=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:d.jsx("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})}),qO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]}),GO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M3 12h.01"}),d.jsx("path",{d:"M3 18h.01"}),d.jsx("path",{d:"M3 6h.01"}),d.jsx("path",{d:"M8 12h13"}),d.jsx("path",{d:"M8 18h13"}),d.jsx("path",{d:"M8 6h13"})]}),KO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("rect",{width:"7",height:"9",x:"3",y:"3"}),d.jsx("rect",{width:"7",height:"5",x:"14",y:"3"}),d.jsx("rect",{width:"7",height:"9",x:"14",y:"12"}),d.jsx("rect",{width:"7",height:"5",x:"3",y:"16"})]}),xD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),d.jsx("polyline",{points:"16 7 22 7 22 13"})]}),kD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("line",{x1:"12",x2:"12",y1:"2",y2:"22"}),d.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),SD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),d.jsx("path",{d:"M12 9v4"}),d.jsx("path",{d:"M12 17h.01"})]}),AD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}),d.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}),d.jsx("path",{d:"M4 22h16"}),d.jsx("path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}),d.jsx("path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}),d.jsx("path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"})]}),CD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M3 3v18h18"}),d.jsx("path",{d:"M18 17V9"}),d.jsx("path",{d:"M13 17V5"}),d.jsx("path",{d:"M8 17v-3"})]}),RD=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("polyline",{points:"16 11 18 13 22 9"})]}),QO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}),d.jsx("line",{x1:"9",x2:"9",y1:"22",y2:"22"}),d.jsx("line",{x1:"15",x2:"15",y1:"22",y2:"22"}),d.jsx("line",{x1:"12",x2:"12",y1:"22",y2:"22"}),d.jsx("path",{d:"M8 10h8"}),d.jsx("path",{d:"M8 14h8"}),d.jsx("path",{d:"M8 18h8"})]}),YO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}),d.jsx("line",{x1:"16",x2:"16",y1:"2",y2:"6"}),d.jsx("line",{x1:"8",x2:"8",y1:"2",y2:"6"}),d.jsx("line",{x1:"3",x2:"21",y1:"10",y2:"10"})]}),JO=({className:t,style:e,...n})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[d.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"}),d.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4h-1"}),d.jsx("path",{d:"M14 14l-1-4h2"}),d.jsx("path",{d:"M15.5 9a2.5 2.5 0 0 1 0 5"})]}),XO=({label:t,fileUrl:e,onUpload:n,onDelete:r})=>{const[s,i]=J.useState(!1),[o,l]=J.useState(!1),u=v=>{v.preventDefault(),i(!0)},c=v=>{v.preventDefault(),i(!1)},p=async v=>{v.preventDefault(),i(!1);const A=v.dataTransfer.files[0];A&&await g(A)},m=async v=>{var A;(A=v.target.files)!=null&&A[0]&&await g(v.target.files[0])},g=async v=>{l(!0),await n(v),l(!1)};return d.jsxs("div",{onDragOver:u,onDragLeave:c,onDrop:p,className:`relative rounded-xl border-2 border-dashed transition-all p-3 flex flex-col justify-between h-24 group ${s?"border-indigo-500 bg-indigo-50":"border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-indigo-300"}`,children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase",children:t}),e&&r&&d.jsx("button",{type:"button",onClick:r,className:"text-red-400 hover:text-red-600 p-1 bg-white dark:bg-slate-800 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(om,{className:"h-2.5 w-2.5"})})]}),o?d.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 text-[10px] font-bold",children:[d.jsx(lf,{className:"h-3 w-3 animate-spin"}),"Uploading..."]}):e?d.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors truncate",children:[d.jsx(am,{className:"h-3 w-3 text-emerald-500"}),d.jsx("span",{className:"truncate",children:"View File"})]}):n?d.jsxs("label",{className:"cursor-pointer flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-bold hover:bg-indigo-200 transition-colors self-start",children:[d.jsx("span",{children:"Choose File"}),d.jsx("input",{type:"file",className:"hidden",onChange:m})]}):d.jsx("div",{className:"text-[10px] font-bold text-slate-300 italic self-start py-1.5 px-3",children:"No Attachment"}),!e&&!o&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-end pointer-events-none pr-3 opacity-30 text-[9px] font-bold text-slate-400",children:s?"Drop it!":"Drop File"})]})},bD=pn.memo(XO),ZO=({toast:t,onClear:e})=>t?d.jsxs("div",{className:`fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border shadow-xl px-4 py-3 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 ${t.variant==="error"?"bg-red-50 border-red-200 text-red-900":t.variant==="success"?"bg-emerald-50 border-emerald-200 text-emerald-950":"bg-slate-900 border-slate-700 text-white"}`,role:"status",children:[d.jsx("p",{className:"text-sm font-bold leading-snug flex-1 pt-0.5",children:t.message}),d.jsx("button",{type:"button",onClick:e,className:`shrink-0 rounded-lg p-1.5 font-bold text-xs uppercase tracking-wide ${t.variant==="error"?"text-red-600 hover:bg-red-100":t.variant==="success"?"text-emerald-700 hover:bg-emerald-100/80":"text-slate-300 hover:bg-slate-800"}`,"aria-label":"Dismiss notification",children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 6 6 18"}),d.jsx("path",{d:"m6 6 12 12"})]})})]}):null,eD=pn.memo(ZO),tD=({modalState:t,onClose:e})=>t?d.jsx("div",{className:"fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"save-success-title",children:d.jsxs("div",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 rounded-3xl w-full max-w-md shadow-2xl p-8 text-center relative",children:[d.jsx("button",{type:"button",onClick:e,className:"absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-slate-300 p-1 rounded-lg","aria-label":"Close",children:d.jsx(VO,{className:"h-5 w-5"})}),d.jsx("div",{className:"w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5",children:d.jsx(am,{width:36,height:36,className:"text-emerald-600"})}),d.jsx("h3",{id:"save-success-title",className:"text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-2",children:t==="updated"?"Project updated":"Project created"}),d.jsx("p",{className:"text-sm font-medium text-slate-500 dark:text-slate-400 mb-8",children:t==="updated"?"Your changes have been saved to the database.":"The new project has been saved to the database."}),d.jsx("button",{type:"button",onClick:e,onKeyDown:n=>{n.key==="Enter"&&e()},className:"w-full h-12 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 active:scale-[0.98]",autoFocus:!0,children:"OK"})]})}):null;pn.memo(tD);function nD(t){switch(t){case"Done":return{border:"border-l-emerald-500 dark:border-l-emerald-400",badge:"bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50"};case"Maintenance":return{border:"border-l-pink-500 dark:border-l-pink-400",badge:"bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800/50"};case"Belum SDHO":return{border:"border-l-amber-500 dark:border-l-amber-400",badge:"bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50"};default:return{border:"border-l-indigo-500 dark:border-l-indigo-400",badge:"bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/50"}}}function m0(t){return t>=1e9?`Rp ${(t/1e9).toFixed(1)}B`:t>=1e6?`Rp ${(t/1e6).toFixed(1)}M`:`Rp ${t==null?void 0:t.toLocaleString()}`}function yn(t){if(t==null||t==="")return 0;let e=0;if(typeof t=="number")e=t;else{const n=String(t).replace(/[^0-9.,-]/g,"");if(!n)return 0;const r=n.includes(","),s=n.includes(".");if(r&&s)n.lastIndexOf(",")>n.lastIndexOf(".")?e=parseFloat(n.replace(/\./g,"").replace(",",".")):e=parseFloat(n.replace(/,/g,""));else if(r){const i=n.split(",");i[i.length-1].length===3?e=parseFloat(n.replace(/,/g,"")):e=parseFloat(n.replace(",","."))}else if(s){const i=n.split(".");i[i.length-1].length===3&&i.length>1?e=parseFloat(n.replace(/\./g,"")):e=parseFloat(n)}else e=parseFloat(n)}return isNaN(e)?0:e}function Fh(t){if(!t)return"?";try{const e=new Date(t);if(isNaN(e.getTime()))return t;const n=e.getDate().toString().padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],i=e.getFullYear();return`${n} ${s} ${i}`}catch{return t}}function PD(t){return t?t.toString().replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):""}function ND(t){return t?t.toString().replace(/[^0-9]/g,""):""}const rD=({filters:t,searchTerm:e,filterOptions:n,pmOptions:r,onSearchChange:s,onFilterChange:i,onReset:o})=>d.jsxs("div",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4",children:[d.jsx(NO,{label:"Search",value:e,onChange:s,placeholder:"Keywords..."}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"Status"}),d.jsxs("select",{className:"filter-input",value:t.status,onChange:l=>i("status",l.target.value),children:[d.jsx("option",{value:"All",children:"All Statuses"}),d.jsx("option",{value:"All Active",children:"All Active"}),d.jsx("option",{value:"Ongoing",children:"Ongoing"}),d.jsx("option",{value:"Maintenance",children:"Maintenance"}),d.jsx("option",{value:"Done",children:"Done"}),d.jsx("option",{value:"Belum SDHO",children:"Belum SDHO"})]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"Customer"}),d.jsxs("select",{className:"filter-input",value:t.customer,onChange:l=>i("customer",l.target.value),children:[d.jsx("option",{value:"",children:"All Customers"}),n.customers.map(l=>d.jsx("option",{value:l,children:l},l))]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"Solution"}),d.jsxs("select",{className:"filter-input",value:t.solution,onChange:l=>i("solution",l.target.value),children:[d.jsx("option",{value:"",children:"All Solutions"}),n.solutions.map(l=>d.jsx("option",{value:l,children:l},l))]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"PM"}),d.jsxs("select",{className:"filter-input",value:t.pm,onChange:l=>i("pm",l.target.value),children:[d.jsx("option",{value:"",children:"All PMs"}),r.map(l=>d.jsx("option",{value:l,children:l},l))]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"Year"}),d.jsxs("select",{className:"filter-input",value:t.year,onChange:l=>i("year",l.target.value),children:[d.jsx("option",{value:"",children:"Any Years"}),n.years.map(l=>d.jsx("option",{value:l,children:l},l))]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"filter-label",children:"Methodology"}),d.jsxs("select",{className:"filter-input",value:t.methodology,onChange:l=>i("methodology",l.target.value),children:[d.jsx("option",{value:"All Types",children:"All Types"}),d.jsx("option",{value:"Tracked by EPM",children:"Tracked by EPM"}),d.jsx("option",{value:"BAST Only",children:"BAST Only"}),d.jsx("option",{value:"Simple",children:"Simple"}),d.jsx("option",{value:"Complex",children:"Complex"})]})]}),d.jsx("div",{className:"flex items-end",children:d.jsxs("button",{onClick:o,className:"text-xs font-bold text-indigo-600 mb-3 flex items-center gap-1",children:[d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-rotate-ccw",children:[d.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d.jsx("path",{d:"M3 3v5h5"})]}),"Reset"]})})]}),sD=pn.memo(rD),iD=({activeTab:t,onTabChange:e,isAdmin:n,onImport:r,onCreate:s,onTruncate:i,onLogout:o,theme:l,onToggleTheme:u,isAuthenticated:c})=>c?d.jsx("header",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 shadow-sm",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4",children:[d.jsxs("div",{className:"flex items-center gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("img",{src:"logo.png",alt:"Project Hub",className:"h-8 w-8 rounded-lg object-contain"}),d.jsx("h1",{className:"text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight",children:"Project Hub"})]}),d.jsxs("nav",{className:"flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl",children:[d.jsxs("button",{onClick:()=>e("list"),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${t==="list"?"bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm":"text-slate-500 dark:text-slate-400"}`,children:[d.jsx(GO,{className:"h-4 w-4"}),"List"]}),d.jsxs("button",{onClick:()=>e("dashboard"),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${t==="dashboard"?"bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm":"text-slate-500 dark:text-slate-400"}`,children:[d.jsx(KO,{className:"h-4 w-4"}),"Dashboard"]})]})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[t==="list"&&d.jsx(d.Fragment,{children:n&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:i,className:"h-10 px-4 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all flex items-center gap-2 border border-red-100",children:[d.jsx(om,{className:"h-4 w-4"}),"Truncate DB"]}),d.jsxs("button",{onClick:r,className:"h-10 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl transition-all flex items-center gap-2 border border-slate-200 dark:border-slate-600",children:[d.jsx(MO,{className:"h-4 w-4"}),"Import"]}),d.jsxs("button",{onClick:s,className:"h-10 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all flex items-center gap-2",children:[d.jsx(jO,{className:"h-4 w-4"}),"New"]})]})}),d.jsx("button",{onClick:u,className:"p-2 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400",children:l==="dark"?d.jsx(LO,{className:"h-5 w-5"}):d.jsx(DO,{className:"h-5 w-5"})}),d.jsx("button",{onClick:o,className:"p-2 text-slate-400 hover:text-red-500",children:d.jsx(qO,{className:"h-5 w-5"})})]})]})}):null,oD=pn.memo(iD);function aD(t){if(!t)return[];const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},r=(p,m,g,v)=>{const A=e[parseInt(m)-1],R=String(parseInt(g)).padStart(2,"0");return v?`${p}-${A}-${R} ${v.trim()}`:`${p}-${A}-${R}`},s=p=>{let m=p.match(/(\d{4})-(\d{2})-(\d{2})/);if(m)return r(m[1],m[2],m[3]);if(m=p.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i),m){const g=m[2].charAt(0).toUpperCase()+m[2].slice(1).toLowerCase();return r(m[1],n[g],m[3])}if(m=p.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i),m){const g=m[2].charAt(0).toUpperCase()+m[2].slice(1).toLowerCase();return r(m[3],n[g],m[1])}return p},i=/\[Updated[^\]]*\]|\[\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\]|\[\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\]|(?:Update\s+(?:per\s+)?)?\b\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\b|\(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\)|\(\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\)|\b\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\b/gi,o=[];let l=0,u;for(;(u=i.exec(t))!==null;){const p=t.slice(Math.max(0,u.index-3),u.index);if(/W\d$/.test(p))continue;u.index>l&&o.push({date:null,text:t.slice(l,u.index).trim()});const m=u.index+u[0].length,g=t.slice(m).search(i),v=g!==-1?m+g:t.length,A=u[0];let R,O,k;const w=A.match(/(\d{4})-(\d{2})-(\d{2})/),S=A.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i),N=A.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i);w?(R=w[1],O=w[2],k=w[3]):S?(R=S[1],O=S[2],k=S[3]):N&&(R=N[3],O=N[2],k=N[1]);const F=t.slice(m,v).trim();if(R){const U=e[parseInt(n[O.charAt(0).toUpperCase()+O.slice(1).toLowerCase()]||O)-1]||O;o.push({date:`${R}-${U}-${String(parseInt(k)).padStart(2,"0")}`,text:F})}else o.push({date:s(A),text:F});l=v}l<t.length&&o.push({date:null,text:t.slice(l).trim()});const c=[];for(let p=0;p<o.length;p++)o[p].date===null&&p+1<o.length&&o[p+1].date!==null?(c.push({date:o[p+1].date,text:o[p].text+" "+o[p+1].text}),p++):c.push(o[p]);return c.filter(p=>p.text)}function lD(t){const e=t.split(`
`);if(e.length<2)return[];const n=e[0],r=n.includes(";")?";":",",s=n.split(r).map(c=>c.trim().toLowerCase().replace(/[^a-z0-9]/g,"")),i=c=>{for(const p of c){const m=s.findIndex(g=>g.includes(p));if(m!==-1)return m}return-1},o={id:i(["uuid","uid"]),projNumber:i(["projectno","projno","projnumber","projectid","projid","nomor","number","code"]),projName:i(["projectname","projname","nama","title","name","description","activity","project"]),customer:i(["customer","client","partner","pt","cv"]),pm:i(["pm","manager","pic","lead"]),status:i(["status","state","stage"]),value:i(["value","nilai","amount","price","rp","budget","cost","total"]),sisaMandays:i(["manday","sisa","resource","man"]),start:i(["start","mulai","begin","date"]),end:i(["end","selesai","finish","close"]),solusi:i(["solution","solusi","tech"]),subcon:i(["subcon","subcontractor","vendor","contractor","partner","third"]),methodology:i(["methodology","type","category"]),note:i(["note","remark","desc","catatan"])},l=c=>c&&parseInt(c.replace(/[^0-9]/g,""))||0,u=[];for(let c=1;c<e.length;c++){const p=e[c].trim();if(!p)continue;const m=p.split(r).map(A=>A.trim().replace(/^"|"$/g,""));if(m.length<2)continue;const g=A=>{const R=o[A];return R!==-1&&R<m.length?m[R]:""},v=g("projNumber");!v||v==="NO-ID"||v.length<1||u.push({projNumber:v,projName:g("projName")||"Untitled Project",customer:g("customer")||"Unknown Client",pm:g("pm"),status:g("status")||"Ongoing",value:l(g("value")),sisaMandays:l(g("sisaMandays")),start:g("start"),end:g("end"),solusi:g("solusi"),subcon:g("subcon"),methodology:g("methodology")||"BAST Only",note:g("note")})}return u}const uD=({project:t,onEdit:e,onDelete:n,isAdmin:r})=>{const s=nD(t.status),[i,o]=J.useState(!1),[l,u]=J.useState([]),[c,p]=J.useState(!1),[m,g]=J.useState(!1),[v,A]=J.useState([]),[R,O]=J.useState(!1),[k,w]=J.useState(null),[S,N]=J.useState({}),F=async B=>{if(B.stopPropagation(),i){o(!1);return}p(!0);try{const ee=ls(qt,lr,t.id,"team"),et=(await Ul(ee)).docs.map(Y=>({id:Y.id,...Y.data()}));try{const Y=ls(qt,"assignmentLetters"),K=c2(Y,h2("projectNumber","==",t.projNumber)),Q=await Ul(K),ie={};Q.forEach(ke=>{const _t=ke.data(),vt=_t.npk||_t.assignee&&_t.assignee.npk;vt&&(ie[String(vt)]=!0)}),N(ie)}catch(Y){console.error("Error fetching letters status:",Y)}const z=et.sort((Y,K)=>{const Q=(Y.role||"").toLowerCase(),ie=(K.role||"").toLowerCase();return Q==="project manager"&&ie!=="project manager"?-1:Q!=="project manager"&&ie==="project manager"?1:0});u(z),o(!0)}catch(ee){console.error("Error fetching team:",ee),alert("Failed to fetch team members.")}finally{p(!1)}},U=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_CPC",projectNumber:t.projNumber},"*")},T=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_SIMPLIFY",projectNumber:t.projNumber},"*")},_=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_ISERVE",projectNumber:t.projNumber},"*")},I=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_DASHBOARD",projectNumber:t.projNumber},"*")},E=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_TEAM_SCRAPE",projectNumber:t.projNumber},"*")},C=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_FINANCIALS_SCRAPE",projectNumber:t.projNumber},"*")},b=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}const ee=`https://tech-hub-22966312336.asia-southeast2.run.app/?projectNo=${encodeURIComponent(t.projNumber)}`;window.open(ee,"_blank","noopener,noreferrer")},x=async B=>{if(B&&B.stopPropagation(),m){g(!1);return}O(!0);try{const ee=ls(qt,lr,t.id,"financials"),et=(await Ul(ee)).docs.map(K=>({id:K.id,...K.data()}));let z=null;et.forEach(K=>{if(K.updatedAt)try{const Q=K.updatedAt.toDate?K.updatedAt.toDate():new Date(K.updatedAt);(!z||Q>z)&&(z=Q)}catch{console.warn("Invalid date:",K.updatedAt)}}),w(z);const Y=et.reduce((K,Q)=>{const ie=Q.wbs||"No WBS";return K[ie]||(K[ie]={wbs:ie,costPlan:0,costCommit:0,costActual:0,availableBudget:0,items:[]}),K[ie].costPlan+=yn(Q.costPlan),K[ie].costCommit+=yn(Q.costCommit),K[ie].costActual+=yn(Q.costActual),K[ie].availableBudget+=yn(Q.availableBudget),K[ie].items.push(Q),K},{});A(Object.values(Y)),g(!0)}catch(ee){console.error("Error fetching financials:",ee),alert("Failed to fetch financials data.")}finally{O(!1)}};return d.jsxs("div",{onClick:()=>e(t),className:`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${s.border} p-5 hover:shadow-md transition-all group relative overflow-hidden flex flex-col gap-4 cursor-pointer`,children:[d.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-start gap-6",children:[d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[d.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-tighter tabular-nums",children:t.projNumber||"NO-ID"}),d.jsx("span",{className:`text-[9px] font-bold px-2 py-0.5 rounded-full border ${s.badge}`,children:t.status}),d.jsx("span",{className:"text-[9px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400",children:t.methodology||"BAST Only"})]}),d.jsx("h3",{className:"font-bold text-slate-800 dark:text-slate-100 truncate text-lg group-hover:text-indigo-600 transition-colors mb-2",children:t.projName}),d.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-2 items-center",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[d.jsx(QO,{className:"h-3.5 w-3.5 text-slate-400"}),t.customer]}),d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[d.jsx(JO,{className:"h-3.5 w-3.5 text-slate-400"}),t.pm||d.jsx("span",{className:"text-slate-400 italic",children:"Unassigned PM"})]}),t.subcon&&d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[d.jsx(jh,{className:"h-3.5 w-3.5 text-slate-400"}),t.subcon]}),(t.start||t.end)&&d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[d.jsx(YO,{className:"h-3.5 w-3.5 text-slate-400"}),d.jsxs("span",{className:"tabular-nums",children:[Fh(t.start)," - ",Fh(t.end)]})]})]})]}),d.jsxs("div",{className:"flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-1",children:[d.jsxs("div",{className:"text-right",children:[d.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:"Value"}),d.jsx("p",{className:"text-sm font-bold text-indigo-600 tabular-nums",children:m0(t.value)})]}),d.jsxs("div",{className:"text-right border-l lg:border-l-0 lg:border-t border-slate-200 dark:border-slate-700 pl-3 lg:pl-0 lg:pt-1 ml-3 lg:ml-0",children:[d.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:"Mandays"}),d.jsx("p",{className:"text-sm font-bold text-emerald-600 tabular-nums",children:m0(t.sisaMandays)})]}),d.jsxs("div",{className:"flex items-center gap-2 mt-2 w-full lg:w-auto",children:[d.jsx("button",{onClick:F,className:`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${i?"bg-indigo-100 text-indigo-600":"bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800"}`,title:"View Team",children:c?d.jsx(lf,{className:"h-4 w-4 animate-spin"}):d.jsx(jh,{className:"h-4 w-4"})}),d.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${m?"bg-emerald-100 text-emerald-600":"bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800"}`,title:"View Financials",children:R?d.jsx(lf,{className:"h-4 w-4 animate-spin"}):d.jsx(p0,{className:"h-4 w-4"})}),d.jsx("button",{onClick:U,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to CPC",children:d.jsx("div",{className:"bg-[#1e5bb8] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none",children:"CPC"})}),d.jsx("button",{onClick:T,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Simplify",children:d.jsx("div",{className:"bg-[#f39c12] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none",children:"SIMPLIFY"})}),d.jsx("button",{onClick:_,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to iServe",children:d.jsx("div",{className:"bg-[#800000] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1",children:"ISERVE"})}),d.jsx("button",{onClick:I,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Financials",children:d.jsx("div",{className:"bg-[#10b981] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase",children:"Financials"})}),d.jsx("button",{onClick:b,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-cyan-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Tech Hub",children:d.jsx("div",{className:"bg-[#0891b2] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase",children:"TECH"})})]})]})]}),t.solusi&&d.jsxs("div",{className:"bg-slate-50/80 dark:bg-slate-900/50 rounded-xl p-3 flex items-start gap-3 border border-slate-100 dark:border-slate-800/50 shadow-sm transition-all hover:shadow-md",children:[d.jsx("div",{className:"p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg shrink-0",children:d.jsx($O,{className:"h-3.5 w-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"})}),d.jsxs("div",{children:[d.jsx("h5",{className:"text-[9px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1",children:"Solution"}),d.jsx("p",{className:"text-[11px] font-semibold text-slate-700 dark:text-slate-300 italic leading-relaxed line-clamp-3",children:t.solusi})]})]}),t.note&&(()=>{const B=aD(t.note);return d.jsxs("div",{className:"relative pl-6 py-1",children:[d.jsx("div",{className:"absolute left-[7px] top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/40 rounded-full"}),d.jsx("div",{className:"absolute left-0 top-3 w-4 h-4 bg-indigo-100 dark:bg-indigo-900 rounded-full border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center",children:d.jsx("div",{className:"w-1.5 h-1.5 bg-indigo-500 rounded-full"})}),d.jsxs("div",{className:"bg-white dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700/50 shadow-sm",children:[d.jsxs("h5",{className:"text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5",children:[d.jsx(zO,{className:"h-2.5 w-2.5"}),"Updates (",B.length,")"]}),d.jsxs("div",{className:"space-y-2",children:[B.slice(-3).map((ee,Ye)=>d.jsxs("div",{className:"bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5",children:[ee.date&&d.jsx("p",{className:"text-[8px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1",children:ee.date}),d.jsx("p",{className:"text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap",children:ee.text})]},Ye)),B.length>3&&d.jsxs("details",{className:"group",onClick:ee=>ee.stopPropagation(),children:[d.jsxs("summary",{className:"text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors list-none flex items-center gap-1.5 select-none pl-1",children:[d.jsx("svg",{className:"w-3 h-3 transition-transform group-open:rotate-90",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),"Older (",B.length-3,")"]}),d.jsx("div",{className:"mt-2 space-y-2",children:B.slice(0,-3).map((ee,Ye)=>d.jsxs("div",{className:"bg-slate-50/50 dark:bg-slate-900/20 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5",children:[ee.date&&d.jsx("p",{className:"text-[8px] font-black text-indigo-400 dark:text-indigo-500 uppercase tracking-wider mb-1",children:ee.date}),d.jsx("p",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-500 leading-relaxed whitespace-pre-wrap",children:ee.text})]},Ye))})]})]})]})]})})(),t.files&&(t.files.sdho||t.files.mom||t.files.kickoff||t.files.report)&&d.jsxs("div",{className:"flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/50 mt-auto",children:[t.files.sdho&&d.jsxs("a",{href:t.files.sdho,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50 shadow-sm",children:[d.jsx(FO,{className:"h-2.5 w-2.5"})," SDHO"]}),t.files.mom&&d.jsxs("a",{href:t.files.mom,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all border border-emerald-100 dark:border-emerald-800/50 shadow-sm",children:[d.jsx(d0,{className:"h-2.5 w-2.5"})," MOM"]}),t.files.kickoff&&d.jsxs("a",{href:t.files.kickoff,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1.5 rounded-lg hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all border border-amber-100 dark:border-amber-800/50 shadow-sm",children:[d.jsx(UO,{className:"h-2.5 w-2.5"})," Kickoff"]}),t.files.report&&d.jsxs("a",{href:t.files.report,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border border-blue-100 dark:border-blue-800/50 shadow-sm",children:[d.jsx(BO,{className:"h-2.5 w-2.5"})," Report"]})]}),r&&d.jsxs("div",{className:"absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 bg-gradient-to-l from-white via-white dark:from-slate-800 dark:via-slate-800 to-transparent pl-8 rounded-tr-2xl",children:[d.jsx("button",{onClick:B=>{B.stopPropagation(),e(t)},className:"p-2 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm group/btn",children:d.jsx(WO,{className:"h-3.5 w-3.5"})}),d.jsx("button",{onClick:B=>{B.stopPropagation(),n(t.id)},className:"p-2 bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-all shadow-sm group/btn",children:d.jsx(om,{className:"h-3.5 w-3.5"})})]}),m&&d.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto",onClick:B=>B.stopPropagation(),children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("h4",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[d.jsx(p0,{className:"h-3 w-3 text-emerald-500"}),"Project Financials (Mio IDR)"]}),k&&d.jsxs("span",{className:`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${(new Date-k)/(1e3*60*60*24)>7?"bg-amber-50 text-amber-600 border border-amber-100":"bg-emerald-50 text-emerald-600 border border-emerald-100"}`,children:["Updated: ",Fh(k)]})]}),r&&d.jsxs("button",{onClick:C,className:"flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter",title:"Scrape Financials from CPC",children:[d.jsx(f0,{className:"h-2.5 w-2.5"}),"Scrape Financials"]})]}),d.jsxs("table",{className:"w-full text-left border-collapse min-w-[700px]",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"bg-slate-50 dark:bg-slate-900",children:[d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"WBS"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"GL Account"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Description"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Cost Plan"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Commitment"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Actual"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Available"})]})}),d.jsx("tbody",{children:v.map(B=>d.jsxs(pn.Fragment,{children:[d.jsxs("tr",{className:"bg-emerald-50/30 border-b border-emerald-50",children:[d.jsx("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 tabular-nums",children:B.wbs}),d.jsx("td",{colSpan:"2",className:"px-3 py-2 text-[11px] font-black text-emerald-900 italic uppercase tracking-tighter",children:"WBS TOTAL"}),d.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costPlan.toLocaleString("id-ID"),"M"]}),d.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costCommit.toLocaleString("id-ID"),"M"]}),d.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costActual.toLocaleString("id-ID"),"M"]}),d.jsxs("td",{className:`px-3 py-2 text-[11px] font-black text-right tabular-nums ${B.availableBudget<0?"text-red-600":"text-emerald-900"}`,children:[B.availableBudget.toLocaleString("id-ID"),"M"]})]}),B.items.map((ee,Ye)=>d.jsxs("tr",{className:"border-b border-slate-50 last:border-0 hover:bg-slate-50 dark:bg-slate-900/50 transition-colors",children:[d.jsx("td",{className:"px-3 py-2 text-[11px] font-bold tabular-nums"}),d.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-slate-600 dark:text-slate-300 tabular-nums",children:ee.glAccount}),d.jsx("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-700 dark:text-slate-200",children:ee.glAccountName}),d.jsxs("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:[yn(ee.costPlan).toLocaleString("id-ID"),"M"]}),d.jsxs("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:[yn(ee.costCommit).toLocaleString("id-ID"),"M"]}),d.jsx("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:yn(ee.costActual)>0?`${yn(ee.costActual).toLocaleString("id-ID")}M`:"-"}),d.jsxs("td",{className:`px-3 py-2 text-[11px] font-bold text-right tabular-nums ${yn(ee.availableBudget)<0?"text-red-600":"text-slate-800 dark:text-slate-100"}`,children:[yn(ee.availableBudget).toLocaleString("id-ID"),"M"]})]},`${B.wbs}-${Ye}`))]},B.wbs))})]}),v.length===0&&!R&&d.jsx("div",{className:"py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700",children:d.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest italic",children:"No financial data available"})})]}),i&&d.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto",onClick:B=>B.stopPropagation(),children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("h4",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[d.jsx(jh,{className:"h-3 w-3 text-indigo-500"}),"Assigned Team Members"]}),r&&d.jsxs("button",{onClick:E,className:"flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter",title:"Scrape Team from CPC",children:[d.jsx(f0,{className:"h-2.5 w-2.5"}),"Scrape Team Assignment"]})]}),d.jsxs("table",{className:"w-full text-left border-collapse min-w-[600px]",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"bg-slate-50 dark:bg-slate-900",children:[d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"WBS"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"NPK"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Name"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Role"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"From"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"To"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Type"}),d.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-center",children:"Action"})]})}),d.jsx("tbody",{children:l.map(B=>{const ee=(B.role||"").toLowerCase()==="project manager";return d.jsxs("tr",{className:`border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors ${ee?"bg-indigo-50/50 dark:bg-indigo-900/20 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30":"hover:bg-slate-50 dark:hover:bg-slate-700/30"}`,children:[d.jsx("td",{className:`px-3 py-2 text-[11px] font-bold tabular-nums ${ee?"text-indigo-700 dark:text-indigo-300":"text-slate-700 dark:text-slate-200"}`,children:B.wbs||B.fullWbs||"-"}),d.jsx("td",{className:`px-3 py-2 text-[11px] font-bold tabular-nums ${ee?"text-indigo-700 dark:text-indigo-300":"text-slate-600 dark:text-slate-300"}`,children:B.npk||"-"}),d.jsx("td",{className:`px-3 py-2 text-[11px] font-black ${ee?"text-indigo-700 dark:text-indigo-200":"text-slate-800 dark:text-slate-100"}`,children:d.jsxs("div",{className:"flex items-center gap-1",children:[ee&&d.jsx(HO,{className:"h-2.5 w-2.5 text-indigo-600"}),B.name||"-"]})}),d.jsx("td",{className:`px-3 py-2 text-[11px] font-black ${ee?"text-indigo-600 dark:text-indigo-400":"text-slate-600 dark:text-slate-300"}`,children:B.role||"-"}),d.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 tabular-nums",children:B.start||"-"}),d.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-indigo-600 tabular-nums",children:B.end||"-"}),d.jsx("td",{className:"px-3 py-2 text-[11px]",children:d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${B.type==="D"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}`,children:B.type==="S"?"Shared":B.type==="D"?"Dedicated":B.type||"-"})}),d.jsx("td",{className:"px-3 py-2 text-center",children:d.jsxs("a",{href:`https://agit-assignment-generator-344523195695.asia-southeast1.run.app/?projectNumber=${t.projNumber}&npk=${B.npk}`,target:"_blank",rel:"noopener noreferrer",onClick:Ye=>Ye.stopPropagation(),className:"inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all text-[9.5px] font-black uppercase tracking-tighter border border-indigo-100 dark:border-indigo-800/50 shadow-sm",title:"Open Assignment Generator",children:[d.jsx(d0,{className:"h-2.5 w-2.5"}),S[String(B.npk)]&&d.jsx(am,{className:"h-2.5 w-2.5 text-emerald-500 shrink-0 inline-block mr-0.5"}),"Letter"]})})]},B.id)})})]}),l.length===0&&!c&&d.jsx("div",{className:"py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700",children:d.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest italic",children:"No team members assigned"})})]})]})},cD=pn.memo(uD),lo=({type:t="card",count:e=1})=>{const n=()=>{switch(t){case"stat":return"h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse";case"chart":return"h-48 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse";case"card":default:return"space-y-3 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"}},r=()=>d.jsxs("div",{className:n(),children:[d.jsx("div",{className:"h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),d.jsx("div",{className:"h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),d.jsxs("div",{className:"flex gap-4 pt-2",children:[d.jsx("div",{className:"h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),d.jsx("div",{className:"h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"})]})]}),s=()=>d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:n()}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("div",{className:"h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),d.jsx("div",{className:"h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"})]})]}),i=()=>d.jsx("div",{className:n()}),o=()=>{switch(t){case"stat":return s();case"chart":return i();case"card":default:return r()}};return d.jsx(d.Fragment,{children:Array.from({length:e}).map((l,u)=>d.jsx("div",{children:o()},u))})};async function hD(t){var r;const e=(r=t.name.split(".").pop())==null?void 0:r.toLowerCase();let n="";try{if(e==="pdf")if(typeof window<"u"&&window.pdfjsLib){const s=await t.arrayBuffer(),i=await window.pdfjsLib.getDocument({data:s}).promise;for(let o=1;o<=i.numPages;o++){const u=await(await i.getPage(o)).getTextContent();n+=u.items.map(c=>c.str).join(" ")+" "}}else console.warn("PDF.js not loaded. Install pdfjs-dist or include via CDN."),n="[PDF text extraction unavailable - PDF.js not loaded]";else if(e==="docx"||e==="doc")if(typeof window<"u"&&window.mammoth){const s=await t.arrayBuffer();n=(await window.mammoth.extractRawText({arrayBuffer:s})).value}else console.warn("Mammoth not loaded. Install mammoth or include via CDN."),n="[DOCX text extraction unavailable - Mammoth not loaded]";else["txt","csv","md","json"].includes(e)?n=await t.text():n=`[Unsupported file type: .${e}]`;return console.log(`Extracted text from ${t.name}: ${n.length} chars`),n}catch(s){return console.error("Extraction error:",s),`Error during extraction: ${s.message}`}}async function dD(t){const e=`${Date.now()}_${t.name}`,n=g1(I1,`attachments/${e}`),r=await zN(n,t),s=await HN(r.ref);return console.log("File uploaded to Storage:",s),s}async function fD(t){try{const n=new URL(t).pathname.split("/o/");if(n.length<2)throw new Error("Invalid storage URL format");const r=n[1],s=decodeURIComponent(r),i=g1(I1,s);return await WN(i),console.log("Deleted from Storage:",s),!0}catch(e){return console.error("Delete from Storage failed:",e),!1}}const pD=J.lazy(()=>Rw(()=>import("./Dashboard-qAk1kJ4O.js"),[])),mD=J.lazy(()=>Rw(()=>import("./ProjectModal-CAUhZZua.js"),[])),gD=({onLogin:t,isLoggingIn:e})=>d.jsxs("form",{onSubmit:t,className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 w-full max-w-md space-y-4",children:[d.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-slate-100",children:"Sign in"}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",children:"Email"}),d.jsx("input",{name:"email",type:"email",required:!0,className:"w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200",placeholder:"you@company.com"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",children:"Password"}),d.jsx("input",{name:"password",type:"password",required:!0,className:"w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200",placeholder:"••••••••"})]}),d.jsx("button",{type:"submit",disabled:e,className:"w-full h-11 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all active:scale-95 flex items-center justify-center gap-2",children:e?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{className:"animate-spin h-4 w-4",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),"Signing in..."]}):"Sign in"})]}),yD=()=>{const[t,e]=J.useState(null),[n,r]=J.useState(!1),[s,i]=J.useState(!1),[o,l]=J.useState(!1),[u,c]=J.useState([]),[p,m]=J.useState(!0),[g,v]=J.useState(null),[A,R]=J.useState("list"),[O,k]=J.useState("light"),[w,S]=J.useState(!1),[N,F]=J.useState(null),[U,T]=J.useState(null),[_,I]=J.useState("All"),[E,C]=J.useState({status:"All Active",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),[b,x]=J.useState(""),[B,ee]=J.useState({projName:"",projNumber:"",customer:"",pm:"",status:"Ongoing",value:0,sisaMandays:0,start:"",end:"",subcon:"",methodology:"BAST Only",note:"",solusi:"",files:{sdho:"",mom:"",kickoff:"",report:"",sdho_text:"",mom_text:"",kickoff_text:"",report_text:""}}),Ye=J.useRef(null),et=J.useMemo(()=>{const M=[...new Set(u.map(re=>re.customer).filter(Boolean))].sort(),q=[...new Set(u.map(re=>re.solusi).filter(Boolean))].sort(),Z=[...new Set(u.map(re=>re.pm).filter(Boolean))].sort(),le=[...new Set(u.map(re=>{var _e;return(_e=re.start)==null?void 0:_e.split("-")[0]}).filter(Boolean).filter(re=>Number(re)>=2019))].sort((re,_e)=>Number(_e)-Number(re)),pe=[...new Set(u.map(re=>re.methodology).filter(Boolean))].sort();return{customers:M,solutions:q,pms:Z,years:le,methodologies:pe}},[u]),z=et.pms,Y=J.useMemo(()=>u.filter(M=>{var q,Z,le,pe,re;if(E.status!=="All"){if(E.status==="All Active"){if(!["Ongoing","Maintenance"].includes(M.status))return!1}else if(E.status&&M.status!==E.status)return!1}if(b){const _e=b.toLowerCase();if(!((q=M.projName)!=null&&q.toLowerCase().includes(_e)||(Z=M.customer)!=null&&Z.toLowerCase().includes(_e)||(le=M.projNumber)!=null&&le.toLowerCase().includes(_e)||(pe=M.pm)!=null&&pe.toLowerCase().includes(_e)||(re=M.solusi)!=null&&re.toLowerCase().includes(_e)))return!1}if(E.customer&&(M.customer||"").trim()!==(E.customer||"").trim()||E.solution&&(M.solusi||"").trim()!==(E.solution||"").trim()||E.pm&&(M.pm||"").trim()!==(E.pm||"").trim()||E.year&&!(M.start||"").trim().startsWith(E.year.trim()))return!1;if(E.methodology!=="All Types"){if(E.methodology==="Tracked by EPM"){if(!["Simple","Complex"].includes(M.methodology))return!1}else if(M.methodology!==E.methodology)return!1}return!(!E.showArchived&&M.status==="Archived")}),[u,E,b]),K=J.useMemo(()=>{const M=_==="All"?u:u.filter(de=>{var Pe;return(Pe=de.start)==null?void 0:Pe.startsWith(_)}),q=M.filter(de=>["Ongoing","Maintenance"].includes(de.status)),Z=q.length,le=q.reduce((de,Pe)=>de+(Number(Pe.value)||0),0),pe=q.reduce((de,Pe)=>de+(Number(Pe.sisaMandays)||0),0),re={};q.forEach(de=>{de.pm&&(re[de.pm]=(re[de.pm]||0)+1)});const _e=Object.entries(re).sort((de,Pe)=>Pe[1]-de[1]).slice(0,10),Zn=[...M].sort((de,Pe)=>(Number(Pe.value)||0)-(Number(de.value)||0)).slice(0,10),Da=[...M].sort((de,Pe)=>(Number(Pe.sisaMandays)||0)-(Number(de.sisaMandays)||0)).slice(0,10),Os={};M.forEach(de=>{de.customer&&(Os[de.customer]=(Os[de.customer]||0)+(Number(de.value)||0))});const Dc=Object.entries(Os).sort((de,Pe)=>Pe[1]-de[1]).slice(0,10),Yr=M.filter(de=>de.status==="Belum SDHO"),La=[...new Set(u.map(de=>{var Pe;return(Pe=de.start)==null?void 0:Pe.split("-")[0]}).filter(Boolean).filter(de=>Number(de)>=2019))].sort((de,Pe)=>Number(Pe)-Number(de));return{activeCount:Z,totalValue:le,totalMandays:pe,topProjectsByValue:Zn,topProjectsByMandays:Da,topPMs:_e,topCustomers:Dc,belumSdhoProjects:Yr,availableYears:La}},[u,_]),Q=J.useCallback((M,q,Z=5e3)=>{T({variant:M,message:q}),Z>0&&setTimeout(()=>T(null),Z)},[]);J.useEffect(()=>Eb(Mh,async q=>{if(q){e(q),r(!0);try{const Z=oo(qt,"users",q.uid),le=await p2(Z);if(le.exists()){const pe=le.data().role;i(pe==="admin")}else i(!1)}catch{i(!1)}}else e(null),r(!1),i(!1)}),[]),J.useEffect(()=>{if(!n)return;m(!0);const M=ls(qt,lr),q=_2(M,Z=>{const le=Z.docs.map(pe=>({id:pe.id,...pe.data()}));le.sort((pe,re)=>(re.projNumber||"").localeCompare(pe.projNumber||"")),c(le),m(!1),v(null)},Z=>{console.error("Error loading projects:",Z),v("Failed to load projects"),m(!1)});return()=>q()},[n]),J.useEffect(()=>{document.documentElement.classList.toggle("dark",O==="dark")},[O]);const ie=J.useCallback(()=>{k(M=>M==="light"?"dark":"light")},[]),ke=J.useCallback(async M=>{M.preventDefault(),l(!0);const q=M.target.email.value,Z=M.target.password.value;try{await _b(Mh,q,Z)}catch(le){Q("error","Login failed: "+(le.message||String(le)),8e3)}finally{l(!1)}},[Q]),_t=J.useCallback(async()=>{try{await Tb(Mh)}catch{Q("error","Logout failed",8e3)}},[Q]),vt=J.useCallback((M=null)=>{if(F(M),M){const q=M.files||{};ee({projName:M.projName||"",projNumber:M.projNumber||"",customer:M.customer||"",pm:M.pm||"",status:M.status||"Ongoing",value:Number(M.value)||0,sisaMandays:Number(M.sisaMandays)||0,start:M.start||"",end:M.end||"",subcon:M.subcon||"",methodology:M.methodology||"BAST Only",note:M.note||"",solusi:M.solusi||"",files:{sdho:q.sdho||"",mom:q.mom||"",kickoff:q.kickoff||"",report:q.report||"",sdho_text:q.sdho_text||"",mom_text:q.mom_text||"",kickoff_text:q.kickoff_text||"",report_text:q.report_text||""}})}else ee({projName:"",projNumber:"",customer:"",pm:"",status:"Ongoing",value:0,sisaMandays:0,start:"",end:"",subcon:"",methodology:"BAST Only",note:"",solusi:"",files:{sdho:"",mom:"",kickoff:"",report:"",sdho_text:"",mom_text:"",kickoff_text:"",report_text:""}});S(!0)},[]),Lt=J.useCallback(()=>{S(!1),F(null)},[]),tn=J.useCallback(M=>{ee(q=>typeof M=="function"?M(q):{...q,...M})},[]),bc=M=>{var Z,le,pe,re;const q=[];return(Z=M.projName)!=null&&Z.trim()||q.push("Project Name is required"),(le=M.projNumber)!=null&&le.trim()||q.push("Project Number is required"),(pe=M.customer)!=null&&pe.trim()||q.push("Customer is required"),(re=M.pm)!=null&&re.trim()||q.push("PM is required"),M.status||q.push("Status is required"),M.start||q.push("Start Date is required"),M.value<0&&q.push("Value must be ≥ 0"),M.sisaMandays<0&&q.push("Mandays must be ≥ 0"),M.end&&M.start&&M.end<M.start&&q.push("End Date cannot be before Start Date"),q},Pc=J.useCallback(async M=>{M.preventDefault();const q=bc(B);if(q.length>0){Q("error",q.join("; "),8e3);return}try{if(N){const Z=oo(qt,lr,N.id);await g2(Z,B),Q("success","Project updated successfully!",3e3)}else{const Z=oo(ls(qt,lr));await m2(Z,B),Q("success","Project created successfully!",3e3)}Lt()}catch(Z){console.error("Save error:",Z),Q("error","Failed to save project: "+(Z.message||String(Z)),8e3)}},[N,B,Q,Lt]),Ps=J.useCallback(async M=>{if(window.confirm("Delete this project?"))try{await y2(oo(qt,lr,M)),Q("success","Project deleted.",3e3)}catch(q){Q("error","Delete failed: "+(q.message||String(q)),8e3)}},[Q]),Ns=J.useCallback(async()=>{if(window.confirm("Delete ALL projects? This cannot be undone."))try{const M=ls(qt,lr),q=await Ul(M),Z=E_(qt);q.docs.forEach(le=>Z.delete(le.ref)),await Z.commit(),Q("success","All projects deleted.",3e3)}catch(M){Q("error","Truncate failed: "+(M.message||String(M)),8e3)}},[Q]),Li=J.useCallback(()=>{var M;(M=Ye.current)==null||M.click()},[]),Vi=J.useCallback(async M=>{var Z;const q=(Z=M.target.files)==null?void 0:Z[0];if(q){try{const le=await q.text(),pe=lD(le);if(pe.length===0){Q("error","No valid projects found in CSV",8e3);return}const re=E_(qt);pe.forEach(_e=>{const Zn=oo(ls(qt,lr));re.set(Zn,_e)}),await re.commit(),Q("success",`Imported ${pe.length} projects successfully!`,3e3)}catch(le){console.error("Import error:",le),Q("error","Import failed: "+(le.message||String(le)),8e3)}M.target.value=""}},[Q]),Mi=J.useCallback(M=>{if(M==="Belum SDHO")R("list"),C({status:"Belum SDHO",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),x("");else{const q=u.find(Z=>Z.id===M);q&&(R("list"),C({status:"All",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),x(q.projName))}},[u]),ji=J.useCallback(M=>{R("list"),C({status:"All Active",customer:"",solution:"",pm:M,year:_==="All"?"":_,methodology:"All Types",showArchived:!1}),x("")},[_]),Na=J.useCallback(M=>{R("list"),C({status:"All",customer:M,solution:"",pm:"",year:_==="All"?"":_,methodology:"All Types",showArchived:!1}),x("")},[_]),Nc=J.useCallback((M,q)=>{C(Z=>({...Z,[M]:q}))},[]),Oc=J.useCallback(()=>{C({status:"All Active",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),x("")},[]),Oa=J.useCallback(async(M,q)=>{try{const Z=await dD(q),le=await hD(q);if(ee(pe=>({...pe,files:{...pe.files,[M]:Z,[`${M}_text`]:le}})),Q("success",`${M.toUpperCase()} uploaded successfully!`,3e3),M==="mom"&&le)try{const pe=await inferMethodologyFromText(le);pe&&(ee(re=>({...re,methodology:pe})),Q("info",`Methodology inferred: ${pe}`,5e3))}catch(pe){console.error("Methodology inference error:",pe)}}catch(Z){console.error("Upload error:",Z),Q("error","Upload failed: "+(Z.message||String(Z)),8e3)}},[Q]),Fi=J.useCallback(M=>{ee(q=>{var le;const Z=(le=q.files)==null?void 0:le[M];return Z&&Z.startsWith("https://firebasestorage.googleapis.com/")&&fD(Z).catch(pe=>console.error("Storage delete error:",pe)),{...q,files:{...q.files,[M]:"",[`${M}_text`]:""}}})},[]);return n?d.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-900",children:[d.jsx(oD,{activeTab:A,onTabChange:R,isAdmin:s,onImport:Li,onCreate:()=>vt(null),onTruncate:Ns,onLogout:_t,theme:O,onToggleTheme:ie,isAuthenticated:n}),d.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-6",children:[A==="list"&&d.jsxs(d.Fragment,{children:[d.jsx(sD,{filters:E,searchTerm:b,filterOptions:et,pmOptions:z,onSearchChange:x,onFilterChange:Nc,onReset:Oc}),p?d.jsx(lo,{type:"card",count:6}):g?d.jsx("div",{className:"text-center py-12 text-red-600",children:g}):Y.length===0?d.jsx("div",{className:"text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700",children:d.jsx("p",{className:"text-slate-500 dark:text-slate-400",children:"No projects match the current filters."})}):d.jsx("div",{className:"flex flex-col gap-6",children:Y.map(M=>d.jsx(cD,{project:M,onEdit:vt,onDelete:Ps,isAdmin:s},M.id))})]}),A==="dashboard"&&d.jsx(J.Suspense,{fallback:d.jsxs("div",{className:"space-y-8",children:[d.jsx(lo,{type:"stat",count:4}),d.jsx(lo,{type:"chart",count:4})]}),children:p?d.jsxs("div",{className:"space-y-8",children:[d.jsx(lo,{type:"stat",count:4}),d.jsx(lo,{type:"chart",count:4})]}):d.jsx(pD,{dashboardData:K,dashboardYear:_,onYearChange:I,onProjectClick:Mi,onPMClick:ji,onCustomerClick:Na})})]}),w&&d.jsx(J.Suspense,{fallback:d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center",children:d.jsx("div",{className:"text-white",children:"Loading modal..."})}),children:d.jsx(mD,{isOpen:w,editingProject:N,formData:B,isAdmin:s,formError:null,onClose:Lt,onSubmit:Pc,onFormDataChange:tn,onAttachmentUpload:Oa,onAttachmentDelete:Fi,showToast:Q})}),U&&d.jsx(eD,{toast:U,onClear:()=>T(null)}),d.jsx("input",{type:"file",ref:Ye,accept:".csv,.txt",style:{display:"none"},onChange:Vi})]}):d.jsx("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4",children:d.jsx(gD,{onLogin:ke,isLoggingIn:o})})};class _D extends pn.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){this.setState({errorInfo:n}),console.error("Error caught by boundary:",e,n)}render(){var e;return this.state.hasError?d.jsxs("div",{style:{padding:"40px",fontFamily:"Inter, sans-serif",textAlign:"center",background:"var(--card-bg)",borderRadius:"12px",border:"1px solid var(--border)",maxWidth:"500px",margin:"80px auto",color:"var(--text-main)"},children:[d.jsx("h2",{style:{color:"var(--error)",marginBottom:"12px",fontSize:"24px",fontWeight:"700"},children:"Oops! Something went wrong"}),d.jsx("p",{style:{marginBottom:"20px",fontSize:"14px",lineHeight:"1.6"},children:"The app encountered an unexpected error. Please refresh the page or contact support."}),d.jsxs("details",{style:{textAlign:"left",marginBottom:"20px",padding:"12px",background:"var(--input-bg)",borderRadius:"8px",border:"1px solid var(--border)"},children:[d.jsx("summary",{style:{cursor:"pointer",fontWeight:"600",userSelect:"none"},children:"Technical details"}),d.jsx("pre",{style:{whiteSpace:"pre-wrap",fontSize:"12px",marginTop:"8px",fontFamily:"monospace",color:"var(--text-secondary)"},children:(e=this.state.error)==null?void 0:e.toString()})]}),d.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 24px",background:"var(--primary)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Reload Application"})]}):this.props.children}}const vD=document.getElementById("root"),wD=Cw(vD);wD.render(d.jsx(pn.StrictMode,{children:d.jsx(_D,{children:d.jsx(yD,{})})}));export{SD as A,CD as B,am as C,kD as D,NO as F,pn as R,TD as S,xD as T,jh as U,VO as X,p0 as a,AD as b,RD as c,ID as d,PD as e,m0 as f,AO as g,bD as h,d as j,ND as p,bO as v};
