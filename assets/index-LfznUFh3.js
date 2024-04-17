(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y2={exports:{}},Yd={},q2={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=Symbol.for("react.element"),MP=Symbol.for("react.portal"),EP=Symbol.for("react.fragment"),wP=Symbol.for("react.strict_mode"),TP=Symbol.for("react.profiler"),AP=Symbol.for("react.provider"),bP=Symbol.for("react.context"),CP=Symbol.for("react.forward_ref"),RP=Symbol.for("react.suspense"),PP=Symbol.for("react.memo"),LP=Symbol.for("react.lazy"),k1=Symbol.iterator;function IP(t){return t===null||typeof t!="object"?null:(t=k1&&t[k1]||t["@@iterator"],typeof t=="function"?t:null)}var K2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z2=Object.assign,Q2={};function ml(t,e,n){this.props=t,this.context=e,this.refs=Q2,this.updater=n||K2}ml.prototype.isReactComponent={};ml.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ml.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J2(){}J2.prototype=ml.prototype;function d0(t,e,n){this.props=t,this.context=e,this.refs=Q2,this.updater=n||K2}var h0=d0.prototype=new J2;h0.constructor=d0;Z2(h0,ml.prototype);h0.isPureReactComponent=!0;var z1=Array.isArray,eS=Object.prototype.hasOwnProperty,p0={current:null},tS={key:!0,ref:!0,__self:!0,__source:!0};function nS(t,e,n){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)eS.call(e,i)&&!tS.hasOwnProperty(i)&&(r[i]=e[i]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];r.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)r[i]===void 0&&(r[i]=u[i]);return{$$typeof:Xu,type:t,key:o,ref:l,props:r,_owner:p0.current}}function NP(t,e){return{$$typeof:Xu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function m0(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xu}function DP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var B1=/\/+/g;function Np(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DP(""+t.key):e.toString(36)}function qf(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Xu:case MP:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+Np(l,0):i,z1(r)?(n="",t!=null&&(n=t.replace(B1,"$&/")+"/"),qf(r,e,n,"",function(d){return d})):r!=null&&(m0(r)&&(r=NP(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(B1,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",z1(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+Np(o,u);l+=qf(o,e,n,f,r)}else if(f=IP(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+Np(o,u++),l+=qf(o,e,n,f,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function qc(t,e,n){if(t==null)return t;var i=[],r=0;return qf(t,i,"","",function(o){return e.call(n,o,r++)}),i}function UP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jn={current:null},Kf={transition:null},OP={ReactCurrentDispatcher:Jn,ReactCurrentBatchConfig:Kf,ReactCurrentOwner:p0};_t.Children={map:qc,forEach:function(t,e,n){qc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qc(t,function(){e++}),e},toArray:function(t){return qc(t,function(e){return e})||[]},only:function(t){if(!m0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_t.Component=ml;_t.Fragment=EP;_t.Profiler=TP;_t.PureComponent=d0;_t.StrictMode=wP;_t.Suspense=RP;_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OP;_t.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Z2({},t.props),r=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=p0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)eS.call(e,f)&&!tS.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:Xu,type:t.type,key:r,ref:o,props:i,_owner:l}};_t.createContext=function(t){return t={$$typeof:bP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AP,_context:t},t.Consumer=t};_t.createElement=nS;_t.createFactory=function(t){var e=nS.bind(null,t);return e.type=t,e};_t.createRef=function(){return{current:null}};_t.forwardRef=function(t){return{$$typeof:CP,render:t}};_t.isValidElement=m0;_t.lazy=function(t){return{$$typeof:LP,_payload:{_status:-1,_result:t},_init:UP}};_t.memo=function(t,e){return{$$typeof:PP,type:t,compare:e===void 0?null:e}};_t.startTransition=function(t){var e=Kf.transition;Kf.transition={};try{t()}finally{Kf.transition=e}};_t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_t.useCallback=function(t,e){return Jn.current.useCallback(t,e)};_t.useContext=function(t){return Jn.current.useContext(t)};_t.useDebugValue=function(){};_t.useDeferredValue=function(t){return Jn.current.useDeferredValue(t)};_t.useEffect=function(t,e){return Jn.current.useEffect(t,e)};_t.useId=function(){return Jn.current.useId()};_t.useImperativeHandle=function(t,e,n){return Jn.current.useImperativeHandle(t,e,n)};_t.useInsertionEffect=function(t,e){return Jn.current.useInsertionEffect(t,e)};_t.useLayoutEffect=function(t,e){return Jn.current.useLayoutEffect(t,e)};_t.useMemo=function(t,e){return Jn.current.useMemo(t,e)};_t.useReducer=function(t,e,n){return Jn.current.useReducer(t,e,n)};_t.useRef=function(t){return Jn.current.useRef(t)};_t.useState=function(t){return Jn.current.useState(t)};_t.useSyncExternalStore=function(t,e,n){return Jn.current.useSyncExternalStore(t,e,n)};_t.useTransition=function(){return Jn.current.useTransition()};_t.version="18.2.0";q2.exports=_t;var et=q2.exports;const Pt=$2(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FP=et,kP=Symbol.for("react.element"),zP=Symbol.for("react.fragment"),BP=Object.prototype.hasOwnProperty,HP=FP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VP={key:!0,ref:!0,__self:!0,__source:!0};function iS(t,e,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)BP.call(e,i)&&!VP.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kP,type:t,key:o,ref:l,props:r,_owner:HP.current}}Yd.Fragment=zP;Yd.jsx=iS;Yd.jsxs=iS;Y2.exports=Yd;var G=Y2.exports,Ym={},rS={exports:{}},bi={},aS={exports:{}},oS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,ne){var ee=z.length;z.push(ne);e:for(;0<ee;){var ge=ee-1>>>1,Ce=z[ge];if(0<r(Ce,ne))z[ge]=ne,z[ee]=Ce,ee=ge;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var ne=z[0],ee=z.pop();if(ee!==ne){z[0]=ee;e:for(var ge=0,Ce=z.length,Ze=Ce>>>1;ge<Ze;){var Q=2*(ge+1)-1,he=z[Q],Se=Q+1,xe=z[Se];if(0>r(he,ee))Se<Ce&&0>r(xe,he)?(z[ge]=xe,z[Se]=ee,ge=Se):(z[ge]=he,z[Q]=ee,ge=Q);else if(Se<Ce&&0>r(xe,ee))z[ge]=xe,z[Se]=ee,ge=Se;else break e}}return ne}function r(z,ne){var ee=z.sortIndex-ne.sortIndex;return ee!==0?ee:z.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],h=1,m=null,g=3,y=!1,M=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var ne=n(d);ne!==null;){if(ne.callback===null)i(d);else if(ne.startTime<=z)i(d),ne.sortIndex=ne.expirationTime,e(f,ne);else break;ne=n(d)}}function C(z){if(w=!1,x(z),!M)if(n(f)!==null)M=!0,de(O);else{var ne=n(d);ne!==null&&ce(C,ne.startTime-z)}}function O(z,ne){M=!1,w&&(w=!1,p(k),k=-1),y=!0;var ee=g;try{for(x(ne),m=n(f);m!==null&&(!(m.expirationTime>ne)||z&&!X());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var Ce=ge(m.expirationTime<=ne);ne=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(f)&&i(f),x(ne)}else i(f);m=n(f)}if(m!==null)var Ze=!0;else{var Q=n(d);Q!==null&&ce(C,Q.startTime-ne),Ze=!1}return Ze}finally{m=null,g=ee,y=!1}}var N=!1,I=null,k=-1,R=5,T=-1;function X(){return!(t.unstable_now()-T<R)}function ie(){if(I!==null){var z=t.unstable_now();T=z;var ne=!0;try{ne=I(!0,z)}finally{ne?H():(N=!1,I=null)}}else N=!1}var H;if(typeof S=="function")H=function(){S(ie)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ae=re.port2;re.port1.onmessage=ie,H=function(){ae.postMessage(null)}}else H=function(){_(ie,0)};function de(z){I=z,N||(N=!0,H())}function ce(z,ne){k=_(function(){z(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){M||y||(M=!0,de(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var ee=g;g=ne;try{return z()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,ne){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=g;g=z;try{return ne()}finally{g=ee}},t.unstable_scheduleCallback=function(z,ne,ee){var ge=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ee+Ce,z={id:h++,callback:ne,priorityLevel:z,startTime:ee,expirationTime:Ce,sortIndex:-1},ee>ge?(z.sortIndex=ee,e(d,z),n(f)===null&&z===n(d)&&(w?(p(k),k=-1):w=!0,ce(C,ee-ge))):(z.sortIndex=Ce,e(f,z),M||y||(M=!0,de(O))),z},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(z){var ne=g;return function(){var ee=g;g=ne;try{return z.apply(this,arguments)}finally{g=ee}}}})(oS);aS.exports=oS;var GP=aS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=et,Ai=GP;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lS=new Set,xu={};function Yo(t,e){il(t,e),il(t+"Capture",e)}function il(t,e){for(xu[t]=e,t=0;t<e.length;t++)lS.add(e[t])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qm=Object.prototype.hasOwnProperty,WP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H1={},V1={};function XP(t){return qm.call(V1,t)?!0:qm.call(H1,t)?!1:WP.test(t)?V1[t]=!0:(H1[t]=!0,!1)}function jP(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $P(t,e,n,i){if(e===null||typeof e>"u"||jP(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ei(t,e,n,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var Dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dn[t]=new ei(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dn[e]=new ei(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dn[t]=new ei(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dn[t]=new ei(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dn[t]=new ei(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dn[t]=new ei(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dn[t]=new ei(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dn[t]=new ei(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dn[t]=new ei(t,5,!1,t.toLowerCase(),null,!1,!1)});var g0=/[\-:]([a-z])/g;function v0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(g0,v0);Dn[e]=new ei(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(g0,v0);Dn[e]=new ei(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(g0,v0);Dn[e]=new ei(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dn[t]=new ei(t,1,!1,t.toLowerCase(),null,!1,!1)});Dn.xlinkHref=new ei("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dn[t]=new ei(t,1,!1,t.toLowerCase(),null,!0,!0)});function _0(t,e,n,i){var r=Dn.hasOwnProperty(e)?Dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($P(e,n,r,i)&&(n=null),i||r===null?XP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var oa=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kc=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),uS=Symbol.for("react.provider"),cS=Symbol.for("react.context"),y0=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Qm=Symbol.for("react.suspense_list"),S0=Symbol.for("react.memo"),Ca=Symbol.for("react.lazy"),fS=Symbol.for("react.offscreen"),G1=Symbol.iterator;function Vl(t){return t===null||typeof t!="object"?null:(t=G1&&t[G1]||t["@@iterator"],typeof t=="function"?t:null)}var an=Object.assign,Dp;function tu(t){if(Dp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dp=e&&e[1]||""}return`
`+Dp+t}var Up=!1;function Op(t,e){if(!t||Up)return"";Up=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,u=o.length-1;1<=l&&0<=u&&r[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(r[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||r[l]!==o[u]){var f=`
`+r[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{Up=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tu(t):""}function YP(t){switch(t.tag){case 5:return tu(t.type);case 16:return tu("Lazy");case 13:return tu("Suspense");case 19:return tu("SuspenseList");case 0:case 2:case 15:return t=Op(t.type,!1),t;case 11:return t=Op(t.type.render,!1),t;case 1:return t=Op(t.type,!0),t;default:return""}}function Jm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ls:return"Portal";case Km:return"Profiler";case x0:return"StrictMode";case Zm:return"Suspense";case Qm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cS:return(t.displayName||"Context")+".Consumer";case uS:return(t._context.displayName||"Context")+".Provider";case y0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case S0:return e=t.displayName||null,e!==null?e:Jm(t.type)||"Memo";case Ca:e=t._payload,t=t._init;try{return Jm(t(e))}catch{}}return null}function qP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jm(e);case 8:return e===x0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ka(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KP(t){var e=dS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zc(t){t._valueTracker||(t._valueTracker=KP(t))}function hS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eg(t,e){var n=e.checked;return an({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function W1(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ka(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pS(t,e){e=e.checked,e!=null&&_0(t,"checked",e,!1)}function tg(t,e){pS(t,e);var n=Ka(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ng(t,e.type,n):e.hasOwnProperty("defaultValue")&&ng(t,e.type,Ka(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function X1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ng(t,e,n){(e!=="number"||dd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nu=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ka(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ig(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return an({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(nu(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ka(n)}}function mS(t,e){var n=Ka(e.value),i=Ka(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rg(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qc,vS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qc=Qc||document.createElement("div"),Qc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var su={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZP=["Webkit","ms","Moz","O"];Object.keys(su).forEach(function(t){ZP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),su[e]=su[t]})});function _S(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||su.hasOwnProperty(t)&&su[t]?(""+e).trim():e+"px"}function xS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_S(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var QP=an({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ag(t,e){if(e){if(QP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function og(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sg=null;function M0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lg=null,Ys=null,qs=null;function Y1(t){if(t=Yu(t)){if(typeof lg!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=Jd(e),lg(t.stateNode,t.type,e))}}function yS(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function SS(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Y1(t),e)for(t=0;t<e.length;t++)Y1(e[t])}}function MS(t,e){return t(e)}function ES(){}var Fp=!1;function wS(t,e,n){if(Fp)return t(e,n);Fp=!0;try{return MS(t,e,n)}finally{Fp=!1,(Ys!==null||qs!==null)&&(ES(),SS())}}function Su(t,e){var n=t.stateNode;if(n===null)return null;var i=Jd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var ug=!1;if(Qr)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){ug=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{ug=!1}function JP(t,e,n,i,r,o,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var lu=!1,hd=null,pd=!1,cg=null,eL={onError:function(t){lu=!0,hd=t}};function tL(t,e,n,i,r,o,l,u,f){lu=!1,hd=null,JP.apply(eL,arguments)}function nL(t,e,n,i,r,o,l,u,f){if(tL.apply(this,arguments),lu){if(lu){var d=hd;lu=!1,hd=null}else throw Error(ve(198));pd||(pd=!0,cg=d)}}function qo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q1(t){if(qo(t)!==t)throw Error(ve(188))}function iL(t){var e=t.alternate;if(!e){if(e=qo(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return q1(r),t;if(o===i)return q1(r),e;o=o.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,u=r.child;u;){if(u===n){l=!0,n=r,i=o;break}if(u===i){l=!0,i=r,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=r;break}if(u===i){l=!0,i=o,n=r;break}u=u.sibling}if(!l)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function AS(t){return t=iL(t),t!==null?bS(t):null}function bS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bS(t);if(e!==null)return e;t=t.sibling}return null}var CS=Ai.unstable_scheduleCallback,K1=Ai.unstable_cancelCallback,rL=Ai.unstable_shouldYield,aL=Ai.unstable_requestPaint,dn=Ai.unstable_now,oL=Ai.unstable_getCurrentPriorityLevel,E0=Ai.unstable_ImmediatePriority,RS=Ai.unstable_UserBlockingPriority,md=Ai.unstable_NormalPriority,sL=Ai.unstable_LowPriority,PS=Ai.unstable_IdlePriority,qd=null,Tr=null;function lL(t){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(qd,t,void 0,(t.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:fL,uL=Math.log,cL=Math.LN2;function fL(t){return t>>>=0,t===0?32:31-(uL(t)/cL|0)|0}var Jc=64,ef=4194304;function iu(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gd(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~r;u!==0?i=iu(u):(o&=l,o!==0&&(i=iu(o)))}else l=n&~r,l!==0?i=iu(l):o!==0&&(i=iu(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-cr(e),r=1<<n,i|=t[n],e&=~r;return i}function dL(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hL(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-cr(o),u=1<<l,f=r[l];f===-1?(!(u&n)||u&i)&&(r[l]=dL(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function fg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function LS(){var t=Jc;return Jc<<=1,!(Jc&4194240)&&(Jc=64),t}function kp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ju(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cr(e),t[e]=n}function pL(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-cr(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function w0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-cr(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var It=0;function IS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var NS,T0,DS,US,OS,dg=!1,tf=[],ka=null,za=null,Ba=null,Mu=new Map,Eu=new Map,Pa=[],mL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z1(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(e.pointerId)}}function Wl(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Yu(e),e!==null&&T0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gL(t,e,n,i,r){switch(e){case"focusin":return ka=Wl(ka,t,e,n,i,r),!0;case"dragenter":return za=Wl(za,t,e,n,i,r),!0;case"mouseover":return Ba=Wl(Ba,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Mu.set(o,Wl(Mu.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Eu.set(o,Wl(Eu.get(o)||null,t,e,n,i,r)),!0}return!1}function FS(t){var e=Po(t.target);if(e!==null){var n=qo(e);if(n!==null){if(e=n.tag,e===13){if(e=TS(n),e!==null){t.blockedOn=e,OS(t.priority,function(){DS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sg=i,n.target.dispatchEvent(i),sg=null}else return e=Yu(n),e!==null&&T0(e),t.blockedOn=n,!1;e.shift()}return!0}function Q1(t,e,n){Zf(t)&&n.delete(e)}function vL(){dg=!1,ka!==null&&Zf(ka)&&(ka=null),za!==null&&Zf(za)&&(za=null),Ba!==null&&Zf(Ba)&&(Ba=null),Mu.forEach(Q1),Eu.forEach(Q1)}function Xl(t,e){t.blockedOn===e&&(t.blockedOn=null,dg||(dg=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,vL)))}function wu(t){function e(r){return Xl(r,t)}if(0<tf.length){Xl(tf[0],t);for(var n=1;n<tf.length;n++){var i=tf[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ka!==null&&Xl(ka,t),za!==null&&Xl(za,t),Ba!==null&&Xl(Ba,t),Mu.forEach(e),Eu.forEach(e),n=0;n<Pa.length;n++)i=Pa[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pa.length&&(n=Pa[0],n.blockedOn===null);)FS(n),n.blockedOn===null&&Pa.shift()}var Ks=oa.ReactCurrentBatchConfig,vd=!0;function _L(t,e,n,i){var r=It,o=Ks.transition;Ks.transition=null;try{It=1,A0(t,e,n,i)}finally{It=r,Ks.transition=o}}function xL(t,e,n,i){var r=It,o=Ks.transition;Ks.transition=null;try{It=4,A0(t,e,n,i)}finally{It=r,Ks.transition=o}}function A0(t,e,n,i){if(vd){var r=hg(t,e,n,i);if(r===null)Yp(t,e,i,_d,n),Z1(t,i);else if(gL(r,t,e,n,i))i.stopPropagation();else if(Z1(t,i),e&4&&-1<mL.indexOf(t)){for(;r!==null;){var o=Yu(r);if(o!==null&&NS(o),o=hg(t,e,n,i),o===null&&Yp(t,e,i,_d,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Yp(t,e,i,null,n)}}var _d=null;function hg(t,e,n,i){if(_d=null,t=M0(i),t=Po(t),t!==null)if(e=qo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=TS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _d=t,null}function kS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oL()){case E0:return 1;case RS:return 4;case md:case sL:return 16;case PS:return 536870912;default:return 16}default:return 16}}var Na=null,b0=null,Qf=null;function zS(){if(Qf)return Qf;var t,e=b0,n=e.length,i,r="value"in Na?Na.value:Na.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[o-i];i++);return Qf=r.slice(t,1<i?1-i:void 0)}function Jf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nf(){return!0}function J1(){return!1}function Ci(t){function e(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?nf:J1,this.isPropagationStopped=J1,this}return an(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nf)},persist:function(){},isPersistent:nf}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},C0=Ci(gl),$u=an({},gl,{view:0,detail:0}),yL=Ci($u),zp,Bp,jl,Kd=an({},$u,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:R0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jl&&(jl&&t.type==="mousemove"?(zp=t.screenX-jl.screenX,Bp=t.screenY-jl.screenY):Bp=zp=0,jl=t),zp)},movementY:function(t){return"movementY"in t?t.movementY:Bp}}),ex=Ci(Kd),SL=an({},Kd,{dataTransfer:0}),ML=Ci(SL),EL=an({},$u,{relatedTarget:0}),Hp=Ci(EL),wL=an({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),TL=Ci(wL),AL=an({},gl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bL=Ci(AL),CL=an({},gl,{data:0}),tx=Ci(CL),RL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IL(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LL[t])?!!e[t]:!1}function R0(){return IL}var NL=an({},$u,{key:function(t){if(t.key){var e=RL[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PL[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:R0,charCode:function(t){return t.type==="keypress"?Jf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DL=Ci(NL),UL=an({},Kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nx=Ci(UL),OL=an({},$u,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:R0}),FL=Ci(OL),kL=an({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),zL=Ci(kL),BL=an({},Kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HL=Ci(BL),VL=[9,13,27,32],P0=Qr&&"CompositionEvent"in window,uu=null;Qr&&"documentMode"in document&&(uu=document.documentMode);var GL=Qr&&"TextEvent"in window&&!uu,BS=Qr&&(!P0||uu&&8<uu&&11>=uu),ix=" ",rx=!1;function HS(t,e){switch(t){case"keyup":return VL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function VS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function WL(t,e){switch(t){case"compositionend":return VS(e);case"keypress":return e.which!==32?null:(rx=!0,ix);case"textInput":return t=e.data,t===ix&&rx?null:t;default:return null}}function XL(t,e){if(Ns)return t==="compositionend"||!P0&&HS(t,e)?(t=zS(),Qf=b0=Na=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BS&&e.locale!=="ko"?null:e.data;default:return null}}var jL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ax(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jL[t.type]:e==="textarea"}function GS(t,e,n,i){yS(i),e=xd(e,"onChange"),0<e.length&&(n=new C0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var cu=null,Tu=null;function $L(t){eM(t,0)}function Zd(t){var e=Os(t);if(hS(e))return t}function YL(t,e){if(t==="change")return e}var WS=!1;if(Qr){var Vp;if(Qr){var Gp="oninput"in document;if(!Gp){var ox=document.createElement("div");ox.setAttribute("oninput","return;"),Gp=typeof ox.oninput=="function"}Vp=Gp}else Vp=!1;WS=Vp&&(!document.documentMode||9<document.documentMode)}function sx(){cu&&(cu.detachEvent("onpropertychange",XS),Tu=cu=null)}function XS(t){if(t.propertyName==="value"&&Zd(Tu)){var e=[];GS(e,Tu,t,M0(t)),wS($L,e)}}function qL(t,e,n){t==="focusin"?(sx(),cu=e,Tu=n,cu.attachEvent("onpropertychange",XS)):t==="focusout"&&sx()}function KL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zd(Tu)}function ZL(t,e){if(t==="click")return Zd(e)}function QL(t,e){if(t==="input"||t==="change")return Zd(e)}function JL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dr=typeof Object.is=="function"?Object.is:JL;function Au(t,e){if(dr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qm.call(e,r)||!dr(t[r],e[r]))return!1}return!0}function lx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ux(t,e){var n=lx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lx(n)}}function jS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $S(){for(var t=window,e=dd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dd(t.document)}return e}function L0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e4(t){var e=$S(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jS(n.ownerDocument.documentElement,n)){if(i!==null&&L0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=ux(n,o);var l=ux(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t4=Qr&&"documentMode"in document&&11>=document.documentMode,Ds=null,pg=null,fu=null,mg=!1;function cx(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mg||Ds==null||Ds!==dd(i)||(i=Ds,"selectionStart"in i&&L0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fu&&Au(fu,i)||(fu=i,i=xd(pg,"onSelect"),0<i.length&&(e=new C0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function rf(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:rf("Animation","AnimationEnd"),animationiteration:rf("Animation","AnimationIteration"),animationstart:rf("Animation","AnimationStart"),transitionend:rf("Transition","TransitionEnd")},Wp={},YS={};Qr&&(YS=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Qd(t){if(Wp[t])return Wp[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YS)return Wp[t]=e[n];return t}var qS=Qd("animationend"),KS=Qd("animationiteration"),ZS=Qd("animationstart"),QS=Qd("transitionend"),JS=new Map,fx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function io(t,e){JS.set(t,e),Yo(e,[t])}for(var Xp=0;Xp<fx.length;Xp++){var jp=fx[Xp],n4=jp.toLowerCase(),i4=jp[0].toUpperCase()+jp.slice(1);io(n4,"on"+i4)}io(qS,"onAnimationEnd");io(KS,"onAnimationIteration");io(ZS,"onAnimationStart");io("dblclick","onDoubleClick");io("focusin","onFocus");io("focusout","onBlur");io(QS,"onTransitionEnd");il("onMouseEnter",["mouseout","mouseover"]);il("onMouseLeave",["mouseout","mouseover"]);il("onPointerEnter",["pointerout","pointerover"]);il("onPointerLeave",["pointerout","pointerover"]);Yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ru));function dx(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nL(i,e,void 0,t),t.currentTarget=null}function eM(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==o&&r.isPropagationStopped())break e;dx(r,u,d),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==o&&r.isPropagationStopped())break e;dx(r,u,d),o=f}}}if(pd)throw t=cg,pd=!1,cg=null,t}function $t(t,e){var n=e[yg];n===void 0&&(n=e[yg]=new Set);var i=t+"__bubble";n.has(i)||(tM(e,t,2,!1),n.add(i))}function $p(t,e,n){var i=0;e&&(i|=4),tM(n,t,i,e)}var af="_reactListening"+Math.random().toString(36).slice(2);function bu(t){if(!t[af]){t[af]=!0,lS.forEach(function(n){n!=="selectionchange"&&(r4.has(n)||$p(n,!1,t),$p(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[af]||(e[af]=!0,$p("selectionchange",!1,e))}}function tM(t,e,n,i){switch(kS(e)){case 1:var r=_L;break;case 4:r=xL;break;default:r=A0}n=r.bind(null,e,n,t),r=void 0,!ug||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yp(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===r||f.nodeType===8&&f.parentNode===r))return;l=l.return}for(;u!==null;){if(l=Po(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}wS(function(){var d=o,h=M0(n),m=[];e:{var g=JS.get(t);if(g!==void 0){var y=C0,M=t;switch(t){case"keypress":if(Jf(n)===0)break e;case"keydown":case"keyup":y=DL;break;case"focusin":M="focus",y=Hp;break;case"focusout":M="blur",y=Hp;break;case"beforeblur":case"afterblur":y=Hp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ex;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ML;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=FL;break;case qS:case KS:case ZS:y=TL;break;case QS:y=zL;break;case"scroll":y=yL;break;case"wheel":y=HL;break;case"copy":case"cut":case"paste":y=bL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=nx}var w=(e&4)!==0,_=!w&&t==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var S=d,x;S!==null;){x=S;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,p!==null&&(C=Su(S,p),C!=null&&w.push(Cu(S,C,x)))),_)break;S=S.return}0<w.length&&(g=new y(g,M,null,n,h),m.push({event:g,listeners:w}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==sg&&(M=n.relatedTarget||n.fromElement)&&(Po(M)||M[Jr]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(M=n.relatedTarget||n.toElement,y=d,M=M?Po(M):null,M!==null&&(_=qo(M),M!==_||M.tag!==5&&M.tag!==6)&&(M=null)):(y=null,M=d),y!==M)){if(w=ex,C="onMouseLeave",p="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(w=nx,C="onPointerLeave",p="onPointerEnter",S="pointer"),_=y==null?g:Os(y),x=M==null?g:Os(M),g=new w(C,S+"leave",y,n,h),g.target=_,g.relatedTarget=x,C=null,Po(h)===d&&(w=new w(p,S+"enter",M,n,h),w.target=x,w.relatedTarget=_,C=w),_=C,y&&M)t:{for(w=y,p=M,S=0,x=w;x;x=hs(x))S++;for(x=0,C=p;C;C=hs(C))x++;for(;0<S-x;)w=hs(w),S--;for(;0<x-S;)p=hs(p),x--;for(;S--;){if(w===p||p!==null&&w===p.alternate)break t;w=hs(w),p=hs(p)}w=null}else w=null;y!==null&&hx(m,g,y,w,!1),M!==null&&_!==null&&hx(m,_,M,w,!0)}}e:{if(g=d?Os(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var O=YL;else if(ax(g))if(WS)O=QL;else{O=KL;var N=qL}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=ZL);if(O&&(O=O(t,d))){GS(m,O,n,h);break e}N&&N(t,g,d),t==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ng(g,"number",g.value)}switch(N=d?Os(d):window,t){case"focusin":(ax(N)||N.contentEditable==="true")&&(Ds=N,pg=d,fu=null);break;case"focusout":fu=pg=Ds=null;break;case"mousedown":mg=!0;break;case"contextmenu":case"mouseup":case"dragend":mg=!1,cx(m,n,h);break;case"selectionchange":if(t4)break;case"keydown":case"keyup":cx(m,n,h)}var I;if(P0)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ns?HS(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(BS&&n.locale!=="ko"&&(Ns||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ns&&(I=zS()):(Na=h,b0="value"in Na?Na.value:Na.textContent,Ns=!0)),N=xd(d,k),0<N.length&&(k=new tx(k,t,null,n,h),m.push({event:k,listeners:N}),I?k.data=I:(I=VS(n),I!==null&&(k.data=I)))),(I=GL?WL(t,n):XL(t,n))&&(d=xd(d,"onBeforeInput"),0<d.length&&(h=new tx("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=I))}eM(m,e)})}function Cu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xd(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Su(t,n),o!=null&&i.unshift(Cu(t,o,r)),o=Su(t,e),o!=null&&i.push(Cu(t,o,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hx(t,e,n,i,r){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,r?(f=Su(n,o),f!=null&&l.unshift(Cu(n,f,u))):r||(f=Su(n,o),f!=null&&l.push(Cu(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var a4=/\r\n?/g,o4=/\u0000|\uFFFD/g;function px(t){return(typeof t=="string"?t:""+t).replace(a4,`
`).replace(o4,"")}function of(t,e,n){if(e=px(e),px(t)!==e&&n)throw Error(ve(425))}function yd(){}var gg=null,vg=null;function _g(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xg=typeof setTimeout=="function"?setTimeout:void 0,s4=typeof clearTimeout=="function"?clearTimeout:void 0,mx=typeof Promise=="function"?Promise:void 0,l4=typeof queueMicrotask=="function"?queueMicrotask:typeof mx<"u"?function(t){return mx.resolve(null).then(t).catch(u4)}:xg;function u4(t){setTimeout(function(){throw t})}function qp(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wu(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wu(e)}function Ha(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gx(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vl=Math.random().toString(36).slice(2),Sr="__reactFiber$"+vl,Ru="__reactProps$"+vl,Jr="__reactContainer$"+vl,yg="__reactEvents$"+vl,c4="__reactListeners$"+vl,f4="__reactHandles$"+vl;function Po(t){var e=t[Sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jr]||n[Sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gx(t);t!==null;){if(n=t[Sr])return n;t=gx(t)}return e}t=n,n=t.parentNode}return null}function Yu(t){return t=t[Sr]||t[Jr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function Jd(t){return t[Ru]||null}var Sg=[],Fs=-1;function ro(t){return{current:t}}function Kt(t){0>Fs||(t.current=Sg[Fs],Sg[Fs]=null,Fs--)}function Gt(t,e){Fs++,Sg[Fs]=t.current,t.current=e}var Za={},Gn=ro(Za),ui=ro(!1),Bo=Za;function rl(t,e){var n=t.type.contextTypes;if(!n)return Za;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ci(t){return t=t.childContextTypes,t!=null}function Sd(){Kt(ui),Kt(Gn)}function vx(t,e,n){if(Gn.current!==Za)throw Error(ve(168));Gt(Gn,e),Gt(ui,n)}function nM(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,qP(t)||"Unknown",r));return an({},n,i)}function Md(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Za,Bo=Gn.current,Gt(Gn,t),Gt(ui,ui.current),!0}function _x(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=nM(t,e,Bo),i.__reactInternalMemoizedMergedChildContext=t,Kt(ui),Kt(Gn),Gt(Gn,t)):Kt(ui),Gt(ui,n)}var Xr=null,eh=!1,Kp=!1;function iM(t){Xr===null?Xr=[t]:Xr.push(t)}function d4(t){eh=!0,iM(t)}function ao(){if(!Kp&&Xr!==null){Kp=!0;var t=0,e=It;try{var n=Xr;for(It=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xr=null,eh=!1}catch(r){throw Xr!==null&&(Xr=Xr.slice(t+1)),CS(E0,ao),r}finally{It=e,Kp=!1}}return null}var ks=[],zs=0,Ed=null,wd=0,Vi=[],Gi=0,Ho=null,$r=1,Yr="";function wo(t,e){ks[zs++]=wd,ks[zs++]=Ed,Ed=t,wd=e}function rM(t,e,n){Vi[Gi++]=$r,Vi[Gi++]=Yr,Vi[Gi++]=Ho,Ho=t;var i=$r;t=Yr;var r=32-cr(i)-1;i&=~(1<<r),n+=1;var o=32-cr(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,$r=1<<32-cr(e)+r|n<<r|i,Yr=o+t}else $r=1<<o|n<<r|i,Yr=t}function I0(t){t.return!==null&&(wo(t,1),rM(t,1,0))}function N0(t){for(;t===Ed;)Ed=ks[--zs],ks[zs]=null,wd=ks[--zs],ks[zs]=null;for(;t===Ho;)Ho=Vi[--Gi],Vi[Gi]=null,Yr=Vi[--Gi],Vi[Gi]=null,$r=Vi[--Gi],Vi[Gi]=null}var Ti=null,Ei=null,Jt=!1,sr=null;function aM(t,e){var n=Xi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xx(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ti=t,Ei=Ha(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ti=t,Ei=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ho!==null?{id:$r,overflow:Yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ti=t,Ei=null,!0):!1;default:return!1}}function Mg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eg(t){if(Jt){var e=Ei;if(e){var n=e;if(!xx(t,e)){if(Mg(t))throw Error(ve(418));e=Ha(n.nextSibling);var i=Ti;e&&xx(t,e)?aM(i,n):(t.flags=t.flags&-4097|2,Jt=!1,Ti=t)}}else{if(Mg(t))throw Error(ve(418));t.flags=t.flags&-4097|2,Jt=!1,Ti=t}}}function yx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ti=t}function sf(t){if(t!==Ti)return!1;if(!Jt)return yx(t),Jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_g(t.type,t.memoizedProps)),e&&(e=Ei)){if(Mg(t))throw oM(),Error(ve(418));for(;e;)aM(t,e),e=Ha(e.nextSibling)}if(yx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ei=Ha(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ei=null}}else Ei=Ti?Ha(t.stateNode.nextSibling):null;return!0}function oM(){for(var t=Ei;t;)t=Ha(t.nextSibling)}function al(){Ei=Ti=null,Jt=!1}function D0(t){sr===null?sr=[t]:sr.push(t)}var h4=oa.ReactCurrentBatchConfig;function ar(t,e){if(t&&t.defaultProps){e=an({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Td=ro(null),Ad=null,Bs=null,U0=null;function O0(){U0=Bs=Ad=null}function F0(t){var e=Td.current;Kt(Td),t._currentValue=e}function wg(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Ad=t,U0=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(li=!0),t.firstContext=null)}function Yi(t){var e=t._currentValue;if(U0!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ad===null)throw Error(ve(308));Bs=t,Ad.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Lo=null;function k0(t){Lo===null?Lo=[t]:Lo.push(t)}function sM(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,k0(e)):(n.next=r.next,r.next=n),e.interleaved=n,ea(t,i)}function ea(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ra=!1;function z0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lM(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Va(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ea(t,n)}return r=i.interleaved,r===null?(e.next=e,k0(i)):(e.next=r.next,r.next=e),i.interleaved=e,ea(t,n)}function ed(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,w0(t,n)}}function Sx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bd(t,e,n,i){var r=t.updateQueue;Ra=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?o=d:l.next=d,l=f;var h=t.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==l&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=f))}if(o!==null){var m=r.baseState;l=0,h=d=f=null,u=o;do{var g=u.lane,y=u.eventTime;if((i&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=t,w=u;switch(g=e,y=n,w.tag){case 1:if(M=w.payload,typeof M=="function"){m=M.call(y,m,g);break e}m=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=w.payload,g=typeof M=="function"?M.call(y,m,g):M,g==null)break e;m=an({},m,g);break e;case 2:Ra=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=r.effects,g===null?r.effects=[u]:g.push(u))}else y={eventTime:y,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=y,f=m):h=h.next=y,l|=g;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;g=u,u=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(h===null&&(f=m),r.baseState=f,r.firstBaseUpdate=d,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Go|=l,t.lanes=l,t.memoizedState=m}}function Mx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var uM=new sS.Component().refs;function Tg(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:an({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var th={isMounted:function(t){return(t=t._reactInternals)?qo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zn(),r=Wa(t),o=Zr(i,r);o.payload=e,n!=null&&(o.callback=n),e=Va(t,o,r),e!==null&&(fr(e,t,r,i),ed(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zn(),r=Wa(t),o=Zr(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Va(t,o,r),e!==null&&(fr(e,t,r,i),ed(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zn(),i=Wa(t),r=Zr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Va(t,r,i),e!==null&&(fr(e,t,i,n),ed(e,t,i))}};function Ex(t,e,n,i,r,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Au(n,i)||!Au(r,o):!0}function cM(t,e,n){var i=!1,r=Za,o=e.contextType;return typeof o=="object"&&o!==null?o=Yi(o):(r=ci(e)?Bo:Gn.current,i=e.contextTypes,o=(i=i!=null)?rl(t,r):Za),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=th,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function wx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&th.enqueueReplaceState(e,e.state,null)}function Ag(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=uM,z0(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Yi(o):(o=ci(e)?Bo:Gn.current,r.context=rl(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Tg(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&th.enqueueReplaceState(r,r.state,null),bd(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $l(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=r.refs;u===uM&&(u=r.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function lf(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tx(t){var e=t._init;return e(t._payload)}function fM(t){function e(p,S){if(t){var x=p.deletions;x===null?(p.deletions=[S],p.flags|=16):x.push(S)}}function n(p,S){if(!t)return null;for(;S!==null;)e(p,S),S=S.sibling;return null}function i(p,S){for(p=new Map;S!==null;)S.key!==null?p.set(S.key,S):p.set(S.index,S),S=S.sibling;return p}function r(p,S){return p=Xa(p,S),p.index=0,p.sibling=null,p}function o(p,S,x){return p.index=x,t?(x=p.alternate,x!==null?(x=x.index,x<S?(p.flags|=2,S):x):(p.flags|=2,S)):(p.flags|=1048576,S)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function u(p,S,x,C){return S===null||S.tag!==6?(S=im(x,p.mode,C),S.return=p,S):(S=r(S,x),S.return=p,S)}function f(p,S,x,C){var O=x.type;return O===Is?h(p,S,x.props.children,C,x.key):S!==null&&(S.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ca&&Tx(O)===S.type)?(C=r(S,x.props),C.ref=$l(p,S,x),C.return=p,C):(C=od(x.type,x.key,x.props,null,p.mode,C),C.ref=$l(p,S,x),C.return=p,C)}function d(p,S,x,C){return S===null||S.tag!==4||S.stateNode.containerInfo!==x.containerInfo||S.stateNode.implementation!==x.implementation?(S=rm(x,p.mode,C),S.return=p,S):(S=r(S,x.children||[]),S.return=p,S)}function h(p,S,x,C,O){return S===null||S.tag!==7?(S=ko(x,p.mode,C,O),S.return=p,S):(S=r(S,x),S.return=p,S)}function m(p,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return S=im(""+S,p.mode,x),S.return=p,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Kc:return x=od(S.type,S.key,S.props,null,p.mode,x),x.ref=$l(p,null,S),x.return=p,x;case Ls:return S=rm(S,p.mode,x),S.return=p,S;case Ca:var C=S._init;return m(p,C(S._payload),x)}if(nu(S)||Vl(S))return S=ko(S,p.mode,x,null),S.return=p,S;lf(p,S)}return null}function g(p,S,x,C){var O=S!==null?S.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:u(p,S,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:return x.key===O?f(p,S,x,C):null;case Ls:return x.key===O?d(p,S,x,C):null;case Ca:return O=x._init,g(p,S,O(x._payload),C)}if(nu(x)||Vl(x))return O!==null?null:h(p,S,x,C,null);lf(p,x)}return null}function y(p,S,x,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(x)||null,u(S,p,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Kc:return p=p.get(C.key===null?x:C.key)||null,f(S,p,C,O);case Ls:return p=p.get(C.key===null?x:C.key)||null,d(S,p,C,O);case Ca:var N=C._init;return y(p,S,x,N(C._payload),O)}if(nu(C)||Vl(C))return p=p.get(x)||null,h(S,p,C,O,null);lf(S,C)}return null}function M(p,S,x,C){for(var O=null,N=null,I=S,k=S=0,R=null;I!==null&&k<x.length;k++){I.index>k?(R=I,I=null):R=I.sibling;var T=g(p,I,x[k],C);if(T===null){I===null&&(I=R);break}t&&I&&T.alternate===null&&e(p,I),S=o(T,S,k),N===null?O=T:N.sibling=T,N=T,I=R}if(k===x.length)return n(p,I),Jt&&wo(p,k),O;if(I===null){for(;k<x.length;k++)I=m(p,x[k],C),I!==null&&(S=o(I,S,k),N===null?O=I:N.sibling=I,N=I);return Jt&&wo(p,k),O}for(I=i(p,I);k<x.length;k++)R=y(I,p,k,x[k],C),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?k:R.key),S=o(R,S,k),N===null?O=R:N.sibling=R,N=R);return t&&I.forEach(function(X){return e(p,X)}),Jt&&wo(p,k),O}function w(p,S,x,C){var O=Vl(x);if(typeof O!="function")throw Error(ve(150));if(x=O.call(x),x==null)throw Error(ve(151));for(var N=O=null,I=S,k=S=0,R=null,T=x.next();I!==null&&!T.done;k++,T=x.next()){I.index>k?(R=I,I=null):R=I.sibling;var X=g(p,I,T.value,C);if(X===null){I===null&&(I=R);break}t&&I&&X.alternate===null&&e(p,I),S=o(X,S,k),N===null?O=X:N.sibling=X,N=X,I=R}if(T.done)return n(p,I),Jt&&wo(p,k),O;if(I===null){for(;!T.done;k++,T=x.next())T=m(p,T.value,C),T!==null&&(S=o(T,S,k),N===null?O=T:N.sibling=T,N=T);return Jt&&wo(p,k),O}for(I=i(p,I);!T.done;k++,T=x.next())T=y(I,p,k,T.value,C),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?k:T.key),S=o(T,S,k),N===null?O=T:N.sibling=T,N=T);return t&&I.forEach(function(ie){return e(p,ie)}),Jt&&wo(p,k),O}function _(p,S,x,C){if(typeof x=="object"&&x!==null&&x.type===Is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:e:{for(var O=x.key,N=S;N!==null;){if(N.key===O){if(O=x.type,O===Is){if(N.tag===7){n(p,N.sibling),S=r(N,x.props.children),S.return=p,p=S;break e}}else if(N.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ca&&Tx(O)===N.type){n(p,N.sibling),S=r(N,x.props),S.ref=$l(p,N,x),S.return=p,p=S;break e}n(p,N);break}else e(p,N);N=N.sibling}x.type===Is?(S=ko(x.props.children,p.mode,C,x.key),S.return=p,p=S):(C=od(x.type,x.key,x.props,null,p.mode,C),C.ref=$l(p,S,x),C.return=p,p=C)}return l(p);case Ls:e:{for(N=x.key;S!==null;){if(S.key===N)if(S.tag===4&&S.stateNode.containerInfo===x.containerInfo&&S.stateNode.implementation===x.implementation){n(p,S.sibling),S=r(S,x.children||[]),S.return=p,p=S;break e}else{n(p,S);break}else e(p,S);S=S.sibling}S=rm(x,p.mode,C),S.return=p,p=S}return l(p);case Ca:return N=x._init,_(p,S,N(x._payload),C)}if(nu(x))return M(p,S,x,C);if(Vl(x))return w(p,S,x,C);lf(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,S!==null&&S.tag===6?(n(p,S.sibling),S=r(S,x),S.return=p,p=S):(n(p,S),S=im(x,p.mode,C),S.return=p,p=S),l(p)):n(p,S)}return _}var ol=fM(!0),dM=fM(!1),qu={},Ar=ro(qu),Pu=ro(qu),Lu=ro(qu);function Io(t){if(t===qu)throw Error(ve(174));return t}function B0(t,e){switch(Gt(Lu,e),Gt(Pu,t),Gt(Ar,qu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rg(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rg(e,t)}Kt(Ar),Gt(Ar,e)}function sl(){Kt(Ar),Kt(Pu),Kt(Lu)}function hM(t){Io(Lu.current);var e=Io(Ar.current),n=rg(e,t.type);e!==n&&(Gt(Pu,t),Gt(Ar,n))}function H0(t){Pu.current===t&&(Kt(Ar),Kt(Pu))}var nn=ro(0);function Cd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zp=[];function V0(){for(var t=0;t<Zp.length;t++)Zp[t]._workInProgressVersionPrimary=null;Zp.length=0}var td=oa.ReactCurrentDispatcher,Qp=oa.ReactCurrentBatchConfig,Vo=0,rn=null,_n=null,bn=null,Rd=!1,du=!1,Iu=0,p4=0;function kn(){throw Error(ve(321))}function G0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dr(t[n],e[n]))return!1;return!0}function W0(t,e,n,i,r,o){if(Vo=o,rn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,td.current=t===null||t.memoizedState===null?_4:x4,t=n(i,r),du){o=0;do{if(du=!1,Iu=0,25<=o)throw Error(ve(301));o+=1,bn=_n=null,e.updateQueue=null,td.current=y4,t=n(i,r)}while(du)}if(td.current=Pd,e=_n!==null&&_n.next!==null,Vo=0,bn=_n=rn=null,Rd=!1,e)throw Error(ve(300));return t}function X0(){var t=Iu!==0;return Iu=0,t}function _r(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?rn.memoizedState=bn=t:bn=bn.next=t,bn}function qi(){if(_n===null){var t=rn.alternate;t=t!==null?t.memoizedState:null}else t=_n.next;var e=bn===null?rn.memoizedState:bn.next;if(e!==null)bn=e,_n=t;else{if(t===null)throw Error(ve(310));_n=t,t={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},bn===null?rn.memoizedState=bn=t:bn=bn.next=t}return bn}function Nu(t,e){return typeof e=="function"?e(t):e}function Jp(t){var e=qi(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=_n,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var u=l=null,f=null,d=o;do{var h=d.lane;if((Vo&h)===h)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=m,l=i):f=f.next=m,rn.lanes|=h,Go|=h}d=d.next}while(d!==null&&d!==o);f===null?l=i:f.next=u,dr(i,e.memoizedState)||(li=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,rn.lanes|=o,Go|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function em(t){var e=qi(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=t(o,l.action),l=l.next;while(l!==r);dr(o,e.memoizedState)||(li=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function pM(){}function mM(t,e){var n=rn,i=qi(),r=e(),o=!dr(i.memoizedState,r);if(o&&(i.memoizedState=r,li=!0),i=i.queue,j0(_M.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||bn!==null&&bn.memoizedState.tag&1){if(n.flags|=2048,Du(9,vM.bind(null,n,i,r,e),void 0,null),Cn===null)throw Error(ve(349));Vo&30||gM(n,e,r)}return r}function gM(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vM(t,e,n,i){e.value=n,e.getSnapshot=i,xM(e)&&yM(t)}function _M(t,e,n){return n(function(){xM(e)&&yM(t)})}function xM(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dr(t,n)}catch{return!0}}function yM(t){var e=ea(t,1);e!==null&&fr(e,t,1,-1)}function Ax(t){var e=_r();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nu,lastRenderedState:t},e.queue=t,t=t.dispatch=v4.bind(null,rn,t),[e.memoizedState,t]}function Du(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function SM(){return qi().memoizedState}function nd(t,e,n,i){var r=_r();rn.flags|=t,r.memoizedState=Du(1|e,n,void 0,i===void 0?null:i)}function nh(t,e,n,i){var r=qi();i=i===void 0?null:i;var o=void 0;if(_n!==null){var l=_n.memoizedState;if(o=l.destroy,i!==null&&G0(i,l.deps)){r.memoizedState=Du(e,n,o,i);return}}rn.flags|=t,r.memoizedState=Du(1|e,n,o,i)}function bx(t,e){return nd(8390656,8,t,e)}function j0(t,e){return nh(2048,8,t,e)}function MM(t,e){return nh(4,2,t,e)}function EM(t,e){return nh(4,4,t,e)}function wM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function TM(t,e,n){return n=n!=null?n.concat([t]):null,nh(4,4,wM.bind(null,e,t),n)}function $0(){}function AM(t,e){var n=qi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&G0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bM(t,e){var n=qi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&G0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function CM(t,e,n){return Vo&21?(dr(n,e)||(n=LS(),rn.lanes|=n,Go|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,li=!0),t.memoizedState=n)}function m4(t,e){var n=It;It=n!==0&&4>n?n:4,t(!0);var i=Qp.transition;Qp.transition={};try{t(!1),e()}finally{It=n,Qp.transition=i}}function RM(){return qi().memoizedState}function g4(t,e,n){var i=Wa(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},PM(t))LM(e,n);else if(n=sM(t,e,n,i),n!==null){var r=Zn();fr(n,t,i,r),IM(n,e,i)}}function v4(t,e,n){var i=Wa(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(PM(t))LM(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(r.hasEagerState=!0,r.eagerState=u,dr(u,l)){var f=e.interleaved;f===null?(r.next=r,k0(e)):(r.next=f.next,f.next=r),e.interleaved=r;return}}catch{}finally{}n=sM(t,e,r,i),n!==null&&(r=Zn(),fr(n,t,i,r),IM(n,e,i))}}function PM(t){var e=t.alternate;return t===rn||e!==null&&e===rn}function LM(t,e){du=Rd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function IM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,w0(t,n)}}var Pd={readContext:Yi,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},_4={readContext:Yi,useCallback:function(t,e){return _r().memoizedState=[t,e===void 0?null:e],t},useContext:Yi,useEffect:bx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nd(4194308,4,wM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nd(4194308,4,t,e)},useInsertionEffect:function(t,e){return nd(4,2,t,e)},useMemo:function(t,e){var n=_r();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_r();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=g4.bind(null,rn,t),[i.memoizedState,t]},useRef:function(t){var e=_r();return t={current:t},e.memoizedState=t},useState:Ax,useDebugValue:$0,useDeferredValue:function(t){return _r().memoizedState=t},useTransition:function(){var t=Ax(!1),e=t[0];return t=m4.bind(null,t[1]),_r().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rn,r=_r();if(Jt){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),Cn===null)throw Error(ve(349));Vo&30||gM(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,bx(_M.bind(null,i,o,t),[t]),i.flags|=2048,Du(9,vM.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=_r(),e=Cn.identifierPrefix;if(Jt){var n=Yr,i=$r;n=(i&~(1<<32-cr(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Iu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},x4={readContext:Yi,useCallback:AM,useContext:Yi,useEffect:j0,useImperativeHandle:TM,useInsertionEffect:MM,useLayoutEffect:EM,useMemo:bM,useReducer:Jp,useRef:SM,useState:function(){return Jp(Nu)},useDebugValue:$0,useDeferredValue:function(t){var e=qi();return CM(e,_n.memoizedState,t)},useTransition:function(){var t=Jp(Nu)[0],e=qi().memoizedState;return[t,e]},useMutableSource:pM,useSyncExternalStore:mM,useId:RM,unstable_isNewReconciler:!1},y4={readContext:Yi,useCallback:AM,useContext:Yi,useEffect:j0,useImperativeHandle:TM,useInsertionEffect:MM,useLayoutEffect:EM,useMemo:bM,useReducer:em,useRef:SM,useState:function(){return em(Nu)},useDebugValue:$0,useDeferredValue:function(t){var e=qi();return _n===null?e.memoizedState=t:CM(e,_n.memoizedState,t)},useTransition:function(){var t=em(Nu)[0],e=qi().memoizedState;return[t,e]},useMutableSource:pM,useSyncExternalStore:mM,useId:RM,unstable_isNewReconciler:!1};function ll(t,e){try{var n="",i=e;do n+=YP(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function tm(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S4=typeof WeakMap=="function"?WeakMap:Map;function NM(t,e,n){n=Zr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Id||(Id=!0,Fg=i),bg(t,e)},n}function DM(t,e,n){n=Zr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bg(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bg(t,e),typeof i!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Cx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new S4;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=U4.bind(null,t,e,n),e.then(t,t))}function Rx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Px(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zr(-1,1),e.tag=2,Va(n,e,1))),n.lanes|=1),t)}var M4=oa.ReactCurrentOwner,li=!1;function qn(t,e,n,i){e.child=t===null?dM(e,null,n,i):ol(e,t.child,n,i)}function Lx(t,e,n,i,r){n=n.render;var o=e.ref;return Zs(e,r),i=W0(t,e,n,i,o,r),n=X0(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ta(t,e,r)):(Jt&&n&&I0(e),e.flags|=1,qn(t,e,i,r),e.child)}function Ix(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!tv(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,UM(t,e,o,i,r)):(t=od(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Au,n(l,i)&&t.ref===e.ref)return ta(t,e,r)}return e.flags|=1,t=Xa(o,i),t.ref=e.ref,t.return=e,e.child=t}function UM(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Au(o,i)&&t.ref===e.ref)if(li=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(li=!0);else return e.lanes=t.lanes,ta(t,e,r)}return Cg(t,e,n,i,r)}function OM(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Vs,Mi),Mi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Gt(Vs,Mi),Mi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Gt(Vs,Mi),Mi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Gt(Vs,Mi),Mi|=i;return qn(t,e,r,n),e.child}function FM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cg(t,e,n,i,r){var o=ci(n)?Bo:Gn.current;return o=rl(e,o),Zs(e,r),n=W0(t,e,n,i,o,r),i=X0(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ta(t,e,r)):(Jt&&i&&I0(e),e.flags|=1,qn(t,e,n,r),e.child)}function Nx(t,e,n,i,r){if(ci(n)){var o=!0;Md(e)}else o=!1;if(Zs(e,r),e.stateNode===null)id(t,e),cM(e,n,i),Ag(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Yi(d):(d=ci(n)?Bo:Gn.current,d=rl(e,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&wx(e,l,i,d),Ra=!1;var g=e.memoizedState;l.state=g,bd(e,i,l,r),f=e.memoizedState,u!==i||g!==f||ui.current||Ra?(typeof h=="function"&&(Tg(e,n,h,i),f=e.memoizedState),(u=Ra||Ex(e,n,u,i,g,f,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,lM(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:ar(e.type,u),l.props=d,m=e.pendingProps,g=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Yi(f):(f=ci(n)?Bo:Gn.current,f=rl(e,f));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||g!==f)&&wx(e,l,i,f),Ra=!1,g=e.memoizedState,l.state=g,bd(e,i,l,r);var M=e.memoizedState;u!==m||g!==M||ui.current||Ra?(typeof y=="function"&&(Tg(e,n,y,i),M=e.memoizedState),(d=Ra||Ex(e,n,d,i,g,M,f)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,M,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,M,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),l.props=i,l.state=M,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),i=!1)}return Rg(t,e,n,i,o,r)}function Rg(t,e,n,i,r,o){FM(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&_x(e,n,!1),ta(t,e,o);i=e.stateNode,M4.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ol(e,t.child,null,o),e.child=ol(e,null,u,o)):qn(t,e,u,o),e.memoizedState=i.state,r&&_x(e,n,!0),e.child}function kM(t){var e=t.stateNode;e.pendingContext?vx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vx(t,e.context,!1),B0(t,e.containerInfo)}function Dx(t,e,n,i,r){return al(),D0(r),e.flags|=256,qn(t,e,n,i),e.child}var Pg={dehydrated:null,treeContext:null,retryLane:0};function Lg(t){return{baseLanes:t,cachePool:null,transitions:null}}function zM(t,e,n){var i=e.pendingProps,r=nn.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(r&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Gt(nn,r&1),t===null)return Eg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ah(l,i,0,null),t=ko(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Lg(n),e.memoizedState=Pg,t):Y0(e,l));if(r=t.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return E4(t,e,l,i,u,r,n);if(o){o=i.fallback,l=e.mode,r=t.child,u=r.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=Xa(r,f),i.subtreeFlags=r.subtreeFlags&14680064),u!==null?o=Xa(u,o):(o=ko(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?Lg(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Pg,i}return o=t.child,t=o.sibling,i=Xa(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Y0(t,e){return e=ah({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uf(t,e,n,i){return i!==null&&D0(i),ol(e,t.child,null,n),t=Y0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E4(t,e,n,i,r,o,l){if(n)return e.flags&256?(e.flags&=-257,i=tm(Error(ve(422))),uf(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ah({mode:"visible",children:i.children},r,0,null),o=ko(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ol(e,t.child,null,l),e.child.memoizedState=Lg(l),e.memoizedState=Pg,o);if(!(e.mode&1))return uf(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(ve(419)),i=tm(o,i,void 0),uf(t,e,l,i)}if(u=(l&t.childLanes)!==0,li||u){if(i=Cn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ea(t,r),fr(i,t,r,-1))}return ev(),i=tm(Error(ve(421))),uf(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=O4.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Ei=Ha(r.nextSibling),Ti=e,Jt=!0,sr=null,t!==null&&(Vi[Gi++]=$r,Vi[Gi++]=Yr,Vi[Gi++]=Ho,$r=t.id,Yr=t.overflow,Ho=e),e=Y0(e,i.children),e.flags|=4096,e)}function Ux(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wg(t.return,e,n)}function nm(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function BM(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qn(t,e,i.children,n),i=nn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ux(t,n,e);else if(t.tag===19)Ux(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Gt(nn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cd(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nm(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cd(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nm(e,!0,n,null,o);break;case"together":nm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function id(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Go|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=Xa(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xa(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w4(t,e,n){switch(e.tag){case 3:kM(e),al();break;case 5:hM(e);break;case 1:ci(e.type)&&Md(e);break;case 4:B0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Gt(Td,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Gt(nn,nn.current&1),e.flags|=128,null):n&e.child.childLanes?zM(t,e,n):(Gt(nn,nn.current&1),t=ta(t,e,n),t!==null?t.sibling:null);Gt(nn,nn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return BM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Gt(nn,nn.current),i)break;return null;case 22:case 23:return e.lanes=0,OM(t,e,n)}return ta(t,e,n)}var HM,Ig,VM,GM;HM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ig=function(){};VM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Io(Ar.current);var o=null;switch(n){case"input":r=eg(t,r),i=eg(t,i),o=[];break;case"select":r=an({},r,{value:void 0}),i=an({},i,{value:void 0}),o=[];break;case"textarea":r=ig(t,r),i=ig(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yd)}ag(n,i);var l;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var u=r[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xu.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var f=i[d];if(u=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xu.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&$t("scroll",t),o||u===f||(o=[])):(o=o||[]).push(d,f))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};GM=function(t,e,n,i){n!==i&&(e.flags|=4)};function Yl(t,e){if(!Jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T4(t,e,n){var i=e.pendingProps;switch(N0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return ci(e.type)&&Sd(),zn(e),null;case 3:return i=e.stateNode,sl(),Kt(ui),Kt(Gn),V0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sf(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr!==null&&(Bg(sr),sr=null))),Ig(t,e),zn(e),null;case 5:H0(e);var r=Io(Lu.current);if(n=e.type,t!==null&&e.stateNode!=null)VM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return zn(e),null}if(t=Io(Ar.current),sf(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Sr]=e,i[Ru]=o,t=(e.mode&1)!==0,n){case"dialog":$t("cancel",i),$t("close",i);break;case"iframe":case"object":case"embed":$t("load",i);break;case"video":case"audio":for(r=0;r<ru.length;r++)$t(ru[r],i);break;case"source":$t("error",i);break;case"img":case"image":case"link":$t("error",i),$t("load",i);break;case"details":$t("toggle",i);break;case"input":W1(i,o),$t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},$t("invalid",i);break;case"textarea":j1(i,o),$t("invalid",i)}ag(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&of(i.textContent,u,t),r=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&of(i.textContent,u,t),r=["children",""+u]):xu.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&$t("scroll",i)}switch(n){case"input":Zc(i),X1(i,o,!0);break;case"textarea":Zc(i),$1(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=yd)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Sr]=e,t[Ru]=i,HM(t,e,!1,!1),e.stateNode=t;e:{switch(l=og(n,i),n){case"dialog":$t("cancel",t),$t("close",t),r=i;break;case"iframe":case"object":case"embed":$t("load",t),r=i;break;case"video":case"audio":for(r=0;r<ru.length;r++)$t(ru[r],t);r=i;break;case"source":$t("error",t),r=i;break;case"img":case"image":case"link":$t("error",t),$t("load",t),r=i;break;case"details":$t("toggle",t),r=i;break;case"input":W1(t,i),r=eg(t,i),$t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=an({},i,{value:void 0}),$t("invalid",t);break;case"textarea":j1(t,i),r=ig(t,i),$t("invalid",t);break;default:r=i}ag(n,r),u=r;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?xS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&vS(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&yu(t,f):typeof f=="number"&&yu(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xu.hasOwnProperty(o)?f!=null&&o==="onScroll"&&$t("scroll",t):f!=null&&_0(t,o,f,l))}switch(n){case"input":Zc(t),X1(t,i,!1);break;case"textarea":Zc(t),$1(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ka(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?$s(t,!!i.multiple,o,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yd)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(t&&e.stateNode!=null)GM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=Io(Lu.current),Io(Ar.current),sf(e)){if(i=e.stateNode,n=e.memoizedProps,i[Sr]=e,(o=i.nodeValue!==n)&&(t=Ti,t!==null))switch(t.tag){case 3:of(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&of(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Sr]=e,e.stateNode=i}return zn(e),null;case 13:if(Kt(nn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&Ei!==null&&e.mode&1&&!(e.flags&128))oM(),al(),e.flags|=98560,o=!1;else if(o=sf(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ve(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ve(317));o[Sr]=e}else al(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),o=!1}else sr!==null&&(Bg(sr),sr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nn.current&1?xn===0&&(xn=3):ev())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return sl(),Ig(t,e),t===null&&bu(e.stateNode.containerInfo),zn(e),null;case 10:return F0(e.type._context),zn(e),null;case 17:return ci(e.type)&&Sd(),zn(e),null;case 19:if(Kt(nn),o=e.memoizedState,o===null)return zn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)Yl(o,!1);else{if(xn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Cd(t),l!==null){for(e.flags|=128,Yl(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Gt(nn,nn.current&1|2),e.child}t=t.sibling}o.tail!==null&&dn()>ul&&(e.flags|=128,i=!0,Yl(o,!1),e.lanes=4194304)}else{if(!i)if(t=Cd(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Jt)return zn(e),null}else 2*dn()-o.renderingStartTime>ul&&n!==1073741824&&(e.flags|=128,i=!0,Yl(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dn(),e.sibling=null,n=nn.current,Gt(nn,i?n&1|2:n&1),e):(zn(e),null);case 22:case 23:return J0(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mi&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function A4(t,e){switch(N0(e),e.tag){case 1:return ci(e.type)&&Sd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(),Kt(ui),Kt(Gn),V0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return H0(e),null;case 13:if(Kt(nn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));al()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(nn),null;case 4:return sl(),null;case 10:return F0(e.type._context),null;case 22:case 23:return J0(),null;case 24:return null;default:return null}}var cf=!1,Vn=!1,b4=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){sn(t,e,i)}else n.current=null}function Ng(t,e,n){try{n()}catch(i){sn(t,e,i)}}var Ox=!1;function C4(t,e){if(gg=vd,t=$S(),L0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,h=0,m=t,g=null;t:for(;;){for(var y;m!==n||r!==0&&m.nodeType!==3||(u=l+r),m!==o||i!==0&&m.nodeType!==3||(f=l+i),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===t)break t;if(g===n&&++d===r&&(u=l),g===o&&++h===i&&(f=l),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(vg={focusedElem:t,selectionRange:n},vd=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var w=M.memoizedProps,_=M.memoizedState,p=e.stateNode,S=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ar(e.type,w),_);p.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(C){sn(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return M=Ox,Ox=!1,M}function hu(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ng(e,n,o)}r=r.next}while(r!==i)}}function ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WM(t){var e=t.alternate;e!==null&&(t.alternate=null,WM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sr],delete e[Ru],delete e[yg],delete e[c4],delete e[f4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function XM(t){return t.tag===5||t.tag===3||t.tag===4}function Fx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||XM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ug(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yd));else if(i!==4&&(t=t.child,t!==null))for(Ug(t,e,n),t=t.sibling;t!==null;)Ug(t,e,n),t=t.sibling}function Og(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Og(t,e,n),t=t.sibling;t!==null;)Og(t,e,n),t=t.sibling}var Ln=null,or=!1;function ya(t,e,n){for(n=n.child;n!==null;)jM(t,e,n),n=n.sibling}function jM(t,e,n){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(qd,n)}catch{}switch(n.tag){case 5:Vn||Hs(n,e);case 6:var i=Ln,r=or;Ln=null,ya(t,e,n),Ln=i,or=r,Ln!==null&&(or?(t=Ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ln.removeChild(n.stateNode));break;case 18:Ln!==null&&(or?(t=Ln,n=n.stateNode,t.nodeType===8?qp(t.parentNode,n):t.nodeType===1&&qp(t,n),wu(t)):qp(Ln,n.stateNode));break;case 4:i=Ln,r=or,Ln=n.stateNode.containerInfo,or=!0,ya(t,e,n),Ln=i,or=r;break;case 0:case 11:case 14:case 15:if(!Vn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ng(n,e,l),r=r.next}while(r!==i)}ya(t,e,n);break;case 1:if(!Vn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){sn(n,e,u)}ya(t,e,n);break;case 21:ya(t,e,n);break;case 22:n.mode&1?(Vn=(i=Vn)||n.memoizedState!==null,ya(t,e,n),Vn=i):ya(t,e,n);break;default:ya(t,e,n)}}function kx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b4),e.forEach(function(i){var r=F4.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function tr(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ln=u.stateNode,or=!1;break e;case 3:Ln=u.stateNode.containerInfo,or=!0;break e;case 4:Ln=u.stateNode.containerInfo,or=!0;break e}u=u.return}if(Ln===null)throw Error(ve(160));jM(o,l,r),Ln=null,or=!1;var f=r.alternate;f!==null&&(f.return=null),r.return=null}catch(d){sn(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$M(e,t),e=e.sibling}function $M(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tr(e,t),vr(t),i&4){try{hu(3,t,t.return),ih(3,t)}catch(w){sn(t,t.return,w)}try{hu(5,t,t.return)}catch(w){sn(t,t.return,w)}}break;case 1:tr(e,t),vr(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(tr(e,t),vr(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{yu(r,"")}catch(w){sn(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&pS(r,o),og(u,l);var d=og(u,o);for(l=0;l<f.length;l+=2){var h=f[l],m=f[l+1];h==="style"?xS(r,m):h==="dangerouslySetInnerHTML"?vS(r,m):h==="children"?yu(r,m):_0(r,h,m,d)}switch(u){case"input":tg(r,o);break;case"textarea":mS(r,o);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?$s(r,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?$s(r,!!o.multiple,o.defaultValue,!0):$s(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ru]=o}catch(w){sn(t,t.return,w)}}break;case 6:if(tr(e,t),vr(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(w){sn(t,t.return,w)}}break;case 3:if(tr(e,t),vr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wu(e.containerInfo)}catch(w){sn(t,t.return,w)}break;case 4:tr(e,t),vr(t);break;case 13:tr(e,t),vr(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Z0=dn())),i&4&&kx(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vn=(d=Vn)||h,tr(e,t),Vn=d):tr(e,t),vr(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(Le=t,h=t.child;h!==null;){for(m=Le=h;Le!==null;){switch(g=Le,y=g.child,g.tag){case 0:case 11:case 14:case 15:hu(4,g,g.return);break;case 1:Hs(g,g.return);var M=g.stateNode;if(typeof M.componentWillUnmount=="function"){i=g,n=g.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(w){sn(i,n,w)}}break;case 5:Hs(g,g.return);break;case 22:if(g.memoizedState!==null){Bx(m);continue}}y!==null?(y.return=g,Le=y):Bx(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,d?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,f=m.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=_S("display",l))}catch(w){sn(t,t.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){sn(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tr(e,t),vr(t),i&4&&kx(t);break;case 21:break;default:tr(e,t),vr(t)}}function vr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(XM(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yu(r,""),i.flags&=-33);var o=Fx(t);Og(t,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Fx(t);Ug(t,u,l);break;default:throw Error(ve(161))}}catch(f){sn(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function R4(t,e,n){Le=t,YM(t)}function YM(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||cf;if(!l){var u=r.alternate,f=u!==null&&u.memoizedState!==null||Vn;u=cf;var d=Vn;if(cf=l,(Vn=f)&&!d)for(Le=r;Le!==null;)l=Le,f=l.child,l.tag===22&&l.memoizedState!==null?Hx(r):f!==null?(f.return=l,Le=f):Hx(r);for(;o!==null;)Le=o,YM(o),o=o.sibling;Le=r,cf=u,Vn=d}zx(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Le=o):zx(t)}}function zx(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vn||ih(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ar(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Mx(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mx(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&wu(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}Vn||e.flags&512&&Dg(e)}catch(g){sn(e,e.return,g)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Bx(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Hx(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ih(4,e)}catch(f){sn(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(f){sn(e,r,f)}}var o=e.return;try{Dg(e)}catch(f){sn(e,o,f)}break;case 5:var l=e.return;try{Dg(e)}catch(f){sn(e,l,f)}}}catch(f){sn(e,e.return,f)}if(e===t){Le=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Le=u;break}Le=e.return}}var P4=Math.ceil,Ld=oa.ReactCurrentDispatcher,q0=oa.ReactCurrentOwner,$i=oa.ReactCurrentBatchConfig,Et=0,Cn=null,pn=null,Nn=0,Mi=0,Vs=ro(0),xn=0,Uu=null,Go=0,rh=0,K0=0,pu=null,oi=null,Z0=0,ul=1/0,Wr=null,Id=!1,Fg=null,Ga=null,ff=!1,Da=null,Nd=0,mu=0,kg=null,rd=-1,ad=0;function Zn(){return Et&6?dn():rd!==-1?rd:rd=dn()}function Wa(t){return t.mode&1?Et&2&&Nn!==0?Nn&-Nn:h4.transition!==null?(ad===0&&(ad=LS()),ad):(t=It,t!==0||(t=window.event,t=t===void 0?16:kS(t.type)),t):1}function fr(t,e,n,i){if(50<mu)throw mu=0,kg=null,Error(ve(185));ju(t,n,i),(!(Et&2)||t!==Cn)&&(t===Cn&&(!(Et&2)&&(rh|=n),xn===4&&La(t,Nn)),fi(t,i),n===1&&Et===0&&!(e.mode&1)&&(ul=dn()+500,eh&&ao()))}function fi(t,e){var n=t.callbackNode;hL(t,e);var i=gd(t,t===Cn?Nn:0);if(i===0)n!==null&&K1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&K1(n),e===1)t.tag===0?d4(Vx.bind(null,t)):iM(Vx.bind(null,t)),l4(function(){!(Et&6)&&ao()}),n=null;else{switch(IS(i)){case 1:n=E0;break;case 4:n=RS;break;case 16:n=md;break;case 536870912:n=PS;break;default:n=md}n=nE(n,qM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qM(t,e){if(rd=-1,ad=0,Et&6)throw Error(ve(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=gd(t,t===Cn?Nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dd(t,i);else{e=i;var r=Et;Et|=2;var o=ZM();(Cn!==t||Nn!==e)&&(Wr=null,ul=dn()+500,Fo(t,e));do try{N4();break}catch(u){KM(t,u)}while(!0);O0(),Ld.current=o,Et=r,pn!==null?e=0:(Cn=null,Nn=0,e=xn)}if(e!==0){if(e===2&&(r=fg(t),r!==0&&(i=r,e=zg(t,r))),e===1)throw n=Uu,Fo(t,0),La(t,i),fi(t,dn()),n;if(e===6)La(t,i);else{if(r=t.current.alternate,!(i&30)&&!L4(r)&&(e=Dd(t,i),e===2&&(o=fg(t),o!==0&&(i=o,e=zg(t,o))),e===1))throw n=Uu,Fo(t,0),La(t,i),fi(t,dn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:To(t,oi,Wr);break;case 3:if(La(t,i),(i&130023424)===i&&(e=Z0+500-dn(),10<e)){if(gd(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xg(To.bind(null,t,oi,Wr),e);break}To(t,oi,Wr);break;case 4:if(La(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-cr(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=dn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*P4(i/1960))-i,10<i){t.timeoutHandle=xg(To.bind(null,t,oi,Wr),i);break}To(t,oi,Wr);break;case 5:To(t,oi,Wr);break;default:throw Error(ve(329))}}}return fi(t,dn()),t.callbackNode===n?qM.bind(null,t):null}function zg(t,e){var n=pu;return t.current.memoizedState.isDehydrated&&(Fo(t,e).flags|=256),t=Dd(t,e),t!==2&&(e=oi,oi=n,e!==null&&Bg(e)),t}function Bg(t){oi===null?oi=t:oi.push.apply(oi,t)}function L4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!dr(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function La(t,e){for(e&=~K0,e&=~rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cr(e),i=1<<n;t[n]=-1,e&=~i}}function Vx(t){if(Et&6)throw Error(ve(327));Qs();var e=gd(t,0);if(!(e&1))return fi(t,dn()),null;var n=Dd(t,e);if(t.tag!==0&&n===2){var i=fg(t);i!==0&&(e=i,n=zg(t,i))}if(n===1)throw n=Uu,Fo(t,0),La(t,e),fi(t,dn()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,To(t,oi,Wr),fi(t,dn()),null}function Q0(t,e){var n=Et;Et|=1;try{return t(e)}finally{Et=n,Et===0&&(ul=dn()+500,eh&&ao())}}function Wo(t){Da!==null&&Da.tag===0&&!(Et&6)&&Qs();var e=Et;Et|=1;var n=$i.transition,i=It;try{if($i.transition=null,It=1,t)return t()}finally{It=i,$i.transition=n,Et=e,!(Et&6)&&ao()}}function J0(){Mi=Vs.current,Kt(Vs)}function Fo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,s4(n)),pn!==null)for(n=pn.return;n!==null;){var i=n;switch(N0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sd();break;case 3:sl(),Kt(ui),Kt(Gn),V0();break;case 5:H0(i);break;case 4:sl();break;case 13:Kt(nn);break;case 19:Kt(nn);break;case 10:F0(i.type._context);break;case 22:case 23:J0()}n=n.return}if(Cn=t,pn=t=Xa(t.current,null),Nn=Mi=e,xn=0,Uu=null,K0=rh=Go=0,oi=pu=null,Lo!==null){for(e=0;e<Lo.length;e++)if(n=Lo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}Lo=null}return t}function KM(t,e){do{var n=pn;try{if(O0(),td.current=Pd,Rd){for(var i=rn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rd=!1}if(Vo=0,bn=_n=rn=null,du=!1,Iu=0,q0.current=null,n===null||n.return===null){xn=1,Uu=e,pn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Nn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Rx(l);if(y!==null){y.flags&=-257,Px(y,l,u,o,e),y.mode&1&&Cx(o,d,e),e=y,f=d;var M=e.updateQueue;if(M===null){var w=new Set;w.add(f),e.updateQueue=w}else M.add(f);break e}else{if(!(e&1)){Cx(o,d,e),ev();break e}f=Error(ve(426))}}else if(Jt&&u.mode&1){var _=Rx(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Px(_,l,u,o,e),D0(ll(f,u));break e}}o=f=ll(f,u),xn!==4&&(xn=2),pu===null?pu=[o]:pu.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=NM(o,f,e);Sx(o,p);break e;case 1:u=f;var S=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof S.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ga===null||!Ga.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var C=DM(o,u,e);Sx(o,C);break e}}o=o.return}while(o!==null)}JM(n)}catch(O){e=O,pn===n&&n!==null&&(pn=n=n.return);continue}break}while(!0)}function ZM(){var t=Ld.current;return Ld.current=Pd,t===null?Pd:t}function ev(){(xn===0||xn===3||xn===2)&&(xn=4),Cn===null||!(Go&268435455)&&!(rh&268435455)||La(Cn,Nn)}function Dd(t,e){var n=Et;Et|=2;var i=ZM();(Cn!==t||Nn!==e)&&(Wr=null,Fo(t,e));do try{I4();break}catch(r){KM(t,r)}while(!0);if(O0(),Et=n,Ld.current=i,pn!==null)throw Error(ve(261));return Cn=null,Nn=0,xn}function I4(){for(;pn!==null;)QM(pn)}function N4(){for(;pn!==null&&!rL();)QM(pn)}function QM(t){var e=tE(t.alternate,t,Mi);t.memoizedProps=t.pendingProps,e===null?JM(t):pn=e,q0.current=null}function JM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A4(n,e),n!==null){n.flags&=32767,pn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xn=6,pn=null;return}}else if(n=T4(n,e,Mi),n!==null){pn=n;return}if(e=e.sibling,e!==null){pn=e;return}pn=e=t}while(e!==null);xn===0&&(xn=5)}function To(t,e,n){var i=It,r=$i.transition;try{$i.transition=null,It=1,D4(t,e,n,i)}finally{$i.transition=r,It=i}return null}function D4(t,e,n,i){do Qs();while(Da!==null);if(Et&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(pL(t,o),t===Cn&&(pn=Cn=null,Nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ff||(ff=!0,nE(md,function(){return Qs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$i.transition,$i.transition=null;var l=It;It=1;var u=Et;Et|=4,q0.current=null,C4(t,n),$M(n,t),e4(vg),vd=!!gg,vg=gg=null,t.current=n,R4(n),aL(),Et=u,It=l,$i.transition=o}else t.current=n;if(ff&&(ff=!1,Da=t,Nd=r),o=t.pendingLanes,o===0&&(Ga=null),lL(n.stateNode),fi(t,dn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Id)throw Id=!1,t=Fg,Fg=null,t;return Nd&1&&t.tag!==0&&Qs(),o=t.pendingLanes,o&1?t===kg?mu++:(mu=0,kg=t):mu=0,ao(),null}function Qs(){if(Da!==null){var t=IS(Nd),e=$i.transition,n=It;try{if($i.transition=null,It=16>t?16:t,Da===null)var i=!1;else{if(t=Da,Da=null,Nd=0,Et&6)throw Error(ve(331));var r=Et;for(Et|=4,Le=t.current;Le!==null;){var o=Le,l=o.child;if(Le.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Le=d;Le!==null;){var h=Le;switch(h.tag){case 0:case 11:case 15:hu(8,h,o)}var m=h.child;if(m!==null)m.return=h,Le=m;else for(;Le!==null;){h=Le;var g=h.sibling,y=h.return;if(WM(h),h===d){Le=null;break}if(g!==null){g.return=y,Le=g;break}Le=y}}}var M=o.alternate;if(M!==null){var w=M.child;if(w!==null){M.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}Le=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Le=l;else e:for(;Le!==null;){if(o=Le,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hu(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Le=p;break e}Le=o.return}}var S=t.current;for(Le=S;Le!==null;){l=Le;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Le=x;else e:for(l=S;Le!==null;){if(u=Le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ih(9,u)}}catch(O){sn(u,u.return,O)}if(u===l){Le=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,Le=C;break e}Le=u.return}}if(Et=r,ao(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(qd,t)}catch{}i=!0}return i}finally{It=n,$i.transition=e}}return!1}function Gx(t,e,n){e=ll(n,e),e=NM(t,e,1),t=Va(t,e,1),e=Zn(),t!==null&&(ju(t,1,e),fi(t,e))}function sn(t,e,n){if(t.tag===3)Gx(t,t,n);else for(;e!==null;){if(e.tag===3){Gx(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ga===null||!Ga.has(i))){t=ll(n,t),t=DM(e,t,1),e=Va(e,t,1),t=Zn(),e!==null&&(ju(e,1,t),fi(e,t));break}}e=e.return}}function U4(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zn(),t.pingedLanes|=t.suspendedLanes&n,Cn===t&&(Nn&n)===n&&(xn===4||xn===3&&(Nn&130023424)===Nn&&500>dn()-Z0?Fo(t,0):K0|=n),fi(t,e)}function eE(t,e){e===0&&(t.mode&1?(e=ef,ef<<=1,!(ef&130023424)&&(ef=4194304)):e=1);var n=Zn();t=ea(t,e),t!==null&&(ju(t,e,n),fi(t,n))}function O4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),eE(t,n)}function F4(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),eE(t,n)}var tE;tE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ui.current)li=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return li=!1,w4(t,e,n);li=!!(t.flags&131072)}else li=!1,Jt&&e.flags&1048576&&rM(e,wd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;id(t,e),t=e.pendingProps;var r=rl(e,Gn.current);Zs(e,n),r=W0(null,e,i,t,r,n);var o=X0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ci(i)?(o=!0,Md(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,z0(e),r.updater=th,e.stateNode=r,r._reactInternals=e,Ag(e,i,t,n),e=Rg(null,e,i,!0,o,n)):(e.tag=0,Jt&&o&&I0(e),qn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(id(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=z4(i),t=ar(i,t),r){case 0:e=Cg(null,e,i,t,n);break e;case 1:e=Nx(null,e,i,t,n);break e;case 11:e=Lx(null,e,i,t,n);break e;case 14:e=Ix(null,e,i,ar(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ar(i,r),Cg(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ar(i,r),Nx(t,e,i,r,n);case 3:e:{if(kM(e),t===null)throw Error(ve(387));i=e.pendingProps,o=e.memoizedState,r=o.element,lM(t,e),bd(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ll(Error(ve(423)),e),e=Dx(t,e,i,n,r);break e}else if(i!==r){r=ll(Error(ve(424)),e),e=Dx(t,e,i,n,r);break e}else for(Ei=Ha(e.stateNode.containerInfo.firstChild),Ti=e,Jt=!0,sr=null,n=dM(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(al(),i===r){e=ta(t,e,n);break e}qn(t,e,i,n)}e=e.child}return e;case 5:return hM(e),t===null&&Eg(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,l=r.children,_g(i,r)?l=null:o!==null&&_g(i,o)&&(e.flags|=32),FM(t,e),qn(t,e,l,n),e.child;case 6:return t===null&&Eg(e),null;case 13:return zM(t,e,n);case 4:return B0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ol(e,null,i,n):qn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ar(i,r),Lx(t,e,i,r,n);case 7:return qn(t,e,e.pendingProps,n),e.child;case 8:return qn(t,e,e.pendingProps.children,n),e.child;case 12:return qn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Gt(Td,i._currentValue),i._currentValue=l,o!==null)if(dr(o.value,l)){if(o.children===r.children&&!ui.current){e=ta(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=Zr(-1,n&-n),f.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?f.next=f:(f.next=h.next,h.next=f),d.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),wg(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(ve(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),wg(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}qn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=Yi(r),i=i(r),e.flags|=1,qn(t,e,i,n),e.child;case 14:return i=e.type,r=ar(i,e.pendingProps),r=ar(i.type,r),Ix(t,e,i,r,n);case 15:return UM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ar(i,r),id(t,e),e.tag=1,ci(i)?(t=!0,Md(e)):t=!1,Zs(e,n),cM(e,i,r),Ag(e,i,r,n),Rg(null,e,i,!0,t,n);case 19:return BM(t,e,n);case 22:return OM(t,e,n)}throw Error(ve(156,e.tag))};function nE(t,e){return CS(t,e)}function k4(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(t,e,n,i){return new k4(t,e,n,i)}function tv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z4(t){if(typeof t=="function")return tv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===y0)return 11;if(t===S0)return 14}return 2}function Xa(t,e){var n=t.alternate;return n===null?(n=Xi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function od(t,e,n,i,r,o){var l=2;if(i=t,typeof t=="function")tv(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Is:return ko(n.children,r,o,e);case x0:l=8,r|=8;break;case Km:return t=Xi(12,n,e,r|2),t.elementType=Km,t.lanes=o,t;case Zm:return t=Xi(13,n,e,r),t.elementType=Zm,t.lanes=o,t;case Qm:return t=Xi(19,n,e,r),t.elementType=Qm,t.lanes=o,t;case fS:return ah(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uS:l=10;break e;case cS:l=9;break e;case y0:l=11;break e;case S0:l=14;break e;case Ca:l=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=Xi(l,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function ko(t,e,n,i){return t=Xi(7,t,i,e),t.lanes=n,t}function ah(t,e,n,i){return t=Xi(22,t,i,e),t.elementType=fS,t.lanes=n,t.stateNode={isHidden:!1},t}function im(t,e,n){return t=Xi(6,t,null,e),t.lanes=n,t}function rm(t,e,n){return e=Xi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function B4(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kp(0),this.expirationTimes=kp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kp(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nv(t,e,n,i,r,o,l,u,f){return t=new B4(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Xi(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},z0(o),t}function H4(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iE(t){if(!t)return Za;t=t._reactInternals;e:{if(qo(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ci(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(ci(n))return nM(t,n,e)}return e}function rE(t,e,n,i,r,o,l,u,f){return t=nv(n,i,!0,t,r,o,l,u,f),t.context=iE(null),n=t.current,i=Zn(),r=Wa(n),o=Zr(i,r),o.callback=e??null,Va(n,o,r),t.current.lanes=r,ju(t,r,i),fi(t,i),t}function oh(t,e,n,i){var r=e.current,o=Zn(),l=Wa(r);return n=iE(n),e.context===null?e.context=n:e.pendingContext=n,e=Zr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Va(r,e,l),t!==null&&(fr(t,r,l,o),ed(t,r,l)),l}function Ud(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iv(t,e){Wx(t,e),(t=t.alternate)&&Wx(t,e)}function V4(){return null}var aE=typeof reportError=="function"?reportError:function(t){console.error(t)};function rv(t){this._internalRoot=t}sh.prototype.render=rv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));oh(t,e,null,null)};sh.prototype.unmount=rv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wo(function(){oh(null,t,null,null)}),e[Jr]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=US();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pa.length&&e!==0&&e<Pa[n].priority;n++);Pa.splice(n,0,t),n===0&&FS(t)}};function av(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xx(){}function G4(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var d=Ud(l);o.call(d)}}var l=rE(e,i,t,0,null,!1,!1,"",Xx);return t._reactRootContainer=l,t[Jr]=l.current,bu(t.nodeType===8?t.parentNode:t),Wo(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var u=i;i=function(){var d=Ud(f);u.call(d)}}var f=nv(t,0,!1,null,null,!1,!1,"",Xx);return t._reactRootContainer=f,t[Jr]=f.current,bu(t.nodeType===8?t.parentNode:t),Wo(function(){oh(e,f,n,i)}),f}function uh(t,e,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var u=r;r=function(){var f=Ud(l);u.call(f)}}oh(e,l,t,r)}else l=G4(n,e,t,r,i);return Ud(l)}NS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=iu(e.pendingLanes);n!==0&&(w0(e,n|1),fi(e,dn()),!(Et&6)&&(ul=dn()+500,ao()))}break;case 13:Wo(function(){var i=ea(t,1);if(i!==null){var r=Zn();fr(i,t,1,r)}}),iv(t,1)}};T0=function(t){if(t.tag===13){var e=ea(t,134217728);if(e!==null){var n=Zn();fr(e,t,134217728,n)}iv(t,134217728)}};DS=function(t){if(t.tag===13){var e=Wa(t),n=ea(t,e);if(n!==null){var i=Zn();fr(n,t,e,i)}iv(t,e)}};US=function(){return It};OS=function(t,e){var n=It;try{return It=t,e()}finally{It=n}};lg=function(t,e,n){switch(e){case"input":if(tg(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jd(i);if(!r)throw Error(ve(90));hS(i),tg(i,r)}}}break;case"textarea":mS(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};MS=Q0;ES=Wo;var W4={usingClientEntryPoint:!1,Events:[Yu,Os,Jd,yS,SS,Q0]},ql={findFiberByHostInstance:Po,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},X4={bundleType:ql.bundleType,version:ql.version,rendererPackageName:ql.rendererPackageName,rendererConfig:ql.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oa.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=AS(t),t===null?null:t.stateNode},findFiberByHostInstance:ql.findFiberByHostInstance||V4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{qd=df.inject(X4),Tr=df}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W4;bi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!av(e))throw Error(ve(200));return H4(t,e,null,n)};bi.createRoot=function(t,e){if(!av(t))throw Error(ve(299));var n=!1,i="",r=aE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nv(t,1,!1,null,null,n,!1,i,r),t[Jr]=e.current,bu(t.nodeType===8?t.parentNode:t),new rv(e)};bi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=AS(e),t=t===null?null:t.stateNode,t};bi.flushSync=function(t){return Wo(t)};bi.hydrate=function(t,e,n){if(!lh(e))throw Error(ve(200));return uh(null,t,e,!0,n)};bi.hydrateRoot=function(t,e,n){if(!av(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=aE;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=rE(e,null,t,1,n??null,r,!1,o,l),t[Jr]=e.current,bu(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sh(e)};bi.render=function(t,e,n){if(!lh(e))throw Error(ve(200));return uh(null,t,e,!1,n)};bi.unmountComponentAtNode=function(t){if(!lh(t))throw Error(ve(40));return t._reactRootContainer?(Wo(function(){uh(null,null,t,!1,function(){t._reactRootContainer=null,t[Jr]=null})}),!0):!1};bi.unstable_batchedUpdates=Q0;bi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lh(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return uh(t,e,n,!1,i)};bi.version="18.2.0-next-9e3b772b8-20220608";function oE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oE)}catch(t){console.error(t)}}oE(),rS.exports=bi;var j4=rS.exports,jx=j4;Ym.createRoot=jx.createRoot,Ym.hydrateRoot=jx.hydrateRoot;function $x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Pe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$x(Object(n),!0).forEach(function(i){yn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$x(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Od(t){"@babel/helpers - typeof";return Od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Od(t)}function $4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yx(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Y4(t,e,n){return e&&Yx(t.prototype,e),n&&Yx(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ov(t,e){return K4(t)||Q4(t,e)||sE(t,e)||eI()}function Ku(t){return q4(t)||Z4(t)||sE(t)||J4()}function q4(t){if(Array.isArray(t))return Hg(t)}function K4(t){if(Array.isArray(t))return t}function Z4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,l,u;try{for(n=n.call(t);!(r=(l=n.next()).done)&&(i.push(l.value),!(e&&i.length===e));r=!0);}catch(f){o=!0,u=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw u}}return i}}function sE(t,e){if(t){if(typeof t=="string")return Hg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hg(t,e)}}function Hg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function J4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qx=function(){},sv={},lE={},uE=null,cE={mark:qx,measure:qx};try{typeof window<"u"&&(sv=window),typeof document<"u"&&(lE=document),typeof MutationObserver<"u"&&(uE=MutationObserver),typeof performance<"u"&&(cE=performance)}catch{}var tI=sv.navigator||{},Kx=tI.userAgent,Zx=Kx===void 0?"":Kx,Qa=sv,Zt=lE,Qx=uE,hf=cE;Qa.document;var sa=!!Zt.documentElement&&!!Zt.head&&typeof Zt.addEventListener=="function"&&typeof Zt.createElement=="function",fE=~Zx.indexOf("MSIE")||~Zx.indexOf("Trident/"),pf,mf,gf,vf,_f,na="___FONT_AWESOME___",Vg=16,dE="fa",hE="svg-inline--fa",Xo="data-fa-i2svg",Gg="data-fa-pseudo-element",nI="data-fa-pseudo-element-pending",lv="data-prefix",uv="data-icon",Jx="fontawesome-i2svg",iI="async",rI=["HTML","HEAD","STYLE","SCRIPT"],pE=function(){try{return!0}catch{return!1}}(),qt="classic",ln="sharp",cv=[qt,ln];function Zu(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[qt]}})}var Ou=Zu((pf={},yn(pf,qt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),yn(pf,ln,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pf)),Fu=Zu((mf={},yn(mf,qt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),yn(mf,ln,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),mf)),ku=Zu((gf={},yn(gf,qt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),yn(gf,ln,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gf)),aI=Zu((vf={},yn(vf,qt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),yn(vf,ln,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vf)),oI=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,mE="fa-layers-text",sI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lI=Zu((_f={},yn(_f,qt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),yn(_f,ln,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_f)),gE=[1,2,3,4,5,6,7,8,9,10],uI=gE.concat([11,12,13,14,15,16,17,18,19,20]),cI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],No={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zu=new Set;Object.keys(Fu[qt]).map(zu.add.bind(zu));Object.keys(Fu[ln]).map(zu.add.bind(zu));var fI=[].concat(cv,Ku(zu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",No.GROUP,No.SWAP_OPACITY,No.PRIMARY,No.SECONDARY]).concat(gE.map(function(t){return"".concat(t,"x")})).concat(uI.map(function(t){return"w-".concat(t)})),gu=Qa.FontAwesomeConfig||{};function dI(t){var e=Zt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Zt&&typeof Zt.querySelector=="function"){var pI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pI.forEach(function(t){var e=ov(t,2),n=e[0],i=e[1],r=hI(dI(n));r!=null&&(gu[i]=r)})}var vE={styleDefault:"solid",familyDefault:"classic",cssPrefix:dE,replacementClass:hE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gu.familyPrefix&&(gu.cssPrefix=gu.familyPrefix);var cl=Pe(Pe({},vE),gu);cl.autoReplaceSvg||(cl.observeMutations=!1);var Ue={};Object.keys(vE).forEach(function(t){Object.defineProperty(Ue,t,{enumerable:!0,set:function(n){cl[t]=n,vu.forEach(function(i){return i(Ue)})},get:function(){return cl[t]}})});Object.defineProperty(Ue,"familyPrefix",{enumerable:!0,set:function(e){cl.cssPrefix=e,vu.forEach(function(n){return n(Ue)})},get:function(){return cl.cssPrefix}});Qa.FontAwesomeConfig=Ue;var vu=[];function mI(t){return vu.push(t),function(){vu.splice(vu.indexOf(t),1)}}var Sa=Vg,Er={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gI(t){if(!(!t||!sa)){var e=Zt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Zt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],l=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=o)}return Zt.head.insertBefore(e,i),t}}var vI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bu(){for(var t=12,e="";t-- >0;)e+=vI[Math.random()*62|0];return e}function _l(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fv(t){return t.classList?_l(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _E(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _I(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(_E(t[n]),'" ')},"").trim()}function ch(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function dv(t){return t.size!==Er.size||t.x!==Er.x||t.y!==Er.y||t.rotate!==Er.rotate||t.flipX||t.flipY}function xI(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),u="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:f,path:d}}function yI(t){var e=t.transform,n=t.width,i=n===void 0?Vg:n,r=t.height,o=r===void 0?Vg:r,l=t.startCentered,u=l===void 0?!1:l,f="";return u&&fE?f+="translate(".concat(e.x/Sa-i/2,"em, ").concat(e.y/Sa-o/2,"em) "):u?f+="translate(calc(-50% + ".concat(e.x/Sa,"em), calc(-50% + ").concat(e.y/Sa,"em)) "):f+="translate(".concat(e.x/Sa,"em, ").concat(e.y/Sa,"em) "),f+="scale(".concat(e.size/Sa*(e.flipX?-1:1),", ").concat(e.size/Sa*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var SI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xE(){var t=dE,e=hE,n=Ue.cssPrefix,i=Ue.replacementClass,r=SI;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),l=new RegExp("\\--".concat(t,"\\-"),"g"),u=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(l,"--".concat(n,"-")).replace(u,".".concat(i))}return r}var ey=!1;function am(){Ue.autoAddCss&&!ey&&(gI(xE()),ey=!0)}var MI={mixout:function(){return{dom:{css:xE,insertCss:am}}},hooks:function(){return{beforeDOMElementCreation:function(){am()},beforeI2svg:function(){am()}}}},ia=Qa||{};ia[na]||(ia[na]={});ia[na].styles||(ia[na].styles={});ia[na].hooks||(ia[na].hooks={});ia[na].shims||(ia[na].shims=[]);var ur=ia[na],yE=[],EI=function t(){Zt.removeEventListener("DOMContentLoaded",t),Fd=1,yE.map(function(e){return e()})},Fd=!1;sa&&(Fd=(Zt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Zt.readyState),Fd||Zt.addEventListener("DOMContentLoaded",EI));function wI(t){sa&&(Fd?setTimeout(t,0):yE.push(t))}function Qu(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?_E(t):"<".concat(e," ").concat(_I(i),">").concat(o.map(Qu).join(""),"</").concat(e,">")}function ty(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var TI=function(e,n){return function(i,r,o,l){return e.call(n,i,r,o,l)}},om=function(e,n,i,r){var o=Object.keys(e),l=o.length,u=r!==void 0?TI(n,r):n,f,d,h;for(i===void 0?(f=1,h=e[o[0]]):(f=0,h=i);f<l;f++)d=o[f],h=u(h,e[d],d,e);return h};function AI(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Wg(t){var e=AI(t);return e.length===1?e[0].toString(16):null}function bI(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function ny(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Xg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,o=ny(e);typeof ur.hooks.addPack=="function"&&!r?ur.hooks.addPack(t,ny(e)):ur.styles[t]=Pe(Pe({},ur.styles[t]||{}),o),t==="fas"&&Xg("fa",e)}var xf,yf,Sf,Gs=ur.styles,CI=ur.shims,RI=(xf={},yn(xf,qt,Object.values(ku[qt])),yn(xf,ln,Object.values(ku[ln])),xf),hv=null,SE={},ME={},EE={},wE={},TE={},PI=(yf={},yn(yf,qt,Object.keys(Ou[qt])),yn(yf,ln,Object.keys(Ou[ln])),yf);function LI(t){return~fI.indexOf(t)}function II(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!LI(r)?r:null}var AE=function(){var e=function(o){return om(Gs,function(l,u,f){return l[f]=om(u,o,{}),l},{})};SE=e(function(r,o,l){if(o[3]&&(r[o[3]]=l),o[2]){var u=o[2].filter(function(f){return typeof f=="number"});u.forEach(function(f){r[f.toString(16)]=l})}return r}),ME=e(function(r,o,l){if(r[l]=l,o[2]){var u=o[2].filter(function(f){return typeof f=="string"});u.forEach(function(f){r[f]=l})}return r}),TE=e(function(r,o,l){var u=o[2];return r[l]=l,u.forEach(function(f){r[f]=l}),r});var n="far"in Gs||Ue.autoFetchSvg,i=om(CI,function(r,o){var l=o[0],u=o[1],f=o[2];return u==="far"&&!n&&(u="fas"),typeof l=="string"&&(r.names[l]={prefix:u,iconName:f}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:u,iconName:f}),r},{names:{},unicodes:{}});EE=i.names,wE=i.unicodes,hv=fh(Ue.styleDefault,{family:Ue.familyDefault})};mI(function(t){hv=fh(t.styleDefault,{family:Ue.familyDefault})});AE();function pv(t,e){return(SE[t]||{})[e]}function NI(t,e){return(ME[t]||{})[e]}function Do(t,e){return(TE[t]||{})[e]}function bE(t){return EE[t]||{prefix:null,iconName:null}}function DI(t){var e=wE[t],n=pv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ja(){return hv}var mv=function(){return{prefix:null,iconName:null,rest:[]}};function fh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?qt:n,r=Ou[i][t],o=Fu[i][t]||Fu[i][r],l=t in ur.styles?t:null;return o||l||null}var iy=(Sf={},yn(Sf,qt,Object.keys(ku[qt])),yn(Sf,ln,Object.keys(ku[ln])),Sf);function dh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,o=(e={},yn(e,qt,"".concat(Ue.cssPrefix,"-").concat(qt)),yn(e,ln,"".concat(Ue.cssPrefix,"-").concat(ln)),e),l=null,u=qt;(t.includes(o[qt])||t.some(function(d){return iy[qt].includes(d)}))&&(u=qt),(t.includes(o[ln])||t.some(function(d){return iy[ln].includes(d)}))&&(u=ln);var f=t.reduce(function(d,h){var m=II(Ue.cssPrefix,h);if(Gs[h]?(h=RI[u].includes(h)?aI[u][h]:h,l=h,d.prefix=h):PI[u].indexOf(h)>-1?(l=h,d.prefix=fh(h,{family:u})):m?d.iconName=m:h!==Ue.replacementClass&&h!==o[qt]&&h!==o[ln]&&d.rest.push(h),!r&&d.prefix&&d.iconName){var g=l==="fa"?bE(d.iconName):{},y=Do(d.prefix,d.iconName);g.prefix&&(l=null),d.iconName=g.iconName||y||d.iconName,d.prefix=g.prefix||d.prefix,d.prefix==="far"&&!Gs.far&&Gs.fas&&!Ue.autoFetchSvg&&(d.prefix="fas")}return d},mv());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&u===ln&&(Gs.fass||Ue.autoFetchSvg)&&(f.prefix="fass",f.iconName=Do(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||l==="fa")&&(f.prefix=Ja()||"fas"),f}var UI=function(){function t(){$4(this,t),this.definitions={}}return Y4(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var l=r.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(u){n.definitions[u]=Pe(Pe({},n.definitions[u]||{}),l[u]),Xg(u,l[u]);var f=ku[qt][u];f&&Xg(f,l[u]),AE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(o){var l=r[o],u=l.prefix,f=l.iconName,d=l.icon,h=d[2];n[u]||(n[u]={}),h.length>0&&h.forEach(function(m){typeof m=="string"&&(n[u][m]=d)}),n[u][f]=d}),n}}]),t}(),ry=[],Ws={},Js={},OI=Object.keys(Js);function FI(t,e){var n=e.mixoutsTo;return ry=t,Ws={},Object.keys(Js).forEach(function(i){OI.indexOf(i)===-1&&delete Js[i]}),ry.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(l){typeof r[l]=="function"&&(n[l]=r[l]),Od(r[l])==="object"&&Object.keys(r[l]).forEach(function(u){n[l]||(n[l]={}),n[l][u]=r[l][u]})}),i.hooks){var o=i.hooks();Object.keys(o).forEach(function(l){Ws[l]||(Ws[l]=[]),Ws[l].push(o[l])})}i.provides&&i.provides(Js)}),n}function jg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=Ws[t]||[];return o.forEach(function(l){e=l.apply(null,[e].concat(i))}),e}function jo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Ws[t]||[];r.forEach(function(o){o.apply(null,n)})}function ra(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Js[t]?Js[t].apply(null,e):void 0}function $g(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ja();if(e)return e=Do(n,e)||e,ty(CE.definitions,n,e)||ty(ur.styles,n,e)}var CE=new UI,kI=function(){Ue.autoReplaceSvg=!1,Ue.observeMutations=!1,jo("noAuto")},zI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sa?(jo("beforeI2svg",e),ra("pseudoElements2svg",e),ra("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Ue.autoReplaceSvg===!1&&(Ue.autoReplaceSvg=!0),Ue.observeMutations=!0,wI(function(){HI({autoReplaceSvgRoot:n}),jo("watch",e)})}},BI={icon:function(e){if(e===null)return null;if(Od(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Do(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=fh(e[0]);return{prefix:i,iconName:Do(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Ue.cssPrefix,"-"))>-1||e.match(oI))){var r=dh(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ja(),iconName:Do(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=Ja();return{prefix:o,iconName:Do(o,e)||e}}}},Ri={noAuto:kI,config:Ue,dom:zI,parse:BI,library:CE,findIconDefinition:$g,toHtml:Qu},HI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Zt:n;(Object.keys(ur.styles).length>0||Ue.autoFetchSvg)&&sa&&Ue.autoReplaceSvg&&Ri.dom.i2svg({node:i})};function hh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Qu(i)})}}),Object.defineProperty(t,"node",{get:function(){if(sa){var i=Zt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function VI(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,o=t.styles,l=t.transform;if(dv(l)&&n.found&&!i.found){var u=n.width,f=n.height,d={x:u/f/2,y:.5};r.style=ch(Pe(Pe({},o),{},{"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function GI(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,o=t.symbol,l=o===!0?"".concat(e,"-").concat(Ue.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Pe(Pe({},r),{},{id:l}),children:i}]}]}function gv(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,o=t.iconName,l=t.transform,u=t.symbol,f=t.title,d=t.maskId,h=t.titleId,m=t.extra,g=t.watchable,y=g===void 0?!1:g,M=i.found?i:n,w=M.width,_=M.height,p=r==="fak",S=[Ue.replacementClass,o?"".concat(Ue.cssPrefix,"-").concat(o):""].filter(function(R){return m.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(m.classes).join(" "),x={children:[],attributes:Pe(Pe({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(_)})},C=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/_*16*.0625,"em")}:{};y&&(x.attributes[Xo]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(h||Bu())},children:[f]}),delete x.attributes.title);var O=Pe(Pe({},x),{},{prefix:r,iconName:o,main:n,mask:i,maskId:d,transform:l,symbol:u,styles:Pe(Pe({},C),m.styles)}),N=i.found&&n.found?ra("generateAbstractMask",O)||{children:[],attributes:{}}:ra("generateAbstractIcon",O)||{children:[],attributes:{}},I=N.children,k=N.attributes;return O.children=I,O.attributes=k,u?GI(O):VI(O)}function ay(t){var e=t.content,n=t.width,i=t.height,r=t.transform,o=t.title,l=t.extra,u=t.watchable,f=u===void 0?!1:u,d=Pe(Pe(Pe({},l.attributes),o?{title:o}:{}),{},{class:l.classes.join(" ")});f&&(d[Xo]="");var h=Pe({},l.styles);dv(r)&&(h.transform=yI({transform:r,startCentered:!0,width:n,height:i}),h["-webkit-transform"]=h.transform);var m=ch(h);m.length>0&&(d.style=m);var g=[];return g.push({tag:"span",attributes:d,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function WI(t){var e=t.content,n=t.title,i=t.extra,r=Pe(Pe(Pe({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=ch(i.styles);o.length>0&&(r.style=o);var l=[];return l.push({tag:"span",attributes:r,children:[e]}),n&&l.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),l}var sm=ur.styles;function Yg(t){var e=t[0],n=t[1],i=t.slice(4),r=ov(i,1),o=r[0],l=null;return Array.isArray(o)?l={tag:"g",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(No.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(No.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(No.PRIMARY),fill:"currentColor",d:o[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:l}}var XI={found:!1,width:512,height:512};function jI(t,e){!pE&&!Ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qg(t,e){var n=e;return e==="fa"&&Ue.styleDefault!==null&&(e=Ja()),new Promise(function(i,r){if(ra("missingIconAbstract"),n==="fa"){var o=bE(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&sm[e]&&sm[e][t]){var l=sm[e][t];return i(Yg(l))}jI(t,e),i(Pe(Pe({},XI),{},{icon:Ue.showMissingIcons&&t?ra("missingIconAbstract")||{}:{}}))})}var oy=function(){},Kg=Ue.measurePerformance&&hf&&hf.mark&&hf.measure?hf:{mark:oy,measure:oy},au='FA "6.5.1"',$I=function(e){return Kg.mark("".concat(au," ").concat(e," begins")),function(){return RE(e)}},RE=function(e){Kg.mark("".concat(au," ").concat(e," ends")),Kg.measure("".concat(au," ").concat(e),"".concat(au," ").concat(e," begins"),"".concat(au," ").concat(e," ends"))},vv={begin:$I,end:RE},sd=function(){};function sy(t){var e=t.getAttribute?t.getAttribute(Xo):null;return typeof e=="string"}function YI(t){var e=t.getAttribute?t.getAttribute(lv):null,n=t.getAttribute?t.getAttribute(uv):null;return e&&n}function qI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ue.replacementClass)}function KI(){if(Ue.autoReplaceSvg===!0)return ld.replace;var t=ld[Ue.autoReplaceSvg];return t||ld.replace}function ZI(t){return Zt.createElementNS("http://www.w3.org/2000/svg",t)}function QI(t){return Zt.createElement(t)}function PE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?ZI:QI:n;if(typeof t=="string")return Zt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(l){r.setAttribute(l,t.attributes[l])});var o=t.children||[];return o.forEach(function(l){r.appendChild(PE(l,{ceFn:i}))}),r}function JI(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ld={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(PE(r),n)}),n.getAttribute(Xo)===null&&Ue.keepOriginalSource){var i=Zt.createComment(JI(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~fv(n).indexOf(Ue.replacementClass))return ld.replace(e);var r=new RegExp("".concat(Ue.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var o=i[0].attributes.class.split(" ").reduce(function(u,f){return f===Ue.replacementClass||f.match(r)?u.toSvg.push(f):u.toNode.push(f),u},{toNode:[],toSvg:[]});i[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var l=i.map(function(u){return Qu(u)}).join(`
`);n.setAttribute(Xo,""),n.innerHTML=l}};function ly(t){t()}function LE(t,e){var n=typeof e=="function"?e:sd;if(t.length===0)n();else{var i=ly;Ue.mutateApproach===iI&&(i=Qa.requestAnimationFrame||ly),i(function(){var r=KI(),o=vv.begin("mutate");t.map(r),o(),n()})}}var _v=!1;function IE(){_v=!0}function Zg(){_v=!1}var kd=null;function uy(t){if(Qx&&Ue.observeMutations){var e=t.treeCallback,n=e===void 0?sd:e,i=t.nodeCallback,r=i===void 0?sd:i,o=t.pseudoElementsCallback,l=o===void 0?sd:o,u=t.observeMutationsRoot,f=u===void 0?Zt:u;kd=new Qx(function(d){if(!_v){var h=Ja();_l(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!sy(m.addedNodes[0])&&(Ue.searchPseudoElements&&l(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&Ue.searchPseudoElements&&l(m.target.parentNode),m.type==="attributes"&&sy(m.target)&&~cI.indexOf(m.attributeName))if(m.attributeName==="class"&&YI(m.target)){var g=dh(fv(m.target)),y=g.prefix,M=g.iconName;m.target.setAttribute(lv,y||h),M&&m.target.setAttribute(uv,M)}else qI(m.target)&&r(m.target)})}}),sa&&kd.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eN(){kd&&kd.disconnect()}function tN(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var o=r.split(":"),l=o[0],u=o.slice(1);return l&&u.length>0&&(i[l]=u.join(":").trim()),i},{})),n}function nN(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=dh(fv(t));return r.prefix||(r.prefix=Ja()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=NI(r.prefix,t.innerText)||pv(r.prefix,Wg(t.innerText))),!r.iconName&&Ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function iN(t){var e=_l(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Ue.autoA11y&&(n?e["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(i||Bu()):(e["aria-hidden"]="true",e.focusable="false")),e}function rN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Er,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nN(t),i=n.iconName,r=n.prefix,o=n.rest,l=iN(t),u=jg("parseNodeAttributes",{},t),f=e.styleParser?tN(t):[];return Pe({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Er,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},u)}var aN=ur.styles;function NE(t){var e=Ue.autoReplaceSvg==="nest"?cy(t,{styleParser:!1}):cy(t);return~e.extra.classes.indexOf(mE)?ra("generateLayersText",t,e):ra("generateSvgReplacementMutation",t,e)}var eo=new Set;cv.map(function(t){eo.add("fa-".concat(t))});Object.keys(Ou[qt]).map(eo.add.bind(eo));Object.keys(Ou[ln]).map(eo.add.bind(eo));eo=Ku(eo);function fy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sa)return Promise.resolve();var n=Zt.documentElement.classList,i=function(m){return n.add("".concat(Jx,"-").concat(m))},r=function(m){return n.remove("".concat(Jx,"-").concat(m))},o=Ue.autoFetchSvg?eo:cv.map(function(h){return"fa-".concat(h)}).concat(Object.keys(aN));o.includes("fa")||o.push("fa");var l=[".".concat(mE,":not([").concat(Xo,"])")].concat(o.map(function(h){return".".concat(h,":not([").concat(Xo,"])")})).join(", ");if(l.length===0)return Promise.resolve();var u=[];try{u=_l(t.querySelectorAll(l))}catch{}if(u.length>0)i("pending"),r("complete");else return Promise.resolve();var f=vv.begin("onTree"),d=u.reduce(function(h,m){try{var g=NE(m);g&&h.push(g)}catch(y){pE||y.name==="MissingIcon"&&console.error(y)}return h},[]);return new Promise(function(h,m){Promise.all(d).then(function(g){LE(g,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),f(),h()})}).catch(function(g){f(),m(g)})})}function oN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;NE(t).then(function(n){n&&LE([n],e)})}function sN(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:$g(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:$g(r||{})),t(i,Pe(Pe({},n),{},{mask:r}))}}var lN=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Er:i,o=n.symbol,l=o===void 0?!1:o,u=n.mask,f=u===void 0?null:u,d=n.maskId,h=d===void 0?null:d,m=n.title,g=m===void 0?null:m,y=n.titleId,M=y===void 0?null:y,w=n.classes,_=w===void 0?[]:w,p=n.attributes,S=p===void 0?{}:p,x=n.styles,C=x===void 0?{}:x;if(e){var O=e.prefix,N=e.iconName,I=e.icon;return hh(Pe({type:"icon"},e),function(){return jo("beforeDOMElementCreation",{iconDefinition:e,params:n}),Ue.autoA11y&&(g?S["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(M||Bu()):(S["aria-hidden"]="true",S.focusable="false")),gv({icons:{main:Yg(I),mask:f?Yg(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:N,transform:Pe(Pe({},Er),r),symbol:l,title:g,maskId:h,titleId:M,extra:{attributes:S,styles:C,classes:_}})})}},uN={mixout:function(){return{icon:sN(lN)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fy,n.nodeCallback=oN,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Zt:i,o=n.callback,l=o===void 0?function(){}:o;return fy(r,l)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,o=i.title,l=i.titleId,u=i.prefix,f=i.transform,d=i.symbol,h=i.mask,m=i.maskId,g=i.extra;return new Promise(function(y,M){Promise.all([qg(r,u),h.iconName?qg(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var _=ov(w,2),p=_[0],S=_[1];y([n,gv({icons:{main:p,mask:S},prefix:u,iconName:r,transform:f,symbol:d,maskId:m,title:o,titleId:l,extra:g,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,o=n.main,l=n.transform,u=n.styles,f=ch(u);f.length>0&&(r.style=f);var d;return dv(l)&&(d=ra("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),i.push(d||o.icon),{children:i,attributes:r}}}},cN={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,o=r===void 0?[]:r;return hh({type:"layer"},function(){jo("beforeDOMElementCreation",{assembler:n,params:i});var l=[];return n(function(u){Array.isArray(u)?u.map(function(f){l=l.concat(f.abstract)}):l=l.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(Ue.cssPrefix,"-layers")].concat(Ku(o)).join(" ")},children:l}]})}}}},fN={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,o=r===void 0?null:r,l=i.classes,u=l===void 0?[]:l,f=i.attributes,d=f===void 0?{}:f,h=i.styles,m=h===void 0?{}:h;return hh({type:"counter",content:n},function(){return jo("beforeDOMElementCreation",{content:n,params:i}),WI({content:n.toString(),title:o,extra:{attributes:d,styles:m,classes:["".concat(Ue.cssPrefix,"-layers-counter")].concat(Ku(u))}})})}}}},dN={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,o=r===void 0?Er:r,l=i.title,u=l===void 0?null:l,f=i.classes,d=f===void 0?[]:f,h=i.attributes,m=h===void 0?{}:h,g=i.styles,y=g===void 0?{}:g;return hh({type:"text",content:n},function(){return jo("beforeDOMElementCreation",{content:n,params:i}),ay({content:n,transform:Pe(Pe({},Er),o),title:u,extra:{attributes:m,styles:y,classes:["".concat(Ue.cssPrefix,"-layers-text")].concat(Ku(d))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,o=i.transform,l=i.extra,u=null,f=null;if(fE){var d=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();u=h.width/d,f=h.height/d}return Ue.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([n,ay({content:n.innerHTML,width:u,height:f,transform:o,title:r,extra:l,watchable:!0})])}}},hN=new RegExp('"',"ug"),dy=[1105920,1112319];function pN(t){var e=t.replace(hN,""),n=bI(e,0),i=n>=dy[0]&&n<=dy[1],r=e.length===2?e[0]===e[1]:!1;return{value:Wg(r?e[0]:e),isSecondary:i||r}}function hy(t,e){var n="".concat(nI).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var o=_l(t.children),l=o.filter(function(I){return I.getAttribute(Gg)===e})[0],u=Qa.getComputedStyle(t,e),f=u.getPropertyValue("font-family").match(sI),d=u.getPropertyValue("font-weight"),h=u.getPropertyValue("content");if(l&&!f)return t.removeChild(l),i();if(f&&h!=="none"&&h!==""){var m=u.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?ln:qt,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Fu[g][f[2].toLowerCase()]:lI[g][d],M=pN(m),w=M.value,_=M.isSecondary,p=f[0].startsWith("FontAwesome"),S=pv(y,w),x=S;if(p){var C=DI(w);C.iconName&&C.prefix&&(S=C.iconName,y=C.prefix)}if(S&&!_&&(!l||l.getAttribute(lv)!==y||l.getAttribute(uv)!==x)){t.setAttribute(n,x),l&&t.removeChild(l);var O=rN(),N=O.extra;N.attributes[Gg]=e,qg(S,y).then(function(I){var k=gv(Pe(Pe({},O),{},{icons:{main:I,mask:mv()},prefix:y,iconName:x,extra:N,watchable:!0})),R=Zt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=k.map(function(T){return Qu(T)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function mN(t){return Promise.all([hy(t,"::before"),hy(t,"::after")])}function gN(t){return t.parentNode!==document.head&&!~rI.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function py(t){if(sa)return new Promise(function(e,n){var i=_l(t.querySelectorAll("*")).filter(gN).map(mN),r=vv.begin("searchPseudoElements");IE(),Promise.all(i).then(function(){r(),Zg(),e()}).catch(function(){r(),Zg(),n()})})}var vN={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=py,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Zt:i;Ue.searchPseudoElements&&py(r)}}},my=!1,_N={mixout:function(){return{dom:{unwatch:function(){IE(),my=!0}}}},hooks:function(){return{bootstrap:function(){uy(jg("mutationObserverCallbacks",{}))},noAuto:function(){eN()},watch:function(n){var i=n.observeMutationsRoot;my?Zg():uy(jg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},gy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var o=r.toLowerCase().split("-"),l=o[0],u=o.slice(1).join("-");if(l&&u==="h")return i.flipX=!0,i;if(l&&u==="v")return i.flipY=!0,i;if(u=parseFloat(u),isNaN(u))return i;switch(l){case"grow":i.size=i.size+u;break;case"shrink":i.size=i.size-u;break;case"left":i.x=i.x-u;break;case"right":i.x=i.x+u;break;case"up":i.y=i.y-u;break;case"down":i.y=i.y+u;break;case"rotate":i.rotate=i.rotate+u;break}return i},n)},xN={mixout:function(){return{parse:{transform:function(n){return gy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=gy(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,o=n.containerWidth,l=n.iconWidth,u={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(d," ").concat(h)},g={transform:"translate(".concat(l/2*-1," -256)")},y={outer:u,inner:m,path:g};return{tag:"g",attributes:Pe({},y.outer),children:[{tag:"g",attributes:Pe({},y.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Pe(Pe({},i.icon.attributes),y.path)}]}]}}}},lm={x:0,y:0,width:"100%",height:"100%"};function vy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function yN(t){return t.tag==="g"?t.children:[t]}var SN={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),o=r?dh(r.split(" ").map(function(l){return l.trim()})):mv();return o.prefix||(o.prefix=Ja()),n.mask=o,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,o=n.main,l=n.mask,u=n.maskId,f=n.transform,d=o.width,h=o.icon,m=l.width,g=l.icon,y=xI({transform:f,containerWidth:m,iconWidth:d}),M={tag:"rect",attributes:Pe(Pe({},lm),{},{fill:"white"})},w=h.children?{children:h.children.map(vy)}:{},_={tag:"g",attributes:Pe({},y.inner),children:[vy(Pe({tag:h.tag,attributes:Pe(Pe({},h.attributes),y.path)},w))]},p={tag:"g",attributes:Pe({},y.outer),children:[_]},S="mask-".concat(u||Bu()),x="clip-".concat(u||Bu()),C={tag:"mask",attributes:Pe(Pe({},lm),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,p]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:yN(g)},C]};return i.push(O,{tag:"rect",attributes:Pe({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(S,")")},lm)}),{children:i,attributes:r}}}},MN={provides:function(e){var n=!1;Qa.matchMedia&&(n=Qa.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Pe(Pe({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=Pe(Pe({},o),{},{attributeName:"opacity"}),u={tag:"circle",attributes:Pe(Pe({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||u.children.push({tag:"animate",attributes:Pe(Pe({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Pe(Pe({},l),{},{values:"1;0;1;1;0;1;"})}),i.push(u),i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Pe(Pe({},l),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Pe(Pe({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},EN={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},wN=[MI,uN,cN,fN,dN,vN,_N,xN,SN,MN,EN];FI(wN,{mixoutsTo:Ri});Ri.noAuto;Ri.config;Ri.library;Ri.dom;var Qg=Ri.parse;Ri.findIconDefinition;Ri.toHtml;var TN=Ri.icon;Ri.layer;Ri.text;Ri.counter;var DE={exports:{}},AN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bN=AN,CN=bN;function UE(){}function OE(){}OE.resetWarningCache=UE;var RN=function(){function t(i,r,o,l,u,f){if(f!==CN){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:OE,resetWarningCache:UE};return n.PropTypes=n,n};DE.exports=RN();var PN=DE.exports;const gt=$2(PN);function _y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ua(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_y(Object(n),!0).forEach(function(i){Xs(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_y(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zd(t){"@babel/helpers - typeof";return zd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zd(t)}function Xs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LN(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function IN(t,e){if(t==null)return{};var n=LN(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Jg(t){return NN(t)||DN(t)||UN(t)||ON()}function NN(t){if(Array.isArray(t))return e0(t)}function DN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UN(t,e){if(t){if(typeof t=="string")return e0(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e0(t,e)}}function e0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ON(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FN(t){var e,n=t.beat,i=t.fade,r=t.beatFade,o=t.bounce,l=t.shake,u=t.flash,f=t.spin,d=t.spinPulse,h=t.spinReverse,m=t.pulse,g=t.fixedWidth,y=t.inverse,M=t.border,w=t.listItem,_=t.flip,p=t.size,S=t.rotation,x=t.pull,C=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":l,"fa-flash":u,"fa-spin":f,"fa-spin-reverse":h,"fa-spin-pulse":d,"fa-pulse":m,"fa-fw":g,"fa-inverse":y,"fa-border":M,"fa-li":w,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Xs(e,"fa-".concat(p),typeof p<"u"&&p!==null),Xs(e,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),Xs(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Xs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(O){return C[O]?O:null}).filter(function(O){return O})}function kN(t){return t=t-0,t===t}function FE(t){return kN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zN=["style"];function BN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function HN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=FE(n.slice(0,i)),o=n.slice(i+1).trim();return r.startsWith("webkit")?e[BN(r)]=o:e[r]=o,e},{})}function kE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(f){return kE(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,d){var h=e.attributes[d];switch(d){case"class":f.attrs.className=h,delete e.attributes.class;break;case"style":f.attrs.style=HN(h);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?f.attrs[d.toLowerCase()]=h:f.attrs[FE(d)]=h}return f},{attrs:{}}),o=n.style,l=o===void 0?{}:o,u=IN(n,zN);return r.attrs.style=Ua(Ua({},r.attrs.style),l),t.apply(void 0,[e.tag,Ua(Ua({},r.attrs),u)].concat(Jg(i)))}var zE=!1;try{zE=!0}catch{}function VN(){if(!zE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function xy(t){if(t&&zd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qg.icon)return Qg.icon(t);if(t===null)return null;if(t&&zd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function um(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xs({},t,e):{}}var Vt=Pt.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,o=t.className,l=t.title,u=t.titleId,f=t.maskId,d=xy(n),h=um("classes",[].concat(Jg(FN(t)),Jg(o.split(" ")))),m=um("transform",typeof t.transform=="string"?Qg.transform(t.transform):t.transform),g=um("mask",xy(i)),y=TN(d,Ua(Ua(Ua(Ua({},h),m),g),{},{symbol:r,title:l,titleId:u,maskId:f}));if(!y)return VN("Could not find icon",d),null;var M=y.abstract,w={ref:e};return Object.keys(t).forEach(function(_){Vt.defaultProps.hasOwnProperty(_)||(w[_]=t[_])}),GN(M[0],w)});Vt.displayName="FontAwesomeIcon";Vt.propTypes={beat:gt.bool,border:gt.bool,beatFade:gt.bool,bounce:gt.bool,className:gt.string,fade:gt.bool,flash:gt.bool,mask:gt.oneOfType([gt.object,gt.array,gt.string]),maskId:gt.string,fixedWidth:gt.bool,inverse:gt.bool,flip:gt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:gt.oneOfType([gt.object,gt.array,gt.string]),listItem:gt.bool,pull:gt.oneOf(["right","left"]),pulse:gt.bool,rotation:gt.oneOf([0,90,180,270]),shake:gt.bool,size:gt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:gt.bool,spinPulse:gt.bool,spinReverse:gt.bool,symbol:gt.oneOfType([gt.bool,gt.string]),title:gt.string,titleId:gt.string,transform:gt.oneOfType([gt.string,gt.object]),swapOpacity:gt.bool};Vt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var GN=kE.bind(null,Pt.createElement),WN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},XN={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},yy={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},cm={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},jN={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},$N={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},YN={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},qN={prefix:"fab",iconName:"cloudflare",icon:[640,512,[],"e07d","M407.906,319.913l-230.8-2.928a4.58,4.58,0,0,1-3.632-1.926,4.648,4.648,0,0,1-.494-4.147,6.143,6.143,0,0,1,5.361-4.076L411.281,303.9c27.631-1.26,57.546-23.574,68.022-50.784l13.286-34.542a7.944,7.944,0,0,0,.524-2.936,7.735,7.735,0,0,0-.164-1.631A151.91,151.91,0,0,0,201.257,198.4,68.12,68.12,0,0,0,94.2,269.59C41.924,271.106,0,313.728,0,366.12a96.054,96.054,0,0,0,1.029,13.958,4.508,4.508,0,0,0,4.445,3.871l426.1.051c.043,0,.08-.019.122-.02a5.606,5.606,0,0,0,5.271-4l3.273-11.265c3.9-13.4,2.448-25.8-4.1-34.9C430.124,325.423,420.09,320.487,407.906,319.913ZM513.856,221.1c-2.141,0-4.271.062-6.391.164a3.771,3.771,0,0,0-3.324,2.653l-9.077,31.193c-3.9,13.4-2.449,25.786,4.1,34.89,6.02,8.4,16.054,13.323,28.238,13.9l49.2,2.939a4.491,4.491,0,0,1,3.51,1.894,4.64,4.64,0,0,1,.514,4.169,6.153,6.153,0,0,1-5.351,4.075l-51.125,2.939c-27.754,1.27-57.669,23.574-68.145,50.784l-3.695,9.606a2.716,2.716,0,0,0,2.427,3.68c.046,0,.088.017.136.017h175.91a4.69,4.69,0,0,0,4.539-3.37,124.807,124.807,0,0,0,4.682-34C640,277.3,583.524,221.1,513.856,221.1Z"]},KN={prefix:"fab",iconName:"square-js",icon:[448,512,["js-square"],"f3b9","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"]},ZN=KN,QN={prefix:"fab",iconName:"css3-alt",icon:[384,512,[],"f38b","M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"]},JN={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]},fm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},eD={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},ud={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function BE(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=BE(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Oa(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=BE(t))&&(i&&(i+=" "),i+=e);return i}const Hu=t=>typeof t=="number"&&!isNaN(t),zo=t=>typeof t=="string",wi=t=>typeof t=="function",cd=t=>zo(t)||wi(t)?t:null,t0=t=>et.isValidElement(t)||zo(t)||wi(t)||Hu(t);function tD(t,e,n){n===void 0&&(n=300);const{scrollHeight:i,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)})})}function ph(t){let{enter:e,exit:n,appendPosition:i=!1,collapse:r=!0,collapseDuration:o=300}=t;return function(l){let{children:u,position:f,preventExitTransition:d,done:h,nodeRef:m,isIn:g,playToast:y}=l;const M=i?`${e}--${f}`:e,w=i?`${n}--${f}`:n,_=et.useRef(0);return et.useLayoutEffect(()=>{const p=m.current,S=M.split(" "),x=C=>{C.target===m.current&&(y(),p.removeEventListener("animationend",x),p.removeEventListener("animationcancel",x),_.current===0&&C.type!=="animationcancel"&&p.classList.remove(...S))};p.classList.add(...S),p.addEventListener("animationend",x),p.addEventListener("animationcancel",x)},[]),et.useEffect(()=>{const p=m.current,S=()=>{p.removeEventListener("animationend",S),r?tD(p,h,o):h()};g||(d?S():(_.current=1,p.className+=` ${w}`,p.addEventListener("animationend",S)))},[g]),Pt.createElement(Pt.Fragment,null,u)}}function Sy(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Kn=new Map;let Vu=[];const n0=new Set,nD=t=>n0.forEach(e=>e(t)),HE=()=>Kn.size>0;function VE(t,e){var n;if(e)return!((n=Kn.get(e))==null||!n.isToastActive(t));let i=!1;return Kn.forEach(r=>{r.isToastActive(t)&&(i=!0)}),i}function GE(t,e){t0(t)&&(HE()||Vu.push({content:t,options:e}),Kn.forEach(n=>{n.buildToast(t,e)}))}function My(t,e){Kn.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function iD(t){const{subscribe:e,getSnapshot:n,setProps:i}=et.useRef(function(o){const l=o.containerId||1;return{subscribe(u){const f=function(h,m,g){let y=1,M=0,w=[],_=[],p=[],S=m;const x=new Map,C=new Set,O=()=>{p=Array.from(x.values()),C.forEach(k=>k())},N=k=>{_=k==null?[]:_.filter(R=>R!==k),O()},I=k=>{const{toastId:R,onOpen:T,updateId:X,children:ie}=k.props,H=X==null;k.staleId&&x.delete(k.staleId),x.set(R,k),_=[..._,k.props.toastId].filter(re=>re!==k.staleId),O(),g(Sy(k,H?"added":"updated")),H&&wi(T)&&T(et.isValidElement(ie)&&ie.props)};return{id:h,props:S,observe:k=>(C.add(k),()=>C.delete(k)),toggle:(k,R)=>{x.forEach(T=>{R!=null&&R!==T.props.toastId||wi(T.toggle)&&T.toggle(k)})},removeToast:N,toasts:x,clearQueue:()=>{M-=w.length,w=[]},buildToast:(k,R)=>{if((Ce=>{let{containerId:Ze,toastId:Q,updateId:he}=Ce;const Se=Ze?Ze!==h:h!==1,xe=x.has(Q)&&he==null;return Se||xe})(R))return;const{toastId:T,updateId:X,data:ie,staleId:H,delay:re}=R,ae=()=>{N(T)},de=X==null;de&&M++;const ce={...S,style:S.toastStyle,key:y++,...Object.fromEntries(Object.entries(R).filter(Ce=>{let[Ze,Q]=Ce;return Q!=null})),toastId:T,updateId:X,data:ie,closeToast:ae,isIn:!1,className:cd(R.className||S.toastClassName),bodyClassName:cd(R.bodyClassName||S.bodyClassName),progressClassName:cd(R.progressClassName||S.progressClassName),autoClose:!R.isLoading&&(z=R.autoClose,ne=S.autoClose,z===!1||Hu(z)&&z>0?z:ne),deleteToast(){const Ce=x.get(T),{onClose:Ze,children:Q}=Ce.props;wi(Ze)&&Ze(et.isValidElement(Q)&&Q.props),g(Sy(Ce,"removed")),x.delete(T),M--,M<0&&(M=0),w.length>0?I(w.shift()):O()}};var z,ne;ce.closeButton=S.closeButton,R.closeButton===!1||t0(R.closeButton)?ce.closeButton=R.closeButton:R.closeButton===!0&&(ce.closeButton=!t0(S.closeButton)||S.closeButton);let ee=k;et.isValidElement(k)&&!zo(k.type)?ee=et.cloneElement(k,{closeToast:ae,toastProps:ce,data:ie}):wi(k)&&(ee=k({closeToast:ae,toastProps:ce,data:ie}));const ge={content:ee,props:ce,staleId:H};S.limit&&S.limit>0&&M>S.limit&&de?w.push(ge):Hu(re)?setTimeout(()=>{I(ge)},re):I(ge)},setProps(k){S=k},setToggle:(k,R)=>{x.get(k).toggle=R},isToastActive:k=>_.some(R=>R===k),getSnapshot:()=>S.newestOnTop?p.reverse():p}}(l,o,nD);Kn.set(l,f);const d=f.observe(u);return Vu.forEach(h=>GE(h.content,h.options)),Vu=[],()=>{d(),Kn.delete(l)}},setProps(u){var f;(f=Kn.get(l))==null||f.setProps(u)},getSnapshot(){var u;return(u=Kn.get(l))==null?void 0:u.getSnapshot()}}}(t)).current;i(t);const r=et.useSyncExternalStore(e,n,n);return{getToastToRender:function(o){if(!r)return[];const l=new Map;return r.forEach(u=>{const{position:f}=u.props;l.has(f)||l.set(f,[]),l.get(f).push(u)}),Array.from(l,u=>o(u[0],u[1]))},isToastActive:VE,count:r==null?void 0:r.length}}function rD(t){const[e,n]=et.useState(!1),[i,r]=et.useState(!1),o=et.useRef(null),l=et.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:f,closeToast:d,onClick:h,closeOnClick:m}=t;var g,y;function M(){n(!0)}function w(){n(!1)}function _(x){const C=o.current;l.canDrag&&C&&(l.didMove=!0,e&&w(),l.delta=t.draggableDirection==="x"?x.clientX-l.start:x.clientY-l.start,l.start!==x.clientX&&(l.canCloseOnClick=!1),C.style.transform=`translate3d(${t.draggableDirection==="x"?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,C.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function p(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",p);const x=o.current;if(l.canDrag&&l.didMove&&x){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return r(!0),t.closeToast(),void t.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(y=Kn.get((g={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||y.setToggle(g.id,g.fn),et.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||w(),window.addEventListener("focus",M),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",M),window.removeEventListener("blur",w)}},[t.pauseOnFocusLoss]);const S={onPointerDown:function(x){if(t.draggable===!0||t.draggable===x.pointerType){l.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",p);const C=o.current;l.canCloseOnClick=!0,l.canDrag=!0,C.style.transition="none",t.draggableDirection==="x"?(l.start=x.clientX,l.removalDistance=C.offsetWidth*(t.draggablePercent/100)):(l.start=x.clientY,l.removalDistance=C.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(x){const{top:C,bottom:O,left:N,right:I}=o.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&x.clientX>=N&&x.clientX<=I&&x.clientY>=C&&x.clientY<=O?w():M()}};return u&&f&&(S.onMouseEnter=w,t.stacked||(S.onMouseLeave=M)),m&&(S.onClick=x=>{h&&h(x),l.canCloseOnClick&&d()}),{playToast:M,pauseToast:w,isRunning:e,preventExitTransition:i,toastRef:o,eventHandlers:S}}function aD(t){let{delay:e,isRunning:n,closeToast:i,type:r="default",hide:o,className:l,style:u,controlledProgress:f,progress:d,rtl:h,isIn:m,theme:g}=t;const y=o||f&&d===0,M={...u,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};f&&(M.transform=`scaleX(${d})`);const w=Oa("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":h}),_=wi(l)?l({rtl:h,type:r,defaultClassName:w}):Oa(w,l),p={[f&&d>=1?"onTransitionEnd":"onAnimationEnd"]:f&&d<1?null:()=>{m&&i()}};return Pt.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},Pt.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),Pt.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:_,style:M,...p}))}let oD=1;const WE=()=>""+oD++;function sD(t){return t&&(zo(t.toastId)||Hu(t.toastId))?t.toastId:WE()}function _u(t,e){return GE(t,e),e.toastId}function Bd(t,e){return{...e,type:e&&e.type||t,toastId:sD(e)}}function Mf(t){return(e,n)=>_u(e,Bd(t,n))}function Ot(t,e){return _u(t,Bd("default",e))}Ot.loading=(t,e)=>_u(t,Bd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Ot.promise=function(t,e,n){let i,{pending:r,error:o,success:l}=e;r&&(i=zo(r)?Ot.loading(r,n):Ot.loading(r.render,{...n,...r}));const u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(h,m,g)=>{if(m==null)return void Ot.dismiss(i);const y={type:h,...u,...n,data:g},M=zo(m)?{render:m}:m;return i?Ot.update(i,{...y,...M}):Ot(M.render,{...y,...M}),g},d=wi(t)?t():t;return d.then(h=>f("success",l,h)).catch(h=>f("error",o,h)),d},Ot.success=Mf("success"),Ot.info=Mf("info"),Ot.error=Mf("error"),Ot.warning=Mf("warning"),Ot.warn=Ot.warning,Ot.dark=(t,e)=>_u(t,Bd("default",{theme:"dark",...e})),Ot.dismiss=function(t){(function(e){var n;if(HE()){if(e==null||zo(n=e)||Hu(n))Kn.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var i;(i=Kn.get(e.containerId))!=null&&i.removeToast(e.id)||Kn.forEach(r=>{r.removeToast(e.id)})}}else Vu=Vu.filter(r=>e!=null&&r.options.toastId!==e)})(t)},Ot.clearWaitingQueue=function(t){t===void 0&&(t={}),Kn.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},Ot.isActive=VE,Ot.update=function(t,e){e===void 0&&(e={});const n=((i,r)=>{var o;let{containerId:l}=r;return(o=Kn.get(l||1))==null?void 0:o.toasts.get(i)})(t,e);if(n){const{props:i,content:r}=n,o={delay:100,...i,...e,toastId:e.toastId||t,updateId:WE()};o.toastId!==t&&(o.staleId=t);const l=o.render||r;delete o.render,_u(l,o)}},Ot.done=t=>{Ot.update(t,{progress:1})},Ot.onChange=function(t){return n0.add(t),()=>{n0.delete(t)}},Ot.play=t=>My(!0,t),Ot.pause=t=>My(!1,t);const lD=typeof window<"u"?et.useLayoutEffect:et.useEffect,Ef=t=>{let{theme:e,type:n,isLoading:i,...r}=t;return Pt.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},dm={info:function(t){return Pt.createElement(Ef,{...t},Pt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Pt.createElement(Ef,{...t},Pt.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Pt.createElement(Ef,{...t},Pt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Pt.createElement(Ef,{...t},Pt.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Pt.createElement("div",{className:"Toastify__spinner"})}},uD=t=>{const{isRunning:e,preventExitTransition:n,toastRef:i,eventHandlers:r,playToast:o}=rD(t),{closeButton:l,children:u,autoClose:f,onClick:d,type:h,hideProgressBar:m,closeToast:g,transition:y,position:M,className:w,style:_,bodyClassName:p,bodyStyle:S,progressClassName:x,progressStyle:C,updateId:O,role:N,progress:I,rtl:k,toastId:R,deleteToast:T,isIn:X,isLoading:ie,closeOnClick:H,theme:re}=t,ae=Oa("Toastify__toast",`Toastify__toast-theme--${re}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":H}),de=wi(w)?w({rtl:k,position:M,type:h,defaultClassName:ae}):Oa(ae,w),ce=function(ge){let{theme:Ce,type:Ze,isLoading:Q,icon:he}=ge,Se=null;const xe={theme:Ce,type:Ze};return he===!1||(wi(he)?Se=he({...xe,isLoading:Q}):et.isValidElement(he)?Se=et.cloneElement(he,xe):Q?Se=dm.spinner():($e=>$e in dm)(Ze)&&(Se=dm[Ze](xe))),Se}(t),z=!!I||!f,ne={closeToast:g,type:h,theme:re};let ee=null;return l===!1||(ee=wi(l)?l(ne):et.isValidElement(l)?et.cloneElement(l,ne):function(ge){let{closeToast:Ce,theme:Ze,ariaLabel:Q="close"}=ge;return Pt.createElement("button",{className:`Toastify__close-button Toastify__close-button--${Ze}`,type:"button",onClick:he=>{he.stopPropagation(),Ce(he)},"aria-label":Q},Pt.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Pt.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ne)),Pt.createElement(y,{isIn:X,done:T,position:M,preventExitTransition:n,nodeRef:i,playToast:o},Pt.createElement("div",{id:R,onClick:d,"data-in":X,className:de,...r,style:_,ref:i},Pt.createElement("div",{...X&&{role:N},className:wi(p)?p({type:h}):Oa("Toastify__toast-body",p),style:S},ce!=null&&Pt.createElement("div",{className:Oa("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ie})},ce),Pt.createElement("div",null,u)),ee,Pt.createElement(aD,{...O&&!z?{key:`pb-${O}`}:{},rtl:k,theme:re,delay:f,isRunning:e,isIn:X,closeToast:g,hide:m,type:h,style:C,className:x,controlledProgress:z,progress:I||0})))},mh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},cD=ph(mh("bounce",!0));ph(mh("slide",!0));ph(mh("zoom"));const Ey=ph(mh("flip")),fD={position:"top-right",transition:cD,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function dD(t){let e={...fD,...t};const n=t.stacked,[i,r]=et.useState(!0),o=et.useRef(null),{getToastToRender:l,isToastActive:u,count:f}=iD(e),{className:d,style:h,rtl:m,containerId:g}=e;function y(w){const _=Oa("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":m});return wi(d)?d({position:w,rtl:m,defaultClassName:_}):Oa(_,cd(d))}function M(){n&&(r(!0),Ot.play())}return lD(()=>{if(n){var w;const _=o.current.querySelectorAll('[data-in="true"]'),p=12,S=(w=e.position)==null?void 0:w.includes("top");let x=0,C=0;Array.from(_).reverse().forEach((O,N)=>{const I=O;I.classList.add("Toastify__toast--stacked"),N>0&&(I.dataset.collapsed=`${i}`),I.dataset.pos||(I.dataset.pos=S?"top":"bot");const k=x*(i?.2:1)+(i?0:p*N);I.style.setProperty("--y",`${S?k:-1*k}px`),I.style.setProperty("--g",`${p}`),I.style.setProperty("--s",""+(1-(i?C:0))),x+=I.offsetHeight,C+=.025})}},[i,f,n]),Pt.createElement("div",{ref:o,className:"Toastify",id:g,onMouseEnter:()=>{n&&(r(!1),Ot.pause())},onMouseLeave:M},l((w,_)=>{const p=_.length?{...h}:{...h,pointerEvents:"none"};return Pt.createElement("div",{className:y(w),style:p,key:`container-${w}`},_.map(S=>{let{content:x,props:C}=S;return Pt.createElement(uD,{...C,stacked:n,collapseAll:M,isIn:u(C.toastId,C.containerId),style:C.style,key:`toast-${C.key}`},x)}))}))}var Hd={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Hd.exports;(function(t,e){(function(){var n,i="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,h="__lodash_placeholder__",m=1,g=2,y=4,M=1,w=2,_=1,p=2,S=4,x=8,C=16,O=32,N=64,I=128,k=256,R=512,T=30,X="...",ie=800,H=16,re=1,ae=2,de=3,ce=1/0,z=9007199254740991,ne=17976931348623157e292,ee=NaN,ge=4294967295,Ce=ge-1,Ze=ge>>>1,Q=[["ary",I],["bind",_],["bindKey",p],["curry",x],["curryRight",C],["flip",R],["partial",O],["partialRight",N],["rearg",k]],he="[object Arguments]",Se="[object Array]",xe="[object AsyncFunction]",$e="[object Boolean]",tt="[object Date]",xt="[object DOMException]",$="[object Error]",st="[object Function]",Ye="[object GeneratorFunction]",wt="[object Map]",je="[object Number]",Ct="[object Null]",D="[object Object]",b="[object Promise]",te="[object Proxy]",ue="[object RegExp]",fe="[object Set]",me="[object String]",Ve="[object Symbol]",_e="[object Undefined]",Oe="[object WeakMap]",qe="[object WeakSet]",ye="[object ArrayBuffer]",be="[object DataView]",Qe="[object Float32Array]",Ie="[object Float64Array]",Ne="[object Int8Array]",ht="[object Int16Array]",pt="[object Int32Array]",Mt="[object Uint8Array]",St="[object Uint8ClampedArray]",Nt="[object Uint16Array]",Fe="[object Uint32Array]",F=/\b__p \+= '';/g,Ee=/\b(__p \+=) '' \+/g,Me=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ze=/&(?:amp|lt|gt|quot|#39);/g,Be=/[&<>"']/g,Dt=RegExp(ze.source),zt=RegExp(Be.source),Wt=/<%-([\s\S]+?)%>/g,En=/<%([\s\S]+?)%>/g,Ut=/<%=([\s\S]+?)%>/g,Pi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Li=/^\w*$/,Cr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ko=/[\\^$.*+?()[\]{}|]/g,ac=RegExp(Ko.source),Sl=/^\s+/,Zo=/\s/,oc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Qo=/\{\n\/\* \[wrapped with (.+)\] \*/,sc=/,? & /,lc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Sh=/[()=,{}\[\]\/\s]/,Mh=/\\(\\)?/g,Eh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,L=/\w*$/,j=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,J=/^\[object .+?Constructor\]$/,Y=/^0o[0-7]+$/i,Ae=/^(?:0|[1-9]\d*)$/,ke=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,He=/($^)/,Ke=/['\n\r\u2028\u2029\\]/g,Je="\\ud800-\\udfff",nt="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",en="\\u20d0-\\u20ff",Un=nt+rt+en,un="\\u2700-\\u27bf",Ii="a-z\\xdf-\\xf6\\xf8-\\xff",Xt="\\xac\\xb1\\xd7\\xf7",ot="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ml="\\u2000-\\u206f",Bt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",El="\\ufe0e\\ufe0f",ua=Xt+ot+Ml+Bt,so="['’]",wn="["+Je+"]",Ki="["+ua+"]",ca="["+Un+"]",Wn="\\d+",wl="["+un+"]",uc="["+Ii+"]",Tl="[^"+Je+ua+Wn+un+Ii+hr+"]",wh="\\ud83c[\\udffb-\\udfff]",ww="(?:"+ca+"|"+wh+")",Ev="[^"+Je+"]",Th="(?:\\ud83c[\\udde6-\\uddff]){2}",Ah="[\\ud800-\\udbff][\\udc00-\\udfff]",Jo="["+hr+"]",wv="\\u200d",Tv="(?:"+uc+"|"+Tl+")",Tw="(?:"+Jo+"|"+Tl+")",Av="(?:"+so+"(?:d|ll|m|re|s|t|ve))?",bv="(?:"+so+"(?:D|LL|M|RE|S|T|VE))?",Cv=ww+"?",Rv="["+El+"]?",Aw="(?:"+wv+"(?:"+[Ev,Th,Ah].join("|")+")"+Rv+Cv+")*",bw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Cw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Pv=Rv+Cv+Aw,Rw="(?:"+[wl,Th,Ah].join("|")+")"+Pv,Pw="(?:"+[Ev+ca+"?",ca,Th,Ah,wn].join("|")+")",Lw=RegExp(so,"g"),Iw=RegExp(ca,"g"),bh=RegExp(wh+"(?="+wh+")|"+Pw+Pv,"g"),Nw=RegExp([Jo+"?"+uc+"+"+Av+"(?="+[Ki,Jo,"$"].join("|")+")",Tw+"+"+bv+"(?="+[Ki,Jo+Tv,"$"].join("|")+")",Jo+"?"+Tv+"+"+Av,Jo+"+"+bv,Cw,bw,Wn,Rw].join("|"),"g"),Dw=RegExp("["+wv+Je+Un+El+"]"),Uw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ow=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Fw=-1,jt={};jt[Qe]=jt[Ie]=jt[Ne]=jt[ht]=jt[pt]=jt[Mt]=jt[St]=jt[Nt]=jt[Fe]=!0,jt[he]=jt[Se]=jt[ye]=jt[$e]=jt[be]=jt[tt]=jt[$]=jt[st]=jt[wt]=jt[je]=jt[D]=jt[ue]=jt[fe]=jt[me]=jt[Oe]=!1;var Ht={};Ht[he]=Ht[Se]=Ht[ye]=Ht[be]=Ht[$e]=Ht[tt]=Ht[Qe]=Ht[Ie]=Ht[Ne]=Ht[ht]=Ht[pt]=Ht[wt]=Ht[je]=Ht[D]=Ht[ue]=Ht[fe]=Ht[me]=Ht[Ve]=Ht[Mt]=Ht[St]=Ht[Nt]=Ht[Fe]=!0,Ht[$]=Ht[st]=Ht[Oe]=!1;var kw={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Hw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Vw=parseFloat,Gw=parseInt,Lv=typeof Hl=="object"&&Hl&&Hl.Object===Object&&Hl,Ww=typeof self=="object"&&self&&self.Object===Object&&self,Rn=Lv||Ww||Function("return this")(),Ch=e&&!e.nodeType&&e,lo=Ch&&!0&&t&&!t.nodeType&&t,Iv=lo&&lo.exports===Ch,Rh=Iv&&Lv.process,Ni=function(){try{var V=lo&&lo.require&&lo.require("util").types;return V||Rh&&Rh.binding&&Rh.binding("util")}catch{}}(),Nv=Ni&&Ni.isArrayBuffer,Dv=Ni&&Ni.isDate,Uv=Ni&&Ni.isMap,Ov=Ni&&Ni.isRegExp,Fv=Ni&&Ni.isSet,kv=Ni&&Ni.isTypedArray;function pi(V,oe,q){switch(q.length){case 0:return V.call(oe);case 1:return V.call(oe,q[0]);case 2:return V.call(oe,q[0],q[1]);case 3:return V.call(oe,q[0],q[1],q[2])}return V.apply(oe,q)}function Xw(V,oe,q,Re){for(var it=-1,Tt=V==null?0:V.length;++it<Tt;){var gn=V[it];oe(Re,gn,q(gn),V)}return Re}function Di(V,oe){for(var q=-1,Re=V==null?0:V.length;++q<Re&&oe(V[q],q,V)!==!1;);return V}function jw(V,oe){for(var q=V==null?0:V.length;q--&&oe(V[q],q,V)!==!1;);return V}function zv(V,oe){for(var q=-1,Re=V==null?0:V.length;++q<Re;)if(!oe(V[q],q,V))return!1;return!0}function fa(V,oe){for(var q=-1,Re=V==null?0:V.length,it=0,Tt=[];++q<Re;){var gn=V[q];oe(gn,q,V)&&(Tt[it++]=gn)}return Tt}function cc(V,oe){var q=V==null?0:V.length;return!!q&&es(V,oe,0)>-1}function Ph(V,oe,q){for(var Re=-1,it=V==null?0:V.length;++Re<it;)if(q(oe,V[Re]))return!0;return!1}function Qt(V,oe){for(var q=-1,Re=V==null?0:V.length,it=Array(Re);++q<Re;)it[q]=oe(V[q],q,V);return it}function da(V,oe){for(var q=-1,Re=oe.length,it=V.length;++q<Re;)V[it+q]=oe[q];return V}function Lh(V,oe,q,Re){var it=-1,Tt=V==null?0:V.length;for(Re&&Tt&&(q=V[++it]);++it<Tt;)q=oe(q,V[it],it,V);return q}function $w(V,oe,q,Re){var it=V==null?0:V.length;for(Re&&it&&(q=V[--it]);it--;)q=oe(q,V[it],it,V);return q}function Ih(V,oe){for(var q=-1,Re=V==null?0:V.length;++q<Re;)if(oe(V[q],q,V))return!0;return!1}var Yw=Nh("length");function qw(V){return V.split("")}function Kw(V){return V.match(lc)||[]}function Bv(V,oe,q){var Re;return q(V,function(it,Tt,gn){if(oe(it,Tt,gn))return Re=Tt,!1}),Re}function fc(V,oe,q,Re){for(var it=V.length,Tt=q+(Re?1:-1);Re?Tt--:++Tt<it;)if(oe(V[Tt],Tt,V))return Tt;return-1}function es(V,oe,q){return oe===oe?lT(V,oe,q):fc(V,Hv,q)}function Zw(V,oe,q,Re){for(var it=q-1,Tt=V.length;++it<Tt;)if(Re(V[it],oe))return it;return-1}function Hv(V){return V!==V}function Vv(V,oe){var q=V==null?0:V.length;return q?Uh(V,oe)/q:ee}function Nh(V){return function(oe){return oe==null?n:oe[V]}}function Dh(V){return function(oe){return V==null?n:V[oe]}}function Gv(V,oe,q,Re,it){return it(V,function(Tt,gn,kt){q=Re?(Re=!1,Tt):oe(q,Tt,gn,kt)}),q}function Qw(V,oe){var q=V.length;for(V.sort(oe);q--;)V[q]=V[q].value;return V}function Uh(V,oe){for(var q,Re=-1,it=V.length;++Re<it;){var Tt=oe(V[Re]);Tt!==n&&(q=q===n?Tt:q+Tt)}return q}function Oh(V,oe){for(var q=-1,Re=Array(V);++q<V;)Re[q]=oe(q);return Re}function Jw(V,oe){return Qt(oe,function(q){return[q,V[q]]})}function Wv(V){return V&&V.slice(0,Yv(V)+1).replace(Sl,"")}function mi(V){return function(oe){return V(oe)}}function Fh(V,oe){return Qt(oe,function(q){return V[q]})}function Al(V,oe){return V.has(oe)}function Xv(V,oe){for(var q=-1,Re=V.length;++q<Re&&es(oe,V[q],0)>-1;);return q}function jv(V,oe){for(var q=V.length;q--&&es(oe,V[q],0)>-1;);return q}function eT(V,oe){for(var q=V.length,Re=0;q--;)V[q]===oe&&++Re;return Re}var tT=Dh(kw),nT=Dh(zw);function iT(V){return"\\"+Hw[V]}function rT(V,oe){return V==null?n:V[oe]}function ts(V){return Dw.test(V)}function aT(V){return Uw.test(V)}function oT(V){for(var oe,q=[];!(oe=V.next()).done;)q.push(oe.value);return q}function kh(V){var oe=-1,q=Array(V.size);return V.forEach(function(Re,it){q[++oe]=[it,Re]}),q}function $v(V,oe){return function(q){return V(oe(q))}}function ha(V,oe){for(var q=-1,Re=V.length,it=0,Tt=[];++q<Re;){var gn=V[q];(gn===oe||gn===h)&&(V[q]=h,Tt[it++]=q)}return Tt}function dc(V){var oe=-1,q=Array(V.size);return V.forEach(function(Re){q[++oe]=Re}),q}function sT(V){var oe=-1,q=Array(V.size);return V.forEach(function(Re){q[++oe]=[Re,Re]}),q}function lT(V,oe,q){for(var Re=q-1,it=V.length;++Re<it;)if(V[Re]===oe)return Re;return-1}function uT(V,oe,q){for(var Re=q+1;Re--;)if(V[Re]===oe)return Re;return Re}function ns(V){return ts(V)?fT(V):Yw(V)}function Zi(V){return ts(V)?dT(V):qw(V)}function Yv(V){for(var oe=V.length;oe--&&Zo.test(V.charAt(oe)););return oe}var cT=Dh(Bw);function fT(V){for(var oe=bh.lastIndex=0;bh.test(V);)++oe;return oe}function dT(V){return V.match(bh)||[]}function hT(V){return V.match(Nw)||[]}var pT=function V(oe){oe=oe==null?Rn:is.defaults(Rn.Object(),oe,is.pick(Rn,Ow));var q=oe.Array,Re=oe.Date,it=oe.Error,Tt=oe.Function,gn=oe.Math,kt=oe.Object,zh=oe.RegExp,mT=oe.String,Ui=oe.TypeError,hc=q.prototype,gT=Tt.prototype,rs=kt.prototype,pc=oe["__core-js_shared__"],mc=gT.toString,Rt=rs.hasOwnProperty,vT=0,qv=function(){var a=/[^.]+$/.exec(pc&&pc.keys&&pc.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),gc=rs.toString,_T=mc.call(kt),xT=Rn._,yT=zh("^"+mc.call(Rt).replace(Ko,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vc=Iv?oe.Buffer:n,pa=oe.Symbol,_c=oe.Uint8Array,Kv=vc?vc.allocUnsafe:n,xc=$v(kt.getPrototypeOf,kt),Zv=kt.create,Qv=rs.propertyIsEnumerable,yc=hc.splice,Jv=pa?pa.isConcatSpreadable:n,bl=pa?pa.iterator:n,uo=pa?pa.toStringTag:n,Sc=function(){try{var a=mo(kt,"defineProperty");return a({},"",{}),a}catch{}}(),ST=oe.clearTimeout!==Rn.clearTimeout&&oe.clearTimeout,MT=Re&&Re.now!==Rn.Date.now&&Re.now,ET=oe.setTimeout!==Rn.setTimeout&&oe.setTimeout,Mc=gn.ceil,Ec=gn.floor,Bh=kt.getOwnPropertySymbols,wT=vc?vc.isBuffer:n,e_=oe.isFinite,TT=hc.join,AT=$v(kt.keys,kt),vn=gn.max,On=gn.min,bT=Re.now,CT=oe.parseInt,t_=gn.random,RT=hc.reverse,Hh=mo(oe,"DataView"),Cl=mo(oe,"Map"),Vh=mo(oe,"Promise"),as=mo(oe,"Set"),Rl=mo(oe,"WeakMap"),Pl=mo(kt,"create"),wc=Rl&&new Rl,os={},PT=go(Hh),LT=go(Cl),IT=go(Vh),NT=go(as),DT=go(Rl),Tc=pa?pa.prototype:n,Ll=Tc?Tc.valueOf:n,n_=Tc?Tc.toString:n;function A(a){if(on(a)&&!at(a)&&!(a instanceof vt)){if(a instanceof Oi)return a;if(Rt.call(a,"__wrapped__"))return i1(a)}return new Oi(a)}var ss=function(){function a(){}return function(s){if(!tn(s))return{};if(Zv)return Zv(s);a.prototype=s;var c=new a;return a.prototype=n,c}}();function Ac(){}function Oi(a,s){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}A.templateSettings={escape:Wt,evaluate:En,interpolate:Ut,variable:"",imports:{_:A}},A.prototype=Ac.prototype,A.prototype.constructor=A,Oi.prototype=ss(Ac.prototype),Oi.prototype.constructor=Oi;function vt(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function UT(){var a=new vt(this.__wrapped__);return a.__actions__=ti(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=ti(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=ti(this.__views__),a}function OT(){if(this.__filtered__){var a=new vt(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function FT(){var a=this.__wrapped__.value(),s=this.__dir__,c=at(a),v=s<0,E=c?a.length:0,P=q3(0,E,this.__views__),U=P.start,B=P.end,W=B-U,se=v?B:U-1,le=this.__iteratees__,pe=le.length,we=0,De=On(W,this.__takeCount__);if(!c||!v&&E==W&&De==W)return A_(a,this.__actions__);var We=[];e:for(;W--&&we<De;){se+=s;for(var ut=-1,Xe=a[se];++ut<pe;){var mt=le[ut],yt=mt.iteratee,_i=mt.type,$n=yt(Xe);if(_i==ae)Xe=$n;else if(!$n){if(_i==re)continue e;break e}}We[we++]=Xe}return We}vt.prototype=ss(Ac.prototype),vt.prototype.constructor=vt;function co(a){var s=-1,c=a==null?0:a.length;for(this.clear();++s<c;){var v=a[s];this.set(v[0],v[1])}}function kT(){this.__data__=Pl?Pl(null):{},this.size=0}function zT(a){var s=this.has(a)&&delete this.__data__[a];return this.size-=s?1:0,s}function BT(a){var s=this.__data__;if(Pl){var c=s[a];return c===f?n:c}return Rt.call(s,a)?s[a]:n}function HT(a){var s=this.__data__;return Pl?s[a]!==n:Rt.call(s,a)}function VT(a,s){var c=this.__data__;return this.size+=this.has(a)?0:1,c[a]=Pl&&s===n?f:s,this}co.prototype.clear=kT,co.prototype.delete=zT,co.prototype.get=BT,co.prototype.has=HT,co.prototype.set=VT;function Rr(a){var s=-1,c=a==null?0:a.length;for(this.clear();++s<c;){var v=a[s];this.set(v[0],v[1])}}function GT(){this.__data__=[],this.size=0}function WT(a){var s=this.__data__,c=bc(s,a);if(c<0)return!1;var v=s.length-1;return c==v?s.pop():yc.call(s,c,1),--this.size,!0}function XT(a){var s=this.__data__,c=bc(s,a);return c<0?n:s[c][1]}function jT(a){return bc(this.__data__,a)>-1}function $T(a,s){var c=this.__data__,v=bc(c,a);return v<0?(++this.size,c.push([a,s])):c[v][1]=s,this}Rr.prototype.clear=GT,Rr.prototype.delete=WT,Rr.prototype.get=XT,Rr.prototype.has=jT,Rr.prototype.set=$T;function Pr(a){var s=-1,c=a==null?0:a.length;for(this.clear();++s<c;){var v=a[s];this.set(v[0],v[1])}}function YT(){this.size=0,this.__data__={hash:new co,map:new(Cl||Rr),string:new co}}function qT(a){var s=zc(this,a).delete(a);return this.size-=s?1:0,s}function KT(a){return zc(this,a).get(a)}function ZT(a){return zc(this,a).has(a)}function QT(a,s){var c=zc(this,a),v=c.size;return c.set(a,s),this.size+=c.size==v?0:1,this}Pr.prototype.clear=YT,Pr.prototype.delete=qT,Pr.prototype.get=KT,Pr.prototype.has=ZT,Pr.prototype.set=QT;function fo(a){var s=-1,c=a==null?0:a.length;for(this.__data__=new Pr;++s<c;)this.add(a[s])}function JT(a){return this.__data__.set(a,f),this}function e3(a){return this.__data__.has(a)}fo.prototype.add=fo.prototype.push=JT,fo.prototype.has=e3;function Qi(a){var s=this.__data__=new Rr(a);this.size=s.size}function t3(){this.__data__=new Rr,this.size=0}function n3(a){var s=this.__data__,c=s.delete(a);return this.size=s.size,c}function i3(a){return this.__data__.get(a)}function r3(a){return this.__data__.has(a)}function a3(a,s){var c=this.__data__;if(c instanceof Rr){var v=c.__data__;if(!Cl||v.length<r-1)return v.push([a,s]),this.size=++c.size,this;c=this.__data__=new Pr(v)}return c.set(a,s),this.size=c.size,this}Qi.prototype.clear=t3,Qi.prototype.delete=n3,Qi.prototype.get=i3,Qi.prototype.has=r3,Qi.prototype.set=a3;function i_(a,s){var c=at(a),v=!c&&vo(a),E=!c&&!v&&xa(a),P=!c&&!v&&!E&&fs(a),U=c||v||E||P,B=U?Oh(a.length,mT):[],W=B.length;for(var se in a)(s||Rt.call(a,se))&&!(U&&(se=="length"||E&&(se=="offset"||se=="parent")||P&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Dr(se,W)))&&B.push(se);return B}function r_(a){var s=a.length;return s?a[Jh(0,s-1)]:n}function o3(a,s){return Bc(ti(a),ho(s,0,a.length))}function s3(a){return Bc(ti(a))}function Gh(a,s,c){(c!==n&&!Ji(a[s],c)||c===n&&!(s in a))&&Lr(a,s,c)}function Il(a,s,c){var v=a[s];(!(Rt.call(a,s)&&Ji(v,c))||c===n&&!(s in a))&&Lr(a,s,c)}function bc(a,s){for(var c=a.length;c--;)if(Ji(a[c][0],s))return c;return-1}function l3(a,s,c,v){return ma(a,function(E,P,U){s(v,E,c(E),U)}),v}function a_(a,s){return a&&mr(s,Tn(s),a)}function u3(a,s){return a&&mr(s,ii(s),a)}function Lr(a,s,c){s=="__proto__"&&Sc?Sc(a,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):a[s]=c}function Wh(a,s){for(var c=-1,v=s.length,E=q(v),P=a==null;++c<v;)E[c]=P?n:wp(a,s[c]);return E}function ho(a,s,c){return a===a&&(c!==n&&(a=a<=c?a:c),s!==n&&(a=a>=s?a:s)),a}function Fi(a,s,c,v,E,P){var U,B=s&m,W=s&g,se=s&y;if(c&&(U=E?c(a,v,E,P):c(a)),U!==n)return U;if(!tn(a))return a;var le=at(a);if(le){if(U=Z3(a),!B)return ti(a,U)}else{var pe=Fn(a),we=pe==st||pe==Ye;if(xa(a))return R_(a,B);if(pe==D||pe==he||we&&!E){if(U=W||we?{}:Y_(a),!B)return W?B3(a,u3(U,a)):z3(a,a_(U,a))}else{if(!Ht[pe])return E?a:{};U=Q3(a,pe,B)}}P||(P=new Qi);var De=P.get(a);if(De)return De;P.set(a,U),E1(a)?a.forEach(function(Xe){U.add(Fi(Xe,s,c,Xe,a,P))}):S1(a)&&a.forEach(function(Xe,mt){U.set(mt,Fi(Xe,s,c,mt,a,P))});var We=se?W?cp:up:W?ii:Tn,ut=le?n:We(a);return Di(ut||a,function(Xe,mt){ut&&(mt=Xe,Xe=a[mt]),Il(U,mt,Fi(Xe,s,c,mt,a,P))}),U}function c3(a){var s=Tn(a);return function(c){return o_(c,a,s)}}function o_(a,s,c){var v=c.length;if(a==null)return!v;for(a=kt(a);v--;){var E=c[v],P=s[E],U=a[E];if(U===n&&!(E in a)||!P(U))return!1}return!0}function s_(a,s,c){if(typeof a!="function")throw new Ui(l);return zl(function(){a.apply(n,c)},s)}function Nl(a,s,c,v){var E=-1,P=cc,U=!0,B=a.length,W=[],se=s.length;if(!B)return W;c&&(s=Qt(s,mi(c))),v?(P=Ph,U=!1):s.length>=r&&(P=Al,U=!1,s=new fo(s));e:for(;++E<B;){var le=a[E],pe=c==null?le:c(le);if(le=v||le!==0?le:0,U&&pe===pe){for(var we=se;we--;)if(s[we]===pe)continue e;W.push(le)}else P(s,pe,v)||W.push(le)}return W}var ma=D_(pr),l_=D_(jh,!0);function f3(a,s){var c=!0;return ma(a,function(v,E,P){return c=!!s(v,E,P),c}),c}function Cc(a,s,c){for(var v=-1,E=a.length;++v<E;){var P=a[v],U=s(P);if(U!=null&&(B===n?U===U&&!vi(U):c(U,B)))var B=U,W=P}return W}function d3(a,s,c,v){var E=a.length;for(c=lt(c),c<0&&(c=-c>E?0:E+c),v=v===n||v>E?E:lt(v),v<0&&(v+=E),v=c>v?0:T1(v);c<v;)a[c++]=s;return a}function u_(a,s){var c=[];return ma(a,function(v,E,P){s(v,E,P)&&c.push(v)}),c}function Pn(a,s,c,v,E){var P=-1,U=a.length;for(c||(c=eA),E||(E=[]);++P<U;){var B=a[P];s>0&&c(B)?s>1?Pn(B,s-1,c,v,E):da(E,B):v||(E[E.length]=B)}return E}var Xh=U_(),c_=U_(!0);function pr(a,s){return a&&Xh(a,s,Tn)}function jh(a,s){return a&&c_(a,s,Tn)}function Rc(a,s){return fa(s,function(c){return Ur(a[c])})}function po(a,s){s=va(s,a);for(var c=0,v=s.length;a!=null&&c<v;)a=a[gr(s[c++])];return c&&c==v?a:n}function f_(a,s,c){var v=s(a);return at(a)?v:da(v,c(a))}function Xn(a){return a==null?a===n?_e:Ct:uo&&uo in kt(a)?Y3(a):sA(a)}function $h(a,s){return a>s}function h3(a,s){return a!=null&&Rt.call(a,s)}function p3(a,s){return a!=null&&s in kt(a)}function m3(a,s,c){return a>=On(s,c)&&a<vn(s,c)}function Yh(a,s,c){for(var v=c?Ph:cc,E=a[0].length,P=a.length,U=P,B=q(P),W=1/0,se=[];U--;){var le=a[U];U&&s&&(le=Qt(le,mi(s))),W=On(le.length,W),B[U]=!c&&(s||E>=120&&le.length>=120)?new fo(U&&le):n}le=a[0];var pe=-1,we=B[0];e:for(;++pe<E&&se.length<W;){var De=le[pe],We=s?s(De):De;if(De=c||De!==0?De:0,!(we?Al(we,We):v(se,We,c))){for(U=P;--U;){var ut=B[U];if(!(ut?Al(ut,We):v(a[U],We,c)))continue e}we&&we.push(We),se.push(De)}}return se}function g3(a,s,c,v){return pr(a,function(E,P,U){s(v,c(E),P,U)}),v}function Dl(a,s,c){s=va(s,a),a=Q_(a,s);var v=a==null?a:a[gr(zi(s))];return v==null?n:pi(v,a,c)}function d_(a){return on(a)&&Xn(a)==he}function v3(a){return on(a)&&Xn(a)==ye}function _3(a){return on(a)&&Xn(a)==tt}function Ul(a,s,c,v,E){return a===s?!0:a==null||s==null||!on(a)&&!on(s)?a!==a&&s!==s:x3(a,s,c,v,Ul,E)}function x3(a,s,c,v,E,P){var U=at(a),B=at(s),W=U?Se:Fn(a),se=B?Se:Fn(s);W=W==he?D:W,se=se==he?D:se;var le=W==D,pe=se==D,we=W==se;if(we&&xa(a)){if(!xa(s))return!1;U=!0,le=!1}if(we&&!le)return P||(P=new Qi),U||fs(a)?X_(a,s,c,v,E,P):j3(a,s,W,c,v,E,P);if(!(c&M)){var De=le&&Rt.call(a,"__wrapped__"),We=pe&&Rt.call(s,"__wrapped__");if(De||We){var ut=De?a.value():a,Xe=We?s.value():s;return P||(P=new Qi),E(ut,Xe,c,v,P)}}return we?(P||(P=new Qi),$3(a,s,c,v,E,P)):!1}function y3(a){return on(a)&&Fn(a)==wt}function qh(a,s,c,v){var E=c.length,P=E,U=!v;if(a==null)return!P;for(a=kt(a);E--;){var B=c[E];if(U&&B[2]?B[1]!==a[B[0]]:!(B[0]in a))return!1}for(;++E<P;){B=c[E];var W=B[0],se=a[W],le=B[1];if(U&&B[2]){if(se===n&&!(W in a))return!1}else{var pe=new Qi;if(v)var we=v(se,le,W,a,s,pe);if(!(we===n?Ul(le,se,M|w,v,pe):we))return!1}}return!0}function h_(a){if(!tn(a)||nA(a))return!1;var s=Ur(a)?yT:J;return s.test(go(a))}function S3(a){return on(a)&&Xn(a)==ue}function M3(a){return on(a)&&Fn(a)==fe}function E3(a){return on(a)&&jc(a.length)&&!!jt[Xn(a)]}function p_(a){return typeof a=="function"?a:a==null?ri:typeof a=="object"?at(a)?v_(a[0],a[1]):g_(a):O1(a)}function Kh(a){if(!kl(a))return AT(a);var s=[];for(var c in kt(a))Rt.call(a,c)&&c!="constructor"&&s.push(c);return s}function w3(a){if(!tn(a))return oA(a);var s=kl(a),c=[];for(var v in a)v=="constructor"&&(s||!Rt.call(a,v))||c.push(v);return c}function Zh(a,s){return a<s}function m_(a,s){var c=-1,v=ni(a)?q(a.length):[];return ma(a,function(E,P,U){v[++c]=s(E,P,U)}),v}function g_(a){var s=dp(a);return s.length==1&&s[0][2]?K_(s[0][0],s[0][1]):function(c){return c===a||qh(c,a,s)}}function v_(a,s){return pp(a)&&q_(s)?K_(gr(a),s):function(c){var v=wp(c,a);return v===n&&v===s?Tp(c,a):Ul(s,v,M|w)}}function Pc(a,s,c,v,E){a!==s&&Xh(s,function(P,U){if(E||(E=new Qi),tn(P))T3(a,s,U,c,Pc,v,E);else{var B=v?v(gp(a,U),P,U+"",a,s,E):n;B===n&&(B=P),Gh(a,U,B)}},ii)}function T3(a,s,c,v,E,P,U){var B=gp(a,c),W=gp(s,c),se=U.get(W);if(se){Gh(a,c,se);return}var le=P?P(B,W,c+"",a,s,U):n,pe=le===n;if(pe){var we=at(W),De=!we&&xa(W),We=!we&&!De&&fs(W);le=W,we||De||We?at(B)?le=B:cn(B)?le=ti(B):De?(pe=!1,le=R_(W,!0)):We?(pe=!1,le=P_(W,!0)):le=[]:Bl(W)||vo(W)?(le=B,vo(B)?le=A1(B):(!tn(B)||Ur(B))&&(le=Y_(W))):pe=!1}pe&&(U.set(W,le),E(le,W,v,P,U),U.delete(W)),Gh(a,c,le)}function __(a,s){var c=a.length;if(c)return s+=s<0?c:0,Dr(s,c)?a[s]:n}function x_(a,s,c){s.length?s=Qt(s,function(P){return at(P)?function(U){return po(U,P.length===1?P[0]:P)}:P}):s=[ri];var v=-1;s=Qt(s,mi(Ge()));var E=m_(a,function(P,U,B){var W=Qt(s,function(se){return se(P)});return{criteria:W,index:++v,value:P}});return Qw(E,function(P,U){return k3(P,U,c)})}function A3(a,s){return y_(a,s,function(c,v){return Tp(a,v)})}function y_(a,s,c){for(var v=-1,E=s.length,P={};++v<E;){var U=s[v],B=po(a,U);c(B,U)&&Ol(P,va(U,a),B)}return P}function b3(a){return function(s){return po(s,a)}}function Qh(a,s,c,v){var E=v?Zw:es,P=-1,U=s.length,B=a;for(a===s&&(s=ti(s)),c&&(B=Qt(a,mi(c)));++P<U;)for(var W=0,se=s[P],le=c?c(se):se;(W=E(B,le,W,v))>-1;)B!==a&&yc.call(B,W,1),yc.call(a,W,1);return a}function S_(a,s){for(var c=a?s.length:0,v=c-1;c--;){var E=s[c];if(c==v||E!==P){var P=E;Dr(E)?yc.call(a,E,1):np(a,E)}}return a}function Jh(a,s){return a+Ec(t_()*(s-a+1))}function C3(a,s,c,v){for(var E=-1,P=vn(Mc((s-a)/(c||1)),0),U=q(P);P--;)U[v?P:++E]=a,a+=c;return U}function ep(a,s){var c="";if(!a||s<1||s>z)return c;do s%2&&(c+=a),s=Ec(s/2),s&&(a+=a);while(s);return c}function dt(a,s){return vp(Z_(a,s,ri),a+"")}function R3(a){return r_(ds(a))}function P3(a,s){var c=ds(a);return Bc(c,ho(s,0,c.length))}function Ol(a,s,c,v){if(!tn(a))return a;s=va(s,a);for(var E=-1,P=s.length,U=P-1,B=a;B!=null&&++E<P;){var W=gr(s[E]),se=c;if(W==="__proto__"||W==="constructor"||W==="prototype")return a;if(E!=U){var le=B[W];se=v?v(le,W,B):n,se===n&&(se=tn(le)?le:Dr(s[E+1])?[]:{})}Il(B,W,se),B=B[W]}return a}var M_=wc?function(a,s){return wc.set(a,s),a}:ri,L3=Sc?function(a,s){return Sc(a,"toString",{configurable:!0,enumerable:!1,value:bp(s),writable:!0})}:ri;function I3(a){return Bc(ds(a))}function ki(a,s,c){var v=-1,E=a.length;s<0&&(s=-s>E?0:E+s),c=c>E?E:c,c<0&&(c+=E),E=s>c?0:c-s>>>0,s>>>=0;for(var P=q(E);++v<E;)P[v]=a[v+s];return P}function N3(a,s){var c;return ma(a,function(v,E,P){return c=s(v,E,P),!c}),!!c}function Lc(a,s,c){var v=0,E=a==null?v:a.length;if(typeof s=="number"&&s===s&&E<=Ze){for(;v<E;){var P=v+E>>>1,U=a[P];U!==null&&!vi(U)&&(c?U<=s:U<s)?v=P+1:E=P}return E}return tp(a,s,ri,c)}function tp(a,s,c,v){var E=0,P=a==null?0:a.length;if(P===0)return 0;s=c(s);for(var U=s!==s,B=s===null,W=vi(s),se=s===n;E<P;){var le=Ec((E+P)/2),pe=c(a[le]),we=pe!==n,De=pe===null,We=pe===pe,ut=vi(pe);if(U)var Xe=v||We;else se?Xe=We&&(v||we):B?Xe=We&&we&&(v||!De):W?Xe=We&&we&&!De&&(v||!ut):De||ut?Xe=!1:Xe=v?pe<=s:pe<s;Xe?E=le+1:P=le}return On(P,Ce)}function E_(a,s){for(var c=-1,v=a.length,E=0,P=[];++c<v;){var U=a[c],B=s?s(U):U;if(!c||!Ji(B,W)){var W=B;P[E++]=U===0?0:U}}return P}function w_(a){return typeof a=="number"?a:vi(a)?ee:+a}function gi(a){if(typeof a=="string")return a;if(at(a))return Qt(a,gi)+"";if(vi(a))return n_?n_.call(a):"";var s=a+"";return s=="0"&&1/a==-ce?"-0":s}function ga(a,s,c){var v=-1,E=cc,P=a.length,U=!0,B=[],W=B;if(c)U=!1,E=Ph;else if(P>=r){var se=s?null:W3(a);if(se)return dc(se);U=!1,E=Al,W=new fo}else W=s?[]:B;e:for(;++v<P;){var le=a[v],pe=s?s(le):le;if(le=c||le!==0?le:0,U&&pe===pe){for(var we=W.length;we--;)if(W[we]===pe)continue e;s&&W.push(pe),B.push(le)}else E(W,pe,c)||(W!==B&&W.push(pe),B.push(le))}return B}function np(a,s){return s=va(s,a),a=Q_(a,s),a==null||delete a[gr(zi(s))]}function T_(a,s,c,v){return Ol(a,s,c(po(a,s)),v)}function Ic(a,s,c,v){for(var E=a.length,P=v?E:-1;(v?P--:++P<E)&&s(a[P],P,a););return c?ki(a,v?0:P,v?P+1:E):ki(a,v?P+1:0,v?E:P)}function A_(a,s){var c=a;return c instanceof vt&&(c=c.value()),Lh(s,function(v,E){return E.func.apply(E.thisArg,da([v],E.args))},c)}function ip(a,s,c){var v=a.length;if(v<2)return v?ga(a[0]):[];for(var E=-1,P=q(v);++E<v;)for(var U=a[E],B=-1;++B<v;)B!=E&&(P[E]=Nl(P[E]||U,a[B],s,c));return ga(Pn(P,1),s,c)}function b_(a,s,c){for(var v=-1,E=a.length,P=s.length,U={};++v<E;){var B=v<P?s[v]:n;c(U,a[v],B)}return U}function rp(a){return cn(a)?a:[]}function ap(a){return typeof a=="function"?a:ri}function va(a,s){return at(a)?a:pp(a,s)?[a]:n1(bt(a))}var D3=dt;function _a(a,s,c){var v=a.length;return c=c===n?v:c,!s&&c>=v?a:ki(a,s,c)}var C_=ST||function(a){return Rn.clearTimeout(a)};function R_(a,s){if(s)return a.slice();var c=a.length,v=Kv?Kv(c):new a.constructor(c);return a.copy(v),v}function op(a){var s=new a.constructor(a.byteLength);return new _c(s).set(new _c(a)),s}function U3(a,s){var c=s?op(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.byteLength)}function O3(a){var s=new a.constructor(a.source,L.exec(a));return s.lastIndex=a.lastIndex,s}function F3(a){return Ll?kt(Ll.call(a)):{}}function P_(a,s){var c=s?op(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.length)}function L_(a,s){if(a!==s){var c=a!==n,v=a===null,E=a===a,P=vi(a),U=s!==n,B=s===null,W=s===s,se=vi(s);if(!B&&!se&&!P&&a>s||P&&U&&W&&!B&&!se||v&&U&&W||!c&&W||!E)return 1;if(!v&&!P&&!se&&a<s||se&&c&&E&&!v&&!P||B&&c&&E||!U&&E||!W)return-1}return 0}function k3(a,s,c){for(var v=-1,E=a.criteria,P=s.criteria,U=E.length,B=c.length;++v<U;){var W=L_(E[v],P[v]);if(W){if(v>=B)return W;var se=c[v];return W*(se=="desc"?-1:1)}}return a.index-s.index}function I_(a,s,c,v){for(var E=-1,P=a.length,U=c.length,B=-1,W=s.length,se=vn(P-U,0),le=q(W+se),pe=!v;++B<W;)le[B]=s[B];for(;++E<U;)(pe||E<P)&&(le[c[E]]=a[E]);for(;se--;)le[B++]=a[E++];return le}function N_(a,s,c,v){for(var E=-1,P=a.length,U=-1,B=c.length,W=-1,se=s.length,le=vn(P-B,0),pe=q(le+se),we=!v;++E<le;)pe[E]=a[E];for(var De=E;++W<se;)pe[De+W]=s[W];for(;++U<B;)(we||E<P)&&(pe[De+c[U]]=a[E++]);return pe}function ti(a,s){var c=-1,v=a.length;for(s||(s=q(v));++c<v;)s[c]=a[c];return s}function mr(a,s,c,v){var E=!c;c||(c={});for(var P=-1,U=s.length;++P<U;){var B=s[P],W=v?v(c[B],a[B],B,c,a):n;W===n&&(W=a[B]),E?Lr(c,B,W):Il(c,B,W)}return c}function z3(a,s){return mr(a,hp(a),s)}function B3(a,s){return mr(a,j_(a),s)}function Nc(a,s){return function(c,v){var E=at(c)?Xw:l3,P=s?s():{};return E(c,a,Ge(v,2),P)}}function ls(a){return dt(function(s,c){var v=-1,E=c.length,P=E>1?c[E-1]:n,U=E>2?c[2]:n;for(P=a.length>3&&typeof P=="function"?(E--,P):n,U&&jn(c[0],c[1],U)&&(P=E<3?n:P,E=1),s=kt(s);++v<E;){var B=c[v];B&&a(s,B,v,P)}return s})}function D_(a,s){return function(c,v){if(c==null)return c;if(!ni(c))return a(c,v);for(var E=c.length,P=s?E:-1,U=kt(c);(s?P--:++P<E)&&v(U[P],P,U)!==!1;);return c}}function U_(a){return function(s,c,v){for(var E=-1,P=kt(s),U=v(s),B=U.length;B--;){var W=U[a?B:++E];if(c(P[W],W,P)===!1)break}return s}}function H3(a,s,c){var v=s&_,E=Fl(a);function P(){var U=this&&this!==Rn&&this instanceof P?E:a;return U.apply(v?c:this,arguments)}return P}function O_(a){return function(s){s=bt(s);var c=ts(s)?Zi(s):n,v=c?c[0]:s.charAt(0),E=c?_a(c,1).join(""):s.slice(1);return v[a]()+E}}function us(a){return function(s){return Lh(D1(N1(s).replace(Lw,"")),a,"")}}function Fl(a){return function(){var s=arguments;switch(s.length){case 0:return new a;case 1:return new a(s[0]);case 2:return new a(s[0],s[1]);case 3:return new a(s[0],s[1],s[2]);case 4:return new a(s[0],s[1],s[2],s[3]);case 5:return new a(s[0],s[1],s[2],s[3],s[4]);case 6:return new a(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new a(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=ss(a.prototype),v=a.apply(c,s);return tn(v)?v:c}}function V3(a,s,c){var v=Fl(a);function E(){for(var P=arguments.length,U=q(P),B=P,W=cs(E);B--;)U[B]=arguments[B];var se=P<3&&U[0]!==W&&U[P-1]!==W?[]:ha(U,W);if(P-=se.length,P<c)return H_(a,s,Dc,E.placeholder,n,U,se,n,n,c-P);var le=this&&this!==Rn&&this instanceof E?v:a;return pi(le,this,U)}return E}function F_(a){return function(s,c,v){var E=kt(s);if(!ni(s)){var P=Ge(c,3);s=Tn(s),c=function(B){return P(E[B],B,E)}}var U=a(s,c,v);return U>-1?E[P?s[U]:U]:n}}function k_(a){return Nr(function(s){var c=s.length,v=c,E=Oi.prototype.thru;for(a&&s.reverse();v--;){var P=s[v];if(typeof P!="function")throw new Ui(l);if(E&&!U&&kc(P)=="wrapper")var U=new Oi([],!0)}for(v=U?v:c;++v<c;){P=s[v];var B=kc(P),W=B=="wrapper"?fp(P):n;W&&mp(W[0])&&W[1]==(I|x|O|k)&&!W[4].length&&W[9]==1?U=U[kc(W[0])].apply(U,W[3]):U=P.length==1&&mp(P)?U[B]():U.thru(P)}return function(){var se=arguments,le=se[0];if(U&&se.length==1&&at(le))return U.plant(le).value();for(var pe=0,we=c?s[pe].apply(this,se):le;++pe<c;)we=s[pe].call(this,we);return we}})}function Dc(a,s,c,v,E,P,U,B,W,se){var le=s&I,pe=s&_,we=s&p,De=s&(x|C),We=s&R,ut=we?n:Fl(a);function Xe(){for(var mt=arguments.length,yt=q(mt),_i=mt;_i--;)yt[_i]=arguments[_i];if(De)var $n=cs(Xe),xi=eT(yt,$n);if(v&&(yt=I_(yt,v,E,De)),P&&(yt=N_(yt,P,U,De)),mt-=xi,De&&mt<se){var fn=ha(yt,$n);return H_(a,s,Dc,Xe.placeholder,c,yt,fn,B,W,se-mt)}var er=pe?c:this,Fr=we?er[a]:a;return mt=yt.length,B?yt=lA(yt,B):We&&mt>1&&yt.reverse(),le&&W<mt&&(yt.length=W),this&&this!==Rn&&this instanceof Xe&&(Fr=ut||Fl(Fr)),Fr.apply(er,yt)}return Xe}function z_(a,s){return function(c,v){return g3(c,a,s(v),{})}}function Uc(a,s){return function(c,v){var E;if(c===n&&v===n)return s;if(c!==n&&(E=c),v!==n){if(E===n)return v;typeof c=="string"||typeof v=="string"?(c=gi(c),v=gi(v)):(c=w_(c),v=w_(v)),E=a(c,v)}return E}}function sp(a){return Nr(function(s){return s=Qt(s,mi(Ge())),dt(function(c){var v=this;return a(s,function(E){return pi(E,v,c)})})})}function Oc(a,s){s=s===n?" ":gi(s);var c=s.length;if(c<2)return c?ep(s,a):s;var v=ep(s,Mc(a/ns(s)));return ts(s)?_a(Zi(v),0,a).join(""):v.slice(0,a)}function G3(a,s,c,v){var E=s&_,P=Fl(a);function U(){for(var B=-1,W=arguments.length,se=-1,le=v.length,pe=q(le+W),we=this&&this!==Rn&&this instanceof U?P:a;++se<le;)pe[se]=v[se];for(;W--;)pe[se++]=arguments[++B];return pi(we,E?c:this,pe)}return U}function B_(a){return function(s,c,v){return v&&typeof v!="number"&&jn(s,c,v)&&(c=v=n),s=Or(s),c===n?(c=s,s=0):c=Or(c),v=v===n?s<c?1:-1:Or(v),C3(s,c,v,a)}}function Fc(a){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=Bi(s),c=Bi(c)),a(s,c)}}function H_(a,s,c,v,E,P,U,B,W,se){var le=s&x,pe=le?U:n,we=le?n:U,De=le?P:n,We=le?n:P;s|=le?O:N,s&=~(le?N:O),s&S||(s&=~(_|p));var ut=[a,s,E,De,pe,We,we,B,W,se],Xe=c.apply(n,ut);return mp(a)&&J_(Xe,ut),Xe.placeholder=v,e1(Xe,a,s)}function lp(a){var s=gn[a];return function(c,v){if(c=Bi(c),v=v==null?0:On(lt(v),292),v&&e_(c)){var E=(bt(c)+"e").split("e"),P=s(E[0]+"e"+(+E[1]+v));return E=(bt(P)+"e").split("e"),+(E[0]+"e"+(+E[1]-v))}return s(c)}}var W3=as&&1/dc(new as([,-0]))[1]==ce?function(a){return new as(a)}:Pp;function V_(a){return function(s){var c=Fn(s);return c==wt?kh(s):c==fe?sT(s):Jw(s,a(s))}}function Ir(a,s,c,v,E,P,U,B){var W=s&p;if(!W&&typeof a!="function")throw new Ui(l);var se=v?v.length:0;if(se||(s&=~(O|N),v=E=n),U=U===n?U:vn(lt(U),0),B=B===n?B:lt(B),se-=E?E.length:0,s&N){var le=v,pe=E;v=E=n}var we=W?n:fp(a),De=[a,s,c,v,E,le,pe,P,U,B];if(we&&aA(De,we),a=De[0],s=De[1],c=De[2],v=De[3],E=De[4],B=De[9]=De[9]===n?W?0:a.length:vn(De[9]-se,0),!B&&s&(x|C)&&(s&=~(x|C)),!s||s==_)var We=H3(a,s,c);else s==x||s==C?We=V3(a,s,B):(s==O||s==(_|O))&&!E.length?We=G3(a,s,c,v):We=Dc.apply(n,De);var ut=we?M_:J_;return e1(ut(We,De),a,s)}function G_(a,s,c,v){return a===n||Ji(a,rs[c])&&!Rt.call(v,c)?s:a}function W_(a,s,c,v,E,P){return tn(a)&&tn(s)&&(P.set(s,a),Pc(a,s,n,W_,P),P.delete(s)),a}function X3(a){return Bl(a)?n:a}function X_(a,s,c,v,E,P){var U=c&M,B=a.length,W=s.length;if(B!=W&&!(U&&W>B))return!1;var se=P.get(a),le=P.get(s);if(se&&le)return se==s&&le==a;var pe=-1,we=!0,De=c&w?new fo:n;for(P.set(a,s),P.set(s,a);++pe<B;){var We=a[pe],ut=s[pe];if(v)var Xe=U?v(ut,We,pe,s,a,P):v(We,ut,pe,a,s,P);if(Xe!==n){if(Xe)continue;we=!1;break}if(De){if(!Ih(s,function(mt,yt){if(!Al(De,yt)&&(We===mt||E(We,mt,c,v,P)))return De.push(yt)})){we=!1;break}}else if(!(We===ut||E(We,ut,c,v,P))){we=!1;break}}return P.delete(a),P.delete(s),we}function j3(a,s,c,v,E,P,U){switch(c){case be:if(a.byteLength!=s.byteLength||a.byteOffset!=s.byteOffset)return!1;a=a.buffer,s=s.buffer;case ye:return!(a.byteLength!=s.byteLength||!P(new _c(a),new _c(s)));case $e:case tt:case je:return Ji(+a,+s);case $:return a.name==s.name&&a.message==s.message;case ue:case me:return a==s+"";case wt:var B=kh;case fe:var W=v&M;if(B||(B=dc),a.size!=s.size&&!W)return!1;var se=U.get(a);if(se)return se==s;v|=w,U.set(a,s);var le=X_(B(a),B(s),v,E,P,U);return U.delete(a),le;case Ve:if(Ll)return Ll.call(a)==Ll.call(s)}return!1}function $3(a,s,c,v,E,P){var U=c&M,B=up(a),W=B.length,se=up(s),le=se.length;if(W!=le&&!U)return!1;for(var pe=W;pe--;){var we=B[pe];if(!(U?we in s:Rt.call(s,we)))return!1}var De=P.get(a),We=P.get(s);if(De&&We)return De==s&&We==a;var ut=!0;P.set(a,s),P.set(s,a);for(var Xe=U;++pe<W;){we=B[pe];var mt=a[we],yt=s[we];if(v)var _i=U?v(yt,mt,we,s,a,P):v(mt,yt,we,a,s,P);if(!(_i===n?mt===yt||E(mt,yt,c,v,P):_i)){ut=!1;break}Xe||(Xe=we=="constructor")}if(ut&&!Xe){var $n=a.constructor,xi=s.constructor;$n!=xi&&"constructor"in a&&"constructor"in s&&!(typeof $n=="function"&&$n instanceof $n&&typeof xi=="function"&&xi instanceof xi)&&(ut=!1)}return P.delete(a),P.delete(s),ut}function Nr(a){return vp(Z_(a,n,o1),a+"")}function up(a){return f_(a,Tn,hp)}function cp(a){return f_(a,ii,j_)}var fp=wc?function(a){return wc.get(a)}:Pp;function kc(a){for(var s=a.name+"",c=os[s],v=Rt.call(os,s)?c.length:0;v--;){var E=c[v],P=E.func;if(P==null||P==a)return E.name}return s}function cs(a){var s=Rt.call(A,"placeholder")?A:a;return s.placeholder}function Ge(){var a=A.iteratee||Cp;return a=a===Cp?p_:a,arguments.length?a(arguments[0],arguments[1]):a}function zc(a,s){var c=a.__data__;return tA(s)?c[typeof s=="string"?"string":"hash"]:c.map}function dp(a){for(var s=Tn(a),c=s.length;c--;){var v=s[c],E=a[v];s[c]=[v,E,q_(E)]}return s}function mo(a,s){var c=rT(a,s);return h_(c)?c:n}function Y3(a){var s=Rt.call(a,uo),c=a[uo];try{a[uo]=n;var v=!0}catch{}var E=gc.call(a);return v&&(s?a[uo]=c:delete a[uo]),E}var hp=Bh?function(a){return a==null?[]:(a=kt(a),fa(Bh(a),function(s){return Qv.call(a,s)}))}:Lp,j_=Bh?function(a){for(var s=[];a;)da(s,hp(a)),a=xc(a);return s}:Lp,Fn=Xn;(Hh&&Fn(new Hh(new ArrayBuffer(1)))!=be||Cl&&Fn(new Cl)!=wt||Vh&&Fn(Vh.resolve())!=b||as&&Fn(new as)!=fe||Rl&&Fn(new Rl)!=Oe)&&(Fn=function(a){var s=Xn(a),c=s==D?a.constructor:n,v=c?go(c):"";if(v)switch(v){case PT:return be;case LT:return wt;case IT:return b;case NT:return fe;case DT:return Oe}return s});function q3(a,s,c){for(var v=-1,E=c.length;++v<E;){var P=c[v],U=P.size;switch(P.type){case"drop":a+=U;break;case"dropRight":s-=U;break;case"take":s=On(s,a+U);break;case"takeRight":a=vn(a,s-U);break}}return{start:a,end:s}}function K3(a){var s=a.match(Qo);return s?s[1].split(sc):[]}function $_(a,s,c){s=va(s,a);for(var v=-1,E=s.length,P=!1;++v<E;){var U=gr(s[v]);if(!(P=a!=null&&c(a,U)))break;a=a[U]}return P||++v!=E?P:(E=a==null?0:a.length,!!E&&jc(E)&&Dr(U,E)&&(at(a)||vo(a)))}function Z3(a){var s=a.length,c=new a.constructor(s);return s&&typeof a[0]=="string"&&Rt.call(a,"index")&&(c.index=a.index,c.input=a.input),c}function Y_(a){return typeof a.constructor=="function"&&!kl(a)?ss(xc(a)):{}}function Q3(a,s,c){var v=a.constructor;switch(s){case ye:return op(a);case $e:case tt:return new v(+a);case be:return U3(a,c);case Qe:case Ie:case Ne:case ht:case pt:case Mt:case St:case Nt:case Fe:return P_(a,c);case wt:return new v;case je:case me:return new v(a);case ue:return O3(a);case fe:return new v;case Ve:return F3(a)}}function J3(a,s){var c=s.length;if(!c)return a;var v=c-1;return s[v]=(c>1?"& ":"")+s[v],s=s.join(c>2?", ":" "),a.replace(oc,`{
/* [wrapped with `+s+`] */
`)}function eA(a){return at(a)||vo(a)||!!(Jv&&a&&a[Jv])}function Dr(a,s){var c=typeof a;return s=s??z,!!s&&(c=="number"||c!="symbol"&&Ae.test(a))&&a>-1&&a%1==0&&a<s}function jn(a,s,c){if(!tn(c))return!1;var v=typeof s;return(v=="number"?ni(c)&&Dr(s,c.length):v=="string"&&s in c)?Ji(c[s],a):!1}function pp(a,s){if(at(a))return!1;var c=typeof a;return c=="number"||c=="symbol"||c=="boolean"||a==null||vi(a)?!0:Li.test(a)||!Pi.test(a)||s!=null&&a in kt(s)}function tA(a){var s=typeof a;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?a!=="__proto__":a===null}function mp(a){var s=kc(a),c=A[s];if(typeof c!="function"||!(s in vt.prototype))return!1;if(a===c)return!0;var v=fp(c);return!!v&&a===v[0]}function nA(a){return!!qv&&qv in a}var iA=pc?Ur:Ip;function kl(a){var s=a&&a.constructor,c=typeof s=="function"&&s.prototype||rs;return a===c}function q_(a){return a===a&&!tn(a)}function K_(a,s){return function(c){return c==null?!1:c[a]===s&&(s!==n||a in kt(c))}}function rA(a){var s=Wc(a,function(v){return c.size===d&&c.clear(),v}),c=s.cache;return s}function aA(a,s){var c=a[1],v=s[1],E=c|v,P=E<(_|p|I),U=v==I&&c==x||v==I&&c==k&&a[7].length<=s[8]||v==(I|k)&&s[7].length<=s[8]&&c==x;if(!(P||U))return a;v&_&&(a[2]=s[2],E|=c&_?0:S);var B=s[3];if(B){var W=a[3];a[3]=W?I_(W,B,s[4]):B,a[4]=W?ha(a[3],h):s[4]}return B=s[5],B&&(W=a[5],a[5]=W?N_(W,B,s[6]):B,a[6]=W?ha(a[5],h):s[6]),B=s[7],B&&(a[7]=B),v&I&&(a[8]=a[8]==null?s[8]:On(a[8],s[8])),a[9]==null&&(a[9]=s[9]),a[0]=s[0],a[1]=E,a}function oA(a){var s=[];if(a!=null)for(var c in kt(a))s.push(c);return s}function sA(a){return gc.call(a)}function Z_(a,s,c){return s=vn(s===n?a.length-1:s,0),function(){for(var v=arguments,E=-1,P=vn(v.length-s,0),U=q(P);++E<P;)U[E]=v[s+E];E=-1;for(var B=q(s+1);++E<s;)B[E]=v[E];return B[s]=c(U),pi(a,this,B)}}function Q_(a,s){return s.length<2?a:po(a,ki(s,0,-1))}function lA(a,s){for(var c=a.length,v=On(s.length,c),E=ti(a);v--;){var P=s[v];a[v]=Dr(P,c)?E[P]:n}return a}function gp(a,s){if(!(s==="constructor"&&typeof a[s]=="function")&&s!="__proto__")return a[s]}var J_=t1(M_),zl=ET||function(a,s){return Rn.setTimeout(a,s)},vp=t1(L3);function e1(a,s,c){var v=s+"";return vp(a,J3(v,uA(K3(v),c)))}function t1(a){var s=0,c=0;return function(){var v=bT(),E=H-(v-c);if(c=v,E>0){if(++s>=ie)return arguments[0]}else s=0;return a.apply(n,arguments)}}function Bc(a,s){var c=-1,v=a.length,E=v-1;for(s=s===n?v:s;++c<s;){var P=Jh(c,E),U=a[P];a[P]=a[c],a[c]=U}return a.length=s,a}var n1=rA(function(a){var s=[];return a.charCodeAt(0)===46&&s.push(""),a.replace(Cr,function(c,v,E,P){s.push(E?P.replace(Mh,"$1"):v||c)}),s});function gr(a){if(typeof a=="string"||vi(a))return a;var s=a+"";return s=="0"&&1/a==-ce?"-0":s}function go(a){if(a!=null){try{return mc.call(a)}catch{}try{return a+""}catch{}}return""}function uA(a,s){return Di(Q,function(c){var v="_."+c[0];s&c[1]&&!cc(a,v)&&a.push(v)}),a.sort()}function i1(a){if(a instanceof vt)return a.clone();var s=new Oi(a.__wrapped__,a.__chain__);return s.__actions__=ti(a.__actions__),s.__index__=a.__index__,s.__values__=a.__values__,s}function cA(a,s,c){(c?jn(a,s,c):s===n)?s=1:s=vn(lt(s),0);var v=a==null?0:a.length;if(!v||s<1)return[];for(var E=0,P=0,U=q(Mc(v/s));E<v;)U[P++]=ki(a,E,E+=s);return U}function fA(a){for(var s=-1,c=a==null?0:a.length,v=0,E=[];++s<c;){var P=a[s];P&&(E[v++]=P)}return E}function dA(){var a=arguments.length;if(!a)return[];for(var s=q(a-1),c=arguments[0],v=a;v--;)s[v-1]=arguments[v];return da(at(c)?ti(c):[c],Pn(s,1))}var hA=dt(function(a,s){return cn(a)?Nl(a,Pn(s,1,cn,!0)):[]}),pA=dt(function(a,s){var c=zi(s);return cn(c)&&(c=n),cn(a)?Nl(a,Pn(s,1,cn,!0),Ge(c,2)):[]}),mA=dt(function(a,s){var c=zi(s);return cn(c)&&(c=n),cn(a)?Nl(a,Pn(s,1,cn,!0),n,c):[]});function gA(a,s,c){var v=a==null?0:a.length;return v?(s=c||s===n?1:lt(s),ki(a,s<0?0:s,v)):[]}function vA(a,s,c){var v=a==null?0:a.length;return v?(s=c||s===n?1:lt(s),s=v-s,ki(a,0,s<0?0:s)):[]}function _A(a,s){return a&&a.length?Ic(a,Ge(s,3),!0,!0):[]}function xA(a,s){return a&&a.length?Ic(a,Ge(s,3),!0):[]}function yA(a,s,c,v){var E=a==null?0:a.length;return E?(c&&typeof c!="number"&&jn(a,s,c)&&(c=0,v=E),d3(a,s,c,v)):[]}function r1(a,s,c){var v=a==null?0:a.length;if(!v)return-1;var E=c==null?0:lt(c);return E<0&&(E=vn(v+E,0)),fc(a,Ge(s,3),E)}function a1(a,s,c){var v=a==null?0:a.length;if(!v)return-1;var E=v-1;return c!==n&&(E=lt(c),E=c<0?vn(v+E,0):On(E,v-1)),fc(a,Ge(s,3),E,!0)}function o1(a){var s=a==null?0:a.length;return s?Pn(a,1):[]}function SA(a){var s=a==null?0:a.length;return s?Pn(a,ce):[]}function MA(a,s){var c=a==null?0:a.length;return c?(s=s===n?1:lt(s),Pn(a,s)):[]}function EA(a){for(var s=-1,c=a==null?0:a.length,v={};++s<c;){var E=a[s];v[E[0]]=E[1]}return v}function s1(a){return a&&a.length?a[0]:n}function wA(a,s,c){var v=a==null?0:a.length;if(!v)return-1;var E=c==null?0:lt(c);return E<0&&(E=vn(v+E,0)),es(a,s,E)}function TA(a){var s=a==null?0:a.length;return s?ki(a,0,-1):[]}var AA=dt(function(a){var s=Qt(a,rp);return s.length&&s[0]===a[0]?Yh(s):[]}),bA=dt(function(a){var s=zi(a),c=Qt(a,rp);return s===zi(c)?s=n:c.pop(),c.length&&c[0]===a[0]?Yh(c,Ge(s,2)):[]}),CA=dt(function(a){var s=zi(a),c=Qt(a,rp);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===a[0]?Yh(c,n,s):[]});function RA(a,s){return a==null?"":TT.call(a,s)}function zi(a){var s=a==null?0:a.length;return s?a[s-1]:n}function PA(a,s,c){var v=a==null?0:a.length;if(!v)return-1;var E=v;return c!==n&&(E=lt(c),E=E<0?vn(v+E,0):On(E,v-1)),s===s?uT(a,s,E):fc(a,Hv,E,!0)}function LA(a,s){return a&&a.length?__(a,lt(s)):n}var IA=dt(l1);function l1(a,s){return a&&a.length&&s&&s.length?Qh(a,s):a}function NA(a,s,c){return a&&a.length&&s&&s.length?Qh(a,s,Ge(c,2)):a}function DA(a,s,c){return a&&a.length&&s&&s.length?Qh(a,s,n,c):a}var UA=Nr(function(a,s){var c=a==null?0:a.length,v=Wh(a,s);return S_(a,Qt(s,function(E){return Dr(E,c)?+E:E}).sort(L_)),v});function OA(a,s){var c=[];if(!(a&&a.length))return c;var v=-1,E=[],P=a.length;for(s=Ge(s,3);++v<P;){var U=a[v];s(U,v,a)&&(c.push(U),E.push(v))}return S_(a,E),c}function _p(a){return a==null?a:RT.call(a)}function FA(a,s,c){var v=a==null?0:a.length;return v?(c&&typeof c!="number"&&jn(a,s,c)?(s=0,c=v):(s=s==null?0:lt(s),c=c===n?v:lt(c)),ki(a,s,c)):[]}function kA(a,s){return Lc(a,s)}function zA(a,s,c){return tp(a,s,Ge(c,2))}function BA(a,s){var c=a==null?0:a.length;if(c){var v=Lc(a,s);if(v<c&&Ji(a[v],s))return v}return-1}function HA(a,s){return Lc(a,s,!0)}function VA(a,s,c){return tp(a,s,Ge(c,2),!0)}function GA(a,s){var c=a==null?0:a.length;if(c){var v=Lc(a,s,!0)-1;if(Ji(a[v],s))return v}return-1}function WA(a){return a&&a.length?E_(a):[]}function XA(a,s){return a&&a.length?E_(a,Ge(s,2)):[]}function jA(a){var s=a==null?0:a.length;return s?ki(a,1,s):[]}function $A(a,s,c){return a&&a.length?(s=c||s===n?1:lt(s),ki(a,0,s<0?0:s)):[]}function YA(a,s,c){var v=a==null?0:a.length;return v?(s=c||s===n?1:lt(s),s=v-s,ki(a,s<0?0:s,v)):[]}function qA(a,s){return a&&a.length?Ic(a,Ge(s,3),!1,!0):[]}function KA(a,s){return a&&a.length?Ic(a,Ge(s,3)):[]}var ZA=dt(function(a){return ga(Pn(a,1,cn,!0))}),QA=dt(function(a){var s=zi(a);return cn(s)&&(s=n),ga(Pn(a,1,cn,!0),Ge(s,2))}),JA=dt(function(a){var s=zi(a);return s=typeof s=="function"?s:n,ga(Pn(a,1,cn,!0),n,s)});function eb(a){return a&&a.length?ga(a):[]}function tb(a,s){return a&&a.length?ga(a,Ge(s,2)):[]}function nb(a,s){return s=typeof s=="function"?s:n,a&&a.length?ga(a,n,s):[]}function xp(a){if(!(a&&a.length))return[];var s=0;return a=fa(a,function(c){if(cn(c))return s=vn(c.length,s),!0}),Oh(s,function(c){return Qt(a,Nh(c))})}function u1(a,s){if(!(a&&a.length))return[];var c=xp(a);return s==null?c:Qt(c,function(v){return pi(s,n,v)})}var ib=dt(function(a,s){return cn(a)?Nl(a,s):[]}),rb=dt(function(a){return ip(fa(a,cn))}),ab=dt(function(a){var s=zi(a);return cn(s)&&(s=n),ip(fa(a,cn),Ge(s,2))}),ob=dt(function(a){var s=zi(a);return s=typeof s=="function"?s:n,ip(fa(a,cn),n,s)}),sb=dt(xp);function lb(a,s){return b_(a||[],s||[],Il)}function ub(a,s){return b_(a||[],s||[],Ol)}var cb=dt(function(a){var s=a.length,c=s>1?a[s-1]:n;return c=typeof c=="function"?(a.pop(),c):n,u1(a,c)});function c1(a){var s=A(a);return s.__chain__=!0,s}function fb(a,s){return s(a),a}function Hc(a,s){return s(a)}var db=Nr(function(a){var s=a.length,c=s?a[0]:0,v=this.__wrapped__,E=function(P){return Wh(P,a)};return s>1||this.__actions__.length||!(v instanceof vt)||!Dr(c)?this.thru(E):(v=v.slice(c,+c+(s?1:0)),v.__actions__.push({func:Hc,args:[E],thisArg:n}),new Oi(v,this.__chain__).thru(function(P){return s&&!P.length&&P.push(n),P}))});function hb(){return c1(this)}function pb(){return new Oi(this.value(),this.__chain__)}function mb(){this.__values__===n&&(this.__values__=w1(this.value()));var a=this.__index__>=this.__values__.length,s=a?n:this.__values__[this.__index__++];return{done:a,value:s}}function gb(){return this}function vb(a){for(var s,c=this;c instanceof Ac;){var v=i1(c);v.__index__=0,v.__values__=n,s?E.__wrapped__=v:s=v;var E=v;c=c.__wrapped__}return E.__wrapped__=a,s}function _b(){var a=this.__wrapped__;if(a instanceof vt){var s=a;return this.__actions__.length&&(s=new vt(this)),s=s.reverse(),s.__actions__.push({func:Hc,args:[_p],thisArg:n}),new Oi(s,this.__chain__)}return this.thru(_p)}function xb(){return A_(this.__wrapped__,this.__actions__)}var yb=Nc(function(a,s,c){Rt.call(a,c)?++a[c]:Lr(a,c,1)});function Sb(a,s,c){var v=at(a)?zv:f3;return c&&jn(a,s,c)&&(s=n),v(a,Ge(s,3))}function Mb(a,s){var c=at(a)?fa:u_;return c(a,Ge(s,3))}var Eb=F_(r1),wb=F_(a1);function Tb(a,s){return Pn(Vc(a,s),1)}function Ab(a,s){return Pn(Vc(a,s),ce)}function bb(a,s,c){return c=c===n?1:lt(c),Pn(Vc(a,s),c)}function f1(a,s){var c=at(a)?Di:ma;return c(a,Ge(s,3))}function d1(a,s){var c=at(a)?jw:l_;return c(a,Ge(s,3))}var Cb=Nc(function(a,s,c){Rt.call(a,c)?a[c].push(s):Lr(a,c,[s])});function Rb(a,s,c,v){a=ni(a)?a:ds(a),c=c&&!v?lt(c):0;var E=a.length;return c<0&&(c=vn(E+c,0)),$c(a)?c<=E&&a.indexOf(s,c)>-1:!!E&&es(a,s,c)>-1}var Pb=dt(function(a,s,c){var v=-1,E=typeof s=="function",P=ni(a)?q(a.length):[];return ma(a,function(U){P[++v]=E?pi(s,U,c):Dl(U,s,c)}),P}),Lb=Nc(function(a,s,c){Lr(a,c,s)});function Vc(a,s){var c=at(a)?Qt:m_;return c(a,Ge(s,3))}function Ib(a,s,c,v){return a==null?[]:(at(s)||(s=s==null?[]:[s]),c=v?n:c,at(c)||(c=c==null?[]:[c]),x_(a,s,c))}var Nb=Nc(function(a,s,c){a[c?0:1].push(s)},function(){return[[],[]]});function Db(a,s,c){var v=at(a)?Lh:Gv,E=arguments.length<3;return v(a,Ge(s,4),c,E,ma)}function Ub(a,s,c){var v=at(a)?$w:Gv,E=arguments.length<3;return v(a,Ge(s,4),c,E,l_)}function Ob(a,s){var c=at(a)?fa:u_;return c(a,Xc(Ge(s,3)))}function Fb(a){var s=at(a)?r_:R3;return s(a)}function kb(a,s,c){(c?jn(a,s,c):s===n)?s=1:s=lt(s);var v=at(a)?o3:P3;return v(a,s)}function zb(a){var s=at(a)?s3:I3;return s(a)}function Bb(a){if(a==null)return 0;if(ni(a))return $c(a)?ns(a):a.length;var s=Fn(a);return s==wt||s==fe?a.size:Kh(a).length}function Hb(a,s,c){var v=at(a)?Ih:N3;return c&&jn(a,s,c)&&(s=n),v(a,Ge(s,3))}var Vb=dt(function(a,s){if(a==null)return[];var c=s.length;return c>1&&jn(a,s[0],s[1])?s=[]:c>2&&jn(s[0],s[1],s[2])&&(s=[s[0]]),x_(a,Pn(s,1),[])}),Gc=MT||function(){return Rn.Date.now()};function Gb(a,s){if(typeof s!="function")throw new Ui(l);return a=lt(a),function(){if(--a<1)return s.apply(this,arguments)}}function h1(a,s,c){return s=c?n:s,s=a&&s==null?a.length:s,Ir(a,I,n,n,n,n,s)}function p1(a,s){var c;if(typeof s!="function")throw new Ui(l);return a=lt(a),function(){return--a>0&&(c=s.apply(this,arguments)),a<=1&&(s=n),c}}var yp=dt(function(a,s,c){var v=_;if(c.length){var E=ha(c,cs(yp));v|=O}return Ir(a,v,s,c,E)}),m1=dt(function(a,s,c){var v=_|p;if(c.length){var E=ha(c,cs(m1));v|=O}return Ir(s,v,a,c,E)});function g1(a,s,c){s=c?n:s;var v=Ir(a,x,n,n,n,n,n,s);return v.placeholder=g1.placeholder,v}function v1(a,s,c){s=c?n:s;var v=Ir(a,C,n,n,n,n,n,s);return v.placeholder=v1.placeholder,v}function _1(a,s,c){var v,E,P,U,B,W,se=0,le=!1,pe=!1,we=!0;if(typeof a!="function")throw new Ui(l);s=Bi(s)||0,tn(c)&&(le=!!c.leading,pe="maxWait"in c,P=pe?vn(Bi(c.maxWait)||0,s):P,we="trailing"in c?!!c.trailing:we);function De(fn){var er=v,Fr=E;return v=E=n,se=fn,U=a.apply(Fr,er),U}function We(fn){return se=fn,B=zl(mt,s),le?De(fn):U}function ut(fn){var er=fn-W,Fr=fn-se,F1=s-er;return pe?On(F1,P-Fr):F1}function Xe(fn){var er=fn-W,Fr=fn-se;return W===n||er>=s||er<0||pe&&Fr>=P}function mt(){var fn=Gc();if(Xe(fn))return yt(fn);B=zl(mt,ut(fn))}function yt(fn){return B=n,we&&v?De(fn):(v=E=n,U)}function _i(){B!==n&&C_(B),se=0,v=W=E=B=n}function $n(){return B===n?U:yt(Gc())}function xi(){var fn=Gc(),er=Xe(fn);if(v=arguments,E=this,W=fn,er){if(B===n)return We(W);if(pe)return C_(B),B=zl(mt,s),De(W)}return B===n&&(B=zl(mt,s)),U}return xi.cancel=_i,xi.flush=$n,xi}var Wb=dt(function(a,s){return s_(a,1,s)}),Xb=dt(function(a,s,c){return s_(a,Bi(s)||0,c)});function jb(a){return Ir(a,R)}function Wc(a,s){if(typeof a!="function"||s!=null&&typeof s!="function")throw new Ui(l);var c=function(){var v=arguments,E=s?s.apply(this,v):v[0],P=c.cache;if(P.has(E))return P.get(E);var U=a.apply(this,v);return c.cache=P.set(E,U)||P,U};return c.cache=new(Wc.Cache||Pr),c}Wc.Cache=Pr;function Xc(a){if(typeof a!="function")throw new Ui(l);return function(){var s=arguments;switch(s.length){case 0:return!a.call(this);case 1:return!a.call(this,s[0]);case 2:return!a.call(this,s[0],s[1]);case 3:return!a.call(this,s[0],s[1],s[2])}return!a.apply(this,s)}}function $b(a){return p1(2,a)}var Yb=D3(function(a,s){s=s.length==1&&at(s[0])?Qt(s[0],mi(Ge())):Qt(Pn(s,1),mi(Ge()));var c=s.length;return dt(function(v){for(var E=-1,P=On(v.length,c);++E<P;)v[E]=s[E].call(this,v[E]);return pi(a,this,v)})}),Sp=dt(function(a,s){var c=ha(s,cs(Sp));return Ir(a,O,n,s,c)}),x1=dt(function(a,s){var c=ha(s,cs(x1));return Ir(a,N,n,s,c)}),qb=Nr(function(a,s){return Ir(a,k,n,n,n,s)});function Kb(a,s){if(typeof a!="function")throw new Ui(l);return s=s===n?s:lt(s),dt(a,s)}function Zb(a,s){if(typeof a!="function")throw new Ui(l);return s=s==null?0:vn(lt(s),0),dt(function(c){var v=c[s],E=_a(c,0,s);return v&&da(E,v),pi(a,this,E)})}function Qb(a,s,c){var v=!0,E=!0;if(typeof a!="function")throw new Ui(l);return tn(c)&&(v="leading"in c?!!c.leading:v,E="trailing"in c?!!c.trailing:E),_1(a,s,{leading:v,maxWait:s,trailing:E})}function Jb(a){return h1(a,1)}function eC(a,s){return Sp(ap(s),a)}function tC(){if(!arguments.length)return[];var a=arguments[0];return at(a)?a:[a]}function nC(a){return Fi(a,y)}function iC(a,s){return s=typeof s=="function"?s:n,Fi(a,y,s)}function rC(a){return Fi(a,m|y)}function aC(a,s){return s=typeof s=="function"?s:n,Fi(a,m|y,s)}function oC(a,s){return s==null||o_(a,s,Tn(s))}function Ji(a,s){return a===s||a!==a&&s!==s}var sC=Fc($h),lC=Fc(function(a,s){return a>=s}),vo=d_(function(){return arguments}())?d_:function(a){return on(a)&&Rt.call(a,"callee")&&!Qv.call(a,"callee")},at=q.isArray,uC=Nv?mi(Nv):v3;function ni(a){return a!=null&&jc(a.length)&&!Ur(a)}function cn(a){return on(a)&&ni(a)}function cC(a){return a===!0||a===!1||on(a)&&Xn(a)==$e}var xa=wT||Ip,fC=Dv?mi(Dv):_3;function dC(a){return on(a)&&a.nodeType===1&&!Bl(a)}function hC(a){if(a==null)return!0;if(ni(a)&&(at(a)||typeof a=="string"||typeof a.splice=="function"||xa(a)||fs(a)||vo(a)))return!a.length;var s=Fn(a);if(s==wt||s==fe)return!a.size;if(kl(a))return!Kh(a).length;for(var c in a)if(Rt.call(a,c))return!1;return!0}function pC(a,s){return Ul(a,s)}function mC(a,s,c){c=typeof c=="function"?c:n;var v=c?c(a,s):n;return v===n?Ul(a,s,n,c):!!v}function Mp(a){if(!on(a))return!1;var s=Xn(a);return s==$||s==xt||typeof a.message=="string"&&typeof a.name=="string"&&!Bl(a)}function gC(a){return typeof a=="number"&&e_(a)}function Ur(a){if(!tn(a))return!1;var s=Xn(a);return s==st||s==Ye||s==xe||s==te}function y1(a){return typeof a=="number"&&a==lt(a)}function jc(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=z}function tn(a){var s=typeof a;return a!=null&&(s=="object"||s=="function")}function on(a){return a!=null&&typeof a=="object"}var S1=Uv?mi(Uv):y3;function vC(a,s){return a===s||qh(a,s,dp(s))}function _C(a,s,c){return c=typeof c=="function"?c:n,qh(a,s,dp(s),c)}function xC(a){return M1(a)&&a!=+a}function yC(a){if(iA(a))throw new it(o);return h_(a)}function SC(a){return a===null}function MC(a){return a==null}function M1(a){return typeof a=="number"||on(a)&&Xn(a)==je}function Bl(a){if(!on(a)||Xn(a)!=D)return!1;var s=xc(a);if(s===null)return!0;var c=Rt.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&mc.call(c)==_T}var Ep=Ov?mi(Ov):S3;function EC(a){return y1(a)&&a>=-z&&a<=z}var E1=Fv?mi(Fv):M3;function $c(a){return typeof a=="string"||!at(a)&&on(a)&&Xn(a)==me}function vi(a){return typeof a=="symbol"||on(a)&&Xn(a)==Ve}var fs=kv?mi(kv):E3;function wC(a){return a===n}function TC(a){return on(a)&&Fn(a)==Oe}function AC(a){return on(a)&&Xn(a)==qe}var bC=Fc(Zh),CC=Fc(function(a,s){return a<=s});function w1(a){if(!a)return[];if(ni(a))return $c(a)?Zi(a):ti(a);if(bl&&a[bl])return oT(a[bl]());var s=Fn(a),c=s==wt?kh:s==fe?dc:ds;return c(a)}function Or(a){if(!a)return a===0?a:0;if(a=Bi(a),a===ce||a===-ce){var s=a<0?-1:1;return s*ne}return a===a?a:0}function lt(a){var s=Or(a),c=s%1;return s===s?c?s-c:s:0}function T1(a){return a?ho(lt(a),0,ge):0}function Bi(a){if(typeof a=="number")return a;if(vi(a))return ee;if(tn(a)){var s=typeof a.valueOf=="function"?a.valueOf():a;a=tn(s)?s+"":s}if(typeof a!="string")return a===0?a:+a;a=Wv(a);var c=K.test(a);return c||Y.test(a)?Gw(a.slice(2),c?2:8):j.test(a)?ee:+a}function A1(a){return mr(a,ii(a))}function RC(a){return a?ho(lt(a),-z,z):a===0?a:0}function bt(a){return a==null?"":gi(a)}var PC=ls(function(a,s){if(kl(s)||ni(s)){mr(s,Tn(s),a);return}for(var c in s)Rt.call(s,c)&&Il(a,c,s[c])}),b1=ls(function(a,s){mr(s,ii(s),a)}),Yc=ls(function(a,s,c,v){mr(s,ii(s),a,v)}),LC=ls(function(a,s,c,v){mr(s,Tn(s),a,v)}),IC=Nr(Wh);function NC(a,s){var c=ss(a);return s==null?c:a_(c,s)}var DC=dt(function(a,s){a=kt(a);var c=-1,v=s.length,E=v>2?s[2]:n;for(E&&jn(s[0],s[1],E)&&(v=1);++c<v;)for(var P=s[c],U=ii(P),B=-1,W=U.length;++B<W;){var se=U[B],le=a[se];(le===n||Ji(le,rs[se])&&!Rt.call(a,se))&&(a[se]=P[se])}return a}),UC=dt(function(a){return a.push(n,W_),pi(C1,n,a)});function OC(a,s){return Bv(a,Ge(s,3),pr)}function FC(a,s){return Bv(a,Ge(s,3),jh)}function kC(a,s){return a==null?a:Xh(a,Ge(s,3),ii)}function zC(a,s){return a==null?a:c_(a,Ge(s,3),ii)}function BC(a,s){return a&&pr(a,Ge(s,3))}function HC(a,s){return a&&jh(a,Ge(s,3))}function VC(a){return a==null?[]:Rc(a,Tn(a))}function GC(a){return a==null?[]:Rc(a,ii(a))}function wp(a,s,c){var v=a==null?n:po(a,s);return v===n?c:v}function WC(a,s){return a!=null&&$_(a,s,h3)}function Tp(a,s){return a!=null&&$_(a,s,p3)}var XC=z_(function(a,s,c){s!=null&&typeof s.toString!="function"&&(s=gc.call(s)),a[s]=c},bp(ri)),jC=z_(function(a,s,c){s!=null&&typeof s.toString!="function"&&(s=gc.call(s)),Rt.call(a,s)?a[s].push(c):a[s]=[c]},Ge),$C=dt(Dl);function Tn(a){return ni(a)?i_(a):Kh(a)}function ii(a){return ni(a)?i_(a,!0):w3(a)}function YC(a,s){var c={};return s=Ge(s,3),pr(a,function(v,E,P){Lr(c,s(v,E,P),v)}),c}function qC(a,s){var c={};return s=Ge(s,3),pr(a,function(v,E,P){Lr(c,E,s(v,E,P))}),c}var KC=ls(function(a,s,c){Pc(a,s,c)}),C1=ls(function(a,s,c,v){Pc(a,s,c,v)}),ZC=Nr(function(a,s){var c={};if(a==null)return c;var v=!1;s=Qt(s,function(P){return P=va(P,a),v||(v=P.length>1),P}),mr(a,cp(a),c),v&&(c=Fi(c,m|g|y,X3));for(var E=s.length;E--;)np(c,s[E]);return c});function QC(a,s){return R1(a,Xc(Ge(s)))}var JC=Nr(function(a,s){return a==null?{}:A3(a,s)});function R1(a,s){if(a==null)return{};var c=Qt(cp(a),function(v){return[v]});return s=Ge(s),y_(a,c,function(v,E){return s(v,E[0])})}function eR(a,s,c){s=va(s,a);var v=-1,E=s.length;for(E||(E=1,a=n);++v<E;){var P=a==null?n:a[gr(s[v])];P===n&&(v=E,P=c),a=Ur(P)?P.call(a):P}return a}function tR(a,s,c){return a==null?a:Ol(a,s,c)}function nR(a,s,c,v){return v=typeof v=="function"?v:n,a==null?a:Ol(a,s,c,v)}var P1=V_(Tn),L1=V_(ii);function iR(a,s,c){var v=at(a),E=v||xa(a)||fs(a);if(s=Ge(s,4),c==null){var P=a&&a.constructor;E?c=v?new P:[]:tn(a)?c=Ur(P)?ss(xc(a)):{}:c={}}return(E?Di:pr)(a,function(U,B,W){return s(c,U,B,W)}),c}function rR(a,s){return a==null?!0:np(a,s)}function aR(a,s,c){return a==null?a:T_(a,s,ap(c))}function oR(a,s,c,v){return v=typeof v=="function"?v:n,a==null?a:T_(a,s,ap(c),v)}function ds(a){return a==null?[]:Fh(a,Tn(a))}function sR(a){return a==null?[]:Fh(a,ii(a))}function lR(a,s,c){return c===n&&(c=s,s=n),c!==n&&(c=Bi(c),c=c===c?c:0),s!==n&&(s=Bi(s),s=s===s?s:0),ho(Bi(a),s,c)}function uR(a,s,c){return s=Or(s),c===n?(c=s,s=0):c=Or(c),a=Bi(a),m3(a,s,c)}function cR(a,s,c){if(c&&typeof c!="boolean"&&jn(a,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof a=="boolean"&&(c=a,a=n)),a===n&&s===n?(a=0,s=1):(a=Or(a),s===n?(s=a,a=0):s=Or(s)),a>s){var v=a;a=s,s=v}if(c||a%1||s%1){var E=t_();return On(a+E*(s-a+Vw("1e-"+((E+"").length-1))),s)}return Jh(a,s)}var fR=us(function(a,s,c){return s=s.toLowerCase(),a+(c?I1(s):s)});function I1(a){return Ap(bt(a).toLowerCase())}function N1(a){return a=bt(a),a&&a.replace(ke,tT).replace(Iw,"")}function dR(a,s,c){a=bt(a),s=gi(s);var v=a.length;c=c===n?v:ho(lt(c),0,v);var E=c;return c-=s.length,c>=0&&a.slice(c,E)==s}function hR(a){return a=bt(a),a&&zt.test(a)?a.replace(Be,nT):a}function pR(a){return a=bt(a),a&&ac.test(a)?a.replace(Ko,"\\$&"):a}var mR=us(function(a,s,c){return a+(c?"-":"")+s.toLowerCase()}),gR=us(function(a,s,c){return a+(c?" ":"")+s.toLowerCase()}),vR=O_("toLowerCase");function _R(a,s,c){a=bt(a),s=lt(s);var v=s?ns(a):0;if(!s||v>=s)return a;var E=(s-v)/2;return Oc(Ec(E),c)+a+Oc(Mc(E),c)}function xR(a,s,c){a=bt(a),s=lt(s);var v=s?ns(a):0;return s&&v<s?a+Oc(s-v,c):a}function yR(a,s,c){a=bt(a),s=lt(s);var v=s?ns(a):0;return s&&v<s?Oc(s-v,c)+a:a}function SR(a,s,c){return c||s==null?s=0:s&&(s=+s),CT(bt(a).replace(Sl,""),s||0)}function MR(a,s,c){return(c?jn(a,s,c):s===n)?s=1:s=lt(s),ep(bt(a),s)}function ER(){var a=arguments,s=bt(a[0]);return a.length<3?s:s.replace(a[1],a[2])}var wR=us(function(a,s,c){return a+(c?"_":"")+s.toLowerCase()});function TR(a,s,c){return c&&typeof c!="number"&&jn(a,s,c)&&(s=c=n),c=c===n?ge:c>>>0,c?(a=bt(a),a&&(typeof s=="string"||s!=null&&!Ep(s))&&(s=gi(s),!s&&ts(a))?_a(Zi(a),0,c):a.split(s,c)):[]}var AR=us(function(a,s,c){return a+(c?" ":"")+Ap(s)});function bR(a,s,c){return a=bt(a),c=c==null?0:ho(lt(c),0,a.length),s=gi(s),a.slice(c,c+s.length)==s}function CR(a,s,c){var v=A.templateSettings;c&&jn(a,s,c)&&(s=n),a=bt(a),s=Yc({},s,v,G_);var E=Yc({},s.imports,v.imports,G_),P=Tn(E),U=Fh(E,P),B,W,se=0,le=s.interpolate||He,pe="__p += '",we=zh((s.escape||He).source+"|"+le.source+"|"+(le===Ut?Eh:He).source+"|"+(s.evaluate||He).source+"|$","g"),De="//# sourceURL="+(Rt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Fw+"]")+`
`;a.replace(we,function(Xe,mt,yt,_i,$n,xi){return yt||(yt=_i),pe+=a.slice(se,xi).replace(Ke,iT),mt&&(B=!0,pe+=`' +
__e(`+mt+`) +
'`),$n&&(W=!0,pe+=`';
`+$n+`;
__p += '`),yt&&(pe+=`' +
((__t = (`+yt+`)) == null ? '' : __t) +
'`),se=xi+Xe.length,Xe}),pe+=`';
`;var We=Rt.call(s,"variable")&&s.variable;if(!We)pe=`with (obj) {
`+pe+`
}
`;else if(Sh.test(We))throw new it(u);pe=(W?pe.replace(F,""):pe).replace(Ee,"$1").replace(Me,"$1;"),pe="function("+(We||"obj")+`) {
`+(We?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pe+`return __p
}`;var ut=U1(function(){return Tt(P,De+"return "+pe).apply(n,U)});if(ut.source=pe,Mp(ut))throw ut;return ut}function RR(a){return bt(a).toLowerCase()}function PR(a){return bt(a).toUpperCase()}function LR(a,s,c){if(a=bt(a),a&&(c||s===n))return Wv(a);if(!a||!(s=gi(s)))return a;var v=Zi(a),E=Zi(s),P=Xv(v,E),U=jv(v,E)+1;return _a(v,P,U).join("")}function IR(a,s,c){if(a=bt(a),a&&(c||s===n))return a.slice(0,Yv(a)+1);if(!a||!(s=gi(s)))return a;var v=Zi(a),E=jv(v,Zi(s))+1;return _a(v,0,E).join("")}function NR(a,s,c){if(a=bt(a),a&&(c||s===n))return a.replace(Sl,"");if(!a||!(s=gi(s)))return a;var v=Zi(a),E=Xv(v,Zi(s));return _a(v,E).join("")}function DR(a,s){var c=T,v=X;if(tn(s)){var E="separator"in s?s.separator:E;c="length"in s?lt(s.length):c,v="omission"in s?gi(s.omission):v}a=bt(a);var P=a.length;if(ts(a)){var U=Zi(a);P=U.length}if(c>=P)return a;var B=c-ns(v);if(B<1)return v;var W=U?_a(U,0,B).join(""):a.slice(0,B);if(E===n)return W+v;if(U&&(B+=W.length-B),Ep(E)){if(a.slice(B).search(E)){var se,le=W;for(E.global||(E=zh(E.source,bt(L.exec(E))+"g")),E.lastIndex=0;se=E.exec(le);)var pe=se.index;W=W.slice(0,pe===n?B:pe)}}else if(a.indexOf(gi(E),B)!=B){var we=W.lastIndexOf(E);we>-1&&(W=W.slice(0,we))}return W+v}function UR(a){return a=bt(a),a&&Dt.test(a)?a.replace(ze,cT):a}var OR=us(function(a,s,c){return a+(c?" ":"")+s.toUpperCase()}),Ap=O_("toUpperCase");function D1(a,s,c){return a=bt(a),s=c?n:s,s===n?aT(a)?hT(a):Kw(a):a.match(s)||[]}var U1=dt(function(a,s){try{return pi(a,n,s)}catch(c){return Mp(c)?c:new it(c)}}),FR=Nr(function(a,s){return Di(s,function(c){c=gr(c),Lr(a,c,yp(a[c],a))}),a});function kR(a){var s=a==null?0:a.length,c=Ge();return a=s?Qt(a,function(v){if(typeof v[1]!="function")throw new Ui(l);return[c(v[0]),v[1]]}):[],dt(function(v){for(var E=-1;++E<s;){var P=a[E];if(pi(P[0],this,v))return pi(P[1],this,v)}})}function zR(a){return c3(Fi(a,m))}function bp(a){return function(){return a}}function BR(a,s){return a==null||a!==a?s:a}var HR=k_(),VR=k_(!0);function ri(a){return a}function Cp(a){return p_(typeof a=="function"?a:Fi(a,m))}function GR(a){return g_(Fi(a,m))}function WR(a,s){return v_(a,Fi(s,m))}var XR=dt(function(a,s){return function(c){return Dl(c,a,s)}}),jR=dt(function(a,s){return function(c){return Dl(a,c,s)}});function Rp(a,s,c){var v=Tn(s),E=Rc(s,v);c==null&&!(tn(s)&&(E.length||!v.length))&&(c=s,s=a,a=this,E=Rc(s,Tn(s)));var P=!(tn(c)&&"chain"in c)||!!c.chain,U=Ur(a);return Di(E,function(B){var W=s[B];a[B]=W,U&&(a.prototype[B]=function(){var se=this.__chain__;if(P||se){var le=a(this.__wrapped__),pe=le.__actions__=ti(this.__actions__);return pe.push({func:W,args:arguments,thisArg:a}),le.__chain__=se,le}return W.apply(a,da([this.value()],arguments))})}),a}function $R(){return Rn._===this&&(Rn._=xT),this}function Pp(){}function YR(a){return a=lt(a),dt(function(s){return __(s,a)})}var qR=sp(Qt),KR=sp(zv),ZR=sp(Ih);function O1(a){return pp(a)?Nh(gr(a)):b3(a)}function QR(a){return function(s){return a==null?n:po(a,s)}}var JR=B_(),eP=B_(!0);function Lp(){return[]}function Ip(){return!1}function tP(){return{}}function nP(){return""}function iP(){return!0}function rP(a,s){if(a=lt(a),a<1||a>z)return[];var c=ge,v=On(a,ge);s=Ge(s),a-=ge;for(var E=Oh(v,s);++c<a;)s(c);return E}function aP(a){return at(a)?Qt(a,gr):vi(a)?[a]:ti(n1(bt(a)))}function oP(a){var s=++vT;return bt(a)+s}var sP=Uc(function(a,s){return a+s},0),lP=lp("ceil"),uP=Uc(function(a,s){return a/s},1),cP=lp("floor");function fP(a){return a&&a.length?Cc(a,ri,$h):n}function dP(a,s){return a&&a.length?Cc(a,Ge(s,2),$h):n}function hP(a){return Vv(a,ri)}function pP(a,s){return Vv(a,Ge(s,2))}function mP(a){return a&&a.length?Cc(a,ri,Zh):n}function gP(a,s){return a&&a.length?Cc(a,Ge(s,2),Zh):n}var vP=Uc(function(a,s){return a*s},1),_P=lp("round"),xP=Uc(function(a,s){return a-s},0);function yP(a){return a&&a.length?Uh(a,ri):0}function SP(a,s){return a&&a.length?Uh(a,Ge(s,2)):0}return A.after=Gb,A.ary=h1,A.assign=PC,A.assignIn=b1,A.assignInWith=Yc,A.assignWith=LC,A.at=IC,A.before=p1,A.bind=yp,A.bindAll=FR,A.bindKey=m1,A.castArray=tC,A.chain=c1,A.chunk=cA,A.compact=fA,A.concat=dA,A.cond=kR,A.conforms=zR,A.constant=bp,A.countBy=yb,A.create=NC,A.curry=g1,A.curryRight=v1,A.debounce=_1,A.defaults=DC,A.defaultsDeep=UC,A.defer=Wb,A.delay=Xb,A.difference=hA,A.differenceBy=pA,A.differenceWith=mA,A.drop=gA,A.dropRight=vA,A.dropRightWhile=_A,A.dropWhile=xA,A.fill=yA,A.filter=Mb,A.flatMap=Tb,A.flatMapDeep=Ab,A.flatMapDepth=bb,A.flatten=o1,A.flattenDeep=SA,A.flattenDepth=MA,A.flip=jb,A.flow=HR,A.flowRight=VR,A.fromPairs=EA,A.functions=VC,A.functionsIn=GC,A.groupBy=Cb,A.initial=TA,A.intersection=AA,A.intersectionBy=bA,A.intersectionWith=CA,A.invert=XC,A.invertBy=jC,A.invokeMap=Pb,A.iteratee=Cp,A.keyBy=Lb,A.keys=Tn,A.keysIn=ii,A.map=Vc,A.mapKeys=YC,A.mapValues=qC,A.matches=GR,A.matchesProperty=WR,A.memoize=Wc,A.merge=KC,A.mergeWith=C1,A.method=XR,A.methodOf=jR,A.mixin=Rp,A.negate=Xc,A.nthArg=YR,A.omit=ZC,A.omitBy=QC,A.once=$b,A.orderBy=Ib,A.over=qR,A.overArgs=Yb,A.overEvery=KR,A.overSome=ZR,A.partial=Sp,A.partialRight=x1,A.partition=Nb,A.pick=JC,A.pickBy=R1,A.property=O1,A.propertyOf=QR,A.pull=IA,A.pullAll=l1,A.pullAllBy=NA,A.pullAllWith=DA,A.pullAt=UA,A.range=JR,A.rangeRight=eP,A.rearg=qb,A.reject=Ob,A.remove=OA,A.rest=Kb,A.reverse=_p,A.sampleSize=kb,A.set=tR,A.setWith=nR,A.shuffle=zb,A.slice=FA,A.sortBy=Vb,A.sortedUniq=WA,A.sortedUniqBy=XA,A.split=TR,A.spread=Zb,A.tail=jA,A.take=$A,A.takeRight=YA,A.takeRightWhile=qA,A.takeWhile=KA,A.tap=fb,A.throttle=Qb,A.thru=Hc,A.toArray=w1,A.toPairs=P1,A.toPairsIn=L1,A.toPath=aP,A.toPlainObject=A1,A.transform=iR,A.unary=Jb,A.union=ZA,A.unionBy=QA,A.unionWith=JA,A.uniq=eb,A.uniqBy=tb,A.uniqWith=nb,A.unset=rR,A.unzip=xp,A.unzipWith=u1,A.update=aR,A.updateWith=oR,A.values=ds,A.valuesIn=sR,A.without=ib,A.words=D1,A.wrap=eC,A.xor=rb,A.xorBy=ab,A.xorWith=ob,A.zip=sb,A.zipObject=lb,A.zipObjectDeep=ub,A.zipWith=cb,A.entries=P1,A.entriesIn=L1,A.extend=b1,A.extendWith=Yc,Rp(A,A),A.add=sP,A.attempt=U1,A.camelCase=fR,A.capitalize=I1,A.ceil=lP,A.clamp=lR,A.clone=nC,A.cloneDeep=rC,A.cloneDeepWith=aC,A.cloneWith=iC,A.conformsTo=oC,A.deburr=N1,A.defaultTo=BR,A.divide=uP,A.endsWith=dR,A.eq=Ji,A.escape=hR,A.escapeRegExp=pR,A.every=Sb,A.find=Eb,A.findIndex=r1,A.findKey=OC,A.findLast=wb,A.findLastIndex=a1,A.findLastKey=FC,A.floor=cP,A.forEach=f1,A.forEachRight=d1,A.forIn=kC,A.forInRight=zC,A.forOwn=BC,A.forOwnRight=HC,A.get=wp,A.gt=sC,A.gte=lC,A.has=WC,A.hasIn=Tp,A.head=s1,A.identity=ri,A.includes=Rb,A.indexOf=wA,A.inRange=uR,A.invoke=$C,A.isArguments=vo,A.isArray=at,A.isArrayBuffer=uC,A.isArrayLike=ni,A.isArrayLikeObject=cn,A.isBoolean=cC,A.isBuffer=xa,A.isDate=fC,A.isElement=dC,A.isEmpty=hC,A.isEqual=pC,A.isEqualWith=mC,A.isError=Mp,A.isFinite=gC,A.isFunction=Ur,A.isInteger=y1,A.isLength=jc,A.isMap=S1,A.isMatch=vC,A.isMatchWith=_C,A.isNaN=xC,A.isNative=yC,A.isNil=MC,A.isNull=SC,A.isNumber=M1,A.isObject=tn,A.isObjectLike=on,A.isPlainObject=Bl,A.isRegExp=Ep,A.isSafeInteger=EC,A.isSet=E1,A.isString=$c,A.isSymbol=vi,A.isTypedArray=fs,A.isUndefined=wC,A.isWeakMap=TC,A.isWeakSet=AC,A.join=RA,A.kebabCase=mR,A.last=zi,A.lastIndexOf=PA,A.lowerCase=gR,A.lowerFirst=vR,A.lt=bC,A.lte=CC,A.max=fP,A.maxBy=dP,A.mean=hP,A.meanBy=pP,A.min=mP,A.minBy=gP,A.stubArray=Lp,A.stubFalse=Ip,A.stubObject=tP,A.stubString=nP,A.stubTrue=iP,A.multiply=vP,A.nth=LA,A.noConflict=$R,A.noop=Pp,A.now=Gc,A.pad=_R,A.padEnd=xR,A.padStart=yR,A.parseInt=SR,A.random=cR,A.reduce=Db,A.reduceRight=Ub,A.repeat=MR,A.replace=ER,A.result=eR,A.round=_P,A.runInContext=V,A.sample=Fb,A.size=Bb,A.snakeCase=wR,A.some=Hb,A.sortedIndex=kA,A.sortedIndexBy=zA,A.sortedIndexOf=BA,A.sortedLastIndex=HA,A.sortedLastIndexBy=VA,A.sortedLastIndexOf=GA,A.startCase=AR,A.startsWith=bR,A.subtract=xP,A.sum=yP,A.sumBy=SP,A.template=CR,A.times=rP,A.toFinite=Or,A.toInteger=lt,A.toLength=T1,A.toLower=RR,A.toNumber=Bi,A.toSafeInteger=RC,A.toString=bt,A.toUpper=PR,A.trim=LR,A.trimEnd=IR,A.trimStart=NR,A.truncate=DR,A.unescape=UR,A.uniqueId=oP,A.upperCase=OR,A.upperFirst=Ap,A.each=f1,A.eachRight=d1,A.first=s1,Rp(A,function(){var a={};return pr(A,function(s,c){Rt.call(A.prototype,c)||(a[c]=s)}),a}(),{chain:!1}),A.VERSION=i,Di(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){A[a].placeholder=A}),Di(["drop","take"],function(a,s){vt.prototype[a]=function(c){c=c===n?1:vn(lt(c),0);var v=this.__filtered__&&!s?new vt(this):this.clone();return v.__filtered__?v.__takeCount__=On(c,v.__takeCount__):v.__views__.push({size:On(c,ge),type:a+(v.__dir__<0?"Right":"")}),v},vt.prototype[a+"Right"]=function(c){return this.reverse()[a](c).reverse()}}),Di(["filter","map","takeWhile"],function(a,s){var c=s+1,v=c==re||c==de;vt.prototype[a]=function(E){var P=this.clone();return P.__iteratees__.push({iteratee:Ge(E,3),type:c}),P.__filtered__=P.__filtered__||v,P}}),Di(["head","last"],function(a,s){var c="take"+(s?"Right":"");vt.prototype[a]=function(){return this[c](1).value()[0]}}),Di(["initial","tail"],function(a,s){var c="drop"+(s?"":"Right");vt.prototype[a]=function(){return this.__filtered__?new vt(this):this[c](1)}}),vt.prototype.compact=function(){return this.filter(ri)},vt.prototype.find=function(a){return this.filter(a).head()},vt.prototype.findLast=function(a){return this.reverse().find(a)},vt.prototype.invokeMap=dt(function(a,s){return typeof a=="function"?new vt(this):this.map(function(c){return Dl(c,a,s)})}),vt.prototype.reject=function(a){return this.filter(Xc(Ge(a)))},vt.prototype.slice=function(a,s){a=lt(a);var c=this;return c.__filtered__&&(a>0||s<0)?new vt(c):(a<0?c=c.takeRight(-a):a&&(c=c.drop(a)),s!==n&&(s=lt(s),c=s<0?c.dropRight(-s):c.take(s-a)),c)},vt.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},vt.prototype.toArray=function(){return this.take(ge)},pr(vt.prototype,function(a,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),v=/^(?:head|last)$/.test(s),E=A[v?"take"+(s=="last"?"Right":""):s],P=v||/^find/.test(s);E&&(A.prototype[s]=function(){var U=this.__wrapped__,B=v?[1]:arguments,W=U instanceof vt,se=B[0],le=W||at(U),pe=function(mt){var yt=E.apply(A,da([mt],B));return v&&we?yt[0]:yt};le&&c&&typeof se=="function"&&se.length!=1&&(W=le=!1);var we=this.__chain__,De=!!this.__actions__.length,We=P&&!we,ut=W&&!De;if(!P&&le){U=ut?U:new vt(this);var Xe=a.apply(U,B);return Xe.__actions__.push({func:Hc,args:[pe],thisArg:n}),new Oi(Xe,we)}return We&&ut?a.apply(this,B):(Xe=this.thru(pe),We?v?Xe.value()[0]:Xe.value():Xe)})}),Di(["pop","push","shift","sort","splice","unshift"],function(a){var s=hc[a],c=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",v=/^(?:pop|shift)$/.test(a);A.prototype[a]=function(){var E=arguments;if(v&&!this.__chain__){var P=this.value();return s.apply(at(P)?P:[],E)}return this[c](function(U){return s.apply(at(U)?U:[],E)})}}),pr(vt.prototype,function(a,s){var c=A[s];if(c){var v=c.name+"";Rt.call(os,v)||(os[v]=[]),os[v].push({name:s,func:c})}}),os[Dc(n,p).name]=[{name:"wrapper",func:n}],vt.prototype.clone=UT,vt.prototype.reverse=OT,vt.prototype.value=FT,A.prototype.at=db,A.prototype.chain=hb,A.prototype.commit=pb,A.prototype.next=mb,A.prototype.plant=vb,A.prototype.reverse=_b,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=xb,A.prototype.first=A.prototype.head,bl&&(A.prototype[bl]=gb),A},is=pT();lo?((lo.exports=is)._=is,Ch._=is):Rn._=is}).call(Hl)})(Hd,Hd.exports);var hD=Hd.exports;function pD({setFadeStyle:t,setProjectStyling:e}){const[n,i]=et.useState("readMoreButtonUp"),[r,o]=et.useState("readMoreArrowUp"),[l,u]=et.useState("Read More"),[f,d]=et.useState("readMoreText");function h(m,g){i(`readMoreButton${m}`),o(`readMoreArrow${m}`),d("readMoreTextTransition"),setTimeout(()=>{u(`Read ${g}`),d("readMoreText")},250)}return G.jsxs("button",{className:`${n} readMoreButton`,onClick:()=>{n==="readMoreButtonUp"?(h("Down","Less"),e("projectMain")):(h("Up","More"),e("projectMain projectMainLimit"))},children:[G.jsx("p",{className:f,children:l}),G.jsx(Vt,{icon:$N,className:r})]})}function hm({project:t,image:e}){const{title:n,imgAlt:i,imgId:r,desc:o}=t,[l,u]=et.useState("projectFade"),[f,d]=et.useState("projectMain projectMainLimit");return G.jsxs("div",{className:"project",children:[G.jsx("h3",{children:n}),G.jsxs("div",{className:f,children:[G.jsx("div",{className:"projectImgContainer",children:G.jsx("img",{src:e,alt:i,id:r})}),o.map(h=>G.jsx("p",{children:h},o.indexOf(h))),t.githubLink?G.jsxs("div",{className:"projectLink",children:[G.jsx(Vt,{icon:ud,className:"projectLinkIcon"}),G.jsx("a",{href:t.githubLink,className:"projectURL",children:"Visit the GitHub repo"}),G.jsx(Vt,{icon:yy,className:"projectOutgoingIcon"})]}):null,t.hostedLink?G.jsxs("div",{className:"projectLink",children:[G.jsx(Vt,{icon:jN,className:"projectLinkIcon"}),G.jsx("a",{href:t.hostedLink,className:"projectURL",children:"Visit the project"}),G.jsx(Vt,{icon:yy,className:"projectOutgoingIcon"})]}):null]}),G.jsx(pD,{setFadeStyle:u,setProjectStyling:d})]})}const pm=[{title:"PlotTwist",imgAlt:"PlotTwist",imgId:"plotTwistImg",desc:["For the final three weeks of the bootcamp, I worked with a team of five to create an app where users can upload their unwanted books and swap them with other users’ unwanted books. This was my first time working with a larger team and, despite being nervous at first, I enjoyed every second of the collaborative process.","The best part about working with a team was the sense of camaraderie that drove us throughout the project. The majority of the first week was spent planning - leaving us two weeks of development time. We had a lot of features that we wanted to include (some of which were new to all of us, such as a chat functionality) and being able to split the workload and help each other was a big motivation!","That’s not to say we didn’t experience problems during development. Working with new technologies such as React Native and Supabase introduced challenges that we hadn’t anticipated. React Native, while being structurally similar to React.js, was syntactically different enough to slow down progress at first. Utilising new components such as Flatlists and Drawers, while using a different technique to style the app took a while to get used to.","By the end of the three weeks, we had delivered our MVP, along with some extra features. Once logged into the app, users can upload unwanted books to their library. These books can then be seen by other users and a swap request can be made. Utilising the negotiation interface along with the chat can then lead to a fair swap that satisfies both parties."],githubLink:"https://github.com/jaymckerracher/book-swap-app"},{title:"NorthCoders News (Back End)",imgAlt:"NC News Back End",imgId:"NcBackImg",desc:["For my first solo project on the NorthCoders bootcamp, I was tasked with creating the back end for my NC News application. I used a range of technologies to complete this task and learnt a lot along the way, both syntactically and conceptually.","I used the Express.js framework to create the application and utilised the MVC (Model, View, Controller) design pattern to manage the different end points. These end points would allow users to utilise the most common HTTP methods, such as getting, posting, patching and deleting data.","Using environment variables, the app could be run in three different environments - the test environment, the development environment and the production environment. By having these different environments, I was able to switch between different data sets. This allowed me to test my code efficiently, as I was manipulating data that would re-seed each time I ran a test. It also meant that once the app was hosted along with its front end counterpart, I could safely run tests without the risk of making changes to users data.","Tables within these databases contained information that would be used for the NC News application, such as user profiles, articles, comments and topics. The models that interact with these tables and make queries would also check that the requests to these end points were valid, such as ensuring that comments are a valid length, for example.","I used a range of different libraries and packages that I hadn’t worked with before, such as the ‘dotenv’ library. This library loads environment variables into a current process, ensuring the security of a database once the project had been uploaded to GitHub."],githubLink:"https://github.com/jaymckerracher/nc-news",hostedLink:"https://jay-mckerracher-nc-news.onrender.com/api"},{title:"NorthCoders News (Front End)",imgAlt:"NC News Front End",imgId:"NcFrontImg",desc:["The front end of NC News was built mostly with React. It was my first time using any type of front end technology to build out a project, and I had a lot more fun as the week went on. There was a bit of a learning curve to begin with; there’s a slightly different mindset required when coding in the front end and I definitely struggled during the first couple of days.","Over the course of the week, however, I fount that my mind was starting to adjust. As I got more comfortable using React, I started to think more about UI/UX. Towards the end of the week, I was happily moving around and styling my React elements, thinking about colour schemes, screen layouts and user journeys.","While I’m not a designer by any means, I still had a great time seeing my project come to life. Being able to utilise the API that I had created a few weeks earlier felt great and gave me an insight into how real life applications work.","Since the application allowed user input, I also had to implement features for authentication. For example, if you want to gain access to the app, you have to be a registered user. If a user wants to post a comment, they have to be logged in and the comment has to be a valid length."],githubLink:"https://github.com/jaymckerracher/fe-nc-news",hostedLink:"https://jaymckerracher-ncnews.netlify.app/"}],wy="/portfolio-site/assets/profile-e_UWvFiF.jpeg",mD="/portfolio-site/assets/sql-nWOthk68.png",gD="/portfolio-site/assets/psql-ALMehf4b.png",vD="data:image/svg+xml,%3csvg%20height='2500'%20viewBox='0%200%20291%20291'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='145.5'%20cy='145.5'%20fill='%23f1f3f4'%20r='145.5'/%3e%3cpath%20d='m24.4%20176.3c21%200%2021-13.6%2042-13.6s21%2013.6%2042%2013.6%2021-13.6%2042-13.6%2021%2013.6%2042%2013.6%2021-13.6%2042-13.6c19.9%200%2020.9%2012.2%2038.7%2013.5%2016-70.4-28.1-140.4-98.5-156.3s-140.3%2028.1-156.3%2098.4c-4.3%2018.9-4.3%2038.6-.1%2057.5%202.1.3%204.2.5%206.3.5z'%20fill='%23304ffe'/%3e%3cpath%20d='m132.9%2033h34v31.5h-34z'%20fill='%23ffd54f'/%3e%3cpath%20d='m132.9%2033h12v31.5h-12z'%20fill='%23fff176'/%3e%3cellipse%20cx='144.6'%20cy='40.8'%20fill='%23fff176'%20rx='8'%20ry='10'/%3e%3cpath%20d='m132.1%2029.4c0-9.7%207.9-17.6%2017.6-17.6s17.6%207.9%2017.6%2017.6'%20fill='%23f4511e'/%3e%3cpath%20d='m149.8%2011.8c9.6%200%2017.4%207.8%2017.4%2017.5v.1h-17.4z'%20fill='%23e64a19'/%3e%3cpath%20d='m130.9%2028.8h37.4c1.3%200%202.3%201%202.3%202.3s-1%202.3-2.3%202.3h-37.4c-1.3%200-2.3-1-2.3-2.3s1.1-2.3%202.3-2.3z'%20fill='%23f4511e'/%3e%3cpath%20d='m128%20161.5%204.9-97.3h34l4.4%2092.5z'%20fill='%23c5cae9'/%3e%3cpath%20d='m167.4%2071.7%201.3%2025.8'%20fill='none'/%3e%3cpath%20d='m131.6%2088.4-1.3%2027%2038.4-17.9-1.3-25.8z'%20fill='%23ff7043'/%3e%3cpath%20d='m170%20122.8%201.3%2025.8'%20fill='none'/%3e%3cpath%20d='m128.9%20142-1.4%2027%2043.8-20.4-1.3-25.8z'%20fill='%23ff7043'/%3e%3cpath%20d='m127.7%2049.9h43.9v14.4h-43.9z'%20fill='%23e64a19'/%3e%3cpath%20d='m127.7%2049.9h28.8v14.4h-28.8z'%20fill='%23f4511e'/%3e%3cpath%20d='m149.3%2049.9c0%205.2-4.9%209.4-10.8%209.4s-10.8-4.2-10.8-9.4'%20fill='%23ffe082'%20opacity='.5'/%3e%3cpath%20d='m205%2045.9c1.2%200%202.3.3%203.3.7a13.9%2013.9%200%200%201%2026.8-3.6%209.3%209.3%200%201%201%200%2018.6h-30.1c-4.4%200-7.9-3.5-7.9-7.9s3.5-7.8%207.9-7.8z'%20fill='%232979ff'/%3e%3cpath%20d='m115.5%20121.1c1%200%201.9.2%202.8.6.6-6.5%206.3-11.2%2012.7-10.7%204.5.4%208.4%203.4%2010%207.6%204.4-.2%208.1%203.1%208.3%207.5s-3.1%208.1-7.5%208.3h-26.2c-3.7-.1-6.6-3.3-6.4-6.9%200-3.5%202.8-6.3%206.3-6.4z'%20fill='%23448aff'/%3e%3ccircle%20cx='180.9'%20cy='30.5'%20fill='%23fdd835'%20r='1.4'/%3e%3cg%20fill='%23fff9c4'%3e%3ccircle%20cx='193.4'%20cy='110.1'%20r='2.5'/%3e%3ccircle%20cx='44.4'%20cy='87.6'%20r='2.5'/%3e%3ccircle%20cx='84.5'%20cy='130.4'%20r='2.5'/%3e%3ccircle%20cx='182.8'%20cy='70.8'%20r='2.5'/%3e%3ccircle%20cx='234.6'%20cy='134.1'%20r='2.5'/%3e%3c/g%3e%3cg%20fill='%23fdd835'%3e%3ccircle%20cx='39.1'%20cy='143.3'%20r='1.4'/%3e%3ccircle%20cx='52.2'%20cy='114.7'%20r='1.4'/%3e%3ccircle%20cx='61'%20cy='107.3'%20r='1.4'/%3e%3ccircle%20cx='98.1'%20cy='74.2'%20r='1.4'/%3e%3ccircle%20cx='215.4'%20cy='78.2'%20r='1.4'/%3e%3ccircle%20cx='271.1'%20cy='137.4'%20r='1.4'/%3e%3ccircle%20cx='74.6'%20cy='69.9'%20r='1.4'/%3e%3ccircle%20cx='199.8'%20cy='138'%20r='1.4'/%3e%3ccircle%20cx='242.7'%20cy='102.5'%20r='1.4'/%3e%3c/g%3e%3cpath%20d='m133.5%2032.5s-66.5-9.3-66.7-9.3c-26%2017-38%2035-44%2044l110.6-16.2z'%20fill='%23ffe082'%20opacity='.5'/%3e%3cpath%20d='m168.2%2064.2h-17.2v88.1l20.7%209.2z'%20fill='%23304ffe'%20opacity='.5'/%3e%3cpath%20d='m108.7%20176.6c21%200%2021-13.6%2042-13.6s21%2013.6%2042%2013.6c17.8%200%2020.5-9.8%2033.8-12.8-18.1-9.9-45.1-16.2-75.3-16.2s-57.6%206.4-75.7%2016.4c12.8%203.1%2015.6%2012.6%2033.2%2012.6z'%20fill='%2300c853'/%3e%3cpath%20d='m108.8%20176.4c21%200%2021-13.6%2042-13.6h.4l-.2-15c-30%200-57%206.2-75%2016%2012.5%203.2%2015.4%2012.6%2032.8%2012.6z'%20fill='%2364dd17'/%3e%3c/svg%3e",_D="/portfolio-site/assets/jest-Te7-eAiQ.png",xD="data:image/svg+xml,%3csvg%20width='2500'%20height='2500'%20viewBox='0%200%20256%20256'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%3e%3cpath%20d='M153.094%20165.679l-62.785-13.12a14.631%2014.631%200%200%201-.876%201.475l57.157%2083.378%203.448-3.444%209.724-60.47a11.458%2011.458%200%200%201-6.668-7.82zM130.19%2083.605c-2.352%203.608-6.412%205.996-11.036%205.996-.712%200-1.404-.072-2.084-.18l-28.633%2044.801%2076.498-32.92c-.024-.308-.092-.596-.092-.912%200-.644.088-1.268.192-1.884l-34.845-14.9zm2.08-8.164l37.065%2015.848a11.447%2011.447%200%200%201%203.976-2.008l6.092-37.88-23.209-23.209L130.07%2069.07a13.013%2013.013%200%200%201%202.2%206.372zm77.665%206.492l-23.26-23.264-5.056%2031.408a11.628%2011.628%200%200%201%203.396%202.584l24.92-10.728zm-55.729%2075.473a11.355%2011.355%200%200%201%209.089-5.844l6.68-41.548c-.524-.348-.992-.764-1.452-1.192l-76.938%2033.112c.196.804.332%201.624.396%202.476l62.225%2012.996zm62.065-69.133l-26.912%2011.58%2066.401%2028.389.24-.24-39.729-39.729zm-48.092%2085.35l-8.088%2050.284%2046.964-46.964-33.828-7.064a11.366%2011.366%200%200%201-5.048%203.744zm-91.286-12.928c-1.7%200-3.328-.292-4.852-.809l-15.6%2024.413-6.028-6.024%2014.776-23.12a16.066%2016.066%200%200%201-1.02-1.417l-26.768%2011.525-6.345-6.345%2029.3-12.612L7.385%20135.25.14%20128.002l2.292-2.292%2061.085%2012.752a14.981%2014.981%200%200%201%202.668-3.616L36.537%2091.601l5.988-5.988L73.5%20130.798a15.283%2015.283%200%200%201%203.392-.396c1.308%200%202.576.184%203.788.496l28.985-45.353a13.126%2013.126%200%200%201-3.676-9.116c0-1.04.132-2.048.36-3.016l-36.16-15.46%206.343-6.344%2034.26%2014.652a13.12%2013.12%200%200%201%2012.653-2.268l26.724-41.825L128.002%200%200%20128.002l128.002%20128.002%2012.596-12.596-57.585-84.01a15.117%2015.117%200%200%201-6.12%201.297zm101.23-48.89l-6.796%2042.237a11.359%2011.359%200%200%201%204.196%207.813l38.572%208.052%2035.32-35.32-63.752-27.257a11.508%2011.508%200%200%201-7.54%204.476z'%20fill='%2325C7B7'/%3e%3c/svg%3e",yD="/portfolio-site/assets/agile-3Fq5K897.png",SD="/portfolio-site/assets/paired-FDnPXnN0.png",MD="/portfolio-site/assets/plottwist-dkKJp6cE.png",ED="/portfolio-site/assets/nc-news-back-bkZEfXDC.png",wD="/portfolio-site/assets/nc-news-front-ipdMg-rm.png",TD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADvklEQVR4nO2bX2iVZRzHP7/3YowQGRJRJuJALEbFVIrwYoiMXWiNLgaTsoJuIhJvvDHvduOuuiqJGGIEiUQKEUuiUJYolKGC0GqkbEEkuoWNwjW3fbt4zrtztr07jO193t92jp+rc56X8/L9/t7nOe/z5/czIiMpAbYBO4BngS3ARqAJaAQSYAIYB+4AvwODwHXguplNxNRnMW4qaT3wEvAysAd4bJm3mgAuA/3AWTMbzkVgLCS1SfpM0r/Kn2lJA5JeldTg7XUOkjol/RDB9GKMSDroHghJraWn4sVNSa94GG+Q1CvpgaP5Sr6UtLEo81slXXE2nMVdSZ2xzbdLGnM2Wo1pSUdjmd8v6T9ng0vlA4X5R27mD2j1jPel0qc8giCpS2vPfMpxrSQIChOb+84mVkpPNY+LToUlbQausPxp7GphBnjNzE5nXcwMgMIM6wKwK6KwIrkHbM9aSyw2Po5QO+YhrDxPKOP/YEEPkNQCXANW14IjH940s08rG7IC8C3QXpikYrkNPGVm42nDnC4hqZ3aNQ/wOHCwsmFOD5A0ALQVqciBv4DmtBfM9gBJrdS+eYANwBvpl8oh8HbxWtx4N/1gMPve/5MQnXrheTP7Ke0Bu6kv8wDdUB4C+xyFeLEXykPgBvCMqxwfnkwU9vBbvJU48WICtLL4mqDW2ZkAT3urcGRbAjR7q3Bka0I4qKxXmhJgvbcKTxJgnbcITxJgyluEJw8DQFgf1y0JIS2lXhlNgJveKhwZToAhbxWO/JIAVwmnJ/XItXQ5PEh9rgmeSFeB37nK8OFnM7udBqDfVYoPX0N5H+A8MOqnxYUzUAqAmU0Cn7vKKZYh4EeYuxP0EfXzNugzsxlYeDT2DdDhIqk4/iEcjY3Cwr3AqukkNcKHqXnIPh7/ipDpXYvcIRyP30sbsnaDDxPS1GuR9yrNQ0YAzGwI6C1MUnF8D3wyv7FaktRF4IW4mgpjHNhpZr/Nv5B5IFKaF7xOyK6qBd7JMg9VToRKQ6EbmIylqiCOmdmpZf9aoURlrabKfqyc8oXf0toLwklFyBhfK+ny+Tz5jCDslfS3s7lqTEvqUQzzFUFokXTD12cmY5K6ohmfF4RHJL2v1fO/cE7SpkLMzwvEDkmXHI2PqKinXiUIiUJVSZHD4g9JhyQ1upqvpBSIDklnFOdtMa3Q2w4ox4rRWMXTG4BOQvF0G/DoMm81SSiePgd8YWa38lFYJkoAKlF4JbUAz1Eun99ESMxIcxOmCIe0o8At4FdC+fzV2OXz/wMZcEHJGpp3GwAAAABJRU5ErkJggg==";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xv="163",AD=0,Ty=1,bD=2,XE=1,CD=2,Gr=3,to=0,di=1,jr=2,ja=0,el=1,Ay=2,by=3,Cy=4,RD=5,Co=100,PD=101,LD=102,ID=103,ND=104,DD=200,UD=201,OD=202,FD=203,i0=204,r0=205,kD=206,zD=207,BD=208,HD=209,VD=210,GD=211,WD=212,XD=213,jD=214,$D=0,YD=1,qD=2,Vd=3,KD=4,ZD=5,QD=6,JD=7,jE=0,eU=1,tU=2,$a=0,nU=1,iU=2,rU=3,aU=4,oU=5,sU=6,lU=7,$E=300,fl=301,dl=302,a0=303,o0=304,gh=306,s0=1e3,Uo=1001,l0=1002,ji=1003,uU=1004,wf=1005,lr=1006,mm=1007,Oo=1008,Ya=1009,cU=1010,fU=1011,YE=1012,qE=1013,hl=1014,Fa=1015,Gd=1016,KE=1017,ZE=1018,Ju=1020,dU=35902,hU=1021,pU=1022,wr=1023,mU=1024,gU=1025,tl=1026,Gu=1027,vU=1028,QE=1029,_U=1030,JE=1031,ew=1033,gm=33776,vm=33777,_m=33778,xm=33779,Ry=35840,Py=35841,Ly=35842,Iy=35843,tw=36196,Ny=37492,Dy=37496,Uy=37808,Oy=37809,Fy=37810,ky=37811,zy=37812,By=37813,Hy=37814,Vy=37815,Gy=37816,Wy=37817,Xy=37818,jy=37819,$y=37820,Yy=37821,ym=36492,qy=36494,Ky=36495,xU=36283,Zy=36284,Qy=36285,Jy=36286,yU=3200,SU=3201,MU=0,EU=1,Ia="",xr="srgb",oo="srgb-linear",yv="display-p3",vh="display-p3-linear",Wd="linear",Yt="srgb",Xd="rec709",jd="p3",ps=7680,e2=519,wU=512,TU=513,AU=514,nw=515,bU=516,CU=517,RU=518,PU=519,t2=35044,n2="300 es",qr=2e3,$d=2001;class xl{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sm=Math.PI/180,u0=180/Math.PI;function ec(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[t&255]+Bn[t>>8&255]+Bn[t>>16&255]+Bn[t>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function si(t,e,n){return Math.max(e,Math.min(n,t))}function LU(t,e){return(t%e+e)%e}function Mm(t,e,n){return(1-n)*t+n*e}function Kl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,i,r,o,l,u,f,d){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,l,u,f,d)}set(e,n,i,r,o,l,u,f,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=u,h[3]=n,h[4]=o,h[5]=f,h[6]=i,h[7]=l,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],h=i[4],m=i[7],g=i[2],y=i[5],M=i[8],w=r[0],_=r[3],p=r[6],S=r[1],x=r[4],C=r[7],O=r[2],N=r[5],I=r[8];return o[0]=l*w+u*S+f*O,o[3]=l*_+u*x+f*N,o[6]=l*p+u*C+f*I,o[1]=d*w+h*S+m*O,o[4]=d*_+h*x+m*N,o[7]=d*p+h*C+m*I,o[2]=g*w+y*S+M*O,o[5]=g*_+y*x+M*N,o[8]=g*p+y*C+M*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8];return n*l*h-n*u*d-i*o*h+i*u*f+r*o*d-r*l*f}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=h*l-u*d,g=u*f-h*o,y=d*o-l*f,M=n*m+i*g+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=m*w,e[1]=(r*d-h*i)*w,e[2]=(u*i-r*l)*w,e[3]=g*w,e[4]=(h*n-r*f)*w,e[5]=(r*o-u*n)*w,e[6]=y*w,e[7]=(i*f-d*n)*w,e[8]=(l*n-i*o)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,l,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-r*d,r*f,-r*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Em.makeScale(e,n)),this}rotate(e){return this.premultiply(Em.makeRotation(-e)),this}translate(e,n){return this.premultiply(Em.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Em=new ft;function iw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IU(){const t=Wu("canvas");return t.style.display="block",t}const i2={};function NU(t){t in i2||(i2[t]=!0,console.warn(t))}const r2=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),a2=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tf={[oo]:{transfer:Wd,primaries:Xd,toReference:t=>t,fromReference:t=>t},[xr]:{transfer:Yt,primaries:Xd,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vh]:{transfer:Wd,primaries:jd,toReference:t=>t.applyMatrix3(a2),fromReference:t=>t.applyMatrix3(r2)},[yv]:{transfer:Yt,primaries:jd,toReference:t=>t.convertSRGBToLinear().applyMatrix3(a2),fromReference:t=>t.applyMatrix3(r2).convertLinearToSRGB()}},DU=new Set([oo,vh]),Ft={enabled:!0,_workingColorSpace:oo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DU.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Tf[e].toReference,r=Tf[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Tf[t].primaries},getTransfer:function(t){return t===Ia?Wd:Tf[t].transfer}};function nl(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wm(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class UU{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Wu("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=nl(o[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(nl(n[i]/255)*255):n[i]=nl(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OU=0;class rw{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OU++}),this.uuid=ec(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Tm(r[l].image)):o.push(Tm(r[l]))}else o=Tm(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Tm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UU.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FU=0;class Qn extends xl{constructor(e=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,i=Uo,r=Uo,o=lr,l=Oo,u=wr,f=Ya,d=Qn.DEFAULT_ANISOTROPY,h=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FU++}),this.uuid=ec(),this.name="",this.source=new rw(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$E)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case s0:e.x=e.x-Math.floor(e.x);break;case Uo:e.x=e.x<0?0:1;break;case l0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case s0:e.y=e.y-Math.floor(e.y);break;case Uo:e.y=e.y<0?0:1;break;case l0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=$E;Qn.DEFAULT_ANISOTROPY=1;class In{constructor(e=0,n=0,i=0,r=1){In.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const f=e.elements,d=f[0],h=f[4],m=f[8],g=f[1],y=f[5],M=f[9],w=f[2],_=f[6],p=f[10];if(Math.abs(h-g)<.01&&Math.abs(m-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(h+g)<.1&&Math.abs(m+w)<.1&&Math.abs(M+_)<.1&&Math.abs(d+y+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(d+1)/2,C=(y+1)/2,O=(p+1)/2,N=(h+g)/4,I=(m+w)/4,k=(M+_)/4;return x>C&&x>O?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=N/i,o=I/i):C>O?C<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),i=N/r,o=k/r):O<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(O),i=I/o,r=k/o),this.set(i,r,o,n),this}let S=Math.sqrt((_-M)*(_-M)+(m-w)*(m-w)+(g-h)*(g-h));return Math.abs(S)<.001&&(S=1),this.x=(_-M)/S,this.y=(m-w)/S,this.z=(g-h)/S,this.w=Math.acos((d+y+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kU extends xl{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new In(0,0,e,n),this.scissorTest=!1,this.viewport=new In(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new Qn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rw(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $o extends kU{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class aw extends Qn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ji,this.minFilter=ji,this.wrapR=Uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zU extends Qn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ji,this.minFilter=ji,this.wrapR=Uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,l,u){let f=i[r+0],d=i[r+1],h=i[r+2],m=i[r+3];const g=o[l+0],y=o[l+1],M=o[l+2],w=o[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=h,e[n+3]=m;return}if(u===1){e[n+0]=g,e[n+1]=y,e[n+2]=M,e[n+3]=w;return}if(m!==w||f!==g||d!==y||h!==M){let _=1-u;const p=f*g+d*y+h*M+m*w,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const O=Math.sqrt(x),N=Math.atan2(O,p*S);_=Math.sin(_*N)/O,u=Math.sin(u*N)/O}const C=u*S;if(f=f*_+g*C,d=d*_+y*C,h=h*_+M*C,m=m*_+w*C,_===1-u){const O=1/Math.sqrt(f*f+d*d+h*h+m*m);f*=O,d*=O,h*=O,m*=O}}e[n]=f,e[n+1]=d,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,o,l){const u=i[r],f=i[r+1],d=i[r+2],h=i[r+3],m=o[l],g=o[l+1],y=o[l+2],M=o[l+3];return e[n]=u*M+h*m+f*y-d*g,e[n+1]=f*M+h*g+d*m-u*y,e[n+2]=d*M+h*y+u*g-f*m,e[n+3]=h*M-u*m-f*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),h=u(r/2),m=u(o/2),g=f(i/2),y=f(r/2),M=f(o/2);switch(l){case"XYZ":this._x=g*h*m+d*y*M,this._y=d*y*m-g*h*M,this._z=d*h*M+g*y*m,this._w=d*h*m-g*y*M;break;case"YXZ":this._x=g*h*m+d*y*M,this._y=d*y*m-g*h*M,this._z=d*h*M-g*y*m,this._w=d*h*m+g*y*M;break;case"ZXY":this._x=g*h*m-d*y*M,this._y=d*y*m+g*h*M,this._z=d*h*M+g*y*m,this._w=d*h*m-g*y*M;break;case"ZYX":this._x=g*h*m-d*y*M,this._y=d*y*m+g*h*M,this._z=d*h*M-g*y*m,this._w=d*h*m+g*y*M;break;case"YZX":this._x=g*h*m+d*y*M,this._y=d*y*m+g*h*M,this._z=d*h*M-g*y*m,this._w=d*h*m-g*y*M;break;case"XZY":this._x=g*h*m-d*y*M,this._y=d*y*m-g*h*M,this._z=d*h*M+g*y*m,this._w=d*h*m+g*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],l=n[1],u=n[5],f=n[9],d=n[2],h=n[6],m=n[10],g=i+u+m;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(h-f)*y,this._y=(o-d)*y,this._z=(l-r)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(h-f)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+d)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(o-d)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(f+h)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(l-r)/y,this._x=(o+d)/y,this._y=(f+h)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(si(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,l=e._w,u=n._x,f=n._y,d=n._z,h=n._w;return this._x=i*h+l*u+r*d-o*f,this._y=r*h+l*f+o*u-i*d,this._z=o*h+l*d+i*f-r*u,this._w=l*h-i*u-r*f-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+r*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-n;return this._w=y*l+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*o+n*this._z,this.normalize(),this}const d=Math.sqrt(f),h=Math.atan2(d,u),m=Math.sin((1-n)*h)/d,g=Math.sin(n*h)/d;return this._w=l*m+this._w*g,this._x=i*m+this._x*g,this._y=r*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(o2.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(o2.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*r-u*i),h=2*(u*n-o*r),m=2*(o*i-l*n);return this.x=n+f*d+l*m-u*h,this.y=i+f*h+u*d-o*m,this.z=r+f*m+o*h-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=r*f-o*u,this.y=o*l-i*f,this.z=i*u-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Am.copy(this).projectOnVector(e),this.sub(Am)}reflect(e){return this.sub(Am.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Am=new Z,o2=new tc;class nc{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,nr):nr.fromBufferAttribute(o,l),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Af.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Af.copy(i.boundingBox)),Af.applyMatrix4(e.matrixWorld),this.union(Af)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zl),bf.subVectors(this.max,Zl),gs.subVectors(e.a,Zl),vs.subVectors(e.b,Zl),_s.subVectors(e.c,Zl),Ma.subVectors(vs,gs),Ea.subVectors(_s,vs),_o.subVectors(gs,_s);let n=[0,-Ma.z,Ma.y,0,-Ea.z,Ea.y,0,-_o.z,_o.y,Ma.z,0,-Ma.x,Ea.z,0,-Ea.x,_o.z,0,-_o.x,-Ma.y,Ma.x,0,-Ea.y,Ea.x,0,-_o.y,_o.x,0];return!bm(n,gs,vs,_s,bf)||(n=[1,0,0,0,1,0,0,0,1],!bm(n,gs,vs,_s,bf))?!1:(Cf.crossVectors(Ma,Ea),n=[Cf.x,Cf.y,Cf.z],bm(n,gs,vs,_s,bf))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],nr=new Z,Af=new nc,gs=new Z,vs=new Z,_s=new Z,Ma=new Z,Ea=new Z,_o=new Z,Zl=new Z,bf=new Z,Cf=new Z,xo=new Z;function bm(t,e,n,i,r){for(let o=0,l=t.length-3;o<=l;o+=3){xo.fromArray(t,o);const u=r.x*Math.abs(xo.x)+r.y*Math.abs(xo.y)+r.z*Math.abs(xo.z),f=e.dot(xo),d=n.dot(xo),h=i.dot(xo);if(Math.max(-Math.max(f,d,h),Math.min(f,d,h))>u)return!1}return!0}const BU=new nc,Ql=new Z,Cm=new Z;class _h{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BU.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ql.subVectors(e,this.center);const n=Ql.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ql,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ql.copy(e.center).add(Cm)),this.expandByPoint(Ql.copy(e.center).sub(Cm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zr=new Z,Rm=new Z,Rf=new Z,wa=new Z,Pm=new Z,Pf=new Z,Lm=new Z;class ow{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,n),zr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rm.copy(e).add(n).multiplyScalar(.5),Rf.copy(n).sub(e).normalize(),wa.copy(this.origin).sub(Rm);const o=e.distanceTo(n)*.5,l=-this.direction.dot(Rf),u=wa.dot(this.direction),f=-wa.dot(Rf),d=wa.lengthSq(),h=Math.abs(1-l*l);let m,g,y,M;if(h>0)if(m=l*f-u,g=l*u-f,M=o*h,m>=0)if(g>=-M)if(g<=M){const w=1/h;m*=w,g*=w,y=m*(m+l*g+2*u)+g*(l*m+g+2*f)+d}else g=o,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;else g=-o,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;else g<=-M?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-f),o),y=-m*m+g*(g+2*f)+d):g<=M?(m=0,g=Math.min(Math.max(-o,-f),o),y=g*(g+2*f)+d):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-f),o),y=-m*m+g*(g+2*f)+d);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Rm).addScaledVector(Rf,g),y}intersectSphere(e,n){zr.subVectors(e.center,this.origin);const i=zr.dot(this.direction),r=zr.dot(zr)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,l,u,f;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),h>=0?(o=(e.min.y-g.y)*h,l=(e.max.y-g.y)*h):(o=(e.max.y-g.y)*h,l=(e.min.y-g.y)*h),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),m>=0?(u=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,n,i,r,o){Pm.subVectors(n,e),Pf.subVectors(i,e),Lm.crossVectors(Pm,Pf);let l=this.direction.dot(Lm),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;wa.subVectors(this.origin,e);const f=u*this.direction.dot(Pf.crossVectors(wa,Pf));if(f<0)return null;const d=u*this.direction.dot(Pm.cross(wa));if(d<0||f+d>l)return null;const h=-u*wa.dot(Lm);return h<0?null:this.at(h/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,n,i,r,o,l,u,f,d,h,m,g,y,M,w,_){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,l,u,f,d,h,m,g,y,M,w,_)}set(e,n,i,r,o,l,u,f,d,h,m,g,y,M,w,_){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=u,p[13]=f,p[2]=d,p[6]=h,p[10]=m,p[14]=g,p[3]=y,p[7]=M,p[11]=w,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),o=1/xs.setFromMatrixColumn(e,1).length(),l=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=l*h,y=l*m,M=u*h,w=u*m;n[0]=f*h,n[4]=-f*m,n[8]=d,n[1]=y+M*d,n[5]=g-w*d,n[9]=-u*f,n[2]=w-g*d,n[6]=M+y*d,n[10]=l*f}else if(e.order==="YXZ"){const g=f*h,y=f*m,M=d*h,w=d*m;n[0]=g+w*u,n[4]=M*u-y,n[8]=l*d,n[1]=l*m,n[5]=l*h,n[9]=-u,n[2]=y*u-M,n[6]=w+g*u,n[10]=l*f}else if(e.order==="ZXY"){const g=f*h,y=f*m,M=d*h,w=d*m;n[0]=g-w*u,n[4]=-l*m,n[8]=M+y*u,n[1]=y+M*u,n[5]=l*h,n[9]=w-g*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const g=l*h,y=l*m,M=u*h,w=u*m;n[0]=f*h,n[4]=M*d-y,n[8]=g*d+w,n[1]=f*m,n[5]=w*d+g,n[9]=y*d-M,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const g=l*f,y=l*d,M=u*f,w=u*d;n[0]=f*h,n[4]=w-g*m,n[8]=M*m+y,n[1]=m,n[5]=l*h,n[9]=-u*h,n[2]=-d*h,n[6]=y*m+M,n[10]=g-w*m}else if(e.order==="XZY"){const g=l*f,y=l*d,M=u*f,w=u*d;n[0]=f*h,n[4]=-m,n[8]=d*h,n[1]=g*m+w,n[5]=l*h,n[9]=y*m-M,n[2]=M*m-y,n[6]=u*h,n[10]=w*m+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HU,e,VU)}lookAt(e,n,i){const r=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Ta.crossVectors(i,yi),Ta.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Ta.crossVectors(i,yi)),Ta.normalize(),Lf.crossVectors(yi,Ta),r[0]=Ta.x,r[4]=Lf.x,r[8]=yi.x,r[1]=Ta.y,r[5]=Lf.y,r[9]=yi.y,r[2]=Ta.z,r[6]=Lf.z,r[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],h=i[1],m=i[5],g=i[9],y=i[13],M=i[2],w=i[6],_=i[10],p=i[14],S=i[3],x=i[7],C=i[11],O=i[15],N=r[0],I=r[4],k=r[8],R=r[12],T=r[1],X=r[5],ie=r[9],H=r[13],re=r[2],ae=r[6],de=r[10],ce=r[14],z=r[3],ne=r[7],ee=r[11],ge=r[15];return o[0]=l*N+u*T+f*re+d*z,o[4]=l*I+u*X+f*ae+d*ne,o[8]=l*k+u*ie+f*de+d*ee,o[12]=l*R+u*H+f*ce+d*ge,o[1]=h*N+m*T+g*re+y*z,o[5]=h*I+m*X+g*ae+y*ne,o[9]=h*k+m*ie+g*de+y*ee,o[13]=h*R+m*H+g*ce+y*ge,o[2]=M*N+w*T+_*re+p*z,o[6]=M*I+w*X+_*ae+p*ne,o[10]=M*k+w*ie+_*de+p*ee,o[14]=M*R+w*H+_*ce+p*ge,o[3]=S*N+x*T+C*re+O*z,o[7]=S*I+x*X+C*ae+O*ne,o[11]=S*k+x*ie+C*de+O*ee,o[15]=S*R+x*H+C*ce+O*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],l=e[1],u=e[5],f=e[9],d=e[13],h=e[2],m=e[6],g=e[10],y=e[14],M=e[3],w=e[7],_=e[11],p=e[15];return M*(+o*f*m-r*d*m-o*u*g+i*d*g+r*u*y-i*f*y)+w*(+n*f*y-n*d*g+o*l*g-r*l*y+r*d*h-o*f*h)+_*(+n*d*m-n*u*y-o*l*m+i*l*y+o*u*h-i*d*h)+p*(-r*u*h-n*f*m+n*u*g+r*l*m-i*l*g+i*f*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=e[9],g=e[10],y=e[11],M=e[12],w=e[13],_=e[14],p=e[15],S=m*_*d-w*g*d+w*f*y-u*_*y-m*f*p+u*g*p,x=M*g*d-h*_*d-M*f*y+l*_*y+h*f*p-l*g*p,C=h*w*d-M*m*d+M*u*y-l*w*y-h*u*p+l*m*p,O=M*m*f-h*w*f-M*u*g+l*w*g+h*u*_-l*m*_,N=n*S+i*x+r*C+o*O;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=S*I,e[1]=(w*g*o-m*_*o-w*r*y+i*_*y+m*r*p-i*g*p)*I,e[2]=(u*_*o-w*f*o+w*r*d-i*_*d-u*r*p+i*f*p)*I,e[3]=(m*f*o-u*g*o-m*r*d+i*g*d+u*r*y-i*f*y)*I,e[4]=x*I,e[5]=(h*_*o-M*g*o+M*r*y-n*_*y-h*r*p+n*g*p)*I,e[6]=(M*f*o-l*_*o-M*r*d+n*_*d+l*r*p-n*f*p)*I,e[7]=(l*g*o-h*f*o+h*r*d-n*g*d-l*r*y+n*f*y)*I,e[8]=C*I,e[9]=(M*m*o-h*w*o-M*i*y+n*w*y+h*i*p-n*m*p)*I,e[10]=(l*w*o-M*u*o+M*i*d-n*w*d-l*i*p+n*u*p)*I,e[11]=(h*u*o-l*m*o-h*i*d+n*m*d+l*i*y-n*u*y)*I,e[12]=O*I,e[13]=(h*w*r-M*m*r+M*i*g-n*w*g-h*i*_+n*m*_)*I,e[14]=(M*u*r-l*w*r-M*i*f+n*w*f+l*i*_-n*u*_)*I,e[15]=(l*m*r-h*u*r+h*i*f-n*m*f-l*i*g+n*u*g)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,d=o*l,h=o*u;return this.set(d*l+i,d*u-r*f,d*f+r*u,0,d*u+r*f,h*u+i,h*f-r*l,0,d*f-r*u,h*f+r*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,d=o+o,h=l+l,m=u+u,g=o*d,y=o*h,M=o*m,w=l*h,_=l*m,p=u*m,S=f*d,x=f*h,C=f*m,O=i.x,N=i.y,I=i.z;return r[0]=(1-(w+p))*O,r[1]=(y+C)*O,r[2]=(M-x)*O,r[3]=0,r[4]=(y-C)*N,r[5]=(1-(g+p))*N,r[6]=(_+S)*N,r[7]=0,r[8]=(M+x)*I,r[9]=(_-S)*I,r[10]=(1-(g+w))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=xs.set(r[0],r[1],r[2]).length();const l=xs.set(r[4],r[5],r[6]).length(),u=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ir.copy(this);const d=1/o,h=1/l,m=1/u;return ir.elements[0]*=d,ir.elements[1]*=d,ir.elements[2]*=d,ir.elements[4]*=h,ir.elements[5]*=h,ir.elements[6]*=h,ir.elements[8]*=m,ir.elements[9]*=m,ir.elements[10]*=m,n.setFromRotationMatrix(ir),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,r,o,l,u=qr){const f=this.elements,d=2*o/(n-e),h=2*o/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let y,M;if(u===qr)y=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(u===$d)y=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=h,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,r,o,l,u=qr){const f=this.elements,d=1/(n-e),h=1/(i-r),m=1/(l-o),g=(n+e)*d,y=(i+r)*h;let M,w;if(u===qr)M=(l+o)*m,w=-2*m;else if(u===$d)M=o*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*h,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new Z,ir=new mn,HU=new Z(0,0,0),VU=new Z(1,1,1),Ta=new Z,Lf=new Z,yi=new Z,s2=new mn,l2=new tc;class aa{constructor(e=0,n=0,i=0,r=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],f=r[1],d=r[5],h=r[9],m=r[2],g=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(si(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-si(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(si(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-si(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(si(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-si(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-h,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return s2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s2,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return l2.setFromEuler(this),this.setFromQuaternion(l2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class sw{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GU=0;const u2=new Z,ys=new tc,Br=new mn,If=new Z,Jl=new Z,WU=new Z,XU=new tc,c2=new Z(1,0,0),f2=new Z(0,1,0),d2=new Z(0,0,1),h2={type:"added"},jU={type:"removed"},Ss={type:"childadded",child:null},Im={type:"childremoved",child:null};class hi extends xl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GU++}),this.uuid=ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new Z,n=new aa,i=new tc,r=new Z(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mn},normalMatrix:{value:new ft}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(c2,e)}rotateY(e){return this.rotateOnAxis(f2,e)}rotateZ(e){return this.rotateOnAxis(d2,e)}translateOnAxis(e,n){return u2.copy(e).applyQuaternion(this.quaternion),this.position.add(u2.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(c2,e)}translateY(e){return this.translateOnAxis(f2,e)}translateZ(e){return this.translateOnAxis(d2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?If.copy(e):If.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(Jl,If,this.up):Br.lookAt(If,Jl,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Br),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h2),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jU),Im.child=e,this.dispatchEvent(Im),Im.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h2),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,e,WU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,XU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const u=r[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,h=f.length;d<h;d++){const m=f[d];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),h=l(e.images),m=l(e.shapes),g=l(e.skeletons),y=l(e.animations),M=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=r,i;function l(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hi.DEFAULT_UP=new Z(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new Z,Hr=new Z,Nm=new Z,Vr=new Z,Ms=new Z,Es=new Z,p2=new Z,Dm=new Z,Um=new Z,Om=new Z;class Mr{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),rr.subVectors(e,n),r.cross(rr);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){rr.subVectors(r,n),Hr.subVectors(i,n),Nm.subVectors(e,n);const l=rr.dot(rr),u=rr.dot(Hr),f=rr.dot(Nm),d=Hr.dot(Hr),h=Hr.dot(Nm),m=l*d-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,y=(d*f-u*h)*g,M=(l*h-u*f)*g;return o.set(1-y-M,M,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,n,i,r,o,l,u,f){return this.getBarycoord(e,n,i,r,Vr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Vr.x),f.addScaledVector(l,Vr.y),f.addScaledVector(u,Vr.z),f)}static isFrontFacing(e,n,i,r){return rr.subVectors(i,n),Hr.subVectors(e,n),rr.cross(Hr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),rr.cross(Hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Mr.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Mr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let l,u;Ms.subVectors(r,i),Es.subVectors(o,i),Dm.subVectors(e,i);const f=Ms.dot(Dm),d=Es.dot(Dm);if(f<=0&&d<=0)return n.copy(i);Um.subVectors(e,r);const h=Ms.dot(Um),m=Es.dot(Um);if(h>=0&&m<=h)return n.copy(r);const g=f*m-h*d;if(g<=0&&f>=0&&h<=0)return l=f/(f-h),n.copy(i).addScaledVector(Ms,l);Om.subVectors(e,o);const y=Ms.dot(Om),M=Es.dot(Om);if(M>=0&&y<=M)return n.copy(o);const w=y*d-f*M;if(w<=0&&d>=0&&M<=0)return u=d/(d-M),n.copy(i).addScaledVector(Es,u);const _=h*M-y*m;if(_<=0&&m-h>=0&&y-M>=0)return p2.subVectors(o,r),u=(m-h)/(m-h+(y-M)),n.copy(r).addScaledVector(p2,u);const p=1/(_+w+g);return l=w*p,u=g*p,n.copy(i).addScaledVector(Ms,l).addScaledVector(Es,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},Nf={h:0,s:0,l:0};function Fm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ft.workingColorSpace){if(e=LU(e,1),n=si(n,0,1),i=si(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Fm(l,o,e+1/3),this.g=Fm(l,o,e),this.b=Fm(l,o,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,n=xr){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xr){const i=lw[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}copyLinearToSRGB(e){return this.r=wm(e.r),this.g=wm(e.g),this.b=wm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xr){return Ft.fromWorkingColorSpace(Hn.copy(this),e),Math.round(si(Hn.r*255,0,255))*65536+Math.round(si(Hn.g*255,0,255))*256+Math.round(si(Hn.b*255,0,255))}getHexString(e=xr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Hn.copy(this),n);const i=Hn.r,r=Hn.g,o=Hn.b,l=Math.max(i,r,o),u=Math.min(i,r,o);let f,d;const h=(u+l)/2;if(u===l)f=0,d=0;else{const m=l-u;switch(d=h<=.5?m/(l+u):m/(2-l-u),l){case i:f=(r-o)/m+(r<o?6:0);break;case r:f=(o-i)/m+2;break;case o:f=(i-r)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=h,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=xr){Ft.fromWorkingColorSpace(Hn.copy(this),e);const n=Hn.r,i=Hn.g,r=Hn.b;return e!==xr?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Aa),this.setHSL(Aa.h+e,Aa.s+n,Aa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Aa),e.getHSL(Nf);const i=Mm(Aa.h,Nf.h,n),r=Mm(Aa.s,Nf.s,n),o=Mm(Aa.l,Nf.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Lt;Lt.NAMES=lw;let $U=0;class ic extends xl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$U++}),this.uuid=ec(),this.name="",this.type="Material",this.blending=el,this.side=to,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i0,this.blendDst=r0,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Vd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(i.blending=this.blending),this.side!==to&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==i0&&(i.blendSrc=this.blendSrc),this.blendDst!==r0&&(i.blendDst=this.blendDst),this.blendEquation!==Co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e2&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uw extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=jE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new Z,Df=new At;class br{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=t2,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return NU("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Df.fromBufferAttribute(this,n),Df.applyMatrix3(e),this.setXY(n,Df.x,Df.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),r=ai(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),r=ai(r,this.array),o=ai(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t2&&(e.usage=this.usage),e}}class cw extends br{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fw extends br{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qa extends br{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YU=0;const Hi=new mn,km=new hi,ws=new Z,Si=new nc,eu=new nc,An=new Z;class la extends xl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YU++}),this.uuid=ec(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iw(e)?fw:cw)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,i){return Hi.makeTranslation(e,n,i),this.applyMatrix4(Hi),this}scale(e,n,i){return Hi.makeScale(e,n,i),this.applyMatrix4(Hi),this}lookAt(e){return km.lookAt(e),km.updateMatrix(),this.applyMatrix4(km.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new qa(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _h);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];eu.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(Si.min,eu.min),Si.expandByPoint(An),An.addVectors(Si.max,eu.max),Si.expandByPoint(An)):(Si.expandByPoint(eu.min),Si.expandByPoint(eu.max))}Si.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)An.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(An));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let d=0,h=u.count;d<h;d++)An.fromBufferAttribute(u,d),f&&(ws.fromBufferAttribute(e,d),An.add(ws)),r=Math.max(r,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new br(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let k=0;k<i.count;k++)u[k]=new Z,f[k]=new Z;const d=new Z,h=new Z,m=new Z,g=new At,y=new At,M=new At,w=new Z,_=new Z;function p(k,R,T){d.fromBufferAttribute(i,k),h.fromBufferAttribute(i,R),m.fromBufferAttribute(i,T),g.fromBufferAttribute(o,k),y.fromBufferAttribute(o,R),M.fromBufferAttribute(o,T),h.sub(d),m.sub(d),y.sub(g),M.sub(g);const X=1/(y.x*M.y-M.x*y.y);isFinite(X)&&(w.copy(h).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(X),_.copy(m).multiplyScalar(y.x).addScaledVector(h,-M.x).multiplyScalar(X),u[k].add(w),u[R].add(w),u[T].add(w),f[k].add(_),f[R].add(_),f[T].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let k=0,R=S.length;k<R;++k){const T=S[k],X=T.start,ie=T.count;for(let H=X,re=X+ie;H<re;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new Z,C=new Z,O=new Z,N=new Z;function I(k){O.fromBufferAttribute(r,k),N.copy(O);const R=u[k];x.copy(R),x.sub(O.multiplyScalar(O.dot(R))).normalize(),C.crossVectors(N,R);const X=C.dot(f[k])<0?-1:1;l.setXYZW(k,x.x,x.y,x.z,X)}for(let k=0,R=S.length;k<R;++k){const T=S[k],X=T.start,ie=T.count;for(let H=X,re=X+ie;H<re;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new br(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const r=new Z,o=new Z,l=new Z,u=new Z,f=new Z,d=new Z,h=new Z,m=new Z;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),w=e.getX(g+1),_=e.getX(g+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,_),h.subVectors(l,o),m.subVectors(r,o),h.cross(m),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),u.add(h),f.add(h),d.add(h),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let g=0,y=n.count;g<y;g+=3)r.fromBufferAttribute(n,g+0),o.fromBufferAttribute(n,g+1),l.fromBufferAttribute(n,g+2),h.subVectors(l,o),m.subVectors(r,o),h.cross(m),i.setXYZ(g+0,h.x,h.y,h.z),i.setXYZ(g+1,h.x,h.y,h.z),i.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)An.fromBufferAttribute(e,n),An.normalize(),e.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function e(u,f){const d=u.array,h=u.itemSize,m=u.normalized,g=new d.constructor(f.length*h);let y=0,M=0;for(let w=0,_=f.length;w<_;w++){u.isInterleavedBufferAttribute?y=f[w]*u.data.stride+u.offset:y=f[w]*h;for(let p=0;p<h;p++)g[M++]=d[y++]}return new br(g,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new la,i=this.index.array,r=this.attributes;for(const u in r){const f=r[u],d=e(f,i);n.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,m=d.length;h<m;h++){const g=d[h],y=e(g,i);f.push(y)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],h=[];for(let m=0,g=d.length;m<g;m++){const y=d[m];h.push(y.toJSON(e.data))}h.length>0&&(r[f]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(n))}const o=e.morphAttributes;for(const d in o){const h=[],m=o[d];for(let g=0,y=m.length;g<y;g++)h.push(m[g].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,h=l.length;d<h;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m2=new mn,yo=new ow,Uf=new _h,g2=new Z,Ts=new Z,As=new Z,bs=new Z,zm=new Z,Of=new Z,Ff=new At,kf=new At,zf=new At,v2=new Z,_2=new Z,x2=new Z,Bf=new Z,Hf=new Z;class Kr extends hi{constructor(e=new la,n=new uw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(o&&u){Of.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const h=u[f],m=o[f];h!==0&&(zm.fromBufferAttribute(m,e),l?Of.addScaledVector(zm,h):Of.addScaledVector(zm.sub(n),h))}n.add(Of)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uf.copy(i.boundingSphere),Uf.applyMatrix4(o),yo.copy(e.ray).recast(e.near),!(Uf.containsPoint(yo.origin)===!1&&(yo.intersectSphere(Uf,g2)===null||yo.origin.distanceToSquared(g2)>(e.far-e.near)**2))&&(m2.copy(o).invert(),yo.copy(e.ray).applyMatrix4(m2),!(i.boundingBox!==null&&yo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yo)))}_computeIntersections(e,n,i){let r;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,h=o.attributes.uv1,m=o.attributes.normal,g=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,w=g.length;M<w;M++){const _=g[M],p=l[_.materialIndex],S=Math.max(_.start,y.start),x=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let C=S,O=x;C<O;C+=3){const N=u.getX(C),I=u.getX(C+1),k=u.getX(C+2);r=Vf(this,p,e,i,d,h,m,N,I,k),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=M,p=w;_<p;_+=3){const S=u.getX(_),x=u.getX(_+1),C=u.getX(_+2);r=Vf(this,l,e,i,d,h,m,S,x,C),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,w=g.length;M<w;M++){const _=g[M],p=l[_.materialIndex],S=Math.max(_.start,y.start),x=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let C=S,O=x;C<O;C+=3){const N=C,I=C+1,k=C+2;r=Vf(this,p,e,i,d,h,m,N,I,k),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let _=M,p=w;_<p;_+=3){const S=_,x=_+1,C=_+2;r=Vf(this,l,e,i,d,h,m,S,x,C),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function qU(t,e,n,i,r,o,l,u){let f;if(e.side===di?f=i.intersectTriangle(l,o,r,!0,u):f=i.intersectTriangle(r,o,l,e.side===to,u),f===null)return null;Hf.copy(u),Hf.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Hf);return d<n.near||d>n.far?null:{distance:d,point:Hf.clone(),object:t}}function Vf(t,e,n,i,r,o,l,u,f,d){t.getVertexPosition(u,Ts),t.getVertexPosition(f,As),t.getVertexPosition(d,bs);const h=qU(t,e,n,i,Ts,As,bs,Bf);if(h){r&&(Ff.fromBufferAttribute(r,u),kf.fromBufferAttribute(r,f),zf.fromBufferAttribute(r,d),h.uv=Mr.getInterpolation(Bf,Ts,As,bs,Ff,kf,zf,new At)),o&&(Ff.fromBufferAttribute(o,u),kf.fromBufferAttribute(o,f),zf.fromBufferAttribute(o,d),h.uv1=Mr.getInterpolation(Bf,Ts,As,bs,Ff,kf,zf,new At)),l&&(v2.fromBufferAttribute(l,u),_2.fromBufferAttribute(l,f),x2.fromBufferAttribute(l,d),h.normal=Mr.getInterpolation(Bf,Ts,As,bs,v2,_2,x2,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:u,b:f,c:d,normal:new Z,materialIndex:0};Mr.getNormal(Ts,As,bs,m.normal),h.face=m}return h}class rc extends la{constructor(e=1,n=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],h=[],m=[];let g=0,y=0;M("z","y","x",-1,-1,i,n,e,l,o,0),M("z","y","x",1,-1,i,n,-e,l,o,1),M("x","z","y",1,1,e,i,n,r,l,2),M("x","z","y",1,-1,e,i,-n,r,l,3),M("x","y","z",1,-1,e,n,i,r,o,4),M("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new qa(d,3)),this.setAttribute("normal",new qa(h,3)),this.setAttribute("uv",new qa(m,2));function M(w,_,p,S,x,C,O,N,I,k,R){const T=C/I,X=O/k,ie=C/2,H=O/2,re=N/2,ae=I+1,de=k+1;let ce=0,z=0;const ne=new Z;for(let ee=0;ee<de;ee++){const ge=ee*X-H;for(let Ce=0;Ce<ae;Ce++){const Ze=Ce*T-ie;ne[w]=Ze*S,ne[_]=ge*x,ne[p]=re,d.push(ne.x,ne.y,ne.z),ne[w]=0,ne[_]=0,ne[p]=N>0?1:-1,h.push(ne.x,ne.y,ne.z),m.push(Ce/I),m.push(1-ee/k),ce+=1}}for(let ee=0;ee<k;ee++)for(let ge=0;ge<I;ge++){const Ce=g+ge+ae*ee,Ze=g+ge+ae*(ee+1),Q=g+(ge+1)+ae*(ee+1),he=g+(ge+1)+ae*ee;f.push(Ce,Ze,he),f.push(Ze,Q,he),z+=6}u.addGroup(y,z,R),y+=z,g+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pl(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yn(t){const e={};for(let n=0;n<t.length;n++){const i=pl(t[n]);for(const r in i)e[r]=i[r]}return e}function KU(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dw(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const ZU={clone:pl,merge:Yn};var QU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class no extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QU,this.fragmentShader=JU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pl(e.uniforms),this.uniformsGroups=KU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hw extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=qr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ba=new Z,y2=new At,S2=new At;class Wi extends hw{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=u0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return u0*2*Math.atan(Math.tan(Sm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ba.x,ba.y).multiplyScalar(-e/ba.z),ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ba.x,ba.y).multiplyScalar(-e/ba.z)}getViewSize(e,n){return this.getViewBounds(e,y2,S2),n.subVectors(S2,y2)}setViewOffset(e,n,i,r,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sm*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/f,n-=l.offsetY*i/d,r*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class e5 extends hi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wi(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const o=new Wi(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const l=new Wi(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const u=new Wi(Cs,Rs,e,n);u.layers=this.layers,this.add(u);const f=new Wi(Cs,Rs,e,n);f.layers=this.layers,this.add(f);const d=new Wi(Cs,Rs,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,l,u,f]=n;for(const d of n)this.remove(d);if(e===qr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===$d)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,d,h]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,l),e.setRenderTarget(i,2,r),e.render(n,u),e.setRenderTarget(i,3,r),e.render(n,f),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(m,g,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class pw extends Qn{constructor(e,n,i,r,o,l,u,f,d,h){e=e!==void 0?e:[],n=n!==void 0?n:fl,super(e,n,i,r,o,l,u,f,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t5 extends $o{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pw(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:lr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rc(5,5,5),o=new no({name:"CubemapFromEquirect",uniforms:pl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:ja});o.uniforms.tEquirect.value=n;const l=new Kr(r,o),u=n.minFilter;return n.minFilter===Oo&&(n.minFilter=lr),new e5(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(o)}}const Bm=new Z,n5=new Z,i5=new ft;class Ao{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bm.subVectors(i,n).cross(n5.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||i5.getNormalMatrix(e),r=this.coplanarPoint(Bm).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const So=new _h,Gf=new Z;class mw{constructor(e=new Ao,n=new Ao,i=new Ao,r=new Ao,o=new Ao,l=new Ao){this.planes=[e,n,i,r,o,l]}set(e,n,i,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qr){const i=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],f=r[3],d=r[4],h=r[5],m=r[6],g=r[7],y=r[8],M=r[9],w=r[10],_=r[11],p=r[12],S=r[13],x=r[14],C=r[15];if(i[0].setComponents(f-o,g-d,_-y,C-p).normalize(),i[1].setComponents(f+o,g+d,_+y,C+p).normalize(),i[2].setComponents(f+l,g+h,_+M,C+S).normalize(),i[3].setComponents(f-l,g-h,_-M,C-S).normalize(),i[4].setComponents(f-u,g-m,_-w,C-x).normalize(),n===qr)i[5].setComponents(f+u,g+m,_+w,C+x).normalize();else if(n===$d)i[5].setComponents(u,m,w,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),So.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(So)}intersectsSprite(e){return So.center.set(0,0,0),So.radius=.7071067811865476,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gf.x=r.normal.x>0?e.max.x:e.min.x,Gf.y=r.normal.y>0?e.max.y:e.min.y,Gf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gw(){let t=null,e=!1,n=null,i=null;function r(o,l){n(o,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function r5(t){const e=new WeakMap;function n(u,f){const d=u.array,h=u.usage,m=d.byteLength,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=t.HALF_FLOAT:y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,d){const h=f.array,m=f._updateRange,g=f.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&g.length===0&&t.bufferSubData(d,0,h),g.length!==0){for(let y=0,M=g.length;y<M;y++){const w=g[y];t.bufferSubData(d,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}f.clearUpdateRanges()}m.count!==-1&&(t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count),m.count=-1),f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(t.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=e.get(u);(!h||h.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);if(d===void 0)e.set(u,n(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:o,update:l}}class xh extends la{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(r),d=u+1,h=f+1,m=e/u,g=n/f,y=[],M=[],w=[],_=[];for(let p=0;p<h;p++){const S=p*g-l;for(let x=0;x<d;x++){const C=x*m-o;M.push(C,-S,0),w.push(0,0,1),_.push(x/u),_.push(1-p/f)}}for(let p=0;p<f;p++)for(let S=0;S<u;S++){const x=S+d*p,C=S+d*(p+1),O=S+1+d*(p+1),N=S+1+d*p;y.push(x,C,N),y.push(C,O,N)}this.setIndex(y),this.setAttribute("position",new qa(M,3)),this.setAttribute("normal",new qa(w,3)),this.setAttribute("uv",new qa(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.width,e.height,e.widthSegments,e.heightSegments)}}var a5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h5=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w5=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,b5=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U5="gl_FragColor = linearToOutputTexel( gl_FragColor );",O5=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,F5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$5=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nO=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rO=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aO=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lO=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uO=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cO=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fO=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mO=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_O=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xO=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,SO=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,MO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,EO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wO=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CO=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DO=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,VO=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WO=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jO=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$O=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YO=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JO=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_F=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:a5,alphahash_pars_fragment:o5,alphamap_fragment:s5,alphamap_pars_fragment:l5,alphatest_fragment:u5,alphatest_pars_fragment:c5,aomap_fragment:f5,aomap_pars_fragment:d5,batching_pars_vertex:h5,batching_vertex:p5,begin_vertex:m5,beginnormal_vertex:g5,bsdfs:v5,iridescence_fragment:_5,bumpmap_pars_fragment:x5,clipping_planes_fragment:y5,clipping_planes_pars_fragment:S5,clipping_planes_pars_vertex:M5,clipping_planes_vertex:E5,color_fragment:w5,color_pars_fragment:T5,color_pars_vertex:A5,color_vertex:b5,common:C5,cube_uv_reflection_fragment:R5,defaultnormal_vertex:P5,displacementmap_pars_vertex:L5,displacementmap_vertex:I5,emissivemap_fragment:N5,emissivemap_pars_fragment:D5,colorspace_fragment:U5,colorspace_pars_fragment:O5,envmap_fragment:F5,envmap_common_pars_fragment:k5,envmap_pars_fragment:z5,envmap_pars_vertex:B5,envmap_physical_pars_fragment:Q5,envmap_vertex:H5,fog_vertex:V5,fog_pars_vertex:G5,fog_fragment:W5,fog_pars_fragment:X5,gradientmap_pars_fragment:j5,lightmap_fragment:$5,lightmap_pars_fragment:Y5,lights_lambert_fragment:q5,lights_lambert_pars_fragment:K5,lights_pars_begin:Z5,lights_toon_fragment:J5,lights_toon_pars_fragment:eO,lights_phong_fragment:tO,lights_phong_pars_fragment:nO,lights_physical_fragment:iO,lights_physical_pars_fragment:rO,lights_fragment_begin:aO,lights_fragment_maps:oO,lights_fragment_end:sO,logdepthbuf_fragment:lO,logdepthbuf_pars_fragment:uO,logdepthbuf_pars_vertex:cO,logdepthbuf_vertex:fO,map_fragment:dO,map_pars_fragment:hO,map_particle_fragment:pO,map_particle_pars_fragment:mO,metalnessmap_fragment:gO,metalnessmap_pars_fragment:vO,morphinstance_vertex:_O,morphcolor_vertex:xO,morphnormal_vertex:yO,morphtarget_pars_vertex:SO,morphtarget_vertex:MO,normal_fragment_begin:EO,normal_fragment_maps:wO,normal_pars_fragment:TO,normal_pars_vertex:AO,normal_vertex:bO,normalmap_pars_fragment:CO,clearcoat_normal_fragment_begin:RO,clearcoat_normal_fragment_maps:PO,clearcoat_pars_fragment:LO,iridescence_pars_fragment:IO,opaque_fragment:NO,packing:DO,premultiplied_alpha_fragment:UO,project_vertex:OO,dithering_fragment:FO,dithering_pars_fragment:kO,roughnessmap_fragment:zO,roughnessmap_pars_fragment:BO,shadowmap_pars_fragment:HO,shadowmap_pars_vertex:VO,shadowmap_vertex:GO,shadowmask_pars_fragment:WO,skinbase_vertex:XO,skinning_pars_vertex:jO,skinning_vertex:$O,skinnormal_vertex:YO,specularmap_fragment:qO,specularmap_pars_fragment:KO,tonemapping_fragment:ZO,tonemapping_pars_fragment:QO,transmission_fragment:JO,transmission_pars_fragment:eF,uv_pars_fragment:tF,uv_pars_vertex:nF,uv_vertex:iF,worldpos_vertex:rF,background_vert:aF,background_frag:oF,backgroundCube_vert:sF,backgroundCube_frag:lF,cube_vert:uF,cube_frag:cF,depth_vert:fF,depth_frag:dF,distanceRGBA_vert:hF,distanceRGBA_frag:pF,equirect_vert:mF,equirect_frag:gF,linedashed_vert:vF,linedashed_frag:_F,meshbasic_vert:xF,meshbasic_frag:yF,meshlambert_vert:SF,meshlambert_frag:MF,meshmatcap_vert:EF,meshmatcap_frag:wF,meshnormal_vert:TF,meshnormal_frag:AF,meshphong_vert:bF,meshphong_frag:CF,meshphysical_vert:RF,meshphysical_frag:PF,meshtoon_vert:LF,meshtoon_frag:IF,points_vert:NF,points_frag:DF,shadow_vert:UF,shadow_frag:OF,sprite_vert:FF,sprite_frag:kF},Te={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},yr={basic:{uniforms:Yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Yn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Yn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Yn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Yn([Te.points,Te.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Yn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Yn([Te.common,Te.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Yn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Yn([Te.sprite,Te.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Yn([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Yn([Te.lights,Te.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};yr.physical={uniforms:Yn([yr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Wf={r:0,b:0,g:0},Mo=new aa,zF=new mn;function BF(t,e,n,i,r,o,l){const u=new Lt(0);let f=o===!0?0:1,d,h,m=null,g=0,y=null;function M(_,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?n:e).get(x)),x===null?w(u,f):x&&x.isColor&&(w(x,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gh)?(h===void 0&&(h=new Kr(new rc(1,1,1),new no({name:"BackgroundCubeMaterial",uniforms:pl(yr.backgroundCube.uniforms),vertexShader:yr.backgroundCube.vertexShader,fragmentShader:yr.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Mo.copy(p.backgroundRotation),Mo.x*=-1,Mo.y*=-1,Mo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mo.y*=-1,Mo.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zF.makeRotationFromEuler(Mo)),h.material.toneMapped=Ft.getTransfer(x.colorSpace)!==Yt,(m!==x||g!==x.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,m=x,g=x.version,y=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(d===void 0&&(d=new Kr(new xh(2,2),new no({name:"BackgroundMaterial",uniforms:pl(yr.background.uniforms),vertexShader:yr.background.vertexShader,fragmentShader:yr.background.fragmentShader,side:to,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=x,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Ft.getTransfer(x.colorSpace)!==Yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),d.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||g!==x.version||y!==t.toneMapping)&&(d.material.needsUpdate=!0,m=x,g=x.version,y=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function w(_,p){_.getRGB(Wf,dw(t)),i.buffers.color.setClear(Wf.r,Wf.g,Wf.b,p,l)}return{getClearColor:function(){return u},setClearColor:function(_,p=1){u.set(_),f=p,w(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(_){f=_,w(u,f)},render:M}}function HF(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=g(null);let o=r,l=!1;function u(T,X,ie,H,re){let ae=!1;const de=m(H,ie,X);o!==de&&(o=de,d(o.object)),ae=y(T,H,ie,re),ae&&M(T,H,ie,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(ae||l)&&(l=!1,C(T,X,ie,H),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function f(){return t.createVertexArray()}function d(T){return t.bindVertexArray(T)}function h(T){return t.deleteVertexArray(T)}function m(T,X,ie){const H=ie.wireframe===!0;let re=i[T.id];re===void 0&&(re={},i[T.id]=re);let ae=re[X.id];ae===void 0&&(ae={},re[X.id]=ae);let de=ae[H];return de===void 0&&(de=g(f()),ae[H]=de),de}function g(T){const X=[],ie=[],H=[];for(let re=0;re<n;re++)X[re]=0,ie[re]=0,H[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ie,attributeDivisors:H,object:T,attributes:{},index:null}}function y(T,X,ie,H){const re=o.attributes,ae=X.attributes;let de=0;const ce=ie.getAttributes();for(const z in ce)if(ce[z].location>=0){const ee=re[z];let ge=ae[z];if(ge===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ee===void 0||ee.attribute!==ge||ge&&ee.data!==ge.data)return!0;de++}return o.attributesNum!==de||o.index!==H}function M(T,X,ie,H){const re={},ae=X.attributes;let de=0;const ce=ie.getAttributes();for(const z in ce)if(ce[z].location>=0){let ee=ae[z];ee===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor));const ge={};ge.attribute=ee,ee&&ee.data&&(ge.data=ee.data),re[z]=ge,de++}o.attributes=re,o.attributesNum=de,o.index=H}function w(){const T=o.newAttributes;for(let X=0,ie=T.length;X<ie;X++)T[X]=0}function _(T){p(T,0)}function p(T,X){const ie=o.newAttributes,H=o.enabledAttributes,re=o.attributeDivisors;ie[T]=1,H[T]===0&&(t.enableVertexAttribArray(T),H[T]=1),re[T]!==X&&(t.vertexAttribDivisor(T,X),re[T]=X)}function S(){const T=o.newAttributes,X=o.enabledAttributes;for(let ie=0,H=X.length;ie<H;ie++)X[ie]!==T[ie]&&(t.disableVertexAttribArray(ie),X[ie]=0)}function x(T,X,ie,H,re,ae,de){de===!0?t.vertexAttribIPointer(T,X,ie,re,ae):t.vertexAttribPointer(T,X,ie,H,re,ae)}function C(T,X,ie,H){w();const re=H.attributes,ae=ie.getAttributes(),de=X.defaultAttributeValues;for(const ce in ae){const z=ae[ce];if(z.location>=0){let ne=re[ce];if(ne===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const ee=ne.normalized,ge=ne.itemSize,Ce=e.get(ne);if(Ce===void 0)continue;const Ze=Ce.buffer,Q=Ce.type,he=Ce.bytesPerElement,Se=Q===t.INT||Q===t.UNSIGNED_INT||ne.gpuType===qE;if(ne.isInterleavedBufferAttribute){const xe=ne.data,$e=xe.stride,tt=ne.offset;if(xe.isInstancedInterleavedBuffer){for(let xt=0;xt<z.locationSize;xt++)p(z.location+xt,xe.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let xt=0;xt<z.locationSize;xt++)_(z.location+xt);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let xt=0;xt<z.locationSize;xt++)x(z.location+xt,ge/z.locationSize,Q,ee,$e*he,(tt+ge/z.locationSize*xt)*he,Se)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)p(z.location+xe,ne.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<z.locationSize;xe++)_(z.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let xe=0;xe<z.locationSize;xe++)x(z.location+xe,ge/z.locationSize,Q,ee,ge*he,ge/z.locationSize*xe*he,Se)}}else if(de!==void 0){const ee=de[ce];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(z.location,ee);break;case 3:t.vertexAttrib3fv(z.location,ee);break;case 4:t.vertexAttrib4fv(z.location,ee);break;default:t.vertexAttrib1fv(z.location,ee)}}}}S()}function O(){k();for(const T in i){const X=i[T];for(const ie in X){const H=X[ie];for(const re in H)h(H[re].object),delete H[re];delete X[ie]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const X=i[T.id];for(const ie in X){const H=X[ie];for(const re in H)h(H[re].object),delete H[re];delete X[ie]}delete i[T.id]}function I(T){for(const X in i){const ie=i[X];if(ie[T.id]===void 0)continue;const H=ie[T.id];for(const re in H)h(H[re].object),delete H[re];delete ie[T.id]}}function k(){R(),l=!0,o!==r&&(o=r,d(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:k,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:_,disableUnusedAttributes:S}}function VF(t,e,n){let i;function r(f){i=f}function o(f,d){t.drawArrays(i,f,d),n.update(d,i,1)}function l(f,d,h){h!==0&&(t.drawArraysInstanced(i,f,d,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(f[g],d[g]);else{m.multiDrawArraysWEBGL(i,f,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function GF(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=o(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,S=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:p,maxSamples:S}}function WF(t){const e=this;let n=null,i=0,r=!1,o=!1;const l=new Ao,u=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const y=m.length!==0||g||i!==0||r;return r=g,i=m.length,y},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){n=h(m,g,0)},this.setState=function(m,g,y){const M=m.clippingPlanes,w=m.clipIntersection,_=m.clipShadows,p=t.get(m);if(!r||M===null||M.length===0||o&&!_)o?h(null):d();else{const S=o?0:i,x=S*4;let C=p.clippingState||null;f.value=C,C=h(M,g,x,y);for(let O=0;O!==x;++O)C[O]=n[O];p.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=S}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,g,y,M){const w=m!==null?m.length:0;let _=null;if(w!==0){if(_=f.value,M!==!0||_===null){const p=y+w*4,S=g.matrixWorldInverse;u.getNormalMatrix(S),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,C=y;x!==w;++x,C+=4)l.copy(m[x]).applyMatrix4(S,u),l.normal.toArray(_,C),_[C+3]=l.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function XF(t){let e=new WeakMap;function n(l,u){return u===a0?l.mapping=fl:u===o0&&(l.mapping=dl),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===a0||u===o0)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new t5(f.height);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",r),n(d.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class jF extends hw{constructor(e=-1,n=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=r+n,f=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=h*this.view.offsetY,f=u-h*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,M2=[.125,.215,.35,.446,.526,.582],Ro=20,Hm=new jF,E2=new Lt;let Vm=null,Gm=0,Wm=0,Xm=!1;const bo=(1+Math.sqrt(5))/2,Ps=1/bo,w2=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,bo,Ps),new Z(0,bo,-Ps),new Z(Ps,0,bo),new Z(-Ps,0,bo),new Z(bo,Ps,0),new Z(-bo,Ps,0)];class T2{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vm=this._renderer.getRenderTarget(),Gm=this._renderer.getActiveCubeFace(),Wm=this._renderer.getActiveMipmapLevel(),Xm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vm,Gm,Wm),this._renderer.xr.enabled=Xm,e.scissorTest=!1,Xf(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fl||e.mapping===dl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vm=this._renderer.getRenderTarget(),Gm=this._renderer.getActiveCubeFace(),Wm=this._renderer.getActiveMipmapLevel(),Xm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:lr,minFilter:lr,generateMipmaps:!1,type:Gd,format:wr,colorSpace:oo,depthBuffer:!1},r=A2(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A2(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$F(o)),this._blurMaterial=YF(o,e,n)}return r}_compileMaterial(e){const n=new Kr(this._lodPlanes[0],e);this._renderer.compile(n,Hm)}_sceneToCubeUV(e,n,i,r){const u=new Wi(90,1,n,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(E2),h.toneMapping=$a,h.autoClear=!1;const y=new uw({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),M=new Kr(new rc,y);let w=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,w=!0):(y.color.copy(E2),w=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(u.up.set(0,f[p],0),u.lookAt(d[p],0,0)):S===1?(u.up.set(0,0,f[p]),u.lookAt(0,d[p],0)):(u.up.set(0,f[p],0),u.lookAt(0,0,d[p]));const x=this._cubeSize;Xf(r,S*x,p>2?x:0,x,x),h.setRenderTarget(r),w&&h.render(M,u),h.render(e,u)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fl||e.mapping===dl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=C2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b2());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Kr(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Xf(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,Hm)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=w2[(r-1)%w2.length];this._blur(e,r-1,r,o,l)}n.autoClear=i}_blur(e,n,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new Kr(this._lodPlanes[r],d),g=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ro-1),w=o/M,_=isFinite(o)?1+Math.floor(h*w):Ro;_>Ro&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ro}`);const p=[];let S=0;for(let I=0;I<Ro;++I){const k=I/w,R=Math.exp(-k*k/2);p.push(R),I===0?S+=R:I<_&&(S+=2*R)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=p,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:x}=this;g.dTheta.value=M,g.mipInt.value=x-i;const C=this._sizeLods[r],O=3*C*(r>x-js?r-x+js:0),N=4*(this._cubeSize-C);Xf(n,O,N,3*C,2*C),f.setRenderTarget(n),f.render(m,Hm)}}function $F(t){const e=[],n=[],i=[];let r=t;const o=t-js+1+M2.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);n.push(u);let f=1/u;l>t-js?f=M2[l-t+js-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),h=-d,m=1+d,g=[h,h,m,h,m,m,h,h,m,m,h,m],y=6,M=6,w=3,_=2,p=1,S=new Float32Array(w*M*y),x=new Float32Array(_*M*y),C=new Float32Array(p*M*y);for(let N=0;N<y;N++){const I=N%3*2/3-1,k=N>2?0:-1,R=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];S.set(R,w*M*N),x.set(g,_*M*N);const T=[N,N,N,N,N,N];C.set(T,p*M*N)}const O=new la;O.setAttribute("position",new br(S,w)),O.setAttribute("uv",new br(x,_)),O.setAttribute("faceIndex",new br(C,p)),e.push(O),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function A2(t,e,n){const i=new $o(t,e,n);return i.texture.mapping=gh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xf(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YF(t,e,n){const i=new Float32Array(Ro),r=new Z(0,1,0);return new no({name:"SphericalGaussianBlur",defines:{n:Ro,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function b2(){return new no({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function C2(){return new no({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Sv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qF(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===a0||f===o0,h=f===fl||f===dl;if(d||h){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new T2(t)),m=d?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return d&&y&&y.height>0||h&&y&&r(y)?(n===null&&(n=new T2(t)),m=d?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function r(u){let f=0;const d=6;for(let h=0;h<d;h++)u[h]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function KF(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZF(t,e,n,i){const r={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);for(const M in g.morphAttributes){const w=g.morphAttributes[M];for(let _=0,p=w.length;_<p;_++)e.remove(w[_])}g.removeEventListener("dispose",l),delete r[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function u(m,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,n.memory.geometries++),g}function f(m){const g=m.attributes;for(const M in g)e.update(g[M],t.ARRAY_BUFFER);const y=m.morphAttributes;for(const M in y){const w=y[M];for(let _=0,p=w.length;_<p;_++)e.update(w[_],t.ARRAY_BUFFER)}}function d(m){const g=[],y=m.index,M=m.attributes.position;let w=0;if(y!==null){const S=y.array;w=y.version;for(let x=0,C=S.length;x<C;x+=3){const O=S[x+0],N=S[x+1],I=S[x+2];g.push(O,N,N,I,I,O)}}else if(M!==void 0){const S=M.array;w=M.version;for(let x=0,C=S.length/3-1;x<C;x+=3){const O=x+0,N=x+1,I=x+2;g.push(O,N,N,I,I,O)}}else return;const _=new(iw(g)?fw:cw)(g,1);_.version=w;const p=o.get(m);p&&e.remove(p),o.set(m,_)}function h(m){const g=o.get(m);if(g){const y=m.index;y!==null&&g.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:h}}function QF(t,e,n){let i;function r(m){i=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function f(m,g){t.drawElements(i,g,o,m*l),n.update(g,i,1)}function d(m,g,y){y!==0&&(t.drawElementsInstanced(i,g,o,m*l,y),n.update(g,i,y))}function h(m,g,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<y;w++)this.render(m[w]/l,g[w]);else{M.multiDrawElementsWEBGL(i,g,0,o,m,0,y);let w=0;for(let _=0;_<y;_++)w+=g[_];n.update(w,i,1)}}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function JF(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ek(t,e,n){const i=new WeakMap,r=new In;function o(l,u,f){const d=l.morphTargetInfluences,h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=h!==void 0?h.length:0;let g=i.get(u);if(g===void 0||g.count!==m){let T=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var y=T;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,p=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),w===!0&&(C=2),_===!0&&(C=3);let O=u.attributes.position.count*C,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*N*4*m),k=new aw(I,O,N,m);k.type=Fa,k.needsUpdate=!0;const R=C*4;for(let X=0;X<m;X++){const ie=p[X],H=S[X],re=x[X],ae=O*N*4*X;for(let de=0;de<ie.count;de++){const ce=de*R;M===!0&&(r.fromBufferAttribute(ie,de),I[ae+ce+0]=r.x,I[ae+ce+1]=r.y,I[ae+ce+2]=r.z,I[ae+ce+3]=0),w===!0&&(r.fromBufferAttribute(H,de),I[ae+ce+4]=r.x,I[ae+ce+5]=r.y,I[ae+ce+6]=r.z,I[ae+ce+7]=0),_===!0&&(r.fromBufferAttribute(re,de),I[ae+ce+8]=r.x,I[ae+ce+9]=r.y,I[ae+ce+10]=r.z,I[ae+ce+11]=re.itemSize===4?r.w:1)}}g={count:m,texture:k,size:new At(O,N)},i.set(u,g),u.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let M=0;for(let _=0;_<d.length;_++)M+=d[_];const w=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(t,"morphTargetBaseInfluence",w),f.getUniforms().setValue(t,"morphTargetInfluences",d)}f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}return{update:o}}function tk(t,e,n,i){let r=new WeakMap;function o(f){const d=i.render.frame,h=f.geometry,m=e.get(f,h);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return m}function l(){r=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}class vw extends Qn{constructor(e,n,i,r,o,l,u,f,d,h){if(h=h!==void 0?h:tl,h!==tl&&h!==Gu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===tl&&(i=hl),i===void 0&&h===Gu&&(i=Ju),super(null,r,o,l,u,f,h,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:ji,this.minFilter=f!==void 0?f:ji,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _w=new Qn,xw=new vw(1,1);xw.compareFunction=nw;const yw=new aw,Sw=new zU,Mw=new pw,R2=[],P2=[],L2=new Float32Array(16),I2=new Float32Array(9),N2=new Float32Array(4);function yl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=R2[r];if(o===void 0&&(o=new Float32Array(r),R2[r]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function Sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yh(t,e){let n=P2[e];n===void 0&&(n=new Int32Array(e),P2[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ik(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2fv(this.addr,e),Mn(n,e)}}function rk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Sn(n,e))return;t.uniform3fv(this.addr,e),Mn(n,e)}}function ak(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4fv(this.addr,e),Mn(n,e)}}function ok(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,i))return;N2.set(i),t.uniformMatrix2fv(this.addr,!1,N2),Mn(n,i)}}function sk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,i))return;I2.set(i),t.uniformMatrix3fv(this.addr,!1,I2),Mn(n,i)}}function lk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,i))return;L2.set(i),t.uniformMatrix4fv(this.addr,!1,L2),Mn(n,i)}}function uk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ck(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2iv(this.addr,e),Mn(n,e)}}function fk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3iv(this.addr,e),Mn(n,e)}}function dk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4iv(this.addr,e),Mn(n,e)}}function hk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2uiv(this.addr,e),Mn(n,e)}}function mk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3uiv(this.addr,e),Mn(n,e)}}function gk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4uiv(this.addr,e),Mn(n,e)}}function vk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?xw:_w;n.setTexture2D(e||o,r)}function _k(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sw,r)}function xk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Mw,r)}function yk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yw,r)}function Sk(t){switch(t){case 5126:return nk;case 35664:return ik;case 35665:return rk;case 35666:return ak;case 35674:return ok;case 35675:return sk;case 35676:return lk;case 5124:case 35670:return uk;case 35667:case 35671:return ck;case 35668:case 35672:return fk;case 35669:case 35673:return dk;case 5125:return hk;case 36294:return pk;case 36295:return mk;case 36296:return gk;case 35678:case 36198:case 36298:case 36306:case 35682:return vk;case 35679:case 36299:case 36307:return _k;case 35680:case 36300:case 36308:case 36293:return xk;case 36289:case 36303:case 36311:case 36292:return yk}}function Mk(t,e){t.uniform1fv(this.addr,e)}function Ek(t,e){const n=yl(e,this.size,2);t.uniform2fv(this.addr,n)}function wk(t,e){const n=yl(e,this.size,3);t.uniform3fv(this.addr,n)}function Tk(t,e){const n=yl(e,this.size,4);t.uniform4fv(this.addr,n)}function Ak(t,e){const n=yl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bk(t,e){const n=yl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ck(t,e){const n=yl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Rk(t,e){t.uniform1iv(this.addr,e)}function Pk(t,e){t.uniform2iv(this.addr,e)}function Lk(t,e){t.uniform3iv(this.addr,e)}function Ik(t,e){t.uniform4iv(this.addr,e)}function Nk(t,e){t.uniform1uiv(this.addr,e)}function Dk(t,e){t.uniform2uiv(this.addr,e)}function Uk(t,e){t.uniform3uiv(this.addr,e)}function Ok(t,e){t.uniform4uiv(this.addr,e)}function Fk(t,e,n){const i=this.cache,r=e.length,o=yh(n,r);Sn(i,o)||(t.uniform1iv(this.addr,o),Mn(i,o));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||_w,o[l])}function kk(t,e,n){const i=this.cache,r=e.length,o=yh(n,r);Sn(i,o)||(t.uniform1iv(this.addr,o),Mn(i,o));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||Sw,o[l])}function zk(t,e,n){const i=this.cache,r=e.length,o=yh(n,r);Sn(i,o)||(t.uniform1iv(this.addr,o),Mn(i,o));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||Mw,o[l])}function Bk(t,e,n){const i=this.cache,r=e.length,o=yh(n,r);Sn(i,o)||(t.uniform1iv(this.addr,o),Mn(i,o));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||yw,o[l])}function Hk(t){switch(t){case 5126:return Mk;case 35664:return Ek;case 35665:return wk;case 35666:return Tk;case 35674:return Ak;case 35675:return bk;case 35676:return Ck;case 5124:case 35670:return Rk;case 35667:case 35671:return Pk;case 35668:case 35672:return Lk;case 35669:case 35673:return Ik;case 5125:return Nk;case 36294:return Dk;case 36295:return Uk;case 36296:return Ok;case 35678:case 36198:case 36298:case 36306:case 35682:return Fk;case 35679:case 36299:case 36307:return kk;case 35680:case 36300:case 36308:case 36293:return zk;case 36289:case 36303:case 36311:case 36292:return Bk}}class Vk{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sk(n.type)}}class Gk{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hk(n.type)}}class Wk{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,n[u.id],i)}}}const jm=/(\w+)(\])?(\[|\.)?/g;function D2(t,e){t.seq.push(e),t.map[e.id]=e}function Xk(t,e,n){const i=t.name,r=i.length;for(jm.lastIndex=0;;){const o=jm.exec(i),l=jm.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===r){D2(n,d===void 0?new Vk(u,t,e):new Gk(u,t,e));break}else{let m=n.map[u];m===void 0&&(m=new Wk(u),D2(n,m)),n=m}}}class fd{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);Xk(o,l,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function U2(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const jk=37297;let $k=0;function Yk(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=r;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}function qk(t){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(t);let i;switch(e===n?i="":e===jd&&n===Xd?i="LinearDisplayP3ToLinearSRGB":e===Xd&&n===jd&&(i="LinearSRGBToLinearDisplayP3"),t){case oo:case vh:return[i,"LinearTransferOETF"];case xr:case yv:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function O2(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Yk(t.getShaderSource(e),l)}else return r}function Kk(t,e){const n=qk(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Zk(t,e){let n;switch(e){case nU:n="Linear";break;case iU:n="Reinhard";break;case rU:n="OptimizedCineon";break;case aU:n="ACESFilmic";break;case sU:n="AgX";break;case lU:n="Neutral";break;case oU:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Qk(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function Jk(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function e6(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function ou(t){return t!==""}function F2(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k2(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t6=/^[ \t]*#include +<([\w\d./]+)>/gm;function c0(t){return t.replace(t6,i6)}const n6=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i6(t,e){let n=ct[e];if(n===void 0){const i=n6.get(e);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return c0(n)}const r6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z2(t){return t.replace(r6,a6)}function a6(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function B2(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o6(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===XE?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===CD?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gr&&(e="SHADOWMAP_TYPE_VSM"),e}function s6(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fl:case dl:e="ENVMAP_TYPE_CUBE";break;case gh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l6(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case dl:e="ENVMAP_MODE_REFRACTION";break}return e}function u6(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jE:e="ENVMAP_BLENDING_MULTIPLY";break;case eU:e="ENVMAP_BLENDING_MIX";break;case tU:e="ENVMAP_BLENDING_ADD";break}return e}function c6(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f6(t,e,n,i){const r=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=o6(n),d=s6(n),h=l6(n),m=u6(n),g=c6(n),y=Qk(n),M=Jk(o),w=r.createProgram();let _,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ou).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ou).join(`
`),p.length>0&&(p+=`
`)):(_=[B2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),p=[B2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$a?"#define TONE_MAPPING":"",n.toneMapping!==$a?ct.tonemapping_pars_fragment:"",n.toneMapping!==$a?Zk("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Kk("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ou).join(`
`)),l=c0(l),l=F2(l,n),l=k2(l,n),u=c0(u),u=F2(u,n),u=k2(u,n),l=z2(l),u=z2(u),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===n2?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+_+l,C=S+p+u,O=U2(r,r.VERTEX_SHADER,x),N=U2(r,r.FRAGMENT_SHADER,C);r.attachShader(w,O),r.attachShader(w,N),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function I(X){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(w).trim(),H=r.getShaderInfoLog(O).trim(),re=r.getShaderInfoLog(N).trim();let ae=!0,de=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,O,N);else{const ce=O2(r,O,"vertex"),z=O2(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ie+`
`+ce+`
`+z)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(H===""||re==="")&&(de=!1);de&&(X.diagnostics={runnable:ae,programLog:ie,vertexShader:{log:H,prefix:_},fragmentShader:{log:re,prefix:p}})}r.deleteShader(O),r.deleteShader(N),k=new fd(r,w),R=e6(r,w)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(w,jk)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$k++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=N,this}let d6=0;class h6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new p6(e),n.set(e,i)),i}}class p6{constructor(e){this.id=d6++,this.code=e,this.usedTimes=0}}function m6(t,e,n,i,r,o,l){const u=new sw,f=new h6,d=new Set,h=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return d.add(R),R===0?"uv":`uv${R}`}function _(R,T,X,ie,H){const re=ie.fog,ae=H.geometry,de=R.isMeshStandardMaterial?ie.environment:null,ce=(R.isMeshStandardMaterial?n:e).get(R.envMap||de),z=ce&&ce.mapping===gh?ce.image.height:null,ne=M[R.type];R.precision!==null&&(y=r.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ee=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ge=ee!==void 0?ee.length:0;let Ce=0;ae.morphAttributes.position!==void 0&&(Ce=1),ae.morphAttributes.normal!==void 0&&(Ce=2),ae.morphAttributes.color!==void 0&&(Ce=3);let Ze,Q,he,Se;if(ne){const En=yr[ne];Ze=En.vertexShader,Q=En.fragmentShader}else Ze=R.vertexShader,Q=R.fragmentShader,f.update(R),he=f.getVertexShaderID(R),Se=f.getFragmentShaderID(R);const xe=t.getRenderTarget(),$e=H.isInstancedMesh===!0,tt=H.isBatchedMesh===!0,xt=!!R.map,$=!!R.matcap,st=!!ce,Ye=!!R.aoMap,wt=!!R.lightMap,je=!!R.bumpMap,Ct=!!R.normalMap,D=!!R.displacementMap,b=!!R.emissiveMap,te=!!R.metalnessMap,ue=!!R.roughnessMap,fe=R.anisotropy>0,me=R.clearcoat>0,Ve=R.iridescence>0,_e=R.sheen>0,Oe=R.transmission>0,qe=fe&&!!R.anisotropyMap,ye=me&&!!R.clearcoatMap,be=me&&!!R.clearcoatNormalMap,Qe=me&&!!R.clearcoatRoughnessMap,Ie=Ve&&!!R.iridescenceMap,Ne=Ve&&!!R.iridescenceThicknessMap,ht=_e&&!!R.sheenColorMap,pt=_e&&!!R.sheenRoughnessMap,Mt=!!R.specularMap,St=!!R.specularColorMap,Nt=!!R.specularIntensityMap,Fe=Oe&&!!R.transmissionMap,F=Oe&&!!R.thicknessMap,Ee=!!R.gradientMap,Me=!!R.alphaMap,ze=R.alphaTest>0,Be=!!R.alphaHash,Dt=!!R.extensions;let zt=$a;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(zt=t.toneMapping);const Wt={shaderID:ne,shaderType:R.type,shaderName:R.name,vertexShader:Ze,fragmentShader:Q,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:tt,instancing:$e,instancingColor:$e&&H.instanceColor!==null,instancingMorph:$e&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:oo,alphaToCoverage:!!R.alphaToCoverage,map:xt,matcap:$,envMap:st,envMapMode:st&&ce.mapping,envMapCubeUVHeight:z,aoMap:Ye,lightMap:wt,bumpMap:je,normalMap:Ct,displacementMap:g&&D,emissiveMap:b,normalMapObjectSpace:Ct&&R.normalMapType===EU,normalMapTangentSpace:Ct&&R.normalMapType===MU,metalnessMap:te,roughnessMap:ue,anisotropy:fe,anisotropyMap:qe,clearcoat:me,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:Qe,iridescence:Ve,iridescenceMap:Ie,iridescenceThicknessMap:Ne,sheen:_e,sheenColorMap:ht,sheenRoughnessMap:pt,specularMap:Mt,specularColorMap:St,specularIntensityMap:Nt,transmission:Oe,transmissionMap:Fe,thicknessMap:F,gradientMap:Ee,opaque:R.transparent===!1&&R.blending===el&&R.alphaToCoverage===!1,alphaMap:Me,alphaTest:ze,alphaHash:Be,combine:R.combine,mapUv:xt&&w(R.map.channel),aoMapUv:Ye&&w(R.aoMap.channel),lightMapUv:wt&&w(R.lightMap.channel),bumpMapUv:je&&w(R.bumpMap.channel),normalMapUv:Ct&&w(R.normalMap.channel),displacementMapUv:D&&w(R.displacementMap.channel),emissiveMapUv:b&&w(R.emissiveMap.channel),metalnessMapUv:te&&w(R.metalnessMap.channel),roughnessMapUv:ue&&w(R.roughnessMap.channel),anisotropyMapUv:qe&&w(R.anisotropyMap.channel),clearcoatMapUv:ye&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:be&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:pt&&w(R.sheenRoughnessMap.channel),specularMapUv:Mt&&w(R.specularMap.channel),specularColorMapUv:St&&w(R.specularColorMap.channel),specularIntensityMapUv:Nt&&w(R.specularIntensityMap.channel),transmissionMapUv:Fe&&w(R.transmissionMap.channel),thicknessMapUv:F&&w(R.thicknessMap.channel),alphaMapUv:Me&&w(R.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ct||fe),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(xt||Me),fog:!!re,useFog:R.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:zt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xt&&R.map.isVideoTexture===!0&&Ft.getTransfer(R.map.colorSpace)===Yt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===jr,flipSided:R.side===di,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Dt&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Dt&&R.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Wt.vertexUv1s=d.has(1),Wt.vertexUv2s=d.has(2),Wt.vertexUv3s=d.has(3),d.clear(),Wt}function p(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)T.push(X),T.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(S(T,R),x(T,R),T.push(t.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function S(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function x(R,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),R.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.skinning&&u.enable(4),T.morphTargets&&u.enable(5),T.morphNormals&&u.enable(6),T.morphColors&&u.enable(7),T.premultipliedAlpha&&u.enable(8),T.shadowMapEnabled&&u.enable(9),T.useLegacyLights&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.alphaToCoverage&&u.enable(20),R.push(u.mask)}function C(R){const T=M[R.type];let X;if(T){const ie=yr[T];X=ZU.clone(ie.uniforms)}else X=R.uniforms;return X}function O(R,T){let X;for(let ie=0,H=h.length;ie<H;ie++){const re=h[ie];if(re.cacheKey===T){X=re,++X.usedTimes;break}}return X===void 0&&(X=new f6(t,T,R,o),h.push(X)),X}function N(R){if(--R.usedTimes===0){const T=h.indexOf(R);h[T]=h[h.length-1],h.pop(),R.destroy()}}function I(R){f.remove(R)}function k(){f.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:C,acquireProgram:O,releaseProgram:N,releaseShaderCache:I,programs:h,dispose:k}}function g6(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,u){t.get(o)[l]=u}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function v6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function H2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function V2(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function l(m,g,y,M,w,_){let p=t[e];return p===void 0?(p={id:m.id,object:m,geometry:g,material:y,groupOrder:M,renderOrder:m.renderOrder,z:w,group:_},t[e]=p):(p.id=m.id,p.object=m,p.geometry=g,p.material=y,p.groupOrder=M,p.renderOrder=m.renderOrder,p.z=w,p.group=_),e++,p}function u(m,g,y,M,w,_){const p=l(m,g,y,M,w,_);y.transmission>0?i.push(p):y.transparent===!0?r.push(p):n.push(p)}function f(m,g,y,M,w,_){const p=l(m,g,y,M,w,_);y.transmission>0?i.unshift(p):y.transparent===!0?r.unshift(p):n.unshift(p)}function d(m,g){n.length>1&&n.sort(m||v6),i.length>1&&i.sort(g||H2),r.length>1&&r.sort(g||H2)}function h(){for(let m=e,g=t.length;m<g;m++){const y=t[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:u,unshift:f,finish:h,sort:d}}function _6(){let t=new WeakMap;function e(i,r){const o=t.get(i);let l;return o===void 0?(l=new V2,t.set(i,[l])):r>=o.length?(l=new V2,o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function x6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Lt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function y6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let S6=0;function M6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E6(t){const e=new x6,n=y6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Z);const r=new Z,o=new mn,l=new mn;function u(d,h){let m=0,g=0,y=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let M=0,w=0,_=0,p=0,S=0,x=0,C=0,O=0,N=0,I=0,k=0;d.sort(M6);const R=h===!0?Math.PI:1;for(let X=0,ie=d.length;X<ie;X++){const H=d[X],re=H.color,ae=H.intensity,de=H.distance,ce=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=re.r*ae*R,g+=re.g*ae*R,y+=re.b*ae*R;else if(H.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(H.sh.coefficients[z],ae);k++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity*R),H.castShadow){const ne=H.shadow,ee=n.get(H);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.directionalShadow[M]=ee,i.directionalShadowMap[M]=ce,i.directionalShadowMatrix[M]=H.shadow.matrix,x++}i.directional[M]=z,M++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(re).multiplyScalar(ae*R),z.distance=de,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,i.spot[_]=z;const ne=H.shadow;if(H.map&&(i.spotLightMap[N]=H.map,N++,ne.updateMatrices(H),H.castShadow&&I++),i.spotLightMatrix[_]=ne.matrix,H.castShadow){const ee=n.get(H);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=ce,O++}_++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(re).multiplyScalar(ae),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),i.rectArea[p]=z,p++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity*R),z.distance=H.distance,z.decay=H.decay,H.castShadow){const ne=H.shadow,ee=n.get(H);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,ee.shadowCameraNear=ne.camera.near,ee.shadowCameraFar=ne.camera.far,i.pointShadow[w]=ee,i.pointShadowMap[w]=ce,i.pointShadowMatrix[w]=H.shadow.matrix,C++}i.point[w]=z,w++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(ae*R),z.groundColor.copy(H.groundColor).multiplyScalar(ae*R),i.hemi[S]=z,S++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=y;const T=i.hash;(T.directionalLength!==M||T.pointLength!==w||T.spotLength!==_||T.rectAreaLength!==p||T.hemiLength!==S||T.numDirectionalShadows!==x||T.numPointShadows!==C||T.numSpotShadows!==O||T.numSpotMaps!==N||T.numLightProbes!==k)&&(i.directional.length=M,i.spot.length=_,i.rectArea.length=p,i.point.length=w,i.hemi.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=O+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=k,T.directionalLength=M,T.pointLength=w,T.spotLength=_,T.rectAreaLength=p,T.hemiLength=S,T.numDirectionalShadows=x,T.numPointShadows=C,T.numSpotShadows=O,T.numSpotMaps=N,T.numLightProbes=k,i.version=S6++)}function f(d,h){let m=0,g=0,y=0,M=0,w=0;const _=h.matrixWorldInverse;for(let p=0,S=d.length;p<S;p++){const x=d[p];if(x.isDirectionalLight){const C=i.directional[m];C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),m++}else if(x.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),y++}else if(x.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),l.identity(),o.copy(x.matrixWorld),o.premultiply(_),l.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),M++}else if(x.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),g++}else if(x.isHemisphereLight){const C=i.hemi[w];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(_),w++}}}return{setup:u,setupView:f,state:i}}function G2(t){const e=new E6(t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function l(h){i.push(h)}function u(h){e.setup(n,h)}function f(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function w6(t){let e=new WeakMap;function n(r,o=0){const l=e.get(r);let u;return l===void 0?(u=new G2(t),e.set(r,[u])):o>=l.length?(u=new G2(t),l.push(u)):u=l[o],u}function i(){e=new WeakMap}return{get:n,dispose:i}}class T6 extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A6 extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R6(t,e,n){let i=new mw;const r=new At,o=new At,l=new In,u=new T6({depthPacking:SU}),f=new A6,d={},h=n.maxTextureSize,m={[to]:di,[di]:to,[jr]:jr},g=new no({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:b6,fragmentShader:C6}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new la;M.setAttribute("position",new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Kr(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XE;let p=this.type;this.render=function(N,I,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const R=t.getRenderTarget(),T=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(ja),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const H=p!==Gr&&this.type===Gr,re=p===Gr&&this.type!==Gr;for(let ae=0,de=N.length;ae<de;ae++){const ce=N[ae],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ne=z.getFrameExtents();if(r.multiply(ne),o.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/ne.x),r.x=o.x*ne.x,z.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/ne.y),r.y=o.y*ne.y,z.mapSize.y=o.y)),z.map===null||H===!0||re===!0){const ge=this.type!==Gr?{minFilter:ji,magFilter:ji}:{};z.map!==null&&z.map.dispose(),z.map=new $o(r.x,r.y,ge),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ee=z.getViewportCount();for(let ge=0;ge<ee;ge++){const Ce=z.getViewport(ge);l.set(o.x*Ce.x,o.y*Ce.y,o.x*Ce.z,o.y*Ce.w),ie.viewport(l),z.updateMatrices(ce,ge),i=z.getFrustum(),C(I,k,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Gr&&S(z,k),z.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(R,T,X)};function S(N,I){const k=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new $o(r.x,r.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(I,null,k,g,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(I,null,k,y,w,null)}function x(N,I,k,R){let T=null;const X=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)T=X;else if(T=k.isPointLight===!0?f:u,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ie=T.uuid,H=I.uuid;let re=d[ie];re===void 0&&(re={},d[ie]=re);let ae=re[H];ae===void 0&&(ae=T.clone(),re[H]=ae,I.addEventListener("dispose",O)),T=ae}if(T.visible=I.visible,T.wireframe=I.wireframe,R===Gr?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:m[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ie=t.properties.get(T);ie.light=k}return T}function C(N,I,k,R,T){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Gr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const H=e.update(N),re=N.material;if(Array.isArray(re)){const ae=H.groups;for(let de=0,ce=ae.length;de<ce;de++){const z=ae[de],ne=re[z.materialIndex];if(ne&&ne.visible){const ee=x(N,ne,R,T);N.onBeforeShadow(t,N,I,k,H,ee,z),t.renderBufferDirect(k,null,H,ee,N,z),N.onAfterShadow(t,N,I,k,H,ee,z)}}}else if(re.visible){const ae=x(N,re,R,T);N.onBeforeShadow(t,N,I,k,H,ae,null),t.renderBufferDirect(k,null,H,ae,N,null),N.onAfterShadow(t,N,I,k,H,ae,null)}}const ie=N.children;for(let H=0,re=ie.length;H<re;H++)C(ie[H],I,k,R,T)}function O(N){N.target.removeEventListener("dispose",O);for(const k in d){const R=d[k],T=N.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function P6(t){function e(){let F=!1;const Ee=new In;let Me=null;const ze=new In(0,0,0,0);return{setMask:function(Be){Me!==Be&&!F&&(t.colorMask(Be,Be,Be,Be),Me=Be)},setLocked:function(Be){F=Be},setClear:function(Be,Dt,zt,Wt,En){En===!0&&(Be*=Wt,Dt*=Wt,zt*=Wt),Ee.set(Be,Dt,zt,Wt),ze.equals(Ee)===!1&&(t.clearColor(Be,Dt,zt,Wt),ze.copy(Ee))},reset:function(){F=!1,Me=null,ze.set(-1,0,0,0)}}}function n(){let F=!1,Ee=null,Me=null,ze=null;return{setTest:function(Be){Be?Se(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Be){Ee!==Be&&!F&&(t.depthMask(Be),Ee=Be)},setFunc:function(Be){if(Me!==Be){switch(Be){case $D:t.depthFunc(t.NEVER);break;case YD:t.depthFunc(t.ALWAYS);break;case qD:t.depthFunc(t.LESS);break;case Vd:t.depthFunc(t.LEQUAL);break;case KD:t.depthFunc(t.EQUAL);break;case ZD:t.depthFunc(t.GEQUAL);break;case QD:t.depthFunc(t.GREATER);break;case JD:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=Be}},setLocked:function(Be){F=Be},setClear:function(Be){ze!==Be&&(t.clearDepth(Be),ze=Be)},reset:function(){F=!1,Ee=null,Me=null,ze=null}}}function i(){let F=!1,Ee=null,Me=null,ze=null,Be=null,Dt=null,zt=null,Wt=null,En=null;return{setTest:function(Ut){F||(Ut?Se(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(Ut){Ee!==Ut&&!F&&(t.stencilMask(Ut),Ee=Ut)},setFunc:function(Ut,Pi,Li){(Me!==Ut||ze!==Pi||Be!==Li)&&(t.stencilFunc(Ut,Pi,Li),Me=Ut,ze=Pi,Be=Li)},setOp:function(Ut,Pi,Li){(Dt!==Ut||zt!==Pi||Wt!==Li)&&(t.stencilOp(Ut,Pi,Li),Dt=Ut,zt=Pi,Wt=Li)},setLocked:function(Ut){F=Ut},setClear:function(Ut){En!==Ut&&(t.clearStencil(Ut),En=Ut)},reset:function(){F=!1,Ee=null,Me=null,ze=null,Be=null,Dt=null,zt=null,Wt=null,En=null}}}const r=new e,o=new n,l=new i,u=new WeakMap,f=new WeakMap;let d={},h={},m=new WeakMap,g=[],y=null,M=!1,w=null,_=null,p=null,S=null,x=null,C=null,O=null,N=new Lt(0,0,0),I=0,k=!1,R=null,T=null,X=null,ie=null,H=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,de=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ae=de>=1):ce.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ae=de>=2);let z=null,ne={};const ee=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Ce=new In().fromArray(ee),Ze=new In().fromArray(ge);function Q(F,Ee,Me,ze){const Be=new Uint8Array(4),Dt=t.createTexture();t.bindTexture(F,Dt),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let zt=0;zt<Me;zt++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,Be):t.texImage2D(Ee+zt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Be);return Dt}const he={};he[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Se(t.DEPTH_TEST),o.setFunc(Vd),je(!1),Ct(Ty),Se(t.CULL_FACE),Ye(ja);function Se(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function xe(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function $e(F,Ee){return h[F]!==Ee?(t.bindFramebuffer(F,Ee),h[F]=Ee,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ee),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function tt(F,Ee){let Me=g,ze=!1;if(F){Me=m.get(Ee),Me===void 0&&(Me=[],m.set(Ee,Me));const Be=F.textures;if(Me.length!==Be.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let Dt=0,zt=Be.length;Dt<zt;Dt++)Me[Dt]=t.COLOR_ATTACHMENT0+Dt;Me.length=Be.length,ze=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,ze=!0);ze&&t.drawBuffers(Me)}function xt(F){return y!==F?(t.useProgram(F),y=F,!0):!1}const $={[Co]:t.FUNC_ADD,[PD]:t.FUNC_SUBTRACT,[LD]:t.FUNC_REVERSE_SUBTRACT};$[ID]=t.MIN,$[ND]=t.MAX;const st={[DD]:t.ZERO,[UD]:t.ONE,[OD]:t.SRC_COLOR,[i0]:t.SRC_ALPHA,[VD]:t.SRC_ALPHA_SATURATE,[BD]:t.DST_COLOR,[kD]:t.DST_ALPHA,[FD]:t.ONE_MINUS_SRC_COLOR,[r0]:t.ONE_MINUS_SRC_ALPHA,[HD]:t.ONE_MINUS_DST_COLOR,[zD]:t.ONE_MINUS_DST_ALPHA,[GD]:t.CONSTANT_COLOR,[WD]:t.ONE_MINUS_CONSTANT_COLOR,[XD]:t.CONSTANT_ALPHA,[jD]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(F,Ee,Me,ze,Be,Dt,zt,Wt,En,Ut){if(F===ja){M===!0&&(xe(t.BLEND),M=!1);return}if(M===!1&&(Se(t.BLEND),M=!0),F!==RD){if(F!==w||Ut!==k){if((_!==Co||x!==Co)&&(t.blendEquation(t.FUNC_ADD),_=Co,x=Co),Ut)switch(F){case el:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ay:t.blendFunc(t.ONE,t.ONE);break;case by:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cy:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case el:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ay:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case by:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cy:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,S=null,C=null,O=null,N.set(0,0,0),I=0,w=F,k=Ut}return}Be=Be||Ee,Dt=Dt||Me,zt=zt||ze,(Ee!==_||Be!==x)&&(t.blendEquationSeparate($[Ee],$[Be]),_=Ee,x=Be),(Me!==p||ze!==S||Dt!==C||zt!==O)&&(t.blendFuncSeparate(st[Me],st[ze],st[Dt],st[zt]),p=Me,S=ze,C=Dt,O=zt),(Wt.equals(N)===!1||En!==I)&&(t.blendColor(Wt.r,Wt.g,Wt.b,En),N.copy(Wt),I=En),w=F,k=!1}function wt(F,Ee){F.side===jr?xe(t.CULL_FACE):Se(t.CULL_FACE);let Me=F.side===di;Ee&&(Me=!Me),je(Me),F.blending===el&&F.transparent===!1?Ye(ja):Ye(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const ze=F.stencilWrite;l.setTest(ze),ze&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),b(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){R!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),R=F)}function Ct(F){F!==AD?(Se(t.CULL_FACE),F!==T&&(F===Ty?t.cullFace(t.BACK):F===bD?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),T=F}function D(F){F!==X&&(ae&&t.lineWidth(F),X=F)}function b(F,Ee,Me){F?(Se(t.POLYGON_OFFSET_FILL),(ie!==Ee||H!==Me)&&(t.polygonOffset(Ee,Me),ie=Ee,H=Me)):xe(t.POLYGON_OFFSET_FILL)}function te(F){F?Se(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function ue(F){F===void 0&&(F=t.TEXTURE0+re-1),z!==F&&(t.activeTexture(F),z=F)}function fe(F,Ee,Me){Me===void 0&&(z===null?Me=t.TEXTURE0+re-1:Me=z);let ze=ne[Me];ze===void 0&&(ze={type:void 0,texture:void 0},ne[Me]=ze),(ze.type!==F||ze.texture!==Ee)&&(z!==Me&&(t.activeTexture(Me),z=Me),t.bindTexture(F,Ee||he[F]),ze.type=F,ze.texture=Ee)}function me(){const F=ne[z];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(F){Ce.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function Mt(F){Ze.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ze.copy(F))}function St(F,Ee){let Me=f.get(Ee);Me===void 0&&(Me=new WeakMap,f.set(Ee,Me));let ze=Me.get(F);ze===void 0&&(ze=t.getUniformBlockIndex(Ee,F.name),Me.set(F,ze))}function Nt(F,Ee){const ze=f.get(Ee).get(F);u.get(Ee)!==ze&&(t.uniformBlockBinding(Ee,ze,F.__bindingPointIndex),u.set(Ee,ze))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},z=null,ne={},h={},m=new WeakMap,g=[],y=null,M=!1,w=null,_=null,p=null,S=null,x=null,C=null,O=null,N=new Lt(0,0,0),I=0,k=!1,R=null,T=null,X=null,ie=null,H=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Se,disable:xe,bindFramebuffer:$e,drawBuffers:tt,useProgram:xt,setBlending:Ye,setMaterial:wt,setFlipSided:je,setCullFace:Ct,setLineWidth:D,setPolygonOffset:b,setScissorTest:te,activeTexture:ue,bindTexture:fe,unbindTexture:me,compressedTexImage2D:Ve,compressedTexImage3D:_e,texImage2D:Ne,texImage3D:ht,updateUBOMapping:St,uniformBlockBinding:Nt,texStorage2D:Qe,texStorage3D:Ie,texSubImage2D:Oe,texSubImage3D:qe,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:pt,viewport:Mt,reset:Fe}}function L6(t,e,n,i,r,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new At,h=new WeakMap;let m;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,b){return y?new OffscreenCanvas(D,b):Wu("canvas")}function w(D,b,te){let ue=1;const fe=Ct(D);if((fe.width>te||fe.height>te)&&(ue=te/Math.max(fe.width,fe.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const me=Math.floor(ue*fe.width),Ve=Math.floor(ue*fe.height);m===void 0&&(m=M(me,Ve));const _e=b?M(me,Ve):m;return _e.width=me,_e.height=Ve,_e.getContext("2d").drawImage(D,0,0,me,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+me+"x"+Ve+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function _(D){return D.generateMipmaps&&D.minFilter!==ji&&D.minFilter!==lr}function p(D){t.generateMipmap(D)}function S(D,b,te,ue,fe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me=b;if(b===t.RED&&(te===t.FLOAT&&(me=t.R32F),te===t.HALF_FLOAT&&(me=t.R16F),te===t.UNSIGNED_BYTE&&(me=t.R8)),b===t.RED_INTEGER&&(te===t.UNSIGNED_BYTE&&(me=t.R8UI),te===t.UNSIGNED_SHORT&&(me=t.R16UI),te===t.UNSIGNED_INT&&(me=t.R32UI),te===t.BYTE&&(me=t.R8I),te===t.SHORT&&(me=t.R16I),te===t.INT&&(me=t.R32I)),b===t.RG&&(te===t.FLOAT&&(me=t.RG32F),te===t.HALF_FLOAT&&(me=t.RG16F),te===t.UNSIGNED_BYTE&&(me=t.RG8)),b===t.RG_INTEGER&&(te===t.UNSIGNED_BYTE&&(me=t.RG8UI),te===t.UNSIGNED_SHORT&&(me=t.RG16UI),te===t.UNSIGNED_INT&&(me=t.RG32UI),te===t.BYTE&&(me=t.RG8I),te===t.SHORT&&(me=t.RG16I),te===t.INT&&(me=t.RG32I)),b===t.RGB&&te===t.UNSIGNED_INT_5_9_9_9_REV&&(me=t.RGB9_E5),b===t.RGBA){const Ve=fe?Wd:Ft.getTransfer(ue);te===t.FLOAT&&(me=t.RGBA32F),te===t.HALF_FLOAT&&(me=t.RGBA16F),te===t.UNSIGNED_BYTE&&(me=Ve===Yt?t.SRGB8_ALPHA8:t.RGBA8),te===t.UNSIGNED_SHORT_4_4_4_4&&(me=t.RGBA4),te===t.UNSIGNED_SHORT_5_5_5_1&&(me=t.RGB5_A1)}return(me===t.R16F||me===t.R32F||me===t.RG16F||me===t.RG32F||me===t.RGBA16F||me===t.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function x(D,b){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==ji&&D.minFilter!==lr?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function C(D){const b=D.target;b.removeEventListener("dispose",C),N(b),b.isVideoTexture&&h.delete(b)}function O(D){const b=D.target;b.removeEventListener("dispose",O),k(b)}function N(D){const b=i.get(D);if(b.__webglInit===void 0)return;const te=D.source,ue=g.get(te);if(ue){const fe=ue[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(D),Object.keys(ue).length===0&&g.delete(te)}i.remove(D)}function I(D){const b=i.get(D);t.deleteTexture(b.__webglTexture);const te=D.source,ue=g.get(te);delete ue[b.__cacheKey],l.memory.textures--}function k(D){const b=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let fe=0;fe<b.__webglFramebuffer[ue].length;fe++)t.deleteFramebuffer(b.__webglFramebuffer[ue][fe]);else t.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)t.deleteFramebuffer(b.__webglFramebuffer[ue]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=D.textures;for(let ue=0,fe=te.length;ue<fe;ue++){const me=i.get(te[ue]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),l.memory.textures--),i.remove(te[ue])}i.remove(D)}let R=0;function T(){R=0}function X(){const D=R;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),R+=1,D}function ie(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function H(D,b){const te=i.get(D);if(D.isVideoTexture&&wt(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(te,D,b);return}}n.bindTexture(t.TEXTURE_2D,te.__webglTexture,t.TEXTURE0+b)}function re(D,b){const te=i.get(D);if(D.version>0&&te.__version!==D.version){Ce(te,D,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,te.__webglTexture,t.TEXTURE0+b)}function ae(D,b){const te=i.get(D);if(D.version>0&&te.__version!==D.version){Ce(te,D,b);return}n.bindTexture(t.TEXTURE_3D,te.__webglTexture,t.TEXTURE0+b)}function de(D,b){const te=i.get(D);if(D.version>0&&te.__version!==D.version){Ze(te,D,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture,t.TEXTURE0+b)}const ce={[s0]:t.REPEAT,[Uo]:t.CLAMP_TO_EDGE,[l0]:t.MIRRORED_REPEAT},z={[ji]:t.NEAREST,[uU]:t.NEAREST_MIPMAP_NEAREST,[wf]:t.NEAREST_MIPMAP_LINEAR,[lr]:t.LINEAR,[mm]:t.LINEAR_MIPMAP_NEAREST,[Oo]:t.LINEAR_MIPMAP_LINEAR},ne={[wU]:t.NEVER,[PU]:t.ALWAYS,[TU]:t.LESS,[nw]:t.LEQUAL,[AU]:t.EQUAL,[RU]:t.GEQUAL,[bU]:t.GREATER,[CU]:t.NOTEQUAL};function ee(D,b){if(b.type===Fa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===lr||b.magFilter===mm||b.magFilter===wf||b.magFilter===Oo||b.minFilter===lr||b.minFilter===mm||b.minFilter===wf||b.minFilter===Oo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,ce[b.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,ce[b.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,ce[b.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,z[b.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,z[b.minFilter]),b.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ji||b.minFilter!==wf&&b.minFilter!==Oo||b.type===Fa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ge(D,b){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",C));const ue=b.source;let fe=g.get(ue);fe===void 0&&(fe={},g.set(ue,fe));const me=ie(b);if(me!==D.__cacheKey){fe[me]===void 0&&(fe[me]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,te=!0),fe[me].usedTimes++;const Ve=fe[D.__cacheKey];Ve!==void 0&&(fe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(b)),D.__cacheKey=me,D.__webglTexture=fe[me].texture}return te}function Ce(D,b,te){let ue=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=t.TEXTURE_3D);const fe=ge(D,b),me=b.source;n.bindTexture(ue,D.__webglTexture,t.TEXTURE0+te);const Ve=i.get(me);if(me.version!==Ve.__version||fe===!0){n.activeTexture(t.TEXTURE0+te);const _e=Ft.getPrimaries(Ft.workingColorSpace),Oe=b.colorSpace===Ia?null:Ft.getPrimaries(b.colorSpace),qe=b.colorSpace===Ia||_e===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=w(b.image,!1,r.maxTextureSize);ye=je(b,ye);const be=o.convert(b.format,b.colorSpace),Qe=o.convert(b.type);let Ie=S(b.internalFormat,be,Qe,b.colorSpace,b.isVideoTexture);ee(ue,b);let Ne;const ht=b.mipmaps,pt=b.isVideoTexture!==!0&&Ie!==tw,Mt=Ve.__version===void 0||fe===!0,St=me.dataReady,Nt=x(b,ye);if(b.isDepthTexture)Ie=t.DEPTH_COMPONENT16,b.type===Fa?Ie=t.DEPTH_COMPONENT32F:b.type===hl?Ie=t.DEPTH_COMPONENT24:b.type===Ju&&(Ie=t.DEPTH24_STENCIL8),Mt&&(pt?n.texStorage2D(t.TEXTURE_2D,1,Ie,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ye.width,ye.height,0,be,Qe,null));else if(b.isDataTexture)if(ht.length>0){pt&&Mt&&n.texStorage2D(t.TEXTURE_2D,Nt,Ie,ht[0].width,ht[0].height);for(let Fe=0,F=ht.length;Fe<F;Fe++)Ne=ht[Fe],pt?St&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,be,Qe,Ne.data):n.texImage2D(t.TEXTURE_2D,Fe,Ie,Ne.width,Ne.height,0,be,Qe,Ne.data);b.generateMipmaps=!1}else pt?(Mt&&n.texStorage2D(t.TEXTURE_2D,Nt,Ie,ye.width,ye.height),St&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye.width,ye.height,be,Qe,ye.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ye.width,ye.height,0,be,Qe,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pt&&Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Nt,Ie,ht[0].width,ht[0].height,ye.depth);for(let Fe=0,F=ht.length;Fe<F;Fe++)Ne=ht[Fe],b.format!==wr?be!==null?pt?St&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Fe,0,0,0,Ne.width,Ne.height,ye.depth,be,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Fe,Ie,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?St&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Fe,0,0,0,Ne.width,Ne.height,ye.depth,be,Qe,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Fe,Ie,Ne.width,Ne.height,ye.depth,0,be,Qe,Ne.data)}else{pt&&Mt&&n.texStorage2D(t.TEXTURE_2D,Nt,Ie,ht[0].width,ht[0].height);for(let Fe=0,F=ht.length;Fe<F;Fe++)Ne=ht[Fe],b.format!==wr?be!==null?pt?St&&n.compressedTexSubImage2D(t.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,be,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Fe,Ie,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?St&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,be,Qe,Ne.data):n.texImage2D(t.TEXTURE_2D,Fe,Ie,Ne.width,Ne.height,0,be,Qe,Ne.data)}else if(b.isDataArrayTexture)pt?(Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Nt,Ie,ye.width,ye.height,ye.depth),St&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,be,Qe,ye.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ye.width,ye.height,ye.depth,0,be,Qe,ye.data);else if(b.isData3DTexture)pt?(Mt&&n.texStorage3D(t.TEXTURE_3D,Nt,Ie,ye.width,ye.height,ye.depth),St&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,be,Qe,ye.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ye.width,ye.height,ye.depth,0,be,Qe,ye.data);else if(b.isFramebufferTexture){if(Mt)if(pt)n.texStorage2D(t.TEXTURE_2D,Nt,Ie,ye.width,ye.height);else{let Fe=ye.width,F=ye.height;for(let Ee=0;Ee<Nt;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ie,Fe,F,0,be,Qe,null),Fe>>=1,F>>=1}}else if(ht.length>0){if(pt&&Mt){const Fe=Ct(ht[0]);n.texStorage2D(t.TEXTURE_2D,Nt,Ie,Fe.width,Fe.height)}for(let Fe=0,F=ht.length;Fe<F;Fe++)Ne=ht[Fe],pt?St&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,be,Qe,Ne):n.texImage2D(t.TEXTURE_2D,Fe,Ie,be,Qe,Ne);b.generateMipmaps=!1}else if(pt){if(Mt){const Fe=Ct(ye);n.texStorage2D(t.TEXTURE_2D,Nt,Ie,Fe.width,Fe.height)}St&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Qe,ye)}else n.texImage2D(t.TEXTURE_2D,0,Ie,be,Qe,ye);_(b)&&p(ue),Ve.__version=me.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ze(D,b,te){if(b.image.length!==6)return;const ue=ge(D,b),fe=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+te);const me=i.get(fe);if(fe.version!==me.__version||ue===!0){n.activeTexture(t.TEXTURE0+te);const Ve=Ft.getPrimaries(Ft.workingColorSpace),_e=b.colorSpace===Ia?null:Ft.getPrimaries(b.colorSpace),Oe=b.colorSpace===Ia||Ve===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,be=[];for(let F=0;F<6;F++)!qe&&!ye?be[F]=w(b.image[F],!0,r.maxCubemapSize):be[F]=ye?b.image[F].image:b.image[F],be[F]=je(b,be[F]);const Qe=be[0],Ie=o.convert(b.format,b.colorSpace),Ne=o.convert(b.type),ht=S(b.internalFormat,Ie,Ne,b.colorSpace),pt=b.isVideoTexture!==!0,Mt=me.__version===void 0||ue===!0,St=fe.dataReady;let Nt=x(b,Qe);ee(t.TEXTURE_CUBE_MAP,b);let Fe;if(qe){pt&&Mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Nt,ht,Qe.width,Qe.height);for(let F=0;F<6;F++){Fe=be[F].mipmaps;for(let Ee=0;Ee<Fe.length;Ee++){const Me=Fe[Ee];b.format!==wr?Ie!==null?pt?St&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee,0,0,Me.width,Me.height,Ie,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee,ht,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?St&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee,0,0,Me.width,Me.height,Ie,Ne,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee,ht,Me.width,Me.height,0,Ie,Ne,Me.data)}}}else{if(Fe=b.mipmaps,pt&&Mt){Fe.length>0&&Nt++;const F=Ct(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Nt,ht,F.width,F.height)}for(let F=0;F<6;F++)if(ye){pt?St&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,be[F].width,be[F].height,Ie,Ne,be[F].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ht,be[F].width,be[F].height,0,Ie,Ne,be[F].data);for(let Ee=0;Ee<Fe.length;Ee++){const ze=Fe[Ee].image[F].image;pt?St&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee+1,0,0,ze.width,ze.height,Ie,Ne,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee+1,ht,ze.width,ze.height,0,Ie,Ne,ze.data)}}else{pt?St&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ie,Ne,be[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ht,Ie,Ne,be[F]);for(let Ee=0;Ee<Fe.length;Ee++){const Me=Fe[Ee];pt?St&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee+1,0,0,Ie,Ne,Me.image[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee+1,ht,Ie,Ne,Me.image[F])}}}_(b)&&p(t.TEXTURE_CUBE_MAP),me.__version=fe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Q(D,b,te,ue,fe,me){const Ve=o.convert(te.format,te.colorSpace),_e=o.convert(te.type),Oe=S(te.internalFormat,Ve,_e,te.colorSpace);if(!i.get(b).__hasExternalTextures){const ye=Math.max(1,b.width>>me),be=Math.max(1,b.height>>me);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,me,Oe,ye,be,b.depth,0,Ve,_e,null):n.texImage2D(fe,me,Oe,ye,be,0,Ve,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Ye(b)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,fe,i.get(te).__webglTexture,0,st(b)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,fe,i.get(te).__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(D,b,te){if(t.bindRenderbuffer(t.RENDERBUFFER,D),b.depthBuffer&&!b.stencilBuffer){let ue=t.DEPTH_COMPONENT24;if(te||Ye(b)){const fe=b.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Fa?ue=t.DEPTH_COMPONENT32F:fe.type===hl&&(ue=t.DEPTH_COMPONENT24));const me=st(b);Ye(b)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ue,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ue,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,ue,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,D)}else if(b.depthBuffer&&b.stencilBuffer){const ue=st(b);te&&Ye(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,t.DEPTH24_STENCIL8,b.width,b.height):Ye(b)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,D)}else{const ue=b.textures;for(let fe=0;fe<ue.length;fe++){const me=ue[fe],Ve=o.convert(me.format,me.colorSpace),_e=o.convert(me.type),Oe=S(me.internalFormat,Ve,_e,me.colorSpace),qe=st(b);te&&Ye(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Oe,b.width,b.height):Ye(b)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,Oe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Oe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const ue=i.get(b.depthTexture).__webglTexture,fe=st(b);if(b.depthTexture.format===tl)Ye(b)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Gu)Ye(b)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function xe(D){const b=i.get(D),te=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,D)}else if(te){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]=t.createRenderbuffer(),he(b.__webglDepthbuffer[ue],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),he(b.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(D,b,te){const ue=i.get(D);b!==void 0&&Q(ue.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),te!==void 0&&xe(D)}function tt(D){const b=D.texture,te=i.get(D),ue=i.get(b);D.addEventListener("dispose",O);const fe=D.textures,me=D.isWebGLCubeRenderTarget===!0,Ve=fe.length>1;if(Ve||(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=b.version,l.memory.textures++),me){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)te.__webglFramebuffer[_e][Oe]=t.createFramebuffer()}else te.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)te.__webglFramebuffer[_e]=t.createFramebuffer()}else te.__webglFramebuffer=t.createFramebuffer();if(Ve)for(let _e=0,Oe=fe.length;_e<Oe;_e++){const qe=i.get(fe[_e]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),l.memory.textures++)}if(D.samples>0&&Ye(D)===!1){te.__webglMultisampledFramebuffer=t.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const Oe=fe[_e];te.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const qe=o.convert(Oe.format,Oe.colorSpace),ye=o.convert(Oe.type),be=S(Oe.internalFormat,qe,ye,Oe.colorSpace,D.isXRRenderTarget===!0),Qe=st(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,be,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=t.createRenderbuffer(),he(te.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),ee(t.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)Q(te.__webglFramebuffer[_e][Oe],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe);else Q(te.__webglFramebuffer[_e],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(b)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let _e=0,Oe=fe.length;_e<Oe;_e++){const qe=fe[_e],ye=i.get(qe);n.bindTexture(t.TEXTURE_2D,ye.__webglTexture),ee(t.TEXTURE_2D,qe),Q(te.__webglFramebuffer,D,qe,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),_(qe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,ue.__webglTexture),ee(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)Q(te.__webglFramebuffer[Oe],D,b,t.COLOR_ATTACHMENT0,_e,Oe);else Q(te.__webglFramebuffer,D,b,t.COLOR_ATTACHMENT0,_e,0);_(b)&&p(_e),n.unbindTexture()}D.depthBuffer&&xe(D)}function xt(D){const b=D.textures;for(let te=0,ue=b.length;te<ue;te++){const fe=b[te];if(_(fe)){const me=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ve=i.get(fe).__webglTexture;n.bindTexture(me,Ve),p(me),n.unbindTexture()}}}function $(D){if(D.samples>0&&Ye(D)===!1){const b=D.textures,te=D.width,ue=D.height;let fe=t.COLOR_BUFFER_BIT;const me=[],Ve=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(D),Oe=b.length>1;if(Oe)for(let qe=0;qe<b.length;qe++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){me.push(t.COLOR_ATTACHMENT0+qe),D.depthBuffer&&me.push(Ve);const ye=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(ye===!1&&(D.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&_e.__isTransmissionRenderTarget!==!0&&(fe|=t.STENCIL_BUFFER_BIT)),Oe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[qe]),ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ve])),Oe){const be=i.get(b[qe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,te,ue,0,0,te,ue,fe,t.NEAREST),f&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Oe)for(let qe=0;qe<b.length;qe++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.RENDERBUFFER,_e.__webglColorRenderbuffer[qe]);const ye=i.get(b[qe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function st(D){return Math.min(r.maxSamples,D.samples)}function Ye(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(D){const b=l.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function je(D,b){const te=D.colorSpace,ue=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==oo&&te!==Ia&&(Ft.getTransfer(te)===Yt?(ue!==wr||fe!==Ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=T,this.setTexture2D=H,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=$e,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ye}function I6(t,e){function n(i,r=Ia){let o;const l=Ft.getTransfer(r);if(i===Ya)return t.UNSIGNED_BYTE;if(i===KE)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ZE)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dU)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cU)return t.BYTE;if(i===fU)return t.SHORT;if(i===YE)return t.UNSIGNED_SHORT;if(i===qE)return t.INT;if(i===hl)return t.UNSIGNED_INT;if(i===Fa)return t.FLOAT;if(i===Gd)return t.HALF_FLOAT;if(i===hU)return t.ALPHA;if(i===pU)return t.RGB;if(i===wr)return t.RGBA;if(i===mU)return t.LUMINANCE;if(i===gU)return t.LUMINANCE_ALPHA;if(i===tl)return t.DEPTH_COMPONENT;if(i===Gu)return t.DEPTH_STENCIL;if(i===vU)return t.RED;if(i===QE)return t.RED_INTEGER;if(i===_U)return t.RG;if(i===JE)return t.RG_INTEGER;if(i===ew)return t.RGBA_INTEGER;if(i===gm||i===vm||i===_m||i===xm)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===gm)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vm)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_m)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xm)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===gm)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vm)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_m)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xm)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ry||i===Py||i===Ly||i===Iy)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ry)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Py)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ly)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Iy)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tw)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Ny||i===Dy)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ny)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Dy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uy||i===Oy||i===Fy||i===ky||i===zy||i===By||i===Hy||i===Vy||i===Gy||i===Wy||i===Xy||i===jy||i===$y||i===Yy)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Uy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ky)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===By)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$y)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yy)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ym||i===qy||i===Ky)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===ym)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qy)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ky)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xU||i===Zy||i===Qy||i===Jy)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ym)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Zy)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qy)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jy)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ju?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class N6 extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jf extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D6={type:"move"};class $m{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),p=this._getHandJoint(d,w);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=h.position.distanceTo(m.position),y=.02,M=.005;d.inputState.pinching&&g>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(D6)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new no({vertexShader:U6,fragmentShader:O6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Kr(new xh(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class k6 extends xl{constructor(e,n){super();const i=this;let r=null,o=1,l=null,u="local-floor",f=1,d=null,h=null,m=null,g=null,y=null,M=null;const w=new F6,_=n.getContextAttributes();let p=null,S=null;const x=[],C=[],O=new At;let N=null;const I=new Wi;I.layers.enable(1),I.viewport=new In;const k=new Wi;k.layers.enable(2),k.viewport=new In;const R=[I,k],T=new N6;T.layers.enable(1),T.layers.enable(2);let X=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=x[Q];return he===void 0&&(he=new $m,x[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=x[Q];return he===void 0&&(he=new $m,x[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=x[Q];return he===void 0&&(he=new $m,x[Q]=he),he.getHandSpace()};function H(Q){const he=C.indexOf(Q.inputSource);if(he===-1)return;const Se=x[he];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,d||l),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",ae);for(let Q=0;Q<x.length;Q++){const he=C[Q];he!==null&&(C[Q]=null,x[Q].disconnect(he))}X=null,ie=null,w.reset(),e.setRenderTarget(p),y=null,g=null,m=null,r=null,S=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",re),r.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),S=new $o(y.framebufferWidth,y.framebufferHeight,{format:wr,type:Ya,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,Se=null,xe=null;_.depth&&(xe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=_.stencil?Gu:tl,Se=_.stencil?Ju:hl);const $e={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};m=new XRWebGLBinding(r,n),g=m.createProjectionLayer($e),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),S=new $o(g.textureWidth,g.textureHeight,{format:wr,type:Ya,depthTexture:new vw(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const tt=e.properties.get(S);tt.__ignoreDepthValues=g.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await r.requestReferenceSpace(u),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ae(Q){for(let he=0;he<Q.removed.length;he++){const Se=Q.removed[he],xe=C.indexOf(Se);xe>=0&&(C[xe]=null,x[xe].disconnect(Se))}for(let he=0;he<Q.added.length;he++){const Se=Q.added[he];let xe=C.indexOf(Se);if(xe===-1){for(let tt=0;tt<x.length;tt++)if(tt>=C.length){C.push(Se),xe=tt;break}else if(C[tt]===null){C[tt]=Se,xe=tt;break}if(xe===-1)break}const $e=x[xe];$e&&$e.connect(Se)}}const de=new Z,ce=new Z;function z(Q,he,Se){de.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const xe=de.distanceTo(ce),$e=he.projectionMatrix.elements,tt=Se.projectionMatrix.elements,xt=$e[14]/($e[10]-1),$=$e[14]/($e[10]+1),st=($e[9]+1)/$e[5],Ye=($e[9]-1)/$e[5],wt=($e[8]-1)/$e[0],je=(tt[8]+1)/tt[0],Ct=xt*wt,D=xt*je,b=xe/(-wt+je),te=b*-wt;he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(te),Q.translateZ(b),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const ue=xt+b,fe=$+b,me=Ct-te,Ve=D+(xe-te),_e=st*$/fe*ue,Oe=Ye*$/fe*ue;Q.projectionMatrix.makePerspective(me,Ve,_e,Oe,ue,fe),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ne(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;w.texture!==null&&(Q.near=w.depthNear,Q.far=w.depthFar),T.near=k.near=I.near=Q.near,T.far=k.far=I.far=Q.far,(X!==T.near||ie!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),X=T.near,ie=T.far,I.near=X,I.far=ie,k.near=X,k.far=ie,I.updateProjectionMatrix(),k.updateProjectionMatrix(),Q.updateProjectionMatrix());const he=Q.parent,Se=T.cameras;ne(T,he);for(let xe=0;xe<Se.length;xe++)ne(Se[xe],he);Se.length===2?z(T,I,k):T.projectionMatrix.copy(I.projectionMatrix),ee(Q,T,he)};function ee(Q,he,Se){Se===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=u0*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&y===null))return f},this.setFoveation=function(Q){f=Q,g!==null&&(g.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null};let ge=null;function Ce(Q,he){if(h=he.getViewerPose(d||l),M=he,h!==null){const Se=h.views;y!==null&&(e.setRenderTargetFramebuffer(S,y.framebuffer),e.setRenderTarget(S));let xe=!1;Se.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let tt=0;tt<Se.length;tt++){const xt=Se[tt];let $=null;if(y!==null)$=y.getViewport(xt);else{const Ye=m.getViewSubImage(g,xt);$=Ye.viewport,tt===0&&(e.setRenderTargetTextures(S,Ye.colorTexture,g.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(S))}let st=R[tt];st===void 0&&(st=new Wi,st.layers.enable(tt),st.viewport=new In,R[tt]=st),st.matrix.fromArray(xt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(xt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set($.x,$.y,$.width,$.height),tt===0&&(T.matrix.copy(st.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(st)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")){const tt=m.getDepthInformation(Se[0]);tt&&tt.isValid&&tt.texture&&w.init(e,tt,r.renderState)}}for(let Se=0;Se<x.length;Se++){const xe=C[Se],$e=x[Se];xe!==null&&$e!==void 0&&$e.update(xe,he,d||l)}w.render(e,T),ge&&ge(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ze=new gw;Ze.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const Eo=new aa,z6=new mn;function B6(t,e){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,dw(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,S,x,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),m(_,p)):p.isMeshPhongMaterial?(o(_,p),h(_,p)):p.isMeshStandardMaterial?(o(_,p),g(_,p),p.isMeshPhysicalMaterial&&y(_,p,C)):p.isMeshMatcapMaterial?(o(_,p),M(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),w(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(l(_,p),p.isLineDashedMaterial&&u(_,p)):p.isPointsMaterial?f(_,p,S,x):p.isSpriteMaterial?d(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===di&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===di&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,C=S.envMapRotation;if(x&&(_.envMap.value=x,Eo.copy(C),Eo.x*=-1,Eo.y*=-1,Eo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Eo.y*=-1,Eo.z*=-1),_.envMapRotation.value.setFromMatrix4(z6.makeRotationFromEuler(Eo)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const O=t._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*O,n(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function u(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function f(_,p,S,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*S,_.scale.value=x*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function g(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function y(_,p,S){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,p){p.matcap&&(_.matcap.value=p.matcap)}function w(_,p){const S=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H6(t,e,n,i){let r={},o={},l=[];const u=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function f(S,x){const C=x.program;i.uniformBlockBinding(S,C)}function d(S,x){let C=r[S.id];C===void 0&&(M(S),C=h(S),r[S.id]=C,S.addEventListener("dispose",_));const O=x.program;i.updateUBOMapping(S,O);const N=e.render.frame;o[S.id]!==N&&(g(S),o[S.id]=N)}function h(S){const x=m();S.__bindingPointIndex=x;const C=t.createBuffer(),O=S.__size,N=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,O,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,C),C}function m(){for(let S=0;S<u;S++)if(l.indexOf(S)===-1)return l.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(S){const x=r[S.id],C=S.uniforms,O=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let N=0,I=C.length;N<I;N++){const k=Array.isArray(C[N])?C[N]:[C[N]];for(let R=0,T=k.length;R<T;R++){const X=k[R];if(y(X,N,R,O)===!0){const ie=X.__offset,H=Array.isArray(X.value)?X.value:[X.value];let re=0;for(let ae=0;ae<H.length;ae++){const de=H[ae],ce=w(de);typeof de=="number"||typeof de=="boolean"?(X.__data[0]=de,t.bufferSubData(t.UNIFORM_BUFFER,ie+re,X.__data)):de.isMatrix3?(X.__data[0]=de.elements[0],X.__data[1]=de.elements[1],X.__data[2]=de.elements[2],X.__data[3]=0,X.__data[4]=de.elements[3],X.__data[5]=de.elements[4],X.__data[6]=de.elements[5],X.__data[7]=0,X.__data[8]=de.elements[6],X.__data[9]=de.elements[7],X.__data[10]=de.elements[8],X.__data[11]=0):(de.toArray(X.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ie,X.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(S,x,C,O){const N=S.value,I=x+"_"+C;if(O[I]===void 0)return typeof N=="number"||typeof N=="boolean"?O[I]=N:O[I]=N.clone(),!0;{const k=O[I];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return O[I]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function M(S){const x=S.uniforms;let C=0;const O=16;for(let I=0,k=x.length;I<k;I++){const R=Array.isArray(x[I])?x[I]:[x[I]];for(let T=0,X=R.length;T<X;T++){const ie=R[T],H=Array.isArray(ie.value)?ie.value:[ie.value];for(let re=0,ae=H.length;re<ae;re++){const de=H[re],ce=w(de),z=C%O;z!==0&&O-z<ce.boundary&&(C+=O-z),ie.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=C,C+=ce.storage}}}const N=C%O;return N>0&&(C+=O-N),S.__size=C,S.__cache={},this}function w(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function _(S){const x=S.target;x.removeEventListener("dispose",_);const C=l.indexOf(x.__bindingPointIndex);l.splice(C,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);l=[],r={},o={}}return{bind:f,update:d,dispose:p}}class V6{constructor(e={}){const{canvas:n=IU(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=l;const y=new Uint32Array(4),M=new Int32Array(4);let w=null,_=null;const p=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xr,this._useLegacyLights=!1,this.toneMapping=$a,this.toneMappingExposure=1;const x=this;let C=!1,O=0,N=0,I=null,k=-1,R=null;const T=new In,X=new In;let ie=null;const H=new Lt(0);let re=0,ae=n.width,de=n.height,ce=1,z=null,ne=null;const ee=new In(0,0,ae,de),ge=new In(0,0,ae,de);let Ce=!1;const Ze=new mw;let Q=!1,he=!1;const Se=new mn,xe=new At,$e=new Z,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return I===null?ce:1}let $=i;function st(L,j){const K=n.getContext(L,j);return K!==null?K:null}try{const L={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xv}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",ze,!1),$===null){const j="webgl2";if($=st(j,L),$===null)throw st(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ye,wt,je,Ct,D,b,te,ue,fe,me,Ve,_e,Oe,qe,ye,be,Qe,Ie,Ne,ht,pt,Mt,St,Nt;function Fe(){Ye=new KF($),Ye.init(),wt=new GF($,Ye,e),Mt=new I6($,Ye),je=new P6($),Ct=new JF($),D=new g6,b=new L6($,Ye,je,D,wt,Mt,Ct),te=new XF(x),ue=new qF(x),fe=new r5($),St=new HF($,fe),me=new ZF($,fe,Ct,St),Ve=new tk($,me,fe,Ct),Ne=new ek($,wt,b),be=new WF(D),_e=new m6(x,te,ue,Ye,wt,St,be),Oe=new B6(x,D),qe=new _6,ye=new w6(Ye),Ie=new BF(x,te,ue,je,Ve,g,f),Qe=new R6(x,Ve,wt),Nt=new H6($,Ct,wt,je),ht=new VF($,Ye,Ct),pt=new QF($,Ye,Ct),Ct.programs=_e.programs,x.capabilities=wt,x.extensions=Ye,x.properties=D,x.renderLists=qe,x.shadowMap=Qe,x.state=je,x.info=Ct}Fe();const F=new k6(x,$);this.xr=F,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=Ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(L){L!==void 0&&(ce=L,this.setSize(ae,de,!1))},this.getSize=function(L){return L.set(ae,de)},this.setSize=function(L,j,K=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=L,de=j,n.width=Math.floor(L*ce),n.height=Math.floor(j*ce),K===!0&&(n.style.width=L+"px",n.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(ae*ce,de*ce).floor()},this.setDrawingBufferSize=function(L,j,K){ae=L,de=j,ce=K,n.width=Math.floor(L*K),n.height=Math.floor(j*K),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,j,K,J){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,j,K,J),je.viewport(T.copy(ee).multiplyScalar(ce).round())},this.getScissor=function(L){return L.copy(ge)},this.setScissor=function(L,j,K,J){L.isVector4?ge.set(L.x,L.y,L.z,L.w):ge.set(L,j,K,J),je.scissor(X.copy(ge).multiplyScalar(ce).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(L){je.setScissorTest(Ce=L)},this.setOpaqueSort=function(L){z=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(L=!0,j=!0,K=!0){let J=0;if(L){let Y=!1;if(I!==null){const Ae=I.texture.format;Y=Ae===ew||Ae===JE||Ae===QE}if(Y){const Ae=I.texture.type,ke=Ae===Ya||Ae===hl||Ae===YE||Ae===Ju||Ae===KE||Ae===ZE,He=Ie.getClearColor(),Ke=Ie.getClearAlpha(),Je=He.r,nt=He.g,rt=He.b;ke?(y[0]=Je,y[1]=nt,y[2]=rt,y[3]=Ke,$.clearBufferuiv($.COLOR,0,y)):(M[0]=Je,M[1]=nt,M[2]=rt,M[3]=Ke,$.clearBufferiv($.COLOR,0,M))}else J|=$.COLOR_BUFFER_BIT}j&&(J|=$.DEPTH_BUFFER_BIT),K&&(J|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),qe.dispose(),ye.dispose(),D.dispose(),te.dispose(),ue.dispose(),Ve.dispose(),St.dispose(),Nt.dispose(),_e.dispose(),F.dispose(),F.removeEventListener("sessionstart",Pi),F.removeEventListener("sessionend",Li),Cr.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=Ct.autoReset,j=Qe.enabled,K=Qe.autoUpdate,J=Qe.needsUpdate,Y=Qe.type;Fe(),Ct.autoReset=L,Qe.enabled=j,Qe.autoUpdate=K,Qe.needsUpdate=J,Qe.type=Y}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Be(L){const j=L.target;j.removeEventListener("dispose",Be),Dt(j)}function Dt(L){zt(L),D.remove(L)}function zt(L){const j=D.get(L).programs;j!==void 0&&(j.forEach(function(K){_e.releaseProgram(K)}),L.isShaderMaterial&&_e.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,K,J,Y,Ae){j===null&&(j=tt);const ke=Y.isMesh&&Y.matrixWorld.determinant()<0,He=Sh(L,j,K,J,Y);je.setMaterial(J,ke);let Ke=K.index,Je=1;if(J.wireframe===!0){if(Ke=me.getWireframeAttribute(K),Ke===void 0)return;Je=2}const nt=K.drawRange,rt=K.attributes.position;let en=nt.start*Je,Un=(nt.start+nt.count)*Je;Ae!==null&&(en=Math.max(en,Ae.start*Je),Un=Math.min(Un,(Ae.start+Ae.count)*Je)),Ke!==null?(en=Math.max(en,0),Un=Math.min(Un,Ke.count)):rt!=null&&(en=Math.max(en,0),Un=Math.min(Un,rt.count));const un=Un-en;if(un<0||un===1/0)return;St.setup(Y,J,He,K,Ke);let Ii,Xt=ht;if(Ke!==null&&(Ii=fe.get(Ke),Xt=pt,Xt.setIndex(Ii)),Y.isMesh)J.wireframe===!0?(je.setLineWidth(J.wireframeLinewidth*xt()),Xt.setMode($.LINES)):Xt.setMode($.TRIANGLES);else if(Y.isLine){let ot=J.linewidth;ot===void 0&&(ot=1),je.setLineWidth(ot*xt()),Y.isLineSegments?Xt.setMode($.LINES):Y.isLineLoop?Xt.setMode($.LINE_LOOP):Xt.setMode($.LINE_STRIP)}else Y.isPoints?Xt.setMode($.POINTS):Y.isSprite&&Xt.setMode($.TRIANGLES);if(Y.isBatchedMesh)Xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Xt.renderInstances(en,un,Y.count);else if(K.isInstancedBufferGeometry){const ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ml=Math.min(K.instanceCount,ot);Xt.renderInstances(en,un,Ml)}else Xt.render(en,un)};function Wt(L,j,K){L.transparent===!0&&L.side===jr&&L.forceSinglePass===!1?(L.side=di,L.needsUpdate=!0,Qo(L,j,K),L.side=to,L.needsUpdate=!0,Qo(L,j,K),L.side=jr):Qo(L,j,K)}this.compile=function(L,j,K=null){K===null&&(K=L),_=ye.get(K),_.init(),S.push(_),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),L!==K&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights(x._useLegacyLights);const J=new Set;return L.traverse(function(Y){const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let ke=0;ke<Ae.length;ke++){const He=Ae[ke];Wt(He,K,Y),J.add(He)}else Wt(Ae,K,Y),J.add(Ae)}),S.pop(),_=null,J},this.compileAsync=function(L,j,K=null){const J=this.compile(L,j,K);return new Promise(Y=>{function Ae(){if(J.forEach(function(ke){D.get(ke).currentProgram.isReady()&&J.delete(ke)}),J.size===0){Y(L);return}setTimeout(Ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let En=null;function Ut(L){En&&En(L)}function Pi(){Cr.stop()}function Li(){Cr.start()}const Cr=new gw;Cr.setAnimationLoop(Ut),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(L){En=L,F.setAnimationLoop(L),L===null?Cr.stop():Cr.start()},F.addEventListener("sessionstart",Pi),F.addEventListener("sessionend",Li),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(j),j=F.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,j,I),_=ye.get(L,S.length),_.init(),S.push(_),Se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ze.setFromProjectionMatrix(Se),he=this.localClippingEnabled,Q=be.init(this.clippingPlanes,he),w=qe.get(L,p.length),w.init(),p.push(w),Ko(L,j,0,x.sortObjects),w.finish(),x.sortObjects===!0&&w.sort(z,ne),this.info.render.frame++,Q===!0&&be.beginShadows();const K=_.state.shadowsArray;if(Qe.render(K,L,j),Q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1)&&Ie.render(w,L),_.setupLights(x._useLegacyLights),j.isArrayCamera){const J=j.cameras;for(let Y=0,Ae=J.length;Y<Ae;Y++){const ke=J[Y];ac(w,L,ke,ke.viewport)}}else ac(w,L,j);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(x,L,j),St.resetDefaultState(),k=-1,R=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,p.pop(),p.length>0?w=p[p.length-1]:w=null};function Ko(L,j,K,J){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ze.intersectsSprite(L)){J&&$e.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Se);const ke=Ve.update(L),He=L.material;He.visible&&w.push(L,ke,He,K,$e.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ze.intersectsObject(L))){const ke=Ve.update(L),He=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),$e.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),$e.copy(ke.boundingSphere.center)),$e.applyMatrix4(L.matrixWorld).applyMatrix4(Se)),Array.isArray(He)){const Ke=ke.groups;for(let Je=0,nt=Ke.length;Je<nt;Je++){const rt=Ke[Je],en=He[rt.materialIndex];en&&en.visible&&w.push(L,ke,en,K,$e.z,rt)}}else He.visible&&w.push(L,ke,He,K,$e.z,null)}}const Ae=L.children;for(let ke=0,He=Ae.length;ke<He;ke++)Ko(Ae[ke],j,K,J)}function ac(L,j,K,J){const Y=L.opaque,Ae=L.transmissive,ke=L.transparent;_.setupLightsView(K),Q===!0&&be.setGlobalState(x.clippingPlanes,K),Ae.length>0&&Sl(Y,Ae,j,K),J&&je.viewport(T.copy(J)),Y.length>0&&Zo(Y,j,K),Ae.length>0&&Zo(Ae,j,K),ke.length>0&&Zo(ke,j,K),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Sl(L,j,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget===null){_.state.transmissionRenderTarget=new $o(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Gd:Ya,minFilter:Oo,samples:4,stencilBuffer:o});const Je=D.get(_.state.transmissionRenderTarget);Je.__isTransmissionRenderTarget=!0}const Ae=_.state.transmissionRenderTarget;x.getDrawingBufferSize(xe),Ae.setSize(xe.x,xe.y);const ke=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(H),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear();const He=x.toneMapping;x.toneMapping=$a,Zo(L,K,J),b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae);let Ke=!1;for(let Je=0,nt=j.length;Je<nt;Je++){const rt=j[Je],en=rt.object,Un=rt.geometry,un=rt.material,Ii=rt.group;if(un.side===jr&&en.layers.test(J.layers)){const Xt=un.side;un.side=di,un.needsUpdate=!0,oc(en,K,J,Un,un,Ii),un.side=Xt,un.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae)),x.setRenderTarget(ke),x.setClearColor(H,re),x.toneMapping=He}function Zo(L,j,K){const J=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ae=L.length;Y<Ae;Y++){const ke=L[Y],He=ke.object,Ke=ke.geometry,Je=J===null?ke.material:J,nt=ke.group;He.layers.test(K.layers)&&oc(He,j,K,Ke,Je,nt)}}function oc(L,j,K,J,Y,Ae){L.onBeforeRender(x,j,K,J,Y,Ae),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(x,j,K,J,L,Ae),Y.transparent===!0&&Y.side===jr&&Y.forceSinglePass===!1?(Y.side=di,Y.needsUpdate=!0,x.renderBufferDirect(K,j,J,Y,L,Ae),Y.side=to,Y.needsUpdate=!0,x.renderBufferDirect(K,j,J,Y,L,Ae),Y.side=jr):x.renderBufferDirect(K,j,J,Y,L,Ae),L.onAfterRender(x,j,K,J,Y,Ae)}function Qo(L,j,K){j.isScene!==!0&&(j=tt);const J=D.get(L),Y=_.state.lights,Ae=_.state.shadowsArray,ke=Y.state.version,He=_e.getParameters(L,Y.state,Ae,j,K),Ke=_e.getProgramCacheKey(He);let Je=J.programs;J.environment=L.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(L.isMeshStandardMaterial?ue:te).get(L.envMap||J.environment),J.envMapRotation=J.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",Be),Je=new Map,J.programs=Je);let nt=Je.get(Ke);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===ke)return lc(L,He),nt}else He.uniforms=_e.getUniforms(L),L.onBuild(K,He,x),L.onBeforeCompile(He,x),nt=_e.acquireProgram(He,Ke),Je.set(Ke,nt),J.uniforms=He.uniforms;const rt=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=be.uniform),lc(L,He),J.needsLights=Eh(L),J.lightsStateVersion=ke,J.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function sc(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=fd.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function lc(L,j){const K=D.get(L);K.outputColorSpace=j.outputColorSpace,K.batching=j.batching,K.instancing=j.instancing,K.instancingColor=j.instancingColor,K.instancingMorph=j.instancingMorph,K.skinning=j.skinning,K.morphTargets=j.morphTargets,K.morphNormals=j.morphNormals,K.morphColors=j.morphColors,K.morphTargetsCount=j.morphTargetsCount,K.numClippingPlanes=j.numClippingPlanes,K.numIntersection=j.numClipIntersection,K.vertexAlphas=j.vertexAlphas,K.vertexTangents=j.vertexTangents,K.toneMapping=j.toneMapping}function Sh(L,j,K,J,Y){j.isScene!==!0&&(j=tt),b.resetTextureUnits();const Ae=j.fog,ke=J.isMeshStandardMaterial?j.environment:null,He=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oo,Ke=(J.isMeshStandardMaterial?ue:te).get(J.envMap||ke),Je=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),rt=!!K.morphAttributes.position,en=!!K.morphAttributes.normal,Un=!!K.morphAttributes.color;let un=$a;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(un=x.toneMapping);const Ii=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=Ii!==void 0?Ii.length:0,ot=D.get(J),Ml=_.state.lights;if(Q===!0&&(he===!0||L!==R)){const Wn=L===R&&J.id===k;be.setState(J,L,Wn)}let Bt=!1;J.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Ml.state.version||ot.outputColorSpace!==He||Y.isBatchedMesh&&ot.batching===!1||!Y.isBatchedMesh&&ot.batching===!0||Y.isInstancedMesh&&ot.instancing===!1||!Y.isInstancedMesh&&ot.instancing===!0||Y.isSkinnedMesh&&ot.skinning===!1||!Y.isSkinnedMesh&&ot.skinning===!0||Y.isInstancedMesh&&ot.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ot.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ot.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ot.instancingMorph===!1&&Y.morphTexture!==null||ot.envMap!==Ke||J.fog===!0&&ot.fog!==Ae||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==be.numPlanes||ot.numIntersection!==be.numIntersection)||ot.vertexAlphas!==Je||ot.vertexTangents!==nt||ot.morphTargets!==rt||ot.morphNormals!==en||ot.morphColors!==Un||ot.toneMapping!==un||ot.morphTargetsCount!==Xt)&&(Bt=!0):(Bt=!0,ot.__version=J.version);let hr=ot.currentProgram;Bt===!0&&(hr=Qo(J,j,Y));let El=!1,ua=!1,so=!1;const wn=hr.getUniforms(),Ki=ot.uniforms;if(je.useProgram(hr.program)&&(El=!0,ua=!0,so=!0),J.id!==k&&(k=J.id,ua=!0),El||R!==L){wn.setValue($,"projectionMatrix",L.projectionMatrix),wn.setValue($,"viewMatrix",L.matrixWorldInverse);const Wn=wn.map.cameraPosition;Wn!==void 0&&Wn.setValue($,$e.setFromMatrixPosition(L.matrixWorld)),wt.logarithmicDepthBuffer&&wn.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wn.setValue($,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,ua=!0,so=!0)}if(Y.isSkinnedMesh){wn.setOptional($,Y,"bindMatrix"),wn.setOptional($,Y,"bindMatrixInverse");const Wn=Y.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),wn.setValue($,"boneTexture",Wn.boneTexture,b))}Y.isBatchedMesh&&(wn.setOptional($,Y,"batchingTexture"),wn.setValue($,"batchingTexture",Y._matricesTexture,b));const ca=K.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Ne.update(Y,K,hr),(ua||ot.receiveShadow!==Y.receiveShadow)&&(ot.receiveShadow=Y.receiveShadow,wn.setValue($,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ki.envMap.value=Ke,Ki.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(Ki.envMapIntensity.value=j.environmentIntensity),ua&&(wn.setValue($,"toneMappingExposure",x.toneMappingExposure),ot.needsLights&&Mh(Ki,so),Ae&&J.fog===!0&&Oe.refreshFogUniforms(Ki,Ae),Oe.refreshMaterialUniforms(Ki,J,ce,de,_.state.transmissionRenderTarget),fd.upload($,sc(ot),Ki,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fd.upload($,sc(ot),Ki,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wn.setValue($,"center",Y.center),wn.setValue($,"modelViewMatrix",Y.modelViewMatrix),wn.setValue($,"normalMatrix",Y.normalMatrix),wn.setValue($,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Wn=J.uniformsGroups;for(let wl=0,uc=Wn.length;wl<uc;wl++){const Tl=Wn[wl];Nt.update(Tl,hr),Nt.bind(Tl,hr)}}return hr}function Mh(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function Eh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,j,K){D.get(L.texture).__webglTexture=j,D.get(L.depthTexture).__webglTexture=K;const J=D.get(L);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,j){const K=D.get(L);K.__webglFramebuffer=j,K.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,K=0){I=L,O=j,N=K;let J=!0,Y=null,Ae=!1,ke=!1;if(L){const Ke=D.get(L);Ke.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer($.FRAMEBUFFER,null),J=!1):Ke.__webglFramebuffer===void 0?b.setupRenderTarget(L):Ke.__hasExternalTextures&&b.rebindTextures(L,D.get(L.texture).__webglTexture,D.get(L.depthTexture).__webglTexture);const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ke=!0);const nt=D.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?Y=nt[j][K]:Y=nt[j],Ae=!0):L.samples>0&&b.useMultisampledRTT(L)===!1?Y=D.get(L).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[K]:Y=nt,T.copy(L.viewport),X.copy(L.scissor),ie=L.scissorTest}else T.copy(ee).multiplyScalar(ce).floor(),X.copy(ge).multiplyScalar(ce).floor(),ie=Ce;if(je.bindFramebuffer($.FRAMEBUFFER,Y)&&J&&je.drawBuffers(L,Y),je.viewport(T),je.scissor(X),je.setScissorTest(ie),Ae){const Ke=D.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ke.__webglTexture,K)}else if(ke){const Ke=D.get(L.texture),Je=j||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.__webglTexture,K||0,Je)}k=-1},this.readRenderTargetPixels=function(L,j,K,J,Y,Ae,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=D.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){je.bindFramebuffer($.FRAMEBUFFER,He);try{const Ke=L.texture,Je=Ke.format,nt=Ke.type;if(Je!==wr&&Mt.convert(Je)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=nt===Gd&&(Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float"));if(nt!==Ya&&Mt.convert(nt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&nt!==Fa&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-J&&K>=0&&K<=L.height-Y&&$.readPixels(j,K,J,Y,Mt.convert(Je),Mt.convert(nt),Ae)}finally{const Ke=I!==null?D.get(I).__webglFramebuffer:null;je.bindFramebuffer($.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(L,j,K=0){const J=Math.pow(2,-K),Y=Math.floor(j.image.width*J),Ae=Math.floor(j.image.height*J);b.setTexture2D(j,0),$.copyTexSubImage2D($.TEXTURE_2D,K,0,0,L.x,L.y,Y,Ae),je.unbindTexture()},this.copyTextureToTexture=function(L,j,K,J=0){const Y=j.image.width,Ae=j.image.height,ke=Mt.convert(K.format),He=Mt.convert(K.type);b.setTexture2D(K,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment),j.isDataTexture?$.texSubImage2D($.TEXTURE_2D,J,L.x,L.y,Y,Ae,ke,He,j.image.data):j.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,J,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,J,L.x,L.y,ke,He,j.image),J===0&&K.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(L,j,K,J,Y=0){const Ae=Math.round(L.max.x-L.min.x),ke=Math.round(L.max.y-L.min.y),He=L.max.z-L.min.z+1,Ke=Mt.convert(J.format),Je=Mt.convert(J.type);let nt;if(J.isData3DTexture)b.setTexture3D(J,0),nt=$.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)b.setTexture2DArray(J,0),nt=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const rt=$.getParameter($.UNPACK_ROW_LENGTH),en=$.getParameter($.UNPACK_IMAGE_HEIGHT),Un=$.getParameter($.UNPACK_SKIP_PIXELS),un=$.getParameter($.UNPACK_SKIP_ROWS),Ii=$.getParameter($.UNPACK_SKIP_IMAGES),Xt=K.isCompressedTexture?K.mipmaps[Y]:K.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Xt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Xt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,L.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,L.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?$.texSubImage3D(nt,Y,j.x,j.y,j.z,Ae,ke,He,Ke,Je,Xt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(nt,Y,j.x,j.y,j.z,Ae,ke,He,Ke,Xt.data):$.texSubImage3D(nt,Y,j.x,j.y,j.z,Ae,ke,He,Ke,Je,Xt),$.pixelStorei($.UNPACK_ROW_LENGTH,rt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,en),$.pixelStorei($.UNPACK_SKIP_PIXELS,Un),$.pixelStorei($.UNPACK_SKIP_ROWS,un),$.pixelStorei($.UNPACK_SKIP_IMAGES,Ii),Y===0&&J.generateMipmaps&&$.generateMipmap(nt),je.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?b.setTextureCube(L,0):L.isData3DTexture?b.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?b.setTexture2DArray(L,0):b.setTexture2D(L,0),je.unbindTexture()},this.resetState=function(){O=0,N=0,I=null,je.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===yv?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===vh?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class G6 extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ew extends ic{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W2=new mn,f0=new ow,$f=new _h,Yf=new Z;class W6 extends hi{constructor(e=new la,n=new Ew){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$f.copy(i.boundingSphere),$f.applyMatrix4(r),$f.radius+=o,e.ray.intersectsSphere($f)===!1)return;W2.copy(r).invert(),f0.copy(e.ray).applyMatrix4(W2);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,m=i.attributes.position;if(d!==null){const g=Math.max(0,l.start),y=Math.min(d.count,l.start+l.count);for(let M=g,w=y;M<w;M++){const _=d.getX(M);Yf.fromBufferAttribute(m,_),X2(Yf,_,f,r,e,n,this)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let M=g,w=y;M<w;M++)Yf.fromBufferAttribute(m,M),X2(Yf,M,f,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function X2(t,e,n,i,r,o,l){const u=f0.distanceSqToPoint(t);if(u<n){const f=new Z;f0.closestPointToPoint(t,f),f.applyMatrix4(i);const d=r.ray.origin.distanceTo(f);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:l})}}const j2={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class X6{constructor(e,n,i){const r=this;let o=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){u++,o===!1&&r.onStart!==void 0&&r.onStart(h,l,u),o=!0},this.itemEnd=function(h){l++,r.onProgress!==void 0&&r.onProgress(h,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return f?f(h):h},this.setURLModifier=function(h){return f=h,this},this.addHandler=function(h,m){return d.push(h,m),this},this.removeHandler=function(h){const m=d.indexOf(h);return m!==-1&&d.splice(m,2),this},this.getHandler=function(h){for(let m=0,g=d.length;m<g;m+=2){const y=d[m],M=d[m+1];if(y.global&&(y.lastIndex=0),y.test(h))return M}return null}}}const j6=new X6;class Mv{constructor(e){this.manager=e!==void 0?e:j6,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mv.DEFAULT_MATERIAL_NAME="__DEFAULT";class $6 extends Mv{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=j2.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(l),o.manager.itemEnd(e)},0),l;const u=Wu("img");function f(){h(),j2.add(e,this),n&&n(this),o.manager.itemEnd(e)}function d(m){h(),r&&r(m),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class Y6 extends Mv{constructor(e){super(e)}load(e,n,i,r){const o=new Qn,l=new $6(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xv);function q6(){const t=async()=>{try{await navigator.clipboard.writeText("jaymckerracher@gmail.com"),Ot.dismiss(),Ot.success("Email address copied to clipboard!",{theme:"colored",position:"top-center",autoClose:5e3,transition:Ey})}catch{Ot.error("Failed to copy email address.",{theme:"colored",position:"top-center",autoClose:5e3,transition:Ey})}};function e(C){C.target.classList.contains("nav3Clickable")&&(h==="nav3Blur nav3BlurHide"?(m("nav3Blur"),y("nav3Border")):(m("nav3Blur nav3BlurHide"),y("nav3Border nav3BorderHide")))}const n=et.useRef(null),[i,r]=et.useState("nav2Border"),[o,l]=et.useState("nav2"),u=et.useRef(null),f=et.useRef(null),d=et.useRef(null),[h,m]=et.useState("nav3Blur nav3BlurHide"),[g,y]=et.useState("nav3Border nav3BorderHide"),M=et.useRef(null),[w,_]=et.useState("backToTopButton backToTopButtonHide"),p=et.useRef(),[S,x]=et.useState("");return et.useEffect(()=>{const C=new G6,O=new Wi(60,window.innerWidth/window.innerHeight,1,1e3);O.position.z=1,O.position.x=Math.PI/2;const N=new V6({canvas:p.current});N.setSize(window.innerWidth,window.innerHeight),N.setPixelRatio(window.devicePixelRatio);const I=new la,k=[];for(let re=0;re<2500;re++){const ae=Math.random()*600-300,de=Math.random()*600-300,ce=Math.random()*400-300;k.push(ae,de,ce)}I.setAttribute("position",new qa(k,3));let R=new Y6().load(TD),T=new Ew({color:11184810,size:.7,map:R}),X=new W6(I,T);C.add(X);const ie=()=>{requestAnimationFrame(ie),N.render(C,O);const re=I.getAttribute("position"),ae=re.array;for(let de=0;de<ae.length;de+=3)ae[de+2]+=.1,ae[de+2]>100&&(ae[de+2]=-300);re.needsUpdate=!0,X.rotation.z+=.001};ie();const H=hD.throttle(()=>{n.current.getBoundingClientRect().top<=0?(r("nav2Border nav2BorderTop"),l("nav2 nav2Top")):(r("nav2Border"),l("nav2")),M.current.getBoundingClientRect().bottom<0?_("backToTopButton"):_("backToTopButton backToTopButtonHide");const de=u.current.getBoundingClientRect().top,ce=f.current.getBoundingClientRect().top,z=d.current.getBoundingClientRect().top;de>0?x(""):z<=0?x("secondaryColourD"):ce<=0?x("secondaryColourC"):de<=0&&x("secondaryColourB")},200);return document.getElementById("main").addEventListener("scroll",H),()=>{document.getElementById("main").removeEventListener("scroll",H)}},[]),G.jsxs(G.Fragment,{children:[G.jsx("canvas",{ref:p,className:"backgroundCanvas"}),G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"navContainer",children:[G.jsx("nav",{className:`upperNav ${S}`,children:G.jsxs("div",{className:"upperNavInnerContainer",children:[G.jsx("h2",{className:"navHeading",children:"Jump To:"}),G.jsxs("div",{className:"navList",children:[G.jsx("a",{href:"#about",className:"navLink",children:"About"}),G.jsx("a",{href:"#skills",className:"navLink",children:"Skills"}),G.jsx("a",{href:"#projects",className:"navLink",children:"Projects"})]})]})}),G.jsx("nav",{className:`lowerNav ${S}`,children:G.jsxs("div",{className:"lowerNavInnerContainer",children:[G.jsx("h2",{className:"navHeading",children:"Other Links:"}),G.jsxs("div",{className:"navIcons",children:[G.jsx("a",{href:"https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/",target:"_blank",children:G.jsx(Vt,{icon:fm,className:"icon"})}),G.jsx("a",{href:"https://github.com/jaymckerracher",target:"_blank",children:G.jsx(Vt,{icon:ud,className:"icon"})}),G.jsxs("div",{className:"mail",children:[G.jsx(Vt,{icon:cm,className:"icon mailButton",onClick:t}),G.jsx(Vt,{icon:YN,className:"copyIcon"}),G.jsx("div",{className:"emailAddress",children:G.jsx("p",{children:"jaymckerracher@gmail.com"})})]})]})]})})]}),G.jsxs("main",{id:"main",children:[G.jsxs("header",{children:[G.jsx("div",{className:`headerImgBorder smallDevImgBorder ${S}`,children:G.jsx("img",{src:wy,alt:"Profile Image",className:"smallDevImg"})}),G.jsxs("div",{className:"headerContent",children:[G.jsx("h1",{children:"Jay McKerracher"}),G.jsx("div",{className:`customRule ${S} headerRule`}),G.jsx("h2",{children:"Junior Software Engineer"})]}),G.jsx("div",{className:`headerImgBorder bigDevImgBorder ${S}`,children:G.jsx("img",{src:wy,alt:"Profile Image",className:"bigDevImg"})})]}),G.jsx("div",{className:`${i} ${S}`,ref:n,children:G.jsxs("nav",{className:o,children:[G.jsxs("ul",{className:"nav2List",children:[G.jsx("li",{children:G.jsx("a",{href:"#about",children:"About"})}),G.jsx("li",{children:G.jsx("a",{href:"#skills",children:"Skills"})}),G.jsx("li",{children:G.jsx("a",{href:"#projects",children:"Projects"})})]}),G.jsxs("div",{className:"nav2Icons",children:[G.jsx("a",{href:"https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/",target:"_blank",children:G.jsx(Vt,{icon:fm,className:"nav2Icon"})}),G.jsx("a",{href:"https://github.com/jaymckerracher",target:"_blank",children:G.jsx(Vt,{icon:ud,className:"nav2Icon"})}),G.jsx(Vt,{icon:cm,className:"nav2Icon nav2Mail",onClick:t})]})]})}),G.jsx("div",{className:"nav3Strip nav3Clickable",onClick:e,ref:M,children:G.jsx("div",{className:"nav3StripIconContainer nav3Clickable",children:G.jsx(Vt,{icon:WN,className:"nav3StripIcon"})})}),G.jsx("div",{className:`${h} nav3Clickable`,onClick:e,children:G.jsx("div",{className:`${g} ${S}`,children:G.jsxs("nav",{className:"nav3",children:[G.jsxs("ul",{className:"nav3List",children:[G.jsx("li",{onClick:e,children:G.jsx("a",{href:"#about",className:"nav3Clickable",children:"About"})}),G.jsx("li",{onClick:e,children:G.jsx("a",{href:"#skills",className:"nav3Clickable",children:"Skills"})}),G.jsx("li",{onClick:e,children:G.jsx("a",{href:"#projects",className:"nav3Clickable",children:"Projects"})})]}),G.jsxs("div",{className:"nav3Icons",children:[G.jsx("a",{href:"https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/",target:"_blank",children:G.jsx(Vt,{icon:fm,className:"nav3Icon"})}),G.jsx("a",{href:"https://github.com/jaymckerracher",target:"_blank",children:G.jsx(Vt,{icon:ud,className:"nav3Icon"})}),G.jsx(Vt,{icon:cm,className:"nav3Icon nav2Mail",onClick:t})]})]})})}),G.jsxs("div",{className:"mainContent",children:[G.jsxs("section",{id:"about",ref:u,children:[G.jsx("h2",{className:"sectionHeader",children:"About"}),G.jsx("div",{className:`customRule ${S}`}),G.jsxs("div",{className:"aboutContainer",children:[G.jsx("p",{children:"The retail industry has taught me so much over the last few years; I have learnt how to effectively communicate, work as part of a large team, and deal with unexpected events. I’ve had the opportunity to manage a team of people and also had the pleasure of working abroad. I really enjoyed my time in the retail world."}),G.jsx("p",{children:"However, retail was an industry that I fell into. I realised that it was time to start moving down a path that I had chosen - that path being software development. I chose this path for a few reasons. Firstly, I really enjoy solving problems; knowing that there is a solution to be found gives me a desire to seek it out. Having a list of goals to work through gives me a sense of progression and purpose. Fixing a bug and seeing code run in the way I intend is an amazing feeling and leads to work that I am proud of."}),G.jsx("p",{children:"I made the decision to join the NorthCoders bootcamp to get an introduction to programming. Despite only being three months long, I found that I learnt so much in such a short time. The course mainly focused on teaching front and back end skills with JavaScript, but also placed a large focus on Test Driven Development and Paired Programming. Towards the end of the three months I got the opportunity to work with a larger group to create our final project. I had a great time on the bootcamp and am excited to jump head first into this exciting industry!"})]})]}),G.jsxs("section",{id:"skills",ref:f,children:[G.jsx("h2",{className:"sectionHeader",children:"Skills"}),G.jsx("div",{className:`customRule ${S}`}),G.jsx("div",{className:"gridFlex",children:G.jsxs("div",{className:"grid-container",children:[G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Languages"}),G.jsx("ul",{children:G.jsx("li",{children:"JavaScript"})})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsx("div",{className:"skillsInnerContainer",children:G.jsx(Vt,{icon:ZN,className:"skillIcon"})})})}),G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Back End"}),G.jsxs("ul",{children:[G.jsx("li",{children:"SQL"}),G.jsx("li",{children:"PSQL"}),G.jsx("li",{children:"Seeding"}),G.jsx("li",{children:"Migrations"})]})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsxs("div",{className:"skillsInnerContainer",children:[G.jsx("img",{src:mD,alt:"SQL",className:"skillsImg"}),G.jsx("img",{src:gD,alt:"PSQL",className:"skillsImg"})]})})}),G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Front End"}),G.jsxs("ul",{children:[G.jsx("li",{children:"HTML"}),G.jsx("li",{children:"CSS"}),G.jsx("li",{children:"React"}),G.jsx("li",{children:"React Native"}),G.jsx("li",{children:"Lighthouse and other accessibility tools"})]})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsxs("div",{className:"skillsInnerContainer",children:[G.jsx(Vt,{icon:eD,className:"skillIcon oddIcon"}),G.jsx(Vt,{icon:QN,className:"skillIcon oddIcon"}),G.jsx(Vt,{icon:JN,className:"skillIcon"}),G.jsx("img",{src:vD,alt:"Lighthouse",className:"skillsImg"})]})})}),G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Testing"}),G.jsxs("ul",{children:[G.jsx("li",{children:"Test Driven Development"}),G.jsx("li",{children:"Jest"}),G.jsx("li",{children:"Supertest"})]})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsx("div",{className:"skillsInnerContainer",children:G.jsx("img",{src:_D,alt:"Jest",className:"skillsImg"})})})}),G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Hosting"}),G.jsxs("ul",{children:[G.jsx("li",{children:"Cloudflare"}),G.jsx("li",{children:"Netlify"})]})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsxs("div",{className:"skillsInnerContainer",children:[G.jsx(Vt,{icon:qN,className:"skillIcon"}),G.jsx("img",{src:xD,alt:"Netlify",className:"skillsImg"})]})})}),G.jsxs("div",{className:"grid-item",children:[G.jsx("h3",{children:"Other"}),G.jsxs("ul",{className:"finalGridList",children:[G.jsx("li",{children:"Paired Programming"}),G.jsx("li",{children:"Technical Communication"}),G.jsx("li",{children:"SDL"}),G.jsx("li",{children:"Agile & SCRUM methodologies"})]})]}),G.jsx("div",{children:G.jsx("div",{className:`skillsFlexContainer ${S}`,children:G.jsxs("div",{className:"skillsInnerContainer",children:[G.jsx("img",{src:yD,alt:"Agile",className:"skillsImg"}),G.jsx("img",{src:SD,alt:"Agile",className:"skillsImg"})]})})})]})})]}),G.jsxs("section",{id:"projects",ref:d,children:[G.jsx("h2",{className:"sectionHeader",children:"Projects"}),G.jsx("div",{className:`customRule ${S}`}),G.jsx(hm,{project:pm[0],image:MD}),G.jsx(hm,{project:pm[1],image:ED}),G.jsx(hm,{project:pm[2],image:wD})]})]}),G.jsx("footer",{children:G.jsx("p",{children:'"Built purely with React.js and Three.js, using FontAwesome icons and the React Toastify NPM package."'})}),G.jsx("div",{className:"backToTopContainer",children:G.jsx("button",{className:w,onClick:()=>document.getElementById("main").scrollTo(0,0),children:G.jsx(Vt,{icon:XN,className:`backToTopArrow ${S}`})})})]})]}),G.jsx(dD,{})]})}Ym.createRoot(document.getElementById("root")).render(G.jsx(q6,{}));
