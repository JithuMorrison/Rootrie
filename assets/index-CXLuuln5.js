(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(d){if(d.ep)return;d.ep=!0;const u=s(d);fetch(d.href,u)}})();function QB(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cd={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function UB(){if(qg)return Ni;qg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,d,u){var h=null;if(u!==void 0&&(h=""+u),d.key!==void 0&&(h=""+d.key),"key"in d){u={};for(var m in d)m!=="key"&&(u[m]=d[m])}else u=d;return d=u.ref,{$$typeof:i,type:o,key:h,ref:d!==void 0?d:null,props:u}}return Ni.Fragment=r,Ni.jsx=s,Ni.jsxs=s,Ni}var Wg;function EB(){return Wg||(Wg=1,cd.exports=UB()),cd.exports}var n=EB(),dd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function FB(){if($g)return le;$g=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),F=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=F&&U[F]||U["@@iterator"],typeof U=="function"?U:null)}var aA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,uA={};function kA(U,V,hA){this.props=U,this.context=V,this.refs=uA,this.updater=hA||aA}kA.prototype.isReactComponent={},kA.prototype.setState=function(U,V){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,V,"setState")},kA.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function CA(){}CA.prototype=kA.prototype;function gA(U,V,hA){this.props=U,this.context=V,this.refs=uA,this.updater=hA||aA}var TA=gA.prototype=new CA;TA.constructor=gA,P(TA,kA.prototype),TA.isPureReactComponent=!0;var cA=Array.isArray,BA={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function SA(U,V,hA,rA,UA,MA){return hA=MA.ref,{$$typeof:i,type:U,key:V,ref:hA!==void 0?hA:null,props:MA}}function _(U,V){return SA(U.type,V,void 0,void 0,void 0,U.props)}function iA(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function pA(U){var V={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(hA){return V[hA]})}var HA=/\/+/g;function sA(U,V){return typeof U=="object"&&U!==null&&U.key!=null?pA(""+U.key):V.toString(36)}function OA(){}function _A(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(OA,OA):(U.status="pending",U.then(function(V){U.status==="pending"&&(U.status="fulfilled",U.value=V)},function(V){U.status==="pending"&&(U.status="rejected",U.reason=V)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function LA(U,V,hA,rA,UA){var MA=typeof U;(MA==="undefined"||MA==="boolean")&&(U=null);var T=!1;if(U===null)T=!0;else switch(MA){case"bigint":case"string":case"number":T=!0;break;case"object":switch(U.$$typeof){case i:case r:T=!0;break;case v:return T=U._init,LA(T(U._payload),V,hA,rA,UA)}}if(T)return UA=UA(U),T=rA===""?"."+sA(U,0):rA,cA(UA)?(hA="",T!=null&&(hA=T.replace(HA,"$&/")+"/"),LA(UA,V,hA,"",function(fA){return fA})):UA!=null&&(iA(UA)&&(UA=_(UA,hA+(UA.key==null||U&&U.key===UA.key?"":(""+UA.key).replace(HA,"$&/")+"/")+T)),V.push(UA)),1;T=0;var QA=rA===""?".":rA+":";if(cA(U))for(var FA=0;FA<U.length;FA++)rA=U[FA],MA=QA+sA(rA,FA),T+=LA(rA,V,hA,MA,UA);else if(FA=M(U),typeof FA=="function")for(U=FA.call(U),FA=0;!(rA=U.next()).done;)rA=rA.value,MA=QA+sA(rA,FA++),T+=LA(rA,V,hA,MA,UA);else if(MA==="object"){if(typeof U.then=="function")return LA(_A(U),V,hA,rA,UA);throw V=String(U),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return T}function G(U,V,hA){if(U==null)return U;var rA=[],UA=0;return LA(U,rA,"","",function(MA){return V.call(hA,MA,UA++)}),rA}function oA(U){if(U._status===-1){var V=U._result;V=V(),V.then(function(hA){(U._status===0||U._status===-1)&&(U._status=1,U._result=hA)},function(hA){(U._status===0||U._status===-1)&&(U._status=2,U._result=hA)}),U._status===-1&&(U._status=0,U._result=V)}if(U._status===1)return U._result.default;throw U._result}var xA=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function RA(){}return le.Children={map:G,forEach:function(U,V,hA){G(U,function(){V.apply(this,arguments)},hA)},count:function(U){var V=0;return G(U,function(){V++}),V},toArray:function(U){return G(U,function(V){return V})||[]},only:function(U){if(!iA(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=kA,le.Fragment=s,le.Profiler=d,le.PureComponent=gA,le.StrictMode=o,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=BA,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return BA.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,V,hA){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var rA=P({},U.props),UA=U.key,MA=void 0;if(V!=null)for(T in V.ref!==void 0&&(MA=void 0),V.key!==void 0&&(UA=""+V.key),V)!J.call(V,T)||T==="key"||T==="__self"||T==="__source"||T==="ref"&&V.ref===void 0||(rA[T]=V[T]);var T=arguments.length-2;if(T===1)rA.children=hA;else if(1<T){for(var QA=Array(T),FA=0;FA<T;FA++)QA[FA]=arguments[FA+2];rA.children=QA}return SA(U.type,UA,void 0,void 0,MA,rA)},le.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},le.createElement=function(U,V,hA){var rA,UA={},MA=null;if(V!=null)for(rA in V.key!==void 0&&(MA=""+V.key),V)J.call(V,rA)&&rA!=="key"&&rA!=="__self"&&rA!=="__source"&&(UA[rA]=V[rA]);var T=arguments.length-2;if(T===1)UA.children=hA;else if(1<T){for(var QA=Array(T),FA=0;FA<T;FA++)QA[FA]=arguments[FA+2];UA.children=QA}if(U&&U.defaultProps)for(rA in T=U.defaultProps,T)UA[rA]===void 0&&(UA[rA]=T[rA]);return SA(U,MA,void 0,void 0,null,UA)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:m,render:U}},le.isValidElement=iA,le.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:oA}},le.memo=function(U,V){return{$$typeof:b,type:U,compare:V===void 0?null:V}},le.startTransition=function(U){var V=BA.T,hA={};BA.T=hA;try{var rA=U(),UA=BA.S;UA!==null&&UA(hA,rA),typeof rA=="object"&&rA!==null&&typeof rA.then=="function"&&rA.then(RA,xA)}catch(MA){xA(MA)}finally{BA.T=V}},le.unstable_useCacheRefresh=function(){return BA.H.useCacheRefresh()},le.use=function(U){return BA.H.use(U)},le.useActionState=function(U,V,hA){return BA.H.useActionState(U,V,hA)},le.useCallback=function(U,V){return BA.H.useCallback(U,V)},le.useContext=function(U){return BA.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,V){return BA.H.useDeferredValue(U,V)},le.useEffect=function(U,V,hA){var rA=BA.H;if(typeof hA=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return rA.useEffect(U,V)},le.useId=function(){return BA.H.useId()},le.useImperativeHandle=function(U,V,hA){return BA.H.useImperativeHandle(U,V,hA)},le.useInsertionEffect=function(U,V){return BA.H.useInsertionEffect(U,V)},le.useLayoutEffect=function(U,V){return BA.H.useLayoutEffect(U,V)},le.useMemo=function(U,V){return BA.H.useMemo(U,V)},le.useOptimistic=function(U,V){return BA.H.useOptimistic(U,V)},le.useReducer=function(U,V,hA){return BA.H.useReducer(U,V,hA)},le.useRef=function(U){return BA.H.useRef(U)},le.useState=function(U){return BA.H.useState(U)},le.useSyncExternalStore=function(U,V,hA){return BA.H.useSyncExternalStore(U,V,hA)},le.useTransition=function(){return BA.H.useTransition()},le.version="19.1.0",le}var Pg;function ou(){return Pg||(Pg=1,dd.exports=FB()),dd.exports}var S=ou();const jB=QB(S);var ud={exports:{}},ki={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function SB(){return Ap||(Ap=1,function(i){function r(G,oA){var xA=G.length;G.push(oA);A:for(;0<xA;){var RA=xA-1>>>1,U=G[RA];if(0<d(U,oA))G[RA]=oA,G[xA]=U,xA=RA;else break A}}function s(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var oA=G[0],xA=G.pop();if(xA!==oA){G[0]=xA;A:for(var RA=0,U=G.length,V=U>>>1;RA<V;){var hA=2*(RA+1)-1,rA=G[hA],UA=hA+1,MA=G[UA];if(0>d(rA,xA))UA<U&&0>d(MA,rA)?(G[RA]=MA,G[UA]=xA,RA=UA):(G[RA]=rA,G[hA]=xA,RA=hA);else if(UA<U&&0>d(MA,xA))G[RA]=MA,G[UA]=xA,RA=UA;else break A}}return oA}function d(G,oA){var xA=G.sortIndex-oA.sortIndex;return xA!==0?xA:G.id-oA.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var x=[],b=[],v=1,F=null,M=3,aA=!1,P=!1,uA=!1,kA=!1,CA=typeof setTimeout=="function"?setTimeout:null,gA=typeof clearTimeout=="function"?clearTimeout:null,TA=typeof setImmediate<"u"?setImmediate:null;function cA(G){for(var oA=s(b);oA!==null;){if(oA.callback===null)o(b);else if(oA.startTime<=G)o(b),oA.sortIndex=oA.expirationTime,r(x,oA);else break;oA=s(b)}}function BA(G){if(uA=!1,cA(G),!P)if(s(x)!==null)P=!0,J||(J=!0,sA());else{var oA=s(b);oA!==null&&LA(BA,oA.startTime-G)}}var J=!1,SA=-1,_=5,iA=-1;function pA(){return kA?!0:!(i.unstable_now()-iA<_)}function HA(){if(kA=!1,J){var G=i.unstable_now();iA=G;var oA=!0;try{A:{P=!1,uA&&(uA=!1,gA(SA),SA=-1),aA=!0;var xA=M;try{e:{for(cA(G),F=s(x);F!==null&&!(F.expirationTime>G&&pA());){var RA=F.callback;if(typeof RA=="function"){F.callback=null,M=F.priorityLevel;var U=RA(F.expirationTime<=G);if(G=i.unstable_now(),typeof U=="function"){F.callback=U,cA(G),oA=!0;break e}F===s(x)&&o(x),cA(G)}else o(x);F=s(x)}if(F!==null)oA=!0;else{var V=s(b);V!==null&&LA(BA,V.startTime-G),oA=!1}}break A}finally{F=null,M=xA,aA=!1}oA=void 0}}finally{oA?sA():J=!1}}}var sA;if(typeof TA=="function")sA=function(){TA(HA)};else if(typeof MessageChannel<"u"){var OA=new MessageChannel,_A=OA.port2;OA.port1.onmessage=HA,sA=function(){_A.postMessage(null)}}else sA=function(){CA(HA,0)};function LA(G,oA){SA=CA(function(){G(i.unstable_now())},oA)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(G){switch(M){case 1:case 2:case 3:var oA=3;break;default:oA=M}var xA=M;M=oA;try{return G()}finally{M=xA}},i.unstable_requestPaint=function(){kA=!0},i.unstable_runWithPriority=function(G,oA){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var xA=M;M=G;try{return oA()}finally{M=xA}},i.unstable_scheduleCallback=function(G,oA,xA){var RA=i.unstable_now();switch(typeof xA=="object"&&xA!==null?(xA=xA.delay,xA=typeof xA=="number"&&0<xA?RA+xA:RA):xA=RA,G){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=xA+U,G={id:v++,callback:oA,priorityLevel:G,startTime:xA,expirationTime:U,sortIndex:-1},xA>RA?(G.sortIndex=xA,r(b,G),s(x)===null&&G===s(b)&&(uA?(gA(SA),SA=-1):uA=!0,LA(BA,xA-RA))):(G.sortIndex=U,r(x,G),P||aA||(P=!0,J||(J=!0,sA()))),G},i.unstable_shouldYield=pA,i.unstable_wrapCallback=function(G){var oA=M;return function(){var xA=M;M=oA;try{return G.apply(this,arguments)}finally{M=xA}}}}(hd)),hd}var ep;function HB(){return ep||(ep=1,fd.exports=SB()),fd.exports}var gd={exports:{}},Bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function NB(){if(tp)return Bt;tp=1;var i=ou();function r(x){var b="https://react.dev/errors/"+x;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)b+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function u(x,b,v){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:F==null?null:""+F,children:x,containerInfo:b,implementation:v}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,b){if(x==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Bt.createPortal=function(x,b){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return u(x,b,null,v)},Bt.flushSync=function(x){var b=h.T,v=o.p;try{if(h.T=null,o.p=2,x)return x()}finally{h.T=b,o.p=v,o.d.f()}},Bt.preconnect=function(x,b){typeof x=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(x,b))},Bt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Bt.preinit=function(x,b){if(typeof x=="string"&&b&&typeof b.as=="string"){var v=b.as,F=m(v,b.crossOrigin),M=typeof b.integrity=="string"?b.integrity:void 0,aA=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;v==="style"?o.d.S(x,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:F,integrity:M,fetchPriority:aA}):v==="script"&&o.d.X(x,{crossOrigin:F,integrity:M,fetchPriority:aA,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Bt.preinitModule=function(x,b){if(typeof x=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var v=m(b.as,b.crossOrigin);o.d.M(x,{crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(x)},Bt.preload=function(x,b){if(typeof x=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var v=b.as,F=m(v,b.crossOrigin);o.d.L(x,v,{crossOrigin:F,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Bt.preloadModule=function(x,b){if(typeof x=="string")if(b){var v=m(b.as,b.crossOrigin);o.d.m(x,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(x)},Bt.requestFormReset=function(x){o.d.r(x)},Bt.unstable_batchedUpdates=function(x,b){return x(b)},Bt.useFormState=function(x,b,v){return h.H.useFormState(x,b,v)},Bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bt.version="19.1.0",Bt}var np;function kB(){if(np)return gd.exports;np=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),gd.exports=NB(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function MB(){if(ap)return ki;ap=1;var i=HB(),r=ou(),s=kB();function o(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function u(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function h(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function m(A){if(u(A)!==A)throw Error(o(188))}function x(A){var e=A.alternate;if(!e){if(e=u(A),e===null)throw Error(o(188));return e!==A?null:A}for(var t=A,a=e;;){var l=t.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===t)return m(l),A;if(c===a)return m(l),e;c=c.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=c;else{for(var p=!1,w=l.child;w;){if(w===t){p=!0,t=l,a=c;break}if(w===a){p=!0,a=l,t=c;break}w=w.sibling}if(!p){for(w=c.child;w;){if(w===t){p=!0,t=c,a=l;break}if(w===a){p=!0,a=c,t=l;break}w=w.sibling}if(!p)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?A:e}function b(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=b(A),e!==null)return e;A=A.sibling}return null}var v=Object.assign,F=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),aA=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),kA=Symbol.for("react.profiler"),CA=Symbol.for("react.provider"),gA=Symbol.for("react.consumer"),TA=Symbol.for("react.context"),cA=Symbol.for("react.forward_ref"),BA=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),SA=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),iA=Symbol.for("react.activity"),pA=Symbol.for("react.memo_cache_sentinel"),HA=Symbol.iterator;function sA(A){return A===null||typeof A!="object"?null:(A=HA&&A[HA]||A["@@iterator"],typeof A=="function"?A:null)}var OA=Symbol.for("react.client.reference");function _A(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===OA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case P:return"Fragment";case kA:return"Profiler";case uA:return"StrictMode";case BA:return"Suspense";case J:return"SuspenseList";case iA:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case aA:return"Portal";case TA:return(A.displayName||"Context")+".Provider";case gA:return(A._context.displayName||"Context")+".Consumer";case cA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case SA:return e=A.displayName||null,e!==null?e:_A(A.type)||"Memo";case _:e=A._payload,A=A._init;try{return _A(A(e))}catch{}}return null}var LA=Array.isArray,G=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oA=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xA={pending:!1,data:null,method:null,action:null},RA=[],U=-1;function V(A){return{current:A}}function hA(A){0>U||(A.current=RA[U],RA[U]=null,U--)}function rA(A,e){U++,RA[U]=A.current,A.current=e}var UA=V(null),MA=V(null),T=V(null),QA=V(null);function FA(A,e){switch(rA(T,e),rA(MA,A),rA(UA,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?Cg(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=Cg(e),A=Qg(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}hA(UA),rA(UA,A)}function fA(){hA(UA),hA(MA),hA(T)}function I(A){A.memoizedState!==null&&rA(QA,A);var e=UA.current,t=Qg(e,A.type);e!==t&&(rA(MA,A),rA(UA,t))}function q(A){MA.current===A&&(hA(UA),hA(MA)),QA.current===A&&(hA(QA),Ei._currentValue=xA)}var IA=Object.prototype.hasOwnProperty,K=i.unstable_scheduleCallback,wA=i.unstable_cancelCallback,YA=i.unstable_shouldYield,$A=i.unstable_requestPaint,PA=i.unstable_now,ie=i.unstable_getCurrentPriorityLevel,de=i.unstable_ImmediatePriority,Oe=i.unstable_UserBlockingPriority,ee=i.unstable_NormalPriority,Ue=i.unstable_LowPriority,Ve=i.unstable_IdlePriority,Ke=i.log,Je=i.unstable_setDisableYieldValue,me=null,ue=null;function y(A){if(typeof Ke=="function"&&Je(A),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(me,A)}catch{}}var L=Math.clz32?Math.clz32:dA,$=Math.log,lA=Math.LN2;function dA(A){return A>>>=0,A===0?32:31-($(A)/lA|0)|0}var EA=256,D=4194304;function vA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function NA(A,e,t){var a=A.pendingLanes;if(a===0)return 0;var l=0,c=A.suspendedLanes,p=A.pingedLanes;A=A.warmLanes;var w=a&134217727;return w!==0?(a=w&~c,a!==0?l=vA(a):(p&=w,p!==0?l=vA(p):t||(t=w&~A,t!==0&&(l=vA(t))))):(w=a&~c,w!==0?l=vA(w):p!==0?l=vA(p):t||(t=a&~A,t!==0&&(l=vA(t)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:l}function zA(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function oe(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XA(){var A=EA;return EA<<=1,(EA&4194048)===0&&(EA=256),A}function fe(){var A=D;return D<<=1,(D&62914560)===0&&(D=4194304),A}function re(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function ye(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function pt(A,e,t,a,l,c){var p=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var w=A.entanglements,N=A.expirationTimes,W=A.hiddenUpdates;for(t=p&~t;0<t;){var mA=31-L(t),yA=1<<mA;w[mA]=0,N[mA]=-1;var AA=W[mA];if(AA!==null)for(W[mA]=null,mA=0;mA<AA.length;mA++){var eA=AA[mA];eA!==null&&(eA.lane&=-536870913)}t&=~yA}a!==0&&De(A,a,0),c!==0&&l===0&&A.tag!==0&&(A.suspendedLanes|=c&~(p&~e))}function De(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var a=31-L(e);A.entangledLanes|=e,A.entanglements[a]=A.entanglements[a]|1073741824|t&4194090}function Ce(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var a=31-L(t),l=1<<a;l&e|A[a]&e&&(A[a]|=e),t&=~l}}function g(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function j(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function f(){var A=oA.p;return A!==0?A:(A=window.event,A===void 0?32:Gg(A.type))}function B(A,e){var t=oA.p;try{return oA.p=A,e()}finally{oA.p=t}}var C=Math.random().toString(36).slice(2),E="__reactFiber$"+C,H="__reactProps$"+C,Y="__reactContainer$"+C,R="__reactEvents$"+C,tA="__reactListeners$"+C,nA="__reactHandles$"+C,Q="__reactResources$"+C,k="__reactMarker$"+C;function X(A){delete A[E],delete A[H],delete A[R],delete A[tA],delete A[nA]}function jA(A){var e=A[E];if(e)return e;for(var t=A.parentNode;t;){if(e=t[Y]||t[E]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=jg(A);A!==null;){if(t=A[E])return t;A=jg(A)}return e}A=t,t=A.parentNode}return null}function KA(A){if(A=A[E]||A[Y]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function ZA(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(o(33))}function WA(A){var e=A[Q];return e||(e=A[Q]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function se(A){A[k]=!0}var Re=new Set,be={};function ze(A,e){Te(A,e),Te(A+"Capture",e)}function Te(A,e){for(be[A]=e,A=0;A<e.length;A++)Re.add(e[A])}var hn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ln={},xt={};function tn(A){return IA.call(xt,A)?!0:IA.call(Ln,A)?!1:hn.test(A)?xt[A]=!0:(Ln[A]=!0,!1)}function xa(A,e,t){if(tn(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Ra(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function It(A,e,t,a){if(a===null)A.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+a)}}var gn,za;function pn(A){if(gn===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);gn=e&&e[1]||"",za=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gn+A+za}var Lr=!1;function Or(A,e){if(!A||Lr)return"";Lr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var yA=function(){throw Error()};if(Object.defineProperty(yA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yA,[])}catch(eA){var AA=eA}Reflect.construct(A,[],yA)}else{try{yA.call()}catch(eA){AA=eA}A.call(yA.prototype)}}else{try{throw Error()}catch(eA){AA=eA}(yA=A())&&typeof yA.catch=="function"&&yA.catch(function(){})}}catch(eA){if(eA&&AA&&typeof eA.stack=="string")return[eA.stack,AA.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],w=c[1];if(p&&w){var N=p.split(`
`),W=w.split(`
`);for(l=a=0;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(a===N.length||l===W.length)for(a=N.length-1,l=W.length-1;1<=a&&0<=l&&N[a]!==W[l];)l--;for(;1<=a&&0<=l;a--,l--)if(N[a]!==W[l]){if(a!==1||l!==1)do if(a--,l--,0>l||N[a]!==W[l]){var mA=`
`+N[a].replace(" at new "," at ");return A.displayName&&mA.includes("<anonymous>")&&(mA=mA.replace("<anonymous>",A.displayName)),mA}while(1<=a&&0<=l);break}}}finally{Lr=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?pn(t):""}function B0(A){switch(A.tag){case 26:case 27:case 5:return pn(A.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Or(A.type,!1);case 11:return Or(A.type.render,!1);case 1:return Or(A.type,!0);case 31:return pn("Activity");default:return""}}function xu(A){try{var e="";do e+=B0(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Lt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function mu(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b0(A){var e=mu(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),a=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function ao(A){A._valueTracker||(A._valueTracker=b0(A))}function Bu(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return A&&(a=mu(A)?A.checked?"true":"false":A.value),A=a,A!==t?(e.setValue(A),!0):!1}function ro(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var w0=/[\n"\\]/g;function Ot(A){return A.replace(w0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ol(A,e,t,a,l,c,p,w){A.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?A.type=p:A.removeAttribute("type"),e!=null?p==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Lt(e)):A.value!==""+Lt(e)&&(A.value=""+Lt(e)):p!=="submit"&&p!=="reset"||A.removeAttribute("value"),e!=null?sl(A,p,Lt(e)):t!=null?sl(A,p,Lt(t)):a!=null&&A.removeAttribute("value"),l==null&&c!=null&&(A.defaultChecked=!!c),l!=null&&(A.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?A.name=""+Lt(w):A.removeAttribute("name")}function bu(A,e,t,a,l,c,p,w){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+Lt(t):"",e=e!=null?""+Lt(e):t,w||e===A.value||(A.value=e),A.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,A.checked=w?A.checked:!!a,A.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(A.name=p)}function sl(A,e,t){e==="number"&&ro(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function _a(A,e,t,a){if(A=A.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<A.length;t++)l=e.hasOwnProperty("$"+A[t].value),A[t].selected!==l&&(A[t].selected=l),l&&a&&(A[t].defaultSelected=!0)}else{for(t=""+Lt(t),e=null,l=0;l<A.length;l++){if(A[l].value===t){A[l].selected=!0,a&&(A[l].defaultSelected=!0);return}e!==null||A[l].disabled||(e=A[l])}e!==null&&(e.selected=!0)}}function wu(A,e,t){if(e!=null&&(e=""+Lt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Lt(t):""}function yu(A,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(o(92));if(LA(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Lt(e),A.defaultValue=t,a=A.textContent,a===t&&a!==""&&a!==null&&(A.value=a)}function Ga(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(A,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":a?A.setProperty(e,t):typeof t!="number"||t===0||y0.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function Cu(A,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(A=A.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?A.setProperty(a,""):a==="float"?A.cssFloat="":A[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&vu(A,l,a)}else for(var c in e)e.hasOwnProperty(c)&&vu(A,c,e[c])}function ll(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function io(A){return C0.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var cl=null;function dl(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Va=null,Ya=null;function Qu(A){var e=KA(A);if(e&&(A=e.stateNode)){var t=A[H]||null;A:switch(A=e.stateNode,e.type){case"input":if(ol(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ot(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==A&&a.form===A.form){var l=a[H]||null;if(!l)throw Error(o(90));ol(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===A.form&&Bu(a)}break A;case"textarea":wu(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&_a(A,!!t.multiple,e,!1)}}}var ul=!1;function Uu(A,e,t){if(ul)return A(e,t);ul=!0;try{var a=A(e);return a}finally{if(ul=!1,(Va!==null||Ya!==null)&&(Yo(),Va&&(e=Va,A=Ya,Ya=Va=null,Qu(e),A)))for(e=0;e<A.length;e++)Qu(A[e])}}function Kr(A,e){var t=A.stateNode;if(t===null)return null;var a=t[H]||null;if(a===null)return null;t=a[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(A=A.type,a=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!a;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=!1;if(xn)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){fl=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{fl=!1}var On=null,hl=null,oo=null;function Eu(){if(oo)return oo;var A,e=hl,t=e.length,a,l="value"in On?On.value:On.textContent,c=l.length;for(A=0;A<t&&e[A]===l[A];A++);var p=t-A;for(a=1;a<=p&&e[t-a]===l[c-a];a++);return oo=l.slice(A,1<a?1-a:void 0)}function so(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function lo(){return!0}function Fu(){return!1}function Ct(A){function e(t,a,l,c,p){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var w in A)A.hasOwnProperty(w)&&(t=A[w],this[w]=t?t(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?lo:Fu,this.isPropagationStopped=Fu,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=Ct(ma),zr=v({},ma,{view:0,detail:0}),Q0=Ct(zr),gl,pl,_r,uo=v({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==_r&&(_r&&A.type==="mousemove"?(gl=A.screenX-_r.screenX,pl=A.screenY-_r.screenY):pl=gl=0,_r=A),gl)},movementY:function(A){return"movementY"in A?A.movementY:pl}}),ju=Ct(uo),U0=v({},uo,{dataTransfer:0}),E0=Ct(U0),F0=v({},zr,{relatedTarget:0}),xl=Ct(F0),j0=v({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Ct(j0),H0=v({},ma,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),N0=Ct(H0),k0=v({},ma,{data:0}),Su=Ct(k0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=T0[A])?!!e[A]:!1}function ml(){return I0}var L0=v({},zr,{key:function(A){if(A.key){var e=M0[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=so(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?D0[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(A){return A.type==="keypress"?so(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?so(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),O0=Ct(L0),K0=v({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Ct(K0),R0=v({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),z0=Ct(R0),_0=v({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Ct(_0),V0=v({},uo,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=Ct(V0),X0=v({},ma,{newState:0,oldState:0}),J0=Ct(X0),Z0=[9,13,27,32],Bl=xn&&"CompositionEvent"in window,Gr=null;xn&&"documentMode"in document&&(Gr=document.documentMode);var q0=xn&&"TextEvent"in window&&!Gr,Nu=xn&&(!Bl||Gr&&8<Gr&&11>=Gr),ku=" ",Mu=!1;function Du(A,e){switch(A){case"keyup":return Z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Xa=!1;function W0(A,e){switch(A){case"compositionend":return Tu(e);case"keypress":return e.which!==32?null:(Mu=!0,ku);case"textInput":return A=e.data,A===ku&&Mu?null:A;default:return null}}function $0(A,e){if(Xa)return A==="compositionend"||!Bl&&Du(A,e)?(A=Eu(),oo=hl=On=null,Xa=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nu&&e.locale!=="ko"?null:e.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!P0[A.type]:e==="textarea"}function Lu(A,e,t,a){Va?Ya?Ya.push(a):Ya=[a]:Va=a,e=$o(e,"onChange"),0<e.length&&(t=new co("onChange","change",null,t,a),A.push({event:t,listeners:e}))}var Vr=null,Yr=null;function Am(A){Bg(A,0)}function fo(A){var e=ZA(A);if(Bu(e))return A}function Ou(A,e){if(A==="change")return e}var Ku=!1;if(xn){var bl;if(xn){var wl="oninput"in document;if(!wl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),wl=typeof Ru.oninput=="function"}bl=wl}else bl=!1;Ku=bl&&(!document.documentMode||9<document.documentMode)}function zu(){Vr&&(Vr.detachEvent("onpropertychange",_u),Yr=Vr=null)}function _u(A){if(A.propertyName==="value"&&fo(Yr)){var e=[];Lu(e,Yr,A,dl(A)),Uu(Am,e)}}function em(A,e,t){A==="focusin"?(zu(),Vr=e,Yr=t,Vr.attachEvent("onpropertychange",_u)):A==="focusout"&&zu()}function tm(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return fo(Yr)}function nm(A,e){if(A==="click")return fo(e)}function am(A,e){if(A==="input"||A==="change")return fo(e)}function rm(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var jt=typeof Object.is=="function"?Object.is:rm;function Xr(A,e){if(jt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!IA.call(e,l)||!jt(A[l],e[l]))return!1}return!0}function Gu(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Vu(A,e){var t=Gu(A);A=0;for(var a;t;){if(t.nodeType===3){if(a=A+t.textContent.length,A<=e&&a>=e)return{node:t,offset:e-A};A=a}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Gu(t)}}function Yu(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Yu(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Xu(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=ro(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=ro(A.document)}return e}function yl(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var im=xn&&"documentMode"in document&&11>=document.documentMode,Ja=null,vl=null,Jr=null,Cl=!1;function Ju(A,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cl||Ja==null||Ja!==ro(a)||(a=Ja,"selectionStart"in a&&yl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Jr&&Xr(Jr,a)||(Jr=a,a=$o(vl,"onSelect"),0<a.length&&(e=new co("onSelect","select",null,e,t),A.push({event:e,listeners:a}),e.target=Ja)))}function Ba(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Za={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Ql={},Zu={};xn&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function ba(A){if(Ql[A])return Ql[A];if(!Za[A])return A;var e=Za[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Zu)return Ql[A]=e[t];return A}var qu=ba("animationend"),Wu=ba("animationiteration"),$u=ba("animationstart"),om=ba("transitionrun"),sm=ba("transitionstart"),lm=ba("transitioncancel"),Pu=ba("transitionend"),Af=new Map,Ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ul.push("scrollEnd");function Wt(A,e){Af.set(A,e),ze(e,[A])}var ef=new WeakMap;function Kt(A,e){if(typeof A=="object"&&A!==null){var t=ef.get(A);return t!==void 0?t:(e={value:A,source:e,stack:xu(e)},ef.set(A,e),e)}return{value:A,source:e,stack:xu(e)}}var Rt=[],qa=0,El=0;function ho(){for(var A=qa,e=El=qa=0;e<A;){var t=Rt[e];Rt[e++]=null;var a=Rt[e];Rt[e++]=null;var l=Rt[e];Rt[e++]=null;var c=Rt[e];if(Rt[e++]=null,a!==null&&l!==null){var p=a.pending;p===null?l.next=l:(l.next=p.next,p.next=l),a.pending=l}c!==0&&tf(t,l,c)}}function go(A,e,t,a){Rt[qa++]=A,Rt[qa++]=e,Rt[qa++]=t,Rt[qa++]=a,El|=a,A.lanes|=a,A=A.alternate,A!==null&&(A.lanes|=a)}function Fl(A,e,t,a){return go(A,e,t,a),po(A)}function Wa(A,e){return go(A,null,null,e),po(A)}function tf(A,e,t){A.lanes|=t;var a=A.alternate;a!==null&&(a.lanes|=t);for(var l=!1,c=A.return;c!==null;)c.childLanes|=t,a=c.alternate,a!==null&&(a.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(l=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,l&&e!==null&&(l=31-L(t),A=c.hiddenUpdates,a=A[l],a===null?A[l]=[e]:a.push(e),e.lane=t|536870912),c):null}function po(A){if(50<Bi)throw Bi=0,Mc=null,Error(o(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var $a={};function cm(A,e,t,a){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(A,e,t,a){return new cm(A,e,t,a)}function jl(A){return A=A.prototype,!(!A||!A.isReactComponent)}function mn(A,e){var t=A.alternate;return t===null?(t=St(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function nf(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function xo(A,e,t,a,l,c){var p=0;if(a=A,typeof A=="function")jl(A)&&(p=1);else if(typeof A=="string")p=uB(A,t,UA.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case iA:return A=St(31,t,e,l),A.elementType=iA,A.lanes=c,A;case P:return wa(t.children,l,c,e);case uA:p=8,l|=24;break;case kA:return A=St(12,t,e,l|2),A.elementType=kA,A.lanes=c,A;case BA:return A=St(13,t,e,l),A.elementType=BA,A.lanes=c,A;case J:return A=St(19,t,e,l),A.elementType=J,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case CA:case TA:p=10;break A;case gA:p=9;break A;case cA:p=11;break A;case SA:p=14;break A;case _:p=16,a=null;break A}p=29,t=Error(o(130,A===null?"null":typeof A,"")),a=null}return e=St(p,t,e,l),e.elementType=A,e.type=a,e.lanes=c,e}function wa(A,e,t,a){return A=St(7,A,a,e),A.lanes=t,A}function Sl(A,e,t){return A=St(6,A,null,e),A.lanes=t,A}function Hl(A,e,t){return e=St(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var Pa=[],Ar=0,mo=null,Bo=0,zt=[],_t=0,ya=null,Bn=1,bn="";function va(A,e){Pa[Ar++]=Bo,Pa[Ar++]=mo,mo=A,Bo=e}function af(A,e,t){zt[_t++]=Bn,zt[_t++]=bn,zt[_t++]=ya,ya=A;var a=Bn;A=bn;var l=32-L(a)-1;a&=~(1<<l),t+=1;var c=32-L(e)+l;if(30<c){var p=l-l%5;c=(a&(1<<p)-1).toString(32),a>>=p,l-=p,Bn=1<<32-L(e)+l|t<<l|a,bn=c+A}else Bn=1<<c|t<<l|a,bn=A}function Nl(A){A.return!==null&&(va(A,1),af(A,1,0))}function kl(A){for(;A===mo;)mo=Pa[--Ar],Pa[Ar]=null,Bo=Pa[--Ar],Pa[Ar]=null;for(;A===ya;)ya=zt[--_t],zt[_t]=null,bn=zt[--_t],zt[_t]=null,Bn=zt[--_t],zt[_t]=null}var yt=null,Ze=null,Qe=!1,Ca=null,nn=!1,Ml=Error(o(519));function Qa(A){var e=Error(o(418,""));throw Wr(Kt(e,A)),Ml}function rf(A){var e=A.stateNode,t=A.type,a=A.memoizedProps;switch(e[E]=A,e[H]=a,t){case"dialog":pe("cancel",e),pe("close",e);break;case"iframe":case"object":case"embed":pe("load",e);break;case"video":case"audio":for(t=0;t<wi.length;t++)pe(wi[t],e);break;case"source":pe("error",e);break;case"img":case"image":case"link":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"input":pe("invalid",e),bu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ao(e);break;case"select":pe("invalid",e);break;case"textarea":pe("invalid",e),yu(e,a.value,a.defaultValue,a.children),ao(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||vg(e.textContent,t)?(a.popover!=null&&(pe("beforetoggle",e),pe("toggle",e)),a.onScroll!=null&&pe("scroll",e),a.onScrollEnd!=null&&pe("scrollend",e),a.onClick!=null&&(e.onclick=Po),e=!0):e=!1,e||Qa(A)}function of(A){for(yt=A.return;yt;)switch(yt.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:yt=yt.return}}function Zr(A){if(A!==yt)return!1;if(!Qe)return of(A),Qe=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||qc(A.type,A.memoizedProps)),t=!t),t&&Ze&&Qa(A),of(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(o(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){Ze=Pt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}Ze=null}}else e===27?(e=Ze,ea(A.type)?(A=Ad,Ad=null,Ze=A):Ze=e):Ze=yt?Pt(A.stateNode.nextSibling):null;return!0}function qr(){Ze=yt=null,Qe=!1}function sf(){var A=Ca;return A!==null&&(Et===null?Et=A:Et.push.apply(Et,A),Ca=null),A}function Wr(A){Ca===null?Ca=[A]:Ca.push(A)}var Dl=V(null),Ua=null,wn=null;function Kn(A,e,t){rA(Dl,e._currentValue),e._currentValue=t}function yn(A){A._currentValue=Dl.current,hA(Dl)}function Tl(A,e,t){for(;A!==null;){var a=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),A===t)break;A=A.return}}function Il(A,e,t,a){var l=A.child;for(l!==null&&(l.return=A);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;A:for(;c!==null;){var w=c;c=l;for(var N=0;N<e.length;N++)if(w.context===e[N]){c.lanes|=t,w=c.alternate,w!==null&&(w.lanes|=t),Tl(c.return,t,A),a||(p=null);break A}c=w.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(o(341));p.lanes|=t,c=p.alternate,c!==null&&(c.lanes|=t),Tl(p,t,A),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===A){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function $r(A,e,t,a){A=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var w=l.type;jt(l.pendingProps.value,p.value)||(A!==null?A.push(w):A=[w])}}else if(l===QA.current){if(p=l.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(A!==null?A.push(Ei):A=[Ei])}l=l.return}A!==null&&Il(e,A,t,a),e.flags|=262144}function bo(A){for(A=A.firstContext;A!==null;){if(!jt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function Ea(A){Ua=A,wn=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function mt(A){return lf(Ua,A)}function wo(A,e){return Ua===null&&Ea(A),lf(A,e)}function lf(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},wn===null){if(A===null)throw Error(o(308));wn=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else wn=wn.next=e;return t}var dm=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,a){A.push(a)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},um=i.unstable_scheduleCallback,fm=i.unstable_NormalPriority,at={$$typeof:TA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ll(){return{controller:new dm,data:new Map,refCount:0}}function Pr(A){A.refCount--,A.refCount===0&&um(fm,function(){A.controller.abort()})}var Ai=null,Ol=0,er=0,tr=null;function hm(A,e){if(Ai===null){var t=Ai=[];Ol=0,er=Rc(),tr={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ol++,e.then(cf,cf),e}function cf(){if(--Ol===0&&Ai!==null){tr!==null&&(tr.status="fulfilled");var A=Ai;Ai=null,er=0,tr=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function gm(A,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return A.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var df=G.S;G.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&hm(A,e),df!==null&&df(A,e)};var Fa=V(null);function Kl(){var A=Fa.current;return A!==null?A:Ie.pooledCache}function yo(A,e){e===null?rA(Fa,Fa.current):rA(Fa,e.pool)}function uf(){var A=Kl();return A===null?null:{parent:at._currentValue,pool:A}}var ei=Error(o(460)),ff=Error(o(474)),vo=Error(o(542)),Rl={then:function(){}};function hf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function Co(){}function gf(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(Co,Co),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,xf(A),A;default:if(typeof e.status=="string")e.then(Co,Co);else{if(A=Ie,A!==null&&100<A.shellSuspendCounter)throw Error(o(482));A=e,A.status="pending",A.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,xf(A),A}throw ti=e,ei}}var ti=null;function pf(){if(ti===null)throw Error(o(459));var A=ti;return ti=null,A}function xf(A){if(A===ei||A===vo)throw Error(o(483))}var Rn=!1;function zl(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _l(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function zn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function _n(A,e,t){var a=A.updateQueue;if(a===null)return null;if(a=a.shared,(Fe&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=po(A),tf(A,null,t),e}return go(A,a,e,t),po(A)}function ni(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,Ce(A,t)}}function Gl(A,e){var t=A.updateQueue,a=A.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,t=t.next}while(t!==null);c===null?l=c=e:c=c.next=e}else l=c=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Vl=!1;function ai(){if(Vl){var A=tr;if(A!==null)throw A}}function ri(A,e,t,a){Vl=!1;var l=A.updateQueue;Rn=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var N=w,W=N.next;N.next=null,p===null?c=W:p.next=W,p=N;var mA=A.alternate;mA!==null&&(mA=mA.updateQueue,w=mA.lastBaseUpdate,w!==p&&(w===null?mA.firstBaseUpdate=W:w.next=W,mA.lastBaseUpdate=N))}if(c!==null){var yA=l.baseState;p=0,mA=W=N=null,w=c;do{var AA=w.lane&-536870913,eA=AA!==w.lane;if(eA?(we&AA)===AA:(a&AA)===AA){AA!==0&&AA===er&&(Vl=!0),mA!==null&&(mA=mA.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});A:{var ae=A,te=w;AA=e;var Ne=t;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){yA=ae.call(Ne,yA,AA);break A}yA=ae;break A;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,AA=typeof ae=="function"?ae.call(Ne,yA,AA):ae,AA==null)break A;yA=v({},yA,AA);break A;case 2:Rn=!0}}AA=w.callback,AA!==null&&(A.flags|=64,eA&&(A.flags|=8192),eA=l.callbacks,eA===null?l.callbacks=[AA]:eA.push(AA))}else eA={lane:AA,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mA===null?(W=mA=eA,N=yA):mA=mA.next=eA,p|=AA;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;eA=w,w=eA.next,eA.next=null,l.lastBaseUpdate=eA,l.shared.pending=null}}while(!0);mA===null&&(N=yA),l.baseState=N,l.firstBaseUpdate=W,l.lastBaseUpdate=mA,c===null&&(l.shared.lanes=0),Wn|=p,A.lanes=p,A.memoizedState=yA}}function mf(A,e){if(typeof A!="function")throw Error(o(191,A));A.call(e)}function Bf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)mf(t[A],e)}var nr=V(null),Qo=V(0);function bf(A,e){A=jn,rA(Qo,A),rA(nr,e),jn=A|e.baseLanes}function Yl(){rA(Qo,jn),rA(nr,nr.current)}function Xl(){jn=Qo.current,hA(nr),hA(Qo)}var Gn=0,ce=null,Se=null,et=null,Uo=!1,ar=!1,ja=!1,Eo=0,ii=0,rr=null,pm=0;function We(){throw Error(o(321))}function Jl(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!jt(A[t],e[t]))return!1;return!0}function Zl(A,e,t,a,l,c){return Gn=c,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,G.H=A===null||A.memoizedState===null?nh:ah,ja=!1,c=t(a,l),ja=!1,ar&&(c=yf(e,t,a,l)),wf(A),c}function wf(A){G.H=ko;var e=Se!==null&&Se.next!==null;if(Gn=0,et=Se=ce=null,Uo=!1,ii=0,rr=null,e)throw Error(o(300));A===null||ot||(A=A.dependencies,A!==null&&bo(A)&&(ot=!0))}function yf(A,e,t,a){ce=A;var l=0;do{if(ar&&(rr=null),ii=0,ar=!1,25<=l)throw Error(o(301));if(l+=1,et=Se=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}G.H=vm,c=e(t,a)}while(ar);return c}function xm(){var A=G.H,e=A.useState()[0];return e=typeof e.then=="function"?oi(e):e,A=A.useState()[0],(Se!==null?Se.memoizedState:null)!==A&&(ce.flags|=1024),e}function ql(){var A=Eo!==0;return Eo=0,A}function Wl(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function $l(A){if(Uo){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}Uo=!1}Gn=0,et=Se=ce=null,ar=!1,ii=Eo=0,rr=null}function Qt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?ce.memoizedState=et=A:et=et.next=A,et}function tt(){if(Se===null){var A=ce.alternate;A=A!==null?A.memoizedState:null}else A=Se.next;var e=et===null?ce.memoizedState:et.next;if(e!==null)et=e,Se=A;else{if(A===null)throw ce.alternate===null?Error(o(467)):Error(o(310));Se=A,A={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},et===null?ce.memoizedState=et=A:et=et.next=A}return et}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(A){var e=ii;return ii+=1,rr===null&&(rr=[]),A=gf(rr,A,e),e=ce,(et===null?e.memoizedState:et.next)===null&&(e=e.alternate,G.H=e===null||e.memoizedState===null?nh:ah),A}function Fo(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return oi(A);if(A.$$typeof===TA)return mt(A)}throw Error(o(438,String(A)))}function Ac(A){var e=null,t=ce.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=ce.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Pl(),ce.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),a=0;a<A;a++)t[a]=pA;return e.index++,t}function vn(A,e){return typeof e=="function"?e(A):e}function jo(A){var e=tt();return ec(e,Se,A)}function ec(A,e,t){var a=A.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=A.baseQueue,c=a.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,a.pending=null}if(c=A.baseState,l===null)A.memoizedState=c;else{e=l.next;var w=p=null,N=null,W=e,mA=!1;do{var yA=W.lane&-536870913;if(yA!==W.lane?(we&yA)===yA:(Gn&yA)===yA){var AA=W.revertLane;if(AA===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),yA===er&&(mA=!0);else if((Gn&AA)===AA){W=W.next,AA===er&&(mA=!0);continue}else yA={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(w=N=yA,p=c):N=N.next=yA,ce.lanes|=AA,Wn|=AA;yA=W.action,ja&&t(c,yA),c=W.hasEagerState?W.eagerState:t(c,yA)}else AA={lane:yA,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(w=N=AA,p=c):N=N.next=AA,ce.lanes|=yA,Wn|=yA;W=W.next}while(W!==null&&W!==e);if(N===null?p=c:N.next=w,!jt(c,A.memoizedState)&&(ot=!0,mA&&(t=tr,t!==null)))throw t;A.memoizedState=c,A.baseState=p,A.baseQueue=N,a.lastRenderedState=c}return l===null&&(a.lanes=0),[A.memoizedState,a.dispatch]}function tc(A){var e=tt(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=A;var a=t.dispatch,l=t.pending,c=e.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do c=A(c,p.action),p=p.next;while(p!==l);jt(c,e.memoizedState)||(ot=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,a]}function vf(A,e,t){var a=ce,l=tt(),c=Qe;if(c){if(t===void 0)throw Error(o(407));t=t()}else t=e();var p=!jt((Se||l).memoizedState,t);p&&(l.memoizedState=t,ot=!0),l=l.queue;var w=Uf.bind(null,a,l,A);if(si(2048,8,w,[A]),l.getSnapshot!==e||p||et!==null&&et.memoizedState.tag&1){if(a.flags|=2048,ir(9,So(),Qf.bind(null,a,l,t,e),null),Ie===null)throw Error(o(349));c||(Gn&124)!==0||Cf(a,e,t)}return t}function Cf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=ce.updateQueue,e===null?(e=Pl(),ce.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Qf(A,e,t,a){e.value=t,e.getSnapshot=a,Ef(e)&&Ff(A)}function Uf(A,e,t){return t(function(){Ef(e)&&Ff(A)})}function Ef(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!jt(A,t)}catch{return!0}}function Ff(A){var e=Wa(A,2);e!==null&&Dt(e,A,2)}function nc(A){var e=Qt();if(typeof A=="function"){var t=A;if(A=t(),ja){y(!0);try{t()}finally{y(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:A},e}function jf(A,e,t,a){return A.baseState=t,ec(A,Se,typeof a=="function"?a:vn)}function mm(A,e,t,a,l){if(No(A))throw Error(o(485));if(A=e.action,A!==null){var c={payload:l,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};G.T!==null?t(!0):c.isTransition=!1,a(c),t=e.pending,t===null?(c.next=e.pending=c,Sf(e,c)):(c.next=t.next,e.pending=t.next=c)}}function Sf(A,e){var t=e.action,a=e.payload,l=A.state;if(e.isTransition){var c=G.T,p={};G.T=p;try{var w=t(l,a),N=G.S;N!==null&&N(p,w),Hf(A,e,w)}catch(W){ac(A,e,W)}finally{G.T=c}}else try{c=t(l,a),Hf(A,e,c)}catch(W){ac(A,e,W)}}function Hf(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Nf(A,e,a)},function(a){return ac(A,e,a)}):Nf(A,e,t)}function Nf(A,e,t){e.status="fulfilled",e.value=t,kf(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,Sf(A,t)))}function ac(A,e,t){var a=A.pending;if(A.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,kf(e),e=e.next;while(e!==a)}A.action=null}function kf(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Mf(A,e){return e}function Df(A,e){if(Qe){var t=Ie.formState;if(t!==null){A:{var a=ce;if(Qe){if(Ze){e:{for(var l=Ze,c=nn;l.nodeType!==8;){if(!c){l=null;break e}if(l=Pt(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=Pt(l.nextSibling),a=l.data==="F!";break A}}Qa(a)}a=!1}a&&(e=t[0])}}return t=Qt(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mf,lastRenderedState:e},t.queue=a,t=Ah.bind(null,ce,a),a.dispatch=t,a=nc(!1),c=lc.bind(null,ce,!1,a.queue),a=Qt(),l={state:e,dispatch:null,action:A,pending:null},a.queue=l,t=mm.bind(null,ce,l,c,t),l.dispatch=t,a.memoizedState=A,[e,t,!1]}function Tf(A){var e=tt();return If(e,Se,A)}function If(A,e,t){if(e=ec(A,e,Mf)[0],A=jo(vn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=oi(e)}catch(p){throw p===ei?vo:p}else a=e;e=tt();var l=e.queue,c=l.dispatch;return t!==e.memoizedState&&(ce.flags|=2048,ir(9,So(),Bm.bind(null,l,t),null)),[a,c,A]}function Bm(A,e){A.action=e}function Lf(A){var e=tt(),t=Se;if(t!==null)return If(e,t,A);tt(),e=e.memoizedState,t=tt();var a=t.queue.dispatch;return t.memoizedState=A,[e,a,!1]}function ir(A,e,t,a){return A={tag:A,create:t,deps:a,inst:e,next:null},e=ce.updateQueue,e===null&&(e=Pl(),ce.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(a=t.next,t.next=A,A.next=a,e.lastEffect=A),A}function So(){return{destroy:void 0,resource:void 0}}function Of(){return tt().memoizedState}function Ho(A,e,t,a){var l=Qt();a=a===void 0?null:a,ce.flags|=A,l.memoizedState=ir(1|e,So(),t,a)}function si(A,e,t,a){var l=tt();a=a===void 0?null:a;var c=l.memoizedState.inst;Se!==null&&a!==null&&Jl(a,Se.memoizedState.deps)?l.memoizedState=ir(e,c,t,a):(ce.flags|=A,l.memoizedState=ir(1|e,c,t,a))}function Kf(A,e){Ho(8390656,8,A,e)}function Rf(A,e){si(2048,8,A,e)}function zf(A,e){return si(4,2,A,e)}function _f(A,e){return si(4,4,A,e)}function Gf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Vf(A,e,t){t=t!=null?t.concat([A]):null,si(4,4,Gf.bind(null,e,A),t)}function rc(){}function Yf(A,e){var t=tt();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&Jl(e,a[1])?a[0]:(t.memoizedState=[A,e],A)}function Xf(A,e){var t=tt();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&Jl(e,a[1]))return a[0];if(a=A(),ja){y(!0);try{A()}finally{y(!1)}}return t.memoizedState=[a,e],a}function ic(A,e,t){return t===void 0||(Gn&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=qh(),ce.lanes|=A,Wn|=A,t)}function Jf(A,e,t,a){return jt(t,e)?t:nr.current!==null?(A=ic(A,t,a),jt(A,e)||(ot=!0),A):(Gn&42)===0?(ot=!0,A.memoizedState=t):(A=qh(),ce.lanes|=A,Wn|=A,e)}function Zf(A,e,t,a,l){var c=oA.p;oA.p=c!==0&&8>c?c:8;var p=G.T,w={};G.T=w,lc(A,!1,e,t);try{var N=l(),W=G.S;if(W!==null&&W(w,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var mA=gm(N,a);li(A,e,mA,Mt(A))}else li(A,e,a,Mt(A))}catch(yA){li(A,e,{then:function(){},status:"rejected",reason:yA},Mt())}finally{oA.p=c,G.T=p}}function bm(){}function oc(A,e,t,a){if(A.tag!==5)throw Error(o(476));var l=qf(A).queue;Zf(A,l,e,xA,t===null?bm:function(){return Wf(A),t(a)})}function qf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:xA,baseState:xA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:xA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Wf(A){var e=qf(A).next.queue;li(A,e,{},Mt())}function sc(){return mt(Ei)}function $f(){return tt().memoizedState}function Pf(){return tt().memoizedState}function wm(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=Mt();A=zn(t);var a=_n(e,A,t);a!==null&&(Dt(a,e,t),ni(a,e,t)),e={cache:Ll()},A.payload=e;return}e=e.return}}function ym(A,e,t){var a=Mt();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},No(A)?eh(e,t):(t=Fl(A,e,t,a),t!==null&&(Dt(t,A,a),th(t,e,a)))}function Ah(A,e,t){var a=Mt();li(A,e,t,a)}function li(A,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(No(A))eh(e,l);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,w=c(p,t);if(l.hasEagerState=!0,l.eagerState=w,jt(w,p))return go(A,e,l,0),Ie===null&&ho(),!1}catch{}finally{}if(t=Fl(A,e,l,a),t!==null)return Dt(t,A,a),th(t,e,a),!0}return!1}function lc(A,e,t,a){if(a={lane:2,revertLane:Rc(),action:a,hasEagerState:!1,eagerState:null,next:null},No(A)){if(e)throw Error(o(479))}else e=Fl(A,t,a,2),e!==null&&Dt(e,A,2)}function No(A){var e=A.alternate;return A===ce||e!==null&&e===ce}function eh(A,e){ar=Uo=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function th(A,e,t){if((t&4194048)!==0){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,Ce(A,t)}}var ko={readContext:mt,use:Fo,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},nh={readContext:mt,use:Fo,useCallback:function(A,e){return Qt().memoizedState=[A,e===void 0?null:e],A},useContext:mt,useEffect:Kf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,Ho(4194308,4,Gf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return Ho(4194308,4,A,e)},useInsertionEffect:function(A,e){Ho(4,2,A,e)},useMemo:function(A,e){var t=Qt();e=e===void 0?null:e;var a=A();if(ja){y(!0);try{A()}finally{y(!1)}}return t.memoizedState=[a,e],a},useReducer:function(A,e,t){var a=Qt();if(t!==void 0){var l=t(e);if(ja){y(!0);try{t(e)}finally{y(!1)}}}else l=e;return a.memoizedState=a.baseState=l,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:l},a.queue=A,A=A.dispatch=ym.bind(null,ce,A),[a.memoizedState,A]},useRef:function(A){var e=Qt();return A={current:A},e.memoizedState=A},useState:function(A){A=nc(A);var e=A.queue,t=Ah.bind(null,ce,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:rc,useDeferredValue:function(A,e){var t=Qt();return ic(t,A,e)},useTransition:function(){var A=nc(!1);return A=Zf.bind(null,ce,A.queue,!0,!1),Qt().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var a=ce,l=Qt();if(Qe){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),Ie===null)throw Error(o(349));(we&124)!==0||Cf(a,e,t)}l.memoizedState=t;var c={value:t,getSnapshot:e};return l.queue=c,Kf(Uf.bind(null,a,c,A),[A]),a.flags|=2048,ir(9,So(),Qf.bind(null,a,c,t,e),null),t},useId:function(){var A=Qt(),e=Ie.identifierPrefix;if(Qe){var t=bn,a=Bn;t=(a&~(1<<32-L(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=Eo++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=pm++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:sc,useFormState:Df,useActionState:Df,useOptimistic:function(A){var e=Qt();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=lc.bind(null,ce,!0,t),t.dispatch=e,[A,e]},useMemoCache:Ac,useCacheRefresh:function(){return Qt().memoizedState=wm.bind(null,ce)}},ah={readContext:mt,use:Fo,useCallback:Yf,useContext:mt,useEffect:Rf,useImperativeHandle:Vf,useInsertionEffect:zf,useLayoutEffect:_f,useMemo:Xf,useReducer:jo,useRef:Of,useState:function(){return jo(vn)},useDebugValue:rc,useDeferredValue:function(A,e){var t=tt();return Jf(t,Se.memoizedState,A,e)},useTransition:function(){var A=jo(vn)[0],e=tt().memoizedState;return[typeof A=="boolean"?A:oi(A),e]},useSyncExternalStore:vf,useId:$f,useHostTransitionStatus:sc,useFormState:Tf,useActionState:Tf,useOptimistic:function(A,e){var t=tt();return jf(t,Se,A,e)},useMemoCache:Ac,useCacheRefresh:Pf},vm={readContext:mt,use:Fo,useCallback:Yf,useContext:mt,useEffect:Rf,useImperativeHandle:Vf,useInsertionEffect:zf,useLayoutEffect:_f,useMemo:Xf,useReducer:tc,useRef:Of,useState:function(){return tc(vn)},useDebugValue:rc,useDeferredValue:function(A,e){var t=tt();return Se===null?ic(t,A,e):Jf(t,Se.memoizedState,A,e)},useTransition:function(){var A=tc(vn)[0],e=tt().memoizedState;return[typeof A=="boolean"?A:oi(A),e]},useSyncExternalStore:vf,useId:$f,useHostTransitionStatus:sc,useFormState:Lf,useActionState:Lf,useOptimistic:function(A,e){var t=tt();return Se!==null?jf(t,Se,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:Ac,useCacheRefresh:Pf},or=null,ci=0;function Mo(A){var e=ci;return ci+=1,or===null&&(or=[]),gf(or,A,e)}function di(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function Do(A,e){throw e.$$typeof===F?Error(o(525)):(A=Object.prototype.toString.call(e),Error(o(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function rh(A){var e=A._init;return e(A._payload)}function ih(A){function e(z,O){if(A){var Z=z.deletions;Z===null?(z.deletions=[O],z.flags|=16):Z.push(O)}}function t(z,O){if(!A)return null;for(;O!==null;)e(z,O),O=O.sibling;return null}function a(z){for(var O=new Map;z!==null;)z.key!==null?O.set(z.key,z):O.set(z.index,z),z=z.sibling;return O}function l(z,O){return z=mn(z,O),z.index=0,z.sibling=null,z}function c(z,O,Z){return z.index=Z,A?(Z=z.alternate,Z!==null?(Z=Z.index,Z<O?(z.flags|=67108866,O):Z):(z.flags|=67108866,O)):(z.flags|=1048576,O)}function p(z){return A&&z.alternate===null&&(z.flags|=67108866),z}function w(z,O,Z,bA){return O===null||O.tag!==6?(O=Sl(Z,z.mode,bA),O.return=z,O):(O=l(O,Z),O.return=z,O)}function N(z,O,Z,bA){var JA=Z.type;return JA===P?mA(z,O,Z.props.children,bA,Z.key):O!==null&&(O.elementType===JA||typeof JA=="object"&&JA!==null&&JA.$$typeof===_&&rh(JA)===O.type)?(O=l(O,Z.props),di(O,Z),O.return=z,O):(O=xo(Z.type,Z.key,Z.props,null,z.mode,bA),di(O,Z),O.return=z,O)}function W(z,O,Z,bA){return O===null||O.tag!==4||O.stateNode.containerInfo!==Z.containerInfo||O.stateNode.implementation!==Z.implementation?(O=Hl(Z,z.mode,bA),O.return=z,O):(O=l(O,Z.children||[]),O.return=z,O)}function mA(z,O,Z,bA,JA){return O===null||O.tag!==7?(O=wa(Z,z.mode,bA,JA),O.return=z,O):(O=l(O,Z),O.return=z,O)}function yA(z,O,Z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Sl(""+O,z.mode,Z),O.return=z,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case M:return Z=xo(O.type,O.key,O.props,null,z.mode,Z),di(Z,O),Z.return=z,Z;case aA:return O=Hl(O,z.mode,Z),O.return=z,O;case _:var bA=O._init;return O=bA(O._payload),yA(z,O,Z)}if(LA(O)||sA(O))return O=wa(O,z.mode,Z,null),O.return=z,O;if(typeof O.then=="function")return yA(z,Mo(O),Z);if(O.$$typeof===TA)return yA(z,wo(z,O),Z);Do(z,O)}return null}function AA(z,O,Z,bA){var JA=O!==null?O.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return JA!==null?null:w(z,O,""+Z,bA);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return Z.key===JA?N(z,O,Z,bA):null;case aA:return Z.key===JA?W(z,O,Z,bA):null;case _:return JA=Z._init,Z=JA(Z._payload),AA(z,O,Z,bA)}if(LA(Z)||sA(Z))return JA!==null?null:mA(z,O,Z,bA,null);if(typeof Z.then=="function")return AA(z,O,Mo(Z),bA);if(Z.$$typeof===TA)return AA(z,O,wo(z,Z),bA);Do(z,Z)}return null}function eA(z,O,Z,bA,JA){if(typeof bA=="string"&&bA!==""||typeof bA=="number"||typeof bA=="bigint")return z=z.get(Z)||null,w(O,z,""+bA,JA);if(typeof bA=="object"&&bA!==null){switch(bA.$$typeof){case M:return z=z.get(bA.key===null?Z:bA.key)||null,N(O,z,bA,JA);case aA:return z=z.get(bA.key===null?Z:bA.key)||null,W(O,z,bA,JA);case _:var he=bA._init;return bA=he(bA._payload),eA(z,O,Z,bA,JA)}if(LA(bA)||sA(bA))return z=z.get(Z)||null,mA(O,z,bA,JA,null);if(typeof bA.then=="function")return eA(z,O,Z,Mo(bA),JA);if(bA.$$typeof===TA)return eA(z,O,Z,wo(O,bA),JA);Do(O,bA)}return null}function ae(z,O,Z,bA){for(var JA=null,he=null,qA=O,ne=O=0,lt=null;qA!==null&&ne<Z.length;ne++){qA.index>ne?(lt=qA,qA=null):lt=qA.sibling;var ve=AA(z,qA,Z[ne],bA);if(ve===null){qA===null&&(qA=lt);break}A&&qA&&ve.alternate===null&&e(z,qA),O=c(ve,O,ne),he===null?JA=ve:he.sibling=ve,he=ve,qA=lt}if(ne===Z.length)return t(z,qA),Qe&&va(z,ne),JA;if(qA===null){for(;ne<Z.length;ne++)qA=yA(z,Z[ne],bA),qA!==null&&(O=c(qA,O,ne),he===null?JA=qA:he.sibling=qA,he=qA);return Qe&&va(z,ne),JA}for(qA=a(qA);ne<Z.length;ne++)lt=eA(qA,z,ne,Z[ne],bA),lt!==null&&(A&&lt.alternate!==null&&qA.delete(lt.key===null?ne:lt.key),O=c(lt,O,ne),he===null?JA=lt:he.sibling=lt,he=lt);return A&&qA.forEach(function(ia){return e(z,ia)}),Qe&&va(z,ne),JA}function te(z,O,Z,bA){if(Z==null)throw Error(o(151));for(var JA=null,he=null,qA=O,ne=O=0,lt=null,ve=Z.next();qA!==null&&!ve.done;ne++,ve=Z.next()){qA.index>ne?(lt=qA,qA=null):lt=qA.sibling;var ia=AA(z,qA,ve.value,bA);if(ia===null){qA===null&&(qA=lt);break}A&&qA&&ia.alternate===null&&e(z,qA),O=c(ia,O,ne),he===null?JA=ia:he.sibling=ia,he=ia,qA=lt}if(ve.done)return t(z,qA),Qe&&va(z,ne),JA;if(qA===null){for(;!ve.done;ne++,ve=Z.next())ve=yA(z,ve.value,bA),ve!==null&&(O=c(ve,O,ne),he===null?JA=ve:he.sibling=ve,he=ve);return Qe&&va(z,ne),JA}for(qA=a(qA);!ve.done;ne++,ve=Z.next())ve=eA(qA,z,ne,ve.value,bA),ve!==null&&(A&&ve.alternate!==null&&qA.delete(ve.key===null?ne:ve.key),O=c(ve,O,ne),he===null?JA=ve:he.sibling=ve,he=ve);return A&&qA.forEach(function(CB){return e(z,CB)}),Qe&&va(z,ne),JA}function Ne(z,O,Z,bA){if(typeof Z=="object"&&Z!==null&&Z.type===P&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:A:{for(var JA=Z.key;O!==null;){if(O.key===JA){if(JA=Z.type,JA===P){if(O.tag===7){t(z,O.sibling),bA=l(O,Z.props.children),bA.return=z,z=bA;break A}}else if(O.elementType===JA||typeof JA=="object"&&JA!==null&&JA.$$typeof===_&&rh(JA)===O.type){t(z,O.sibling),bA=l(O,Z.props),di(bA,Z),bA.return=z,z=bA;break A}t(z,O);break}else e(z,O);O=O.sibling}Z.type===P?(bA=wa(Z.props.children,z.mode,bA,Z.key),bA.return=z,z=bA):(bA=xo(Z.type,Z.key,Z.props,null,z.mode,bA),di(bA,Z),bA.return=z,z=bA)}return p(z);case aA:A:{for(JA=Z.key;O!==null;){if(O.key===JA)if(O.tag===4&&O.stateNode.containerInfo===Z.containerInfo&&O.stateNode.implementation===Z.implementation){t(z,O.sibling),bA=l(O,Z.children||[]),bA.return=z,z=bA;break A}else{t(z,O);break}else e(z,O);O=O.sibling}bA=Hl(Z,z.mode,bA),bA.return=z,z=bA}return p(z);case _:return JA=Z._init,Z=JA(Z._payload),Ne(z,O,Z,bA)}if(LA(Z))return ae(z,O,Z,bA);if(sA(Z)){if(JA=sA(Z),typeof JA!="function")throw Error(o(150));return Z=JA.call(Z),te(z,O,Z,bA)}if(typeof Z.then=="function")return Ne(z,O,Mo(Z),bA);if(Z.$$typeof===TA)return Ne(z,O,wo(z,Z),bA);Do(z,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,O!==null&&O.tag===6?(t(z,O.sibling),bA=l(O,Z),bA.return=z,z=bA):(t(z,O),bA=Sl(Z,z.mode,bA),bA.return=z,z=bA),p(z)):t(z,O)}return function(z,O,Z,bA){try{ci=0;var JA=Ne(z,O,Z,bA);return or=null,JA}catch(qA){if(qA===ei||qA===vo)throw qA;var he=St(29,qA,null,z.mode);return he.lanes=bA,he.return=z,he}finally{}}}var sr=ih(!0),oh=ih(!1),Gt=V(null),an=null;function Vn(A){var e=A.alternate;rA(rt,rt.current&1),rA(Gt,A),an===null&&(e===null||nr.current!==null||e.memoizedState!==null)&&(an=A)}function sh(A){if(A.tag===22){if(rA(rt,rt.current),rA(Gt,A),an===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(an=A)}}else Yn()}function Yn(){rA(rt,rt.current),rA(Gt,Gt.current)}function Cn(A){hA(Gt),an===A&&(an=null),hA(rt)}var rt=V(0);function To(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Pc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function cc(A,e,t,a){e=A.memoizedState,t=t(a,e),t=t==null?e:v({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var dc={enqueueSetState:function(A,e,t){A=A._reactInternals;var a=Mt(),l=zn(a);l.payload=e,t!=null&&(l.callback=t),e=_n(A,l,a),e!==null&&(Dt(e,A,a),ni(e,A,a))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var a=Mt(),l=zn(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=_n(A,l,a),e!==null&&(Dt(e,A,a),ni(e,A,a))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=Mt(),a=zn(t);a.tag=2,e!=null&&(a.callback=e),e=_n(A,a,t),e!==null&&(Dt(e,A,t),ni(e,A,t))}};function lh(A,e,t,a,l,c,p){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(a,c,p):e.prototype&&e.prototype.isPureReactComponent?!Xr(t,a)||!Xr(l,c):!0}function ch(A,e,t,a){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==A&&dc.enqueueReplaceState(e,e.state,null)}function Sa(A,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(A=A.defaultProps){t===e&&(t=v({},t));for(var l in A)t[l]===void 0&&(t[l]=A[l])}return t}var Io=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function dh(A){Io(A)}function uh(A){console.error(A)}function fh(A){Io(A)}function Lo(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hh(A,e,t){try{var a=A.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function uc(A,e,t){return t=zn(t),t.tag=3,t.payload={element:null},t.callback=function(){Lo(A,e)},t}function gh(A){return A=zn(A),A.tag=3,A}function ph(A,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;A.payload=function(){return l(c)},A.callback=function(){hh(e,t,a)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(A.callback=function(){hh(e,t,a),typeof l!="function"&&($n===null?$n=new Set([this]):$n.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function Cm(A,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&$r(e,t,l,!0),t=Gt.current,t!==null){switch(t.tag){case 13:return an===null?Tc():t.alternate===null&&qe===0&&(qe=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Rl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),Lc(A,a,l)),!1;case 22:return t.flags|=65536,a===Rl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),Lc(A,a,l)),!1}throw Error(o(435,t.tag))}return Lc(A,a,l),Tc(),!1}if(Qe)return e=Gt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Ml&&(A=Error(o(422),{cause:a}),Wr(Kt(A,t)))):(a!==Ml&&(e=Error(o(423),{cause:a}),Wr(Kt(e,t))),A=A.current.alternate,A.flags|=65536,l&=-l,A.lanes|=l,a=Kt(a,t),l=uc(A.stateNode,a,l),Gl(A,l),qe!==4&&(qe=2)),!1;var c=Error(o(520),{cause:a});if(c=Kt(c,t),mi===null?mi=[c]:mi.push(c),qe!==4&&(qe=2),e===null)return!0;a=Kt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=l&-l,t.lanes|=A,A=uc(t.stateNode,a,A),Gl(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&($n===null||!$n.has(c))))return t.flags|=65536,l&=-l,t.lanes|=l,l=gh(l),ph(l,A,t,a),Gl(t,l),!1}t=t.return}while(t!==null);return!1}var xh=Error(o(461)),ot=!1;function dt(A,e,t,a){e.child=A===null?oh(e,null,t,a):sr(e,A.child,t,a)}function mh(A,e,t,a,l){t=t.render;var c=e.ref;if("ref"in a){var p={};for(var w in a)w!=="ref"&&(p[w]=a[w])}else p=a;return Ea(e),a=Zl(A,e,t,p,c,l),w=ql(),A!==null&&!ot?(Wl(A,e,l),Qn(A,e,l)):(Qe&&w&&Nl(e),e.flags|=1,dt(A,e,a,l),e.child)}function Bh(A,e,t,a,l){if(A===null){var c=t.type;return typeof c=="function"&&!jl(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,bh(A,e,c,a,l)):(A=xo(t.type,null,a,e,e.mode,l),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!bc(A,l)){var p=c.memoizedProps;if(t=t.compare,t=t!==null?t:Xr,t(p,a)&&A.ref===e.ref)return Qn(A,e,l)}return e.flags|=1,A=mn(c,a),A.ref=e.ref,A.return=e,e.child=A}function bh(A,e,t,a,l){if(A!==null){var c=A.memoizedProps;if(Xr(c,a)&&A.ref===e.ref)if(ot=!1,e.pendingProps=a=c,bc(A,l))(A.flags&131072)!==0&&(ot=!0);else return e.lanes=A.lanes,Qn(A,e,l)}return fc(A,e,t,a,l)}function wh(A,e,t){var a=e.pendingProps,l=a.children,c=A!==null?A.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,A!==null){for(l=e.child=A.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return yh(A,e,a,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&yo(e,c!==null?c.cachePool:null),c!==null?bf(e,c):Yl(),sh(e);else return e.lanes=e.childLanes=536870912,yh(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(yo(e,c.cachePool),bf(e,c),Yn(),e.memoizedState=null):(A!==null&&yo(e,null),Yl(),Yn());return dt(A,e,l,t),e.child}function yh(A,e,t,a){var l=Kl();return l=l===null?null:{parent:at._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},A!==null&&yo(e,null),Yl(),sh(e),A!==null&&$r(A,e,a,!0),null}function Oo(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function fc(A,e,t,a,l){return Ea(e),t=Zl(A,e,t,a,void 0,l),a=ql(),A!==null&&!ot?(Wl(A,e,l),Qn(A,e,l)):(Qe&&a&&Nl(e),e.flags|=1,dt(A,e,t,l),e.child)}function vh(A,e,t,a,l,c){return Ea(e),e.updateQueue=null,t=yf(e,a,t,l),wf(A),a=ql(),A!==null&&!ot?(Wl(A,e,c),Qn(A,e,c)):(Qe&&a&&Nl(e),e.flags|=1,dt(A,e,t,c),e.child)}function Ch(A,e,t,a,l){if(Ea(e),e.stateNode===null){var c=$a,p=t.contextType;typeof p=="object"&&p!==null&&(c=mt(p)),c=new t(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=dc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},zl(e),p=t.contextType,c.context=typeof p=="object"&&p!==null?mt(p):$a,c.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(cc(e,t,p,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&dc.enqueueReplaceState(c,c.state,null),ri(e,a,c,l),ai(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(A===null){c=e.stateNode;var w=e.memoizedProps,N=Sa(t,w);c.props=N;var W=c.context,mA=t.contextType;p=$a,typeof mA=="object"&&mA!==null&&(p=mt(mA));var yA=t.getDerivedStateFromProps;mA=typeof yA=="function"||typeof c.getSnapshotBeforeUpdate=="function",w=e.pendingProps!==w,mA||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w||W!==p)&&ch(e,c,a,p),Rn=!1;var AA=e.memoizedState;c.state=AA,ri(e,a,c,l),ai(),W=e.memoizedState,w||AA!==W||Rn?(typeof yA=="function"&&(cc(e,t,yA,a),W=e.memoizedState),(N=Rn||lh(e,t,N,a,AA,W,p))?(mA||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=W),c.props=a,c.state=W,c.context=p,a=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,_l(A,e),p=e.memoizedProps,mA=Sa(t,p),c.props=mA,yA=e.pendingProps,AA=c.context,W=t.contextType,N=$a,typeof W=="object"&&W!==null&&(N=mt(W)),w=t.getDerivedStateFromProps,(W=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==yA||AA!==N)&&ch(e,c,a,N),Rn=!1,AA=e.memoizedState,c.state=AA,ri(e,a,c,l),ai();var eA=e.memoizedState;p!==yA||AA!==eA||Rn||A!==null&&A.dependencies!==null&&bo(A.dependencies)?(typeof w=="function"&&(cc(e,t,w,a),eA=e.memoizedState),(mA=Rn||lh(e,t,mA,a,AA,eA,N)||A!==null&&A.dependencies!==null&&bo(A.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,eA,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,eA,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&AA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&AA===A.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=eA),c.props=a,c.state=eA,c.context=N,a=mA):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&AA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&AA===A.memoizedState||(e.flags|=1024),a=!1)}return c=a,Oo(A,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&a?(e.child=sr(e,A.child,null,l),e.child=sr(e,null,t,l)):dt(A,e,t,l),e.memoizedState=c.state,A=e.child):A=Qn(A,e,l),A}function Qh(A,e,t,a){return qr(),e.flags|=256,dt(A,e,t,a),e.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(A){return{baseLanes:A,cachePool:uf()}}function pc(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=Vt),A}function Uh(A,e,t){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=A!==null&&A.memoizedState===null?!1:(rt.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,A===null){if(Qe){if(l?Vn(e):Yn(),Qe){var w=Ze,N;if(N=w){A:{for(N=w,w=nn;N.nodeType!==8;){if(!w){w=null;break A}if(N=Pt(N.nextSibling),N===null){w=null;break A}}w=N}w!==null?(e.memoizedState={dehydrated:w,treeContext:ya!==null?{id:Bn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},N=St(18,null,null,0),N.stateNode=w,N.return=e,e.child=N,yt=e,Ze=null,N=!0):N=!1}N||Qa(e)}if(w=e.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Pc(w)?e.lanes=32:e.lanes=536870912,null;Cn(e)}return w=a.children,a=a.fallback,l?(Yn(),l=e.mode,w=Ko({mode:"hidden",children:w},l),a=wa(a,l,t,null),w.return=e,a.return=e,w.sibling=a,e.child=w,l=e.child,l.memoizedState=gc(t),l.childLanes=pc(A,p,t),e.memoizedState=hc,a):(Vn(e),xc(e,w))}if(N=A.memoizedState,N!==null&&(w=N.dehydrated,w!==null)){if(c)e.flags&256?(Vn(e),e.flags&=-257,e=mc(A,e,t)):e.memoizedState!==null?(Yn(),e.child=A.child,e.flags|=128,e=null):(Yn(),l=a.fallback,w=e.mode,a=Ko({mode:"visible",children:a.children},w),l=wa(l,w,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,sr(e,A.child,null,t),a=e.child,a.memoizedState=gc(t),a.childLanes=pc(A,p,t),e.memoizedState=hc,e=l);else if(Vn(e),Pc(w)){if(p=w.nextSibling&&w.nextSibling.dataset,p)var W=p.dgst;p=W,a=Error(o(419)),a.stack="",a.digest=p,Wr({value:a,source:null,stack:null}),e=mc(A,e,t)}else if(ot||$r(A,e,t,!1),p=(t&A.childLanes)!==0,ot||p){if(p=Ie,p!==null&&(a=t&-t,a=(a&42)!==0?1:g(a),a=(a&(p.suspendedLanes|t))!==0?0:a,a!==0&&a!==N.retryLane))throw N.retryLane=a,Wa(A,a),Dt(p,A,a),xh;w.data==="$?"||Tc(),e=mc(A,e,t)}else w.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=N.treeContext,Ze=Pt(w.nextSibling),yt=e,Qe=!0,Ca=null,nn=!1,A!==null&&(zt[_t++]=Bn,zt[_t++]=bn,zt[_t++]=ya,Bn=A.id,bn=A.overflow,ya=e),e=xc(e,a.children),e.flags|=4096);return e}return l?(Yn(),l=a.fallback,w=e.mode,N=A.child,W=N.sibling,a=mn(N,{mode:"hidden",children:a.children}),a.subtreeFlags=N.subtreeFlags&65011712,W!==null?l=mn(W,l):(l=wa(l,w,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,w=A.child.memoizedState,w===null?w=gc(t):(N=w.cachePool,N!==null?(W=at._currentValue,N=N.parent!==W?{parent:W,pool:W}:N):N=uf(),w={baseLanes:w.baseLanes|t,cachePool:N}),l.memoizedState=w,l.childLanes=pc(A,p,t),e.memoizedState=hc,a):(Vn(e),t=A.child,A=t.sibling,t=mn(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,A!==null&&(p=e.deletions,p===null?(e.deletions=[A],e.flags|=16):p.push(A)),e.child=t,e.memoizedState=null,t)}function xc(A,e){return e=Ko({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function Ko(A,e){return A=St(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function mc(A,e,t){return sr(e,A.child,null,t),A=xc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function Eh(A,e,t){A.lanes|=e;var a=A.alternate;a!==null&&(a.lanes|=e),Tl(A.return,e,t)}function Bc(A,e,t,a,l){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l)}function Fh(A,e,t){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(dt(A,e,a.children,t),a=rt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&Eh(A,t,e);else if(A.tag===19)Eh(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}a&=1}switch(rA(rt,a),l){case"forwards":for(t=e.child,l=null;t!==null;)A=t.alternate,A!==null&&To(A)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Bc(e,!1,l,t,c);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(A=l.alternate,A!==null&&To(A)===null){e.child=l;break}A=l.sibling,l.sibling=t,t=l,l=A}Bc(e,!0,t,null,c);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qn(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Wn|=e.lanes,(t&e.childLanes)===0)if(A!==null){if($r(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(o(153));if(e.child!==null){for(A=e.child,t=mn(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=mn(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function bc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&bo(A)))}function Qm(A,e,t){switch(e.tag){case 3:FA(e,e.stateNode.containerInfo),Kn(e,at,A.memoizedState.cache),qr();break;case 27:case 5:I(e);break;case 4:FA(e,e.stateNode.containerInfo);break;case 10:Kn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Vn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Uh(A,e,t):(Vn(e),A=Qn(A,e,t),A!==null?A.sibling:null);Vn(e);break;case 19:var l=(A.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||($r(A,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return Fh(A,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),rA(rt,rt.current),a)break;return null;case 22:case 23:return e.lanes=0,wh(A,e,t);case 24:Kn(e,at,A.memoizedState.cache)}return Qn(A,e,t)}function jh(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)ot=!0;else{if(!bc(A,t)&&(e.flags&128)===0)return ot=!1,Qm(A,e,t);ot=(A.flags&131072)!==0}else ot=!1,Qe&&(e.flags&1048576)!==0&&af(e,Bo,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")jl(a)?(A=Sa(a,A),e.tag=1,e=Ch(null,e,a,A,t)):(e.tag=0,e=fc(null,e,a,A,t));else{if(a!=null){if(l=a.$$typeof,l===cA){e.tag=11,e=mh(null,e,a,A,t);break A}else if(l===SA){e.tag=14,e=Bh(null,e,a,A,t);break A}}throw e=_A(a)||a,Error(o(306,e,""))}}return e;case 0:return fc(A,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=Sa(a,e.pendingProps),Ch(A,e,a,l,t);case 3:A:{if(FA(e,e.stateNode.containerInfo),A===null)throw Error(o(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,_l(A,e),ri(e,a,null,t);var p=e.memoizedState;if(a=p.cache,Kn(e,at,a),a!==c.cache&&Il(e,[at],t,!0),ai(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Qh(A,e,a,t);break A}else if(a!==l){l=Kt(Error(o(424)),e),Wr(l),e=Qh(A,e,a,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(Ze=Pt(A.firstChild),yt=e,Qe=!0,Ca=null,nn=!0,t=oh(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(qr(),a===l){e=Qn(A,e,t);break A}dt(A,e,a,t)}e=e.child}return e;case 26:return Oo(A,e),A===null?(t=kg(e.type,null,e.pendingProps,null))?e.memoizedState=t:Qe||(t=e.type,A=e.pendingProps,a=As(T.current).createElement(t),a[E]=e,a[H]=A,ft(a,t,A),se(a),e.stateNode=a):e.memoizedState=kg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return I(e),A===null&&Qe&&(a=e.stateNode=Sg(e.type,e.pendingProps,T.current),yt=e,nn=!0,l=Ze,ea(e.type)?(Ad=l,Ze=Pt(a.firstChild)):Ze=l),dt(A,e,e.pendingProps.children,t),Oo(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&Qe&&((l=a=Ze)&&(a=Pm(a,e.type,e.pendingProps,nn),a!==null?(e.stateNode=a,yt=e,Ze=Pt(a.firstChild),nn=!1,l=!0):l=!1),l||Qa(e)),I(e),l=e.type,c=e.pendingProps,p=A!==null?A.memoizedProps:null,a=c.children,qc(l,c)?a=null:p!==null&&qc(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=Zl(A,e,xm,null,null,t),Ei._currentValue=l),Oo(A,e),dt(A,e,a,t),e.child;case 6:return A===null&&Qe&&((A=t=Ze)&&(t=AB(t,e.pendingProps,nn),t!==null?(e.stateNode=t,yt=e,Ze=null,A=!0):A=!1),A||Qa(e)),null;case 13:return Uh(A,e,t);case 4:return FA(e,e.stateNode.containerInfo),a=e.pendingProps,A===null?e.child=sr(e,null,a,t):dt(A,e,a,t),e.child;case 11:return mh(A,e,e.type,e.pendingProps,t);case 7:return dt(A,e,e.pendingProps,t),e.child;case 8:return dt(A,e,e.pendingProps.children,t),e.child;case 12:return dt(A,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,Kn(e,e.type,a.value),dt(A,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Ea(e),l=mt(l),a=a(l),e.flags|=1,dt(A,e,a,t),e.child;case 14:return Bh(A,e,e.type,e.pendingProps,t);case 15:return bh(A,e,e.type,e.pendingProps,t);case 19:return Fh(A,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},A===null?(t=Ko(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=mn(A.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return wh(A,e,t);case 24:return Ea(e),a=mt(at),A===null?(l=Kl(),l===null&&(l=Ie,c=Ll(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=t),l=c),e.memoizedState={parent:a,cache:l},zl(e),Kn(e,at,l)):((A.lanes&t)!==0&&(_l(A,e),ri(e,null,null,t),ai()),l=A.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Kn(e,at,a)):(a=c.cache,Kn(e,at,a),a!==l.cache&&Il(e,[at],t,!0))),dt(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Un(A){A.flags|=4}function Sh(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Lg(e)){if(e=Gt.current,e!==null&&((we&4194048)===we?an!==null:(we&62914560)!==we&&(we&536870912)===0||e!==an))throw ti=Rl,ff;A.flags|=8192}}function Ro(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?fe():536870912,A.lanes|=e,ur|=e)}function ui(A,e){if(!Qe)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:a.sibling=null}}function Ye(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,a=0;if(e)for(var l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=A,l=l.sibling;else for(l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=A,l=l.sibling;return A.subtreeFlags|=a,A.childLanes=t,e}function Um(A,e,t){var a=e.pendingProps;switch(kl(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return Ye(e),null;case 3:return t=e.stateNode,a=null,A!==null&&(a=A.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),yn(at),fA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Zr(e)?Un(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sf())),Ye(e),null;case 26:return t=e.memoizedState,A===null?(Un(e),t!==null?(Ye(e),Sh(e,t)):(Ye(e),e.flags&=-16777217)):t?t!==A.memoizedState?(Un(e),Ye(e),Sh(e,t)):(Ye(e),e.flags&=-16777217):(A.memoizedProps!==a&&Un(e),Ye(e),e.flags&=-16777217),null;case 27:q(e),t=T.current;var l=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Un(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ye(e),null}A=UA.current,Zr(e)?rf(e):(A=Sg(l,a,t),e.stateNode=A,Un(e))}return Ye(e),null;case 5:if(q(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Un(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ye(e),null}if(A=UA.current,Zr(e))rf(e);else{switch(l=As(T.current),A){case 1:A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=l.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?A.multiple=!0:a.size&&(A.size=a.size);break;default:A=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}A[E]=e,A[H]=a;A:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)A.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break A;for(;l.sibling===null;){if(l.return===null||l.return===e)break A;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=A;A:switch(ft(A,t,a),t){case"button":case"input":case"select":case"textarea":A=!!a.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&Un(e)}}return Ye(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==a&&Un(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(A=T.current,Zr(e)){if(A=e.stateNode,t=e.memoizedProps,a=null,l=yt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}A[E]=e,A=!!(A.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||vg(A.nodeValue,t)),A||Qa(e)}else A=As(A).createTextNode(a),A[E]=e,e.stateNode=A}return Ye(e),null;case 13:if(a=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(l=Zr(e),a!==null&&a.dehydrated!==null){if(A===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[E]=e}else qr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ye(e),l=!1}else l=sf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Cn(e),e):(Cn(e),null)}if(Cn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=a!==null,A=A!==null&&A.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),Ro(e,e.updateQueue),Ye(e),null;case 4:return fA(),A===null&&Vc(e.stateNode.containerInfo),Ye(e),null;case 10:return yn(e.type),Ye(e),null;case 19:if(hA(rt),l=e.memoizedState,l===null)return Ye(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)ui(l,!1);else{if(qe!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=To(A),c!==null){for(e.flags|=128,ui(l,!1),A=c.updateQueue,e.updateQueue=A,Ro(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)nf(t,A),t=t.sibling;return rA(rt,rt.current&1|2),e.child}A=A.sibling}l.tail!==null&&PA()>Go&&(e.flags|=128,a=!0,ui(l,!1),e.lanes=4194304)}else{if(!a)if(A=To(c),A!==null){if(e.flags|=128,a=!0,A=A.updateQueue,e.updateQueue=A,Ro(e,A),ui(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Qe)return Ye(e),null}else 2*PA()-l.renderingStartTime>Go&&t!==536870912&&(e.flags|=128,a=!0,ui(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(A=l.last,A!==null?A.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=PA(),e.sibling=null,A=rt.current,rA(rt,a?A&1|2:A&1),e):(Ye(e),null);case 22:case 23:return Cn(e),Xl(),a=e.memoizedState!==null,A!==null?A.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),t=e.updateQueue,t!==null&&Ro(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),A!==null&&hA(Fa),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),yn(at),Ye(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Em(A,e){switch(kl(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return yn(at),fA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return q(e),null;case 13:if(Cn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(o(340));qr()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return hA(rt),null;case 4:return fA(),null;case 10:return yn(e.type),null;case 22:case 23:return Cn(e),Xl(),A!==null&&hA(Fa),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return yn(at),null;case 25:return null;default:return null}}function Hh(A,e){switch(kl(e),e.tag){case 3:yn(at),fA();break;case 26:case 27:case 5:q(e);break;case 4:fA();break;case 13:Cn(e);break;case 19:hA(rt);break;case 10:yn(e.type);break;case 22:case 23:Cn(e),Xl(),A!==null&&hA(Fa);break;case 24:yn(at)}}function fi(A,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&A)===A){a=void 0;var c=t.create,p=t.inst;a=c(),p.destroy=a}t=t.next}while(t!==l)}}catch(w){Me(e,e.return,w)}}function Xn(A,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&A)===A){var p=a.inst,w=p.destroy;if(w!==void 0){p.destroy=void 0,l=e;var N=t,W=w;try{W()}catch(mA){Me(l,N,mA)}}}a=a.next}while(a!==c)}}catch(mA){Me(e,e.return,mA)}}function Nh(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{Bf(e,t)}catch(a){Me(A,A.return,a)}}}function kh(A,e,t){t.props=Sa(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(a){Me(A,e,a)}}function hi(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var a=A.stateNode;break;case 30:a=A.stateNode;break;default:a=A.stateNode}typeof t=="function"?A.refCleanup=t(a):t.current=a}}catch(l){Me(A,e,l)}}function rn(A,e){var t=A.ref,a=A.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Me(A,e,l)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Me(A,e,l)}else t.current=null}function Mh(A){var e=A.type,t=A.memoizedProps,a=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break A;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Me(A,A.return,l)}}function wc(A,e,t){try{var a=A.stateNode;Jm(a,A.type,t,e),a[H]=e}catch(l){Me(A,A.return,l)}}function Dh(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&ea(A.type)||A.tag===4}function yc(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Dh(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&ea(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function vc(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Po));else if(a!==4&&(a===27&&ea(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(vc(A,e,t),A=A.sibling;A!==null;)vc(A,e,t),A=A.sibling}function zo(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(a!==4&&(a===27&&ea(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(zo(A,e,t),A=A.sibling;A!==null;)zo(A,e,t),A=A.sibling}function Th(A){var e=A.stateNode,t=A.memoizedProps;try{for(var a=A.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ft(e,a,t),e[E]=A,e[H]=t}catch(c){Me(A,A.return,c)}}var En=!1,$e=!1,Cc=!1,Ih=typeof WeakSet=="function"?WeakSet:Set,st=null;function Fm(A,e){if(A=A.containerInfo,Jc=is,A=Xu(A),yl(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var p=0,w=-1,N=-1,W=0,mA=0,yA=A,AA=null;e:for(;;){for(var eA;yA!==t||l!==0&&yA.nodeType!==3||(w=p+l),yA!==c||a!==0&&yA.nodeType!==3||(N=p+a),yA.nodeType===3&&(p+=yA.nodeValue.length),(eA=yA.firstChild)!==null;)AA=yA,yA=eA;for(;;){if(yA===A)break e;if(AA===t&&++W===l&&(w=p),AA===c&&++mA===a&&(N=p),(eA=yA.nextSibling)!==null)break;yA=AA,AA=yA.parentNode}yA=eA}t=w===-1||N===-1?null:{start:w,end:N}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zc={focusedElem:A,selectionRange:t},is=!1,st=e;st!==null;)if(e=st,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,st=A;else for(;st!==null;){switch(e=st,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,l=c.memoizedProps,c=c.memoizedState,a=t.stateNode;try{var ae=Sa(t.type,l,t.elementType===t.type);A=a.getSnapshotBeforeUpdate(ae,c),a.__reactInternalSnapshotBeforeUpdate=A}catch(te){Me(t,t.return,te)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)$c(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":$c(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(o(163))}if(A=e.sibling,A!==null){A.return=e.return,st=A;break}st=e.return}}function Lh(A,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Jn(A,t),a&4&&fi(5,t);break;case 1:if(Jn(A,t),a&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(p){Me(t,t.return,p)}else{var l=Sa(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(l,e,A.__reactInternalSnapshotBeforeUpdate)}catch(p){Me(t,t.return,p)}}a&64&&Nh(t),a&512&&hi(t,t.return);break;case 3:if(Jn(A,t),a&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Bf(A,e)}catch(p){Me(t,t.return,p)}}break;case 27:e===null&&a&4&&Th(t);case 26:case 5:Jn(A,t),e===null&&a&4&&Mh(t),a&512&&hi(t,t.return);break;case 12:Jn(A,t);break;case 13:Jn(A,t),a&4&&Rh(A,t),a&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Im.bind(null,t),eB(A,t))));break;case 22:if(a=t.memoizedState!==null||En,!a){e=e!==null&&e.memoizedState!==null||$e,l=En;var c=$e;En=a,($e=e)&&!c?Zn(A,t,(t.subtreeFlags&8772)!==0):Jn(A,t),En=l,$e=c}break;case 30:break;default:Jn(A,t)}}function Oh(A){var e=A.alternate;e!==null&&(A.alternate=null,Oh(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&X(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var _e=null,Ut=!1;function Fn(A,e,t){for(t=t.child;t!==null;)Kh(A,e,t),t=t.sibling}function Kh(A,e,t){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(me,t)}catch{}switch(t.tag){case 26:$e||rn(t,e),Fn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:$e||rn(t,e);var a=_e,l=Ut;ea(t.type)&&(_e=t.stateNode,Ut=!1),Fn(A,e,t),vi(t.stateNode),_e=a,Ut=l;break;case 5:$e||rn(t,e);case 6:if(a=_e,l=Ut,_e=null,Fn(A,e,t),_e=a,Ut=l,_e!==null)if(Ut)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(t.stateNode)}catch(c){Me(t,e,c)}else try{_e.removeChild(t.stateNode)}catch(c){Me(t,e,c)}break;case 18:_e!==null&&(Ut?(A=_e,Fg(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),Hi(A)):Fg(_e,t.stateNode));break;case 4:a=_e,l=Ut,_e=t.stateNode.containerInfo,Ut=!0,Fn(A,e,t),_e=a,Ut=l;break;case 0:case 11:case 14:case 15:$e||Xn(2,t,e),$e||Xn(4,t,e),Fn(A,e,t);break;case 1:$e||(rn(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&kh(t,e,a)),Fn(A,e,t);break;case 21:Fn(A,e,t);break;case 22:$e=(a=$e)||t.memoizedState!==null,Fn(A,e,t),$e=a;break;default:Fn(A,e,t)}}function Rh(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{Hi(A)}catch(t){Me(e,e.return,t)}}function jm(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Ih),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Ih),e;default:throw Error(o(435,A.tag))}}function Qc(A,e){var t=jm(A);e.forEach(function(a){var l=Lm.bind(null,A,a);t.has(a)||(t.add(a),a.then(l,l))})}function Ht(A,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],c=A,p=e,w=p;A:for(;w!==null;){switch(w.tag){case 27:if(ea(w.type)){_e=w.stateNode,Ut=!1;break A}break;case 5:_e=w.stateNode,Ut=!1;break A;case 3:case 4:_e=w.stateNode.containerInfo,Ut=!0;break A}w=w.return}if(_e===null)throw Error(o(160));Kh(c,p,l),_e=null,Ut=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)zh(e,A),e=e.sibling}var $t=null;function zh(A,e){var t=A.alternate,a=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:Ht(e,A),Nt(A),a&4&&(Xn(3,A,A.return),fi(3,A),Xn(5,A,A.return));break;case 1:Ht(e,A),Nt(A),a&512&&($e||t===null||rn(t,t.return)),a&64&&En&&(A=A.updateQueue,A!==null&&(a=A.callbacks,a!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=$t;if(Ht(e,A),Nt(A),a&512&&($e||t===null||rn(t,t.return)),a&4){var c=t!==null?t.memoizedState:null;if(a=A.memoizedState,t===null)if(a===null)if(A.stateNode===null){A:{a=A.type,t=A.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[k]||c[E]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),ft(c,a,t),c[E]=A,se(c),a=c;break A;case"link":var p=Tg("link","href",l).get(a+(t.href||""));if(p){for(var w=0;w<p.length;w++)if(c=p[w],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(w,1);break e}}c=l.createElement(a),ft(c,a,t),l.head.appendChild(c);break;case"meta":if(p=Tg("meta","content",l).get(a+(t.content||""))){for(w=0;w<p.length;w++)if(c=p[w],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(w,1);break e}}c=l.createElement(a),ft(c,a,t),l.head.appendChild(c);break;default:throw Error(o(468,a))}c[E]=A,se(c),a=c}A.stateNode=a}else Ig(l,A.type,A.stateNode);else A.stateNode=Dg(l,a,A.memoizedProps);else c!==a?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,a===null?Ig(l,A.type,A.stateNode):Dg(l,a,A.memoizedProps)):a===null&&A.stateNode!==null&&wc(A,A.memoizedProps,t.memoizedProps)}break;case 27:Ht(e,A),Nt(A),a&512&&($e||t===null||rn(t,t.return)),t!==null&&a&4&&wc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(Ht(e,A),Nt(A),a&512&&($e||t===null||rn(t,t.return)),A.flags&32){l=A.stateNode;try{Ga(l,"")}catch(eA){Me(A,A.return,eA)}}a&4&&A.stateNode!=null&&(l=A.memoizedProps,wc(A,l,t!==null?t.memoizedProps:l)),a&1024&&(Cc=!0);break;case 6:if(Ht(e,A),Nt(A),a&4){if(A.stateNode===null)throw Error(o(162));a=A.memoizedProps,t=A.stateNode;try{t.nodeValue=a}catch(eA){Me(A,A.return,eA)}}break;case 3:if(ns=null,l=$t,$t=es(e.containerInfo),Ht(e,A),$t=l,Nt(A),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(eA){Me(A,A.return,eA)}Cc&&(Cc=!1,_h(A));break;case 4:a=$t,$t=es(A.stateNode.containerInfo),Ht(e,A),Nt(A),$t=a;break;case 12:Ht(e,A),Nt(A);break;case 13:Ht(e,A),Nt(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Hc=PA()),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Qc(A,a)));break;case 22:l=A.memoizedState!==null;var N=t!==null&&t.memoizedState!==null,W=En,mA=$e;if(En=W||l,$e=mA||N,Ht(e,A),$e=mA,En=W,Nt(A),a&8192)A:for(e=A.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||N||En||$e||Ha(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){N=t=e;try{if(c=N.stateNode,l)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{w=N.stateNode;var yA=N.memoizedProps.style,AA=yA!=null&&yA.hasOwnProperty("display")?yA.display:null;w.style.display=AA==null||typeof AA=="boolean"?"":(""+AA).trim()}}catch(eA){Me(N,N.return,eA)}}}else if(e.tag===6){if(t===null){N=e;try{N.stateNode.nodeValue=l?"":N.memoizedProps}catch(eA){Me(N,N.return,eA)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=A.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Qc(A,t))));break;case 19:Ht(e,A),Nt(A),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Qc(A,a)));break;case 30:break;case 21:break;default:Ht(e,A),Nt(A)}}function Nt(A){var e=A.flags;if(e&2){try{for(var t,a=A.return;a!==null;){if(Dh(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,c=yc(A);zo(A,c,l);break;case 5:var p=t.stateNode;t.flags&32&&(Ga(p,""),t.flags&=-33);var w=yc(A);zo(A,w,p);break;case 3:case 4:var N=t.stateNode.containerInfo,W=yc(A);vc(A,W,N);break;default:throw Error(o(161))}}catch(mA){Me(A,A.return,mA)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function _h(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;_h(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function Jn(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lh(A,e.alternate,e),e=e.sibling}function Ha(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Xn(4,e,e.return),Ha(e);break;case 1:rn(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&kh(e,e.return,t),Ha(e);break;case 27:vi(e.stateNode);case 26:case 5:rn(e,e.return),Ha(e);break;case 22:e.memoizedState===null&&Ha(e);break;case 30:Ha(e);break;default:Ha(e)}A=A.sibling}}function Zn(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=A,c=e,p=c.flags;switch(c.tag){case 0:case 11:case 15:Zn(l,c,t),fi(4,c);break;case 1:if(Zn(l,c,t),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(W){Me(a,a.return,W)}if(a=c,l=a.updateQueue,l!==null){var w=a.stateNode;try{var N=l.shared.hiddenCallbacks;if(N!==null)for(l.shared.hiddenCallbacks=null,l=0;l<N.length;l++)mf(N[l],w)}catch(W){Me(a,a.return,W)}}t&&p&64&&Nh(c),hi(c,c.return);break;case 27:Th(c);case 26:case 5:Zn(l,c,t),t&&a===null&&p&4&&Mh(c),hi(c,c.return);break;case 12:Zn(l,c,t);break;case 13:Zn(l,c,t),t&&p&4&&Rh(l,c);break;case 22:c.memoizedState===null&&Zn(l,c,t),hi(c,c.return);break;case 30:break;default:Zn(l,c,t)}e=e.sibling}}function Uc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&Pr(t))}function Ec(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Pr(A))}function on(A,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(A,e,t,a),e=e.sibling}function Gh(A,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:on(A,e,t,a),l&2048&&fi(9,e);break;case 1:on(A,e,t,a);break;case 3:on(A,e,t,a),l&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Pr(A)));break;case 12:if(l&2048){on(A,e,t,a),A=e.stateNode;try{var c=e.memoizedProps,p=c.id,w=c.onPostCommit;typeof w=="function"&&w(p,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(N){Me(e,e.return,N)}}else on(A,e,t,a);break;case 13:on(A,e,t,a);break;case 23:break;case 22:c=e.stateNode,p=e.alternate,e.memoizedState!==null?c._visibility&2?on(A,e,t,a):gi(A,e):c._visibility&2?on(A,e,t,a):(c._visibility|=2,lr(A,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&Uc(p,e);break;case 24:on(A,e,t,a),l&2048&&Ec(e.alternate,e);break;default:on(A,e,t,a)}}function lr(A,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,p=e,w=t,N=a,W=p.flags;switch(p.tag){case 0:case 11:case 15:lr(c,p,w,N,l),fi(8,p);break;case 23:break;case 22:var mA=p.stateNode;p.memoizedState!==null?mA._visibility&2?lr(c,p,w,N,l):gi(c,p):(mA._visibility|=2,lr(c,p,w,N,l)),l&&W&2048&&Uc(p.alternate,p);break;case 24:lr(c,p,w,N,l),l&&W&2048&&Ec(p.alternate,p);break;default:lr(c,p,w,N,l)}e=e.sibling}}function gi(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,a=e,l=a.flags;switch(a.tag){case 22:gi(t,a),l&2048&&Uc(a.alternate,a);break;case 24:gi(t,a),l&2048&&Ec(a.alternate,a);break;default:gi(t,a)}e=e.sibling}}var pi=8192;function cr(A){if(A.subtreeFlags&pi)for(A=A.child;A!==null;)Vh(A),A=A.sibling}function Vh(A){switch(A.tag){case 26:cr(A),A.flags&pi&&A.memoizedState!==null&&hB($t,A.memoizedState,A.memoizedProps);break;case 5:cr(A);break;case 3:case 4:var e=$t;$t=es(A.stateNode.containerInfo),cr(A),$t=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=pi,pi=16777216,cr(A),pi=e):cr(A));break;default:cr(A)}}function Yh(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function xi(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];st=a,Jh(a,A)}Yh(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Xh(A),A=A.sibling}function Xh(A){switch(A.tag){case 0:case 11:case 15:xi(A),A.flags&2048&&Xn(9,A,A.return);break;case 3:xi(A);break;case 12:xi(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,_o(A)):xi(A);break;default:xi(A)}}function _o(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];st=a,Jh(a,A)}Yh(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Xn(8,e,e.return),_o(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,_o(e));break;default:_o(e)}A=A.sibling}}function Jh(A,e){for(;st!==null;){var t=st;switch(t.tag){case 0:case 11:case 15:Xn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Pr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,st=a;else A:for(t=A;st!==null;){a=st;var l=a.sibling,c=a.return;if(Oh(a),a===t){st=null;break A}if(l!==null){l.return=c,st=l;break A}st=c}}}var Sm={getCacheForType:function(A){var e=mt(at),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ie=null,ge=null,we=0,je=0,kt=null,qn=!1,dr=!1,Fc=!1,jn=0,qe=0,Wn=0,Na=0,jc=0,Vt=0,ur=0,mi=null,Et=null,Sc=!1,Hc=0,Go=1/0,Vo=null,$n=null,ut=0,Pn=null,fr=null,hr=0,Nc=0,kc=null,Zh=null,Bi=0,Mc=null;function Mt(){if((Fe&2)!==0&&we!==0)return we&-we;if(G.T!==null){var A=er;return A!==0?A:Rc()}return f()}function qh(){Vt===0&&(Vt=(we&536870912)===0||Qe?XA():536870912);var A=Gt.current;return A!==null&&(A.flags|=32),Vt}function Dt(A,e,t){(A===Ie&&(je===2||je===9)||A.cancelPendingCommit!==null)&&(gr(A,0),Aa(A,we,Vt,!1)),ye(A,t),((Fe&2)===0||A!==Ie)&&(A===Ie&&((Fe&2)===0&&(Na|=t),qe===4&&Aa(A,we,Vt,!1)),sn(A))}function Wh(A,e,t){if((Fe&6)!==0)throw Error(o(327));var a=!t&&(e&124)===0&&(e&A.expiredLanes)===0||zA(A,e),l=a?Mm(A,e):Ic(A,e,!0),c=a;do{if(l===0){dr&&!a&&Aa(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Nm(t)){l=Ic(A,e,!1),c=!1;continue}if(l===2){if(c=e,A.errorRecoveryDisabledLanes&c)var p=0;else p=A.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;A:{var w=A;l=mi;var N=w.current.memoizedState.isDehydrated;if(N&&(gr(w,p).flags|=256),p=Ic(w,p,!1),p!==2){if(Fc&&!N){w.errorRecoveryDisabledLanes|=c,Na|=c,l=4;break A}c=Et,Et=l,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){gr(A,0),Aa(A,e,0,!0);break}A:{switch(a=A,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Aa(a,e,Vt,!qn);break A;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Hc+300-PA(),10<l)){if(Aa(a,e,Vt,!qn),NA(a,0,!0)!==0)break A;a.timeoutHandle=Ug($h.bind(null,a,t,Et,Vo,Sc,e,Vt,Na,ur,qn,c,2,-0,0),l);break A}$h(a,t,Et,Vo,Sc,e,Vt,Na,ur,qn,c,0,-0,0)}}break}while(!0);sn(A)}function $h(A,e,t,a,l,c,p,w,N,W,mA,yA,AA,eA){if(A.timeoutHandle=-1,yA=e.subtreeFlags,(yA&8192||(yA&16785408)===16785408)&&(Ui={stylesheets:null,count:0,unsuspend:fB},Vh(e),yA=gB(),yA!==null)){A.cancelPendingCommit=yA(rg.bind(null,A,e,c,t,a,l,p,w,N,mA,1,AA,eA)),Aa(A,c,p,!W);return}rg(A,e,c,t,a,l,p,w,N)}function Nm(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],c=l.getSnapshot;l=l.value;try{if(!jt(c(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Aa(A,e,t,a){e&=~jc,e&=~Na,A.suspendedLanes|=e,A.pingedLanes&=~e,a&&(A.warmLanes|=e),a=A.expirationTimes;for(var l=e;0<l;){var c=31-L(l),p=1<<c;a[c]=-1,l&=~p}t!==0&&De(A,t,e)}function Yo(){return(Fe&6)===0?(bi(0),!1):!0}function Dc(){if(ge!==null){if(je===0)var A=ge.return;else A=ge,wn=Ua=null,$l(A),or=null,ci=0,A=ge;for(;A!==null;)Hh(A.alternate,A),A=A.return;ge=null}}function gr(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,qm(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),Dc(),Ie=A,ge=t=mn(A.current,null),we=e,je=0,kt=null,qn=!1,dr=zA(A,e),Fc=!1,ur=Vt=jc=Na=Wn=qe=0,Et=mi=null,Sc=!1,(e&8)!==0&&(e|=e&32);var a=A.entangledLanes;if(a!==0)for(A=A.entanglements,a&=e;0<a;){var l=31-L(a),c=1<<l;e|=A[l],a&=~c}return jn=e,ho(),t}function Ph(A,e){ce=null,G.H=ko,e===ei||e===vo?(e=pf(),je=3):e===ff?(e=pf(),je=4):je=e===xh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,kt=e,ge===null&&(qe=1,Lo(A,Kt(e,A.current)))}function Ag(){var A=G.H;return G.H=ko,A===null?ko:A}function eg(){var A=G.A;return G.A=Sm,A}function Tc(){qe=4,qn||(we&4194048)!==we&&Gt.current!==null||(dr=!0),(Wn&134217727)===0&&(Na&134217727)===0||Ie===null||Aa(Ie,we,Vt,!1)}function Ic(A,e,t){var a=Fe;Fe|=2;var l=Ag(),c=eg();(Ie!==A||we!==e)&&(Vo=null,gr(A,e)),e=!1;var p=qe;A:do try{if(je!==0&&ge!==null){var w=ge,N=kt;switch(je){case 8:Dc(),p=6;break A;case 3:case 2:case 9:case 6:Gt.current===null&&(e=!0);var W=je;if(je=0,kt=null,pr(A,w,N,W),t&&dr){p=0;break A}break;default:W=je,je=0,kt=null,pr(A,w,N,W)}}km(),p=qe;break}catch(mA){Ph(A,mA)}while(!0);return e&&A.shellSuspendCounter++,wn=Ua=null,Fe=a,G.H=l,G.A=c,ge===null&&(Ie=null,we=0,ho()),p}function km(){for(;ge!==null;)tg(ge)}function Mm(A,e){var t=Fe;Fe|=2;var a=Ag(),l=eg();Ie!==A||we!==e?(Vo=null,Go=PA()+500,gr(A,e)):dr=zA(A,e);A:do try{if(je!==0&&ge!==null){e=ge;var c=kt;e:switch(je){case 1:je=0,kt=null,pr(A,e,c,1);break;case 2:case 9:if(hf(c)){je=0,kt=null,ng(e);break}e=function(){je!==2&&je!==9||Ie!==A||(je=7),sn(A)},c.then(e,e);break A;case 3:je=7;break A;case 4:je=5;break A;case 7:hf(c)?(je=0,kt=null,ng(e)):(je=0,kt=null,pr(A,e,c,7));break;case 5:var p=null;switch(ge.tag){case 26:p=ge.memoizedState;case 5:case 27:var w=ge;if(!p||Lg(p)){je=0,kt=null;var N=w.sibling;if(N!==null)ge=N;else{var W=w.return;W!==null?(ge=W,Xo(W)):ge=null}break e}}je=0,kt=null,pr(A,e,c,5);break;case 6:je=0,kt=null,pr(A,e,c,6);break;case 8:Dc(),qe=6;break A;default:throw Error(o(462))}}Dm();break}catch(mA){Ph(A,mA)}while(!0);return wn=Ua=null,G.H=a,G.A=l,Fe=t,ge!==null?0:(Ie=null,we=0,ho(),qe)}function Dm(){for(;ge!==null&&!YA();)tg(ge)}function tg(A){var e=jh(A.alternate,A,jn);A.memoizedProps=A.pendingProps,e===null?Xo(A):ge=e}function ng(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=vh(t,e,e.pendingProps,e.type,void 0,we);break;case 11:e=vh(t,e,e.pendingProps,e.type.render,e.ref,we);break;case 5:$l(e);default:Hh(t,e),e=ge=nf(e,jn),e=jh(t,e,jn)}A.memoizedProps=A.pendingProps,e===null?Xo(A):ge=e}function pr(A,e,t,a){wn=Ua=null,$l(e),or=null,ci=0;var l=e.return;try{if(Cm(A,l,e,t,we)){qe=1,Lo(A,Kt(t,A.current)),ge=null;return}}catch(c){if(l!==null)throw ge=l,c;qe=1,Lo(A,Kt(t,A.current)),ge=null;return}e.flags&32768?(Qe||a===1?A=!0:dr||(we&536870912)!==0?A=!1:(qn=A=!0,(a===2||a===9||a===3||a===6)&&(a=Gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ag(e,A)):Xo(e)}function Xo(A){var e=A;do{if((e.flags&32768)!==0){ag(e,qn);return}A=e.return;var t=Um(e.alternate,e,jn);if(t!==null){ge=t;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=A}while(e!==null);qe===0&&(qe=5)}function ag(A,e){do{var t=Em(A.alternate,A);if(t!==null){t.flags&=32767,ge=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){ge=A;return}ge=A=t}while(A!==null);qe=6,ge=null}function rg(A,e,t,a,l,c,p,w,N){A.cancelPendingCommit=null;do Jo();while(ut!==0);if((Fe&6)!==0)throw Error(o(327));if(e!==null){if(e===A.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=El,pt(A,t,c,p,w,N),A===Ie&&(ge=Ie=null,we=0),fr=e,Pn=A,hr=t,Nc=c,kc=l,Zh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,Om(ee,function(){return cg(),null})):(A.callbackNode=null,A.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=G.T,G.T=null,l=oA.p,oA.p=2,p=Fe,Fe|=4;try{Fm(A,e,t)}finally{Fe=p,oA.p=l,G.T=a}}ut=1,ig(),og(),sg()}}function ig(){if(ut===1){ut=0;var A=Pn,e=fr,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=G.T,G.T=null;var a=oA.p;oA.p=2;var l=Fe;Fe|=4;try{zh(e,A);var c=Zc,p=Xu(A.containerInfo),w=c.focusedElem,N=c.selectionRange;if(p!==w&&w&&w.ownerDocument&&Yu(w.ownerDocument.documentElement,w)){if(N!==null&&yl(w)){var W=N.start,mA=N.end;if(mA===void 0&&(mA=W),"selectionStart"in w)w.selectionStart=W,w.selectionEnd=Math.min(mA,w.value.length);else{var yA=w.ownerDocument||document,AA=yA&&yA.defaultView||window;if(AA.getSelection){var eA=AA.getSelection(),ae=w.textContent.length,te=Math.min(N.start,ae),Ne=N.end===void 0?te:Math.min(N.end,ae);!eA.extend&&te>Ne&&(p=Ne,Ne=te,te=p);var z=Vu(w,te),O=Vu(w,Ne);if(z&&O&&(eA.rangeCount!==1||eA.anchorNode!==z.node||eA.anchorOffset!==z.offset||eA.focusNode!==O.node||eA.focusOffset!==O.offset)){var Z=yA.createRange();Z.setStart(z.node,z.offset),eA.removeAllRanges(),te>Ne?(eA.addRange(Z),eA.extend(O.node,O.offset)):(Z.setEnd(O.node,O.offset),eA.addRange(Z))}}}}for(yA=[],eA=w;eA=eA.parentNode;)eA.nodeType===1&&yA.push({element:eA,left:eA.scrollLeft,top:eA.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yA.length;w++){var bA=yA[w];bA.element.scrollLeft=bA.left,bA.element.scrollTop=bA.top}}is=!!Jc,Zc=Jc=null}finally{Fe=l,oA.p=a,G.T=t}}A.current=e,ut=2}}function og(){if(ut===2){ut=0;var A=Pn,e=fr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=G.T,G.T=null;var a=oA.p;oA.p=2;var l=Fe;Fe|=4;try{Lh(A,e.alternate,e)}finally{Fe=l,oA.p=a,G.T=t}}ut=3}}function sg(){if(ut===4||ut===3){ut=0,$A();var A=Pn,e=fr,t=hr,a=Zh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ut=5:(ut=0,fr=Pn=null,lg(A,A.pendingLanes));var l=A.pendingLanes;if(l===0&&($n=null),j(t),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(me,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=G.T,l=oA.p,oA.p=2,G.T=null;try{for(var c=A.onRecoverableError,p=0;p<a.length;p++){var w=a[p];c(w.value,{componentStack:w.stack})}}finally{G.T=e,oA.p=l}}(hr&3)!==0&&Jo(),sn(A),l=A.pendingLanes,(t&4194090)!==0&&(l&42)!==0?A===Mc?Bi++:(Bi=0,Mc=A):Bi=0,bi(0)}}function lg(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,Pr(e)))}function Jo(A){return ig(),og(),sg(),cg()}function cg(){if(ut!==5)return!1;var A=Pn,e=Nc;Nc=0;var t=j(hr),a=G.T,l=oA.p;try{oA.p=32>t?32:t,G.T=null,t=kc,kc=null;var c=Pn,p=hr;if(ut=0,fr=Pn=null,hr=0,(Fe&6)!==0)throw Error(o(331));var w=Fe;if(Fe|=4,Xh(c.current),Gh(c,c.current,p,t),Fe=w,bi(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(me,c)}catch{}return!0}finally{oA.p=l,G.T=a,lg(A,e)}}function dg(A,e,t){e=Kt(t,e),e=uc(A.stateNode,e,2),A=_n(A,e,2),A!==null&&(ye(A,2),sn(A))}function Me(A,e,t){if(A.tag===3)dg(A,A,t);else for(;e!==null;){if(e.tag===3){dg(e,A,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($n===null||!$n.has(a))){A=Kt(t,A),t=gh(2),a=_n(e,t,2),a!==null&&(ph(t,a,e,A),ye(a,2),sn(a));break}}e=e.return}}function Lc(A,e,t){var a=A.pingCache;if(a===null){a=A.pingCache=new Hm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Fc=!0,l.add(t),A=Tm.bind(null,A,e,t),e.then(A,A))}function Tm(A,e,t){var a=A.pingCache;a!==null&&a.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,Ie===A&&(we&t)===t&&(qe===4||qe===3&&(we&62914560)===we&&300>PA()-Hc?(Fe&2)===0&&gr(A,0):jc|=t,ur===we&&(ur=0)),sn(A)}function ug(A,e){e===0&&(e=fe()),A=Wa(A,e),A!==null&&(ye(A,e),sn(A))}function Im(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),ug(A,t)}function Lm(A,e){var t=0;switch(A.tag){case 13:var a=A.stateNode,l=A.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=A.stateNode;break;case 22:a=A.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),ug(A,t)}function Om(A,e){return K(A,e)}var Zo=null,xr=null,Oc=!1,qo=!1,Kc=!1,ka=0;function sn(A){A!==xr&&A.next===null&&(xr===null?Zo=xr=A:xr=xr.next=A),qo=!0,Oc||(Oc=!0,Rm())}function bi(A,e){if(!Kc&&qo){Kc=!0;do for(var t=!1,a=Zo;a!==null;){if(A!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var p=a.suspendedLanes,w=a.pingedLanes;c=(1<<31-L(42|A)+1)-1,c&=l&~(p&~w),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,pg(a,c))}else c=we,c=NA(a,a===Ie?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||zA(a,c)||(t=!0,pg(a,c));a=a.next}while(t);Kc=!1}}function Km(){fg()}function fg(){qo=Oc=!1;var A=0;ka!==0&&(Zm()&&(A=ka),ka=0);for(var e=PA(),t=null,a=Zo;a!==null;){var l=a.next,c=hg(a,e);c===0?(a.next=null,t===null?Zo=l:t.next=l,l===null&&(xr=t)):(t=a,(A!==0||(c&3)!==0)&&(qo=!0)),a=l}bi(A)}function hg(A,e){for(var t=A.suspendedLanes,a=A.pingedLanes,l=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var p=31-L(c),w=1<<p,N=l[p];N===-1?((w&t)===0||(w&a)!==0)&&(l[p]=oe(w,e)):N<=e&&(A.expiredLanes|=w),c&=~w}if(e=Ie,t=we,t=NA(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a=A.callbackNode,t===0||A===e&&(je===2||je===9)||A.cancelPendingCommit!==null)return a!==null&&a!==null&&wA(a),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||zA(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(a!==null&&wA(a),j(t)){case 2:case 8:t=Oe;break;case 32:t=ee;break;case 268435456:t=Ve;break;default:t=ee}return a=gg.bind(null,A),t=K(t,a),A.callbackPriority=e,A.callbackNode=t,e}return a!==null&&a!==null&&wA(a),A.callbackPriority=2,A.callbackNode=null,2}function gg(A,e){if(ut!==0&&ut!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Jo()&&A.callbackNode!==t)return null;var a=we;return a=NA(A,A===Ie?a:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a===0?null:(Wh(A,a,e),hg(A,PA()),A.callbackNode!=null&&A.callbackNode===t?gg.bind(null,A):null)}function pg(A,e){if(Jo())return null;Wh(A,e,!0)}function Rm(){Wm(function(){(Fe&6)!==0?K(de,Km):fg()})}function Rc(){return ka===0&&(ka=XA()),ka}function xg(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:io(""+A)}function mg(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function zm(A,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var c=xg((l[H]||null).action),p=a.submitter;p&&(e=(e=p[H]||null)?xg(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var w=new co("action","action",null,a,l);A.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ka!==0){var N=p?mg(l,p):new FormData(l);oc(t,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(w.preventDefault(),N=p?mg(l,p):new FormData(l),oc(t,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var zc=0;zc<Ul.length;zc++){var _c=Ul[zc],_m=_c.toLowerCase(),Gm=_c[0].toUpperCase()+_c.slice(1);Wt(_m,"on"+Gm)}Wt(qu,"onAnimationEnd"),Wt(Wu,"onAnimationIteration"),Wt($u,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(om,"onTransitionRun"),Wt(sm,"onTransitionStart"),Wt(lm,"onTransitionCancel"),Wt(Pu,"onTransitionEnd"),Te("onMouseEnter",["mouseout","mouseover"]),Te("onMouseLeave",["mouseout","mouseover"]),Te("onPointerEnter",["pointerout","pointerover"]),Te("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wi));function Bg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var a=A[t],l=a.event;a=a.listeners;A:{var c=void 0;if(e)for(var p=a.length-1;0<=p;p--){var w=a[p],N=w.instance,W=w.currentTarget;if(w=w.listener,N!==c&&l.isPropagationStopped())break A;c=w,l.currentTarget=W;try{c(l)}catch(mA){Io(mA)}l.currentTarget=null,c=N}else for(p=0;p<a.length;p++){if(w=a[p],N=w.instance,W=w.currentTarget,w=w.listener,N!==c&&l.isPropagationStopped())break A;c=w,l.currentTarget=W;try{c(l)}catch(mA){Io(mA)}l.currentTarget=null,c=N}}}}function pe(A,e){var t=e[R];t===void 0&&(t=e[R]=new Set);var a=A+"__bubble";t.has(a)||(bg(e,A,2,!1),t.add(a))}function Gc(A,e,t){var a=0;e&&(a|=4),bg(t,A,a,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Vc(A){if(!A[Wo]){A[Wo]=!0,Re.forEach(function(t){t!=="selectionchange"&&(Vm.has(t)||Gc(t,!1,A),Gc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,Gc("selectionchange",!1,e))}}function bg(A,e,t,a){switch(Gg(e)){case 2:var l=mB;break;case 8:l=BB;break;default:l=rd}t=l.bind(null,e,t,A),l=void 0,!fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?A.addEventListener(e,t,{capture:!0,passive:l}):A.addEventListener(e,t,!0):l!==void 0?A.addEventListener(e,t,{passive:l}):A.addEventListener(e,t,!1)}function Yc(A,e,t,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)A:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var w=a.stateNode.containerInfo;if(w===l)break;if(p===4)for(p=a.return;p!==null;){var N=p.tag;if((N===3||N===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;w!==null;){if(p=jA(w),p===null)return;if(N=p.tag,N===5||N===6||N===26||N===27){a=c=p;continue A}w=w.parentNode}}a=a.return}Uu(function(){var W=c,mA=dl(t),yA=[];A:{var AA=Af.get(A);if(AA!==void 0){var eA=co,ae=A;switch(A){case"keypress":if(so(t)===0)break A;case"keydown":case"keyup":eA=O0;break;case"focusin":ae="focus",eA=xl;break;case"focusout":ae="blur",eA=xl;break;case"beforeblur":case"afterblur":eA=xl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":eA=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":eA=E0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":eA=z0;break;case qu:case Wu:case $u:eA=S0;break;case Pu:eA=G0;break;case"scroll":case"scrollend":eA=Q0;break;case"wheel":eA=Y0;break;case"copy":case"cut":case"paste":eA=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":eA=Hu;break;case"toggle":case"beforetoggle":eA=J0}var te=(e&4)!==0,Ne=!te&&(A==="scroll"||A==="scrollend"),z=te?AA!==null?AA+"Capture":null:AA;te=[];for(var O=W,Z;O!==null;){var bA=O;if(Z=bA.stateNode,bA=bA.tag,bA!==5&&bA!==26&&bA!==27||Z===null||z===null||(bA=Kr(O,z),bA!=null&&te.push(yi(O,bA,Z))),Ne)break;O=O.return}0<te.length&&(AA=new eA(AA,ae,null,t,mA),yA.push({event:AA,listeners:te}))}}if((e&7)===0){A:{if(AA=A==="mouseover"||A==="pointerover",eA=A==="mouseout"||A==="pointerout",AA&&t!==cl&&(ae=t.relatedTarget||t.fromElement)&&(jA(ae)||ae[Y]))break A;if((eA||AA)&&(AA=mA.window===mA?mA:(AA=mA.ownerDocument)?AA.defaultView||AA.parentWindow:window,eA?(ae=t.relatedTarget||t.toElement,eA=W,ae=ae?jA(ae):null,ae!==null&&(Ne=u(ae),te=ae.tag,ae!==Ne||te!==5&&te!==27&&te!==6)&&(ae=null)):(eA=null,ae=W),eA!==ae)){if(te=ju,bA="onMouseLeave",z="onMouseEnter",O="mouse",(A==="pointerout"||A==="pointerover")&&(te=Hu,bA="onPointerLeave",z="onPointerEnter",O="pointer"),Ne=eA==null?AA:ZA(eA),Z=ae==null?AA:ZA(ae),AA=new te(bA,O+"leave",eA,t,mA),AA.target=Ne,AA.relatedTarget=Z,bA=null,jA(mA)===W&&(te=new te(z,O+"enter",ae,t,mA),te.target=Z,te.relatedTarget=Ne,bA=te),Ne=bA,eA&&ae)e:{for(te=eA,z=ae,O=0,Z=te;Z;Z=mr(Z))O++;for(Z=0,bA=z;bA;bA=mr(bA))Z++;for(;0<O-Z;)te=mr(te),O--;for(;0<Z-O;)z=mr(z),Z--;for(;O--;){if(te===z||z!==null&&te===z.alternate)break e;te=mr(te),z=mr(z)}te=null}else te=null;eA!==null&&wg(yA,AA,eA,te,!1),ae!==null&&Ne!==null&&wg(yA,Ne,ae,te,!0)}}A:{if(AA=W?ZA(W):window,eA=AA.nodeName&&AA.nodeName.toLowerCase(),eA==="select"||eA==="input"&&AA.type==="file")var JA=Ou;else if(Iu(AA))if(Ku)JA=am;else{JA=tm;var he=em}else eA=AA.nodeName,!eA||eA.toLowerCase()!=="input"||AA.type!=="checkbox"&&AA.type!=="radio"?W&&ll(W.elementType)&&(JA=Ou):JA=nm;if(JA&&(JA=JA(A,W))){Lu(yA,JA,t,mA);break A}he&&he(A,AA,W),A==="focusout"&&W&&AA.type==="number"&&W.memoizedProps.value!=null&&sl(AA,"number",AA.value)}switch(he=W?ZA(W):window,A){case"focusin":(Iu(he)||he.contentEditable==="true")&&(Ja=he,vl=W,Jr=null);break;case"focusout":Jr=vl=Ja=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Ju(yA,t,mA);break;case"selectionchange":if(im)break;case"keydown":case"keyup":Ju(yA,t,mA)}var qA;if(Bl)A:{switch(A){case"compositionstart":var ne="onCompositionStart";break A;case"compositionend":ne="onCompositionEnd";break A;case"compositionupdate":ne="onCompositionUpdate";break A}ne=void 0}else Xa?Du(A,t)&&(ne="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(Nu&&t.locale!=="ko"&&(Xa||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Xa&&(qA=Eu()):(On=mA,hl="value"in On?On.value:On.textContent,Xa=!0)),he=$o(W,ne),0<he.length&&(ne=new Su(ne,A,null,t,mA),yA.push({event:ne,listeners:he}),qA?ne.data=qA:(qA=Tu(t),qA!==null&&(ne.data=qA)))),(qA=q0?W0(A,t):$0(A,t))&&(ne=$o(W,"onBeforeInput"),0<ne.length&&(he=new Su("onBeforeInput","beforeinput",null,t,mA),yA.push({event:he,listeners:ne}),he.data=qA)),zm(yA,A,W,t,mA)}Bg(yA,e)})}function yi(A,e,t){return{instance:A,listener:e,currentTarget:t}}function $o(A,e){for(var t=e+"Capture",a=[];A!==null;){var l=A,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Kr(A,t),l!=null&&a.unshift(yi(A,l,c)),l=Kr(A,e),l!=null&&a.push(yi(A,l,c))),A.tag===3)return a;A=A.return}return[]}function mr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function wg(A,e,t,a,l){for(var c=e._reactName,p=[];t!==null&&t!==a;){var w=t,N=w.alternate,W=w.stateNode;if(w=w.tag,N!==null&&N===a)break;w!==5&&w!==26&&w!==27||W===null||(N=W,l?(W=Kr(t,c),W!=null&&p.unshift(yi(t,W,N))):l||(W=Kr(t,c),W!=null&&p.push(yi(t,W,N)))),t=t.return}p.length!==0&&A.push({event:e,listeners:p})}var Ym=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function yg(A){return(typeof A=="string"?A:""+A).replace(Ym,`
`).replace(Xm,"")}function vg(A,e){return e=yg(e),yg(A)===e}function Po(){}function He(A,e,t,a,l,c){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ga(A,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ga(A,""+a);break;case"className":Ra(A,"class",a);break;case"tabIndex":Ra(A,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ra(A,t,a);break;case"style":Cu(A,a,c);break;case"data":if(e!=="object"){Ra(A,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=io(""+a),A.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&He(A,e,"name",l.name,l,null),He(A,e,"formEncType",l.formEncType,l,null),He(A,e,"formMethod",l.formMethod,l,null),He(A,e,"formTarget",l.formTarget,l,null)):(He(A,e,"encType",l.encType,l,null),He(A,e,"method",l.method,l,null),He(A,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=io(""+a),A.setAttribute(t,a);break;case"onClick":a!=null&&(A.onclick=Po);break;case"onScroll":a!=null&&pe("scroll",A);break;case"onScrollEnd":a!=null&&pe("scrollend",A);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"multiple":A.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":A.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){A.removeAttribute("xlink:href");break}t=io(""+a),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""+a):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":a===!0?A.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,a):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?A.setAttribute(t,a):A.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?A.removeAttribute(t):A.setAttribute(t,a);break;case"popover":pe("beforetoggle",A),pe("toggle",A),xa(A,"popover",a);break;case"xlinkActuate":It(A,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":It(A,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":It(A,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":It(A,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":It(A,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":It(A,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":It(A,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":It(A,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":It(A,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":xa(A,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=v0.get(t)||t,xa(A,t,a))}}function Xc(A,e,t,a,l,c){switch(t){case"style":Cu(A,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"children":typeof a=="string"?Ga(A,a):(typeof a=="number"||typeof a=="bigint")&&Ga(A,""+a);break;case"onScroll":a!=null&&pe("scroll",A);break;case"onScrollEnd":a!=null&&pe("scrollend",A);break;case"onClick":a!=null&&(A.onclick=Po);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!be.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),c=A[H]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,a,l);break A}t in A?A[t]=a:a===!0?A.setAttribute(t,""):xa(A,t,a)}}}function ft(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",A),pe("load",A);var a=!1,l=!1,c;for(c in t)if(t.hasOwnProperty(c)){var p=t[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:He(A,e,c,p,t,null)}}l&&He(A,e,"srcSet",t.srcSet,t,null),a&&He(A,e,"src",t.src,t,null);return;case"input":pe("invalid",A);var w=c=p=l=null,N=null,W=null;for(a in t)if(t.hasOwnProperty(a)){var mA=t[a];if(mA!=null)switch(a){case"name":l=mA;break;case"type":p=mA;break;case"checked":N=mA;break;case"defaultChecked":W=mA;break;case"value":c=mA;break;case"defaultValue":w=mA;break;case"children":case"dangerouslySetInnerHTML":if(mA!=null)throw Error(o(137,e));break;default:He(A,e,a,mA,t,null)}}bu(A,c,w,N,W,p,l,!1),ao(A);return;case"select":pe("invalid",A),a=p=c=null;for(l in t)if(t.hasOwnProperty(l)&&(w=t[l],w!=null))switch(l){case"value":c=w;break;case"defaultValue":p=w;break;case"multiple":a=w;default:He(A,e,l,w,t,null)}e=c,t=p,A.multiple=!!a,e!=null?_a(A,!!a,e,!1):t!=null&&_a(A,!!a,t,!0);return;case"textarea":pe("invalid",A),c=l=a=null;for(p in t)if(t.hasOwnProperty(p)&&(w=t[p],w!=null))switch(p){case"value":a=w;break;case"defaultValue":l=w;break;case"children":c=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(91));break;default:He(A,e,p,w,t,null)}yu(A,a,l,c),ao(A);return;case"option":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"selected":A.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:He(A,e,N,a,t,null)}return;case"dialog":pe("beforetoggle",A),pe("toggle",A),pe("cancel",A),pe("close",A);break;case"iframe":case"object":pe("load",A);break;case"video":case"audio":for(a=0;a<wi.length;a++)pe(wi[a],A);break;case"image":pe("error",A),pe("load",A);break;case"details":pe("toggle",A);break;case"embed":case"source":case"link":pe("error",A),pe("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in t)if(t.hasOwnProperty(W)&&(a=t[W],a!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:He(A,e,W,a,t,null)}return;default:if(ll(e)){for(mA in t)t.hasOwnProperty(mA)&&(a=t[mA],a!==void 0&&Xc(A,e,mA,a,t,void 0));return}}for(w in t)t.hasOwnProperty(w)&&(a=t[w],a!=null&&He(A,e,w,a,t,null))}function Jm(A,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,w=null,N=null,W=null,mA=null;for(eA in t){var yA=t[eA];if(t.hasOwnProperty(eA)&&yA!=null)switch(eA){case"checked":break;case"value":break;case"defaultValue":N=yA;default:a.hasOwnProperty(eA)||He(A,e,eA,null,a,yA)}}for(var AA in a){var eA=a[AA];if(yA=t[AA],a.hasOwnProperty(AA)&&(eA!=null||yA!=null))switch(AA){case"type":c=eA;break;case"name":l=eA;break;case"checked":W=eA;break;case"defaultChecked":mA=eA;break;case"value":p=eA;break;case"defaultValue":w=eA;break;case"children":case"dangerouslySetInnerHTML":if(eA!=null)throw Error(o(137,e));break;default:eA!==yA&&He(A,e,AA,eA,a,yA)}}ol(A,p,w,N,W,mA,c,l);return;case"select":eA=p=w=AA=null;for(c in t)if(N=t[c],t.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":eA=N;default:a.hasOwnProperty(c)||He(A,e,c,null,a,N)}for(l in a)if(c=a[l],N=t[l],a.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":AA=c;break;case"defaultValue":w=c;break;case"multiple":p=c;default:c!==N&&He(A,e,l,c,a,N)}e=w,t=p,a=eA,AA!=null?_a(A,!!t,AA,!1):!!a!=!!t&&(e!=null?_a(A,!!t,e,!0):_a(A,!!t,t?[]:"",!1));return;case"textarea":eA=AA=null;for(w in t)if(l=t[w],t.hasOwnProperty(w)&&l!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:He(A,e,w,null,a,l)}for(p in a)if(l=a[p],c=t[p],a.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":AA=l;break;case"defaultValue":eA=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&He(A,e,p,l,a,c)}wu(A,AA,eA);return;case"option":for(var ae in t)if(AA=t[ae],t.hasOwnProperty(ae)&&AA!=null&&!a.hasOwnProperty(ae))switch(ae){case"selected":A.selected=!1;break;default:He(A,e,ae,null,a,AA)}for(N in a)if(AA=a[N],eA=t[N],a.hasOwnProperty(N)&&AA!==eA&&(AA!=null||eA!=null))switch(N){case"selected":A.selected=AA&&typeof AA!="function"&&typeof AA!="symbol";break;default:He(A,e,N,AA,a,eA)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in t)AA=t[te],t.hasOwnProperty(te)&&AA!=null&&!a.hasOwnProperty(te)&&He(A,e,te,null,a,AA);for(W in a)if(AA=a[W],eA=t[W],a.hasOwnProperty(W)&&AA!==eA&&(AA!=null||eA!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(AA!=null)throw Error(o(137,e));break;default:He(A,e,W,AA,a,eA)}return;default:if(ll(e)){for(var Ne in t)AA=t[Ne],t.hasOwnProperty(Ne)&&AA!==void 0&&!a.hasOwnProperty(Ne)&&Xc(A,e,Ne,void 0,a,AA);for(mA in a)AA=a[mA],eA=t[mA],!a.hasOwnProperty(mA)||AA===eA||AA===void 0&&eA===void 0||Xc(A,e,mA,AA,a,eA);return}}for(var z in t)AA=t[z],t.hasOwnProperty(z)&&AA!=null&&!a.hasOwnProperty(z)&&He(A,e,z,null,a,AA);for(yA in a)AA=a[yA],eA=t[yA],!a.hasOwnProperty(yA)||AA===eA||AA==null&&eA==null||He(A,e,yA,AA,a,eA)}var Jc=null,Zc=null;function As(A){return A.nodeType===9?A:A.ownerDocument}function Cg(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function qc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=null;function Zm(){var A=window.event;return A&&A.type==="popstate"?A===Wc?!1:(Wc=A,!0):(Wc=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(A){return Eg.resolve(null).then(A).catch($m)}:Ug;function $m(A){setTimeout(function(){throw A})}function ea(A){return A==="head"}function Fg(A,e){var t=e,a=0,l=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<a&&8>a){t=a;var p=A.ownerDocument;if(t&1&&vi(p.documentElement),t&2&&vi(p.body),t&4)for(t=p.head,vi(t),p=t.firstChild;p;){var w=p.nextSibling,N=p.nodeName;p[k]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&p.rel.toLowerCase()==="stylesheet"||t.removeChild(p),p=w}}if(l===0){A.removeChild(c),Hi(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=c}while(t);Hi(e)}function $c(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":$c(t),X(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function Pm(A,e,t,a){for(;A.nodeType===1;){var l=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(a){if(!A[k])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==l.rel||A.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||A.getAttribute("title")!==(l.title==null?null:l.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(l.src==null?null:l.src)||A.getAttribute("type")!==(l.type==null?null:l.type)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=Pt(A.nextSibling),A===null)break}return null}function AB(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Pt(A.nextSibling),A===null))return null;return A}function Pc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function eB(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),A._reactRetry=a}}function Pt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var Ad=null;function jg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function Sg(A,e,t){switch(e=As(t),A){case"html":if(A=e.documentElement,!A)throw Error(o(452));return A;case"head":if(A=e.head,!A)throw Error(o(453));return A;case"body":if(A=e.body,!A)throw Error(o(454));return A;default:throw Error(o(451))}}function vi(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);X(A)}var Yt=new Map,Hg=new Set;function es(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var Sn=oA.d;oA.d={f:tB,r:nB,D:aB,C:rB,L:iB,m:oB,X:lB,S:sB,M:cB};function tB(){var A=Sn.f(),e=Yo();return A||e}function nB(A){var e=KA(A);e!==null&&e.tag===5&&e.type==="form"?Wf(e):Sn.r(A)}var Br=typeof document>"u"?null:document;function Ng(A,e,t){var a=Br;if(a&&typeof e=="string"&&e){var l=Ot(e);l='link[rel="'+A+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Hg.has(l)||(Hg.add(l),A={rel:A,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),ft(e,"link",A),se(e),a.head.appendChild(e)))}}function aB(A){Sn.D(A),Ng("dns-prefetch",A,null)}function rB(A,e){Sn.C(A,e),Ng("preconnect",A,e)}function iB(A,e,t){Sn.L(A,e,t);var a=Br;if(a&&A&&e){var l='link[rel="preload"][as="'+Ot(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Ot(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Ot(t.imageSizes)+'"]')):l+='[href="'+Ot(A)+'"]';var c=l;switch(e){case"style":c=br(A);break;case"script":c=wr(A)}Yt.has(c)||(A=v({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),Yt.set(c,A),a.querySelector(l)!==null||e==="style"&&a.querySelector(Ci(c))||e==="script"&&a.querySelector(Qi(c))||(e=a.createElement("link"),ft(e,"link",A),se(e),a.head.appendChild(e)))}}function oB(A,e){Sn.m(A,e);var t=Br;if(t&&A){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(A)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=wr(A)}if(!Yt.has(c)&&(A=v({rel:"modulepreload",href:A},e),Yt.set(c,A),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Qi(c)))return}a=t.createElement("link"),ft(a,"link",A),se(a),t.head.appendChild(a)}}}function sB(A,e,t){Sn.S(A,e,t);var a=Br;if(a&&A){var l=WA(a).hoistableStyles,c=br(A);e=e||"default";var p=l.get(c);if(!p){var w={loading:0,preload:null};if(p=a.querySelector(Ci(c)))w.loading=5;else{A=v({rel:"stylesheet",href:A,"data-precedence":e},t),(t=Yt.get(c))&&ed(A,t);var N=p=a.createElement("link");se(N),ft(N,"link",A),N._p=new Promise(function(W,mA){N.onload=W,N.onerror=mA}),N.addEventListener("load",function(){w.loading|=1}),N.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ts(p,e,a)}p={type:"stylesheet",instance:p,count:1,state:w},l.set(c,p)}}}function lB(A,e){Sn.X(A,e);var t=Br;if(t&&A){var a=WA(t).hoistableScripts,l=wr(A),c=a.get(l);c||(c=t.querySelector(Qi(l)),c||(A=v({src:A,async:!0},e),(e=Yt.get(l))&&td(A,e),c=t.createElement("script"),se(c),ft(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function cB(A,e){Sn.M(A,e);var t=Br;if(t&&A){var a=WA(t).hoistableScripts,l=wr(A),c=a.get(l);c||(c=t.querySelector(Qi(l)),c||(A=v({src:A,async:!0,type:"module"},e),(e=Yt.get(l))&&td(A,e),c=t.createElement("script"),se(c),ft(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function kg(A,e,t,a){var l=(l=T.current)?es(l):null;if(!l)throw Error(o(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=br(t.href),t=WA(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=br(t.href);var c=WA(l).hoistableStyles,p=c.get(A);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,p),(c=l.querySelector(Ci(A)))&&!c._p&&(p.instance=c,p.state.loading=5),Yt.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Yt.set(A,t),c||dB(l,A,t,p.state))),e&&a===null)throw Error(o(528,""));return p}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=wr(t),t=WA(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,A))}}function br(A){return'href="'+Ot(A)+'"'}function Ci(A){return'link[rel="stylesheet"]['+A+"]"}function Mg(A){return v({},A,{"data-precedence":A.precedence,precedence:null})}function dB(A,e,t,a){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=A.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ft(e,"link",t),se(e),A.head.appendChild(e))}function wr(A){return'[src="'+Ot(A)+'"]'}function Qi(A){return"script[async]"+A}function Dg(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=A.querySelector('style[data-href~="'+Ot(t.href)+'"]');if(a)return e.instance=a,se(a),a;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(A.ownerDocument||A).createElement("style"),se(a),ft(a,"style",l),ts(a,t.precedence,A),e.instance=a;case"stylesheet":l=br(t.href);var c=A.querySelector(Ci(l));if(c)return e.state.loading|=4,e.instance=c,se(c),c;a=Mg(t),(l=Yt.get(l))&&ed(a,l),c=(A.ownerDocument||A).createElement("link"),se(c);var p=c;return p._p=new Promise(function(w,N){p.onload=w,p.onerror=N}),ft(c,"link",a),e.state.loading|=4,ts(c,t.precedence,A),e.instance=c;case"script":return c=wr(t.src),(l=A.querySelector(Qi(c)))?(e.instance=l,se(l),l):(a=t,(l=Yt.get(c))&&(a=v({},t),td(a,l)),A=A.ownerDocument||A,l=A.createElement("script"),se(l),ft(l,"link",a),A.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,ts(a,t.precedence,A));return e.instance}function ts(A,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,p=0;p<a.length;p++){var w=a[p];if(w.dataset.precedence===e)c=w;else if(c!==l)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function ed(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function td(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var ns=null;function Tg(A,e,t){if(ns===null){var a=new Map,l=ns=new Map;l.set(t,a)}else l=ns,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(A))return a;for(a.set(A,null),t=t.getElementsByTagName(A),l=0;l<t.length;l++){var c=t[l];if(!(c[k]||c[E]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=A+p;var w=a.get(p);w?w.push(c):a.set(p,[c])}}return a}function Ig(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function uB(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Lg(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var Ui=null;function fB(){}function hB(A,e,t){if(Ui===null)throw Error(o(475));var a=Ui;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=br(t.href),c=A.querySelector(Ci(l));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(a.count++,a=as.bind(a),A.then(a,a)),e.state.loading|=4,e.instance=c,se(c);return}c=A.ownerDocument||A,t=Mg(t),(l=Yt.get(l))&&ed(t,l),c=c.createElement("link"),se(c);var p=c;p._p=new Promise(function(w,N){p.onload=w,p.onerror=N}),ft(c,"link",t),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=as.bind(a),A.addEventListener("load",e),A.addEventListener("error",e))}}function gB(){if(Ui===null)throw Error(o(475));var A=Ui;return A.stylesheets&&A.count===0&&nd(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&nd(A,A.stylesheets),A.unsuspend){var a=A.unsuspend;A.unsuspend=null,a()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function as(){if(this.count--,this.count===0){if(this.stylesheets)nd(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var rs=null;function nd(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,rs=new Map,e.forEach(pB,A),rs=null,as.call(A))}function pB(A,e){if(!(e.state.loading&4)){var t=rs.get(A);if(t)var a=t.get(null);else{t=new Map,rs.set(A,t);for(var l=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),a=p)}a&&t.set(null,a)}l=e.instance,p=l.getAttribute("data-precedence"),c=t.get(p)||a,c===a&&t.set(null,l),t.set(p,l),this.count++,a=as.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(l,A.firstChild)),e.state.loading|=4}}var Ei={$$typeof:TA,Provider:null,Consumer:null,_currentValue:xA,_currentValue2:xA,_threadCount:0};function xB(A,e,t,a,l,c,p,w){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=re(0),this.hiddenUpdates=re(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Og(A,e,t,a,l,c,p,w,N,W,mA,yA){return A=new xB(A,e,t,p,w,N,W,yA),e=1,c===!0&&(e|=24),c=St(3,null,null,e),A.current=c,c.stateNode=A,e=Ll(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:t,cache:e},zl(c),A}function Kg(A){return A?(A=$a,A):$a}function Rg(A,e,t,a,l,c){l=Kg(l),a.context===null?a.context=l:a.pendingContext=l,a=zn(e),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=_n(A,a,e),t!==null&&(Dt(t,A,e),ni(t,A,e))}function zg(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function ad(A,e){zg(A,e),(A=A.alternate)&&zg(A,e)}function _g(A){if(A.tag===13){var e=Wa(A,67108864);e!==null&&Dt(e,A,67108864),ad(A,67108864)}}var is=!0;function mB(A,e,t,a){var l=G.T;G.T=null;var c=oA.p;try{oA.p=2,rd(A,e,t,a)}finally{oA.p=c,G.T=l}}function BB(A,e,t,a){var l=G.T;G.T=null;var c=oA.p;try{oA.p=8,rd(A,e,t,a)}finally{oA.p=c,G.T=l}}function rd(A,e,t,a){if(is){var l=id(a);if(l===null)Yc(A,e,a,os,t),Vg(A,a);else if(wB(l,A,e,t,a))a.stopPropagation();else if(Vg(A,a),e&4&&-1<bB.indexOf(A)){for(;l!==null;){var c=KA(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=vA(c.pendingLanes);if(p!==0){var w=c;for(w.pendingLanes|=2,w.entangledLanes|=2;p;){var N=1<<31-L(p);w.entanglements[1]|=N,p&=~N}sn(c),(Fe&6)===0&&(Go=PA()+500,bi(0))}}break;case 13:w=Wa(c,2),w!==null&&Dt(w,c,2),Yo(),ad(c,2)}if(c=id(a),c===null&&Yc(A,e,a,os,t),c===l)break;l=c}l!==null&&a.stopPropagation()}else Yc(A,e,a,null,t)}}function id(A){return A=dl(A),od(A)}var os=null;function od(A){if(os=null,A=jA(A),A!==null){var e=u(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=h(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return os=A,null}function Gg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case de:return 2;case Oe:return 8;case ee:case Ue:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var sd=!1,ta=null,na=null,aa=null,Fi=new Map,ji=new Map,ra=[],bB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(A,e){switch(A){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(e.pointerId)}}function Si(A,e,t,a,l,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=KA(e),e!==null&&_g(e)),A):(A.eventSystemFlags|=a,e=A.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),A)}function wB(A,e,t,a,l){switch(e){case"focusin":return ta=Si(ta,A,e,t,a,l),!0;case"dragenter":return na=Si(na,A,e,t,a,l),!0;case"mouseover":return aa=Si(aa,A,e,t,a,l),!0;case"pointerover":var c=l.pointerId;return Fi.set(c,Si(Fi.get(c)||null,A,e,t,a,l)),!0;case"gotpointercapture":return c=l.pointerId,ji.set(c,Si(ji.get(c)||null,A,e,t,a,l)),!0}return!1}function Yg(A){var e=jA(A.target);if(e!==null){var t=u(e);if(t!==null){if(e=t.tag,e===13){if(e=h(t),e!==null){A.blockedOn=e,B(A.priority,function(){if(t.tag===13){var a=Mt();a=g(a);var l=Wa(t,a);l!==null&&Dt(l,t,a),ad(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ss(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=id(A.nativeEvent);if(t===null){t=A.nativeEvent;var a=new t.constructor(t.type,t);cl=a,t.target.dispatchEvent(a),cl=null}else return e=KA(t),e!==null&&_g(e),A.blockedOn=t,!1;e.shift()}return!0}function Xg(A,e,t){ss(A)&&t.delete(e)}function yB(){sd=!1,ta!==null&&ss(ta)&&(ta=null),na!==null&&ss(na)&&(na=null),aa!==null&&ss(aa)&&(aa=null),Fi.forEach(Xg),ji.forEach(Xg)}function ls(A,e){A.blockedOn===e&&(A.blockedOn=null,sd||(sd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yB)))}var cs=null;function Jg(A){cs!==A&&(cs=A,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){cs===A&&(cs=null);for(var e=0;e<A.length;e+=3){var t=A[e],a=A[e+1],l=A[e+2];if(typeof a!="function"){if(od(a||t)===null)continue;break}var c=KA(t);c!==null&&(A.splice(e,3),e-=3,oc(c,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Hi(A){function e(N){return ls(N,A)}ta!==null&&ls(ta,A),na!==null&&ls(na,A),aa!==null&&ls(aa,A),Fi.forEach(e),ji.forEach(e);for(var t=0;t<ra.length;t++){var a=ra[t];a.blockedOn===A&&(a.blockedOn=null)}for(;0<ra.length&&(t=ra[0],t.blockedOn===null);)Yg(t),t.blockedOn===null&&ra.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],c=t[a+1],p=l[H]||null;if(typeof c=="function")p||Jg(t);else if(p){var w=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[H]||null)w=p.formAction;else if(od(l)!==null)continue}else w=p.action;typeof w=="function"?t[a+1]=w:(t.splice(a,3),a-=3),Jg(t)}}}function ld(A){this._internalRoot=A}ds.prototype.render=ld.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,a=Mt();Rg(t,a,A,e,null,null)},ds.prototype.unmount=ld.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Rg(A.current,2,null,A,null,null),Yo(),e[Y]=null}};function ds(A){this._internalRoot=A}ds.prototype.unstable_scheduleHydration=function(A){if(A){var e=f();A={blockedOn:null,target:A,priority:e};for(var t=0;t<ra.length&&e!==0&&e<ra[t].priority;t++);ra.splice(t,0,A),t===0&&Yg(A)}};var Zg=r.version;if(Zg!=="19.1.0")throw Error(o(527,Zg,"19.1.0"));oA.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(o(188)):(A=Object.keys(A).join(","),Error(o(268,A)));return A=x(e),A=A!==null?b(A):null,A=A===null?null:A.stateNode,A};var vB={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{me=us.inject(vB),ue=us}catch{}}return ki.createRoot=function(A,e){if(!d(A))throw Error(o(299));var t=!1,a="",l=dh,c=uh,p=fh,w=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(w=e.unstable_transitionCallbacks)),e=Og(A,1,!1,null,null,t,a,l,c,p,w,null),A[Y]=e.current,Vc(A),new ld(e)},ki.hydrateRoot=function(A,e,t){if(!d(A))throw Error(o(299));var a=!1,l="",c=dh,p=uh,w=fh,N=null,W=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(w=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(N=t.unstable_transitionCallbacks),t.formState!==void 0&&(W=t.formState)),e=Og(A,1,!0,e,t??null,a,l,c,p,w,N,W),e.context=Kg(null),t=e.current,a=Mt(),a=g(a),l=zn(a),l.callback=null,_n(t,l,a),t=a,e.current.lanes=t,ye(e,t),sn(e),A[Y]=e.current,Vc(A),new ds(e)},ki.version="19.1.0",ki}var rp;function DB(){if(rp)return ud.exports;rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),ud.exports=MB(),ud.exports}var TB=DB();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LB=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),ip=i=>{const r=LB(i);return r.charAt(0).toUpperCase()+r.slice(1)},ox=(...i)=>i.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),OB=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=S.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:d="",children:u,iconNode:h,...m},x)=>S.createElement("svg",{ref:x,...KB,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:ox("lucide",d),...!u&&!OB(m)&&{"aria-hidden":"true"},...m},[...h.map(([b,v])=>S.createElement(b,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(i,r)=>{const s=S.forwardRef(({className:o,...d},u)=>S.createElement(RB,{ref:u,iconNode:r,className:ox(`lucide-${IB(ip(i))}`,`lucide-${i}`,o),...d}));return s.displayName=ip(i),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_B=Ae("activity",zB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],VB=Ae("app-window",GB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Dn=Ae("arrow-left",YB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Tn=Ae("arrow-right",XB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],sx=Ae("book-open",JB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],lx=Ae("box",ZB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],WB=Ae("calendar",qB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],PB=Ae("chart-no-axes-gantt",$B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],eb=Ae("circle",Ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],nb=Ae("cloud",tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ka=Ae("copy",ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ib=Ae("cpu",rb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],sb=Ae("database",ob);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],cb=Ae("diamond",lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],In=Ae("download",db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],fb=Ae("file-text",ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],cx=Ae("git-branch",hb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],eo=Ae("git-merge",gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xb=Ae("globe",pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Bb=Ae("grid-3x3",mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],wb=Ae("hard-drive",bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],cn=Ae("image",yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],dx=Ae("layers",vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Qb=Ae("list",Cb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Eb=Ae("maximize-2",Ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],jb=Ae("merge",Fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Hb=Ae("message-square",Sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M5 12h14",key:"1ays0h"}]],su=Ae("minus",Nb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Mb=Ae("moon",kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Tb=Ae("mouse-pointer",Db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],ux=Ae("move",Ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ob=Ae("network",Lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],fx=Ae("palette",Kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],zb=Ae("pen-line",Rb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Gb=Ae("pen",_b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Yb=Ae("play",Vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xe=Ae("plus",Xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Zb=Ae("refresh-cw",Jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],hx=Ae("rotate-ccw",qb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],$b=Ae("router",Wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ga=Ae("save",Pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ew=Ae("server",Aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],nw=Ae("shield",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],rw=Ae("smartphone",aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ow=Ae("square",iw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],lw=Ae("sun",sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Be=Ae("trash-2",cw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],dn=Ae("upload",dw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],fw=Ae("user",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],lu=Ae("users",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Oa=Ae("x",gw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],xw=Ae("zap",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],kr=Ae("zoom-in",mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Mr=Ae("zoom-out",Bw),bw=({projects:i,onCreateProject:r,onLoadProject:s,onDeleteProject:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"evolution-chart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"🌿"}),n.jsx("h2",{children:"Evolution Chart Maker"}),n.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Project"]}),i.length>0&&n.jsxs("div",{className:"project-list",children:[n.jsx("h3",{children:"Your Projects"}),i.map(h=>n.jsxs("div",{className:"project-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"project-card-content",children:[n.jsx("div",{className:"project-card-name",children:h.name}),n.jsxs("div",{className:"project-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"project-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this project?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Project"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Start"}),n.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline End"}),n.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[n.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),n.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),n.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),n.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("projectName").value,m=parseFloat(document.getElementById("timelineStart").value),x=parseFloat(document.getElementById("timelineEnd").value),b=document.getElementById("timeUnit").value;h.trim()&&m>x&&(r(h,m,x,b),u(!1))},className:"create-btn",children:"Create Project"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .evolution-chart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .primary-btn {
          background: white;
          color: #059669;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .project-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .project-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .project-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .project-card-content {
          flex: 1;
        }
        
        .project-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .project-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
        }
        
        .project-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #059669;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #059669;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #047857;
        }
      `})]})},fs=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],ww=({project:i,nodes:r,connections:s,onUpdateProject:o,onBack:d})=>{const x="#ffffff",b="#ffeb3b",v="#4fc3f7",F=S.useRef(null),M=S.useRef(null);S.useRef(null);const aA=S.useRef(0),P=S.useRef({x:0,y:0}),uA=S.useRef({x:0,y:0}),kA=S.useRef(0),CA=S.useRef(!1),[gA,TA]=S.useState(r||[]),[cA,BA]=S.useState(s||[]),[J,SA]=S.useState(null),[_,iA]=S.useState(null),[pA,HA]=S.useState(i?.zoom||1),[sA,OA]=S.useState(i?.pan||{x:0,y:0}),[_A,LA]=S.useState(i?.pan||{x:0,y:0}),[G,oA]=S.useState(!1),[xA,RA]=S.useState(null),[U,V]=S.useState(!1),[hA,rA]=S.useState(null);S.useEffect(()=>{if(i){const y=setTimeout(()=>{o({...i,nodes:gA,connections:cA,zoom:pA,pan:sA})},500);return()=>clearTimeout(y)}},[gA,cA,pA,sA,i,o]),S.useEffect(()=>{let y;const L=()=>{const $=Date.now(),lA=Math.min($-aA.current,100)/1e3;if(aA.current=$,lA>0&&!CA.current){const dA=(_A.x-sA.x)*.2,EA=(_A.y-sA.y)*.2;Math.abs(dA)>.1||Math.abs(EA)>.1?(OA(D=>({x:D.x+dA,y:D.y+EA})),y=requestAnimationFrame(L)):OA(_A)}else y=requestAnimationFrame(L)};return y=requestAnimationFrame(L),()=>cancelAnimationFrame(y)},[sA,_A]);const UA=S.useCallback(y=>{if(!i)return 0;const L=MA(y.value,y.unit),$=MA(i.timelineStart,i.timeUnit),lA=MA(i.timelineEnd,i.timeUnit),dA=$-lA,EA=($-L)/dA,D=F.current?.offsetWidth||800;return EA*D},[i]),MA=(y,L)=>{const $=fs.find(lA=>lA.value===L)||fs[0];return y*$.multiplier},T=(y,L)=>L==="bya"?`${y} BYA`:L==="mya"?`${y} MYA`:L==="kya"?`${y} KYA`:`${y} YA`,QA=S.useCallback(y=>{if(!i)return 0;const L=F.current?.offsetWidth||800,$=MA(i.timelineStart,i.timeUnit),lA=MA(i.timelineEnd,i.timeUnit),dA=$-lA,EA=y/L;return $-EA*dA},[i]),FA=S.useCallback(()=>{if(!i)return[];const y=F.current?.offsetWidth||800,L=MA(i.timelineStart,i.timeUnit),$=MA(i.timelineEnd,i.timeUnit),lA=L-$,dA=lA/pA;let EA;dA>2e9?EA=1e9:dA>1e9?EA=5e8:dA>5e8?EA=1e8:dA>2e8?EA=5e7:dA>1e8?EA=25e6:dA>5e7?EA=1e7:dA>2e7?EA=5e6:dA>1e7?EA=25e5:dA>5e6?EA=1e6:dA>2e6?EA=5e5:dA>1e6?EA=25e4:dA>5e5?EA=1e5:dA>2e5?EA=5e4:dA>1e5?EA=25e3:dA>5e4?EA=1e4:dA>2e4?EA=5e3:dA>1e4?EA=2500:dA>5e3?EA=1e3:dA>2e3?EA=500:dA>1e3?EA=250:dA>500?EA=100:dA>200?EA=50:dA>100?EA=25:dA>50?EA=10:dA>20?EA=5:EA=1;const D=[],vA=QA(-sA.x/pA),NA=QA((y-sA.x)/pA),zA=Math.ceil(Math.min(vA,NA)/EA)*EA,oe=Math.floor(Math.max(vA,NA)/EA)*EA;for(let XA=zA;XA<=oe;XA+=EA)if(XA>=$&&XA<=L){let fe=XA,re="ya";XA>=1e9?(fe=XA/1e9,re="bya"):XA>=1e6?(fe=XA/1e6,re="mya"):XA>=1e3&&(fe=XA/1e3,re="kya"),D.push({value:fe,unit:re,position:(L-XA)/lA})}return D},[i,pA,sA,QA]),fA=()=>{const y={};gA.forEach(lA=>{y[lA.id]=0}),cA.forEach(lA=>{y[lA.from]=(y[lA.from]||0)+1,y[lA.to]=(y[lA.to]||0)+1});let L=null,$=0;return Object.entries(y).forEach(([lA,dA])=>{dA>$&&($=dA,L=lA)}),L?gA.find(lA=>lA.id===parseInt(L)):null},I=(y,L)=>{if(!i)return;const $=F.current.getBoundingClientRect(),lA=y-$.left,dA=L-$.top-60,D=QA((lA-sA.x)/pA)/(fs.find(NA=>NA.value===i.timeUnit)?.multiplier||1),vA={id:Date.now(),x:(lA-sA.x)/pA,y:Math.max(20,(dA-sA.y)/pA),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(D.toFixed(4)),unit:i.timeUnit}};TA([...gA,vA]),RA(vA),oA(!0)},q=y=>{TA(gA.map(L=>L.id===y.id?y:L)),RA(null),oA(!1)},IA=y=>{TA(gA.filter(L=>L.id!==y)),BA(cA.filter(L=>L.from!==y&&L.to!==y)),SA(null)},K=(y,L)=>{const $={id:Date.now(),from:y,to:L};BA([...cA,$])},wA=y=>{BA(cA.filter(L=>L.id!==y)),iA(null)},YA=(y,L)=>{U||(y.stopPropagation(),CA.current=!0,SA(L),iA(null),F.current.getBoundingClientRect(),P.current={x:y.clientX,y:y.clientY},kA.current=performance.now())},$A=S.useCallback(y=>{if(!CA.current||!J)return;const L=performance.now(),$=(L-kA.current)/1e3;kA.current=L;const lA=F.current.getBoundingClientRect();y.clientX-lA.left,y.clientY-lA.top;const dA=y.clientX-P.current.x,EA=y.clientY-P.current.y;P.current={x:y.clientX,y:y.clientY},uA.current={x:dA/($||.016),y:EA/($||.016)};const D=EA/pA,vA=Math.max(20,J.y+D),NA={...J,y:vA};TA(zA=>zA.map(oe=>oe.id===J.id?NA:oe)),SA(NA)},[J,pA]),PA=S.useCallback(()=>{if(CA.current){if(CA.current=!1,Math.abs(uA.current.y)>50){const L=uA.current.y*.9;LA($=>({x:$.x,y:$.y-L}))}uA.current={x:0,y:0}}},[]),ie=(y,L)=>{y.stopPropagation(),U?hA?hA!==L.id&&(cA.find(lA=>lA.from===hA&&lA.to===L.id||lA.from===L.id&&lA.to===hA)||K(hA,L.id),V(!1),rA(null)):rA(L.id):CA.current||(SA(L),iA(null))},de=(y,L)=>{if(!y||!L)return"";const $=UA(y.timeline)+120/2,lA=y.y+60/2,dA=UA(L.timeline)+120/2,EA=L.y+60/2,D=fA();if(D&&(y.id===D.id||L.id===D.id)){const NA=dA-$,zA=EA-lA,oe=Math.sqrt(NA*NA+zA*zA),XA=Math.min(oe*.4,100),fe=$+(NA>0?XA:-XA),re=dA+(NA>0?-XA:XA);return`M ${$} ${lA}
              C ${fe} ${lA},
                ${re} ${EA},
                ${dA} ${EA}`}else{const NA=Math.abs($-dA)*.3+Math.abs(lA-EA)*.2;return`M ${$} ${lA}
              C ${$+NA} ${lA},
                ${dA-NA} ${EA},
                ${dA} ${EA}`}},Oe=(y,L)=>{const $=UA(y.timeline)+60,lA=y.y+60/2,dA=UA(L.timeline)+120/2,EA=L.y+60/2;return{x:($+dA)/2,y:(lA+EA)/2}},ee=()=>{if(!i)return;const L=JSON.stringify({project:i,nodes:gA,connections:cA,zoom:pA,pan:sA},null,2),$=new Blob([L],{type:"application/json"}),lA=URL.createObjectURL($),dA=document.createElement("a");dA.href=lA,dA.download=`${i.name.replace(/\s+/g,"-")}-evolution-chart.json`,dA.click(),URL.revokeObjectURL(lA)},Ue=y=>{const L=y.target.files[0];if(!L)return;const $=new FileReader;$.onload=lA=>{try{const dA=JSON.parse(lA.target.result);dA.project&&dA.nodes&&(o({...dA.project,nodes:dA.nodes,connections:dA.connections,zoom:dA.zoom,pan:dA.pan}),TA(dA.nodes),BA(dA.connections),HA(dA.zoom||1),OA(dA.pan||{x:0,y:0}),LA(dA.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},$.readAsText(L)},Ve=y=>{y.ctrlKey||y.metaKey?I(y.clientX,y.clientY):(SA(null),iA(null),U&&(V(!1),rA(null)))},Ke=y=>{RA(y),oA(!0)},Je=(y,L=null,$=null)=>{const lA=Math.max(.1,Math.min(5,pA+y));if(L!==null&&$!==null){const dA=F.current.getBoundingClientRect(),EA=L-dA.left,D=$-dA.top-60,vA={x:EA-(EA-sA.x)*(lA/pA),y:D-(D-sA.y)*(lA/pA)};OA(vA),LA(vA)}HA(lA)},me=y=>{y.preventDefault();const L=.5;y.shiftKey?LA($=>({x:$.x-y.deltaY*L,y:$.y})):LA($=>({x:$.x-y.deltaX*L,y:$.y-y.deltaY*L}))};S.useEffect(()=>{const y=()=>PA();return document.addEventListener("mousemove",$A),document.addEventListener("mouseup",y),()=>{document.removeEventListener("mousemove",$A),document.removeEventListener("mouseup",y)}},[$A,PA]);const ue=fA();return n.jsxs("div",{className:"evolution-chart-maker",children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"🧬 Evolution Chart Maker"}),n.jsx("span",{className:"project-name",children:i?.name})]}),n.jsxs("div",{className:"toolbar",children:[n.jsx("button",{onClick:d,className:"toolbar-btn primary",children:"← Back to Projects"}),n.jsx("button",{onClick:()=>{V(!U),rA(null)},className:`toolbar-btn ${U?"danger":"warning"}`,children:U?"Cancel":"Connect"}),n.jsxs("button",{onClick:()=>M.current?.click(),className:"toolbar-btn warning",children:[n.jsx(dn,{size:16})," Import"]}),n.jsxs("button",{onClick:ee,className:"toolbar-btn info",children:[n.jsx(In,{size:16})," Export"]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>Je(.1),className:"zoom-btn",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:()=>Je(-.1),className:"zoom-btn",children:n.jsx(Mr,{size:16})})]})]})]}),n.jsx("div",{className:"timeline",children:FA().map((y,L)=>n.jsxs("div",{className:"timeline-marker",style:{left:`${y.position*(F.current?.offsetWidth||800)*pA+sA.x}px`},children:[n.jsx("div",{className:"timeline-line"}),n.jsx("span",{className:"timeline-label",children:T(y.value,y.unit)})]},L))}),n.jsxs("div",{ref:F,onClick:Ve,onWheel:me,className:"canvas",style:{cursor:U?"crosshair":CA.current?"grabbing":"default"},children:[n.jsx("svg",{className:"connections-svg",children:cA.map(y=>{const L=gA.find(D=>D.id===y.from),$=gA.find(D=>D.id===y.to);if(!L||!$)return null;const lA=Oe(L,$),dA=_===y.id||J&&(J.id===L.id||J.id===$.id),EA=ue&&(L.id===ue.id||$.id===ue.id);return n.jsxs("g",{children:[n.jsx("path",{d:de(L,$),stroke:dA?b:EA?v:x,strokeWidth:EA?dA?"4":"3":dA?"3":"2",fill:"none",opacity:EA?"0.9":"0.7",transform:`translate(${sA.x}, ${sA.y+60}) scale(${pA})`,strokeDasharray:EA?"none":"5,5"}),dA&&n.jsx("circle",{cx:lA.x*pA+sA.x,cy:lA.y*pA+sA.y+60,r:8*pA,fill:"#e53e3e",onClick:D=>{D.stopPropagation(),wA(y.id)},style:{cursor:"pointer",pointerEvents:"auto"}})]},y.id)})}),gA.map(y=>{const L=ue&&ue.id===y.id;return n.jsxs("div",{className:`node ${J?.id===y.id?"selected":""} ${L?"central":""}`,style:{left:`${UA(y.timeline)*pA+sA.x}px`,top:`${y.y*pA+sA.y+60}px`,width:`${120*pA}px`,height:`${60*pA}px`,transform:J?.id===y.id&&CA.current?"scale(1.02)":"scale(1)",transition:"transform 0.1s ease"},onMouseDown:$=>YA($,y),onClick:$=>ie($,y),onDoubleClick:()=>Ke(y),children:[n.jsxs("div",{className:"node-content",children:[y.imageSrc&&n.jsx("img",{src:y.imageSrc,alt:y.title,className:"node-image",style:{width:`${28*pA}px`,height:`${28*pA}px`}}),n.jsxs("div",{className:"node-text",children:[n.jsx("div",{className:"node-title",style:{fontSize:`${10*pA}px`},children:y.title}),n.jsx("div",{className:"node-timeline",style:{fontSize:`${8*pA}px`},children:T(y.timeline.value,y.timeline.unit)})]})]}),J?.id===y.id&&n.jsx("button",{onClick:$=>{$.stopPropagation(),IA(y.id)},className:"delete-node-btn",style:{width:`${20*pA}px`,height:`${20*pA}px`},children:n.jsx(Be,{size:10*pA})})]},y.id)}),U&&n.jsx("div",{className:"connection-mode-indicator",children:hA?"Select child node":"Select parent node"}),n.jsxs("div",{className:"instructions-panel",children:[n.jsxs("div",{children:["💡 ",n.jsx("strong",{children:"Ctrl+Click:"})," Create new node"]}),n.jsxs("div",{children:["🔗 ",n.jsx("strong",{children:"Connect Mode:"})," Click two nodes to link them"]}),n.jsxs("div",{children:["❌ ",n.jsx("strong",{children:"Click connection midpoint:"})," Delete connection"]}),n.jsxs("div",{children:["📍 ",n.jsx("strong",{children:"Drag:"})," Move nodes vertically"]}),n.jsxs("div",{children:["✏️ ",n.jsx("strong",{children:"Double-click:"})," Edit node details"]}),n.jsxs("div",{children:["🔍 ",n.jsx("strong",{children:"Scroll:"})," Pan | ",n.jsx("strong",{children:"Shift+Scroll:"})," Horizontal Pan"]})]})]}),G&&xA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Edit Node"}),n.jsx("button",{onClick:()=>oA(!1),className:"close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Title"}),n.jsx("input",{type:"text",defaultValue:xA.title,placeholder:"Species name",id:"nodeTitle"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Image URL"}),n.jsx("input",{type:"text",defaultValue:xA.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Value"}),n.jsx("input",{type:"number",defaultValue:xA.timeline.value,id:"nodeTimelineValue"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsx("select",{id:"nodeTimelineUnit",defaultValue:xA.timeline.unit,children:fs.map(y=>n.jsx("option",{value:y.value,children:y.value.toUpperCase()},y.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{defaultValue:xA.description,placeholder:"Brief description of the species...",rows:4,id:"nodeDescription"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{onClick:()=>oA(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const y={...xA,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};q(y)},className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("input",{ref:M,type:"file",accept:".json",onChange:Ue,style:{display:"none"}}),n.jsx("style",{jsx:!0,children:`
        .evolution-chart-maker {
          width: 91.7vw;
          height: 100vh;
          background: #4a90a4;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.95);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .project-name {
          background: #4299e1;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .toolbar {
          display: flex;
          gap: 8px;
        }
        
        .toolbar-btn {
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .primary {
          background: #48bb78;
        }
        
        .warning {
          background: #ed8936;
        }
        
        .danger {
          background: #f56565;
        }
        
        .info {
          background: #4299e1;
        }
        
        .zoom-controls {
          display: flex;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background: #e2e8f0;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid #4299e1;
          z-index: 100;
          overflow: hidden;
        }
        
        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 60px;
        }
        
        .timeline-line {
          width: 2px;
          height: 20px;
          background: #4299e1;
          margin-bottom: 4px;
        }
        
        .timeline-label {
          font-size: 12px;
          font-weight: 600;
          color: #2d3748;
          white-space: nowrap;
        }
        
        .canvas {
          position: absolute;
          top: 130px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          background: #4a90a4;
        }
        
        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .node {
          position: absolute;
          background: #66bb6a;
          border-radius: 12px;
          padding: 6px 8px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .node.selected {
          background: #81c784;
          border: 2px solid #2e7d32;
          z-index: 100;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        
        .node.central {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          border: 3px solid #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .node.central.selected {
          background: linear-gradient(135deg, #ff5252, #26a69a);
          border: 3px solid #ffeb3b;
          box-shadow: 0 6px 24px rgba(0,0,0,0.4);
        }
        
        .node-content {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
          pointer-events: none;
        }
        
        .node-text {
          flex: 1;
          min-width: 0;
        }
        
        .node-title {
          color: white;
          font-weight: 600;
          text-align: left;
          margin-bottom: 1px;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .node-timeline {
          color: rgba(255,255,255,0.9);
          text-align: left;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .delete-node-btn {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #e53e3e;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }
        
        .connection-mode-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        
        .instructions-panel {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 12px;
          color: #4a5568;
          z-index: 100;
          backdrop-filter: blur(10px);
        }
        
        .instructions-panel div {
          margin-bottom: 4px;
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 400px;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
        }
        
        .cancel-btn {
          flex: 1;
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        .save-btn {
          flex: 1;
          background: #48bb78;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
      `})]})},yw=({flowcharts:i,onCreateFlowchart:r,onLoadFlowchart:s,onDeleteFlowchart:o,onImportFlowchart:d})=>{const[u,h]=S.useState(!1),[m,x]=S.useState(!1),[b,v]=S.useState("");return n.jsxs("div",{className:"flowchart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"📊"}),n.jsx("h2",{children:"Flowchart Designer"}),n.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>h(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Flowchart"]}),n.jsxs("button",{onClick:()=>x(!0),className:"secondary-btn",children:[n.jsx(dn,{size:16})," Import"]})]}),i.length>0&&n.jsxs("div",{className:"flowchart-list",children:[n.jsx("h3",{children:"Your Flowcharts"}),i.map(F=>n.jsxs("div",{className:"flowchart-card",onClick:()=>s(F),children:[n.jsxs("div",{className:"flowchart-card-content",children:[n.jsx("div",{className:"flowchart-card-name",children:F.name}),n.jsxs("div",{className:"flowchart-card-meta",children:[n.jsx("span",{children:new Date(F.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[F.nodes?.length||0," nodes • ",F.edges?.length||0," edges"]})]})]}),n.jsxs("div",{className:"flowchart-card-actions",children:[n.jsx("button",{onClick:M=>{M.stopPropagation(),s(F)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:M=>{M.stopPropagation(),confirm("Delete this flowchart?")&&o(F.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},F.id))]})]}),u&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Flowchart"}),n.jsx("button",{onClick:()=>h(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Flowchart Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>h(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const F=document.getElementById("flowchartName").value;F.trim()&&(r(F),h(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),m&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Import Flowchart"}),n.jsx("button",{onClick:()=>x(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Paste JSON Data"}),n.jsx("textarea",{value:b,onChange:F=>v(F.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>x(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{try{d(b),x(!1),v("")}catch(F){alert("Invalid JSON: "+F.message)}},className:"create-btn",children:"Import"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .flowchart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #4f46e5;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }
        
        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .flowchart-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .flowchart-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .flowchart-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .flowchart-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .flowchart-card-content {
          flex: 1;
        }
        
        .flowchart-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .flowchart-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
        }
        
        .flowchart-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4f46e5;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #4338ca;
        }
      `})]})},vw=({flowchart:i,nodes:r,edges:s,jsonInput:o,onJsonInputChange:d,onImportJson:u,onUpdateFlowchart:h,onBack:m})=>{const[x,b]=S.useState("editor"),[v,F]=S.useState(null),[M,aA]=S.useState(null),[P,uA]=S.useState(null),[kA,CA]=S.useState(null),[gA,TA]=S.useState(null),[cA,BA]=S.useState(null),[J,SA]=S.useState(""),[_,iA]=S.useState(!1),[pA,HA]=S.useState(null),[sA,OA]=S.useState(!1),[_A,LA]=S.useState(""),[G,oA]=S.useState(null),[xA,RA]=S.useState("dark"),[U,V]=S.useState(null),[hA,rA]=S.useState(null),[UA,MA]=S.useState(!1),[T,QA]=S.useState(!1),[FA,fA]=S.useState(null),I=S.useRef(null),q=S.useRef(null),K={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#a855f7",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#333",nodeFill:"#4f46e5",nodeStroke:"#7c3aed",edgeStroke:"#4f46e5",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b"}}[xA];S.useEffect(()=>{const f=C=>{if(C.key==="Control"||C.key==="Meta")MA(!0);else if(C.key==="Shift")QA(!0);else if(C.key==="Delete")M?NA():P?zA():U&&oe();else if(U&&!C.ctrlKey&&!C.metaKey){let E=0,H=0;const Y=C.shiftKey?10:2;switch(C.key){case"ArrowUp":H=-Y;break;case"ArrowDown":H=Y;break;case"ArrowLeft":E=-Y;break;case"ArrowRight":E=Y;break;default:return}C.preventDefault(),wA(U.edgeId,U.pointIndex,E,H)}},B=C=>{C.key==="Control"||C.key==="Meta"?MA(!1):C.key==="Shift"&&QA(!1)};return document.addEventListener("keydown",f),document.addEventListener("keyup",B),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",B)}},[M,P,U]);const wA=(f,B,C,E)=>{const H=s.map(Y=>{if(Y.id===f){const tA=[...Y.controlPoints||[]];return tA[B]&&(tA[B]={x:tA[B].x+C,y:tA[B].y+E}),{...Y,controlPoints:tA}}return Y});h({...i,edges:H})},YA=()=>JSON.stringify({nodes:r,edges:s},null,2),$A=()=>{const f=new Blob([YA()],{type:"application/json"}),B=URL.createObjectURL(f),C=document.createElement("a");C.href=B,C.download=`${i?.name||"use-case-diagram"}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(B),b("json")},PA=f=>{const B=f.target.files[0];if(!B)return;const C=new FileReader;C.onload=E=>{try{const H=JSON.parse(E.target.result);d(JSON.stringify(H,null,2)),b("json")}catch{alert("Invalid JSON file")}},C.readAsText(B),f.target.value=""},ie=()=>{try{const f=JSON.parse(o);h({...i,nodes:f.nodes||[],edges:f.edges||[]})}catch(f){alert("Invalid JSON: "+f.message)}},de=(f,B,C)=>{const E=C.x+C.width/2,H=C.y+C.height/2,Y=Math.abs(f-E),R=Math.abs(B-H);return Y/(C.width/2)+R/(C.height/2)<=1},Oe=(f,B,C)=>{const E=f-C.x,H=B-C.y,Y=C.height*.3;if(H<0||H>C.height)return!1;const R=H/C.height,tA=-Y+R*Y*2,nA=C.width+Y-R*Y*2;return E>=tA&&E<=nA},ee=(f,B,C)=>{const E=f.x+f.width/2,H=f.y+f.height/2;if(f.type==="circle"){const Y=f.width/2,R=Math.atan2(C-H,B-E);return{x:E+Y*Math.cos(R),y:H+Y*Math.sin(R)}}else if(f.type==="oval"){const Y=f.width/2,R=f.height/2,tA=Math.atan2(C-H,B-E),nA=Math.cos(tA),Q=Math.sin(tA),k=Math.sqrt(1/(Math.pow(nA/Y,2)+Math.pow(Q/R,2)));return{x:E+k*nA,y:H+k*Q}}else if(f.type==="diamond"){const Y=B-E,R=C-H,tA=f.width/2,nA=f.height/2,Q=Math.abs(Y)>0?tA/Math.abs(Y):1/0,k=Math.abs(R)>0?nA/Math.abs(R):1/0,X=Math.min(Q,k),jA=E+Y/Math.abs(Y)*Math.min(Math.abs(Y),tA*X),KA=H+R/Math.abs(R)*Math.min(Math.abs(R),nA*X),ZA=Math.abs(jA-E)/tA,WA=Math.abs(KA-H)/nA,se=1/(ZA+WA);return{x:E+(jA-E)*se,y:H+(KA-H)*se}}else if(f.type==="rhombus"){const Y=B-E,R=C-H,tA=f.height*.3,nA=Math.max(0,Math.min(1,(C-f.y)/f.height));if(Math.abs(Y)>Math.abs(R)*.8){const Q=Y>0?f.x+f.width+tA-nA*tA*2:f.x-tA+nA*tA*2,k=f.y+nA*f.height,X=Y>0?f.x+f.width-tA:f.x+tA,jA=Y>0?f.x+f.width+tA:f.x-tA;return Y>0,f.y,Y>0,f.y+f.height,{x:Math.max(Math.min(Q,Math.max(X,jA)),Math.min(X,jA)),y:Math.max(Math.min(k,f.y+f.height),f.y)}}else{const Q=R>0?f.y+f.height:f.y,k=E+Y*.7,X=tA*(1-Math.abs(R)/f.height);return{x:Math.max(f.x-X,Math.min(f.x+f.width+X,k)),y:Q}}}else{const Y=B-E,R=C-H,tA=f.width/2,nA=f.height/2;if(Math.abs(Y)*nA>Math.abs(R)*tA){const Q=Y>0?f.x+f.width:f.x,k=H+R/Math.abs(Y)*tA;return{x:Q,y:Math.max(f.y,Math.min(f.y+f.height,k))}}else{const Q=R>0?f.y+f.height:f.y,k=E+Y/Math.abs(R)*nA;return{x:Math.max(f.x,Math.min(f.x+f.width,k)),y:Q}}}},Ue=(f,B,C=null)=>r.some(E=>{if(E.id===C)return!1;if(E.type==="circle"){const H=E.x+E.width/2,Y=E.y+E.height/2;return Math.sqrt(Math.pow(f-H,2)+Math.pow(B-Y,2))<=E.width/2+5}else if(E.type==="oval"){const H=E.x+E.width/2,Y=E.y+E.height/2,R=(f-H)/(E.width/2+5),tA=(B-Y)/(E.height/2+5);return Math.pow(R,2)+Math.pow(tA,2)<=1}else return E.type==="diamond"?de(f,B,{...E,width:E.width+10,height:E.height+10,x:E.x-5,y:E.y-5}):E.type==="rhombus"?Oe(f,B,{...E,width:E.width+10,height:E.height+10,x:E.x-5,y:E.y-5}):f>=E.x-5&&f<=E.x+E.width+5&&B>=E.y-5&&B<=E.y+E.height+5}),Ve=(f,B,C=[])=>{const E={x:f.x+f.width/2,y:f.y+f.height/2},H={x:B.x+B.width/2,y:B.y+B.height/2},Y=ee(f,H.x,H.y),R=ee(B,E.x,E.y);if(C&&C.length>0)return[Y,...C,R];const tA=R.x-Y.x,nA=R.y-Y.y,Q=Math.sqrt(tA*tA+nA*nA),k=!Ke(Y,R,[f.id,B.id]);return Q<80||k?[Y,R]:Je(Y,R,f,B)},Ke=(f,B,C=[])=>{const E=Math.ceil(Math.sqrt(Math.pow(B.x-f.x,2)+Math.pow(B.y-f.y,2))/10);for(let H=0;H<=E;H++){const Y=H/E,R=f.x+(B.x-f.x)*Y,tA=f.y+(B.y-f.y)*Y;if(Ue(R,tA,...C))return!0}return!1},Je=(f,B,C,E)=>{const H=B.x-f.x,Y=B.y-f.y,R=[()=>{const tA=f.x+H*.7,nA=[f,{x:tA,y:f.y},{x:tA,y:B.y},B];return Ke(nA[1],nA[2],[C.id,E.id])?null:nA},()=>{const tA=f.y+Y*.7,nA=[f,{x:f.x,y:tA},{x:B.x,y:tA},B];return Ke(nA[1],nA[2],[C.id,E.id])?null:nA},()=>{const tA=Math.abs(Y)>Math.abs(H)?100:50,nA=f.x+H*.5+(H>0?tA:-tA);return[f,{x:nA,y:f.y},{x:nA,y:B.y},B]},()=>{const tA=Math.abs(H)>Math.abs(Y)?100:50,nA=f.y+Y*.5+(Y>0?tA:-tA);return[f,{x:f.x,y:nA},{x:B.x,y:nA},B]}];for(const tA of R){const nA=tA();if(nA)return nA}return[f,B]},me=f=>{if(f.length<=2)return{x:(f[0].x+f[f.length-1].x)/2,y:(f[0].y+f[f.length-1].y)/2};let B=0,C=0;for(let E=0;E<f.length-1;E++){const H=Math.sqrt(Math.pow(f[E+1].x-f[E].x,2)+Math.pow(f[E+1].y-f[E].y,2));H>B&&(B=H,C=E)}return{x:(f[C].x+f[C+1].x)/2,y:(f[C].y+f[C+1].y)/2}},ue=(f,B,C,E=8)=>{const H=f.x-B.x,Y=f.y-B.y,R=C.x-B.x,tA=C.y-B.y,nA=H*R+Y*tA,Q=R*R+tA*tA;if(Q===0)return!1;const k=nA/Q;if(k<0||k>1)return!1;const X=B.x+k*R,jA=B.y+k*tA,KA=f.x-X,ZA=f.y-jA;return Math.sqrt(KA*KA+ZA*ZA)<=E},y=(f,B)=>{for(const C of s){const E=r.find(R=>R.id===C.from),H=r.find(R=>R.id===C.to);if(!E||!H)continue;const Y=Ve(E,H,C.controlPoints);for(let R=0;R<Y.length-1;R++)if(ue({x:f,y:B},Y[R],Y[R+1]))return C}return null},L=(f,B)=>{for(const C of s)if(C.controlPoints)for(let E=0;E<C.controlPoints.length;E++){const H=C.controlPoints[E];if(Math.sqrt(Math.pow(f-H.x,2)+Math.pow(B-H.y,2))<=8)return{edgeId:C.id,pointIndex:E,point:H}}return null},$=f=>{if(gA||cA)return;const C=f.currentTarget.getBoundingClientRect(),E=(f.clientX-C.left-i.pan.x)/i.zoom,H=(f.clientY-C.top-i.pan.y)/i.zoom,Y=L(E,H);if(Y){V(Y),aA(null),uA(null);return}const R=r.find(nA=>{if(nA.type==="circle"){const Q=nA.x+nA.width/2,k=nA.y+nA.height/2;return Math.sqrt(Math.pow(E-Q,2)+Math.pow(H-k,2))<=nA.width/2}else if(nA.type==="oval"){const Q=nA.x+nA.width/2,k=nA.y+nA.height/2,X=(E-Q)/(nA.width/2),jA=(H-k)/(nA.height/2);return Math.pow(X,2)+Math.pow(jA,2)<=1}else return nA.type==="diamond"?de(E,H,nA):nA.type==="rhombus"?Oe(E,H,nA):E>=nA.x&&E<=nA.x+nA.width&&H>=nA.y&&H<=nA.y+nA.height}),tA=R?null:y(E,H);if(T&&P&&tA&&tA.id===P.id){lA(P.id,E,H);return}if(UA&&R){fA({x:E,y:H,node:R}),HA(R),iA(!0);return}if(_&&R){if(!pA)HA(R);else if(R.id!==pA.id)if(pA.type==="diamond"||pA.type==="rhombus")oA({id:Date.now(),from:pA.id,to:R.id}),OA(!0);else{const nA={id:Date.now(),from:pA.id,to:R.id,label:"",controlPoints:[]};h({...i,edges:[...s,nA]}),HA(null),iA(!1),F(null),fA(null)}return}if(R){aA(R),uA(null),V(null);return}if(tA){uA(tA),aA(null),V(null);return}if(v&&v!=="arrow"){const nA={id:Date.now(),type:v,x:E-(v==="circle"||v==="oval"?30:60),y:H-30,width:v==="circle"?60:v==="oval"?100:120,height:60,text:dA(v)};h({...i,nodes:[...r,nA]}),F(null)}aA(null),uA(null),V(null)},lA=(f,B,C)=>{const E=s.map(H=>{if(H.id===f){const Y=H.controlPoints||[];return{...H,controlPoints:[...Y,{x:B,y:C}]}}return H});h({...i,edges:E})},dA=f=>{switch(f){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return f.charAt(0).toUpperCase()+f.slice(1)}},EA=f=>{TA(f.id),SA(f.text)},D=f=>{BA(f.id),SA(f.label||"")},vA=()=>{if(gA){const f=r.map(B=>B.id===gA?{...B,text:J}:B);h({...i,nodes:f}),TA(null)}else if(cA){const f=s.map(B=>B.id===cA?{...B,label:J}:B);h({...i,edges:f}),BA(null)}SA("")},NA=()=>{if(!M)return;const f=r.filter(C=>C.id!==M.id),B=s.filter(C=>C.from!==M.id&&C.to!==M.id);h({...i,nodes:f,edges:B}),aA(null)},zA=()=>{if(!P)return;const f=s.filter(B=>B.id!==P.id);h({...i,edges:f}),uA(null)},oe=()=>{if(!U)return;const f=s.map(B=>{if(B.id===U.edgeId){const E=(B.controlPoints||[]).filter((H,Y)=>Y!==U.pointIndex);return{...B,controlPoints:E}}return B});h({...i,edges:f}),V(null)},XA=(f,B)=>{if(gA||cA)return;const E=I.current.getBoundingClientRect(),H=f.clientX-E.left,Y=f.clientY-E.top;CA({nodeId:B.id,startX:H,startY:Y,originalX:B.x,originalY:B.y})},fe=(f,B,C)=>{if(gA||cA)return;f.stopPropagation();const H=I.current.getBoundingClientRect(),Y=f.clientX-H.left,R=f.clientY-H.top,nA=s.find(Q=>Q.id===B)?.controlPoints?.[C];nA&&rA({edgeId:B,pointIndex:C,startX:Y,startY:R,originalX:nA.x,originalY:nA.y})},re=S.useCallback(f=>{if(kA){const C=I.current.getBoundingClientRect(),E=f.clientX-C.left,H=f.clientY-C.top,Y=(E-kA.startX)/i.zoom,R=(H-kA.startY)/i.zoom,tA=r.map(nA=>nA.id===kA.nodeId?{...nA,x:kA.originalX+Y,y:kA.originalY+R}:nA);h({...i,nodes:tA})}else if(hA){const C=I.current.getBoundingClientRect(),E=f.clientX-C.left,H=f.clientY-C.top,Y=(E-hA.startX)/i.zoom,R=(H-hA.startY)/i.zoom,tA=s.map(nA=>{if(nA.id===hA.edgeId){const k=[...nA.controlPoints||[]];return k[hA.pointIndex]={x:hA.originalX+Y,y:hA.originalY+R},{...nA,controlPoints:k}}return nA});h({...i,edges:tA})}},[kA,hA,r,s,i,h]),ye=S.useCallback(()=>{CA(null),rA(null)},[]);S.useEffect(()=>{if(kA||hA)return document.addEventListener("mousemove",re),document.addEventListener("mouseup",ye),()=>{document.removeEventListener("mousemove",re),document.removeEventListener("mouseup",ye)}},[kA,hA,re,ye]);const pt=()=>{F("arrow"),iA(!0),HA(null),fA(null)},De=()=>{if(!G)return;const f={...G,label:_A,controlPoints:[]};h({...i,edges:[...s,f]}),HA(null),iA(!1),F(null),OA(!1),oA(null),LA(""),fA(null)},Ce=()=>{const f=document.createElement("canvas"),B=f.getContext("2d");let C=1/0,E=1/0,H=-1/0,Y=-1/0;r.forEach(k=>{C=Math.min(C,k.x),E=Math.min(E,k.y),H=Math.max(H,k.x+k.width),Y=Math.max(Y,k.y+k.height)}),s.forEach(k=>{const X=r.find(KA=>KA.id===k.from),jA=r.find(KA=>KA.id===k.to);X&&jA&&Ve(X,jA,k.controlPoints).forEach(ZA=>{C=Math.min(C,ZA.x),E=Math.min(E,ZA.y),H=Math.max(H,ZA.x),Y=Math.max(Y,ZA.y)})});const R=40;C-=R,E-=R,H+=R,Y+=R;const tA=H-C,nA=Y-E;f.width=tA,f.height=nA,B.fillStyle=K.background,B.fillRect(0,0,tA,nA),s.forEach(k=>{const X=r.find(KA=>KA.id===k.from),jA=r.find(KA=>KA.id===k.to);if(X&&jA){const ZA=Ve(X,jA,k.controlPoints).map(be=>({x:be.x-C,y:be.y-E}));B.strokeStyle=K.edgeStroke,B.lineWidth=2,B.beginPath(),B.moveTo(ZA[0].x,ZA[0].y);for(let be=1;be<ZA.length;be++)B.lineTo(ZA[be].x,ZA[be].y);B.stroke();const WA=ZA[ZA.length-1],se=ZA[ZA.length-2],Re=Math.atan2(WA.y-se.y,WA.x-se.x);if(B.fillStyle=K.edgeStroke,B.beginPath(),B.moveTo(WA.x,WA.y),B.lineTo(WA.x-12*Math.cos(Re-Math.PI/6),WA.y-12*Math.sin(Re-Math.PI/6)),B.lineTo(WA.x-12*Math.cos(Re+Math.PI/6),WA.y-12*Math.sin(Re+Math.PI/6)),B.closePath(),B.fill(),k.label){const be=me(ZA);B.fillStyle=K.text,B.font="12px Arial",B.textAlign="center",B.fillText(k.label,be.x,be.y-5)}}}),r.forEach(k=>{const X=k.x-C,jA=k.y-E;if(B.fillStyle=K.nodeFill,B.strokeStyle=K.nodeStroke,B.lineWidth=2,k.type==="rectangle")B.beginPath(),B.roundRect(X,jA,k.width,k.height,4),B.fill(),B.stroke();else if(k.type==="circle")B.beginPath(),B.arc(X+k.width/2,jA+k.height/2,k.width/2,0,2*Math.PI),B.fill(),B.stroke();else if(k.type==="diamond")B.beginPath(),B.moveTo(X+k.width/2,jA),B.lineTo(X+k.width,jA+k.height/2),B.lineTo(X+k.width/2,jA+k.height),B.lineTo(X,jA+k.height/2),B.closePath(),B.fill(),B.stroke();else if(k.type==="rhombus"){const KA=k.height*.3;B.beginPath(),B.moveTo(X-KA,jA),B.lineTo(X+k.width-KA,jA),B.lineTo(X+k.width+KA,jA+k.height),B.lineTo(X+KA,jA+k.height),B.closePath(),B.fill(),B.stroke()}else k.type==="oval"&&(B.beginPath(),B.ellipse(X+k.width/2,jA+k.height/2,k.width/2,k.height/2,0,0,2*Math.PI),B.fill(),B.stroke());B.fillStyle=K.text,B.font="12px Arial",B.textAlign="center",B.textBaseline="middle",B.fillText(k.text,X+k.width/2,jA+k.height/2)});const Q=document.createElement("a");Q.download=`${i.name||"flowchart"}.png`,Q.href=f.toDataURL("image/png"),Q.click()},g=f=>{const B=M?.id===f.id,C=gA===f.id,E=_&&pA?.id===f.id;let H={position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:B?K.highlight:K.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:K.text,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:B?`2px solid ${K.nodeStroke}`:E?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",transition:"all 0.2s ease",zIndex:B?1e3:1};return f.type==="circle"||f.type==="oval"?H.borderRadius="50%":f.type==="diamond"?(H.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",H.borderRadius="0"):f.type==="rhombus"?(H.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",H.borderRadius="0"):H.borderRadius="8px",n.jsx("div",{style:H,onMouseDown:Y=>XA(Y,f),onDoubleClick:()=>EA(f),children:C?n.jsx("input",{type:"text",value:J,onChange:Y=>SA(Y.target.value),onBlur:vA,onKeyPress:Y=>Y.key==="Enter"&&vA(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:K.text,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):f.text},f.id)},j=f=>{const B=r.find(R=>R.id===f.from),C=r.find(R=>R.id===f.to);if(!B||!C)return null;const E=Ve(B,C,f.controlPoints),H=P?.id===f.id,Y=cA===f.id;return n.jsxs("div",{children:[E.map((R,tA)=>{if(tA===E.length-1)return null;const nA=E[tA+1],Q=Math.sqrt(Math.pow(nA.x-R.x,2)+Math.pow(nA.y-R.y,2)),k=Math.atan2(nA.y-R.y,nA.x-R.x)*180/Math.PI;return n.jsx("div",{style:{position:"absolute",left:`${R.x}px`,top:`${R.y-(H?1.5:1)}px`,width:`${Q}px`,height:H?"3px":"2px",backgroundColor:H?K.highlight:K.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${k}deg)`,cursor:"pointer",zIndex:H?10:2,borderRadius:"1px"},onClick:X=>{X.stopPropagation(),uA(f),aA(null),V(null)},onDoubleClick:X=>{X.stopPropagation(),D(f)}},`segment-${tA}`)}),f.controlPoints&&f.controlPoints.map((R,tA)=>n.jsx("div",{style:{position:"absolute",left:`${R.x-6}px`,top:`${R.y-6}px`,width:"12px",height:"12px",backgroundColor:U?.edgeId===f.id&&U?.pointIndex===tA?K.highlight:K.nodeStroke,border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:15,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},onMouseDown:nA=>fe(nA,f.id,tA),onClick:nA=>{nA.stopPropagation(),V({edgeId:f.id,pointIndex:tA,point:R})}},`control-${tA}`)),(()=>{const R=E[E.length-1],tA=E[E.length-2],nA=Math.atan2(R.y-tA.y,R.x-tA.x),Q=8,k=Math.PI/6,X={x:R.x-Q*Math.cos(nA-k),y:R.y-Q*Math.sin(nA-k)},jA={x:R.x-Q*Math.cos(nA+k),y:R.y-Q*Math.sin(nA+k)};return n.jsx("svg",{style:{position:"absolute",left:`${Math.min(R.x,X.x,jA.x)-2}px`,top:`${Math.min(R.y,X.y,jA.y)-2}px`,width:`${Math.max(R.x,X.x,jA.x)-Math.min(R.x,X.x,jA.x)+4}px`,height:`${Math.max(R.y,X.y,jA.y)-Math.min(R.y,X.y,jA.y)+4}px`,pointerEvents:"none",zIndex:H?11:3},children:n.jsx("polygon",{points:`${R.x-Math.min(R.x,X.x,jA.x)+2},${R.y-Math.min(R.y,X.y,jA.y)+2} ${X.x-Math.min(R.x,X.x,jA.x)+2},${X.y-Math.min(R.y,X.y,jA.y)+2} ${jA.x-Math.min(R.x,X.x,jA.x)+2},${jA.y-Math.min(R.y,X.y,jA.y)+2}`,fill:H?K.highlight:K.edgeStroke})})})(),(f.label||Y)&&n.jsx("div",{style:{position:"absolute",left:`${me(E).x}px`,top:`${me(E).y-12}px`,color:K.text,fontSize:"11px",fontWeight:"600",backgroundColor:K.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${K.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:H?12:4,minWidth:Y?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:R=>{R.stopPropagation(),uA(f),aA(null),V(null)},onDoubleClick:R=>{R.stopPropagation(),D(f)},children:Y?n.jsx("input",{type:"text",value:J,onChange:R=>SA(R.target.value),onBlur:vA,onKeyPress:R=>R.key==="Enter"&&vA(),style:{background:"transparent",border:"none",color:K.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):f.label})]},f.id)};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:K.background,color:K.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:K.panel,borderRadius:"12px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.name}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:K.background,borderRadius:"8px",border:`1px solid ${K.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:f,label:B,title:C})=>n.jsx("button",{onClick:()=>RA(f),title:C,style:{padding:"8px 12px",backgroundColor:xA===f?K.nodeFill:"transparent",color:xA===f?"white":K.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:B},f))}),n.jsx("button",{onClick:m,style:{padding:"12px 20px",backgroundColor:K.panel,color:K.text,border:`1px solid ${K.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),n.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:K.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("button",{onClick:()=>b("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:x==="editor"?K.nodeFill:"transparent",color:x==="editor"?"white":K.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),n.jsx("button",{onClick:()=>{b("json"),d(YA())},style:{padding:"12px 24px",border:"none",backgroundColor:x==="json"?K.nodeFill:"transparent",color:x==="json"?"white":K.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),x==="editor"?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:K.panel,borderRadius:"12px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"⬜",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"🔷",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:f,icon:B,label:C})=>n.jsxs("button",{onClick:()=>F(f),style:{padding:"10px 16px",backgroundColor:v===f?K.nodeFill:K.background,color:v===f?"white":K.text,border:`1px solid ${K.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:B}),C]},f)),n.jsxs("button",{onClick:pt,style:{padding:"10px 16px",backgroundColor:_?K.nodeFill:K.background,color:_?"white":K.text,border:`1px solid ${K.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:"→"}),_?pA?"Select Target":"Select Source":"Connect"]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[M&&n.jsx("button",{onClick:NA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),P&&n.jsx("button",{onClick:zA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"}),U&&n.jsx("button",{onClick:oe,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Control Point"})]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:Ce,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(YA()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),n.jsx("button",{onClick:$A,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]}),(v||_)&&n.jsxs("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${K.nodeFill}`,borderRadius:"8px",color:K.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[_?pA?`🎯 Click on target node to connect from "${pA.text}"`:"🎯 Click on a node to start connection":`🎨 Click on canvas to place a ${v}`,n.jsx("br",{}),UA&&"🔧 Ctrl pressed: Click on node edge to start connection from specific point",T&&"➕ Shift pressed: Click on edge to add control point"]}),n.jsxs("div",{ref:I,onClick:$,style:{height:"700px",border:`2px dashed ${K.border}`,borderRadius:"12px",backgroundColor:K.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:v?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.length===0&&!v&&n.jsxs("div",{style:{textAlign:"center",color:K.secondaryText,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),n.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),n.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),n.jsxs("div",{style:{position:"absolute",transform:`scale(${i.zoom}) translate(${i.pan.x}px, ${i.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[s.map(j),r.map(g)]})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:K.panel,borderRadius:"8px",border:`1px solid ${K.border}`,fontSize:"13px",color:K.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",n.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Ctrl+Click on node to start connection from specific point • Shift+Click on edge to add control point • Press Delete to remove selected items • Use arrow keys to move control points"]})]}):n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{style:{border:`1px solid ${K.border}`,borderRadius:"12px",padding:"20px",backgroundColor:K.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:K.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),n.jsx("textarea",{value:o,onChange:f=>d(f.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${K.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:K.background,color:K.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:ie,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),n.jsx("button",{onClick:()=>q.current.click(),style:{padding:"12px 20px",backgroundColor:K.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),n.jsx("input",{type:"file",ref:q,onChange:PA,accept:".json",style:{display:"none"}})]})]}),n.jsxs("div",{style:{border:`1px solid ${K.border}`,borderRadius:"12px",padding:"20px",backgroundColor:K.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:K.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),n.jsx("pre",{style:{backgroundColor:K.background,padding:"16px",border:`1px solid ${K.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:K.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:YA()})]})]}),sA&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:n.jsxs("div",{style:{backgroundColor:K.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${K.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[n.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:K.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),n.jsx("p",{style:{color:K.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),n.jsx("input",{type:"text",value:_A,onChange:f=>LA(f.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:K.background,border:`1px solid ${K.border}`,color:K.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:f=>f.key==="Enter"&&De()}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx("button",{onClick:()=>{OA(!1),LA(""),HA(null),iA(!1),F(null)},style:{padding:"10px 16px",backgroundColor:K.background,color:K.text,border:`1px solid ${K.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),n.jsx("button",{onClick:De,style:{padding:"10px 16px",backgroundColor:K.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},Cw=({ganttCharts:i,onCreateGanttChart:r,onLoadGanttChart:s,onDeleteGanttChart:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"gantt-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(PB,{size:48})}),n.jsx("h2",{children:"Gantt Chart Planner"}),n.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Gantt Chart"]})}),i.length>0&&n.jsxs("div",{className:"gantt-list",children:[n.jsx("h3",{children:"Your Gantt Charts"}),i.map(h=>n.jsxs("div",{className:"gantt-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"gantt-card-content",children:[n.jsx("div",{className:"gantt-card-name",children:h.name}),n.jsxs("div",{className:"gantt-card-meta",children:[n.jsxs("span",{children:[n.jsx(WB,{size:14})," ",new Date(h.createdAt).toLocaleDateString()]}),n.jsxs("span",{children:[h.tasks?.length||0," tasks"]})]})]}),n.jsxs("div",{className:"gantt-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this Gantt chart?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Gantt Chart"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("ganttName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .gantt-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3b82f6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .gantt-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .gantt-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .gantt-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .gantt-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .gantt-card-content {
          flex: 1;
        }
        
        .gantt-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .gantt-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .gantt-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563eb;
        }
      `})]})};/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
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
***************************************************************************** */var Ld=function(i,r){return Ld=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])},Ld(i,r)};function en(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Ld(i,r);function s(){this.constructor=i}i.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var Od=function(){return Od=Object.assign||function(r){for(var s,o=1,d=arguments.length;o<d;o++){s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=s[u])}return r},Od.apply(this,arguments)};function vt(i,r,s,o){function d(u){return u instanceof s?u:new s(function(h){h(u)})}return new(s||(s=Promise))(function(u,h){function m(v){try{b(o.next(v))}catch(F){h(F)}}function x(v){try{b(o.throw(v))}catch(F){h(F)}}function b(v){v.done?u(v.value):d(v.value).then(m,x)}b((o=o.apply(i,[])).next())})}function bt(i,r){var s={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},o,d,u,h;return h={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function m(b){return function(v){return x([b,v])}}function x(b){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,d&&(u=b[0]&2?d.return:b[0]?d.throw||((u=d.return)&&u.call(d),0):d.next)&&!(u=u.call(d,b[1])).done)return u;switch(d=0,u&&(b=[b[0]&2,u.value]),b[0]){case 0:case 1:u=b;break;case 4:return s.label++,{value:b[1],done:!1};case 5:s.label++,d=b[1],b=[0];continue;case 7:b=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(b[0]===6||b[0]===2)){s=0;continue}if(b[0]===3&&(!u||b[1]>u[0]&&b[1]<u[3])){s.label=b[1];break}if(b[0]===6&&s.label<u[1]){s.label=u[1],u=b;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(b);break}u[2]&&s.ops.pop(),s.trys.pop();continue}b=r.call(i,s)}catch(v){b=[6,v],d=0}finally{o=u=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}}function hs(i,r,s){if(arguments.length===2)for(var o=0,d=r.length,u;o<d;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return i.concat(u||r)}var Mn=function(){function i(r,s,o,d){this.left=r,this.top=s,this.width=o,this.height=d}return i.prototype.add=function(r,s,o,d){return new i(this.left+r,this.top+s,this.width+o,this.height+d)},i.fromClientRect=function(r,s){return new i(s.left+r.windowBounds.left,s.top+r.windowBounds.top,s.width,s.height)},i.fromDOMRectList=function(r,s){var o=Array.from(s).find(function(d){return d.width!==0});return o?new i(o.left+r.windowBounds.left,o.top+r.windowBounds.top,o.width,o.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i}(),Ws=function(i,r){return Mn.fromClientRect(i,r.getBoundingClientRect())},Qw=function(i){var r=i.body,s=i.documentElement;if(!r||!s)throw new Error("Unable to get document size");var o=Math.max(Math.max(r.scrollWidth,s.scrollWidth),Math.max(r.offsetWidth,s.offsetWidth),Math.max(r.clientWidth,s.clientWidth)),d=Math.max(Math.max(r.scrollHeight,s.scrollHeight),Math.max(r.offsetHeight,s.offsetHeight),Math.max(r.clientHeight,s.clientHeight));return new Mn(0,0,o,d)},$s=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},At=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},op="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Uw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var gs=0;gs<op.length;gs++)Uw[op.charCodeAt(gs)]=gs;var sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ki=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ps=0;ps<sp.length;ps++)Ki[sp.charCodeAt(ps)]=ps;var Ew=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,m,x;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var b=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(b)?b:new Uint8Array(b);for(o=0;o<s;o+=4)u=Ki[i.charCodeAt(o)],h=Ki[i.charCodeAt(o+1)],m=Ki[i.charCodeAt(o+2)],x=Ki[i.charCodeAt(o+3)],v[d++]=u<<2|h>>4,v[d++]=(h&15)<<4|m>>2,v[d++]=(m&3)<<6|x&63;return b},Fw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},jw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Ia=5,cu=11,pd=2,Sw=cu-Ia,gx=65536>>Ia,Hw=1<<Ia,xd=Hw-1,Nw=1024>>Ia,kw=gx+Nw,Mw=kw,Dw=32,Tw=Mw+Dw,Iw=65536>>cu,Lw=1<<Sw,Ow=Lw-1,lp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},Kw=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},Rw=function(i,r){var s=Ew(i),o=Array.isArray(s)?jw(s):new Uint32Array(s),d=Array.isArray(s)?Fw(s):new Uint16Array(s),u=24,h=lp(d,u/2,o[4]/2),m=o[5]===2?lp(d,(u+o[4])/2):Kw(o,Math.ceil((u+o[4])/4));return new zw(o[0],o[1],o[2],o[3],h,m)},zw=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Ia],s=(s<<pd)+(r&xd),this.data[s];if(r<=65535)return s=this.index[gx+(r-55296>>Ia)],s=(s<<pd)+(r&xd),this.data[s];if(r<this.highStart)return s=Tw-Iw+(r>>cu),s=this.index[s],s+=r>>Ia&Ow,s=this.index[s],s=(s<<pd)+(r&xd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),cp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_w=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var xs=0;xs<cp.length;xs++)_w[cp.charCodeAt(xs)]=xs;var Gw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",dp=50,Vw=1,px=2,xx=3,Yw=4,Xw=5,up=7,mx=8,fp=9,ca=10,Kd=11,hp=12,Rd=13,Jw=14,Ri=15,zd=16,ms=17,Mi=18,Zw=19,gp=20,_d=21,Di=22,md=23,yr=24,Tt=25,zi=26,_i=27,vr=28,qw=29,Da=30,Ww=31,Bs=32,bs=33,Gd=34,Vd=35,Yd=36,$i=37,Xd=38,Is=39,Ls=40,Bd=41,Bx=42,$w=43,Pw=[9001,65288],bx="!",xe="×",ws="÷",Jd=Rw(Gw),Hn=[Da,Yd],Zd=[Vw,px,xx,Xw],wx=[ca,mx],pp=[_i,zi],Ay=Zd.concat(wx),xp=[Xd,Is,Ls,Gd,Vd],ey=[Ri,Rd],ty=function(i,r){r===void 0&&(r="strict");var s=[],o=[],d=[];return i.forEach(function(u,h){var m=Jd.get(u);if(m>dp?(d.push(!0),m-=dp):d.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(u)!==-1)return o.push(h),s.push(zd);if(m===Yw||m===Kd){if(h===0)return o.push(h),s.push(Da);var x=s[h-1];return Ay.indexOf(x)===-1?(o.push(o[h-1]),s.push(x)):(o.push(h),s.push(Da))}if(o.push(h),m===Ww)return s.push(r==="strict"?_d:$i);if(m===Bx||m===qw)return s.push(Da);if(m===$w)return u>=131072&&u<=196605||u>=196608&&u<=262141?s.push($i):s.push(Da);s.push(m)}),[o,s,d]},bd=function(i,r,s,o){var d=o[s];if(Array.isArray(i)?i.indexOf(d)!==-1:i===d)for(var u=s;u<=o.length;){u++;var h=o[u];if(h===r)return!0;if(h!==ca)break}if(d===ca)for(var u=s;u>0;){u--;var m=o[u];if(Array.isArray(i)?i.indexOf(m)!==-1:i===m)for(var x=s;x<=o.length;){x++;var h=o[x];if(h===r)return!0;if(h!==ca)break}if(m!==ca)break}return!1},mp=function(i,r){for(var s=i;s>=0;){var o=r[s];if(o===ca)s--;else return o}return 0},ny=function(i,r,s,o,d){if(s[o]===0)return xe;var u=o-1;if(Array.isArray(d)&&d[u]===!0)return xe;var h=u-1,m=u+1,x=r[u],b=h>=0?r[h]:0,v=r[m];if(x===px&&v===xx)return xe;if(Zd.indexOf(x)!==-1)return bx;if(Zd.indexOf(v)!==-1||wx.indexOf(v)!==-1)return xe;if(mp(u,r)===mx)return ws;if(Jd.get(i[u])===Kd||(x===Bs||x===bs)&&Jd.get(i[m])===Kd||x===up||v===up||x===fp||[ca,Rd,Ri].indexOf(x)===-1&&v===fp||[ms,Mi,Zw,yr,vr].indexOf(v)!==-1||mp(u,r)===Di||bd(md,Di,u,r)||bd([ms,Mi],_d,u,r)||bd(hp,hp,u,r))return xe;if(x===ca)return ws;if(x===md||v===md)return xe;if(v===zd||x===zd)return ws;if([Rd,Ri,_d].indexOf(v)!==-1||x===Jw||b===Yd&&ey.indexOf(x)!==-1||x===vr&&v===Yd||v===gp||Hn.indexOf(v)!==-1&&x===Tt||Hn.indexOf(x)!==-1&&v===Tt||x===_i&&[$i,Bs,bs].indexOf(v)!==-1||[$i,Bs,bs].indexOf(x)!==-1&&v===zi||Hn.indexOf(x)!==-1&&pp.indexOf(v)!==-1||pp.indexOf(x)!==-1&&Hn.indexOf(v)!==-1||[_i,zi].indexOf(x)!==-1&&(v===Tt||[Di,Ri].indexOf(v)!==-1&&r[m+1]===Tt)||[Di,Ri].indexOf(x)!==-1&&v===Tt||x===Tt&&[Tt,vr,yr].indexOf(v)!==-1)return xe;if([Tt,vr,yr,ms,Mi].indexOf(v)!==-1)for(var F=u;F>=0;){var M=r[F];if(M===Tt)return xe;if([vr,yr].indexOf(M)!==-1)F--;else break}if([_i,zi].indexOf(v)!==-1)for(var F=[ms,Mi].indexOf(x)!==-1?h:u;F>=0;){var M=r[F];if(M===Tt)return xe;if([vr,yr].indexOf(M)!==-1)F--;else break}if(Xd===x&&[Xd,Is,Gd,Vd].indexOf(v)!==-1||[Is,Gd].indexOf(x)!==-1&&[Is,Ls].indexOf(v)!==-1||[Ls,Vd].indexOf(x)!==-1&&v===Ls||xp.indexOf(x)!==-1&&[gp,zi].indexOf(v)!==-1||xp.indexOf(v)!==-1&&x===_i||Hn.indexOf(x)!==-1&&Hn.indexOf(v)!==-1||x===yr&&Hn.indexOf(v)!==-1||Hn.concat(Tt).indexOf(x)!==-1&&v===Di&&Pw.indexOf(i[m])===-1||Hn.concat(Tt).indexOf(v)!==-1&&x===Mi)return xe;if(x===Bd&&v===Bd){for(var aA=s[u],P=1;aA>0&&(aA--,r[aA]===Bd);)P++;if(P%2!==0)return xe}return x===Bs&&v===bs?xe:ws},ay=function(i,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var s=ty(i,r.lineBreak),o=s[0],d=s[1],u=s[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(d=d.map(function(m){return[Tt,Da,Bx].indexOf(m)!==-1?$i:m}));var h=r.wordBreak==="keep-all"?u.map(function(m,x){return m&&i[x]>=19968&&i[x]<=40959}):void 0;return[o,d,h]},ry=function(){function i(r,s,o,d){this.codePoints=r,this.required=s===bx,this.start=o,this.end=d}return i.prototype.slice=function(){return At.apply(void 0,this.codePoints.slice(this.start,this.end))},i}(),iy=function(i,r){var s=$s(i),o=ay(s,r),d=o[0],u=o[1],h=o[2],m=s.length,x=0,b=0;return{next:function(){if(b>=m)return{done:!0,value:null};for(var v=xe;b<m&&(v=ny(s,u,d,++b,h))===xe;);if(v!==xe||b===m){var F=new ry(s,v,x,b);return x=b,{value:F,done:!1}}return{done:!0,value:null}}}},oy=1,sy=2,to=4,Bp=8,Rs=10,bp=47,Xi=92,ly=9,cy=32,ys=34,Ti=61,dy=35,uy=36,fy=37,vs=39,Cs=40,Ii=41,hy=95,Ft=45,gy=33,py=60,xy=62,my=64,By=91,by=93,wy=61,yy=123,Qs=63,vy=125,wp=124,Cy=126,Qy=128,yp=65533,wd=42,Ta=43,Uy=44,Ey=58,Fy=59,Pi=46,jy=0,Sy=8,Hy=11,Ny=14,ky=31,My=127,ln=-1,yx=48,vx=97,Cx=101,Dy=102,Ty=117,Iy=122,Qx=65,Ux=69,Ex=70,Ly=85,Oy=90,wt=function(i){return i>=yx&&i<=57},Ky=function(i){return i>=55296&&i<=57343},Cr=function(i){return wt(i)||i>=Qx&&i<=Ex||i>=vx&&i<=Dy},Ry=function(i){return i>=vx&&i<=Iy},zy=function(i){return i>=Qx&&i<=Oy},_y=function(i){return Ry(i)||zy(i)},Gy=function(i){return i>=Qy},Us=function(i){return i===Rs||i===ly||i===cy},zs=function(i){return _y(i)||Gy(i)||i===hy},vp=function(i){return zs(i)||wt(i)||i===Ft},Vy=function(i){return i>=jy&&i<=Sy||i===Hy||i>=Ny&&i<=ky||i===My},la=function(i,r){return i!==Xi?!1:r!==Rs},Es=function(i,r,s){return i===Ft?zs(r)||la(r,s):zs(i)?!0:!!(i===Xi&&la(i,r))},yd=function(i,r,s){return i===Ta||i===Ft?wt(r)?!0:r===Pi&&wt(s):wt(i===Pi?r:i)},Yy=function(i){var r=0,s=1;(i[r]===Ta||i[r]===Ft)&&(i[r]===Ft&&(s=-1),r++);for(var o=[];wt(i[r]);)o.push(i[r++]);var d=o.length?parseInt(At.apply(void 0,o),10):0;i[r]===Pi&&r++;for(var u=[];wt(i[r]);)u.push(i[r++]);var h=u.length,m=h?parseInt(At.apply(void 0,u),10):0;(i[r]===Ux||i[r]===Cx)&&r++;var x=1;(i[r]===Ta||i[r]===Ft)&&(i[r]===Ft&&(x=-1),r++);for(var b=[];wt(i[r]);)b.push(i[r++]);var v=b.length?parseInt(At.apply(void 0,b),10):0;return s*(d+m*Math.pow(10,-h))*Math.pow(10,x*v)},Xy={type:2},Jy={type:3},Zy={type:4},qy={type:13},Wy={type:8},$y={type:21},Py={type:9},A1={type:10},e1={type:11},t1={type:12},n1={type:14},Fs={type:23},a1={type:1},r1={type:25},i1={type:24},o1={type:26},s1={type:27},l1={type:28},c1={type:29},d1={type:31},qd={type:32},Fx=function(){function i(){this._value=[]}return i.prototype.write=function(r){this._value=this._value.concat($s(r))},i.prototype.read=function(){for(var r=[],s=this.consumeToken();s!==qd;)r.push(s),s=this.consumeToken();return r},i.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case ys:return this.consumeStringToken(ys);case dy:var s=this.peekCodePoint(0),o=this.peekCodePoint(1),d=this.peekCodePoint(2);if(vp(s)||la(o,d)){var u=Es(s,o,d)?sy:oy,h=this.consumeName();return{type:5,value:h,flags:u}}break;case uy:if(this.peekCodePoint(0)===Ti)return this.consumeCodePoint(),qy;break;case vs:return this.consumeStringToken(vs);case Cs:return Xy;case Ii:return Jy;case wd:if(this.peekCodePoint(0)===Ti)return this.consumeCodePoint(),n1;break;case Ta:if(yd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case Uy:return Zy;case Ft:var m=r,x=this.peekCodePoint(0),b=this.peekCodePoint(1);if(yd(m,x,b))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(Es(m,x,b))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(x===Ft&&b===xy)return this.consumeCodePoint(),this.consumeCodePoint(),i1;break;case Pi:if(yd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case bp:if(this.peekCodePoint(0)===wd)for(this.consumeCodePoint();;){var v=this.consumeCodePoint();if(v===wd&&(v=this.consumeCodePoint(),v===bp))return this.consumeToken();if(v===ln)return this.consumeToken()}break;case Ey:return o1;case Fy:return s1;case py:if(this.peekCodePoint(0)===gy&&this.peekCodePoint(1)===Ft&&this.peekCodePoint(2)===Ft)return this.consumeCodePoint(),this.consumeCodePoint(),r1;break;case my:var F=this.peekCodePoint(0),M=this.peekCodePoint(1),aA=this.peekCodePoint(2);if(Es(F,M,aA)){var h=this.consumeName();return{type:7,value:h}}break;case By:return l1;case Xi:if(la(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case by:return c1;case wy:if(this.peekCodePoint(0)===Ti)return this.consumeCodePoint(),Wy;break;case yy:return e1;case vy:return t1;case Ty:case Ly:var P=this.peekCodePoint(0),uA=this.peekCodePoint(1);return P===Ta&&(Cr(uA)||uA===Qs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case wp:if(this.peekCodePoint(0)===Ti)return this.consumeCodePoint(),Py;if(this.peekCodePoint(0)===wp)return this.consumeCodePoint(),$y;break;case Cy:if(this.peekCodePoint(0)===Ti)return this.consumeCodePoint(),A1;break;case ln:return qd}return Us(r)?(this.consumeWhiteSpace(),d1):wt(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):zs(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:At(r)}},i.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},i.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},i.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},i.prototype.consumeUnicodeRangeToken=function(){for(var r=[],s=this.consumeCodePoint();Cr(s)&&r.length<6;)r.push(s),s=this.consumeCodePoint();for(var o=!1;s===Qs&&r.length<6;)r.push(s),s=this.consumeCodePoint(),o=!0;if(o){var d=parseInt(At.apply(void 0,r.map(function(x){return x===Qs?yx:x})),16),u=parseInt(At.apply(void 0,r.map(function(x){return x===Qs?Ex:x})),16);return{type:30,start:d,end:u}}var h=parseInt(At.apply(void 0,r),16);if(this.peekCodePoint(0)===Ft&&Cr(this.peekCodePoint(1))){this.consumeCodePoint(),s=this.consumeCodePoint();for(var m=[];Cr(s)&&m.length<6;)m.push(s),s=this.consumeCodePoint();var u=parseInt(At.apply(void 0,m),16);return{type:30,start:h,end:u}}else return{type:30,start:h,end:h}},i.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===Cs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Cs?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},i.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===ln)return{type:22,value:""};var s=this.peekCodePoint(0);if(s===vs||s===ys){var o=this.consumeStringToken(this.consumeCodePoint());return o.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===ln||this.peekCodePoint(0)===Ii)?(this.consumeCodePoint(),{type:22,value:o.value}):(this.consumeBadUrlRemnants(),Fs)}for(;;){var d=this.consumeCodePoint();if(d===ln||d===Ii)return{type:22,value:At.apply(void 0,r)};if(Us(d))return this.consumeWhiteSpace(),this.peekCodePoint(0)===ln||this.peekCodePoint(0)===Ii?(this.consumeCodePoint(),{type:22,value:At.apply(void 0,r)}):(this.consumeBadUrlRemnants(),Fs);if(d===ys||d===vs||d===Cs||Vy(d))return this.consumeBadUrlRemnants(),Fs;if(d===Xi)if(la(d,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Fs;else r.push(d)}},i.prototype.consumeWhiteSpace=function(){for(;Us(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===Ii||r===ln)return;la(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(r){for(var s=5e4,o="";r>0;){var d=Math.min(s,r);o+=At.apply(void 0,this._value.splice(0,d)),r-=d}return this._value.shift(),o},i.prototype.consumeStringToken=function(r){var s="",o=0;do{var d=this._value[o];if(d===ln||d===void 0||d===r)return s+=this.consumeStringSlice(o),{type:0,value:s};if(d===Rs)return this._value.splice(0,o),a1;if(d===Xi){var u=this._value[o+1];u!==ln&&u!==void 0&&(u===Rs?(s+=this.consumeStringSlice(o),o=-1,this._value.shift()):la(d,u)&&(s+=this.consumeStringSlice(o),s+=At(this.consumeEscapedCodePoint()),o=-1))}o++}while(!0)},i.prototype.consumeNumber=function(){var r=[],s=to,o=this.peekCodePoint(0);for((o===Ta||o===Ft)&&r.push(this.consumeCodePoint());wt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0);var d=this.peekCodePoint(1);if(o===Pi&&wt(d))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=Bp;wt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0),d=this.peekCodePoint(1);var u=this.peekCodePoint(2);if((o===Ux||o===Cx)&&((d===Ta||d===Ft)&&wt(u)||wt(d)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=Bp;wt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[Yy(r),s]},i.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),s=r[0],o=r[1],d=this.peekCodePoint(0),u=this.peekCodePoint(1),h=this.peekCodePoint(2);if(Es(d,u,h)){var m=this.consumeName();return{type:15,number:s,flags:o,unit:m}}return d===fy?(this.consumeCodePoint(),{type:16,number:s,flags:o}):{type:17,number:s,flags:o}},i.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(Cr(r)){for(var s=At(r);Cr(this.peekCodePoint(0))&&s.length<6;)s+=At(this.consumeCodePoint());Us(this.peekCodePoint(0))&&this.consumeCodePoint();var o=parseInt(s,16);return o===0||Ky(o)||o>1114111?yp:o}return r===ln?yp:r},i.prototype.consumeName=function(){for(var r="";;){var s=this.consumeCodePoint();if(vp(s))r+=At(s);else if(la(s,this.peekCodePoint(0)))r+=At(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(s),r}},i}(),jx=function(){function i(r){this._tokens=r}return i.create=function(r){var s=new Fx;return s.write(r),new i(s.read())},i.parseValue=function(r){return i.create(r).parseComponentValue()},i.parseValues=function(r){return i.create(r).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var s=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return s;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var r=[];;){var s=this.consumeComponentValue();if(s.type===32)return r;r.push(s),r.push()}},i.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},i.prototype.consumeSimpleBlock=function(r){for(var s={type:r,values:[]},o=this.consumeToken();;){if(o.type===32||f1(o,r))return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue()),o=this.consumeToken()}},i.prototype.consumeFunction=function(r){for(var s={name:r.value,values:[],type:18};;){var o=this.consumeToken();if(o.type===32||o.type===3)return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?qd:r},i.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},i}(),no=function(i){return i.type===15},Dr=function(i){return i.type===17},ke=function(i){return i.type===20},u1=function(i){return i.type===0},Wd=function(i,r){return ke(i)&&i.value===r},Sx=function(i){return i.type!==31},Nr=function(i){return i.type!==31&&i.type!==4},un=function(i){var r=[],s=[];return i.forEach(function(o){if(o.type===4){if(s.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(s),s=[];return}o.type!==31&&s.push(o)}),s.length&&r.push(s),r},f1=function(i,r){return r===11&&i.type===12||r===28&&i.type===29?!0:r===2&&i.type===3},pa=function(i){return i.type===17||i.type===15},nt=function(i){return i.type===16||pa(i)},Hx=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},gt={type:17,number:0,flags:to},du={type:16,number:50,flags:to},da={type:16,number:100,flags:to},Gi=function(i,r,s){var o=i[0],d=i[1];return[Le(o,r),Le(typeof d<"u"?d:o,s)]},Le=function(i,r){if(i.type===16)return i.number/100*r;if(no(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},Nx="deg",kx="grad",Mx="rad",Dx="turn",Ps={name:"angle",parse:function(i,r){if(r.type===15)switch(r.unit){case Nx:return Math.PI*r.number/180;case kx:return Math.PI/200*r.number;case Mx:return r.number;case Dx:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},Tx=function(i){return i.type===15&&(i.unit===Nx||i.unit===kx||i.unit===Mx||i.unit===Dx)},Ix=function(i){var r=i.filter(ke).map(function(s){return s.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[gt,gt];case"to top":case"bottom":return Zt(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[gt,da];case"to right":case"left":return Zt(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[da,da];case"to bottom":case"top":return Zt(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[da,gt];case"to left":case"right":return Zt(270)}return 0},Zt=function(i){return Math.PI*i/180},fa={name:"color",parse:function(i,r){if(r.type===18){var s=h1[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return s(i,r.values)}if(r.type===5){if(r.value.length===3){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3);return ua(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),1)}if(r.value.length===4){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3),h=r.value.substring(3,4);return ua(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),parseInt(h+h,16)/255)}if(r.value.length===6){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6);return ua(parseInt(o,16),parseInt(d,16),parseInt(u,16),1)}if(r.value.length===8){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6),h=r.value.substring(6,8);return ua(parseInt(o,16),parseInt(d,16),parseInt(u,16),parseInt(h,16)/255)}}if(r.type===20){var m=kn[r.value.toUpperCase()];if(typeof m<"u")return m}return kn.TRANSPARENT}},ha=function(i){return(255&i)===0},ct=function(i){var r=255&i,s=255&i>>8,o=255&i>>16,d=255&i>>24;return r<255?"rgba("+d+","+o+","+s+","+r/255+")":"rgb("+d+","+o+","+s+")"},ua=function(i,r,s,o){return(i<<24|r<<16|s<<8|Math.round(o*255)<<0)>>>0},Cp=function(i,r){if(i.type===17)return i.number;if(i.type===16){var s=r===3?1:255;return r===3?i.number/100*s:Math.round(i.number/100*s)}return 0},Qp=function(i,r){var s=r.filter(Nr);if(s.length===3){var o=s.map(Cp),d=o[0],u=o[1],h=o[2];return ua(d,u,h,1)}if(s.length===4){var m=s.map(Cp),d=m[0],u=m[1],h=m[2],x=m[3];return ua(d,u,h,x)}return 0};function vd(i,r,s){return s<0&&(s+=1),s>=1&&(s-=1),s<1/6?(r-i)*s*6+i:s<1/2?r:s<2/3?(r-i)*6*(2/3-s)+i:i}var Up=function(i,r){var s=r.filter(Nr),o=s[0],d=s[1],u=s[2],h=s[3],m=(o.type===17?Zt(o.number):Ps.parse(i,o))/(Math.PI*2),x=nt(d)?d.number/100:0,b=nt(u)?u.number/100:0,v=typeof h<"u"&&nt(h)?Le(h,1):1;if(x===0)return ua(b*255,b*255,b*255,1);var F=b<=.5?b*(x+1):b+x-b*x,M=b*2-F,aA=vd(M,F,m+1/3),P=vd(M,F,m),uA=vd(M,F,m-1/3);return ua(aA*255,P*255,uA*255,v)},h1={hsl:Up,hsla:Up,rgb:Qp,rgba:Qp},Ji=function(i,r){return fa.parse(i,jx.create(r).parseComponentValue())},kn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},g1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(ke(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},p1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Al=function(i,r){var s=fa.parse(i,r[0]),o=r[1];return o&&nt(o)?{color:s,stop:o}:{color:s,stop:null}},Ep=function(i,r){var s=i[0],o=i[i.length-1];s.stop===null&&(s.stop=gt),o.stop===null&&(o.stop=da);for(var d=[],u=0,h=0;h<i.length;h++){var m=i[h].stop;if(m!==null){var x=Le(m,r);x>u?d.push(x):d.push(u),u=x}else d.push(null)}for(var b=null,h=0;h<d.length;h++){var v=d[h];if(v===null)b===null&&(b=h);else if(b!==null){for(var F=h-b,M=d[b-1],aA=(v-M)/(F+1),P=1;P<=F;P++)d[b+P-1]=aA*P;b=null}}return i.map(function(uA,kA){var CA=uA.color;return{color:CA,stop:Math.max(Math.min(1,d[kA]/r),0)}})},x1=function(i,r,s){var o=r/2,d=s/2,u=Le(i[0],r)-o,h=d-Le(i[1],s);return(Math.atan2(h,u)+Math.PI*2)%(Math.PI*2)},m1=function(i,r,s){var o=typeof i=="number"?i:x1(i,r,s),d=Math.abs(r*Math.sin(o))+Math.abs(s*Math.cos(o)),u=r/2,h=s/2,m=d/2,x=Math.sin(o-Math.PI/2)*m,b=Math.cos(o-Math.PI/2)*m;return[d,u-b,u+b,h-x,h+x]},An=function(i,r){return Math.sqrt(i*i+r*r)},Fp=function(i,r,s,o,d){var u=[[0,0],[0,r],[i,0],[i,r]];return u.reduce(function(h,m){var x=m[0],b=m[1],v=An(s-x,o-b);return(d?v<h.optimumDistance:v>h.optimumDistance)?{optimumCorner:m,optimumDistance:v}:h},{optimumDistance:d?1/0:-1/0,optimumCorner:null}).optimumCorner},B1=function(i,r,s,o,d){var u=0,h=0;switch(i.size){case 0:i.shape===0?u=h=Math.min(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.min(Math.abs(r),Math.abs(r-o)),h=Math.min(Math.abs(s),Math.abs(s-d)));break;case 2:if(i.shape===0)u=h=Math.min(An(r,s),An(r,s-d),An(r-o,s),An(r-o,s-d));else if(i.shape===1){var m=Math.min(Math.abs(s),Math.abs(s-d))/Math.min(Math.abs(r),Math.abs(r-o)),x=Fp(o,d,r,s,!0),b=x[0],v=x[1];u=An(b-r,(v-s)/m),h=m*u}break;case 1:i.shape===0?u=h=Math.max(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.max(Math.abs(r),Math.abs(r-o)),h=Math.max(Math.abs(s),Math.abs(s-d)));break;case 3:if(i.shape===0)u=h=Math.max(An(r,s),An(r,s-d),An(r-o,s),An(r-o,s-d));else if(i.shape===1){var m=Math.max(Math.abs(s),Math.abs(s-d))/Math.max(Math.abs(r),Math.abs(r-o)),F=Fp(o,d,r,s,!1),b=F[0],v=F[1];u=An(b-r,(v-s)/m),h=m*u}break}return Array.isArray(i.size)&&(u=Le(i.size[0],o),h=i.size.length===2?Le(i.size[1],d):u),[u,h]},b1=function(i,r){var s=Zt(180),o=[];return un(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&h.value==="to"){s=Ix(d);return}else if(Tx(h)){s=Ps.parse(i,h);return}}var m=Al(i,d);o.push(m)}),{angle:s,stops:o,type:1}},js=function(i,r){var s=Zt(180),o=[];return un(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&["top","left","right","bottom"].indexOf(h.value)!==-1){s=Ix(d);return}else if(Tx(h)){s=(Ps.parse(i,h)+Zt(270))%Zt(360);return}}var m=Al(i,d);o.push(m)}),{angle:s,stops:o,type:1}},w1=function(i,r){var s=Zt(180),o=[],d=1,u=0,h=3,m=[];return un(r).forEach(function(x,b){var v=x[0];if(b===0){if(ke(v)&&v.value==="linear"){d=1;return}else if(ke(v)&&v.value==="radial"){d=2;return}}if(v.type===18){if(v.name==="from"){var F=fa.parse(i,v.values[0]);o.push({stop:gt,color:F})}else if(v.name==="to"){var F=fa.parse(i,v.values[0]);o.push({stop:da,color:F})}else if(v.name==="color-stop"){var M=v.values.filter(Nr);if(M.length===2){var F=fa.parse(i,M[1]),aA=M[0];Dr(aA)&&o.push({stop:{type:16,number:aA.number*100,flags:aA.flags},color:F})}}}}),d===1?{angle:(s+Zt(180))%Zt(360),stops:o,type:d}:{size:h,shape:u,stops:o,position:m,type:d}},Lx="closest-side",Ox="farthest-side",Kx="closest-corner",Rx="farthest-corner",zx="circle",_x="ellipse",Gx="cover",Vx="contain",y1=function(i,r){var s=0,o=3,d=[],u=[];return un(r).forEach(function(h,m){var x=!0;if(m===0){var b=!1;x=h.reduce(function(F,M){if(b)if(ke(M))switch(M.value){case"center":return u.push(du),F;case"top":case"left":return u.push(gt),F;case"right":case"bottom":return u.push(da),F}else(nt(M)||pa(M))&&u.push(M);else if(ke(M))switch(M.value){case zx:return s=0,!1;case _x:return s=1,!1;case"at":return b=!0,!1;case Lx:return o=0,!1;case Gx:case Ox:return o=1,!1;case Vx:case Kx:return o=2,!1;case Rx:return o=3,!1}else if(pa(M)||nt(M))return Array.isArray(o)||(o=[]),o.push(M),!1;return F},x)}if(x){var v=Al(i,h);d.push(v)}}),{size:o,shape:s,stops:d,position:u,type:2}},Ss=function(i,r){var s=0,o=3,d=[],u=[];return un(r).forEach(function(h,m){var x=!0;if(m===0?x=h.reduce(function(v,F){if(ke(F))switch(F.value){case"center":return u.push(du),!1;case"top":case"left":return u.push(gt),!1;case"right":case"bottom":return u.push(da),!1}else if(nt(F)||pa(F))return u.push(F),!1;return v},x):m===1&&(x=h.reduce(function(v,F){if(ke(F))switch(F.value){case zx:return s=0,!1;case _x:return s=1,!1;case Vx:case Lx:return o=0,!1;case Ox:return o=1,!1;case Kx:return o=2,!1;case Gx:case Rx:return o=3,!1}else if(pa(F)||nt(F))return Array.isArray(o)||(o=[]),o.push(F),!1;return v},x)),x){var b=Al(i,h);d.push(b)}}),{size:o,shape:s,stops:d,position:u,type:2}},v1=function(i){return i.type===1},C1=function(i){return i.type===2},uu={name:"image",parse:function(i,r){if(r.type===22){var s={url:r.value,type:0};return i.cache.addImage(r.value),s}if(r.type===18){var o=Yx[r.name];if(typeof o>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return o(i,r.values)}throw new Error("Unsupported image type "+r.type)}};function Q1(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!Yx[i.name])}var Yx={"linear-gradient":b1,"-moz-linear-gradient":js,"-ms-linear-gradient":js,"-o-linear-gradient":js,"-webkit-linear-gradient":js,"radial-gradient":y1,"-moz-radial-gradient":Ss,"-ms-radial-gradient":Ss,"-o-radial-gradient":Ss,"-webkit-radial-gradient":Ss,"-webkit-gradient":w1},U1={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r.filter(function(o){return Nr(o)&&Q1(o)}).map(function(o){return uu.parse(i,o)})}},E1={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(ke(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},F1={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,r){return un(r).map(function(s){return s.filter(nt)}).map(Hx)}},j1={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,r){return un(r).map(function(s){return s.filter(ke).map(function(o){return o.value}).join(" ")}).map(S1)}},S1=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Hr;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(Hr||(Hr={}));var H1={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,r){return un(r).map(function(s){return s.filter(N1)})}},N1=function(i){return ke(i)||nt(i)},el=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},k1=el("top"),M1=el("right"),D1=el("bottom"),T1=el("left"),tl=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(r,s){return Hx(s.filter(nt))}}},I1=tl("top-left"),L1=tl("top-right"),O1=tl("bottom-right"),K1=tl("bottom-left"),nl=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,s){switch(s){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},R1=nl("top"),z1=nl("right"),_1=nl("bottom"),G1=nl("left"),al=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,s){return no(s)?s.number:0}}},V1=al("top"),Y1=al("right"),X1=al("bottom"),J1=al("left"),Z1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},q1={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},W1={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,r){return r.filter(ke).reduce(function(s,o){return s|$1(o.value)},0)}},$1=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},P1={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Av={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},_s;(function(i){i.NORMAL="normal",i.STRICT="strict"})(_s||(_s={}));var ev={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"strict":return _s.STRICT;case"normal":default:return _s.NORMAL}}},tv={name:"line-height",initialValue:"normal",prefix:!1,type:4},jp=function(i,r){return ke(i)&&i.value==="normal"?1.2*r:i.type===17?r*i.number:nt(i)?Le(i,r):r},nv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,r){return r.type===20&&r.value==="none"?null:uu.parse(i,r)}},av={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},$d={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},rl=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},rv=rl("top"),iv=rl("right"),ov=rl("bottom"),sv=rl("left"),lv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,r){return r.filter(ke).map(function(s){switch(s.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},cv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},il=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},dv=il("top"),uv=il("right"),fv=il("bottom"),hv=il("left"),gv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},pv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},xv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Wd(r[0],"none")?[]:un(r).map(function(s){for(var o={color:kn.TRANSPARENT,offsetX:gt,offsetY:gt,blur:gt},d=0,u=0;u<s.length;u++){var h=s[u];pa(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:o.blur=h,d++):o.color=fa.parse(i,h)}return o})}},mv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Bv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var s=yv[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return s(r.values)}return null}},bv=function(i){var r=i.filter(function(s){return s.type===17}).map(function(s){return s.number});return r.length===6?r:null},wv=function(i){var r=i.filter(function(x){return x.type===17}).map(function(x){return x.number}),s=r[0],o=r[1];r[2],r[3];var d=r[4],u=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var h=r[12],m=r[13];return r[14],r[15],r.length===16?[s,o,d,u,h,m]:null},yv={matrix:bv,matrix3d:wv},Sp={type:16,number:50,flags:to},vv=[Sp,Sp],Cv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,r){var s=r.filter(nt);return s.length!==2?vv:[s[0],s[1]]}},Qv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Zi;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Zi||(Zi={}));var Uv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-all":return Zi.BREAK_ALL;case"keep-all":return Zi.KEEP_ALL;case"normal":default:return Zi.NORMAL}}},Ev={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,r){if(r.type===20)return{auto:!0,order:0};if(Dr(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},Xx={name:"time",parse:function(i,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},Fv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,r){return Dr(r)?r.number:1}},jv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Sv={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,r){return r.filter(ke).map(function(s){switch(s.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(s){return s!==0})}},Hv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,r){var s=[],o=[];return r.forEach(function(d){switch(d.type){case 20:case 0:s.push(d.value);break;case 17:s.push(d.number.toString());break;case 4:o.push(s.join(" ")),s.length=0;break}}),s.length&&o.push(s.join(" ")),o.map(function(d){return d.indexOf(" ")===-1?d:"'"+d+"'"})}},Nv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},kv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,r){if(Dr(r))return r.number;if(ke(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Mv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.filter(ke).map(function(s){return s.value})}},Dv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},it=function(i,r){return(i&r)!==0},Tv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r}},Iv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;for(var o=[],d=r.filter(Sx),u=0;u<d.length;u++){var h=d[u],m=d[u+1];if(h.type===20){var x=m&&Dr(m)?m.number:1;o.push({counter:h.value,increment:x})}}return o}},Lv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return[];for(var s=[],o=r.filter(Sx),d=0;d<o.length;d++){var u=o[d],h=o[d+1];if(ke(u)&&u.value!=="none"){var m=h&&Dr(h)?h.number:0;s.push({counter:u.value,reset:m})}}return s}},Ov={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,r){return r.filter(no).map(function(s){return Xx.parse(i,s)})}},Kv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;var o=[],d=r.filter(u1);if(d.length%2!==0)return null;for(var u=0;u<d.length;u+=2){var h=d[u].value,m=d[u+1].value;o.push({open:h,close:m})}return o}},Hp=function(i,r,s){if(!i)return"";var o=i[Math.min(r,i.length-1)];return o?s?o.open:o.close:""},Rv={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Wd(r[0],"none")?[]:un(r).map(function(s){for(var o={color:255,offsetX:gt,offsetY:gt,blur:gt,spread:gt,inset:!1},d=0,u=0;u<s.length;u++){var h=s[u];Wd(h,"inset")?o.inset=!0:pa(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:d===2?o.blur=h:o.spread=h,d++):o.color=fa.parse(i,h)}return o})}},zv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,r){var s=[0,1,2],o=[];return r.filter(ke).forEach(function(d){switch(d.value){case"stroke":o.push(1);break;case"fill":o.push(0);break;case"markers":o.push(2);break}}),s.forEach(function(d){o.indexOf(d)===-1&&o.push(d)}),o}},_v={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Gv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,r){return no(r)?r.number:0}},Vv=function(){function i(r,s){var o,d;this.animationDuration=VA(r,Ov,s.animationDuration),this.backgroundClip=VA(r,g1,s.backgroundClip),this.backgroundColor=VA(r,p1,s.backgroundColor),this.backgroundImage=VA(r,U1,s.backgroundImage),this.backgroundOrigin=VA(r,E1,s.backgroundOrigin),this.backgroundPosition=VA(r,F1,s.backgroundPosition),this.backgroundRepeat=VA(r,j1,s.backgroundRepeat),this.backgroundSize=VA(r,H1,s.backgroundSize),this.borderTopColor=VA(r,k1,s.borderTopColor),this.borderRightColor=VA(r,M1,s.borderRightColor),this.borderBottomColor=VA(r,D1,s.borderBottomColor),this.borderLeftColor=VA(r,T1,s.borderLeftColor),this.borderTopLeftRadius=VA(r,I1,s.borderTopLeftRadius),this.borderTopRightRadius=VA(r,L1,s.borderTopRightRadius),this.borderBottomRightRadius=VA(r,O1,s.borderBottomRightRadius),this.borderBottomLeftRadius=VA(r,K1,s.borderBottomLeftRadius),this.borderTopStyle=VA(r,R1,s.borderTopStyle),this.borderRightStyle=VA(r,z1,s.borderRightStyle),this.borderBottomStyle=VA(r,_1,s.borderBottomStyle),this.borderLeftStyle=VA(r,G1,s.borderLeftStyle),this.borderTopWidth=VA(r,V1,s.borderTopWidth),this.borderRightWidth=VA(r,Y1,s.borderRightWidth),this.borderBottomWidth=VA(r,X1,s.borderBottomWidth),this.borderLeftWidth=VA(r,J1,s.borderLeftWidth),this.boxShadow=VA(r,Rv,s.boxShadow),this.color=VA(r,Z1,s.color),this.direction=VA(r,q1,s.direction),this.display=VA(r,W1,s.display),this.float=VA(r,P1,s.cssFloat),this.fontFamily=VA(r,Hv,s.fontFamily),this.fontSize=VA(r,Nv,s.fontSize),this.fontStyle=VA(r,Dv,s.fontStyle),this.fontVariant=VA(r,Mv,s.fontVariant),this.fontWeight=VA(r,kv,s.fontWeight),this.letterSpacing=VA(r,Av,s.letterSpacing),this.lineBreak=VA(r,ev,s.lineBreak),this.lineHeight=VA(r,tv,s.lineHeight),this.listStyleImage=VA(r,nv,s.listStyleImage),this.listStylePosition=VA(r,av,s.listStylePosition),this.listStyleType=VA(r,$d,s.listStyleType),this.marginTop=VA(r,rv,s.marginTop),this.marginRight=VA(r,iv,s.marginRight),this.marginBottom=VA(r,ov,s.marginBottom),this.marginLeft=VA(r,sv,s.marginLeft),this.opacity=VA(r,Fv,s.opacity);var u=VA(r,lv,s.overflow);this.overflowX=u[0],this.overflowY=u[u.length>1?1:0],this.overflowWrap=VA(r,cv,s.overflowWrap),this.paddingTop=VA(r,dv,s.paddingTop),this.paddingRight=VA(r,uv,s.paddingRight),this.paddingBottom=VA(r,fv,s.paddingBottom),this.paddingLeft=VA(r,hv,s.paddingLeft),this.paintOrder=VA(r,zv,s.paintOrder),this.position=VA(r,pv,s.position),this.textAlign=VA(r,gv,s.textAlign),this.textDecorationColor=VA(r,jv,(o=s.textDecorationColor)!==null&&o!==void 0?o:s.color),this.textDecorationLine=VA(r,Sv,(d=s.textDecorationLine)!==null&&d!==void 0?d:s.textDecoration),this.textShadow=VA(r,xv,s.textShadow),this.textTransform=VA(r,mv,s.textTransform),this.transform=VA(r,Bv,s.transform),this.transformOrigin=VA(r,Cv,s.transformOrigin),this.visibility=VA(r,Qv,s.visibility),this.webkitTextStrokeColor=VA(r,_v,s.webkitTextStrokeColor),this.webkitTextStrokeWidth=VA(r,Gv,s.webkitTextStrokeWidth),this.wordBreak=VA(r,Uv,s.wordBreak),this.zIndex=VA(r,Ev,s.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return ha(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return it(this.display,4)||it(this.display,33554432)||it(this.display,268435456)||it(this.display,536870912)||it(this.display,67108864)||it(this.display,134217728)},i}(),Yv=function(){function i(r,s){this.content=VA(r,Tv,s.content),this.quotes=VA(r,Kv,s.quotes)}return i}(),Np=function(){function i(r,s){this.counterIncrement=VA(r,Iv,s.counterIncrement),this.counterReset=VA(r,Lv,s.counterReset)}return i}(),VA=function(i,r,s){var o=new Fx,d=s!==null&&typeof s<"u"?s.toString():r.initialValue;o.write(d);var u=new jx(o.read());switch(r.type){case 2:var h=u.parseComponentValue();return r.parse(i,ke(h)?h.value:r.initialValue);case 0:return r.parse(i,u.parseComponentValue());case 1:return r.parse(i,u.parseComponentValues());case 4:return u.parseComponentValue();case 3:switch(r.format){case"angle":return Ps.parse(i,u.parseComponentValue());case"color":return fa.parse(i,u.parseComponentValue());case"image":return uu.parse(i,u.parseComponentValue());case"length":var m=u.parseComponentValue();return pa(m)?m:gt;case"length-percentage":var x=u.parseComponentValue();return nt(x)?x:gt;case"time":return Xx.parse(i,u.parseComponentValue())}break}},Xv="data-html2canvas-debug",Jv=function(i){var r=i.getAttribute(Xv);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Pd=function(i,r){var s=Jv(i);return s===1||r===s},fn=function(){function i(r,s){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,Pd(s,3))debugger;this.styles=new Vv(r,window.getComputedStyle(s,null)),tu(s)&&(this.styles.animationDuration.some(function(o){return o>0})&&(s.style.animationDuration="0s"),this.styles.transform!==null&&(s.style.transform="none")),this.bounds=Ws(this.context,s),Pd(s,4)&&(this.flags|=16)}return i}(),Zv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",kp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Hs=0;Hs<kp.length;Hs++)Vi[kp.charCodeAt(Hs)]=Hs;var qv=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,m,x;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var b=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(b)?b:new Uint8Array(b);for(o=0;o<s;o+=4)u=Vi[i.charCodeAt(o)],h=Vi[i.charCodeAt(o+1)],m=Vi[i.charCodeAt(o+2)],x=Vi[i.charCodeAt(o+3)],v[d++]=u<<2|h>>4,v[d++]=(h&15)<<4|m>>2,v[d++]=(m&3)<<6|x&63;return b},Wv=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},$v=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},La=5,fu=11,Cd=2,Pv=fu-La,Jx=65536>>La,AC=1<<La,Qd=AC-1,eC=1024>>La,tC=Jx+eC,nC=tC,aC=32,rC=nC+aC,iC=65536>>fu,oC=1<<Pv,sC=oC-1,Mp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},lC=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},cC=function(i,r){var s=qv(i),o=Array.isArray(s)?$v(s):new Uint32Array(s),d=Array.isArray(s)?Wv(s):new Uint16Array(s),u=24,h=Mp(d,u/2,o[4]/2),m=o[5]===2?Mp(d,(u+o[4])/2):lC(o,Math.ceil((u+o[4])/4));return new dC(o[0],o[1],o[2],o[3],h,m)},dC=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>La],s=(s<<Cd)+(r&Qd),this.data[s];if(r<=65535)return s=this.index[Jx+(r-55296>>La)],s=(s<<Cd)+(r&Qd),this.data[s];if(r<this.highStart)return s=rC-iC+(r>>fu),s=this.index[s],s+=r>>La&sC,s=this.index[s],s=(s<<Cd)+(r&Qd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),Dp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",uC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ns=0;Ns<Dp.length;Ns++)uC[Dp.charCodeAt(Ns)]=Ns;var fC=1,Ud=2,Ed=3,Tp=4,Ip=5,hC=7,Lp=8,Fd=9,jd=10,Op=11,Kp=12,Rp=13,zp=14,Sd=15,gC=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},pC=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},xC=cC(Zv),Xt="×",Hd="÷",mC=function(i){return xC.get(i)},BC=function(i,r,s){var o=s-2,d=r[o],u=r[s-1],h=r[s];if(u===Ud&&h===Ed)return Xt;if(u===Ud||u===Ed||u===Tp||h===Ud||h===Ed||h===Tp)return Hd;if(u===Lp&&[Lp,Fd,Op,Kp].indexOf(h)!==-1||(u===Op||u===Fd)&&(h===Fd||h===jd)||(u===Kp||u===jd)&&h===jd||h===Rp||h===Ip||h===hC||u===fC)return Xt;if(u===Rp&&h===zp){for(;d===Ip;)d=r[--o];if(d===zp)return Xt}if(u===Sd&&h===Sd){for(var m=0;d===Sd;)m++,d=r[--o];if(m%2===0)return Xt}return Hd},bC=function(i){var r=gC(i),s=r.length,o=0,d=0,u=r.map(mC);return{next:function(){if(o>=s)return{done:!0,value:null};for(var h=Xt;o<s&&(h=BC(r,u,++o))===Xt;);if(h!==Xt||o===s){var m=pC.apply(null,r.slice(d,o));return d=o,{value:m,done:!1}}return{done:!0,value:null}}}},wC=function(i){for(var r=bC(i),s=[],o;!(o=r.next()).done;)o.value&&s.push(o.value.slice());return s},yC=function(i){var r=123;if(i.createRange){var s=i.createRange();if(s.getBoundingClientRect){var o=i.createElement("boundtest");o.style.height=r+"px",o.style.display="block",i.body.appendChild(o),s.selectNode(o);var d=s.getBoundingClientRect(),u=Math.round(d.height);if(i.body.removeChild(o),u===r)return!0}}return!1},vC=function(i){var r=i.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",i.body.appendChild(r);var s=i.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var o=r.firstChild,d=$s(o.data).map(function(x){return At(x)}),u=0,h={},m=d.every(function(x,b){s.setStart(o,u),s.setEnd(o,u+x.length);var v=s.getBoundingClientRect();u+=x.length;var F=v.x>h.x||v.y>h.y;return h=v,b===0?!0:F});return i.body.removeChild(r),m},CC=function(){return typeof new Image().crossOrigin<"u"},QC=function(){return typeof new XMLHttpRequest().responseType=="string"},UC=function(i){var r=new Image,s=i.createElement("canvas"),o=s.getContext("2d");if(!o)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{o.drawImage(r,0,0),s.toDataURL()}catch{return!1}return!0},_p=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},EC=function(i){var r=i.createElement("canvas"),s=100;r.width=s,r.height=s;var o=r.getContext("2d");if(!o)return Promise.reject(!1);o.fillStyle="rgb(0, 255, 0)",o.fillRect(0,0,s,s);var d=new Image,u=r.toDataURL();d.src=u;var h=Au(s,s,0,0,d);return o.fillStyle="red",o.fillRect(0,0,s,s),Gp(h).then(function(m){o.drawImage(m,0,0);var x=o.getImageData(0,0,s,s).data;o.fillStyle="red",o.fillRect(0,0,s,s);var b=i.createElement("div");return b.style.backgroundImage="url("+u+")",b.style.height=s+"px",_p(x)?Gp(Au(s,s,0,0,b)):Promise.reject(!1)}).then(function(m){return o.drawImage(m,0,0),_p(o.getImageData(0,0,s,s).data)}).catch(function(){return!1})},Au=function(i,r,s,o,d){var u="http://www.w3.org/2000/svg",h=document.createElementNS(u,"svg"),m=document.createElementNS(u,"foreignObject");return h.setAttributeNS(null,"width",i.toString()),h.setAttributeNS(null,"height",r.toString()),m.setAttributeNS(null,"width","100%"),m.setAttributeNS(null,"height","100%"),m.setAttributeNS(null,"x",s.toString()),m.setAttributeNS(null,"y",o.toString()),m.setAttributeNS(null,"externalResourcesRequired","true"),h.appendChild(m),m.appendChild(d),h},Gp=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){return r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},ht={get SUPPORT_RANGE_BOUNDS(){var i=yC(document);return Object.defineProperty(ht,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=ht.SUPPORT_RANGE_BOUNDS&&vC(document);return Object.defineProperty(ht,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=UC(document);return Object.defineProperty(ht,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?EC(document):Promise.resolve(!1);return Object.defineProperty(ht,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=CC();return Object.defineProperty(ht,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=QC();return Object.defineProperty(ht,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(ht,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(ht,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},qi=function(){function i(r,s){this.text=r,this.bounds=s}return i}(),FC=function(i,r,s,o){var d=HC(r,s),u=[],h=0;return d.forEach(function(m){if(s.textDecorationLine.length||m.trim().length>0)if(ht.SUPPORT_RANGE_BOUNDS){var x=Vp(o,h,m.length).getClientRects();if(x.length>1){var b=hu(m),v=0;b.forEach(function(M){u.push(new qi(M,Mn.fromDOMRectList(i,Vp(o,v+h,M.length).getClientRects()))),v+=M.length})}else u.push(new qi(m,Mn.fromDOMRectList(i,x)))}else{var F=o.splitText(m.length);u.push(new qi(m,jC(i,o))),o=F}else ht.SUPPORT_RANGE_BOUNDS||(o=o.splitText(m.length));h+=m.length}),u},jC=function(i,r){var s=r.ownerDocument;if(s){var o=s.createElement("html2canvaswrapper");o.appendChild(r.cloneNode(!0));var d=r.parentNode;if(d){d.replaceChild(o,r);var u=Ws(i,o);return o.firstChild&&d.replaceChild(o.firstChild,o),u}}return Mn.EMPTY},Vp=function(i,r,s){var o=i.ownerDocument;if(!o)throw new Error("Node has no owner document");var d=o.createRange();return d.setStart(i,r),d.setEnd(i,r+s),d},hu=function(i){if(ht.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(i)).map(function(s){return s.segment})}return wC(i)},SC=function(i,r){if(ht.SUPPORT_NATIVE_TEXT_SEGMENTATION){var s=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(s.segment(i)).map(function(o){return o.segment})}return kC(i,r)},HC=function(i,r){return r.letterSpacing!==0?hu(i):SC(i,r)},NC=[32,160,4961,65792,65793,4153,4241],kC=function(i,r){for(var s=iy(i,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),o=[],d,u=function(){if(d.value){var h=d.value.slice(),m=$s(h),x="";m.forEach(function(b){NC.indexOf(b)===-1?x+=At(b):(x.length&&o.push(x),o.push(At(b)),x="")}),x.length&&o.push(x)}};!(d=s.next()).done;)u();return o},MC=function(){function i(r,s,o){this.text=DC(s.data,o.textTransform),this.textBounds=FC(r,this.text,o,s)}return i}(),DC=function(i,r){switch(r){case 1:return i.toLowerCase();case 3:return i.replace(TC,IC);case 2:return i.toUpperCase();default:return i}},TC=/(^|\s|:|-|\(|\))([a-z])/g,IC=function(i,r,s){return i.length>0?r+s.toUpperCase():i},Zx=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.src=o.currentSrc||o.src,d.intrinsicWidth=o.naturalWidth,d.intrinsicHeight=o.naturalHeight,d.context.cache.addImage(d.src),d}return r}(fn),qx=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o,d.intrinsicWidth=o.width,d.intrinsicHeight=o.height,d}return r}(fn),Wx=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=new XMLSerializer,h=Ws(s,o);return o.setAttribute("width",h.width+"px"),o.setAttribute("height",h.height+"px"),d.svg="data:image/svg+xml,"+encodeURIComponent(u.serializeToString(o)),d.intrinsicWidth=o.width.baseVal.value,d.intrinsicHeight=o.height.baseVal.value,d.context.cache.addImage(d.svg),d}return r}(fn),$x=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(fn),eu=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.start=o.start,d.reversed=typeof o.reversed=="boolean"&&o.reversed===!0,d}return r}(fn),LC=[{type:15,flags:0,unit:"px",number:3}],OC=[{type:16,flags:0,number:50}],KC=function(i){return i.width>i.height?new Mn(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new Mn(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},RC=function(i){var r=i.type===zC?new Array(i.value.length+1).join("•"):i.value;return r.length===0?i.placeholder||"":r},Gs="checkbox",Vs="radio",zC="password",Yp=707406591,gu=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;switch(d.type=o.type.toLowerCase(),d.checked=o.checked,d.value=RC(o),(d.type===Gs||d.type===Vs)&&(d.styles.backgroundColor=3739148031,d.styles.borderTopColor=d.styles.borderRightColor=d.styles.borderBottomColor=d.styles.borderLeftColor=2779096575,d.styles.borderTopWidth=d.styles.borderRightWidth=d.styles.borderBottomWidth=d.styles.borderLeftWidth=1,d.styles.borderTopStyle=d.styles.borderRightStyle=d.styles.borderBottomStyle=d.styles.borderLeftStyle=1,d.styles.backgroundClip=[0],d.styles.backgroundOrigin=[0],d.bounds=KC(d.bounds)),d.type){case Gs:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=LC;break;case Vs:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=OC;break}return d}return r}(fn),Px=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=o.options[o.selectedIndex||0];return d.value=u&&u.text||"",d}return r}(fn),A0=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(fn),e0=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;d.src=o.src,d.width=parseInt(o.width,10)||0,d.height=parseInt(o.height,10)||0,d.backgroundColor=d.styles.backgroundColor;try{if(o.contentWindow&&o.contentWindow.document&&o.contentWindow.document.documentElement){d.tree=n0(s,o.contentWindow.document.documentElement);var u=o.contentWindow.document.documentElement?Ji(s,getComputedStyle(o.contentWindow.document.documentElement).backgroundColor):kn.TRANSPARENT,h=o.contentWindow.document.body?Ji(s,getComputedStyle(o.contentWindow.document.body).backgroundColor):kn.TRANSPARENT;d.backgroundColor=ha(u)?ha(h)?d.styles.backgroundColor:h:u}}catch{}return d}return r}(fn),_C=["OL","UL","MENU"],Os=function(i,r,s,o){for(var d=r.firstChild,u=void 0;d;d=u)if(u=d.nextSibling,a0(d)&&d.data.trim().length>0)s.textNodes.push(new MC(i,d,s.styles));else if(Sr(d))if(s0(d)&&d.assignedNodes)d.assignedNodes().forEach(function(m){return Os(i,m,s,o)});else{var h=t0(i,d);h.styles.isVisible()&&(GC(d,h,o)?h.flags|=4:VC(h.styles)&&(h.flags|=2),_C.indexOf(d.tagName)!==-1&&(h.flags|=8),s.elements.push(h),d.slot,d.shadowRoot?Os(i,d.shadowRoot,h,o):!Ys(d)&&!r0(d)&&!Xs(d)&&Os(i,d,h,o))}},t0=function(i,r){return nu(r)?new Zx(i,r):i0(r)?new qx(i,r):r0(r)?new Wx(i,r):YC(r)?new $x(i,r):XC(r)?new eu(i,r):JC(r)?new gu(i,r):Xs(r)?new Px(i,r):Ys(r)?new A0(i,r):o0(r)?new e0(i,r):new fn(i,r)},n0=function(i,r){var s=t0(i,r);return s.flags|=4,Os(i,r,s,s),s},GC=function(i,r,s){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||pu(i)&&s.styles.isTransparent()},VC=function(i){return i.isPositioned()||i.isFloating()},a0=function(i){return i.nodeType===Node.TEXT_NODE},Sr=function(i){return i.nodeType===Node.ELEMENT_NODE},tu=function(i){return Sr(i)&&typeof i.style<"u"&&!Ks(i)},Ks=function(i){return typeof i.className=="object"},YC=function(i){return i.tagName==="LI"},XC=function(i){return i.tagName==="OL"},JC=function(i){return i.tagName==="INPUT"},ZC=function(i){return i.tagName==="HTML"},r0=function(i){return i.tagName==="svg"},pu=function(i){return i.tagName==="BODY"},i0=function(i){return i.tagName==="CANVAS"},Xp=function(i){return i.tagName==="VIDEO"},nu=function(i){return i.tagName==="IMG"},o0=function(i){return i.tagName==="IFRAME"},Jp=function(i){return i.tagName==="STYLE"},qC=function(i){return i.tagName==="SCRIPT"},Ys=function(i){return i.tagName==="TEXTAREA"},Xs=function(i){return i.tagName==="SELECT"},s0=function(i){return i.tagName==="SLOT"},Zp=function(i){return i.tagName.indexOf("-")>0},WC=function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(r){var s=this.counters[r];return s&&s.length?s[s.length-1]:1},i.prototype.getCounterValues=function(r){var s=this.counters[r];return s||[]},i.prototype.pop=function(r){var s=this;r.forEach(function(o){return s.counters[o].pop()})},i.prototype.parse=function(r){var s=this,o=r.counterIncrement,d=r.counterReset,u=!0;o!==null&&o.forEach(function(m){var x=s.counters[m.counter];x&&m.increment!==0&&(u=!1,x.length||x.push(1),x[Math.max(0,x.length-1)]+=m.increment)});var h=[];return u&&d.forEach(function(m){var x=s.counters[m.counter];h.push(m.counter),x||(x=s.counters[m.counter]=[]),x.push(m.reset)}),h},i}(),qp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Wp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},$C={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},PC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Qr=function(i,r,s,o,d,u){return i<r||i>s?Ao(i,d,u.length>0):o.integers.reduce(function(h,m,x){for(;i>=m;)i-=m,h+=o.values[x];return h},"")+u},l0=function(i,r,s,o){var d="";do s||i--,d=o(i)+d,i/=r;while(i*r>=r);return d},Pe=function(i,r,s,o,d){var u=s-r+1;return(i<0?"-":"")+(l0(Math.abs(i),u,o,function(h){return At(Math.floor(h%u)+r)})+d)},Ma=function(i,r,s){s===void 0&&(s=". ");var o=r.length;return l0(Math.abs(i),o,!1,function(d){return r[Math.floor(d%o)]})+s},Fr=1,oa=2,sa=4,Yi=8,Nn=function(i,r,s,o,d,u){if(i<-9999||i>9999)return Ao(i,4,d.length>0);var h=Math.abs(i),m=d;if(h===0)return r[0]+m;for(var x=0;h>0&&x<=4;x++){var b=h%10;b===0&&it(u,Fr)&&m!==""?m=r[b]+m:b>1||b===1&&x===0||b===1&&x===1&&it(u,oa)||b===1&&x===1&&it(u,sa)&&i>100||b===1&&x>1&&it(u,Yi)?m=r[b]+(x>0?s[x-1]:"")+m:b===1&&x>0&&(m=s[x-1]+m),h=Math.floor(h/10)}return(i<0?o:"")+m},$p="十百千萬",Pp="拾佰仟萬",Ax="マイナス",Nd="마이너스",Ao=function(i,r,s){var o=s?". ":"",d=s?"、":"",u=s?", ":"",h=s?" ":"";switch(r){case 0:return"•"+h;case 1:return"◦"+h;case 2:return"◾"+h;case 5:var m=Pe(i,48,57,!0,o);return m.length<4?"0"+m:m;case 4:return Ma(i,"〇一二三四五六七八九",d);case 6:return Qr(i,1,3999,qp,3,o).toLowerCase();case 7:return Qr(i,1,3999,qp,3,o);case 8:return Pe(i,945,969,!1,o);case 9:return Pe(i,97,122,!1,o);case 10:return Pe(i,65,90,!1,o);case 11:return Pe(i,1632,1641,!0,o);case 12:case 49:return Qr(i,1,9999,Wp,3,o);case 35:return Qr(i,1,9999,Wp,3,o).toLowerCase();case 13:return Pe(i,2534,2543,!0,o);case 14:case 30:return Pe(i,6112,6121,!0,o);case 15:return Ma(i,"子丑寅卯辰巳午未申酉戌亥",d);case 16:return Ma(i,"甲乙丙丁戊己庚辛壬癸",d);case 17:case 48:return Nn(i,"零一二三四五六七八九",$p,"負",d,oa|sa|Yi);case 47:return Nn(i,"零壹貳參肆伍陸柒捌玖",Pp,"負",d,Fr|oa|sa|Yi);case 42:return Nn(i,"零一二三四五六七八九",$p,"负",d,oa|sa|Yi);case 41:return Nn(i,"零壹贰叁肆伍陆柒捌玖",Pp,"负",d,Fr|oa|sa|Yi);case 26:return Nn(i,"〇一二三四五六七八九","十百千万",Ax,d,0);case 25:return Nn(i,"零壱弐参四伍六七八九","拾百千万",Ax,d,Fr|oa|sa);case 31:return Nn(i,"영일이삼사오육칠팔구","십백천만",Nd,u,Fr|oa|sa);case 33:return Nn(i,"零一二三四五六七八九","十百千萬",Nd,u,0);case 32:return Nn(i,"零壹貳參四五六七八九","拾百千",Nd,u,Fr|oa|sa);case 18:return Pe(i,2406,2415,!0,o);case 20:return Qr(i,1,19999,PC,3,o);case 21:return Pe(i,2790,2799,!0,o);case 22:return Pe(i,2662,2671,!0,o);case 22:return Qr(i,1,10999,$C,3,o);case 23:return Ma(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Ma(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Pe(i,3302,3311,!0,o);case 28:return Ma(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",d);case 29:return Ma(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",d);case 34:return Pe(i,3792,3801,!0,o);case 37:return Pe(i,6160,6169,!0,o);case 38:return Pe(i,4160,4169,!0,o);case 39:return Pe(i,2918,2927,!0,o);case 40:return Pe(i,1776,1785,!0,o);case 43:return Pe(i,3046,3055,!0,o);case 44:return Pe(i,3174,3183,!0,o);case 45:return Pe(i,3664,3673,!0,o);case 46:return Pe(i,3872,3881,!0,o);case 3:default:return Pe(i,48,57,!0,o)}},c0="data-html2canvas-ignore",ex=function(){function i(r,s,o){if(this.context=r,this.options=o,this.scrolledElements=[],this.referenceElement=s,this.counters=new WC,this.quoteDepth=0,!s.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(s.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(r,s){var o=this,d=A2(r,s);if(!d.contentWindow)return Promise.reject("Unable to find iframe window");var u=r.defaultView.pageXOffset,h=r.defaultView.pageYOffset,m=d.contentWindow,x=m.document,b=n2(d).then(function(){return vt(o,void 0,void 0,function(){var v,F;return bt(this,function(M){switch(M.label){case 0:return this.scrolledElements.forEach(o2),m&&(m.scrollTo(s.left,s.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(m.scrollY!==s.top||m.scrollX!==s.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(m.scrollX-s.left,m.scrollY-s.top,0,0))),v=this.options.onclone,F=this.clonedReferenceElement,typeof F>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:x.fonts&&x.fonts.ready?[4,x.fonts.ready]:[3,2];case 1:M.sent(),M.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,t2(x)]:[3,4];case 3:M.sent(),M.label=4;case 4:return typeof v=="function"?[2,Promise.resolve().then(function(){return v(x,F)}).then(function(){return d})]:[2,d]}})})});return x.open(),x.write(r2(document.doctype)+"<html></html>"),i2(this.referenceElement.ownerDocument,u,h),x.replaceChild(x.adoptNode(this.documentElement),x.documentElement),x.close(),b},i.prototype.createElementClone=function(r){if(Pd(r,2))debugger;if(i0(r))return this.createCanvasClone(r);if(Xp(r))return this.createVideoClone(r);if(Jp(r))return this.createStyleClone(r);var s=r.cloneNode(!1);return nu(s)&&(nu(r)&&r.currentSrc&&r.currentSrc!==r.src&&(s.src=r.currentSrc,s.srcset=""),s.loading==="lazy"&&(s.loading="eager")),Zp(s)?this.createCustomElementClone(s):s},i.prototype.createCustomElementClone=function(r){var s=document.createElement("html2canvascustomelement");return kd(r.style,s),s},i.prototype.createStyleClone=function(r){try{var s=r.sheet;if(s&&s.cssRules){var o=[].slice.call(s.cssRules,0).reduce(function(u,h){return h&&typeof h.cssText=="string"?u+h.cssText:u},""),d=r.cloneNode(!1);return d.textContent=o,d}}catch(u){if(this.context.logger.error("Unable to access cssRules property",u),u.name!=="SecurityError")throw u}return r.cloneNode(!1)},i.prototype.createCanvasClone=function(r){var s;if(this.options.inlineImages&&r.ownerDocument){var o=r.ownerDocument.createElement("img");try{return o.src=r.toDataURL(),o}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var d=r.cloneNode(!1);try{d.width=r.width,d.height=r.height;var u=r.getContext("2d"),h=d.getContext("2d");if(h)if(!this.options.allowTaint&&u)h.putImageData(u.getImageData(0,0,r.width,r.height),0,0);else{var m=(s=r.getContext("webgl2"))!==null&&s!==void 0?s:r.getContext("webgl");if(m){var x=m.getContextAttributes();x?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}h.drawImage(r,0,0)}return d}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return d},i.prototype.createVideoClone=function(r){var s=r.ownerDocument.createElement("canvas");s.width=r.offsetWidth,s.height=r.offsetHeight;var o=s.getContext("2d");try{return o&&(o.drawImage(r,0,0,s.width,s.height),this.options.allowTaint||o.getImageData(0,0,s.width,s.height)),s}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var d=r.ownerDocument.createElement("canvas");return d.width=r.offsetWidth,d.height=r.offsetHeight,d},i.prototype.appendChildNode=function(r,s,o){(!Sr(s)||!qC(s)&&!s.hasAttribute(c0)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(s)))&&(!this.options.copyStyles||!Sr(s)||!Jp(s))&&r.appendChild(this.cloneNode(s,o))},i.prototype.cloneChildNodes=function(r,s,o){for(var d=this,u=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;u;u=u.nextSibling)if(Sr(u)&&s0(u)&&typeof u.assignedNodes=="function"){var h=u.assignedNodes();h.length&&h.forEach(function(m){return d.appendChildNode(s,m,o)})}else this.appendChildNode(s,u,o)},i.prototype.cloneNode=function(r,s){if(a0(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var o=r.ownerDocument.defaultView;if(o&&Sr(r)&&(tu(r)||Ks(r))){var d=this.createElementClone(r);d.style.transitionProperty="none";var u=o.getComputedStyle(r),h=o.getComputedStyle(r,":before"),m=o.getComputedStyle(r,":after");this.referenceElement===r&&tu(d)&&(this.clonedReferenceElement=d),pu(d)&&c2(d);var x=this.counters.parse(new Np(this.context,u)),b=this.resolvePseudoContent(r,d,h,Wi.BEFORE);Zp(r)&&(s=!0),Xp(r)||this.cloneChildNodes(r,d,s),b&&d.insertBefore(b,d.firstChild);var v=this.resolvePseudoContent(r,d,m,Wi.AFTER);return v&&d.appendChild(v),this.counters.pop(x),(u&&(this.options.copyStyles||Ks(r))&&!o0(r)||s)&&kd(u,d),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([d,r.scrollLeft,r.scrollTop]),(Ys(r)||Xs(r))&&(Ys(d)||Xs(d))&&(d.value=r.value),d}return r.cloneNode(!1)},i.prototype.resolvePseudoContent=function(r,s,o,d){var u=this;if(o){var h=o.content,m=s.ownerDocument;if(!(!m||!h||h==="none"||h==="-moz-alt-content"||o.display==="none")){this.counters.parse(new Np(this.context,o));var x=new Yv(this.context,o),b=m.createElement("html2canvaspseudoelement");kd(o,b),x.content.forEach(function(F){if(F.type===0)b.appendChild(m.createTextNode(F.value));else if(F.type===22){var M=m.createElement("img");M.src=F.value,M.style.opacity="1",b.appendChild(M)}else if(F.type===18){if(F.name==="attr"){var aA=F.values.filter(ke);aA.length&&b.appendChild(m.createTextNode(r.getAttribute(aA[0].value)||""))}else if(F.name==="counter"){var P=F.values.filter(Nr),uA=P[0],kA=P[1];if(uA&&ke(uA)){var CA=u.counters.getCounterValue(uA.value),gA=kA&&ke(kA)?$d.parse(u.context,kA.value):3;b.appendChild(m.createTextNode(Ao(CA,gA,!1)))}}else if(F.name==="counters"){var TA=F.values.filter(Nr),uA=TA[0],cA=TA[1],kA=TA[2];if(uA&&ke(uA)){var BA=u.counters.getCounterValues(uA.value),J=kA&&ke(kA)?$d.parse(u.context,kA.value):3,SA=cA&&cA.type===0?cA.value:"",_=BA.map(function(HA){return Ao(HA,J,!1)}).join(SA);b.appendChild(m.createTextNode(_))}}}else if(F.type===20)switch(F.value){case"open-quote":b.appendChild(m.createTextNode(Hp(x.quotes,u.quoteDepth++,!0)));break;case"close-quote":b.appendChild(m.createTextNode(Hp(x.quotes,--u.quoteDepth,!1)));break;default:b.appendChild(m.createTextNode(F.value))}}),b.className=au+" "+ru;var v=d===Wi.BEFORE?" "+au:" "+ru;return Ks(s)?s.className.baseValue+=v:s.className+=v,b}}},i.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},i}(),Wi;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(Wi||(Wi={}));var A2=function(i,r){var s=i.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=r.width.toString(),s.height=r.height.toString(),s.scrolling="no",s.setAttribute(c0,"true"),i.body.appendChild(s),s},e2=function(i){return new Promise(function(r){if(i.complete){r();return}if(!i.src){r();return}i.onload=r,i.onerror=r})},t2=function(i){return Promise.all([].slice.call(i.images,0).map(e2))},n2=function(i){return new Promise(function(r,s){var o=i.contentWindow;if(!o)return s("No window assigned for iframe");var d=o.document;o.onload=i.onload=function(){o.onload=i.onload=null;var u=setInterval(function(){d.body.childNodes.length>0&&d.readyState==="complete"&&(clearInterval(u),r(i))},50)}})},a2=["all","d","content"],kd=function(i,r){for(var s=i.length-1;s>=0;s--){var o=i.item(s);a2.indexOf(o)===-1&&r.style.setProperty(o,i.getPropertyValue(o))}return r},r2=function(i){var r="";return i&&(r+="<!DOCTYPE ",i.name&&(r+=i.name),i.internalSubset&&(r+=i.internalSubset),i.publicId&&(r+='"'+i.publicId+'"'),i.systemId&&(r+='"'+i.systemId+'"'),r+=">"),r},i2=function(i,r,s){i&&i.defaultView&&(r!==i.defaultView.pageXOffset||s!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(r,s)},o2=function(i){var r=i[0],s=i[1],o=i[2];r.scrollLeft=s,r.scrollTop=o},s2=":before",l2=":after",au="___html2canvas___pseudoelement_before",ru="___html2canvas___pseudoelement_after",tx=`{
    content: "" !important;
    display: none !important;
}`,c2=function(i){d2(i,"."+au+s2+tx+`
         .`+ru+l2+tx)},d2=function(i,r){var s=i.ownerDocument;if(s){var o=s.createElement("style");o.textContent=r,i.appendChild(o)}},d0=function(){function i(){}return i.getOrigin=function(r){var s=i._link;return s?(s.href=r,s.href=s.href,s.protocol+s.hostname+s.port):"about:blank"},i.isSameOrigin=function(r){return i.getOrigin(r)===i._origin},i.setContext=function(r){i._link=r.document.createElement("a"),i._origin=i.getOrigin(r.location.href)},i._origin="about:blank",i}(),u2=function(){function i(r,s){this.context=r,this._options=s,this._cache={}}return i.prototype.addImage=function(r){var s=Promise.resolve();return this.has(r)||(Dd(r)||p2(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),s},i.prototype.match=function(r){return this._cache[r]},i.prototype.loadImage=function(r){return vt(this,void 0,void 0,function(){var s,o,d,u,h=this;return bt(this,function(m){switch(m.label){case 0:return s=d0.isSameOrigin(r),o=!Md(r)&&this._options.useCORS===!0&&ht.SUPPORT_CORS_IMAGES&&!s,d=!Md(r)&&!s&&!Dd(r)&&typeof this._options.proxy=="string"&&ht.SUPPORT_CORS_XHR&&!o,!s&&this._options.allowTaint===!1&&!Md(r)&&!Dd(r)&&!d&&!o?[2]:(u=r,d?[4,this.proxy(u)]:[3,2]);case 1:u=m.sent(),m.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(x,b){var v=new Image;v.onload=function(){return x(v)},v.onerror=b,(x2(u)||o)&&(v.crossOrigin="anonymous"),v.src=u,v.complete===!0&&setTimeout(function(){return x(v)},500),h._options.imageTimeout>0&&setTimeout(function(){return b("Timed out ("+h._options.imageTimeout+"ms) loading image")},h._options.imageTimeout)})];case 3:return[2,m.sent()]}})})},i.prototype.has=function(r){return typeof this._cache[r]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(r){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var d=r.substring(0,256);return new Promise(function(u,h){var m=ht.SUPPORT_RESPONSE_TYPE?"blob":"text",x=new XMLHttpRequest;x.onload=function(){if(x.status===200)if(m==="text")u(x.response);else{var F=new FileReader;F.addEventListener("load",function(){return u(F.result)},!1),F.addEventListener("error",function(M){return h(M)},!1),F.readAsDataURL(x.response)}else h("Failed to proxy resource "+d+" with status code "+x.status)},x.onerror=h;var b=o.indexOf("?")>-1?"&":"?";if(x.open("GET",""+o+b+"url="+encodeURIComponent(r)+"&responseType="+m),m!=="text"&&x instanceof XMLHttpRequest&&(x.responseType=m),s._options.imageTimeout){var v=s._options.imageTimeout;x.timeout=v,x.ontimeout=function(){return h("Timed out ("+v+"ms) proxying "+d)}}x.send()})},i}(),f2=/^data:image\/svg\+xml/i,h2=/^data:image\/.*;base64,/i,g2=/^data:image\/.*/i,p2=function(i){return ht.SUPPORT_SVG_DRAWING||!m2(i)},Md=function(i){return g2.test(i)},x2=function(i){return h2.test(i)},Dd=function(i){return i.substr(0,4)==="blob"},m2=function(i){return i.substr(-3).toLowerCase()==="svg"||f2.test(i)},GA=function(){function i(r,s){this.type=0,this.x=r,this.y=s}return i.prototype.add=function(r,s){return new i(this.x+r,this.y+s)},i}(),Ur=function(i,r,s){return new GA(i.x+(r.x-i.x)*s,i.y+(r.y-i.y)*s)},ks=function(){function i(r,s,o,d){this.type=1,this.start=r,this.startControl=s,this.endControl=o,this.end=d}return i.prototype.subdivide=function(r,s){var o=Ur(this.start,this.startControl,r),d=Ur(this.startControl,this.endControl,r),u=Ur(this.endControl,this.end,r),h=Ur(o,d,r),m=Ur(d,u,r),x=Ur(h,m,r);return s?new i(this.start,o,h,x):new i(x,m,u,this.end)},i.prototype.add=function(r,s){return new i(this.start.add(r,s),this.startControl.add(r,s),this.endControl.add(r,s),this.end.add(r,s))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i}(),Jt=function(i){return i.type===1},B2=function(){function i(r){var s=r.styles,o=r.bounds,d=Gi(s.borderTopLeftRadius,o.width,o.height),u=d[0],h=d[1],m=Gi(s.borderTopRightRadius,o.width,o.height),x=m[0],b=m[1],v=Gi(s.borderBottomRightRadius,o.width,o.height),F=v[0],M=v[1],aA=Gi(s.borderBottomLeftRadius,o.width,o.height),P=aA[0],uA=aA[1],kA=[];kA.push((u+x)/o.width),kA.push((P+F)/o.width),kA.push((h+uA)/o.height),kA.push((b+M)/o.height);var CA=Math.max.apply(Math,kA);CA>1&&(u/=CA,h/=CA,x/=CA,b/=CA,F/=CA,M/=CA,P/=CA,uA/=CA);var gA=o.width-x,TA=o.height-M,cA=o.width-F,BA=o.height-uA,J=s.borderTopWidth,SA=s.borderRightWidth,_=s.borderBottomWidth,iA=s.borderLeftWidth,pA=Le(s.paddingTop,r.bounds.width),HA=Le(s.paddingRight,r.bounds.width),sA=Le(s.paddingBottom,r.bounds.width),OA=Le(s.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=u>0||h>0?Ge(o.left+iA/3,o.top+J/3,u-iA/3,h-J/3,Ee.TOP_LEFT):new GA(o.left+iA/3,o.top+J/3),this.topRightBorderDoubleOuterBox=u>0||h>0?Ge(o.left+gA,o.top+J/3,x-SA/3,b-J/3,Ee.TOP_RIGHT):new GA(o.left+o.width-SA/3,o.top+J/3),this.bottomRightBorderDoubleOuterBox=F>0||M>0?Ge(o.left+cA,o.top+TA,F-SA/3,M-_/3,Ee.BOTTOM_RIGHT):new GA(o.left+o.width-SA/3,o.top+o.height-_/3),this.bottomLeftBorderDoubleOuterBox=P>0||uA>0?Ge(o.left+iA/3,o.top+BA,P-iA/3,uA-_/3,Ee.BOTTOM_LEFT):new GA(o.left+iA/3,o.top+o.height-_/3),this.topLeftBorderDoubleInnerBox=u>0||h>0?Ge(o.left+iA*2/3,o.top+J*2/3,u-iA*2/3,h-J*2/3,Ee.TOP_LEFT):new GA(o.left+iA*2/3,o.top+J*2/3),this.topRightBorderDoubleInnerBox=u>0||h>0?Ge(o.left+gA,o.top+J*2/3,x-SA*2/3,b-J*2/3,Ee.TOP_RIGHT):new GA(o.left+o.width-SA*2/3,o.top+J*2/3),this.bottomRightBorderDoubleInnerBox=F>0||M>0?Ge(o.left+cA,o.top+TA,F-SA*2/3,M-_*2/3,Ee.BOTTOM_RIGHT):new GA(o.left+o.width-SA*2/3,o.top+o.height-_*2/3),this.bottomLeftBorderDoubleInnerBox=P>0||uA>0?Ge(o.left+iA*2/3,o.top+BA,P-iA*2/3,uA-_*2/3,Ee.BOTTOM_LEFT):new GA(o.left+iA*2/3,o.top+o.height-_*2/3),this.topLeftBorderStroke=u>0||h>0?Ge(o.left+iA/2,o.top+J/2,u-iA/2,h-J/2,Ee.TOP_LEFT):new GA(o.left+iA/2,o.top+J/2),this.topRightBorderStroke=u>0||h>0?Ge(o.left+gA,o.top+J/2,x-SA/2,b-J/2,Ee.TOP_RIGHT):new GA(o.left+o.width-SA/2,o.top+J/2),this.bottomRightBorderStroke=F>0||M>0?Ge(o.left+cA,o.top+TA,F-SA/2,M-_/2,Ee.BOTTOM_RIGHT):new GA(o.left+o.width-SA/2,o.top+o.height-_/2),this.bottomLeftBorderStroke=P>0||uA>0?Ge(o.left+iA/2,o.top+BA,P-iA/2,uA-_/2,Ee.BOTTOM_LEFT):new GA(o.left+iA/2,o.top+o.height-_/2),this.topLeftBorderBox=u>0||h>0?Ge(o.left,o.top,u,h,Ee.TOP_LEFT):new GA(o.left,o.top),this.topRightBorderBox=x>0||b>0?Ge(o.left+gA,o.top,x,b,Ee.TOP_RIGHT):new GA(o.left+o.width,o.top),this.bottomRightBorderBox=F>0||M>0?Ge(o.left+cA,o.top+TA,F,M,Ee.BOTTOM_RIGHT):new GA(o.left+o.width,o.top+o.height),this.bottomLeftBorderBox=P>0||uA>0?Ge(o.left,o.top+BA,P,uA,Ee.BOTTOM_LEFT):new GA(o.left,o.top+o.height),this.topLeftPaddingBox=u>0||h>0?Ge(o.left+iA,o.top+J,Math.max(0,u-iA),Math.max(0,h-J),Ee.TOP_LEFT):new GA(o.left+iA,o.top+J),this.topRightPaddingBox=x>0||b>0?Ge(o.left+Math.min(gA,o.width-SA),o.top+J,gA>o.width+SA?0:Math.max(0,x-SA),Math.max(0,b-J),Ee.TOP_RIGHT):new GA(o.left+o.width-SA,o.top+J),this.bottomRightPaddingBox=F>0||M>0?Ge(o.left+Math.min(cA,o.width-iA),o.top+Math.min(TA,o.height-_),Math.max(0,F-SA),Math.max(0,M-_),Ee.BOTTOM_RIGHT):new GA(o.left+o.width-SA,o.top+o.height-_),this.bottomLeftPaddingBox=P>0||uA>0?Ge(o.left+iA,o.top+Math.min(BA,o.height-_),Math.max(0,P-iA),Math.max(0,uA-_),Ee.BOTTOM_LEFT):new GA(o.left+iA,o.top+o.height-_),this.topLeftContentBox=u>0||h>0?Ge(o.left+iA+OA,o.top+J+pA,Math.max(0,u-(iA+OA)),Math.max(0,h-(J+pA)),Ee.TOP_LEFT):new GA(o.left+iA+OA,o.top+J+pA),this.topRightContentBox=x>0||b>0?Ge(o.left+Math.min(gA,o.width+iA+OA),o.top+J+pA,gA>o.width+iA+OA?0:x-iA+OA,b-(J+pA),Ee.TOP_RIGHT):new GA(o.left+o.width-(SA+HA),o.top+J+pA),this.bottomRightContentBox=F>0||M>0?Ge(o.left+Math.min(cA,o.width-(iA+OA)),o.top+Math.min(TA,o.height+J+pA),Math.max(0,F-(SA+HA)),M-(_+sA),Ee.BOTTOM_RIGHT):new GA(o.left+o.width-(SA+HA),o.top+o.height-(_+sA)),this.bottomLeftContentBox=P>0||uA>0?Ge(o.left+iA+OA,o.top+BA,Math.max(0,P-(iA+OA)),uA-(_+sA),Ee.BOTTOM_LEFT):new GA(o.left+iA+OA,o.top+o.height-(_+sA))}return i}(),Ee;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(Ee||(Ee={}));var Ge=function(i,r,s,o,d){var u=4*((Math.sqrt(2)-1)/3),h=s*u,m=o*u,x=i+s,b=r+o;switch(d){case Ee.TOP_LEFT:return new ks(new GA(i,b),new GA(i,b-m),new GA(x-h,r),new GA(x,r));case Ee.TOP_RIGHT:return new ks(new GA(i,r),new GA(i+h,r),new GA(x,b-m),new GA(x,b));case Ee.BOTTOM_RIGHT:return new ks(new GA(x,r),new GA(x,r+m),new GA(i+h,b),new GA(i,b));case Ee.BOTTOM_LEFT:default:return new ks(new GA(x,b),new GA(x-h,b),new GA(i,r+m),new GA(i,r))}},Js=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},b2=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Zs=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},w2=function(){function i(r,s,o){this.offsetX=r,this.offsetY=s,this.matrix=o,this.type=0,this.target=6}return i}(),Ms=function(){function i(r,s){this.path=r,this.target=s,this.type=1}return i}(),y2=function(){function i(r){this.opacity=r,this.type=2,this.target=6}return i}(),v2=function(i){return i.type===0},u0=function(i){return i.type===1},C2=function(i){return i.type===2},nx=function(i,r){return i.length===r.length?i.some(function(s,o){return s===r[o]}):!1},Q2=function(i,r,s,o,d){return i.map(function(u,h){switch(h){case 0:return u.add(r,s);case 1:return u.add(r+o,s);case 2:return u.add(r+o,s+d);case 3:return u.add(r,s+d)}return u})},f0=function(){function i(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i}(),h0=function(){function i(r,s){if(this.container=r,this.parent=s,this.effects=[],this.curves=new B2(this.container),this.container.styles.opacity<1&&this.effects.push(new y2(this.container.styles.opacity)),this.container.styles.transform!==null){var o=this.container.bounds.left+this.container.styles.transformOrigin[0].number,d=this.container.bounds.top+this.container.styles.transformOrigin[1].number,u=this.container.styles.transform;this.effects.push(new w2(o,d,u))}if(this.container.styles.overflowX!==0){var h=Js(this.curves),m=Zs(this.curves);nx(h,m)?this.effects.push(new Ms(h,6)):(this.effects.push(new Ms(h,2)),this.effects.push(new Ms(m,4)))}}return i.prototype.getEffects=function(r){for(var s=[2,3].indexOf(this.container.styles.position)===-1,o=this.parent,d=this.effects.slice(0);o;){var u=o.effects.filter(function(x){return!u0(x)});if(s||o.container.styles.position!==0||!o.parent){if(d.unshift.apply(d,u),s=[2,3].indexOf(o.container.styles.position)===-1,o.container.styles.overflowX!==0){var h=Js(o.curves),m=Zs(o.curves);nx(h,m)||d.unshift(new Ms(m,6))}}else d.unshift.apply(d,u);o=o.parent}return d.filter(function(x){return it(x.target,r)})},i}(),iu=function(i,r,s,o){i.container.elements.forEach(function(d){var u=it(d.flags,4),h=it(d.flags,2),m=new h0(d,i);it(d.styles.display,2048)&&o.push(m);var x=it(d.flags,8)?[]:o;if(u||h){var b=u||d.styles.isPositioned()?s:r,v=new f0(m);if(d.styles.isPositioned()||d.styles.opacity<1||d.styles.isTransformed()){var F=d.styles.zIndex.order;if(F<0){var M=0;b.negativeZIndex.some(function(P,uA){return F>P.element.container.styles.zIndex.order?(M=uA,!1):M>0}),b.negativeZIndex.splice(M,0,v)}else if(F>0){var aA=0;b.positiveZIndex.some(function(P,uA){return F>=P.element.container.styles.zIndex.order?(aA=uA+1,!1):aA>0}),b.positiveZIndex.splice(aA,0,v)}else b.zeroOrAutoZIndexOrTransformedOrOpacity.push(v)}else d.styles.isFloating()?b.nonPositionedFloats.push(v):b.nonPositionedInlineLevel.push(v);iu(m,v,u?v:s,x)}else d.styles.isInlineLevel()?r.inlineLevel.push(m):r.nonInlineLevel.push(m),iu(m,r,s,x);it(d.flags,8)&&g0(d,x)})},g0=function(i,r){for(var s=i instanceof eu?i.start:1,o=i instanceof eu?i.reversed:!1,d=0;d<r.length;d++){var u=r[d];u.container instanceof $x&&typeof u.container.value=="number"&&u.container.value!==0&&(s=u.container.value),u.listValue=Ao(s,u.container.styles.listStyleType,!0),s+=o?-1:1}},U2=function(i){var r=new h0(i,null),s=new f0(r),o=[];return iu(r,s,s,o),g0(r.container,o),s},ax=function(i,r){switch(r){case 0:return qt(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return qt(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return qt(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return qt(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},E2=function(i,r){switch(r){case 0:return qt(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return qt(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return qt(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return qt(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},F2=function(i,r){switch(r){case 0:return qt(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return qt(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return qt(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return qt(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},j2=function(i,r){switch(r){case 0:return Ds(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return Ds(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return Ds(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return Ds(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},Ds=function(i,r){var s=[];return Jt(i)?s.push(i.subdivide(.5,!1)):s.push(i),Jt(r)?s.push(r.subdivide(.5,!0)):s.push(r),s},qt=function(i,r,s,o){var d=[];return Jt(i)?d.push(i.subdivide(.5,!1)):d.push(i),Jt(s)?d.push(s.subdivide(.5,!0)):d.push(s),Jt(o)?d.push(o.subdivide(.5,!0).reverse()):d.push(o),Jt(r)?d.push(r.subdivide(.5,!1).reverse()):d.push(r),d},p0=function(i){var r=i.bounds,s=i.styles;return r.add(s.borderLeftWidth,s.borderTopWidth,-(s.borderRightWidth+s.borderLeftWidth),-(s.borderTopWidth+s.borderBottomWidth))},qs=function(i){var r=i.styles,s=i.bounds,o=Le(r.paddingLeft,s.width),d=Le(r.paddingRight,s.width),u=Le(r.paddingTop,s.width),h=Le(r.paddingBottom,s.width);return s.add(o+r.borderLeftWidth,u+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+o+d),-(r.borderTopWidth+r.borderBottomWidth+u+h))},S2=function(i,r){return i===0?r.bounds:i===2?qs(r):p0(r)},H2=function(i,r){return i===0?r.bounds:i===2?qs(r):p0(r)},Td=function(i,r,s){var o=S2(jr(i.styles.backgroundOrigin,r),i),d=H2(jr(i.styles.backgroundClip,r),i),u=N2(jr(i.styles.backgroundSize,r),s,o),h=u[0],m=u[1],x=Gi(jr(i.styles.backgroundPosition,r),o.width-h,o.height-m),b=k2(jr(i.styles.backgroundRepeat,r),x,u,o,d),v=Math.round(o.left+x[0]),F=Math.round(o.top+x[1]);return[b,v,F,h,m]},Er=function(i){return ke(i)&&i.value===Hr.AUTO},Ts=function(i){return typeof i=="number"},N2=function(i,r,s){var o=r[0],d=r[1],u=r[2],h=i[0],m=i[1];if(!h)return[0,0];if(nt(h)&&m&&nt(m))return[Le(h,s.width),Le(m,s.height)];var x=Ts(u);if(ke(h)&&(h.value===Hr.CONTAIN||h.value===Hr.COVER)){if(Ts(u)){var b=s.width/s.height;return b<u!=(h.value===Hr.COVER)?[s.width,s.width/u]:[s.height*u,s.height]}return[s.width,s.height]}var v=Ts(o),F=Ts(d),M=v||F;if(Er(h)&&(!m||Er(m))){if(v&&F)return[o,d];if(!x&&!M)return[s.width,s.height];if(M&&x){var aA=v?o:d*u,P=F?d:o/u;return[aA,P]}var uA=v?o:s.width,kA=F?d:s.height;return[uA,kA]}if(x){var CA=0,gA=0;return nt(h)?CA=Le(h,s.width):nt(m)&&(gA=Le(m,s.height)),Er(h)?CA=gA*u:(!m||Er(m))&&(gA=CA/u),[CA,gA]}var TA=null,cA=null;if(nt(h)?TA=Le(h,s.width):m&&nt(m)&&(cA=Le(m,s.height)),TA!==null&&(!m||Er(m))&&(cA=v&&F?TA/o*d:s.height),cA!==null&&Er(h)&&(TA=v&&F?cA/d*o:s.width),TA!==null&&cA!==null)return[TA,cA];throw new Error("Unable to calculate background-size for element")},jr=function(i,r){var s=i[r];return typeof s>"u"?i[0]:s},k2=function(i,r,s,o,d){var u=r[0],h=r[1],m=s[0],x=s[1];switch(i){case 2:return[new GA(Math.round(o.left),Math.round(o.top+h)),new GA(Math.round(o.left+o.width),Math.round(o.top+h)),new GA(Math.round(o.left+o.width),Math.round(x+o.top+h)),new GA(Math.round(o.left),Math.round(x+o.top+h))];case 3:return[new GA(Math.round(o.left+u),Math.round(o.top)),new GA(Math.round(o.left+u+m),Math.round(o.top)),new GA(Math.round(o.left+u+m),Math.round(o.height+o.top)),new GA(Math.round(o.left+u),Math.round(o.height+o.top))];case 1:return[new GA(Math.round(o.left+u),Math.round(o.top+h)),new GA(Math.round(o.left+u+m),Math.round(o.top+h)),new GA(Math.round(o.left+u+m),Math.round(o.top+h+x)),new GA(Math.round(o.left+u),Math.round(o.top+h+x))];default:return[new GA(Math.round(d.left),Math.round(d.top)),new GA(Math.round(d.left+d.width),Math.round(d.top)),new GA(Math.round(d.left+d.width),Math.round(d.height+d.top)),new GA(Math.round(d.left),Math.round(d.height+d.top))]}},M2="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",rx="Hidden Text",D2=function(){function i(r){this._data={},this._document=r}return i.prototype.parseMetrics=function(r,s){var o=this._document.createElement("div"),d=this._document.createElement("img"),u=this._document.createElement("span"),h=this._document.body;o.style.visibility="hidden",o.style.fontFamily=r,o.style.fontSize=s,o.style.margin="0",o.style.padding="0",o.style.whiteSpace="nowrap",h.appendChild(o),d.src=M2,d.width=1,d.height=1,d.style.margin="0",d.style.padding="0",d.style.verticalAlign="baseline",u.style.fontFamily=r,u.style.fontSize=s,u.style.margin="0",u.style.padding="0",u.appendChild(this._document.createTextNode(rx)),o.appendChild(u),o.appendChild(d);var m=d.offsetTop-u.offsetTop+2;o.removeChild(u),o.appendChild(this._document.createTextNode(rx)),o.style.lineHeight="normal",d.style.verticalAlign="super";var x=d.offsetTop-o.offsetTop+2;return h.removeChild(o),{baseline:m,middle:x}},i.prototype.getMetrics=function(r,s){var o=r+" "+s;return typeof this._data[o]>"u"&&(this._data[o]=this.parseMetrics(r,s)),this._data[o]},i}(),x0=function(){function i(r,s){this.context=r,this.options=s}return i}(),T2=1e4,I2=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d._activeEffects=[],d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),o.canvas||(d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px"),d.fontMetrics=new D2(document),d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.ctx.textBaseline="bottom",d._activeEffects=[],d.context.logger.debug("Canvas renderer initialized ("+o.width+"x"+o.height+") with scale "+o.scale),d}return r.prototype.applyEffects=function(s){for(var o=this;this._activeEffects.length;)this.popEffect();s.forEach(function(d){return o.applyEffect(d)})},r.prototype.applyEffect=function(s){this.ctx.save(),C2(s)&&(this.ctx.globalAlpha=s.opacity),v2(s)&&(this.ctx.translate(s.offsetX,s.offsetY),this.ctx.transform(s.matrix[0],s.matrix[1],s.matrix[2],s.matrix[3],s.matrix[4],s.matrix[5]),this.ctx.translate(-s.offsetX,-s.offsetY)),u0(s)&&(this.path(s.path),this.ctx.clip()),this._activeEffects.push(s)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(s){return vt(this,void 0,void 0,function(){var o;return bt(this,function(d){switch(d.label){case 0:return o=s.element.container.styles,o.isVisible()?[4,this.renderStackContent(s)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(s){return vt(this,void 0,void 0,function(){return bt(this,function(o){switch(o.label){case 0:if(it(s.container.flags,16))debugger;return s.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(s)]:[3,3];case 1:return o.sent(),[4,this.renderNodeContent(s)];case 2:o.sent(),o.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(s,o,d){var u=this;if(o===0)this.ctx.fillText(s.text,s.bounds.left,s.bounds.top+d);else{var h=hu(s.text);h.reduce(function(m,x){return u.ctx.fillText(x,m,s.bounds.top+d),m+u.ctx.measureText(x).width},s.bounds.left)}},r.prototype.createFontStyle=function(s){var o=s.fontVariant.filter(function(h){return h==="normal"||h==="small-caps"}).join(""),d=z2(s.fontFamily).join(", "),u=no(s.fontSize)?""+s.fontSize.number+s.fontSize.unit:s.fontSize.number+"px";return[[s.fontStyle,o,s.fontWeight,u,d].join(" "),d,u]},r.prototype.renderTextNode=function(s,o){return vt(this,void 0,void 0,function(){var d,u,h,m,x,b,v,F,M=this;return bt(this,function(aA){return d=this.createFontStyle(o),u=d[0],h=d[1],m=d[2],this.ctx.font=u,this.ctx.direction=o.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",x=this.fontMetrics.getMetrics(h,m),b=x.baseline,v=x.middle,F=o.paintOrder,s.textBounds.forEach(function(P){F.forEach(function(uA){switch(uA){case 0:M.ctx.fillStyle=ct(o.color),M.renderTextWithLetterSpacing(P,o.letterSpacing,b);var kA=o.textShadow;kA.length&&P.text.trim().length&&(kA.slice(0).reverse().forEach(function(CA){M.ctx.shadowColor=ct(CA.color),M.ctx.shadowOffsetX=CA.offsetX.number*M.options.scale,M.ctx.shadowOffsetY=CA.offsetY.number*M.options.scale,M.ctx.shadowBlur=CA.blur.number,M.renderTextWithLetterSpacing(P,o.letterSpacing,b)}),M.ctx.shadowColor="",M.ctx.shadowOffsetX=0,M.ctx.shadowOffsetY=0,M.ctx.shadowBlur=0),o.textDecorationLine.length&&(M.ctx.fillStyle=ct(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(CA){switch(CA){case 1:M.ctx.fillRect(P.bounds.left,Math.round(P.bounds.top+b),P.bounds.width,1);break;case 2:M.ctx.fillRect(P.bounds.left,Math.round(P.bounds.top),P.bounds.width,1);break;case 3:M.ctx.fillRect(P.bounds.left,Math.ceil(P.bounds.top+v),P.bounds.width,1);break}}));break;case 1:o.webkitTextStrokeWidth&&P.text.trim().length&&(M.ctx.strokeStyle=ct(o.webkitTextStrokeColor),M.ctx.lineWidth=o.webkitTextStrokeWidth,M.ctx.lineJoin=window.chrome?"miter":"round",M.ctx.strokeText(P.text,P.bounds.left,P.bounds.top+b)),M.ctx.strokeStyle="",M.ctx.lineWidth=0,M.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(s,o,d){if(d&&s.intrinsicWidth>0&&s.intrinsicHeight>0){var u=qs(s),h=Zs(o);this.path(h),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(d,0,0,s.intrinsicWidth,s.intrinsicHeight,u.left,u.top,u.width,u.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(s){return vt(this,void 0,void 0,function(){var o,d,u,h,m,x,gA,gA,b,v,F,M,cA,aA,P,BA,uA,kA,CA,gA,TA,cA,BA;return bt(this,function(J){switch(J.label){case 0:this.applyEffects(s.getEffects(4)),o=s.container,d=s.curves,u=o.styles,h=0,m=o.textNodes,J.label=1;case 1:return h<m.length?(x=m[h],[4,this.renderTextNode(x,u)]):[3,4];case 2:J.sent(),J.label=3;case 3:return h++,[3,1];case 4:if(!(o instanceof Zx))return[3,8];J.label=5;case 5:return J.trys.push([5,7,,8]),[4,this.context.cache.match(o.src)];case 6:return gA=J.sent(),this.renderReplacedElement(o,d,gA),[3,8];case 7:return J.sent(),this.context.logger.error("Error loading image "+o.src),[3,8];case 8:if(o instanceof qx&&this.renderReplacedElement(o,d,o.canvas),!(o instanceof Wx))return[3,12];J.label=9;case 9:return J.trys.push([9,11,,12]),[4,this.context.cache.match(o.svg)];case 10:return gA=J.sent(),this.renderReplacedElement(o,d,gA),[3,12];case 11:return J.sent(),this.context.logger.error("Error loading svg "+o.svg.substring(0,255)),[3,12];case 12:return o instanceof e0&&o.tree?(b=new r(this.context,{scale:this.options.scale,backgroundColor:o.backgroundColor,x:0,y:0,width:o.width,height:o.height}),[4,b.render(o.tree)]):[3,14];case 13:v=J.sent(),o.width&&o.height&&this.ctx.drawImage(v,0,0,o.width,o.height,o.bounds.left,o.bounds.top,o.bounds.width,o.bounds.height),J.label=14;case 14:if(o instanceof gu&&(F=Math.min(o.bounds.width,o.bounds.height),o.type===Gs?o.checked&&(this.ctx.save(),this.path([new GA(o.bounds.left+F*.39363,o.bounds.top+F*.79),new GA(o.bounds.left+F*.16,o.bounds.top+F*.5549),new GA(o.bounds.left+F*.27347,o.bounds.top+F*.44071),new GA(o.bounds.left+F*.39694,o.bounds.top+F*.5649),new GA(o.bounds.left+F*.72983,o.bounds.top+F*.23),new GA(o.bounds.left+F*.84,o.bounds.top+F*.34085),new GA(o.bounds.left+F*.39363,o.bounds.top+F*.79)]),this.ctx.fillStyle=ct(Yp),this.ctx.fill(),this.ctx.restore()):o.type===Vs&&o.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(o.bounds.left+F/2,o.bounds.top+F/2,F/4,0,Math.PI*2,!0),this.ctx.fillStyle=ct(Yp),this.ctx.fill(),this.ctx.restore())),L2(o)&&o.value.length){switch(M=this.createFontStyle(u),cA=M[0],aA=M[1],P=this.fontMetrics.getMetrics(cA,aA).baseline,this.ctx.font=cA,this.ctx.fillStyle=ct(u.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=K2(o.styles.textAlign),BA=qs(o),uA=0,o.styles.textAlign){case 1:uA+=BA.width/2;break;case 2:uA+=BA.width;break}kA=BA.add(uA,0,0,-BA.height/2+1),this.ctx.save(),this.path([new GA(BA.left,BA.top),new GA(BA.left+BA.width,BA.top),new GA(BA.left+BA.width,BA.top+BA.height),new GA(BA.left,BA.top+BA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new qi(o.value,kA),u.letterSpacing,P),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!it(o.styles.display,2048))return[3,20];if(o.styles.listStyleImage===null)return[3,19];if(CA=o.styles.listStyleImage,CA.type!==0)return[3,18];gA=void 0,TA=CA.url,J.label=15;case 15:return J.trys.push([15,17,,18]),[4,this.context.cache.match(TA)];case 16:return gA=J.sent(),this.ctx.drawImage(gA,o.bounds.left-(gA.width+10),o.bounds.top),[3,18];case 17:return J.sent(),this.context.logger.error("Error loading list-style-image "+TA),[3,18];case 18:return[3,20];case 19:s.listValue&&o.styles.listStyleType!==-1&&(cA=this.createFontStyle(u)[0],this.ctx.font=cA,this.ctx.fillStyle=ct(u.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",BA=new Mn(o.bounds.left,o.bounds.top+Le(o.styles.paddingTop,o.bounds.width),o.bounds.width,jp(u.lineHeight,u.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new qi(s.listValue,BA),u.letterSpacing,jp(u.lineHeight,u.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),J.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(s){return vt(this,void 0,void 0,function(){var o,d,CA,u,h,CA,m,x,CA,b,v,CA,F,M,CA,aA,P,CA,uA,kA,CA;return bt(this,function(gA){switch(gA.label){case 0:if(it(s.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(s.element)];case 1:gA.sent(),o=0,d=s.negativeZIndex,gA.label=2;case 2:return o<d.length?(CA=d[o],[4,this.renderStack(CA)]):[3,5];case 3:gA.sent(),gA.label=4;case 4:return o++,[3,2];case 5:return[4,this.renderNodeContent(s.element)];case 6:gA.sent(),u=0,h=s.nonInlineLevel,gA.label=7;case 7:return u<h.length?(CA=h[u],[4,this.renderNode(CA)]):[3,10];case 8:gA.sent(),gA.label=9;case 9:return u++,[3,7];case 10:m=0,x=s.nonPositionedFloats,gA.label=11;case 11:return m<x.length?(CA=x[m],[4,this.renderStack(CA)]):[3,14];case 12:gA.sent(),gA.label=13;case 13:return m++,[3,11];case 14:b=0,v=s.nonPositionedInlineLevel,gA.label=15;case 15:return b<v.length?(CA=v[b],[4,this.renderStack(CA)]):[3,18];case 16:gA.sent(),gA.label=17;case 17:return b++,[3,15];case 18:F=0,M=s.inlineLevel,gA.label=19;case 19:return F<M.length?(CA=M[F],[4,this.renderNode(CA)]):[3,22];case 20:gA.sent(),gA.label=21;case 21:return F++,[3,19];case 22:aA=0,P=s.zeroOrAutoZIndexOrTransformedOrOpacity,gA.label=23;case 23:return aA<P.length?(CA=P[aA],[4,this.renderStack(CA)]):[3,26];case 24:gA.sent(),gA.label=25;case 25:return aA++,[3,23];case 26:uA=0,kA=s.positiveZIndex,gA.label=27;case 27:return uA<kA.length?(CA=kA[uA],[4,this.renderStack(CA)]):[3,30];case 28:gA.sent(),gA.label=29;case 29:return uA++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(s){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(s.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(s){this.ctx.beginPath(),this.formatPath(s),this.ctx.closePath()},r.prototype.formatPath=function(s){var o=this;s.forEach(function(d,u){var h=Jt(d)?d.start:d;u===0?o.ctx.moveTo(h.x,h.y):o.ctx.lineTo(h.x,h.y),Jt(d)&&o.ctx.bezierCurveTo(d.startControl.x,d.startControl.y,d.endControl.x,d.endControl.y,d.end.x,d.end.y)})},r.prototype.renderRepeat=function(s,o,d,u){this.path(s),this.ctx.fillStyle=o,this.ctx.translate(d,u),this.ctx.fill(),this.ctx.translate(-d,-u)},r.prototype.resizeImage=function(s,o,d){var u;if(s.width===o&&s.height===d)return s;var h=(u=this.canvas.ownerDocument)!==null&&u!==void 0?u:document,m=h.createElement("canvas");m.width=Math.max(1,o),m.height=Math.max(1,d);var x=m.getContext("2d");return x.drawImage(s,0,0,s.width,s.height,0,0,o,d),m},r.prototype.renderBackgroundImage=function(s){return vt(this,void 0,void 0,function(){var o,d,u,h,m,x;return bt(this,function(b){switch(b.label){case 0:o=s.styles.backgroundImage.length-1,d=function(v){var F,M,aA,pA,G,oA,OA,_A,_,P,pA,G,oA,OA,_A,uA,kA,CA,gA,TA,cA,BA,J,SA,_,iA,pA,HA,sA,OA,_A,LA,G,oA,xA,RA,U,V,hA,rA,UA,MA;return bt(this,function(T){switch(T.label){case 0:if(v.type!==0)return[3,5];F=void 0,M=v.url,T.label=1;case 1:return T.trys.push([1,3,,4]),[4,u.context.cache.match(M)];case 2:return F=T.sent(),[3,4];case 3:return T.sent(),u.context.logger.error("Error loading background-image "+M),[3,4];case 4:return F&&(aA=Td(s,o,[F.width,F.height,F.width/F.height]),pA=aA[0],G=aA[1],oA=aA[2],OA=aA[3],_A=aA[4],_=u.ctx.createPattern(u.resizeImage(F,OA,_A),"repeat"),u.renderRepeat(pA,_,G,oA)),[3,6];case 5:v1(v)?(P=Td(s,o,[null,null,null]),pA=P[0],G=P[1],oA=P[2],OA=P[3],_A=P[4],uA=m1(v.angle,OA,_A),kA=uA[0],CA=uA[1],gA=uA[2],TA=uA[3],cA=uA[4],BA=document.createElement("canvas"),BA.width=OA,BA.height=_A,J=BA.getContext("2d"),SA=J.createLinearGradient(CA,TA,gA,cA),Ep(v.stops,kA).forEach(function(QA){return SA.addColorStop(QA.stop,ct(QA.color))}),J.fillStyle=SA,J.fillRect(0,0,OA,_A),OA>0&&_A>0&&(_=u.ctx.createPattern(BA,"repeat"),u.renderRepeat(pA,_,G,oA))):C1(v)&&(iA=Td(s,o,[null,null,null]),pA=iA[0],HA=iA[1],sA=iA[2],OA=iA[3],_A=iA[4],LA=v.position.length===0?[du]:v.position,G=Le(LA[0],OA),oA=Le(LA[LA.length-1],_A),xA=B1(v,G,oA,OA,_A),RA=xA[0],U=xA[1],RA>0&&U>0&&(V=u.ctx.createRadialGradient(HA+G,sA+oA,0,HA+G,sA+oA,RA),Ep(v.stops,RA*2).forEach(function(QA){return V.addColorStop(QA.stop,ct(QA.color))}),u.path(pA),u.ctx.fillStyle=V,RA!==U?(hA=s.bounds.left+.5*s.bounds.width,rA=s.bounds.top+.5*s.bounds.height,UA=U/RA,MA=1/UA,u.ctx.save(),u.ctx.translate(hA,rA),u.ctx.transform(1,0,0,UA,0,0),u.ctx.translate(-hA,-rA),u.ctx.fillRect(HA,MA*(sA-rA)+rA,OA,_A*MA),u.ctx.restore()):u.ctx.fill())),T.label=6;case 6:return o--,[2]}})},u=this,h=0,m=s.styles.backgroundImage.slice(0).reverse(),b.label=1;case 1:return h<m.length?(x=m[h],[5,d(x)]):[3,4];case 2:b.sent(),b.label=3;case 3:return h++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(s,o,d){return vt(this,void 0,void 0,function(){return bt(this,function(u){return this.path(ax(d,o)),this.ctx.fillStyle=ct(s),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(s,o,d,u){return vt(this,void 0,void 0,function(){var h,m;return bt(this,function(x){switch(x.label){case 0:return o<3?[4,this.renderSolidBorder(s,d,u)]:[3,2];case 1:return x.sent(),[2];case 2:return h=E2(u,d),this.path(h),this.ctx.fillStyle=ct(s),this.ctx.fill(),m=F2(u,d),this.path(m),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(s){return vt(this,void 0,void 0,function(){var o,d,u,h,m,x,b,v,F=this;return bt(this,function(M){switch(M.label){case 0:return this.applyEffects(s.getEffects(2)),o=s.container.styles,d=!ha(o.backgroundColor)||o.backgroundImage.length,u=[{style:o.borderTopStyle,color:o.borderTopColor,width:o.borderTopWidth},{style:o.borderRightStyle,color:o.borderRightColor,width:o.borderRightWidth},{style:o.borderBottomStyle,color:o.borderBottomColor,width:o.borderBottomWidth},{style:o.borderLeftStyle,color:o.borderLeftColor,width:o.borderLeftWidth}],h=O2(jr(o.backgroundClip,0),s.curves),d||o.boxShadow.length?(this.ctx.save(),this.path(h),this.ctx.clip(),ha(o.backgroundColor)||(this.ctx.fillStyle=ct(o.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(s.container)]):[3,2];case 1:M.sent(),this.ctx.restore(),o.boxShadow.slice(0).reverse().forEach(function(aA){F.ctx.save();var P=Js(s.curves),uA=aA.inset?0:T2,kA=Q2(P,-uA+(aA.inset?1:-1)*aA.spread.number,(aA.inset?1:-1)*aA.spread.number,aA.spread.number*(aA.inset?-2:2),aA.spread.number*(aA.inset?-2:2));aA.inset?(F.path(P),F.ctx.clip(),F.mask(kA)):(F.mask(P),F.ctx.clip(),F.path(kA)),F.ctx.shadowOffsetX=aA.offsetX.number+uA,F.ctx.shadowOffsetY=aA.offsetY.number,F.ctx.shadowColor=ct(aA.color),F.ctx.shadowBlur=aA.blur.number,F.ctx.fillStyle=aA.inset?ct(aA.color):"rgba(0,0,0,1)",F.ctx.fill(),F.ctx.restore()}),M.label=2;case 2:m=0,x=0,b=u,M.label=3;case 3:return x<b.length?(v=b[x],v.style!==0&&!ha(v.color)&&v.width>0?v.style!==2?[3,5]:[4,this.renderDashedDottedBorder(v.color,v.width,m,s.curves,2)]:[3,11]):[3,13];case 4:return M.sent(),[3,11];case 5:return v.style!==3?[3,7]:[4,this.renderDashedDottedBorder(v.color,v.width,m,s.curves,3)];case 6:return M.sent(),[3,11];case 7:return v.style!==4?[3,9]:[4,this.renderDoubleBorder(v.color,v.width,m,s.curves)];case 8:return M.sent(),[3,11];case 9:return[4,this.renderSolidBorder(v.color,m,s.curves)];case 10:M.sent(),M.label=11;case 11:m++,M.label=12;case 12:return x++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(s,o,d,u,h){return vt(this,void 0,void 0,function(){var m,x,b,v,F,M,aA,P,uA,kA,CA,gA,TA,cA,BA,J,BA,J;return bt(this,function(SA){return this.ctx.save(),m=j2(u,d),x=ax(u,d),h===2&&(this.path(x),this.ctx.clip()),Jt(x[0])?(b=x[0].start.x,v=x[0].start.y):(b=x[0].x,v=x[0].y),Jt(x[1])?(F=x[1].end.x,M=x[1].end.y):(F=x[1].x,M=x[1].y),d===0||d===2?aA=Math.abs(b-F):aA=Math.abs(v-M),this.ctx.beginPath(),h===3?this.formatPath(m):this.formatPath(x.slice(0,2)),P=o<3?o*3:o*2,uA=o<3?o*2:o,h===3&&(P=o,uA=o),kA=!0,aA<=P*2?kA=!1:aA<=P*2+uA?(CA=aA/(2*P+uA),P*=CA,uA*=CA):(gA=Math.floor((aA+uA)/(P+uA)),TA=(aA-gA*P)/(gA-1),cA=(aA-(gA+1)*P)/gA,uA=cA<=0||Math.abs(uA-TA)<Math.abs(uA-cA)?TA:cA),kA&&(h===3?this.ctx.setLineDash([0,P+uA]):this.ctx.setLineDash([P,uA])),h===3?(this.ctx.lineCap="round",this.ctx.lineWidth=o):this.ctx.lineWidth=o*2+1.1,this.ctx.strokeStyle=ct(s),this.ctx.stroke(),this.ctx.setLineDash([]),h===2&&(Jt(x[0])&&(BA=x[3],J=x[0],this.ctx.beginPath(),this.formatPath([new GA(BA.end.x,BA.end.y),new GA(J.start.x,J.start.y)]),this.ctx.stroke()),Jt(x[1])&&(BA=x[1],J=x[2],this.ctx.beginPath(),this.formatPath([new GA(BA.end.x,BA.end.y),new GA(J.start.x,J.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(s){return vt(this,void 0,void 0,function(){var o;return bt(this,function(d){switch(d.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ct(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),o=U2(s),[4,this.renderStack(o)];case 1:return d.sent(),this.applyEffects([]),[2,this.canvas]}})})},r}(x0),L2=function(i){return i instanceof A0||i instanceof Px?!0:i instanceof gu&&i.type!==Vs&&i.type!==Gs},O2=function(i,r){switch(i){case 0:return Js(r);case 2:return b2(r);case 1:default:return Zs(r)}},K2=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},R2=["-apple-system","system-ui"],z2=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(r){return R2.indexOf(r)===-1}):i},_2=function(i){en(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),d.options=o,d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px",d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+o.width+"x"+o.height+" at "+o.x+","+o.y+") with scale "+o.scale),d}return r.prototype.render=function(s){return vt(this,void 0,void 0,function(){var o,d;return bt(this,function(u){switch(u.label){case 0:return o=Au(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,s),[4,G2(o)];case 1:return d=u.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ct(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(d,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r}(x0),G2=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},V2=function(){function i(r){var s=r.id,o=r.enabled;this.id=s,this.enabled=o,this.start=Date.now()}return i.prototype.debug=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,hs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,hs([this.id,this.getTime()+"ms"],r))},i.prototype.warn=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,hs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.error=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,hs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.instances={},i}(),Y2=function(){function i(r,s){var o;this.windowBounds=s,this.instanceName="#"+i.instanceCount++,this.logger=new V2({id:this.instanceName,enabled:r.logging}),this.cache=(o=r.cache)!==null&&o!==void 0?o:new u2(this,r)}return i.instanceCount=1,i}(),m0=function(i,r){return r===void 0&&(r={}),X2(i,r)};typeof window<"u"&&d0.setContext(window);var X2=function(i,r){return vt(void 0,void 0,void 0,function(){var s,o,d,u,h,m,x,b,v,F,M,aA,P,uA,kA,CA,gA,TA,cA,BA,SA,J,SA,_,iA,pA,HA,sA,OA,_A,LA,G,oA,xA,RA,U,V,hA,rA,UA;return bt(this,function(MA){switch(MA.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(s=i.ownerDocument,!s)throw new Error("Element is not attached to a Document");if(o=s.defaultView,!o)throw new Error("Document is not attached to a Window");return d={allowTaint:(_=r.allowTaint)!==null&&_!==void 0?_:!1,imageTimeout:(iA=r.imageTimeout)!==null&&iA!==void 0?iA:15e3,proxy:r.proxy,useCORS:(pA=r.useCORS)!==null&&pA!==void 0?pA:!1},u=Od({logging:(HA=r.logging)!==null&&HA!==void 0?HA:!0,cache:r.cache},d),h={windowWidth:(sA=r.windowWidth)!==null&&sA!==void 0?sA:o.innerWidth,windowHeight:(OA=r.windowHeight)!==null&&OA!==void 0?OA:o.innerHeight,scrollX:(_A=r.scrollX)!==null&&_A!==void 0?_A:o.pageXOffset,scrollY:(LA=r.scrollY)!==null&&LA!==void 0?LA:o.pageYOffset},m=new Mn(h.scrollX,h.scrollY,h.windowWidth,h.windowHeight),x=new Y2(u,m),b=(G=r.foreignObjectRendering)!==null&&G!==void 0?G:!1,v={allowTaint:(oA=r.allowTaint)!==null&&oA!==void 0?oA:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:b,copyStyles:b},x.logger.debug("Starting document clone with size "+m.width+"x"+m.height+" scrolled to "+-m.left+","+-m.top),F=new ex(x,i,v),M=F.clonedReferenceElement,M?[4,F.toIFrame(s,m)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return aA=MA.sent(),P=pu(M)||ZC(M)?Qw(M.ownerDocument):Ws(x,M),uA=P.width,kA=P.height,CA=P.left,gA=P.top,TA=J2(x,M,r.backgroundColor),cA={canvas:r.canvas,backgroundColor:TA,scale:(RA=(xA=r.scale)!==null&&xA!==void 0?xA:o.devicePixelRatio)!==null&&RA!==void 0?RA:1,x:((U=r.x)!==null&&U!==void 0?U:0)+CA,y:((V=r.y)!==null&&V!==void 0?V:0)+gA,width:(hA=r.width)!==null&&hA!==void 0?hA:Math.ceil(uA),height:(rA=r.height)!==null&&rA!==void 0?rA:Math.ceil(kA)},b?(x.logger.debug("Document cloned, using foreign object rendering"),SA=new _2(x,cA),[4,SA.render(M)]):[3,3];case 2:return BA=MA.sent(),[3,5];case 3:return x.logger.debug("Document cloned, element located at "+CA+","+gA+" with size "+uA+"x"+kA+" using computed rendering"),x.logger.debug("Starting DOM parsing"),J=n0(x,M),TA===J.styles.backgroundColor&&(J.styles.backgroundColor=kn.TRANSPARENT),x.logger.debug("Starting renderer for element at "+cA.x+","+cA.y+" with size "+cA.width+"x"+cA.height),SA=new I2(x,cA),[4,SA.render(J)];case 4:BA=MA.sent(),MA.label=5;case 5:return(!((UA=r.removeContainer)!==null&&UA!==void 0)||UA)&&(ex.destroy(aA)||x.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),x.logger.debug("Finished rendering"),[2,BA]}})})},J2=function(i,r,s){var o=r.ownerDocument,d=o.documentElement?Ji(i,getComputedStyle(o.documentElement).backgroundColor):kn.TRANSPARENT,u=o.body?Ji(i,getComputedStyle(o.body).backgroundColor):kn.TRANSPARENT,h=typeof s=="string"?Ji(i,s):s===null?kn.TRANSPARENT:4294967295;return r===o.documentElement?ha(d)?ha(u)?h:u:d:h};const Tr=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),Z2=({ganttChart:i,tasks:r,onUpdateGanttChart:s,onBack:o})=>{const[d,u]=S.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:b()}),[h,m]=S.useState(null),x=S.useRef(null);function b(){const _=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return _[Math.floor(Math.random()*_.length)]}const v=S.useMemo(()=>{if(r.length===0){const LA=new Date,G=new Date(LA.getTime()+30*24*60*60*1e3);return{startDate:LA,endDate:G,totalDays:30}}const _=r.flatMap(LA=>[new Date(LA.startDate),new Date(LA.endDate)]),iA=new Date(Math.min(..._)),pA=new Date(Math.max(..._)),HA=7,sA=new Date(iA.getTime()-HA*24*60*60*1e3),OA=new Date(pA.getTime()+HA*24*60*60*1e3),_A=Math.ceil((OA-sA)/(24*60*60*1e3));return{startDate:sA,endDate:OA,totalDays:_A}},[r]),F=S.useMemo(()=>{const _=[],{startDate:iA,totalDays:pA}=v;for(let HA=0;HA<=pA;HA+=7){const sA=new Date(iA.getTime()+HA*24*60*60*1e3);_.push({date:sA,position:HA/pA*100,label:sA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return _},[v]),M=_=>{const iA=new Date(_),{startDate:pA,totalDays:HA}=v,sA=Math.max(0,(iA-pA)/(24*60*60*1e3));return Math.min(100,sA/HA*100)},aA=(_,iA)=>{const pA=new Date(_),HA=new Date(iA),{totalDays:sA}=v,OA=Math.max(1,(HA-pA)/(24*60*60*1e3));return Math.min(100,OA/sA*100)},P=()=>{if(!d.name.trim())return;const _=[...r,{id:Date.now(),...d,progress:Math.min(100,Math.max(0,parseInt(d.progress)||0))}];s({...i,tasks:_}),u({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:b()})},uA=_=>{const pA=r.filter(HA=>HA.id!==_).map(HA=>({...HA,dependencies:HA.dependencies.filter(sA=>sA!==_)}));s({...i,tasks:pA})},kA=(_,iA)=>{const pA=r.map(HA=>HA.id===_?{...HA,...iA}:HA);s({...i,tasks:pA})},CA=_=>{m({..._})},gA=()=>{h&&(kA(h.id,h),m(null))},TA=()=>{m(null)},cA=()=>{const _={...i,tasks:r},iA=JSON.stringify(_,null,2),pA=new Blob([iA],{type:"application/json"}),HA=URL.createObjectURL(pA),sA=document.createElement("a");sA.href=HA,sA.download=`${i.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(sA),sA.click(),document.body.removeChild(sA),URL.revokeObjectURL(HA)},BA=_=>{const iA=_.target.files[0];if(!iA)return;const pA=new FileReader;pA.onload=HA=>{try{const sA=JSON.parse(HA.target.result);sA.name&&Array.isArray(sA.tasks)?s(sA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},pA.readAsText(iA)},J=()=>{x.current&&m0(x.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:x.current.scrollWidth,windowHeight:x.current.scrollHeight,scale:2}).then(_=>{const iA=document.createElement("a");iA.download=`${i.name.replace(/\s+/g,"_")}_gantt.png`,iA.href=_.toDataURL("image/png"),iA.click()})},SA=_=>r.find(iA=>iA.id===_);return n.jsxs("div",{className:"gantt-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:o,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-actions",children:[n.jsxs("button",{onClick:cA,className:"export-btn",title:"Export as JSON",children:[n.jsx(In,{size:16})," JSON"]}),n.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[n.jsx(dn,{size:16})," JSON",n.jsx("input",{type:"file",accept:".json",onChange:BA,style:{display:"none"}})]}),n.jsxs("button",{onClick:J,className:"export-btn",title:"Export as Image",children:[n.jsx(cn,{size:16})," Image"]})]})]}),n.jsxs("div",{className:"gantt-container",children:[n.jsxs("div",{className:"gantt-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:["Tasks (",r.length,")"]}),n.jsx("div",{className:"task-list",children:r.map(_=>n.jsxs("div",{className:"task-item",children:[n.jsxs("div",{className:"task-info",children:[n.jsx("div",{className:"task-name",children:_.name}),n.jsxs("div",{className:"task-dates",children:[new Date(_.startDate).toLocaleDateString()," - ",new Date(_.endDate).toLocaleDateString()]}),n.jsxs("div",{className:"task-progress-text",children:[_.progress,"% complete"]}),_.dependencies.length>0&&n.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",_.dependencies.map(iA=>SA(iA)?.name).filter(Boolean).join(", ")]})]}),n.jsxs("div",{className:"task-actions",children:[n.jsx("button",{onClick:()=>CA(_),className:"edit-btn",title:"Edit task",children:n.jsx(Gb,{size:14})}),n.jsx("button",{onClick:()=>uA(_.id),className:"delete-btn",title:"Delete task",children:n.jsx(Be,{size:14})})]})]},_.id))}),n.jsxs("div",{className:"add-task-form",children:[n.jsx("h3",{children:"Add New Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:d.name,onChange:_=>u({...d,name:_.target.value}),placeholder:"Task description"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:d.startDate,onChange:_=>u({...d,startDate:_.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:d.endDate,onChange:_=>u({...d,endDate:_.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:_=>u({...d,progress:_.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsxs("div",{className:"color-picker",children:[n.jsx("input",{type:"color",value:d.color,onChange:_=>u({...d,color:_.target.value})}),n.jsx("button",{onClick:()=>u({...d,color:b()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),n.jsxs("button",{onClick:P,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Task"]})]})]}),n.jsxs("div",{className:"gantt-timeline",ref:x,children:[n.jsxs("div",{className:"timeline-header",children:[n.jsx("div",{className:"timeline-title",children:"Timeline"}),n.jsx("div",{className:"timeline-scale",children:F.map((_,iA)=>n.jsxs("div",{className:"scale-point",style:{left:`${_.position}%`},children:[n.jsx("div",{className:"scale-line"}),n.jsx("div",{className:"scale-label",children:_.label})]},iA))})]}),n.jsxs("div",{className:"timeline-content",children:[r.map((_,iA)=>{const pA=M(_.startDate),HA=aA(_.startDate,_.endDate),sA=`${_.color}33`;return n.jsx("div",{className:"timeline-row",children:n.jsxs("div",{className:"timeline-task",children:[n.jsxs("div",{className:"task-bar",style:{left:`${pA}%`,width:`${HA}%`,background:`linear-gradient(to right, ${_.color} ${_.progress}%, ${sA} ${_.progress}%)`,borderColor:_.color},title:`${_.name}: ${_.progress}% complete`,children:[n.jsxs("div",{className:"task-progress",children:[_.progress,"%"]}),n.jsx("div",{className:"task-label",children:_.name})]}),_.dependencies.map(OA=>{const _A=SA(OA);if(!_A)return null;const LA=r.findIndex(xA=>xA.id===OA),G=M(_A.endDate),oA=aA(_A.startDate,_A.endDate);return n.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${G+oA}%`,top:`${(LA-iA)*44-12}px`,width:`${Math.abs(pA-(G+oA))}%`,height:`${Math.abs((iA-LA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${_.id}-${OA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("path",{d:`M 0 ${LA<iA?0:Math.abs((iA-LA)*44)} 
                                L ${Math.abs(pA-(G+oA))*.5} ${LA<iA?0:Math.abs((iA-LA)*44)} 
                                L ${Math.abs(pA-(G+oA))*.5} ${LA<iA?Math.abs((iA-LA)*44):0} 
                                L ${Math.abs(pA-(G+oA))} ${LA<iA?Math.abs((iA-LA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${_.id}-${OA})`})]},`dep-${OA}`)})]})},_.id)}),n.jsx("div",{className:"today-line",style:{left:`${M(new Date().toISOString().split("T")[0])}%`},children:n.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),h&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:"Edit Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:h.name,onChange:_=>m({...h,name:_.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:h.startDate,onChange:_=>m({...h,startDate:_.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:h.endDate,onChange:_=>m({...h,endDate:_.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:h.progress,onChange:_=>m({...h,progress:_.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsx("input",{type:"color",value:h.color,onChange:_=>m({...h,color:_.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Dependencies"}),n.jsx("div",{className:"dependency-list",children:r.filter(_=>_.id!==h.id).map(_=>n.jsxs("label",{className:"dependency-item",children:[n.jsx("input",{type:"checkbox",checked:h.dependencies.includes(_.id),onChange:iA=>{iA.target.checked?m({...h,dependencies:[...h.dependencies,_.id]}):m({...h,dependencies:h.dependencies.filter(pA=>pA!==_.id)})}}),_.name]},_.id))})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:TA,className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:gA,className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .gantt-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-actions {
          display: flex;
          gap: 8px;
        }
        
        .export-btn, .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .import-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          position: relative;
        }
        
        .import-btn:hover {
          background: #e2e8f0;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .gantt-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .gantt-sidebar {
          width: 350px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-header {
          padding: 16px;
          font-weight: 600;
          color: #1e293b;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .task-list {
          flex: 1;
          overflow: auto;
          padding: 8px 0;
        }
        
        .task-item {
          display: flex;
          align-items: flex-start;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
          gap: 12px;
        }
        
        .task-item:hover {
          background: #f8fafc;
        }
        
        .task-info {
          flex: 1;
        }
        
        .task-name {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .task-dates {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 2px;
        }
        
        .task-progress-text {
          font-size: 12px;
          color: #3b82f6;
          font-weight: 500;
          margin-bottom: 2px;
        }
        
        .task-dependencies {
          font-size: 11px;
          color: #64748b;
          font-style: italic;
        }
        
        .task-actions {
          display: flex;
          gap: 4px;
        }
        
        .edit-btn, .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .edit-btn {
          background: #dbeafe;
          color: #3b82f6;
        }
        
        .edit-btn:hover {
          background: #bfdbfe;
        }
        
        .delete-btn {
          background: #fee2e2;
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .add-task-form {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }
        
        .add-task-form h3 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .color-picker {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .color-picker input[type="color"] {
          width: 40px;
          height: 40px;
          padding: 2px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .random-color-btn {
          padding: 8px 12px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        
        .random-color-btn:hover {
          background: #e2e8f0;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .add-btn:hover {
          background: #2563eb;
        }
        
        .gantt-timeline {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .timeline-header {
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }
        
        .timeline-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }
        
        .timeline-scale {
          position: relative;
          height: 40px;
        }
        
        .scale-point {
          position: absolute;
          transform: translateX(-50%);
        }
        
        .scale-line {
          width: 1px;
          height: 16px;
          background: #d1d5db;
          margin: 0 auto 4px;
        }
        
        .scale-label {
          font-size: 11px;
          color: #64748b;
          text-align: center;
          white-space: nowrap;
        }
        
        .timeline-content {
          flex: 1;
          padding: 16px;
          position: relative;
          min-height: 400px;
          background: repeating-linear-gradient(
            to right,
            #f8fafc,
            #f8fafc 1px,
            white 1px,
            white 50px
          );
        }
        
        .timeline-row {
          height: 44px;
          margin-bottom: 4px;
          position: relative;
        }
        
        .timeline-task {
          height: 36px;
          position: relative;
        }
        
        .task-bar {
          position: absolute;
          height: 28px;
          top: 4px;
          border-radius: 4px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.2s;
          overflow: hidden;
        }
        
        .task-bar:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .task-progress {
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: #1e40af;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          padding: 1px 3px;
          border-radius: 2px;
        }
        
        .task-label {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: #1e40af;
          font-weight: 500;
          max-width: calc(100% - 40px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dependency-arrow {
          pointer-events: none;
        }
        
        .today-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ef4444;
          z-index: 10;
        }
        
        .today-label {
          position: absolute;
          top: -8px;
          left: 4px;
          font-size: 10px;
          color: #ef4444;
          font-weight: 600;
          background: white;
          padding: 2px 4px;
          border-radius: 2px;
          white-space: nowrap;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal {
          background: white;
          border-radius: 8px;
          padding: 24px;
          width: 500px;
          max-width: 90vw;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #1e293b;
        }
        
        .dependency-list {
          max-height: 120px;
          overflow: auto;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 8px;
        }
        
        .dependency-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 0;
          font-size: 14px;
          cursor: pointer;
        }
        
        .dependency-item input {
          width: auto;
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
        }
        
        .cancel-btn {
          padding: 8px 16px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .save-btn {
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .save-btn:hover {
          background: #2563eb;
        }
      `})]})},q2=({useCaseDiagrams:i,onCreateUseCaseDiagram:r,onLoadUseCaseDiagram:s,onDeleteUseCaseDiagram:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"use-case-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(lu,{size:48})}),n.jsx("h2",{children:"Use Case Diagram Designer"}),n.jsx("p",{children:"Model system functionality with actors and use cases"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Use Case Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.actors?.length||0," actors • ",h.useCases?.length||0," use cases"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Use Case Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .use-case-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #10b981;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #10b981;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #059669;
        }
      `})]})},W2="modulepreload",$2=function(i){return"/Rootrie/"+i},ix={},Ir=function(r,s,o){let d=Promise.resolve();if(s&&s.length>0){let b=function(v){return Promise.all(v.map(F=>Promise.resolve(F).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};var h=b;document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),x=m?.nonce||m?.getAttribute("nonce");d=b(s.map(v=>{if(v=$2(v),v in ix)return;ix[v]=!0;const F=v.endsWith(".css"),M=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${M}`))return;const aA=document.createElement("link");if(aA.rel=F?"stylesheet":W2,F||(aA.as="script"),aA.crossOrigin="",aA.href=v,x&&aA.setAttribute("nonce",x),document.head.appendChild(aA),F)return new Promise((P,uA)=>{aA.addEventListener("load",P),aA.addEventListener("error",()=>uA(new Error(`Unable to preload CSS for ${v}`)))})}))}function u(m){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=m,window.dispatchEvent(x),!x.defaultPrevented)throw m}return d.then(m=>{for(const x of m||[])x.status==="rejected"&&u(x.reason);return r().catch(u)})},P2=({useCaseDiagram:i,actors:r=[],useCases:s=[],relationships:o=[],onUpdateUseCaseDiagram:d,onBack:u})=>{const[h,m]=S.useState(""),[x,b]=S.useState(""),[v,F]=S.useState(null),[M,aA]=S.useState(null),[P,uA]=S.useState("association"),[kA,CA]=S.useState("editor"),[gA,TA]=S.useState(""),[cA,BA]=S.useState(null),[J,SA]=S.useState({x:0,y:0}),[_,iA]=S.useState(!1),[pA,HA]=S.useState(!1),[sA,OA]=S.useState(1),[_A,LA]=S.useState({x:0,y:0}),[G,oA]=S.useState(!1),[xA,RA]=S.useState({x:0,y:0}),U=S.useRef(null),V=S.useRef(null),hA=20,rA=60,UA=80,MA=150,T=40;S.useEffect(()=>{TA(JSON.stringify({actors:r,useCases:s,relationships:o},null,2))},[r,s,o]);const QA=D=>pA?Math.round(D/hA)*hA:D,FA=()=>{if(!h.trim())return;const D=[...r,{id:Date.now(),name:h,x:QA(100+Math.random()*200),y:QA(100+Math.random()*200)}];d({...i,actors:D}),m("")},fA=()=>{if(!x.trim())return;const D=[...s,{id:Date.now(),name:x,x:QA(300+Math.random()*300),y:QA(150+Math.random()*200)}];d({...i,useCases:D}),b("")},I=D=>{const vA=r.filter(zA=>zA.id!==D),NA=o.filter(zA=>!(zA.source===D||zA.target===D));d({...i,actors:vA,relationships:NA})},q=D=>{const vA=s.filter(zA=>zA.id!==D),NA=o.filter(zA=>!(zA.source===D||zA.target===D));d({...i,useCases:vA,relationships:NA})},IA=()=>{if(!v||!M)return;const D=r.some(XA=>XA.id===v),vA=r.some(XA=>XA.id===M),NA=s.some(XA=>XA.id===v),zA=s.some(XA=>XA.id===M);if(P==="include"||P==="extend"){if(!NA||!zA){alert("Include and extend relationships must be between use cases");return}}else if(P==="generalization"){if(D&&!vA||NA&&!zA){alert("Generalization must be between two actors or two use cases");return}}else if(P==="association"&&!(D&&zA)&&!(NA&&vA)){alert("Association must be between an actor and a use case");return}const oe={id:Date.now(),source:v,target:M,type:P};d({...i,relationships:[...o,oe]}),F(null),aA(null)},K=D=>{const vA=o.filter(NA=>NA.id!==D);d({...i,relationships:vA})},wA=(D,vA)=>vA?{x:D.x+rA/2,y:D.y+UA/2}:{x:D.x+MA/2,y:D.y+T/2},YA=(D,vA,NA)=>{const zA=wA(D,vA);if(vA)return{x:zA.x+25*Math.cos(NA),y:zA.y+25*Math.sin(NA)};{const oe=MA/2,XA=T/2,fe=Math.cos(NA),re=Math.sin(NA),ye=oe*XA/Math.sqrt(XA*XA*fe*fe+oe*oe*re*re);return{x:zA.x+ye*fe,y:zA.y+ye*re}}},$A=(D,vA,NA,zA)=>{const oe=V.current;if(!oe)return{x:D,y:vA};const XA=oe.getBoundingClientRect(),fe=Math.max(0,-_A.x),re=Math.max(0,-_A.y),ye=Math.min(XA.width/sA-NA,XA.width/sA-_A.x-NA),pt=Math.min(XA.height/sA-zA,XA.height/sA-_A.y-zA);return{x:Math.max(fe,Math.min(ye,D)),y:Math.max(re,Math.min(pt,vA))}},PA=(D,vA,NA)=>{D.preventDefault(),D.stopPropagation();const zA=U.current.getBoundingClientRect(),oe=(D.clientX-zA.left-_A.x)/sA,XA=(D.clientY-zA.top-_A.y)/sA;BA({...vA,type:NA}),SA({x:oe-vA.x,y:XA-vA.y})},ie=D=>{if(!(!cA&&!G)){if(G){const vA=D.clientX-xA.x,NA=D.clientY-xA.y;LA(zA=>({x:zA.x+vA,y:zA.y+NA})),RA({x:D.clientX,y:D.clientY});return}if(cA){const vA=U.current.getBoundingClientRect();let NA=(D.clientX-vA.left-_A.x)/sA-J.x,zA=(D.clientY-vA.top-_A.y)/sA-J.y;NA=QA(NA),zA=QA(zA);const oe=cA.type==="actor"?rA:MA,XA=cA.type==="actor"?UA:T,fe=$A(NA,zA,oe,XA);if(cA.type==="actor"){const re=r.map(ye=>ye.id===cA.id?{...ye,x:fe.x,y:fe.y}:ye);d({...i,actors:re})}else if(cA.type==="useCase"){const re=s.map(ye=>ye.id===cA.id?{...ye,x:fe.x,y:fe.y}:ye);d({...i,useCases:re})}}}},de=()=>{BA(null),oA(!1)},Oe=D=>{D.target===U.current&&(oA(!0),RA({x:D.clientX,y:D.clientY}))},ee=()=>{OA(D=>Math.min(D*1.2,3))},Ue=()=>{OA(D=>Math.max(D/1.2,.3))},Ve=()=>{OA(1),LA({x:0,y:0})},Ke=()=>{const D=r.map((NA,zA)=>({...NA,x:50,y:100+zA*120})),vA=s.map((NA,zA)=>({...NA,x:400,y:100+zA*80}));d({...i,actors:D,useCases:vA})};S.useEffect(()=>{const D=NA=>ie(NA),vA=()=>de();if(cA||G)return document.addEventListener("mousemove",D),document.addEventListener("mouseup",vA),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",vA)}},[cA,G,J,_A,sA,r,s,d,i,xA,pA]);const Je=()=>JSON.stringify({actors:r,useCases:s,relationships:o},null,2),me=()=>{navigator.clipboard.writeText(Je())},ue=()=>{try{const D=JSON.parse(gA);Array.isArray(D.actors)&&Array.isArray(D.useCases)&&Array.isArray(D.relationships)?d({...i,actors:D.actors,useCases:D.useCases,relationships:D.relationships}):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(D){alert("Error parsing JSON: "+D.message)}},y=D=>{const vA=D.target.files[0];if(!vA)return;const NA=new FileReader;NA.onload=zA=>{TA(zA.target.result)},NA.readAsText(vA)},L=()=>{if(!U.current)return;const D=U.current.style.transform;U.current.style.transform="scale(1) translate(0px, 0px)",Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(vA=>{vA.default(U.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(NA=>{const zA=document.createElement("a");zA.download=`${i.name||"use-case-diagram"}.png`,zA.href=NA.toDataURL("image/png"),zA.click(),U.current.style.transform=D})})},$=()=>{if(!_)return null;const D=V.current;if(!D)return null;const vA=D.getBoundingClientRect(),NA=vA.width/sA,zA=vA.height/sA,oe=Math.floor(-_A.x/sA/hA)*hA,XA=Math.floor(-_A.y/sA/hA)*hA,fe=[];for(let re=oe;re<NA-_A.x/sA;re+=hA)fe.push(n.jsx("line",{x1:re,y1:0,x2:re,y2:zA,stroke:"#e2e8f0",strokeWidth:"1"},`v-${re}`));for(let re=XA;re<zA-_A.y/sA;re+=hA)fe.push(n.jsx("line",{x1:0,y1:re,x2:NA,y2:re,stroke:"#e2e8f0",strokeWidth:"1"},`h-${re}`));return n.jsx("svg",{className:"grid-overlay",children:fe})},lA=D=>n.jsxs("div",{className:"actor",style:{left:`${D.x}px`,top:`${D.y}px`,width:`${rA}px`,height:`${UA}px`,cursor:cA?.id===D.id?"grabbing":"grab"},onMouseDown:vA=>PA(vA,D,"actor"),children:[n.jsx("div",{className:"actor-icon",children:n.jsx(lu,{size:20})}),n.jsx("div",{className:"actor-name",children:D.name})]},D.id),dA=D=>n.jsx("div",{className:"use-case",style:{left:`${D.x}px`,top:`${D.y}px`,width:`${MA}px`,height:`${T}px`,cursor:cA?.id===D.id?"grabbing":"grab"},onMouseDown:vA=>PA(vA,D,"useCase"),children:n.jsx("div",{className:"use-case-name",children:D.name})},D.id),EA=D=>{let vA,NA,zA=!1,oe=!1;if(vA=r.find(H=>H.id===D.source),vA?zA=!0:vA=s.find(H=>H.id===D.source),NA=r.find(H=>H.id===D.target),NA?oe=!0:NA=s.find(H=>H.id===D.target),!vA||!NA)return null;const XA=wA(vA,zA),fe=wA(NA,oe),re=fe.x-XA.x,ye=fe.y-XA.y,pt=Math.atan2(ye,re),De=YA(vA,zA,pt),Ce=YA(NA,oe,pt+Math.PI);let g={},j={};D.type==="include"?(g={strokeDasharray:"5,5",stroke:"#3b82f6"},j={fill:"#3b82f6"}):D.type==="extend"?(g={strokeDasharray:"8,3",stroke:"#10b981"},j={fill:"#10b981"}):D.type==="generalization"?(g={stroke:"#8b5cf6"},j={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(g={stroke:"#64748b"},j={fill:"#64748b"});const f=8,B=Math.atan2(Ce.y-De.y,Ce.x-De.x),C={x:Ce.x-f*Math.cos(B-Math.PI/6),y:Ce.y-f*Math.sin(B-Math.PI/6)},E={x:Ce.x-f*Math.cos(B+Math.PI/6),y:Ce.y-f*Math.sin(B+Math.PI/6)};return D.type==="generalization"?n.jsxs("svg",{className:"relationship",children:[n.jsx("line",{x1:De.x,y1:De.y,x2:Ce.x,y2:Ce.y,strokeWidth:"2",...g}),n.jsx("polygon",{points:`
              ${Ce.x},${Ce.y}
              ${C.x},${C.y}
              ${E.x},${E.y}
            `,...j}),n.jsx("text",{x:(De.x+Ce.x)/2,y:(De.y+Ce.y)/2-8,textAnchor:"middle",fontSize:"11",fill:g.stroke||"#64748b",className:"relationship-label",children:`<<${D.type}>>`})]},D.id):D.type==="association"?n.jsx("svg",{className:"relationship",children:n.jsx("line",{x1:De.x,y1:De.y,x2:Ce.x,y2:Ce.y,strokeWidth:"2",...g})},D.id):n.jsxs("svg",{className:"relationship",children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${D.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...j})})}),n.jsx("line",{x1:De.x,y1:De.y,x2:Ce.x,y2:Ce.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${D.id})`,...g}),D.type!=="association"&&n.jsx("text",{x:(De.x+Ce.x)/2,y:(De.y+Ce.y)/2-8,textAnchor:"middle",fontSize:"11",fill:g.stroke||"#64748b",className:"relationship-label",children:`<<${D.type}>>`})]},D.id)};return n.jsxs("div",{className:"use-case-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsx("button",{onClick:()=>iA(!_),className:`tool-btn ${_?"active":""}`,children:n.jsx(Bb,{size:16})}),n.jsx("button",{onClick:()=>HA(!pA),className:`tool-btn ${pA?"active":""}`,children:n.jsx(ux,{size:16})}),n.jsx("button",{onClick:Ue,className:"tool-btn",children:n.jsx(Mr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(sA*100),"%"]}),n.jsx("button",{onClick:ee,className:"tool-btn",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:Ve,className:"tool-btn",children:n.jsx(hx,{size:16})}),n.jsx("button",{onClick:Ke,className:"tool-btn",children:"Auto"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:L,className:"export-btn",children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:me,className:"export-btn",children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const D=new Blob([Je()],{type:"application/json"}),vA=URL.createObjectURL(D),NA=document.createElement("a");NA.href=vA,NA.download=`${i.name||"use-case-diagram"}.json`,document.body.appendChild(NA),NA.click(),document.body.removeChild(NA),URL.revokeObjectURL(vA)},className:"export-btn",children:[n.jsx(In,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${kA==="editor"?"active":""}`,onClick:()=>CA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${kA==="json"?"active":""}`,onClick:()=>CA("json"),children:"JSON Editor"})]}),kA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Actors"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:h,onChange:D=>m(D.target.value),placeholder:"New actor name",onKeyPress:D=>D.key==="Enter"&&FA()}),n.jsxs("button",{onClick:FA,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Actor"]})]}),n.jsx("div",{className:"actor-list",children:r.map(D=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:D.name}),n.jsx("button",{onClick:()=>I(D.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},D.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Use Cases"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:x,onChange:D=>b(D.target.value),placeholder:"New use case name",onKeyPress:D=>D.key==="Enter"&&fA()}),n.jsxs("button",{onClick:fA,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Use Case"]})]}),n.jsx("div",{className:"use-case-list",children:s.map(D=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:D.name}),n.jsx("button",{onClick:()=>q(D.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},D.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Source"}),n.jsxs("select",{value:v||"",onChange:D=>F(D.target.value?parseInt(D.target.value):null),children:[n.jsx("option",{value:"",children:"Select source"}),n.jsx("optgroup",{label:"Actors",children:r.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target"}),n.jsxs("select",{value:M||"",onChange:D=>aA(D.target.value?parseInt(D.target.value):null),children:[n.jsx("option",{value:"",children:"Select target"}),n.jsx("optgroup",{label:"Actors",children:r.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:P,onChange:D=>uA(D.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"include",children:"Include"}),n.jsx("option",{value:"extend",children:"Extend"}),n.jsx("option",{value:"generalization",children:"Generalization"})]})]}),n.jsxs("button",{onClick:IA,disabled:!v||!M,className:"add-btn",children:[n.jsx(eo,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:o.map(D=>{let vA,NA,zA="",oe="";return vA=r.find(XA=>XA.id===D.source),vA?zA=vA.name:(vA=s.find(XA=>XA.id===D.source),vA&&(zA=vA.name)),NA=r.find(XA=>XA.id===D.target),NA?oe=NA.name:(NA=s.find(XA=>XA.id===D.target),NA&&(oe=NA.name)),!vA||!NA?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[zA," → ",oe," (",D.type,")"]}),n.jsx("button",{onClick:()=>K(D.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},D.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-container",ref:V,onMouseDown:Oe,children:n.jsxs("div",{className:"diagram-canvas",ref:U,style:{transform:`scale(${sA}) translate(${_A.x/sA}px, ${_A.y/sA}px)`,transformOrigin:"0 0"},children:[$(),o.map(EA),r.map(lA),s.map(dA)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const D=document.createElement("input");D.type="file",D.accept=".json",D.onchange=y,D.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:gA,onChange:D=>TA(D.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:ue,className:"import-btn",children:[n.jsx(ga,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
        .use-case-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
        }
        
        .tool-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          background: #e2e8f0;
          color: #475569;
        }
        
        .tool-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: background 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
          color: #6b7280;
        }
        
        .actor-list,
        .use-case-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 8px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
          cursor: grab;
        }
        
        .diagram-canvas-container:active {
          cursor: grabbing;
        }
        
        .diagram-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          background: #f8fafc;
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .actor {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
          user-select: none;
          color: #1e293b;
        }
        
        .actor-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }
        
        .actor:hover .actor-icon {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .actor-name {
          margin-top: 8px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          max-width: 80px;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .use-case {
          position: absolute;
          background: white;
          border: 2px solid #64748b;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          z-index: 10;
          user-select: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
          text-align: center;
          line-height: 1.2;
          color: #1e293b;
        }
        
        .use-case:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .use-case-name {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .relationship {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        
        .relationship-label {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          transition: background 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Scrollbar styles */
        .actor-list::-webkit-scrollbar,
        .use-case-list::-webkit-scrollbar,
        .relationship-list::-webkit-scrollbar,
        .diagram-sidebar::-webkit-scrollbar,
        .json-textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        .actor-list::-webkit-scrollbar-track,
        .use-case-list::-webkit-scrollbar-track,
        .relationship-list::-webkit-scrollbar-track,
        .diagram-sidebar::-webkit-scrollbar-track,
        .json-textarea::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb,
        .use-case-list::-webkit-scrollbar-thumb,
        .relationship-list::-webkit-scrollbar-thumb,
        .diagram-sidebar::-webkit-scrollbar-thumb,
        .json-textarea::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb:hover,
        .use-case-list::-webkit-scrollbar-thumb:hover,
        .relationship-list::-webkit-scrollbar-thumb:hover,
        .diagram-sidebar::-webkit-scrollbar-thumb:hover,
        .json-textarea::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `})]})},AQ=({sequenceDiagrams:i,onCreateSequenceDiagram:r,onLoadSequenceDiagram:s,onDeleteSequenceDiagram:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"sequence-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(Hb,{size:48})}),n.jsx("h2",{children:"Sequence Diagram Designer"}),n.jsx("p",{children:"Model interactions between objects in sequential order"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Sequence Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.participants?.length||0," participants • ",h.messages?.length||0," messages"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Sequence Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .sequence-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3b82f6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563eb;
        }
      `})]})},eQ=({sequenceDiagram:i,participants:r=[],messages:s=[],onUpdateSequenceDiagram:o,onBack:d})=>{const[u,h]=S.useState(""),[m,x]=S.useState(""),[b,v]=S.useState(""),[F,M]=S.useState(""),[aA,P]=S.useState("sync"),[uA,kA]=S.useState("actor"),[CA,gA]=S.useState("editor"),[TA,cA]=S.useState(""),[BA,J]=S.useState(1),[SA,_]=S.useState(150),iA=S.useRef(null);S.useEffect(()=>{cA(JSON.stringify({participants:r,messages:s},null,2))},[r,s]);const pA=()=>{if(!u.trim())return;const T=[...r,{id:Date.now(),name:u,type:uA}];o({...i,participants:T}),h("")},HA=()=>{if(!m.trim()||!b||!F)return;const T=r.find(fA=>fA.id===parseInt(b)),QA=r.find(fA=>fA.id===parseInt(F));if(!T||!QA)return;const FA=[...s,{id:Date.now(),text:m,from:T.id,to:QA.id,type:aA,order:s.length+1,activationStart:aA==="sync"||aA==="create",activationEnd:!1}];o({...i,messages:FA}),x(""),v(""),M("")},sA=T=>{const QA=r.filter(I=>I.id!==T),fA=s.filter(I=>!(I.from===T||I.to===T)).map((I,q)=>({...I,order:q+1}));o({...i,participants:QA,messages:fA})},OA=T=>{const FA=s.filter(fA=>fA.id!==T).map((fA,I)=>({...fA,order:I+1}));o({...i,messages:FA})},_A=T=>{const QA=s.findIndex(fA=>fA.id===T);if(QA<=0)return;const FA=[...s];[FA[QA-1],FA[QA]]=[FA[QA],FA[QA-1]],FA.forEach((fA,I)=>{fA.order=I+1}),o({...i,messages:FA})},LA=T=>{const QA=s.findIndex(fA=>fA.id===T);if(QA>=s.length-1)return;const FA=[...s];[FA[QA],FA[QA+1]]=[FA[QA+1],FA[QA]],FA.forEach((fA,I)=>{fA.order=I+1}),o({...i,messages:FA})},G=()=>JSON.stringify({participants:r,messages:s},null,2),oA=()=>{navigator.clipboard.writeText(G())},xA=()=>{try{const T=JSON.parse(TA);Array.isArray(T.participants)&&Array.isArray(T.messages)?o({...i,participants:T.participants,messages:T.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(T){alert("Error parsing JSON: "+T.message)}},RA=T=>{const QA=T.target.files[0];if(!QA)return;const FA=new FileReader;FA.onload=fA=>{cA(fA.target.result)},FA.readAsText(QA)},U=()=>{if(!iA.current)return;const T=iA.current.style.transform;iA.current.style.transform="scale(1) translate(0px, 0px)";const QA=document.createElement("canvas"),FA=iA.current.getBoundingClientRect();QA.width=FA.width*2,QA.height=FA.height*2,Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(fA=>{fA.default(iA.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(I=>{const q=document.createElement("a");q.download=`${i.name||"sequence-diagram"}.png`,q.href=I.toDataURL("image/png"),q.click(),iA.current.style.transform=T}).catch(I=>{console.error("Error generating image:",I),iA.current.style.transform=T})})},V=T=>60+T*SA,hA=(T,QA)=>{const FA=V(QA);return n.jsx("div",{className:"participant-header",style:{left:`${FA-60}px`,top:"40px",width:"120px",height:"60px"},children:T.type==="actor"?n.jsxs("div",{className:"participant-actor",children:[n.jsx("div",{className:"actor-circle",children:n.jsx(fw,{size:16})}),n.jsx("div",{className:"actor-name",children:T.name})]}):n.jsx("div",{className:`participant-box ${T.type||"service"}`,children:n.jsx("span",{className:"participant-name",children:T.name})})},`header-${T.id}`)},rA=(T,QA)=>{const FA=V(QA),fA=110,I=Math.max(220+s.length*50,420);return n.jsx("div",{className:"lifeline",style:{left:`${FA-1}px`,top:`${fA}px`,width:"2px",height:`${I-fA}px`}},`lifeline-${T.id}`)},UA=(T,QA)=>{const FA=V(QA),fA=[],I=[];if(s.sort((q,IA)=>q.order-IA.order).forEach((q,IA)=>{const K=150+IA*50;if((q.to===T&&(q.type==="sync"||q.type==="create")||q.from===T&&q.type==="self")&&I.push({start:K,messageId:q.id}),q.from===T&&q.type==="return"){const wA=I.pop();wA&&fA.push({...wA,end:K+20,height:K+20-wA.start})}}),I.length>0){const q=150+s.length*50;I.forEach(IA=>{fA.push({...IA,end:q,height:q-IA.start})})}return fA.map((q,IA)=>n.jsx("div",{className:"activation-box",style:{left:`${FA-8}px`,top:`${q.start}px`,width:"16px",height:`${q.height-23}px`}},`activation-${T}-${IA}`))},MA=(T,QA)=>{const FA=r.findIndex(de=>de.id===T.from),fA=r.findIndex(de=>de.id===T.to);if(FA===-1||fA===-1)return null;const I=150+QA*50,q=V(FA),IA=V(fA),K=T.from===T.to,YA=(de=>{switch(de){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}})(T.type);if(K){const de=Math.max(40,SA*.3);return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("path",{d:`M ${q} ${I} L ${q+de} ${I} L ${q+de} ${I+20} L ${q} ${I+20}`,fill:"none",stroke:YA.stroke,strokeWidth:"2",strokeDasharray:YA.strokeDasharray}),n.jsx("polygon",{points:`${q-8},${I+10} ${q},${I+20} ${q-8},${I+30}`,fill:YA.stroke}),n.jsx("text",{x:q+de+10,y:I+15,fontSize:"12",fill:YA.stroke,className:"message-text",children:T.text})]})},T.id)}const $A=q<IA?1:-1,PA=$A>0?IA-8:IA+8,ie=(q+IA)/2;return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("line",{x1:q,y1:I,x2:IA,y2:I,stroke:YA.stroke,strokeWidth:"2",strokeDasharray:YA.strokeDasharray}),YA.arrowType==="filled"?n.jsx("polygon",{points:$A>0?`${PA},${I-6} ${IA},${I} ${PA},${I+6}`:`${PA},${I-6} ${IA},${I} ${PA},${I+6}`,fill:YA.stroke}):n.jsx("path",{d:$A>0?`M ${PA},${I-6} L ${IA},${I} L ${PA},${I+6}`:`M ${PA},${I-6} L ${IA},${I} L ${PA},${I+6}`,fill:"none",stroke:YA.stroke,strokeWidth:"2"}),n.jsx("text",{x:ie,y:I-8,textAnchor:"middle",fontSize:"12",fill:YA.stroke,className:"message-text",children:T.text}),n.jsx("text",{x:q+($A>0?-15:15),y:I-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:T.order})]})},T.id)};return n.jsxs("div",{className:"sequence-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"spacing-controls",children:[n.jsx("label",{children:"Spacing:"}),n.jsx("button",{onClick:()=>_(Math.max(100,SA-25)),disabled:SA<=100,className:"spacing-btn",children:n.jsx(su,{size:14})}),n.jsxs("span",{className:"spacing-value",children:[SA,"px"]}),n.jsx("button",{onClick:()=>_(Math.min(300,SA+25)),disabled:SA>=300,className:"spacing-btn",children:n.jsx(Xe,{size:14})})]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>J(Math.max(.5,BA-.1)),disabled:BA<=.5,className:"zoom-btn",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(BA*100),"%"]}),n.jsx("button",{onClick:()=>J(Math.min(2,BA+.1)),disabled:BA>=2,className:"zoom-btn",children:"+"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:U,className:"export-btn",children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:oA,className:"export-btn",children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const T=new Blob([G()],{type:"application/json"}),QA=URL.createObjectURL(T),FA=document.createElement("a");FA.href=QA,FA.download=`${i.name||"sequence-diagram"}.json`,document.body.appendChild(FA),FA.click(),document.body.removeChild(FA),URL.revokeObjectURL(QA)},className:"export-btn",children:[n.jsx(In,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${CA==="editor"?"active":""}`,onClick:()=>gA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${CA==="json"?"active":""}`,onClick:()=>gA("json"),children:"JSON Editor"})]}),CA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Participants"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:u,onChange:T=>h(T.target.value),placeholder:"New participant name",onKeyPress:T=>T.key==="Enter"&&pA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("select",{value:uA,onChange:T=>kA(T.target.value),children:[n.jsx("option",{value:"actor",children:"Actor (User)"}),n.jsx("option",{value:"service",children:"Service"}),n.jsx("option",{value:"database",children:"Database"}),n.jsx("option",{value:"external",children:"External System"})]})]}),n.jsxs("button",{onClick:pA,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Participant"]}),n.jsx("div",{className:"participant-list",children:r.map(T=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:T.name}),n.jsx("div",{className:"item-type",children:T.type})]}),n.jsx("button",{onClick:()=>sA(T.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},T.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Messages"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:T=>x(T.target.value),placeholder:"Message text",onKeyPress:T=>T.key==="Enter"&&HA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From"}),n.jsxs("select",{value:b||"",onChange:T=>v(T.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(T=>n.jsx("option",{value:T.id,children:T.name},T.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To"}),n.jsxs("select",{value:F||"",onChange:T=>M(T.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(T=>n.jsx("option",{value:T.id,children:T.name},T.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message Type"}),n.jsxs("select",{value:aA,onChange:T=>P(T.target.value),children:[n.jsx("option",{value:"sync",children:"Synchronous Call"}),n.jsx("option",{value:"async",children:"Asynchronous Call"}),n.jsx("option",{value:"return",children:"Return Message"}),n.jsx("option",{value:"create",children:"Create Message"}),n.jsx("option",{value:"destroy",children:"Destroy Message"}),n.jsx("option",{value:"self",children:"Self Call"})]})]}),n.jsxs("button",{onClick:HA,disabled:!m.trim()||!b||!F,className:"add-btn",children:[n.jsx(eo,{size:16})," Add Message"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Message Sequence"}),n.jsx("div",{className:"message-list",children:s.sort((T,QA)=>T.order-QA.order).map(T=>{const QA=r.find(fA=>fA.id===T.from),FA=r.find(fA=>fA.id===T.to);return!QA||!FA?null:n.jsxs("div",{className:"message-item",children:[n.jsxs("div",{className:"message-info",children:[n.jsxs("div",{className:"message-order",children:[T.order,"."]}),n.jsxs("div",{className:"message-text",children:[QA.name," → ",FA.name,": ",T.text]}),n.jsx("div",{className:`message-type ${T.type}`,children:T.type})]}),n.jsxs("div",{className:"message-actions",children:[n.jsx("button",{onClick:()=>_A(T.id),disabled:T.order===1,className:"move-btn",children:"↑"}),n.jsx("button",{onClick:()=>LA(T.id),disabled:T.order===s.length,className:"move-btn",children:"↓"}),n.jsx("button",{onClick:()=>OA(T.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]})]},T.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-wrapper",children:n.jsxs("div",{className:"diagram-canvas",ref:iA,style:{transform:`scale(${BA})`,transformOrigin:"top left"},children:[r.map((T,QA)=>hA(T,QA)),r.map((T,QA)=>rA(T,QA)),r.map((T,QA)=>UA(T.id,QA)),s.sort((T,QA)=>T.order-QA.order).map((T,QA)=>MA(T,QA))]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const T=document.createElement("input");T.type="file",T.accept=".json",T.onchange=RA,T.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:TA,onChange:T=>cA(T.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:xA,className:"import-btn",children:[n.jsx(ga,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
        .sequence-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .spacer {
          flex: 1;
        }
        
        .spacing-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
          gap: 4px;
        }
        
        .spacing-controls label {
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          padding: 0 8px;
        }
        
        .spacing-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          color: #475569;
          transition: all 0.2s;
        }
        
        .spacing-btn:hover:not(:disabled) {
          background: #e2e8f0;
        }
        
        .spacing-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spacing-value {
          font-size: 11px;
          font-weight: 500;
          padding: 0 4px;
          color: #475569;
          min-width: 40px;
          text-align: center;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
        }
        
        .zoom-btn {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
        }
        
        .zoom-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .zoom-level {
          font-size: 12px;
          font-weight: 500;
          padding: 0 8px;
          color: #475569;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
          font-size: 14px;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          font-size: 14px;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
        }
        
        .participant-list,
        .message-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          text-transform: capitalize;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-wrapper {
          flex: 1;
          background: white;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          min-height: 600px;
          min-width: 800px;
          transform-origin: top left;
        }
        
        .participant-header {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .participant-actor {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .actor-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .actor-name {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
          text-align: center;
          max-width: 100px;
          word-wrap: break-word;
        }
        
        .participant-box {
          padding: 8px 16px;
          border: 2px solid #64748b;
          border-radius: 8px;
          background: white;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 120px;
        }
        
        .participant-box.service {
          border-color: #10b981;
          background: #ecfdf5;
        }
        
        .participant-box.database {
          border-color: #f59e0b;
          background: #fffbeb;
        }
        
        .participant-box.external {
          border-color: #8b5cf6;
          background: #f3e8ff;
        }
        
        .participant-name {
          font-weight: 600;
          font-size: 12px;
          color: #1e293b;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .lifeline {
          position: absolute;
          background: #94a3b8;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 8px,
            #94a3b8 8px,
            #94a3b8 12px
          );
        }
        
        .activation-box {
          position: absolute;
          background: #fbbf24;
          border: 1px solid #f59e0b;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .message-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-text {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .message-order {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 600;
        }
        
        .message-item {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .message-info {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .message-order {
          font-weight: bold;
          margin-right: 8px;
          font-size: 12px;
          color: #64748b;
        }
        
        .message-text {
          flex: 1;
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .message-type {
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 8px;
          font-weight: 500;
          text-transform: uppercase;
        }
        
        .message-type.sync {
          background: #e2e8f0;
          color: #475569;
        }
        
        .message-type.async {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .message-type.return {
          background: #d1fae5;
          color: #065f46;
        }
        
        .message-type.create {
          background: #fef3c7;
          color: #92400e;
        }
        
        .message-type.destroy {
          background: #fecaca;
          color: #991b1b;
        }
        
        .message-type.self {
          background: #e9d5ff;
          color: #6b21a8;
        }
        
        .message-actions {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
        }
        
        .move-btn {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e2e8f0;
          color: #475569;
          border: none;
          cursor: pointer;
          font-size: 10px;
          padding: 0;
        }
        
        .move-btn:hover {
          background: #cbd5e1;
        }
        
        .move-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `})]})},tQ=({architectureDiagrams:i,onCreateArchitectureDiagram:r,onLoadArchitectureDiagram:s,onDeleteArchitectureDiagram:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"architecture-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(dx,{size:48})}),n.jsx("h2",{children:"Architecture Diagram Designer"}),n.jsx("p",{children:"Model system components and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Architecture Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.components?.length||0," components • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Architecture Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .architecture-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #8b5cf6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #8b5cf6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #7c3aed;
        }
      `})]})},Li=[{id:"service",name:"Service",icon:n.jsx(ew,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:n.jsx(sb,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:n.jsx(ib,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:n.jsx(wb,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:n.jsx(Ob,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:n.jsx(nb,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:n.jsx($b,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:n.jsx(lu,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:n.jsx(rw,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:n.jsx(xb,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:n.jsx(nw,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:n.jsx(lx,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:n.jsx(VB,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:n.jsx(dx,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:n.jsx(xw,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:n.jsx(Xe,{size:20}),color:"#64748b"}],nQ=({architectureDiagram:i={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:r=[],connections:s=[],groups:o=[],onUpdateArchitectureDiagram:d=()=>{},onBack:u=()=>{}})=>{const[h,m]=S.useState(""),[x,b]=S.useState(""),[v,F]=S.useState(""),[M,aA]=S.useState(""),[P,uA]=S.useState("solid"),[kA,CA]=S.useState("directed"),[gA,TA]=S.useState("editor"),[cA,BA]=S.useState(""),[J,SA]=S.useState(null),[_,iA]=S.useState({x:0,y:0}),[pA,HA]=S.useState({}),[sA,OA]=S.useState("service"),[_A,LA]=S.useState(!1),[G,oA]=S.useState(""),[xA,RA]=S.useState("file"),[U,V]=S.useState(null),[hA,rA]=S.useState(""),[UA,MA]=S.useState(""),[T,QA]=S.useState([]),[FA,fA]=S.useState([]),[I,q]=S.useState(1),[IA,K]=S.useState({width:2e3,height:2e3}),wA=S.useRef(null),YA=S.useRef(null),$A=r.length>0?r:i.components||[],PA=s.length>0?s:i.connections||[],ie=o.length>0?o:i.groups||[];S.useEffect(()=>{BA(JSON.stringify({components:$A,connections:PA,groups:ie},null,2))},[$A,PA,ie]),S.useEffect(()=>{if($A.length===0&&ie.length===0)return;let f=1/0,B=-1/0,C=1/0,E=-1/0;$A.forEach(tA=>{f=Math.min(f,tA.x),B=Math.max(B,tA.x+tA.width),C=Math.min(C,tA.y),E=Math.max(E,tA.y+tA.height)}),ie.forEach(tA=>{f=Math.min(f,tA.x),B=Math.max(B,tA.x+tA.width),C=Math.min(C,tA.y),E=Math.max(E,tA.y+tA.height)});const H=200,Y=Math.max(2e3,B-f+H*2),R=Math.max(2e3,E-C+H*2);K({width:Y,height:R})},[$A,ie]);const de=(f,B=new Set)=>{if(B.has(f))return 0;B.add(f);let C=0;return ie.forEach(E=>{E.groupIds&&E.groupIds.includes(f)&&(C=Math.max(C,de(E.id,B)+1))}),C},Oe=()=>{if(!h.trim())return;const f=Li.find(C=>C.id===sA)||Li[0],B=[...$A,{id:Date.now(),name:h,type:sA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:f.color,imageUrl:G}];d({...i,components:B,connections:PA,groups:ie}),m(""),oA(""),LA(!1)},ee=()=>{if(!UA.trim())return;if(T.length===0&&FA.length===0){alert("Please select at least one component or group to create a group.");return}let f=1/0,B=-1/0,C=1/0,E=-1/0;T.forEach(tA=>{f=Math.min(f,tA.x),B=Math.max(B,tA.x+tA.width),C=Math.min(C,tA.y),E=Math.max(E,tA.y+tA.height)}),FA.forEach(tA=>{f=Math.min(f,tA.x),B=Math.max(B,tA.x+tA.width),C=Math.min(C,tA.y),E=Math.max(E,tA.y+tA.height)}),f===1/0&&(f=100,B=300,C=100,E=200);const H=40,Y={id:Date.now(),name:UA,componentIds:T.map(tA=>tA.id),groupIds:FA.map(tA=>tA.id),x:f-H,y:C-H,width:Math.max(200,B-f+H*2),height:Math.max(150,E-C+H*2),color:"#e2e8f0"},R=[...ie,Y];d({...i,components:$A,connections:PA,groups:R}),MA(""),QA([]),fA([])},Ue=()=>{if(!v||!M)return;const f=$A.find(E=>E.id===parseInt(v)),B=$A.find(E=>E.id===parseInt(M));if(!f||!B)return;const C=[...PA,{id:Date.now(),from:f.id,to:B.id,type:P,direction:kA,label:x||"",color:"#64748b"}];d({...i,components:$A,connections:C,groups:ie}),b(""),F(""),aA("")},Ve=f=>{const B=$A.filter(H=>H.id!==f),C=PA.filter(H=>!(H.from===f||H.to===f)),E=ie.map(H=>({...H,componentIds:H.componentIds.filter(Y=>Y!==f)})).filter(H=>H.componentIds.length>0||H.groupIds&&H.groupIds.length>0);d({...i,components:B,connections:C,groups:E})},Ke=f=>{const B=PA.filter(C=>C.id!==f);d({...i,components:$A,connections:B,groups:ie})},Je=f=>{const B=ie.filter(C=>C.id!==f);d({...i,components:$A,connections:PA,groups:B})},me=(f,B,C=!1)=>{f.preventDefault(),f.stopPropagation();const E=wA.current.getBoundingClientRect(),H=(f.clientX-E.left)/I,Y=(f.clientY-E.top)/I;if(SA({...B,isGroup:C}),iA({x:H-B.x,y:Y-B.y}),C){const R={};B.componentIds&&B.componentIds.forEach(tA=>{const nA=$A.find(Q=>Q.id===tA);nA&&(R[`component_${tA}`]={x:nA.x,y:nA.y})}),B.groupIds&&B.groupIds.forEach(tA=>{const nA=ie.find(Q=>Q.id===tA);nA&&(R[`group_${tA}`]={x:nA.x,y:nA.y})}),HA(R)}},ue=(f,B)=>{f.stopPropagation(),f.shiftKey?QA(C=>C.some(H=>H.id===B.id)?C.filter(H=>H.id!==B.id):[...C,B]):(QA([B]),fA([]))},y=(f,B)=>{f.stopPropagation(),f.shiftKey?fA(C=>C.some(H=>H.id===B.id)?C.filter(H=>H.id!==B.id):[...C,B]):(fA([B]),QA([]))},L=S.useCallback(f=>{if(!J)return;const B=wA.current.getBoundingClientRect(),C=Math.max(0,(f.clientX-B.left)/I-_.x),E=Math.max(0,(f.clientY-B.top)/I-_.y);if(J.isGroup){const H=C-J.x,Y=E-J.y,R=$A.map(nA=>{if(J.componentIds&&J.componentIds.includes(nA.id)){const Q=pA[`component_${nA.id}`];if(Q)return{...nA,x:Math.max(0,Q.x+H),y:Math.max(0,Q.y+Y)}}return nA}),tA=ie.map(nA=>{if(nA.id===J.id)return{...nA,x:Math.max(0,C),y:Math.max(0,E)};if(J.groupIds&&J.groupIds.includes(nA.id)){const Q=pA[`group_${nA.id}`];if(Q)return{...nA,x:Math.max(0,Q.x+H),y:Math.max(0,Q.y+Y)}}return nA});d({...i,components:R,connections:PA,groups:tA})}else{const H=$A.map(Y=>Y.id===J.id?{...Y,x:Math.max(0,C),y:Math.max(0,E)}:Y);d({...i,components:H,connections:PA,groups:ie})}},[J,_,pA,$A,PA,ie,i,d,I]),$=S.useCallback(()=>{SA(null),HA({})},[]);S.useEffect(()=>{if(J)return document.addEventListener("mousemove",L),document.addEventListener("mouseup",$),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",$)}},[J,L,$]);const lA=f=>{V(f.id),rA(f.name)},dA=()=>{if(!U||!hA.trim())return;const f=$A.map(B=>B.id===U?{...B,name:hA}:B);d({...i,components:f,connections:PA,groups:ie}),V(null),rA("")},EA=f=>{f.target===wA.current&&(QA([]),fA([]))},D=()=>JSON.stringify({components:$A,connections:PA,groups:ie},null,2),vA=()=>{navigator.clipboard.writeText(D())},NA=()=>{try{const f=JSON.parse(cA);Array.isArray(f.components)&&Array.isArray(f.connections)?d({...i,components:f.components||[],connections:f.connections||[],groups:f.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(f){alert("Error parsing JSON: "+f.message)}},zA=f=>{const B=f.target.files[0];if(!B)return;const C=new FileReader;C.onload=E=>{BA(E.target.result)},C.readAsText(B)},oe=f=>{const B=f.target.files[0];if(!B)return;const C=new FileReader;C.onload=E=>{oA(E.target.result)},C.readAsDataURL(B)},XA=f=>{oA(f.target.value)},fe=()=>{q(f=>Math.min(2,f+.1))},re=()=>{q(f=>Math.max(.5,f-.1))},ye=()=>{q(1)},pt=()=>{if(!wA.current)return;const f=wA.current.style.transform,B=wA.current.style.width,C=wA.current.style.height;wA.current.style.width=`${IA.width}px`,wA.current.style.height=`${IA.height}px`,Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(E=>{E.default(wA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:IA.width,height:IA.height}).then(H=>{const Y=document.createElement("a");Y.download=`${i.name||"architecture-diagram"}.png`,Y.href=H.toDataURL("image/png"),Y.click(),wA.current.style.transform=f,wA.current.style.width=B,wA.current.style.height=C})})},De=(f,B)=>{const C=f.x+f.width/2,E=f.y+f.height/2,H=B.x+B.width/2,Y=B.y+B.height/2,R=H-C,tA=Y-E;let nA,Q;Math.abs(R)>Math.abs(tA)?(nA=R>0?f.x+f.width:f.x,Q=E):(nA=C,Q=tA>0?f.y+f.height:f.y);let k,X;return Math.abs(R)>Math.abs(tA)?(k=R>0?B.x:B.x+B.width,X=Y):(k=H,X=tA>0?B.y:B.y+B.height),{fromX:nA,fromY:Q,toX:k,toY:X}},Ce=f=>{const B=Li.find(H=>H.id===f.type)||Li[0],C=T.some(H=>H.id===f.id),E=U===f.id;return n.jsxs("div",{className:"component",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,cursor:J?.id===f.id?"grabbing":"grab",outline:C?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:H=>me(H,f),onClick:H=>ue(H,f),onDoubleClick:()=>lA(f),children:[n.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:f.imageUrl?n.jsx("img",{src:f.imageUrl,alt:f.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:f.color||B.color},children:jB.cloneElement(B.icon,{size:48})})}),n.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:f.color||B.color},children:E?n.jsx("input",{type:"text",value:hA,onChange:H=>rA(H.target.value),onBlur:dA,onKeyPress:H=>H.key==="Enter"&&dA(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:f.name}),n.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:B.name})]})})]},f.id)},g=f=>{if(!f.componentIds&&!f.groupIds)return null;const B=$A.filter(R=>f.componentIds&&f.componentIds.includes(R.id)),C=ie.filter(R=>f.groupIds&&f.groupIds.includes(R.id)),E=FA.some(R=>R.id===f.id),Y=10+de(f.id)*5;return n.jsxs("div",{className:"group",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:J?.id===f.id?"grabbing":"grab",outline:E?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:Y,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:R=>me(R,f,!0),onClick:R=>y(R,f),children:[n.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:Y+1},children:[n.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),n.jsx("button",{onClick:R=>{R.stopPropagation(),Je(f.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:Y+2},children:n.jsx(Be,{size:14})})]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[B.length," component",B.length!==1?"s":"",C.length>0&&`, ${C.length} group${C.length!==1?"s":""}`]})]},f.id)},j=f=>{const B=$A.find(jA=>jA.id===f.from),C=$A.find(jA=>jA.id===f.to);if(!B||!C)return null;const{fromX:E,fromY:H,toX:Y,toY:R}=De(B,C),tA=Y-E,nA=R-H,Q=Math.atan2(nA,tA),k=10;let X={};return f.type==="dashed"?X={strokeDasharray:"5,5",stroke:f.color||"#64748b"}:f.type==="dotted"?X={strokeDasharray:"2,2",stroke:f.color||"#64748b"}:X={stroke:f.color||"#64748b"},n.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[n.jsx("line",{x1:E,y1:H,x2:Y,y2:R,strokeWidth:"2",...X}),f.direction==="directed"&&n.jsx("polygon",{points:`
              ${Y-k*Math.cos(Q-Math.PI/6)},${R-k*Math.sin(Q-Math.PI/6)}
              ${Y},${R}
              ${Y-k*Math.cos(Q+Math.PI/6)},${R-k*Math.sin(Q+Math.PI/6)}
            `,fill:X.stroke||"#64748b"}),f.label&&n.jsx("text",{x:(E+Y)/2,y:(H+R)/2-10,textAnchor:"middle",fontSize:"12",fill:X.stroke||"#475569",children:f.label})]},f.id)};return n.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:i.name}),n.jsx("div",{style:{flex:1}}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[n.jsx("button",{onClick:re,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:n.jsx(Mr,{size:16})}),n.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(I*100),"%"]}),n.jsx("button",{onClick:fe,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:ye,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:n.jsx(Eb,{size:16})})]}),n.jsxs("button",{onClick:pt,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:vA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const f=new Blob([D()],{type:"application/json"}),B=URL.createObjectURL(f),C=document.createElement("a");C.href=B,C.download=`${i.name||"architecture-diagram"}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(B)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(In,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:gA==="editor"?"#8b5cf6":"#64748b",borderBottom:gA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>TA("editor"),children:"Diagram Editor"}),n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:gA==="json"?"#8b5cf6":"#64748b",borderBottom:gA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>TA("json"),children:"JSON Editor"})]}),gA==="editor"?n.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[n.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:h,onChange:f=>m(f.target.value),placeholder:"Component name",onKeyPress:f=>f.key==="Enter"&&Oe(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:Li.map(f=>n.jsx("button",{onClick:()=>OA(f.id),title:f.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:f.color,outline:sA===f.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:f.icon},f.id))})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsxs("button",{onClick:()=>LA(!_A),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[n.jsx(cn,{size:16})," ",G?"Change Image":"Add Image (Optional)"]}),_A&&n.jsxs("div",{style:{marginTop:"8px"},children:[n.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("button",{onClick:()=>RA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:xA==="file"?"#8b5cf6":"#64748b",borderBottom:xA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),n.jsx("button",{onClick:()=>RA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:xA==="url"?"#8b5cf6":"#64748b",borderBottom:xA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),xA==="file"?n.jsx("input",{type:"file",accept:"image/*",onChange:oe,style:{width:"100%",marginBottom:"8px"}}):n.jsx("input",{type:"text",value:G,onChange:XA,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),G&&n.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[n.jsx("img",{src:G,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),n.jsx("button",{onClick:()=>oA(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:n.jsx(Be,{size:12})})]})]})]}),n.jsxs("button",{onClick:Oe,disabled:!h.trim(),style:{width:"100%",padding:"8px 16px",background:h.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:h.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[n.jsx(Xe,{size:16})," Add Component"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:$A.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name})}),n.jsx("button",{onClick:()=>Ve(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Be,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:UA,onChange:f=>MA(f.target.value),placeholder:"Group name",onKeyPress:f=>f.key==="Enter"&&ee(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("button",{onClick:ee,disabled:!UA.trim()||T.length===0&&FA.length===0,style:{width:"100%",padding:"8px 16px",background:!UA.trim()||T.length===0&&FA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!UA.trim()||T.length===0&&FA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(lx,{size:16})," Create Group"]}),n.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[T.length>0||FA.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[T.length," component(s), ",FA.length," group(s) selected"]}),n.jsxs("button",{onClick:()=>{QA([]),fA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[n.jsx(su,{size:14})," Clear Selection"]})]}):n.jsx("div",{children:"No items selected"}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ie.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name}),n.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[f.componentIds?f.componentIds.length:0," components",f.groupIds&&f.groupIds.length>0&&`, ${f.groupIds.length} groups`]})]}),n.jsx("button",{onClick:()=>Je(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Be,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:x,onChange:f=>b(f.target.value),placeholder:"Connection label (optional)",onKeyPress:f=>f.key==="Enter"&&Ue(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),n.jsxs("select",{value:v||"",onChange:f=>F(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),$A.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),n.jsxs("select",{value:M||"",onChange:f=>aA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),$A.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),n.jsxs("select",{value:P,onChange:f=>uA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"solid",children:"Solid Line"}),n.jsx("option",{value:"dashed",children:"Dashed Line"}),n.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),n.jsxs("select",{value:kA,onChange:f=>CA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"directed",children:"Directed (with arrow)"}),n.jsx("option",{value:"undirected",children:"Undirected"})]})]}),n.jsxs("button",{onClick:Ue,disabled:!v||!M,style:{width:"100%",padding:"8px 16px",background:!v||!M?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!v||!M?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(eo,{size:16})," Add Connection"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:PA.map(f=>{const B=$A.find(E=>E.id===f.from),C=$A.find(E=>E.id===f.to);return!B||!C?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[B.name," → ",C.name]}),n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.type}),f.label&&n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.label})]}),n.jsx("button",{onClick:()=>Ke(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Be,{size:14})})]},f.id)})})]})]}),n.jsx("div",{ref:YA,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:n.jsxs("div",{ref:wA,onClick:EA,style:{position:"absolute",width:`${IA.width}px`,height:`${IA.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${I})`,transformOrigin:"0 0"},children:[ie.map(g),PA.map(j),$A.map(Ce)]})})]}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[n.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:n.jsxs("button",{onClick:()=>{const f=document.createElement("input");f.type="file",f.accept=".json",f.onchange=zA,f.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:cA,onChange:f=>BA(f.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),n.jsxs("button",{onClick:NA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[n.jsx(ga,{size:16})," Apply JSON"]})]})]})},aQ=({classDiagrams:i,onCreateClassDiagram:r,onLoadClassDiagram:s,onDeleteClassDiagram:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"class-diagram-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(sx,{size:48})}),n.jsx("h2",{children:"Class Diagram Designer"}),n.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Class Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.classes?.length||0," classes • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .class-diagram-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #ec4899;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #ec4899;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #ec4899;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #db2777;
        }
      `})]})},rQ=({classDiagram:i,classes:r=[],relationships:s=[],onUpdateClassDiagram:o,onBack:d})=>{const[u,h]=S.useState(""),[m,x]=S.useState(""),[b,v]=S.useState(""),[F,M]=S.useState(""),[aA,P]=S.useState("association"),[uA,kA]=S.useState("editor"),[CA,gA]=S.useState(""),[TA,cA]=S.useState(null),[BA,J]=S.useState({x:0,y:0}),[SA,_]=S.useState(null),[iA,pA]=S.useState({x:0,y:0}),[HA,sA]=S.useState(null),[OA,_A]=S.useState(""),[LA,G]=S.useState(-1),[oA,xA]=S.useState({visibility:"+",name:"",type:"String"}),[RA,U]=S.useState({visibility:"+",name:"",returnType:"void"}),[V,hA]=S.useState(1),[rA,UA]=S.useState({x:0,y:0}),[MA,T]=S.useState(!1),[QA,FA]=S.useState({x:0,y:0}),fA=S.useRef(null),I=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#8B5A2B",border:"#A16207",background:"#FFFBEB"},{header:"#6B7280",border:"#4B5563",background:"#F9FAFB"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],q=["String","int","float","double","boolean","void","char","long","short","byte"],IA=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}];S.useEffect(()=>{gA(JSON.stringify({classes:r,relationships:s},null,2))},[r,s]);const K=()=>I[Math.floor(Math.random()*I.length)],wA=()=>{const g=r.map(j=>({...j,colorScheme:K()}));o({...i,classes:g})},YA=()=>{hA(g=>Math.min(g*1.2,3))},$A=()=>{hA(g=>Math.max(g/1.2,.3))},PA=()=>{hA(1),UA({x:0,y:0})},ie=(g,j="12px",f="'SF Mono', monospace")=>{const C=document.createElement("canvas").getContext("2d");return C.font=`${j} ${f}`,C.measureText(g).width},de=g=>{const B=ie(g.name,"16px","'Inter', sans-serif")+32;let C=0;g.attributes.forEach(KA=>{const ZA=`${KA.visibility} ${KA.name} : ${KA.type}`,WA=ie(ZA)+32;WA>C&&(C=WA)});let E=0;g.methods.forEach(KA=>{const ZA=`${KA.visibility} ${KA.name} : ${KA.returnType}`,WA=ie(ZA)+32;WA>E&&(E=WA)});const H=Math.max(180,B,C,E),Y=40,R=26,tA=6,nA=1,Q=g.attributes.length>0?g.attributes.length*R+tA*2:0,k=g.methods.length>0?g.methods.length*R+tA*2:0,X=g.attributes.length>0&&g.methods.length>0?nA:0,jA=Y+Q+k+X;return{width:Math.min(H,400),height:Math.max(jA,60)}},Oe=()=>{if(!u.trim())return;const g=K(),j=de({name:u,attributes:[],methods:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,width:j.width,height:j.height,colorScheme:g}];o({...i,classes:f}),h("")},ee=g=>{const j=r.find(f=>f.id===g);j&&sA(j)},Ue=(g,j=-1)=>{const f=r.find(B=>B.id===g);f&&(_A("attribute"),G(j),j>=0?xA({...f.attributes[j]}):xA({visibility:"+",name:"",type:"String"}))},Ve=(g,j=-1)=>{const f=r.find(B=>B.id===g);f&&(_A("method"),G(j),j>=0?U({...f.methods[j]}):U({visibility:"+",name:"",returnType:"void"}))},Ke=()=>{if(!oA.name.trim())return;const g=r.map(j=>{if(j.id===HA.id){const f=[...j.attributes];LA>=0?f[LA]={...oA}:f.push({...oA});const B={...j,attributes:f},C=de(B);return{...B,width:C.width,height:C.height}}return j});o({...i,classes:g}),me()},Je=()=>{if(!RA.name.trim())return;let g=RA.name;g.includes("(")||(g+="()");const j=r.map(f=>{if(f.id===HA.id){const B=[...f.methods];LA>=0?B[LA]={...RA,name:g}:B.push({...RA,name:g});const C={...f,methods:B},E=de(C);return{...C,width:E.width,height:E.height}}return f});o({...i,classes:j}),me()},me=()=>{sA(null),_A(""),G(-1)},ue=()=>{if(!b||!F)return;const g=r.find(B=>B.id===parseInt(b)),j=r.find(B=>B.id===parseInt(F));if(!g||!j)return;const f=[...s,{id:Date.now(),from:g.id,to:j.id,type:aA,label:m||""}];o({...i,relationships:f}),x(""),v(""),M("")},y=g=>{const j=r.filter(B=>B.id!==g),f=s.filter(B=>!(B.from===g||B.to===g));o({...i,classes:j,relationships:f})},L=(g,j)=>{const f=r.map(B=>{if(B.id===g){const C=B.attributes.filter((Y,R)=>R!==j),E={...B,attributes:C},H=de(E);return{...E,width:H.width,height:H.height}}return B});o({...i,classes:f})},$=(g,j)=>{const f=r.map(B=>{if(B.id===g){const C=B.methods.filter((Y,R)=>R!==j),E={...B,methods:C},H=de(E);return{...E,width:H.width,height:H.height}}return B});o({...i,classes:f})},lA=g=>{const j=s.filter(f=>f.id!==g);o({...i,relationships:j})},dA=(g,j=null,f=!1)=>{g.stopPropagation();const B=fA.current?.getBoundingClientRect();B&&(j?f?(_(j),pA({x:g.clientX,y:g.clientY})):(cA(j),J({x:(g.clientX-B.left)/V-rA.x-j.x,y:(g.clientY-B.top)/V-rA.y-j.y})):(T(!0),FA({x:g.clientX-rA.x,y:g.clientY-rA.y})))},EA=g=>{if(TA){const j=fA.current?.getBoundingClientRect();if(!j)return;const f=Math.max(0,(g.clientX-j.left)/V-rA.x-BA.x),B=Math.max(0,(g.clientY-j.top)/V-rA.y-BA.y),C=r.map(E=>E.id===TA.id?{...E,x:f,y:B}:E);o({...i,classes:C})}else if(SA){const j=(g.clientX-iA.x)/V,f=(g.clientY-iA.y)/V,B=r.map(C=>{if(C.id===SA.id){const E=Math.max(180,C.width+j),H=Math.max(90,C.height+f);return{...C,width:E,height:H}}return C});o({...i,classes:B}),pA({x:g.clientX,y:g.clientY})}else MA&&UA({x:g.clientX-QA.x,y:g.clientY-QA.y})},D=()=>{cA(null),_(null),T(!1)},vA=g=>{g.preventDefault();const j=g.deltaY>0?.9:1.1;hA(f=>Math.max(.3,Math.min(3,f*j)))};S.useEffect(()=>{if(TA||SA||MA)return document.addEventListener("mousemove",EA),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",EA),document.removeEventListener("mouseup",D)}},[TA,SA,MA,BA,iA,QA,V,rA]);const NA=()=>JSON.stringify({classes:r,relationships:s},null,2),zA=()=>{navigator.clipboard.writeText(NA())},oe=()=>{try{const g=JSON.parse(CA);if(Array.isArray(g.classes)&&Array.isArray(g.relationships)){const j=g.classes.map(f=>({...f,...de(f)}));o({...i,classes:j,relationships:g.relationships})}else alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},XA=g=>{const j=g.target.files[0];if(!j)return;const f=new FileReader;f.onload=B=>{gA(B.target.result)},f.readAsText(j)},fe=()=>{if(!fA.current)return;const g=fA.current.style.transform;fA.current.style.transform="scale(1) translate(0px, 0px)",Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(j=>{j.default(fA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const B=document.createElement("a");B.download=`${i.name||"class-diagram"}.png`,B.href=f.toDataURL("image/png"),B.click(),fA.current.style.transform=g})})},re=(g,j)=>{const f={x:g.x+g.width/2,y:g.y+g.height/2},B={x:j.x+j.width/2,y:j.y+j.height/2},C=B.x-f.x,E=B.y-f.y;f.x+(C>0?g.width/2:-g.width/2),f.y+(Math.abs(C)*g.height/g.width>Math.abs(E)?E>0?g.height/2:-g.height/2:(E>0?g.height/2:-g.height/2)*(g.width/g.height)),B.x+(C<0?j.width/2:-j.width/2),B.y+(Math.abs(C)*j.height/j.width>Math.abs(E)?E<0?j.height/2:-j.height/2:(E<0?j.height/2:-j.height/2)*(j.width/j.height));const H={x:Math.max(g.x,Math.min(g.x+g.width,Math.abs(C)>Math.abs(E)*(g.width/g.height)?f.x+(C>0?g.width/2:-g.width/2):f.x)),y:Math.max(g.y,Math.min(g.y+g.height,Math.abs(E)>Math.abs(C)*(g.height/g.width)?f.y+(E>0?g.height/2:-g.height/2):f.y))},Y={x:Math.max(j.x,Math.min(j.x+j.width,Math.abs(C)>Math.abs(E)*(j.width/j.height)?B.x+(C<0?j.width/2:-j.width/2):B.x)),y:Math.max(j.y,Math.min(j.y+j.height,Math.abs(E)>Math.abs(C)*(j.height/j.width)?B.y+(E<0?j.height/2:-j.height/2):B.y))};return{fromPoint:H,toPoint:Y}},ye=(g,j)=>{if(Math.sqrt(Math.pow(j.x-g.x,2)+Math.pow(j.y-g.y,2))<300)return`M${g.x},${g.y} L${j.x},${j.y}`;const B=g.x+(j.x-g.x)*.5,C=g.y+(j.y-g.y)*.5;return Math.abs(j.x-g.x)>Math.abs(j.y-g.y)?`M${g.x},${g.y} L${B},${g.y} L${B},${j.y} L${j.x},${j.y}`:`M${g.x},${g.y} L${g.x},${C} L${j.x},${C} L${j.x},${j.y}`},pt=g=>{const j=g.colorScheme||I[0];return n.jsxs("div",{className:"class-box",style:{left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:TA?.id===g.id?"grabbing":"grab",borderColor:j.border,backgroundColor:"white"},onMouseDown:f=>dA(f,g),onDoubleClick:()=>ee(g.id),children:[n.jsx("div",{className:"class-header",style:{backgroundColor:j.header,color:"white"},children:n.jsx("div",{className:"class-name",children:g.name})}),n.jsxs("div",{className:"class-content",children:[g.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:g.attributes.map((f,B)=>n.jsxs("div",{className:"class-item",onDoubleClick:C=>{C.stopPropagation(),Ue(g.id,B)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.type]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),L(g.id,B)},className:"item-delete-btn",children:n.jsx(Be,{size:10})})]},B))}),g.attributes.length>0&&g.methods.length>0&&n.jsx("div",{className:"section-divider",style:{backgroundColor:j.border}}),g.methods.length>0&&n.jsx("div",{className:"methods-section",children:g.methods.map((f,B)=>n.jsxs("div",{className:"class-item",onDoubleClick:C=>{C.stopPropagation(),Ve(g.id,B)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.returnType]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),$(g.id,B)},className:"item-delete-btn",children:n.jsx(Be,{size:10})})]},B))})]}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:j.header},onMouseDown:f=>dA(f,g,!0)})]},g.id)},De=g=>{const j=r.find(nA=>nA.id===g.from),f=r.find(nA=>nA.id===g.to);if(!j||!f)return null;const B={x:j.x,y:j.y,width:j.width,height:j.height},C={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:E,toPoint:H}=re(B,C),Y=ye(E,H),R=(E.x+H.x)/2,tA=(E.y+H.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${g.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${g.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const Q=(()=>{switch(g.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${g.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${g.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${g.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${g.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${g.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${g.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:Y,fill:"none",...Q}),g.label&&n.jsxs("g",{children:[n.jsx("rect",{x:R-g.label.length*4,y:tA-8,width:g.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:R,y:tA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:g.label})]})]})})()]},g.id)},Ce=g=>{if(g.target===fA.current){const j=fA.current.getBoundingClientRect(),f=(g.clientX-j.left)/V-rA.x,B=(g.clientY-j.top)/V-rA.y,C=prompt("Enter class name:");if(C&&C.trim()){const E=K(),H=de({name:C.trim(),attributes:[],methods:[]}),Y=[...r,{id:Date.now(),name:C.trim(),attributes:[],methods:[],x:f-H.width/2,y:B-40,width:H.width,height:H.height,colorScheme:E}];o({...i,classes:Y})}}};return n.jsxs("div",{className:"class-diagram-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:$A,className:"zoom-btn",children:n.jsx(Mr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(V*100),"%"]}),n.jsx("button",{onClick:YA,className:"zoom-btn",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:PA,className:"zoom-btn reset",children:"Reset"})]}),n.jsxs("button",{onClick:wA,className:"color-btn",children:[n.jsx(fx,{size:16})," Randomize Colors"]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:fe,className:"export-btn",children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:zA,className:"export-btn",children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([NA()],{type:"application/json"}),j=URL.createObjectURL(g),f=document.createElement("a");f.href=j,f.download=`${i.name||"class-diagram"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(j)},className:"export-btn",children:[n.jsx(In,{size:16})," Export JSON"]})]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${uA==="editor"?"active":""}`,onClick:()=>kA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${uA==="json"?"active":""}`,onClick:()=>kA("json"),children:"JSON Editor"})]}),uA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Classes"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:g=>h(g.target.value),placeholder:"New class name",onKeyPress:g=>g.key==="Enter"&&Oe()}),n.jsxs("button",{onClick:Oe,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Class"]})]}),n.jsx("div",{className:"class-list",children:r.map(g=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:g.name}),n.jsx("button",{onClick:()=>y(g.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},g.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:g=>x(g.target.value),placeholder:"Relationship label (optional)",onKeyPress:g=>g.key==="Enter"&&ue()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Class"}),n.jsxs("select",{value:b||"",onChange:g=>v(g.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Class"}),n.jsxs("select",{value:F||"",onChange:g=>M(g.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:aA,onChange:g=>P(g.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization/Implementation"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("button",{onClick:ue,disabled:!b||!F,className:"add-btn",children:[n.jsx(eo,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(g=>{const j=r.find(B=>B.id===g.from),f=r.find(B=>B.id===g.to);return!j||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[j.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",g.type,")"]})]}),g.label&&n.jsx("div",{className:"item-label",children:g.label}),n.jsx("button",{onClick:()=>lA(g.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},g.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"UML Notation Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Visibility:"}),n.jsx("div",{children:"+ Public"}),n.jsx("div",{children:"- Private"}),n.jsx("div",{children:"# Protected"}),n.jsx("div",{children:"~ Package"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Attributes:"}),n.jsx("div",{children:"+name : String"}),n.jsx("div",{children:"-age : int"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Methods:"}),n.jsx("div",{children:"+getName() : String"}),n.jsx("div",{children:"-calculate() : void"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add class"}),n.jsx("div",{children:"• Double-click class to edit"}),n.jsx("div",{children:"• Drag to move classes"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Mouse wheel to zoom"}),n.jsx("div",{children:"• Drag empty space to pan"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:fA,onDoubleClick:Ce,onMouseDown:g=>dA(g),onWheel:vA,children:n.jsxs("div",{className:"diagram-content",style:{transform:`scale(${V}) translate(${rA.x}px, ${rA.y}px)`,transformOrigin:"0 0",width:"5000px",height:"5000px",position:"relative"},children:[s.map(De),r.map(pt)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=XA,g.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:CA,onChange:g=>gA(g.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:oe,className:"import-btn",children:[n.jsx(ga,{size:16})," Apply JSON"]})]}),HA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Class: ",HA.name]}),n.jsx("button",{onClick:me,className:"modal-close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsxs("div",{className:"edit-sections-container",children:[n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ue(HA.id),className:"add-item-btn",children:[n.jsx(Xe,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[HA.attributes.map((g,j)=>n.jsxs("div",{className:"item-row",onClick:()=>Ue(HA.id,j),children:[n.jsxs("div",{className:"item-text",children:[g.visibility," ",g.name," : ",g.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),L(HA.id,j)},className:"delete-btn",children:n.jsx(Be,{size:12})})})]},j)),HA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Methods"}),n.jsxs("button",{onClick:()=>Ve(HA.id),className:"add-item-btn",children:[n.jsx(Xe,{size:12})," Add Method"]})]}),n.jsxs("div",{className:"items-list",children:[HA.methods.map((g,j)=>n.jsxs("div",{className:"item-row",onClick:()=>Ve(HA.id,j),children:[n.jsxs("div",{className:"item-text",children:[g.visibility," ",g.name," : ",g.returnType]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),$(HA.id,j)},className:"delete-btn",children:n.jsx(Be,{size:12})})})]},j)),HA.methods.length===0&&n.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:me,className:"modal-cancel-btn",children:"Close"})})]})}),HA&&OA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:OA==="attribute"?LA>=0?"Edit Attribute":"Add Attribute":LA>=0?"Edit Method":"Add Method"}),n.jsx("button",{onClick:me,className:"modal-close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:OA==="attribute"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:oA.visibility,onChange:g=>xA({...oA,visibility:g.target.value}),children:IA.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:oA.name,onChange:g=>xA({...oA,name:g.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:oA.type,onChange:g=>xA({...oA,type:g.target.value}),children:q.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:q.includes(oA.type)?"":oA.type,onChange:g=>xA({...oA,type:g.target.value}),placeholder:"Or enter custom type",style:{display:q.includes(oA.type)?"none":"block",marginTop:"8px"}})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:RA.visibility,onChange:g=>U({...RA,visibility:g.target.value}),children:IA.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:RA.name,onChange:g=>U({...RA,name:g.target.value}),placeholder:"Method name (include parentheses)"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Return Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:RA.returnType,onChange:g=>U({...RA,returnType:g.target.value}),children:q.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:q.includes(RA.returnType)?"":RA.returnType,onChange:g=>U({...RA,returnType:g.target.value}),placeholder:"Or enter custom type",style:{display:q.includes(RA.returnType)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:me,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:OA==="attribute"?Ke:Je,disabled:OA==="attribute"?!oA.name:!RA.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .class-diagram-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .zoom-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-btn.reset {
          width: auto;
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .color-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #8B5CF6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .color-btn:hover {
          background: #7C3AED;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #EC4899;
          color: white;
          border: 1px solid #EC4899;
        }
        
        .export-btn:hover {
          background: #DB2777;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #EC4899;
          border-bottom-color: #EC4899;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: background-color 0.2s;
        }
        
        .add-btn:hover {
          background: #DB2777;
        }
        
        .add-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .notation-guide {
          font-size: 12px;
          color: #64748b;
        }
        
        .guide-item {
          margin-bottom: 12px;
        }
        
        .guide-item strong {
          display: block;
          color: #374151;
          margin-bottom: 4px;
        }
        
        .guide-item div {
          font-family: 'Fira Code', monospace;
          margin-left: 8px;
          margin-bottom: 2px;
        }
        
        .class-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .item-label {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          margin-left: 8px;
          transition: background-color 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: linear-gradient(45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f1f5f9 75%), 
                      linear-gradient(-45deg, transparent 75%, #f1f5f9 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          position: relative;
          overflow: hidden;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
        }
        
        .diagram-content {
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .class-box {
          position: absolute;
          background: white;
          border: 2px solid;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-size: 13px;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 2;
          user-select: none;
          transition: box-shadow 0.2s;
        }
        
        .class-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .class-header {
          padding: 12px 16px;
          text-align: center;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .attributes-section, .methods-section {
          display: flex;
          flex-direction: column;
          padding: 3px 0;
        }
        
        .section-divider {
          height: 1px;
          margin: 0 16px;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 16px;
          margin-bottom: 1px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 18px;
        }
        
        .class-item:hover {
          background: rgba(236, 72, 153, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-delete-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          opacity: 0;
          padding: 4px;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .class-item:hover .item-delete-btn {
          opacity: 0.7;
        }
        
        .item-delete-btn:hover {
          opacity: 1 !important;
          background: #fee2e2;
        }
        
        .resize-handle {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 14px;
          height: 14px;
          cursor: nwse-resize;
          border-radius: 0 0 6px 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        
        .class-box:hover .resize-handle {
          opacity: 1;
        }
        
        .resize-handle::before {
          content: '';
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 3px;
          height: 3px;
          background: currentColor;
          border-radius: 50%;
        }
        
        .resize-handle::after {
          content: '';
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 6px;
          height: 1px;
          background: currentColor;
          transform: rotate(45deg);
        }
        
        .relationship-svg {
          pointer-events: none;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #EC4899;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #DB2777;
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 600px;
          max-width: 90%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transform: scale(1);
          animation: modalAppear 0.2s ease-out;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .modal-header {
          padding: 20px 24px 16px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
        }
        
        .modal-close-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.15s;
        }
        
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }
        
        .edit-sections-container {
          display: flex;
          gap: 24px;
        }
        
        .edit-sections-container > .edit-section {
          flex: 1;
        }
        
        .modal-footer {
          padding: 16px 24px 24px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid #e2e8f0;
        }
        
        .modal-cancel-btn {
          padding: 10px 20px;
          background: #f1f5f9;
          color: #64748b;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .modal-save-btn {
          padding: 10px 20px;
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #DB2777;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Class Editor Modal Styles */
        .edit-section {
          margin-top: 0;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .section-header h4 {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
        }
        
        .add-item-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #DB2777;
        }
        
        .items-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }
        
        .item-row:hover {
          background: #f8fafc;
        }
        
        .item-row:last-child {
          border-bottom: none;
        }
        
        .item-actions {
          display: flex;
          gap: 8px;
        }
        
        .empty-message {
          padding: 16px;
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
      `})]})},iQ=({domainModels:i,onCreateDomainModel:r,onLoadDomainModel:s,onDeleteDomainModel:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"domain-model-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(sx,{size:48})}),n.jsx("h2",{children:"Domain Model Designer"}),n.jsx("p",{children:"Model business domain concepts and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Domain Model"]})}),i.length>0&&n.jsxs("div",{className:"model-list",children:[n.jsx("h3",{children:"Your Domain Models"}),i.map(h=>n.jsxs("div",{className:"model-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"model-card-content",children:[n.jsx("div",{className:"model-card-name",children:h.name}),n.jsxs("div",{className:"model-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.entities?.length||0," entities • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"model-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Dn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this domain model?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Domain Model"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Model Name"}),n.jsx("input",{type:"text",placeholder:"e.g., E-Commerce Domain Model",id:"modelName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("modelName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Model"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .domain-model-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3B82F6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .model-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .model-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .model-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .model-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .model-card-content {
          flex: 1;
        }
        
        .model-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .model-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .model-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3B82F6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #3B82F6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563EB;
        }
      `})]})},oQ=({domainModel:i={name:"Sample Domain Model"},entities:r=[],relationships:s=[],onUpdateDomainModel:o=()=>{},onBack:d=()=>{}})=>{const[u,h]=S.useState(""),[m,x]=S.useState(""),[b,v]=S.useState(""),[F,M]=S.useState(""),[aA,P]=S.useState("association"),[uA,kA]=S.useState("1"),[CA,gA]=S.useState("1"),[TA,cA]=S.useState("editor"),[BA,J]=S.useState(""),[SA,_]=S.useState(null),[iA,pA]=S.useState({x:0,y:0}),[HA,sA]=S.useState(null),[OA,_A]=S.useState({x:0,y:0}),[LA,G]=S.useState(null),[oA,xA]=S.useState(""),[RA,U]=S.useState(-1),[V,hA]=S.useState({name:"",type:"String"}),[rA,UA]=S.useState(1),[MA,T]=S.useState({x:0,y:0}),[QA,FA]=S.useState(!1),[fA,I]=S.useState({x:0,y:0}),q=S.useRef(null),IA=[{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#6366F1",border:"#4F46E5",background:"#EEF2FF"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#06B6D4",border:"#0891B2",background:"#ECFEFF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#F59E0B",border:"#D97706",background:"#FFFBEB"},{header:"#EC4899",border:"#DB2777",background:"#FDF2F8"},{header:"#64748B",border:"#475569",background:"#F8FAFC"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#F97316",border:"#EA580C",background:"#FFF7ED"},{header:"#84CC16",border:"#65A30D",background:"#F7FEE7"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],K=["String","Integer","Number","Boolean","Date","DateTime","Money","Text","ID"],wA=["1","*","0..1","1..*","0..*"];S.useEffect(()=>{J(JSON.stringify({entities:r,relationships:s},null,2))},[r,s]);const YA=()=>IA[Math.floor(Math.random()*IA.length)],$A=()=>{const g=r.map(j=>({...j,colorScheme:YA()}));o({...i,entities:g})},PA=()=>{UA(g=>Math.min(g*1.2,3))},ie=()=>{UA(g=>Math.max(g/1.2,.3))},de=()=>{UA(1),T({x:0,y:0})},Oe=(g,j="12px",f="'SF Mono', monospace")=>{const C=document.createElement("canvas").getContext("2d");return C.font=`${j} ${f}`,C.measureText(g).width},ee=g=>{const B=Oe(g.name,"16px","'Inter', sans-serif")+32;let C=0;g.attributes.forEach(Q=>{const k=`${Q.name} : ${Q.type}`,X=Oe(k)+32;X>C&&(C=X)});const E=Math.max(180,B,C),H=40,tA=g.attributes.length>0?g.attributes.length*26+6:0,nA=H+tA+4;return{width:Math.min(E,400),height:Math.max(nA,50)}},Ue=()=>{if(!u.trim())return;const g=YA(),j=ee({name:u,attributes:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],x:100+Math.random()*300,y:100+Math.random()*300,width:j.width,height:j.height,colorScheme:g}];o({...i,entities:f}),h("")},Ve=g=>{const j=r.find(f=>f.id===g);j&&G(j)},Ke=(g,j=-1)=>{const f=r.find(B=>B.id===g);f&&(xA("attribute"),U(j),j>=0?hA({...f.attributes[j]}):hA({name:"",type:"String"}))},Je=()=>{if(!V.name.trim())return;const g=r.map(j=>{if(j.id===LA.id){const f=[...j.attributes];RA>=0?f[RA]={...V}:f.push({...V});const B={...j,attributes:f},C=ee(B);return{...B,width:C.width,height:C.height}}return j});o({...i,entities:g}),me()},me=()=>{G(null),xA(""),U(-1)},ue=()=>{if(!b||!F)return;const g=r.find(B=>B.id===parseInt(b)),j=r.find(B=>B.id===parseInt(F));if(!g||!j)return;const f=[...s,{id:Date.now(),from:g.id,to:j.id,type:aA,label:m||"",multiplicityFrom:uA,multiplicityTo:CA}];o({...i,relationships:f}),x(""),v(""),M(""),kA("1"),gA("1")},y=g=>{const j=r.filter(B=>B.id!==g),f=s.filter(B=>!(B.from===g||B.to===g));o({...i,entities:j,relationships:f})},L=(g,j)=>{const f=r.map(B=>{if(B.id===g){const C=B.attributes.filter((Y,R)=>R!==j),E={...B,attributes:C},H=ee(E);return{...E,width:H.width,height:H.height}}return B});o({...i,entities:f})},$=g=>{const j=s.filter(f=>f.id!==g);o({...i,relationships:j})},lA=g=>{g.target===q.current&&g.button===0&&(FA(!0),I({x:g.clientX-MA.x,y:g.clientY-MA.y}),g.preventDefault())},dA=g=>{QA&&T({x:g.clientX-fA.x,y:g.clientY-fA.y})},EA=(g,j,f=!1)=>{g.stopPropagation();const B=q.current?.getBoundingClientRect();if(B)if(f)sA(j),_A({x:g.clientX,y:g.clientY});else{_(j);const C=(g.clientX-B.left-MA.x)/rA,E=(g.clientY-B.top-MA.y)/rA;pA({x:C-j.x,y:E-j.y})}},D=g=>{if(SA){const j=q.current?.getBoundingClientRect();if(!j)return;const f=(g.clientX-j.left-MA.x)/rA,B=(g.clientY-j.top-MA.y)/rA,C=Math.max(0,f-iA.x),E=Math.max(0,B-iA.y),H=r.map(Y=>Y.id===SA.id?{...Y,x:C,y:E}:Y);o({...i,entities:H})}else if(HA){const j=g.clientX-OA.x,f=g.clientY-OA.y,B=r.map(C=>{if(C.id===HA.id){const E=Math.max(180,C.width+j/rA),H=Math.max(80,C.height+f/rA);return{...C,width:E,height:H}}return C});o({...i,entities:B}),_A({x:g.clientX,y:g.clientY})}},vA=()=>{_(null),sA(null),FA(!1)};S.useEffect(()=>{if(SA||HA||QA)return document.addEventListener("mousemove",SA||HA?D:dA),document.addEventListener("mouseup",vA),()=>{document.removeEventListener("mousemove",SA||HA?D:dA),document.removeEventListener("mouseup",vA)}},[SA,HA,QA,iA,OA,fA,MA,rA]);const NA=()=>JSON.stringify({entities:r,relationships:s},null,2),zA=()=>{navigator.clipboard.writeText(NA())},oe=()=>{try{const g=JSON.parse(BA);if(Array.isArray(g.entities)&&Array.isArray(g.relationships)){const j=g.entities.map(f=>({...f,...ee(f)}));o({...i,entities:j,relationships:g.relationships})}else alert("Invalid JSON format. Expected entities and relationships arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},XA=g=>{const j=g.target.files[0];if(!j)return;const f=new FileReader;f.onload=B=>{J(B.target.result)},f.readAsText(j)},fe=()=>{if(!q.current)return;const g=q.current.style.transform;q.current.style.transform="scale(1) translate(0px, 0px)",Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(j=>{j.default(q.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const B=document.createElement("a");B.download=`${i.name||"domain-model"}.png`,B.href=f.toDataURL("image/png"),B.click(),q.current.style.transform=g})})},re=(g,j)=>{const f={x:g.x+g.width/2,y:g.y+g.height/2},B={x:j.x+j.width/2,y:j.y+j.height/2},C=B.x-f.x,E=B.y-f.y;let H,Y;if(Math.abs(C)/g.width>Math.abs(E)/g.height){const R=f.x+(C>0?g.width/2:-g.width/2),tA=B.x+(C>0?-j.width/2:j.width/2);H={x:R,y:f.y},Y={x:tA,y:B.y}}else{const R=f.y+(E>0?g.height/2:-g.height/2),tA=B.y+(E>0?-j.height/2:j.height/2);H={x:f.x,y:R},Y={x:B.x,y:tA}}return{fromPoint:H,toPoint:Y}},ye=(g,j)=>{if(Math.sqrt(Math.pow(j.x-g.x,2)+Math.pow(j.y-g.y,2))<300)return`M${g.x},${g.y} L${j.x},${j.y}`;const B=g.x+(j.x-g.x)*.5,C=g.y+(j.y-g.y)*.5;return Math.abs(j.x-g.x)>Math.abs(j.y-g.y)?`M${g.x},${g.y} L${B},${g.y} L${B},${j.y} L${j.x},${j.y}`:`M${g.x},${g.y} L${g.x},${C} L${j.x},${C} L${j.x},${j.y}`},pt=g=>{const j=g.colorScheme||IA[0];return n.jsxs("div",{className:"entity-box",style:{left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:SA?.id===g.id?"grabbing":"grab",borderColor:j.border,backgroundColor:"white"},onMouseDown:f=>EA(f,g),onDoubleClick:()=>Ve(g.id),children:[n.jsx("div",{className:"entity-header",style:{backgroundColor:j.header,color:"white"},children:n.jsx("div",{className:"entity-name",children:g.name})}),n.jsx("div",{className:"entity-content",children:g.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:g.attributes.map((f,B)=>n.jsxs("div",{className:"entity-item",onDoubleClick:C=>{C.stopPropagation(),Ke(g.id,B)},children:[n.jsxs("span",{className:"item-text",children:[f.name," : ",f.type]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),L(g.id,B)},className:"item-delete-btn",children:n.jsx(Be,{size:10})})]},B))})}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:j.header},onMouseDown:f=>EA(f,g,!0)})]},g.id)},De=g=>{const j=r.find(nA=>nA.id===g.from),f=r.find(nA=>nA.id===g.to);if(!j||!f)return null;const B={x:j.x,y:j.y,width:j.width,height:j.height},C={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:E,toPoint:H}=re(B,C),Y=ye(E,H),R=(E.x+H.x)/2,tA=(E.y+H.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${g.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${g.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const Q=(()=>{switch(g.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${g.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${g.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${g.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${g.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${g.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${g.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:Y,fill:"none",...Q}),g.label&&n.jsxs("g",{children:[n.jsx("rect",{x:R-g.label.length*4,y:tA-8,width:g.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:R,y:tA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:g.label})]}),n.jsxs("g",{children:[n.jsx("text",{x:E.x+(H.x-E.x)*.25,y:E.y+(H.y-E.y)*.25-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityFrom||"1"}),n.jsx("text",{x:E.x+(H.x-E.x)*.75,y:E.y+(H.y-E.y)*.75-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityTo||"1"})]})]})})()]},g.id)},Ce=g=>{if(g.target===q.current){const j=q.current.getBoundingClientRect(),f=(g.clientX-j.left-MA.x)/rA,B=(g.clientY-j.top-MA.y)/rA,C=prompt("Enter entity name:");if(C&&C.trim()){const E=YA(),H=ee({name:C.trim(),attributes:[]}),Y=[...r,{id:Date.now(),name:C.trim(),attributes:[],x:f-H.width/2,y:B-40,width:H.width,height:H.height,colorScheme:E}];o({...i,entities:Y})}}};return n.jsxs("div",{className:"domain-model-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"canvas-controls",children:[n.jsx("button",{onClick:$A,className:"control-btn",title:"Randomize Colors",children:n.jsx(fx,{size:16})}),n.jsx("button",{onClick:PA,className:"control-btn",title:"Zoom In",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:ie,className:"control-btn",title:"Zoom Out",children:n.jsx(Mr,{size:16})}),n.jsx("button",{onClick:de,className:"control-btn",title:"Reset View",children:n.jsx(hx,{size:16})}),n.jsxs("span",{className:"zoom-indicator",children:[Math.round(rA*100),"%"]})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:fe,className:"export-btn",children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:zA,className:"export-btn",children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([NA()],{type:"application/json"}),j=URL.createObjectURL(g),f=document.createElement("a");f.href=j,f.download=`${i.name||"domain-model"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(j)},className:"export-btn",children:[n.jsx(In,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${TA==="editor"?"active":""}`,onClick:()=>cA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${TA==="json"?"active":""}`,onClick:()=>cA("json"),children:"JSON Editor"})]}),TA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Entities"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:g=>h(g.target.value),placeholder:"New entity name",onKeyPress:g=>g.key==="Enter"&&Ue()}),n.jsxs("button",{onClick:Ue,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Entity"]})]}),n.jsx("div",{className:"entity-list",children:r.map(g=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:g.name}),n.jsx("button",{onClick:()=>y(g.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},g.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:g=>x(g.target.value),placeholder:"Relationship label (optional)",onKeyPress:g=>g.key==="Enter"&&ue()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Entity"}),n.jsxs("select",{value:b||"",onChange:g=>v(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Entity"}),n.jsxs("select",{value:F||"",onChange:g=>M(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:aA,onChange:g=>P(g.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (From)"}),n.jsx("select",{value:uA,onChange:g=>kA(g.target.value),children:wA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (To)"}),n.jsx("select",{value:CA,onChange:g=>gA(g.target.value),children:wA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("button",{onClick:ue,disabled:!b||!F,className:"add-btn",children:[n.jsx(eo,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(g=>{const j=r.find(B=>B.id===g.from),f=r.find(B=>B.id===g.to);return!j||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[j.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",g.type,")"]}),(g.multiplicityFrom!=="1"||g.multiplicityTo!=="1")&&n.jsxs("div",{className:"item-multiplicity",children:[g.multiplicityFrom," to ",g.multiplicityTo]})]}),g.label&&n.jsx("div",{className:"item-label",children:g.label}),n.jsx("button",{onClick:()=>$(g.id),className:"delete-btn",children:n.jsx(Be,{size:14})})]},g.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Domain Model Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Canvas Controls:"}),n.jsx("div",{children:"🎨 Randomize all colors"}),n.jsx("div",{children:"🔍 Zoom in/out"}),n.jsx("div",{children:"↺ Reset view"}),n.jsx("div",{children:"🖱️ Drag to pan canvas"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Relationship Types:"}),n.jsx("div",{children:"Association: Solid line"}),n.jsx("div",{children:"Navigable: Solid line with arrow"}),n.jsx("div",{children:"Inheritance: Solid line with triangle"}),n.jsx("div",{children:"Realization: Dashed line with triangle"}),n.jsx("div",{children:"Dependency: Dashed line with arrow"}),n.jsx("div",{children:"Aggregation: Line with empty diamond"}),n.jsx("div",{children:"Composition: Line with filled diamond"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Multiplicity:"}),n.jsx("div",{children:"1: Exactly one"}),n.jsx("div",{children:"*: Zero or more"}),n.jsx("div",{children:"0..1: Zero or one"}),n.jsx("div",{children:"1..*: One or more"}),n.jsx("div",{children:"0..*: Zero or more"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add entity"}),n.jsx("div",{children:"• Double-click entity to edit"}),n.jsx("div",{children:"• Drag to move entities"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Use mouse wheel to zoom"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:q,onDoubleClick:Ce,onMouseDown:lA,onWheel:g=>{g.preventDefault();const j=g.deltaY>0?.9:1.1;UA(f=>Math.max(.3,Math.min(3,f*j)))},style:{cursor:QA?"grabbing":"grab"},children:n.jsxs("div",{className:"canvas-content",style:{transform:`scale(${rA}) translate(${MA.x/rA}px, ${MA.y/rA}px)`,transformOrigin:"0 0",width:"4000px",height:"3000px",minWidth:"100%",minHeight:"100%"},children:[s.map(De),r.map(pt)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=XA,g.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:BA,onChange:g=>J(g.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:oe,className:"import-btn",children:[n.jsx(ga,{size:16})," Apply JSON"]})]}),LA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Entity: ",LA.name]}),n.jsx("button",{onClick:me,className:"modal-close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsx("div",{className:"edit-sections-container",children:n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ke(LA.id),className:"add-item-btn",children:[n.jsx(Xe,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[LA.attributes.map((g,j)=>n.jsxs("div",{className:"item-row",onClick:()=>Ke(LA.id,j),children:[n.jsxs("div",{className:"item-text",children:[g.name," : ",g.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),L(LA.id,j)},className:"delete-btn",children:n.jsx(Be,{size:12})})})]},j)),LA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]})})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:me,className:"modal-cancel-btn",children:"Close"})})]})}),LA&&oA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:oA==="attribute"?RA>=0?"Edit Attribute":"Add Attribute":""}),n.jsx("button",{onClick:me,className:"modal-close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:oA==="attribute"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:V.name,onChange:g=>hA({...V,name:g.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:V.type,onChange:g=>hA({...V,type:g.target.value}),children:K.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:K.includes(V.type)?"":V.type,onChange:g=>hA({...V,type:g.target.value}),placeholder:"Or enter custom type",style:{display:K.includes(V.type)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:me,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:Je,disabled:!V.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .domain-model-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .canvas-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
          padding: 8px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .control-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-indicator {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          min-width: 40px;
          text-align: center;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3B82F6;
          color: white;
          border: 1px solid #3B82F6;
        }
        
        .export-btn:hover {
          background: #2563EB;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3B82F6;
          border-bottom-color: #3B82F6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: background-color 0.2s;
        }
        
        .add-btn:hover {
          background: #2563EB;
        }
        
        .add-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .notation-guide {
          font-size: 12px;
          color: #64748b;
        }
        
        .guide-item {
          margin-bottom: 12px;
        }
        
        .guide-item strong {
          display: block;
          color: #374151;
          margin-bottom: 4px;
        }
        
        .guide-item div {
          font-family: 'Fira Code', monospace;
          margin-left: 8px;
          margin-bottom: 2px;
        }
        
        .entity-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .item-multiplicity {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 1px;
          font-style: italic;
        }
        
        .item-label {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          margin-left: 8px;
          transition: background-color 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }
        
        .canvas-content {
          position: relative;
          background: 
            radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .entity-box {
          position: absolute;
          background: white;
          border: 2px solid;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-size: 13px;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 2;
          user-select: none;
          transition: box-shadow 0.2s;
        }
        
        .entity-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .entity-header {
          padding: 12px 16px;
          text-align: center;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .entity-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .entity-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0px 0;
        }
        
        .attributes-section {
          display: flex;
          flex-direction: column;
        }
        
        .entity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 8px;
          padding-right: 0px;
          margin-bottom: 2px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 22px;
        }
        
        .entity-item:hover {
          background: rgba(59, 130, 246, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-delete-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          opacity: 0;
          padding: 4px;
          padding-left: 0;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .entity-item:hover .item-delete-btn {
          opacity: 0.7;
        }
        
        .item-delete-btn:hover {
          opacity: 1 !important;
          background: #fee2e2;
        }
        
        .resize-handle {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 14px;
          height: 14px;
          cursor: nwse-resize;
          border-radius: 0 0 6px 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        
        .entity-box:hover .resize-handle {
          opacity: 1;
        }
        
        .resize-handle::before {
          content: '';
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 3px;
          height: 3px;
          background: currentColor;
          border-radius: 50%;
        }
        
        .resize-handle::after {
          content: '';
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 6px;
          height: 1px;
          background: currentColor;
          transform: rotate(45deg);
        }
        
        .relationship-svg {
          pointer-events: none;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #3B82F6;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #2563EB;
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 600px;
          max-width: 90%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transform: scale(1);
          animation: modalAppear 0.2s ease-out;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .modal-header {
          padding: 20px 24px 16px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
        }
        
        .modal-close-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.15s;
        }
        
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }
        
        .edit-sections-container {
          display: flex;
          gap: 24px;
        }
        
        .edit-sections-container > .edit-section {
          flex: 1;
        }
        
        .modal-footer {
          padding: 16px 24px 24px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid #e2e8f0;
        }
        
        .modal-cancel-btn {
          padding: 10px 20px;
          background: #f1f5f9;
          color: #64748b;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .modal-save-btn {
          padding: 10px 20px;
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #2563EB;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Entity Editor Modal Styles */
        .edit-section {
          margin-top: 0;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .section-header h4 {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
        }
        
        .add-item-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #2563EB;
        }
        
        .items-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }
        
        .item-row:hover {
          background: #f8fafc;
        }
        
        .item-row:last-child {
          border-bottom: none;
        }
        
        .item-actions {
          display: flex;
          gap: 8px;
        }
        
        .empty-message {
          padding: 16px;
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
      `})]})},sQ=({mindMaps:i,onCreateMindMap:r,onLoadMindMap:s,onDeleteMindMap:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"mindmap-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(cx,{size:48})}),n.jsx("h2",{children:"Mind Map Designer"}),n.jsx("p",{children:"Visualize your ideas and concepts in an intuitive hierarchical structure"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Mind Map"]})}),i.length>0&&n.jsxs("div",{className:"mindmap-list",children:[n.jsx("h3",{children:"Your Mind Maps"}),i.map(h=>n.jsxs("div",{className:"mindmap-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"mindmap-card-content",children:[n.jsx("div",{className:"mindmap-card-name",children:h.name}),n.jsxs("div",{className:"mindmap-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||1," nodes"]})]})]}),n.jsxs("div",{className:"mindmap-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this mind map?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Mind Map"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mind Map Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Project Planning",id:"mindMapName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("mindMapName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Mind Map"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .mindmap-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #10b981;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .mindmap-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .mindmap-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .mindmap-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .mindmap-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .mindmap-card-content {
          flex: 1;
        }
        
        .mindmap-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .mindmap-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .mindmap-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #10b981;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #059669;
        }
      `})]})},lQ=({mindMap:i,nodes:r=[],connections:s=[],onUpdateMindMap:o,onBack:d})=>{const u=S.useRef(null),[h,m]=S.useState(!1),[x,b]=S.useState(null),[v,F]=S.useState(null),[M,aA]=S.useState(""),[P,uA]=S.useState(""),[kA,CA]=S.useState(""),[gA,TA]=S.useState(""),[cA,BA]=S.useState(1),[J,SA]=S.useState({x:0,y:0}),[_,iA]=S.useState(!1),[pA,HA]=S.useState({x:0,y:0}),[sA,OA]=S.useState(null),[_A,LA]=S.useState(!1),[G,oA]=S.useState(!0),[xA,RA]=S.useState(null),[U,V]=S.useState("editor"),[hA,rA]=S.useState(""),[UA,MA]=S.useState(!0),[T,QA]=S.useState(null),[FA,fA]=S.useState("text"),[I,q]=S.useState(null),[IA,K]=S.useState(null),[wA,YA]=S.useState([]),$A=20,PA=200,ie=15,de=25,Oe=100,[ee,Ue]=S.useState(r.length>0?r:[{id:1,text:"Origin",subtext:"Click to edit subtext",description:"This is the central idea of your mind map. You can add descriptions to provide more details.",imageUrl:"",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:160,height:80}]);S.useEffect(()=>{r.length>0&&Ue(r)},[r]),S.useEffect(()=>{rA(JSON.stringify({nodes:ee},null,2))},[ee]),S.useEffect(()=>{U==="batch"&&YA(ee.map(Q=>({id:Q.id,text:Q.text,subtext:Q.subtext||"",description:Q.description||"",imageUrl:Q.imageUrl||""})))},[U,ee]),S.useEffect(()=>{const Q=k=>{U==="editor"&&(k.key==="ArrowLeft"?(k.preventDefault(),SA(X=>({x:X.x+Oe,y:X.y}))):k.key==="ArrowRight"?(k.preventDefault(),SA(X=>({x:X.x-Oe,y:X.y}))):k.key==="ArrowUp"?(k.preventDefault(),SA(X=>({x:X.x,y:X.y+Oe}))):k.key==="ArrowDown"&&(k.preventDefault(),SA(X=>({x:X.x,y:X.y-Oe}))))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[U]);const Ve=Q=>{const k=Q.replace("#",""),X=parseInt(k.substr(0,2),16),jA=parseInt(k.substr(2,2),16),KA=parseInt(k.substr(4,2),16);return(.299*X+.587*jA+.114*KA)/255>.5?"#000000":"#ffffff"},Ke=(Q,k)=>Q.length<=k?Q:Q.substring(0,k-3)+"...",Je=(Q,k="",X=!1)=>{const ZA=Ke(Q,ie),WA=k?Ke(k,de):"",se=ZA.length*8,Re=WA?WA.length*8*.8:0,be=Math.max(se,Re);let ze=Math.max(160,be+40),Te=25;return X&&(Te+=20),k&&(Te+=20),{width:Math.min(ze,300),height:Math.min(Te,200)}},me=Q=>ee.filter(k=>k.parentId===Q),ue=Q=>{const k=me(Q);let X=[...k];return k.forEach(jA=>{X=[...X,...ue(jA.id)]}),X},y=(Q,k,X,jA=!0)=>{Ue(KA=>{const ZA=[...KA],WA=ZA.find(Te=>Te.id===Q);if(!WA)return KA;const se=KA.find(Te=>Te.id===Q),Re=k-se.x,be=X-se.y;WA.x=k,WA.y=X;const ze=(Te,hn,Ln)=>{ZA.filter(tn=>tn.parentId===Te).forEach(tn=>{tn.x+=hn,tn.y+=Ln,ze(tn.id,hn,Ln)})};return jA&&ze(Q,Re,be),ZA})},L=()=>{Ue(Q=>{const k=[...Q],X=k.find(ZA=>ZA.isRoot);if(!X)return Q;const jA=ZA=>{const WA=k.find(be=>be.id===ZA),se=k.filter(be=>be.parentId===ZA);if(se.length===0)return WA.height;let Re=0;return se.forEach((be,ze)=>{Re+=jA(be.id),ze<se.length-1&&(Re+=$A)}),Math.max(Re,WA.height)},KA=(ZA,WA,se,Re=null)=>{const be=k.find(xt=>xt.id===ZA);if(!be)return;be.x=WA,be.y=se;const ze=k.filter(xt=>xt.parentId===ZA);if(ze.length===0)return;let Te=[],hn=[];be.isRoot?ze.forEach(xt=>{xt.x<be.x?Te.push(xt):hn.push(xt)}):Re==="right"?hn=ze:Te=ze;const Ln=(xt,tn)=>{if(xt.length===0)return;const xa=xt.map(gn=>jA(gn.id)),Ra=xa.reduce((gn,za)=>gn+za,0)+(xt.length-1)*$A;let It=se-Ra/2;xt.forEach((gn,za)=>{const pn=xa[za],Lr=It+pn/2,Or=tn==="left"?WA-PA:WA+PA;KA(gn.id,Or,Lr,tn),It+=pn+$A})};Ln(Te,"left"),Ln(hn,"right")};return KA(X.id,X.x,X.y),k})},$=(Q,k)=>{if(!Q||!k)return"";const X=(Q.x+Q.width)*cA+J.x,jA=(Q.y+Q.height/2)*cA+J.y,KA=k.x*cA+J.x,ZA=(k.y+k.height/2)*cA+J.y,WA=KA-X,Re=Math.abs(WA)*.5,be=X+Re,ze=jA,Te=KA-Re;return`M ${X} ${jA} C ${be} ${ze}, ${Te} ${ZA}, ${KA} ${ZA}`},lA=(Q,k,X)=>{for(const KA of ee){if(KA.id===Q.id||ue(Q.id).some(Re=>Re.id===KA.id))continue;const ZA=KA.x*cA+J.x,WA=KA.y*cA+J.y;if(Math.sqrt(Math.pow(k-(ZA+KA.width*cA/2),2)+Math.pow(X-(WA+KA.height*cA/2),2))<80*cA)return KA}return null},dA=(Q,k)=>{if(Q.stopPropagation(),Q.detail===1){b(k.id),OA(k),iA(!0);const X=u.current.getBoundingClientRect();HA({x:Q.clientX-X.left-J.x-k.x*cA,y:Q.clientY-X.top-J.y-k.y*cA})}},EA=Q=>{Q.target===u.current&&(b(null),LA(!0),HA({x:Q.clientX-J.x,y:Q.clientY-J.y}))},D=S.useCallback(Q=>{if(_&&sA){const k=u.current.getBoundingClientRect(),X=(Q.clientX-k.left-J.x-pA.x)/cA,jA=(Q.clientY-k.top-J.y-pA.y)/cA,KA=lA(sA,Q.clientX-k.left,Q.clientY-k.top);RA(KA),y(sA.id,X,jA,!0)}else _A&&SA({x:Q.clientX-pA.x,y:Q.clientY-pA.y})},[_,sA,pA,cA,J,_A]),vA=S.useCallback(()=>{_&&sA&&(xA&&Ue(Q=>Q.map(k=>k.id===sA.id?{...k,parentId:xA.id,level:xA.level+1,color:xA.level+1===1?"#4ecdc4":"#95e1d3"}:k)),setTimeout(()=>{L()},50)),iA(!1),OA(null),LA(!1),RA(null)},[_,sA,xA]);S.useEffect(()=>(document.addEventListener("mousemove",D),document.addEventListener("mouseup",vA),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",vA)}),[D,vA]);const NA=(Q,k="right")=>{const X=ee.find(Te=>Te.id===Q);if(!X)return;const jA=ee.find(Te=>Te.isRoot);let KA;X.isRoot?KA=k==="right":(KA=X.x>jA.x,k=KA?"right":"left");const ZA=Je("New Node","Add subtext here"),WA=me(Q),se=X.x+(KA?PA:-PA),Re=X.y+WA.length*(ZA.height+$A),be={id:Date.now(),text:"New Node",subtext:"Add subtext here",description:"",imageUrl:"",x:se,y:Re,level:X.level+1,parentId:Q,isRoot:!1,color:X.level+1===1?"#4ecdc4":"#95e1d3",...ZA},ze=[...ee,be];Ue(ze),b(be.id),o({...i,nodes:ze}),setTimeout(()=>{L()},50)},zA=Q=>{const k=ee.find(WA=>WA.id===Q);if(k?.isRoot)return;const X=ue(Q),KA=[k,...X].map(WA=>WA.id),ZA=ee.filter(WA=>!KA.includes(WA.id));Ue(ZA),b(null),o({...i,nodes:ZA}),setTimeout(()=>{L()},50)},oe=Q=>{F(Q.id),aA(Q.text),uA(Q.subtext||""),CA(Q.description||""),TA(Q.imageUrl||""),fA("text")},XA=(Q,k,X=null,jA=null,KA=null)=>{if(!k.trim())return;const ZA=ee.map(WA=>{if(WA.id===Q){const se={...WA,text:k,subtext:X!==null?X:WA.subtext,description:jA!==null?jA:WA.description,imageUrl:KA!==null?KA:WA.imageUrl};return{...se,...Je(k,se.subtext,se.isRoot)}}return WA});Ue(ZA),F(null),aA(""),uA(""),CA(""),TA(""),o({...i,nodes:ZA})},fe=(Q,k)=>{const X=ee.map(jA=>jA.id===Q?{...jA,imageUrl:k}:jA);Ue(X),q(null),o({...i,nodes:X})},re=(Q,k)=>{k&&(k.stopPropagation(),k.preventDefault()),fe(Q,""),K(null)},ye=()=>BA(Q=>Math.min(Q*1.2,3)),pt=()=>BA(Q=>Math.max(Q/1.2,.3)),De=()=>{BA(1),SA({x:0,y:0})},Ce=()=>m(Q=>!Q),g=()=>MA(Q=>!Q),j=()=>JSON.stringify({nodes:ee},null,2),f=()=>{navigator.clipboard.writeText(j())},B=()=>{try{const Q=JSON.parse(hA);if(Array.isArray(Q.nodes)){const k=Q.nodes;Ue(k),o({...i,nodes:k})}else alert("Invalid JSON format. Expected nodes array.")}catch(Q){alert("Error parsing JSON: "+Q.message)}},C=Q=>{const k=Q.target.files[0];if(!k)return;const X=new FileReader;X.onload=jA=>{rA(jA.target.result)},X.readAsText(k)},E=()=>{u.current&&Ir(()=>Promise.resolve().then(()=>Tr),void 0).then(Q=>{Q.default(u.current.parentElement,{backgroundColor:h?"#1f2937":"#ffffff",scale:2,useCORS:!0}).then(k=>{const X=document.createElement("a");X.download=`${i.name||"mindmap"}.png`,X.href=k.toDataURL("image/png"),X.click()})})},H=()=>h?"#64748b":"#475569",Y=(Q,k,X)=>{YA(jA=>jA.map(KA=>KA.id===Q?{...KA,[k]:X}:KA))},R=()=>{const Q=ee.map(k=>{const X=wA.find(jA=>jA.id===k.id);if(X){const jA={...k,text:X.text||k.text,subtext:X.subtext,description:X.description,imageUrl:X.imageUrl};return{...jA,...Je(jA.text,jA.subtext,jA.isRoot)}}return k});Ue(Q),V("editor"),o({...i,nodes:Q})},tA=Q=>{const k=[];let X=20;Q.isRoot&&(X+=7);const jA=Ve(Q.color),KA=Ke(Q.text,ie);if(k.push(n.jsx("text",{x:Q.width/2,y:X,textAnchor:"middle",fill:jA,fontSize:"14",fontWeight:"600",style:{pointerEvents:"none"},children:KA},"main-text")),X+=15,Q.subtext){const ZA=Ke(Q.subtext,de);k.push(n.jsx("text",{x:Q.width/2,y:X,textAnchor:"middle",fill:jA,fontSize:"11",fontStyle:"italic",opacity:"0.8",style:{pointerEvents:"none"},children:ZA},"subtext")),X+=15}return Q.description&&k.push(n.jsxs("g",{children:[n.jsx("circle",{cx:Q.width-12,cy:12,r:8,fill:"#f59e0b"}),n.jsx("text",{x:Q.width-12,y:16,textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",style:{pointerEvents:"none"},children:"i"})]},"desc-indicator")),k},nA=Q=>{if(!Q.imageUrl||!UA||IA!==Q.id)return null;const k=80,X=(Q.x+Q.width/2-k/2)*cA+J.x,jA=(Q.y-k-15)*cA+J.y;return n.jsxs("g",{children:[n.jsx("rect",{x:X-5,y:jA-5,width:k+10,height:k+10,rx:"10",fill:"white",stroke:"#e2e8f0",strokeWidth:"2",filter:"url(#shadow)"}),n.jsx("image",{href:Q.imageUrl,x:X,y:jA,width:k,height:k,preserveAspectRatio:"xMidYMid slice",clipPath:`url(#imageClip-${Q.id})`,onError:KA=>{KA.target.style.display="none"}}),n.jsx("circle",{cx:X+k-5,cy:jA+5,r:10,fill:"#ef4444",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onMouseDown:KA=>re(Q.id,KA)}),n.jsx("text",{x:X+k-5,y:jA+9,textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",style:{pointerEvents:"none"},children:"×"}),n.jsx("defs",{children:n.jsx("clipPath",{id:`imageClip-${Q.id}`,children:n.jsx("rect",{x:X,y:jA,width:k,height:k,rx:"8"})})})]},`image-hover-${Q.id}`)};return n.jsxs("div",{className:`mindmap-maker ${h?"dark":"light"}`,children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:E,className:"export-btn",children:[n.jsx(cn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:f,className:"export-btn",children:[n.jsx(Ka,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const Q=new Blob([j()],{type:"application/json"}),k=URL.createObjectURL(Q),X=document.createElement("a");X.href=k,X.download=`${i.name||"mindmap"}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(k)},className:"export-btn",children:[n.jsx(In,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${U==="editor"?"active":""}`,onClick:()=>V("editor"),children:"Mind Map Editor"}),n.jsx("button",{className:`tab ${U==="json"?"active":""}`,onClick:()=>V("json"),children:"JSON Editor"}),n.jsx("button",{className:`tab ${U==="batch"?"active":""}`,onClick:()=>V("batch"),children:"Batch Edit"})]}),U==="editor"?n.jsxs("div",{className:"mindmap-container",children:[G&&n.jsx("div",{className:"top-toolbar",children:n.jsxs("div",{className:"toolbar-section",children:[n.jsx("button",{className:"toolbar-btn",onClick:Ce,title:h?"Light Mode":"Dark Mode",children:h?n.jsx(lw,{size:18}):n.jsx(Mb,{size:18})}),n.jsx("button",{className:"toolbar-btn",title:"Auto Align",onClick:L,children:n.jsx(Zb,{size:18})}),n.jsx("button",{className:`toolbar-btn ${UA?"active":""}`,onClick:g,title:UA?"Hide Images":"Show Images",children:n.jsx(cn,{size:18})}),n.jsx("button",{className:"toolbar-btn",onClick:()=>V("batch"),title:"Batch Edit Mode",children:n.jsx(Qb,{size:18})})]})}),n.jsxs("svg",{ref:u,className:"canvas",width:"100%",height:"100%",onMouseDown:EA,children:[n.jsxs("defs",{children:[n.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("filter",{id:"shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:n.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.3"})}),n.jsxs("filter",{id:"connectionGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),ee.map(Q=>{const k=ee.find(X=>X.id===Q.parentId);return k?n.jsx("path",{d:$(k,Q),stroke:H(),strokeWidth:"2",fill:"none",opacity:"0.8",strokeLinecap:"round",className:"connection-line"},`connection-${Q.id}`):null}),xA&&n.jsxs("g",{children:[n.jsxs("circle",{cx:(xA.x+xA.width/2)*cA+J.x,cy:(xA.y+xA.height/2)*cA+J.y,r:40,fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5,5",opacity:"0.8",filter:"url(#connectionGlow)",children:[n.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"1s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"1s",repeatCount:"indefinite"})]}),n.jsx("text",{x:(xA.x+xA.width/2)*cA+J.x,y:(xA.y+xA.height/2)*cA+J.y-50,textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"Connect as Child"})]}),ee.map(Q=>n.jsxs("g",{children:[n.jsxs("g",{transform:`translate(${Q.x*cA+J.x}, ${Q.y*cA+J.y}) scale(${cA})`,className:`node-group ${_&&sA?.id===Q.id?"dragging":""}`,onMouseEnter:()=>K(Q.id),onMouseLeave:()=>K(null),children:[n.jsx("rect",{width:Q.width,height:Q.height,rx:12,fill:Q.color,filter:x===Q.id?"url(#glow)":"url(#shadow)",stroke:x===Q.id?"#fff":"transparent",strokeWidth:x===Q.id?"2":"0",style:{cursor:"grab"},onMouseDown:k=>dA(k,Q),onDoubleClick:()=>oe(Q)}),tA(Q)]}),x===Q.id&&n.jsx(n.Fragment,{children:(()=>{const k=ee.find(KA=>KA.isRoot),X=Q.isRoot?!0:Q.x>=k.x,jA=Q.isRoot?!0:Q.x<k.x;return n.jsxs(n.Fragment,{children:[(Q.isRoot||X)&&n.jsxs("g",{transform:`translate(${(Q.x+Q.width+15)*cA+J.x}, ${(Q.y+Q.height/2-12)*cA+J.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>NA(Q.id,"right")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]}),(Q.isRoot||jA)&&n.jsxs("g",{transform:`translate(${(Q.x-35)*cA+J.x}, ${(Q.y+Q.height/2-12)*cA+J.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>NA(Q.id,"left")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]})]})})()})]},Q.id)),ee.map(Q=>nA(Q))]}),x&&n.jsxs("div",{className:"floating-actions",children:[n.jsx("button",{className:"action-btn edit-btn",onClick:()=>{const Q=ee.find(k=>k.id===x);oe(Q)},title:"Edit Node",children:n.jsx(zb,{size:16})}),n.jsx("button",{className:"action-btn image-btn",onClick:()=>{const Q=ee.find(k=>k.id===x);q(Q)},title:"Add Image URL",children:n.jsx(cn,{size:16})}),ee.find(Q=>Q.id===x)?.description&&n.jsx("button",{className:"action-btn desc-btn",onClick:()=>{const Q=ee.find(k=>k.id===x);QA(Q)},title:"View Description",children:n.jsx(fb,{size:16})}),!ee.find(Q=>Q.id===x)?.isRoot&&n.jsx("button",{className:"action-btn delete-btn",onClick:()=>zA(x),title:"Delete Node",children:n.jsx(Be,{size:16})})]}),v&&n.jsx("div",{className:"edit-overlay",children:n.jsxs("div",{className:"edit-box",children:[n.jsxs("div",{className:"edit-tabs",children:[n.jsx("button",{className:`edit-tab ${FA==="text"?"active":""}`,onClick:()=>fA("text"),children:"Main Text"}),n.jsx("button",{className:`edit-tab ${FA==="subtext"?"active":""}`,onClick:()=>fA("subtext"),children:"Subtext"}),n.jsx("button",{className:`edit-tab ${FA==="description"?"active":""}`,onClick:()=>fA("description"),children:"Description"}),n.jsx("button",{className:`edit-tab ${FA==="image"?"active":""}`,onClick:()=>fA("image"),children:"Image URL"})]}),n.jsxs("div",{className:"edit-content",children:[FA==="text"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:M,onChange:Q=>aA(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&XA(v,M,P,kA,gA),Q.key==="Escape"&&(F(null),aA(""))},placeholder:"Enter main text...",autoFocus:!0,maxLength:50}),n.jsxs("div",{className:"char-counter",children:[M.length,"/",ie]})]}),FA==="subtext"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:P,onChange:Q=>uA(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&XA(v,M,P,kA,gA),Q.key==="Escape"&&(F(null),uA(""))},placeholder:"Enter subtext...",autoFocus:!0,maxLength:60}),n.jsxs("div",{className:"char-counter",children:[P.length,"/",de]})]}),FA==="description"&&n.jsx("textarea",{value:kA,onChange:Q=>CA(Q.target.value),placeholder:"Enter description...",rows:"4",autoFocus:!0}),FA==="image"&&n.jsxs("div",{className:"image-url-input",children:[n.jsx("input",{type:"url",value:gA,onChange:Q=>TA(Q.target.value),placeholder:"Enter image URL...",autoFocus:!0}),gA&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:gA,alt:"Preview",onError:Q=>Q.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]})]})]}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>{F(null),aA(""),uA(""),CA(""),TA("")},className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>XA(v,M,P,kA,gA),className:"save-btn",children:"Save"})]})]})}),I&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:"Add Image URL"}),n.jsx("button",{onClick:()=>q(null),className:"close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsxs("div",{className:"dialog-content",children:[n.jsx("input",{type:"url",placeholder:"Enter image URL...",value:I.imageUrl||"",onChange:Q=>{const k=ee.find(X=>X.id===I.id);k&&q({...k,imageUrl:Q.target.value})},className:"url-input"}),I.imageUrl&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:I.imageUrl,alt:"Preview",onError:Q=>Q.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]}),n.jsxs("div",{className:"dialog-actions",children:[n.jsx("button",{onClick:()=>q(null),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>fe(I.id,I.imageUrl),className:"save-btn",children:"Save"})]})]})]})}),T&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:T.text}),n.jsx("button",{onClick:()=>QA(null),className:"close-btn",children:n.jsx(Oa,{size:20})})]}),n.jsx("div",{className:"dialog-content",children:n.jsx("p",{children:T.description})})]})}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{className:"zoom-btn",onClick:pt,title:"Zoom Out",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(cA*100),"%"]}),n.jsx("button",{className:"zoom-btn",onClick:ye,title:"Zoom In",children:"+"}),n.jsx("button",{className:"zoom-btn reset",onClick:De,title:"Reset View",children:"⌂"})]}),n.jsx("div",{className:"scroll-hint",children:"Use arrow keys ← → ↑ ↓ to navigate"})]}):U==="json"?n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const Q=document.createElement("input");Q.type="file",Q.accept=".json",Q.onchange=C,Q.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:hA,onChange:Q=>rA(Q.target.value),className:"json-textarea",placeholder:"Paste your JSON data here..."}),n.jsxs("button",{onClick:B,className:"import-btn",children:[n.jsx(ga,{size:16})," Apply JSON"]})]}):n.jsxs("div",{className:"batch-edit-container",children:[n.jsxs("div",{className:"batch-edit-header",children:[n.jsx("h3",{children:"Batch Edit All Nodes"}),n.jsx("p",{children:'Edit multiple nodes at once. Changes are applied when you click "Apply Changes".'})]}),n.jsx("div",{className:"batch-edit-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Main Text"}),n.jsx("th",{children:"Subtext"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Image URL"})]})}),n.jsx("tbody",{children:wA.map(Q=>n.jsxs("tr",{children:[n.jsx("td",{className:"id-cell",children:Q.id}),n.jsx("td",{children:n.jsx("input",{type:"text",value:Q.text,onChange:k=>Y(Q.id,"text",k.target.value),className:"batch-input",placeholder:"Main text..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",value:Q.subtext,onChange:k=>Y(Q.id,"subtext",k.target.value),className:"batch-input",placeholder:"Subtext..."})}),n.jsx("td",{children:n.jsx("textarea",{value:Q.description,onChange:k=>Y(Q.id,"description",k.target.value),className:"batch-textarea",placeholder:"Description...",rows:"2"})}),n.jsx("td",{children:n.jsx("input",{type:"url",value:Q.imageUrl,onChange:k=>Y(Q.id,"imageUrl",k.target.value),className:"batch-input",placeholder:"Image URL..."})})]},Q.id))})]})}),n.jsxs("div",{className:"batch-edit-actions",children:[n.jsx("button",{onClick:()=>V("editor"),className:"cancel-btn",children:"Cancel"}),n.jsxs("button",{onClick:R,className:"save-btn",children:[n.jsx(ga,{size:16})," Apply Changes"]})]})]}),n.jsx("style",{jsx:!0,children:`
        .mindmap-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .mindmap-maker.dark {
          background: #1f2937;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .dark .toolbar {
          background: #374151;
          border-bottom-color: #4b5563;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .dark .toolbar h2 {
          color: #f9fafb;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border-color: #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .dark .tabs {
          background: #374151;
          border-bottom-color: #4b5563;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
          font-size: 14px;
        }
        
        .dark .tab {
          color: #9ca3af;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .mindmap-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #f8fafc;
        }

        .dark .mindmap-container {
          background: #1f2937;
        }

        .top-toolbar {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-radius: 25px;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
        }

        .dark .top-toolbar {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .toolbar-btn {
          color: #9ca3af;
        }

        .toolbar-btn.active {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .toolbar-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .canvas {
          cursor: grab;
          width: 100%;
          height: 100%;
        }

        .canvas:active {
          cursor: grabbing;
        }

        .node-group {
          transition: transform 0.05s ease-out;
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        .floating-actions {
          position: absolute;
          top: 70px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1001;
        }

        .action-btn {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
          color: white;
          font-weight: bold;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .edit-btn {
          background: #3b82f6;
        }

        .image-btn {
          background: #8b5cf6;
        }

        .desc-btn {
          background: #f59e0b;
        }

        .delete-btn {
          background: #ef4444;
        }

        .edit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .edit-box {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          overflow: hidden;
          background: white;
        }

        .dark .edit-box {
          background: #374151;
        }

        .edit-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark .edit-tabs {
          border-bottom-color: #4b5563;
        }

        .edit-tab {
          flex: 1;
          padding: 12px 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          color: #64748b;
        }

        .dark .edit-tab {
          color: #9ca3af;
        }

        .edit-tab.active {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .edit-content {
          padding: 20px;
        }

        .edit-box input,
        .edit-box textarea {
          width: 100%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          outline: none;
          resize: none;
          box-sizing: border-box;
          background: white;
          color: #1f2937;
        }

        .dark .edit-box input,
        .dark .edit-box textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .edit-box input:focus,
        .edit-box textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .input-with-counter {
          position: relative;
        }

        .char-counter {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          color: #64748b;
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dark .char-counter {
          color: #9ca3af;
          background: rgba(55, 65, 81, 0.9);
        }

        .image-url-input {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .image-preview {
          text-align: center;
          padding: 12px;
          border: 1px dashed #e2e8f0;
          border-radius: 6px;
        }

        .dark .image-preview {
          border-color: #4b5563;
        }

        .image-preview img {
          max-width: 100%;
          max-height: 150px;
          border-radius: 4px;
        }

        .image-preview small {
          display: block;
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
        }

        .dark .image-preview small {
          color: #9ca3af;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .edit-actions {
          border-top-color: #4b5563;
          background: #1f2937;
        }

        .cancel-btn, .save-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          font-size: 14px;
        }

        .cancel-btn {
          background: #f1f5f9;
          color: #64748b;
        }

        .cancel-btn:hover {
          background: #e2e8f0;
        }

        .save-btn {
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .save-btn:hover {
          background: #2563eb;
        }

        .dialog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2001;
        }

        .dialog {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          background: white;
        }

        .dark .dialog {
          background: #374151;
        }

        .dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .dialog-header {
          border-bottom-color: #4b5563;
          background: #1f2937;
        }

        .dialog-header h3 {
          margin: 0;
          flex: 1;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .dark .dialog-header h3 {
          color: #e2e8f0;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .dark .close-btn {
          color: #9ca3af;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .dialog-content {
          padding: 20px;
          max-height: 400px;
          overflow-y: auto;
          color: #1f2937;
          line-height: 1.6;
        }

        .dark .dialog-content {
          color: #e2e8f0;
        }

        .url-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
          margin-bottom: 16px;
          box-sizing: border-box;
        }

        .dark .url-input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .dialog-actions {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          gap: 4px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          z-index: 1000;
        }

        .dark .zoom-controls {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .zoom-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .zoom-btn {
          color: #9ca3af;
        }

        .zoom-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .zoom-btn.reset {
          font-size: 16px;
        }

        .zoom-level {
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
          color: #64748b;
        }

        .dark .zoom-level {
          color: #9ca3af;
        }

        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 30px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          font-size: 12px;
          color: #64748b;
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .dark .scroll-hint {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
          color: #9ca3af;
        }

        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .dark .json-editor {
          background: #374151;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
          background: white;
          color: #1f2937;
        }
        
        .dark .json-textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }

        .batch-edit-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: white;
          overflow: hidden;
        }

        .dark .batch-edit-container {
          background: #374151;
        }

        .batch-edit-header {
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .batch-edit-header {
          background: #1f2937;
          border-bottom-color: #4b5563;
        }

        .batch-edit-header h3 {
          margin: 0 0 8px 0;
          color: #1f2937;
          font-size: 20px;
        }

        .dark .batch-edit-header h3 {
          color: #e2e8f0;
        }

        .batch-edit-header p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .dark .batch-edit-header p {
          color: #9ca3af;
        }

        .batch-edit-table {
          flex: 1;
          overflow: auto;
          padding: 16px;
        }

        .batch-edit-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .dark .batch-edit-table table {
          background: #374151;
        }

        .batch-edit-table th {
          position: sticky;
          top: 0;
          background: #f1f5f9;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #475569;
          border-bottom: 2px solid #e2e8f0;
          font-size: 14px;
          z-index: 10;
        }

        .dark .batch-edit-table th {
          background: #1f2937;
          color: #9ca3af;
          border-bottom-color: #4b5563;
        }

        .batch-edit-table td {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark .batch-edit-table td {
          border-bottom-color: #4b5563;
        }

        .batch-edit-table tr:hover {
          background: #f8fafc;
        }

        .dark .batch-edit-table tr:hover {
          background: #1f2937;
        }

        .id-cell {
          font-weight: 600;
          color: #3b82f6;
          font-size: 13px;
          width: 80px;
        }

        .batch-input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          background: white;
          color: #1f2937;
          box-sizing: border-box;
        }

        .dark .batch-input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .batch-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .batch-textarea {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          background: white;
          color: #1f2937;
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .dark .batch-textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .batch-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .batch-edit-actions {
          display: flex;
          gap: 12px;
          padding: 16px 20px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          justify-content: flex-end;
        }

        .dark .batch-edit-actions {
          background: #1f2937;
          border-top-color: #4b5563;
        }

        .batch-edit-actions .cancel-btn,
        .batch-edit-actions .save-btn {
          flex: 0 0 auto;
          min-width: 120px;
        }
      `})]})},cQ=({activityDiagrams:i,onCreateActivityDiagram:r,onLoadActivityDiagram:s,onDeleteActivityDiagram:o})=>{const[d,u]=S.useState(!1);return n.jsxs("div",{className:"activity-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(_B,{size:48})}),n.jsx("h2",{children:"Activity Diagram Designer"}),n.jsx("p",{children:"Model business workflows and processes with UML activity diagrams"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Xe,{size:16})," New Activity Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Activity Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.edges?.length||0," transitions"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Tn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this activity diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(Be,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Activity Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .activity-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #f59e0b;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #f59e0b;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #d97706;
        }
      `})]})},dQ=({activityDiagram:i,swimlanes:r=[],nodes:s=[],edges:o=[],onUpdateActivityDiagram:d,onBack:u})=>{const h=S.useRef(null),m=S.useRef(null),[x,b]=S.useState(null),[v,F]=S.useState(null),[M,aA]=S.useState(1),[P,uA]=S.useState(null),[kA,CA]=S.useState(!1),[gA,TA]=S.useState({x:0,y:0}),[cA,BA]=S.useState("editor"),[J,SA]=S.useState(""),[_,iA]=S.useState("select"),[pA,HA]=S.useState(!1),[sA,OA]=S.useState(null),[_A,LA]=S.useState({x:0,y:0}),[G,oA]=S.useState(""),[xA]=S.useState(220);S.useEffect(()=>{SA(JSON.stringify({name:i.name,swimlanes:r,nodes:s,edges:o},null,2))},[r,s,o,i.name]);const RA={initial:{width:40,height:40,color:"#10b981",shape:"circle"},activity:{width:120,height:60,color:"#60a5fa",shape:"rounded"},decision:{width:80,height:80,color:"#f59e0b",shape:"diamond"},final:{width:40,height:40,color:"#1e293b",shape:"doublecircle"},fork:{width:80,height:10,color:"#6b7280",shape:"rectangle"},join:{width:80,height:10,color:"#6b7280",shape:"rectangle"}},U=(y,L)=>{const $=RA[y];if(y==="activity"){const lA=Math.max(100,L.length*8+40);return{...$,width:Math.min(lA,180)}}return $},V=y=>{const L=r.find(lA=>lA.id===y);if(!L)return null;const $=r.findIndex(lA=>lA.id===y);return{...L,x:$*xA,width:xA,centerX:$*xA+xA/2}},hA=y=>{const L=V(y.swimlaneId);if(!L)return y;const $=L.centerX-y.width/2;return{...y,x:$}},rA=(y,L,$)=>{const lA=V(y.swimlaneId);if(!lA)return{x:L,y:$};const dA=lA.x+10,EA=lA.x+lA.width-y.width-10,D=60,vA=Math.max(dA,Math.min(EA,L)),NA=Math.max(D,$);return{x:vA,y:NA}},UA=(y,L)=>{const $=y+L/2;for(let lA=0;lA<r.length;lA++){const dA=lA*xA;if($>=dA&&$<dA+xA)return r[lA].id}return r[0]?.id||null},MA=()=>{if(!G.trim())return;const y={id:Date.now(),name:G,order:r.length};d({...i,swimlanes:[...r,y]}),oA("")},T=y=>{if(r.length<=1){alert("Cannot delete the last swimlane");return}const L=r.filter(lA=>lA.id!==y),$=s.filter(lA=>lA.swimlaneId!==y);d({...i,swimlanes:L,nodes:$}),F(null)},QA=(y,L)=>{if(y.stopPropagation(),b(L.id),_==="select"){uA(L),CA(!0);const $=m.current.getBoundingClientRect();TA({x:(y.clientX-$.left)/M-L.x,y:(y.clientY-$.top)/M-L.y})}else _==="connection"&&(OA(L.id),HA(!0))},FA=S.useCallback(y=>{if(m.current){const L=m.current.getBoundingClientRect(),$=(y.clientX-L.left)/M,lA=(y.clientY-L.top)/M;if(pA&&LA({x:$,y:lA}),kA&&P){let dA=$-gA.x,EA=lA-gA.y;const D=rA(P,dA,EA),vA=UA(D.x,P.width),NA=s.map(zA=>zA.id===P.id?{...zA,x:D.x,y:D.y,swimlaneId:vA}:zA);d({...i,nodes:NA})}}},[kA,pA,P,gA,M,s,i,d]),fA=S.useCallback(y=>{if(pA&&sA&&m.current){const L=m.current.getBoundingClientRect(),$=(y.clientX-L.left)/M,lA=(y.clientY-L.top)/M,dA=s.find(EA=>$>=EA.x&&$<=EA.x+EA.width&&lA>=EA.y&&lA<=EA.y+EA.height);if(dA&&dA.id!==sA&&!o.find(D=>D.source===sA&&D.target===dA.id)){const D={id:Date.now(),source:sA,target:dA.id,label:""};d({...i,edges:[...o,D]})}}CA(!1),uA(null),HA(!1),OA(null)},[pA,sA,s,o,M,i,d]);S.useEffect(()=>(document.addEventListener("mousemove",FA),document.addEventListener("mouseup",fA),()=>{document.removeEventListener("mousemove",FA),document.removeEventListener("mouseup",fA)}),[FA,fA]);const I=(y,L)=>{if(!L&&r.length>0&&(L=r[0].id),!V(L))return;const lA={id:Date.now(),type:y,text:y==="initial"?"Start":y==="final"?"End":y==="decision"?"Decision":y==="fork"||y==="join"?"":"New Activity",y:200,swimlaneId:L,...U(y,"New Activity")},dA=hA(lA);d({...i,nodes:[...s,dA]}),b(dA.id)},q=y=>{const L=s.filter(lA=>lA.id!==y),$=o.filter(lA=>lA.source!==y&&lA.target!==y);d({...i,nodes:L,edges:$}),b(null)},IA=y=>{d({...i,edges:o.filter(L=>L.id!==y)})},K=(y,L)=>{const $=s.map(lA=>lA.id===y?{...lA,text:L,...U(lA.type,L)}:lA);d({...i,nodes:$})},wA=y=>{const L=s.map($=>$.id===y?hA($):$);d({...i,nodes:L})},YA=()=>aA(y=>Math.min(y*1.2,3)),$A=()=>aA(y=>Math.max(y/1.2,.3)),PA=()=>aA(1),ie=()=>{const y={name:i.name,swimlanes:r,nodes:s,edges:o};return JSON.stringify(y,null,2)},de=()=>{navigator.clipboard.writeText(ie()),alert("JSON copied to clipboard!")},Oe=()=>{try{const y=JSON.parse(J);y.swimlanes&&y.nodes&&y.edges?(d({...i,name:y.name||i.name,swimlanes:y.swimlanes,nodes:y.nodes,edges:y.edges}),alert("Diagram imported successfully!")):alert("Invalid JSON format. Expected swimlanes, nodes and edges arrays.")}catch(y){alert("Error parsing JSON: "+y.message)}},ee=y=>{const L=y.target.files[0];if(!L)return;const $=new FileReader;$.onload=lA=>{SA(lA.target.result)},$.readAsText(L)},Ue=(y,L)=>{const $=vA=>({x:vA.x+vA.width/2,y:vA.y+vA.height/2}),lA=$(y),dA=$(L),EA=dA.x-lA.x,D=dA.y-lA.y;if(Math.abs(EA)>Math.abs(D)){const vA=lA.y;return`M ${lA.x} ${lA.y} L ${dA.x} ${vA} L ${dA.x} ${dA.y}`}else{const vA=lA.x;return`M ${lA.x} ${lA.y} L ${vA} ${dA.y} L ${dA.x} ${dA.y}`}},Ve=(y,L)=>{const $=L*xA,lA=Math.max(1e3,s.reduce((dA,EA)=>Math.max(dA,EA.y+EA.height+150),0));return n.jsxs("g",{children:[n.jsx("rect",{x:$,y:0,width:xA,height:lA,fill:L%2===0?"#ffffff":"#f9fafb",stroke:"#e5e7eb",strokeWidth:"2"}),n.jsx("text",{x:$+xA/2,y:30,textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#1f2937",children:y.name}),n.jsx("line",{x1:$,y1:55,x2:$+xA,y2:55,stroke:"#d1d5db",strokeWidth:"2"})]},y.id)},Ke=y=>{const L=x===y.id,$=RA[y.type];return n.jsxs("g",{className:"node-group",onMouseDown:lA=>QA(lA,y),style:{cursor:_==="select"?"move":"crosshair",pointerEvents:"all"},children:[$.shape==="circle"&&n.jsx("circle",{cx:y.x+y.width/2,cy:y.y+y.height/2,r:y.width/2,fill:$.color,stroke:L?"#3b82f6":"#fff",strokeWidth:L?"3":"2",style:{filter:L?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),$.shape==="doublecircle"&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:y.x+y.width/2,cy:y.y+y.height/2,r:y.width/2,fill:"none",stroke:$.color,strokeWidth:"3",style:{filter:L?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),n.jsx("circle",{cx:y.x+y.width/2,cy:y.y+y.height/2,r:y.width/2-5,fill:$.color,stroke:L?"#3b82f6":"none",strokeWidth:L?"2":"0"})]}),$.shape==="rounded"&&n.jsx("rect",{x:y.x,y:y.y,width:y.width,height:y.height,rx:"12",fill:$.color,stroke:L?"#3b82f6":"#fff",strokeWidth:L?"3":"2",style:{filter:L?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),$.shape==="diamond"&&n.jsx("polygon",{points:`
              ${y.x+y.width/2},${y.y} 
              ${y.x+y.width},${y.y+y.height/2} 
              ${y.x+y.width/2},${y.y+y.height} 
              ${y.x},${y.y+y.height/2}
            `,fill:$.color,stroke:L?"#3b82f6":"#fff",strokeWidth:L?"3":"2",style:{filter:L?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),$.shape==="rectangle"&&n.jsx("rect",{x:y.x,y:y.y,width:y.width,height:y.height,fill:$.color,stroke:L?"#3b82f6":"#6b7280",strokeWidth:L?"3":"2",style:{filter:L?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),y.type!=="fork"&&y.type!=="join"&&y.type!=="initial"&&y.type!=="final"&&n.jsx("text",{x:y.x+y.width/2,y:y.y+y.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"600",children:y.text.length>20?y.text.substring(0,20)+"...":y.text})]},y.id)},Je=y=>{const L=s.find(dA=>dA.id===y.source),$=s.find(dA=>dA.id===y.target);if(!L||!$)return null;const lA=Ue(L,$);return n.jsxs("g",{className:"edge-group",children:[n.jsx("path",{d:lA,stroke:"#6b7280",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowhead)",style:{cursor:"pointer"},onClick:dA=>{dA.stopPropagation(),window.confirm("Delete this connection?")&&IA(y.id)}}),y.label&&n.jsx("text",{x:(L.x+$.x)/2,y:(L.y+$.y)/2-10,fill:"#374151",fontSize:"11",fontWeight:"500",style:{pointerEvents:"none"},children:y.label})]},y.id)},me=Math.max(1e3,s.reduce((y,L)=>Math.max(y,L.y+L.height+150),0)),ue=r.length*xA;return n.jsxs("div",{className:"activity-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Dn,{size:16})," Back"]}),n.jsx("div",{className:"toolbar-left",children:n.jsx("h2",{children:i.name})}),n.jsx("div",{className:"toolbar-center",children:n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:$A,className:"zoom-btn",title:"Zoom Out",children:n.jsx(Mr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(M*100),"%"]}),n.jsx("button",{onClick:YA,className:"zoom-btn",title:"Zoom In",children:n.jsx(kr,{size:16})}),n.jsx("button",{onClick:PA,className:"zoom-btn",title:"Reset Zoom",children:"Reset"})]})}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("button",{onClick:de,className:"export-btn",title:"Copy JSON",children:[n.jsx(Ka,{size:16})," Copy"]}),n.jsxs("button",{onClick:()=>{const y=new Blob([ie()],{type:"application/json"}),L=URL.createObjectURL(y),$=document.createElement("a");$.href=L,$.download=`${i.name.replace(/\s+/g,"-").toLowerCase()}.json`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(L)},className:"export-btn",title:"Download JSON",children:[n.jsx(In,{size:16})," Export"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${cA==="editor"?"active":""}`,onClick:()=>BA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${cA==="json"?"active":""}`,onClick:()=>BA("json"),children:"JSON Editor"})]}),cA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Tools"}),n.jsxs("button",{className:`tool-btn ${_==="select"?"active":""}`,onClick:()=>iA("select"),children:[n.jsx(Tb,{size:16})," Select & Move"]}),n.jsxs("button",{className:`tool-btn ${_==="connection"?"active":""}`,onClick:()=>iA("connection"),children:[n.jsx(cx,{size:16})," Create Connection"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Swimlanes"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:G,onChange:y=>oA(y.target.value),placeholder:"Swimlane name",onKeyPress:y=>y.key==="Enter"&&MA()})}),n.jsxs("button",{onClick:MA,className:"add-btn",children:[n.jsx(Xe,{size:16})," Add Swimlane"]}),n.jsx("div",{className:"list",children:r.map(y=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-info",children:n.jsx("div",{className:"item-name",children:y.name})}),n.jsx("button",{onClick:()=>T(y.id),className:"delete-btn",title:"Delete swimlane",children:n.jsx(Be,{size:14})})]},y.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Add Nodes"}),r.length>0&&n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target Swimlane"}),n.jsx("select",{value:v||r[0]?.id||"",onChange:y=>F(parseInt(y.target.value)),children:r.map(y=>n.jsx("option",{value:y.id,children:y.name},y.id))})]}),n.jsxs("div",{className:"node-buttons",children:[n.jsxs("button",{onClick:()=>I("initial",v||r[0]?.id),title:"Start node",children:[n.jsx(Yb,{size:14})," Initial"]}),n.jsxs("button",{onClick:()=>I("activity",v||r[0]?.id),title:"Activity node",children:[n.jsx(ow,{size:14})," Activity"]}),n.jsxs("button",{onClick:()=>I("decision",v||r[0]?.id),title:"Decision node",children:[n.jsx(cb,{size:14})," Decision"]}),n.jsxs("button",{onClick:()=>I("fork",v||r[0]?.id),title:"Fork node",children:[n.jsx(su,{size:14})," Fork"]}),n.jsxs("button",{onClick:()=>I("join",v||r[0]?.id),title:"Join node",children:[n.jsx(jb,{size:14})," Join"]}),n.jsxs("button",{onClick:()=>I("final",v||r[0]?.id),title:"End node",children:[n.jsx(eb,{size:14})," Final"]})]})]})]}),n.jsx("div",{className:"canvas-wrapper",children:n.jsx("div",{className:"canvas",ref:m,style:{transform:`scale(${M})`,transformOrigin:"top left",width:ue,height:me},children:n.jsxs("svg",{ref:h,width:ue,height:me,style:{background:"#fff"},children:[n.jsx("defs",{children:n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),r.map((y,L)=>Ve(y,L)),o.map(y=>Je(y)),s.map(y=>Ke(y)),pA&&sA&&n.jsx("line",{x1:s.find(y=>y.id===sA)?.x+s.find(y=>y.id===sA)?.width/2,y1:s.find(y=>y.id===sA)?.y+s.find(y=>y.id===sA)?.height/2,x2:_A.x,y2:_A.y,stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})})}),x&&n.jsxs("div",{className:"properties-panel",children:[n.jsx("h3",{children:"Node Properties"}),(()=>{const y=s.find(L=>L.id===x);return y?n.jsxs("div",{className:"property-group",children:[n.jsx("label",{children:"Node ID"}),n.jsx("input",{type:"text",value:y.id,disabled:!0,className:"disabled-input"}),y.type!=="fork"&&y.type!=="join"&&n.jsxs(n.Fragment,{children:[n.jsx("label",{children:"Text Label"}),n.jsx("input",{type:"text",value:y.text,onChange:L=>K(y.id,L.target.value),placeholder:"Enter text"})]}),n.jsx("label",{children:"Node Type"}),n.jsxs("select",{value:y.type,onChange:L=>{const $=s.map(lA=>lA.id===x?{...lA,type:L.target.value,...U(L.target.value,lA.text)}:lA);d({...i,nodes:$})},children:[n.jsx("option",{value:"initial",children:"Initial Node"}),n.jsx("option",{value:"activity",children:"Activity"}),n.jsx("option",{value:"decision",children:"Decision"}),n.jsx("option",{value:"fork",children:"Fork"}),n.jsx("option",{value:"join",children:"Join"}),n.jsx("option",{value:"final",children:"Final Node"})]}),n.jsx("label",{children:"Swimlane"}),n.jsx("select",{value:y.swimlaneId||"",onChange:L=>{const $=parseInt(L.target.value),lA=s.map(dA=>{if(dA.id===x){const EA={...dA,swimlaneId:$};return hA(EA)}return dA});d({...i,nodes:lA})},children:r.map(L=>n.jsx("option",{value:L.id,children:L.name},L.id))}),n.jsx("label",{children:"Position"}),n.jsxs("div",{className:"position-group",children:[n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"X:"}),n.jsx("input",{type:"number",value:Math.round(y.x),onChange:L=>{const $=parseInt(L.target.value)||0,lA=rA(y,$,y.y),dA=s.map(EA=>EA.id===x?{...EA,x:lA.x}:EA);d({...i,nodes:dA})}})]}),n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"Y:"}),n.jsx("input",{type:"number",value:Math.round(y.y),onChange:L=>{const $=parseInt(L.target.value)||0,lA=rA(y,y.x,$),dA=s.map(EA=>EA.id===x?{...EA,y:lA.y}:EA);d({...i,nodes:dA})}})]})]}),n.jsxs("button",{onClick:()=>wA(x),className:"center-btn",children:[n.jsx(ux,{size:14})," Center in Swimlane"]}),n.jsxs("button",{onClick:()=>{window.confirm("Delete this node and all connected edges?")&&q(x)},className:"delete-node-btn",children:[n.jsx(Be,{size:14})," Delete Node"]})]}):null})()]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsxs("div",{className:"json-actions",children:[n.jsxs("button",{onClick:()=>{const y=document.createElement("input");y.type="file",y.accept=".json",y.onchange=ee,y.click()},className:"import-btn",children:[n.jsx(dn,{size:16})," Import JSON File"]}),n.jsxs("button",{onClick:Oe,className:"import-btn apply-btn",children:[n.jsx(ga,{size:16})," Apply Changes"]})]}),n.jsx("textarea",{value:J,onChange:y=>SA(y.target.value),className:"json-textarea",placeholder:"Paste or edit JSON here..."})]}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .activity-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: white;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          gap: 16px;
          flex-shrink: 0;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }

        .back-btn:hover {
          background: #e2e8f0;
        }

        .toolbar-left,
        .toolbar-center,
        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toolbar-left h2 {
          margin: 0;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .toolbar-center {
          flex: 1;
          justify-content: center;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 8px;
          padding: 4px;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
          min-width: 36px;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-level {
          font-size: 13px;
          font-weight: 600;
          padding: 0 10px;
          color: #64748b;
          min-width: 50px;
          text-align: center;
        }
        
        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          background: #3b82f6;
          color: white;
          border: none;
        }
        
        .export-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 14px 28px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          border-bottom: 3px solid transparent;
          font-size: 14px;
          transition: all 0.2s;
        }

        .tab:hover {
          color: #3b82f6;
          background: #f8fafc;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .sidebar {
          width: 300px;
          background: white;
          border-right: 2px solid #e2e8f0;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin: 0 0 16px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .form-group {
          margin-bottom: 14px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 10px 14px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }
        
        .list {
          margin-top: 14px;
          max-height: 220px;
          overflow-y: auto;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .delete-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
          transform: scale(1.1);
        }
        
        .tool-btn {
          width: 100%;
          padding: 12px 14px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          transform: translateX(2px);
        }
        
        .tool-btn.active {
          border-color: #3b82f6;
          background: #dbeafe;
          color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .node-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        
        .node-buttons button {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        
        .node-buttons button:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          color: #3b82f6;
          transform: scale(1.05);
        }
        
        .canvas-wrapper {
          flex: 1;
          background: #f9fafb;
          overflow: auto;
          position: relative;
          min-width: 0;
        }
        
        .canvas {
          transform-origin: top left;
          transition: transform 0.1s ease-out;
        }
        
        .node-group {
          cursor: move;
          transition: filter 0.2s;
        }
        
        .properties-panel {
          width: 300px;
          background: white;
          border-left: 2px solid #e2e8f0;
          padding: 20px;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .properties-panel h3 {
          margin: 0 0 20px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .property-group {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .property-group label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: -8px;
        }
        
        .property-group input,
        .property-group select {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }

        .property-group input.disabled-input {
          background: #f1f5f9;
          color: #94a3b8;
          cursor: not-allowed;
        }
        
        .property-group input:focus,
        .property-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .position-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .position-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .position-item span {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
        }

        .position-item input {
          padding: 8px 10px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
        }

        .center-btn {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .center-btn:hover {
          background: #7c3aed;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);
        }
        
        .delete-node-btn {
          background: #fee2e2;
          color: #ef4444;
          border: 2px solid #fecaca;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .delete-node-btn:hover {
          background: #fecaca;
          border-color: #ef4444;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 20px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }

        .import-btn.apply-btn {
          background: #3b82f6;
        }

        .import-btn.apply-btn:hover {
          background: #2563eb;
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 13px;
          resize: none;
          line-height: 1.6;
          background: #f8fafc;
          color: #1e293b;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .edge-group path {
          transition: stroke 0.2s;
        }

        .edge-group:hover path {
          stroke: #3b82f6;
          stroke-width: 3;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `})]})},DA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class",DOMAIN_MODEL:"domainmodel",MIND_MAP:"mindmap",ACTIVITY:"activity"},Id=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null,domainModels:[],currentDomainModel:null,mindMaps:[],currentMindMap:null,activityDiagrams:[],currentActivityDiagram:null}),uQ=()=>{const i=localStorage.getItem("evolutionChartData");if(!i)return Id();try{const r=JSON.parse(i);return{...Id(),...r}}catch(r){return console.error("Failed to parse localStorage data:",r),Id()}},Oi=i=>{localStorage.setItem("evolutionChartData",JSON.stringify(i))},fQ=()=>{const[,i]=S.useReducer(I=>I+1,0),[r,s]=S.useState(DA.PROJECT),[o,d]=S.useState(""),u=()=>uQ(),h=(I,q,IA={})=>{const K=u(),wA={id:Date.now(),name:q,createdAt:new Date().toISOString(),...IA},YA={...K};switch(YA.currentProject=null,YA.currentFlowchart=null,YA.currentGanttChart=null,YA.currentUseCaseDiagram=null,YA.currentSequenceDiagram=null,YA.currentArchitectureDiagram=null,YA.currentClassDiagram=null,YA.currentDomainModel=null,YA.currentMindMap=null,YA.currentActivityDiagram=null,I){case DA.PROJECT:YA.projects=[...K.projects,wA],YA.currentProject=wA;break;case DA.FLOWCHART:YA.flowcharts=[...K.flowcharts,wA],YA.currentFlowchart=wA;break;case DA.GANTT:YA.ganttCharts=[...K.ganttCharts,wA],YA.currentGanttChart=wA;break;case DA.USE_CASE:YA.useCaseDiagrams=[...K.useCaseDiagrams,wA],YA.currentUseCaseDiagram=wA;break;case DA.SEQUENCE:YA.sequenceDiagrams=[...K.sequenceDiagrams,wA],YA.currentSequenceDiagram=wA;break;case DA.ARCHITECTURE:YA.architectureDiagrams=[...K.architectureDiagrams,wA],YA.currentArchitectureDiagram=wA;break;case DA.CLASS:YA.classDiagrams=[...K.classDiagrams,wA],YA.currentClassDiagram=wA;break;case DA.DOMAIN_MODEL:YA.domainModels=[...K.domainModels,wA],YA.currentDomainModel=wA;break;case DA.MIND_MAP:YA.mindMaps=[...K.mindMaps,wA],YA.currentMindMap=wA;break;case DA.ACTIVITY:YA.activityDiagrams=[...K.activityDiagrams,wA],YA.currentActivityDiagram=wA;break}Oi(YA),i()},m=(I,q)=>{const IA=u(),K={...IA};switch(I){case DA.PROJECT:K.projects=IA.projects.filter(wA=>wA.id!==q),IA.currentProject?.id===q&&(K.currentProject=null);break;case DA.FLOWCHART:K.flowcharts=IA.flowcharts.filter(wA=>wA.id!==q),IA.currentFlowchart?.id===q&&(K.currentFlowchart=null);break;case DA.GANTT:K.ganttCharts=IA.ganttCharts.filter(wA=>wA.id!==q),IA.currentGanttChart?.id===q&&(K.currentGanttChart=null);break;case DA.USE_CASE:K.useCaseDiagrams=IA.useCaseDiagrams.filter(wA=>wA.id!==q),IA.currentUseCaseDiagram?.id===q&&(K.currentUseCaseDiagram=null);break;case DA.SEQUENCE:K.sequenceDiagrams=IA.sequenceDiagrams.filter(wA=>wA.id!==q),IA.currentSequenceDiagram?.id===q&&(K.currentSequenceDiagram=null);break;case DA.ARCHITECTURE:K.architectureDiagrams=IA.architectureDiagrams.filter(wA=>wA.id!==q),IA.currentArchitectureDiagram?.id===q&&(K.currentArchitectureDiagram=null);break;case DA.CLASS:K.classDiagrams=IA.classDiagrams.filter(wA=>wA.id!==q),IA.currentClassDiagram?.id===q&&(K.currentClassDiagram=null);break;case DA.DOMAIN_MODEL:K.domainModels=IA.domainModels.filter(wA=>wA.id!==q),IA.currentDomainModel?.id===q&&(K.currentDomainModel=null);break;case DA.MIND_MAP:K.mindMaps=IA.mindMaps.filter(wA=>wA.id!==q),IA.currentMindMap?.id===q&&(K.currentMindMap=null);break;case DA.ACTIVITY:K.activityDiagrams=IA.activityDiagrams.filter(wA=>wA.id!==q),IA.currentActivityDiagram?.id===q&&(K.currentActivityDiagram=null);break}Oi(K),i()},x=(I,q)=>{const IA=u(),K={...IA};switch(I){case DA.PROJECT:K.projects=IA.projects.map(wA=>wA.id===q.id?q:wA),K.currentProject=q;break;case DA.FLOWCHART:K.flowcharts=IA.flowcharts.map(wA=>wA.id===q.id?q:wA),K.currentFlowchart=q;break;case DA.GANTT:K.ganttCharts=IA.ganttCharts.map(wA=>wA.id===q.id?q:wA),K.currentGanttChart=q;break;case DA.USE_CASE:K.useCaseDiagrams=IA.useCaseDiagrams.map(wA=>wA.id===q.id?q:wA),K.currentUseCaseDiagram=q;break;case DA.SEQUENCE:K.sequenceDiagrams=IA.sequenceDiagrams.map(wA=>wA.id===q.id?q:wA),K.currentSequenceDiagram=q;break;case DA.ARCHITECTURE:K.architectureDiagrams=IA.architectureDiagrams.map(wA=>wA.id===q.id?q:wA),K.currentArchitectureDiagram=q;break;case DA.CLASS:K.classDiagrams=IA.classDiagrams.map(wA=>wA.id===q.id?q:wA),K.currentClassDiagram=q;break;case DA.DOMAIN_MODEL:K.domainModels=IA.domainModels.map(wA=>wA.id===q.id?q:wA),K.currentDomainModel=q;break;case DA.MIND_MAP:K.mindMaps=IA.mindMaps.map(wA=>wA.id===q.id?q:wA),K.currentMindMap=q;break;case DA.ACTIVITY:K.activityDiagrams=IA.activityDiagrams.map(wA=>wA.id===q.id?q:wA),K.currentActivityDiagram=q;break}Oi(K),i()},b=(I,q,IA,K)=>{h(DA.PROJECT,I,{timelineStart:q,timelineEnd:IA,timeUnit:K,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},v=I=>{h(DA.FLOWCHART,I,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},F=I=>{h(DA.GANTT,I,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},M=I=>{h(DA.USE_CASE,I,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},aA=I=>{h(DA.SEQUENCE,I,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},P=I=>{h(DA.ARCHITECTURE,I,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},uA=I=>{h(DA.CLASS,I,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},kA=I=>{h(DA.DOMAIN_MODEL,I,{entities:[],relationships:[],zoom:1,pan:{x:0,y:0}})},CA=I=>{h(DA.MIND_MAP,I,{nodes:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}],zoom:1,pan:{x:0,y:0}})},gA=I=>{h(DA.ACTIVITY,I,{swimlanes:[{id:Date.now(),name:"Default Swimlane",order:0}],nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},TA=I=>m(DA.PROJECT,I),cA=I=>m(DA.FLOWCHART,I),BA=I=>m(DA.GANTT,I),J=I=>m(DA.USE_CASE,I),SA=I=>m(DA.SEQUENCE,I),_=I=>m(DA.ARCHITECTURE,I),iA=I=>m(DA.CLASS,I),pA=I=>m(DA.DOMAIN_MODEL,I),HA=I=>m(DA.MIND_MAP,I),sA=I=>m(DA.ACTIVITY,I),OA=I=>x(DA.PROJECT,I),_A=I=>x(DA.FLOWCHART,I),LA=I=>x(DA.GANTT,I),G=I=>x(DA.USE_CASE,I),oA=I=>x(DA.SEQUENCE,I),xA=I=>x(DA.ARCHITECTURE,I),RA=I=>x(DA.CLASS,I),U=I=>x(DA.DOMAIN_MODEL,I),V=I=>x(DA.MIND_MAP,I),hA=I=>x(DA.ACTIVITY,I),rA=I=>{try{const q=JSON.parse(I);return h(DA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:q.nodes||[],edges:q.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(q){return console.error("Invalid JSON:",q),!1}},UA=()=>{const q={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};Oi(q),i()},MA=(I,q)=>{const K={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};switch(I){case DA.PROJECT:K.currentProject=q;break;case DA.FLOWCHART:K.currentFlowchart=q;break;case DA.GANTT:K.currentGanttChart=q;break;case DA.USE_CASE:K.currentUseCaseDiagram=q;break;case DA.SEQUENCE:K.currentSequenceDiagram=q;break;case DA.ARCHITECTURE:K.currentArchitectureDiagram=q;break;case DA.CLASS:K.currentClassDiagram=q;break;case DA.DOMAIN_MODEL:K.currentDomainModel=q;break;case DA.MIND_MAP:K.currentMindMap=q;break;case DA.ACTIVITY:K.currentActivityDiagram=q;break}Oi(K),i()},T={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px",flexWrap:"wrap"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)",marginBottom:"10px"},tabButtonActive:I=>({background:`linear-gradient(135deg, ${I} 0%, ${I} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${QA(I)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:I=>({background:`rgba(${QA(I)}, 0.1)`,color:I})},QA=I=>{const q=parseInt(I.slice(1,3),16),IA=parseInt(I.slice(3,5),16),K=parseInt(I.slice(5,7),16);return`${q}, ${IA}, ${K}`},FA=()=>[{type:DA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:n.jsx(bw,{projects:u().projects,onCreateProject:b,onLoadProject:I=>MA(DA.PROJECT,I),onDeleteProject:TA})},{type:DA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:n.jsx(yw,{flowcharts:u().flowcharts,onCreateFlowchart:v,onLoadFlowchart:I=>MA(DA.FLOWCHART,I),onDeleteFlowchart:cA,onImportFlowchart:rA})},{type:DA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:n.jsx(Cw,{ganttCharts:u().ganttCharts,onCreateGanttChart:F,onLoadGanttChart:I=>MA(DA.GANTT,I),onDeleteGanttChart:BA})},{type:DA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:n.jsx(q2,{useCaseDiagrams:u().useCaseDiagrams,onCreateUseCaseDiagram:M,onLoadUseCaseDiagram:I=>MA(DA.USE_CASE,I),onDeleteUseCaseDiagram:J})},{type:DA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:n.jsx(AQ,{sequenceDiagrams:u().sequenceDiagrams,onCreateSequenceDiagram:aA,onLoadSequenceDiagram:I=>MA(DA.SEQUENCE,I),onDeleteSequenceDiagram:SA})},{type:DA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:n.jsx(tQ,{architectureDiagrams:u().architectureDiagrams,onCreateArchitectureDiagram:P,onLoadArchitectureDiagram:I=>MA(DA.ARCHITECTURE,I),onDeleteArchitectureDiagram:_})},{type:DA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:n.jsx(aQ,{classDiagrams:u().classDiagrams,onCreateClassDiagram:uA,onLoadClassDiagram:I=>MA(DA.CLASS,I),onDeleteClassDiagram:iA})},{type:DA.DOMAIN_MODEL,label:"🏢 Domain Model",color:"#06b6d4",component:n.jsx(iQ,{domainModels:u().domainModels,onCreateDomainModel:kA,onLoadDomainModel:I=>MA(DA.DOMAIN_MODEL,I),onDeleteDomainModel:pA})},{type:DA.MIND_MAP,label:"🧠 Mind Maps",color:"#10b981",component:n.jsx(sQ,{mindMaps:u().mindMaps,onCreateMindMap:CA,onLoadMindMap:I=>MA(DA.MIND_MAP,I),onDeleteMindMap:HA})},{type:DA.ACTIVITY,label:"⚡ Activity Diagram",color:"#f59e0b",component:n.jsx(cQ,{activityDiagrams:u().activityDiagrams,onCreateActivityDiagram:gA,onLoadActivityDiagram:I=>MA(DA.ACTIVITY,I),onDeleteActivityDiagram:sA})}],fA=u();return n.jsx("div",{style:T.appContainer,children:n.jsx("div",{style:T.mainCard,children:fA.currentProject?n.jsx(ww,{project:fA.currentProject,nodes:fA.currentProject.nodes||[],connections:fA.currentProject.connections||[],onUpdateProject:OA,onBack:UA}):fA.currentFlowchart?n.jsx(vw,{flowchart:fA.currentFlowchart,nodes:fA.currentFlowchart.nodes||[],edges:fA.currentFlowchart.edges||[],jsonInput:o,onJsonInputChange:d,onImportJson:rA,onUpdateFlowchart:_A,onBack:UA}):fA.currentGanttChart?n.jsx(Z2,{ganttChart:fA.currentGanttChart,tasks:fA.currentGanttChart.tasks||[],onUpdateGanttChart:LA,onBack:UA}):fA.currentUseCaseDiagram?n.jsx(P2,{useCaseDiagram:fA.currentUseCaseDiagram,actors:fA.currentUseCaseDiagram.actors||[],useCases:fA.currentUseCaseDiagram.useCases||[],relationships:fA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:G,onBack:UA}):fA.currentSequenceDiagram?n.jsx(eQ,{sequenceDiagram:fA.currentSequenceDiagram,participants:fA.currentSequenceDiagram.participants||[],messages:fA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:oA,onBack:UA}):fA.currentArchitectureDiagram?n.jsx(nQ,{architectureDiagram:fA.currentArchitectureDiagram,components:fA.currentArchitectureDiagram.components||[],connections:fA.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:xA,onBack:UA}):fA.currentClassDiagram?n.jsx(rQ,{classDiagram:fA.currentClassDiagram,classes:fA.currentClassDiagram.classes||[],relationships:fA.currentClassDiagram.relationships||[],onUpdateClassDiagram:RA,onBack:UA}):fA.currentDomainModel?n.jsx(oQ,{domainModel:fA.currentDomainModel,entities:fA.currentDomainModel.entities||[],relationships:fA.currentDomainModel.relationships||[],onUpdateDomainModel:U,onBack:UA}):fA.currentMindMap?n.jsx(lQ,{mindMap:fA.currentMindMap,nodes:fA.currentMindMap.nodes||[],onUpdateMindMap:V,onBack:UA}):fA.currentActivityDiagram?n.jsx(dQ,{activityDiagram:fA.currentActivityDiagram,swimlanes:fA.currentActivityDiagram.swimlanes||[],nodes:fA.currentActivityDiagram.nodes||[],edges:fA.currentActivityDiagram.edges||[],onUpdateActivityDiagram:hA,onBack:UA}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:T.header,children:[n.jsx("h1",{style:T.headerTitle,children:"Visual Designer Suite"}),n.jsx("p",{style:T.headerSubtitle,children:"Create stunning diagrams and charts"})]}),n.jsx("div",{style:T.modeSelector,children:FA().map(I=>n.jsx("button",{onClick:()=>s(I.type),style:{...T.tabButton,...r===I.type?T.tabButtonActive(I.color):{}},onMouseEnter:q=>{r!==I.type&&(q.target.style.background=T.tabButtonHover(I.color).background,q.target.style.color=T.tabButtonHover(I.color).color)},onMouseLeave:q=>{r!==I.type&&(q.target.style.background=T.tabButton.background,q.target.style.color=T.tabButton.color)},children:I.label},I.type))}),FA().find(I=>I.type===r)?.component]})})})};TB.createRoot(document.getElementById("root")).render(n.jsx(S.StrictMode,{children:n.jsx(fQ,{})}));
